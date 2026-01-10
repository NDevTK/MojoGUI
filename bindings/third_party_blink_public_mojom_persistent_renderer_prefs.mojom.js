// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/persistent_renderer_prefs.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PersistentRendererPrefsService = {};
blink.mojom.PersistentRendererPrefsService.$interfaceName = 'blink.mojom.PersistentRendererPrefsService';
blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec = { $: {} };

// Interface: PersistentRendererPrefsService
mojo.internal.Struct(
    blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec, 'blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.PersistentRendererPrefsServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PersistentRendererPrefsServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PersistentRendererPrefsService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PersistentRendererPrefsServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.PersistentRendererPrefsServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PersistentRendererPrefsServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setViewSourceLineWrapping(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PersistentRendererPrefsService_SetViewSourceLineWrapping_ParamsSpec,
      null,
      [value],
      false);
  }

};

blink.mojom.PersistentRendererPrefsService.getRemote = function() {
  let remote = new blink.mojom.PersistentRendererPrefsServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PersistentRendererPrefsService',
    'context');
  return remote.$;
};

blink.mojom.PersistentRendererPrefsServicePtr = blink.mojom.PersistentRendererPrefsServiceRemote;
blink.mojom.PersistentRendererPrefsServiceRequest = blink.mojom.PersistentRendererPrefsServicePendingReceiver;

