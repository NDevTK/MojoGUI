// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/screen_orientation.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.ScreenOrientation = {};
device.mojom.ScreenOrientation.$interfaceName = 'device.mojom.ScreenOrientation';
device.mojom.ScreenOrientation_LockOrientation_ParamsSpec = { $: {} };
device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec = { $: {} };
device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec = { $: {} };
device.mojom.ScreenOrientationListener = {};
device.mojom.ScreenOrientationListener.$interfaceName = 'device.mojom.ScreenOrientationListener';
device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec = { $: {} };
device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec = { $: {} };

// Interface: ScreenOrientation
mojo.internal.Struct(
    device.mojom.ScreenOrientation_LockOrientation_ParamsSpec, 'device.mojom.ScreenOrientation_LockOrientation_Params', [
      mojo.internal.StructField('orientation', 0, 0, device.mojom.ScreenOrientationLockTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec, 'device.mojom.ScreenOrientation_LockOrientation_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, device.mojom.ScreenOrientationLockResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec, 'device.mojom.ScreenOrientation_UnlockOrientation_Params', [
    ],
    [[0, 8]]);

device.mojom.ScreenOrientationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.ScreenOrientationRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ScreenOrientation';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.ScreenOrientationPendingReceiver,
      handle);
    this.$ = new device.mojom.ScreenOrientationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.ScreenOrientationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  lockOrientation(orientation) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.ScreenOrientation_LockOrientation_ParamsSpec,
      device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec,
      [orientation],
      false);
  }

  unlockOrientation() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec,
      null,
      [],
      false);
  }

};

device.mojom.ScreenOrientation.getRemote = function() {
  let remote = new device.mojom.ScreenOrientationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ScreenOrientation',
    'context');
  return remote.$;
};

device.mojom.ScreenOrientationReceiver = class {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: LockOrientation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.ScreenOrientation_LockOrientation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LockOrientation (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: UnlockOrientation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnlockOrientation (1)');
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
          const params = decoder.decodeStruct(device.mojom.ScreenOrientation_LockOrientation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.lockOrientation');
          const result = this.impl.lockOrientation(params.orientation);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ScreenOrientation_LockOrientation_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(device.mojom.ScreenOrientation_UnlockOrientation_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.unlockOrientation');
          const result = this.impl.unlockOrientation();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

device.mojom.ScreenOrientationReceiver = device.mojom.ScreenOrientationReceiver;

device.mojom.ScreenOrientationPtr = device.mojom.ScreenOrientationRemote;
device.mojom.ScreenOrientationRequest = device.mojom.ScreenOrientationPendingReceiver;


// Interface: ScreenOrientationListener
mojo.internal.Struct(
    device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec, 'device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec, 'device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

device.mojom.ScreenOrientationListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

device.mojom.ScreenOrientationListenerRemote = class {
  static get $interfaceName() {
    return 'device.mojom.ScreenOrientationListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      device.mojom.ScreenOrientationListenerPendingReceiver,
      handle);
    this.$ = new device.mojom.ScreenOrientationListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

device.mojom.ScreenOrientationListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isAutoRotateEnabledByUser() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec,
      device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec,
      [],
      false);
  }

};

device.mojom.ScreenOrientationListener.getRemote = function() {
  let remote = new device.mojom.ScreenOrientationListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'device.mojom.ScreenOrientationListener',
    'context');
  return remote.$;
};

device.mojom.ScreenOrientationListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: IsAutoRotateEnabledByUser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsAutoRotateEnabledByUser (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isAutoRotateEnabledByUser');
          const result = this.impl.isAutoRotateEnabledByUser();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, device.mojom.ScreenOrientationListener_IsAutoRotateEnabledByUser_ResponseParamsSpec);
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

device.mojom.ScreenOrientationListenerReceiver = device.mojom.ScreenOrientationListenerReceiver;

device.mojom.ScreenOrientationListenerPtr = device.mojom.ScreenOrientationListenerRemote;
device.mojom.ScreenOrientationListenerRequest = device.mojom.ScreenOrientationListenerPendingReceiver;

