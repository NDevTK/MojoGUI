// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/url_test.mojom
// Module: url.mojom

'use strict';

// Module namespace
var url = url || {};
url.mojom = url.mojom || {};
var url = url || {};
var url = url || {};


// Interface: UrlTest
url.mojom.mojom.UrlTest = {};

url.mojom.mojom.UrlTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

url.mojom.mojom.UrlTestRemote = class {
  static get $interfaceName() {
    return 'url.mojom.UrlTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      url.mojom.mojom.UrlTestPendingReceiver,
      handle);
    this.$ = new url.mojom.mojom.UrlTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

url.mojom.mojom.UrlTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bounceUrl(in) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      url.mojom.mojom.UrlTest_BounceUrl_ParamsSpec,
      url.mojom.mojom.UrlTest_BounceUrl_ResponseParamsSpec,
      [in]);
  }

  bounceOrigin(in) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      url.mojom.mojom.UrlTest_BounceOrigin_ParamsSpec,
      url.mojom.mojom.UrlTest_BounceOrigin_ResponseParamsSpec,
      [in]);
  }

};

url.mojom.mojom.UrlTest.getRemote = function() {
  let remote = new url.mojom.mojom.UrlTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'url.mojom.UrlTest',
    'context');
  return remote.$;
};

// ParamsSpec for BounceUrl
url.mojom.mojom.UrlTest_BounceUrl_ParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceUrl_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

url.mojom.mojom.UrlTest_BounceUrl_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceUrl_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BounceOrigin
url.mojom.mojom.UrlTest_BounceOrigin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceOrigin_Params',
      packedSize: 16,
      fields: [
        { name: 'in', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

url.mojom.mojom.UrlTest_BounceOrigin_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'url.mojom.UrlTest.BounceOrigin_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'out', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
url.mojom.mojom.UrlTestPtr = url.mojom.mojom.UrlTestRemote;
url.mojom.mojom.UrlTestRequest = url.mojom.mojom.UrlTestPendingReceiver;

