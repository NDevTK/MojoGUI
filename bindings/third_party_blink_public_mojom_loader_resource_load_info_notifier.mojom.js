// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/resource_load_info_notifier.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('pending_resource_load_info_notifier', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ResourceLoadInfoNotifierRemote), null, false, 0, undefined),
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
  notifyUpdateUserGestureCarryoverInfo() {
    return this.$.notifyUpdateUserGestureCarryoverInfo();
  }
  notifyResourceRedirectReceived(redirect_info, redirect_response) {
    return this.$.notifyResourceRedirectReceived(redirect_info, redirect_response);
  }
  notifyResourceResponseReceived(request_id, final_response_url, head, request_destination, is_ad_resource) {
    return this.$.notifyResourceResponseReceived(request_id, final_response_url, head, request_destination, is_ad_resource);
  }
  notifyResourceTransferSizeUpdated(request_id, transfer_size_diff) {
    return this.$.notifyResourceTransferSizeUpdated(request_id, transfer_size_diff);
  }
  notifyResourceLoadCompleted(resource_load_info, status) {
    return this.$.notifyResourceLoadCompleted(resource_load_info, status);
  }
  notifyResourceLoadCanceled(request_id) {
    return this.$.notifyResourceLoadCanceled(request_id);
  }
  clone(pending_resource_load_info_notifier) {
    return this.$.clone(pending_resource_load_info_notifier);
  }
};

blink.mojom.ResourceLoadInfoNotifierRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ResourceLoadInfoNotifier', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifyUpdateUserGestureCarryoverInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec,
      null,
      [],
      false);
  }

  notifyResourceRedirectReceived(redirect_info, redirect_response) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec,
      null,
      [redirect_info, redirect_response],
      false);
  }

  notifyResourceResponseReceived(request_id, final_response_url, head, request_destination, is_ad_resource) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec,
      null,
      [request_id, final_response_url, head, request_destination, is_ad_resource],
      false);
  }

  notifyResourceTransferSizeUpdated(request_id, transfer_size_diff) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec,
      null,
      [request_id, transfer_size_diff],
      false);
  }

  notifyResourceLoadCompleted(resource_load_info, status) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec,
      null,
      [resource_load_info, status],
      false);
  }

  notifyResourceLoadCanceled(request_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec,
      null,
      [request_id],
      false);
  }

  clone(pending_resource_load_info_notifier) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ResourceLoadInfoNotifier', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec.$.structSpec);
          const result = this.impl.notifyUpdateUserGestureCarryoverInfo();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec.$.structSpec);
          const result = this.impl.notifyResourceRedirectReceived(params.redirect_info, params.redirect_response);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec.$.structSpec);
          const result = this.impl.notifyResourceResponseReceived(params.request_id, params.final_response_url, params.head, params.request_destination, params.is_ad_resource);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.notifyResourceTransferSizeUpdated(params.request_id, params.transfer_size_diff);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec.$.structSpec);
          const result = this.impl.notifyResourceLoadCompleted(params.resource_load_info, params.status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec.$.structSpec);
          const result = this.impl.notifyResourceLoadCanceled(params.request_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec.$.structSpec);
          const result = this.impl.clone(params.pending_resource_load_info_notifier);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.ResourceLoadInfoNotifierReceiver = blink.mojom.ResourceLoadInfoNotifierReceiver;

blink.mojom.ResourceLoadInfoNotifierPtr = blink.mojom.ResourceLoadInfoNotifierRemote;
blink.mojom.ResourceLoadInfoNotifierRequest = blink.mojom.ResourceLoadInfoNotifierPendingReceiver;

