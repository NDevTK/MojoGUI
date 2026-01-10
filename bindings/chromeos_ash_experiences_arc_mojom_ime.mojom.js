// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/ime.mojom
// Module: arc.mojom

'use strict';

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
      [type, is_personalized_learning_allowed, flags],
      false);
  }

  onCursorRectChanged(rect, coordinateSpace) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec,
      null,
      [rect, coordinateSpace],
      false);
  }

  onCancelComposition() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ImeHost_OnCancelComposition_ParamsSpec,
      null,
      [],
      false);
  }

  showVirtualKeyboardIfEnabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec,
      null,
      [],
      false);
  }

  onCursorRectChangedWithSurroundingText(rect, text_range, text_in_range, selection_range, coordinateSpace) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec,
      null,
      [rect, text_range, text_in_range, selection_range, coordinateSpace],
      false);
  }

  sendKeyEvent(key_event_data) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(8, 1); // Default ordinal 8 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(9, 4); // Default ordinal 9 -> Index 4
    this.ordinalMap.set(7, 5); // Default ordinal 7 -> Index 5
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnTextInputTypeChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTextInputTypeChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: OnCursorRectChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCursorRectChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: OnCancelComposition
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeHost_OnCancelComposition_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCancelComposition (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ShowVirtualKeyboardIfEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowVirtualKeyboardIfEnabled (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: OnCursorRectChangedWithSurroundingText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCursorRectChangedWithSurroundingText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: SendKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeHost_SendKeyEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendKeyEvent (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeHost_OnTextInputTypeChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onTextInputTypeChanged');
          const result = this.impl.onTextInputTypeChanged(params.type, params.is_personalized_learning_allowed, params.flags);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeHost_OnCursorRectChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCursorRectChanged');
          const result = this.impl.onCursorRectChanged(params.rect, params.coordinateSpace);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeHost_OnCancelComposition_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCancelComposition');
          const result = this.impl.onCancelComposition();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeHost_ShowVirtualKeyboardIfEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showVirtualKeyboardIfEnabled');
          const result = this.impl.showVirtualKeyboardIfEnabled();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeHost_OnCursorRectChangedWithSurroundingText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onCursorRectChangedWithSurroundingText');
          const result = this.impl.onCursorRectChangedWithSurroundingText(params.rect, params.text_range, params.text_in_range, params.selection_range, params.coordinateSpace);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeHost_SendKeyEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendKeyEvent');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ImeHostReceiver = arc.mojom.ImeHostReceiver;

arc.mojom.ImeHostPtr = arc.mojom.ImeHostRemote;
arc.mojom.ImeHostRequest = arc.mojom.ImeHostPendingReceiver;


// Interface: ImeInstance
mojo.internal.Struct(
    arc.mojom.ImeInstance_Init_ParamsSpec, 'arc.mojom.ImeInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ImeHostSpec), null, false, 0, undefined),
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
      arc.mojom.ImeInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  setCompositionText(text, segments, selection_range) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.ImeInstance_SetCompositionText_ParamsSpec,
      null,
      [text, segments, selection_range],
      false);
  }

  setSelectionText(selection) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.ImeInstance_SetSelectionText_ParamsSpec,
      null,
      [selection],
      false);
  }

  confirmCompositionText() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec,
      null,
      [],
      false);
  }

  insertText(text, new_cursor_position) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.ImeInstance_InsertText_ParamsSpec,
      null,
      [text, new_cursor_position],
      false);
  }

  onKeyboardAppearanceChanging(new_bounds, is_available) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec,
      null,
      [new_bounds, is_available],
      false);
  }

  extendSelectionAndDelete(before, after) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec,
      null,
      [before, after],
      false);
  }

  setComposingRegion(range) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
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
    this.ordinalMap.set(6, 0); // Default ordinal 6 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(7, 2); // Default ordinal 7 -> Index 2
    this.ordinalMap.set(2, 3); // Default ordinal 2 -> Index 3
    this.ordinalMap.set(3, 4); // Default ordinal 3 -> Index 4
    this.ordinalMap.set(4, 5); // Default ordinal 4 -> Index 5
    this.ordinalMap.set(5, 6); // Default ordinal 5 -> Index 6
    this.ordinalMap.set(8, 7); // Default ordinal 8 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_Init_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SetCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_SetCompositionText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionText (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: SetSelectionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_SetSelectionText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSelectionText (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: ConfirmCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfirmCompositionText (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: InsertText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_InsertText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OnKeyboardAppearanceChanging
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardAppearanceChanging (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: ExtendSelectionAndDelete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtendSelectionAndDelete (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SetComposingRegion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetComposingRegion (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_Init_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.init');
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
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_SetCompositionText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCompositionText');
          const result = this.impl.setCompositionText(params.text, params.segments, params.selection_range);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_SetSelectionText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setSelectionText');
          const result = this.impl.setSelectionText(params.selection);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_ConfirmCompositionText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.confirmCompositionText');
          const result = this.impl.confirmCompositionText();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_InsertText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.text, params.new_cursor_position);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_OnKeyboardAppearanceChanging_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardAppearanceChanging');
          const result = this.impl.onKeyboardAppearanceChanging(params.new_bounds, params.is_available);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_ExtendSelectionAndDelete_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.extendSelectionAndDelete');
          const result = this.impl.extendSelectionAndDelete(params.before, params.after);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(arc.mojom.ImeInstance_SetComposingRegion_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setComposingRegion');
          const result = this.impl.setComposingRegion(params.range);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

arc.mojom.ImeInstanceReceiver = arc.mojom.ImeInstanceReceiver;

arc.mojom.ImeInstancePtr = arc.mojom.ImeInstanceRemote;
arc.mojom.ImeInstanceRequest = arc.mojom.ImeInstancePendingReceiver;

