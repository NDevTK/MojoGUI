// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider_spec.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Struct: InterfaceSet
service_manager.mojom.InterfaceSetSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.InterfaceSet',
      packedSize: 16,
      fields: [
        { name: 'interfaces', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CapabilitySet
service_manager.mojom.CapabilitySetSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.CapabilitySet',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InterfaceProviderSpec
service_manager.mojom.InterfaceProviderSpecSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.InterfaceProviderSpec',
      packedSize: 24,
      fields: [
        { name: 'provides', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'needs', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
