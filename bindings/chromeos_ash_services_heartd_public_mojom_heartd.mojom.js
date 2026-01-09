// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/heartd/public/mojom/heartd.mojom
// Module: ash.heartd.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.heartd = ash.heartd || {};
ash.heartd.mojom = ash.heartd.mojom || {};


// Enum: HeartbeatResponse
ash.heartd.mojom.HeartbeatResponse = {
  kSuccess: 0,
  kRateLimit: 1,
  kNotAllowed: 2,
};

// Enum: ServiceName
ash.heartd.mojom.ServiceName = {
  kKiosk: 0,
};

// Enum: ActionType
ash.heartd.mojom.ActionType = {
  kNormalReboot: 0,
  kForceReboot: 1,
};

// Struct: HeartbeatServiceArgument
ash.heartd.mojom.HeartbeatServiceArgument = class {
  constructor(values = {}) {
    this.actions@0 = values.actions@0 !== undefined ? values.actions@0 : [];
    this.verification_window_seconds@1 = values.verification_window_seconds@1 !== undefined ? values.verification_window_seconds@1 : 0;
  }
};

// Struct: Action
ash.heartd.mojom.Action = class {
  constructor(values = {}) {
    this.action@1 = values.action@1 !== undefined ? values.action@1 : 0;
  }
};

// Interface: HeartdControl
ash.heartd.mojom.HeartdControlPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.heartd.mojom.HeartdControl';
  }

};

ash.heartd.mojom.HeartdControlRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: HeartbeatService
ash.heartd.mojom.HeartbeatServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.heartd.mojom.HeartbeatService';
  }

};

ash.heartd.mojom.HeartbeatServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Pacemaker
ash.heartd.mojom.PacemakerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.heartd.mojom.Pacemaker';
  }

};

ash.heartd.mojom.PacemakerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
