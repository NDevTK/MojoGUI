// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/cookie_encryption_provider.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Interface: CookieEncryptionProvider
network.mojom.CookieEncryptionProvider = {};

network.mojom.CookieEncryptionProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

network.mojom.CookieEncryptionProviderRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CookieEncryptionProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      network.mojom.CookieEncryptionProviderPendingReceiver,
      handle);
    this.$ = new network.mojom.CookieEncryptionProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

network.mojom.CookieEncryptionProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getEncryptor() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec,
      network.mojom.CookieEncryptionProvider_GetEncryptor_ResponseParamsSpec,
      []);
  }

};

network.mojom.CookieEncryptionProvider.getRemote = function() {
  let remote = new network.mojom.CookieEncryptionProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CookieEncryptionProvider',
    'context');
  return remote.$;
};

// ParamsSpec for GetEncryptor
network.mojom.CookieEncryptionProvider_GetEncryptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieEncryptionProvider.GetEncryptor_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

network.mojom.CookieEncryptionProvider_GetEncryptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.CookieEncryptionProvider.GetEncryptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'encryptor', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
network.mojom.CookieEncryptionProviderPtr = network.mojom.CookieEncryptionProviderRemote;
network.mojom.CookieEncryptionProviderRequest = network.mojom.CookieEncryptionProviderPendingReceiver;

