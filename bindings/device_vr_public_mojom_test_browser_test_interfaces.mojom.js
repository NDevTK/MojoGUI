// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/test/browser_test_interfaces.mojom
// Module: device_test.mojom

'use strict';

// Module namespace
var device_test = device_test || {};
device_test.mojom = device_test.mojom || {};
var device = device || {};
var gfx = gfx || {};

device_test.mojom.EyeSpec = { $: mojo.internal.Enum() };
device_test.mojom.ControllerRoleSpec = { $: mojo.internal.Enum() };
device_test.mojom.EventTypeSpec = { $: mojo.internal.Enum() };
device_test.mojom.ColorSpec = { $: {} };
device_test.mojom.ViewDataSpec = { $: {} };
device_test.mojom.DeviceConfigSpec = { $: {} };
device_test.mojom.ControllerAxisDataSpec = { $: {} };
device_test.mojom.ControllerFrameDataSpec = { $: {} };
device_test.mojom.EventDataSpec = { $: {} };
device_test.mojom.XRVisibilityMaskSpec = { $: {} };
device_test.mojom.XRTestHook = {};
device_test.mojom.XRTestHook.$interfaceName = 'device_test.mojom.XRTestHook';
device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec = { $: {} };
device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec = { $: {} };
device_test.mojom.XRServiceTestHook = {};
device_test.mojom.XRServiceTestHook.$interfaceName = 'device_test.mojom.XRServiceTestHook';
device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec = { $: {} };
device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec = { $: {} };
device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec = { $: {} };
device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec = { $: {} };

// Enum: Eye
device_test.mojom.Eye = {
  LEFT: 1,
  RIGHT: 2,
  NONE: 3,
};

// Enum: ControllerRole
device_test.mojom.ControllerRole = {
  kControllerRoleInvalid: 0,
  kControllerRoleLeft: 1,
  kControllerRoleRight: 2,
  kControllerRoleVoice: 3,
};

// Enum: EventType
device_test.mojom.EventType = {
  kSessionLost: 0,
  kVisibilityVisibleBlurred: 1,
  kInstanceLost: 2,
  kInteractionProfileChanged: 3,
  kNoEvent: 4,
};

// Struct: Color
mojo.internal.Struct(
    device_test.mojom.ColorSpec, 'device_test.mojom.Color', [
      mojo.internal.StructField('r', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('g', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('b', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('a', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ViewData
mojo.internal.Struct(
    device_test.mojom.ViewDataSpec, 'device_test.mojom.ViewData', [
      mojo.internal.StructField('color', 0, 0, device_test.mojom.ColorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('eye', 8, 0, device_test.mojom.EyeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('viewport', 16, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DeviceConfig
mojo.internal.Struct(
    device_test.mojom.DeviceConfigSpec, 'device_test.mojom.DeviceConfig', [
      mojo.internal.StructField('interpupillary_distance', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ControllerAxisData
mojo.internal.Struct(
    device_test.mojom.ControllerAxisDataSpec, 'device_test.mojom.ControllerAxisData', [
      mojo.internal.StructField('x', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('axis_type', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ControllerFrameData
mojo.internal.Struct(
    device_test.mojom.ControllerFrameDataSpec, 'device_test.mojom.ControllerFrameData', [
      mojo.internal.StructField('buttons_pressed', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('buttons_touched', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('supported_buttons', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('axis_data', 24, 0, mojo.internal.Array(device_test.mojom.ControllerAxisDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pose_data', 32, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('role', 40, 0, device_test.mojom.ControllerRoleSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('hand_data', 48, 0, device.mojom.XRHandTrackingDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('packet_number', 56, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_valid', 60, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: EventData
mojo.internal.Struct(
    device_test.mojom.EventDataSpec, 'device_test.mojom.EventData', [
      mojo.internal.StructField('type', 0, 0, device_test.mojom.EventTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('interaction_profile', 8, 0, device.mojom.OpenXrInteractionProfileTypeSpec.$, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: XRVisibilityMask
mojo.internal.Struct(
    device_test.mojom.XRVisibilityMaskSpec, 'device_test.mojom.XRVisibilityMask', [
      mojo.internal.StructField('vertices', 0, 0, mojo.internal.Array(mojo.internal.Float, false), null, false, 0, undefined),
      mojo.internal.StructField('indices', 8, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: XRTestHook
mojo.internal.Struct(
    device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec, 'device_test.mojom.XRTestHook_OnFrameSubmitted_Params', [
      mojo.internal.StructField('frame_data', 0, 0, mojo.internal.Array(device_test.mojom.ViewDataSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec, 'device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetDeviceConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParams', [
      mojo.internal.StructField('config', 0, 0, device_test.mojom.DeviceConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetPresentingPose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetMagicWindowPose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParams', [
      mojo.internal.StructField('role', 0, 0, device_test.mojom.ControllerRoleSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerData_Params', [
      mojo.internal.StructField('index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, device_test.mojom.ControllerFrameDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetEventData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetEventData_ResponseParams', [
      mojo.internal.StructField('data', 0, 0, device_test.mojom.EventDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetCanCreateSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParams', [
      mojo.internal.StructField('can_create_session', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec, 'device_test.mojom.XRTestHook_WaitGetVisibilityMask_Params', [
      mojo.internal.StructField('view_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec, 'device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParams', [
      mojo.internal.StructField('mask', 0, 0, device_test.mojom.XRVisibilityMaskSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

device_test.mojom.XRTestHookPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device_test.mojom.XRTestHookRemote = class {
  static get $interfaceName() {
    return 'device_test.mojom.XRTestHook';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device_test.mojom.XRTestHookPendingReceiver,
      handle);
    this.$ = new device_test.mojom.XRTestHookRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device_test.mojom.XRTestHookRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFrameSubmitted(frame_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec,
      device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec,
      [frame_data],
      false);
  }

  waitGetDeviceConfig() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec,
      [],
      false);
  }

  waitGetPresentingPose() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec,
      [],
      false);
  }

  waitGetMagicWindowPose() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec,
      [],
      false);
  }

  waitGetControllerRoleForTrackedDeviceIndex(index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec,
      [index],
      false);
  }

  waitGetControllerData(index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec,
      [index],
      false);
  }

  waitGetEventData() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec,
      [],
      false);
  }

  waitGetCanCreateSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec,
      [],
      false);
  }

  waitGetVisibilityMask(view_index) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec,
      [view_index],
      false);
  }

};

device_test.mojom.XRTestHook.getRemote = function() {
  let remote = new device_test.mojom.XRTestHookRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device_test.mojom.XRTestHook',
    'context');
  return remote.$;
};

device_test.mojom.XRTestHookReceiver = class {
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
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
        
        // Try Method 0: OnFrameSubmitted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameSubmitted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: WaitGetDeviceConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetDeviceConfig (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: WaitGetPresentingPose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetPresentingPose (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: WaitGetMagicWindowPose
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetMagicWindowPose (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: WaitGetControllerRoleForTrackedDeviceIndex
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetControllerRoleForTrackedDeviceIndex (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: WaitGetControllerData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetControllerData (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: WaitGetEventData
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetEventData (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: WaitGetCanCreateSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetCanCreateSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: WaitGetVisibilityMask
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WaitGetVisibilityMask (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onFrameSubmitted');
          const result = this.impl.onFrameSubmitted(params.frame_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetDeviceConfig');
          const result = this.impl.waitGetDeviceConfig();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetPresentingPose');
          const result = this.impl.waitGetPresentingPose();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetMagicWindowPose');
          const result = this.impl.waitGetMagicWindowPose();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetControllerRoleForTrackedDeviceIndex');
          const result = this.impl.waitGetControllerRoleForTrackedDeviceIndex(params.index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetControllerData');
          const result = this.impl.waitGetControllerData(params.index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetEventData');
          const result = this.impl.waitGetEventData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetCanCreateSession');
          const result = this.impl.waitGetCanCreateSession();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.waitGetVisibilityMask');
          const result = this.impl.waitGetVisibilityMask(params.view_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec);
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

device_test.mojom.XRTestHookReceiver = device_test.mojom.XRTestHookReceiver;

device_test.mojom.XRTestHookPtr = device_test.mojom.XRTestHookRemote;
device_test.mojom.XRTestHookRequest = device_test.mojom.XRTestHookPendingReceiver;


// Interface: XRServiceTestHook
mojo.internal.Struct(
    device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec, 'device_test.mojom.XRServiceTestHook_SetTestHook_Params', [
      mojo.internal.StructField('hook', 0, 0, mojo.internal.InterfaceProxy(device_test.mojom.XRTestHookSpec), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec, 'device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec, 'device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec, 'device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParams', [
    ],
    [[0, 8]]);

device_test.mojom.XRServiceTestHookPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device_test.mojom.XRServiceTestHookRemote = class {
  static get $interfaceName() {
    return 'device_test.mojom.XRServiceTestHook';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device_test.mojom.XRServiceTestHookPendingReceiver,
      handle);
    this.$ = new device_test.mojom.XRServiceTestHookRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device_test.mojom.XRServiceTestHookRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setTestHook(hook) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec,
      device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec,
      [hook],
      false);
  }

  terminateDeviceServiceProcessForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec,
      device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec,
      [],
      false);
  }

};

device_test.mojom.XRServiceTestHook.getRemote = function() {
  let remote = new device_test.mojom.XRServiceTestHookRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device_test.mojom.XRServiceTestHook',
    'context');
  return remote.$;
};

device_test.mojom.XRServiceTestHookReceiver = class {
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
        
        // Try Method 0: SetTestHook
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTestHook (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: TerminateDeviceServiceProcessForTesting
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> TerminateDeviceServiceProcessForTesting (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTestHook');
          const result = this.impl.setTestHook(params.hook);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.terminateDeviceServiceProcessForTesting');
          const result = this.impl.terminateDeviceServiceProcessForTesting();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ResponseParamsSpec);
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

device_test.mojom.XRServiceTestHookReceiver = device_test.mojom.XRServiceTestHookReceiver;

device_test.mojom.XRServiceTestHookPtr = device_test.mojom.XRServiceTestHookRemote;
device_test.mojom.XRServiceTestHookRequest = device_test.mojom.XRServiceTestHookPendingReceiver;

