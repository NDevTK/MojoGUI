// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/login.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Struct: SamlUserSessionProperties
crosapi.mojom.SamlUserSessionProperties = class {
  constructor(values = {}) {
    this.oauth_code@3 = values.oauth_code@3 !== undefined ? values.oauth_code@3 : "";
  }
};

// Interface: ExternalLogoutRequestObserver
crosapi.mojom.ExternalLogoutRequestObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.ExternalLogoutRequestObserver';
  }

  0() {
    // Method: 0
    // Call: 0()
  }

};

crosapi.mojom.ExternalLogoutRequestObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Login
crosapi.mojom.LoginPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.Login';
  }

  14(observer) {
    // Method: 14
    // Call: 14(observer)
  }

  extension() {
    // Method: extension
    // Call: extension()
  }

  screen() {
    // Method: screen
    // Call: screen()
  }

  16() {
    // Method: 16
    // Call: 16()
  }

  0(password) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(password)
      resolve({});
    });
  }

  4(password) {
    // Method: 4
    return new Promise((resolve) => {
      // Call: 4(password)
      resolve({});
    });
  }

  5(password) {
    // Method: 5
    return new Promise((resolve) => {
      // Call: 5(password)
      resolve({});
    });
  }

  6(password) {
    // Method: 6
    return new Promise((resolve) => {
      // Call: 6(password)
      resolve({});
    });
  }

  7(password) {
    // Method: 7
    return new Promise((resolve) => {
      // Call: 7(password)
      resolve({});
    });
  }

  10(properties) {
    // Method: 10
    return new Promise((resolve) => {
      // Call: 10(properties)
      resolve({});
    });
  }

  12(password) {
    // Method: 12
    return new Promise((resolve) => {
      // Call: 12(password)
      resolve({});
    });
  }

};

crosapi.mojom.LoginRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
