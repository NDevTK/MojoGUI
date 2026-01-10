// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/popup_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.TypeSpec = { $: mojo.internal.Enum() };
blink.mojom.MenuItemSpec = { $: {} };
blink.mojom.PopupMenuClient = {};
blink.mojom.PopupMenuClient.$interfaceName = 'blink.mojom.PopupMenuClient';
blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec = { $: {} };
blink.mojom.PopupMenuClient_DidCancel_ParamsSpec = { $: {} };

// Enum: Type
blink.mojom.Type = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};

// Struct: MenuItem
mojo.internal.Struct(
    blink.mojom.MenuItemSpec, 'blink.mojom.MenuItem', [
      mojo.internal.StructField('kOption', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: PopupMenuClient
mojo.internal.Struct(
    blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec, 'blink.mojom.PopupMenuClient_DidAcceptIndices_Params', [
      mojo.internal.StructField('indices', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.PopupMenuClient_DidCancel_ParamsSpec, 'blink.mojom.PopupMenuClient_DidCancel_Params', [
    ],
    [[0, 8]]);

blink.mojom.PopupMenuClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.PopupMenuClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PopupMenuClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.PopupMenuClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.PopupMenuClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.PopupMenuClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didAcceptIndices(indices) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec,
      null,
      [indices],
      false);
  }

  didCancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PopupMenuClient_DidCancel_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.PopupMenuClient.getRemote = function() {
  let remote = new blink.mojom.PopupMenuClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PopupMenuClient',
    'context');
  return remote.$;
};

blink.mojom.PopupMenuClientPtr = blink.mojom.PopupMenuClientRemote;
blink.mojom.PopupMenuClientRequest = blink.mojom.PopupMenuClientPendingReceiver;

