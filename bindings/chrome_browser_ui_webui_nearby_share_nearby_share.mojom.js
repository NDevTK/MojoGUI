// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/nearby_share/nearby_share.mojom
// Module: nearby_share.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onShareTargetDiscovered(share_target) {
    return this.$.onShareTargetDiscovered(share_target);
  }
  onShareTargetLost(share_target) {
    return this.$.onShareTargetLost(share_target);
  }
};

nearby_share.mojom.ShareTargetListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ShareTargetListener', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onShareTargetDiscovered(share_target) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec,
      null,
      [share_target],
      false);
  }

  onShareTargetLost(share_target) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ShareTargetListener', [
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
             decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec.$.structSpec);
          const result = this.impl.onShareTargetDiscovered(params.share_target);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec.$.structSpec);
          const result = this.impl.onShareTargetLost(params.share_target);
          break;
        }
      }
      } catch (err) {}
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
  onTransferUpdate(status, token) {
    return this.$.onTransferUpdate(status, token);
  }
};

nearby_share.mojom.TransferUpdateListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TransferUpdateListener', [
      { explicit: null },
    ]);
  }

  onTransferUpdate(status, token) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('TransferUpdateListener', [
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
             decoder.decodeStructInline(nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onTransferUpdate(params.status, params.token);
          break;
        }
      }
      } catch (err) {}
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
  onNearbyProcessStopped() {
    return this.$.onNearbyProcessStopped();
  }
  onStartDiscoveryResult(success) {
    return this.$.onStartDiscoveryResult(success);
  }
};

nearby_share.mojom.DiscoveryObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiscoveryObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNearbyProcessStopped() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onStartDiscoveryResult(success) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DiscoveryObserver', [
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
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec.$.structSpec);
          const result = this.impl.onNearbyProcessStopped();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec.$.structSpec);
          const result = this.impl.onStartDiscoveryResult(params.success);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby_share.mojom.DiscoveryObserverReceiver = nearby_share.mojom.DiscoveryObserverReceiver;

nearby_share.mojom.DiscoveryObserverPtr = nearby_share.mojom.DiscoveryObserverRemote;
nearby_share.mojom.DiscoveryObserverRequest = nearby_share.mojom.DiscoveryObserverPendingReceiver;


// Interface: DiscoveryManager
mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec, 'nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.DiscoveryObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec, 'nearby_share.mojom.DiscoveryManager_StartDiscovery_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.ShareTargetListenerRemote), null, false, 0, undefined),
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
      mojo.internal.StructField('transfer_update_listener', 8, 0, mojo.internal.InterfaceRequest(nearby_share.mojom.TransferUpdateListenerRemote), null, true, 0, undefined),
      mojo.internal.StructField('confirmation_manager', 16, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.ConfirmationManagerRemote), null, true, 0, undefined),
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
  addDiscoveryObserver(observer) {
    return this.$.addDiscoveryObserver(observer);
  }
  startDiscovery(listener) {
    return this.$.startDiscovery(listener);
  }
  stopDiscovery() {
    return this.$.stopDiscovery();
  }
  selectShareTarget(share_target_id) {
    return this.$.selectShareTarget(share_target_id);
  }
  getPayloadPreview() {
    return this.$.getPayloadPreview();
  }
};

nearby_share.mojom.DiscoveryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DiscoveryManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addDiscoveryObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  startDiscovery(listener) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec,
      [listener],
      false);
  }

  stopDiscovery() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_StopDiscovery_ResponseParamsSpec,
      [],
      false);
  }

  selectShareTarget(share_target_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec,
      [share_target_id],
      false);
  }

  getPayloadPreview() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DiscoveryManager', [
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
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addDiscoveryObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  accept() {
    return this.$.accept();
  }
  reject() {
    return this.$.reject();
  }
  cancel() {
    return this.$.cancel();
  }
};

nearby_share.mojom.ConfirmationManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConfirmationManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  accept() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec,
      nearby_share.mojom.ConfirmationManager_Accept_ResponseParamsSpec,
      [],
      false);
  }

  reject() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec,
      nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec,
      [],
      false);
  }

  cancel() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ConfirmationManager', [
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
             decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec.$.structSpec);
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
      } catch (err) {}
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
  onHighVisibilityChanged(in_high_visibility) {
    return this.$.onHighVisibilityChanged(in_high_visibility);
  }
  onTransferUpdate(share_target, metadata) {
    return this.$.onTransferUpdate(share_target, metadata);
  }
  onNearbyProcessStopped() {
    return this.$.onNearbyProcessStopped();
  }
  onStartAdvertisingFailure() {
    return this.$.onStartAdvertisingFailure();
  }
};

nearby_share.mojom.ReceiveObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReceiveObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onHighVisibilityChanged(in_high_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec,
      null,
      [in_high_visibility],
      false);
  }

  onTransferUpdate(share_target, metadata) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec,
      null,
      [share_target, metadata],
      false);
  }

  onNearbyProcessStopped() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onStartAdvertisingFailure() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ReceiveObserver', [
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
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onHighVisibilityChanged(params.in_high_visibility);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.onTransferUpdate(params.share_target, params.metadata);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec.$.structSpec);
          const result = this.impl.onNearbyProcessStopped();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec.$.structSpec);
          const result = this.impl.onStartAdvertisingFailure();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby_share.mojom.ReceiveObserverReceiver = nearby_share.mojom.ReceiveObserverReceiver;

nearby_share.mojom.ReceiveObserverPtr = nearby_share.mojom.ReceiveObserverRemote;
nearby_share.mojom.ReceiveObserverRequest = nearby_share.mojom.ReceiveObserverPendingReceiver;


// Interface: ReceiveManager
mojo.internal.Struct(
    nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec, 'nearby_share.mojom.ReceiveManager_AddReceiveObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(nearby_share.mojom.ReceiveObserverRemote), null, false, 0, undefined),
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
  addReceiveObserver(observer) {
    return this.$.addReceiveObserver(observer);
  }
  isInHighVisibility() {
    return this.$.isInHighVisibility();
  }
  registerForegroundReceiveSurface() {
    return this.$.registerForegroundReceiveSurface();
  }
  unregisterForegroundReceiveSurface() {
    return this.$.unregisterForegroundReceiveSurface();
  }
  accept(share_target_id) {
    return this.$.accept(share_target_id);
  }
  reject(share_target_id) {
    return this.$.reject(share_target_id);
  }
  recordFastInitiationNotificationUsage(success) {
    return this.$.recordFastInitiationNotificationUsage(success);
  }
};

nearby_share.mojom.ReceiveManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ReceiveManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  addReceiveObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  isInHighVisibility() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec,
      nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec,
      [],
      false);
  }

  registerForegroundReceiveSurface() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec,
      [],
      false);
  }

  unregisterForegroundReceiveSurface() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec,
      [],
      false);
  }

  accept(share_target_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      nearby_share.mojom.ReceiveManager_Accept_ParamsSpec,
      nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec,
      [share_target_id],
      false);
  }

  reject(share_target_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      nearby_share.mojom.ReceiveManager_Reject_ParamsSpec,
      nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec,
      [share_target_id],
      false);
  }

  recordFastInitiationNotificationUsage(success) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ReceiveManager', [
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
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Accept_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Reject_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec.$.structSpec);
          const result = this.impl.addReceiveObserver(params.observer);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Accept_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_Reject_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec.$.structSpec);
          const result = this.impl.recordFastInitiationNotificationUsage(params.success);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

nearby_share.mojom.ReceiveManagerReceiver = nearby_share.mojom.ReceiveManagerReceiver;

nearby_share.mojom.ReceiveManagerPtr = nearby_share.mojom.ReceiveManagerRemote;
nearby_share.mojom.ReceiveManagerRequest = nearby_share.mojom.ReceiveManagerPendingReceiver;

