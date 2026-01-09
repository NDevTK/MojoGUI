// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_interface.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};


// Enum: FocusType
ax.mojom.FocusType = {
  kGlow: 0,
  kSolid: 1,
  kDashed: 2,
};
ax.mojom.FocusTypeSpec = { $: mojo.internal.Enum() };

// Enum: FocusRingStackingOrder
ax.mojom.FocusRingStackingOrder = {
  kAboveAccessibilityBubbles: 0,
  kBelowAccessibilityBubbles: 1,
};
ax.mojom.FocusRingStackingOrderSpec = { $: mojo.internal.Enum() };

// Struct: FocusRingInfo
ax.mojom.FocusRingInfoSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.FocusRingInfo',
      packedSize: 56,
      fields: [
        { name: 'rects', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.FocusTypeSpec, nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 16, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
        { name: 'secondary_color', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
        { name: 'background_color', packedOffset: 32, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: true, minVersion: 0 },
        { name: 'stacking_order', packedOffset: 12, packedBitOffset: 0, type: ax.mojom.FocusRingStackingOrderSpec, nullable: true, minVersion: 0 },
        { name: 'id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: UserInterface
ax.mojom.UserInterface = {};

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
      [darken]);
  }

  openSettingsSubpage(subpage) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec,
      null,
      [subpage]);
  }

  showConfirmationDialog(title, description, cancelName) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec,
      ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParamsSpec,
      [title, description, cancelName]);
  }

  setFocusRings(focus_rings, at_type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ax.mojom.UserInterface_SetFocusRings_ParamsSpec,
      null,
      [focus_rings, at_type]);
  }

  setHighlights(rects, color) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ax.mojom.UserInterface_SetHighlights_ParamsSpec,
      null,
      [rects, color]);
  }

  setVirtualKeyboardVisible(is_visible) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec,
      null,
      [is_visible]);
  }

};

ax.mojom.UserInterface.getRemote = function() {
  let remote = new ax.mojom.UserInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.UserInterface',
    'context');
  return remote.$;
};

// ParamsSpec for DarkenScreen
ax.mojom.UserInterface_DarkenScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInterface.DarkenScreen_Params',
      packedSize: 16,
      fields: [
        { name: 'darken', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenSettingsSubpage
ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInterface.OpenSettingsSubpage_Params',
      packedSize: 16,
      fields: [
        { name: 'subpage', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShowConfirmationDialog
ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInterface.ShowConfirmationDialog_Params',
      packedSize: 32,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cancelName', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'confirmed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFocusRings
ax.mojom.UserInterface_SetFocusRings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInterface.SetFocusRings_Params',
      packedSize: 24,
      fields: [
        { name: 'focus_rings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ax.mojom.FocusRingInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'at_type', packedOffset: 8, packedBitOffset: 0, type: ax.mojom.AssistiveTechnologyTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetHighlights
ax.mojom.UserInterface_SetHighlights_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInterface.SetHighlights_Params',
      packedSize: 24,
      fields: [
        { name: 'rects', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.RectSpec, false), nullable: false, minVersion: 0 },
        { name: 'color', packedOffset: 8, packedBitOffset: 0, type: skia.mojom.SkColorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetVirtualKeyboardVisible
ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ax.mojom.UserInterface.SetVirtualKeyboardVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'is_visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ax.mojom.UserInterfacePtr = ax.mojom.UserInterfaceRemote;
ax.mojom.UserInterfaceRequest = ax.mojom.UserInterfacePendingReceiver;

