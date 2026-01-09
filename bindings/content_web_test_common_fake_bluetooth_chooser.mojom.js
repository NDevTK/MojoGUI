// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/fake_bluetooth_chooser.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: ChooserEventType
content.mojom.ChooserEventType = {
  CHOOSER_OPENED: 0,
  CHOOSER_CLOSED: 1,
  ADAPTER_REMOVED: 2,
  ADAPTER_DISABLED: 3,
  ADAPTER_ENABLED: 4,
  DISCOVERY_FAILED_TO_START: 5,
  DISCOVERING: 6,
  DISCOVERY_IDLE: 7,
  ADD_OR_UPDATE_DEVICE: 8,
  UNAUTHORIZED: 9,
};

// Struct: FakeBluetoothChooserEvent
content.mojom.FakeBluetoothChooserEvent = class {
  constructor(values = {}) {
    this.peripheral_address = values.peripheral_address !== undefined ? values.peripheral_address : "";
  }
};

// Interface: FakeBluetoothChooser
content.mojom.FakeBluetoothChooserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FakeBluetoothChooser';
  }

  selectPeripheral(peripheral_address) {
    // Method: SelectPeripheral
    // Call: SelectPeripheral(peripheral_address)
  }

  cancel() {
    // Method: Cancel
    // Call: Cancel()
  }

  rescan() {
    // Method: Rescan
    // Call: Rescan()
  }

};

content.mojom.FakeBluetoothChooserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FakeBluetoothChooserFactory
content.mojom.FakeBluetoothChooserFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FakeBluetoothChooserFactory';
  }

  createFakeBluetoothChooser(fake_chooser, client) {
    // Method: CreateFakeBluetoothChooser
    // Call: CreateFakeBluetoothChooser(fake_chooser, client)
  }

};

content.mojom.FakeBluetoothChooserFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FakeBluetoothChooserClient
content.mojom.FakeBluetoothChooserClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.FakeBluetoothChooserClient';
  }

  onEvent(event) {
    // Method: OnEvent
    // Call: OnEvent(event)
  }

};

content.mojom.FakeBluetoothChooserClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
