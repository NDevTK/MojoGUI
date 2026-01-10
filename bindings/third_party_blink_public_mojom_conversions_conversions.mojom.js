// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/conversions/conversions.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var attribution_reporting = attribution_reporting || {};
var network = network || {};
var url = url || {};

blink.mojom.ImpressionSpec = { $: {} };
blink.mojom.AttributionHost = {};
blink.mojom.AttributionHost.$interfaceName = 'blink.mojom.AttributionHost';
blink.mojom.AttributionHost_RegisterDataHost_ParamsSpec = { $: {} };
blink.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec = { $: {} };
blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec = { $: {} };

// Struct: Impression
mojo.internal.Struct(
    blink.mojom.ImpressionSpec, 'blink.mojom.Impression', [
      mojo.internal.StructField('attribution_src_token', 0, 0, blink.mojom.AttributionSrcTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_empty_attribution_src_tag', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AttributionHost
mojo.internal.Struct(
    blink.mojom.AttributionHost_RegisterDataHost_ParamsSpec, 'blink.mojom.AttributionHost_RegisterDataHost_Params', [
      mojo.internal.StructField('data_host', 0, 0, mojo.internal.InterfaceRequest(attribution_reporting.mojom.DataHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('registration_eligibility', 8, 0, attribution_reporting.mojom.RegistrationEligibilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reporting_origins', 16, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('is_for_background_requests', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec, 'blink.mojom.AttributionHost_RegisterNavigationDataHost_Params', [
      mojo.internal.StructField('data_host', 0, 0, mojo.internal.InterfaceRequest(attribution_reporting.mojom.DataHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('attribution_src_token', 8, 0, blink.mojom.AttributionSrcTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec, 'blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_Params', [
      mojo.internal.StructField('attribution_src_token', 0, 0, blink.mojom.AttributionSrcTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('expected_registrations', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [data_host, registration_eligibility, is_for_background_requests, reporting_origins],
      false);
  }

  registerNavigationDataHost(data_host, attribution_src_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec,
      null,
      [data_host, attribution_src_token],
      false);
  }

  notifyNavigationWithBackgroundRegistrationsWillStart(attribution_src_token, expected_registrations) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec,
      null,
      [attribution_src_token, expected_registrations],
      false);
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

blink.mojom.AttributionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: RegisterDataHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AttributionHost_RegisterDataHost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterDataHost (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: RegisterNavigationDataHost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterNavigationDataHost (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyNavigationWithBackgroundRegistrationsWillStart
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyNavigationWithBackgroundRegistrationsWillStart (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AttributionHost_RegisterDataHost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerDataHost');
          const result = this.impl.registerDataHost(params.data_host, params.registration_eligibility, params.is_for_background_requests, params.reporting_origins);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AttributionHost_RegisterNavigationDataHost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.registerNavigationDataHost');
          const result = this.impl.registerNavigationDataHost(params.data_host, params.attribution_src_token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AttributionHost_NotifyNavigationWithBackgroundRegistrationsWillStart_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyNavigationWithBackgroundRegistrationsWillStart');
          const result = this.impl.notifyNavigationWithBackgroundRegistrationsWillStart(params.attribution_src_token, params.expected_registrations);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AttributionHostReceiver = blink.mojom.AttributionHostReceiver;

blink.mojom.AttributionHostPtr = blink.mojom.AttributionHostRemote;
blink.mojom.AttributionHostRequest = blink.mojom.AttributionHostPendingReceiver;

