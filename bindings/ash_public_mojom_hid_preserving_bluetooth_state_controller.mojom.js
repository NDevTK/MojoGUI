// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/hid_preserving_bluetooth_state_controller.mojom
// Module: ash.mojom

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
  tryToSetBluetoothEnabledState(enabled, source) {
    return this.$.tryToSetBluetoothEnabledState(enabled, source);
  }
};

ash.mojom.HidPreservingBluetoothStateControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('HidPreservingBluetoothStateController', [
      { explicit: null },
    ]);
  }

  tryToSetBluetoothEnabledState(enabled, source) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('HidPreservingBluetoothStateController', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_ParamsSpec.$.structSpec);
          const result = this.impl.tryToSetBluetoothEnabledState(params.enabled, params.source);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.mojom.HidPreservingBluetoothStateControllerReceiver = ash.mojom.HidPreservingBluetoothStateControllerReceiver;

ash.mojom.HidPreservingBluetoothStateControllerPtr = ash.mojom.HidPreservingBluetoothStateControllerRemote;
ash.mojom.HidPreservingBluetoothStateControllerRequest = ash.mojom.HidPreservingBluetoothStateControllerPendingReceiver;

