// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/shortcut_input_provider.mojom
// Module: ash.common.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.common = ash.common || {};
ash.common.mojom = ash.common.mojom || {};


// Interface: ShortcutInputObserver
ash.common.mojom.ShortcutInputObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.common.mojom.ShortcutInputObserver';
  }

  onShortcutInputEventPressed(prerewritten_key_event, key_event) {
    // Method: OnShortcutInputEventPressed
    // Call: OnShortcutInputEventPressed(prerewritten_key_event, key_event)
  }

  onShortcutInputEventReleased(prerewritten_key_event, key_event) {
    // Method: OnShortcutInputEventReleased
    // Call: OnShortcutInputEventReleased(prerewritten_key_event, key_event)
  }

};

ash.common.mojom.ShortcutInputObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ShortcutInputProvider
ash.common.mojom.ShortcutInputProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.common.mojom.ShortcutInputProvider';
  }

  startObservingShortcutInput(observer) {
    // Method: StartObservingShortcutInput
    // Call: StartObservingShortcutInput(observer)
  }

  stopObservingShortcutInput() {
    // Method: StopObservingShortcutInput
    // Call: StopObservingShortcutInput()
  }

};

ash.common.mojom.ShortcutInputProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
