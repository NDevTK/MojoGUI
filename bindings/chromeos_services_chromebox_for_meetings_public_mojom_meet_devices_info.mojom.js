// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/meet_devices_info.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Struct: PolicyInfo
chromeos.cfm.mojom.PolicyInfo = class {
  constructor(values = {}) {
    this.release_channel_delegated@6 = values.release_channel_delegated@6 !== undefined ? values.release_channel_delegated@6 : 0;
  }
};

// Struct: SysInfo
chromeos.cfm.mojom.SysInfo = class {
  constructor(values = {}) {
    this.release_board@7 = values.release_board@7 !== undefined ? values.release_board@7 : "";
  }
};

// Struct: MachineStatisticsInfo
chromeos.cfm.mojom.MachineStatisticsInfo = class {
  constructor(values = {}) {
    this.hwid = values.hwid !== undefined ? values.hwid : "";
  }
};

// Interface: MeetDevicesInfo
chromeos.cfm.mojom.MeetDevicesInfoPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.MeetDevicesInfo';
  }

};

chromeos.cfm.mojom.MeetDevicesInfoRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: PolicyInfoObserver
chromeos.cfm.mojom.PolicyInfoObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.PolicyInfoObserver';
  }

};

chromeos.cfm.mojom.PolicyInfoObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
