// Auto-generated MojoJS binding
// Source: chromium_src/components/js_injection/common/interfaces.mojom
// Module: js_injection.mojom

'use strict';

// Module namespace
var js_injection = js_injection || {};
js_injection.mojom = js_injection.mojom || {};
var origin_matcher = origin_matcher || {};
var mojo_base = mojo_base || {};
var blink = blink || {};

js_injection.mojom.JsWebMessageSpec = { $: {} };
js_injection.mojom.JsObjectSpec = { $: {} };
js_injection.mojom.JavaScriptExecutableSpec = { $: {} };
js_injection.mojom.JsWebMessageArrayBufferValueSpec = { $: {} };
js_injection.mojom.JsToBrowserMessaging = {};
js_injection.mojom.JsToBrowserMessaging.$interfaceName = 'js_injection.mojom.JsToBrowserMessaging';
js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec = { $: {} };
js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec = { $: {} };
js_injection.mojom.JsObjectsClient = {};
js_injection.mojom.JsObjectsClient.$interfaceName = 'js_injection.mojom.JsObjectsClient';
js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec = { $: {} };
js_injection.mojom.BrowserToJsMessagingFactory = {};
js_injection.mojom.BrowserToJsMessagingFactory.$interfaceName = 'js_injection.mojom.BrowserToJsMessagingFactory';
js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec = { $: {} };
js_injection.mojom.BrowserToJsMessaging = {};
js_injection.mojom.BrowserToJsMessaging.$interfaceName = 'js_injection.mojom.BrowserToJsMessaging';
js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec = { $: {} };
js_injection.mojom.JsCommunication = {};
js_injection.mojom.JsCommunication.$interfaceName = 'js_injection.mojom.JsCommunication';
js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec = { $: {} };
js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec = { $: {} };
js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec = { $: {} };

// Union: JsWebMessage
mojo.internal.Union(
    js_injection.mojom.JsWebMessageSpec, 'js_injection.mojom.JsWebMessage', {
      'string_value': {
        'ordinal': 0,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'array_buffer_value': {
        'ordinal': 1,
        'type': js_injection.mojom.JsWebMessageArrayBufferValueSpec.$,
        'nullable': false,
      },
    });

// Struct: JsObject
mojo.internal.Struct(
    js_injection.mojom.JsObjectSpec, 'js_injection.mojom.JsObject', [
      mojo.internal.StructField('js_object_name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('js_to_browser_messaging', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('browser_to_js_factory', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('origin_matcher', 24, 0, origin_matcher.mojom.OriginMatcherSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('js_world', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: JavaScriptExecutable
mojo.internal.Struct(
    js_injection.mojom.JavaScriptExecutableSpec, 'js_injection.mojom.JavaScriptExecutable', [
      mojo.internal.StructField('script', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin_matcher', 8, 0, origin_matcher.mojom.OriginMatcherSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('injection_time', 16, 0, js_injection.mojom.DocumentInjectionTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('script_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('js_world', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: JsWebMessageArrayBufferValue
mojo.internal.Struct(
    js_injection.mojom.JsWebMessageArrayBufferValueSpec, 'js_injection.mojom.JsWebMessageArrayBufferValue', [
      mojo.internal.StructField('array_buffer_value', 0, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('max_byte_length', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('is_resizable_by_user_javascript', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: JsToBrowserMessaging
mojo.internal.Struct(
    js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec, 'js_injection.mojom.JsToBrowserMessaging_PostMessage_Params', [
      mojo.internal.StructField('message', 0, 0, js_injection.mojom.JsWebMessageSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('ports', 8, 0, mojo.internal.Array(blink.mojom.MessagePortDescriptorSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec, 'js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_Params', [
      mojo.internal.StructField('browser_to_js_messaging', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [message, ports],
      false);
  }

  setBrowserToJsMessaging(browser_to_js_messaging) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec,
      null,
      [browser_to_js_messaging],
      false);
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

js_injection.mojom.JsToBrowserMessagingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = js_injection.mojom.JsToBrowserMessaging_PostMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.postMessage(params.message, params.ports);
          break;
        }
        case 1: {
          const params = js_injection.mojom.JsToBrowserMessaging_SetBrowserToJsMessaging_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBrowserToJsMessaging(params.browser_to_js_messaging);
          break;
        }
      }
    }});
  }
};

js_injection.mojom.JsToBrowserMessagingReceiver = js_injection.mojom.JsToBrowserMessagingReceiver;

js_injection.mojom.JsToBrowserMessagingPtr = js_injection.mojom.JsToBrowserMessagingRemote;
js_injection.mojom.JsToBrowserMessagingRequest = js_injection.mojom.JsToBrowserMessagingPendingReceiver;


// Interface: JsObjectsClient
mojo.internal.Struct(
    js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec, 'js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

js_injection.mojom.JsObjectsClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = js_injection.mojom.JsObjectsClient_OnWindowObjectCleared_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWindowObjectCleared();
          break;
        }
      }
    }});
  }
};

js_injection.mojom.JsObjectsClientReceiver = js_injection.mojom.JsObjectsClientReceiver;

js_injection.mojom.JsObjectsClientPtr = js_injection.mojom.JsObjectsClientRemote;
js_injection.mojom.JsObjectsClientRequest = js_injection.mojom.JsObjectsClientPendingReceiver;


// Interface: BrowserToJsMessagingFactory
mojo.internal.Struct(
    js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec, 'js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_Params', [
      mojo.internal.StructField('browser_to_js_messaging', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [browser_to_js_messaging],
      false);
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

js_injection.mojom.BrowserToJsMessagingFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = js_injection.mojom.BrowserToJsMessagingFactory_SendBrowserToJsMessaging_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendBrowserToJsMessaging(params.browser_to_js_messaging);
          break;
        }
      }
    }});
  }
};

js_injection.mojom.BrowserToJsMessagingFactoryReceiver = js_injection.mojom.BrowserToJsMessagingFactoryReceiver;

js_injection.mojom.BrowserToJsMessagingFactoryPtr = js_injection.mojom.BrowserToJsMessagingFactoryRemote;
js_injection.mojom.BrowserToJsMessagingFactoryRequest = js_injection.mojom.BrowserToJsMessagingFactoryPendingReceiver;


// Interface: BrowserToJsMessaging
mojo.internal.Struct(
    js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec, 'js_injection.mojom.BrowserToJsMessaging_OnPostMessage_Params', [
      mojo.internal.StructField('message', 0, 0, js_injection.mojom.JsWebMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [message],
      false);
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

js_injection.mojom.BrowserToJsMessagingReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = js_injection.mojom.BrowserToJsMessaging_OnPostMessage_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPostMessage(params.message);
          break;
        }
      }
    }});
  }
};

js_injection.mojom.BrowserToJsMessagingReceiver = js_injection.mojom.BrowserToJsMessagingReceiver;

js_injection.mojom.BrowserToJsMessagingPtr = js_injection.mojom.BrowserToJsMessagingRemote;
js_injection.mojom.BrowserToJsMessagingRequest = js_injection.mojom.BrowserToJsMessagingPendingReceiver;


// Interface: JsCommunication
mojo.internal.Struct(
    js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec, 'js_injection.mojom.JsCommunication_SetJsObjects_Params', [
      mojo.internal.StructField('js_objects', 0, 0, mojo.internal.Array(js_injection.mojom.JsObjectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec, 'js_injection.mojom.JsCommunication_AddPersistentJavaScript_Params', [
      mojo.internal.StructField('script', 0, 0, js_injection.mojom.JavaScriptExecutableSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec, 'js_injection.mojom.JsCommunication_RemovePersistentJavaScript_Params', [
      mojo.internal.StructField('script_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [js_objects, client],
      false);
  }

  addPersistentJavaScript(script) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec,
      null,
      [script],
      false);
  }

  removePersistentJavaScript(script_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec,
      null,
      [script_id],
      false);
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

js_injection.mojom.JsCommunicationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = js_injection.mojom.JsCommunication_SetJsObjects_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setJsObjects(params.js_objects, params.client);
          break;
        }
        case 1: {
          const params = js_injection.mojom.JsCommunication_AddPersistentJavaScript_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addPersistentJavaScript(params.script);
          break;
        }
        case 2: {
          const params = js_injection.mojom.JsCommunication_RemovePersistentJavaScript_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removePersistentJavaScript(params.script_id);
          break;
        }
      }
    }});
  }
};

js_injection.mojom.JsCommunicationReceiver = js_injection.mojom.JsCommunicationReceiver;

js_injection.mojom.JsCommunicationPtr = js_injection.mojom.JsCommunicationRemote;
js_injection.mojom.JsCommunicationRequest = js_injection.mojom.JsCommunicationPendingReceiver;

