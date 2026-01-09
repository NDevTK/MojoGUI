// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/media/webrtc_logging.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Interface: WebRtcLoggingClient
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
      chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec.$,
      null,
      [messages]);
  }

  onStopped() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec.$,
      null,
      []);
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
}};

// ParamsSpec for OnAddMessages
chrome.mojom.WebRtcLoggingClient_OnAddMessages_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingClient.OnAddMessages_Params',
      packedSize: 16,
      fields: [
        { name: 'messages', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnStopped
chrome.mojom.WebRtcLoggingClient_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingClient.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.WebRtcLoggingClientPtr = chrome.mojom.WebRtcLoggingClientRemote;
chrome.mojom.WebRtcLoggingClientRequest = chrome.mojom.WebRtcLoggingClientPendingReceiver;


// Interface: WebRtcLoggingAgent
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
      chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec.$,
      null,
      [client]);
  }

  stop() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec.$,
      null,
      []);
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
}};

// ParamsSpec for Start
chrome.mojom.WebRtcLoggingAgent_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingAgent.Start_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for Stop
chrome.mojom.WebRtcLoggingAgent_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.WebRtcLoggingAgent.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
chrome.mojom.WebRtcLoggingAgentPtr = chrome.mojom.WebRtcLoggingAgentRemote;
chrome.mojom.WebRtcLoggingAgentRequest = chrome.mojom.WebRtcLoggingAgentPendingReceiver;

