// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_presence.mojom
// Module: ash.nearby.presence.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.nearby = ash.nearby || {};
ash.nearby.presence = ash.nearby.presence || {};
ash.nearby.presence.mojom = ash.nearby.presence.mojom || {};


// Enum: IdentityType
ash.nearby.presence.mojom.IdentityType = {
  kIdentityTypeUnspecified: 0,
  kIdentityTypePrivateGroup: 1,
  kIdentityTypeContactsGroup: 2,
  kIdentityTypePublic: 3,
};

// Enum: PresenceDeviceType
ash.nearby.presence.mojom.PresenceDeviceType = {
  kUnknown: 0,
  kPhone: 1,
  kTablet: 2,
  kDisplay: 3,
  kLaptop: 4,
  kTv: 5,
  kWatch: 6,
  kChromeos: 7,
  kFoldable: 8,
};

// Enum: ActionType
ash.nearby.presence.mojom.ActionType = {
  kCallTransferAction: 0,
  kActiveUnlockAction: 1,
  kNearbyShareAction: 2,
  kInstantTetheringAction: 3,
  kPhoneHubAction: 4,
  kPresenceManagerAction: 5,
  kFinderAction: 6,
  kFastPairSassAction: 7,
  kTapToTransferAction: 8,
  kLastAction: 9,
};

// Enum: PublicCredentialType
ash.nearby.presence.mojom.PublicCredentialType = {
  kLocalPublicCredential: 0,
  kRemotePublicCredential: 1,
};

// Enum: CredentialType
ash.nearby.presence.mojom.CredentialType = {
  kCredentialTypeUnknown: 0,
  kCredentialTypeDevice: 1,
  kCredentialTypeGaia: 2,
};

// Interface: ScanSession
ash.nearby.presence.mojom.ScanSession = {};

ash.nearby.presence.mojom.ScanSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.nearby.presence.mojom.ScanSessionRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.ScanSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.nearby.presence.mojom.ScanSessionPendingReceiver,
      handle);
    this.$ = new ash.nearby.presence.mojom.ScanSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.nearby.presence.mojom.ScanSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.nearby.presence.mojom.ScanSession.getRemote = function() {
  let remote = new ash.nearby.presence.mojom.ScanSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.ScanSession',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.nearby.presence.mojom.ScanSessionPtr = ash.nearby.presence.mojom.ScanSessionRemote;
ash.nearby.presence.mojom.ScanSessionRequest = ash.nearby.presence.mojom.ScanSessionPendingReceiver;


// Interface: ScanObserver
ash.nearby.presence.mojom.ScanObserver = {};

ash.nearby.presence.mojom.ScanObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.nearby.presence.mojom.ScanObserverRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.ScanObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.nearby.presence.mojom.ScanObserverPendingReceiver,
      handle);
    this.$ = new ash.nearby.presence.mojom.ScanObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.nearby.presence.mojom.ScanObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceFound(device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec,
      null,
      [device]);
  }

  onDeviceChanged(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec,
      null,
      [device]);
  }

  onDeviceLost(device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec,
      null,
      [device]);
  }

};

ash.nearby.presence.mojom.ScanObserver.getRemote = function() {
  let remote = new ash.nearby.presence.mojom.ScanObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.ScanObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceFound
ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.ScanObserver.OnDeviceFound_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceChanged
ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.ScanObserver.OnDeviceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnDeviceLost
ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.ScanObserver.OnDeviceLost_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.nearby.presence.mojom.ScanObserverPtr = ash.nearby.presence.mojom.ScanObserverRemote;
ash.nearby.presence.mojom.ScanObserverRequest = ash.nearby.presence.mojom.ScanObserverPendingReceiver;


// Interface: NearbyPresence
ash.nearby.presence.mojom.NearbyPresence = {};

ash.nearby.presence.mojom.NearbyPresencePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.nearby.presence.mojom.NearbyPresenceRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.NearbyPresence';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.nearby.presence.mojom.NearbyPresencePendingReceiver,
      handle);
    this.$ = new ash.nearby.presence.mojom.NearbyPresenceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.nearby.presence.mojom.NearbyPresenceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startScan(scan_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec,
      [scan_request]);
  }

  setScanObserver(scan_observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec,
      null,
      [scan_observer]);
  }

  updateLocalDeviceMetadata(metadata) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec,
      null,
      [metadata]);
  }

  updateLocalDeviceMetadataAndGenerateCredentials(metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec,
      [metadata]);
  }

  updateRemoteSharedCredentials(shared_credentials, account_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec,
      [shared_credentials, account_name]);
  }

  getLocalSharedCredentials(account_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec,
      [account_name]);
  }

};

ash.nearby.presence.mojom.NearbyPresence.getRemote = function() {
  let remote = new ash.nearby.presence.mojom.NearbyPresenceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.NearbyPresence',
    'context');
  return remote.$;
};

// ParamsSpec for StartScan
ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.StartScan_Params',
      packedSize: 16,
      fields: [
        { name: 'scan_request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.StartScan_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'scan_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetScanObserver
ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.SetScanObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'scan_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateLocalDeviceMetadata
ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateLocalDeviceMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateLocalDeviceMetadataAndGenerateCredentials
ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateLocalDeviceMetadataAndGenerateCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'shared_credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateRemoteSharedCredentials
ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateRemoteSharedCredentials_Params',
      packedSize: 24,
      fields: [
        { name: 'shared_credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'account_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateRemoteSharedCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetLocalSharedCredentials
ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.GetLocalSharedCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.GetLocalSharedCredentials_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'shared_credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.nearby.presence.mojom.NearbyPresencePtr = ash.nearby.presence.mojom.NearbyPresenceRemote;
ash.nearby.presence.mojom.NearbyPresenceRequest = ash.nearby.presence.mojom.NearbyPresencePendingReceiver;

