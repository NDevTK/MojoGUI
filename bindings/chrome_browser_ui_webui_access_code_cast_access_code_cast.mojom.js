// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/access_code_cast/access_code_cast.mojom
// Module: access_code_cast.mojom

'use strict';

// Module namespace
var access_code_cast = access_code_cast || {};
access_code_cast.mojom = access_code_cast.mojom || {};


// Enum: AddSinkResultCode
access_code_cast.mojom.AddSinkResultCode = {
  UNKNOWN_ERROR: 0,
  OK: 1,
  AUTH_ERROR: 2,
  HTTP_RESPONSE_CODE_ERROR: 3,
  RESPONSE_MALFORMED: 4,
  EMPTY_RESPONSE: 5,
  INVALID_ACCESS_CODE: 6,
  ACCESS_CODE_NOT_FOUND: 7,
  TOO_MANY_REQUESTS: 8,
  SERVICE_NOT_PRESENT: 9,
  SERVER_ERROR: 10,
  SINK_CREATION_ERROR: 11,
  CHANNEL_OPEN_ERROR: 12,
  PROFILE_SYNC_ERROR: 13,
  INTERNAL_MEDIA_ROUTER_ERROR: 14,
};

// Enum: CastDiscoveryMethod
access_code_cast.mojom.CastDiscoveryMethod = {
  QR_CODE: 0,
  INPUT_ACCESS_CODE: 1,
};

// Interface: PageHandlerFactory
access_code_cast.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'access_code_cast.mojom.PageHandlerFactory';
  }

  createPageHandler(page, handler) {
    // Method: CreatePageHandler
    // Call: CreatePageHandler(page, handler)
  }

};

access_code_cast.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
access_code_cast.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'access_code_cast.mojom.PageHandler';
  }

  addSink(access_code, discovery_method) {
    // Method: AddSink
    return new Promise((resolve) => {
      // Call: AddSink(access_code, discovery_method)
      resolve({});
    });
  }

  castToSink() {
    // Method: CastToSink
    return new Promise((resolve) => {
      // Call: CastToSink()
      resolve({});
    });
  }

};

access_code_cast.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
access_code_cast.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'access_code_cast.mojom.Page';
  }

};

access_code_cast.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
