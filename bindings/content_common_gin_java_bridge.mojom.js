// Auto-generated MojoJS binding
// Source: chromium_src/content/common/gin_java_bridge.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


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
content.mojom.GinJavaBridgeErrorSpec = { $: mojo.internal.Enum() };

// Interface: GinJavaBridge
content.mojom.GinJavaBridge = {};

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
      [name, object_id, origin_matcher]);
  }

  removeNamedObject(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec,
      null,
      [name]);
  }

  setHost(host) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.GinJavaBridge_SetHost_ParamsSpec,
      null,
      [host]);
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

// ParamsSpec for AddNamedObject
content.mojom.GinJavaBridge_AddNamedObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridge.AddNamedObject_Params',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'object_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'origin_matcher', packedOffset: 16, packedBitOffset: 0, type: origin_matcher.mojom.OriginMatcherSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for RemoveNamedObject
content.mojom.GinJavaBridge_RemoveNamedObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridge.RemoveNamedObject_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetHost
content.mojom.GinJavaBridge_SetHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridge.SetHost_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.GinJavaBridgePtr = content.mojom.GinJavaBridgeRemote;
content.mojom.GinJavaBridgeRequest = content.mojom.GinJavaBridgePendingReceiver;


// Interface: GinJavaBridgeRemoteObject
content.mojom.GinJavaBridgeRemoteObject = {};

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
      []);
  }

  hasMethod(method_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec,
      [method_name]);
  }

  invokeMethod(method_name, arguments) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec,
      content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec,
      [method_name, arguments]);
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

// ParamsSpec for GetMethods
content.mojom.GinJavaBridgeRemoteObject_GetMethods_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridgeRemoteObject.GetMethods_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.mojom.GinJavaBridgeRemoteObject_GetMethods_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'method_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HasMethod
content.mojom.GinJavaBridgeRemoteObject_HasMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridgeRemoteObject.HasMethod_Params',
      packedSize: 16,
      fields: [
        { name: 'method_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.mojom.GinJavaBridgeRemoteObject_HasMethod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InvokeMethod
content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridgeRemoteObject.InvokeMethod_Params',
      packedSize: 24,
      fields: [
        { name: 'method_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'arguments', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.mojom.GinJavaBridgeRemoteObject_InvokeMethod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error_code', packedOffset: 0, packedBitOffset: 0, type: content.mojom.GinJavaBridgeErrorSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.GinJavaBridgeRemoteObjectPtr = content.mojom.GinJavaBridgeRemoteObjectRemote;
content.mojom.GinJavaBridgeRemoteObjectRequest = content.mojom.GinJavaBridgeRemoteObjectPendingReceiver;


// Interface: GinJavaBridgeHost
content.mojom.GinJavaBridgeHost = {};

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
      [object_id, receiver]);
  }

  objectWrapperDeleted(object_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec,
      null,
      [object_id]);
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

// ParamsSpec for GetObject
content.mojom.GinJavaBridgeHost_GetObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridgeHost.GetObject_Params',
      packedSize: 16,
      fields: [
        { name: 'object_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ObjectWrapperDeleted
content.mojom.GinJavaBridgeHost_ObjectWrapperDeleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.GinJavaBridgeHost.ObjectWrapperDeleted_Params',
      packedSize: 16,
      fields: [
        { name: 'object_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.GinJavaBridgeHostPtr = content.mojom.GinJavaBridgeHostRemote;
content.mojom.GinJavaBridgeHostRequest = content.mojom.GinJavaBridgeHostPendingReceiver;

