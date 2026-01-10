// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_interface.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var services = services || {};
var ui = ui || {};
var gfx = gfx || {};
var skia = skia || {};

ax.mojom.FocusTypeSpec = { $: mojo.internal.Enum() };
ax.mojom.FocusRingStackingOrderSpec = { $: mojo.internal.Enum() };
ax.mojom.FocusRingInfoSpec = { $: {} };
ax.mojom.UserInterface = {};
ax.mojom.UserInterface.$interfaceName = 'ax.mojom.UserInterface';
ax.mojom.UserInterface_DarkenScreen_ParamsSpec = { $: {} };
ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec = { $: {} };
ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec = { $: {} };
ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParamsSpec = { $: {} };
ax.mojom.UserInterface_SetFocusRings_ParamsSpec = { $: {} };
ax.mojom.UserInterface_SetHighlights_ParamsSpec = { $: {} };
ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec = { $: {} };

// Enum: FocusType
ax.mojom.FocusType = {
  kGlow: 0,
  kSolid: 1,
  kDashed: 2,
};

// Enum: FocusRingStackingOrder
ax.mojom.FocusRingStackingOrder = {
  kAboveAccessibilityBubbles: 0,
  kBelowAccessibilityBubbles: 1,
};

// Struct: FocusRingInfo
mojo.internal.Struct(
    ax.mojom.FocusRingInfoSpec, 'ax.mojom.FocusRingInfo', [
      mojo.internal.StructField('rects', 0, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ax.mojom.FocusTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color', 16, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('secondary_color', 24, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('background_color', 32, 0, skia.mojom.SkColorSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('stacking_order', 40, 0, ax.mojom.FocusRingStackingOrderSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 48, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Interface: UserInterface
mojo.internal.Struct(
    ax.mojom.UserInterface_DarkenScreen_ParamsSpec, 'ax.mojom.UserInterface_DarkenScreen_Params', [
      mojo.internal.StructField('darken', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec, 'ax.mojom.UserInterface_OpenSettingsSubpage_Params', [
      mojo.internal.StructField('subpage', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec, 'ax.mojom.UserInterface_ShowConfirmationDialog_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cancelName', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParamsSpec, 'ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParams', [
      mojo.internal.StructField('confirmed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.UserInterface_SetFocusRings_ParamsSpec, 'ax.mojom.UserInterface_SetFocusRings_Params', [
      mojo.internal.StructField('focus_rings', 0, 0, mojo.internal.Array(ax.mojom.FocusRingInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('at_type', 8, 0, ax.mojom.AssistiveTechnologyTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ax.mojom.UserInterface_SetHighlights_ParamsSpec, 'ax.mojom.UserInterface_SetHighlights_Params', [
      mojo.internal.StructField('rects', 0, 0, mojo.internal.Array(gfx.mojom.RectSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('color', 8, 0, skia.mojom.SkColorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec, 'ax.mojom.UserInterface_SetVirtualKeyboardVisible_Params', [
      mojo.internal.StructField('is_visible', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.UserInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.UserInterfaceRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.UserInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.UserInterfacePendingReceiver,
      handle);
    this.$ = new ax.mojom.UserInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.UserInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  darkenScreen(darken) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.UserInterface_DarkenScreen_ParamsSpec,
      null,
      [darken],
      false);
  }

  openSettingsSubpage(subpage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec,
      null,
      [subpage],
      false);
  }

  showConfirmationDialog(title, description, cancelName) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec,
      ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParamsSpec,
      [title, description, cancelName],
      false);
  }

  setFocusRings(focus_rings, at_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.UserInterface_SetFocusRings_ParamsSpec,
      null,
      [focus_rings, at_type],
      false);
  }

  setHighlights(rects, color) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.UserInterface_SetHighlights_ParamsSpec,
      null,
      [rects, color],
      false);
  }

  setVirtualKeyboardVisible(is_visible) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec,
      null,
      [is_visible],
      false);
  }

};

ax.mojom.UserInterface.getRemote = function() {
  let remote = new ax.mojom.UserInterfaceRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ax.mojom.UserInterface',
    'context');
  return remote.$;
};

ax.mojom.UserInterfacePtr = ax.mojom.UserInterfaceRemote;
ax.mojom.UserInterfaceRequest = ax.mojom.UserInterfacePendingReceiver;

