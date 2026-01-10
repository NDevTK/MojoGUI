// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/crosapi.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: Crosapi
crosapi.mojom.Crosapi = {};

crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindAccountManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.AccountManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindBrowserCdmFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindCfmServiceContext_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.cfm.mojom.CfmServiceContextRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindCrosDisplayConfigController_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.CrosDisplayConfigControllerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindDiagnosticsService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.DiagnosticsServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindDocumentScan_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.DocumentScanRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindInSessionAuth_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.auth.mojom.InSessionAuthRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindKeystoreService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.KeystoreServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindLocalPrinter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.LocalPrinterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindMachineLearningService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.MachineLearningServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindSensorHalClient_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorHalClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindHidManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindHidManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.HidManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindMediaSessionController_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerDebugRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindTelemetryManagementService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryManagementServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindTelemetryProbeService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryProbeServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.GuestOsSkForwarderFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.CrosapiPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.CrosapiRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Crosapi';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.CrosapiPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.CrosapiRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.CrosapiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindAccountManager(receiver) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec,
      null,
      [receiver]);
  }

  bindBrowserCdmFactory(receiver) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec,
      null,
      [receiver]);
  }

  bindCfmServiceContext(receiver) {
    // Ordinal: 142
    return this.proxy.sendMessage(
      142,  // ordinal
      crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec,
      null,
      [receiver]);
  }

  bindCrosDisplayConfigController(receiver) {
    // Ordinal: 93
    return this.proxy.sendMessage(
      93,  // ordinal
      crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec,
      null,
      [receiver]);
  }

  bindDiagnosticsService(receiver) {
    // Ordinal: 99
    return this.proxy.sendMessage(
      99,  // ordinal
      crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec,
      null,
      [receiver]);
  }

  bindDocumentScan(receiver) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec,
      null,
      [receiver]);
  }

  bindInSessionAuth(receiver) {
    // Ordinal: 96
    return this.proxy.sendMessage(
      96,  // ordinal
      crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec,
      null,
      [receiver]);
  }

  bindKeystoreService(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec,
      null,
      [receiver]);
  }

  bindLocalPrinter(receiver) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec,
      null,
      [receiver]);
  }

  bindMachineLearningService(receiver) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec,
      null,
      [receiver]);
  }

  bindSensorHalClient(receiver) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec,
      null,
      [receiver]);
  }

  bindHidManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.Crosapi_BindHidManager_ParamsSpec,
      null,
      [receiver]);
  }

  bindMediaSessionController(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec,
      null,
      [receiver]);
  }

  bindMediaSessionAudioFocus(receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec,
      null,
      [receiver]);
  }

  bindMediaSessionAudioFocusDebug(receiver) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec,
      null,
      [receiver]);
  }

  bindTelemetryDiagnosticRoutinesService(receiver) {
    // Ordinal: 115
    return this.proxy.sendMessage(
      115,  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec,
      null,
      [receiver]);
  }

  bindTelemetryManagementService(receiver) {
    // Ordinal: 129
    return this.proxy.sendMessage(
      129,  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec,
      null,
      [receiver]);
  }

  bindTelemetryProbeService(receiver) {
    // Ordinal: 97
    return this.proxy.sendMessage(
      97,  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec,
      null,
      [receiver]);
  }

  bindVideoCaptureDeviceFactory(receiver) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [receiver]);
  }

  bindGuestOsSkForwarderFactory(receiver) {
    // Ordinal: 123
    return this.proxy.sendMessage(
      123,  // ordinal
      crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec,
      null,
      [receiver]);
  }

};

crosapi.mojom.Crosapi.getRemote = function() {
  let remote = new crosapi.mojom.CrosapiRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Crosapi',
    'context');
  return remote.$;
};

// ParamsSpec for BindAccountManager
crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindAccountManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.AccountManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindBrowserCdmFactory
crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindBrowserCdmFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.GenericPendingReceiverSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindCfmServiceContext
crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindCfmServiceContext_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.cfm.mojom.CfmServiceContextRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindCrosDisplayConfigController
crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindCrosDisplayConfigController_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.CrosDisplayConfigControllerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindDiagnosticsService
crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindDiagnosticsService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.DiagnosticsServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindDocumentScan
crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindDocumentScan_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.DocumentScanRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindInSessionAuth
crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindInSessionAuth_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.auth.mojom.InSessionAuthRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindKeystoreService
crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindKeystoreService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.KeystoreServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindLocalPrinter
crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindLocalPrinter_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.LocalPrinterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMachineLearningService
crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindMachineLearningService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.MachineLearningServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindSensorHalClient
crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindSensorHalClient_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorHalClientRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindHidManager
crosapi.mojom.Crosapi_BindHidManager_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindHidManager_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(device.mojom.HidManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMediaSessionController
crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindMediaSessionController_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMediaSessionAudioFocus
crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindMediaSessionAudioFocus_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindMediaSessionAudioFocusDebug
crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindMediaSessionAudioFocusDebug_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerDebugRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTelemetryDiagnosticRoutinesService
crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindTelemetryDiagnosticRoutinesService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTelemetryManagementService
crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindTelemetryManagementService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryManagementServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindTelemetryProbeService
crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindTelemetryProbeService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryProbeServiceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindVideoCaptureDeviceFactory
crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindVideoCaptureDeviceFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BindGuestOsSkForwarderFactory
crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Crosapi.BindGuestOsSkForwarderFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(crosapi.mojom.GuestOsSkForwarderFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.CrosapiPtr = crosapi.mojom.CrosapiRemote;
crosapi.mojom.CrosapiRequest = crosapi.mojom.CrosapiPendingReceiver;

