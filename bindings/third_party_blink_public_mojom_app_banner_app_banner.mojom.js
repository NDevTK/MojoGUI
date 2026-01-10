// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/app_banner/app_banner.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: AppBannerPromptReply
blink.mojom.mojom.AppBannerPromptReply = {
  NONE: 0,
  CANCEL: 1,
};
blink.mojom.mojom.AppBannerPromptReplySpec = { $: mojo.internal.Enum() };

// Interface: AppBannerController
blink.mojom.mojom.AppBannerController = {};

blink.mojom.mojom.AppBannerControllerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AppBannerControllerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AppBannerController';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AppBannerControllerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AppBannerControllerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AppBannerControllerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bannerPromptRequest(service, event_receiver, platform) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AppBannerController_BannerPromptRequest_ParamsSpec,
      blink.mojom.mojom.AppBannerController_BannerPromptRequest_ResponseParamsSpec,
      [service, event_receiver, platform]);
  }

};

blink.mojom.mojom.AppBannerController.getRemote = function() {
  let remote = new blink.mojom.mojom.AppBannerControllerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AppBannerController',
    'context');
  return remote.$;
};

// ParamsSpec for BannerPromptRequest
blink.mojom.mojom.AppBannerController_BannerPromptRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerController.BannerPromptRequest_Params',
      packedSize: 32,
      fields: [
        { name: 'service', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(blink.mojom.AppBannerServiceRemote), nullable: false, minVersion: 0 },
        { name: 'event_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.AppBannerEventRemote), nullable: false, minVersion: 0 },
        { name: 'platform', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.AppBannerController_BannerPromptRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerController.BannerPromptRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'reply', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AppBannerPromptReplySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AppBannerControllerPtr = blink.mojom.mojom.AppBannerControllerRemote;
blink.mojom.mojom.AppBannerControllerRequest = blink.mojom.mojom.AppBannerControllerPendingReceiver;


// Interface: AppBannerEvent
blink.mojom.mojom.AppBannerEvent = {};

blink.mojom.mojom.AppBannerEventPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AppBannerEventRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AppBannerEvent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AppBannerEventPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AppBannerEventRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AppBannerEventRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bannerAccepted(platform) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AppBannerEvent_BannerAccepted_ParamsSpec,
      null,
      [platform]);
  }

  bannerDismissed() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AppBannerEvent_BannerDismissed_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.AppBannerEvent.getRemote = function() {
  let remote = new blink.mojom.mojom.AppBannerEventRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AppBannerEvent',
    'context');
  return remote.$;
};

// ParamsSpec for BannerAccepted
blink.mojom.mojom.AppBannerEvent_BannerAccepted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerEvent.BannerAccepted_Params',
      packedSize: 16,
      fields: [
        { name: 'platform', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for BannerDismissed
blink.mojom.mojom.AppBannerEvent_BannerDismissed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerEvent.BannerDismissed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AppBannerEventPtr = blink.mojom.mojom.AppBannerEventRemote;
blink.mojom.mojom.AppBannerEventRequest = blink.mojom.mojom.AppBannerEventPendingReceiver;


// Interface: AppBannerService
blink.mojom.mojom.AppBannerService = {};

blink.mojom.mojom.AppBannerServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AppBannerServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AppBannerService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AppBannerServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AppBannerServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AppBannerServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  displayAppBanner() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AppBannerService_DisplayAppBanner_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.AppBannerService.getRemote = function() {
  let remote = new blink.mojom.mojom.AppBannerServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AppBannerService',
    'context');
  return remote.$;
};

// ParamsSpec for DisplayAppBanner
blink.mojom.mojom.AppBannerService_DisplayAppBanner_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AppBannerService.DisplayAppBanner_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AppBannerServicePtr = blink.mojom.mojom.AppBannerServiceRemote;
blink.mojom.mojom.AppBannerServiceRequest = blink.mojom.mojom.AppBannerServicePendingReceiver;

