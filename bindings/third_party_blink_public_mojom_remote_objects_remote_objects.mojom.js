// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/remote_objects/remote_objects.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.SingletonJavaScriptValueSpec = { $: mojo.internal.Enum() };
blink.mojom.RemoteArrayTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.RemoteInvocationErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.RemoteInvocationArgumentSpec = { $: {} };
blink.mojom.RemoteInvocationResultValueSpec = { $: {} };
blink.mojom.RemoteTypedArraySpec = { $: {} };
blink.mojom.RemoteInvocationResultSpec = { $: {} };
blink.mojom.RemoteObjectHost = {};
blink.mojom.RemoteObjectHost.$interfaceName = 'blink.mojom.RemoteObjectHost';
blink.mojom.RemoteObjectHost_GetObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObject = {};
blink.mojom.RemoteObject.$interfaceName = 'blink.mojom.RemoteObject';
blink.mojom.RemoteObject_HasMethod_ParamsSpec = { $: {} };
blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec = { $: {} };
blink.mojom.RemoteObject_GetMethods_ParamsSpec = { $: {} };
blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec = { $: {} };
blink.mojom.RemoteObject_InvokeMethod_ParamsSpec = { $: {} };
blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec = { $: {} };
blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectGatewayFactory = {};
blink.mojom.RemoteObjectGatewayFactory.$interfaceName = 'blink.mojom.RemoteObjectGatewayFactory';
blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectGateway = {};
blink.mojom.RemoteObjectGateway.$interfaceName = 'blink.mojom.RemoteObjectGateway';
blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec = { $: {} };
blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec = { $: {} };

// Enum: SingletonJavaScriptValue
blink.mojom.SingletonJavaScriptValue = {
  kNull: 0,
  kUndefined: 1,
};

// Enum: RemoteArrayType
blink.mojom.RemoteArrayType = {
  kInt8Array: 1,
  kUint8Array: 2,
  kInt16Array: 3,
  kUint16Array: 4,
  kInt32Array: 5,
  kUint32Array: 6,
  kFloat32Array: 7,
  kFloat64Array: 8,
};

// Enum: RemoteInvocationError
blink.mojom.RemoteInvocationError = {
  OK: 0,
  METHOD_NOT_FOUND: 1,
  OBJECT_GET_CLASS_BLOCKED: 2,
  EXCEPTION_THROWN: 3,
  NON_ASSIGNABLE_TYPES: 4,
};

// Union: RemoteInvocationArgument
mojo.internal.Union(
    blink.mojom.RemoteInvocationArgumentSpec, 'blink.mojom.RemoteInvocationArgument', {
      'number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'singleton_value': {
        'ordinal': 3,
        'type': blink.mojom.SingletonJavaScriptValueSpec.$,
        'nullable': false,
      },
      'array_value': {
        'ordinal': 4,
        'type': mojo.internal.Array(blink.mojom.RemoteInvocationArgumentSpec.$, false),
        'nullable': false,
      },
      'typed_array_value': {
        'ordinal': 5,
        'type': blink.mojom.RemoteTypedArraySpec.$,
        'nullable': false,
      },
      'object_id_value': {
        'ordinal': 6,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Union: RemoteInvocationResultValue
mojo.internal.Union(
    blink.mojom.RemoteInvocationResultValueSpec, 'blink.mojom.RemoteInvocationResultValue', {
      'number_value': {
        'ordinal': 0,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'boolean_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 2,
        'type': mojo_base.mojom.String16Spec.$,
        'nullable': false,
      },
      'singleton_value': {
        'ordinal': 3,
        'type': blink.mojom.SingletonJavaScriptValueSpec.$,
        'nullable': false,
      },
      'object_id': {
        'ordinal': 4,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });

// Struct: RemoteTypedArray
mojo.internal.Struct(
    blink.mojom.RemoteTypedArraySpec, 'blink.mojom.RemoteTypedArray', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.RemoteArrayTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RemoteInvocationResult
mojo.internal.Struct(
    blink.mojom.RemoteInvocationResultSpec, 'blink.mojom.RemoteInvocationResult', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.RemoteInvocationErrorSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, blink.mojom.RemoteInvocationResultValueSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: RemoteObjectHost
mojo.internal.Struct(
    blink.mojom.RemoteObjectHost_GetObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_GetObject_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.RemoteObjectRemote), null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_AcquireObject_Params', [
      mojo.internal.StructField('object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec, 'blink.mojom.RemoteObjectHost_ReleaseObject_Params', [
      mojo.internal.StructField('object_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getObject(object_id, receiver) {
    return this.$.getObject(object_id, receiver);
  }
  acquireObject(object_id) {
    return this.$.acquireObject(object_id);
  }
  releaseObject(object_id) {
    return this.$.releaseObject(object_id);
  }
};

blink.mojom.RemoteObjectHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getObject(object_id, receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObjectHost_GetObject_ParamsSpec,
      null,
      [object_id, receiver],
      false);
  }

  acquireObject(object_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec,
      null,
      [object_id],
      false);
  }

  releaseObject(object_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec,
      null,
      [object_id],
      false);
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

blink.mojom.RemoteObjectHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObjectHost', [
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObjectHost_GetObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectHost_GetObject_ParamsSpec.$.structSpec);
          const result = this.impl.getObject(params.object_id, params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec.$.structSpec);
          const result = this.impl.acquireObject(params.object_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec.$.structSpec);
          const result = this.impl.releaseObject(params.object_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.RemoteObjectHostReceiver = blink.mojom.RemoteObjectHostReceiver;

blink.mojom.RemoteObjectHostPtr = blink.mojom.RemoteObjectHostRemote;
blink.mojom.RemoteObjectHostRequest = blink.mojom.RemoteObjectHostPendingReceiver;


// Interface: RemoteObject
mojo.internal.Struct(
    blink.mojom.RemoteObject_HasMethod_ParamsSpec, 'blink.mojom.RemoteObject_HasMethod_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec, 'blink.mojom.RemoteObject_HasMethod_ResponseParams', [
      mojo.internal.StructField('method_exists', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_GetMethods_ParamsSpec, 'blink.mojom.RemoteObject_GetMethods_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec, 'blink.mojom.RemoteObject_GetMethods_ResponseParams', [
      mojo.internal.StructField('method_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_InvokeMethod_ParamsSpec, 'blink.mojom.RemoteObject_InvokeMethod_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arguments', 8, 0, mojo.internal.Array(blink.mojom.RemoteInvocationArgumentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec, 'blink.mojom.RemoteObject_InvokeMethod_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, blink.mojom.RemoteInvocationResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec, 'blink.mojom.RemoteObject_NotifyReleasedObject_Params', [
    ],
    [[0, 8]]);

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
  hasMethod(name) {
    return this.$.hasMethod(name);
  }
  getMethods() {
    return this.$.getMethods();
  }
  invokeMethod(name, arguments) {
    return this.$.invokeMethod(name, arguments);
  }
  notifyReleasedObject() {
    return this.$.notifyReleasedObject();
  }
};

blink.mojom.RemoteObjectRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObject', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  hasMethod(name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObject_HasMethod_ParamsSpec,
      blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec,
      [name],
      false);
  }

  getMethods() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteObject_GetMethods_ParamsSpec,
      blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec,
      [],
      false);
  }

  invokeMethod(name, arguments) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RemoteObject_InvokeMethod_ParamsSpec,
      blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec,
      [name, arguments],
      false);
  }

  notifyReleasedObject() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec,
      null,
      [],
      false);
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

blink.mojom.RemoteObjectReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObject', [
      { explicit: null },
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObject_HasMethod_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObject_GetMethods_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObject_InvokeMethod_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_HasMethod_ParamsSpec.$.structSpec);
          const result = this.impl.hasMethod(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_GetMethods_ParamsSpec.$.structSpec);
          const result = this.impl.getMethods();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_InvokeMethod_ParamsSpec.$.structSpec);
          const result = this.impl.invokeMethod(params.name, params.arguments);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec.$.structSpec);
          const result = this.impl.notifyReleasedObject();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.RemoteObjectReceiver = blink.mojom.RemoteObjectReceiver;

blink.mojom.RemoteObjectPtr = blink.mojom.RemoteObjectRemote;
blink.mojom.RemoteObjectRequest = blink.mojom.RemoteObjectPendingReceiver;


// Interface: RemoteObjectGatewayFactory
mojo.internal.Struct(
    blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec, 'blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.RemoteObjectHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('gateway', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.RemoteObjectGatewayRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
  createRemoteObjectGateway(host, gateway) {
    return this.$.createRemoteObjectGateway(host, gateway);
  }
};

blink.mojom.RemoteObjectGatewayFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGatewayFactory', [
      { explicit: null },
    ]);
  }

  createRemoteObjectGateway(host, gateway) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec,
      null,
      [host, gateway],
      false);
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

blink.mojom.RemoteObjectGatewayFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGatewayFactory', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec.$.structSpec);
          const result = this.impl.createRemoteObjectGateway(params.host, params.gateway);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.RemoteObjectGatewayFactoryReceiver = blink.mojom.RemoteObjectGatewayFactoryReceiver;

blink.mojom.RemoteObjectGatewayFactoryPtr = blink.mojom.RemoteObjectGatewayFactoryRemote;
blink.mojom.RemoteObjectGatewayFactoryRequest = blink.mojom.RemoteObjectGatewayFactoryPendingReceiver;


// Interface: RemoteObjectGateway
mojo.internal.Struct(
    blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec, 'blink.mojom.RemoteObjectGateway_AddNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('object_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec, 'blink.mojom.RemoteObjectGateway_RemoveNamedObject_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  addNamedObject(name, object_id) {
    return this.$.addNamedObject(name, object_id);
  }
  removeNamedObject(name) {
    return this.$.removeNamedObject(name);
  }
};

blink.mojom.RemoteObjectGatewayRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGateway', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addNamedObject(name, object_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec,
      null,
      [name, object_id],
      false);
  }

  removeNamedObject(name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec,
      null,
      [name],
      false);
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

blink.mojom.RemoteObjectGatewayReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RemoteObjectGateway', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec.$.structSpec);
          const result = this.impl.addNamedObject(params.name, params.object_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec.$.structSpec);
          const result = this.impl.removeNamedObject(params.name);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.RemoteObjectGatewayReceiver = blink.mojom.RemoteObjectGatewayReceiver;

blink.mojom.RemoteObjectGatewayPtr = blink.mojom.RemoteObjectGatewayRemote;
blink.mojom.RemoteObjectGatewayRequest = blink.mojom.RemoteObjectGatewayPendingReceiver;

