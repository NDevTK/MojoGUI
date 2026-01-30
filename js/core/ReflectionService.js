/**
 * MojoReflectionService
 * Introspects Mojo bindings and resolves types/methods.
 */
(function (global) {
  "use strict";

  const MojoReflectionService = {
    /**
     * Resolves a namespace object from a string path (e.g. 'blink.mojom')
     */
    resolveNamespace(moduleName) {
      if (
        typeof mojo === "undefined" ||
        !mojo.internal ||
        !mojo.internal.bindings
      )
        return null;

      const roots = [mojo.internal.bindings];
      // Add other potential roots if they exist
      if (
        global.mojo &&
        global.mojo.internal &&
        global.mojo.internal.bindings
      ) {
        if (!roots.includes(global.mojo.internal.bindings))
          roots.push(global.mojo.internal.bindings);
      }

      const parts = moduleName.split(".");

      for (const root of roots) {
        let current = root;
        let foundPath = true;
        for (const part of parts) {
          if (current[part]) {
            current = current[part];
          } else {
            foundPath = false;
            break;
          }
        }
        if (foundPath && current !== root) return current;

        // Try underscore-joined alternative at the root level only if direct path failed
        // e.g. "mojo.base" -> root["mojo_base"]
        const joined = moduleName.replace(/\./g, "_");
        if (root[joined]) return root[joined];
      }

      // Deep search fallback: Only use as last resort for known patterns
      const lastPart = parts[parts.length - 1];
      if (lastPart !== "mojom") {
        // Avoid matching generic 'mojom' properties
        for (const root of roots) {
          for (const key in root) {
            if (key === lastPart) return root[key];
            if (typeof root[key] === "object" && root[key] !== null) {
              if (root[key][lastPart]) return root[key][lastPart];
            }
          }
        }
      }

      return null;
    },

    findEnumInBindings(targetSpec) {
      if (!targetSpec) return null;

      // Helper to recursively search for the spec
      const search = (obj, depth = 0) => {
        if (depth > 10 || !obj || typeof obj !== "object") return null;

        for (const key in obj) {
          const value = obj[key];

          // Check if this value is the target spec
          if (
            value === targetSpec ||
            (value?.$ && targetSpec?.$ && value.$ === targetSpec.$)
          ) {
            // Found the spec! Now look for the options (sibling without "Spec" suffix)
            // Assumption: EnumSpec key ends in "Spec"
            if (key.endsWith("Spec")) {
              const baseName = key.substring(0, key.length - 4);
              if (obj[baseName]) {
                console.log(
                  `[ReflectionService] Found enum options via deep search: ${key} -> ${baseName}`,
                );
                return obj[baseName];
              }
            }
            // Fallback: search for any sibling that looks like an enum definition
            // This is heuristic-based if strict naming isn't followed
            for (const siblingKey in obj) {
              if (
                siblingKey !== key &&
                obj[siblingKey] &&
                typeof obj[siblingKey] === "object"
              ) {
                // Heuristic: Enum definitions usually have numeric values (except maybe 'MIN_VALUE', etc)
                // A simple check might not be enough, but strict naming is the standard.
              }
            }
          }

          // Recurse strictly into standard namespaces
          // Avoid recursing into the spec objects themselves (which might have `$` prop)
          if (
            value &&
            typeof value === "object" &&
            !value.$ &&
            !Array.isArray(value)
          ) {
            const result = search(value, depth + 1);
            if (result) return result;
          }
        }
        return null;
      };

      // Search primarily in mojo.internal.bindings
      if (
        typeof mojo !== "undefined" &&
        mojo.internal &&
        mojo.internal.bindings
      ) {
        return search(mojo.internal.bindings);
      }
      return null;
    },

    /**
     * Finds a method definition (params/response) for an interface
     */
    findMethodDefinition(interfaceName, methodName) {
      // Prioritize FQN match to avoid ambiguity
      let iface = MojoLoader._interfaces.find(
        (i) => i.module + "." + i.name === interfaceName,
      );

      // Fallback to simple name match
      if (!iface) {
        iface = MojoLoader._interfaces.find((i) => i.name === interfaceName);
      }

      if (!iface || !iface.module) return null;

      const namespace = this.resolveNamespace(iface.module);
      if (!namespace) {
        console.warn(
          `[ReflectionService] Could not resolve namespace for module: ${iface.module}`,
        );
        return null;
      }

      const simpleName = iface.name.split(".").pop();
      const pascalMethod =
        methodName.charAt(0).toUpperCase() + methodName.slice(1);

      const findSpec = (suffix) => {
        return (
          namespace[`${simpleName}_${methodName}_${suffix}`] ||
          namespace[`${simpleName}_${pascalMethod}_${suffix}`] ||
          namespace[`${methodName}_${suffix}`] // Fallback for some non-standard naming
        );
      };

      const paramsSpec = findSpec("ParamsSpec");
      const responseSpec = findSpec("ResponseParamsSpec");

      return {
        name: methodName,
        parameters: paramsSpec
          ? this.mapFieldsToParams(paramsSpec.$?.structSpec?.fields, namespace)
          : [],
        responseParams: responseSpec
          ? this.mapFieldsToParams(
              responseSpec.$?.structSpec?.fields,
              namespace,
            )
          : [],
      };
    },

    mapFieldsToParams(fields, namespace = null) {
      if (!fields) return [];
      let fieldsArray = Array.isArray(fields)
        ? fields
        : Object.entries(fields)
            .map(([k, v]) => ({ name: k, ...v }))
            .sort((a, b) => (a.ordinal || 0) - (b.ordinal || 0));

      return fieldsArray.map((f) => {
        let type = this.inferType(f.type, f.name);
        console.log(
          `[ReflectionService] Mapping field ${f.name}, type inferred: ${type}`,
          f,
        );
        let structSpec = null;
        let elementSpec = null;
        let mapSpec = null;
        let enumOptions = null;

        const spec = f.type.$ || f.type;
        if (
          type === "struct" ||
          type === "union" ||
          type === "bigstring" ||
          type === "bigstring16" ||
          type === "string16" ||
          type === "filepath"
        ) {
          structSpec = spec.structSpec || spec.unionSpec;
        } else if (type === "array") {
          elementSpec =
            f.type.elementType ||
            f.type.$?.elementType ||
            f.type.$?.arraySpec?.elementType;
        } else if (type === "map") {
          const source = f.type.keyType
            ? f.type
            : f.type.$?.mapSpec || f.type.$;
          mapSpec = { key: source.keyType, value: source.valueType };
        } else if (type === "enum") {
          // Attempt to resolve namespace if missing
          if (!namespace && structSpec && structSpec.name) {
            const moduleName = structSpec.name.substring(
              0,
              structSpec.name.lastIndexOf("."),
            );
            namespace = this.resolveNamespace(moduleName);
            console.log(
              `[ReflectionService] Inferred namespace ${moduleName} for enum lookup`,
            );
          }

          if (namespace) {
            // Try to find enum values
            // If spec is 'MyEnumSpec', the values are in 'MyEnum'
            for (const key in namespace) {
              const spec = namespace[key + "Spec"];

              // Check identity or structural similarity ($)
              const isMatch =
                spec === f.type ||
                (spec?.$ && f.type?.$ && spec.$ === f.type.$);

              if (isMatch) {
                enumOptions = namespace[key];
                console.log(
                  `[ReflectionService] Resolved enum options for field ${f.name} via ${key}`,
                );
                break;
              }
            }

            // Fallback: Name-based lookup if spec says it's an Enum
            if (!enumOptions) {
              const innerSpec = f.type.$ || f.type;
              const enumName = innerSpec.name || innerSpec.enumSpec?.name;
              if (enumName) {
                const simpleName = enumName.split(".").pop();
                if (namespace[simpleName]) {
                  enumOptions = namespace[simpleName];
                  console.log(
                    `[ReflectionService] Resolved enum options for field ${f.name} via name fallback: ${simpleName}`,
                  );
                }
              }
            }
          }

          // Last resort: deep search for the spec in bindings
          if (!enumOptions) {
            enumOptions = this.findEnumInBindings(f.type);
          }
        }

        let interfaceName = null;
        if (
          type === "pending_remote" ||
          type === "pending_receiver" ||
          type === "pending_associated_remote" ||
          type === "pending_associated_receiver"
        ) {
          const spec = f.type.$ || f.type;
          interfaceName =
            spec.name ||
            spec.remoteClass?.name ||
            spec.receiverClass?.name ||
            spec.type?.$interfaceName ||
            spec.type?.name ||
            (f.type.name && !f.type.name.includes("_Spec")
              ? f.type.name
              : null);

          // If it's a template function like InterfaceRequest(Spec), the name might be on the spec
          if (!interfaceName && f.type.name === "" && f.type.$) {
            interfaceName = f.type.$.name;
          }
        }

        return {
          name: f.name,
          type: enumOptions ? { type: "enum", options: enumOptions } : type,
          interface: interfaceName,
          rawType: f.type,
          structSpec,
          elementSpec,
          mapSpec,
          optional: !!f.nullable,
          defaultValue: f.defaultValue,
        };
      });
    },

    inferType(mojomType, fieldName = "") {
      if (!mojomType) return "any";
      const mojoLib = typeof mojo !== "undefined" ? mojo : null;

      if (mojoLib && mojoLib.internal) {
        if (mojomType === mojoLib.internal.String) return "string";
        if (mojomType === mojoLib.internal.Bool) return "bool";
        if (
          mojomType === mojoLib.internal.Int64 ||
          mojomType === mojoLib.internal.Uint64
        )
          return "int64";
        if (
          [
            mojoLib.internal.Int8,
            mojoLib.internal.Int16,
            mojoLib.internal.Int32,
            mojoLib.internal.Uint8,
            mojoLib.internal.Uint16,
            mojoLib.internal.Uint32,
            mojoLib.internal.Float,
            mojoLib.internal.Double,
          ].includes(mojomType)
        )
          return "number";
      }

      // Unwrap spec if passed a wrapper (common in array elements)
      const spec = mojomType?.$ || mojomType;
      if (!spec) return "unknown";

      if (
        spec.enumSpec ||
        (spec.isValueType &&
          !spec.structSpec &&
          !spec.unionSpec &&
          !spec.arraySpec &&
          !spec.mapSpec &&
          !spec.elementType &&
          !spec.keyType)
      ) {
        return "enum";
      }

      const name = spec.name || spec.structSpec?.name || "";

      if (name.includes("BigString16")) return "bigstring16";
      if (name.includes("String16")) return "string16";
      if (name.includes("BigString")) return "bigstring";
      if (name.includes("Url")) return "Url";
      if (name.includes("FilePath")) return "filepath";

      if (spec.structSpec) return "struct";
      if (spec.unionSpec) return "union";

      if (mojomType.elementType || spec.elementType || spec.arraySpec)
        return "array";
      if (mojomType.keyType || spec.keyType || spec.mapSpec) return "map";

      if (spec.decode) {
        const decStr = spec.decode.toString();
        if (
          decStr.includes("decodeInterfaceProxy") ||
          decStr.includes("PendingRemote")
        )
          return "pending_remote";
        if (
          decStr.includes("decodeInterfaceRequest") ||
          decStr.includes("PendingReceiver")
        )
          return "pending_receiver";
        if (
          decStr.includes("decodeAssociatedInterfaceProxy") ||
          decStr.includes("PendingAssociatedRemote")
        )
          return "pending_associated_remote";
        if (
          decStr.includes("decodeAssociatedInterfaceRequest") ||
          decStr.includes("PendingAssociatedReceiver")
        )
          return "pending_associated_receiver";
        if (
          decStr.includes("decodeHandle") ||
          decStr.includes("ScopedHandle")
        ) {
          // Heuristic for platform handles (often used for FDs)
          if (
            fieldName === "fd" ||
            fieldName.endsWith("_fd") ||
            decStr.includes("PLATFORM_HANDLE")
          ) {
            return "handle<platform>";
          }
          return "mojo_handle";
        }
      }

      return "any";
    },
  };

  global.MojoReflectionService = MojoReflectionService;
})(this);
