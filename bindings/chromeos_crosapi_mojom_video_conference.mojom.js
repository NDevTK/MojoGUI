// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_conference.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: VideoConferenceAppUpdate
crosapi.mojom.VideoConferenceAppUpdate = {
  kAppAdded: 0,
  kAppRemoved: 1,
};

// Enum: VideoConferenceMediaDevice
crosapi.mojom.VideoConferenceMediaDevice = {
  kMicrophone: 0,
  kCamera: 1,
};

// Enum: VideoConferenceAppType
crosapi.mojom.VideoConferenceAppType = {
  but: 0,
  kChromeTab: 1,
  kChromeExtension: 2,
  kChromeApp: 3,
  kWebApp: 4,
  kArcApp: 5,
  but: 6,
  but: 7,
};

// Struct: TitleChangeInfo
crosapi.mojom.TitleChangeInfo = class {
  constructor(values = {}) {
    this.new_title@1 = values.new_title@1 !== undefined ? values.new_title@1 : "";
  }
};

// Struct: VideoConferenceClientUpdate
crosapi.mojom.VideoConferenceClientUpdate = class {
  constructor(values = {}) {
    this.title_change_info@1 = values.title_change_info@1 !== undefined ? values.title_change_info@1 : null;
  }
};

// Struct: VideoConferenceMediaUsageStatus
crosapi.mojom.VideoConferenceMediaUsageStatus = class {
  constructor(values = {}) {
    this.is_capturing_screen@6 = values.is_capturing_screen@6 !== undefined ? values.is_capturing_screen@6 : false;
  }
};

// Struct: VideoConferenceMediaAppInfo
crosapi.mojom.VideoConferenceMediaAppInfo = class {
  constructor(values = {}) {
    this.is_capturing_screen@4 = values.is_capturing_screen@4 !== undefined ? values.is_capturing_screen@4 : false;
    this.is = values.is !== undefined ? values.is : null;
    this.title@5 = values.title@5 !== undefined ? values.title@5 : "";
    this.app_type@7 = values.app_type@7 !== undefined ? values.app_type@7 : null;
  }
};

// Interface: VideoConferenceManagerClient
crosapi.mojom.VideoConferenceManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.VideoConferenceManagerClient';
  }

  0() {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0()
      resolve({});
    });
  }

  1(id) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(id)
      resolve({});
    });
  }

  2(device, enabled) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(device, enabled)
      resolve({});
    });
  }

  3() {
    // Method: 3
    // Call: 3()
  }

};

crosapi.mojom.VideoConferenceManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
