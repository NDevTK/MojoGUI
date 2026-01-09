// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/session_storage_namespace.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SessionStorageNamespace
blink.mojom.SessionStorageNamespace = {};

blink.mojom.SessionStorageNamespacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SessionStorageNamespaceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SessionStorageNamespace';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SessionStorageNamespacePendingReceiver,
      handle);
    this.$ = new blink.mojom.SessionStorageNamespaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SessionStorageNamespaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  clone(clone_to_namespace) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SessionStorageNamespace_Clone_ParamsSpec.$,
      null,
      [clone_to_namespace]);
  }

};

blink.mojom.SessionStorageNamespace.getRemote = function() {
  let remote = new blink.mojom.SessionStorageNamespaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SessionStorageNamespace',
    'context');
  return remote.$;
};

// ParamsSpec for Clone
blink.mojom.SessionStorageNamespace_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SessionStorageNamespace.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'clone_to_namespace', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SessionStorageNamespacePtr = blink.mojom.SessionStorageNamespaceRemote;
blink.mojom.SessionStorageNamespaceRequest = blink.mojom.SessionStorageNamespacePendingReceiver;

