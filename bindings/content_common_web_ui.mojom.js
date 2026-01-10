// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_ui.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.WebUIHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  send(message, args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        
        // Try Method 0: Send
        try {
             decoder.decodeStruct(content.mojom.WebUIHost_Send_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Send (0)');
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
          const params = decoder.decodeStruct(content.mojom.WebUIHost_Send_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.send');
          const result = this.impl.send(params.message, params.args);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

content.mojom.WebUIRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProperty(property_name, property_value_json) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        
        // Try Method 0: SetProperty
        try {
             decoder.decodeStruct(content.mojom.WebUI_SetProperty_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetProperty (0)');
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
          const params = decoder.decodeStruct(content.mojom.WebUI_SetProperty_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setProperty');
          const result = this.impl.setProperty(params.property_name, params.property_value_json);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.WebUIReceiver = content.mojom.WebUIReceiver;

content.mojom.WebUIPtr = content.mojom.WebUIRemote;
content.mojom.WebUIRequest = content.mojom.WebUIPendingReceiver;

