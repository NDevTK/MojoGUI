// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/error_notification.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: ErrorType
arc.mojom.ErrorType = {
  ANR: 0,
};

// Struct: ErrorDetails
arc.mojom.ErrorDetails = class {
  constructor(values = {}) {
    this.buttonLabels = values.buttonLabels !== undefined ? values.buttonLabels : "";
  }
};

// Interface: ErrorNotificationHost
arc.mojom.ErrorNotificationHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ErrorNotificationHost';
  }

};

arc.mojom.ErrorNotificationHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ErrorNotificationInstance
arc.mojom.ErrorNotificationInstancePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ErrorNotificationInstance';
  }

};

arc.mojom.ErrorNotificationInstanceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ErrorNotificationItem
arc.mojom.ErrorNotificationItemPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ErrorNotificationItem';
  }

};

arc.mojom.ErrorNotificationItemRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ErrorNotificationActionHandler
arc.mojom.ErrorNotificationActionHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'arc.mojom.ErrorNotificationActionHandler';
  }

};

arc.mojom.ErrorNotificationActionHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
