// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_frontend.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.DevToolsFrontend = {};
blink.mojom.DevToolsFrontend.$interfaceName = 'blink.mojom.DevToolsFrontend';
blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec = { $: {} };
blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec = { $: {} };
blink.mojom.DevToolsFrontendHost = {};
blink.mojom.DevToolsFrontendHost.$interfaceName = 'blink.mojom.DevToolsFrontendHost';
blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec = { $: {} };

// Interface: DevToolsFrontend
mojo.internal.Struct(
    blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec, 'blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_Params', [
      mojo.internal.StructField('api_script', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec, 'blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_Params', [
      mojo.internal.StructField('extension_api', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DevToolsFrontendPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsFrontendRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsFrontend';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsFrontendPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsFrontendRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsFrontendRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setupDevToolsFrontend(api_script, host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec,
      null,
      [api_script, host],
      false);
  }

  setupDevToolsExtensionAPI(extension_api) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec,
      null,
      [extension_api],
      false);
  }

};

blink.mojom.DevToolsFrontend.getRemote = function() {
  let remote = new blink.mojom.DevToolsFrontendRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsFrontend',
    'context');
  return remote.$;
};

blink.mojom.DevToolsFrontendReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setupDevToolsFrontend');
          const result = this.impl.setupDevToolsFrontend(params.api_script, params.host);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setupDevToolsExtensionAPI');
          const result = this.impl.setupDevToolsExtensionAPI(params.extension_api);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsFrontendReceiver = blink.mojom.DevToolsFrontendReceiver;

blink.mojom.DevToolsFrontendPtr = blink.mojom.DevToolsFrontendRemote;
blink.mojom.DevToolsFrontendRequest = blink.mojom.DevToolsFrontendPendingReceiver;


// Interface: DevToolsFrontendHost
mojo.internal.Struct(
    blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec, 'blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DevToolsFrontendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsFrontendHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsFrontendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsFrontendHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsFrontendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsFrontendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchEmbedderMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

blink.mojom.DevToolsFrontendHost.getRemote = function() {
  let remote = new blink.mojom.DevToolsFrontendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsFrontendHost',
    'context');
  return remote.$;
};

blink.mojom.DevToolsFrontendHostReceiver = class {
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.dispatchEmbedderMessage');
          const result = this.impl.dispatchEmbedderMessage(params.message);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DevToolsFrontendHostReceiver = blink.mojom.DevToolsFrontendHostReceiver;

blink.mojom.DevToolsFrontendHostPtr = blink.mojom.DevToolsFrontendHostRemote;
blink.mojom.DevToolsFrontendHostRequest = blink.mojom.DevToolsFrontendHostPendingReceiver;

