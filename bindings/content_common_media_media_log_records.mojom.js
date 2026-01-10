// Auto-generated MojoJS binding
// Source: chromium_src/content/common/media/media_log_records.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var media = media || {};

content.mojom.MediaInternalLogRecords = {};
content.mojom.MediaInternalLogRecords.$interfaceName = 'content.mojom.MediaInternalLogRecords';
content.mojom.MediaInternalLogRecords_Log_ParamsSpec = { $: {} };

// Interface: MediaInternalLogRecords
mojo.internal.Struct(
    content.mojom.MediaInternalLogRecords_Log_ParamsSpec, 'content.mojom.MediaInternalLogRecords_Log_Params', [
      mojo.internal.StructField('events', 0, 0, mojo.internal.Array(media.mojom.MediaLogRecordSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.MediaInternalLogRecordsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MediaInternalLogRecordsRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MediaInternalLogRecords';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MediaInternalLogRecordsPendingReceiver,
      handle);
    this.$ = new content.mojom.MediaInternalLogRecordsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.MediaInternalLogRecordsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  log(events) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.MediaInternalLogRecords_Log_ParamsSpec,
      null,
      [events],
      false);
  }

};

content.mojom.MediaInternalLogRecords.getRemote = function() {
  let remote = new content.mojom.MediaInternalLogRecordsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MediaInternalLogRecords',
    'context');
  return remote.$;
};

content.mojom.MediaInternalLogRecordsReceiver = class {
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
        
        // Try Method 0: Log
        try {
             decoder.decodeStruct(content.mojom.MediaInternalLogRecords_Log_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Log (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.MediaInternalLogRecords_Log_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.log');
          const result = this.impl.log(params.events);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.MediaInternalLogRecordsReceiver = content.mojom.MediaInternalLogRecordsReceiver;

content.mojom.MediaInternalLogRecordsPtr = content.mojom.MediaInternalLogRecordsRemote;
content.mojom.MediaInternalLogRecordsRequest = content.mojom.MediaInternalLogRecordsPendingReceiver;

