// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/interface_provider_spec.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};

service_manager.mojom.InterfaceSetSpec = { $: {} };
service_manager.mojom.CapabilitySetSpec = { $: {} };
service_manager.mojom.InterfaceProviderSpecSpec = { $: {} };

service_manager.mojom.kServiceManager_ConnectorSpec = "service_manager:connector";

// Struct: InterfaceSet
mojo.internal.Struct(
    service_manager.mojom.InterfaceSetSpec, 'service_manager.mojom.InterfaceSet', [
      mojo.internal.StructField('interfaces', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CapabilitySet
mojo.internal.Struct(
    service_manager.mojom.CapabilitySetSpec, 'service_manager.mojom.CapabilitySet', [
      mojo.internal.StructField('capabilities', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InterfaceProviderSpec
mojo.internal.Struct(
    service_manager.mojom.InterfaceProviderSpecSpec, 'service_manager.mojom.InterfaceProviderSpec', [
      mojo.internal.StructField('provides', 0, 0, mojo.internal.Map(mojo.internal.String, service_manager.mojom.InterfaceSetSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('needs', 8, 0, mojo.internal.Map(mojo.internal.String, service_manager.mojom.CapabilitySetSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
