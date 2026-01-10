// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/user_input.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var ui = ui || {};
var gfx = gfx || {};

ax.mojom.SyntheticMouseEventButtonSpec = { $: mojo.internal.Enum() };
ax.mojom.SyntheticKeyEventSpec = { $: {} };
ax.mojom.SyntheticMouseEventSpec = { $: {} };
ax.mojom.UserInput = {};
ax.mojom.UserInput.$interfaceName = 'ax.mojom.UserInput';
ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec = { $: {} };
ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec = { $: {} };

// Enum: SyntheticMouseEventButton
ax.mojom.SyntheticMouseEventButton = {
  kLeft: 0,
  kMiddle: 1,
  kRight: 2,
  kBack: 3,
  kForward: 4,
};

// Struct: SyntheticKeyEvent
mojo.internal.Struct(
    ax.mojom.SyntheticKeyEventSpec, 'ax.mojom.SyntheticKeyEvent', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, ui.mojom.KeyDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('flags', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SyntheticMouseEvent
mojo.internal.Struct(
    ax.mojom.SyntheticMouseEventSpec, 'ax.mojom.SyntheticMouseEvent', [
      mojo.internal.StructField('type', 0, 0, ui.mojom.EventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('point', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mouse_button', 16, 0, ax.mojom.SyntheticMouseEventButtonSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('touch_accessibility_$flag', 24, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'touch_accessibility_$value', originalFieldName: 'touch_accessibility' }),
      mojo.internal.StructField('touch_accessibility_$value', 24, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'touch_accessibility_$flag', originalFieldName: 'touch_accessibility' }),
    ],
    [[0, 40]]);

// Interface: UserInput
mojo.internal.Struct(
    ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec, 'ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_Params', [
      mojo.internal.StructField('key_event', 0, 0, ax.mojom.SyntheticKeyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec, 'ax.mojom.UserInput_SendSyntheticMouseEvent_Params', [
      mojo.internal.StructField('mouse_event', 0, 0, ax.mojom.SyntheticMouseEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.UserInputPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.UserInputRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.UserInput';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.UserInputPendingReceiver,
      handle);
    this.$ = new ax.mojom.UserInputRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.UserInputRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendSyntheticKeyEventForShortcutOrNavigation(key_event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec,
      null,
      [key_event],
      false);
  }

  sendSyntheticMouseEvent(mouse_event) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec,
      null,
      [mouse_event],
      false);
  }

};

ax.mojom.UserInput.getRemote = function() {
  let remote = new ax.mojom.UserInputRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.UserInput',
    'context');
  return remote.$;
};

ax.mojom.UserInputReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: SendSyntheticKeyEventForShortcutOrNavigation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendSyntheticKeyEventForShortcutOrNavigation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SendSyntheticMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendSyntheticMouseEvent (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(ax.mojom.UserInput_SendSyntheticKeyEventForShortcutOrNavigation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendSyntheticKeyEventForShortcutOrNavigation');
          const result = this.impl.sendSyntheticKeyEventForShortcutOrNavigation(params.key_event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ax.mojom.UserInput_SendSyntheticMouseEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendSyntheticMouseEvent');
          const result = this.impl.sendSyntheticMouseEvent(params.mouse_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ax.mojom.UserInputReceiver = ax.mojom.UserInputReceiver;

ax.mojom.UserInputPtr = ax.mojom.UserInputRemote;
ax.mojom.UserInputRequest = ax.mojom.UserInputPendingReceiver;

