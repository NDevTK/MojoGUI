// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_url_opener.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var url = url || {};


// Enum: OpenUrlResult
remoting.mojom.mojom.OpenUrlResult = {
  UNSPECIFIED_OPEN_URL_RESULT: 0,
  SUCCESS: 1,
  FAILURE: 2,
  LOCAL_FALLBACK: 3,
};
remoting.mojom.mojom.OpenUrlResultSpec = { $: mojo.internal.Enum() };

// Interface: RemoteUrlOpener
remoting.mojom.mojom.RemoteUrlOpener = {};

remoting.mojom.mojom.RemoteUrlOpenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.mojom.RemoteUrlOpenerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.RemoteUrlOpener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.mojom.RemoteUrlOpenerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.mojom.RemoteUrlOpenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.mojom.RemoteUrlOpenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec,
      remoting.mojom.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec,
      [url]);
  }

};

remoting.mojom.mojom.RemoteUrlOpener.getRemote = function() {
  let remote = new remoting.mojom.mojom.RemoteUrlOpenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.RemoteUrlOpener',
    'context');
  return remote.$;
};

// ParamsSpec for OpenUrl
remoting.mojom.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemoteUrlOpener.OpenUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemoteUrlOpener.OpenUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.OpenUrlResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.mojom.RemoteUrlOpenerPtr = remoting.mojom.mojom.RemoteUrlOpenerRemote;
remoting.mojom.mojom.RemoteUrlOpenerRequest = remoting.mojom.mojom.RemoteUrlOpenerPendingReceiver;

