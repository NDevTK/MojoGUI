// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/context_menu/context_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ContextMenuDataMediaType
blink.mojom.ContextMenuDataMediaType = {
  kNone: 0,
  kImage: 1,
  kVideo: 2,
  kAudio: 3,
  kCanvas: 4,
  kFile: 5,
  kPlugin: 6,
};

// Enum: CustomContextMenuItemType
blink.mojom.CustomContextMenuItemType = {
  kOption: 0,
  kCheckableOption: 1,
  kGroup: 2,
  kSeparator: 3,
  kSubMenu: 4,
};

// Interface: ContextMenuClient
blink.mojom.ContextMenuClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ContextMenuClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContextMenuClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ContextMenuClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.ContextMenuClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ContextMenuClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  customContextMenuAction(action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ContextMenuClient_CustomContextMenuAction_ParamsSpec.$,
      null,
      [action]);
  }

  contextMenuClosed(link_followed, impression) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec.$,
      null,
      [link_followed, impression]);
  }

};

blink.mojom.ContextMenuClient.getRemote = function() {
  let remote = new blink.mojom.ContextMenuClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContextMenuClient',
    'context');
  return remote.$;
};

// ParamsSpec for CustomContextMenuAction
blink.mojom.ContextMenuClient_CustomContextMenuAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContextMenuClient.CustomContextMenuAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ContextMenuClosed
blink.mojom.ContextMenuClient_ContextMenuClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContextMenuClient.ContextMenuClosed_Params',
      packedSize: 24,
      fields: [
        { name: 'link_followed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'impression', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ContextMenuClientPtr = blink.mojom.ContextMenuClientRemote;
blink.mojom.ContextMenuClientRequest = blink.mojom.ContextMenuClientPendingReceiver;

