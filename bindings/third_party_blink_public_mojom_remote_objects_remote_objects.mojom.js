// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/remote_objects/remote_objects.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SingletonJavaScriptValue
blink.mojom.SingletonJavaScriptValue = {
  kNull: 0,
  kUndefined: 1,
};
blink.mojom.SingletonJavaScriptValueSpec = { $: mojo.internal.Enum() };

// Enum: RemoteArrayType
blink.mojom.RemoteArrayType = {
  kInt8Array: 0,
  kUint8Array: 1,
  kInt16Array: 2,
  kUint16Array: 3,
  kInt32Array: 4,
  kUint32Array: 5,
  kFloat32Array: 6,
  kFloat64Array: 7,
};
blink.mojom.RemoteArrayTypeSpec = { $: mojo.internal.Enum() };

// Enum: RemoteInvocationError
blink.mojom.RemoteInvocationError = {
  OK: 0,
  METHOD_NOT_FOUND: 1,
  OBJECT_GET_CLASS_BLOCKED: 2,
  EXCEPTION_THROWN: 3,
  NON_ASSIGNABLE_TYPES: 4,
};
blink.mojom.RemoteInvocationErrorSpec = { $: mojo.internal.Enum() };

// Union: RemoteInvocationArgument
blink.mojom.RemoteInvocationArgumentSpec = { $: mojo.internal.Union(
    'blink.mojom.RemoteInvocationArgument', {
      'number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
      }},
      'boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      }},
      'string_value': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec,
      }},
      'singleton_value': {
        'ordinal': 3,
        'type': blink.mojom.SingletonJavaScriptValueSpec,
      }},
      'array_value': {
        'ordinal': 4,
        'type': mojo.internal.Array(blink.mojom.RemoteInvocationArgumentSpec, false),
      }},
      'typed_array_value': {
        'ordinal': 5,
        'type': blink.mojom.RemoteTypedArraySpec,
      }},
      'object_id_value': {
        'ordinal': 6,
        'type': mojo.internal.Int32,
      }},
    })
};

// Union: RemoteInvocationResultValue
blink.mojom.RemoteInvocationResultValueSpec = { $: mojo.internal.Union(
    'blink.mojom.RemoteInvocationResultValue', {
      'number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
      }},
      'boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      }},
      'string_value': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec,
      }},
      'singleton_value': {
        'ordinal': 3,
        'type': blink.mojom.SingletonJavaScriptValueSpec,
      }},
      'object_id': {
        'ordinal': 4,
        'type': mojo.internal.Int32,
      }},
    })
};

// Struct: RemoteTypedArray
blink.mojom.RemoteTypedArraySpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteTypedArray',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RemoteArrayTypeSpec, nullable: false, minVersion: 0 },
        { name: 'buffer', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: RemoteInvocationResult
blink.mojom.RemoteInvocationResultSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteInvocationResult',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RemoteInvocationErrorSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.RemoteInvocationResultValueSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: RemoteObjectHost
blink.mojom.RemoteObjectHost = {};

blink.mojom.RemoteObjectHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getObject(object_id, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteObjectHost_GetObject_ParamsSpec,
      null,
      [object_id, receiver]);
  }

  acquireObject(object_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec,
      null,
      [object_id]);
  }

  releaseObject(object_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec,
      null,
      [object_id]);
  }

};

blink.mojom.RemoteObjectHost.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetObject
blink.mojom.RemoteObjectHost_GetObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObjectHost.GetObject_Params',
      packedSize: 16,
      fields: [
        { name: 'object_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AcquireObject
blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObjectHost.AcquireObject_Params',
      packedSize: 16,
      fields: [
        { name: 'object_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReleaseObject
blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObjectHost.ReleaseObject_Params',
      packedSize: 16,
      fields: [
        { name: 'object_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.RemoteObjectHostPtr = blink.mojom.RemoteObjectHostRemote;
blink.mojom.RemoteObjectHostRequest = blink.mojom.RemoteObjectHostPendingReceiver;


// Interface: RemoteObject
blink.mojom.RemoteObject = {};

blink.mojom.RemoteObjectPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObject';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasMethod(name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteObject_HasMethod_ParamsSpec,
      blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec,
      [name]);
  }

  getMethods() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteObject_GetMethods_ParamsSpec,
      blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec,
      []);
  }

  invokeMethod(name, arguments) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RemoteObject_InvokeMethod_ParamsSpec,
      blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec,
      [name, arguments]);
  }

  notifyReleasedObject() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.RemoteObject.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObject',
    'context');
  return remote.$;
};

// ParamsSpec for HasMethod
blink.mojom.RemoteObject_HasMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObject.HasMethod_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'method_exists', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetMethods
blink.mojom.RemoteObject_GetMethods_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObject.GetMethods_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec = {
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

// ParamsSpec for InvokeMethod
blink.mojom.RemoteObject_InvokeMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObject.InvokeMethod_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'arguments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.RemoteInvocationArgumentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RemoteInvocationResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for NotifyReleasedObject
blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObject.NotifyReleasedObject_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.RemoteObjectPtr = blink.mojom.RemoteObjectRemote;
blink.mojom.RemoteObjectRequest = blink.mojom.RemoteObjectPendingReceiver;


// Interface: RemoteObjectGatewayFactory
blink.mojom.RemoteObjectGatewayFactory = {};

blink.mojom.RemoteObjectGatewayFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectGatewayFactoryRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectGatewayFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectGatewayFactoryPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectGatewayFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectGatewayFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createRemoteObjectGateway(host, gateway) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec,
      null,
      [host, gateway]);
  }

};

blink.mojom.RemoteObjectGatewayFactory.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectGatewayFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectGatewayFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateRemoteObjectGateway
blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObjectGatewayFactory.CreateRemoteObjectGateway_Params',
      packedSize: 16,
      fields: [
        { name: 'host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
        { name: 'gateway', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.RemoteObjectGatewayFactoryPtr = blink.mojom.RemoteObjectGatewayFactoryRemote;
blink.mojom.RemoteObjectGatewayFactoryRequest = blink.mojom.RemoteObjectGatewayFactoryPendingReceiver;


// Interface: RemoteObjectGateway
blink.mojom.RemoteObjectGateway = {};

blink.mojom.RemoteObjectGatewayPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RemoteObjectGatewayRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RemoteObjectGateway';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RemoteObjectGatewayPendingReceiver,
      handle);
    this.$ = new blink.mojom.RemoteObjectGatewayRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.RemoteObjectGatewayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addNamedObject(name, object_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec,
      null,
      [name, object_id]);
  }

  removeNamedObject(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec,
      null,
      [name]);
  }

};

blink.mojom.RemoteObjectGateway.getRemote = function() {
  let remote = new blink.mojom.RemoteObjectGatewayRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RemoteObjectGateway',
    'context');
  return remote.$;
};

// ParamsSpec for AddNamedObject
blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObjectGateway.AddNamedObject_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'object_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for RemoveNamedObject
blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.RemoteObjectGateway.RemoveNamedObject_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.RemoteObjectGatewayPtr = blink.mojom.RemoteObjectGatewayRemote;
blink.mojom.RemoteObjectGatewayRequest = blink.mojom.RemoteObjectGatewayPendingReceiver;

