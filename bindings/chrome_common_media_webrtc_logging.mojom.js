// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/media/webrtc_logging.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Struct: WebRtcLoggingMessage
chrome.mojom.mojom.WebRtcLoggingMessageSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingMessage',
      packedSize: 24,
      fields: [
        { name: 'timestamp', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: WebRtcLoggingClient
chrome.mojom.mojom.WebRtcLoggingClient = {};

chrome.mojom.mojom.WebRtcLoggingClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.WebRtcLoggingClientRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.WebRtcLoggingClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.WebRtcLoggingClientPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.WebRtcLoggingClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.WebRtcLoggingClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAddMessages(messages) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec,
      null,
      [messages]);
  }

  onStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec,
      null,
      []);
  }

};

chrome.mojom.mojom.WebRtcLoggingClient.getRemote = function() {
  let remote = new chrome.mojom.mojom.WebRtcLoggingClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.WebRtcLoggingClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnAddMessages
chrome.mojom.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingClient.OnAddMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'messages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.WebRtcLoggingMessageSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnStopped
chrome.mojom.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingClient.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.WebRtcLoggingClientPtr = chrome.mojom.mojom.WebRtcLoggingClientRemote;
chrome.mojom.mojom.WebRtcLoggingClientRequest = chrome.mojom.mojom.WebRtcLoggingClientPendingReceiver;


// Interface: WebRtcLoggingAgent
chrome.mojom.mojom.WebRtcLoggingAgent = {};

chrome.mojom.mojom.WebRtcLoggingAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.WebRtcLoggingAgentRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.WebRtcLoggingAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.WebRtcLoggingAgentPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.WebRtcLoggingAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.WebRtcLoggingAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.WebRtcLoggingAgent_Start_ParamsSpec,
      null,
      [client]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.WebRtcLoggingAgent_Stop_ParamsSpec,
      null,
      []);
  }

};

chrome.mojom.mojom.WebRtcLoggingAgent.getRemote = function() {
  let remote = new chrome.mojom.mojom.WebRtcLoggingAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.WebRtcLoggingAgent',
    'context');
  return remote.$;
};

// ParamsSpec for Start
chrome.mojom.mojom.WebRtcLoggingAgent_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingAgent.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
chrome.mojom.mojom.WebRtcLoggingAgent_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingAgent.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.WebRtcLoggingAgentPtr = chrome.mojom.mojom.WebRtcLoggingAgentRemote;
chrome.mojom.mojom.WebRtcLoggingAgentRequest = chrome.mojom.mojom.WebRtcLoggingAgentPendingReceiver;

