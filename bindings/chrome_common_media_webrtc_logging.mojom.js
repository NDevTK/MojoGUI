// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/media/webrtc_logging.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onAddMessages(messages) {
    return this.$.onAddMessages(messages);
  }
  onStopped() {
    return this.$.onStopped();
  }
};

chrome.mojom.WebRtcLoggingClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebRtcLoggingClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAddMessages(messages) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec,
      null,
      [messages],
      false);
  }

  onStopped() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WebRtcLoggingClient', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec.$.structSpec);
          const result = this.impl.onAddMessages(params.messages);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec.$.structSpec);
          const result = this.impl.onStopped();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.WebRtcLoggingClientReceiver = chrome.mojom.WebRtcLoggingClientReceiver;

chrome.mojom.WebRtcLoggingClientPtr = chrome.mojom.WebRtcLoggingClientRemote;
chrome.mojom.WebRtcLoggingClientRequest = chrome.mojom.WebRtcLoggingClientPendingReceiver;


// Interface: WebRtcLoggingAgent
mojo.internal.Struct(
    chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec, 'chrome.mojom.WebRtcLoggingAgent_Start_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chrome.mojom.WebRtcLoggingClientRemote), null, false, 0, undefined),
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
  start(client) {
    return this.$.start(client);
  }
  stop() {
    return this.$.stop();
  }
};

chrome.mojom.WebRtcLoggingAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebRtcLoggingAgent', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  start(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec,
      null,
      [client],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('WebRtcLoggingAgent', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.WebRtcLoggingAgentReceiver = chrome.mojom.WebRtcLoggingAgentReceiver;

chrome.mojom.WebRtcLoggingAgentPtr = chrome.mojom.WebRtcLoggingAgentRemote;
chrome.mojom.WebRtcLoggingAgentRequest = chrome.mojom.WebRtcLoggingAgentPendingReceiver;

