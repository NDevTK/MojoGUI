// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/app_banner/app_banner.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.AppBannerPromptReplySpec = { $: mojo.internal.Enum() };
blink.mojom.AppBannerController = {};
blink.mojom.AppBannerController.$interfaceName = 'blink.mojom.AppBannerController';
blink.mojom.AppBannerController_BannerPromptRequest_ParamsSpec = { $: {} };
blink.mojom.AppBannerController_BannerPromptRequest_ResponseParamsSpec = { $: {} };
blink.mojom.AppBannerEvent = {};
blink.mojom.AppBannerEvent.$interfaceName = 'blink.mojom.AppBannerEvent';
blink.mojom.AppBannerEvent_BannerAccepted_ParamsSpec = { $: {} };
blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec = { $: {} };
blink.mojom.AppBannerService = {};
blink.mojom.AppBannerService.$interfaceName = 'blink.mojom.AppBannerService';
blink.mojom.AppBannerService_DisplayAppBanner_ParamsSpec = { $: {} };

// Enum: AppBannerPromptReply
blink.mojom.AppBannerPromptReply = {
  NONE: 0,
  CANCEL: 1,
};

// Interface: AppBannerController
mojo.internal.Struct(
    blink.mojom.AppBannerController_BannerPromptRequest_ParamsSpec, 'blink.mojom.AppBannerController_BannerPromptRequest_Params', [
      mojo.internal.StructField('service', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AppBannerServiceSpec), null, false, 0, undefined),
      mojo.internal.StructField('event_receiver', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.AppBannerEventSpec), null, false, 0, undefined),
      mojo.internal.StructField('platform', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.AppBannerController_BannerPromptRequest_ResponseParamsSpec, 'blink.mojom.AppBannerController_BannerPromptRequest_ResponseParams', [
      mojo.internal.StructField('reply', 0, 0, blink.mojom.AppBannerPromptReplySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AppBannerControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AppBannerControllerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AppBannerController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AppBannerControllerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AppBannerControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AppBannerControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bannerPromptRequest(service, event_receiver, platform) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AppBannerController_BannerPromptRequest_ParamsSpec,
      blink.mojom.AppBannerController_BannerPromptRequest_ResponseParamsSpec,
      [service, event_receiver, platform],
      false);
  }

};

blink.mojom.AppBannerController.getRemote = function() {
  let remote = new blink.mojom.AppBannerControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AppBannerController',
    'context');
  return remote.$;
};

blink.mojom.AppBannerControllerReceiver = class {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BannerPromptRequest
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AppBannerController_BannerPromptRequest_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BannerPromptRequest (0)');
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
          const params = decoder.decodeStruct(blink.mojom.AppBannerController_BannerPromptRequest_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bannerPromptRequest');
          const result = this.impl.bannerPromptRequest(params.service, params.event_receiver, params.platform);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.AppBannerController_BannerPromptRequest_ResponseParamsSpec);
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

blink.mojom.AppBannerControllerReceiver = blink.mojom.AppBannerControllerReceiver;

blink.mojom.AppBannerControllerPtr = blink.mojom.AppBannerControllerRemote;
blink.mojom.AppBannerControllerRequest = blink.mojom.AppBannerControllerPendingReceiver;


// Interface: AppBannerEvent
mojo.internal.Struct(
    blink.mojom.AppBannerEvent_BannerAccepted_ParamsSpec, 'blink.mojom.AppBannerEvent_BannerAccepted_Params', [
      mojo.internal.StructField('platform', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec, 'blink.mojom.AppBannerEvent_BannerDismissed_Params', [
    ],
    [[0, 8]]);

blink.mojom.AppBannerEventPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AppBannerEventRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AppBannerEvent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AppBannerEventPendingReceiver,
      handle);
    this.$ = new blink.mojom.AppBannerEventRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AppBannerEventRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bannerAccepted(platform) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AppBannerEvent_BannerAccepted_ParamsSpec,
      null,
      [platform],
      false);
  }

  bannerDismissed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.AppBannerEvent.getRemote = function() {
  let remote = new blink.mojom.AppBannerEventRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AppBannerEvent',
    'context');
  return remote.$;
};

blink.mojom.AppBannerEventReceiver = class {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BannerAccepted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AppBannerEvent_BannerAccepted_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BannerAccepted (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BannerDismissed
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BannerDismissed (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.AppBannerEvent_BannerAccepted_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bannerAccepted');
          const result = this.impl.bannerAccepted(params.platform);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bannerDismissed');
          const result = this.impl.bannerDismissed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AppBannerEventReceiver = blink.mojom.AppBannerEventReceiver;

blink.mojom.AppBannerEventPtr = blink.mojom.AppBannerEventRemote;
blink.mojom.AppBannerEventRequest = blink.mojom.AppBannerEventPendingReceiver;


// Interface: AppBannerService
mojo.internal.Struct(
    blink.mojom.AppBannerService_DisplayAppBanner_ParamsSpec, 'blink.mojom.AppBannerService_DisplayAppBanner_Params', [
    ],
    [[0, 8]]);

blink.mojom.AppBannerServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AppBannerServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AppBannerService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AppBannerServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.AppBannerServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.AppBannerServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  displayAppBanner() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.AppBannerService_DisplayAppBanner_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.AppBannerService.getRemote = function() {
  let remote = new blink.mojom.AppBannerServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AppBannerService',
    'context');
  return remote.$;
};

blink.mojom.AppBannerServiceReceiver = class {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DisplayAppBanner
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.AppBannerService_DisplayAppBanner_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisplayAppBanner (0)');
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
          const params = decoder.decodeStruct(blink.mojom.AppBannerService_DisplayAppBanner_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.displayAppBanner');
          const result = this.impl.displayAppBanner();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.AppBannerServiceReceiver = blink.mojom.AppBannerServiceReceiver;

blink.mojom.AppBannerServicePtr = blink.mojom.AppBannerServiceRemote;
blink.mojom.AppBannerServiceRequest = blink.mojom.AppBannerServicePendingReceiver;

