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
      mojo.internal.StructField('wake_lock', 0, 0, mojo.internal.InterfaceRequest(device.mojom.WakeLockSpec), null, false, 0, undefined),
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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.WakeLock',
    'context');
  return remote.$;
};

device.mojom.WakeLockReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = device.mojom.WakeLock_RequestWakeLock_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.requestWakeLock');
          const result = this.impl.requestWakeLock();
          break;
        }
        case 1: {
          const params = device.mojom.WakeLock_CancelWakeLock_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.cancelWakeLock');
          const result = this.impl.cancelWakeLock();
          break;
        }
        case 2: {
          const params = device.mojom.WakeLock_AddClient_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.addClient');
          const result = this.impl.addClient(params.wake_lock);
          break;
        }
        case 3: {
          const params = device.mojom.WakeLock_ChangeType_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.changeType');
          const result = this.impl.changeType(params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.WakeLock_ChangeType_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = device.mojom.WakeLock_HasWakeLockForTests_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.hasWakeLockForTests');
          const result = this.impl.hasWakeLockForTests();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.WakeLock_HasWakeLockForTests_ResponseParamsSpec);
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

device.mojom.WakeLockReceiver = device.mojom.WakeLockReceiver;

device.mojom.WakeLockPtr = device.mojom.WakeLockRemote;
device.mojom.WakeLockRequest = device.mojom.WakeLockPendingReceiver;

