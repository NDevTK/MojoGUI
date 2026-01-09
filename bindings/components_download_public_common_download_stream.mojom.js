// Auto-generated MojoJS binding
// Source: chromium_src/components/download/public/common/download_stream.mojom
// Module: download.mojom

'use strict';

// Module namespace
var download = download || {};
download.mojom = download.mojom || {};


// Enum: NetworkRequestStatus
download.mojom.NetworkRequestStatus = {
  OK: 0,
  NETWORK_TIMEOUT: 1,
  NETWORK_DISCONNECTED: 2,
  NETWORK_SERVER_DOWN: 3,
  SERVER_NO_RANGE: 4,
  SERVER_CONTENT_LENGTH_MISMATCH: 5,
  SERVER_UNREACHABLE: 6,
  SERVER_CERT_PROBLEM: 7,
  USER_CANCELED: 8,
  NETWORK_FAILED: 9,
};

// Struct: DownloadStreamHandle
download.mojom.DownloadStreamHandle = class {
  constructor(values = {}) {
    this.client_receiver = values.client_receiver !== undefined ? values.client_receiver : null;
  }
};

// Interface: DownloadStreamClient
download.mojom.DownloadStreamClientPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'download.mojom.DownloadStreamClient';
  }

  onStreamCompleted(status) {
    // Method: OnStreamCompleted
    // Call: OnStreamCompleted(status)
  }

};

download.mojom.DownloadStreamClientRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
