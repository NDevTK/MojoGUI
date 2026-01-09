// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/document_scan.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: ScanFailureMode
crosapi.mojom.ScanFailureMode = {
};

// Enum: ScannerOperationResult
crosapi.mojom.ScannerOperationResult = {
};

// Enum: ConnectionType
crosapi.mojom.ConnectionType = {
};

// Enum: OptionType
crosapi.mojom.OptionType = {
  kBool: 0,
  kInt: 1,
  kFixed: 2,
  kString: 3,
  kButton: 4,
  kGroup: 5,
};

// Enum: OptionUnit
crosapi.mojom.OptionUnit = {
  e: 0,
  threshold: 1,
  e: 2,
  scan: 3,
  e: 4,
  color: 5,
  e: 6,
  scan: 7,
  e: 8,
  resolution: 9,
  e: 10,
  brightness: 11,
  e: 12,
};

// Enum: OptionConstraintType
crosapi.mojom.OptionConstraintType = {
  kIntRange: 0,
  kFixedRange: 1,
  kIntList: 2,
  kFixedList: 3,
  kStringList: 4,
};

// Enum: OptionConfigurability
crosapi.mojom.OptionConfigurability = {
};

// Struct: ScannerInfo
crosapi.mojom.ScannerInfo = class {
  constructor(values = {}) {
    this.manufacturer@2 = values.manufacturer@2 !== undefined ? values.manufacturer@2 : "";
    this.known = values.known !== undefined ? values.known : null;
    this.model@3 = values.model@3 !== undefined ? values.model@3 : "";
    this.connection_type@5 = values.connection_type@5 !== undefined ? values.connection_type@5 : "";
    this.0 = values.0 !== undefined ? values.0 : false;
    this.1 = values.1 !== undefined ? values.1 : null;
    this.2 = values.2 !== undefined ? values.2 : null;
  }
};

// Struct: ScannerEnumFilter
crosapi.mojom.ScannerEnumFilter = class {
  constructor(values = {}) {
    this.secure@1 = values.secure@1 !== undefined ? values.secure@1 : false;
  }
};

// Struct: IntRange
crosapi.mojom.IntRange = class {
  constructor(values = {}) {
    this.quant@2 = values.quant@2 !== undefined ? values.quant@2 : 0;
  }
};

// Struct: FixedRange
crosapi.mojom.FixedRange = class {
  constructor(values = {}) {
    this.quant@2 = values.quant@2 !== undefined ? values.quant@2 : 0;
  }
};

// Struct: OptionConstraint
crosapi.mojom.OptionConstraint = class {
  constructor(values = {}) {
    this.restriction@1 = values.restriction@1 !== undefined ? values.restriction@1 : 0;
  }
};

// Struct: ScannerOption
crosapi.mojom.ScannerOption = class {
  constructor(values = {}) {
    this.isEmulated@10 = values.isEmulated@10 !== undefined ? values.isEmulated@10 : 0;
    this.isInternal@13 = values.isInternal@13 !== undefined ? values.isInternal@13 : false;
  }
};

// Struct: GetScannerListResponse
crosapi.mojom.GetScannerListResponse = class {
  constructor(values = {}) {
    this.scanners@1 = values.scanners@1 !== undefined ? values.scanners@1 : [];
  }
};

// Struct: OpenScannerResponse
crosapi.mojom.OpenScannerResponse = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : "";
    this.the = values.the !== undefined ? values.the : null;
    this.by = values.by !== undefined ? values.by : null;
    this.scanner_handle@2 = values.scanner_handle@2 !== undefined ? values.scanner_handle@2 : "";
    this.options@3 = values.options@3 !== undefined ? values.options@3 : "";
  }
};

// Struct: CloseScannerResponse
crosapi.mojom.CloseScannerResponse = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : "";
  }
};

// Struct: StartScanOptions
crosapi.mojom.StartScanOptions = class {
  constructor(values = {}) {
    this.max_read_size@1 = values.max_read_size@1 !== undefined ? values.max_read_size@1 : 0;
  }
};

// Struct: StartPreparedScanResponse
crosapi.mojom.StartPreparedScanResponse = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : "";
    this.job_handle@2 = values.job_handle@2 !== undefined ? values.job_handle@2 : "";
  }
};

// Struct: ReadScanDataResponse
crosapi.mojom.ReadScanDataResponse = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : "";
    this.read. = values.read. !== undefined ? values.read. : null;
    this.data@2 = values.data@2 !== undefined ? values.data@2 : 0;
    this.total = values.total !== undefined ? values.total : null;
    this.estimated_completion@3 = values.estimated_completion@3 !== undefined ? values.estimated_completion@3 : 0;
  }
};

// Struct: OptionSetting
crosapi.mojom.OptionSetting = class {
  constructor(values = {}) {
    this.value@2 = values.value@2 !== undefined ? values.value@2 : "";
  }
};

// Struct: OptionGroup
crosapi.mojom.OptionGroup = class {
  constructor(values = {}) {
    this.members@1 = values.members@1 !== undefined ? values.members@1 : "";
  }
};

// Struct: SetOptionResult
crosapi.mojom.SetOptionResult = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : "";
  }
};

// Struct: SetOptionsResponse
crosapi.mojom.SetOptionsResponse = class {
  constructor(values = {}) {
    this.options@2 = values.options@2 !== undefined ? values.options@2 : "";
  }
};

// Struct: GetOptionGroupsResponse
crosapi.mojom.GetOptionGroupsResponse = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : "";
    this.groups@2 = values.groups@2 !== undefined ? values.groups@2 : [];
  }
};

// Struct: CancelScanResponse
crosapi.mojom.CancelScanResponse = class {
  constructor(values = {}) {
    this.result@1 = values.result@1 !== undefined ? values.result@1 : "";
  }
};

// Interface: DocumentScan
crosapi.mojom.DocumentScanPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.DocumentScan';
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  getScannerList() {
    // Method: GetScannerList
    // Call: GetScannerList()
  }

  3(client_id, scanner_id) {
    // Method: 3
    return new Promise((resolve) => {
      // Call: 3(client_id, scanner_id)
      resolve({});
    });
  }

  openScanner() {
    // Method: OpenScanner
    // Call: OpenScanner()
  }

  4(scanner_handle) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(scanner_handle)
      resolve({});
    });
  }

  openScanner() {
    // Method: OpenScanner
    // Call: OpenScanner()
  }

  setOptions() {
    // Method: SetOptions
    // Call: SetOptions()
  }

  5(scanner_handle, options) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(scanner_handle, options)
      resolve({});
    });
  }

  6(job_handle) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(job_handle)
      resolve({});
    });
  }

  openScanner() {
    // Method: OpenScanner
    // Call: OpenScanner()
  }

  7(scanner_handle, options) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(scanner_handle, options)
      resolve({});
    });
  }

  openScanner() {
    // Method: OpenScanner
    // Call: OpenScanner()
  }

  8(scanner_handle) {
    // Method: 8
    return new Promise((resolve) => {
      // Call: 8(scanner_handle)
      resolve({});
    });
  }

  startPreparedScan() {
    // Method: StartPreparedScan
    // Call: StartPreparedScan()
  }

  9(job_handle) {
    // Method: 9
    return new Promise((resolve) => {
      // Call: 9(job_handle)
      resolve({});
    });
  }

};

crosapi.mojom.DocumentScanRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
