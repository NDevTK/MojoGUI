// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/key_system_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: CdmCapabilityQueryStatus
media.mojom.CdmCapabilityQueryStatus = {
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

// Struct: VideoCodecInfo
media.mojom.VideoCodecInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCodecInfo',
      packedSize: 24,
      fields: [
        { name: 'supported_profiles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'supports_clear_lead', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CdmCapability
media.mojom.CdmCapabilitySpec = {
  $: {
    structSpec: {
      name: 'media.mojom.CdmCapability',
      packedSize: 48,
      fields: [
        { name: 'audio_codecs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'video_codecs', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'encryption_schemes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'session_types', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'version', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: KeySystemCapability
media.mojom.KeySystemCapabilitySpec = {
  $: {
    structSpec: {
      name: 'media.mojom.KeySystemCapability',
      packedSize: 40,
      fields: [
        { name: 'sw_secure_capability', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'hw_secure_capability', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'sw_secure_capability_query_status', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'hw_secure_capability_query_status', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: KeySystemSupportObserver
media.mojom.KeySystemSupportObserver = {};

media.mojom.KeySystemSupportObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.KeySystemSupportObserverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.KeySystemSupportObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.KeySystemSupportObserverPendingReceiver,
      handle);
    this.$ = new media.mojom.KeySystemSupportObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.KeySystemSupportObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onKeySystemSupportUpdated(key_systems) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.KeySystemSupportObserver_OnKeySystemSupportUpdated_ParamsSpec,
      null,
      [key_systems]);
  }

};

media.mojom.KeySystemSupportObserver.getRemote = function() {
  let remote = new media.mojom.KeySystemSupportObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.KeySystemSupportObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnKeySystemSupportUpdated
media.mojom.KeySystemSupportObserver_OnKeySystemSupportUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.KeySystemSupportObserver.OnKeySystemSupportUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'key_systems', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.KeySystemSupportObserverPtr = media.mojom.KeySystemSupportObserverRemote;
media.mojom.KeySystemSupportObserverRequest = media.mojom.KeySystemSupportObserverPendingReceiver;


// Interface: KeySystemSupport
media.mojom.KeySystemSupport = {};

media.mojom.KeySystemSupportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.KeySystemSupportRemote = class {
  static get $interfaceName() {
    return 'media.mojom.KeySystemSupport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.KeySystemSupportPendingReceiver,
      handle);
    this.$ = new media.mojom.KeySystemSupportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.KeySystemSupportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.KeySystemSupport_SetObserver_ParamsSpec,
      null,
      [observer]);
  }

};

media.mojom.KeySystemSupport.getRemote = function() {
  let remote = new media.mojom.KeySystemSupportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.KeySystemSupport',
    'context');
  return remote.$;
};

// ParamsSpec for SetObserver
media.mojom.KeySystemSupport_SetObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.KeySystemSupport.SetObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.KeySystemSupportPtr = media.mojom.KeySystemSupportRemote;
media.mojom.KeySystemSupportRequest = media.mojom.KeySystemSupportPendingReceiver;

