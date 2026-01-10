// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/net/mac/mojom/updater_fetcher.mojom
// Module: updater.mojom

'use strict';

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};
var url = url || {};

updater.mojom.HttpHeaderSpec = { $: {} };
updater.mojom.PostRequestObserver = {};
updater.mojom.PostRequestObserver.$interfaceName = 'updater.mojom.PostRequestObserver';
updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec = { $: {} };
updater.mojom.PostRequestObserver_OnProgress_ParamsSpec = { $: {} };
updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver = {};
updater.mojom.FileDownloadObserver.$interfaceName = 'updater.mojom.FileDownloadObserver';
updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec = { $: {} };
updater.mojom.FetchService = {};
updater.mojom.FetchService.$interfaceName = 'updater.mojom.FetchService';
updater.mojom.FetchService_PostRequest_ParamsSpec = { $: {} };
updater.mojom.FetchService_PostRequest_ResponseParamsSpec = { $: {} };
updater.mojom.FetchService_DownloadToFile_ParamsSpec = { $: {} };
updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec = { $: {} };

// Struct: HttpHeader
mojo.internal.Struct(
    updater.mojom.HttpHeaderSpec, 'updater.mojom.HttpHeader', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PostRequestObserver
mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec, 'updater.mojom.PostRequestObserver_OnResponseStarted_Params', [
      mojo.internal.StructField('http_status_code', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('content_length_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' }),
      mojo.internal.StructField('content_length_$value', 8, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnProgress_ParamsSpec, 'updater.mojom.PostRequestObserver_OnProgress_Params', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec, 'updater.mojom.PostRequestObserver_OnRequestComplete_Params', [
      mojo.internal.StructField('response_body', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('header_etag', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_x_cup_server_proof', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_set_cookie', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('xheader_retry_after_sec_$flag', 40, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'xheader_retry_after_sec_$value', originalFieldName: 'xheader_retry_after_sec' }),
      mojo.internal.StructField('xheader_retry_after_sec_$value', 48, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'xheader_retry_after_sec_$flag', originalFieldName: 'xheader_retry_after_sec' }),
    ],
    [[0, 64]]);

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
      updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length]);
  }

  onProgress(current) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.PostRequestObserver_OnProgress_ParamsSpec,
      null,
      [current]);
  }

  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec,
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

updater.mojom.PostRequestObserverPtr = updater.mojom.PostRequestObserverRemote;
updater.mojom.PostRequestObserverRequest = updater.mojom.PostRequestObserverPendingReceiver;


// Interface: FileDownloadObserver
mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnResponseStarted_Params', [
      mojo.internal.StructField('http_status_code', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('content_length_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' }),
      mojo.internal.StructField('content_length_$value', 8, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnProgress_Params', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnDownloadComplete_Params', [
      mojo.internal.StructField('net_error', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('content_size_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_size_$value', originalFieldName: 'content_size' }),
      mojo.internal.StructField('content_size_$value', 8, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_size_$flag', originalFieldName: 'content_size' }),
    ],
    [[0, 24]]);

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
      updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length]);
  }

  onProgress(current) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec,
      null,
      [current]);
  }

  onDownloadComplete(net_error, content_size) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec,
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

updater.mojom.FileDownloadObserverPtr = updater.mojom.FileDownloadObserverRemote;
updater.mojom.FileDownloadObserverRequest = updater.mojom.FileDownloadObserverPendingReceiver;


// Interface: FetchService
mojo.internal.Struct(
    updater.mojom.FetchService_PostRequest_ParamsSpec, 'updater.mojom.FetchService_PostRequest_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('post_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('additional_headers', 24, 0, mojo.internal.Array(updater.mojom.HttpHeaderSpec, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    updater.mojom.FetchService_PostRequest_ResponseParamsSpec, 'updater.mojom.FetchService_PostRequest_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.PostRequestObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.FetchService_DownloadToFile_ParamsSpec, 'updater.mojom.FetchService_DownloadToFile_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 8, 0, mojo_base.mojom.FileSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec, 'updater.mojom.FetchService_DownloadToFile_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.FileDownloadObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      updater.mojom.FetchService_PostRequest_ParamsSpec,
      updater.mojom.FetchService_PostRequest_ResponseParamsSpec,
      [url, post_data, content_type, additional_headers]);
  }

  downloadToFile(url, output_file) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      updater.mojom.FetchService_DownloadToFile_ParamsSpec,
      updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec,
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

updater.mojom.FetchServicePtr = updater.mojom.FetchServiceRemote;
updater.mojom.FetchServiceRequest = updater.mojom.FetchServicePendingReceiver;

