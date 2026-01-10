// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/file_loader.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};

ax.mojom.AccessibilityFileLoader = {};
ax.mojom.AccessibilityFileLoader.$interfaceName = 'ax.mojom.AccessibilityFileLoader';
ax.mojom.AccessibilityFileLoader_Load_ParamsSpec = { $: {} };
ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec = { $: {} };

// Interface: AccessibilityFileLoader
mojo.internal.Struct(
    ax.mojom.AccessibilityFileLoader_Load_ParamsSpec, 'ax.mojom.AccessibilityFileLoader_Load_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.RelativeFilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec, 'ax.mojom.AccessibilityFileLoader_Load_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [path],
      false);
  }

};

ax.mojom.AccessibilityFileLoader.getRemote = function() {
  let remote = new ax.mojom.AccessibilityFileLoaderRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ax.mojom.AccessibilityFileLoader',
    'context');
  return remote.$;
};

ax.mojom.AccessibilityFileLoaderPtr = ax.mojom.AccessibilityFileLoaderRemote;
ax.mojom.AccessibilityFileLoaderRequest = ax.mojom.AccessibilityFileLoaderPendingReceiver;

