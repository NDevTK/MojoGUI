// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/test/browser_test_interfaces.mojom
// Module: device_test.mojom

'use strict';

// Module namespace
var device_test = device_test || {};
device_test.mojom = device_test.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
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
      mojo.internal.StructField('packet_number', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('buttons_pressed', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('buttons_touched', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('supported_buttons', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('axis_data', 32, 0, mojo.internal.Array(device_test.mojom.ControllerAxisData, 5Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('pose_data', 40, 0, gfx.mojom.TransformSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('role', 48, 0, device_test.mojom.ControllerRoleSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('hand_data', 56, 0, device.mojom.XRHandTrackingDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('is_valid', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 80]]);

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
      mojo.internal.StructField('vertices', 0, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
      mojo.internal.StructField('indices', 8, 0, mojo.internal.Array(mojo.internal.Pointer, false), null, false, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'device_test.mojom.XRTestHook',
    'context');
  return remote.$;
};

device_test.mojom.XRTestHookPtr = device_test.mojom.XRTestHookRemote;
device_test.mojom.XRTestHookRequest = device_test.mojom.XRTestHookPendingReceiver;


// Interface: XRServiceTestHook
mojo.internal.Struct(
    device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec, 'device_test.mojom.XRServiceTestHook_SetTestHook_Params', [
      mojo.internal.StructField('hook', 0, 0, mojo.internal.InterfaceProxy(device_test.mojom.XRTestHookRemote), null, true, 0, undefined),
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'device_test.mojom.XRServiceTestHook',
    'context');
  return remote.$;
};

device_test.mojom.XRServiceTestHookPtr = device_test.mojom.XRServiceTestHookRemote;
device_test.mojom.XRServiceTestHookRequest = device_test.mojom.XRServiceTestHookPendingReceiver;

