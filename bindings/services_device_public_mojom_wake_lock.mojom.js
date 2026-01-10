// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.WakeLockTypeSpec = { $: mojo.internal.Enum() };
device.mojom.WakeLockReasonSpec = { $: mojo.internal.Enum() };
device.mojom.WakeLock = {};
device.mojom.WakeLock.$interfaceName = 'device.mojom.WakeLock';
device.mojom.WakeLock_RequestWakeLock_ParamsSpec = { $: {} };
device.mojom.WakeLock_CancelWakeLock_ParamsSpec = { $: {} };
device.mojom.WakeLock_AddClient_ParamsSpec = { $: {} };
device.mojom.WakeLock_ChangeType_ParamsSpec = { $: {} };
device.mojom.WakeLock_ChangeType_ResponseParamsSpec = { $: {} };
device.mojom.WakeLock_HasWakeLockForTests_ParamsSpec = { $: {} };
device.mojom.WakeLock_HasWakeLockForTests_ResponseParamsSpec = { $: {} };

// Enum: WakeLockType
device.mojom.WakeLockType = {
  kPreventAppSuspension: 0,
  kPreventDisplaySleep: 1,
  kPreventDisplaySleepAllowDimming: 2,
};

// Enum: WakeLockReason
device.mojom.WakeLockReason = {
  kAudioPlayback: 0,
  kVideoPlayback: 1,
  kOther: 2,
};

// Interface: WakeLock
mojo.internal.Struct(
    device.mojom.WakeLock_RequestWakeLock_ParamsSpec, 'device.mojom.WakeLock_RequestWakeLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.WakeLock_CancelWakeLock_ParamsSpec, 'device.mojom.WakeLock_CancelWakeLock_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.WakeLock_AddClient_ParamsSpec, 'device.mojom.WakeLock_AddClient_Params', [
      mojo.internal.StructField('wake_lock', 0, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.WakeLock_ChangeType_ParamsSpec, 'device.mojom.WakeLock_ChangeType_Params', [
      mojo.internal.StructField('type', 0, 0, device.mojom.WakeLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.WakeLock_ChangeType_ResponseParamsSpec, 'device.mojom.WakeLock_ChangeType_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.WakeLock_HasWakeLockForTests_ParamsSpec, 'device.mojom.WakeLock_HasWakeLockForTests_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.WakeLock_HasWakeLockForTests_ResponseParamsSpec, 'device.mojom.WakeLock_HasWakeLockForTests_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.WakeLockPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.WakeLockRemote = class {
  static get $interfaceName() {
    return 'device.mojom.WakeLock';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.WakeLockPendingReceiver,
      handle);
    this.$ = new device.mojom.WakeLockRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.WakeLockRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestWakeLock() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.WakeLock_RequestWakeLock_ParamsSpec,
      null,
      [],
      false);
  }

  cancelWakeLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.WakeLock_CancelWakeLock_ParamsSpec,
      null,
      [],
      false);
  }

  addClient(wake_lock) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.WakeLock_AddClient_ParamsSpec,
      null,
      [wake_lock],
      false);
  }

  changeType(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.WakeLock_ChangeType_ParamsSpec,
      device.mojom.WakeLock_ChangeType_ResponseParamsSpec,
      [type],
      false);
  }

  hasWakeLockForTests() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.WakeLock_HasWakeLockForTests_ParamsSpec,
      device.mojom.WakeLock_HasWakeLockForTests_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.WakeLock.getRemote = function() {
  let remote = new device.mojom.WakeLockRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'device.mojom.WakeLock',
    'context');
  return remote.$;
};

device.mojom.WakeLockPtr = device.mojom.WakeLockRemote;
device.mojom.WakeLockRequest = device.mojom.WakeLockPendingReceiver;

