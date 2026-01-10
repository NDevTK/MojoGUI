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
    this.ordinalMap = new Map();
    this.ordinalMap.set(7, 0); // Default ordinal 7 -> Index 0
    this.ordinalMap.set(47, 1); // Default ordinal 47 -> Index 1
    this.ordinalMap.set(142, 2); // Default ordinal 142 -> Index 2
    this.ordinalMap.set(93, 3); // Default ordinal 93 -> Index 3
    this.ordinalMap.set(99, 4); // Default ordinal 99 -> Index 4
    this.ordinalMap.set(80, 5); // Default ordinal 80 -> Index 5
    this.ordinalMap.set(96, 6); // Default ordinal 96 -> Index 6
    this.ordinalMap.set(2, 7); // Default ordinal 2 -> Index 7
    this.ordinalMap.set(30, 8); // Default ordinal 30 -> Index 8
    this.ordinalMap.set(22, 9); // Default ordinal 22 -> Index 9
    this.ordinalMap.set(19, 10); // Default ordinal 19 -> Index 10
    this.ordinalMap.set(4, 11); // Default ordinal 4 -> Index 11
    this.ordinalMap.set(9, 12); // Default ordinal 9 -> Index 12
    this.ordinalMap.set(10, 13); // Default ordinal 10 -> Index 13
    this.ordinalMap.set(11, 14); // Default ordinal 11 -> Index 14
    this.ordinalMap.set(115, 15); // Default ordinal 115 -> Index 15
    this.ordinalMap.set(129, 16); // Default ordinal 129 -> Index 16
    this.ordinalMap.set(97, 17); // Default ordinal 97 -> Index 17
    this.ordinalMap.set(25, 18); // Default ordinal 25 -> Index 18
    this.ordinalMap.set(123, 19); // Default ordinal 123 -> Index 19
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
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindAccountManager');
          const result = this.impl.bindAccountManager(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindBrowserCdmFactory');
          const result = this.impl.bindBrowserCdmFactory(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindCfmServiceContext');
          const result = this.impl.bindCfmServiceContext(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindCrosDisplayConfigController');
          const result = this.impl.bindCrosDisplayConfigController(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindDiagnosticsService');
          const result = this.impl.bindDiagnosticsService(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindDocumentScan');
          const result = this.impl.bindDocumentScan(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindInSessionAuth');
          const result = this.impl.bindInSessionAuth(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindKeystoreService');
          const result = this.impl.bindKeystoreService(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindLocalPrinter');
          const result = this.impl.bindLocalPrinter(params.receiver);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindMachineLearningService');
          const result = this.impl.bindMachineLearningService(params.receiver);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindSensorHalClient');
          const result = this.impl.bindSensorHalClient(params.receiver);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindHidManager_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindHidManager');
          const result = this.impl.bindHidManager(params.receiver);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindMediaSessionController');
          const result = this.impl.bindMediaSessionController(params.receiver);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindMediaSessionAudioFocus');
          const result = this.impl.bindMediaSessionAudioFocus(params.receiver);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindMediaSessionAudioFocusDebug');
          const result = this.impl.bindMediaSessionAudioFocusDebug(params.receiver);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindTelemetryDiagnosticRoutinesService');
          const result = this.impl.bindTelemetryDiagnosticRoutinesService(params.receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindTelemetryManagementService');
          const result = this.impl.bindTelemetryManagementService(params.receiver);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindTelemetryProbeService');
          const result = this.impl.bindTelemetryProbeService(params.receiver);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindVideoCaptureDeviceFactory');
          const result = this.impl.bindVideoCaptureDeviceFactory(params.receiver);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.bindGuestOsSkForwarderFactory');
          const result = this.impl.bindGuestOsSkForwarderFactory(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

crosapi.mojom.CrosapiReceiver = crosapi.mojom.CrosapiReceiver;

crosapi.mojom.CrosapiPtr = crosapi.mojom.CrosapiRemote;
crosapi.mojom.CrosapiRequest = crosapi.mojom.CrosapiPendingReceiver;

