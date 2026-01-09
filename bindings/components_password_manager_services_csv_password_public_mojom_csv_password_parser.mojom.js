// Auto-generated MojoJS binding
// Source: chromium_src/components/password_manager/services/csv_password/public/mojom/csv_password_parser.mojom
// Module: password_manager.mojom

'use strict';

// Module namespace
var password_manager = password_manager || {};
password_manager.mojom = password_manager.mojom || {};


// Enum: Status
password_manager.mojom.Status = {
};

// Struct: CSVPasswordSequence
password_manager.mojom.CSVPasswordSequence = class {
  constructor(values = {}) {
    this.csv_passwords = values.csv_passwords !== undefined ? values.csv_passwords : [];
  }
};

// Struct: CSVPassword
password_manager.mojom.CSVPassword = class {
  constructor(values = {}) {
  }
};

// Interface: CSVPasswordParser
password_manager.mojom.CSVPasswordParserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'password_manager.mojom.CSVPasswordParser';
  }

  parseCSV(raw_csv) {
    // Method: ParseCSV
    return new Promise((resolve) => {
      // Call: ParseCSV(raw_csv)
      resolve({});
    });
  }

};

password_manager.mojom.CSVPasswordParserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
