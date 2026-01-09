// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/hid.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Enum: HidBusType
device.mojom.HidBusType = {
  kHIDBusTypeUSB: 0,
  kHIDBusTypeBluetooth: 1,
};

// Struct: HidUsageAndPage
device.mojom.HidUsageAndPage = class {
  constructor(values = {}) {
    this.usage_page@1 = values.usage_page@1 !== undefined ? values.usage_page@1 : 0;
  }
};

// Struct: HidReportItem
device.mojom.HidReportItem = class {
  constructor(values = {}) {
    this.is_buffered_bytes@9 = values.is_buffered_bytes@9 !== undefined ? values.is_buffered_bytes@9 : false;
    this.usages@10 = values.usages@10 !== undefined ? values.usages@10 : [];
    this.of = values.of !== undefined ? values.of : null;
    this.usage_maximum@12 = values.usage_maximum@12 !== undefined ? values.usage_maximum@12 : null;
    this.designator_maximum@14 = values.designator_maximum@14 !== undefined ? values.designator_maximum@14 : 0;
    this.string_maximum@16 = values.string_maximum@16 !== undefined ? values.string_maximum@16 : 0;
    this.physical_maximum@20 = values.physical_maximum@20 !== undefined ? values.physical_maximum@20 : 0;
    this.unit_exponent@21 = values.unit_exponent@21 !== undefined ? values.unit_exponent@21 : 0;
    this.report_count@24 = values.report_count@24 !== undefined ? values.report_count@24 : 0;
  }
};

// Struct: HidReportDescription
device.mojom.HidReportDescription = class {
  constructor(values = {}) {
    this.items@1 = values.items@1 !== undefined ? values.items@1 : 0;
  }
};

// Struct: HidCollectionInfo
device.mojom.HidCollectionInfo = class {
  constructor(values = {}) {
    this.usage@0 = values.usage@0 !== undefined ? values.usage@0 : null;
    this.feature_reports@5 = values.feature_reports@5 !== undefined ? values.feature_reports@5 : 0;
    this.the = values.the !== undefined ? values.the : null;
    this.children@6 = values.children@6 !== undefined ? values.children@6 : [];
  }
};

// Struct: HidDeviceInfo
device.mojom.HidDeviceInfo = class {
  constructor(values = {}) {
    this.guid@0 = values.guid@0 !== undefined ? values.guid@0 : "";
    this.product_id@3 = values.product_id@3 !== undefined ? values.product_id@3 : 0;
    this.product_name@4 = values.product_name@4 !== undefined ? values.product_name@4 : "";
    this.bus_type@6 = values.bus_type@6 !== undefined ? values.bus_type@6 : "";
    this.has_report_id@9 = values.has_report_id@9 !== undefined ? values.has_report_id@9 : 0;
    this.is_excluded_by_blocklist@17 = values.is_excluded_by_blocklist@17 !== undefined ? values.is_excluded_by_blocklist@17 : 0;
  }
};

// Interface: HidManagerClient
device.mojom.HidManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidManagerClient';
  }

};

device.mojom.HidManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidManager
device.mojom.HidManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidManager';
  }

};

device.mojom.HidManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidConnection
device.mojom.HidConnectionPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidConnection';
  }

};

device.mojom.HidConnectionRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidConnectionClient
device.mojom.HidConnectionClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidConnectionClient';
  }

};

device.mojom.HidConnectionClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HidConnectionWatcher
device.mojom.HidConnectionWatcherPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'device.mojom.HidConnectionWatcher';
  }

};

device.mojom.HidConnectionWatcherRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
