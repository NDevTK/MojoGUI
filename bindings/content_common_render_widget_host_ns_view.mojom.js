// Auto-generated MojoJS binding
// Source: chromium_src/content/common/render_widget_host_ns_view.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Struct: PopupMenu
remote_cocoa.mojom.PopupMenuSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.PopupMenu',
      packedSize: 48,
      fields: [
        { name: 'items', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.MenuItemSpec, false), nullable: false, minVersion: 0 },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'item_font_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'right_aligned', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'selected_item', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'receiver', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: PopupMenuRunner
remote_cocoa.mojom.PopupMenuRunner = {};

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
      []);
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

// ParamsSpec for Hide
remote_cocoa.mojom.PopupMenuRunner_Hide_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.PopupMenuRunner.Hide_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.PopupMenuRunnerPtr = remote_cocoa.mojom.PopupMenuRunnerRemote;
remote_cocoa.mojom.PopupMenuRunnerRequest = remote_cocoa.mojom.PopupMenuRunnerPendingReceiver;


// Interface: RenderWidgetHostNSView
remote_cocoa.mojom.RenderWidgetHostNSView = {};

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
      [content_rect, popup_parent_ns_view_id]);
  }

  setParentWebContentsNSView(parent_ns_view_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec,
      null,
      [parent_ns_view_id]);
  }

  disableDisplay() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec,
      null,
      []);
  }

  makeFirstResponder() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec,
      null,
      []);
  }

  setBounds(rect) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec,
      null,
      [rect]);
  }

  setCALayerParams(ca_layer_params) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec,
      null,
      [ca_layer_params]);
  }

  setBackgroundColor(color) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec,
      null,
      [color]);
  }

  setVisible(visible) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec,
      null,
      [visible]);
  }

  setTooltipText(display_text) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec,
      null,
      [display_text]);
  }

  setTextInputState(text_input_type, flags) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec,
      null,
      [text_input_type, flags]);
  }

  setTextSelection(text, offset, range) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec,
      null,
      [text, offset, range]);
  }

  setCompositionRangeInfo(range) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec,
      null,
      [range]);
  }

  cancelComposition() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec,
      null,
      []);
  }

  setShowingContextMenu(showing) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec,
      null,
      [showing]);
  }

  displayCursor(cursor) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec,
      null,
      [cursor]);
  }

  setCursorLocked(locked) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec,
      null,
      [locked]);
  }

  setCursorLockedUnacceleratedMovement(unaccelerated_movement) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec,
      null,
      [unaccelerated_movement]);
  }

  showDictionaryOverlayForSelection() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec,
      null,
      []);
  }

  showDictionaryOverlay(attributed_string, baseline_point) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec,
      null,
      [attributed_string, baseline_point]);
  }

  lockKeyboard(dom_codes) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec,
      null,
      [dom_codes]);
  }

  unlockKeyboard() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec,
      null,
      []);
  }

  showSharingServicePicker(title, text, url, file_paths) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec,
      [title, text, url, file_paths]);
  }

  destroy() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec,
      null,
      []);
  }

  gestureScrollEventAck(event, consumed) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec,
      null,
      [event, consumed]);
  }

  didOverscroll(params) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec,
      null,
      [params]);
  }

  displayPopupMenu(menu) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec,
      [menu]);
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

// ParamsSpec for InitAsPopup
remote_cocoa.mojom.RenderWidgetHostNSView_InitAsPopup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.InitAsPopup_Params',
      packedSize: 24,
      fields: [
        { name: 'content_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'popup_parent_ns_view_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetParentWebContentsNSView
remote_cocoa.mojom.RenderWidgetHostNSView_SetParentWebContentsNSView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetParentWebContentsNSView_Params',
      packedSize: 16,
      fields: [
        { name: 'parent_ns_view_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisableDisplay
remote_cocoa.mojom.RenderWidgetHostNSView_DisableDisplay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.DisableDisplay_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MakeFirstResponder
remote_cocoa.mojom.RenderWidgetHostNSView_MakeFirstResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.MakeFirstResponder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetBounds
remote_cocoa.mojom.RenderWidgetHostNSView_SetBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetBounds_Params',
      packedSize: 16,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCALayerParams
remote_cocoa.mojom.RenderWidgetHostNSView_SetCALayerParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetCALayerParams_Params',
      packedSize: 16,
      fields: [
        { name: 'ca_layer_params', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.CALayerParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetBackgroundColor
remote_cocoa.mojom.RenderWidgetHostNSView_SetBackgroundColor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetBackgroundColor_Params',
      packedSize: 16,
      fields: [
        { name: 'color', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetVisible
remote_cocoa.mojom.RenderWidgetHostNSView_SetVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTooltipText
remote_cocoa.mojom.RenderWidgetHostNSView_SetTooltipText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetTooltipText_Params',
      packedSize: 16,
      fields: [
        { name: 'display_text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTextInputState
remote_cocoa.mojom.RenderWidgetHostNSView_SetTextInputState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetTextInputState_Params',
      packedSize: 16,
      fields: [
        { name: 'text_input_type', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.TextInputTypeSpec, nullable: false, minVersion: 0 },
        { name: 'flags', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetTextSelection
remote_cocoa.mojom.RenderWidgetHostNSView_SetTextSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetTextSelection_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'range', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetCompositionRangeInfo
remote_cocoa.mojom.RenderWidgetHostNSView_SetCompositionRangeInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetCompositionRangeInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelComposition
remote_cocoa.mojom.RenderWidgetHostNSView_CancelComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.CancelComposition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetShowingContextMenu
remote_cocoa.mojom.RenderWidgetHostNSView_SetShowingContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetShowingContextMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'showing', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisplayCursor
remote_cocoa.mojom.RenderWidgetHostNSView_DisplayCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.DisplayCursor_Params',
      packedSize: 16,
      fields: [
        { name: 'cursor', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.CursorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCursorLocked
remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLocked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetCursorLocked_Params',
      packedSize: 16,
      fields: [
        { name: 'locked', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetCursorLockedUnacceleratedMovement
remote_cocoa.mojom.RenderWidgetHostNSView_SetCursorLockedUnacceleratedMovement_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.SetCursorLockedUnacceleratedMovement_Params',
      packedSize: 16,
      fields: [
        { name: 'unaccelerated_movement', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowDictionaryOverlayForSelection
remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlayForSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.ShowDictionaryOverlayForSelection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowDictionaryOverlay
remote_cocoa.mojom.RenderWidgetHostNSView_ShowDictionaryOverlay_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.ShowDictionaryOverlay_Params',
      packedSize: 24,
      fields: [
        { name: 'attributed_string', packedOffset: 0, packedBitOffset: 0, type: ui.mojom.AttributedStringSpec, nullable: false, minVersion: 0 },
        { name: 'baseline_point', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for LockKeyboard
remote_cocoa.mojom.RenderWidgetHostNSView_LockKeyboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.LockKeyboard_Params',
      packedSize: 16,
      fields: [
        { name: 'dom_codes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnlockKeyboard
remote_cocoa.mojom.RenderWidgetHostNSView_UnlockKeyboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.UnlockKeyboard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ShowSharingServicePicker
remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.ShowSharingServicePicker_Params',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'file_paths', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

remote_cocoa.mojom.RenderWidgetHostNSView_ShowSharingServicePicker_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ShareErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Destroy
remote_cocoa.mojom.RenderWidgetHostNSView_Destroy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.Destroy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GestureScrollEventAck
remote_cocoa.mojom.RenderWidgetHostNSView_GestureScrollEventAck_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.GestureScrollEventAck_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
        { name: 'consumed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for DidOverscroll
remote_cocoa.mojom.RenderWidgetHostNSView_DidOverscroll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.DidOverscroll_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DidOverscrollParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DisplayPopupMenu
remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSView.DisplayPopupMenu_Params',
      packedSize: 16,
      fields: [
        { name: 'menu', packedOffset: 0, packedBitOffset: 0, type: remote_cocoa.mojom.PopupMenuSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remote_cocoa.mojom.RenderWidgetHostNSView_DisplayPopupMenu_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'selected_item_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'selected_item_$value', originalFieldName: 'selected_item' } },
        { name: 'selected_item_$value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'selected_item_$flag', originalFieldName: 'selected_item' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.RenderWidgetHostNSViewPtr = remote_cocoa.mojom.RenderWidgetHostNSViewRemote;
remote_cocoa.mojom.RenderWidgetHostNSViewRequest = remote_cocoa.mojom.RenderWidgetHostNSViewPendingReceiver;


// Interface: RenderWidgetHostNSViewHost
remote_cocoa.mojom.RenderWidgetHostNSViewHost = {};

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
      []);
  }

  requestShutdown() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec,
      null,
      []);
  }

  onFirstResponderChanged(is_first_responder) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec,
      null,
      [is_first_responder]);
  }

  onWindowIsKeyChanged(is_key) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec,
      null,
      [is_key]);
  }

  onBoundsInWindowChanged(view_bounds_in_window_dip, attached_to_window) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec,
      null,
      [view_bounds_in_window_dip, attached_to_window]);
  }

  onWindowFrameInScreenChanged(window_frame_in_screen_dip) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec,
      null,
      [window_frame_in_screen_dip]);
  }

  onScreenInfosChanged(screen_infos) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec,
      null,
      [screen_infos]);
  }

  beginKeyboardEvent() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec,
      null,
      []);
  }

  endKeyboardEvent() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec,
      null,
      []);
  }

  forwardKeyboardEventWithCommands(event, native_event_data, skip_if_unhandled, commands) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec,
      null,
      [event, native_event_data, skip_if_unhandled, commands]);
  }

  routeOrProcessMouseEvent(event) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec,
      null,
      [event]);
  }

  routeOrProcessTouchEvent(event) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec,
      null,
      [event]);
  }

  routeOrProcessWheelEvent(event) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec,
      null,
      [event]);
  }

  forwardMouseEvent(event) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec,
      null,
      [event]);
  }

  forwardWheelEvent(event) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec,
      null,
      [event]);
  }

  pinchEvent(event, is_synthetically_injected) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec,
      null,
      [event, is_synthetically_injected]);
  }

  smartMagnifyEvent(event) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec,
      null,
      [event]);
  }

  imeSetComposition(text, ime_text_spans, replacement_range, selection_start, selection_end) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec,
      null,
      [text, ime_text_spans, replacement_range, selection_start, selection_end]);
  }

  imeCommitText(text, replacement_range) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec,
      null,
      [text, replacement_range]);
  }

  imeFinishComposingText() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec,
      null,
      []);
  }

  imeCancelCompositionFromCocoa() {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec,
      null,
      []);
  }

  lookUpDictionaryOverlayAtPoint(root_point) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec,
      null,
      [root_point]);
  }

  lookUpDictionaryOverlayFromRange(range) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec,
      null,
      [range]);
  }

  syncGetCharacterIndexAtPoint(root_point) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec,
      [root_point]);
  }

  syncGetFirstRectForRange(requested_range) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec,
      [requested_range]);
  }

  executeEditCommand(command) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec,
      null,
      [command]);
  }

  undo() {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec,
      null,
      []);
  }

  redo() {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec,
      null,
      []);
  }

  cut() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec,
      null,
      []);
  }

  copy() {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec,
      null,
      []);
  }

  copyToFindPboard() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec,
      null,
      []);
  }

  centerSelection() {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec,
      null,
      []);
  }

  paste() {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec,
      null,
      []);
  }

  pasteAndMatchStyle() {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec,
      null,
      []);
  }

  selectAll() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec,
      null,
      []);
  }

  startSpeaking() {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec,
      null,
      []);
  }

  stopSpeaking() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec,
      null,
      []);
  }

  syncIsSpeaking() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec,
      []);
  }

  getRenderWidgetAccessibilityToken() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec,
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec,
      []);
  }

  setRemoteAccessibilityWindowToken(window_token) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec,
      null,
      [window_token]);
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

// ParamsSpec for SyncIsWidgetForMainFrame
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.SyncIsWidgetForMainFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsWidgetForMainFrame_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_for_main_frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestShutdown
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RequestShutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.RequestShutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnFirstResponderChanged
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnFirstResponderChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.OnFirstResponderChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_first_responder', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnWindowIsKeyChanged
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowIsKeyChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.OnWindowIsKeyChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'is_key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnBoundsInWindowChanged
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnBoundsInWindowChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.OnBoundsInWindowChanged_Params',
      packedSize: 24,
      fields: [
        { name: 'view_bounds_in_window_dip', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'attached_to_window', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnWindowFrameInScreenChanged
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnWindowFrameInScreenChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.OnWindowFrameInScreenChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'window_frame_in_screen_dip', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnScreenInfosChanged
remote_cocoa.mojom.RenderWidgetHostNSViewHost_OnScreenInfosChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.OnScreenInfosChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'screen_infos', packedOffset: 0, packedBitOffset: 0, type: display.mojom.ScreenInfosSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BeginKeyboardEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_BeginKeyboardEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.BeginKeyboardEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EndKeyboardEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_EndKeyboardEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.EndKeyboardEvent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ForwardKeyboardEventWithCommands
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardKeyboardEventWithCommands_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ForwardKeyboardEventWithCommands_Params',
      packedSize: 40,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
        { name: 'native_event_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'skip_if_unhandled', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'commands', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.EditCommandSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for RouteOrProcessMouseEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.RouteOrProcessMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RouteOrProcessTouchEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessTouchEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.RouteOrProcessTouchEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RouteOrProcessWheelEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_RouteOrProcessWheelEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.RouteOrProcessWheelEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForwardMouseEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ForwardMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ForwardWheelEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ForwardWheelEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ForwardWheelEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PinchEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_PinchEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.PinchEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
        { name: 'is_synthetically_injected', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SmartMagnifyEvent
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SmartMagnifyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.SmartMagnifyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.EventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ImeSetComposition
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeSetComposition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ImeSetComposition_Params',
      packedSize: 40,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'ime_text_spans', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ui.mojom.ImeTextSpanSpec, false), nullable: false, minVersion: 0 },
        { name: 'replacement_range', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'selection_start', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'selection_end', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for ImeCommitText
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCommitText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ImeCommitText_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'replacement_range', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ImeFinishComposingText
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeFinishComposingText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ImeFinishComposingText_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for ImeCancelCompositionFromCocoa
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ImeCancelCompositionFromCocoa_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ImeCancelCompositionFromCocoa_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for LookUpDictionaryOverlayAtPoint
remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayAtPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.LookUpDictionaryOverlayAtPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'root_point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LookUpDictionaryOverlayFromRange
remote_cocoa.mojom.RenderWidgetHostNSViewHost_LookUpDictionaryOverlayFromRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.LookUpDictionaryOverlayFromRange_Params',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SyncGetCharacterIndexAtPoint
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.SyncGetCharacterIndexAtPoint_Params',
      packedSize: 16,
      fields: [
        { name: 'root_point', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetCharacterIndexAtPoint_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SyncGetFirstRectForRange
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.SyncGetFirstRectForRange_Params',
      packedSize: 16,
      fields: [
        { name: 'requested_range', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncGetFirstRectForRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'out_rect', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: false, minVersion: 0 },
        { name: 'out_actual_range', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.RangeSpec, nullable: false, minVersion: 0 },
        { name: 'success', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for ExecuteEditCommand
remote_cocoa.mojom.RenderWidgetHostNSViewHost_ExecuteEditCommand_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.ExecuteEditCommand_Params',
      packedSize: 16,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Undo
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Undo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.Undo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Redo
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Redo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.Redo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Cut
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Cut_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.Cut_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Copy
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Copy_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.Copy_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CopyToFindPboard
remote_cocoa.mojom.RenderWidgetHostNSViewHost_CopyToFindPboard_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.CopyToFindPboard_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CenterSelection
remote_cocoa.mojom.RenderWidgetHostNSViewHost_CenterSelection_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.CenterSelection_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for Paste
remote_cocoa.mojom.RenderWidgetHostNSViewHost_Paste_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.Paste_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for PasteAndMatchStyle
remote_cocoa.mojom.RenderWidgetHostNSViewHost_PasteAndMatchStyle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.PasteAndMatchStyle_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SelectAll
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SelectAll_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.SelectAll_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartSpeaking
remote_cocoa.mojom.RenderWidgetHostNSViewHost_StartSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.StartSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StopSpeaking
remote_cocoa.mojom.RenderWidgetHostNSViewHost_StopSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.StopSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SyncIsSpeaking
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.SyncIsSpeaking_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHost_SyncIsSpeaking_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_speaking', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetRenderWidgetAccessibilityToken
remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.GetRenderWidgetAccessibilityToken_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remote_cocoa.mojom.RenderWidgetHostNSViewHost_GetRenderWidgetAccessibilityToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'host_pid', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ProcessIdSpec, nullable: false, minVersion: 0 },
        { name: 'element_token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetRemoteAccessibilityWindowToken
remote_cocoa.mojom.RenderWidgetHostNSViewHost_SetRemoteAccessibilityWindowToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.RenderWidgetHostNSViewHost.SetRemoteAccessibilityWindowToken_Params',
      packedSize: 16,
      fields: [
        { name: 'window_token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.RenderWidgetHostNSViewHostPtr = remote_cocoa.mojom.RenderWidgetHostNSViewHostRemote;
remote_cocoa.mojom.RenderWidgetHostNSViewHostRequest = remote_cocoa.mojom.RenderWidgetHostNSViewHostPendingReceiver;

