// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/input_method_manager.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var mojo_base = mojo_base || {};

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
      mojo.internal.StructField('settings_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_allowed_in_clamshell_mode', 24, 1, mojo.internal.Bool, false, false, 8, undefined),
    ],
    [[0, 40], [8, 40]]);

// Struct: TextInputState
mojo.internal.Struct(
    arc.mojom.TextInputStateSpec, 'arc.mojom.TextInputState', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_range', 8, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection_range', 16, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 24, 0, arc.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cursor_pos', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('should_do_learning', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('first_update_after_operation', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('composition_text_range', 48, 0, arc.mojom.RangeSpec.$, null, true, 6, undefined),
    ],
    [[0, 56], [6, 64]]);

// Interface: InputConnection
mojo.internal.Struct(
    arc.mojom.InputConnection_CommitText_ParamsSpec, 'arc.mojom.InputConnection_CommitText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
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
      mojo.internal.StructField('state', 0, 0, arc.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetComposingText_ParamsSpec, 'arc.mojom.InputConnection_SetComposingText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_cursor_pos', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('new_selection_range', 16, 0, arc.mojom.RangeSpec.$, null, true, 3, undefined),
    ],
    [[0, 24], [3, 32]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetSelection_ParamsSpec, 'arc.mojom.InputConnection_SetSelection_Params', [
      mojo.internal.StructField('new_selection_range', 0, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SendKeyEvent_ParamsSpec, 'arc.mojom.InputConnection_SendKeyEvent_Params', [
      mojo.internal.StructField('key_event_data', 0, 0, arc.mojom.KeyEventDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.InputConnection_SetCompositionRange_ParamsSpec, 'arc.mojom.InputConnection_SetCompositionRange_Params', [
      mojo.internal.StructField('new_range', 0, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
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
      [text, new_cursor_pos],
      false);
  }

  deleteSurroundingText(before, after) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec,
      null,
      [before, after],
      false);
  }

  finishComposingText() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.InputConnection_FinishComposingText_ParamsSpec,
      null,
      [],
      false);
  }

  requestTextInputState() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.InputConnection_RequestTextInputState_ParamsSpec,
      arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec,
      [],
      false);
  }

  setComposingText(text, new_cursor_pos, new_selection_range) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.InputConnection_SetComposingText_ParamsSpec,
      null,
      [text, new_cursor_pos, new_selection_range],
      false);
  }

  setSelection(new_selection_range) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.InputConnection_SetSelection_ParamsSpec,
      null,
      [new_selection_range],
      false);
  }

  sendKeyEvent(key_event_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.InputConnection_SendKeyEvent_ParamsSpec,
      null,
      [key_event_data],
      false);
  }

  setCompositionRange(new_range) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.InputConnection_SetCompositionRange_ParamsSpec,
      null,
      [new_range],
      false);
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

arc.mojom.InputConnectionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.InputConnection_CommitText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.commitText(params.text, params.new_cursor_pos);
          break;
        }
        case 1: {
          const params = arc.mojom.InputConnection_DeleteSurroundingText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deleteSurroundingText(params.before, params.after);
          break;
        }
        case 2: {
          const params = arc.mojom.InputConnection_FinishComposingText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.finishComposingText();
          break;
        }
        case 3: {
          const params = arc.mojom.InputConnection_RequestTextInputState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestTextInputState();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputConnection_RequestTextInputState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = arc.mojom.InputConnection_SetComposingText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setComposingText(params.text, params.new_cursor_pos, params.new_selection_range);
          break;
        }
        case 5: {
          const params = arc.mojom.InputConnection_SetSelection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setSelection(params.new_selection_range);
          break;
        }
        case 6: {
          const params = arc.mojom.InputConnection_SendKeyEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendKeyEvent(params.key_event_data);
          break;
        }
        case 7: {
          const params = arc.mojom.InputConnection_SetCompositionRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCompositionRange(params.new_range);
          break;
        }
      }
    }});
  }
};

arc.mojom.InputConnectionReceiver = arc.mojom.InputConnectionReceiver;

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
      mojo.internal.StructField('ime_infos', 0, 0, mojo.internal.Array(arc.mojom.ImeInfoSpec.$, false), null, false, 0, undefined),
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
      [ime_id],
      false);
  }

  onImeDisabled(ime_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec,
      null,
      [ime_id],
      false);
  }

  onImeInfoChanged(ime_infos) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec,
      null,
      [ime_infos],
      false);
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

arc.mojom.InputMethodManagerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.InputMethodManagerHost_OnActiveImeChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onActiveImeChanged(params.ime_id);
          break;
        }
        case 2: {
          const params = arc.mojom.InputMethodManagerHost_OnImeDisabled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImeDisabled(params.ime_id);
          break;
        }
        case 1: {
          const params = arc.mojom.InputMethodManagerHost_OnImeInfoChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onImeInfoChanged(params.ime_infos);
          break;
        }
      }
    }});
  }
};

arc.mojom.InputMethodManagerHostReceiver = arc.mojom.InputMethodManagerHostReceiver;

arc.mojom.InputMethodManagerHostPtr = arc.mojom.InputMethodManagerHostRemote;
arc.mojom.InputMethodManagerHostRequest = arc.mojom.InputMethodManagerHostPendingReceiver;


// Interface: InputMethodManagerInstance
mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_Init_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.InputMethodManagerHostSpec), null, false, 0, undefined),
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
      mojo.internal.StructField('connection', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.InputConnectionSpec), null, false, 0, undefined),
      mojo.internal.StructField('initial_state', 8, 0, arc.mojom.TextInputStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec, 'arc.mojom.InputMethodManagerInstance_UpdateTextInputState_Params', [
      mojo.internal.StructField('state', 0, 0, arc.mojom.TextInputStateSpec.$, null, false, 0, undefined),
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
      [host_remote],
      false);
  }

  enableIme(ime_id, enable) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec,
      [ime_id, enable],
      false);
  }

  switchImeTo(ime_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec,
      arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec,
      [ime_id],
      false);
  }

  focus(connection, initial_state) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec,
      null,
      [connection, initial_state],
      false);
  }

  updateTextInputState(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec,
      null,
      [state],
      false);
  }

  showVirtualKeyboard() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec,
      null,
      [],
      false);
  }

  hideVirtualKeyboard() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec,
      null,
      [],
      false);
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

arc.mojom.InputMethodManagerInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.InputMethodManagerInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputMethodManagerInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = arc.mojom.InputMethodManagerInstance_EnableIme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.enableIme(params.ime_id, params.enable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputMethodManagerInstance_EnableIme_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.InputMethodManagerInstance_SwitchImeTo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.switchImeTo(params.ime_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.InputMethodManagerInstance_SwitchImeTo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.InputMethodManagerInstance_Focus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.focus(params.connection, params.initial_state);
          break;
        }
        case 4: {
          const params = arc.mojom.InputMethodManagerInstance_UpdateTextInputState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateTextInputState(params.state);
          break;
        }
        case 5: {
          const params = arc.mojom.InputMethodManagerInstance_ShowVirtualKeyboard_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showVirtualKeyboard();
          break;
        }
        case 6: {
          const params = arc.mojom.InputMethodManagerInstance_HideVirtualKeyboard_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hideVirtualKeyboard();
          break;
        }
      }
    }});
  }
};

arc.mojom.InputMethodManagerInstanceReceiver = arc.mojom.InputMethodManagerInstanceReceiver;

arc.mojom.InputMethodManagerInstancePtr = arc.mojom.InputMethodManagerInstanceRemote;
arc.mojom.InputMethodManagerInstanceRequest = arc.mojom.InputMethodManagerInstancePendingReceiver;

