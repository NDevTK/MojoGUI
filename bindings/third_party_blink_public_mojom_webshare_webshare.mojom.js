// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webshare/webshare.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.SharedFileSpec = { $: {} };
blink.mojom.ShareService = {};
blink.mojom.ShareService.$interfaceName = 'blink.mojom.ShareService';
blink.mojom.ShareService_Share_ParamsSpec = { $: {} };
blink.mojom.ShareService_Share_ResponseParamsSpec = { $: {} };

// Struct: SharedFile
mojo.internal.Struct(
    blink.mojom.SharedFileSpec, 'blink.mojom.SharedFile', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.SafeBaseNameSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('blob', 8, 0, blink.mojom.SerializedBlobSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ShareService
mojo.internal.Struct(
    blink.mojom.ShareService_Share_ParamsSpec, 'blink.mojom.ShareService_Share_Params', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('files', 24, 0, mojo.internal.Array(blink.mojom.SharedFileSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.ShareService_Share_ResponseParamsSpec, 'blink.mojom.ShareService_Share_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ShareErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ShareServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ShareServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ShareService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ShareServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.ShareServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ShareServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  share(title, text, url, files) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ShareService_Share_ParamsSpec,
      blink.mojom.ShareService_Share_ResponseParamsSpec,
      [title, text, url, files],
      false);
  }

};

blink.mojom.ShareService.getRemote = function() {
  let remote = new blink.mojom.ShareServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ShareService',
    'context');
  return remote.$;
};

blink.mojom.ShareServiceReceiver = class {
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
          const params = blink.mojom.ShareService_Share_ParamsSpec.$.decode(message.payload);
          const result = this.impl.share(params.title, params.text, params.url, params.files);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ShareService_Share_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

blink.mojom.ShareServiceReceiver = blink.mojom.ShareServiceReceiver;

blink.mojom.ShareServicePtr = blink.mojom.ShareServiceRemote;
blink.mojom.ShareServiceRequest = blink.mojom.ShareServicePendingReceiver;

