// Auto-generated MojoJS binding
// Source: chromium_src/components/device_signals/core/common/mojom/system_signals.mojom
// Module: device_signals.mojom

'use strict';

// Module namespace
var device_signals = device_signals || {};
device_signals.mojom = device_signals.mojom || {};


// Enum: PresenceValue
device_signals.mojom.PresenceValue = {
};

// Enum: AntiVirusProductState
device_signals.mojom.AntiVirusProductState = {
};

// Struct: ExecutableMetadata
device_signals.mojom.ExecutableMetadata = class {
  constructor(values = {}) {
    this.subject_name = values.subject_name !== undefined ? values.subject_name : false;
  }
};

// Struct: FileSystemItem
device_signals.mojom.FileSystemItem = class {
  constructor(values = {}) {
    this.executable_metadata = values.executable_metadata !== undefined ? values.executable_metadata : "";
  }
};

// Struct: FileSystemItemRequest
device_signals.mojom.FileSystemItemRequest = class {
  constructor(values = {}) {
    this.compute_executable_metadata = values.compute_executable_metadata !== undefined ? values.compute_executable_metadata : false;
  }
};

// Struct: AntiVirusSignal
device_signals.mojom.AntiVirusSignal = class {
  constructor(values = {}) {
    this.state = values.state !== undefined ? values.state : "";
  }
};

// Struct: HotfixSignal
device_signals.mojom.HotfixSignal = class {
  constructor(values = {}) {
    this.hotfix_id = values.hotfix_id !== undefined ? values.hotfix_id : "";
  }
};

// Interface: SystemSignalsService
device_signals.mojom.SystemSignalsServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device_signals.mojom.SystemSignalsService';
  }

  getFileSystemSignals(requests) {
    // Method: GetFileSystemSignals
    return new Promise((resolve) => {
      // Call: GetFileSystemSignals(requests)
      resolve({});
    });
  }

  getAntiVirusSignals() {
    // Method: GetAntiVirusSignals
    return new Promise((resolve) => {
      // Call: GetAntiVirusSignals()
      resolve({});
    });
  }

  getHotfixSignals() {
    // Method: GetHotfixSignals
    return new Promise((resolve) => {
      // Call: GetHotfixSignals()
      resolve({});
    });
  }

};

device_signals.mojom.SystemSignalsServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
