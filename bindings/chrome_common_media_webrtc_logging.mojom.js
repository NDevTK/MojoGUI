// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/media/webrtc_logging.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var mojo_base = mojo_base || {};

chrome.mojom.WebRtcLoggingMessageSpec = { $: {} };
chrome.mojom.WebRtcLoggingClient = {};
chrome.mojom.WebRtcLoggingClient.$interfaceName = 'chrome.mojom.WebRtcLoggingClient';
chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec = { $: {} };
chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec = { $: {} };
chrome.mojom.WebRtcLoggingAgent = {};
chrome.mojom.WebRtcLoggingAgent.$interfaceName = 'chrome.mojom.WebRtcLoggingAgent';
chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec = { $: {} };
chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec = { $: {} };

// Struct: WebRtcLoggingMessage
mojo.internal.Struct(
    chrome.mojom.WebRtcLoggingMessageSpec, 'chrome.mojom.WebRtcLoggingMessage', [
      mojo.internal.StructField('timestamp', 0, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: WebRtcLoggingClient
mojo.internal.Struct(
    chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec, 'chrome.mojom.WebRtcLoggingClient_OnAddMessages_Params', [
      mojo.internal.StructField('messages', 0, 0, mojo.internal.Array(chrome.mojom.WebRtcLoggingMessageSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec, 'chrome.mojom.WebRtcLoggingClient_OnStopped_Params', [
    ],
    [[0, 8]]);

chrome.mojom.WebRtcLoggingClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.WebRtcLoggingClientRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.WebRtcLoggingClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.WebRtcLoggingClientPendingReceiver,
      handle);
    this.$ = new chrome.mojom.WebRtcLoggingClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.WebRtcLoggingClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAddMessages(messages) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec,
      null,
      [messages],
      false);
  }

  onStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

chrome.mojom.WebRtcLoggingClient.getRemote = function() {
  let remote = new chrome.mojom.WebRtcLoggingClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.WebRtcLoggingClient',
    'context');
  return remote.$;
};

chrome.mojom.WebRtcLoggingClientReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnAddMessages
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAddMessages (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStopped (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onAddMessages');
          const result = this.impl.onAddMessages(params.messages);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onStopped');
          const result = this.impl.onStopped();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.WebRtcLoggingClientReceiver = chrome.mojom.WebRtcLoggingClientReceiver;

chrome.mojom.WebRtcLoggingClientPtr = chrome.mojom.WebRtcLoggingClientRemote;
chrome.mojom.WebRtcLoggingClientRequest = chrome.mojom.WebRtcLoggingClientPendingReceiver;


// Interface: WebRtcLoggingAgent
mojo.internal.Struct(
    chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec, 'chrome.mojom.WebRtcLoggingAgent_Start_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chrome.mojom.WebRtcLoggingClientSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec, 'chrome.mojom.WebRtcLoggingAgent_Stop_Params', [
    ],
    [[0, 8]]);

chrome.mojom.WebRtcLoggingAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.WebRtcLoggingAgentRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.WebRtcLoggingAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.WebRtcLoggingAgentPendingReceiver,
      handle);
    this.$ = new chrome.mojom.WebRtcLoggingAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.WebRtcLoggingAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec,
      null,
      [client],
      false);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec,
      null,
      [],
      false);
  }

};

chrome.mojom.WebRtcLoggingAgent.getRemote = function() {
  let remote = new chrome.mojom.WebRtcLoggingAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.WebRtcLoggingAgent',
    'context');
  return remote.$;
};

chrome.mojom.WebRtcLoggingAgentReceiver = class {
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Stop
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Stop (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.stop');
          const result = this.impl.stop();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.WebRtcLoggingAgentReceiver = chrome.mojom.WebRtcLoggingAgentReceiver;

chrome.mojom.WebRtcLoggingAgentPtr = chrome.mojom.WebRtcLoggingAgentRemote;
chrome.mojom.WebRtcLoggingAgentRequest = chrome.mojom.WebRtcLoggingAgentPendingReceiver;

