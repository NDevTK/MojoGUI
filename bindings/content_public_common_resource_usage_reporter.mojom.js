// Auto-generated MojoJS binding
// Source: chromium_src/content/public/common/resource_usage_reporter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.ResourceTypeStatSpec = { $: {} };
content.mojom.ResourceTypeStatsSpec = { $: {} };
content.mojom.ResourceUsageDataSpec = { $: {} };
content.mojom.ResourceUsageReporter = {};
content.mojom.ResourceUsageReporter.$interfaceName = 'content.mojom.ResourceUsageReporter';
content.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec = { $: {} };
content.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec = { $: {} };

// Struct: ResourceTypeStat
mojo.internal.Struct(
    content.mojom.ResourceTypeStatSpec, 'content.mojom.ResourceTypeStat', [
      mojo.internal.StructField('count', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('size', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('live_size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('decoded_size', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ResourceTypeStats
mojo.internal.Struct(
    content.mojom.ResourceTypeStatsSpec, 'content.mojom.ResourceTypeStats', [
      mojo.internal.StructField('images', 0, 0, content.mojom.ResourceTypeStatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('css_style_sheets', 8, 0, content.mojom.ResourceTypeStatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scripts', 16, 0, content.mojom.ResourceTypeStatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('xsl_style_sheets', 24, 0, content.mojom.ResourceTypeStatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('fonts', 32, 0, content.mojom.ResourceTypeStatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('other', 40, 0, content.mojom.ResourceTypeStatSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ResourceUsageData
mojo.internal.Struct(
    content.mojom.ResourceUsageDataSpec, 'content.mojom.ResourceUsageData', [
      mojo.internal.StructField('v8_bytes_allocated', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('v8_bytes_used', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('web_cache_stats', 16, 0, content.mojom.ResourceTypeStatsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reports_v8_stats', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: ResourceUsageReporter
mojo.internal.Struct(
    content.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec, 'content.mojom.ResourceUsageReporter_GetUsageData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec, 'content.mojom.ResourceUsageReporter_GetUsageData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, content.mojom.ResourceUsageDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.ResourceUsageReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.ResourceUsageReporterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.ResourceUsageReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.ResourceUsageReporterPendingReceiver,
      handle);
    this.$ = new content.mojom.ResourceUsageReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.ResourceUsageReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getUsageData() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec,
      content.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.ResourceUsageReporter.getRemote = function() {
  let remote = new content.mojom.ResourceUsageReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.ResourceUsageReporter',
    'context');
  return remote.$;
};

content.mojom.ResourceUsageReporterReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetUsageData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUsageData (0)');
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
          const params = decoder.decodeStruct(content.mojom.ResourceUsageReporter_GetUsageData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getUsageData');
          const result = this.impl.getUsageData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.ResourceUsageReporter_GetUsageData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.ResourceUsageReporterReceiver = content.mojom.ResourceUsageReporterReceiver;

content.mojom.ResourceUsageReporterPtr = content.mojom.ResourceUsageReporterRemote;
content.mojom.ResourceUsageReporterRequest = content.mojom.ResourceUsageReporterPendingReceiver;

