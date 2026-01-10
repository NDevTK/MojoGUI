// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/nearby_share/nearby_share.mojom
// Module: nearby_share.mojom

'use strict';

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

nearby_share.mojom.SelectShareTargetResultSpec = { $: mojo.internal.Enum() };
nearby_share.mojom.TransferStatusSpec = { $: mojo.internal.Enum() };
nearby_share.mojom.StartDiscoveryResultSpec = { $: mojo.internal.Enum() };
nearby_share.mojom.RegisterReceiveSurfaceResultSpec = { $: mojo.internal.Enum() };
nearby_share.mojom.PayloadPreviewSpec = { $: {} };
nearby_share.mojom.ShareTargetSpec = { $: {} };
nearby_share.mojom.TransferMetadataSpec = { $: {} };
nearby_share.mojom.ShareTargetListener = {};
nearby_share.mojom.ShareTargetListener.$interfaceName = 'nearby_share.mojom.ShareTargetListener';
nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec = { $: {} };
nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec = { $: {} };
nearby_share.mojom.TransferUpdateListener = {};
nearby_share.mojom.TransferUpdateListener.$interfaceName = 'nearby_share.mojom.TransferUpdateListener';
nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryObserver = {};
nearby_share.mojom.DiscoveryObserver.$interfaceName = 'nearby_share.mojom.DiscoveryObserver';
nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager = {};
nearby_share.mojom.DiscoveryManager.$interfaceName = 'nearby_share.mojom.DiscoveryManager';
nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_StopDiscovery_ResponseParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec = { $: {} };
nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ConfirmationManager = {};
nearby_share.mojom.ConfirmationManager.$interfaceName = 'nearby_share.mojom.ConfirmationManager';
nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec = { $: {} };
nearby_share.mojom.ConfirmationManager_Accept_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec = { $: {} };
nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec = { $: {} };
nearby_share.mojom.ConfirmationManager_Cancel_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ReceiveObserver = {};
nearby_share.mojom.ReceiveObserver.$interfaceName = 'nearby_share.mojom.ReceiveObserver';
nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager = {};
nearby_share.mojom.ReceiveManager.$interfaceName = 'nearby_share.mojom.ReceiveManager';
nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_Accept_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_Reject_ParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec = { $: {} };
nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec = { $: {} };

// Enum: SelectShareTargetResult
nearby_share.mojom.SelectShareTargetResult = {
  kOk: 0,
  kError: 1,
  kInvalidShareTarget: 2,
};

// Enum: TransferStatus
nearby_share.mojom.TransferStatus = {
  kUnknown: 0,
  kConnecting: 1,
  kAwaitingLocalConfirmation: 2,
  kAwaitingRemoteAcceptance: 3,
  kAwaitingRemoteAcceptanceFailed: 4,
  kInProgress: 5,
  kComplete: 6,
  kFailed: 7,
  kRejected: 8,
  kCancelled: 9,
  kTimedOut: 10,
  kMediaUnavailable: 11,
  kNotEnoughSpace: 12,
  kUnsupportedAttachmentType: 13,
  kDecodeAdvertisementFailed: 14,
  kMissingTransferUpdateCallback: 15,
  kMissingShareTarget: 16,
  kMissingEndpointId: 17,
  kMissingPayloads: 18,
  kPairedKeyVerificationFailed: 19,
  kInvalidIntroductionFrame: 20,
  kIncompletePayloads: 21,
  kFailedToCreateShareTarget: 22,
  kFailedToInitiateOutgoingConnection: 23,
  kFailedToReadOutgoingConnectionResponse: 24,
  kUnexpectedDisconnection: 25,
};

// Enum: StartDiscoveryResult
nearby_share.mojom.StartDiscoveryResult = {
  kSuccess: 0,
  kErrorInProgressTransferring: 1,
  kNoConnectionMedium: 2,
  kErrorGeneric: 3,
};

// Enum: RegisterReceiveSurfaceResult
nearby_share.mojom.RegisterReceiveSurfaceResult = {
  kSuccess: 0,
  kFailure: 1,
  kNoConnectionMedium: 2,
  kTransferInProgress: 3,
};

// Struct: PayloadPreview
mojo.internal.Struct(
    nearby_share.mojom.PayloadPreviewSpec, 'nearby_share.mojom.PayloadPreview', [
      mojo.internal.StructField('description', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('share_type', 8, 0, nearby_share.mojom.ShareTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('file_count', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ShareTarget
mojo.internal.Struct(
    nearby_share.mojom.ShareTargetSpec, 'nearby_share.mojom.ShareTarget', [
      mojo.internal.StructField('id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 16, 0, nearby_share.mojom.ShareTargetTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image_url', 24, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payload_preview', 32, 0, nearby_share.mojom.PayloadPreviewSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('for_self_share', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TransferMetadata
mojo.internal.Struct(
    nearby_share.mojom.TransferMetadataSpec, 'nearby_share.mojom.TransferMetadata', [
      mojo.internal.StructField('status', 0, 0, nearby_share.mojom.TransferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('progress', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('is_original', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_final_status', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: ShareTargetListener
mojo.internal.Struct(
    nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec, 'nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_Params', [
      mojo.internal.StructField('share_target', 0, 0, nearby_share.mojom.ShareTargetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec, 'nearby_share.mojom.ShareTargetListener_OnShareTargetLost_Params', [
      mojo.internal.StructField('share_target', 0, 0, nearby_share.mojom.ShareTargetSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

nearby_share.mojom.ShareTargetListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.ShareTargetListenerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ShareTargetListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.ShareTargetListenerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.ShareTargetListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.ShareTargetListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShareTargetDiscovered(share_target) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec,
      null,
      [share_target],
      false);
  }

  onShareTargetLost(share_target) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec,
      null,
      [share_target],
      false);
  }

};

nearby_share.mojom.ShareTargetListener.getRemote = function() {
  let remote = new nearby_share.mojom.ShareTargetListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ShareTargetListener',
    'context');
  return remote.$;
};

nearby_share.mojom.ShareTargetListenerReceiver = class {
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
        
        // Try Method 0: OnShareTargetDiscovered
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShareTargetDiscovered (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnShareTargetLost
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShareTargetLost (1)');
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onShareTargetDiscovered');
          const result = this.impl.onShareTargetDiscovered(params.share_target);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onShareTargetLost');
          const result = this.impl.onShareTargetLost(params.share_target);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

nearby_share.mojom.ShareTargetListenerReceiver = nearby_share.mojom.ShareTargetListenerReceiver;

nearby_share.mojom.ShareTargetListenerPtr = nearby_share.mojom.ShareTargetListenerRemote;
nearby_share.mojom.ShareTargetListenerRequest = nearby_share.mojom.ShareTargetListenerPendingReceiver;


// Interface: TransferUpdateListener
mojo.internal.Struct(
    nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec, 'nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_Params', [
      mojo.internal.StructField('status', 0, 0, nearby_share.mojom.TransferStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('token', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

nearby_share.mojom.TransferUpdateListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.TransferUpdateListenerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.TransferUpdateListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.TransferUpdateListenerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.TransferUpdateListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.TransferUpdateListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTransferUpdate(status, token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec,
      null,
      [status, token],
      false);
  }

};

nearby_share.mojom.TransferUpdateListener.getRemote = function() {
  let remote = new nearby_share.mojom.TransferUpdateListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.TransferUpdateListener',
    'context');
  return remote.$;
};

nearby_share.mojom.TransferUpdateListenerReceiver = class {
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
        
        // Try Method 0: OnTransferUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTransferUpdate (0)');
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
          const params = decoder.decodeStructInline(nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onTransferUpdate');
          const result = this.impl.onTransferUpdate(params.status, params.token);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

nearby_share.mojom.TransferUpdateListenerReceiver = nearby_share.mojom.TransferUpdateListenerReceiver;

nearby_share.mojom.TransferUpdateListenerPtr = nearby_share.mojom.TransferUpdateListenerRemote;
nearby_share.mojom.TransferUpdateListenerRequest = nearby_share.mojom.TransferUpdateListenerPendingReceiver;


// Interface: DiscoveryObserver
mojo.internal.Struct(
    nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec, 'nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec, 'nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

nearby_share.mojom.DiscoveryObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.DiscoveryObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.DiscoveryObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.DiscoveryObserverPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.DiscoveryObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.DiscoveryObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNearbyProcessStopped() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onStartDiscoveryResult(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec,
      null,
      [success],
      false);
  }

};

nearby_share.mojom.DiscoveryObserver.getRemote = function() {
  let remote = new nearby_share.mojom.DiscoveryObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.DiscoveryObserver',
    'context');
  return remote.$;
};

nearby_share.mojom.DiscoveryObserverReceiver = class {
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
        
        // Try Method 0: OnNearbyProcessStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNearbyProcessStopped (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnStartDiscoveryResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartDiscoveryResult (1)');
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
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onNearbyProcessStopped');
          const result = this.impl.onNearbyProcessStopped();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onStartDiscoveryResult');
          const result = this.impl.onStartDiscoveryResult(params.success);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

nearby_share.mojom.DiscoveryObserverReceiver = nearby_share.mojom.DiscoveryObserverReceiver;

nearby_share.mojom.DiscoveryObserverPtr = nearby_share.mojom.DiscoveryObserverRemote;
nearby_share.mojom.DiscoveryObserverRequest = nearby_share.mojom.DiscoveryObserverPendingReceiver;


// Interface: DiscoveryManager
mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec, 'nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.DiscoveryObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec, 'nearby_share.mojom.DiscoveryManager_StartDiscovery_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.ShareTargetListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec, 'nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, nearby_share.mojom.StartDiscoveryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec, 'nearby_share.mojom.DiscoveryManager_StopDiscovery_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_StopDiscovery_ResponseParamsSpec, 'nearby_share.mojom.DiscoveryManager_StopDiscovery_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec, 'nearby_share.mojom.DiscoveryManager_SelectShareTarget_Params', [
      mojo.internal.StructField('share_target_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec, 'nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, nearby_share.mojom.SelectShareTargetResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transfer_update_listener', 8, 0, mojo.internal.InterfaceRequest(nearby_share.mojom.TransferUpdateListenerSpec), null, true, 0, undefined),
      mojo.internal.StructField('confirmation_manager', 16, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.ConfirmationManagerSpec), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec, 'nearby_share.mojom.DiscoveryManager_GetPayloadPreview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec, 'nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParams', [
      mojo.internal.StructField('payload_preview', 0, 0, nearby_share.mojom.PayloadPreviewSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

nearby_share.mojom.DiscoveryManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.DiscoveryManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.DiscoveryManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.DiscoveryManagerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.DiscoveryManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.DiscoveryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addDiscoveryObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  startDiscovery(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec,
      [listener],
      false);
  }

  stopDiscovery() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_StopDiscovery_ResponseParamsSpec,
      [],
      false);
  }

  selectShareTarget(share_target_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec,
      [share_target_id],
      false);
  }

  getPayloadPreview() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec,
      [],
      false);
  }

};

nearby_share.mojom.DiscoveryManager.getRemote = function() {
  let remote = new nearby_share.mojom.DiscoveryManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.DiscoveryManager',
    'context');
  return remote.$;
};

nearby_share.mojom.DiscoveryManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
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
        
        // Try Method 0: AddDiscoveryObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddDiscoveryObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: StartDiscovery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartDiscovery (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: StopDiscovery
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopDiscovery (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SelectShareTarget
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SelectShareTarget (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetPayloadPreview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetPayloadPreview (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addDiscoveryObserver');
          const result = this.impl.addDiscoveryObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.startDiscovery');
          const result = this.impl.startDiscovery(params.listener);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.stopDiscovery');
          const result = this.impl.stopDiscovery();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.DiscoveryManager_StopDiscovery_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.selectShareTarget');
          const result = this.impl.selectShareTarget(params.share_target_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getPayloadPreview');
          const result = this.impl.getPayloadPreview();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec);
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

nearby_share.mojom.DiscoveryManagerReceiver = nearby_share.mojom.DiscoveryManagerReceiver;

nearby_share.mojom.DiscoveryManagerPtr = nearby_share.mojom.DiscoveryManagerRemote;
nearby_share.mojom.DiscoveryManagerRequest = nearby_share.mojom.DiscoveryManagerPendingReceiver;


// Interface: ConfirmationManager
mojo.internal.Struct(
    nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec, 'nearby_share.mojom.ConfirmationManager_Accept_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ConfirmationManager_Accept_ResponseParamsSpec, 'nearby_share.mojom.ConfirmationManager_Accept_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec, 'nearby_share.mojom.ConfirmationManager_Reject_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec, 'nearby_share.mojom.ConfirmationManager_Reject_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec, 'nearby_share.mojom.ConfirmationManager_Cancel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ConfirmationManager_Cancel_ResponseParamsSpec, 'nearby_share.mojom.ConfirmationManager_Cancel_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

nearby_share.mojom.ConfirmationManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.ConfirmationManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ConfirmationManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.ConfirmationManagerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.ConfirmationManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.ConfirmationManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  accept() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec,
      nearby_share.mojom.ConfirmationManager_Accept_ResponseParamsSpec,
      [],
      false);
  }

  reject() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec,
      nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec,
      [],
      false);
  }

  cancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec,
      nearby_share.mojom.ConfirmationManager_Cancel_ResponseParamsSpec,
      [],
      false);
  }

};

nearby_share.mojom.ConfirmationManager.getRemote = function() {
  let remote = new nearby_share.mojom.ConfirmationManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ConfirmationManager',
    'context');
  return remote.$;
};

nearby_share.mojom.ConfirmationManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: Accept
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Accept (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Reject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reject (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: Cancel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Cancel (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.accept');
          const result = this.impl.accept();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ConfirmationManager_Accept_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reject');
          const result = this.impl.reject();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.cancel');
          const result = this.impl.cancel();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ConfirmationManager_Cancel_ResponseParamsSpec);
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

nearby_share.mojom.ConfirmationManagerReceiver = nearby_share.mojom.ConfirmationManagerReceiver;

nearby_share.mojom.ConfirmationManagerPtr = nearby_share.mojom.ConfirmationManagerRemote;
nearby_share.mojom.ConfirmationManagerRequest = nearby_share.mojom.ConfirmationManagerPendingReceiver;


// Interface: ReceiveObserver
mojo.internal.Struct(
    nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec, 'nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_Params', [
      mojo.internal.StructField('in_high_visibility', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec, 'nearby_share.mojom.ReceiveObserver_OnTransferUpdate_Params', [
      mojo.internal.StructField('share_target', 0, 0, nearby_share.mojom.ShareTargetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 8, 0, nearby_share.mojom.TransferMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec, 'nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec, 'nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_Params', [
    ],
    [[0, 8]]);

nearby_share.mojom.ReceiveObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.ReceiveObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ReceiveObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.ReceiveObserverPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.ReceiveObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.ReceiveObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHighVisibilityChanged(in_high_visibility) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec,
      null,
      [in_high_visibility],
      false);
  }

  onTransferUpdate(share_target, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec,
      null,
      [share_target, metadata],
      false);
  }

  onNearbyProcessStopped() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onStartAdvertisingFailure() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec,
      null,
      [],
      false);
  }

};

nearby_share.mojom.ReceiveObserver.getRemote = function() {
  let remote = new nearby_share.mojom.ReceiveObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ReceiveObserver',
    'context');
  return remote.$;
};

nearby_share.mojom.ReceiveObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
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
        
        // Try Method 0: OnHighVisibilityChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHighVisibilityChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnTransferUpdate
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnTransferUpdate (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnNearbyProcessStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNearbyProcessStopped (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnStartAdvertisingFailure
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartAdvertisingFailure (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onHighVisibilityChanged');
          const result = this.impl.onHighVisibilityChanged(params.in_high_visibility);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onTransferUpdate');
          const result = this.impl.onTransferUpdate(params.share_target, params.metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onNearbyProcessStopped');
          const result = this.impl.onNearbyProcessStopped();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onStartAdvertisingFailure');
          const result = this.impl.onStartAdvertisingFailure();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

nearby_share.mojom.ReceiveObserverReceiver = nearby_share.mojom.ReceiveObserverReceiver;

nearby_share.mojom.ReceiveObserverPtr = nearby_share.mojom.ReceiveObserverRemote;
nearby_share.mojom.ReceiveObserverRequest = nearby_share.mojom.ReceiveObserverPendingReceiver;


// Interface: ReceiveManager
mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec, 'nearby_share.mojom.ReceiveManager_AddReceiveObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.ReceiveObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec, 'nearby_share.mojom.ReceiveManager_IsInHighVisibility_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec, 'nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParams', [
      mojo.internal.StructField('in_high_visibility', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec, 'nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec, 'nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, nearby_share.mojom.RegisterReceiveSurfaceResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec, 'nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec, 'nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_Accept_ParamsSpec, 'nearby_share.mojom.ReceiveManager_Accept_Params', [
      mojo.internal.StructField('share_target_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec, 'nearby_share.mojom.ReceiveManager_Accept_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_Reject_ParamsSpec, 'nearby_share.mojom.ReceiveManager_Reject_Params', [
      mojo.internal.StructField('share_target_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec, 'nearby_share.mojom.ReceiveManager_Reject_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec, 'nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

nearby_share.mojom.ReceiveManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.ReceiveManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ReceiveManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.ReceiveManagerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.ReceiveManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.ReceiveManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addReceiveObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  isInHighVisibility() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec,
      nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec,
      [],
      false);
  }

  registerForegroundReceiveSurface() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec,
      [],
      false);
  }

  unregisterForegroundReceiveSurface() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec,
      [],
      false);
  }

  accept(share_target_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.ReceiveManager_Accept_ParamsSpec,
      nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec,
      [share_target_id],
      false);
  }

  reject(share_target_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby_share.mojom.ReceiveManager_Reject_ParamsSpec,
      nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec,
      [share_target_id],
      false);
  }

  recordFastInitiationNotificationUsage(success) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec,
      null,
      [success],
      false);
  }

};

nearby_share.mojom.ReceiveManager.getRemote = function() {
  let remote = new nearby_share.mojom.ReceiveManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ReceiveManager',
    'context');
  return remote.$;
};

nearby_share.mojom.ReceiveManagerReceiver = class {
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
        
        // Try Method 0: AddReceiveObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddReceiveObserver (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: IsInHighVisibility
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsInHighVisibility (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RegisterForegroundReceiveSurface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterForegroundReceiveSurface (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: UnregisterForegroundReceiveSurface
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UnregisterForegroundReceiveSurface (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Accept
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Accept_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Accept (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Reject
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Reject_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Reject (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: RecordFastInitiationNotificationUsage
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordFastInitiationNotificationUsage (6)');
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addReceiveObserver');
          const result = this.impl.addReceiveObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.isInHighVisibility');
          const result = this.impl.isInHighVisibility();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.registerForegroundReceiveSurface');
          const result = this.impl.registerForegroundReceiveSurface();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.unregisterForegroundReceiveSurface');
          const result = this.impl.unregisterForegroundReceiveSurface();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Accept_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.accept');
          const result = this.impl.accept(params.share_target_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Reject_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.reject');
          const result = this.impl.reject(params.share_target_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.recordFastInitiationNotificationUsage');
          const result = this.impl.recordFastInitiationNotificationUsage(params.success);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

nearby_share.mojom.ReceiveManagerReceiver = nearby_share.mojom.ReceiveManagerReceiver;

nearby_share.mojom.ReceiveManagerPtr = nearby_share.mojom.ReceiveManagerRemote;
nearby_share.mojom.ReceiveManagerRequest = nearby_share.mojom.ReceiveManagerPendingReceiver;

