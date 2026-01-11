// Auto-generated MojoJS binding
// Source: chromium_src/device/vr/public/mojom/test/browser_test_interfaces.mojom
// Module: device_test.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onFrameSubmitted(frame_data) {
    return this.$.onFrameSubmitted(frame_data);
  }
  waitGetDeviceConfig() {
    return this.$.waitGetDeviceConfig();
  }
  waitGetPresentingPose() {
    return this.$.waitGetPresentingPose();
  }
  waitGetMagicWindowPose() {
    return this.$.waitGetMagicWindowPose();
  }
  waitGetControllerRoleForTrackedDeviceIndex(index) {
    return this.$.waitGetControllerRoleForTrackedDeviceIndex(index);
  }
  waitGetControllerData(index) {
    return this.$.waitGetControllerData(index);
  }
  waitGetEventData() {
    return this.$.waitGetEventData();
  }
  waitGetCanCreateSession() {
    return this.$.waitGetCanCreateSession();
  }
  waitGetVisibilityMask(view_index) {
    return this.$.waitGetVisibilityMask(view_index);
  }
};

device_test.mojom.XRTestHookRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRTestHook', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFrameSubmitted(frame_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec,
      device_test.mojom.XRTestHook_OnFrameSubmitted_ResponseParamsSpec,
      [frame_data],
      false);
  }

  waitGetDeviceConfig() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetDeviceConfig_ResponseParamsSpec,
      [],
      false);
  }

  waitGetPresentingPose() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetPresentingPose_ResponseParamsSpec,
      [],
      false);
  }

  waitGetMagicWindowPose() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ResponseParamsSpec,
      [],
      false);
  }

  waitGetControllerRoleForTrackedDeviceIndex(index) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ResponseParamsSpec,
      [index],
      false);
  }

  waitGetControllerData(index) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetControllerData_ResponseParamsSpec,
      [index],
      false);
  }

  waitGetEventData() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetEventData_ResponseParamsSpec,
      [],
      false);
  }

  waitGetCanCreateSession() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec,
      device_test.mojom.XRTestHook_WaitGetCanCreateSession_ResponseParamsSpec,
      [],
      false);
  }

  waitGetVisibilityMask(view_index) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('XRTestHook', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_OnFrameSubmitted_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetDeviceConfig_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetPresentingPose_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetMagicWindowPose_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetControllerRoleForTrackedDeviceIndex_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetControllerData_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetEventData_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetCanCreateSession_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRTestHook_WaitGetVisibilityMask_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

device_test.mojom.XRTestHookReceiver = device_test.mojom.XRTestHookReceiver;

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
  setTestHook(hook) {
    return this.$.setTestHook(hook);
  }
  terminateDeviceServiceProcessForTesting() {
    return this.$.terminateDeviceServiceProcessForTesting();
  }
};

device_test.mojom.XRServiceTestHookRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('XRServiceTestHook', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setTestHook(hook) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec,
      device_test.mojom.XRServiceTestHook_SetTestHook_ResponseParamsSpec,
      [hook],
      false);
  }

  terminateDeviceServiceProcessForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('XRServiceTestHook', [
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
             decoder.decodeStructInline(device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(device_test.mojom.XRServiceTestHook_SetTestHook_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(device_test.mojom.XRServiceTestHook_TerminateDeviceServiceProcessForTesting_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

device_test.mojom.XRServiceTestHookReceiver = device_test.mojom.XRServiceTestHookReceiver;

device_test.mojom.XRServiceTestHookPtr = device_test.mojom.XRServiceTestHookRemote;
device_test.mojom.XRServiceTestHookRequest = device_test.mojom.XRServiceTestHookPendingReceiver;

