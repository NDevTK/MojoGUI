// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/input_method_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var chromeos = chromeos || {};
var ash = ash || {};
var chromeos = chromeos || {};

arc.mojom.ImeInfoSpec = { $: {} };
arc.mojom.TextInputStateSpec = { $: {} };
arc.mojom.InputConnection = {};
arc.mojom.InputConnection.$interfaceName = 'arc.mojom.InputConnection';
arc.mojom.InputConnection_CommitText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_FinishComposingText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_RequestTextInputState_ParamsSpec = { $: {} };
arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec = { $: {} };
arc.mojom.InputConnection_SetComposingText_ParamsSpec = { $: {} };
arc.mojom.InputConnection_SetSelection_ParamsSpec = { $: {} };
arc.mojom.InputConnection_SendKeyEvent_ParamsSpec = { $: {} };
arc.mojom.InputConnection_SetCompositionRange_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerHost = {};
arc.mojom.InputMethodManagerHost.$interfaceName = 'arc.mojom.InputMethodManagerHost';
arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance = {};
arc.mojom.InputMethodManagerInstance.$interfaceName = 'arc.mojom.InputMethodManagerInstance';
arc.mojom.InputMethodManagerInstance_Init_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec = { $: {} };
arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec = { $: {} };

// Struct: ImeInfo
mojo.internal.Struct(
    arc.mojom.ImeInfoSpec, 'arc.mojom.ImeInfo', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('settings_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_allowed_in_clamshell_mode', 24, 1, mojo.internal.Bool, false, false, 8, undefined),
    ],
    [[0, 40], [8, 40]]);

// Struct: TextInputState
mojo.internal.Struct(
    arc.mojom.TextInputStateSpec, 'arc.mojom.TextInputState', [
      mojo.internal.StructField('cursor_pos', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('text_range', 8, 0, arc.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('selection_range', 16, 0, arc.mojom.RangeSpec, null, false, 0, undefined),
      mojo.internal.StructField('type', 28, 0, arc.mojom.TextInputTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('should_do_learning', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('flags', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('first_update_after_operation', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('composition_text_range', 40, 0, arc.mojom.RangeSpec, null, true, 6, undefined),
    ],
    [[0, 48], [6, 56]]);

// Interface: InputConnection
mojo.internal.Struct(
    arc.mojom.InputConnection_CommitText_ParamsSpec, 'arc.mojom.InputConnection_CommitText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('new_cursor_pos', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec, 'arc.mojom.InputConnection_DeleteSurroundingText_Params', [
      mojo.internal.StructField('before', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('after', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_FinishComposingText_ParamsSpec, 'arc.mojom.InputConnection_FinishComposingText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_RequestTextInputState_ParamsSpec, 'arc.mojom.InputConnection_RequestTextInputState_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec, 'arc.mojom.InputConnection_RequestTextInputState_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.TextInputStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetComposingText_ParamsSpec, 'arc.mojom.InputConnection_SetComposingText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('new_cursor_pos', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('new_selection_range', 16, 0, arc.mojom.RangeSpec, null, true, 3, undefined),
    ],
    [[0, 24], [3, 32]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetSelection_ParamsSpec, 'arc.mojom.InputConnection_SetSelection_Params', [
      mojo.internal.StructField('new_selection_range', 0, 0, arc.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SendKeyEvent_ParamsSpec, 'arc.mojom.InputConnection_SendKeyEvent_Params', [
      mojo.internal.StructField('key_event_data', 0, 0, arc.mojom.KeyEventDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetCompositionRange_ParamsSpec, 'arc.mojom.InputConnection_SetCompositionRange_Params', [
      mojo.internal.StructField('new_range', 0, 0, arc.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.InputConnectionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputConnectionRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputConnection';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputConnectionPendingReceiver,
      handle);
    this.$ = new arc.mojom.InputConnectionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputConnectionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  commitText(text, new_cursor_pos) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.InputConnection_CommitText_ParamsSpec,
      null,
      [text, new_cursor_pos]);
  }

  deleteSurroundingText(before, after) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec,
      null,
      [before, after]);
  }

  finishComposingText() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.InputConnection_FinishComposingText_ParamsSpec,
      null,
      []);
  }

  requestTextInputState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.InputConnection_RequestTextInputState_ParamsSpec,
      arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec,
      []);
  }

  setComposingText(text, new_cursor_pos, new_selection_range) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.InputConnection_SetComposingText_ParamsSpec,
      null,
      [text, new_cursor_pos, new_selection_range]);
  }

  setSelection(new_selection_range) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.InputConnection_SetSelection_ParamsSpec,
      null,
      [new_selection_range]);
  }

  sendKeyEvent(key_event_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.InputConnection_SendKeyEvent_ParamsSpec,
      null,
      [key_event_data]);
  }

  setCompositionRange(new_range) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.InputConnection_SetCompositionRange_ParamsSpec,
      null,
      [new_range]);
  }

};

arc.mojom.InputConnection.getRemote = function() {
  let remote = new arc.mojom.InputConnectionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputConnection',
    'context');
  return remote.$;
};

arc.mojom.InputConnectionPtr = arc.mojom.InputConnectionRemote;
arc.mojom.InputConnectionRequest = arc.mojom.InputConnectionPendingReceiver;


// Interface: InputMethodManagerHost
mojo.internal.Struct(
    arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec, 'arc.mojom.InputMethodManagerHost_OnActiveImeChanged_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec, 'arc.mojom.InputMethodManagerHost_OnImeDisabled_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec, 'arc.mojom.InputMethodManagerHost_OnImeInfoChanged_Params', [
      mojo.internal.StructField('ime_infos', 0, 0, mojo.internal.Array(arc.mojom.ImeInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.InputMethodManagerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputMethodManagerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputMethodManagerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.InputMethodManagerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputMethodManagerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onActiveImeChanged(ime_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec,
      null,
      [ime_id]);
  }

  onImeDisabled(ime_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec,
      null,
      [ime_id]);
  }

  onImeInfoChanged(ime_infos) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec,
      null,
      [ime_infos]);
  }

};

arc.mojom.InputMethodManagerHost.getRemote = function() {
  let remote = new arc.mojom.InputMethodManagerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerHost',
    'context');
  return remote.$;
};

arc.mojom.InputMethodManagerHostPtr = arc.mojom.InputMethodManagerHostRemote;
arc.mojom.InputMethodManagerHostRequest = arc.mojom.InputMethodManagerHostPendingReceiver;


// Interface: InputMethodManagerInstance
mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_Init_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.InputMethodManagerHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec, 'arc.mojom.InputMethodManagerInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_EnableIme_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enable', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec, 'arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_SwitchImeTo_Params', [
      mojo.internal.StructField('ime_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec, 'arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_Focus_Params', [
      mojo.internal.StructField('connection', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.InputConnectionRemote), null, false, 0, undefined),
      mojo.internal.StructField('initial_state', 8, 0, arc.mojom.TextInputStateSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_UpdateTextInputState_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.TextInputStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_Params', [
    ],
    [[0, 8]]);

arc.mojom.InputMethodManagerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.InputMethodManagerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.InputMethodManagerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.InputMethodManagerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.InputMethodManagerInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.InputMethodManagerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.InputMethodManagerInstance_Init_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec,
      [host_remote]);
  }

  enableIme(ime_id, enable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec,
      [ime_id, enable]);
  }

  switchImeTo(ime_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec,
      [ime_id]);
  }

  focus(connection, initial_state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec,
      null,
      [connection, initial_state]);
  }

  updateTextInputState(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec,
      null,
      [state]);
  }

  showVirtualKeyboard() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec,
      null,
      []);
  }

  hideVirtualKeyboard() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.InputMethodManagerInstance.getRemote = function() {
  let remote = new arc.mojom.InputMethodManagerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.InputMethodManagerInstance',
    'context');
  return remote.$;
};

arc.mojom.InputMethodManagerInstancePtr = arc.mojom.InputMethodManagerInstanceRemote;
arc.mojom.InputMethodManagerInstanceRequest = arc.mojom.InputMethodManagerInstancePendingReceiver;

