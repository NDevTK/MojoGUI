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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BounceUrl
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(url.mojom.UrlTest_BounceUrl_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BounceUrl (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: BounceOrigin
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(url.mojom.UrlTest_BounceOrigin_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BounceOrigin (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(url.mojom.UrlTest_BounceUrl_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bounceUrl');
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
          const params = decoder.decodeStruct(url.mojom.UrlTest_BounceOrigin_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bounceOrigin');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

url.mojom.UrlTestReceiver = url.mojom.UrlTestReceiver;

url.mojom.UrlTestPtr = url.mojom.UrlTestRemote;
url.mojom.UrlTestRequest = url.mojom.UrlTestPendingReceiver;

