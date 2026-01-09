// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/permission_set.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Struct: APIPermission
extensions.mojom.APIPermissionSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.APIPermission',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.APIPermissionIDSpec, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: APIPermissionSet
extensions.mojom.APIPermissionSetSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.APIPermissionSet',
      packedSize: 16,
      fields: [
        { name: 'permission_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestPermission
extensions.mojom.ManifestPermissionSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ManifestPermission',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestPermissionSet
extensions.mojom.ManifestPermissionSetSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.ManifestPermissionSet',
      packedSize: 16,
      fields: [
        { name: 'permission_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PermissionSet
extensions.mojom.PermissionSetSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.PermissionSet',
      packedSize: 40,
      fields: [
        { name: 'apis', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.APIPermissionSetSpec, nullable: false },
        { name: 'manifest_permissions', packedOffset: 8, packedBitOffset: 0, type: extensions.mojom.ManifestPermissionSetSpec, nullable: false },
        { name: 'hosts', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false },
        { name: 'user_script_hosts', packedOffset: 24, packedBitOffset: 0, type: extensions.mojom.URLPatternSetSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
