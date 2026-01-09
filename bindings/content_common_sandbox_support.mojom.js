// Auto-generated MojoJS binding
// Source: chromium_src/content/common/sandbox_support.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: LcTypeString
content.mojom.LcTypeString = {
  kShortDate: 0,
  kYearMonth: 1,
  kTimeFormat: 2,
  kShortTime: 3,
};

// Enum: LcTypeStrings
content.mojom.LcTypeStrings = {
  2359: 0,
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

  initializeLocaleData() {
    // Method: InitializeLocaleData
    // Call: InitializeLocaleData()
  }

  digitsAndSigns(lcid, defaults) {
    // Method: DigitsAndSigns
    return new Promise((resolve) => {
      // Call: DigitsAndSigns(lcid, defaults)
      resolve({});
    });
  }

};

content.mojom.SandboxSupportRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
