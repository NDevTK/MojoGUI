// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/webui/mojom/webui.mojom
// Module: chromecast.mojom

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};

chromecast.mojom.MessageCallback = {};
chromecast.mojom.MessageCallback.$interfaceName = 'chromecast.mojom.MessageCallback';
chromecast.mojom.MessageCallback_OnMessage_ParamsSpec = { $: {} };
chromecast.mojom.WebUi = {};
chromecast.mojom.WebUi.$interfaceName = 'chromecast.mojom.WebUi';
chromecast.mojom.WebUi_RegisterMessageCallback_ParamsSpec = { $: {} };
chromecast.mojom.WebUi_CallJavascriptFunction_ParamsSpec = { $: {} };
chromecast.mojom.Resources = {};
chromecast.mojom.Resources.$interfaceName = 'chromecast.mojom.Resources';
chromecast.mojom.Resources_RequestResourceBytes_ParamsSpec = { $: {} };
chromecast.mojom.Resources_RequestResourceBytes_ResponseParamsSpec = { $: {} };
chromecast.mojom.WebUiClient = {};
chromecast.mojom.WebUiClient.$interfaceName = 'chromecast.mojom.WebUiClient';
chromecast.mojom.WebUiClient_CreateController_ParamsSpec = { $: {} };
chromecast.mojom.WebUiClient_CreateResources_ParamsSpec = { $: {} };

// Interface: MessageCallback
mojo.internal.Struct(
    chromecast.mojom.MessageCallback_OnMessage_ParamsSpec, 'chromecast.mojom.MessageCallback_OnMessage_Params', [
      mojo.internal.StructField('list', 0, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.MessageCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.MessageCallbackRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.MessageCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.MessageCallbackPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.MessageCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMessage(list) {
    return this.$.onMessage(list);
  }
};

chromecast.mojom.MessageCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MessageCallback', [
      { explicit: null },
    ]);
  }

  onMessage(list) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.MessageCallback_OnMessage_ParamsSpec,
      null,
      [list],
      false);
  }

};

chromecast.mojom.MessageCallback.getRemote = function() {
  let remote = new chromecast.mojom.MessageCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.MessageCallback',
    'context');
  return remote.$;
};

chromecast.mojom.MessageCallbackReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MessageCallback', [
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
             decoder.decodeStructInline(chromecast.mojom.MessageCallback_OnMessage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.MessageCallback_OnMessage_ParamsSpec.$.structSpec);
          const result = this.impl.onMessage(params.list);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.MessageCallbackReceiver = chromecast.mojom.MessageCallbackReceiver;

chromecast.mojom.MessageCallbackPtr = chromecast.mojom.MessageCallbackRemote;
chromecast.mojom.MessageCallbackRequest = chromecast.mojom.MessageCallbackPendingReceiver;


// Interface: WebUi
mojo.internal.Struct(
    chromecast.mojom.WebUi_RegisterMessageCallback_ParamsSpec, 'chromecast.mojom.WebUi_RegisterMessageCallback_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cb', 8, 0, mojo.internal.InterfaceProxy(chromecast.mojom.MessageCallbackRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.WebUi_CallJavascriptFunction_ParamsSpec, 'chromecast.mojom.WebUi_CallJavascriptFunction_Params', [
      mojo.internal.StructField('function', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.mojom.WebUiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.WebUiRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.WebUi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.WebUiPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.WebUiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerMessageCallback(message, cb) {
    return this.$.registerMessageCallback(message, cb);
  }
  callJavascriptFunction(function, args) {
    return this.$.callJavascriptFunction(function, args);
  }
};

chromecast.mojom.WebUiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebUi', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerMessageCallback(message, cb) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.WebUi_RegisterMessageCallback_ParamsSpec,
      null,
      [message, cb],
      false);
  }

  callJavascriptFunction(function, args) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.WebUi_CallJavascriptFunction_ParamsSpec,
      null,
      [function, args],
      false);
  }

};

chromecast.mojom.WebUi.getRemote = function() {
  let remote = new chromecast.mojom.WebUiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.WebUi',
    'context');
  return remote.$;
};

chromecast.mojom.WebUiReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebUi', [
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
             decoder.decodeStructInline(chromecast.mojom.WebUi_RegisterMessageCallback_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.WebUi_CallJavascriptFunction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.WebUi_RegisterMessageCallback_ParamsSpec.$.structSpec);
          const result = this.impl.registerMessageCallback(params.message, params.cb);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.WebUi_CallJavascriptFunction_ParamsSpec.$.structSpec);
          const result = this.impl.callJavascriptFunction(params.function, params.args);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.WebUiReceiver = chromecast.mojom.WebUiReceiver;

chromecast.mojom.WebUiPtr = chromecast.mojom.WebUiRemote;
chromecast.mojom.WebUiRequest = chromecast.mojom.WebUiPendingReceiver;


// Interface: Resources
mojo.internal.Struct(
    chromecast.mojom.Resources_RequestResourceBytes_ParamsSpec, 'chromecast.mojom.Resources_RequestResourceBytes_Params', [
      mojo.internal.StructField('path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromecast.mojom.Resources_RequestResourceBytes_ResponseParamsSpec, 'chromecast.mojom.Resources_RequestResourceBytes_ResponseParams', [
      mojo.internal.StructField('bytes', 0, 0, mojo_base.mojom.RefCountedMemorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.ResourcesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ResourcesRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.Resources';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ResourcesPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ResourcesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestResourceBytes(path) {
    return this.$.requestResourceBytes(path);
  }
};

chromecast.mojom.ResourcesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Resources', [
      { explicit: null },
    ]);
  }

  requestResourceBytes(path) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.Resources_RequestResourceBytes_ParamsSpec,
      chromecast.mojom.Resources_RequestResourceBytes_ResponseParamsSpec,
      [path],
      false);
  }

};

chromecast.mojom.Resources.getRemote = function() {
  let remote = new chromecast.mojom.ResourcesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.Resources',
    'context');
  return remote.$;
};

chromecast.mojom.ResourcesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Resources', [
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
             decoder.decodeStructInline(chromecast.mojom.Resources_RequestResourceBytes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.Resources_RequestResourceBytes_ParamsSpec.$.structSpec);
          const result = this.impl.requestResourceBytes(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.Resources_RequestResourceBytes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.ResourcesReceiver = chromecast.mojom.ResourcesReceiver;

chromecast.mojom.ResourcesPtr = chromecast.mojom.ResourcesRemote;
chromecast.mojom.ResourcesRequest = chromecast.mojom.ResourcesPendingReceiver;


// Interface: WebUiClient
mojo.internal.Struct(
    chromecast.mojom.WebUiClient_CreateController_ParamsSpec, 'chromecast.mojom.WebUiClient_CreateController_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('web_ui', 8, 0, mojo.internal.InterfaceProxy(chromecast.mojom.WebUiRemote), null, false, 0, undefined),
      mojo.internal.StructField('resources', 16, 0, mojo.internal.InterfaceRequest(chromecast.mojom.ResourcesRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromecast.mojom.WebUiClient_CreateResources_ParamsSpec, 'chromecast.mojom.WebUiClient_CreateResources_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resources', 8, 0, mojo.internal.InterfaceRequest(chromecast.mojom.ResourcesRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

chromecast.mojom.WebUiClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.WebUiClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.WebUiClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.WebUiClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.WebUiClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createController(host, web_ui, resources) {
    return this.$.createController(host, web_ui, resources);
  }
  createResources(host, resources) {
    return this.$.createResources(host, resources);
  }
};

chromecast.mojom.WebUiClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebUiClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  createController(host, web_ui, resources) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.WebUiClient_CreateController_ParamsSpec,
      null,
      [host, web_ui, resources],
      false);
  }

  createResources(host, resources) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chromecast.mojom.WebUiClient_CreateResources_ParamsSpec,
      null,
      [host, resources],
      false);
  }

};

chromecast.mojom.WebUiClient.getRemote = function() {
  let remote = new chromecast.mojom.WebUiClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.WebUiClient',
    'context');
  return remote.$;
};

chromecast.mojom.WebUiClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebUiClient', [
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
             decoder.decodeStructInline(chromecast.mojom.WebUiClient_CreateController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.mojom.WebUiClient_CreateResources_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.WebUiClient_CreateController_ParamsSpec.$.structSpec);
          const result = this.impl.createController(params.host, params.web_ui, params.resources);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.WebUiClient_CreateResources_ParamsSpec.$.structSpec);
          const result = this.impl.createResources(params.host, params.resources);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.WebUiClientReceiver = chromecast.mojom.WebUiClientReceiver;

chromecast.mojom.WebUiClientPtr = chromecast.mojom.WebUiClientRemote;
chromecast.mojom.WebUiClientRequest = chromecast.mojom.WebUiClientPendingReceiver;

