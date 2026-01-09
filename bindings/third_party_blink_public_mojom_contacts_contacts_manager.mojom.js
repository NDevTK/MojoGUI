// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/contacts/contacts_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Struct: ContactIconBlob
blink.mojom.ContactIconBlob = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Struct: ContactInfo
blink.mojom.ContactInfo = class {
  constructor(values = {}) {
    this.icon = values.icon !== undefined ? values.icon : "";
  }
};

// Interface: ContactsManager
blink.mojom.ContactsManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ContactsManager';
  }

  select(multiple, include_names, include_emails, include_tel, include_addresses, include_icons) {
    // Method: Select
    return new Promise((resolve) => {
      // Call: Select(multiple, include_names, include_emails, include_tel, include_addresses, include_icons)
      resolve({});
    });
  }

};

blink.mojom.ContactsManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
