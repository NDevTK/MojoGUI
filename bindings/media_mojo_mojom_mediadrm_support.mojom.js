// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/mediadrm_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: MediaDrmSupportResult
media.mojom.MediaDrmSupportResultSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmSupportResult',
      packedSize: 24,
      fields: [
        { name: 'key_system_supports_video_mp4', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'key_system_supports_video_webm', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'key_system_version', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.VersionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: MediaDrmSupport
media.mojom.MediaDrmSupport = {};

media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmSupport_IsKeySystemSupported_Params',
      packedSize: 24,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_secure', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.MediaDrmSupportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaDrmSupportRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaDrmSupport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaDrmSupportPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaDrmSupportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaDrmSupportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isKeySystemSupported(key_system, is_secure) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec,
      media.mojom.MediaDrmSupport_IsKeySystemSupported_ResponseParamsSpec,
      [key_system, is_secure]);
  }

};

media.mojom.MediaDrmSupport.getRemote = function() {
  let remote = new media.mojom.MediaDrmSupportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaDrmSupport',
    'context');
  return remote.$;
};

// ParamsSpec for IsKeySystemSupported
media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmSupport.IsKeySystemSupported_Params',
      packedSize: 24,
      fields: [
        { name: 'key_system', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_secure', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

media.mojom.MediaDrmSupport_IsKeySystemSupported_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaDrmSupport.IsKeySystemSupported_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'key_system_supports', packedOffset: 0, packedBitOffset: 0, type: media.mojom.MediaDrmSupportResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaDrmSupportPtr = media.mojom.MediaDrmSupportRemote;
media.mojom.MediaDrmSupportRequest = media.mojom.MediaDrmSupportPendingReceiver;

