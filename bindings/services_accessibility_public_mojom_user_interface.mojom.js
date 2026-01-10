// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_interface.mojom
// Module: ax.mojom

'use strict';

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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DarkenScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_DarkenScreen_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DarkenScreen (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OpenSettingsSubpage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenSettingsSubpage (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ShowConfirmationDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowConfirmationDialog (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetFocusRings
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_SetFocusRings_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFocusRings (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: SetHighlights
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_SetHighlights_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHighlights (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: SetVirtualKeyboardVisible
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVirtualKeyboardVisible (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
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
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_DarkenScreen_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.darkenScreen');
          const result = this.impl.darkenScreen(params.darken);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_OpenSettingsSubpage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.openSettingsSubpage');
          const result = this.impl.openSettingsSubpage(params.subpage);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_ShowConfirmationDialog_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.showConfirmationDialog');
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
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_SetFocusRings_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setFocusRings');
          const result = this.impl.setFocusRings(params.focus_rings, params.at_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_SetHighlights_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setHighlights');
          const result = this.impl.setHighlights(params.rects, params.color);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ax.mojom.UserInterface_SetVirtualKeyboardVisible_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setVirtualKeyboardVisible');
          const result = this.impl.setVirtualKeyboardVisible(params.is_visible);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.UserInterfaceReceiver = ax.mojom.UserInterfaceReceiver;

ax.mojom.UserInterfacePtr = ax.mojom.UserInterfaceRemote;
ax.mojom.UserInterfaceRequest = ax.mojom.UserInterfacePendingReceiver;

