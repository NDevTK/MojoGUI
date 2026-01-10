// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_presence.mojom
// Module: ash.nearby.presence.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.nearby = ash.nearby || {};
ash.nearby.nearby.presence = ash.nearby.nearby.presence || {};
ash.nearby.nearby.presence.presence.mojom = ash.nearby.nearby.presence.presence.mojom || {};


// Enum: IdentityType
ash.nearby.nearby.presence.presence.mojom.mojom.IdentityType = {
  kIdentityTypeUnspecified: 0,
  kIdentityTypePrivateGroup: 1,
  kIdentityTypeContactsGroup: 2,
  kIdentityTypePublic: 3,
};
ash.nearby.nearby.presence.presence.mojom.mojom.IdentityTypeSpec = { $: mojo.internal.Enum() };

// Enum: PresenceDeviceType
ash.nearby.nearby.presence.presence.mojom.mojom.PresenceDeviceType = {
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
ash.nearby.nearby.presence.presence.mojom.mojom.PresenceDeviceTypeSpec = { $: mojo.internal.Enum() };

// Enum: ActionType
ash.nearby.nearby.presence.presence.mojom.mojom.ActionType = {
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
ash.nearby.nearby.presence.presence.mojom.mojom.ActionTypeSpec = { $: mojo.internal.Enum() };

// Enum: PublicCredentialType
ash.nearby.nearby.presence.presence.mojom.mojom.PublicCredentialType = {
  kLocalPublicCredential: 0,
  kRemotePublicCredential: 1,
};
ash.nearby.nearby.presence.presence.mojom.mojom.PublicCredentialTypeSpec = { $: mojo.internal.Enum() };

// Enum: CredentialType
ash.nearby.nearby.presence.presence.mojom.mojom.CredentialType = {
  kCredentialTypeUnknown: 0,
  kCredentialTypeDevice: 1,
  kCredentialTypeGaia: 2,
};
ash.nearby.nearby.presence.presence.mojom.mojom.CredentialTypeSpec = { $: mojo.internal.Enum() };

// Struct: ScanRequest
ash.nearby.nearby.presence.presence.mojom.mojom.ScanRequestSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.ScanRequest',
      packedSize: 32,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'identity_types', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.nearby.presence.mojom.IdentityTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'scan_filters', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(ash.nearby.presence.mojom.PresenceScanFilterSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: PrivateKey
ash.nearby.nearby.presence.presence.mojom.mojom.PrivateKeySpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.PrivateKey',
      packedSize: 24,
      fields: [
        { name: 'certificate_alias', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: PresenceScanFilter
ash.nearby.nearby.presence.presence.mojom.mojom.PresenceScanFilterSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.PresenceScanFilter',
      packedSize: 16,
      fields: [
        { name: 'device_type', packedOffset: 0, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Metadata
ash.nearby.nearby.presence.presence.mojom.mojom.MetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.Metadata',
      packedSize: 40,
      fields: [
        { name: 'device_type', packedOffset: 24, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceTypeSpec, nullable: false, minVersion: 0 },
        { name: 'device_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'bluetooth_mac_address', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: SharedCredential
ash.nearby.nearby.presence.presence.mojom.mojom.SharedCredentialSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.SharedCredential',
      packedSize: 136,
      fields: [
        { name: 'key_seed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
        { name: 'start_time_millis', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'end_time_millis', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'encrypted_metadata_bytes_v0', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'metadata_encryption_key_tag_v0', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'connection_signature_verification_key', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'advertisement_signature_verification_key', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'identity_type', packedOffset: 120, packedBitOffset: 0, type: ash.nearby.presence.mojom.IdentityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'credential_type', packedOffset: 124, packedBitOffset: 0, type: ash.nearby.presence.mojom.CredentialTypeSpec, nullable: false, minVersion: 0 },
        { name: 'encrypted_metadata_bytes_v1', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'identity_token_short_salt_adv_hmac_key_v1', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'dusi', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'signature_version', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'identity_token_extended_salt_adv_hmac_key_v1', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'identity_token_signed_adv_hmac_key_v1', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Struct: PresenceDevice
ash.nearby.nearby.presence.presence.mojom.mojom.PresenceDeviceSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.PresenceDevice',
      packedSize: 48,
      fields: [
        { name: 'endpoint_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'actions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.nearby.presence.mojom.ActionTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'stable_device_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'metadata', packedOffset: 24, packedBitOffset: 0, type: ash.nearby.presence.mojom.MetadataSpec, nullable: false, minVersion: 0 },
        { name: 'decrypt_shared_credential', packedOffset: 32, packedBitOffset: 0, type: ash.nearby.presence.mojom.SharedCredentialSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: LocalCredential
ash.nearby.nearby.presence.presence.mojom.mojom.LocalCredentialSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.LocalCredential',
      packedSize: 104,
      fields: [
        { name: 'secret_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'key_seed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'start_time_millis', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'end_time_millis', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'metadata_encryption_key_v0', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'advertisement_signing_key', packedOffset: 40, packedBitOffset: 0, type: ash.nearby.presence.mojom.PrivateKeySpec, nullable: false, minVersion: 0 },
        { name: 'connection_signing_key', packedOffset: 48, packedBitOffset: 0, type: ash.nearby.presence.mojom.PrivateKeySpec, nullable: false, minVersion: 0 },
        { name: 'identity_type', packedOffset: 88, packedBitOffset: 0, type: ash.nearby.presence.mojom.IdentityTypeSpec, nullable: false, minVersion: 0 },
        { name: 'consumed_salts', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'identity_token_v1', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'signature_version', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 104}]
    }
  }
};

// Interface: ScanSession
ash.nearby.nearby.presence.presence.mojom.mojom.ScanSession = {};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.ScanSession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionPendingReceiver,
      handle);
    this.$ = new ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanSession.getRemote = function() {
  let remote = new ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.ScanSession',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionPtr = ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionRemote;
ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionRequest = ash.nearby.nearby.presence.presence.mojom.mojom.ScanSessionPendingReceiver;


// Interface: ScanObserver
ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver = {};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.ScanObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverPendingReceiver,
      handle);
    this.$ = new ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceFound(device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver_OnDeviceFound_ParamsSpec,
      null,
      [device]);
  }

  onDeviceChanged(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver_OnDeviceChanged_ParamsSpec,
      null,
      [device]);
  }

  onDeviceLost(device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver_OnDeviceLost_ParamsSpec,
      null,
      [device]);
  }

};

ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver.getRemote = function() {
  let remote = new ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.ScanObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnDeviceFound
ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver_OnDeviceFound_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.ScanObserver.OnDeviceFound_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceChanged
ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver_OnDeviceChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.ScanObserver.OnDeviceChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDeviceLost
ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserver_OnDeviceLost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.ScanObserver.OnDeviceLost_Params',
      packedSize: 16,
      fields: [
        { name: 'device', packedOffset: 0, packedBitOffset: 0, type: ash.nearby.presence.mojom.PresenceDeviceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverPtr = ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverRemote;
ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverRequest = ash.nearby.nearby.presence.presence.mojom.mojom.ScanObserverPendingReceiver;


// Interface: NearbyPresence
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence = {};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresencePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresenceRemote = class {
  static get $interfaceName() {
    return 'ash.nearby.presence.mojom.NearbyPresence';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresencePendingReceiver,
      handle);
    this.$ = new ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresenceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresenceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  startScan(scan_request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_StartScan_ParamsSpec,
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_StartScan_ResponseParamsSpec,
      [scan_request]);
  }

  setScanObserver(scan_observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_SetScanObserver_ParamsSpec,
      null,
      [scan_observer]);
  }

  updateLocalDeviceMetadata(metadata) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec,
      null,
      [metadata]);
  }

  updateLocalDeviceMetadataAndGenerateCredentials(metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec,
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec,
      [metadata]);
  }

  updateRemoteSharedCredentials(shared_credentials, account_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec,
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec,
      [shared_credentials, account_name]);
  }

  getLocalSharedCredentials(account_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec,
      ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec,
      [account_name]);
  }

};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence.getRemote = function() {
  let remote = new ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresenceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.nearby.presence.mojom.NearbyPresence',
    'context');
  return remote.$;
};

// ParamsSpec for StartScan
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_StartScan_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.StartScan_Params',
      packedSize: 16,
      fields: [
        { name: 'scan_request', packedOffset: 0, packedBitOffset: 0, type: ash.nearby.presence.mojom.ScanRequestSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_StartScan_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.StartScan_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'scan_session', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.nearby.presence.mojom.ScanSessionRemote), nullable: true, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.AbslStatusCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetScanObserver
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_SetScanObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.SetScanObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'scan_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.nearby.presence.mojom.ScanObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateLocalDeviceMetadata
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateLocalDeviceMetadata_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: ash.nearby.presence.mojom.MetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateLocalDeviceMetadataAndGenerateCredentials
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateLocalDeviceMetadataAndGenerateCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 0, packedBitOffset: 0, type: ash.nearby.presence.mojom.MetadataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'shared_credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec, false), nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.AbslStatusCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for UpdateRemoteSharedCredentials
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateRemoteSharedCredentials_Params',
      packedSize: 24,
      fields: [
        { name: 'shared_credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec, false), nullable: false, minVersion: 0 },
        { name: 'account_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.UpdateRemoteSharedCredentials_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.AbslStatusCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetLocalSharedCredentials
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.GetLocalSharedCredentials_Params',
      packedSize: 16,
      fields: [
        { name: 'account_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.nearby.presence.mojom.NearbyPresence.GetLocalSharedCredentials_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'shared_credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec, false), nullable: false, minVersion: 0 },
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.AbslStatusCodeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresencePtr = ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresenceRemote;
ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresenceRequest = ash.nearby.nearby.presence.presence.mojom.mojom.NearbyPresencePendingReceiver;

