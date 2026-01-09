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

// Interface: GinJavaBridge
content.mojom.GinJavaBridgePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.GinJavaBridge';
  }

  addNamedObject(name, object_id, origin_matcher) {
    // Method: AddNamedObject
    // Call: AddNamedObject(name, object_id, origin_matcher)
  }

  removeNamedObject(name) {
    // Method: RemoveNamedObject
    // Call: RemoveNamedObject(name)
  }

  setHost(host) {
    // Method: SetHost
    // Call: SetHost(host)
  }

};

content.mojom.GinJavaBridgeRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GinJavaBridgeRemoteObject
content.mojom.GinJavaBridgeRemoteObjectPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.GinJavaBridgeRemoteObject';
  }

  getMethods() {
    // Method: GetMethods
    return new Promise((resolve) => {
      // Call: GetMethods()
      resolve({});
    });
  }

  hasMethod(method_name) {
    // Method: HasMethod
    return new Promise((resolve) => {
      // Call: HasMethod(method_name)
      resolve({});
    });
  }

  invokeMethod(method_name, arguments) {
    // Method: InvokeMethod
    return new Promise((resolve) => {
      // Call: InvokeMethod(method_name, arguments)
      resolve({});
    });
  }

};

content.mojom.GinJavaBridgeRemoteObjectRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GinJavaBridgeHost
content.mojom.GinJavaBridgeHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.GinJavaBridgeHost';
  }

  getObject(object_id, receiver) {
    // Method: GetObject
    // Call: GetObject(object_id, receiver)
  }

  objectWrapperDeleted(object_id) {
    // Method: ObjectWrapperDeleted
    // Call: ObjectWrapperDeleted(object_id)
  }

};

content.mojom.GinJavaBridgeHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
