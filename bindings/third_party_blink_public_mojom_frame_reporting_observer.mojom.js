// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/frame/reporting_observer.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.ReportBodyElementSpec = { $: {} };
blink.mojom.ReportBodySpec = { $: {} };
blink.mojom.ReportSpec = { $: {} };
blink.mojom.ReportingObserver = {};
blink.mojom.ReportingObserver.$interfaceName = 'blink.mojom.ReportingObserver';
blink.mojom.ReportingObserver_Notify_ParamsSpec = { $: {} };

// Struct: ReportBodyElement
mojo.internal.Struct(
    blink.mojom.ReportBodyElementSpec, 'blink.mojom.ReportBodyElement', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ReportBody
mojo.internal.Struct(
    blink.mojom.ReportBodySpec, 'blink.mojom.ReportBody', [
      mojo.internal.StructField('body', 0, 0, mojo.internal.Array(blink.mojom.ReportBodyElementSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Report
mojo.internal.Struct(
    blink.mojom.ReportSpec, 'blink.mojom.Report', [
      mojo.internal.StructField('type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('body', 16, 0, blink.mojom.ReportBodySpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ReportingObserver
mojo.internal.Struct(
    blink.mojom.ReportingObserver_Notify_ParamsSpec, 'blink.mojom.ReportingObserver_Notify_Params', [
      mojo.internal.StructField('report', 0, 0, blink.mojom.ReportSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ReportingObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ReportingObserverRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ReportingObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ReportingObserverPendingReceiver,
      handle);
    this.$ = new blink.mojom.ReportingObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ReportingObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notify(report) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ReportingObserver_Notify_ParamsSpec,
      null,
      [report],
      false);
  }

};

blink.mojom.ReportingObserver.getRemote = function() {
  let remote = new blink.mojom.ReportingObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ReportingObserver',
    'context');
  return remote.$;
};

blink.mojom.ReportingObserverReceiver = class {
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
        
        // Try Method 0: Notify
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.ReportingObserver_Notify_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Notify (0)');
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
          const params = decoder.decodeStruct(blink.mojom.ReportingObserver_Notify_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notify');
          const result = this.impl.notify(params.report);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ReportingObserverReceiver = blink.mojom.ReportingObserverReceiver;

blink.mojom.ReportingObserverPtr = blink.mojom.ReportingObserverRemote;
blink.mojom.ReportingObserverRequest = blink.mojom.ReportingObserverPendingReceiver;

