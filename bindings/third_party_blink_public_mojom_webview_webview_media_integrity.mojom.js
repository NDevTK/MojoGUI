// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webview/webview_media_integrity.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: WebViewMediaIntegrityErrorCode
blink.mojom.WebViewMediaIntegrityErrorCode = {
  kInternalError: 0,
  kNonRecoverableError: 1,
  kApiDisabledByApplication: 2,
  kInvalidArgument: 3,
  kTokenProviderInvalid: 4,
};

// Interface: WebViewMediaIntegrityService
blink.mojom.WebViewMediaIntegrityService = {};

blink.mojom.WebViewMediaIntegrityServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebViewMediaIntegrityServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebViewMediaIntegrityService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebViewMediaIntegrityServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.WebViewMediaIntegrityServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebViewMediaIntegrityServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIntegrityProvider(provider_receiver, cloud_project_number) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ParamsSpec,
      blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParamsSpec,
      [provider_receiver, cloud_project_number]);
  }

};

blink.mojom.WebViewMediaIntegrityService.getRemote = function() {
  let remote = new blink.mojom.WebViewMediaIntegrityServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebViewMediaIntegrityService',
    'context');
  return remote.$;
};

// ParamsSpec for GetIntegrityProvider
blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityService.GetIntegrityProvider_Params',
      packedSize: 24,
      fields: [
        { name: 'cloud_project_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'provider_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityService.GetIntegrityProvider_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebViewMediaIntegrityErrorCodeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebViewMediaIntegrityServicePtr = blink.mojom.WebViewMediaIntegrityServiceRemote;
blink.mojom.WebViewMediaIntegrityServiceRequest = blink.mojom.WebViewMediaIntegrityServicePendingReceiver;


// Interface: WebViewMediaIntegrityProvider
blink.mojom.WebViewMediaIntegrityProvider = {};

blink.mojom.WebViewMediaIntegrityProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.WebViewMediaIntegrityProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebViewMediaIntegrityProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.WebViewMediaIntegrityProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.WebViewMediaIntegrityProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.WebViewMediaIntegrityProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestToken(content_binding) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ParamsSpec,
      blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParamsSpec,
      [content_binding]);
  }

};

blink.mojom.WebViewMediaIntegrityProvider.getRemote = function() {
  let remote = new blink.mojom.WebViewMediaIntegrityProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebViewMediaIntegrityProvider',
    'context');
  return remote.$;
};

// ParamsSpec for RequestToken
blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityProvider.RequestToken_Params',
      packedSize: 16,
      fields: [
        { name: 'content_binding', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityProvider.RequestToken_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.WebViewMediaIntegrityProviderPtr = blink.mojom.WebViewMediaIntegrityProviderRemote;
blink.mojom.WebViewMediaIntegrityProviderRequest = blink.mojom.WebViewMediaIntegrityProviderPendingReceiver;

