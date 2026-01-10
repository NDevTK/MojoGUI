// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cellular_setup/public/mojom/cellular_setup.mojom
// Module: ash.cellular_setup.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cellular_setup = ash.cellular_setup || {};
ash.cellular_setup.mojom = ash.cellular_setup.mojom || {};
var url = url || {};

ash.cellular_setup.mojom.CarrierPortalStatusSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.ActivationResultSpec = { $: mojo.internal.Enum() };
ash.cellular_setup.mojom.CellularMetadataSpec = { $: {} };
ash.cellular_setup.mojom.CarrierPortalHandler = {};
ash.cellular_setup.mojom.CarrierPortalHandler.$interfaceName = 'ash.cellular_setup.mojom.CarrierPortalHandler';
ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ActivationDelegate = {};
ash.cellular_setup.mojom.ActivationDelegate.$interfaceName = 'ash.cellular_setup.mojom.ActivationDelegate';
ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.CellularSetup = {};
ash.cellular_setup.mojom.CellularSetup.$interfaceName = 'ash.cellular_setup.mojom.CellularSetup';
ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec = { $: {} };
ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec = { $: {} };

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
mojo.internal.Struct(
    ash.cellular_setup.mojom.CellularMetadataSpec, 'ash.cellular_setup.mojom.CellularMetadata', [
      mojo.internal.StructField('payment_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('payment_post_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('carrier', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('meid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('imei', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('mdn', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: CarrierPortalHandler
mojo.internal.Struct(
    ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_ParamsSpec, 'ash.cellular_setup.mojom.CarrierPortalHandler_OnCarrierPortalStatusChange_Params', [
      mojo.internal.StructField('status', 0, 0, ash.cellular_setup.mojom.CarrierPortalStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.cellular_setup.mojom.CarrierPortalHandlerPtr = ash.cellular_setup.mojom.CarrierPortalHandlerRemote;
ash.cellular_setup.mojom.CarrierPortalHandlerRequest = ash.cellular_setup.mojom.CarrierPortalHandlerPendingReceiver;


// Interface: ActivationDelegate
mojo.internal.Struct(
    ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_ParamsSpec, 'ash.cellular_setup.mojom.ActivationDelegate_OnActivationStarted_Params', [
      mojo.internal.StructField('metadata', 0, 0, ash.cellular_setup.mojom.CellularMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_ParamsSpec, 'ash.cellular_setup.mojom.ActivationDelegate_OnActivationFinished_Params', [
      mojo.internal.StructField('result', 0, 0, ash.cellular_setup.mojom.ActivationResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.cellular_setup.mojom.ActivationDelegatePtr = ash.cellular_setup.mojom.ActivationDelegateRemote;
ash.cellular_setup.mojom.ActivationDelegateRequest = ash.cellular_setup.mojom.ActivationDelegatePendingReceiver;


// Interface: CellularSetup
mojo.internal.Struct(
    ash.cellular_setup.mojom.CellularSetup_StartActivation_ParamsSpec, 'ash.cellular_setup.mojom.CellularSetup_StartActivation_Params', [
      mojo.internal.StructField('delegate', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.ActivationDelegateRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParamsSpec, 'ash.cellular_setup.mojom.CellularSetup_StartActivation_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.cellular_setup.mojom.CarrierPortalHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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

ash.cellular_setup.mojom.CellularSetupPtr = ash.cellular_setup.mojom.CellularSetupRemote;
ash.cellular_setup.mojom.CellularSetupRequest = ash.cellular_setup.mojom.CellularSetupPendingReceiver;

