// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webview/webview_media_integrity.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


blink.mojom.mojom.kMaxCloudProjectNumber = 9007199254740991;

// Enum: WebViewMediaIntegrityErrorCode
blink.mojom.mojom.WebViewMediaIntegrityErrorCode = {
  kInternalError: 0,
  kNonRecoverableError: 1,
  kApiDisabledByApplication: 2,
  kInvalidArgument: 3,
  kTokenProviderInvalid: 4,
};
blink.mojom.mojom.WebViewMediaIntegrityErrorCodeSpec = { $: mojo.internal.Enum() };

// Union: WebViewMediaIntegrityTokenResponse
blink.mojom.mojom.WebViewMediaIntegrityTokenResponseSpec = { $: mojo.internal.Union(
    'blink.mojom.WebViewMediaIntegrityTokenResponse', {
      'error_code': {
        'ordinal': 0,
        'type': blink.mojom.WebViewMediaIntegrityErrorCodeSpec,
      }},
      'token': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Interface: WebViewMediaIntegrityService
blink.mojom.mojom.WebViewMediaIntegrityService = {};

blink.mojom.mojom.WebViewMediaIntegrityServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebViewMediaIntegrityServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebViewMediaIntegrityService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebViewMediaIntegrityServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebViewMediaIntegrityServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebViewMediaIntegrityServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIntegrityProvider(provider_receiver, cloud_project_number) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ParamsSpec,
      blink.mojom.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParamsSpec,
      [provider_receiver, cloud_project_number]);
  }

};

blink.mojom.mojom.WebViewMediaIntegrityService.getRemote = function() {
  let remote = new blink.mojom.mojom.WebViewMediaIntegrityServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebViewMediaIntegrityService',
    'context');
  return remote.$;
};

// ParamsSpec for GetIntegrityProvider
blink.mojom.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityService.GetIntegrityProvider_Params',
      packedSize: 24,
      fields: [
        { name: 'provider_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'cloud_project_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityService.GetIntegrityProvider_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebViewMediaIntegrityErrorCodeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebViewMediaIntegrityServicePtr = blink.mojom.mojom.WebViewMediaIntegrityServiceRemote;
blink.mojom.mojom.WebViewMediaIntegrityServiceRequest = blink.mojom.mojom.WebViewMediaIntegrityServicePendingReceiver;


// Interface: WebViewMediaIntegrityProvider
blink.mojom.mojom.WebViewMediaIntegrityProvider = {};

blink.mojom.mojom.WebViewMediaIntegrityProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.WebViewMediaIntegrityProviderRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.WebViewMediaIntegrityProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.WebViewMediaIntegrityProviderPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.WebViewMediaIntegrityProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.WebViewMediaIntegrityProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  requestToken(content_binding) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.WebViewMediaIntegrityProvider_RequestToken_ParamsSpec,
      blink.mojom.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParamsSpec,
      [content_binding]);
  }

};

blink.mojom.mojom.WebViewMediaIntegrityProvider.getRemote = function() {
  let remote = new blink.mojom.mojom.WebViewMediaIntegrityProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.WebViewMediaIntegrityProvider',
    'context');
  return remote.$;
};

// ParamsSpec for RequestToken
blink.mojom.mojom.WebViewMediaIntegrityProvider_RequestToken_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityProvider.RequestToken_Params',
      packedSize: 16,
      fields: [
        { name: 'content_binding', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.WebViewMediaIntegrityProvider.RequestToken_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebViewMediaIntegrityTokenResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.WebViewMediaIntegrityProviderPtr = blink.mojom.mojom.WebViewMediaIntegrityProviderRemote;
blink.mojom.mojom.WebViewMediaIntegrityProviderRequest = blink.mojom.mojom.WebViewMediaIntegrityProviderPendingReceiver;

