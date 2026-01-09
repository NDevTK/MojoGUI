// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/firmware_update_ui/mojom/firmware_update.mojom
// Module: ash.firmware_update.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.firmware_update = ash.firmware_update || {};
ash.firmware_update.mojom = ash.firmware_update.mojom || {};


// Enum: UpdatePriority
ash.firmware_update.mojom.UpdatePriority = {
  kLow: 0,
  kMedium: 1,
  kHigh: 2,
  kCritical: 3,
};

// Enum: UpdateState
ash.firmware_update.mojom.UpdateState = {
  kUnknown: 0,
  kIdle: 1,
  kUpdating: 2,
  kRestarting: 3,
  kFailed: 4,
  kSuccess: 5,
  kWaitingForUser: 6,
};

// Enum: DeviceRequestId
ash.firmware_update.mojom.DeviceRequestId = {
};

// Enum: DeviceRequestKind
ash.firmware_update.mojom.DeviceRequestKind = {
  so: 0,
};

// Struct: FirmwareUpdate
ash.firmware_update.mojom.FirmwareUpdate = class {
  constructor(values = {}) {
    this.device_id = values.device_id !== undefined ? values.device_id : "";
    this.filepath = values.filepath !== undefined ? values.filepath : 0;
  }
};

// Struct: InstallationProgress
ash.firmware_update.mojom.InstallationProgress = class {
  constructor(values = {}) {
    this.state = values.state !== undefined ? values.state : 0;
  }
};

// Struct: DeviceRequest
ash.firmware_update.mojom.DeviceRequest = class {
  constructor(values = {}) {
    this.kind = values.kind !== undefined ? values.kind : null;
  }
};

// Interface: UpdateObserver
ash.firmware_update.mojom.UpdateObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.firmware_update.mojom.UpdateObserver';
  }

  onUpdateListChanged(firmware_updates) {
    // Method: OnUpdateListChanged
    // Call: OnUpdateListChanged(firmware_updates)
  }

};

ash.firmware_update.mojom.UpdateObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DeviceRequestObserver
ash.firmware_update.mojom.DeviceRequestObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.firmware_update.mojom.DeviceRequestObserver';
  }

  onDeviceRequest(request) {
    // Method: OnDeviceRequest
    // Call: OnDeviceRequest(request)
  }

};

ash.firmware_update.mojom.DeviceRequestObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UpdateProgressObserver
ash.firmware_update.mojom.UpdateProgressObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.firmware_update.mojom.UpdateProgressObserver';
  }

  onStatusChanged(update) {
    // Method: OnStatusChanged
    // Call: OnStatusChanged(update)
  }

};

ash.firmware_update.mojom.UpdateProgressObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: UpdateProvider
ash.firmware_update.mojom.UpdateProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.firmware_update.mojom.UpdateProvider';
  }

  observePeripheralUpdates(observer) {
    // Method: ObservePeripheralUpdates
    // Call: ObservePeripheralUpdates(observer)
  }

  prepareForUpdate(device_id) {
    // Method: PrepareForUpdate
    return new Promise((resolve) => {
      // Call: PrepareForUpdate(device_id)
      resolve({});
    });
  }

  fetchInProgressUpdate() {
    // Method: FetchInProgressUpdate
    return new Promise((resolve) => {
      // Call: FetchInProgressUpdate()
      resolve({});
    });
  }

};

ash.firmware_update.mojom.UpdateProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InstallController
ash.firmware_update.mojom.InstallControllerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.firmware_update.mojom.InstallController';
  }

  beginUpdate(device_id, filepath) {
    // Method: BeginUpdate
    // Call: BeginUpdate(device_id, filepath)
  }

  addDeviceRequestObserver(observer) {
    // Method: AddDeviceRequestObserver
    // Call: AddDeviceRequestObserver(observer)
  }

  addUpdateProgressObserver(observer) {
    // Method: AddUpdateProgressObserver
    // Call: AddUpdateProgressObserver(observer)
  }

};

ash.firmware_update.mojom.InstallControllerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: SystemUtils
ash.firmware_update.mojom.SystemUtilsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.firmware_update.mojom.SystemUtils';
  }

  restart() {
    // Method: Restart
    // Call: Restart()
  }

};

ash.firmware_update.mojom.SystemUtilsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
