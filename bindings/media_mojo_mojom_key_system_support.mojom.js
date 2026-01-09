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
        { name: 'key_systems', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.KeySystemSupportPtr = media.mojom.KeySystemSupportRemote;
media.mojom.KeySystemSupportRequest = media.mojom.KeySystemSupportPendingReceiver;

