// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/privacy_sandbox_internals.mojom
// Module: privacy_sandbox_internals.mojom

'use strict';

// Module namespace
var privacy_sandbox_internals = privacy_sandbox_internals || {};
privacy_sandbox_internals.mojom = privacy_sandbox_internals.mojom || {};


// Struct: PrivacySandboxInternalsPref
privacy_sandbox_internals.mojom.PrivacySandboxInternalsPref = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Interface: PageHandler
privacy_sandbox_internals.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'privacy_sandbox_internals.mojom.PageHandler';
  }

  readPrefsWithPrefixes(pref_prefixes) {
    // Method: ReadPrefsWithPrefixes
    return new Promise((resolve) => {
      // Call: ReadPrefsWithPrefixes(pref_prefixes)
      resolve({});
    });
  }

  readContentSettings(type) {
    // Method: ReadContentSettings
    return new Promise((resolve) => {
      // Call: ReadContentSettings(type)
      resolve({});
    });
  }

  getTpcdMetadataGrants() {
    // Method: GetTpcdMetadataGrants
    return new Promise((resolve) => {
      // Call: GetTpcdMetadataGrants()
      resolve({});
    });
  }

  contentSettingsPatternToString(pattern) {
    // Method: ContentSettingsPatternToString
    return new Promise((resolve) => {
      // Call: ContentSettingsPatternToString(pattern)
      resolve({});
    });
  }

  stringToContentSettingsPattern(s) {
    // Method: StringToContentSettingsPattern
    return new Promise((resolve) => {
      // Call: StringToContentSettingsPattern(s)
      resolve({});
    });
  }

};

privacy_sandbox_internals.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
privacy_sandbox_internals.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'privacy_sandbox_internals.mojom.Page';
  }

};

privacy_sandbox_internals.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
