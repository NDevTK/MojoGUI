// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider_spec.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


service_manager.mojom.mojom.kServiceManager_ConnectorSpec = "service_manager:connector";

// Struct: InterfaceSet
service_manager.mojom.mojom.InterfaceSetSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.InterfaceSet',
      packedSize: 16,
      fields: [
        { name: 'interfaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CapabilitySet
service_manager.mojom.mojom.CapabilitySetSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.CapabilitySet',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: InterfaceProviderSpec
service_manager.mojom.mojom.InterfaceProviderSpecSpec = {
  $: {
    structSpec: {
      name: 'service_manager.mojom.InterfaceProviderSpec',
      packedSize: 24,
      fields: [
        { name: 'provides', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, service_manager.mojom.InterfaceSetSpec, false), nullable: false, minVersion: 0 },
        { name: 'needs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, service_manager.mojom.CapabilitySetSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
