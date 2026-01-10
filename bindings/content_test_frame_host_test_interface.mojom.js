// Auto-generated MojoJS binding
// Source: chromium_src/content/test/frame_host_test_interface.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var url = url || {};

content.mojom.FrameHostTestInterface = {};
content.mojom.FrameHostTestInterface.$interfaceName = 'content.mojom.FrameHostTestInterface';
content.mojom.FrameHostTestInterface_Ping_ParamsSpec = { $: {} };

// Interface: FrameHostTestInterface
mojo.internal.Struct(
    content.mojom.FrameHostTestInterface_Ping_ParamsSpec, 'content.mojom.FrameHostTestInterface_Ping_Params', [
      mojo.internal.StructField('source_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_event', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.FrameHostTestInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FrameHostTestInterfaceRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FrameHostTestInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FrameHostTestInterfacePendingReceiver,
      handle);
    this.$ = new content.mojom.FrameHostTestInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.FrameHostTestInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping(source_url, source_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.FrameHostTestInterface_Ping_ParamsSpec,
      null,
      [source_url, source_event],
      false);
  }

};

content.mojom.FrameHostTestInterface.getRemote = function() {
  let remote = new content.mojom.FrameHostTestInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FrameHostTestInterface',
    'context');
  return remote.$;
};

content.mojom.FrameHostTestInterfaceReceiver = class {
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
        
        // Try Method 0: Ping
        try {
             decoder.decodeStruct(content.mojom.FrameHostTestInterface_Ping_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ping (0)');
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
          const params = decoder.decodeStruct(content.mojom.FrameHostTestInterface_Ping_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.ping');
          const result = this.impl.ping(params.source_url, params.source_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.FrameHostTestInterfaceReceiver = content.mojom.FrameHostTestInterfaceReceiver;

content.mojom.FrameHostTestInterfacePtr = content.mojom.FrameHostTestInterfaceRemote;
content.mojom.FrameHostTestInterfaceRequest = content.mojom.FrameHostTestInterfacePendingReceiver;

