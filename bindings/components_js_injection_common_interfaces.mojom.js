// Auto-generated MojoJS binding
// Source: chromium_src/components/js_injection/common/interfaces.mojom
// Module: js_injection.mojom

'use strict';

// Module namespace
var js_injection = js_injection || {};
js_injection.mojom = js_injection.mojom || {};


// Interface: JsToBrowserMessaging
js_injection.mojom.JsToBrowserMessaging = {};

js_injection.mojom.JsToBrowserMessagingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.JsToBrowserMessagingRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.JsToBrowserMessaging';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.JsToBrowserMessagingPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.JsToBrowserMessagingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.JsToBrowserMessagingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postMessage(message, ports) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec,
      null,
      [message, ports]);
  }

  setBrowserToJsMessaging(browser_to_js_messaging) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec,
      null,
      [browser_to_js_messaging]);
  }

};

js_injection.mojom.JsToBrowserMessaging.getRemote = function() {
  let remote = new js_injection.mojom.JsToBrowserMessagingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.JsToBrowserMessaging',
    'context');
  return remote.$;
};

// ParamsSpec for PostMessage
js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.JsToBrowserMessaging.PostMessage_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ports', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetBrowserToJsMessaging
js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.JsToBrowserMessaging.SetBrowserToJsMessaging_Params',
      packedSize: 16,
      fields: [
        { name: 'browser_to_js_messaging', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
js_injection.mojom.JsToBrowserMessagingPtr = js_injection.mojom.JsToBrowserMessagingRemote;
js_injection.mojom.JsToBrowserMessagingRequest = js_injection.mojom.JsToBrowserMessagingPendingReceiver;


// Interface: JsObjectsClient
js_injection.mojom.JsObjectsClient = {};

js_injection.mojom.JsObjectsClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.JsObjectsClientRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.JsObjectsClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.JsObjectsClientPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.JsObjectsClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.JsObjectsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onWindowObjectCleared() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec,
      null,
      []);
  }

};

js_injection.mojom.JsObjectsClient.getRemote = function() {
  let remote = new js_injection.mojom.JsObjectsClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.JsObjectsClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnWindowObjectCleared
js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.JsObjectsClient.OnWindowObjectCleared_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
js_injection.mojom.JsObjectsClientPtr = js_injection.mojom.JsObjectsClientRemote;
js_injection.mojom.JsObjectsClientRequest = js_injection.mojom.JsObjectsClientPendingReceiver;


// Interface: BrowserToJsMessagingFactory
js_injection.mojom.BrowserToJsMessagingFactory = {};

js_injection.mojom.BrowserToJsMessagingFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.BrowserToJsMessagingFactoryRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.BrowserToJsMessagingFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.BrowserToJsMessagingFactoryPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.BrowserToJsMessagingFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.BrowserToJsMessagingFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendBrowserToJsMessaging(browser_to_js_messaging) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec,
      null,
      [browser_to_js_messaging]);
  }

};

js_injection.mojom.BrowserToJsMessagingFactory.getRemote = function() {
  let remote = new js_injection.mojom.BrowserToJsMessagingFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.BrowserToJsMessagingFactory',
    'context');
  return remote.$;
};

// ParamsSpec for SendBrowserToJsMessaging
js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.BrowserToJsMessagingFactory.SendBrowserToJsMessaging_Params',
      packedSize: 16,
      fields: [
        { name: 'browser_to_js_messaging', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
js_injection.mojom.BrowserToJsMessagingFactoryPtr = js_injection.mojom.BrowserToJsMessagingFactoryRemote;
js_injection.mojom.BrowserToJsMessagingFactoryRequest = js_injection.mojom.BrowserToJsMessagingFactoryPendingReceiver;


// Interface: BrowserToJsMessaging
js_injection.mojom.BrowserToJsMessaging = {};

js_injection.mojom.BrowserToJsMessagingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.BrowserToJsMessagingRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.BrowserToJsMessaging';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.BrowserToJsMessagingPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.BrowserToJsMessagingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.BrowserToJsMessagingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPostMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec,
      null,
      [message]);
  }

};

js_injection.mojom.BrowserToJsMessaging.getRemote = function() {
  let remote = new js_injection.mojom.BrowserToJsMessagingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.BrowserToJsMessaging',
    'context');
  return remote.$;
};

// ParamsSpec for OnPostMessage
js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.BrowserToJsMessaging.OnPostMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
js_injection.mojom.BrowserToJsMessagingPtr = js_injection.mojom.BrowserToJsMessagingRemote;
js_injection.mojom.BrowserToJsMessagingRequest = js_injection.mojom.BrowserToJsMessagingPendingReceiver;


// Interface: JsCommunication
js_injection.mojom.JsCommunication = {};

js_injection.mojom.JsCommunicationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

js_injection.mojom.JsCommunicationRemote = class {
  static get $interfaceName() {
    return 'js_injection.mojom.JsCommunication';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      js_injection.mojom.JsCommunicationPendingReceiver,
      handle);
    this.$ = new js_injection.mojom.JsCommunicationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

js_injection.mojom.JsCommunicationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setJsObjects(js_objects, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec,
      null,
      [js_objects, client]);
  }

  addPersistentJavaScript(script) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec,
      null,
      [script]);
  }

  removePersistentJavaScript(script_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec,
      null,
      [script_id]);
  }

};

js_injection.mojom.JsCommunication.getRemote = function() {
  let remote = new js_injection.mojom.JsCommunicationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'js_injection.mojom.JsCommunication',
    'context');
  return remote.$;
};

// ParamsSpec for SetJsObjects
js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.JsCommunication.SetJsObjects_Params',
      packedSize: 24,
      fields: [
        { name: 'js_objects', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddPersistentJavaScript
js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.JsCommunication.AddPersistentJavaScript_Params',
      packedSize: 16,
      fields: [
        { name: 'script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemovePersistentJavaScript
js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec = {
  $: {
    structSpec: {
      name: 'js_injection.mojom.JsCommunication.RemovePersistentJavaScript_Params',
      packedSize: 16,
      fields: [
        { name: 'script_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
js_injection.mojom.JsCommunicationPtr = js_injection.mojom.JsCommunicationRemote;
js_injection.mojom.JsCommunicationRequest = js_injection.mojom.JsCommunicationPendingReceiver;

