// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_widget_host_ns_view.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};
var ui = ui || {};
var display = display || {};
var gfx = gfx || {};
var url = url || {};

remote_cocoa.mojom.PopupMenuSpec = { $: {} };
remote_cocoa.mojom.PopupMenuRunner = {};
remote_cocoa.mojom.PopupMenuRunner.$interfaceName = 'remote_cocoa.mojom.PopupMenuRunner';
remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView = {};
remote_cocoa.mojom.RenderWidgetHostNSView.$interfaceName = 'remote_cocoa.mojom.RenderWidgetHostNSView';
remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost = {};
remote_cocoa.mojom.RenderWidgetHostNSViewHost.$interfaceName = 'remote_cocoa.mojom.RenderWidgetHostNSViewHost';
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec = { $: {} };

// Struct: PopupMenu
mojo.internal.Struct(
    remote_cocoa.mojom.PopupMenuSpec, 'remote_cocoa.mojom.PopupMenu', [
      mojo.internal.StructField('items', 0, 0, mojo.internal.Array(blink.mojom.MenuItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('bounds', 8, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('item_font_size', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('receiver', 24, 0, mojo.internal.InterfaceRequest(remote_cocoa.mojom.PopupMenuRunnerSpec), null, false, 0, undefined),
      mojo.internal.StructField('selected_item', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('right_aligned', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: PopupMenuRunner
mojo.internal.Struct(
    remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec, 'remote_cocoa.mojom.PopupMenuRunner_Hide_Params', [
    ],
    [[0, 8]]);

remote_cocoa.mojom.PopupMenuRunnerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.PopupMenuRunnerRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.PopupMenuRunner';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.PopupMenuRunnerPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.PopupMenuRunnerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.PopupMenuRunnerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hide() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec,
      null,
      [],
      false);
  }

};

remote_cocoa.mojom.PopupMenuRunner.getRemote = function() {
  let remote = new remote_cocoa.mojom.PopupMenuRunnerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.PopupMenuRunner',
    'context');
  return remote.$;
};

remote_cocoa.mojom.PopupMenuRunnerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec.$.decode(message.payload);
          const result = this.impl.hide();
          break;
        }
      }
    }});
  }
};

remote_cocoa.mojom.PopupMenuRunnerReceiver = remote_cocoa.mojom.PopupMenuRunnerReceiver;

remote_cocoa.mojom.PopupMenuRunnerPtr = remote_cocoa.mojom.PopupMenuRunnerRemote;
remote_cocoa.mojom.PopupMenuRunnerRequest = remote_cocoa.mojom.PopupMenuRunnerPendingReceiver;


// Interface: RenderWidgetHostNSView
mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_Params', [
      mojo.internal.StructField('content_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('popup_parent_ns_view_id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_Params', [
      mojo.internal.StructField('parent_ns_view_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_Params', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_Params', [
      mojo.internal.StructField('ca_layer_params', 0, 0, gfx.mojom.CALayerParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_Params', [
      mojo.internal.StructField('color', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_Params', [
      mojo.internal.StructField('visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_Params', [
      mojo.internal.StructField('display_text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_Params', [
      mojo.internal.StructField('text_input_type', 0, 0, ui.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('offset', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('range', 16, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_Params', [
      mojo.internal.StructField('showing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_Params', [
      mojo.internal.StructField('cursor', 0, 0, ui.mojom.CursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_Params', [
      mojo.internal.StructField('locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_Params', [
      mojo.internal.StructField('unaccelerated_movement', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_Params', [
      mojo.internal.StructField('attributed_string', 0, 0, ui.mojom.AttributedStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('baseline_point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_Params', [
      mojo.internal.StructField('dom_codes', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_paths', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ShareErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('consumed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_Params', [
      mojo.internal.StructField('params', 0, 0, blink.mojom.DidOverscrollParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_Params', [
      mojo.internal.StructField('menu', 0, 0, remote_cocoa.mojom.PopupMenuSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParams', [
      mojo.internal.StructField('selected_item_$value', 0, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'selected_item_$flag', originalFieldName: 'selected_item' }),
      mojo.internal.StructField('selected_item_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'selected_item_$value', originalFieldName: 'selected_item' }),
    ],
    [[0, 16]]);

remote_cocoa.mojom.RenderWidgetHostNSViewPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.RenderWidgetHostNSView';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.RenderWidgetHostNSViewPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.RenderWidgetHostNSViewRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initAsPopup(content_rect, popup_parent_ns_view_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec,
      null,
      [content_rect, popup_parent_ns_view_id],
      false);
  }

  setParentWebContentsNSView(parent_ns_view_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec,
      null,
      [parent_ns_view_id],
      false);
  }

  disableDisplay() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec,
      null,
      [],
      false);
  }

  makeFirstResponder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec,
      null,
      [],
      false);
  }

  setBounds(rect) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec,
      null,
      [rect],
      false);
  }

  setCALayerParams(ca_layer_params) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec,
      null,
      [ca_layer_params],
      false);
  }

  setBackgroundColor(color) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec,
      null,
      [color],
      false);
  }

  setVisible(visible) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec,
      null,
      [visible],
      false);
  }

  setTooltipText(display_text) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec,
      null,
      [display_text],
      false);
  }

  setTextInputState(text_input_type, flags) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec,
      null,
      [text_input_type, flags],
      false);
  }

  setTextSelection(text, offset, range) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec,
      null,
      [text, offset, range],
      false);
  }

  setCompositionRangeInfo(range) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec,
      null,
      [range],
      false);
  }

  cancelComposition() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec,
      null,
      [],
      false);
  }

  setShowingContextMenu(showing) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec,
      null,
      [showing],
      false);
  }

  displayCursor(cursor) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec,
      null,
      [cursor],
      false);
  }

  setCursorLocked(locked) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec,
      null,
      [locked],
      false);
  }

  setCursorLockedUnacceleratedMovement(unaccelerated_movement) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec,
      null,
      [unaccelerated_movement],
      false);
  }

  showDictionaryOverlayForSelection() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec,
      null,
      [],
      false);
  }

  showDictionaryOverlay(attributed_string, baseline_point) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec,
      null,
      [attributed_string, baseline_point],
      false);
  }

  lockKeyboard(dom_codes) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec,
      null,
      [dom_codes],
      false);
  }

  unlockKeyboard() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec,
      null,
      [],
      false);
  }

  showSharingServicePicker(title, text, url, file_paths) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec,
      [title, text, url, file_paths],
      false);
  }

  destroy() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec,
      null,
      [],
      false);
  }

  gestureScrollEventAck(event, consumed) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec,
      null,
      [event, consumed],
      false);
  }

  didOverscroll(params) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec,
      null,
      [params],
      false);
  }

  displayPopupMenu(menu) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec,
      [menu],
      false);
  }

};

remote_cocoa.mojom.RenderWidgetHostNSView.getRemote = function() {
  let remote = new remote_cocoa.mojom.RenderWidgetHostNSViewRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.RenderWidgetHostNSView',
    'context');
  return remote.$;
};

remote_cocoa.mojom.RenderWidgetHostNSViewReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initAsPopup(params.content_rect, params.popup_parent_ns_view_id);
          break;
        }
        case 1: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setParentWebContentsNSView(params.parent_ns_view_id);
          break;
        }
        case 2: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.disableDisplay();
          break;
        }
        case 3: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec.$.decode(message.payload);
          const result = this.impl.makeFirstResponder();
          break;
        }
        case 4: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBounds(params.rect);
          break;
        }
        case 5: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCALayerParams(params.ca_layer_params);
          break;
        }
        case 6: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setBackgroundColor(params.color);
          break;
        }
        case 7: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setVisible(params.visible);
          break;
        }
        case 8: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTooltipText(params.display_text);
          break;
        }
        case 9: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTextInputState(params.text_input_type, params.flags);
          break;
        }
        case 10: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setTextSelection(params.text, params.offset, params.range);
          break;
        }
        case 11: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCompositionRangeInfo(params.range);
          break;
        }
        case 12: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelComposition();
          break;
        }
        case 13: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setShowingContextMenu(params.showing);
          break;
        }
        case 14: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.displayCursor(params.cursor);
          break;
        }
        case 15: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCursorLocked(params.locked);
          break;
        }
        case 16: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setCursorLockedUnacceleratedMovement(params.unaccelerated_movement);
          break;
        }
        case 17: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showDictionaryOverlayForSelection();
          break;
        }
        case 18: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showDictionaryOverlay(params.attributed_string, params.baseline_point);
          break;
        }
        case 19: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec.$.decode(message.payload);
          const result = this.impl.lockKeyboard(params.dom_codes);
          break;
        }
        case 20: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unlockKeyboard();
          break;
        }
        case 21: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showSharingServicePicker(params.title, params.text, params.url, params.file_paths);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.destroy();
          break;
        }
        case 23: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec.$.decode(message.payload);
          const result = this.impl.gestureScrollEventAck(params.event, params.consumed);
          break;
        }
        case 24: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec.$.decode(message.payload);
          const result = this.impl.didOverscroll(params.params);
          break;
        }
        case 25: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.displayPopupMenu(params.menu);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewReceiver = remote_cocoa.mojom.RenderWidgetHostNSViewReceiver;

remote_cocoa.mojom.RenderWidgetHostNSViewPtr = remote_cocoa.mojom.RenderWidgetHostNSViewRemote;
remote_cocoa.mojom.RenderWidgetHostNSViewRequest = remote_cocoa.mojom.RenderWidgetHostNSViewPendingReceiver;


// Interface: RenderWidgetHostNSViewHost
mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParams', [
      mojo.internal.StructField('is_for_main_frame', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_Params', [
      mojo.internal.StructField('is_first_responder', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_Params', [
      mojo.internal.StructField('is_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_Params', [
      mojo.internal.StructField('view_bounds_in_window_dip', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('attached_to_window', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_Params', [
      mojo.internal.StructField('window_frame_in_screen_dip', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_Params', [
      mojo.internal.StructField('screen_infos', 0, 0, display.mojom.ScreenInfosSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('native_event_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('commands', 16, 0, mojo.internal.Array(blink.mojom.EditCommandSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('skip_if_unhandled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_synthetically_injected', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_Params', [
      mojo.internal.StructField('event', 0, 0, blink.mojom.EventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('ime_text_spans', 8, 0, mojo.internal.Array(ui.mojom.ImeTextSpanSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('replacement_range', 16, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selection_start', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('selection_end', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('replacement_range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_Params', [
      mojo.internal.StructField('root_point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_Params', [
      mojo.internal.StructField('root_point', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParams', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_Params', [
      mojo.internal.StructField('requested_range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParams', [
      mojo.internal.StructField('out_rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('out_actual_range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('success', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_Params', [
      mojo.internal.StructField('command', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParams', [
      mojo.internal.StructField('is_speaking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParams', [
      mojo.internal.StructField('host_pid', 0, 0, mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('element_token', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec, 'remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_Params', [
      mojo.internal.StructField('window_token', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

remote_cocoa.mojom.RenderWidgetHostNSViewHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.RenderWidgetHostNSViewHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.RenderWidgetHostNSViewHostPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.RenderWidgetHostNSViewHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  syncIsWidgetForMainFrame() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec,
      [],
      false);
  }

  requestShutdown() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  onFirstResponderChanged(is_first_responder) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec,
      null,
      [is_first_responder],
      false);
  }

  onWindowIsKeyChanged(is_key) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec,
      null,
      [is_key],
      false);
  }

  onBoundsInWindowChanged(view_bounds_in_window_dip, attached_to_window) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec,
      null,
      [view_bounds_in_window_dip, attached_to_window],
      false);
  }

  onWindowFrameInScreenChanged(window_frame_in_screen_dip) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec,
      null,
      [window_frame_in_screen_dip],
      false);
  }

  onScreenInfosChanged(screen_infos) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec,
      null,
      [screen_infos],
      false);
  }

  beginKeyboardEvent() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec,
      null,
      [],
      false);
  }

  endKeyboardEvent() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec,
      null,
      [],
      false);
  }

  forwardKeyboardEventWithCommands(event, native_event_data, skip_if_unhandled, commands) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec,
      null,
      [event, native_event_data, skip_if_unhandled, commands],
      false);
  }

  routeOrProcessMouseEvent(event) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  routeOrProcessTouchEvent(event) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  routeOrProcessWheelEvent(event) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  forwardMouseEvent(event) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  forwardWheelEvent(event) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  pinchEvent(event, is_synthetically_injected) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec,
      null,
      [event, is_synthetically_injected],
      false);
  }

  smartMagnifyEvent(event) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  imeSetComposition(text, ime_text_spans, replacement_range, selection_start, selection_end) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec,
      null,
      [text, ime_text_spans, replacement_range, selection_start, selection_end],
      false);
  }

  imeCommitText(text, replacement_range) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec,
      null,
      [text, replacement_range],
      false);
  }

  imeFinishComposingText() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec,
      null,
      [],
      false);
  }

  imeCancelCompositionFromCocoa() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec,
      null,
      [],
      false);
  }

  lookUpDictionaryOverlayAtPoint(root_point) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec,
      null,
      [root_point],
      false);
  }

  lookUpDictionaryOverlayFromRange(range) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec,
      null,
      [range],
      false);
  }

  syncGetCharacterIndexAtPoint(root_point) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec,
      [root_point],
      false);
  }

  syncGetFirstRectForRange(requested_range) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec,
      [requested_range],
      false);
  }

  executeEditCommand(command) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec,
      null,
      [command],
      false);
  }

  undo() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  redo() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec,
      null,
      [],
      false);
  }

  cut() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec,
      null,
      [],
      false);
  }

  copy() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec,
      null,
      [],
      false);
  }

  copyToFindPboard() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec,
      null,
      [],
      false);
  }

  centerSelection() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec,
      null,
      [],
      false);
  }

  paste() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec,
      null,
      [],
      false);
  }

  pasteAndMatchStyle() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec,
      null,
      [],
      false);
  }

  selectAll() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec,
      null,
      [],
      false);
  }

  startSpeaking() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  stopSpeaking() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec,
      null,
      [],
      false);
  }

  syncIsSpeaking() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec,
      [],
      false);
  }

  getRenderWidgetAccessibilityToken() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec,
      [],
      false);
  }

  setRemoteAccessibilityWindowToken(window_token) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec,
      null,
      [window_token],
      false);
  }

};

remote_cocoa.mojom.RenderWidgetHostNSViewHost.getRemote = function() {
  let remote = new remote_cocoa.mojom.RenderWidgetHostNSViewHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.RenderWidgetHostNSViewHost',
    'context');
  return remote.$;
};

remote_cocoa.mojom.RenderWidgetHostNSViewHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.syncIsWidgetForMainFrame();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestShutdown();
          break;
        }
        case 2: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFirstResponderChanged(params.is_first_responder);
          break;
        }
        case 3: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWindowIsKeyChanged(params.is_key);
          break;
        }
        case 4: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBoundsInWindowChanged(params.view_bounds_in_window_dip, params.attached_to_window);
          break;
        }
        case 5: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onWindowFrameInScreenChanged(params.window_frame_in_screen_dip);
          break;
        }
        case 6: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreenInfosChanged(params.screen_infos);
          break;
        }
        case 7: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.beginKeyboardEvent();
          break;
        }
        case 8: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.endKeyboardEvent();
          break;
        }
        case 9: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forwardKeyboardEventWithCommands(params.event, params.native_event_data, params.skip_if_unhandled, params.commands);
          break;
        }
        case 10: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.routeOrProcessMouseEvent(params.event);
          break;
        }
        case 11: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.routeOrProcessTouchEvent(params.event);
          break;
        }
        case 12: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.routeOrProcessWheelEvent(params.event);
          break;
        }
        case 13: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forwardMouseEvent(params.event);
          break;
        }
        case 14: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.forwardWheelEvent(params.event);
          break;
        }
        case 15: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pinchEvent(params.event, params.is_synthetically_injected);
          break;
        }
        case 16: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.smartMagnifyEvent(params.event);
          break;
        }
        case 17: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.imeSetComposition(params.text, params.ime_text_spans, params.replacement_range, params.selection_start, params.selection_end);
          break;
        }
        case 18: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.imeCommitText(params.text, params.replacement_range);
          break;
        }
        case 19: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec.$.decode(message.payload);
          const result = this.impl.imeFinishComposingText();
          break;
        }
        case 20: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec.$.decode(message.payload);
          const result = this.impl.imeCancelCompositionFromCocoa();
          break;
        }
        case 21: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.lookUpDictionaryOverlayAtPoint(params.root_point);
          break;
        }
        case 22: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.lookUpDictionaryOverlayFromRange(params.range);
          break;
        }
        case 23: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.syncGetCharacterIndexAtPoint(params.root_point);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.syncGetFirstRectForRange(params.requested_range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec.$.decode(message.payload);
          const result = this.impl.executeEditCommand(params.command);
          break;
        }
        case 26: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.undo();
          break;
        }
        case 27: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.redo();
          break;
        }
        case 28: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cut();
          break;
        }
        case 29: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec.$.decode(message.payload);
          const result = this.impl.copy();
          break;
        }
        case 30: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec.$.decode(message.payload);
          const result = this.impl.copyToFindPboard();
          break;
        }
        case 31: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec.$.decode(message.payload);
          const result = this.impl.centerSelection();
          break;
        }
        case 32: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec.$.decode(message.payload);
          const result = this.impl.paste();
          break;
        }
        case 33: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.pasteAndMatchStyle();
          break;
        }
        case 34: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec.$.decode(message.payload);
          const result = this.impl.selectAll();
          break;
        }
        case 35: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startSpeaking();
          break;
        }
        case 36: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stopSpeaking();
          break;
        }
        case 37: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec.$.decode(message.payload);
          const result = this.impl.syncIsSpeaking();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 38: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getRenderWidgetAccessibilityToken();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 39: {
          const params = remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setRemoteAccessibilityWindowToken(params.window_token);
          break;
        }
      }
    }});
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHostReceiver = remote_cocoa.mojom.RenderWidgetHostNSViewHostReceiver;

remote_cocoa.mojom.RenderWidgetHostNSViewHostPtr = remote_cocoa.mojom.RenderWidgetHostNSViewHostRemote;
remote_cocoa.mojom.RenderWidgetHostNSViewHostRequest = remote_cocoa.mojom.RenderWidgetHostNSViewHostPendingReceiver;

