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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AppBannerController_BannerPromptRequest_ParamsSpec.$.decode(message.payload);
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AppBannerEvent_BannerAccepted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bannerAccepted(params.platform);
          break;
        }
        case 1: {
          const params = blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bannerDismissed();
          break;
        }
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.AppBannerService_DisplayAppBanner_ParamsSpec.$.decode(message.payload);
          const result = this.impl.displayAppBanner();
          break;
        }
      }
    }});
  }
};

blink.mojom.AppBannerServiceReceiver = blink.mojom.AppBannerServiceReceiver;

blink.mojom.AppBannerServicePtr = blink.mojom.AppBannerServiceRemote;
blink.mojom.AppBannerServiceRequest = blink.mojom.AppBannerServicePendingReceiver;

