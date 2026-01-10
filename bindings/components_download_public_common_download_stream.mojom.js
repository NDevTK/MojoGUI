// Auto-generated MojoJS binding
// Source: chromium_src/components/download/public/common/download_stream.mojom
// Module: download.mojom

'use strict';

// Module namespace
var download = download || {};
download.mojom = download.mojom || {};

download.mojom.NetworkRequestStatusSpec = { $: mojo.internal.Enum() };
download.mojom.DownloadStreamHandleSpec = { $: {} };
download.mojom.DownloadStreamClient = {};
download.mojom.DownloadStreamClient.$interfaceName = 'download.mojom.DownloadStreamClient';
download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec = { $: {} };

// Enum: NetworkRequestStatus
download.mojom.NetworkRequestStatus = {
  OK: 0,
  NETWORK_TIMEOUT: 1,
  NETWORK_DISCONNECTED: 2,
  NETWORK_SERVER_DOWN: 3,
  SERVER_NO_RANGE: 4,
  SERVER_CONTENT_LENGTH_MISMATCH: 5,
  SERVER_UNREACHABLE: 6,
  SERVER_CERT_PROBLEM: 7,
  USER_CANCELED: 8,
  NETWORK_FAILED: 9,
};

// Struct: DownloadStreamHandle
mojo.internal.Struct(
    download.mojom.DownloadStreamHandleSpec, 'download.mojom.DownloadStreamHandle', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(download.mojom.DownloadStreamClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DownloadStreamClient
mojo.internal.Struct(
    download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec, 'download.mojom.DownloadStreamClient_OnStreamCompleted_Params', [
      mojo.internal.StructField('status', 0, 0, download.mojom.NetworkRequestStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

download.mojom.DownloadStreamClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

download.mojom.DownloadStreamClientRemote = class {
  static get $interfaceName() {
    return 'download.mojom.DownloadStreamClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      download.mojom.DownloadStreamClientPendingReceiver,
      handle);
    this.$ = new download.mojom.DownloadStreamClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

download.mojom.DownloadStreamClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStreamCompleted(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec,
      null,
      [status],
      false);
  }

};

download.mojom.DownloadStreamClient.getRemote = function() {
  let remote = new download.mojom.DownloadStreamClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'download.mojom.DownloadStreamClient',
    'context');
  return remote.$;
};

download.mojom.DownloadStreamClientReceiver = class {
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
        
        // Try Method 0: OnStreamCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStreamCompleted (0)');
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
          const params = decoder.decodeStruct(download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStreamCompleted');
          const result = this.impl.onStreamCompleted(params.status);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

download.mojom.DownloadStreamClientReceiver = download.mojom.DownloadStreamClientReceiver;

download.mojom.DownloadStreamClientPtr = download.mojom.DownloadStreamClientRemote;
download.mojom.DownloadStreamClientRequest = download.mojom.DownloadStreamClientPendingReceiver;

