// Auto-generated MojoJS binding
// Source: chromium_src/content/common/sandbox_support.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: LcTypeString
content.mojom.LcTypeString = {
};

// Enum: LcTypeStrings
content.mojom.LcTypeStrings = {
};

// Interface: SandboxSupport
content.mojom.SandboxSupportPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.SandboxSupport';
  }

  getSystemColors() {
    // Method: GetSystemColors
    return new Promise((resolve) => {
      // Call: GetSystemColors()
      resolve({});
    });
  }

  lcidAndFirstDayOfWeek(locale, default_language, defaults) {
    // Method: LcidAndFirstDayOfWeek
    return new Promise((resolve) => {
      // Call: LcidAndFirstDayOfWeek(locale, default_language, defaults)
      resolve({});
    });
  }

  digitsAndSigns(lcid, defaults) {
    // Method: DigitsAndSigns
    return new Promise((resolve) => {
      // Call: DigitsAndSigns(lcid, defaults)
      resolve({});
    });
  }

  localeString(lcid, defaults, type) {
    // Method: LocaleString
    return new Promise((resolve) => {
      // Call: LocaleString(lcid, defaults, type)
      resolve({});
    });
  }

  localeStrings(lcid, defaults, collection) {
    // Method: LocaleStrings
    return new Promise((resolve) => {
      // Call: LocaleStrings(lcid, defaults, collection)
      resolve({});
    });
  }

};

content.mojom.SandboxSupportRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
