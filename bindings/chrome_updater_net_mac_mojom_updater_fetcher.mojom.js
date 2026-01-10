// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/net/mac/mojom/updater_fetcher.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};
var url = url || {};


// Struct: HttpHeader
updater.mojom.mojom.HttpHeaderSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.HttpHeader',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PostRequestObserver
updater.mojom.mojom.PostRequestObserver = {};

updater.mojom.mojom.PostRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.mojom.PostRequestObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.PostRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.mojom.PostRequestObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.mojom.PostRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.mojom.PostRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponseStarted(http_status_code, content_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length]);
  }

  onProgress(current) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.mojom.PostRequestObserver_OnProgress_ParamsSpec,
      null,
      [current]);
  }

  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec,
      null,
      [response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec]);
  }

};

updater.mojom.mojom.PostRequestObserver.getRemote = function() {
  let remote = new updater.mojom.mojom.PostRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.PostRequestObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnResponseStarted
updater.mojom.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PostRequestObserver.OnResponseStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'http_status_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'content_length_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' } },
        { name: 'content_length_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnProgress
updater.mojom.mojom.PostRequestObserver_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PostRequestObserver.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'current', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnRequestComplete
updater.mojom.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.PostRequestObserver.OnRequestComplete_Params',
      packedSize: 56,
      fields: [
        { name: 'response_body', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'net_error', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'header_etag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'header_x_cup_server_proof', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'header_set_cookie', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'xheader_retry_after_sec_$flag', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'xheader_retry_after_sec_$value', originalFieldName: 'xheader_retry_after_sec' } },
        { name: 'xheader_retry_after_sec_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'xheader_retry_after_sec_$flag', originalFieldName: 'xheader_retry_after_sec' } },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Legacy compatibility
updater.mojom.mojom.PostRequestObserverPtr = updater.mojom.mojom.PostRequestObserverRemote;
updater.mojom.mojom.PostRequestObserverRequest = updater.mojom.mojom.PostRequestObserverPendingReceiver;


// Interface: FileDownloadObserver
updater.mojom.mojom.FileDownloadObserver = {};

updater.mojom.mojom.FileDownloadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.mojom.FileDownloadObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FileDownloadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.mojom.FileDownloadObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.mojom.FileDownloadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.mojom.FileDownloadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResponseStarted(http_status_code, content_length) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length]);
  }

  onProgress(current) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.mojom.FileDownloadObserver_OnProgress_ParamsSpec,
      null,
      [current]);
  }

  onDownloadComplete(net_error, content_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec,
      null,
      [net_error, content_size]);
  }

};

updater.mojom.mojom.FileDownloadObserver.getRemote = function() {
  let remote = new updater.mojom.mojom.FileDownloadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FileDownloadObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnResponseStarted
updater.mojom.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FileDownloadObserver.OnResponseStarted_Params',
      packedSize: 24,
      fields: [
        { name: 'http_status_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'content_length_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' } },
        { name: 'content_length_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnProgress
updater.mojom.mojom.FileDownloadObserver_OnProgress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FileDownloadObserver.OnProgress_Params',
      packedSize: 16,
      fields: [
        { name: 'current', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDownloadComplete
updater.mojom.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FileDownloadObserver.OnDownloadComplete_Params',
      packedSize: 24,
      fields: [
        { name: 'net_error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'content_size_$flag', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'content_size_$value', originalFieldName: 'content_size' } },
        { name: 'content_size_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'content_size_$flag', originalFieldName: 'content_size' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
updater.mojom.mojom.FileDownloadObserverPtr = updater.mojom.mojom.FileDownloadObserverRemote;
updater.mojom.mojom.FileDownloadObserverRequest = updater.mojom.mojom.FileDownloadObserverPendingReceiver;


// Interface: FetchService
updater.mojom.mojom.FetchService = {};

updater.mojom.mojom.FetchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.mojom.FetchServiceRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FetchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.mojom.FetchServicePendingReceiver,
      handle);
    this.$ = new updater.mojom.mojom.FetchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

updater.mojom.mojom.FetchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  postRequest(url, post_data, content_type, additional_headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      updater.mojom.mojom.FetchService_PostRequest_ParamsSpec,
      updater.mojom.mojom.FetchService_PostRequest_ResponseParamsSpec,
      [url, post_data, content_type, additional_headers]);
  }

  downloadToFile(url, output_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.mojom.FetchService_DownloadToFile_ParamsSpec,
      updater.mojom.mojom.FetchService_DownloadToFile_ResponseParamsSpec,
      [url, output_file]);
  }

};

updater.mojom.mojom.FetchService.getRemote = function() {
  let remote = new updater.mojom.mojom.FetchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FetchService',
    'context');
  return remote.$;
};

// ParamsSpec for PostRequest
updater.mojom.mojom.FetchService_PostRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.PostRequest_Params',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'post_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'content_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'additional_headers', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(updater.mojom.HttpHeaderSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

updater.mojom.mojom.FetchService_PostRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.PostRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DownloadToFile
updater.mojom.mojom.FetchService_DownloadToFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.DownloadToFile_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'output_file', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

updater.mojom.mojom.FetchService_DownloadToFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'updater.mojom.FetchService.DownloadToFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
updater.mojom.mojom.FetchServicePtr = updater.mojom.mojom.FetchServiceRemote;
updater.mojom.mojom.FetchServiceRequest = updater.mojom.mojom.FetchServicePendingReceiver;

