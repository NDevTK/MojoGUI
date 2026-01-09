// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/dom_storage.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DomStorageProvider
blink.mojom.DomStorageProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DomStorageProvider';
  }

  bindDomStorage(receiver, client) {
    // Method: BindDomStorage
    // Call: BindDomStorage(receiver, client)
  }

};

blink.mojom.DomStorageProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DomStorage
blink.mojom.DomStoragePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DomStorage';
  }

  openLocalStorage(storage_key, local_frame_token, area) {
    // Method: OpenLocalStorage
    // Call: OpenLocalStorage(storage_key, local_frame_token, area)
  }

  bindSessionStorageNamespace(namespace_id, receiver) {
    // Method: BindSessionStorageNamespace
    // Call: BindSessionStorageNamespace(namespace_id, receiver)
  }

  bindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace) {
    // Method: BindSessionStorageArea
    // Call: BindSessionStorageArea(storage_key, local_frame_token, namespace_id, session_namespace)
  }

};

blink.mojom.DomStorageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DomStorageClient
blink.mojom.DomStorageClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DomStorageClient';
  }

  resetSessionStorageConnections() {
    // Method: ResetSessionStorageConnections
    // Call: ResetSessionStorageConnections()
  }

  resetLocalStorageConnections() {
    // Method: ResetLocalStorageConnections
    // Call: ResetLocalStorageConnections()
  }

};

blink.mojom.DomStorageClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
