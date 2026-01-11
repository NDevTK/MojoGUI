// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/ime.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.TextInputTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.SegmentStyleSpec = { $: mojo.internal.Enum() };
arc.mojom.CursorCoordinateSpaceSpec = { $: mojo.internal.Enum() };
arc.mojom.CompositionSegmentSpec = { $: {} };
arc.mojom.KeyEventDataSpec = { $: {} };
arc.mojom.ImeHost = {};
arc.mojom.ImeHost.$interfaceName = 'arc.mojom.ImeHost';
arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec = { $: {} };
arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec = { $: {} };
arc.mojom.ImeHost_OnCancelComposition_ParamsSpec = { $: {} };
arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec = { $: {} };
arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec = { $: {} };
arc.mojom.ImeHost_SendKeyEvent_ParamsSpec = { $: {} };
arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec = { $: {} };
arc.mojom.ImeInstance = {};
arc.mojom.ImeInstance.$interfaceName = 'arc.mojom.ImeInstance';
arc.mojom.ImeInstance_Init_ParamsSpec = { $: {} };
arc.mojom.ImeInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.ImeInstance_SetCompositionText_ParamsSpec = { $: {} };
arc.mojom.ImeInstance_SetSelectionText_ParamsSpec = { $: {} };
arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec = { $: {} };
arc.mojom.ImeInstance_InsertText_ParamsSpec = { $: {} };
arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec = { $: {} };
arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec = { $: {} };
arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec = { $: {} };

arc.mojom.TEXT_INPUT_FLAG_NONE = 0;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_NONE = 64;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_CHARACTERS = 128;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_WORDS = 256;

arc.mojom.TEXT_INPUT_FLAG_AUTOCAPITALIZE_SENTENCES = 512;

// Enum: TextInputType
arc.mojom.TextInputType = {
  NONE: 0,
  TEXT: 1,
  PASSWORD: 2,
  SEARCH: 3,
  EMAIL: 4,
  NUMBER: 5,
  TELEPHONE: 6,
  URL: 7,
  DATE: 8,
  TIME: 9,
  DATETIME: 10,
  ANDROID_NULL: 11,
};

// Enum: SegmentStyle
arc.mojom.SegmentStyle = {
  DEFAULT: 0,
  EMPHASIZED: 1,
  NONE: 2,
};

// Enum: CursorCoordinateSpace
arc.mojom.CursorCoordinateSpace = {
  SCREEN: 0,
  DISPLAY: 1,
  NOTIFICATION: 2,
};

// Struct: CompositionSegment
mojo.internal.Struct(
    arc.mojom.CompositionSegmentSpec, 'arc.mojom.CompositionSegment', [
      mojo.internal.StructField('start_offset', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('end_offset', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('emphasized', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('style', 16, 0, arc.mojom.SegmentStyleSpec.$, null, false, 18, undefined),
    ],
    [[0, 24], [18, 32]]);

// Struct: KeyEventData
mojo.internal.Struct(
    arc.mojom.KeyEventDataSpec, 'arc.mojom.KeyEventData', [
      mojo.internal.StructField('key_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('pressed', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_shift_down', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_control_down', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_alt_down', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_capslock_on', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('scan_code', 8, 0, mojo.internal.Uint32, 0, false, 16, undefined),
      mojo.internal.StructField('is_alt_gr_down', 12, 0, mojo.internal.Bool, false, false, 20, undefined),
      mojo.internal.StructField('is_repeat', 12, 1, mojo.internal.Bool, false, false, 23, undefined),
    ],
    [[0, 16], [16, 24], [20, 24], [23, 24]]);

// Interface: ImeHost
mojo.internal.Struct(
    arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec, 'arc.mojom.ImeHost_OnTextInputTypeChanged_Params', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_personalized_learning_allowed', 8, 0, mojo.internal.Bool, false, false, 10, undefined),
      mojo.internal.StructField('flags', 12, 0, mojo.internal.Int32, 0, false, 11, undefined),
    ],
    [[0, 16], [10, 24], [11, 24]]);

mojo.internal.Struct(
    arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec, 'arc.mojom.ImeHost_OnCursorRectChanged_Params', [
      mojo.internal.StructField('rect', 0, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coordinateSpace', 8, 0, arc.mojom.CursorCoordinateSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ImeHost_OnCancelComposition_ParamsSpec, 'arc.mojom.ImeHost_OnCancelComposition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec, 'arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec, 'arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_Params', [
      mojo.internal.StructField('rect', 0, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_range', 8, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text_in_range', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('selection_range', 24, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('coordinateSpace', 32, 0, arc.mojom.CursorCoordinateSpaceSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    arc.mojom.ImeHost_SendKeyEvent_ParamsSpec, 'arc.mojom.ImeHost_SendKeyEvent_Params', [
      mojo.internal.StructField('key_event_data', 0, 0, arc.mojom.KeyEventDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec, 'arc.mojom.ImeHost_SendKeyEvent_ResponseParams', [
      mojo.internal.StructField('is_consumed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
  onTextInputTypeChanged(type, is_personalized_learning_allowed, flags) {
    return this.$.onTextInputTypeChanged(type, is_personalized_learning_allowed, flags);
  }
  onCursorRectChanged(rect, coordinateSpace) {
    return this.$.onCursorRectChanged(rect, coordinateSpace);
  }
  onCancelComposition() {
    return this.$.onCancelComposition();
  }
  showVirtualKeyboardIfEnabled() {
    return this.$.showVirtualKeyboardIfEnabled();
  }
  onCursorRectChangedWithSurroundingText(rect, text_range, text_in_range, selection_range, coordinateSpace) {
    return this.$.onCursorRectChangedWithSurroundingText(rect, text_range, text_in_range, selection_range, coordinateSpace);
  }
  sendKeyEvent(key_event_data) {
    return this.$.sendKeyEvent(key_event_data);
  }
};

arc.mojom.ImeHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImeHost', [
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 9 },
      { explicit: 7 },
    ]);
  }

  onTextInputTypeChanged(type, is_personalized_learning_allowed, flags) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec,
      null,
      [type, is_personalized_learning_allowed, flags],
      false);
  }

  onCursorRectChanged(rect, coordinateSpace) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec,
      null,
      [rect, coordinateSpace],
      false);
  }

  onCancelComposition() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ImeHost_OnCancelComposition_ParamsSpec,
      null,
      [],
      false);
  }

  showVirtualKeyboardIfEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  onCursorRectChangedWithSurroundingText(rect, text_range, text_in_range, selection_range, coordinateSpace) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec,
      null,
      [rect, text_range, text_in_range, selection_range, coordinateSpace],
      false);
  }

  sendKeyEvent(key_event_data) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.ImeHost_SendKeyEvent_ParamsSpec,
      arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec,
      [key_event_data],
      false);
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

arc.mojom.ImeHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImeHost', [
      { explicit: 0 },
      { explicit: 8 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 9 },
      { explicit: 7 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeHost_OnCancelComposition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeHost_SendKeyEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onTextInputTypeChanged(params.type, params.is_personalized_learning_allowed, params.flags);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onCursorRectChanged(params.rect, params.coordinateSpace);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeHost_OnCancelComposition_ParamsSpec.$.structSpec);
          const result = this.impl.onCancelComposition();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.showVirtualKeyboardIfEnabled();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec.$.structSpec);
          const result = this.impl.onCursorRectChangedWithSurroundingText(params.rect, params.text_range, params.text_in_range, params.selection_range, params.coordinateSpace);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeHost_SendKeyEvent_ParamsSpec.$.structSpec);
          const result = this.impl.sendKeyEvent(params.key_event_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ImeHost_SendKeyEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.ImeHostReceiver = arc.mojom.ImeHostReceiver;

arc.mojom.ImeHostPtr = arc.mojom.ImeHostRemote;
arc.mojom.ImeHostRequest = arc.mojom.ImeHostPendingReceiver;


// Interface: ImeInstance
mojo.internal.Struct(
    arc.mojom.ImeInstance_Init_ParamsSpec, 'arc.mojom.ImeInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ImeHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_Init_ResponseParamsSpec, 'arc.mojom.ImeInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_SetCompositionText_ParamsSpec, 'arc.mojom.ImeInstance_SetCompositionText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('segments', 8, 0, mojo.internal.Array(arc.mojom.CompositionSegmentSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('selection_range', 16, 0, arc.mojom.RangeSpec.$, null, true, 21, undefined),
    ],
    [[0, 24], [21, 32]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_SetSelectionText_ParamsSpec, 'arc.mojom.ImeInstance_SetSelectionText_Params', [
      mojo.internal.StructField('selection', 0, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec, 'arc.mojom.ImeInstance_ConfirmCompositionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_InsertText_ParamsSpec, 'arc.mojom.ImeInstance_InsertText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('new_cursor_position', 8, 0, mojo.internal.Int32, 0, false, 17, undefined),
    ],
    [[0, 16], [17, 24]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec, 'arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_Params', [
      mojo.internal.StructField('new_bounds', 0, 0, arc.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_available', 8, 0, mojo.internal.Bool, false, false, 7, undefined),
    ],
    [[0, 16], [7, 24]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec, 'arc.mojom.ImeInstance_ExtendSelectionAndDelete_Params', [
      mojo.internal.StructField('before', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('after', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec, 'arc.mojom.ImeInstance_SetComposingRegion_Params', [
      mojo.internal.StructField('range', 0, 0, arc.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  init(host_remote) {
    return this.$.init(host_remote);
  }
  setCompositionText(text, segments, selection_range) {
    return this.$.setCompositionText(text, segments, selection_range);
  }
  setSelectionText(selection) {
    return this.$.setSelectionText(selection);
  }
  confirmCompositionText() {
    return this.$.confirmCompositionText();
  }
  insertText(text, new_cursor_position) {
    return this.$.insertText(text, new_cursor_position);
  }
  onKeyboardAppearanceChanging(new_bounds, is_available) {
    return this.$.onKeyboardAppearanceChanging(new_bounds, is_available);
  }
  extendSelectionAndDelete(before, after) {
    return this.$.extendSelectionAndDelete(before, after);
  }
  setComposingRegion(range) {
    return this.$.setComposingRegion(range);
  }
};

arc.mojom.ImeInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ImeInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 7 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 8 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ImeInstance_Init_ParamsSpec,
      arc.mojom.ImeInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  setCompositionText(text, segments, selection_range) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ImeInstance_SetCompositionText_ParamsSpec,
      null,
      [text, segments, selection_range],
      false);
  }

  setSelectionText(selection) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.ImeInstance_SetSelectionText_ParamsSpec,
      null,
      [selection],
      false);
  }

  confirmCompositionText() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec,
      null,
      [],
      false);
  }

  insertText(text, new_cursor_position) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      arc.mojom.ImeInstance_InsertText_ParamsSpec,
      null,
      [text, new_cursor_position],
      false);
  }

  onKeyboardAppearanceChanging(new_bounds, is_available) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec,
      null,
      [new_bounds, is_available],
      false);
  }

  extendSelectionAndDelete(before, after) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec,
      null,
      [before, after],
      false);
  }

  setComposingRegion(range) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec,
      null,
      [range],
      false);
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

arc.mojom.ImeInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ImeInstance', [
      { explicit: 6 },
      { explicit: 1 },
      { explicit: 7 },
      { explicit: 2 },
      { explicit: 3 },
      { explicit: 4 },
      { explicit: 5 },
      { explicit: 8 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(arc.mojom.ImeInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeInstance_SetCompositionText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeInstance_SetSelectionText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeInstance_InsertText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ImeInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_SetCompositionText_ParamsSpec.$.structSpec);
          const result = this.impl.setCompositionText(params.text, params.segments, params.selection_range);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_SetSelectionText_ParamsSpec.$.structSpec);
          const result = this.impl.setSelectionText(params.selection);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec.$.structSpec);
          const result = this.impl.confirmCompositionText();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_InsertText_ParamsSpec.$.structSpec);
          const result = this.impl.insertText(params.text, params.new_cursor_position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec.$.structSpec);
          const result = this.impl.onKeyboardAppearanceChanging(params.new_bounds, params.is_available);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec.$.structSpec);
          const result = this.impl.extendSelectionAndDelete(params.before, params.after);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec.$.structSpec);
          const result = this.impl.setComposingRegion(params.range);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.ImeInstanceReceiver = arc.mojom.ImeInstanceReceiver;

arc.mojom.ImeInstancePtr = arc.mojom.ImeInstanceRemote;
arc.mojom.ImeInstanceRequest = arc.mojom.ImeInstancePendingReceiver;

