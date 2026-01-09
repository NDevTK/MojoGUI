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
  }
};

// Interface: ExternalLogoutRequestObserver
crosapi.mojom.ExternalLogoutRequestObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'crosapi.mojom.ExternalLogoutRequestObserver';
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

};

crosapi.mojom.LoginRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
