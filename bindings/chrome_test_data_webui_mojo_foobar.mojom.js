// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/foobar.mojom
// Module: test.mojom

'use strict';

// Module namespace
var test = test || {};
test.mojom = test.mojom || {};


// Interface: Foo
test.mojom.FooPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'test.mojom.Foo';
  }

  getFoo() {
    // Method: GetFoo
    return new Promise((resolve) => {
      // Call: GetFoo()
      resolve({});
    });
  }

};

test.mojom.FooRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Bar
test.mojom.BarPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'test.mojom.Bar';
  }

  getBar() {
    // Method: GetBar
    return new Promise((resolve) => {
      // Call: GetBar()
      resolve({});
    });
  }

};

test.mojom.BarRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Baz
test.mojom.BazPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'test.mojom.Baz';
  }

  getBaz() {
    // Method: GetBaz
    return new Promise((resolve) => {
      // Call: GetBaz()
      resolve({});
    });
  }

};

test.mojom.BazRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
