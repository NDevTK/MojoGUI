// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/dom_storage/session_storage_namespace.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SessionStorageNamespace = {};
blink.mojom.SessionStorageNamespace.$interfaceName = 'blink.mojom.SessionStorageNamespace';
blink.mojom.SessionStorageNamespace_Clone_ParamsSpec = { $: {} };

// Interface: SessionStorageNamespace
mojo.internal.Struct(
    blink.mojom.SessionStorageNamespace_Clone_ParamsSpec, 'blink.mojom.SessionStorageNamespace_Clone_Params', [
      mojo.internal.StructField('clone_to_namespace', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.SessionStorageNamespace_Clone_ParamsSpec,
      null,
      [clone_to_namespace],
      false);
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

blink.mojom.SessionStorageNamespacePtr = blink.mojom.SessionStorageNamespaceRemote;
blink.mojom.SessionStorageNamespaceRequest = blink.mojom.SessionStorageNamespacePendingReceiver;

