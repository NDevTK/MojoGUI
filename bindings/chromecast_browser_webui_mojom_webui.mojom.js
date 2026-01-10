// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/webui/mojom/webui.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: MessageCallback
chromecast.mojom.mojom.MessageCallback = {};

chromecast.mojom.mojom.MessageCallbackPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.MessageCallbackRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.MessageCallback';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.MessageCallbackPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.MessageCallbackRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.MessageCallbackRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessage(list) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.MessageCallback_OnMessage_ParamsSpec,
      null,
      [list]);
  }

};

chromecast.mojom.mojom.MessageCallback.getRemote = function() {
  let remote = new chromecast.mojom.mojom.MessageCallbackRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.MessageCallback',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessage
chromecast.mojom.mojom.MessageCallback_OnMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.MessageCallback.OnMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'list', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.MessageCallbackPtr = chromecast.mojom.mojom.MessageCallbackRemote;
chromecast.mojom.mojom.MessageCallbackRequest = chromecast.mojom.mojom.MessageCallbackPendingReceiver;


// Interface: WebUi
chromecast.mojom.mojom.WebUi = {};

chromecast.mojom.mojom.WebUiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.WebUiRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.WebUi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.WebUiPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.WebUiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.WebUiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerMessageCallback(message, cb) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.WebUi_RegisterMessageCallback_ParamsSpec,
      null,
      [message, cb]);
  }

  callJavascriptFunction(function, args) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.WebUi_CallJavascriptFunction_ParamsSpec,
      null,
      [function, args]);
  }

};

chromecast.mojom.mojom.WebUi.getRemote = function() {
  let remote = new chromecast.mojom.mojom.WebUiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.WebUi',
    'context');
  return remote.$;
};

// ParamsSpec for RegisterMessageCallback
chromecast.mojom.mojom.WebUi_RegisterMessageCallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.WebUi.RegisterMessageCallback_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cb', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CallJavascriptFunction
chromecast.mojom.mojom.WebUi_CallJavascriptFunction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.WebUi.CallJavascriptFunction_Params',
      packedSize: 24,
      fields: [
        { name: 'function', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'args', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.WebUiPtr = chromecast.mojom.mojom.WebUiRemote;
chromecast.mojom.mojom.WebUiRequest = chromecast.mojom.mojom.WebUiPendingReceiver;


// Interface: Resources
chromecast.mojom.mojom.Resources = {};

chromecast.mojom.mojom.ResourcesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.ResourcesRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.Resources';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.ResourcesPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.ResourcesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.ResourcesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestResourceBytes(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.Resources_RequestResourceBytes_ParamsSpec,
      chromecast.mojom.mojom.Resources_RequestResourceBytes_ResponseParamsSpec,
      [path]);
  }

};

chromecast.mojom.mojom.Resources.getRemote = function() {
  let remote = new chromecast.mojom.mojom.ResourcesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.Resources',
    'context');
  return remote.$;
};

// ParamsSpec for RequestResourceBytes
chromecast.mojom.mojom.Resources_RequestResourceBytes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.Resources.RequestResourceBytes_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromecast.mojom.mojom.Resources_RequestResourceBytes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.Resources.RequestResourceBytes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'bytes', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.RefCountedMemorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.ResourcesPtr = chromecast.mojom.mojom.ResourcesRemote;
chromecast.mojom.mojom.ResourcesRequest = chromecast.mojom.mojom.ResourcesPendingReceiver;


// Interface: WebUiClient
chromecast.mojom.mojom.WebUiClient = {};

chromecast.mojom.mojom.WebUiClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.WebUiClientRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.WebUiClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.WebUiClientPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.WebUiClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.WebUiClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createController(host, web_ui, resources) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.WebUiClient_CreateController_ParamsSpec,
      null,
      [host, web_ui, resources]);
  }

  createResources(host, resources) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.mojom.WebUiClient_CreateResources_ParamsSpec,
      null,
      [host, resources]);
  }

};

chromecast.mojom.mojom.WebUiClient.getRemote = function() {
  let remote = new chromecast.mojom.mojom.WebUiClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.WebUiClient',
    'context');
  return remote.$;
};

// ParamsSpec for CreateController
chromecast.mojom.mojom.WebUiClient_CreateController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.WebUiClient.CreateController_Params',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'web_ui', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'resources', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CreateResources
chromecast.mojom.mojom.WebUiClient_CreateResources_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.WebUiClient.CreateResources_Params',
      packedSize: 24,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'resources', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.WebUiClientPtr = chromecast.mojom.mojom.WebUiClientRemote;
chromecast.mojom.mojom.WebUiClientRequest = chromecast.mojom.mojom.WebUiClientPendingReceiver;

