// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/nearby_share/nearby_share.mojom
// Module: nearby_share.mojom

'use strict';

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};
var ui = ui || {};
var url = url || {};


// Enum: SelectShareTargetResult
nearby_share.mojom.mojom.SelectShareTargetResult = {
  kOk: 0,
  kError: 1,
  kInvalidShareTarget: 2,
};
nearby_share.mojom.mojom.SelectShareTargetResultSpec = { $: mojo.internal.Enum() };

// Enum: TransferStatus
nearby_share.mojom.mojom.TransferStatus = {
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
nearby_share.mojom.mojom.TransferStatusSpec = { $: mojo.internal.Enum() };

// Enum: StartDiscoveryResult
nearby_share.mojom.mojom.StartDiscoveryResult = {
  kSuccess: 0,
  kErrorInProgressTransferring: 1,
  kNoConnectionMedium: 2,
  kErrorGeneric: 3,
};
nearby_share.mojom.mojom.StartDiscoveryResultSpec = { $: mojo.internal.Enum() };

// Enum: RegisterReceiveSurfaceResult
nearby_share.mojom.mojom.RegisterReceiveSurfaceResult = {
  kSuccess: 0,
  kFailure: 1,
  kNoConnectionMedium: 2,
  kTransferInProgress: 3,
};
nearby_share.mojom.mojom.RegisterReceiveSurfaceResultSpec = { $: mojo.internal.Enum() };

// Struct: PayloadPreview
nearby_share.mojom.mojom.PayloadPreviewSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.PayloadPreview',
      packedSize: 24,
      fields: [
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'file_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'share_type', packedOffset: 12, packedBitOffset: 0, type: nearby_share.mojom.ShareTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ShareTarget
nearby_share.mojom.mojom.ShareTargetSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ShareTarget',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: nearby_share.mojom.ShareTargetTypeSpec, nullable: false, minVersion: 0 },
        { name: 'image_url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'payload_preview', packedOffset: 24, packedBitOffset: 0, type: nearby_share.mojom.PayloadPreviewSpec, nullable: false, minVersion: 0 },
        { name: 'for_self_share', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: TransferMetadata
nearby_share.mojom.mojom.TransferMetadataSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.TransferMetadata',
      packedSize: 32,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby_share.mojom.TransferStatusSpec, nullable: false, minVersion: 0 },
        { name: 'progress', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_original', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_final_status', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: ShareTargetListener
nearby_share.mojom.mojom.ShareTargetListener = {};

nearby_share.mojom.mojom.ShareTargetListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.mojom.ShareTargetListenerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ShareTargetListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.mojom.ShareTargetListenerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.mojom.ShareTargetListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.mojom.ShareTargetListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onShareTargetDiscovered(share_target) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec,
      null,
      [share_target]);
  }

  onShareTargetLost(share_target) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec,
      null,
      [share_target]);
  }

};

nearby_share.mojom.mojom.ShareTargetListener.getRemote = function() {
  let remote = new nearby_share.mojom.mojom.ShareTargetListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ShareTargetListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnShareTargetDiscovered
nearby_share.mojom.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ShareTargetListener.OnShareTargetDiscovered_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target', packedOffset: 0, packedBitOffset: 0, type: nearby_share.mojom.ShareTargetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnShareTargetLost
nearby_share.mojom.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ShareTargetListener.OnShareTargetLost_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target', packedOffset: 0, packedBitOffset: 0, type: nearby_share.mojom.ShareTargetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.mojom.ShareTargetListenerPtr = nearby_share.mojom.mojom.ShareTargetListenerRemote;
nearby_share.mojom.mojom.ShareTargetListenerRequest = nearby_share.mojom.mojom.ShareTargetListenerPendingReceiver;


// Interface: TransferUpdateListener
nearby_share.mojom.mojom.TransferUpdateListener = {};

nearby_share.mojom.mojom.TransferUpdateListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.mojom.TransferUpdateListenerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.TransferUpdateListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.mojom.TransferUpdateListenerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.mojom.TransferUpdateListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.mojom.TransferUpdateListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onTransferUpdate(status, token) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec,
      null,
      [status, token]);
  }

};

nearby_share.mojom.mojom.TransferUpdateListener.getRemote = function() {
  let remote = new nearby_share.mojom.mojom.TransferUpdateListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.TransferUpdateListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnTransferUpdate
nearby_share.mojom.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.TransferUpdateListener.OnTransferUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: nearby_share.mojom.TransferStatusSpec, nullable: false, minVersion: 0 },
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.mojom.TransferUpdateListenerPtr = nearby_share.mojom.mojom.TransferUpdateListenerRemote;
nearby_share.mojom.mojom.TransferUpdateListenerRequest = nearby_share.mojom.mojom.TransferUpdateListenerPendingReceiver;


// Interface: DiscoveryObserver
nearby_share.mojom.mojom.DiscoveryObserver = {};

nearby_share.mojom.mojom.DiscoveryObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.mojom.DiscoveryObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.DiscoveryObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.mojom.DiscoveryObserverPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.mojom.DiscoveryObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.mojom.DiscoveryObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNearbyProcessStopped() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec,
      null,
      []);
  }

  onStartDiscoveryResult(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec,
      null,
      [success]);
  }

};

nearby_share.mojom.mojom.DiscoveryObserver.getRemote = function() {
  let remote = new nearby_share.mojom.mojom.DiscoveryObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.DiscoveryObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnNearbyProcessStopped
nearby_share.mojom.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryObserver.OnNearbyProcessStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStartDiscoveryResult
nearby_share.mojom.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryObserver.OnStartDiscoveryResult_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.mojom.DiscoveryObserverPtr = nearby_share.mojom.mojom.DiscoveryObserverRemote;
nearby_share.mojom.mojom.DiscoveryObserverRequest = nearby_share.mojom.mojom.DiscoveryObserverPendingReceiver;


// Interface: DiscoveryManager
nearby_share.mojom.mojom.DiscoveryManager = {};

nearby_share.mojom.mojom.DiscoveryManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.mojom.DiscoveryManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.DiscoveryManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.mojom.DiscoveryManagerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.mojom.DiscoveryManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.mojom.DiscoveryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addDiscoveryObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec,
      null,
      [observer]);
  }

  startDiscovery(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.mojom.DiscoveryManager_StartDiscovery_ParamsSpec,
      nearby_share.mojom.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec,
      [listener]);
  }

  stopDiscovery() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.mojom.DiscoveryManager_StopDiscovery_ParamsSpec,
      null,
      []);
  }

  selectShareTarget(share_target_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec,
      nearby_share.mojom.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec,
      [share_target_id]);
  }

  getPayloadPreview() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec,
      nearby_share.mojom.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec,
      []);
  }

};

nearby_share.mojom.mojom.DiscoveryManager.getRemote = function() {
  let remote = new nearby_share.mojom.mojom.DiscoveryManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.DiscoveryManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddDiscoveryObserver
nearby_share.mojom.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.AddDiscoveryObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(nearby_share.mojom.DiscoveryObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDiscovery
nearby_share.mojom.mojom.DiscoveryManager_StartDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.StartDiscovery_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(nearby_share.mojom.ShareTargetListenerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.StartDiscovery_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: nearby_share.mojom.StartDiscoveryResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopDiscovery
nearby_share.mojom.mojom.DiscoveryManager_StopDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.StopDiscovery_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SelectShareTarget
nearby_share.mojom.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.SelectShareTarget_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.SelectShareTarget_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 16, packedBitOffset: 0, type: nearby_share.mojom.SelectShareTargetResultSpec, nullable: false, minVersion: 0 },
        { name: 'transfer_update_listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(nearby_share.mojom.TransferUpdateListenerRemote), nullable: true, minVersion: 0 },
        { name: 'confirmation_manager', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(nearby_share.mojom.ConfirmationManagerRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetPayloadPreview
nearby_share.mojom.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.GetPayloadPreview_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.GetPayloadPreview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'payload_preview', packedOffset: 0, packedBitOffset: 0, type: nearby_share.mojom.PayloadPreviewSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.mojom.DiscoveryManagerPtr = nearby_share.mojom.mojom.DiscoveryManagerRemote;
nearby_share.mojom.mojom.DiscoveryManagerRequest = nearby_share.mojom.mojom.DiscoveryManagerPendingReceiver;


// Interface: ConfirmationManager
nearby_share.mojom.mojom.ConfirmationManager = {};

nearby_share.mojom.mojom.ConfirmationManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.mojom.ConfirmationManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ConfirmationManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.mojom.ConfirmationManagerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.mojom.ConfirmationManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.mojom.ConfirmationManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  accept() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.mojom.ConfirmationManager_Accept_ParamsSpec,
      nearby_share.mojom.mojom.ConfirmationManager_Accept_ResponseParamsSpec,
      []);
  }

  reject() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.mojom.ConfirmationManager_Reject_ParamsSpec,
      nearby_share.mojom.mojom.ConfirmationManager_Reject_ResponseParamsSpec,
      []);
  }

  cancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.mojom.ConfirmationManager_Cancel_ParamsSpec,
      nearby_share.mojom.mojom.ConfirmationManager_Cancel_ResponseParamsSpec,
      []);
  }

};

nearby_share.mojom.mojom.ConfirmationManager.getRemote = function() {
  let remote = new nearby_share.mojom.mojom.ConfirmationManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ConfirmationManager',
    'context');
  return remote.$;
};

// ParamsSpec for Accept
nearby_share.mojom.mojom.ConfirmationManager_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Accept_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.mojom.ConfirmationManager_Accept_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Accept_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reject
nearby_share.mojom.mojom.ConfirmationManager_Reject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Reject_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.mojom.ConfirmationManager_Reject_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Reject_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
nearby_share.mojom.mojom.ConfirmationManager_Cancel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Cancel_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.mojom.ConfirmationManager_Cancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Cancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.mojom.ConfirmationManagerPtr = nearby_share.mojom.mojom.ConfirmationManagerRemote;
nearby_share.mojom.mojom.ConfirmationManagerRequest = nearby_share.mojom.mojom.ConfirmationManagerPendingReceiver;


// Interface: ReceiveObserver
nearby_share.mojom.mojom.ReceiveObserver = {};

nearby_share.mojom.mojom.ReceiveObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.mojom.ReceiveObserverRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ReceiveObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.mojom.ReceiveObserverPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.mojom.ReceiveObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.mojom.ReceiveObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onHighVisibilityChanged(in_high_visibility) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec,
      null,
      [in_high_visibility]);
  }

  onTransferUpdate(share_target, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec,
      null,
      [share_target, metadata]);
  }

  onNearbyProcessStopped() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec,
      null,
      []);
  }

  onStartAdvertisingFailure() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec,
      null,
      []);
  }

};

nearby_share.mojom.mojom.ReceiveObserver.getRemote = function() {
  let remote = new nearby_share.mojom.mojom.ReceiveObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ReceiveObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnHighVisibilityChanged
nearby_share.mojom.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveObserver.OnHighVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'in_high_visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTransferUpdate
nearby_share.mojom.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveObserver.OnTransferUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'share_target', packedOffset: 0, packedBitOffset: 0, type: nearby_share.mojom.ShareTargetSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: nearby_share.mojom.TransferMetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnNearbyProcessStopped
nearby_share.mojom.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveObserver.OnNearbyProcessStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStartAdvertisingFailure
nearby_share.mojom.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveObserver.OnStartAdvertisingFailure_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.mojom.ReceiveObserverPtr = nearby_share.mojom.mojom.ReceiveObserverRemote;
nearby_share.mojom.mojom.ReceiveObserverRequest = nearby_share.mojom.mojom.ReceiveObserverPendingReceiver;


// Interface: ReceiveManager
nearby_share.mojom.mojom.ReceiveManager = {};

nearby_share.mojom.mojom.ReceiveManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

nearby_share.mojom.mojom.ReceiveManagerRemote = class {
  static get $interfaceName() {
    return 'nearby_share.mojom.ReceiveManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      nearby_share.mojom.mojom.ReceiveManagerPendingReceiver,
      handle);
    this.$ = new nearby_share.mojom.mojom.ReceiveManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

nearby_share.mojom.mojom.ReceiveManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addReceiveObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      nearby_share.mojom.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec,
      null,
      [observer]);
  }

  isInHighVisibility() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec,
      nearby_share.mojom.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec,
      []);
  }

  registerForegroundReceiveSurface() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec,
      []);
  }

  unregisterForegroundReceiveSurface() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec,
      []);
  }

  accept(share_target_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.mojom.ReceiveManager_Accept_ParamsSpec,
      nearby_share.mojom.mojom.ReceiveManager_Accept_ResponseParamsSpec,
      [share_target_id]);
  }

  reject(share_target_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby_share.mojom.mojom.ReceiveManager_Reject_ParamsSpec,
      nearby_share.mojom.mojom.ReceiveManager_Reject_ResponseParamsSpec,
      [share_target_id]);
  }

  recordFastInitiationNotificationUsage(success) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby_share.mojom.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec,
      null,
      [success]);
  }

};

nearby_share.mojom.mojom.ReceiveManager.getRemote = function() {
  let remote = new nearby_share.mojom.mojom.ReceiveManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'nearby_share.mojom.ReceiveManager',
    'context');
  return remote.$;
};

// ParamsSpec for AddReceiveObserver
nearby_share.mojom.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.AddReceiveObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(nearby_share.mojom.ReceiveObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsInHighVisibility
nearby_share.mojom.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.IsInHighVisibility_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.IsInHighVisibility_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'in_high_visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterForegroundReceiveSurface
nearby_share.mojom.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.RegisterForegroundReceiveSurface_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.RegisterForegroundReceiveSurface_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: nearby_share.mojom.RegisterReceiveSurfaceResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnregisterForegroundReceiveSurface
nearby_share.mojom.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.UnregisterForegroundReceiveSurface_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

nearby_share.mojom.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.UnregisterForegroundReceiveSurface_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Accept
nearby_share.mojom.mojom.ReceiveManager_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Accept_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.mojom.ReceiveManager_Accept_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Accept_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reject
nearby_share.mojom.mojom.ReceiveManager_Reject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Reject_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.mojom.ReceiveManager_Reject_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Reject_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordFastInitiationNotificationUsage
nearby_share.mojom.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.RecordFastInitiationNotificationUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.mojom.ReceiveManagerPtr = nearby_share.mojom.mojom.ReceiveManagerRemote;
nearby_share.mojom.mojom.ReceiveManagerRequest = nearby_share.mojom.mojom.ReceiveManagerPendingReceiver;

