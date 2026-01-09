// Auto-generated MojoJS binding
// Source: chromium_src/codelabs/mojo_examples/mojom/interface.mojom
// Module: codelabs.mojom

'use strict';

// Module namespace
var codelabs = codelabs || {};
codelabs.mojom = codelabs.mojom || {};


// Interface: ObjectA
codelabs.mojom.ObjectAPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'codelabs.mojom.ObjectA';
  }

  doA() {
    // Method: DoA
    // Call: DoA()
  }

};

codelabs.mojom.ObjectARequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ObjectB
codelabs.mojom.ObjectBPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'codelabs.mojom.ObjectB';
  }

  doB() {
    // Method: DoB
    // Call: DoB()
  }

};

codelabs.mojom.ObjectBRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: AssociatedProcess
codelabs.mojom.AssociatedProcessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'codelabs.mojom.AssociatedProcess';
  }

  setProcess(process) {
    // Method: SetProcess
    // Call: SetProcess(process)
  }

};

codelabs.mojom.AssociatedProcessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: GenericInterface
codelabs.mojom.GenericInterfacePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'codelabs.mojom.GenericInterface';
  }

};

codelabs.mojom.GenericInterfaceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Process
codelabs.mojom.ProcessPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'codelabs.mojom.Process';
  }

  sayHello() {
    // Method: SayHello
    // Call: SayHello()
  }

  getAssociatedInterface(name, receiver) {
    // Method: GetAssociatedInterface
    // Call: GetAssociatedInterface(name, receiver)
  }

};

codelabs.mojom.ProcessRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
