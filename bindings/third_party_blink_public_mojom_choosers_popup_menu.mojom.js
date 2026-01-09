// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/popup_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: Type
blink.mojom.Type = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};

// Struct: MenuItem
blink.mojom.MenuItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MenuItem',
      packedSize: 16,
      fields: [
        { name: 'kOption', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PopupMenuClient
blink.mojom.PopupMenuClient = {};

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
      [indices]);
  }

  didCancel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.PopupMenuClient_DidCancel_ParamsSpec,
      null,
      []);
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

// ParamsSpec for DidAcceptIndices
blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupMenuClient.DidAcceptIndices_Params',
      packedSize: 16,
      fields: [
        { name: 'indices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidCancel
blink.mojom.PopupMenuClient_DidCancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PopupMenuClient.DidCancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.PopupMenuClientPtr = blink.mojom.PopupMenuClientRemote;
blink.mojom.PopupMenuClientRequest = blink.mojom.PopupMenuClientPendingReceiver;

