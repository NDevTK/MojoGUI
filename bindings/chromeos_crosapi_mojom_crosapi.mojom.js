// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/crosapi.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var chromeos = chromeos || {};
var mojo_base = mojo_base || {};
var device = device || {};
var media_session = media_session || {};

crosapi.mojom.Crosapi = {};
crosapi.mojom.Crosapi.$interfaceName = 'crosapi.mojom.Crosapi';
crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindHidManager_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec = { $: {} };
crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec = { $: {} };

// Interface: Crosapi
mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec, 'crosapi.mojom.Crosapi_BindAccountManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.AccountManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec, 'crosapi.mojom.Crosapi_BindBrowserCdmFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo_base.mojom.GenericPendingReceiverSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec, 'crosapi.mojom.Crosapi_BindCfmServiceContext_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.cfm.mojom.CfmServiceContextRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec, 'crosapi.mojom.Crosapi_BindCrosDisplayConfigController_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.CrosDisplayConfigControllerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec, 'crosapi.mojom.Crosapi_BindDiagnosticsService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.DiagnosticsServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec, 'crosapi.mojom.Crosapi_BindDocumentScan_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.DocumentScanRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec, 'crosapi.mojom.Crosapi_BindInSessionAuth_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.auth.mojom.InSessionAuthRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec, 'crosapi.mojom.Crosapi_BindKeystoreService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.KeystoreServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec, 'crosapi.mojom.Crosapi_BindLocalPrinter_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.LocalPrinterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec, 'crosapi.mojom.Crosapi_BindMachineLearningService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(chromeos.machine_learning.mojom.MachineLearningServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec, 'crosapi.mojom.Crosapi_BindSensorHalClient_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindHidManager_ParamsSpec, 'crosapi.mojom.Crosapi_BindHidManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(device.mojom.HidManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec, 'crosapi.mojom.Crosapi_BindMediaSessionController_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.MediaControllerManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec, 'crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec, 'crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media_session.mojom.AudioFocusManagerDebugRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec, 'crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryDiagnosticRoutinesServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec, 'crosapi.mojom.Crosapi_BindTelemetryManagementService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryManagementServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec, 'crosapi.mojom.Crosapi_BindTelemetryProbeService_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.TelemetryProbeServiceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec, 'crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.VideoCaptureDeviceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec, 'crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(crosapi.mojom.GuestOsSkForwarderFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver],
      false);
  }

  bindBrowserCdmFactory(receiver) {
    // Ordinal: 47
    return this.proxy.sendMessage(
      47,  // ordinal
      crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCfmServiceContext(receiver) {
    // Ordinal: 142
    return this.proxy.sendMessage(
      142,  // ordinal
      crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCrosDisplayConfigController(receiver) {
    // Ordinal: 93
    return this.proxy.sendMessage(
      93,  // ordinal
      crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDiagnosticsService(receiver) {
    // Ordinal: 99
    return this.proxy.sendMessage(
      99,  // ordinal
      crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDocumentScan(receiver) {
    // Ordinal: 80
    return this.proxy.sendMessage(
      80,  // ordinal
      crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindInSessionAuth(receiver) {
    // Ordinal: 96
    return this.proxy.sendMessage(
      96,  // ordinal
      crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindKeystoreService(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindLocalPrinter(receiver) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMachineLearningService(receiver) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSensorHalClient(receiver) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindHidManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      crosapi.mojom.Crosapi_BindHidManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMediaSessionController(receiver) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMediaSessionAudioFocus(receiver) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMediaSessionAudioFocusDebug(receiver) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTelemetryDiagnosticRoutinesService(receiver) {
    // Ordinal: 115
    return this.proxy.sendMessage(
      115,  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTelemetryManagementService(receiver) {
    // Ordinal: 129
    return this.proxy.sendMessage(
      129,  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTelemetryProbeService(receiver) {
    // Ordinal: 97
    return this.proxy.sendMessage(
      97,  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVideoCaptureDeviceFactory(receiver) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGuestOsSkForwarderFactory(receiver) {
    // Ordinal: 123
    return this.proxy.sendMessage(
      123,  // ordinal
      crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec,
      null,
      [receiver],
      false);
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

crosapi.mojom.CrosapiReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 7: {
          const params = crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindAccountManager(params.receiver);
          break;
        }
        case 47: {
          const params = crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindBrowserCdmFactory(params.receiver);
          break;
        }
        case 142: {
          const params = crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindCfmServiceContext(params.receiver);
          break;
        }
        case 93: {
          const params = crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindCrosDisplayConfigController(params.receiver);
          break;
        }
        case 99: {
          const params = crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindDiagnosticsService(params.receiver);
          break;
        }
        case 80: {
          const params = crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindDocumentScan(params.receiver);
          break;
        }
        case 96: {
          const params = crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindInSessionAuth(params.receiver);
          break;
        }
        case 2: {
          const params = crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindKeystoreService(params.receiver);
          break;
        }
        case 30: {
          const params = crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindLocalPrinter(params.receiver);
          break;
        }
        case 22: {
          const params = crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindMachineLearningService(params.receiver);
          break;
        }
        case 19: {
          const params = crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindSensorHalClient(params.receiver);
          break;
        }
        case 4: {
          const params = crosapi.mojom.Crosapi_BindHidManager_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindHidManager(params.receiver);
          break;
        }
        case 9: {
          const params = crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindMediaSessionController(params.receiver);
          break;
        }
        case 10: {
          const params = crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindMediaSessionAudioFocus(params.receiver);
          break;
        }
        case 11: {
          const params = crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindMediaSessionAudioFocusDebug(params.receiver);
          break;
        }
        case 115: {
          const params = crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTelemetryDiagnosticRoutinesService(params.receiver);
          break;
        }
        case 129: {
          const params = crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTelemetryManagementService(params.receiver);
          break;
        }
        case 97: {
          const params = crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTelemetryProbeService(params.receiver);
          break;
        }
        case 25: {
          const params = crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindVideoCaptureDeviceFactory(params.receiver);
          break;
        }
        case 123: {
          const params = crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindGuestOsSkForwarderFactory(params.receiver);
          break;
        }
      }
    }});
  }
};

crosapi.mojom.CrosapiReceiver = crosapi.mojom.CrosapiReceiver;

crosapi.mojom.CrosapiPtr = crosapi.mojom.CrosapiRemote;
crosapi.mojom.CrosapiRequest = crosapi.mojom.CrosapiPendingReceiver;

