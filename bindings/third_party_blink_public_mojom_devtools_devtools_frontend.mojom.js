// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_frontend.mojom
// Module: blink.mojom

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
  setupDevToolsFrontend(api_script, host) {
    return this.$.setupDevToolsFrontend(api_script, host);
  }
  setupDevToolsExtensionAPI(extension_api) {
    return this.$.setupDevToolsExtensionAPI(extension_api);
  }
};

blink.mojom.DevToolsFrontendRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsFrontend', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setupDevToolsFrontend(api_script, host) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec,
      null,
      [api_script, host],
      false);
  }

  setupDevToolsExtensionAPI(extension_api) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DevToolsFrontend', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec.$.structSpec);
          const result = this.impl.setupDevToolsFrontend(params.api_script, params.host);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec.$.structSpec);
          const result = this.impl.setupDevToolsExtensionAPI(params.extension_api);
          break;
        }
      }
      } catch (err) {}
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
  dispatchEmbedderMessage(message) {
    return this.$.dispatchEmbedderMessage(message);
  }
};

blink.mojom.DevToolsFrontendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DevToolsFrontendHost', [
      { explicit: null },
    ]);
  }

  dispatchEmbedderMessage(message) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DevToolsFrontendHost', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchEmbedderMessage(params.message);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.DevToolsFrontendHostReceiver = blink.mojom.DevToolsFrontendHostReceiver;

blink.mojom.DevToolsFrontendHostPtr = blink.mojom.DevToolsFrontendHostRemote;
blink.mojom.DevToolsFrontendHostRequest = blink.mojom.DevToolsFrontendHostPendingReceiver;

