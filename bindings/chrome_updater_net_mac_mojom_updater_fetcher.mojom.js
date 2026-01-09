// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/net/mac/mojom/updater_fetcher.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};


// Interface: PostRequestObserver
updater.mojom.PostRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.PostRequestObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.PostRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.PostRequestObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.PostRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.PostRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponseStarted(http_status_code, content_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec.$,
      null,
      [http_status_code, content_length]);
  }

  onProgress(current) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.PostRequestObserver_OnProgress_ParamsSpec.$,
      null,
      [current]);
  }

  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec.$,
      null,
      [response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec]);
  }

};

updater.mojom.PostRequestObserver.getRemote = function() {
  let remote = new updater.mojom.PostRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.PostRequestObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnResponseStarted
updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PostRequestObserver.OnResponseStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'http_status_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProgress
updater.mojom.PostRequestObserver_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PostRequestObserver.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'current', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnRequestComplete
updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PostRequestObserver.OnRequestComplete_Params',
      packedSize: 56,
      fields: [
        { name: 'response_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_etag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_x_cup_server_proof', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'header_set_cookie', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'xheader_retry_after_sec', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
updater.mojom.PostRequestObserverPtr = updater.mojom.PostRequestObserverRemote;
updater.mojom.PostRequestObserverRequest = updater.mojom.PostRequestObserverPendingReceiver;


// Interface: FileDownloadObserver
updater.mojom.FileDownloadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.FileDownloadObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FileDownloadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.FileDownloadObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.FileDownloadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.FileDownloadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponseStarted(http_status_code, content_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec.$,
      null,
      [http_status_code, content_length]);
  }

  onProgress(current) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec.$,
      null,
      [current]);
  }

  onDownloadComplete(net_error, content_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec.$,
      null,
      [net_error, content_size]);
  }

};

updater.mojom.FileDownloadObserver.getRemote = function() {
  let remote = new updater.mojom.FileDownloadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FileDownloadObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnResponseStarted
updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FileDownloadObserver.OnResponseStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'http_status_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_length', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnProgress
updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FileDownloadObserver.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'current', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDownloadComplete
updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FileDownloadObserver.OnDownloadComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'net_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
updater.mojom.FileDownloadObserverPtr = updater.mojom.FileDownloadObserverRemote;
updater.mojom.FileDownloadObserverRequest = updater.mojom.FileDownloadObserverPendingReceiver;


// Interface: FetchService
updater.mojom.FetchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.FetchServiceRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FetchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.FetchServicePendingReceiver,
      handle);
    this.$ = new updater.mojom.FetchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.FetchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postRequest(url, post_data, content_type, additional_headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.FetchService_PostRequest_ParamsSpec.$,
      updater.mojom.FetchService_PostRequest_ResponseParamsSpec.$,
      [url, post_data, content_type, additional_headers]);
  }

  downloadToFile(url, output_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.FetchService_DownloadToFile_ParamsSpec.$,
      updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec.$,
      [url, output_file]);
  }

};

updater.mojom.FetchService.getRemote = function() {
  let remote = new updater.mojom.FetchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FetchService',
    'context');
  return remote.$;
};

// ParamsSpec for PostRequest
updater.mojom.FetchService_PostRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.PostRequest_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'post_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'content_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'additional_headers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

updater.mojom.FetchService_PostRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.PostRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DownloadToFile
updater.mojom.FetchService_DownloadToFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.DownloadToFile_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'output_file', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.DownloadToFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
updater.mojom.FetchServicePtr = updater.mojom.FetchServiceRemote;
updater.mojom.FetchServiceRequest = updater.mojom.FetchServicePendingReceiver;

