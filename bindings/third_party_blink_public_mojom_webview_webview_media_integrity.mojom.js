// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webview/webview_media_integrity.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.WebViewMediaIntegrityErrorCodeSpec = { $: mojo.internal.Enum() };
blink.mojom.WebViewMediaIntegrityTokenResponseSpec = { $: {} };
blink.mojom.WebViewMediaIntegrityService = {};
blink.mojom.WebViewMediaIntegrityService.$interfaceName = 'blink.mojom.WebViewMediaIntegrityService';
blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ParamsSpec = { $: {} };
blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParamsSpec = { $: {} };
blink.mojom.WebViewMediaIntegrityProvider = {};
blink.mojom.WebViewMediaIntegrityProvider.$interfaceName = 'blink.mojom.WebViewMediaIntegrityProvider';
blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ParamsSpec = { $: {} };
blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParamsSpec = { $: {} };

blink.mojom.kMaxCloudProjectNumber = 9007199254740991;

// Enum: WebViewMediaIntegrityErrorCode
blink.mojom.WebViewMediaIntegrityErrorCode = {
  kInternalError: 0,
  kNonRecoverableError: 1,
  kApiDisabledByApplication: 2,
  kInvalidArgument: 3,
  kTokenProviderInvalid: 4,
};

// Union: WebViewMediaIntegrityTokenResponse
mojo.internal.Union(
    blink.mojom.WebViewMediaIntegrityTokenResponseSpec, 'blink.mojom.WebViewMediaIntegrityTokenResponse', {
      'error_code': {
        'ordinal': 0,
        'type': blink.mojom.WebViewMediaIntegrityErrorCodeSpec.$,
        'nullable': false,
      },
      'token': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Interface: WebViewMediaIntegrityService
mojo.internal.Struct(
    blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ParamsSpec, 'blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_Params', [
      mojo.internal.StructField('provider_receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.WebViewMediaIntegrityProviderRemote), null, false, 0, undefined),
      mojo.internal.StructField('cloud_project_number', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParamsSpec, 'blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.WebViewMediaIntegrityErrorCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

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
      [provider_receiver, cloud_project_number],
      false);
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

blink.mojom.WebViewMediaIntegrityServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getIntegrityProvider(params.provider_receiver, params.cloud_project_number);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.WebViewMediaIntegrityService_GetIntegrityProvider_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

blink.mojom.WebViewMediaIntegrityServiceReceiver = blink.mojom.WebViewMediaIntegrityServiceReceiver;

blink.mojom.WebViewMediaIntegrityServicePtr = blink.mojom.WebViewMediaIntegrityServiceRemote;
blink.mojom.WebViewMediaIntegrityServiceRequest = blink.mojom.WebViewMediaIntegrityServicePendingReceiver;


// Interface: WebViewMediaIntegrityProvider
mojo.internal.Struct(
    blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ParamsSpec, 'blink.mojom.WebViewMediaIntegrityProvider_RequestToken_Params', [
      mojo.internal.StructField('content_binding', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParamsSpec, 'blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, blink.mojom.WebViewMediaIntegrityTokenResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [content_binding],
      false);
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

blink.mojom.WebViewMediaIntegrityProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestToken(params.content_binding);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(
                this.endpoint, header.requestId, blink.mojom.WebViewMediaIntegrityProvider_RequestToken_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

blink.mojom.WebViewMediaIntegrityProviderReceiver = blink.mojom.WebViewMediaIntegrityProviderReceiver;

blink.mojom.WebViewMediaIntegrityProviderPtr = blink.mojom.WebViewMediaIntegrityProviderRemote;
blink.mojom.WebViewMediaIntegrityProviderRequest = blink.mojom.WebViewMediaIntegrityProviderPendingReceiver;

