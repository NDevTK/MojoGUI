// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_input.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: SyntheticMouseEventButton
ax.mojom.SyntheticMouseEventButton = {
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
  kBack: 3,
  kForward: 4,
};
ax.mojom.SyntheticMouseEventButtonSpec = { $: mojo.internal.Enum() };

// Struct: SyntheticKeyEvent
ax.mojom.SyntheticKeyEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SyntheticKeyEvent',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.EventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'key_data', packedOffset: 8, packedBitOffset: 0, type: ui.mojom.KeyDataSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SyntheticMouseEvent
ax.mojom.SyntheticMouseEventSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.SyntheticMouseEvent',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.EventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'mouse_button', packedOffset: 4, packedBitOffset: 0, type: ax.mojom.SyntheticMouseEventButtonSpec, nullable: true, minVersion: 0 },
        { name: 'touch_accessibility_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'touch_accessibility_$value', originalFieldName: 'touch_accessibility' } },
        { name: 'touch_accessibility_$value', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'touch_accessibility_$flag', originalFieldName: 'touch_accessibility' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: UserInput
ax.mojom.UserInput = {};

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
      [key_event]);
  }

  sendSyntheticMouseEvent(mouse_event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec,
      null,
      [mouse_event]);
  }

};

ax.mojom.UserInput.getRemote = function() {
  let remote = new ax.mojom.UserInputRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.UserInput',
    'context');
  return remote.$;
};

// ParamsSpec for SendSyntheticKeyEventForShortcutOrNavigation
ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInput.SendSyntheticKeyEventForShortcutOrNavigation_Params',
      packedSize: 16,
      fields: [
        { name: 'key_event', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.SyntheticKeyEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendSyntheticMouseEvent
ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInput.SendSyntheticMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'mouse_event', packedOffset: 0, packedBitOffset: 0, type: ax.mojom.SyntheticMouseEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.UserInputPtr = ax.mojom.UserInputRemote;
ax.mojom.UserInputRequest = ax.mojom.UserInputPendingReceiver;

