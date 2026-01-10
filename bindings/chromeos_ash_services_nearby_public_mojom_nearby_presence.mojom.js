// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/nearby/public/mojom/nearby_presence.mojom
// Module: ash.nearby.presence.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.nearby = ash.nearby || {};
ash.nearby.presence = ash.nearby.presence || {};
ash.nearby.presence.mojom = ash.nearby.presence.mojom || {};
var mojo_base = mojo_base || {};

ash.nearby.presence.mojom.IdentityTypeSpec = { $: mojo.internal.Enum() };
ash.nearby.presence.mojom.PresenceDeviceTypeSpec = { $: mojo.internal.Enum() };
ash.nearby.presence.mojom.ActionTypeSpec = { $: mojo.internal.Enum() };
ash.nearby.presence.mojom.PublicCredentialTypeSpec = { $: mojo.internal.Enum() };
ash.nearby.presence.mojom.CredentialTypeSpec = { $: mojo.internal.Enum() };
ash.nearby.presence.mojom.ScanRequestSpec = { $: {} };
ash.nearby.presence.mojom.PrivateKeySpec = { $: {} };
ash.nearby.presence.mojom.PresenceScanFilterSpec = { $: {} };
ash.nearby.presence.mojom.MetadataSpec = { $: {} };
ash.nearby.presence.mojom.SharedCredentialSpec = { $: {} };
ash.nearby.presence.mojom.PresenceDeviceSpec = { $: {} };
ash.nearby.presence.mojom.LocalCredentialSpec = { $: {} };
ash.nearby.presence.mojom.ScanSession = {};
ash.nearby.presence.mojom.ScanSession.$interfaceName = 'ash.nearby.presence.mojom.ScanSession';
ash.nearby.presence.mojom.ScanObserver = {};
ash.nearby.presence.mojom.ScanObserver.$interfaceName = 'ash.nearby.presence.mojom.ScanObserver';
ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence = {};
ash.nearby.presence.mojom.NearbyPresence.$interfaceName = 'ash.nearby.presence.mojom.NearbyPresence';
ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec = { $: {} };
ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec = { $: {} };

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
  kCallTransferAction: 4,
  kActiveUnlockAction: 8,
  kNearbyShareAction: 9,
  kInstantTetheringAction: 10,
  kPhoneHubAction: 11,
  kPresenceManagerAction: 12,
  kFinderAction: 13,
  kFastPairSassAction: 14,
  kTapToTransferAction: 15,
  kLastAction: 16,
};

// Enum: PublicCredentialType
ash.nearby.presence.mojom.PublicCredentialType = {
  kLocalPublicCredential: 1,
  kRemotePublicCredential: 2,
};

// Enum: CredentialType
ash.nearby.presence.mojom.CredentialType = {
  kCredentialTypeUnknown: 0,
  kCredentialTypeDevice: 1,
  kCredentialTypeGaia: 2,
};

// Struct: ScanRequest
mojo.internal.Struct(
    ash.nearby.presence.mojom.ScanRequestSpec, 'ash.nearby.presence.mojom.ScanRequest', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('identity_types', 8, 0, mojo.internal.Array(ash.nearby.presence.mojom.IdentityTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scan_filters', 16, 0, mojo.internal.Array(ash.nearby.presence.mojom.PresenceScanFilterSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PrivateKey
mojo.internal.Struct(
    ash.nearby.presence.mojom.PrivateKeySpec, 'ash.nearby.presence.mojom.PrivateKey', [
      mojo.internal.StructField('certificate_alias', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PresenceScanFilter
mojo.internal.Struct(
    ash.nearby.presence.mojom.PresenceScanFilterSpec, 'ash.nearby.presence.mojom.PresenceScanFilter', [
      mojo.internal.StructField('device_type', 0, 0, ash.nearby.presence.mojom.PresenceDeviceTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Metadata
mojo.internal.Struct(
    ash.nearby.presence.mojom.MetadataSpec, 'ash.nearby.presence.mojom.Metadata', [
      mojo.internal.StructField('device_type', 0, 0, ash.nearby.presence.mojom.PresenceDeviceTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('bluetooth_mac_address', 16, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('device_id', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SharedCredential
mojo.internal.Struct(
    ash.nearby.presence.mojom.SharedCredentialSpec, 'ash.nearby.presence.mojom.SharedCredential', [
      mojo.internal.StructField('key_seed', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('start_time_millis', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('end_time_millis', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('encrypted_metadata_bytes_v0', 24, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('metadata_encryption_key_tag_v0', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('connection_signature_verification_key', 40, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('advertisement_signature_verification_key', 48, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('identity_type', 56, 0, ash.nearby.presence.mojom.IdentityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 64, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('credential_type', 72, 0, ash.nearby.presence.mojom.CredentialTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encrypted_metadata_bytes_v1', 80, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('identity_token_short_salt_adv_hmac_key_v1', 88, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 96, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('dusi', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signature_version', 112, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('identity_token_extended_salt_adv_hmac_key_v1', 120, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('identity_token_signed_adv_hmac_key_v1', 128, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: PresenceDevice
mojo.internal.Struct(
    ash.nearby.presence.mojom.PresenceDeviceSpec, 'ash.nearby.presence.mojom.PresenceDevice', [
      mojo.internal.StructField('endpoint_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('actions', 8, 0, mojo.internal.Array(ash.nearby.presence.mojom.ActionTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('stable_device_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('metadata', 24, 0, ash.nearby.presence.mojom.MetadataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('decrypt_shared_credential', 32, 0, ash.nearby.presence.mojom.SharedCredentialSpec.$, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LocalCredential
mojo.internal.Struct(
    ash.nearby.presence.mojom.LocalCredentialSpec, 'ash.nearby.presence.mojom.LocalCredential', [
      mojo.internal.StructField('secret_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('key_seed', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('start_time_millis', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('end_time_millis', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('metadata_encryption_key_v0', 32, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('advertisement_signing_key', 40, 0, ash.nearby.presence.mojom.PrivateKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('connection_signing_key', 48, 0, ash.nearby.presence.mojom.PrivateKeySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('identity_type', 56, 0, ash.nearby.presence.mojom.IdentityTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('consumed_salts', 64, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('identity_token_v1', 72, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('id', 80, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('signature_version', 88, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 104]]);

// Interface: ScanSession
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

ash.nearby.presence.mojom.ScanSessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.nearby.presence.mojom.ScanSessionReceiver = ash.nearby.presence.mojom.ScanSessionReceiver;

ash.nearby.presence.mojom.ScanSessionPtr = ash.nearby.presence.mojom.ScanSessionRemote;
ash.nearby.presence.mojom.ScanSessionRequest = ash.nearby.presence.mojom.ScanSessionPendingReceiver;


// Interface: ScanObserver
mojo.internal.Struct(
    ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec, 'ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_Params', [
      mojo.internal.StructField('device', 0, 0, ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec, 'ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_Params', [
      mojo.internal.StructField('device', 0, 0, ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec, 'ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_Params', [
      mojo.internal.StructField('device', 0, 0, ash.nearby.presence.mojom.PresenceDeviceSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [device],
      false);
  }

  onDeviceChanged(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec,
      null,
      [device],
      false);
  }

  onDeviceLost(device) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec,
      null,
      [device],
      false);
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

ash.nearby.presence.mojom.ScanObserverReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.ScanObserver_OnDeviceFound_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onDeviceFound');
          const result = this.impl.onDeviceFound(params.device);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.ScanObserver_OnDeviceChanged_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onDeviceChanged');
          const result = this.impl.onDeviceChanged(params.device);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.ScanObserver_OnDeviceLost_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.onDeviceLost');
          const result = this.impl.onDeviceLost(params.device);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.nearby.presence.mojom.ScanObserverReceiver = ash.nearby.presence.mojom.ScanObserverReceiver;

ash.nearby.presence.mojom.ScanObserverPtr = ash.nearby.presence.mojom.ScanObserverRemote;
ash.nearby.presence.mojom.ScanObserverRequest = ash.nearby.presence.mojom.ScanObserverPendingReceiver;


// Interface: NearbyPresence
mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_StartScan_Params', [
      mojo.internal.StructField('scan_request', 0, 0, ash.nearby.presence.mojom.ScanRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParams', [
      mojo.internal.StructField('scan_session', 0, 0, mojo.internal.InterfaceProxy(ash.nearby.presence.mojom.ScanSessionSpec), null, true, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_Params', [
      mojo.internal.StructField('scan_observer', 0, 0, mojo.internal.InterfaceProxy(ash.nearby.presence.mojom.ScanObserverSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_Params', [
      mojo.internal.StructField('metadata', 0, 0, ash.nearby.presence.mojom.MetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_Params', [
      mojo.internal.StructField('metadata', 0, 0, ash.nearby.presence.mojom.MetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParams', [
      mojo.internal.StructField('shared_credentials', 0, 0, mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_Params', [
      mojo.internal.StructField('shared_credentials', 0, 0, mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('account_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_Params', [
      mojo.internal.StructField('account_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec, 'ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParams', [
      mojo.internal.StructField('shared_credentials', 0, 0, mojo.internal.Array(ash.nearby.presence.mojom.SharedCredentialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('status', 8, 0, mojo_base.mojom.AbslStatusCodeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [scan_request],
      false);
  }

  setScanObserver(scan_observer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec,
      null,
      [scan_observer],
      false);
  }

  updateLocalDeviceMetadata(metadata) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec,
      null,
      [metadata],
      false);
  }

  updateLocalDeviceMetadataAndGenerateCredentials(metadata) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec,
      [metadata],
      false);
  }

  updateRemoteSharedCredentials(shared_credentials, account_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec,
      [shared_credentials, account_name],
      false);
  }

  getLocalSharedCredentials(account_name) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec,
      ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec,
      [account_name],
      false);
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

ash.nearby.presence.mojom.NearbyPresenceReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.NearbyPresence_StartScan_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.startScan');
          const result = this.impl.startScan(params.scan_request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresence_StartScan_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.NearbyPresence_SetScanObserver_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setScanObserver');
          const result = this.impl.setScanObserver(params.scan_observer);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadata_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateLocalDeviceMetadata');
          const result = this.impl.updateLocalDeviceMetadata(params.metadata);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateLocalDeviceMetadataAndGenerateCredentials');
          const result = this.impl.updateLocalDeviceMetadataAndGenerateCredentials(params.metadata);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresence_UpdateLocalDeviceMetadataAndGenerateCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.updateRemoteSharedCredentials');
          const result = this.impl.updateRemoteSharedCredentials(params.shared_credentials, params.account_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresence_UpdateRemoteSharedCredentials_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getLocalSharedCredentials');
          const result = this.impl.getLocalSharedCredentials(params.account_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.nearby.presence.mojom.NearbyPresence_GetLocalSharedCredentials_ResponseParamsSpec);
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

ash.nearby.presence.mojom.NearbyPresenceReceiver = ash.nearby.presence.mojom.NearbyPresenceReceiver;

ash.nearby.presence.mojom.NearbyPresencePtr = ash.nearby.presence.mojom.NearbyPresenceRemote;
ash.nearby.presence.mojom.NearbyPresenceRequest = ash.nearby.presence.mojom.NearbyPresencePendingReceiver;

