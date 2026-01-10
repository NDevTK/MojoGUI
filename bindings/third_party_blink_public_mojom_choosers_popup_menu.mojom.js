// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/popup_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Type
blink.mojom.mojom.Type = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};
blink.mojom.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Struct: MenuItem
blink.mojom.mojom.MenuItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MenuItem',
      packedSize: 16,
      fields: [
        { name: 'kOption', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: PopupMenuClient
blink.mojom.mojom.PopupMenuClient = {};

blink.mojom.mojom.PopupMenuClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.PopupMenuClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.PopupMenuClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.PopupMenuClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.PopupMenuClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.PopupMenuClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didAcceptIndices(indices) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec,
      null,
      [indices]);
  }

  didCancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.PopupMenuClient_DidCancel_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.PopupMenuClient.getRemote = function() {
  let remote = new blink.mojom.mojom.PopupMenuClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.PopupMenuClient',
    'context');
  return remote.$;
};

// ParamsSpec for DidAcceptIndices
blink.mojom.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupMenuClient.DidAcceptIndices_Params',
      packedSize: 16,
      fields: [
        { name: 'indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DidCancel
blink.mojom.mojom.PopupMenuClient_DidCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupMenuClient.DidCancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.PopupMenuClientPtr = blink.mojom.mojom.PopupMenuClientRemote;
blink.mojom.mojom.PopupMenuClientRequest = blink.mojom.mojom.PopupMenuClientPendingReceiver;

