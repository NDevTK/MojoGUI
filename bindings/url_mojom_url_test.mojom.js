// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/url_test.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};

url.mojom.UrlTest = {};
url.mojom.UrlTest.$interfaceName = 'url.mojom.UrlTest';
url.mojom.UrlTest_BounceUrl_ParamsSpec = { $: {} };
url.mojom.UrlTest_BounceUrl_ResponseParamsSpec = { $: {} };
url.mojom.UrlTest_BounceOrigin_ParamsSpec = { $: {} };
url.mojom.UrlTest_BounceOrigin_ResponseParamsSpec = { $: {} };

// Interface: UrlTest
mojo.internal.Struct(
    url.mojom.UrlTest_BounceUrl_ParamsSpec, 'url.mojom.UrlTest_BounceUrl_Params', [
      mojo.internal.StructField('in', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    url.mojom.UrlTest_BounceUrl_ResponseParamsSpec, 'url.mojom.UrlTest_BounceUrl_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    url.mojom.UrlTest_BounceOrigin_ParamsSpec, 'url.mojom.UrlTest_BounceOrigin_Params', [
      mojo.internal.StructField('in', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    url.mojom.UrlTest_BounceOrigin_ResponseParamsSpec, 'url.mojom.UrlTest_BounceOrigin_ResponseParams', [
      mojo.internal.StructField('out', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

url.mojom.UrlTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

url.mojom.UrlTestRemote = class {
  static get $interfaceName() {
    return 'url.mojom.UrlTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      url.mojom.UrlTestPendingReceiver,
      handle);
    this.$ = new url.mojom.UrlTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

url.mojom.UrlTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bounceUrl(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      url.mojom.UrlTest_BounceUrl_ParamsSpec,
      url.mojom.UrlTest_BounceUrl_ResponseParamsSpec,
      [in],
      false);
  }

  bounceOrigin(in) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      url.mojom.UrlTest_BounceOrigin_ParamsSpec,
      url.mojom.UrlTest_BounceOrigin_ResponseParamsSpec,
      [in],
      false);
  }

};

url.mojom.UrlTest.getRemote = function() {
  let remote = new url.mojom.UrlTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'url.mojom.UrlTest',
    'context');
  return remote.$;
};

url.mojom.UrlTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = url.mojom.UrlTest_BounceUrl_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bounceUrl(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, url.mojom.UrlTest_BounceUrl_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = url.mojom.UrlTest_BounceOrigin_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bounceOrigin(params.in);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, url.mojom.UrlTest_BounceOrigin_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

url.mojom.UrlTestReceiver = url.mojom.UrlTestReceiver;

url.mojom.UrlTestPtr = url.mojom.UrlTestRemote;
url.mojom.UrlTestRequest = url.mojom.UrlTestPendingReceiver;

