// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_handler.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: SelectionGranularity
blink.mojom.SelectionGranularity = {
  kWord: 0,
  kSentence: 1,
};

// Enum: PanAction
blink.mojom.PanAction = {
  kNone: 0,
  kScroll: 1,
  kMoveCursorOrScroll: 2,
  kStylusWritable: 3,
};

// Enum: ImeState
blink.mojom.ImeState = {
  kNone: 0,
  kTextSuggestionSelected: 1,
};

// Enum: FocusState
blink.mojom.FocusState = {
  kFocused: 0,
  kNotFocusedAndActive: 1,
  kNotFocusedAndNotActive: 2,
};

// Interface: WidgetInputHandlerHost
blink.mojom.WidgetInputHandlerHost = {};

blink.mojom.WidgetInputHandlerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetInputHandlerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetInputHandlerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetInputHandlerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetInputHandlerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetInputHandlerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTouchActionFromMain(touch_action) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec.$,
      null,
      [touch_action]);
  }

  setPanAction(pan_action) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec.$,
      null,
      [pan_action]);
  }

  didOverscroll(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec.$,
      null,
      [params]);
  }

  didStartScrollingViewport() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec.$,
      null,
      []);
  }

  imeCancelComposition() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec.$,
      null,
      []);
  }

  imeCompositionRangeChanged(range, character_bounds) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec.$,
      null,
      [range, character_bounds]);
  }

  setMouseCapture(capture) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec.$,
      null,
      [capture]);
  }

  setAutoscrollSelectionActiveInMainFrame(autoscroll_selection) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec.$,
      null,
      [autoscroll_selection]);
  }

  requestMouseLock(from_user_gesture, unadjusted_movement) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec.$,
      blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec.$,
      [from_user_gesture, unadjusted_movement]);
  }

};

blink.mojom.WidgetInputHandlerHost.getRemote = function() {
  let remote = new blink.mojom.WidgetInputHandlerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetInputHandlerHost',
    'context');
  return remote.$;
};

// ParamsSpec for SetTouchActionFromMain
blink.mojom.WidgetInputHandlerHost_SetTouchActionFromMain_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.SetTouchActionFromMain_Params',
      packedSize: 16,
      fields: [
        { name: 'touch_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPanAction
blink.mojom.WidgetInputHandlerHost_SetPanAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.SetPanAction_Params',
      packedSize: 16,
      fields: [
        { name: 'pan_action', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidOverscroll
blink.mojom.WidgetInputHandlerHost_DidOverscroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.DidOverscroll_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DidStartScrollingViewport
blink.mojom.WidgetInputHandlerHost_DidStartScrollingViewport_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.DidStartScrollingViewport_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImeCancelComposition
blink.mojom.WidgetInputHandlerHost_ImeCancelComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.ImeCancelComposition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImeCompositionRangeChanged
blink.mojom.WidgetInputHandlerHost_ImeCompositionRangeChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.ImeCompositionRangeChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'character_bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetMouseCapture
blink.mojom.WidgetInputHandlerHost_SetMouseCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.SetMouseCapture_Params',
      packedSize: 16,
      fields: [
        { name: 'capture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetAutoscrollSelectionActiveInMainFrame
blink.mojom.WidgetInputHandlerHost_SetAutoscrollSelectionActiveInMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.SetAutoscrollSelectionActiveInMainFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'autoscroll_selection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestMouseLock
blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.RequestMouseLock_Params',
      packedSize: 24,
      fields: [
        { name: 'from_user_gesture', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'unadjusted_movement', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WidgetInputHandlerHost_RequestMouseLock_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandlerHost.RequestMouseLock_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'context', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WidgetInputHandlerHostPtr = blink.mojom.WidgetInputHandlerHostRemote;
blink.mojom.WidgetInputHandlerHostRequest = blink.mojom.WidgetInputHandlerHostPendingReceiver;


// Interface: FrameWidgetInputHandler
blink.mojom.FrameWidgetInputHandler = {};

blink.mojom.FrameWidgetInputHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.FrameWidgetInputHandlerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.FrameWidgetInputHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.FrameWidgetInputHandlerPendingReceiver,
      handle);
    this.$ = new blink.mojom.FrameWidgetInputHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.FrameWidgetInputHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addImeTextSpansToExistingText(start, end, ime_text_spans) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec.$,
      null,
      [start, end, ime_text_spans]);
  }

  clearImeTextSpansByType(start, end, type) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec.$,
      null,
      [start, end, type]);
  }

  setCompositionFromExistingText(start, end, ime_text_spans) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec.$,
      null,
      [start, end, ime_text_spans]);
  }

  extendSelectionAndDelete(before, after) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec.$,
      null,
      [before, after]);
  }

  extendSelectionAndReplace(before, after, replacement_text) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec.$,
      null,
      [before, after, replacement_text]);
  }

  deleteSurroundingText(before, after) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec.$,
      null,
      [before, after]);
  }

  deleteSurroundingTextInCodePoints(before, after) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec.$,
      null,
      [before, after]);
  }

  setEditableSelectionOffsets(start, end) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec.$,
      null,
      [start, end]);
  }

  handleStylusWritingGestureAction(gesture_data) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec.$,
      blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec.$,
      [gesture_data]);
  }

  executeEditCommand(command, value) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec.$,
      null,
      [command, value]);
  }

  undo() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec.$,
      null,
      []);
  }

  redo() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec.$,
      null,
      []);
  }

  cut() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec.$,
      null,
      []);
  }

  copy() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec.$,
      null,
      []);
  }

  copyToFindPboard() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec.$,
      null,
      []);
  }

  centerSelection() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec.$,
      null,
      []);
  }

  paste() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec.$,
      null,
      []);
  }

  pasteAndMatchStyle() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec.$,
      null,
      []);
  }

  delete() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec.$,
      null,
      []);
  }

  selectAll() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec.$,
      null,
      []);
  }

  collapseSelection() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec.$,
      null,
      []);
  }

  replace(word) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec.$,
      null,
      [word]);
  }

  replaceMisspelling(word) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec.$,
      null,
      [word]);
  }

  selectRange(base, extent) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec.$,
      null,
      [base, extent]);
  }

  adjustSelectionByCharacterOffset(start, end, behavior) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec.$,
      null,
      [start, end, behavior]);
  }

  selectAroundCaret(granularity, should_show_handle, should_show_context_menu) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec.$,
      blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec.$,
      [granularity, should_show_handle, should_show_context_menu]);
  }

  moveRangeSelectionExtent(extent) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec.$,
      null,
      [extent]);
  }

  scrollFocusedEditableNodeIntoView() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec.$,
      null,
      []);
  }

  waitForPageScaleAnimationForTesting() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec.$,
      null,
      []);
  }

  moveCaret(point) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec.$,
      null,
      [point]);
  }

  startAutoscrollForSelectionToPoint(point) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec.$,
      null,
      [point]);
  }

  stopAutoscroll() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec.$,
      null,
      []);
  }

  rectForEditFieldChars(range) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec.$,
      blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec.$,
      [range]);
  }

};

blink.mojom.FrameWidgetInputHandler.getRemote = function() {
  let remote = new blink.mojom.FrameWidgetInputHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.FrameWidgetInputHandler',
    'context');
  return remote.$;
};

// ParamsSpec for AddImeTextSpansToExistingText
blink.mojom.FrameWidgetInputHandler_AddImeTextSpansToExistingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.AddImeTextSpansToExistingText_Params',
      packedSize: 32,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ime_text_spans', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearImeTextSpansByType
blink.mojom.FrameWidgetInputHandler_ClearImeTextSpansByType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.ClearImeTextSpansByType_Params',
      packedSize: 32,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCompositionFromExistingText
blink.mojom.FrameWidgetInputHandler_SetCompositionFromExistingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.SetCompositionFromExistingText_Params',
      packedSize: 32,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ime_text_spans', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExtendSelectionAndDelete
blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndDelete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.ExtendSelectionAndDelete_Params',
      packedSize: 24,
      fields: [
        { name: 'before', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'after', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExtendSelectionAndReplace
blink.mojom.FrameWidgetInputHandler_ExtendSelectionAndReplace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.ExtendSelectionAndReplace_Params',
      packedSize: 32,
      fields: [
        { name: 'before', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'after', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'replacement_text', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteSurroundingText
blink.mojom.FrameWidgetInputHandler_DeleteSurroundingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.DeleteSurroundingText_Params',
      packedSize: 24,
      fields: [
        { name: 'before', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'after', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteSurroundingTextInCodePoints
blink.mojom.FrameWidgetInputHandler_DeleteSurroundingTextInCodePoints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.DeleteSurroundingTextInCodePoints_Params',
      packedSize: 24,
      fields: [
        { name: 'before', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'after', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEditableSelectionOffsets
blink.mojom.FrameWidgetInputHandler_SetEditableSelectionOffsets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.SetEditableSelectionOffsets_Params',
      packedSize: 24,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleStylusWritingGestureAction
blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.HandleStylusWritingGestureAction_Params',
      packedSize: 16,
      fields: [
        { name: 'gesture_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FrameWidgetInputHandler_HandleStylusWritingGestureAction_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.HandleStylusWritingGestureAction_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExecuteEditCommand
blink.mojom.FrameWidgetInputHandler_ExecuteEditCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.ExecuteEditCommand_Params',
      packedSize: 24,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Undo
blink.mojom.FrameWidgetInputHandler_Undo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.Undo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Redo
blink.mojom.FrameWidgetInputHandler_Redo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.Redo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Cut
blink.mojom.FrameWidgetInputHandler_Cut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.Cut_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Copy
blink.mojom.FrameWidgetInputHandler_Copy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.Copy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CopyToFindPboard
blink.mojom.FrameWidgetInputHandler_CopyToFindPboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.CopyToFindPboard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CenterSelection
blink.mojom.FrameWidgetInputHandler_CenterSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.CenterSelection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Paste
blink.mojom.FrameWidgetInputHandler_Paste_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.Paste_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PasteAndMatchStyle
blink.mojom.FrameWidgetInputHandler_PasteAndMatchStyle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.PasteAndMatchStyle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Delete
blink.mojom.FrameWidgetInputHandler_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.Delete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectAll
blink.mojom.FrameWidgetInputHandler_SelectAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.SelectAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CollapseSelection
blink.mojom.FrameWidgetInputHandler_CollapseSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.CollapseSelection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Replace
blink.mojom.FrameWidgetInputHandler_Replace_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.Replace_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReplaceMisspelling
blink.mojom.FrameWidgetInputHandler_ReplaceMisspelling_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.ReplaceMisspelling_Params',
      packedSize: 16,
      fields: [
        { name: 'word', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectRange
blink.mojom.FrameWidgetInputHandler_SelectRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.SelectRange_Params',
      packedSize: 24,
      fields: [
        { name: 'base', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'extent', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AdjustSelectionByCharacterOffset
blink.mojom.FrameWidgetInputHandler_AdjustSelectionByCharacterOffset_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.AdjustSelectionByCharacterOffset_Params',
      packedSize: 32,
      fields: [
        { name: 'start', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'behavior', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectAroundCaret
blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.SelectAroundCaret_Params',
      packedSize: 32,
      fields: [
        { name: 'granularity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'should_show_handle', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'should_show_context_menu', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FrameWidgetInputHandler_SelectAroundCaret_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.SelectAroundCaret_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MoveRangeSelectionExtent
blink.mojom.FrameWidgetInputHandler_MoveRangeSelectionExtent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.MoveRangeSelectionExtent_Params',
      packedSize: 16,
      fields: [
        { name: 'extent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ScrollFocusedEditableNodeIntoView
blink.mojom.FrameWidgetInputHandler_ScrollFocusedEditableNodeIntoView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.ScrollFocusedEditableNodeIntoView_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitForPageScaleAnimationForTesting
blink.mojom.FrameWidgetInputHandler_WaitForPageScaleAnimationForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.WaitForPageScaleAnimationForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MoveCaret
blink.mojom.FrameWidgetInputHandler_MoveCaret_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.MoveCaret_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartAutoscrollForSelectionToPoint
blink.mojom.FrameWidgetInputHandler_StartAutoscrollForSelectionToPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.StartAutoscrollForSelectionToPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'point', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopAutoscroll
blink.mojom.FrameWidgetInputHandler_StopAutoscroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.StopAutoscroll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RectForEditFieldChars
blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.RectForEditFieldChars_Params',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.FrameWidgetInputHandler_RectForEditFieldChars_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FrameWidgetInputHandler.RectForEditFieldChars_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.FrameWidgetInputHandlerPtr = blink.mojom.FrameWidgetInputHandlerRemote;
blink.mojom.FrameWidgetInputHandlerRequest = blink.mojom.FrameWidgetInputHandlerPendingReceiver;


// Interface: WidgetInputHandler
blink.mojom.WidgetInputHandler = {};

blink.mojom.WidgetInputHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WidgetInputHandlerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WidgetInputHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WidgetInputHandlerPendingReceiver,
      handle);
    this.$ = new blink.mojom.WidgetInputHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WidgetInputHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFocus(state) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec.$,
      null,
      [state]);
  }

  mouseCaptureLost() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec.$,
      null,
      []);
  }

  setEditCommandsForNextKeyEvent(commands) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec.$,
      null,
      [commands]);
  }

  cursorVisibilityChanged(visible) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec.$,
      null,
      [visible]);
  }

  imeSetComposition(text, ime_text_spans, range, start, end, ime_state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec.$,
      null,
      [text, ime_text_spans, range, start, end, ime_state]);
  }

  imeCommitText(text, ime_text_spans, range, relative_cursor_position) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec.$,
      null,
      [text, ime_text_spans, range, relative_cursor_position]);
  }

  imeFinishComposingText(keep_selection) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec.$,
      null,
      [keep_selection]);
  }

  requestTextInputStateUpdate() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec.$,
      null,
      []);
  }

  requestCompositionUpdates(immediate_request, monitor_request) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec.$,
      null,
      [immediate_request, monitor_request]);
  }

  dispatchEvent(event, original_event_for_gesture) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec.$,
      blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec.$,
      [event, original_event_for_gesture]);
  }

  dispatchNonBlockingEvent(event) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec.$,
      null,
      [event]);
  }

  waitForInputProcessed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec.$,
      null,
      []);
  }

  pingMainThread() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec.$,
      null,
      []);
  }

  attachSynchronousCompositor(control_host, host, compositor_request) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec.$,
      null,
      [control_host, host, compositor_request]);
  }

  getFrameWidgetInputHandler(interface_request) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec.$,
      null,
      [interface_request]);
  }

  updateBrowserControlsState(constraints, current, animate, offset_tag_modifications) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec.$,
      null,
      [constraints, current, animate, offset_tag_modifications]);
  }

};

blink.mojom.WidgetInputHandler.getRemote = function() {
  let remote = new blink.mojom.WidgetInputHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WidgetInputHandler',
    'context');
  return remote.$;
};

// ParamsSpec for SetFocus
blink.mojom.WidgetInputHandler_SetFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.SetFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MouseCaptureLost
blink.mojom.WidgetInputHandler_MouseCaptureLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.MouseCaptureLost_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetEditCommandsForNextKeyEvent
blink.mojom.WidgetInputHandler_SetEditCommandsForNextKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.SetEditCommandsForNextKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'commands', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CursorVisibilityChanged
blink.mojom.WidgetInputHandler_CursorVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.CursorVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImeSetComposition
blink.mojom.WidgetInputHandler_ImeSetComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.ImeSetComposition_Params',
      packedSize: 56,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ime_text_spans', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'range', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'start', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'end', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ime_state', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImeCommitText
blink.mojom.WidgetInputHandler_ImeCommitText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.ImeCommitText_Params',
      packedSize: 40,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'ime_text_spans', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'range', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'relative_cursor_position', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ImeFinishComposingText
blink.mojom.WidgetInputHandler_ImeFinishComposingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.ImeFinishComposingText_Params',
      packedSize: 16,
      fields: [
        { name: 'keep_selection', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestTextInputStateUpdate
blink.mojom.WidgetInputHandler_RequestTextInputStateUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.RequestTextInputStateUpdate_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestCompositionUpdates
blink.mojom.WidgetInputHandler_RequestCompositionUpdates_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.RequestCompositionUpdates_Params',
      packedSize: 24,
      fields: [
        { name: 'immediate_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'monitor_request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchEvent
blink.mojom.WidgetInputHandler_DispatchEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.DispatchEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'original_event_for_gesture', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WidgetInputHandler_DispatchEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.DispatchEvent_ResponseParams',
      packedSize: 48,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'updated_latency', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'state', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'overscroll', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'touch_action', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DispatchNonBlockingEvent
blink.mojom.WidgetInputHandler_DispatchNonBlockingEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.DispatchNonBlockingEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitForInputProcessed
blink.mojom.WidgetInputHandler_WaitForInputProcessed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.WaitForInputProcessed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PingMainThread
blink.mojom.WidgetInputHandler_PingMainThread_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.PingMainThread_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AttachSynchronousCompositor
blink.mojom.WidgetInputHandler_AttachSynchronousCompositor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.AttachSynchronousCompositor_Params',
      packedSize: 32,
      fields: [
        { name: 'control_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'compositor_request', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFrameWidgetInputHandler
blink.mojom.WidgetInputHandler_GetFrameWidgetInputHandler_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.GetFrameWidgetInputHandler_Params',
      packedSize: 16,
      fields: [
        { name: 'interface_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateBrowserControlsState
blink.mojom.WidgetInputHandler_UpdateBrowserControlsState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WidgetInputHandler.UpdateBrowserControlsState_Params',
      packedSize: 40,
      fields: [
        { name: 'constraints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'current', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'animate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'offset_tag_modifications', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WidgetInputHandlerPtr = blink.mojom.WidgetInputHandlerRemote;
blink.mojom.WidgetInputHandlerRequest = blink.mojom.WidgetInputHandlerPendingReceiver;

