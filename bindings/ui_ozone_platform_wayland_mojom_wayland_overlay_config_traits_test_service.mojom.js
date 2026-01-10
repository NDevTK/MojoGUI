// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config_traits_test_service.mojom
// Module: wl.mojom

'use strict';

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};

wl.mojom.ConfigTraitsTestService = {};
wl.mojom.ConfigTraitsTestService.$interfaceName = 'wl.mojom.ConfigTraitsTestService';
wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec = { $: {} };
wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec = { $: {} };

// Interface: ConfigTraitsTestService
mojo.internal.Struct(
    wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec, 'wl.mojom.ConfigTraitsTestService_EchoTransform_Params', [
      mojo.internal.StructField('t', 0, 0, wl.mojom.TransformUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec, 'wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, wl.mojom.TransformUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

wl.mojom.ConfigTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

wl.mojom.ConfigTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'wl.mojom.ConfigTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      wl.mojom.ConfigTraitsTestServicePendingReceiver,
      handle);
    this.$ = new wl.mojom.ConfigTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

wl.mojom.ConfigTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoTransform(t) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec,
      wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec,
      [t],
      false);
  }

};

wl.mojom.ConfigTraitsTestService.getRemote = function() {
  let remote = new wl.mojom.ConfigTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'wl.mojom.ConfigTraitsTestService',
    'context');
  return remote.$;
};

wl.mojom.ConfigTraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        
        // Try Method 0: EchoTransform
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoTransform (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
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
          const params = decoder.decodeStruct(wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.echoTransform');
          const result = this.impl.echoTransform(params.t);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec);
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

wl.mojom.ConfigTraitsTestServiceReceiver = wl.mojom.ConfigTraitsTestServiceReceiver;

wl.mojom.ConfigTraitsTestServicePtr = wl.mojom.ConfigTraitsTestServiceRemote;
wl.mojom.ConfigTraitsTestServiceRequest = wl.mojom.ConfigTraitsTestServicePendingReceiver;

