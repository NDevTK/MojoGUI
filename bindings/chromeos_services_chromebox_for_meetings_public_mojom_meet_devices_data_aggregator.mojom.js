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

};

ash.cfm.mojom.DataAggregatorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
