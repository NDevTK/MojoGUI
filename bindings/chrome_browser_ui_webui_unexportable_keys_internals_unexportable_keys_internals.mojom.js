// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/unexportable_keys_internals/unexportable_keys_internals.mojom
// Module: unexportable_keys_internals.mojom

'use strict';

// Module namespace
var unexportable_keys_internals = unexportable_keys_internals || {};
unexportable_keys_internals.mojom = unexportable_keys_internals.mojom || {};


// Struct: UnexportableKeyId
unexportable_keys_internals.mojom.UnexportableKeyId = class {
  constructor(values = {}) {
    this.key_id = values.key_id !== undefined ? values.key_id : null;
  }
};

// Struct: UnexportableKeyInfo
unexportable_keys_internals.mojom.UnexportableKeyInfo = class {
  constructor(values = {}) {
    this.creation_time = values.creation_time !== undefined ? values.creation_time : "";
  }
};

// Interface: PageHandlerFactory
unexportable_keys_internals.mojom.PageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'unexportable_keys_internals.mojom.PageHandlerFactory';
  }

  createUnexportableKeysInternalsHandler(page, handler) {
    // Method: CreateUnexportableKeysInternalsHandler
    // Call: CreateUnexportableKeysInternalsHandler(page, handler)
  }

};

unexportable_keys_internals.mojom.PageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PageHandler
unexportable_keys_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'unexportable_keys_internals.mojom.PageHandler';
  }

  getUnexportableKeysInfo() {
    // Method: GetUnexportableKeysInfo
    return new Promise((resolve) => {
      // Call: GetUnexportableKeysInfo()
      resolve({});
    });
  }

  deleteKey(key_id) {
    // Method: DeleteKey
    return new Promise((resolve) => {
      // Call: DeleteKey(key_id)
      resolve({});
    });
  }

};

unexportable_keys_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
unexportable_keys_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'unexportable_keys_internals.mojom.Page';
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

};

unexportable_keys_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
