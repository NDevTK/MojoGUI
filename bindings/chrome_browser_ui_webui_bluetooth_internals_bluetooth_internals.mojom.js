// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/bluetooth_internals/bluetooth_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: DebugLogsChangeHandler
mojom.DebugLogsChangeHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.DebugLogsChangeHandler';
  }

  changeDebugLogsState(should_debug_logs_be_enabled) {
    // Method: ChangeDebugLogsState
    // Call: ChangeDebugLogsState(should_debug_logs_be_enabled)
  }

};

mojom.DebugLogsChangeHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothInternalsHandler
mojom.BluetoothInternalsHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.BluetoothInternalsHandler';
  }

  getAdapter() {
    // Method: GetAdapter
    return new Promise((resolve) => {
      // Call: GetAdapter()
      resolve({});
    });
  }

  supported(user) {
    // Method: supported
    // Call: supported(user)
  }

  getDebugLogsChangeHandler() {
    // Method: GetDebugLogsChangeHandler
    return new Promise((resolve) => {
      // Call: GetDebugLogsChangeHandler()
      resolve({});
    });
  }

  checkSystemPermissions() {
    // Method: CheckSystemPermissions
    return new Promise((resolve) => {
      // Call: CheckSystemPermissions()
      resolve({});
    });
  }

  requestSystemPermissions() {
    // Method: RequestSystemPermissions
    // Call: RequestSystemPermissions()
  }

  requestLocationServices() {
    // Method: RequestLocationServices
    // Call: RequestLocationServices()
  }

  restartSystemBluetooth() {
    // Method: RestartSystemBluetooth
    // Call: RestartSystemBluetooth()
  }

  startBtsnoop() {
    // Method: StartBtsnoop
    return new Promise((resolve) => {
      // Call: StartBtsnoop()
      resolve({});
    });
  }

  isBtsnoopFeatureEnabled() {
    // Method: IsBtsnoopFeatureEnabled
    return new Promise((resolve) => {
      // Call: IsBtsnoopFeatureEnabled()
      resolve({});
    });
  }

};

mojom.BluetoothInternalsHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BluetoothBtsnoop
mojom.BluetoothBtsnoopPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'mojom.BluetoothBtsnoop';
  }

  startBtsnoop() {
    // Method: StartBtsnoop
    // Call: StartBtsnoop()
  }

  stop() {
    // Method: Stop
    return new Promise((resolve) => {
      // Call: Stop()
      resolve({});
    });
  }

};

mojom.BluetoothBtsnoopRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
