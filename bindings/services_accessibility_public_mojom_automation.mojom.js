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
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchActionResult_ParamsSpec, 'ax.mojom.Automation_DispatchActionResult_Params', [
      mojo.internal.StructField('data', 0, 0, ax.mojom.AXActionDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchAccessibilityEvents_ParamsSpec, 'ax.mojom.Automation_DispatchAccessibilityEvents_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('updates', 16, 0, mojo.internal.Array(ax.mojom.AXTreeUpdateSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('mouse_location', 24, 0, gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('events', 32, 0, mojo.internal.Array(ax.mojom.AXEventSpec, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchAccessibilityLocationChange_ParamsSpec, 'ax.mojom.Automation_DispatchAccessibilityLocationChange_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('bounds', 16, 0, ax.mojom.AXRelativeBoundsSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchAccessibilityScrollChange_ParamsSpec, 'ax.mojom.Automation_DispatchAccessibilityScrollChange_Params', [
      mojo.internal.StructField('tree_id', 0, 0, ax.mojom.AXTreeIDSpec, null, false, 0, undefined),
      mojo.internal.StructField('node_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_x', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('scroll_y', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    ax.mojom.Automation_DispatchGetTextLocationResult_ParamsSpec, 'ax.mojom.Automation_DispatchGetTextLocationResult_Params', [
      mojo.internal.StructField('data', 0, 0, ax.mojom.AXActionDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('rect', 8, 0, gfx.mojom.RectSpec, null, true, 0, undefined),
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

ax.mojom.AutomationPtr = ax.mojom.AutomationRemote;
ax.mojom.AutomationRequest = ax.mojom.AutomationPendingReceiver;

