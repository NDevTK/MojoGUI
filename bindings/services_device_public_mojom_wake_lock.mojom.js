// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/wake_lock.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


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
      device.mojom.WakeLock_RequestWakeLock_ParamsSpec.$,
      null,
      []);
  }

  cancelWakeLock() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.WakeLock_CancelWakeLock_ParamsSpec.$,
      null,
      []);
  }

  addClient(wake_lock) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      device.mojom.WakeLock_AddClient_ParamsSpec.$,
      null,
      [wake_lock]);
  }

  changeType(type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      device.mojom.WakeLock_ChangeType_ParamsSpec.$,
      device.mojom.WakeLock_ChangeType_ResponseParamsSpec.$,
      [type]);
  }

  hasWakeLockForTests() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      device.mojom.WakeLock_HasWakeLockForTests_ParamsSpec.$,
      device.mojom.WakeLock_HasWakeLockForTests_ResponseParamsSpec.$,
      []);
  }

};

device.mojom.WakeLock.getRemote = function() {
  let remote = new device.mojom.WakeLockRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLock',
    'context');
  return remote.$;
}};

// ParamsSpec for RequestWakeLock
device.mojom.WakeLock_RequestWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLock.RequestWakeLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for CancelWakeLock
device.mojom.WakeLock_CancelWakeLock_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLock.CancelWakeLock_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for AddClient
device.mojom.WakeLock_AddClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLock.AddClient_Params',
      packedSize: 16,
      fields: [
        { name: 'wake_lock', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for ChangeType
device.mojom.WakeLock_ChangeType_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLock.ChangeType_Params',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

device.mojom.WakeLock_ChangeType_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLock.ChangeType_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// ParamsSpec for HasWakeLockForTests
device.mojom.WakeLock_HasWakeLockForTests_ParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLock.HasWakeLockForTests_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
}};

device.mojom.WakeLock_HasWakeLockForTests_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.WakeLock.HasWakeLockForTests_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
}};

// Legacy compatibility
device.mojom.WakeLockPtr = device.mojom.WakeLockRemote;
device.mojom.WakeLockRequest = device.mojom.WakeLockPendingReceiver;

