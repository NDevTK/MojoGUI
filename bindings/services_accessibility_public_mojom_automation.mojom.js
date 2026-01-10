// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var gfx = gfx || {};

ax.mojom.Automation = {};
ax.mojom.Automation.$interfaceName = 'ax.mojom.Automation';
ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec = { $: {} };
ax.mojom.Automation_DispatchActionResult_ParamsSpec = { $: {} };
ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec = { $: {} };
ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec = { $: {} };
ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec = { $: {} };
ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec = { $: {} };

// Interface: Automation
mojo.internal.Struct(
    ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec, 'ax.mojom.Automation_DispatchTreeDestroyedEvent_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchActionResult_ParamsSpec, 'ax.mojom.Automation_DispatchActionResult_Params', [
      mojo.internal.StructField('data', 0, 0, ax.mojom.AXActionDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec, 'ax.mojom.Automation_DispatchAccessibilityEvents_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('updates', 8, 0, mojo.internal.Array(ax.mojom.AXTreeUpdateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('mouse_location', 16, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('events', 24, 0, mojo.internal.Array(ax.mojom.AXEventSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec, 'ax.mojom.Automation_DispatchAccessibilityLocationChange_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, ax.mojom.AXRelativeBoundsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec, 'ax.mojom.Automation_DispatchAccessibilityScrollChange_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_x', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_y', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec, 'ax.mojom.Automation_DispatchGetTextLocationResult_Params', [
      mojo.internal.StructField('data', 0, 0, ax.mojom.AXActionDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

ax.mojom.AutomationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AutomationRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.Automation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AutomationPendingReceiver,
      handle);
    this.$ = new ax.mojom.AutomationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AutomationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchTreeDestroyedEvent(tree_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec,
      null,
      [tree_id],
      false);
  }

  dispatchActionResult(data, result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.Automation_DispatchActionResult_ParamsSpec,
      null,
      [data, result],
      false);
  }

  dispatchAccessibilityEvents(tree_id, updates, mouse_location, events) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec,
      null,
      [tree_id, updates, mouse_location, events],
      false);
  }

  dispatchAccessibilityLocationChange(tree_id, node_id, bounds) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec,
      null,
      [tree_id, node_id, bounds],
      false);
  }

  dispatchAccessibilityScrollChange(tree_id, node_id, scroll_x, scroll_y) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec,
      null,
      [tree_id, node_id, scroll_x, scroll_y],
      false);
  }

  dispatchGetTextLocationResult(data, rect) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec,
      null,
      [data, rect],
      false);
  }

};

ax.mojom.Automation.getRemote = function() {
  let remote = new ax.mojom.AutomationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.Automation',
    'context');
  return remote.$;
};

ax.mojom.AutomationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        
        // Try Method 0: DispatchTreeDestroyedEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchTreeDestroyedEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: DispatchActionResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchActionResult_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchActionResult (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: DispatchAccessibilityEvents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchAccessibilityEvents (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DispatchAccessibilityLocationChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchAccessibilityLocationChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: DispatchAccessibilityScrollChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchAccessibilityScrollChange (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: DispatchGetTextLocationResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DispatchGetTextLocationResult (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
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
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dispatchTreeDestroyedEvent');
          const result = this.impl.dispatchTreeDestroyedEvent(params.tree_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchActionResult_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dispatchActionResult');
          const result = this.impl.dispatchActionResult(params.data, params.result);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dispatchAccessibilityEvents');
          const result = this.impl.dispatchAccessibilityEvents(params.tree_id, params.updates, params.mouse_location, params.events);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dispatchAccessibilityLocationChange');
          const result = this.impl.dispatchAccessibilityLocationChange(params.tree_id, params.node_id, params.bounds);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dispatchAccessibilityScrollChange');
          const result = this.impl.dispatchAccessibilityScrollChange(params.tree_id, params.node_id, params.scroll_x, params.scroll_y);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.dispatchGetTextLocationResult');
          const result = this.impl.dispatchGetTextLocationResult(params.data, params.rect);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.AutomationReceiver = ax.mojom.AutomationReceiver;

ax.mojom.AutomationPtr = ax.mojom.AutomationRemote;
ax.mojom.AutomationRequest = ax.mojom.AutomationPendingReceiver;

