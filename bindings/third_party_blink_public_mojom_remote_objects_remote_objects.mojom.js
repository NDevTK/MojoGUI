// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/remote_objects/remote_objects.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SingletonJavaScriptValue
blink.mojom.SingletonJavaScriptValue = {
};

// Enum: RemoteArrayType
blink.mojom.RemoteArrayType = {
};

// Enum: RemoteInvocationError
blink.mojom.RemoteInvocationError = {
  OK: 0,
  METHOD_NOT_FOUND: 1,
  OBJECT_GET_CLASS_BLOCKED: 2,
  EXCEPTION_THROWN: 3,
  NON_ASSIGNABLE_TYPES: 4,
};

// Struct: RemoteTypedArray
blink.mojom.RemoteTypedArray = class {
  constructor(values = {}) {
    this.buffer = values.buffer !== undefined ? values.buffer : [];
  }
};

// Struct: RemoteInvocationResult
blink.mojom.RemoteInvocationResult = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : null;
  }
};

// Interface: RemoteObjectHost
blink.mojom.RemoteObjectHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteObjectHost';
  }

  getObject(object_id, receiver) {
    // Method: GetObject
    // Call: GetObject(object_id, receiver)
  }

  acquireObject(object_id) {
    // Method: AcquireObject
    // Call: AcquireObject(object_id)
  }

  releaseObject(object_id) {
    // Method: ReleaseObject
    // Call: ReleaseObject(object_id)
  }

};

blink.mojom.RemoteObjectHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteObject
blink.mojom.RemoteObjectPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteObject';
  }

  hasMethod(name) {
    // Method: HasMethod
    return new Promise((resolve) => {
      // Call: HasMethod(name)
      resolve({});
    });
  }

  getMethods() {
    // Method: GetMethods
    return new Promise((resolve) => {
      // Call: GetMethods()
      resolve({});
    });
  }

  invokeMethod(name, arguments) {
    // Method: InvokeMethod
    return new Promise((resolve) => {
      // Call: InvokeMethod(name, arguments)
      resolve({});
    });
  }

  notifyReleasedObject() {
    // Method: NotifyReleasedObject
    // Call: NotifyReleasedObject()
  }

};

blink.mojom.RemoteObjectRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteObjectGatewayFactory
blink.mojom.RemoteObjectGatewayFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteObjectGatewayFactory';
  }

  createRemoteObjectGateway(host, gateway) {
    // Method: CreateRemoteObjectGateway
    // Call: CreateRemoteObjectGateway(host, gateway)
  }

};

blink.mojom.RemoteObjectGatewayFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemoteObjectGateway
blink.mojom.RemoteObjectGatewayPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.RemoteObjectGateway';
  }

  addNamedObject(name, object_id) {
    // Method: AddNamedObject
    // Call: AddNamedObject(name, object_id)
  }

  removeNamedObject(name) {
    // Method: RemoveNamedObject
    // Call: RemoveNamedObject(name)
  }

};

blink.mojom.RemoteObjectGatewayRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
