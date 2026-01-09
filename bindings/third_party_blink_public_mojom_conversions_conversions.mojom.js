// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/conversions/conversions.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AttributionHost
blink.mojom.AttributionHost = {};

blink.mojom.AttributionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AttributionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AttributionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AttributionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.AttributionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AttributionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerDataHost(data_host, registration_eligibility, is_for_background_requests, reporting_origins) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AttributionHost_RegisterDataHost_ParamsSpec,
      null,
      [data_host, registration_eligibility, is_for_background_requests, reporting_origins]);
  }

  registerNavigationDataHost(data_host, attribution_src_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec,
      null,
      [data_host, attribution_src_token]);
  }

  notifyNavigationWithBackgroundRegistrationsWillStart(attribution_src_token, expected_registrations) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec,
      null,
      [attribution_src_token, expected_registrations]);
  }

};

blink.mojom.AttributionHost.getRemote = function() {
  let remote = new blink.mojom.AttributionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AttributionHost',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterDataHost
blink.mojom.AttributionHost_RegisterDataHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionHost.RegisterDataHost_Params',
      packedSize: 40,
      fields: [
        { name: 'data_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'registration_eligibility', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_for_background_requests', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'reporting_origins', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterNavigationDataHost
blink.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionHost.RegisterNavigationDataHost_Params',
      packedSize: 24,
      fields: [
        { name: 'data_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'attribution_src_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyNavigationWithBackgroundRegistrationsWillStart
blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionHost.NotifyNavigationWithBackgroundRegistrationsWillStart_Params',
      packedSize: 24,
      fields: [
        { name: 'attribution_src_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'expected_registrations', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AttributionHostPtr = blink.mojom.AttributionHostRemote;
blink.mojom.AttributionHostRequest = blink.mojom.AttributionHostPendingReceiver;

