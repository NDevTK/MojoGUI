// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/fingerprint.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: ScanResult
device.mojom.ScanResult = {
  SUCCESS: 0,
  PARTIAL: 1,
  INSUFFICIENT: 2,
  SENSOR_DIRTY: 3,
  TOO_SLOW: 4,
  TOO_FAST: 5,
  IMMOBILE: 6,
  NO_MATCH: 7,
};

// Enum: FingerprintError
device.mojom.FingerprintError = {
  UNKNOWN: 0,
  HW_UNAVAILABLE: 1,
  UNABLE_TO_PROCESS: 2,
  TIMEOUT: 3,
  NO_SPACE: 4,
  CANCELED: 5,
  UNABLE_TO_REMOVE: 6,
  LOCKOUT: 7,
  NO_TEMPLATES: 8,
};

// Enum: BiometricType
device.mojom.BiometricType = {
  UNKNOWN: 0,
  FINGERPRINT: 1,
};

// Enum: BiometricsManagerStatus
device.mojom.BiometricsManagerStatus = {
  UNKNOWN: 0,
  INITIALIZED: 1,
};

// Interface: FingerprintObserver
device.mojom.FingerprintObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.FingerprintObserver';
  }

  onRestarted() {
    // Method: OnRestarted
    // Call: OnRestarted()
  }

  onStatusChanged(status) {
    // Method: OnStatusChanged
    // Call: OnStatusChanged(status)
  }

  onEnrollScanDone(scan_result, is_complete, percent_complete) {
    // Method: OnEnrollScanDone
    // Call: OnEnrollScanDone(scan_result, is_complete, percent_complete)
  }

  onAuthScanDone(msg, matches) {
    // Method: OnAuthScanDone
    // Call: OnAuthScanDone(msg, matches)
  }

  onSessionFailed() {
    // Method: OnSessionFailed
    // Call: OnSessionFailed()
  }

};

device.mojom.FingerprintObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Fingerprint
device.mojom.FingerprintPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.Fingerprint';
  }

  getRecordsForUser(user_id) {
    // Method: GetRecordsForUser
    return new Promise((resolve) => {
      // Call: GetRecordsForUser(user_id)
      resolve({});
    });
  }

  startEnrollSession(user_id, label) {
    // Method: StartEnrollSession
    // Call: StartEnrollSession(user_id, label)
  }

  cancelCurrentEnrollSession() {
    // Method: CancelCurrentEnrollSession
    return new Promise((resolve) => {
      // Call: CancelCurrentEnrollSession()
      resolve({});
    });
  }

  requestRecordLabel(record_path) {
    // Method: RequestRecordLabel
    return new Promise((resolve) => {
      // Call: RequestRecordLabel(record_path)
      resolve({});
    });
  }

  setRecordLabel(record_path, new_label) {
    // Method: SetRecordLabel
    return new Promise((resolve) => {
      // Call: SetRecordLabel(record_path, new_label)
      resolve({});
    });
  }

  removeRecord(record_path) {
    // Method: RemoveRecord
    return new Promise((resolve) => {
      // Call: RemoveRecord(record_path)
      resolve({});
    });
  }

  startAuthSession() {
    // Method: StartAuthSession
    // Call: StartAuthSession()
  }

  endCurrentAuthSession() {
    // Method: EndCurrentAuthSession
    return new Promise((resolve) => {
      // Call: EndCurrentAuthSession()
      resolve({});
    });
  }

  destroyAllRecords() {
    // Method: DestroyAllRecords
    return new Promise((resolve) => {
      // Call: DestroyAllRecords()
      resolve({});
    });
  }

  addFingerprintObserver(observer) {
    // Method: AddFingerprintObserver
    // Call: AddFingerprintObserver(observer)
  }

  requestType() {
    // Method: RequestType
    return new Promise((resolve) => {
      // Call: RequestType()
      resolve({});
    });
  }

};

device.mojom.FingerprintRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
