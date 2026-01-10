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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DidAcceptIndices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidAcceptIndices (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DidCancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.PopupMenuClient_DidCancel_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidCancel (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PopupMenuClient_DidAcceptIndices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didAcceptIndices');
          const result = this.impl.didAcceptIndices(params.indices);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.PopupMenuClient_DidCancel_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didCancel');
          const result = this.impl.didCancel();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.PopupMenuClientReceiver = blink.mojom.PopupMenuClientReceiver;

blink.mojom.PopupMenuClientPtr = blink.mojom.PopupMenuClientRemote;
blink.mojom.PopupMenuClientRequest = blink.mojom.PopupMenuClientPendingReceiver;

