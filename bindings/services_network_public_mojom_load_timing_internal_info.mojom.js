// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/load_timing_internal_info.mojom
// Module: network.mojom

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};
var mojo_base = mojo_base || {};

network.mojom.SessionSourceSpec = { $: mojo.internal.Enum() };
network.mojom.AdvertisedAltSvcStateSpec = { $: mojo.internal.Enum() };
network.mojom.LoadTimingInternalInfoSpec = { $: {} };

// Enum: SessionSource
network.mojom.SessionSource = {
  kNew: 0,
  kExisting: 1,
};

// Enum: AdvertisedAltSvcState
network.mojom.AdvertisedAltSvcState = {
  kUnknown: 0,
  kQuicNotBroken: 1,
  kQuicBroken: 2,
};

// Struct: LoadTimingInternalInfo
mojo.internal.Struct(
    network.mojom.LoadTimingInternalInfoSpec, 'network.mojom.LoadTimingInternalInfo', [
      mojo.internal.StructField('create_stream_delay', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connected_callback_delay', 8, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('initialize_stream_delay', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_source', 24, 0, network.mojom.SessionSourceSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('advertised_alt_svc_state', 32, 0, network.mojom.AdvertisedAltSvcStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('http_network_session_quic_enabled', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);
