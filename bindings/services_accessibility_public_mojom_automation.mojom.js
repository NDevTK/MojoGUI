// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/automation.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: Automation
ax.mojom.Automation = {};

ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation_DispatchTreeDestroyedEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ax.mojom.Automation_DispatchActionResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation_DispatchActionResult_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXActionDataSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation_DispatchAccessibilityEvents_Params',
      packedSize: 48,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'updates', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXTreeUpdateSpec, false), nullable: false, minVersion: 0 },
        { name: 'mouse_location', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'events', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXEventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation_DispatchAccessibilityLocationChange_Params',
      packedSize: 40,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'node_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXRelativeBoundsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation_DispatchAccessibilityScrollChange_Params',
      packedSize: 40,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'node_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'scroll_x', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'scroll_y', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation_DispatchGetTextLocationResult_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXActionDataSpec, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [tree_id]);
  }

  dispatchActionResult(data, result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.Automation_DispatchActionResult_ParamsSpec,
      null,
      [data, result]);
  }

  dispatchAccessibilityEvents(tree_id, updates, mouse_location, events) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec,
      null,
      [tree_id, updates, mouse_location, events]);
  }

  dispatchAccessibilityLocationChange(tree_id, node_id, bounds) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec,
      null,
      [tree_id, node_id, bounds]);
  }

  dispatchAccessibilityScrollChange(tree_id, node_id, scroll_x, scroll_y) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec,
      null,
      [tree_id, node_id, scroll_x, scroll_y]);
  }

  dispatchGetTextLocationResult(data, rect) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec,
      null,
      [data, rect]);
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

// ParamsSpec for DispatchTreeDestroyedEvent
ax.mojom.Automation_DispatchTreeDestroyedEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation.DispatchTreeDestroyedEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DispatchActionResult
ax.mojom.Automation_DispatchActionResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation.DispatchActionResult_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXActionDataSpec, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DispatchAccessibilityEvents
ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation.DispatchAccessibilityEvents_Params',
      packedSize: 48,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'updates', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXTreeUpdateSpec, false), nullable: false, minVersion: 0 },
        { name: 'mouse_location', packedOffset: 24, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'events', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.AXEventSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for DispatchAccessibilityLocationChange
ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation.DispatchAccessibilityLocationChange_Params',
      packedSize: 40,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'node_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 16, packedBitOffset: 0, type: ax.mojom.AXRelativeBoundsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for DispatchAccessibilityScrollChange
ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation.DispatchAccessibilityScrollChange_Params',
      packedSize: 40,
      fields: [
        { name: 'tree_id', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXTreeIDSpec, nullable: false, minVersion: 0 },
        { name: 'node_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'scroll_x', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'scroll_y', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for DispatchGetTextLocationResult
ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.Automation.DispatchGetTextLocationResult_Params',
      packedSize: 24,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.AXActionDataSpec, nullable: false, minVersion: 0 },
        { name: 'rect', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ax.mojom.AutomationPtr = ax.mojom.AutomationRemote;
ax.mojom.AutomationRequest = ax.mojom.AutomationPendingReceiver;

