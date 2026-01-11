// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/render_accessibility.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ax = ax || {};
var gfx = gfx || {};

blink.mojom.HitTestResponseSpec = { $: {} };
blink.mojom.RenderAccessibilityHost = {};
blink.mojom.RenderAccessibilityHost.$interfaceName = 'blink.mojom.RenderAccessibilityHost';
blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec = { $: {} };
blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility = {};
blink.mojom.RenderAccessibility.$interfaceName = 'blink.mojom.RenderAccessibility';
blink.mojom.RenderAccessibility_SetMode_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_FatalError_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_HitTest_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_PerformAction_ParamsSpec = { $: {} };
blink.mojom.RenderAccessibility_Reset_ParamsSpec = { $: {} };

// Struct: HitTestResponse
mojo.internal.Struct(
    blink.mojom.HitTestResponseSpec, 'blink.mojom.HitTestResponse', [
      mojo.internal.StructField('stitched_child_tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_frame_token', 8, 0, blink.mojom.FrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_frame_transformed_point', 16, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('hit_node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: RenderAccessibilityHost
mojo.internal.Struct(
    blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec, 'blink.mojom.RenderAccessibilityHost_HandleAXEvents_Params', [
      mojo.internal.StructField('events_and_updates', 0, 0, ax.mojom.AXUpdatesAndEventsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location_and_scroll_updates', 8, 0, ax.mojom.AXLocationAndScrollUpdatesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reset_token', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec, 'blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec, 'blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_Params', [
      mojo.internal.StructField('changes', 0, 0, ax.mojom.AXLocationAndScrollUpdatesSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reset_token', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.RenderAccessibilityHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RenderAccessibilityHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderAccessibilityHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RenderAccessibilityHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.RenderAccessibilityHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  handleAXEvents(events_and_updates, location_and_scroll_updates, reset_token) {
    return this.$.handleAXEvents(events_and_updates, location_and_scroll_updates, reset_token);
  }
  handleAXLocationChanges(changes, reset_token) {
    return this.$.handleAXLocationChanges(changes, reset_token);
  }
};

blink.mojom.RenderAccessibilityHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderAccessibilityHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  handleAXEvents(events_and_updates, location_and_scroll_updates, reset_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec,
      blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec,
      [events_and_updates, location_and_scroll_updates, reset_token],
      false);
  }

  handleAXLocationChanges(changes, reset_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec,
      null,
      [changes, reset_token],
      false);
  }

};

blink.mojom.RenderAccessibilityHost.getRemote = function() {
  let remote = new blink.mojom.RenderAccessibilityHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderAccessibilityHost',
    'context');
  return remote.$;
};

blink.mojom.RenderAccessibilityHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderAccessibilityHost', [
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
             decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec.$.structSpec);
          const result = this.impl.handleAXEvents(params.events_and_updates, params.location_and_scroll_updates, params.reset_token);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec.$.structSpec);
          const result = this.impl.handleAXLocationChanges(params.changes, params.reset_token);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.RenderAccessibilityHostReceiver = blink.mojom.RenderAccessibilityHostReceiver;

blink.mojom.RenderAccessibilityHostPtr = blink.mojom.RenderAccessibilityHostRemote;
blink.mojom.RenderAccessibilityHostRequest = blink.mojom.RenderAccessibilityHostPendingReceiver;


// Interface: RenderAccessibility
mojo.internal.Struct(
    blink.mojom.RenderAccessibility_SetMode_ParamsSpec, 'blink.mojom.RenderAccessibility_SetMode_Params', [
      mojo.internal.StructField('ax_mode', 0, 0, ax.mojom.AXModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reset_token', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_FatalError_ParamsSpec, 'blink.mojom.RenderAccessibility_FatalError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_HitTest_ParamsSpec, 'blink.mojom.RenderAccessibility_HitTest_Params', [
      mojo.internal.StructField('point', 0, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_to_fire', 8, 0, ax.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec, 'blink.mojom.RenderAccessibility_HitTest_ResponseParams', [
      mojo.internal.StructField('hit_test_response', 0, 0, blink.mojom.HitTestResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_PerformAction_ParamsSpec, 'blink.mojom.RenderAccessibility_PerformAction_Params', [
      mojo.internal.StructField('action_data', 0, 0, ax.mojom.AXActionDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.RenderAccessibility_Reset_ParamsSpec, 'blink.mojom.RenderAccessibility_Reset_Params', [
      mojo.internal.StructField('reset_token', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.RenderAccessibilityPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.RenderAccessibilityRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.RenderAccessibility';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.RenderAccessibilityPendingReceiver,
      handle);
    this.$ = new blink.mojom.RenderAccessibilityRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setMode(ax_mode, reset_token) {
    return this.$.setMode(ax_mode, reset_token);
  }
  fatalError() {
    return this.$.fatalError();
  }
  hitTest(point, event_to_fire, request_id) {
    return this.$.hitTest(point, event_to_fire, request_id);
  }
  performAction(action_data) {
    return this.$.performAction(action_data);
  }
  reset(reset_token) {
    return this.$.reset(reset_token);
  }
};

blink.mojom.RenderAccessibilityRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RenderAccessibility', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setMode(ax_mode, reset_token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.RenderAccessibility_SetMode_ParamsSpec,
      null,
      [ax_mode, reset_token],
      false);
  }

  fatalError() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.RenderAccessibility_FatalError_ParamsSpec,
      null,
      [],
      false);
  }

  hitTest(point, event_to_fire, request_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.RenderAccessibility_HitTest_ParamsSpec,
      blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec,
      [point, event_to_fire, request_id],
      false);
  }

  performAction(action_data) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.RenderAccessibility_PerformAction_ParamsSpec,
      null,
      [action_data],
      false);
  }

  reset(reset_token) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.RenderAccessibility_Reset_ParamsSpec,
      null,
      [reset_token],
      false);
  }

};

blink.mojom.RenderAccessibility.getRemote = function() {
  let remote = new blink.mojom.RenderAccessibilityRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.RenderAccessibility',
    'context');
  return remote.$;
};

blink.mojom.RenderAccessibilityReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RenderAccessibility', [
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
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_SetMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_FatalError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_HitTest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_PerformAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_Reset_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_SetMode_ParamsSpec.$.structSpec);
          const result = this.impl.setMode(params.ax_mode, params.reset_token);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_FatalError_ParamsSpec.$.structSpec);
          const result = this.impl.fatalError();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_HitTest_ParamsSpec.$.structSpec);
          const result = this.impl.hitTest(params.point, params.event_to_fire, params.request_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_PerformAction_ParamsSpec.$.structSpec);
          const result = this.impl.performAction(params.action_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_Reset_ParamsSpec.$.structSpec);
          const result = this.impl.reset(params.reset_token);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.RenderAccessibilityReceiver = blink.mojom.RenderAccessibilityReceiver;

blink.mojom.RenderAccessibilityPtr = blink.mojom.RenderAccessibilityRemote;
blink.mojom.RenderAccessibilityRequest = blink.mojom.RenderAccessibilityPendingReceiver;

