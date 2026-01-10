// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/hid_preserving_bluetooth_state_controller.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};

ash.mojom.HidWarningDialogSourceSpec = { $: mojo.internal.Enum() };
ash.mojom.HidPreservingBluetoothStateController = {};
ash.mojom.HidPreservingBluetoothStateController.$interfaceName = 'ash.mojom.HidPreservingBluetoothStateController';
ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_ParamsSpec = { $: {} };

// Enum: HidWarningDialogSource
ash.mojom.HidWarningDialogSource = {
  kOsSettings: 0,
  kQuickSettings: 1,
};

// Interface: HidPreservingBluetoothStateController
mojo.internal.Struct(
    ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_ParamsSpec, 'ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_Params', [
      mojo.internal.StructField('source', 0, 0, ash.mojom.HidWarningDialogSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

ash.mojom.HidPreservingBluetoothStateControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.HidPreservingBluetoothStateControllerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.HidPreservingBluetoothStateController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.HidPreservingBluetoothStateControllerPendingReceiver,
      handle);
    this.$ = new ash.mojom.HidPreservingBluetoothStateControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.HidPreservingBluetoothStateControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  tryToSetBluetoothEnabledState(enabled, source) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_ParamsSpec,
      null,
      [enabled, source],
      false);
  }

};

ash.mojom.HidPreservingBluetoothStateController.getRemote = function() {
  let remote = new ash.mojom.HidPreservingBluetoothStateControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.HidPreservingBluetoothStateController',
    'context');
  return remote.$;
};

ash.mojom.HidPreservingBluetoothStateControllerReceiver = class {
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.tryToSetBluetoothEnabledState');
          const result = this.impl.tryToSetBluetoothEnabledState(params.enabled, params.source);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.HidPreservingBluetoothStateControllerReceiver = ash.mojom.HidPreservingBluetoothStateControllerReceiver;

ash.mojom.HidPreservingBluetoothStateControllerPtr = ash.mojom.HidPreservingBluetoothStateControllerRemote;
ash.mojom.HidPreservingBluetoothStateControllerRequest = ash.mojom.HidPreservingBluetoothStateControllerPendingReceiver;

