// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/preloading/anchor_element_interaction_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.AnchorElementPointerDataSpec = { $: {} };
blink.mojom.AnchorElementInteractionHost = {};
blink.mojom.AnchorElementInteractionHost.$interfaceName = 'blink.mojom.AnchorElementInteractionHost';
blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec = { $: {} };
blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec = { $: {} };
blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec = { $: {} };
blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec = { $: {} };
blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec = { $: {} };

// Struct: AnchorElementPointerData
mojo.internal.Struct(
    blink.mojom.AnchorElementPointerDataSpec, 'blink.mojom.AnchorElementPointerData', [
      mojo.internal.StructField('mouse_velocity', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('mouse_acceleration', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('is_mouse_pointer', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: AnchorElementInteractionHost
mojo.internal.Struct(
    blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec, 'blink.mojom.AnchorElementInteractionHost_OnPointerDown_Params', [
      mojo.internal.StructField('target', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec, 'blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_Params', [
      mojo.internal.StructField('target', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mouse_data', 8, 0, blink.mojom.AnchorElementPointerDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec, 'blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_Params', [
      mojo.internal.StructField('target', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mouse_data', 8, 0, blink.mojom.AnchorElementPointerDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec, 'blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_Params', [
      mojo.internal.StructField('target', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec, 'blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_Params', [
      mojo.internal.StructField('targets', 0, 0, mojo.internal.Array(url.mojom.UrlSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AnchorElementInteractionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AnchorElementInteractionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AnchorElementInteractionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AnchorElementInteractionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.AnchorElementInteractionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AnchorElementInteractionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPointerDown(target) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec,
      null,
      [target],
      false);
  }

  onPointerHoverEager(target, mouse_data) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec,
      null,
      [target, mouse_data],
      false);
  }

  onPointerHoverModerate(target, mouse_data) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec,
      null,
      [target, mouse_data],
      false);
  }

  onModerateViewportHeuristicTriggered(target) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec,
      null,
      [target],
      false);
  }

  onEagerViewportHeuristicTriggered(targets) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec,
      null,
      [targets],
      false);
  }

};

blink.mojom.AnchorElementInteractionHost.getRemote = function() {
  let remote = new blink.mojom.AnchorElementInteractionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AnchorElementInteractionHost',
    'context');
  return remote.$;
};

blink.mojom.AnchorElementInteractionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: OnPointerDown
        try {
             decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPointerDown (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: OnPointerHoverEager
        try {
             decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPointerHoverEager (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: OnPointerHoverModerate
        try {
             decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPointerHoverModerate (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: OnModerateViewportHeuristicTriggered
        try {
             decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnModerateViewportHeuristicTriggered (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: OnEagerViewportHeuristicTriggered
        try {
             decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnEagerViewportHeuristicTriggered (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPointerDown');
          const result = this.impl.onPointerDown(params.target);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPointerHoverEager');
          const result = this.impl.onPointerHoverEager(params.target, params.mouse_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onPointerHoverModerate');
          const result = this.impl.onPointerHoverModerate(params.target, params.mouse_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onModerateViewportHeuristicTriggered');
          const result = this.impl.onModerateViewportHeuristicTriggered(params.target);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onEagerViewportHeuristicTriggered');
          const result = this.impl.onEagerViewportHeuristicTriggered(params.targets);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AnchorElementInteractionHostReceiver = blink.mojom.AnchorElementInteractionHostReceiver;

blink.mojom.AnchorElementInteractionHostPtr = blink.mojom.AnchorElementInteractionHostRemote;
blink.mojom.AnchorElementInteractionHostRequest = blink.mojom.AnchorElementInteractionHostPendingReceiver;

