// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/key_system_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: CdmCapabilityQueryStatus
media.mojom.mojom.CdmCapabilityQueryStatus = {
  kSuccess: 0,
  kUnknown: 1,
  kHardwareSecureCodecNotSupported: 2,
  kNoSupportedVideoCodec: 3,
  kNoSupportedEncryptionScheme: 4,
  kUnsupportedKeySystem: 5,
  kMediaFoundationCdmNotSupported: 6,
  kDisconnectionError: 7,
  kMediaFoundationGetCdmFactoryFailed: 8,
  kCreateDummyMediaFoundationCdmFailed: 9,
  kUnexpectedEmptyCapability: 10,
  kNoMediaDrmSupport: 11,
  kMediaFoundationGetExtendedDRMTypeSupportFailed: 12,
};
media.mojom.mojom.CdmCapabilityQueryStatusSpec = { $: mojo.internal.Enum() };

// Struct: VideoCodecInfo
media.mojom.mojom.VideoCodecInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCodecInfo',
      packedSize: 24,
      fields: [
        { name: 'supported_profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.VideoCodecProfileSpec, false), nullable: false, minVersion: 0 },
        { name: 'supports_clear_lead', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CdmCapability
media.mojom.mojom.CdmCapabilitySpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmCapability',
      packedSize: 48,
      fields: [
        { name: 'audio_codecs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.AudioCodecSpec, false), nullable: false, minVersion: 0 },
        { name: 'video_codecs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(media.mojom.VideoCodecSpec, media.mojom.VideoCodecInfoSpec, false), nullable: false, minVersion: 0 },
        { name: 'encryption_schemes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.EncryptionSchemeSpec, false), nullable: false, minVersion: 0 },
        { name: 'session_types', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.CdmSessionTypeSpec, false), nullable: false, minVersion: 0 },
        { name: 'version', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.VersionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: KeySystemCapability
media.mojom.mojom.KeySystemCapabilitySpec = {
  $: {
    structSpec: {
      name: 'media.mojom.KeySystemCapability',
      packedSize: 32,
      fields: [
        { name: 'sw_secure_capability', packedOffset: 0, packedBitOffset: 0, type: media.mojom.CdmCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'hw_secure_capability', packedOffset: 8, packedBitOffset: 0, type: media.mojom.CdmCapabilitySpec, nullable: true, minVersion: 0 },
        { name: 'sw_secure_capability_query_status', packedOffset: 16, packedBitOffset: 0, type: media.mojom.CdmCapabilityQueryStatusSpec, nullable: true, minVersion: 0 },
        { name: 'hw_secure_capability_query_status', packedOffset: 20, packedBitOffset: 0, type: media.mojom.CdmCapabilityQueryStatusSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: KeySystemSupportObserver
media.mojom.mojom.KeySystemSupportObserver = {};

media.mojom.mojom.KeySystemSupportObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.KeySystemSupportObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.KeySystemSupportObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.KeySystemSupportObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.KeySystemSupportObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.KeySystemSupportObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeySystemSupportUpdated(key_systems) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.KeySystemSupportObserver_OnKeySystemSupportUpdated_ParamsSpec,
      null,
      [key_systems]);
  }

};

media.mojom.mojom.KeySystemSupportObserver.getRemote = function() {
  let remote = new media.mojom.mojom.KeySystemSupportObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.KeySystemSupportObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeySystemSupportUpdated
media.mojom.mojom.KeySystemSupportObserver_OnKeySystemSupportUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.KeySystemSupportObserver.OnKeySystemSupportUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'key_systems', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, media.mojom.KeySystemCapabilitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.KeySystemSupportObserverPtr = media.mojom.mojom.KeySystemSupportObserverRemote;
media.mojom.mojom.KeySystemSupportObserverRequest = media.mojom.mojom.KeySystemSupportObserverPendingReceiver;


// Interface: KeySystemSupport
media.mojom.mojom.KeySystemSupport = {};

media.mojom.mojom.KeySystemSupportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.KeySystemSupportRemote = class {
  static get $interfaceName() {
    return 'media.mojom.KeySystemSupport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.KeySystemSupportPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.KeySystemSupportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.KeySystemSupportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.KeySystemSupport_SetObserver_ParamsSpec,
      null,
      [observer]);
  }

};

media.mojom.mojom.KeySystemSupport.getRemote = function() {
  let remote = new media.mojom.mojom.KeySystemSupportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.KeySystemSupport',
    'context');
  return remote.$;
};

// ParamsSpec for SetObserver
media.mojom.mojom.KeySystemSupport_SetObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.KeySystemSupport.SetObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.KeySystemSupportObserverRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.KeySystemSupportPtr = media.mojom.mojom.KeySystemSupportRemote;
media.mojom.mojom.KeySystemSupportRequest = media.mojom.mojom.KeySystemSupportPendingReceiver;

