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
      // Add other potential roots if they exist (sometimes bindings are slightly elsewhere)
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
        let found = true;
        for (const part of parts) {
          if (current[part]) {
            current = current[part];
          } else {
            // Try alternative: some modules use underscore instead of dots in the JS object
            // e.g. "mojo.base" -> "mojo_base"
            const joined = parts.join("_");
            if (root[joined]) {
              current = root[joined];
              break;
            }
            found = false;
            break;
          }
        }
        if (found && current !== root) return current;
      }

      // Deep search fallback for common modules
      const lastPart = parts[parts.length - 1];
      for (const root of roots) {
        for (const key in root) {
          if (key === lastPart || key === moduleName.replace(/\./g, "_")) {
            return root[key];
          }
          // One level deeper search
          if (typeof root[key] === "object" && root[key] !== null) {
            if (root[key][lastPart]) return root[key][lastPart];
          }
        }
      }

      return null;
    },

    /**
     * Finds a method definition (params/response) for an interface
     */
    findMethodDefinition(interfaceName, methodName) {
      const iface = MojoLoader._interfaces.find(
        (i) =>
          i.name === interfaceName || i.module + "." + i.name === interfaceName,
      );
      if (!iface || !iface.module) return null;

      const namespace = this.resolveNamespace(iface.module);
      if (!namespace) return null;

      const simpleName = iface.name.split(".").pop();
      const pascalMethod =
        methodName.charAt(0).toUpperCase() + methodName.slice(1);

      const findSpec = (suffix) => {
        return (
          namespace[`${simpleName}_${methodName}_${suffix}`] ||
          namespace[`${simpleName}_${pascalMethod}_${suffix}`]
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
        let type = this.inferType(f.type);
        console.log(`[ReflectionService] Mapping field ${f.name}, type inferred: ${type}`, f);
        let structSpec = null;
        let elementSpec = null;
        let mapSpec = null;
        let enumOptions = null;

        const spec = f.type.$ || f.type;
        if (type === "struct" || type === "union" || type === "bigstring" || type === "bigstring16" || type === "string16") {
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
        } else if (type === "enum" && namespace) {
          // Try to find enum values
          // If spec is 'MyEnumSpec', the values are in 'MyEnum'
          for (const key in namespace) {
            if (namespace[key + "Spec"] === f.type) {
              enumOptions = namespace[key];
              break;
            }
          }
        }

        return {
          name: f.name,
          type: enumOptions ? { type: "enum", options: enumOptions } : type,
          structSpec,
          elementSpec,
          mapSpec,
          optional: !!f.nullable,
          defaultValue: f.defaultValue,
        };
      });
    },

    inferType(mojomType) {
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

      const spec = mojomType.$ || mojomType;

      // Check for Enum
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

      if (spec.structSpec) return "struct";
      if (spec.unionSpec) return "union";

      if (mojomType.elementType || spec.elementType || spec.arraySpec)
        return "array";
      if (mojomType.keyType || spec.keyType || spec.mapSpec) return "map";

      if (spec.decode && (
          spec.decode.toString().includes("decodeHandle") || 
          spec.decode.toString().includes("decodeInterfaceProxy") ||
          spec.decode.toString().includes("decodeInterfaceRequest") ||
          spec.decode.toString().includes("decodeAssociatedInterfaceProxy") ||
          spec.decode.toString().includes("decodeAssociatedInterfaceRequest")
      )) {
        return "mojo_handle";
      }

      return "any";
    },
  };

  global.MojoReflectionService = MojoReflectionService;
})(this);
