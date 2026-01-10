// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/login/mojom/screens_oobe.mojom
// Module: ash.screens_oobe.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.screens_oobe = ash.screens_oobe || {};
ash.screens_oobe.mojom = ash.screens_oobe.mojom || {};


// Enum: ConsumerUpdateStep
ash.screens_oobe.mojom.ConsumerUpdateStep = {
  kCheckingForUpdate: 0,
  kUpdateInProgress: 1,
  kRestartInProgress: 2,
  kManualReboot: 3,
  kCellularPermission: 4,
};
ash.screens_oobe.mojom.ConsumerUpdateStepSpec = { $: mojo.internal.Enum() };

// Interface: ConsumerUpdatePageHandler
ash.screens_oobe.mojom.ConsumerUpdatePageHandler = {};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeclineCellularClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec,
      null,
      []);
  }

  onAcceptCellularClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec,
      null,
      []);
  }

  onSkipClicked() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec,
      null,
      []);
  }

  onBackClicked() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec,
      null,
      []);
  }

};

ash.screens_oobe.mojom.ConsumerUpdatePageHandler.getRemote = function() {
  let remote = new ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_oobe.mojom.ConsumerUpdatePageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeclineCellularClicked
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnDeclineCellularClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler.OnDeclineCellularClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnAcceptCellularClicked
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnAcceptCellularClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler.OnAcceptCellularClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSkipClicked
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnSkipClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler.OnSkipClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnBackClicked
ash.screens_oobe.mojom.ConsumerUpdatePageHandler_OnBackClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePageHandler.OnBackClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPtr = ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRemote;
ash.screens_oobe.mojom.ConsumerUpdatePageHandlerRequest = ash.screens_oobe.mojom.ConsumerUpdatePageHandlerPendingReceiver;


// Interface: ConsumerUpdatePage
ash.screens_oobe.mojom.ConsumerUpdatePage = {};

ash.screens_oobe.mojom.ConsumerUpdatePagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageRemote = class {
  static get $interfaceName() {
    return 'ash.screens_oobe.mojom.ConsumerUpdatePage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_oobe.mojom.ConsumerUpdatePagePendingReceiver,
      handle);
    this.$ = new ash.screens_oobe.mojom.ConsumerUpdatePageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_oobe.mojom.ConsumerUpdatePageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  showSkipButton() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec,
      null,
      []);
  }

  setLowBatteryWarningVisible(visible) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec,
      null,
      [visible]);
  }

  setScreenStep(step) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec,
      null,
      [step]);
  }

  setUpdateStatusMessage(percent, percent_message, time_left_message) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec,
      null,
      [percent, percent_message, time_left_message]);
  }

  setAutoTransition(enabled) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec,
      null,
      [enabled]);
  }

};

ash.screens_oobe.mojom.ConsumerUpdatePage.getRemote = function() {
  let remote = new ash.screens_oobe.mojom.ConsumerUpdatePageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_oobe.mojom.ConsumerUpdatePage',
    'context');
  return remote.$;
};

// ParamsSpec for ShowSkipButton
ash.screens_oobe.mojom.ConsumerUpdatePage_ShowSkipButton_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePage.ShowSkipButton_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetLowBatteryWarningVisible
ash.screens_oobe.mojom.ConsumerUpdatePage_SetLowBatteryWarningVisible_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePage.SetLowBatteryWarningVisible_Params',
      packedSize: 16,
      fields: [
        { name: 'visible', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScreenStep
ash.screens_oobe.mojom.ConsumerUpdatePage_SetScreenStep_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePage.SetScreenStep_Params',
      packedSize: 16,
      fields: [
        { name: 'step', packedOffset: 0, packedBitOffset: 0, type: ash.screens_oobe.mojom.ConsumerUpdateStepSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUpdateStatusMessage
ash.screens_oobe.mojom.ConsumerUpdatePage_SetUpdateStatusMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePage.SetUpdateStatusMessage_Params',
      packedSize: 32,
      fields: [
        { name: 'percent', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'percent_message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'time_left_message', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetAutoTransition
ash.screens_oobe.mojom.ConsumerUpdatePage_SetAutoTransition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.ConsumerUpdatePage.SetAutoTransition_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.screens_oobe.mojom.ConsumerUpdatePagePtr = ash.screens_oobe.mojom.ConsumerUpdatePageRemote;
ash.screens_oobe.mojom.ConsumerUpdatePageRequest = ash.screens_oobe.mojom.ConsumerUpdatePagePendingReceiver;


// Interface: PackagedLicensePageHandler
ash.screens_oobe.mojom.PackagedLicensePageHandler = {};

ash.screens_oobe.mojom.PackagedLicensePageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.screens_oobe.mojom.PackagedLicensePageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.screens_oobe.mojom.PackagedLicensePageHandlerPendingReceiver,
      handle);
    this.$ = new ash.screens_oobe.mojom.PackagedLicensePageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.screens_oobe.mojom.PackagedLicensePageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDontEnrollClicked() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec,
      null,
      []);
  }

  onEnrollClicked() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec,
      null,
      []);
  }

};

ash.screens_oobe.mojom.PackagedLicensePageHandler.getRemote = function() {
  let remote = new ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.screens_oobe.mojom.PackagedLicensePageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for OnDontEnrollClicked
ash.screens_oobe.mojom.PackagedLicensePageHandler_OnDontEnrollClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.PackagedLicensePageHandler.OnDontEnrollClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnEnrollClicked
ash.screens_oobe.mojom.PackagedLicensePageHandler_OnEnrollClicked_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.screens_oobe.mojom.PackagedLicensePageHandler.OnEnrollClicked_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.screens_oobe.mojom.PackagedLicensePageHandlerPtr = ash.screens_oobe.mojom.PackagedLicensePageHandlerRemote;
ash.screens_oobe.mojom.PackagedLicensePageHandlerRequest = ash.screens_oobe.mojom.PackagedLicensePageHandlerPendingReceiver;

