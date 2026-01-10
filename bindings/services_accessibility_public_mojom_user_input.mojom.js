// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_input.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var ui = ui || {};
var ui = ui || {};
var gfx = gfx || {};

ax.mojom.SyntheticMouseEventButtonSpec = { $: mojo.internal.Enum() };
ax.mojom.SyntheticKeyEventSpec = { $: {} };
ax.mojom.SyntheticMouseEventSpec = { $: {} };
ax.mojom.UserInput = {};
ax.mojom.UserInput.$interfaceName = 'ax.mojom.UserInput';
ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec = { $: {} };
ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec = { $: {} };

// Enum: SyntheticMouseEventButton
ax.mojom.SyntheticMouseEventButton = {
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
  kBack: 3,
  kForward: 4,
};

// Struct: SyntheticKeyEvent
mojo.internal.Struct(
    ax.mojom.SyntheticKeyEventSpec, 'ax.mojom.SyntheticKeyEvent', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, ui.mojom.KeyDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SyntheticMouseEvent
mojo.internal.Struct(
    ax.mojom.SyntheticMouseEventSpec, 'ax.mojom.SyntheticMouseEvent', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mouse_button', 16, 0, ax.mojom.SyntheticMouseEventButtonSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_accessibility_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'touch_accessibility_$value', originalFieldName: 'touch_accessibility' }),
      mojo.internal.StructField('touch_accessibility_$value', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'touch_accessibility_$flag', originalFieldName: 'touch_accessibility' }),
    ],
    [[0, 40]]);

// Interface: UserInput
mojo.internal.Struct(
    ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec, 'ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_Params', [
      mojo.internal.StructField('key_event', 0, 0, ax.mojom.SyntheticKeyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec, 'ax.mojom.UserInput_SendSyntheticMouseEvent_Params', [
      mojo.internal.StructField('mouse_event', 0, 0, ax.mojom.SyntheticMouseEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.UserInputPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.UserInputRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.UserInput';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.UserInputPendingReceiver,
      handle);
    this.$ = new ax.mojom.UserInputRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.UserInputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendSyntheticKeyEventForShortcutOrNavigation(key_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec,
      null,
      [key_event],
      false);
  }

  sendSyntheticMouseEvent(mouse_event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec,
      null,
      [mouse_event],
      false);
  }

};

ax.mojom.UserInput.getRemote = function() {
  let remote = new ax.mojom.UserInputRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ax.mojom.UserInput',
    'context');
  return remote.$;
};

ax.mojom.UserInputPtr = ax.mojom.UserInputRemote;
ax.mojom.UserInputRequest = ax.mojom.UserInputPendingReceiver;

