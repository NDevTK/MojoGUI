// Auto-generated MojoJS binding
// Source: chromium_src/content/common/gin_java_bridge.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var origin_matcher = origin_matcher || {};
var mojo_base = mojo_base || {};

content.mojom.GinJavaBridgeErrorSpec = { $: mojo.internal.Enum() };
content.mojom.GinJavaBridge = {};
content.mojom.GinJavaBridge.$interfaceName = 'content.mojom.GinJavaBridge';
content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec = { $: {} };
content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec = { $: {} };
content.mojom.GinJavaBridge_SetHost_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject = {};
content.mojom.GinJavaBridgeRemoteObject.$interfaceName = 'content.mojom.GinJavaBridgeRemoteObject';
content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec = { $: {} };
content.mojom.GinJavaBridgeHost = {};
content.mojom.GinJavaBridgeHost.$interfaceName = 'content.mojom.GinJavaBridgeHost';
content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec = { $: {} };
content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec = { $: {} };

// Enum: GinJavaBridgeError
content.mojom.GinJavaBridgeError = {
  kGinJavaBridgeNoError: 0,
  kGinJavaBridgeUnknownObjectId: 1,
  kGinJavaBridgeObjectIsGone: 2,
  kGinJavaBridgeMethodNotFound: 3,
  kGinJavaBridgeAccessToObjectGetClassIsBlocked: 4,
  kGinJavaBridgeJavaExceptionRaised: 5,
  kGinJavaBridgeNonAssignableTypes: 6,
  kGinJavaBridgeRenderFrameDeleted: 7,
};

// Interface: GinJavaBridge
mojo.internal.Struct(
    content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec, 'content.mojom.GinJavaBridge_AddNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('origin_matcher', 8, 0, origin_matcher.mojom.OriginMatcherSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec, 'content.mojom.GinJavaBridge_RemoveNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridge_SetHost_ParamsSpec, 'content.mojom.GinJavaBridge_SetHost_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(content.mojom.GinJavaBridgeHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.GinJavaBridgePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.GinJavaBridgeRemote = class {
  static get $interfaceName() {
    return 'content.mojom.GinJavaBridge';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.GinJavaBridgePendingReceiver,
      handle);
    this.$ = new content.mojom.GinJavaBridgeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.GinJavaBridgeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addNamedObject(name, object_id, origin_matcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec,
      null,
      [name, object_id, origin_matcher],
      false);
  }

  removeNamedObject(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec,
      null,
      [name],
      false);
  }

  setHost(host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.GinJavaBridge_SetHost_ParamsSpec,
      null,
      [host],
      false);
  }

};

content.mojom.GinJavaBridge.getRemote = function() {
  let remote = new content.mojom.GinJavaBridgeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.GinJavaBridge',
    'context');
  return remote.$;
};

content.mojom.GinJavaBridgeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addNamedObject(params.name, params.object_id, params.origin_matcher);
          break;
        }
        case 1: {
          const params = content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec.$.decode(message.payload);
          const result = this.impl.removeNamedObject(params.name);
          break;
        }
        case 2: {
          const params = content.mojom.GinJavaBridge_SetHost_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setHost(params.host);
          break;
        }
      }
    }});
  }
};

content.mojom.GinJavaBridgeReceiver = content.mojom.GinJavaBridgeReceiver;

content.mojom.GinJavaBridgePtr = content.mojom.GinJavaBridgeRemote;
content.mojom.GinJavaBridgeRequest = content.mojom.GinJavaBridgePendingReceiver;


// Interface: GinJavaBridgeRemoteObject
mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_GetMethods_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParams', [
      mojo.internal.StructField('method_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_HasMethod_Params', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_Params', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec, 'content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParams', [
      mojo.internal.StructField('error_code', 0, 0, content.mojom.GinJavaBridgeErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.GinJavaBridgeRemoteObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.GinJavaBridgeRemoteObjectRemote = class {
  static get $interfaceName() {
    return 'content.mojom.GinJavaBridgeRemoteObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.GinJavaBridgeRemoteObjectPendingReceiver,
      handle);
    this.$ = new content.mojom.GinJavaBridgeRemoteObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.GinJavaBridgeRemoteObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMethods() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec,
      [],
      false);
  }

  hasMethod(method_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec,
      [method_name],
      false);
  }

  invokeMethod(method_name, arguments) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec,
      [method_name, arguments],
      false);
  }

};

content.mojom.GinJavaBridgeRemoteObject.getRemote = function() {
  let remote = new content.mojom.GinJavaBridgeRemoteObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.GinJavaBridgeRemoteObject',
    'context');
  return remote.$;
};

content.mojom.GinJavaBridgeRemoteObjectReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMethods();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hasMethod(params.method_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec.$.decode(message.payload);
          const result = this.impl.invokeMethod(params.method_name, params.arguments);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

content.mojom.GinJavaBridgeRemoteObjectReceiver = content.mojom.GinJavaBridgeRemoteObjectReceiver;

content.mojom.GinJavaBridgeRemoteObjectPtr = content.mojom.GinJavaBridgeRemoteObjectRemote;
content.mojom.GinJavaBridgeRemoteObjectRequest = content.mojom.GinJavaBridgeRemoteObjectPendingReceiver;


// Interface: GinJavaBridgeHost
mojo.internal.Struct(
    content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec, 'content.mojom.GinJavaBridgeHost_GetObject_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(content.mojom.GinJavaBridgeRemoteObjectSpec), null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec, 'content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_Params', [
      mojo.internal.StructField('object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.GinJavaBridgeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.GinJavaBridgeHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.GinJavaBridgeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.GinJavaBridgeHostPendingReceiver,
      handle);
    this.$ = new content.mojom.GinJavaBridgeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.GinJavaBridgeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getObject(object_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec,
      null,
      [object_id, receiver],
      false);
  }

  objectWrapperDeleted(object_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec,
      null,
      [object_id],
      false);
  }

};

content.mojom.GinJavaBridgeHost.getRemote = function() {
  let remote = new content.mojom.GinJavaBridgeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.GinJavaBridgeHost',
    'context');
  return remote.$;
};

content.mojom.GinJavaBridgeHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getObject(params.object_id, params.receiver);
          break;
        }
        case 1: {
          const params = content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.objectWrapperDeleted(params.object_id);
          break;
        }
      }
    }});
  }
};

content.mojom.GinJavaBridgeHostReceiver = content.mojom.GinJavaBridgeHostReceiver;

content.mojom.GinJavaBridgeHostPtr = content.mojom.GinJavaBridgeHostRemote;
content.mojom.GinJavaBridgeHostRequest = content.mojom.GinJavaBridgeHostPendingReceiver;

