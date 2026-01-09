// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/tools/fuzzers/fuzz.mojom
// Module: fuzz.mojom

'use strict';

// Module namespace
var fuzz = fuzz || {};
fuzz.mojom = fuzz.mojom || {};


// Enum: FuzzEnum
fuzz.mojom.FuzzEnum = {
  FUZZ_VALUE0: 0,
  FUZZ_VALUE1: 1,
  FUZZ_VALUE2: 2,
};

// Struct: FuzzDummyStruct
fuzz.mojom.FuzzDummyStruct = class {
  constructor(values = {}) {
    this.dummy = values.dummy !== undefined ? values.dummy : 0;
  }
};

// Struct: FuzzStruct
fuzz.mojom.FuzzStruct = class {
  constructor(values = {}) {
    this.fuzz_complex = values.fuzz_complex !== undefined ? values.fuzz_complex : 0;
  }
};

// Interface: FuzzDummyInterface
fuzz.mojom.FuzzDummyInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'fuzz.mojom.FuzzDummyInterface';
  }

  ping() {
    // Method: Ping
    // Call: Ping()
  }

};

fuzz.mojom.FuzzDummyInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FuzzInterface
fuzz.mojom.FuzzInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'fuzz.mojom.FuzzInterface';
  }

  fuzzBasic() {
    // Method: FuzzBasic
    // Call: FuzzBasic()
  }

  fuzzBasicResp() {
    // Method: FuzzBasicResp
    // Call: FuzzBasicResp()
  }

  fuzzBasicSyncResp() {
    // Method: FuzzBasicSyncResp
    // Call: FuzzBasicSyncResp()
  }

  fuzzArgs(a, b) {
    // Method: FuzzArgs
    // Call: FuzzArgs(a, b)
  }

  fuzzArgsResp(a, b) {
    // Method: FuzzArgsResp
    // Call: FuzzArgsResp(a, b)
  }

  fuzzArgsSyncResp(a, b) {
    // Method: FuzzArgsSyncResp
    // Call: FuzzArgsSyncResp(a, b)
  }

  fuzzAssociated(receiver) {
    // Method: FuzzAssociated
    // Call: FuzzAssociated(receiver)
  }

};

fuzz.mojom.FuzzInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
