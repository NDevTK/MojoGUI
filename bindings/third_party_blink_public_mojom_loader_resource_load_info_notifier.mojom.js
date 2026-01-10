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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
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
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: NotifyUpdateUserGestureCarryoverInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyUpdateUserGestureCarryoverInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: NotifyResourceRedirectReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyResourceRedirectReceived (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: NotifyResourceResponseReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyResourceResponseReceived (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: NotifyResourceTransferSizeUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyResourceTransferSizeUpdated (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: NotifyResourceLoadCompleted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyResourceLoadCompleted (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: NotifyResourceLoadCanceled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> NotifyResourceLoadCanceled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Clone
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Clone (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyUpdateUserGestureCarryoverInfo_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyUpdateUserGestureCarryoverInfo');
          const result = this.impl.notifyUpdateUserGestureCarryoverInfo();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceRedirectReceived_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyResourceRedirectReceived');
          const result = this.impl.notifyResourceRedirectReceived(params.redirect_info, params.redirect_response);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceResponseReceived_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyResourceResponseReceived');
          const result = this.impl.notifyResourceResponseReceived(params.request_id, params.final_response_url, params.head, params.request_destination, params.is_ad_resource);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceTransferSizeUpdated_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyResourceTransferSizeUpdated');
          const result = this.impl.notifyResourceTransferSizeUpdated(params.request_id, params.transfer_size_diff);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCompleted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyResourceLoadCompleted');
          const result = this.impl.notifyResourceLoadCompleted(params.resource_load_info, params.status);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_NotifyResourceLoadCanceled_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.notifyResourceLoadCanceled');
          const result = this.impl.notifyResourceLoadCanceled(params.request_id);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ResourceLoadInfoNotifier_Clone_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.clone');
          const result = this.impl.clone(params.pending_resource_load_info_notifier);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ResourceLoadInfoNotifierReceiver = blink.mojom.ResourceLoadInfoNotifierReceiver;

blink.mojom.ResourceLoadInfoNotifierPtr = blink.mojom.ResourceLoadInfoNotifierRemote;
blink.mojom.ResourceLoadInfoNotifierRequest = blink.mojom.ResourceLoadInfoNotifierPendingReceiver;

