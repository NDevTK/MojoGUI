// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/input_method_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Struct: ImeInfo
arc.mojom.mojom.ImeInfoSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInfo',
      packedSize: 40,
      fields: [
        { name: 'ime_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enabled', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'settings_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_allowed_in_clamshell_mode', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 8 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 8, packedSize: 40}]
    }
  }
};

// Struct: TextInputState
arc.mojom.mojom.TextInputStateSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TextInputState',
      packedSize: 56,
      fields: [
        { name: 'cursor_pos', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'text_range', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'selection_range', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 28, packedBitOffset: 0, type: arc.mojom.TextInputTypeSpec, nullable: false, minVersion: 0 },
        { name: 'should_do_learning', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'first_update_after_operation', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'composition_text_range', packedOffset: 40, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: true, minVersion: 6 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 6, packedSize: 56}]
    }
  }
};

// Interface: InputConnection
arc.mojom.mojom.InputConnection = {};

arc.mojom.mojom.InputConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.InputConnectionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.InputConnectionPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.InputConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.InputConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitText(text, new_cursor_pos) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.InputConnection_CommitText_ParamsSpec,
      null,
      [text, new_cursor_pos]);
  }

  deleteSurroundingText(before, after) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.InputConnection_DeleteSurroundingText_ParamsSpec,
      null,
      [before, after]);
  }

  finishComposingText() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.InputConnection_FinishComposingText_ParamsSpec,
      null,
      []);
  }

  requestTextInputState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.InputConnection_RequestTextInputState_ParamsSpec,
      arc.mojom.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec,
      []);
  }

  setComposingText(text, new_cursor_pos, new_selection_range) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.InputConnection_SetComposingText_ParamsSpec,
      null,
      [text, new_cursor_pos, new_selection_range]);
  }

  setSelection(new_selection_range) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.InputConnection_SetSelection_ParamsSpec,
      null,
      [new_selection_range]);
  }

  sendKeyEvent(key_event_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.InputConnection_SendKeyEvent_ParamsSpec,
      null,
      [key_event_data]);
  }

  setCompositionRange(new_range) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.InputConnection_SetCompositionRange_ParamsSpec,
      null,
      [new_range]);
  }

};

arc.mojom.mojom.InputConnection.getRemote = function() {
  let remote = new arc.mojom.mojom.InputConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputConnection',
    'context');
  return remote.$;
};

// ParamsSpec for CommitText
arc.mojom.mojom.InputConnection_CommitText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.CommitText_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'new_cursor_pos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DeleteSurroundingText
arc.mojom.mojom.InputConnection_DeleteSurroundingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.DeleteSurroundingText_Params',
      packedSize: 16,
      fields: [
        { name: 'before', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'after', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FinishComposingText
arc.mojom.mojom.InputConnection_FinishComposingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.FinishComposingText_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RequestTextInputState
arc.mojom.mojom.InputConnection_RequestTextInputState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.RequestTextInputState_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.RequestTextInputState_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.TextInputStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetComposingText
arc.mojom.mojom.InputConnection_SetComposingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.SetComposingText_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'new_cursor_pos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'new_selection_range', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: true, minVersion: 3 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 3, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetSelection
arc.mojom.mojom.InputConnection_SetSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.SetSelection_Params',
      packedSize: 16,
      fields: [
        { name: 'new_selection_range', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendKeyEvent
arc.mojom.mojom.InputConnection_SendKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.SendKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'key_event_data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.KeyEventDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCompositionRange
arc.mojom.mojom.InputConnection_SetCompositionRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputConnection.SetCompositionRange_Params',
      packedSize: 16,
      fields: [
        { name: 'new_range', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.InputConnectionPtr = arc.mojom.mojom.InputConnectionRemote;
arc.mojom.mojom.InputConnectionRequest = arc.mojom.mojom.InputConnectionPendingReceiver;


// Interface: InputMethodManagerHost
arc.mojom.mojom.InputMethodManagerHost = {};

arc.mojom.mojom.InputMethodManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.InputMethodManagerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.InputMethodManagerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.InputMethodManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.InputMethodManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onActiveImeChanged(ime_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec,
      null,
      [ime_id]);
  }

  onImeDisabled(ime_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec,
      null,
      [ime_id]);
  }

  onImeInfoChanged(ime_infos) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec,
      null,
      [ime_infos]);
  }

};

arc.mojom.mojom.InputMethodManagerHost.getRemote = function() {
  let remote = new arc.mojom.mojom.InputMethodManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnActiveImeChanged
arc.mojom.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerHost.OnActiveImeChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'ime_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnImeDisabled
arc.mojom.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerHost.OnImeDisabled_Params',
      packedSize: 16,
      fields: [
        { name: 'ime_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnImeInfoChanged
arc.mojom.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerHost.OnImeInfoChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'ime_infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.ImeInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.InputMethodManagerHostPtr = arc.mojom.mojom.InputMethodManagerHostRemote;
arc.mojom.mojom.InputMethodManagerHostRequest = arc.mojom.mojom.InputMethodManagerHostPendingReceiver;


// Interface: InputMethodManagerInstance
arc.mojom.mojom.InputMethodManagerInstance = {};

arc.mojom.mojom.InputMethodManagerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.InputMethodManagerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.InputMethodManagerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.InputMethodManagerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.InputMethodManagerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.InputMethodManagerInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  enableIme(ime_id, enable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec,
      arc.mojom.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec,
      [ime_id, enable]);
  }

  switchImeTo(ime_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec,
      arc.mojom.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec,
      [ime_id]);
  }

  focus(connection, initial_state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.InputMethodManagerInstance_Focus_ParamsSpec,
      null,
      [connection, initial_state]);
  }

  updateTextInputState(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec,
      null,
      [state]);
  }

  showVirtualKeyboard() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec,
      null,
      []);
  }

  hideVirtualKeyboard() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.InputMethodManagerInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.InputMethodManagerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.InputMethodManagerInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.InputMethodManagerHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnableIme
arc.mojom.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.EnableIme_Params',
      packedSize: 24,
      fields: [
        { name: 'ime_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'enable', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

arc.mojom.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.EnableIme_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SwitchImeTo
arc.mojom.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.SwitchImeTo_Params',
      packedSize: 16,
      fields: [
        { name: 'ime_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.SwitchImeTo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Focus
arc.mojom.mojom.InputMethodManagerInstance_Focus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.Focus_Params',
      packedSize: 24,
      fields: [
        { name: 'connection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.InputConnectionRemote), nullable: false, minVersion: 0 },
        { name: 'initial_state', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.TextInputStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateTextInputState
arc.mojom.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.UpdateTextInputState_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.TextInputStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowVirtualKeyboard
arc.mojom.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.ShowVirtualKeyboard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for HideVirtualKeyboard
arc.mojom.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.InputMethodManagerInstance.HideVirtualKeyboard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.InputMethodManagerInstancePtr = arc.mojom.mojom.InputMethodManagerInstanceRemote;
arc.mojom.mojom.InputMethodManagerInstanceRequest = arc.mojom.mojom.InputMethodManagerInstancePendingReceiver;

