// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_filter.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Struct: ServiceFilter
service_manager.mojom.ServiceFilterSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.ServiceFilter',
      packedSize: 40,
      fields: [
        { name: 'service_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'instance_group', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true },
        { name: 'instance_id', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true },
        { name: 'globally_unique_id', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TokenSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};
