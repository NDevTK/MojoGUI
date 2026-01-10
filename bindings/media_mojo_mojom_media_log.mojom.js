// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_log.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.MediaLog = {};
media.mojom.MediaLog.$interfaceName = 'media.mojom.MediaLog';
media.mojom.MediaLog_AddLogRecord_ParamsSpec = { $: {} };

// Interface: MediaLog
mojo.internal.Struct(
    media.mojom.MediaLog_AddLogRecord_ParamsSpec, 'media.mojom.MediaLog_AddLogRecord_Params', [
      mojo.internal.StructField('event', 0, 0, media.mojom.MediaLogRecordSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaLogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaLogRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaLog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaLogPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaLogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaLogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addLogRecord(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaLog_AddLogRecord_ParamsSpec,
      null,
      [event],
      false);
  }

};

media.mojom.MediaLog.getRemote = function() {
  let remote = new media.mojom.MediaLogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaLog',
    'context');
  return remote.$;
};

media.mojom.MediaLogReceiver = class {
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
        
        // Try Method 0: AddLogRecord
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(media.mojom.MediaLog_AddLogRecord_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddLogRecord (0)');
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
          const params = decoder.decodeStruct(media.mojom.MediaLog_AddLogRecord_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addLogRecord');
          const result = this.impl.addLogRecord(params.event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.MediaLogReceiver = media.mojom.MediaLogReceiver;

media.mojom.MediaLogPtr = media.mojom.MediaLogRemote;
media.mojom.MediaLogRequest = media.mojom.MediaLogPendingReceiver;

