// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/url_test.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};


// Interface: UrlTest
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
      url.mojom.UrlTest_BounceUrl_ParamsSpec.$,
      url.mojom.UrlTest_BounceUrl_ResponseParamsSpec.$,
      [in]);
  }

  bounceOrigin(in) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      url.mojom.UrlTest_BounceOrigin_ParamsSpec.$,
      url.mojom.UrlTest_BounceOrigin_ResponseParamsSpec.$,
      [in]);
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

// ParamsSpec for BounceUrl
url.mojom.UrlTest_BounceUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

url.mojom.UrlTest_BounceUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BounceOrigin
url.mojom.UrlTest_BounceOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceOrigin_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

url.mojom.UrlTest_BounceOrigin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceOrigin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
url.mojom.UrlTestPtr = url.mojom.UrlTestRemote;
url.mojom.UrlTestRequest = url.mojom.UrlTestPendingReceiver;

