// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/hid_preserving_bluetooth_state_controller.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};


// Enum: HidWarningDialogSource
ash.mojom.HidWarningDialogSource = {
  kOsSettings: 0,
  kQuickSettings: 1,
};
ash.mojom.HidWarningDialogSourceSpec = { $: mojo.internal.Enum() };

// Interface: HidPreservingBluetoothStateController
ash.mojom.HidPreservingBluetoothStateController = {};

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
      [enabled, source]);
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

// ParamsSpec for TryToSetBluetoothEnabledState
ash.mojom.HidPreservingBluetoothStateController_TryToSetBluetoothEnabledState_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.HidPreservingBluetoothStateController.TryToSetBluetoothEnabledState_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 4, packedBitOffset: 0, type: ash.mojom.HidWarningDialogSourceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.HidPreservingBluetoothStateControllerPtr = ash.mojom.HidPreservingBluetoothStateControllerRemote;
ash.mojom.HidPreservingBluetoothStateControllerRequest = ash.mojom.HidPreservingBluetoothStateControllerPendingReceiver;

