// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/gpu/gpu.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.GpuDataManager = {};
blink.mojom.GpuDataManager.$interfaceName = 'blink.mojom.GpuDataManager';
blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ParamsSpec = { $: {} };
blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParamsSpec = { $: {} };

// Interface: GpuDataManager
mojo.internal.Struct(
    blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ParamsSpec, 'blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParamsSpec, 'blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParams', [
      mojo.internal.StructField('blocked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.GpuDataManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.GpuDataManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.GpuDataManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.GpuDataManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.GpuDataManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.GpuDataManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  are3DAPIsBlockedForUrl(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ParamsSpec,
      blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParamsSpec,
      [url],
      false);
  }

};

blink.mojom.GpuDataManager.getRemote = function() {
  let remote = new blink.mojom.GpuDataManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.GpuDataManager',
    'context');
  return remote.$;
};

blink.mojom.GpuDataManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.are3DAPIsBlockedForUrl');
          const result = this.impl.are3DAPIsBlockedForUrl(params.url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.GpuDataManager_Are3DAPIsBlockedForUrl_ResponseParamsSpec);
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

blink.mojom.GpuDataManagerReceiver = blink.mojom.GpuDataManagerReceiver;

blink.mojom.GpuDataManagerPtr = blink.mojom.GpuDataManagerRemote;
blink.mojom.GpuDataManagerRequest = blink.mojom.GpuDataManagerPendingReceiver;

