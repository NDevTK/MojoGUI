// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/scanning/mojom/scanning.mojom
// Module: ash.scanning.mojom

// Module namespace
var ash = ash || {};
ash.scanning = ash.scanning || {};
ash.scanning.mojom = ash.scanning.mojom || {};
var mojo_base = mojo_base || {};

ash.scanning.mojom.ColorModeSpec = { $: mojo.internal.Enum() };
ash.scanning.mojom.FileTypeSpec = { $: mojo.internal.Enum() };
ash.scanning.mojom.SourceTypeSpec = { $: mojo.internal.Enum() };
ash.scanning.mojom.PageSizeSpec = { $: mojo.internal.Enum() };
ash.scanning.mojom.ScanResultSpec = { $: mojo.internal.Enum() };
ash.scanning.mojom.ScanSourceSpec = { $: {} };
ash.scanning.mojom.ScannerCapabilitiesSpec = { $: {} };
ash.scanning.mojom.ScanSettingsSpec = { $: {} };
ash.scanning.mojom.ScannerSpec = { $: {} };
ash.scanning.mojom.ScanJobObserver = {};
ash.scanning.mojom.ScanJobObserver.$interfaceName = 'ash.scanning.mojom.ScanJobObserver';
ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanService = {};
ash.scanning.mojom.ScanService.$interfaceName = 'ash.scanning.mojom.ScanService';
ash.scanning.mojom.ScanService_GetScanners_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_StartScan_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec = { $: {} };
ash.scanning.mojom.ScanService_CancelScan_ParamsSpec = { $: {} };
ash.scanning.mojom.MultiPageScanController = {};
ash.scanning.mojom.MultiPageScanController.$interfaceName = 'ash.scanning.mojom.MultiPageScanController';
ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec = { $: {} };
ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec = { $: {} };
ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec = { $: {} };
ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec = { $: {} };
ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec = { $: {} };
ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec = { $: {} };

// Enum: ColorMode
ash.scanning.mojom.ColorMode = {
  kBlackAndWhite: 0,
  kGrayscale: 1,
  kColor: 2,
};

// Enum: FileType
ash.scanning.mojom.FileType = {
  kJpg: 0,
  kPdf: 1,
  kPng: 2,
};

// Enum: SourceType
ash.scanning.mojom.SourceType = {
  kUnknown: 0,
  kFlatbed: 1,
  kAdfSimplex: 2,
  kAdfDuplex: 3,
  kDefault: 4,
};

// Enum: PageSize
ash.scanning.mojom.PageSize = {
  kIsoA3: 0,
  kIsoA4: 1,
  kIsoB4: 2,
  kLegal: 3,
  kNaLetter: 4,
  kTabloid: 5,
  kMax: 6,
};

// Enum: ScanResult
ash.scanning.mojom.ScanResult = {
  kSuccess: 0,
  kUnknownError: 1,
  kDeviceBusy: 2,
  kAdfJammed: 3,
  kAdfEmpty: 4,
  kFlatbedOpen: 5,
  kIoError: 6,
};

// Struct: ScanSource
mojo.internal.Struct(
    ash.scanning.mojom.ScanSourceSpec, 'ash.scanning.mojom.ScanSource', [
      mojo.internal.StructField('type', 0, 0, ash.scanning.mojom.SourceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('page_sizes', 16, 0, mojo.internal.Array(ash.scanning.mojom.PageSizeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('color_modes', 24, 0, mojo.internal.Array(ash.scanning.mojom.ColorModeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('resolutions', 32, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScannerCapabilities
mojo.internal.Struct(
    ash.scanning.mojom.ScannerCapabilitiesSpec, 'ash.scanning.mojom.ScannerCapabilities', [
      mojo.internal.StructField('sources', 0, 0, mojo.internal.Array(ash.scanning.mojom.ScanSourceSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScanSettings
mojo.internal.Struct(
    ash.scanning.mojom.ScanSettingsSpec, 'ash.scanning.mojom.ScanSettings', [
      mojo.internal.StructField('source_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('scan_to_path', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_type', 16, 0, ash.scanning.mojom.FileTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('color_mode', 24, 0, ash.scanning.mojom.ColorModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_size', 32, 0, ash.scanning.mojom.PageSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resolution_dpi', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: Scanner
mojo.internal.Struct(
    ash.scanning.mojom.ScannerSpec, 'ash.scanning.mojom.Scanner', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ScanJobObserver
mojo.internal.Struct(
    ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnPageProgress_Params', [
      mojo.internal.StructField('page_number', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('progress_percent', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnPageComplete_Params', [
      mojo.internal.StructField('page_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('new_page_index', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnScanComplete_Params', [
      mojo.internal.StructField('result', 0, 0, ash.scanning.mojom.ScanResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('scanned_file_paths', 8, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnCancelComplete_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec, 'ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_Params', [
      mojo.internal.StructField('result', 0, 0, ash.scanning.mojom.ScanResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.scanning.mojom.ScanJobObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.scanning.mojom.ScanJobObserverRemote = class {
  static get $interfaceName() {
    return 'ash.scanning.mojom.ScanJobObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.scanning.mojom.ScanJobObserverPendingReceiver,
      handle);
    this.$ = new ash.scanning.mojom.ScanJobObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPageProgress(page_number, progress_percent) {
    return this.$.onPageProgress(page_number, progress_percent);
  }
  onPageComplete(page_data, new_page_index) {
    return this.$.onPageComplete(page_data, new_page_index);
  }
  onScanComplete(result, scanned_file_paths) {
    return this.$.onScanComplete(result, scanned_file_paths);
  }
  onCancelComplete(success) {
    return this.$.onCancelComplete(success);
  }
  onMultiPageScanFail(result) {
    return this.$.onMultiPageScanFail(result);
  }
};

ash.scanning.mojom.ScanJobObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScanJobObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPageProgress(page_number, progress_percent) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec,
      null,
      [page_number, progress_percent],
      false);
  }

  onPageComplete(page_data, new_page_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec,
      null,
      [page_data, new_page_index],
      false);
  }

  onScanComplete(result, scanned_file_paths) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec,
      null,
      [result, scanned_file_paths],
      false);
  }

  onCancelComplete(success) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec,
      null,
      [success],
      false);
  }

  onMultiPageScanFail(result) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec,
      null,
      [result],
      false);
  }

};

ash.scanning.mojom.ScanJobObserver.getRemote = function() {
  let remote = new ash.scanning.mojom.ScanJobObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.scanning.mojom.ScanJobObserver',
    'context');
  return remote.$;
};

ash.scanning.mojom.ScanJobObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScanJobObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onPageProgress(params.page_number, params.progress_percent);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onPageComplete(params.page_data, params.new_page_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onScanComplete(params.result, params.scanned_file_paths);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onCancelComplete(params.success);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec.$.structSpec);
          const result = this.impl.onMultiPageScanFail(params.result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.scanning.mojom.ScanJobObserverReceiver = ash.scanning.mojom.ScanJobObserverReceiver;

ash.scanning.mojom.ScanJobObserverPtr = ash.scanning.mojom.ScanJobObserverRemote;
ash.scanning.mojom.ScanJobObserverRequest = ash.scanning.mojom.ScanJobObserverPendingReceiver;


// Interface: ScanService
mojo.internal.Struct(
    ash.scanning.mojom.ScanService_GetScanners_ParamsSpec, 'ash.scanning.mojom.ScanService_GetScanners_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_GetScanners_ResponseParams', [
      mojo.internal.StructField('scanners', 0, 0, mojo.internal.Array(ash.scanning.mojom.ScannerSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec, 'ash.scanning.mojom.ScanService_GetScannerCapabilities_Params', [
      mojo.internal.StructField('scanner_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParams', [
      mojo.internal.StructField('capabilities', 0, 0, ash.scanning.mojom.ScannerCapabilitiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_StartScan_ParamsSpec, 'ash.scanning.mojom.ScanService_StartScan_Params', [
      mojo.internal.StructField('scanner_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(ash.scanning.mojom.ScanJobObserverRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_StartScan_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec, 'ash.scanning.mojom.ScanService_StartMultiPageScan_Params', [
      mojo.internal.StructField('scanner_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('observer', 16, 0, mojo.internal.InterfaceProxy(ash.scanning.mojom.ScanJobObserverRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec, 'ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParams', [
      mojo.internal.StructField('controller', 0, 0, mojo.internal.InterfaceProxy(ash.scanning.mojom.MultiPageScanControllerRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.ScanService_CancelScan_ParamsSpec, 'ash.scanning.mojom.ScanService_CancelScan_Params', [
    ],
    [[0, 8]]);

ash.scanning.mojom.ScanServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.scanning.mojom.ScanServiceRemote = class {
  static get $interfaceName() {
    return 'ash.scanning.mojom.ScanService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.scanning.mojom.ScanServicePendingReceiver,
      handle);
    this.$ = new ash.scanning.mojom.ScanServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getScanners() {
    return this.$.getScanners();
  }
  getScannerCapabilities(scanner_id) {
    return this.$.getScannerCapabilities(scanner_id);
  }
  startScan(scanner_id, settings, observer) {
    return this.$.startScan(scanner_id, settings, observer);
  }
  startMultiPageScan(scanner_id, settings, observer) {
    return this.$.startMultiPageScan(scanner_id, settings, observer);
  }
  cancelScan() {
    return this.$.cancelScan();
  }
};

ash.scanning.mojom.ScanServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ScanService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getScanners() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.scanning.mojom.ScanService_GetScanners_ParamsSpec,
      ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec,
      [],
      false);
  }

  getScannerCapabilities(scanner_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec,
      ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec,
      [scanner_id],
      false);
  }

  startScan(scanner_id, settings, observer) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.scanning.mojom.ScanService_StartScan_ParamsSpec,
      ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec,
      [scanner_id, settings, observer],
      false);
  }

  startMultiPageScan(scanner_id, settings, observer) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec,
      ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec,
      [scanner_id, settings, observer],
      false);
  }

  cancelScan() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.scanning.mojom.ScanService_CancelScan_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.scanning.mojom.ScanService.getRemote = function() {
  let remote = new ash.scanning.mojom.ScanServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.scanning.mojom.ScanService',
    'context');
  return remote.$;
};

ash.scanning.mojom.ScanServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ScanService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(ash.scanning.mojom.ScanService_GetScanners_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanService_StartScan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.ScanService_CancelScan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanService_GetScanners_ParamsSpec.$.structSpec);
          const result = this.impl.getScanners();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec.$.structSpec);
          const result = this.impl.getScannerCapabilities(params.scanner_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanService_StartScan_ParamsSpec.$.structSpec);
          const result = this.impl.startScan(params.scanner_id, params.settings, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec.$.structSpec);
          const result = this.impl.startMultiPageScan(params.scanner_id, params.settings, params.observer);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.ScanService_CancelScan_ParamsSpec.$.structSpec);
          const result = this.impl.cancelScan();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.scanning.mojom.ScanServiceReceiver = ash.scanning.mojom.ScanServiceReceiver;

ash.scanning.mojom.ScanServicePtr = ash.scanning.mojom.ScanServiceRemote;
ash.scanning.mojom.ScanServiceRequest = ash.scanning.mojom.ScanServicePendingReceiver;


// Interface: MultiPageScanController
mojo.internal.Struct(
    ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_ScanNextPage_Params', [
      mojo.internal.StructField('scanner_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec, 'ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_RemovePage_Params', [
      mojo.internal.StructField('page_index', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_RescanPage_Params', [
      mojo.internal.StructField('scanner_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, ash.scanning.mojom.ScanSettingsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec, 'ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec, 'ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_Params', [
    ],
    [[0, 8]]);

ash.scanning.mojom.MultiPageScanControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.scanning.mojom.MultiPageScanControllerRemote = class {
  static get $interfaceName() {
    return 'ash.scanning.mojom.MultiPageScanController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.scanning.mojom.MultiPageScanControllerPendingReceiver,
      handle);
    this.$ = new ash.scanning.mojom.MultiPageScanControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scanNextPage(scanner_id, settings) {
    return this.$.scanNextPage(scanner_id, settings);
  }
  removePage(page_index) {
    return this.$.removePage(page_index);
  }
  rescanPage(scanner_id, settings, page_index) {
    return this.$.rescanPage(scanner_id, settings, page_index);
  }
  completeMultiPageScan() {
    return this.$.completeMultiPageScan();
  }
};

ash.scanning.mojom.MultiPageScanControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MultiPageScanController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  scanNextPage(scanner_id, settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec,
      ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec,
      [scanner_id, settings],
      false);
  }

  removePage(page_index) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec,
      null,
      [page_index],
      false);
  }

  rescanPage(scanner_id, settings, page_index) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec,
      ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec,
      [scanner_id, settings, page_index],
      false);
  }

  completeMultiPageScan() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.scanning.mojom.MultiPageScanController.getRemote = function() {
  let remote = new ash.scanning.mojom.MultiPageScanControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.scanning.mojom.MultiPageScanController',
    'context');
  return remote.$;
};

ash.scanning.mojom.MultiPageScanControllerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MultiPageScanController', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec.$.structSpec);
          const result = this.impl.scanNextPage(params.scanner_id, params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec.$.structSpec);
          const result = this.impl.removePage(params.page_index);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec.$.structSpec);
          const result = this.impl.rescanPage(params.scanner_id, params.settings, params.page_index);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec.$.structSpec);
          const result = this.impl.completeMultiPageScan();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.scanning.mojom.MultiPageScanControllerReceiver = ash.scanning.mojom.MultiPageScanControllerReceiver;

ash.scanning.mojom.MultiPageScanControllerPtr = ash.scanning.mojom.MultiPageScanControllerRemote;
ash.scanning.mojom.MultiPageScanControllerRequest = ash.scanning.mojom.MultiPageScanControllerPendingReceiver;

