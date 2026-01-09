// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/mojo_capability_control_test_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: TestInterfaceForDefer
content.mojom.TestInterfaceForDeferPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.TestInterfaceForDefer';
  }

  ping() {
    // Method: Ping
    // Call: Ping()
  }

};

content.mojom.TestInterfaceForDeferRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TestInterfaceForGrant
content.mojom.TestInterfaceForGrantPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.TestInterfaceForGrant';
  }

};

content.mojom.TestInterfaceForGrantRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TestInterfaceForCancel
content.mojom.TestInterfaceForCancelPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.TestInterfaceForCancel';
  }

};

content.mojom.TestInterfaceForCancelRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TestInterfaceForUnexpected
content.mojom.TestInterfaceForUnexpectedPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.TestInterfaceForUnexpected';
  }

};

content.mojom.TestInterfaceForUnexpectedRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MojoContextProvider
content.mojom.MojoContextProviderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.mojom.MojoContextProvider';
  }

  grantAll() {
    // Method: GrantAll
    // Call: GrantAll()
  }

};

content.mojom.MojoContextProviderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
