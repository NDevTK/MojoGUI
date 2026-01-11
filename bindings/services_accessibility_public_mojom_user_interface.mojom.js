// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_interface.mojom
// Module: ax.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
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
  darkenScreen(darken) {
    return this.$.darkenScreen(darken);
  }
  openSettingsSubpage(subpage) {
    return this.$.openSettingsSubpage(subpage);
  }
  showConfirmationDialog(title, description, cancelName) {
    return this.$.showConfirmationDialog(title, description, cancelName);
  }
  setFocusRings(focus_rings, at_type) {
    return this.$.setFocusRings(focus_rings, at_type);
  }
  setHighlights(rects, color) {
    return this.$.setHighlights(rects, color);
  }
  setVirtualKeyboardVisible(is_visible) {
    return this.$.setVirtualKeyboardVisible(is_visible);
  }
};

ax.mojom.UserInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UserInterface', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  darkenScreen(darken) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ax.mojom.UserInterface_DarkenScreen_ParamsSpec,
      null,
      [darken],
      false);
  }

  openSettingsSubpage(subpage) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec,
      null,
      [subpage],
      false);
  }

  showConfirmationDialog(title, description, cancelName) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec,
      ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParamsSpec,
      [title, description, cancelName],
      false);
  }

  setFocusRings(focus_rings, at_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ax.mojom.UserInterface_SetFocusRings_ParamsSpec,
      null,
      [focus_rings, at_type],
      false);
  }

  setHighlights(rects, color) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ax.mojom.UserInterface_SetHighlights_ParamsSpec,
      null,
      [rects, color],
      false);
  }

  setVirtualKeyboardVisible(is_visible) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec,
      null,
      [is_visible],
      false);
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

ax.mojom.UserInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UserInterface', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_DarkenScreen_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_SetFocusRings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_SetHighlights_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_DarkenScreen_ParamsSpec.$.structSpec);
          const result = this.impl.darkenScreen(params.darken);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec.$.structSpec);
          const result = this.impl.openSettingsSubpage(params.subpage);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec.$.structSpec);
          const result = this.impl.showConfirmationDialog(params.title, params.description, params.cancelName);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.UserInterface_ShowConfirmationDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_SetFocusRings_ParamsSpec.$.structSpec);
          const result = this.impl.setFocusRings(params.focus_rings, params.at_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_SetHighlights_ParamsSpec.$.structSpec);
          const result = this.impl.setHighlights(params.rects, params.color);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec.$.structSpec);
          const result = this.impl.setVirtualKeyboardVisible(params.is_visible);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ax.mojom.UserInterfaceReceiver = ax.mojom.UserInterfaceReceiver;

ax.mojom.UserInterfacePtr = ax.mojom.UserInterfaceRemote;
ax.mojom.UserInterfaceRequest = ax.mojom.UserInterfacePendingReceiver;

