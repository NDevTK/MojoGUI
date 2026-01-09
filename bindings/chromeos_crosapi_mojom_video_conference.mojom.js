// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/video_conference.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Enum: VideoConferenceAppUpdate
crosapi.mojom.VideoConferenceAppUpdate = {
};

// Enum: VideoConferenceMediaDevice
crosapi.mojom.VideoConferenceMediaDevice = {
};

// Enum: VideoConferenceAppType
crosapi.mojom.VideoConferenceAppType = {
};

// Struct: TitleChangeInfo
crosapi.mojom.TitleChangeInfo = class {
  constructor(values = {}) {
  }
};

// Struct: VideoConferenceClientUpdate
crosapi.mojom.VideoConferenceClientUpdate = class {
  constructor(values = {}) {
  }
};

// Struct: VideoConferenceMediaUsageStatus
crosapi.mojom.VideoConferenceMediaUsageStatus = class {
  constructor(values = {}) {
  }
};

// Struct: VideoConferenceMediaAppInfo
crosapi.mojom.VideoConferenceMediaAppInfo = class {
  constructor(values = {}) {
    this.is = values.is !== undefined ? values.is : null;
  }
};

// Interface: VideoConferenceManagerClient
crosapi.mojom.VideoConferenceManagerClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.VideoConferenceManagerClient';
  }

};

crosapi.mojom.VideoConferenceManagerClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
