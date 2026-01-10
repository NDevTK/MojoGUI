// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/conversions/conversions.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Struct: Impression
blink.mojom.mojom.ImpressionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Impression',
      packedSize: 24,
      fields: [
        { name: 'attribution_src_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AttributionSrcTokenSpec, nullable: false, minVersion: 0 },
        { name: 'is_empty_attribution_src_tag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: AttributionHost
blink.mojom.mojom.AttributionHost = {};

blink.mojom.mojom.AttributionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AttributionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AttributionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AttributionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AttributionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AttributionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerDataHost(data_host, registration_eligibility, is_for_background_requests, reporting_origins) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AttributionHost_RegisterDataHost_ParamsSpec,
      null,
      [data_host, registration_eligibility, is_for_background_requests, reporting_origins]);
  }

  registerNavigationDataHost(data_host, attribution_src_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec,
      null,
      [data_host, attribution_src_token]);
  }

  notifyNavigationWithBackgroundRegistrationsWillStart(attribution_src_token, expected_registrations) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec,
      null,
      [attribution_src_token, expected_registrations]);
  }

};

blink.mojom.mojom.AttributionHost.getRemote = function() {
  let remote = new blink.mojom.mojom.AttributionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AttributionHost',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterDataHost
blink.mojom.mojom.AttributionHost_RegisterDataHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionHost.RegisterDataHost_Params',
      packedSize: 32,
      fields: [
        { name: 'data_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(attribution_reporting.mojom.DataHostRemote), nullable: false, minVersion: 0 },
        { name: 'registration_eligibility', packedOffset: 16, packedBitOffset: 0, type: attribution_reporting.mojom.RegistrationEligibilitySpec, nullable: false, minVersion: 0 },
        { name: 'is_for_background_requests', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'reporting_origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RegisterNavigationDataHost
blink.mojom.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionHost.RegisterNavigationDataHost_Params',
      packedSize: 24,
      fields: [
        { name: 'data_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(attribution_reporting.mojom.DataHostRemote), nullable: false, minVersion: 0 },
        { name: 'attribution_src_token', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AttributionSrcTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for NotifyNavigationWithBackgroundRegistrationsWillStart
blink.mojom.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionHost.NotifyNavigationWithBackgroundRegistrationsWillStart_Params',
      packedSize: 24,
      fields: [
        { name: 'attribution_src_token', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AttributionSrcTokenSpec, nullable: false, minVersion: 0 },
        { name: 'expected_registrations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AttributionHostPtr = blink.mojom.mojom.AttributionHostRemote;
blink.mojom.mojom.AttributionHostRequest = blink.mojom.mojom.AttributionHostPendingReceiver;

