// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/storage_area.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: KeyValue
blink.mojom.KeyValue = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : 0;
  }
};

// Interface: StorageAreaObserver
blink.mojom.StorageAreaObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.StorageAreaObserver';
  }

  keyChanged(key, new_value, old_value, source) {
    // Method: KeyChanged
    // Call: KeyChanged(key, new_value, old_value, source)
  }

  keyChangeFailed(key, source) {
    // Method: KeyChangeFailed
    // Call: KeyChangeFailed(key, source)
  }

  keyDeleted(key, old_value, source) {
    // Method: KeyDeleted
    // Call: KeyDeleted(key, old_value, source)
  }

  allDeleted(was_nonempty, source) {
    // Method: AllDeleted
    // Call: AllDeleted(was_nonempty, source)
  }

  shouldSendOldValueOnMutations(value) {
    // Method: ShouldSendOldValueOnMutations
    // Call: ShouldSendOldValueOnMutations(value)
  }

};

blink.mojom.StorageAreaObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: StorageArea
blink.mojom.StorageAreaPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.StorageArea';
  }

  addObserver(observer) {
    // Method: AddObserver
    // Call: AddObserver(observer)
  }

  put(key, value, client_old_value, source) {
    // Method: Put
    return new Promise((resolve) => {
      // Call: Put(key, value, client_old_value, source)
      resolve({});
    });
  }

  delete(key, client_old_value, source) {
    // Method: Delete
    return new Promise((resolve) => {
      // Call: Delete(key, client_old_value, source)
      resolve({});
    });
  }

  deleteAll(source, new_observer) {
    // Method: DeleteAll
    return new Promise((resolve) => {
      // Call: DeleteAll(source, new_observer)
      resolve({});
    });
  }

  get(key) {
    // Method: Get
    return new Promise((resolve) => {
      // Call: Get(key)
      resolve({});
    });
  }

  getAll(new_observer) {
    // Method: GetAll
    return new Promise((resolve) => {
      // Call: GetAll(new_observer)
      resolve({});
    });
  }

};

blink.mojom.StorageAreaRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
