// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/unhandled_tap_notifier/unhandled_tap_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.UnhandledTapInfoSpec = { $: {} };
blink.mojom.UnhandledTapNotifier = {};
blink.mojom.UnhandledTapNotifier.$interfaceName = 'blink.mojom.UnhandledTapNotifier';
blink.mojom.UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_ParamsSpec = { $: {} };

// Struct: UnhandledTapInfo
mojo.internal.Struct(
    blink.mojom.UnhandledTapInfoSpec, 'blink.mojom.UnhandledTapInfo', [
      mojo.internal.StructField('tapped_position_in_viewport', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: UnhandledTapNotifier
mojo.internal.Struct(
    blink.mojom.UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_ParamsSpec, 'blink.mojom.UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_Params', [
      mojo.internal.StructField('unhandled_tap_info', 0, 0, blink.mojom.UnhandledTapInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.UnhandledTapNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.UnhandledTapNotifierRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.UnhandledTapNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.UnhandledTapNotifierPendingReceiver,
      handle);
    this.$ = new blink.mojom.UnhandledTapNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.UnhandledTapNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showUnhandledTapUIIfNeeded(unhandled_tap_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_ParamsSpec,
      null,
      [unhandled_tap_info],
      false);
  }

};

blink.mojom.UnhandledTapNotifier.getRemote = function() {
  let remote = new blink.mojom.UnhandledTapNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.UnhandledTapNotifier',
    'context');
  return remote.$;
};

blink.mojom.UnhandledTapNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.UnhandledTapNotifier_ShowUnhandledTapUIIfNeeded_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.showUnhandledTapUIIfNeeded');
          const result = this.impl.showUnhandledTapUIIfNeeded(params.unhandled_tap_info);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.UnhandledTapNotifierReceiver = blink.mojom.UnhandledTapNotifierReceiver;

blink.mojom.UnhandledTapNotifierPtr = blink.mojom.UnhandledTapNotifierRemote;
blink.mojom.UnhandledTapNotifierRequest = blink.mojom.UnhandledTapNotifierPendingReceiver;

