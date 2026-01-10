// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/resource_load_info_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var network = network || {};
var url = url || {};

blink.mojom.ResourceLoadInfoNotifier = {};
blink.mojom.ResourceLoadInfoNotifier.$interfaceName = 'blink.mojom.ResourceLoadInfoNotifier';
blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec = { $: {} };
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec = { $: {} };
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec = { $: {} };
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec = { $: {} };
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec = { $: {} };
blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec = { $: {} };
blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec = { $: {} };

// Interface: ResourceLoadInfoNotifier
mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec, 'blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec, 'blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_Params', [
      mojo.internal.StructField('redirect_info', 0, 0, network.mojom.URLRequestRedirectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('redirect_response', 8, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec, 'blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('final_response_url', 8, 0, url.mojom.SchemeHostPortSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('head', 16, 0, network.mojom.URLResponseHeadSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_destination', 24, 0, network.mojom.RequestDestinationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_ad_resource', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec, 'blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('transfer_size_diff', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec, 'blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_Params', [
      mojo.internal.StructField('resource_load_info', 0, 0, blink.mojom.ResourceLoadInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, network.mojom.URLLoaderCompletionStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec, 'blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_Params', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec, 'blink.mojom.ResourceLoadInfoNotifier_Clone_Params', [
      mojo.internal.StructField('pending_resource_load_info_notifier', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ResourceLoadInfoNotifierSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec,
      null,
      [],
      false);
  }

  notifyResourceRedirectReceived(redirect_info, redirect_response) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec,
      null,
      [redirect_info, redirect_response],
      false);
  }

  notifyResourceResponseReceived(request_id, final_response_url, head, request_destination, is_ad_resource) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec,
      null,
      [request_id, final_response_url, head, request_destination, is_ad_resource],
      false);
  }

  notifyResourceTransferSizeUpdated(request_id, transfer_size_diff) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec,
      null,
      [request_id, transfer_size_diff],
      false);
  }

  notifyResourceLoadCompleted(resource_load_info, status) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec,
      null,
      [resource_load_info, status],
      false);
  }

  notifyResourceLoadCanceled(request_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec,
      null,
      [request_id],
      false);
  }

  clone(pending_resource_load_info_notifier) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec,
      null,
      [pending_resource_load_info_notifier],
      false);
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

blink.mojom.ResourceLoadInfoNotifierReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyUpdateUserGestureCarryoverInfo();
          break;
        }
        case 1: {
          const params = blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyResourceRedirectReceived(params.redirect_info, params.redirect_response);
          break;
        }
        case 2: {
          const params = blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyResourceResponseReceived(params.request_id, params.final_response_url, params.head, params.request_destination, params.is_ad_resource);
          break;
        }
        case 3: {
          const params = blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyResourceTransferSizeUpdated(params.request_id, params.transfer_size_diff);
          break;
        }
        case 4: {
          const params = blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyResourceLoadCompleted(params.resource_load_info, params.status);
          break;
        }
        case 5: {
          const params = blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.notifyResourceLoadCanceled(params.request_id);
          break;
        }
        case 6: {
          const params = blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.clone(params.pending_resource_load_info_notifier);
          break;
        }
      }
    }});
  }
};

blink.mojom.ResourceLoadInfoNotifierReceiver = blink.mojom.ResourceLoadInfoNotifierReceiver;

blink.mojom.ResourceLoadInfoNotifierPtr = blink.mojom.ResourceLoadInfoNotifierRemote;
blink.mojom.ResourceLoadInfoNotifierRequest = blink.mojom.ResourceLoadInfoNotifierPendingReceiver;

