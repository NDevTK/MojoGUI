// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/mediadrm_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.MediaDrmSupportResultSpec = { $: {} };
media.mojom.MediaDrmSupport = {};
media.mojom.MediaDrmSupport.$interfaceName = 'media.mojom.MediaDrmSupport';
media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec = { $: {} };
media.mojom.MediaDrmSupport_IsKeySystemSupported_ResponseParamsSpec = { $: {} };

// Struct: MediaDrmSupportResult
mojo.internal.Struct(
    media.mojom.MediaDrmSupportResultSpec, 'media.mojom.MediaDrmSupportResult', [
      mojo.internal.StructField('key_system_supports_video_mp4', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('key_system_supports_video_webm', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('key_system_version', 8, 0, mojo_base.mojom.VersionSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MediaDrmSupport
mojo.internal.Struct(
    media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec, 'media.mojom.MediaDrmSupport_IsKeySystemSupported_Params', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_secure', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.MediaDrmSupport_IsKeySystemSupported_ResponseParamsSpec, 'media.mojom.MediaDrmSupport_IsKeySystemSupported_ResponseParams', [
      mojo.internal.StructField('key_system_supports', 0, 0, media.mojom.MediaDrmSupportResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

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

media.mojom.MediaDrmSupportPtr = media.mojom.MediaDrmSupportRemote;
media.mojom.MediaDrmSupportRequest = media.mojom.MediaDrmSupportPendingReceiver;

