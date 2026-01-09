// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/web_applications/mojom/web_app_shortcut_copier.mojom
// Module: web_app.mojom

'use strict';

// Module namespace
var web_app = web_app || {};
web_app.mojom = web_app.mojom || {};


// Interface: WebAppShortcutCopier
web_app.mojom.WebAppShortcutCopier = {};

web_app.mojom.WebAppShortcutCopierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

web_app.mojom.WebAppShortcutCopierRemote = class {
  static get $interfaceName() {
    return 'web_app.mojom.WebAppShortcutCopier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      web_app.mojom.WebAppShortcutCopierPendingReceiver,
      handle);
    this.$ = new web_app.mojom.WebAppShortcutCopierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

web_app.mojom.WebAppShortcutCopierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  copyWebAppShortcut(source_path, destination_path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ParamsSpec,
      web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParamsSpec,
      web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParamsSpec,
      [source_path, destination_path],
      undefined,
      mojo.internal.kMessageFlagIsSync
    );
  }

};

web_app.mojom.WebAppShortcutCopier.getRemote = function() {
  let remote = new web_app.mojom.WebAppShortcutCopierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'web_app.mojom.WebAppShortcutCopier',
    'context');
  return remote.$;
};

// ParamsSpec for CopyWebAppShortcut
web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'web_app.mojom.WebAppShortcutCopier.CopyWebAppShortcut_Params',
      packedSize: 24,
      fields: [
        { name: 'source_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'destination_path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

web_app.mojom.WebAppShortcutCopier_CopyWebAppShortcut_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'web_app.mojom.WebAppShortcutCopier.CopyWebAppShortcut_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
web_app.mojom.WebAppShortcutCopierPtr = web_app.mojom.WebAppShortcutCopierRemote;
web_app.mojom.WebAppShortcutCopierRequest = web_app.mojom.WebAppShortcutCopierPendingReceiver;

