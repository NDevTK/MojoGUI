// Auto-generated MojoJS binding
// Source: chromium_src/components/download/public/common/download_stream.mojom
// Module: download.mojom

'use strict';

// Module namespace
var download = download || {};
download.mojom = download.mojom || {};


// Enum: NetworkRequestStatus
download.mojom.mojom.NetworkRequestStatus = {
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
download.mojom.mojom.NetworkRequestStatusSpec = { $: mojo.internal.Enum() };

// Struct: DownloadStreamHandle
download.mojom.mojom.DownloadStreamHandleSpec = {
  $: {
    structSpec: {
      name: 'download.mojom.DownloadStreamHandle',
      packedSize: 24,
      fields: [
        { name: 'stream', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
        { name: 'client_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: DownloadStreamClient
download.mojom.mojom.DownloadStreamClient = {};

download.mojom.mojom.DownloadStreamClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

download.mojom.mojom.DownloadStreamClientRemote = class {
  static get $interfaceName() {
    return 'download.mojom.DownloadStreamClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      download.mojom.mojom.DownloadStreamClientPendingReceiver,
      handle);
    this.$ = new download.mojom.mojom.DownloadStreamClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

download.mojom.mojom.DownloadStreamClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStreamCompleted(status) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      download.mojom.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec,
      null,
      [status]);
  }

};

download.mojom.mojom.DownloadStreamClient.getRemote = function() {
  let remote = new download.mojom.mojom.DownloadStreamClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'download.mojom.DownloadStreamClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnStreamCompleted
download.mojom.mojom.DownloadStreamClient_OnStreamCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'download.mojom.DownloadStreamClient.OnStreamCompleted_Params',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: download.mojom.NetworkRequestStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
download.mojom.mojom.DownloadStreamClientPtr = download.mojom.mojom.DownloadStreamClientRemote;
download.mojom.mojom.DownloadStreamClientRequest = download.mojom.mojom.DownloadStreamClientPendingReceiver;

