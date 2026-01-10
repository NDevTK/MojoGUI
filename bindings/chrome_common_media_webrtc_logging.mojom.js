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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAddMessages(params.messages);
          break;
        }
        case 1: {
          const params = chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStopped();
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start(params.client);
          break;
        }
        case 1: {
          const params = chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop();
          break;
        }
      }
    }});
  }
};

chrome.mojom.WebRtcLoggingAgentReceiver = chrome.mojom.WebRtcLoggingAgentReceiver;

chrome.mojom.WebRtcLoggingAgentPtr = chrome.mojom.WebRtcLoggingAgentRemote;
chrome.mojom.WebRtcLoggingAgentRequest = chrome.mojom.WebRtcLoggingAgentPendingReceiver;

