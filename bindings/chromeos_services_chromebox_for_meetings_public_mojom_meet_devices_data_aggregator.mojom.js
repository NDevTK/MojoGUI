// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_data_aggregator.mojom
// Module: ash.cfm.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cfm = ash.cfm || {};
ash.cfm.mojom = ash.cfm.mojom || {};


// Enum: FilterType
ash.cfm.mojom.FilterType = {
  CHANGE: 0,
};

// Struct: DataFilter
ash.cfm.mojom.DataFilter = class {
  constructor(values = {}) {
    this.REGEX = values.REGEX !== undefined ? values.REGEX : null;
  }
};

// Interface: DataWatchDog
ash.cfm.mojom.DataWatchDogPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cfm.mojom.DataWatchDog';
  }

  0(data) {
    // Method: 0
    // Call: 0(data)
  }

};

ash.cfm.mojom.DataWatchDogRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DataSource
ash.cfm.mojom.DataSourcePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cfm.mojom.DataSource';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(filter, watch_dog) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(filter, watch_dog)
      resolve({});
    });
  }

  step(logs) {
    // Method: step
    // Call: step(logs)
  }

  2() {
    // Method: 2
    // Call: 2()
  }

};

ash.cfm.mojom.DataSourceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DataAggregator
ash.cfm.mojom.DataAggregatorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.cfm.mojom.DataAggregator';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(source_name, data_source) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(source_name, data_source)
      resolve({});
    });
  }

  2(source_name, filter, watch_dog) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(source_name, filter, watch_dog)
      resolve({});
    });
  }

};

ash.cfm.mojom.DataAggregatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
