// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/cellular_setup.mojom
// Module: ash.cellular_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};


// Enum: CarrierPortalStatus
ash.cellular_setup.mojom.CarrierPortalStatus = {
  kPortalFailedToLoad: 0,
  kPortalLoadedWithoutPaidUser: 1,
  kPortalLoadedButErrorOccurredDuringPayment: 2,
  kPortalLoadedAndUserCompletedPayment: 3,
};

// Enum: ActivationResult
ash.cellular_setup.mojom.ActivationResult = {
  kSuccessfullyStartedActivation: 0,
  kAlreadyActivated: 1,
  kFailedToActivate: 2,
};

// Struct: CellularMetadata
ash.cellular_setup.mojom.CellularMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.CellularMetadata',
      packedSize: 56,
      fields: [
        { name: 'payment_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'payment_post_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'carrier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'meid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'imei', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'mdn', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CarrierPortalHandler
ash.cellular_setup.mojom.CarrierPortalHandler = {};

ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.CarrierPortalHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.CarrierPortalHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.CarrierPortalHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.CarrierPortalHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCarrierPortalStatusChange(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec,
      null,
      [status]);
  }

};

ash.cellular_setup.mojom.CarrierPortalHandler.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.CarrierPortalHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.CarrierPortalHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnCarrierPortalStatusChange
ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.CarrierPortalHandler.OnCarrierPortalStatusChange_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cellular_setup.mojom.CarrierPortalHandlerPtr = ash.cellular_setup.mojom.CarrierPortalHandlerRemote;
ash.cellular_setup.mojom.CarrierPortalHandlerRequest = ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver;


// Interface: ActivationDelegate
ash.cellular_setup.mojom.ActivationDelegate = {};

ash.cellular_setup.mojom.ActivationDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.ActivationDelegateRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.ActivationDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.ActivationDelegatePendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.ActivationDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.ActivationDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onActivationStarted(metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec,
      null,
      [metadata]);
  }

  onActivationFinished(result) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec,
      null,
      [result]);
  }

};

ash.cellular_setup.mojom.ActivationDelegate.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.ActivationDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.ActivationDelegate',
    'context');
  return remote.$;
};

// ParamsSpec for OnActivationStarted
ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ActivationDelegate.OnActivationStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnActivationFinished
ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.ActivationDelegate.OnActivationFinished_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cellular_setup.mojom.ActivationDelegatePtr = ash.cellular_setup.mojom.ActivationDelegateRemote;
ash.cellular_setup.mojom.ActivationDelegateRequest = ash.cellular_setup.mojom.ActivationDelegatePendingReceiver;


// Interface: CellularSetup
ash.cellular_setup.mojom.CellularSetup = {};

ash.cellular_setup.mojom.CellularSetupPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cellular_setup.mojom.CellularSetupRemote = class {
  static get $interfaceName() {
    return 'ash.cellular_setup.mojom.CellularSetup';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cellular_setup.mojom.CellularSetupPendingReceiver,
      handle);
    this.$ = new ash.cellular_setup.mojom.CellularSetupRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cellular_setup.mojom.CellularSetupRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startActivation(delegate) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec,
      ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec,
      [delegate]);
  }

};

ash.cellular_setup.mojom.CellularSetup.getRemote = function() {
  let remote = new ash.cellular_setup.mojom.CellularSetupRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cellular_setup.mojom.CellularSetup',
    'context');
  return remote.$;
};

// ParamsSpec for StartActivation
ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.CellularSetup.StartActivation_Params',
      packedSize: 16,
      fields: [
        { name: 'delegate', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cellular_setup.mojom.CellularSetup.StartActivation_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cellular_setup.mojom.CellularSetupPtr = ash.cellular_setup.mojom.CellularSetupRemote;
ash.cellular_setup.mojom.CellularSetupRequest = ash.cellular_setup.mojom.CellularSetupPendingReceiver;

