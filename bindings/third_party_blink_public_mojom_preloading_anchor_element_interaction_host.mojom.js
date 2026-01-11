// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/preloading/anchor_element_interaction_host.mojom
// Module: blink.mojom

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
  onPointerDown(target) {
    return this.$.onPointerDown(target);
  }
  onPointerHoverEager(target, mouse_data) {
    return this.$.onPointerHoverEager(target, mouse_data);
  }
  onPointerHoverModerate(target, mouse_data) {
    return this.$.onPointerHoverModerate(target, mouse_data);
  }
  onModerateViewportHeuristicTriggered(target) {
    return this.$.onModerateViewportHeuristicTriggered(target);
  }
  onEagerViewportHeuristicTriggered(targets) {
    return this.$.onEagerViewportHeuristicTriggered(targets);
  }
};

blink.mojom.AnchorElementInteractionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AnchorElementInteractionHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPointerDown(target) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec,
      null,
      [target],
      false);
  }

  onPointerHoverEager(target, mouse_data) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec,
      null,
      [target, mouse_data],
      false);
  }

  onPointerHoverModerate(target, mouse_data) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec,
      null,
      [target, mouse_data],
      false);
  }

  onModerateViewportHeuristicTriggered(target) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec,
      null,
      [target],
      false);
  }

  onEagerViewportHeuristicTriggered(targets) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('AnchorElementInteractionHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnPointerDown_ParamsSpec.$.structSpec);
          const result = this.impl.onPointerDown(params.target);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnPointerHoverEager_ParamsSpec.$.structSpec);
          const result = this.impl.onPointerHoverEager(params.target, params.mouse_data);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnPointerHoverModerate_ParamsSpec.$.structSpec);
          const result = this.impl.onPointerHoverModerate(params.target, params.mouse_data);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnModerateViewportHeuristicTriggered_ParamsSpec.$.structSpec);
          const result = this.impl.onModerateViewportHeuristicTriggered(params.target);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AnchorElementInteractionHost_OnEagerViewportHeuristicTriggered_ParamsSpec.$.structSpec);
          const result = this.impl.onEagerViewportHeuristicTriggered(params.targets);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AnchorElementInteractionHostReceiver = blink.mojom.AnchorElementInteractionHostReceiver;

blink.mojom.AnchorElementInteractionHostPtr = blink.mojom.AnchorElementInteractionHostRemote;
blink.mojom.AnchorElementInteractionHostRequest = blink.mojom.AnchorElementInteractionHostPendingReceiver;

