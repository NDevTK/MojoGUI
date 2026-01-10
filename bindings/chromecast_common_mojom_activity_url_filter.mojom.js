// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_url_filter.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.ActivityUrlFilterCriteriaSpec = { $: {} };
chromecast.mojom.ActivityUrlFilterConfiguration = {};
chromecast.mojom.ActivityUrlFilterConfiguration.$interfaceName = 'chromecast.mojom.ActivityUrlFilterConfiguration';
chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec = { $: {} };

// Struct: ActivityUrlFilterCriteria
mojo.internal.Struct(
    chromecast.mojom.ActivityUrlFilterCriteriaSpec, 'chromecast.mojom.ActivityUrlFilterCriteria', [
      mojo.internal.StructField('criteria', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ActivityUrlFilterConfiguration
mojo.internal.Struct(
    chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec, 'chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_Params', [
      mojo.internal.StructField('filter', 0, 0, chromecast.mojom.ActivityUrlFilterCriteriaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ActivityUrlFilterConfigurationRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ActivityUrlFilterConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ActivityUrlFilterConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.ActivityUrlFilterConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFilter(filter) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec,
      null,
      [filter],
      false);
  }

};

chromecast.mojom.ActivityUrlFilterConfiguration.getRemote = function() {
  let remote = new chromecast.mojom.ActivityUrlFilterConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ActivityUrlFilterConfiguration',
    'context');
  return remote.$;
};

chromecast.mojom.ActivityUrlFilterConfigurationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetFilter
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFilter (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStructInline(chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setFilter');
          const result = this.impl.setFilter(params.filter);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.ActivityUrlFilterConfigurationReceiver = chromecast.mojom.ActivityUrlFilterConfigurationReceiver;

chromecast.mojom.ActivityUrlFilterConfigurationPtr = chromecast.mojom.ActivityUrlFilterConfigurationRemote;
chromecast.mojom.ActivityUrlFilterConfigurationRequest = chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver;

