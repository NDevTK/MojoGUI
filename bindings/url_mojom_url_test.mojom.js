// Auto-generated MojoJS binding
// Source: chromium_src/url/mojom/url_test.mojom
// Module: url.mojom

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
  bounceUrl(in) {
    return this.$.bounceUrl(in);
  }
  bounceOrigin(in) {
    return this.$.bounceOrigin(in);
  }
};

url.mojom.UrlTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UrlTest', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  bounceUrl(in) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      url.mojom.UrlTest_BounceUrl_ParamsSpec,
      url.mojom.UrlTest_BounceUrl_ResponseParamsSpec,
      [in],
      false);
  }

  bounceOrigin(in) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UrlTest', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(url.mojom.UrlTest_BounceUrl_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(url.mojom.UrlTest_BounceOrigin_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(url.mojom.UrlTest_BounceUrl_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(url.mojom.UrlTest_BounceOrigin_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

url.mojom.UrlTestReceiver = url.mojom.UrlTestReceiver;

url.mojom.UrlTestPtr = url.mojom.UrlTestRemote;
url.mojom.UrlTestRequest = url.mojom.UrlTestPendingReceiver;

