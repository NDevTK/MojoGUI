// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_filter.mojom
// Module: service_manager.mojom

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};
var mojo_base = mojo_base || {};

service_manager.mojom.ServiceFilterSpec = { $: {} };

// Struct: ServiceFilter
mojo.internal.Struct(
    service_manager.mojom.ServiceFilterSpec, 'service_manager.mojom.ServiceFilter', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('instance_group', 8, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('instance_id', 16, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('globally_unique_id', 24, 0, mojo_base.mojom.TokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);
