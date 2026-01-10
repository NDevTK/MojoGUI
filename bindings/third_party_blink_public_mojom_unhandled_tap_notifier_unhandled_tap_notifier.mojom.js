// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/unhandled_tap_notifier/unhandled_tap_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Struct: UnhandledTapInfo
blink.mojom.mojom.UnhandledTapInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UnhandledTapInfo',
      packedSize: 16,
      fields: [
        { name: 'tapped_position_in_viewport', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: UnhandledTapNotifier
blink.mojom.mojom.UnhandledTapNotifier = {};

blink.mojom.mojom.UnhandledTapNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.UnhandledTapNotifierRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.UnhandledTapNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.UnhandledTapNotifierPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.UnhandledTapNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.UnhandledTapNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showUnhandledTapUIIfNeeded(unhandled_tap_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_ParamsSpec,
      null,
      [unhandled_tap_info]);
  }

};

blink.mojom.mojom.UnhandledTapNotifier.getRemote = function() {
  let remote = new blink.mojom.mojom.UnhandledTapNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.UnhandledTapNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for ShowUnhandledTapUIIfNeeded
blink.mojom.mojom.UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UnhandledTapNotifier.ShowUnhandledTapUIIfNeeded_Params',
      packedSize: 16,
      fields: [
        { name: 'unhandled_tap_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.UnhandledTapInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.UnhandledTapNotifierPtr = blink.mojom.mojom.UnhandledTapNotifierRemote;
blink.mojom.mojom.UnhandledTapNotifierRequest = blink.mojom.mojom.UnhandledTapNotifierPendingReceiver;

