// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/net/mac/mojom/updater_fetcher.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};


// Struct: HttpHeader
updater.mojom.HttpHeader = class {
  constructor(values = {}) {
    this.value = values.value !== undefined ? values.value : "";
  }
};

// Interface: PostRequestObserver
updater.mojom.PostRequestObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater.mojom.PostRequestObserver';
  }

  onResponseStarted(http_status_code, content_length) {
    // Method: OnResponseStarted
    // Call: OnResponseStarted(http_status_code, content_length)
  }

  onProgress(current) {
    // Method: OnProgress
    // Call: OnProgress(current)
  }

  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    // Method: OnRequestComplete
    // Call: OnRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec)
  }

};

updater.mojom.PostRequestObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FileDownloadObserver
updater.mojom.FileDownloadObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater.mojom.FileDownloadObserver';
  }

  onResponseStarted(http_status_code, content_length) {
    // Method: OnResponseStarted
    // Call: OnResponseStarted(http_status_code, content_length)
  }

  onProgress(current) {
    // Method: OnProgress
    // Call: OnProgress(current)
  }

  onDownloadComplete(net_error, content_size) {
    // Method: OnDownloadComplete
    // Call: OnDownloadComplete(net_error, content_size)
  }

};

updater.mojom.FileDownloadObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: FetchService
updater.mojom.FetchServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'updater.mojom.FetchService';
  }

  postRequest(url, post_data, content_type, additional_headers) {
    // Method: PostRequest
    return new Promise((resolve) => {
      // Call: PostRequest(url, post_data, content_type, additional_headers)
      resolve({});
    });
  }

  downloadToFile(url, output_file) {
    // Method: DownloadToFile
    return new Promise((resolve) => {
      // Call: DownloadToFile(url, output_file)
      resolve({});
    });
  }

};

updater.mojom.FetchServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
