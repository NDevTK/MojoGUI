// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/native_widget_ns_window.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Enum: WindowClass
remote_cocoa.mojom.WindowClass = {
  kDefault: 0,
  kBrowser: 1,
  kFrameless: 2,
  kOverlay: 3,
};

// Enum: WindowVisibilityState
remote_cocoa.mojom.WindowVisibilityState = {
  kHideWindow: 0,
  kShowAndActivateWindow: 1,
  kShowInactive: 2,
  kMiniaturizeWindow: 3,
};

// Enum: VisibilityTransition
remote_cocoa.mojom.VisibilityTransition = {
  kShow: 0,
  kHide: 1,
  kBoth: 2,
  kNone: 3,
};

// Enum: ToolbarVisibilityStyle
remote_cocoa.mojom.ToolbarVisibilityStyle = {
  kNone: 0,
  kAlways: 1,
  kAutohide: 2,
};

// Interface: NativeWidgetNSWindow
remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.NativeWidgetNSWindow';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.NativeWidgetNSWindowRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remote_cocoa.mojom.NativeWidgetNSWindowRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWindow(params) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec.$,
      null,
      [params]);
  }

  setParent(parent_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec.$,
      null,
      [parent_id]);
  }

  createSelectFileDialog(dialog) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec.$,
      null,
      [dialog]);
  }

  showCertificateViewer(certificate) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec.$,
      null,
      [certificate]);
  }

  stackAbove(sibling_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec.$,
      null,
      [sibling_id]);
  }

  stackAtTop() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec.$,
      null,
      []);
  }

  showEmojiPanel() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec.$,
      null,
      []);
  }

  initWindow(params) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec.$,
      null,
      [params]);
  }

  initCompositorView() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec.$,
      remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec.$,
      []);
  }

  createContentView(ns_view_id, bounds, corner_radius) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec.$,
      null,
      [ns_view_id, bounds, corner_radius]);
  }

  destroyContentView() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec.$,
      null,
      []);
  }

  closeWindow() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec.$,
      null,
      []);
  }

  closeWindowNow() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec.$,
      null,
      []);
  }

  setInitialBounds(new_bounds, minimum_content_size) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec.$,
      null,
      [new_bounds, minimum_content_size]);
  }

  setBounds(new_bounds, minimum_content_size, maximum_content_size) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec.$,
      null,
      [new_bounds, minimum_content_size, maximum_content_size]);
  }

  setSize(new_size, minimum_content_size) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec.$,
      null,
      [new_size, minimum_content_size]);
  }

  setSizeAndCenter(content_size, minimum_content_size) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec.$,
      null,
      [content_size, minimum_content_size]);
  }

  setVisibilityState(new_state) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec.$,
      null,
      [new_state]);
  }

  setAnimationEnabled(animation_enabled) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec.$,
      null,
      [animation_enabled]);
  }

  setTransitionsToAnimate(transitions) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec.$,
      null,
      [transitions]);
  }

  setVisibleOnAllSpaces(always_visible) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec.$,
      null,
      [always_visible]);
  }

  enterFullscreen(target_display_id) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec.$,
      null,
      [target_display_id]);
  }

  exitFullscreen() {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec.$,
      null,
      []);
  }

  setCanAppearInExistingFullscreenSpaces(can_appear_in_existing_fullscreen_spaces) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec.$,
      null,
      [can_appear_in_existing_fullscreen_spaces]);
  }

  setMiniaturized(miniaturized) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec.$,
      null,
      [miniaturized]);
  }

  setZoomed(zoomed) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec.$,
      null,
      [zoomed]);
  }

  setSizeConstraints(min_size, max_size, is_resizable, is_maximizable) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec.$,
      null,
      [min_size, max_size, is_resizable, is_maximizable]);
  }

  setOpacity(opacity) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec.$,
      null,
      [opacity]);
  }

  setWindowLevel(level) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec.$,
      null,
      [level]);
  }

  setActivationIndependence(independence) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec.$,
      null,
      [independence]);
  }

  setAspectRatio(aspect_ratio, excluded_margin) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec.$,
      null,
      [aspect_ratio, excluded_margin]);
  }

  setCALayerParams(ca_layer_params) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec.$,
      null,
      [ca_layer_params]);
  }

  setWindowTitle(title) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec.$,
      null,
      [title]);
  }

  setIgnoresMouseEvents(ignores_mouse_events) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec.$,
      null,
      [ignores_mouse_events]);
  }

  makeFirstResponder() {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec.$,
      null,
      []);
  }

  sortSubviews(attached_subview_ids) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec.$,
      null,
      [attached_subview_ids]);
  }

  clearTouchBar() {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec.$,
      null,
      []);
  }

  updateTooltip() {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec.$,
      null,
      []);
  }

  acquireCapture() {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec.$,
      null,
      []);
  }

  releaseCapture() {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec.$,
      null,
      []);
  }

  redispatchKeyEvent(native_event_data) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec.$,
      null,
      [native_event_data]);
  }

  setLocalEventMonitorEnabled(enabled) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec.$,
      null,
      [enabled]);
  }

  setCursor(cursor) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec.$,
      null,
      [cursor]);
  }

  enableImmersiveFullscreen(fullscreen_overlay_widget_id, tab_widget_id) {
    // Ordinal: 43
    return this.proxy.sendMessage(
      43,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec.$,
      null,
      [fullscreen_overlay_widget_id, tab_widget_id]);
  }

  disableImmersiveFullscreen() {
    // Ordinal: 44
    return this.proxy.sendMessage(
      44,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec.$,
      null,
      []);
  }

  updateToolbarVisibility(style) {
    // Ordinal: 45
    return this.proxy.sendMessage(
      45,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec.$,
      null,
      [style]);
  }

  onTopContainerViewBoundsChanged(bounds) {
    // Ordinal: 46
    return this.proxy.sendMessage(
      46,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec.$,
      null,
      [bounds]);
  }

  immersiveFullscreenRevealLock() {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec.$,
      null,
      []);
  }

  immersiveFullscreenRevealUnlock() {
    // Ordinal: 48
    return this.proxy.sendMessage(
      48,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec.$,
      null,
      []);
  }

  setCanGoBack(can_go_back) {
    // Ordinal: 49
    return this.proxy.sendMessage(
      49,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec.$,
      null,
      [can_go_back]);
  }

  setCanGoForward(can_go_forward) {
    // Ordinal: 50
    return this.proxy.sendMessage(
      50,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec.$,
      null,
      [can_go_forward]);
  }

  displayContextMenu(menu, host, receiver) {
    // Ordinal: 51
    return this.proxy.sendMessage(
      51,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec.$,
      null,
      [menu, host, receiver]);
  }

  setAllowScreenshots(allow) {
    // Ordinal: 52
    return this.proxy.sendMessage(
      52,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec.$,
      null,
      [allow]);
  }

  setColorMode(color_mode) {
    // Ordinal: 53
    return this.proxy.sendMessage(
      53,  // ordinal
      remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec.$,
      null,
      [color_mode]);
  }

};

remote_cocoa.mojom.NativeWidgetNSWindow.getRemote = function() {
  let remote = new remote_cocoa.mojom.NativeWidgetNSWindowRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.NativeWidgetNSWindow',
    'context');
  return remote.$;
}};

// ParamsSpec for CreateWindow
remote_cocoa.mojom.NativeWidgetNSWindow_CreateWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.CreateWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetParent
remote_cocoa.mojom.NativeWidgetNSWindow_SetParent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetParent_Params',
      packedSize: 16,
      fields: [
        { name: 'parent_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateSelectFileDialog
remote_cocoa.mojom.NativeWidgetNSWindow_CreateSelectFileDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.CreateSelectFileDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'dialog', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShowCertificateViewer
remote_cocoa.mojom.NativeWidgetNSWindow_ShowCertificateViewer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.ShowCertificateViewer_Params',
      packedSize: 16,
      fields: [
        { name: 'certificate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for StackAbove
remote_cocoa.mojom.NativeWidgetNSWindow_StackAbove_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.StackAbove_Params',
      packedSize: 16,
      fields: [
        { name: 'sibling_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for StackAtTop
remote_cocoa.mojom.NativeWidgetNSWindow_StackAtTop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.StackAtTop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ShowEmojiPanel
remote_cocoa.mojom.NativeWidgetNSWindow_ShowEmojiPanel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.ShowEmojiPanel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for InitWindow
remote_cocoa.mojom.NativeWidgetNSWindow_InitWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.InitWindow_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for InitCompositorView
remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.InitCompositorView_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

remote_cocoa.mojom.NativeWidgetNSWindow_InitCompositorView_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.InitCompositorView_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'cg_window_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CreateContentView
remote_cocoa.mojom.NativeWidgetNSWindow_CreateContentView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.CreateContentView_Params',
      packedSize: 32,
      fields: [
        { name: 'ns_view_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'bounds', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'corner_radius', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DestroyContentView
remote_cocoa.mojom.NativeWidgetNSWindow_DestroyContentView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.DestroyContentView_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CloseWindow
remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.CloseWindow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CloseWindowNow
remote_cocoa.mojom.NativeWidgetNSWindow_CloseWindowNow_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.CloseWindowNow_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetInitialBounds
remote_cocoa.mojom.NativeWidgetNSWindow_SetInitialBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetInitialBounds_Params',
      packedSize: 24,
      fields: [
        { name: 'new_bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'minimum_content_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetBounds
remote_cocoa.mojom.NativeWidgetNSWindow_SetBounds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetBounds_Params',
      packedSize: 32,
      fields: [
        { name: 'new_bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'minimum_content_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'maximum_content_size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetSize
remote_cocoa.mojom.NativeWidgetNSWindow_SetSize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetSize_Params',
      packedSize: 24,
      fields: [
        { name: 'new_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'minimum_content_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetSizeAndCenter
remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeAndCenter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetSizeAndCenter_Params',
      packedSize: 24,
      fields: [
        { name: 'content_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'minimum_content_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetVisibilityState
remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibilityState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetVisibilityState_Params',
      packedSize: 16,
      fields: [
        { name: 'new_state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetAnimationEnabled
remote_cocoa.mojom.NativeWidgetNSWindow_SetAnimationEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetAnimationEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'animation_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetTransitionsToAnimate
remote_cocoa.mojom.NativeWidgetNSWindow_SetTransitionsToAnimate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetTransitionsToAnimate_Params',
      packedSize: 16,
      fields: [
        { name: 'transitions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetVisibleOnAllSpaces
remote_cocoa.mojom.NativeWidgetNSWindow_SetVisibleOnAllSpaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetVisibleOnAllSpaces_Params',
      packedSize: 16,
      fields: [
        { name: 'always_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EnterFullscreen
remote_cocoa.mojom.NativeWidgetNSWindow_EnterFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.EnterFullscreen_Params',
      packedSize: 16,
      fields: [
        { name: 'target_display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ExitFullscreen
remote_cocoa.mojom.NativeWidgetNSWindow_ExitFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.ExitFullscreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetCanAppearInExistingFullscreenSpaces
remote_cocoa.mojom.NativeWidgetNSWindow_SetCanAppearInExistingFullscreenSpaces_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetCanAppearInExistingFullscreenSpaces_Params',
      packedSize: 16,
      fields: [
        { name: 'can_appear_in_existing_fullscreen_spaces', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetMiniaturized
remote_cocoa.mojom.NativeWidgetNSWindow_SetMiniaturized_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetMiniaturized_Params',
      packedSize: 16,
      fields: [
        { name: 'miniaturized', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetZoomed
remote_cocoa.mojom.NativeWidgetNSWindow_SetZoomed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetZoomed_Params',
      packedSize: 16,
      fields: [
        { name: 'zoomed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetSizeConstraints
remote_cocoa.mojom.NativeWidgetNSWindow_SetSizeConstraints_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetSizeConstraints_Params',
      packedSize: 40,
      fields: [
        { name: 'min_size', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'max_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_resizable', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_maximizable', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetOpacity
remote_cocoa.mojom.NativeWidgetNSWindow_SetOpacity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetOpacity_Params',
      packedSize: 16,
      fields: [
        { name: 'opacity', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetWindowLevel
remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowLevel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetWindowLevel_Params',
      packedSize: 16,
      fields: [
        { name: 'level', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetActivationIndependence
remote_cocoa.mojom.NativeWidgetNSWindow_SetActivationIndependence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetActivationIndependence_Params',
      packedSize: 16,
      fields: [
        { name: 'independence', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetAspectRatio
remote_cocoa.mojom.NativeWidgetNSWindow_SetAspectRatio_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetAspectRatio_Params',
      packedSize: 24,
      fields: [
        { name: 'aspect_ratio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'excluded_margin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetCALayerParams
remote_cocoa.mojom.NativeWidgetNSWindow_SetCALayerParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetCALayerParams_Params',
      packedSize: 16,
      fields: [
        { name: 'ca_layer_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetWindowTitle
remote_cocoa.mojom.NativeWidgetNSWindow_SetWindowTitle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetWindowTitle_Params',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetIgnoresMouseEvents
remote_cocoa.mojom.NativeWidgetNSWindow_SetIgnoresMouseEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetIgnoresMouseEvents_Params',
      packedSize: 16,
      fields: [
        { name: 'ignores_mouse_events', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for MakeFirstResponder
remote_cocoa.mojom.NativeWidgetNSWindow_MakeFirstResponder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.MakeFirstResponder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SortSubviews
remote_cocoa.mojom.NativeWidgetNSWindow_SortSubviews_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SortSubviews_Params',
      packedSize: 16,
      fields: [
        { name: 'attached_subview_ids', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ClearTouchBar
remote_cocoa.mojom.NativeWidgetNSWindow_ClearTouchBar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.ClearTouchBar_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateTooltip
remote_cocoa.mojom.NativeWidgetNSWindow_UpdateTooltip_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.UpdateTooltip_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AcquireCapture
remote_cocoa.mojom.NativeWidgetNSWindow_AcquireCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.AcquireCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ReleaseCapture
remote_cocoa.mojom.NativeWidgetNSWindow_ReleaseCapture_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.ReleaseCapture_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for RedispatchKeyEvent
remote_cocoa.mojom.NativeWidgetNSWindow_RedispatchKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.RedispatchKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'native_event_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetLocalEventMonitorEnabled
remote_cocoa.mojom.NativeWidgetNSWindow_SetLocalEventMonitorEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetLocalEventMonitorEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetCursor
remote_cocoa.mojom.NativeWidgetNSWindow_SetCursor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetCursor_Params',
      packedSize: 16,
      fields: [
        { name: 'cursor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for EnableImmersiveFullscreen
remote_cocoa.mojom.NativeWidgetNSWindow_EnableImmersiveFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.EnableImmersiveFullscreen_Params',
      packedSize: 24,
      fields: [
        { name: 'fullscreen_overlay_widget_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'tab_widget_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DisableImmersiveFullscreen
remote_cocoa.mojom.NativeWidgetNSWindow_DisableImmersiveFullscreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.DisableImmersiveFullscreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for UpdateToolbarVisibility
remote_cocoa.mojom.NativeWidgetNSWindow_UpdateToolbarVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.UpdateToolbarVisibility_Params',
      packedSize: 16,
      fields: [
        { name: 'style', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for OnTopContainerViewBoundsChanged
remote_cocoa.mojom.NativeWidgetNSWindow_OnTopContainerViewBoundsChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.OnTopContainerViewBoundsChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'bounds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ImmersiveFullscreenRevealLock
remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.ImmersiveFullscreenRevealLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ImmersiveFullscreenRevealUnlock
remote_cocoa.mojom.NativeWidgetNSWindow_ImmersiveFullscreenRevealUnlock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.ImmersiveFullscreenRevealUnlock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetCanGoBack
remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoBack_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetCanGoBack_Params',
      packedSize: 16,
      fields: [
        { name: 'can_go_back', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetCanGoForward
remote_cocoa.mojom.NativeWidgetNSWindow_SetCanGoForward_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetCanGoForward_Params',
      packedSize: 16,
      fields: [
        { name: 'can_go_forward', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for DisplayContextMenu
remote_cocoa.mojom.NativeWidgetNSWindow_DisplayContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.DisplayContextMenu_Params',
      packedSize: 32,
      fields: [
        { name: 'menu', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetAllowScreenshots
remote_cocoa.mojom.NativeWidgetNSWindow_SetAllowScreenshots_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetAllowScreenshots_Params',
      packedSize: 16,
      fields: [
        { name: 'allow', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for SetColorMode
remote_cocoa.mojom.NativeWidgetNSWindow_SetColorMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.NativeWidgetNSWindow.SetColorMode_Params',
      packedSize: 16,
      fields: [
        { name: 'color_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
remote_cocoa.mojom.NativeWidgetNSWindowPtr = remote_cocoa.mojom.NativeWidgetNSWindowRemote;
remote_cocoa.mojom.NativeWidgetNSWindowRequest = remote_cocoa.mojom.NativeWidgetNSWindowPendingReceiver;

