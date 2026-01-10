// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/remote_objects/remote_objects.mojom
// Module: blink.mojom

'use strict';

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
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.RemoteObjectSpec), null, false, 0, undefined),
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
      [object_id, receiver],
      false);
  }

  acquireObject(object_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec,
      null,
      [object_id],
      false);
  }

  releaseObject(object_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetObject
        try {
             decoder.decodeStruct(blink.mojom.RemoteObjectHost_GetObject_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetObject (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: AcquireObject
        try {
             decoder.decodeStruct(blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AcquireObject (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: ReleaseObject
        try {
             decoder.decodeStruct(blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReleaseObject (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObjectHost_GetObject_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getObject');
          const result = this.impl.getObject(params.object_id, params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObjectHost_AcquireObject_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.acquireObject');
          const result = this.impl.acquireObject(params.object_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObjectHost_ReleaseObject_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.releaseObject');
          const result = this.impl.releaseObject(params.object_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      [name],
      false);
  }

  getMethods() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RemoteObject_GetMethods_ParamsSpec,
      blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec,
      [],
      false);
  }

  invokeMethod(name, arguments) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RemoteObject_InvokeMethod_ParamsSpec,
      blink.mojom.RemoteObject_InvokeMethod_ResponseParamsSpec,
      [name, arguments],
      false);
  }

  notifyReleasedObject() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: HasMethod
        try {
             decoder.decodeStruct(blink.mojom.RemoteObject_HasMethod_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasMethod (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetMethods
        try {
             decoder.decodeStruct(blink.mojom.RemoteObject_GetMethods_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetMethods (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: InvokeMethod
        try {
             decoder.decodeStruct(blink.mojom.RemoteObject_InvokeMethod_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InvokeMethod (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: NotifyReleasedObject
        try {
             decoder.decodeStruct(blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyReleasedObject (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObject_HasMethod_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasMethod');
          const result = this.impl.hasMethod(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_HasMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObject_GetMethods_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getMethods');
          const result = this.impl.getMethods();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RemoteObject_GetMethods_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObject_InvokeMethod_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.invokeMethod');
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
          const params = decoder.decodeStruct(blink.mojom.RemoteObject_NotifyReleasedObject_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyReleasedObject');
          const result = this.impl.notifyReleasedObject();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteObjectReceiver = blink.mojom.RemoteObjectReceiver;

blink.mojom.RemoteObjectPtr = blink.mojom.RemoteObjectRemote;
blink.mojom.RemoteObjectRequest = blink.mojom.RemoteObjectPendingReceiver;


// Interface: RemoteObjectGatewayFactory
mojo.internal.Struct(
    blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec, 'blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_Params', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.RemoteObjectHostSpec), null, false, 0, undefined),
      mojo.internal.StructField('gateway', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.RemoteObjectGatewaySpec), null, false, 0, undefined),
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateRemoteObjectGateway
        try {
             decoder.decodeStruct(blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateRemoteObjectGateway (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObjectGatewayFactory_CreateRemoteObjectGateway_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createRemoteObjectGateway');
          const result = this.impl.createRemoteObjectGateway(params.host, params.gateway);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
      [name, object_id],
      false);
  }

  removeNamedObject(name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: AddNamedObject
        try {
             decoder.decodeStruct(blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddNamedObject (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: RemoveNamedObject
        try {
             decoder.decodeStruct(blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveNamedObject (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObjectGateway_AddNamedObject_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.addNamedObject');
          const result = this.impl.addNamedObject(params.name, params.object_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.RemoteObjectGateway_RemoveNamedObject_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.removeNamedObject');
          const result = this.impl.removeNamedObject(params.name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RemoteObjectGatewayReceiver = blink.mojom.RemoteObjectGatewayReceiver;

blink.mojom.RemoteObjectGatewayPtr = blink.mojom.RemoteObjectGatewayRemote;
blink.mojom.RemoteObjectGatewayRequest = blink.mojom.RemoteObjectGatewayPendingReceiver;

