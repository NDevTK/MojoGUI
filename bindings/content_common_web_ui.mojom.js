// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_ui.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};

content.mojom.WebUIHost = {};
content.mojom.WebUIHost.$interfaceName = 'content.mojom.WebUIHost';
content.mojom.WebUIHost_Send_ParamsSpec = { $: {} };
content.mojom.WebUI = {};
content.mojom.WebUI.$interfaceName = 'content.mojom.WebUI';
content.mojom.WebUI_SetProperty_ParamsSpec = { $: {} };

// Interface: WebUIHost
mojo.internal.Struct(
    content.mojom.WebUIHost_Send_ParamsSpec, 'content.mojom.WebUIHost_Send_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.WebUIHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebUIHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebUIHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebUIHostPendingReceiver,
      handle);
    this.$ = new content.mojom.WebUIHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  send(message, args) {
    return this.$.send(message, args);
  }
};

content.mojom.WebUIHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebUIHost', [
      { explicit: null },
    ]);
  }

  send(message, args) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.WebUIHost_Send_ParamsSpec,
      null,
      [message, args],
      false);
  }

};

content.mojom.WebUIHost.getRemote = function() {
  let remote = new content.mojom.WebUIHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebUIHost',
    'context');
  return remote.$;
};

content.mojom.WebUIHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebUIHost', [
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
             decoder.decodeStructInline(content.mojom.WebUIHost_Send_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebUIHost_Send_ParamsSpec.$.structSpec);
          const result = this.impl.send(params.message, params.args);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.WebUIHostReceiver = content.mojom.WebUIHostReceiver;

content.mojom.WebUIHostPtr = content.mojom.WebUIHostRemote;
content.mojom.WebUIHostRequest = content.mojom.WebUIHostPendingReceiver;


// Interface: WebUI
mojo.internal.Struct(
    content.mojom.WebUI_SetProperty_ParamsSpec, 'content.mojom.WebUI_SetProperty_Params', [
      mojo.internal.StructField('property_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('property_value_json', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.WebUIPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebUIRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebUI';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebUIPendingReceiver,
      handle);
    this.$ = new content.mojom.WebUIRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setProperty(property_name, property_value_json) {
    return this.$.setProperty(property_name, property_value_json);
  }
};

content.mojom.WebUIRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebUI', [
      { explicit: null },
    ]);
  }

  setProperty(property_name, property_value_json) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.WebUI_SetProperty_ParamsSpec,
      null,
      [property_name, property_value_json],
      false);
  }

};

content.mojom.WebUI.getRemote = function() {
  let remote = new content.mojom.WebUIRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebUI',
    'context');
  return remote.$;
};

content.mojom.WebUIReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebUI', [
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
             decoder.decodeStructInline(content.mojom.WebUI_SetProperty_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebUI_SetProperty_ParamsSpec.$.structSpec);
          const result = this.impl.setProperty(params.property_name, params.property_value_json);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.WebUIReceiver = content.mojom.WebUIReceiver;

content.mojom.WebUIPtr = content.mojom.WebUIRemote;
content.mojom.WebUIRequest = content.mojom.WebUIPendingReceiver;

