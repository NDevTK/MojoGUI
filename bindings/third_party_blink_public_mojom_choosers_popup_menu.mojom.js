// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/popup_menu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

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

blink.mojom.PopupMenuClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didAcceptIndices(params.indices);
          break;
        }
        case 1: {
          const params = blink.mojom.PopupMenuClient_DidCancel_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didCancel();
          break;
        }
      }
    }});
  }
};

blink.mojom.PopupMenuClientReceiver = blink.mojom.PopupMenuClientReceiver;

blink.mojom.PopupMenuClientPtr = blink.mojom.PopupMenuClientRemote;
blink.mojom.PopupMenuClientRequest = blink.mojom.PopupMenuClientPendingReceiver;

