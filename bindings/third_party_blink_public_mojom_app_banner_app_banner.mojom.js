// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/app_banner/app_banner.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AppBannerPromptReply
blink.mojom.AppBannerPromptReply = {
  NONE: 0,
  CANCEL: 1,
};

// Interface: AppBannerController
blink.mojom.AppBannerController = {};

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
      [service, event_receiver, platform]);
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

// ParamsSpec for BannerPromptRequest
blink.mojom.AppBannerController_BannerPromptRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerController.BannerPromptRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'event_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'platform', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.AppBannerController_BannerPromptRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerController.BannerPromptRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AppBannerControllerPtr = blink.mojom.AppBannerControllerRemote;
blink.mojom.AppBannerControllerRequest = blink.mojom.AppBannerControllerPendingReceiver;


// Interface: AppBannerEvent
blink.mojom.AppBannerEvent = {};

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
      [platform]);
  }

  bannerDismissed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec,
      null,
      []);
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

// ParamsSpec for BannerAccepted
blink.mojom.AppBannerEvent_BannerAccepted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerEvent.BannerAccepted_Params',
      packedSize: 16,
      fields: [
        { name: 'platform', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BannerDismissed
blink.mojom.AppBannerEvent_BannerDismissed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerEvent.BannerDismissed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AppBannerEventPtr = blink.mojom.AppBannerEventRemote;
blink.mojom.AppBannerEventRequest = blink.mojom.AppBannerEventPendingReceiver;


// Interface: AppBannerService
blink.mojom.AppBannerService = {};

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
      []);
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

// ParamsSpec for DisplayAppBanner
blink.mojom.AppBannerService_DisplayAppBanner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerService.DisplayAppBanner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.AppBannerServicePtr = blink.mojom.AppBannerServiceRemote;
blink.mojom.AppBannerServiceRequest = blink.mojom.AppBannerServicePendingReceiver;

