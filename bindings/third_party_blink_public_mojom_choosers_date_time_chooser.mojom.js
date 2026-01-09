// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/date_time_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: DateTimeSuggestion
blink.mojom.DateTimeSuggestion = class {
  constructor(values = {}) {
    this.label = values.label !== undefined ? values.label : 0;
  }
};

// Struct: DateTimeDialogValue
blink.mojom.DateTimeDialogValue = class {
  constructor(values = {}) {
    this.suggestions = values.suggestions !== undefined ? values.suggestions : 0;
  }
};

// Interface: DateTimeChooser
blink.mojom.DateTimeChooserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.DateTimeChooser';
  }

  openDateTimeDialog(value) {
    // Method: OpenDateTimeDialog
    return new Promise((resolve) => {
      // Call: OpenDateTimeDialog(value)
      resolve({});
    });
  }

  closeDateTimeDialog() {
    // Method: CloseDateTimeDialog
    // Call: CloseDateTimeDialog()
  }

};

blink.mojom.DateTimeChooserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
