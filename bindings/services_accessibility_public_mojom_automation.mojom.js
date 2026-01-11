// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation.mojom
// Module: ax.mojom

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
  dispatchTreeDestroyedEvent(tree_id) {
    return this.$.dispatchTreeDestroyedEvent(tree_id);
  }
  dispatchActionResult(data, result) {
    return this.$.dispatchActionResult(data, result);
  }
  dispatchAccessibilityEvents(tree_id, updates, mouse_location, events) {
    return this.$.dispatchAccessibilityEvents(tree_id, updates, mouse_location, events);
  }
  dispatchAccessibilityLocationChange(tree_id, node_id, bounds) {
    return this.$.dispatchAccessibilityLocationChange(tree_id, node_id, bounds);
  }
  dispatchAccessibilityScrollChange(tree_id, node_id, scroll_x, scroll_y) {
    return this.$.dispatchAccessibilityScrollChange(tree_id, node_id, scroll_x, scroll_y);
  }
  dispatchGetTextLocationResult(data, rect) {
    return this.$.dispatchGetTextLocationResult(data, rect);
  }
};

ax.mojom.AutomationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Automation', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  dispatchTreeDestroyedEvent(tree_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec,
      null,
      [tree_id],
      false);
  }

  dispatchActionResult(data, result) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ax.mojom.Automation_DispatchActionResult_ParamsSpec,
      null,
      [data, result],
      false);
  }

  dispatchAccessibilityEvents(tree_id, updates, mouse_location, events) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec,
      null,
      [tree_id, updates, mouse_location, events],
      false);
  }

  dispatchAccessibilityLocationChange(tree_id, node_id, bounds) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec,
      null,
      [tree_id, node_id, bounds],
      false);
  }

  dispatchAccessibilityScrollChange(tree_id, node_id, scroll_x, scroll_y) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec,
      null,
      [tree_id, node_id, scroll_x, scroll_y],
      false);
  }

  dispatchGetTextLocationResult(data, rect) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Automation', [
      { explicit: null },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchActionResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchTreeDestroyedEvent(params.tree_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchActionResult_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchActionResult(params.data, params.result);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchAccessibilityEvents(params.tree_id, params.updates, params.mouse_location, params.events);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchAccessibilityLocationChange(params.tree_id, params.node_id, params.bounds);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchAccessibilityScrollChange(params.tree_id, params.node_id, params.scroll_x, params.scroll_y);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec.$.structSpec);
          const result = this.impl.dispatchGetTextLocationResult(params.data, params.rect);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ax.mojom.AutomationReceiver = ax.mojom.AutomationReceiver;

ax.mojom.AutomationPtr = ax.mojom.AutomationRemote;
ax.mojom.AutomationRequest = ax.mojom.AutomationPendingReceiver;

