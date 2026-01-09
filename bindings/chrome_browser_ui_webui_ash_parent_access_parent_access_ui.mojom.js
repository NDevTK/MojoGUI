// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/ash/parent_access/parent_access_ui.mojom
// Module: parent_access_ui.mojom

'use strict';

// Module namespace
var parent_access_ui = parent_access_ui || {};
parent_access_ui.mojom = parent_access_ui.mojom || {};


// Enum: GetOauthTokenStatus
parent_access_ui.mojom.GetOauthTokenStatus = {
};

// Enum: ParentAccessServerMessageType
parent_access_ui.mojom.ParentAccessServerMessageType = {
};

// Enum: FlowType
parent_access_ui.mojom.FlowType = {
};

// Enum: ParentAccessResult
parent_access_ui.mojom.ParentAccessResult = {
};

// Struct: ParentAccessServerMessage
parent_access_ui.mojom.ParentAccessServerMessage = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : null;
  }
};

// Struct: ParentAccessParams
parent_access_ui.mojom.ParentAccessParams = class {
  constructor(values = {}) {
    this.kWebsiteAccess = values.kWebsiteAccess !== undefined ? values.kWebsiteAccess : null;
  }
};

// Struct: WebApprovalsParams
parent_access_ui.mojom.WebApprovalsParams = class {
  constructor(values = {}) {
    this.favicon_png_bytes = values.favicon_png_bytes !== undefined ? values.favicon_png_bytes : 0;
  }
};

// Struct: ExtensionApprovalsParams
parent_access_ui.mojom.ExtensionApprovalsParams = class {
  constructor(values = {}) {
    this.extension_name = values.extension_name !== undefined ? values.extension_name : "";
    this.permissions = values.permissions !== undefined ? values.permissions : 0;
  }
};

// Struct: ExtensionPermission
parent_access_ui.mojom.ExtensionPermission = class {
  constructor(values = {}) {
    this.details = values.details !== undefined ? values.details : "";
  }
};

// Interface: ParentAccessUiHandler
parent_access_ui.mojom.ParentAccessUiHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'parent_access_ui.mojom.ParentAccessUiHandler';
  }

  getOauthToken() {
    // Method: GetOauthToken
    return new Promise((resolve) => {
      // Call: GetOauthToken()
      resolve({});
    });
  }

  onParentAccessCallbackReceived(encoded_parent_access_callback_proto) {
    // Method: OnParentAccessCallbackReceived
    return new Promise((resolve) => {
      // Call: OnParentAccessCallbackReceived(encoded_parent_access_callback_proto)
      resolve({});
    });
  }

  getParentAccessParams() {
    // Method: GetParentAccessParams
    return new Promise((resolve) => {
      // Call: GetParentAccessParams()
      resolve({});
    });
  }

  getParentAccessUrl() {
    // Method: GetParentAccessUrl
    return new Promise((resolve) => {
      // Call: GetParentAccessUrl()
      resolve({});
    });
  }

  onParentAccessDone(result) {
    // Method: OnParentAccessDone
    // Call: OnParentAccessDone(result)
  }

  onBeforeScreenDone() {
    // Method: OnBeforeScreenDone
    // Call: OnBeforeScreenDone()
  }

};

parent_access_ui.mojom.ParentAccessUiHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
