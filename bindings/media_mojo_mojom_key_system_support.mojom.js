// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/key_system_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.CdmCapabilityQueryStatusSpec = { $: mojo.internal.Enum() };
media.mojom.VideoCodecInfoSpec = { $: {} };
media.mojom.CdmCapabilitySpec = { $: {} };
media.mojom.KeySystemCapabilitySpec = { $: {} };
media.mojom.KeySystemSupportObserver = {};
media.mojom.KeySystemSupportObserver.$interfaceName = 'media.mojom.KeySystemSupportObserver';
media.mojom.KeySystemSupportObserver_OnKeySystemSupportUpdated_ParamsSpec = { $: {} };
media.mojom.KeySystemSupport = {};
media.mojom.KeySystemSupport.$interfaceName = 'media.mojom.KeySystemSupport';
media.mojom.KeySystemSupport_SetObserver_ParamsSpec = { $: {} };

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
mojo.internal.Struct(
    media.mojom.VideoCodecInfoSpec, 'media.mojom.VideoCodecInfo', [
      mojo.internal.StructField('supported_profiles', 0, 0, mojo.internal.Array(media.mojom.VideoCodecProfileSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('supports_clear_lead', 8, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CdmCapability
mojo.internal.Struct(
    media.mojom.CdmCapabilitySpec, 'media.mojom.CdmCapability', [
      mojo.internal.StructField('audio_codecs', 0, 0, mojo.internal.Array(media.mojom.AudioCodecSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('video_codecs', 8, 0, mojo.internal.Map(media.mojom.VideoCodecSpec.$, media.mojom.VideoCodecInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('encryption_schemes', 16, 0, mojo.internal.Array(media.mojom.EncryptionSchemeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('session_types', 24, 0, mojo.internal.Array(media.mojom.CdmSessionTypeSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('version', 32, 0, mojo_base.mojom.VersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: KeySystemCapability
mojo.internal.Struct(
    media.mojom.KeySystemCapabilitySpec, 'media.mojom.KeySystemCapability', [
      mojo.internal.StructField('sw_secure_capability', 0, 0, media.mojom.CdmCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hw_secure_capability', 8, 0, media.mojom.CdmCapabilitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sw_secure_capability_query_status', 16, 0, media.mojom.CdmCapabilityQueryStatusSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('hw_secure_capability_query_status', 24, 0, media.mojom.CdmCapabilityQueryStatusSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Interface: KeySystemSupportObserver
mojo.internal.Struct(
    media.mojom.KeySystemSupportObserver_OnKeySystemSupportUpdated_ParamsSpec, 'media.mojom.KeySystemSupportObserver_OnKeySystemSupportUpdated_Params', [
      mojo.internal.StructField('key_systems', 0, 0, mojo.internal.Map(mojo.internal.String, media.mojom.KeySystemCapabilitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [key_systems],
      false);
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

media.mojom.KeySystemSupportObserverPtr = media.mojom.KeySystemSupportObserverRemote;
media.mojom.KeySystemSupportObserverRequest = media.mojom.KeySystemSupportObserverPendingReceiver;


// Interface: KeySystemSupport
mojo.internal.Struct(
    media.mojom.KeySystemSupport_SetObserver_ParamsSpec, 'media.mojom.KeySystemSupport_SetObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(media.mojom.KeySystemSupportObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [observer],
      false);
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

media.mojom.KeySystemSupportPtr = media.mojom.KeySystemSupportRemote;
media.mojom.KeySystemSupportRequest = media.mojom.KeySystemSupportPendingReceiver;

