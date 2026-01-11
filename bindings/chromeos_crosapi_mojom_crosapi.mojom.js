// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/crosapi.mojom
// Module: crosapi.mojom

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
  bindAccountManager(receiver) {
    return this.$.bindAccountManager(receiver);
  }
  bindBrowserCdmFactory(receiver) {
    return this.$.bindBrowserCdmFactory(receiver);
  }
  bindCfmServiceContext(receiver) {
    return this.$.bindCfmServiceContext(receiver);
  }
  bindCrosDisplayConfigController(receiver) {
    return this.$.bindCrosDisplayConfigController(receiver);
  }
  bindDiagnosticsService(receiver) {
    return this.$.bindDiagnosticsService(receiver);
  }
  bindDocumentScan(receiver) {
    return this.$.bindDocumentScan(receiver);
  }
  bindInSessionAuth(receiver) {
    return this.$.bindInSessionAuth(receiver);
  }
  bindKeystoreService(receiver) {
    return this.$.bindKeystoreService(receiver);
  }
  bindLocalPrinter(receiver) {
    return this.$.bindLocalPrinter(receiver);
  }
  bindMachineLearningService(receiver) {
    return this.$.bindMachineLearningService(receiver);
  }
  bindSensorHalClient(receiver) {
    return this.$.bindSensorHalClient(receiver);
  }
  bindHidManager(receiver) {
    return this.$.bindHidManager(receiver);
  }
  bindMediaSessionController(receiver) {
    return this.$.bindMediaSessionController(receiver);
  }
  bindMediaSessionAudioFocus(receiver) {
    return this.$.bindMediaSessionAudioFocus(receiver);
  }
  bindMediaSessionAudioFocusDebug(receiver) {
    return this.$.bindMediaSessionAudioFocusDebug(receiver);
  }
  bindTelemetryDiagnosticRoutinesService(receiver) {
    return this.$.bindTelemetryDiagnosticRoutinesService(receiver);
  }
  bindTelemetryManagementService(receiver) {
    return this.$.bindTelemetryManagementService(receiver);
  }
  bindTelemetryProbeService(receiver) {
    return this.$.bindTelemetryProbeService(receiver);
  }
  bindVideoCaptureDeviceFactory(receiver) {
    return this.$.bindVideoCaptureDeviceFactory(receiver);
  }
  bindGuestOsSkForwarderFactory(receiver) {
    return this.$.bindGuestOsSkForwarderFactory(receiver);
  }
};

crosapi.mojom.CrosapiRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Crosapi', [
      { explicit: 7 },
      { explicit: 47 },
      { explicit: 142 },
      { explicit: 93 },
      { explicit: 99 },
      { explicit: 80 },
      { explicit: 96 },
      { explicit: 2 },
      { explicit: 30 },
      { explicit: 22 },
      { explicit: 19 },
      { explicit: 4 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 115 },
      { explicit: 129 },
      { explicit: 97 },
      { explicit: 25 },
      { explicit: 123 },
    ]);
  }

  bindAccountManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindBrowserCdmFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCfmServiceContext(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCrosDisplayConfigController(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDiagnosticsService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDocumentScan(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindInSessionAuth(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindKeystoreService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindLocalPrinter(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMachineLearningService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindSensorHalClient(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindHidManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      crosapi.mojom.Crosapi_BindHidManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMediaSessionController(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMediaSessionAudioFocus(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMediaSessionAudioFocusDebug(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTelemetryDiagnosticRoutinesService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTelemetryManagementService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTelemetryProbeService(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindVideoCaptureDeviceFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGuestOsSkForwarderFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('Crosapi', [
      { explicit: 7 },
      { explicit: 47 },
      { explicit: 142 },
      { explicit: 93 },
      { explicit: 99 },
      { explicit: 80 },
      { explicit: 96 },
      { explicit: 2 },
      { explicit: 30 },
      { explicit: 22 },
      { explicit: 19 },
      { explicit: 4 },
      { explicit: 9 },
      { explicit: 10 },
      { explicit: 11 },
      { explicit: 115 },
      { explicit: 129 },
      { explicit: 97 },
      { explicit: 25 },
      { explicit: 123 },
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
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindHidManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindAccountManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindAccountManager(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindBrowserCdmFactory_ParamsSpec.$.structSpec);
          const result = this.impl.bindBrowserCdmFactory(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindCfmServiceContext_ParamsSpec.$.structSpec);
          const result = this.impl.bindCfmServiceContext(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindCrosDisplayConfigController_ParamsSpec.$.structSpec);
          const result = this.impl.bindCrosDisplayConfigController(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindDiagnosticsService_ParamsSpec.$.structSpec);
          const result = this.impl.bindDiagnosticsService(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindDocumentScan_ParamsSpec.$.structSpec);
          const result = this.impl.bindDocumentScan(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindInSessionAuth_ParamsSpec.$.structSpec);
          const result = this.impl.bindInSessionAuth(params.receiver);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindKeystoreService_ParamsSpec.$.structSpec);
          const result = this.impl.bindKeystoreService(params.receiver);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindLocalPrinter_ParamsSpec.$.structSpec);
          const result = this.impl.bindLocalPrinter(params.receiver);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMachineLearningService_ParamsSpec.$.structSpec);
          const result = this.impl.bindMachineLearningService(params.receiver);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindSensorHalClient_ParamsSpec.$.structSpec);
          const result = this.impl.bindSensorHalClient(params.receiver);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindHidManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindHidManager(params.receiver);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMediaSessionController_ParamsSpec.$.structSpec);
          const result = this.impl.bindMediaSessionController(params.receiver);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMediaSessionAudioFocus_ParamsSpec.$.structSpec);
          const result = this.impl.bindMediaSessionAudioFocus(params.receiver);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindMediaSessionAudioFocusDebug_ParamsSpec.$.structSpec);
          const result = this.impl.bindMediaSessionAudioFocusDebug(params.receiver);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindTelemetryDiagnosticRoutinesService_ParamsSpec.$.structSpec);
          const result = this.impl.bindTelemetryDiagnosticRoutinesService(params.receiver);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindTelemetryManagementService_ParamsSpec.$.structSpec);
          const result = this.impl.bindTelemetryManagementService(params.receiver);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindTelemetryProbeService_ParamsSpec.$.structSpec);
          const result = this.impl.bindTelemetryProbeService(params.receiver);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindVideoCaptureDeviceFactory_ParamsSpec.$.structSpec);
          const result = this.impl.bindVideoCaptureDeviceFactory(params.receiver);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(crosapi.mojom.Crosapi_BindGuestOsSkForwarderFactory_ParamsSpec.$.structSpec);
          const result = this.impl.bindGuestOsSkForwarderFactory(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

crosapi.mojom.CrosapiReceiver = crosapi.mojom.CrosapiReceiver;

crosapi.mojom.CrosapiPtr = crosapi.mojom.CrosapiRemote;
crosapi.mojom.CrosapiRequest = crosapi.mojom.CrosapiPendingReceiver;

