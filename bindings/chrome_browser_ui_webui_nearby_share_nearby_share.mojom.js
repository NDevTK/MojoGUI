// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/nearby_share/nearby_share.mojom
// Module: nearby_share.mojom

'use strict';

// Module namespace
var nearby_share = nearby_share || {};
nearby_share.mojom = nearby_share.mojom || {};


// Enum: SelectShareTargetResult
nearby_share.mojom.SelectShareTargetResult = {
};

// Enum: TransferStatus
nearby_share.mojom.TransferStatus = {
  kUnknown: 0,
  or: 1,
};

// Enum: StartDiscoveryResult
nearby_share.mojom.StartDiscoveryResult = {
  Wi: 0,
  etc: 1,
};

// Enum: RegisterReceiveSurfaceResult
nearby_share.mojom.RegisterReceiveSurfaceResult = {
  Wi: 0,
  etc: 1,
};

// Struct: PayloadPreview
nearby_share.mojom.PayloadPreview = class {
  constructor(values = {}) {
    this.share_type = values.share_type !== undefined ? values.share_type : 0;
  }
};

// Struct: ShareTarget
nearby_share.mojom.ShareTarget = class {
  constructor(values = {}) {
    this.for_self_share = values.for_self_share !== undefined ? values.for_self_share : false;
  }
};

// Struct: TransferMetadata
nearby_share.mojom.TransferMetadata = class {
  constructor(values = {}) {
    this.is_final_status = values.is_final_status !== undefined ? values.is_final_status : 0;
  }
};

// Interface: ShareTargetListener
nearby_share.mojom.ShareTargetListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.ShareTargetListener';
  }

  onShareTargetDiscovered(share_target) {
    // Method: OnShareTargetDiscovered
    // Call: OnShareTargetDiscovered(share_target)
  }

  onShareTargetLost(share_target) {
    // Method: OnShareTargetLost
    // Call: OnShareTargetLost(share_target)
  }

};

nearby_share.mojom.ShareTargetListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: TransferUpdateListener
nearby_share.mojom.TransferUpdateListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.TransferUpdateListener';
  }

  onTransferUpdate(status, token) {
    // Method: OnTransferUpdate
    // Call: OnTransferUpdate(status, token)
  }

};

nearby_share.mojom.TransferUpdateListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DiscoveryObserver
nearby_share.mojom.DiscoveryObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.DiscoveryObserver';
  }

  onNearbyProcessStopped() {
    // Method: OnNearbyProcessStopped
    // Call: OnNearbyProcessStopped()
  }

  onStartDiscoveryResult(success) {
    // Method: OnStartDiscoveryResult
    // Call: OnStartDiscoveryResult(success)
  }

};

nearby_share.mojom.DiscoveryObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: DiscoveryManager
nearby_share.mojom.DiscoveryManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.DiscoveryManager';
  }

  addDiscoveryObserver(observer) {
    // Method: AddDiscoveryObserver
    // Call: AddDiscoveryObserver(observer)
  }

  startDiscovery(listener) {
    // Method: StartDiscovery
    return new Promise((resolve) => {
      // Call: StartDiscovery(listener)
      resolve({});
    });
  }

  stopDiscovery() {
    // Method: StopDiscovery
    // Call: StopDiscovery()
  }

  selectShareTarget(share_target_id) {
    // Method: SelectShareTarget
    return new Promise((resolve) => {
      // Call: SelectShareTarget(share_target_id)
      resolve({});
    });
  }

  getPayloadPreview() {
    // Method: GetPayloadPreview
    return new Promise((resolve) => {
      // Call: GetPayloadPreview()
      resolve({});
    });
  }

};

nearby_share.mojom.DiscoveryManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ConfirmationManager
nearby_share.mojom.ConfirmationManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.ConfirmationManager';
  }

  accept() {
    // Method: Accept
    return new Promise((resolve) => {
      // Call: Accept()
      resolve({});
    });
  }

  reject() {
    // Method: Reject
    return new Promise((resolve) => {
      // Call: Reject()
      resolve({});
    });
  }

  cancel() {
    // Method: Cancel
    return new Promise((resolve) => {
      // Call: Cancel()
      resolve({});
    });
  }

};

nearby_share.mojom.ConfirmationManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ReceiveObserver
nearby_share.mojom.ReceiveObserverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.ReceiveObserver';
  }

  onHighVisibilityChanged(in_high_visibility) {
    // Method: OnHighVisibilityChanged
    // Call: OnHighVisibilityChanged(in_high_visibility)
  }

  onTransferUpdate(share_target, metadata) {
    // Method: OnTransferUpdate
    // Call: OnTransferUpdate(share_target, metadata)
  }

  onNearbyProcessStopped() {
    // Method: OnNearbyProcessStopped
    // Call: OnNearbyProcessStopped()
  }

  onStartAdvertisingFailure() {
    // Method: OnStartAdvertisingFailure
    // Call: OnStartAdvertisingFailure()
  }

};

nearby_share.mojom.ReceiveObserverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ReceiveManager
nearby_share.mojom.ReceiveManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'nearby_share.mojom.ReceiveManager';
  }

  addReceiveObserver(observer) {
    // Method: AddReceiveObserver
    // Call: AddReceiveObserver(observer)
  }

  isInHighVisibility() {
    // Method: IsInHighVisibility
    return new Promise((resolve) => {
      // Call: IsInHighVisibility()
      resolve({});
    });
  }

  registerForegroundReceiveSurface() {
    // Method: RegisterForegroundReceiveSurface
    return new Promise((resolve) => {
      // Call: RegisterForegroundReceiveSurface()
      resolve({});
    });
  }

  unregisterForegroundReceiveSurface() {
    // Method: UnregisterForegroundReceiveSurface
    return new Promise((resolve) => {
      // Call: UnregisterForegroundReceiveSurface()
      resolve({});
    });
  }

  accept(share_target_id) {
    // Method: Accept
    return new Promise((resolve) => {
      // Call: Accept(share_target_id)
      resolve({});
    });
  }

  reject(share_target_id) {
    // Method: Reject
    return new Promise((resolve) => {
      // Call: Reject(share_target_id)
      resolve({});
    });
  }

  recordFastInitiationNotificationUsage(success) {
    // Method: RecordFastInitiationNotificationUsage
    // Call: RecordFastInitiationNotificationUsage(success)
  }

};

nearby_share.mojom.ReceiveManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
