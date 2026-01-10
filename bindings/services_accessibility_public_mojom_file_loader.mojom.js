// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/file_loader.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Interface: AccessibilityFileLoader
ax.mojom.mojom.AccessibilityFileLoader = {};

ax.mojom.mojom.AccessibilityFileLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.mojom.AccessibilityFileLoaderRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AccessibilityFileLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.mojom.AccessibilityFileLoaderPendingReceiver,
      handle);
    this.$ = new ax.mojom.mojom.AccessibilityFileLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.mojom.AccessibilityFileLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  load(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.mojom.AccessibilityFileLoader_Load_ParamsSpec,
      ax.mojom.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec,
      [path]);
  }

};

ax.mojom.mojom.AccessibilityFileLoader.getRemote = function() {
  let remote = new ax.mojom.mojom.AccessibilityFileLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AccessibilityFileLoader',
    'context');
  return remote.$;
};

// ParamsSpec for Load
ax.mojom.mojom.AccessibilityFileLoader_Load_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityFileLoader.Load_Params',
      packedSize: 16,
      fields: [
        { name: 'path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.RelativeFilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ax.mojom.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.AccessibilityFileLoader.Load_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.mojom.AccessibilityFileLoaderPtr = ax.mojom.mojom.AccessibilityFileLoaderRemote;
ax.mojom.mojom.AccessibilityFileLoaderRequest = ax.mojom.mojom.AccessibilityFileLoaderPendingReceiver;

