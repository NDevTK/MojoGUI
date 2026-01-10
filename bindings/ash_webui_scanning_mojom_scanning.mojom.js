// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/scanning/mojom/scanning.mojom
// Module: ash.scanning.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.scanning = ash.scanning || {};
ash.scanning.mojom = ash.scanning.mojom || {};


// Enum: ColorMode
ash.scanning.mojom.ColorMode = {
  kBlackAndWhite: 0,
  kGrayscale: 1,
  kColor: 2,
};
ash.scanning.mojom.ColorModeSpec = { $: mojo.internal.Enum() };

// Enum: FileType
ash.scanning.mojom.FileType = {
  kJpg: 0,
  kPdf: 1,
  kPng: 2,
};
ash.scanning.mojom.FileTypeSpec = { $: mojo.internal.Enum() };

// Enum: SourceType
ash.scanning.mojom.SourceType = {
  kUnknown: 0,
  kFlatbed: 1,
  kAdfSimplex: 2,
  kAdfDuplex: 3,
  kDefault: 4,
};
ash.scanning.mojom.SourceTypeSpec = { $: mojo.internal.Enum() };

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
ash.scanning.mojom.PageSizeSpec = { $: mojo.internal.Enum() };

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
ash.scanning.mojom.ScanResultSpec = { $: mojo.internal.Enum() };

// Struct: ScanSource
ash.scanning.mojom.ScanSourceSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanSource',
      packedSize: 48,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: ash.scanning.mojom.SourceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'page_sizes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.scanning.mojom.PageSizeSpec, false), nullable: false, minVersion: 0 },
        { name: 'color_modes', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ash.scanning.mojom.ColorModeSpec, false), nullable: false, minVersion: 0 },
        { name: 'resolutions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ScannerCapabilities
ash.scanning.mojom.ScannerCapabilitiesSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScannerCapabilities',
      packedSize: 16,
      fields: [
        { name: 'sources', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.scanning.mojom.ScanSourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ScanSettings
ash.scanning.mojom.ScanSettingsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanSettings',
      packedSize: 40,
      fields: [
        { name: 'source_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'scan_to_path', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'file_type', packedOffset: 16, packedBitOffset: 0, type: ash.scanning.mojom.FileTypeSpec, nullable: false, minVersion: 0 },
        { name: 'color_mode', packedOffset: 20, packedBitOffset: 0, type: ash.scanning.mojom.ColorModeSpec, nullable: false, minVersion: 0 },
        { name: 'page_size', packedOffset: 24, packedBitOffset: 0, type: ash.scanning.mojom.PageSizeSpec, nullable: false, minVersion: 0 },
        { name: 'resolution_dpi', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Scanner
ash.scanning.mojom.ScannerSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.Scanner',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ScanJobObserver
ash.scanning.mojom.ScanJobObserver = {};

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
};

ash.scanning.mojom.ScanJobObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPageProgress(page_number, progress_percent) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec,
      null,
      [page_number, progress_percent]);
  }

  onPageComplete(page_data, new_page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec,
      null,
      [page_data, new_page_index]);
  }

  onScanComplete(result, scanned_file_paths) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec,
      null,
      [result, scanned_file_paths]);
  }

  onCancelComplete(success) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec,
      null,
      [success]);
  }

  onMultiPageScanFail(result) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec,
      null,
      [result]);
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

// ParamsSpec for OnPageProgress
ash.scanning.mojom.ScanJobObserver_OnPageProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanJobObserver.OnPageProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'page_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'progress_percent', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPageComplete
ash.scanning.mojom.ScanJobObserver_OnPageComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanJobObserver.OnPageComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'page_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'new_page_index', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnScanComplete
ash.scanning.mojom.ScanJobObserver_OnScanComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanJobObserver.OnScanComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.scanning.mojom.ScanResultSpec, nullable: false, minVersion: 0 },
        { name: 'scanned_file_paths', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnCancelComplete
ash.scanning.mojom.ScanJobObserver_OnCancelComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanJobObserver.OnCancelComplete_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMultiPageScanFail
ash.scanning.mojom.ScanJobObserver_OnMultiPageScanFail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanJobObserver.OnMultiPageScanFail_Params',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.scanning.mojom.ScanResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.scanning.mojom.ScanJobObserverPtr = ash.scanning.mojom.ScanJobObserverRemote;
ash.scanning.mojom.ScanJobObserverRequest = ash.scanning.mojom.ScanJobObserverPendingReceiver;


// Interface: ScanService
ash.scanning.mojom.ScanService = {};

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
};

ash.scanning.mojom.ScanServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getScanners() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.scanning.mojom.ScanService_GetScanners_ParamsSpec,
      ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec,
      []);
  }

  getScannerCapabilities(scanner_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec,
      ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec,
      [scanner_id]);
  }

  startScan(scanner_id, settings, observer) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.scanning.mojom.ScanService_StartScan_ParamsSpec,
      ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec,
      [scanner_id, settings, observer]);
  }

  startMultiPageScan(scanner_id, settings, observer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec,
      ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec,
      [scanner_id, settings, observer]);
  }

  cancelScan() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.scanning.mojom.ScanService_CancelScan_ParamsSpec,
      null,
      []);
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

// ParamsSpec for GetScanners
ash.scanning.mojom.ScanService_GetScanners_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.GetScanners_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.scanning.mojom.ScanService_GetScanners_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.GetScanners_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'scanners', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.scanning.mojom.ScannerSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetScannerCapabilities
ash.scanning.mojom.ScanService_GetScannerCapabilities_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.GetScannerCapabilities_Params',
      packedSize: 16,
      fields: [
        { name: 'scanner_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.scanning.mojom.ScanService_GetScannerCapabilities_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.GetScannerCapabilities_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'capabilities', packedOffset: 0, packedBitOffset: 0, type: ash.scanning.mojom.ScannerCapabilitiesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartScan
ash.scanning.mojom.ScanService_StartScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.StartScan_Params',
      packedSize: 32,
      fields: [
        { name: 'scanner_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: ash.scanning.mojom.ScanSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.scanning.mojom.ScanService_StartScan_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.StartScan_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartMultiPageScan
ash.scanning.mojom.ScanService_StartMultiPageScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.StartMultiPageScan_Params',
      packedSize: 32,
      fields: [
        { name: 'scanner_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: ash.scanning.mojom.ScanSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'observer', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.scanning.mojom.ScanService_StartMultiPageScan_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.StartMultiPageScan_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'controller', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CancelScan
ash.scanning.mojom.ScanService_CancelScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.ScanService.CancelScan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.scanning.mojom.ScanServicePtr = ash.scanning.mojom.ScanServiceRemote;
ash.scanning.mojom.ScanServiceRequest = ash.scanning.mojom.ScanServicePendingReceiver;


// Interface: MultiPageScanController
ash.scanning.mojom.MultiPageScanController = {};

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
};

ash.scanning.mojom.MultiPageScanControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  scanNextPage(scanner_id, settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec,
      ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec,
      [scanner_id, settings]);
  }

  removePage(page_index) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec,
      null,
      [page_index]);
  }

  rescanPage(scanner_id, settings, page_index) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec,
      ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec,
      [scanner_id, settings, page_index]);
  }

  completeMultiPageScan() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec,
      null,
      []);
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

// ParamsSpec for ScanNextPage
ash.scanning.mojom.MultiPageScanController_ScanNextPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.MultiPageScanController.ScanNextPage_Params',
      packedSize: 24,
      fields: [
        { name: 'scanner_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: ash.scanning.mojom.ScanSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.scanning.mojom.MultiPageScanController_ScanNextPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.MultiPageScanController.ScanNextPage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemovePage
ash.scanning.mojom.MultiPageScanController_RemovePage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.MultiPageScanController.RemovePage_Params',
      packedSize: 16,
      fields: [
        { name: 'page_index', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RescanPage
ash.scanning.mojom.MultiPageScanController_RescanPage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.MultiPageScanController.RescanPage_Params',
      packedSize: 32,
      fields: [
        { name: 'scanner_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: ash.scanning.mojom.ScanSettingsSpec, nullable: false, minVersion: 0 },
        { name: 'page_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.scanning.mojom.MultiPageScanController_RescanPage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.MultiPageScanController.RescanPage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CompleteMultiPageScan
ash.scanning.mojom.MultiPageScanController_CompleteMultiPageScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.scanning.mojom.MultiPageScanController.CompleteMultiPageScan_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.scanning.mojom.MultiPageScanControllerPtr = ash.scanning.mojom.MultiPageScanControllerRemote;
ash.scanning.mojom.MultiPageScanControllerRequest = ash.scanning.mojom.MultiPageScanControllerPendingReceiver;

