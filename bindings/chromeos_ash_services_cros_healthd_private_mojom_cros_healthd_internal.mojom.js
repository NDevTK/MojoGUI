// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/private/mojom/cros_healthd_internal.mojom
// Module: ash.cros_healthd.internal.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.internal = ash.cros_healthd.internal || {};
ash.cros_healthd.internal.mojom = ash.cros_healthd.internal.mojom || {};

ash.cros_healthd.internal.mojom.ConnectionTypeSpec = { $: mojo.internal.Enum() };
ash.cros_healthd.internal.mojom.TouchscreenDeviceSpec = { $: {} };
ash.cros_healthd.internal.mojom.InputDeviceSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector = {};
ash.cros_healthd.internal.mojom.ChromiumDataCollector.$interfaceName = 'ash.cros_healthd.internal.mojom.ChromiumDataCollector';
ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ResponseParamsSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ResponseParamsSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ResponseParamsSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec = { $: {} };
ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ResponseParamsSpec = { $: {} };

// Enum: ConnectionType
ash.cros_healthd.internal.mojom.ConnectionType = {
  kUnmappedEnumField: 0,
  kInternal: 1,
  kUSB: 2,
  kBluetooth: 3,
  kUnknown: 4,
};

// Struct: TouchscreenDevice
mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.TouchscreenDeviceSpec, 'ash.cros_healthd.internal.mojom.TouchscreenDevice', [
      mojo.internal.StructField('input_device', 0, 0, ash.cros_healthd.internal.mojom.InputDeviceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_points', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_stylus', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_stylus_garage_switch', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputDevice
mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.InputDeviceSpec, 'ash.cros_healthd.internal.mojom.InputDevice', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('kUnmappedEnumField', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ChromiumDataCollector
mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ResponseParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(ash.cros_healthd.internal.mojom.TouchscreenDeviceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ResponseParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ResponseParams', [
      mojo.internal.StructField('library_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_Params', [
      mojo.internal.StructField('state', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ResponseParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_Params', [
      mojo.internal.StructField('mute_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ResponseParamsSpec, 'ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.internal.mojom.ChromiumDataCollector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getTouchscreenDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ResponseParamsSpec,
      [],
      false);
  }

  getTouchpadLibraryName() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ResponseParamsSpec,
      [],
      false);
  }

  setPrivacyScreenState(state) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ResponseParamsSpec,
      [state],
      false);
  }

  dEPRECATED_SetAudioOutputMute(mute_on) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec,
      ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ResponseParamsSpec,
      [mute_on],
      false);
  }

};

ash.cros_healthd.internal.mojom.ChromiumDataCollector.getRemote = function() {
  let remote = new ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.internal.mojom.ChromiumDataCollector',
    'context');
  return remote.$;
};

ash.cros_healthd.internal.mojom.ChromiumDataCollectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: GetTouchscreenDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTouchscreenDevices (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetTouchpadLibraryName
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetTouchpadLibraryName (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetPrivacyScreenState
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPrivacyScreenState (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: DEPRECATED_SetAudioOutputMute
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DEPRECATED_SetAudioOutputMute (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTouchscreenDevices');
          const result = this.impl.getTouchscreenDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchscreenDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getTouchpadLibraryName');
          const result = this.impl.getTouchpadLibraryName();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.internal.mojom.ChromiumDataCollector_GetTouchpadLibraryName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPrivacyScreenState');
          const result = this.impl.setPrivacyScreenState(params.state);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.internal.mojom.ChromiumDataCollector_SetPrivacyScreenState_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.dEPRECATED_SetAudioOutputMute');
          const result = this.impl.dEPRECATED_SetAudioOutputMute(params.mute_on);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.internal.mojom.ChromiumDataCollector_DEPRECATED_SetAudioOutputMute_ResponseParamsSpec);
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

ash.cros_healthd.internal.mojom.ChromiumDataCollectorReceiver = ash.cros_healthd.internal.mojom.ChromiumDataCollectorReceiver;

ash.cros_healthd.internal.mojom.ChromiumDataCollectorPtr = ash.cros_healthd.internal.mojom.ChromiumDataCollectorRemote;
ash.cros_healthd.internal.mojom.ChromiumDataCollectorRequest = ash.cros_healthd.internal.mojom.ChromiumDataCollectorPendingReceiver;

