// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/ime.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


arc.mojom.TEXT_INPUT_FLAG_NONE = 0;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_NONE = 64;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_CHARACTERS = 128;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_WORDS = 256;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_SENTENCES = 512;

// Enum: TextInputType
arc.mojom.TextInputType = {
  TEXT: 0,
  PASSWORD: 1,
  SEARCH: 2,
  EMAIL: 3,
  NUMBER: 4,
  TELEPHONE: 5,
  URL: 6,
  DATE: 7,
  TIME: 8,
  DATETIME: 9,
  ANDROID_NULL: 10,
};
arc.mojom.TextInputTypeSpec = { $: mojo.internal.Enum() };

// Enum: SegmentStyle
arc.mojom.SegmentStyle = {
  DEFAULT: 0,
  EMPHASIZED: 1,
  NONE: 2,
};
arc.mojom.SegmentStyleSpec = { $: mojo.internal.Enum() };

// Enum: CursorCoordinateSpace
arc.mojom.CursorCoordinateSpace = {
  SCREEN: 0,
  DISPLAY: 1,
  NOTIFICATION: 2,
};
arc.mojom.CursorCoordinateSpaceSpec = { $: mojo.internal.Enum() };

// Struct: CompositionSegment
arc.mojom.CompositionSegmentSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.CompositionSegment',
      packedSize: 24,
      fields: [
        { name: 'start_offset', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'end_offset', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'emphasized', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.SegmentStyleSpec, nullable: false, minVersion: 18 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 18, packedSize: 24}]
    }
  }
};

// Struct: KeyEventData
arc.mojom.KeyEventDataSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.KeyEventData',
      packedSize: 24,
      fields: [
        { name: 'pressed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'key_code', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_shift_down', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_control_down', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_alt_down', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_capslock_on', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'scan_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 16 },
        { name: 'is_alt_gr_down', packedOffset: 0, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 20 },
        { name: 'is_repeat', packedOffset: 0, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 23 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 16, packedSize: 24}, {version: 20, packedSize: 24}, {version: 23, packedSize: 24}]
    }
  }
};

// Interface: ImeHost
arc.mojom.ImeHost = {};

arc.mojom.ImeHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ImeHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ImeHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ImeHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ImeHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ImeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTextInputTypeChanged(type, is_personalized_learning_allowed, flags) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec,
      null,
      [type, is_personalized_learning_allowed, flags]);
  }

  onCursorRectChanged(rect, coordinateSpace) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec,
      null,
      [rect, coordinateSpace]);
  }

  onCancelComposition() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ImeHost_OnCancelComposition_ParamsSpec,
      null,
      []);
  }

  showVirtualKeyboardIfEnabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec,
      null,
      []);
  }

  onCursorRectChangedWithSurroundingText(rect, text_range, text_in_range, selection_range, coordinateSpace) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec,
      null,
      [rect, text_range, text_in_range, selection_range, coordinateSpace]);
  }

  sendKeyEvent(key_event_data) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.ImeHost_SendKeyEvent_ParamsSpec,
      arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec,
      [key_event_data]);
  }

};

arc.mojom.ImeHost.getRemote = function() {
  let remote = new arc.mojom.ImeHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ImeHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnTextInputTypeChanged
arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeHost.OnTextInputTypeChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.TextInputTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_personalized_learning_allowed', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 10 },
        { name: 'flags', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 11 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 10, packedSize: 16}, {version: 11, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnCursorRectChanged
arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeHost.OnCursorRectChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'coordinateSpace', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.CursorCoordinateSpaceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnCancelComposition
arc.mojom.ImeHost_OnCancelComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeHost.OnCancelComposition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowVirtualKeyboardIfEnabled
arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeHost.ShowVirtualKeyboardIfEnabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnCursorRectChangedWithSurroundingText
arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeHost.OnCursorRectChangedWithSurroundingText_Params',
      packedSize: 48,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'text_range', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'text_in_range', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'selection_range', packedOffset: 24, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'coordinateSpace', packedOffset: 32, packedBitOffset: 0, type: arc.mojom.CursorCoordinateSpaceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for SendKeyEvent
arc.mojom.ImeHost_SendKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeHost.SendKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'key_event_data', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.KeyEventDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_consumed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.ImeHostPtr = arc.mojom.ImeHostRemote;
arc.mojom.ImeHostRequest = arc.mojom.ImeHostPendingReceiver;


// Interface: ImeInstance
arc.mojom.ImeInstance = {};

arc.mojom.ImeInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ImeInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ImeInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ImeInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ImeInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.ImeInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      arc.mojom.ImeInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  setCompositionText(text, segments, selection_range) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ImeInstance_SetCompositionText_ParamsSpec,
      null,
      [text, segments, selection_range]);
  }

  setSelectionText(selection) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.ImeInstance_SetSelectionText_ParamsSpec,
      null,
      [selection]);
  }

  confirmCompositionText() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec,
      null,
      []);
  }

  insertText(text, new_cursor_position) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ImeInstance_InsertText_ParamsSpec,
      null,
      [text, new_cursor_position]);
  }

  onKeyboardAppearanceChanging(new_bounds, is_available) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec,
      null,
      [new_bounds, is_available]);
  }

  extendSelectionAndDelete(before, after) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec,
      null,
      [before, after]);
  }

  setComposingRegion(range) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec,
      null,
      [range]);
  }

};

arc.mojom.ImeInstance.getRemote = function() {
  let remote = new arc.mojom.ImeInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ImeInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.ImeInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCompositionText
arc.mojom.ImeInstance_SetCompositionText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.SetCompositionText_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'segments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.CompositionSegmentSpec, false), nullable: false, minVersion: 0 },
        { name: 'selection_range', packedOffset: 16, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: true, minVersion: 21 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 21, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetSelectionText
arc.mojom.ImeInstance_SetSelectionText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.SetSelectionText_Params',
      packedSize: 16,
      fields: [
        { name: 'selection', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ConfirmCompositionText
arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.ConfirmCompositionText_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for InsertText
arc.mojom.ImeInstance_InsertText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.InsertText_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'new_cursor_position', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 17 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 17, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnKeyboardAppearanceChanging
arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.OnKeyboardAppearanceChanging_Params',
      packedSize: 24,
      fields: [
        { name: 'new_bounds', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'is_available', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 7 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 7, packedSize: 24}]
    }
  }
};

// ParamsSpec for ExtendSelectionAndDelete
arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.ExtendSelectionAndDelete_Params',
      packedSize: 24,
      fields: [
        { name: 'before', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'after', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetComposingRegion
arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.ImeInstance.SetComposingRegion_Params',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.ImeInstancePtr = arc.mojom.ImeInstanceRemote;
arc.mojom.ImeInstanceRequest = arc.mojom.ImeInstancePendingReceiver;

