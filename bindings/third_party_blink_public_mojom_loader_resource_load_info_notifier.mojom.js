// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/resource_load_info_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ResourceLoadInfoNotifier
blink.mojom.ResourceLoadInfoNotifier = {};

blink.mojom.ResourceLoadInfoNotifierPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ResourceLoadInfoNotifierRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ResourceLoadInfoNotifier';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ResourceLoadInfoNotifierPendingReceiver,
      handle);
    this.$ = new blink.mojom.ResourceLoadInfoNotifierRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ResourceLoadInfoNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyUpdateUserGestureCarryoverInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec.$,
      null,
      []);
  }

  notifyResourceRedirectReceived(redirect_info, redirect_response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec.$,
      null,
      [redirect_info, redirect_response]);
  }

  notifyResourceResponseReceived(request_id, final_response_url, head, request_destination, is_ad_resource) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec.$,
      null,
      [request_id, final_response_url, head, request_destination, is_ad_resource]);
  }

  notifyResourceTransferSizeUpdated(request_id, transfer_size_diff) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec.$,
      null,
      [request_id, transfer_size_diff]);
  }

  notifyResourceLoadCompleted(resource_load_info, status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec.$,
      null,
      [resource_load_info, status]);
  }

  notifyResourceLoadCanceled(request_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec.$,
      null,
      [request_id]);
  }

  clone(pending_resource_load_info_notifier) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec.$,
      null,
      [pending_resource_load_info_notifier]);
  }

};

blink.mojom.ResourceLoadInfoNotifier.getRemote = function() {
  let remote = new blink.mojom.ResourceLoadInfoNotifierRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ResourceLoadInfoNotifier',
    'context');
  return remote.$;
};

// ParamsSpec for NotifyUpdateUserGestureCarryoverInfo
blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfoNotifier.NotifyUpdateUserGestureCarryoverInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyResourceRedirectReceived
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfoNotifier.NotifyResourceRedirectReceived_Params',
      packedSize: 24,
      fields: [
        { name: 'redirect_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'redirect_response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyResourceResponseReceived
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfoNotifier.NotifyResourceResponseReceived_Params',
      packedSize: 48,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'final_response_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'head', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request_destination', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'is_ad_resource', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyResourceTransferSizeUpdated
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfoNotifier.NotifyResourceTransferSizeUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'transfer_size_diff', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyResourceLoadCompleted
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfoNotifier.NotifyResourceLoadCompleted_Params',
      packedSize: 24,
      fields: [
        { name: 'resource_load_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for NotifyResourceLoadCanceled
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfoNotifier.NotifyResourceLoadCanceled_Params',
      packedSize: 16,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Clone
blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ResourceLoadInfoNotifier.Clone_Params',
      packedSize: 16,
      fields: [
        { name: 'pending_resource_load_info_notifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.ResourceLoadInfoNotifierPtr = blink.mojom.ResourceLoadInfoNotifierRemote;
blink.mojom.ResourceLoadInfoNotifierRequest = blink.mojom.ResourceLoadInfoNotifierPendingReceiver;

