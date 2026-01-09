// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/nearby_share/nearby_share.mojom
// Module: nearby_share.mojom

'use strict';

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};


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

// Interface: ShareTargetListener
nearby_share.mojom.ShareTargetListener = {};

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
      null,
      [share_target],
      undefined,
      undefined
    );
  }

  onShareTargetLost(share_target) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec,
      null,
      null,
      [share_target],
      undefined,
      undefined
    );
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

// ParamsSpec for OnShareTargetDiscovered
nearby_share.mojom.ShareTargetListener_OnShareTargetDiscovered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ShareTargetListener.OnShareTargetDiscovered_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnShareTargetLost
nearby_share.mojom.ShareTargetListener_OnShareTargetLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ShareTargetListener.OnShareTargetLost_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.ShareTargetListenerPtr = nearby_share.mojom.ShareTargetListenerRemote;
nearby_share.mojom.ShareTargetListenerRequest = nearby_share.mojom.ShareTargetListenerPendingReceiver;


// Interface: TransferUpdateListener
nearby_share.mojom.TransferUpdateListener = {};

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
      null,
      [status, token],
      undefined,
      undefined
    );
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

// ParamsSpec for OnTransferUpdate
nearby_share.mojom.TransferUpdateListener_OnTransferUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.TransferUpdateListener.OnTransferUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'token', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.TransferUpdateListenerPtr = nearby_share.mojom.TransferUpdateListenerRemote;
nearby_share.mojom.TransferUpdateListenerRequest = nearby_share.mojom.TransferUpdateListenerPendingReceiver;


// Interface: DiscoveryObserver
nearby_share.mojom.DiscoveryObserver = {};

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
      null,
      [],
      undefined,
      undefined
    );
  }

  onStartDiscoveryResult(success) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec,
      null,
      null,
      [success],
      undefined,
      undefined
    );
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

// ParamsSpec for OnNearbyProcessStopped
nearby_share.mojom.DiscoveryObserver_OnNearbyProcessStopped_ParamsSpec = {
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
nearby_share.mojom.DiscoveryObserver_OnStartDiscoveryResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryObserver.OnStartDiscoveryResult_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.DiscoveryObserverPtr = nearby_share.mojom.DiscoveryObserverRemote;
nearby_share.mojom.DiscoveryObserverRequest = nearby_share.mojom.DiscoveryObserverPendingReceiver;


// Interface: DiscoveryManager
nearby_share.mojom.DiscoveryManager = {};

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
      null,
      [observer],
      undefined,
      undefined
    );
  }

  startDiscovery(listener) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec,
      nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec,
      [listener],
      undefined,
      undefined
    );
  }

  stopDiscovery() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  selectShareTarget(share_target_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec,
      nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec,
      [share_target_id],
      undefined,
      undefined
    );
  }

  getPayloadPreview() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec,
      nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec,
      nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for AddDiscoveryObserver
nearby_share.mojom.DiscoveryManager_AddDiscoveryObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.AddDiscoveryObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartDiscovery
nearby_share.mojom.DiscoveryManager_StartDiscovery_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.StartDiscovery_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.DiscoveryManager_StartDiscovery_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.StartDiscovery_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopDiscovery
nearby_share.mojom.DiscoveryManager_StopDiscovery_ParamsSpec = {
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
nearby_share.mojom.DiscoveryManager_SelectShareTarget_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.SelectShareTarget_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.DiscoveryManager_SelectShareTarget_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.SelectShareTarget_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'transfer_update_listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'confirmation_manager', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetPayloadPreview
nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ParamsSpec = {
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

nearby_share.mojom.DiscoveryManager_GetPayloadPreview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.DiscoveryManager.GetPayloadPreview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'payload_preview', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.DiscoveryManagerPtr = nearby_share.mojom.DiscoveryManagerRemote;
nearby_share.mojom.DiscoveryManagerRequest = nearby_share.mojom.DiscoveryManagerPendingReceiver;


// Interface: ConfirmationManager
nearby_share.mojom.ConfirmationManager = {};

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
      nearby_share.mojom.ConfirmationManager_Accept_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  reject() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec,
      nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec,
      nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  cancel() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec,
      nearby_share.mojom.ConfirmationManager_Cancel_ResponseParamsSpec,
      nearby_share.mojom.ConfirmationManager_Cancel_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for Accept
nearby_share.mojom.ConfirmationManager_Accept_ParamsSpec = {
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

nearby_share.mojom.ConfirmationManager_Accept_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Accept_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reject
nearby_share.mojom.ConfirmationManager_Reject_ParamsSpec = {
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

nearby_share.mojom.ConfirmationManager_Reject_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Reject_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Cancel
nearby_share.mojom.ConfirmationManager_Cancel_ParamsSpec = {
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

nearby_share.mojom.ConfirmationManager_Cancel_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ConfirmationManager.Cancel_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.ConfirmationManagerPtr = nearby_share.mojom.ConfirmationManagerRemote;
nearby_share.mojom.ConfirmationManagerRequest = nearby_share.mojom.ConfirmationManagerPendingReceiver;


// Interface: ReceiveObserver
nearby_share.mojom.ReceiveObserver = {};

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
      null,
      [in_high_visibility],
      undefined,
      undefined
    );
  }

  onTransferUpdate(share_target, metadata) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec,
      null,
      null,
      [share_target, metadata],
      undefined,
      undefined
    );
  }

  onNearbyProcessStopped() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onStartAdvertisingFailure() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for OnHighVisibilityChanged
nearby_share.mojom.ReceiveObserver_OnHighVisibilityChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveObserver.OnHighVisibilityChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'in_high_visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTransferUpdate
nearby_share.mojom.ReceiveObserver_OnTransferUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveObserver.OnTransferUpdate_Params',
      packedSize: 24,
      fields: [
        { name: 'share_target', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnNearbyProcessStopped
nearby_share.mojom.ReceiveObserver_OnNearbyProcessStopped_ParamsSpec = {
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
nearby_share.mojom.ReceiveObserver_OnStartAdvertisingFailure_ParamsSpec = {
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
nearby_share.mojom.ReceiveObserverPtr = nearby_share.mojom.ReceiveObserverRemote;
nearby_share.mojom.ReceiveObserverRequest = nearby_share.mojom.ReceiveObserverPendingReceiver;


// Interface: ReceiveManager
nearby_share.mojom.ReceiveManager = {};

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
      null,
      [observer],
      undefined,
      undefined
    );
  }

  isInHighVisibility() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec,
      nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec,
      nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  registerForegroundReceiveSurface() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec,
      nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  unregisterForegroundReceiveSurface() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec,
      nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec,
      nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  accept(share_target_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      nearby_share.mojom.ReceiveManager_Accept_ParamsSpec,
      nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec,
      nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec,
      [share_target_id],
      undefined,
      undefined
    );
  }

  reject(share_target_id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      nearby_share.mojom.ReceiveManager_Reject_ParamsSpec,
      nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec,
      nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec,
      [share_target_id],
      undefined,
      undefined
    );
  }

  recordFastInitiationNotificationUsage(success) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec,
      null,
      null,
      [success],
      undefined,
      undefined
    );
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

// ParamsSpec for AddReceiveObserver
nearby_share.mojom.ReceiveManager_AddReceiveObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.AddReceiveObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for IsInHighVisibility
nearby_share.mojom.ReceiveManager_IsInHighVisibility_ParamsSpec = {
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

nearby_share.mojom.ReceiveManager_IsInHighVisibility_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.IsInHighVisibility_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'in_high_visibility', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterForegroundReceiveSurface
nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ParamsSpec = {
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

nearby_share.mojom.ReceiveManager_RegisterForegroundReceiveSurface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.RegisterForegroundReceiveSurface_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UnregisterForegroundReceiveSurface
nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ParamsSpec = {
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

nearby_share.mojom.ReceiveManager_UnregisterForegroundReceiveSurface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.UnregisterForegroundReceiveSurface_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Accept
nearby_share.mojom.ReceiveManager_Accept_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Accept_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.ReceiveManager_Accept_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Accept_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Reject
nearby_share.mojom.ReceiveManager_Reject_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Reject_Params',
      packedSize: 16,
      fields: [
        { name: 'share_target_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

nearby_share.mojom.ReceiveManager_Reject_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.Reject_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RecordFastInitiationNotificationUsage
nearby_share.mojom.ReceiveManager_RecordFastInitiationNotificationUsage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'nearby_share.mojom.ReceiveManager.RecordFastInitiationNotificationUsage_Params',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
nearby_share.mojom.ReceiveManagerPtr = nearby_share.mojom.ReceiveManagerRemote;
nearby_share.mojom.ReceiveManagerRequest = nearby_share.mojom.ReceiveManagerPendingReceiver;

