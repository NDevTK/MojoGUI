// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/popup_menu.mojom
// Module: blink.mojom

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
  didAcceptIndices(indices) {
    return this.$.didAcceptIndices(indices);
  }
  didCancel() {
    return this.$.didCancel();
  }
};

blink.mojom.PopupMenuClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PopupMenuClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  didAcceptIndices(indices) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec,
      null,
      [indices],
      false);
  }

  didCancel() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PopupMenuClient', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.PopupMenuClient_DidCancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec.$.structSpec);
          const result = this.impl.didAcceptIndices(params.indices);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.PopupMenuClient_DidCancel_ParamsSpec.$.structSpec);
          const result = this.impl.didCancel();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.PopupMenuClientReceiver = blink.mojom.PopupMenuClientReceiver;

blink.mojom.PopupMenuClientPtr = blink.mojom.PopupMenuClientRemote;
blink.mojom.PopupMenuClientRequest = blink.mojom.PopupMenuClientPendingReceiver;

