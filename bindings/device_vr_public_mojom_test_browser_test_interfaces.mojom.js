// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/test/browser_test_interfaces.mojom
// Module: device_test.mojom

'use strict';

// Module namespace
var device_test = device_test || {};
device_test.mojom = device_test.mojom || {};


// Enum: Eye
device_test.mojom.Eye = {
  LEFT: 0,
  RIGHT: 1,
  NONE: 2,
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

// Interface: XRTestHook
device_test.mojom.XRTestHook = {};

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
      null,
      [frame_data]);
  }

  waitGetDeviceConfig() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec,
      []);
  }

  waitGetPresentingPose() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec,
      []);
  }

  waitGetMagicWindowPose() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec,
      []);
  }

  waitGetControllerRoleForTrackedDeviceIndex(index) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec,
      [index]);
  }

  waitGetControllerData(index) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec,
      [index]);
  }

  waitGetEventData() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec,
      []);
  }

  waitGetCanCreateSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec,
      []);
  }

  waitGetVisibilityMask(view_index) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec,
      [view_index]);
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

// ParamsSpec for OnFrameSubmitted
device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.OnFrameSubmitted_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetDeviceConfig
device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetDeviceConfig_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetDeviceConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetPresentingPose
device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetPresentingPose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetPresentingPose_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetMagicWindowPose
device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetMagicWindowPose_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetMagicWindowPose_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetControllerRoleForTrackedDeviceIndex
device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetControllerRoleForTrackedDeviceIndex_Params',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetControllerRoleForTrackedDeviceIndex_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'role', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetControllerData
device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetControllerData_Params',
      packedSize: 16,
      fields: [
        { name: 'index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetControllerData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetEventData
device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetEventData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetEventData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetCanCreateSession
device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetCanCreateSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetCanCreateSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'can_create_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitGetVisibilityMask
device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetVisibilityMask_Params',
      packedSize: 16,
      fields: [
        { name: 'view_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

device_test.mojom.XRTestHook_WaitGetVisibilityMask_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRTestHook.WaitGetVisibilityMask_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device_test.mojom.XRTestHookPtr = device_test.mojom.XRTestHookRemote;
device_test.mojom.XRTestHookRequest = device_test.mojom.XRTestHookPendingReceiver;


// Interface: XRServiceTestHook
device_test.mojom.XRServiceTestHook = {};

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
      null,
      [hook]);
  }

  terminateDeviceServiceProcessForTesting() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec,
      null,
      []);
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

// ParamsSpec for SetTestHook
device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRServiceTestHook.SetTestHook_Params',
      packedSize: 16,
      fields: [
        { name: 'hook', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for TerminateDeviceServiceProcessForTesting
device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device_test.mojom.XRServiceTestHook.TerminateDeviceServiceProcessForTesting_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
device_test.mojom.XRServiceTestHookPtr = device_test.mojom.XRServiceTestHookRemote;
device_test.mojom.XRServiceTestHookRequest = device_test.mojom.XRServiceTestHookPendingReceiver;

