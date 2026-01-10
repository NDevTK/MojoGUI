// Auto-generated MojoJS binding
// Source: chromium_src/components/download/public/common/download_stream.mojom
// Module: download.mojom

'use strict';

// Module namespace
var download = download || {};
download.mojom = download.mojom || {};

download.mojom.NetworkRequestStatusSpec = { $: mojo.internal.Enum() };
download.mojom.DownloadStreamHandleSpec = { $: {} };
download.mojom.DownloadStreamClient = {};
download.mojom.DownloadStreamClient.$interfaceName = 'download.mojom.DownloadStreamClient';
download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    download.mojom.DownloadStreamHandleSpec, 'download.mojom.DownloadStreamHandle', [
      mojo.internal.StructField('stream', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.InterfaceRequest(download.mojom.DownloadStreamClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DownloadStreamClient
mojo.internal.Struct(
    download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec, 'download.mojom.DownloadStreamClient_OnStreamCompleted_Params', [
      mojo.internal.StructField('status', 0, 0, download.mojom.NetworkRequestStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

download.mojom.DownloadStreamClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

download.mojom.DownloadStreamClientRemote = class {
  static get $interfaceName() {
    return 'download.mojom.DownloadStreamClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      download.mojom.DownloadStreamClientPendingReceiver,
      handle);
    this.$ = new download.mojom.DownloadStreamClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

download.mojom.DownloadStreamClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStreamCompleted(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      download.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec,
      null,
      [status],
      false);
  }

};

download.mojom.DownloadStreamClient.getRemote = function() {
  let remote = new download.mojom.DownloadStreamClientRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'download.mojom.DownloadStreamClient',
    'context');
  return remote.$;
};

download.mojom.DownloadStreamClientPtr = download.mojom.DownloadStreamClientRemote;
download.mojom.DownloadStreamClientRequest = download.mojom.DownloadStreamClientPendingReceiver;

