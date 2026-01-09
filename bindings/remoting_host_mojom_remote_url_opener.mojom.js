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
  SUCCESS: 1,
  FAILURE: 2,
  LOCAL_FALLBACK: 3,
};

// Interface: RemoteUrlOpener
remoting.mojom.RemoteUrlOpener = {};

remoting.mojom.RemoteUrlOpenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.RemoteUrlOpenerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.RemoteUrlOpener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.RemoteUrlOpenerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.RemoteUrlOpenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.RemoteUrlOpenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec,
      remoting.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec,
      [url]);
  }

};

remoting.mojom.RemoteUrlOpener.getRemote = function() {
  let remote = new remoting.mojom.RemoteUrlOpenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.RemoteUrlOpener',
    'context');
  return remote.$;
};

// ParamsSpec for OpenUrl
remoting.mojom.RemoteUrlOpener_OpenUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemoteUrlOpener.OpenUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

remoting.mojom.RemoteUrlOpener_OpenUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.RemoteUrlOpener.OpenUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.OpenUrlResultSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remoting.mojom.RemoteUrlOpenerPtr = remoting.mojom.RemoteUrlOpenerRemote;
remoting.mojom.RemoteUrlOpenerRequest = remoting.mojom.RemoteUrlOpenerPendingReceiver;

