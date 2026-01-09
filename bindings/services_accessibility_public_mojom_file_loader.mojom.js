// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/file_loader.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: AccessibilityFileLoader
ax.mojom.AccessibilityFileLoader = {};

ax.mojom.AccessibilityFileLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AccessibilityFileLoaderRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AccessibilityFileLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AccessibilityFileLoaderPendingReceiver,
      handle);
    this.$ = new ax.mojom.AccessibilityFileLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AccessibilityFileLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  load(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AccessibilityFileLoader_Load_ParamsSpec,
      ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec,
      [path]);
  }

};

ax.mojom.AccessibilityFileLoader.getRemote = function() {
  let remote = new ax.mojom.AccessibilityFileLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AccessibilityFileLoader',
    'context');
  return remote.$;
};

// ParamsSpec for Load
ax.mojom.AccessibilityFileLoader_Load_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityFileLoader.Load_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.RelativeFilePathSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityFileLoader.Load_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ax.mojom.AccessibilityFileLoaderPtr = ax.mojom.AccessibilityFileLoaderRemote;
ax.mojom.AccessibilityFileLoaderRequest = ax.mojom.AccessibilityFileLoaderPendingReceiver;

