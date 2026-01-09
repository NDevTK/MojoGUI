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

// Enum: FileType
ash.scanning.mojom.FileType = {
  kJpg: 0,
  kPdf: 1,
  kPng: 2,
};

// Enum: SourceType
ash.scanning.mojom.SourceType = {
};

// Enum: PageSize
ash.scanning.mojom.PageSize = {
};

// Enum: ScanResult
ash.scanning.mojom.ScanResult = {
};

// Struct: ScanSource
ash.scanning.mojom.ScanSource = class {
  constructor(values = {}) {
    this.resolutions = values.resolutions !== undefined ? values.resolutions : 0;
  }
};

// Struct: ScannerCapabilities
ash.scanning.mojom.ScannerCapabilities = class {
  constructor(values = {}) {
    this.sources = values.sources !== undefined ? values.sources : [];
  }
};

// Struct: ScanSettings
ash.scanning.mojom.ScanSettings = class {
  constructor(values = {}) {
    this.resolution_dpi = values.resolution_dpi !== undefined ? values.resolution_dpi : 0;
  }
};

// Struct: Scanner
ash.scanning.mojom.Scanner = class {
  constructor(values = {}) {
    this.display_name = values.display_name !== undefined ? values.display_name : "";
  }
};

// Interface: ScanJobObserver
ash.scanning.mojom.ScanJobObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.scanning.mojom.ScanJobObserver';
  }

  onPageProgress(page_number, progress_percent) {
    // Method: OnPageProgress
    // Call: OnPageProgress(page_number, progress_percent)
  }

  onPageComplete(page_data, new_page_index) {
    // Method: OnPageComplete
    // Call: OnPageComplete(page_data, new_page_index)
  }

  onScanComplete(result, scanned_file_paths) {
    // Method: OnScanComplete
    // Call: OnScanComplete(result, scanned_file_paths)
  }

  onCancelComplete(success) {
    // Method: OnCancelComplete
    // Call: OnCancelComplete(success)
  }

  onMultiPageScanFail(result) {
    // Method: OnMultiPageScanFail
    // Call: OnMultiPageScanFail(result)
  }

};

ash.scanning.mojom.ScanJobObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ScanService
ash.scanning.mojom.ScanServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.scanning.mojom.ScanService';
  }

  getScanners() {
    // Method: GetScanners
    return new Promise((resolve) => {
      // Call: GetScanners()
      resolve({});
    });
  }

  getScannerCapabilities(scanner_id) {
    // Method: GetScannerCapabilities
    return new Promise((resolve) => {
      // Call: GetScannerCapabilities(scanner_id)
      resolve({});
    });
  }

  startScan(scanner_id, settings, observer) {
    // Method: StartScan
    return new Promise((resolve) => {
      // Call: StartScan(scanner_id, settings, observer)
      resolve({});
    });
  }

  startMultiPageScan(scanner_id, settings, observer) {
    // Method: StartMultiPageScan
    return new Promise((resolve) => {
      // Call: StartMultiPageScan(scanner_id, settings, observer)
      resolve({});
    });
  }

  cancelScan() {
    // Method: CancelScan
    // Call: CancelScan()
  }

};

ash.scanning.mojom.ScanServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MultiPageScanController
ash.scanning.mojom.MultiPageScanControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.scanning.mojom.MultiPageScanController';
  }

  scanNextPage(scanner_id, settings) {
    // Method: ScanNextPage
    return new Promise((resolve) => {
      // Call: ScanNextPage(scanner_id, settings)
      resolve({});
    });
  }

  removePage(page_index) {
    // Method: RemovePage
    // Call: RemovePage(page_index)
  }

  rescanPage(scanner_id, settings, page_index) {
    // Method: RescanPage
    return new Promise((resolve) => {
      // Call: RescanPage(scanner_id, settings, page_index)
      resolve({});
    });
  }

  completeMultiPageScan() {
    // Method: CompleteMultiPageScan
    // Call: CompleteMultiPageScan()
  }

};

ash.scanning.mojom.MultiPageScanControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
