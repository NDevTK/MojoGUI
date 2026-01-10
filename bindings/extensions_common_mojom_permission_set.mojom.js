// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/permission_set.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.APIPermissionSpec = { $: {} };
extensions.mojom.APIPermissionSetSpec = { $: {} };
extensions.mojom.ManifestPermissionSpec = { $: {} };
extensions.mojom.ManifestPermissionSetSpec = { $: {} };
extensions.mojom.PermissionSetSpec = { $: {} };

// Struct: APIPermission
mojo.internal.Struct(
    extensions.mojom.APIPermissionSpec, 'extensions.mojom.APIPermission', [
      mojo.internal.StructField('id', 16, 0, extensions.mojom.APIPermissionIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ValueSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: APIPermissionSet
mojo.internal.Struct(
    extensions.mojom.APIPermissionSetSpec, 'extensions.mojom.APIPermissionSet', [
      mojo.internal.StructField('permission_map', 0, 0, mojo.internal.Map(extensions.mojom.APIPermissionIDSpec, extensions.mojom.APIPermissionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestPermission
mojo.internal.Struct(
    extensions.mojom.ManifestPermissionSpec, 'extensions.mojom.ManifestPermission', [
      mojo.internal.StructField('id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ValueSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManifestPermissionSet
mojo.internal.Struct(
    extensions.mojom.ManifestPermissionSetSpec, 'extensions.mojom.ManifestPermissionSet', [
      mojo.internal.StructField('permission_map', 0, 0, mojo.internal.Map(mojo.internal.String, extensions.mojom.ManifestPermissionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PermissionSet
mojo.internal.Struct(
    extensions.mojom.PermissionSetSpec, 'extensions.mojom.PermissionSet', [
      mojo.internal.StructField('apis', 0, 0, extensions.mojom.APIPermissionSetSpec, null, false, 0, undefined),
      mojo.internal.StructField('manifest_permissions', 8, 0, extensions.mojom.ManifestPermissionSetSpec, null, false, 0, undefined),
      mojo.internal.StructField('hosts', 16, 0, extensions.mojom.URLPatternSetSpec, null, false, 0, undefined),
      mojo.internal.StructField('user_script_hosts', 24, 0, extensions.mojom.URLPatternSetSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);
