// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/page/display_cutout.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var gfx = gfx || {};

blink.mojom.ViewportFitSpec = { $: mojo.internal.Enum() };
blink.mojom.DisplayCutoutHost = {};
blink.mojom.DisplayCutoutHost.$interfaceName = 'blink.mojom.DisplayCutoutHost';
blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec = { $: {} };
blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec = { $: {} };
blink.mojom.DisplayCutoutClient = {};
blink.mojom.DisplayCutoutClient.$interfaceName = 'blink.mojom.DisplayCutoutClient';
blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec = { $: {} };

// Enum: ViewportFit
blink.mojom.ViewportFit = {
  kAuto: 0,
  kContain: 1,
  kCover: 2,
  kCoverForcedByUserAgent: 3,
};

// Interface: DisplayCutoutHost
mojo.internal.Struct(
    blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec, 'blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_Params', [
      mojo.internal.StructField('value', 0, 0, blink.mojom.ViewportFitSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec, 'blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DisplayCutoutHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DisplayCutoutHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DisplayCutoutHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DisplayCutoutHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DisplayCutoutHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DisplayCutoutHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyViewportFitChanged(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec,
      null,
      [value],
      false);
  }

  notifyComplexSafeAreaConstraintChanged(value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec,
      null,
      [value],
      false);
  }

};

blink.mojom.DisplayCutoutHost.getRemote = function() {
  let remote = new blink.mojom.DisplayCutoutHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DisplayCutoutHost',
    'context');
  return remote.$;
};

blink.mojom.DisplayCutoutHostReceiver = class {
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
        
        // Try Method 0: NotifyViewportFitChanged
        try {
             decoder.decodeStruct(blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyViewportFitChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: NotifyComplexSafeAreaConstraintChanged
        try {
             decoder.decodeStruct(blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyComplexSafeAreaConstraintChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DisplayCutoutHost_NotifyViewportFitChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyViewportFitChanged');
          const result = this.impl.notifyViewportFitChanged(params.value);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DisplayCutoutHost_NotifyComplexSafeAreaConstraintChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.notifyComplexSafeAreaConstraintChanged');
          const result = this.impl.notifyComplexSafeAreaConstraintChanged(params.value);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DisplayCutoutHostReceiver = blink.mojom.DisplayCutoutHostReceiver;

blink.mojom.DisplayCutoutHostPtr = blink.mojom.DisplayCutoutHostRemote;
blink.mojom.DisplayCutoutHostRequest = blink.mojom.DisplayCutoutHostPendingReceiver;


// Interface: DisplayCutoutClient
mojo.internal.Struct(
    blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec, 'blink.mojom.DisplayCutoutClient_SetSafeArea_Params', [
      mojo.internal.StructField('safe_area', 0, 0, gfx.mojom.InsetsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DisplayCutoutClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DisplayCutoutClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DisplayCutoutClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DisplayCutoutClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.DisplayCutoutClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DisplayCutoutClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSafeArea(safe_area) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec,
      null,
      [safe_area],
      false);
  }

};

blink.mojom.DisplayCutoutClient.getRemote = function() {
  let remote = new blink.mojom.DisplayCutoutClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DisplayCutoutClient',
    'context');
  return remote.$;
};

blink.mojom.DisplayCutoutClientReceiver = class {
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
        
        // Try Method 0: SetSafeArea
        try {
             decoder.decodeStruct(blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSafeArea (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DisplayCutoutClient_SetSafeArea_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSafeArea');
          const result = this.impl.setSafeArea(params.safe_area);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DisplayCutoutClientReceiver = blink.mojom.DisplayCutoutClientReceiver;

blink.mojom.DisplayCutoutClientPtr = blink.mojom.DisplayCutoutClientRemote;
blink.mojom.DisplayCutoutClientRequest = blink.mojom.DisplayCutoutClientPendingReceiver;

