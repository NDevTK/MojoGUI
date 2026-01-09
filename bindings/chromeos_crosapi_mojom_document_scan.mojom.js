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
    this.known = values.known !== undefined ? values.known : null;
  }
};

// Struct: ScannerEnumFilter
crosapi.mojom.ScannerEnumFilter = class {
  constructor(values = {}) {
  }
};

// Struct: IntRange
crosapi.mojom.IntRange = class {
  constructor(values = {}) {
  }
};

// Struct: FixedRange
crosapi.mojom.FixedRange = class {
  constructor(values = {}) {
  }
};

// Struct: OptionConstraint
crosapi.mojom.OptionConstraint = class {
  constructor(values = {}) {
  }
};

// Struct: ScannerOption
crosapi.mojom.ScannerOption = class {
  constructor(values = {}) {
  }
};

// Struct: GetScannerListResponse
crosapi.mojom.GetScannerListResponse = class {
  constructor(values = {}) {
  }
};

// Struct: OpenScannerResponse
crosapi.mojom.OpenScannerResponse = class {
  constructor(values = {}) {
    this.the = values.the !== undefined ? values.the : null;
    this.by = values.by !== undefined ? values.by : null;
  }
};

// Struct: CloseScannerResponse
crosapi.mojom.CloseScannerResponse = class {
  constructor(values = {}) {
  }
};

// Struct: StartScanOptions
crosapi.mojom.StartScanOptions = class {
  constructor(values = {}) {
  }
};

// Struct: StartPreparedScanResponse
crosapi.mojom.StartPreparedScanResponse = class {
  constructor(values = {}) {
  }
};

// Struct: ReadScanDataResponse
crosapi.mojom.ReadScanDataResponse = class {
  constructor(values = {}) {
    this.total = values.total !== undefined ? values.total : null;
  }
};

// Struct: OptionSetting
crosapi.mojom.OptionSetting = class {
  constructor(values = {}) {
  }
};

// Struct: OptionGroup
crosapi.mojom.OptionGroup = class {
  constructor(values = {}) {
  }
};

// Struct: SetOptionResult
crosapi.mojom.SetOptionResult = class {
  constructor(values = {}) {
  }
};

// Struct: SetOptionsResponse
crosapi.mojom.SetOptionsResponse = class {
  constructor(values = {}) {
  }
};

// Struct: GetOptionGroupsResponse
crosapi.mojom.GetOptionGroupsResponse = class {
  constructor(values = {}) {
  }
};

// Struct: CancelScanResponse
crosapi.mojom.CancelScanResponse = class {
  constructor(values = {}) {
  }
};

// Interface: DocumentScan
crosapi.mojom.DocumentScanPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.DocumentScan';
  }

};

crosapi.mojom.DocumentScanRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
