// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/render_accessibility.mojom
// Module: blink.mojom

'use strict';

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
};

blink.mojom.RenderAccessibilityHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleAXEvents(events_and_updates, location_and_scroll_updates, reset_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec,
      blink.mojom.RenderAccessibilityHost_HandleAXEvents_ResponseParamsSpec,
      [events_and_updates, location_and_scroll_updates, reset_token],
      false);
  }

  handleAXLocationChanges(changes, reset_token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: HandleAXEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAXEvents (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: HandleAXLocationChanges
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HandleAXLocationChanges (1)');
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
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXEvents_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleAXEvents');
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
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibilityHost_HandleAXLocationChanges_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.handleAXLocationChanges');
          const result = this.impl.handleAXLocationChanges(params.changes, params.reset_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

blink.mojom.RenderAccessibilityRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setMode(ax_mode, reset_token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.RenderAccessibility_SetMode_ParamsSpec,
      null,
      [ax_mode, reset_token],
      false);
  }

  fatalError() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.RenderAccessibility_FatalError_ParamsSpec,
      null,
      [],
      false);
  }

  hitTest(point, event_to_fire, request_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.RenderAccessibility_HitTest_ParamsSpec,
      blink.mojom.RenderAccessibility_HitTest_ResponseParamsSpec,
      [point, event_to_fire, request_id],
      false);
  }

  performAction(action_data) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.RenderAccessibility_PerformAction_ParamsSpec,
      null,
      [action_data],
      false);
  }

  reset(reset_token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_SetMode_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetMode (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FatalError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_FatalError_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FatalError (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HitTest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_HitTest_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HitTest (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: PerformAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_PerformAction_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PerformAction (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Reset
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.RenderAccessibility_Reset_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reset (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_SetMode_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setMode');
          const result = this.impl.setMode(params.ax_mode, params.reset_token);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_FatalError_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.fatalError');
          const result = this.impl.fatalError();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_HitTest_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.hitTest');
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
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_PerformAction_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.performAction');
          const result = this.impl.performAction(params.action_data);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.RenderAccessibility_Reset_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reset');
          const result = this.impl.reset(params.reset_token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.RenderAccessibilityReceiver = blink.mojom.RenderAccessibilityReceiver;

blink.mojom.RenderAccessibilityPtr = blink.mojom.RenderAccessibilityRemote;
blink.mojom.RenderAccessibilityRequest = blink.mojom.RenderAccessibilityPendingReceiver;

