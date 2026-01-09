// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/keep_alive_handle_factory.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: KeepAliveHandleFactory
blink.mojom.KeepAliveHandleFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.KeepAliveHandleFactory';
  }

  issueKeepAliveHandle(keep_alive_handle) {
    // Method: IssueKeepAliveHandle
    // Call: IssueKeepAliveHandle(keep_alive_handle)
  }

};

blink.mojom.KeepAliveHandleFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
