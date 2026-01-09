// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_url_opener.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Enum: OpenUrlResult
remoting.mojom.OpenUrlResult = {
  UNSPECIFIED_OPEN_URL_RESULT: 0,
};

// Interface: RemoteUrlOpener
remoting.mojom.RemoteUrlOpenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'remoting.mojom.RemoteUrlOpener';
  }

  openUrl(url) {
    // Method: OpenUrl
    return new Promise((resolve) => {
      // Call: OpenUrl(url)
      resolve({});
    });
  }

};

remoting.mojom.RemoteUrlOpenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
