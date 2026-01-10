// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_foundation_preferences.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.MediaFoundationPreferences = {};
media.mojom.MediaFoundationPreferences.$interfaceName = 'media.mojom.MediaFoundationPreferences';
media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ParamsSpec = { $: {} };
media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ResponseParamsSpec = { $: {} };

// Interface: MediaFoundationPreferences
mojo.internal.Struct(
    media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ParamsSpec, 'media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ResponseParamsSpec, 'media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ResponseParams', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.MediaFoundationPreferencesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaFoundationPreferencesRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaFoundationPreferences';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaFoundationPreferencesPendingReceiver,
      handle);
    this.$ = new media.mojom.MediaFoundationPreferencesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaFoundationPreferencesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  isHardwareSecureDecryptionAllowed() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ParamsSpec,
      media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ResponseParamsSpec,
      [],
      false);
  }

};

media.mojom.MediaFoundationPreferences.getRemote = function() {
  let remote = new media.mojom.MediaFoundationPreferencesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaFoundationPreferences',
    'context');
  return remote.$;
};

media.mojom.MediaFoundationPreferencesReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.isHardwareSecureDecryptionAllowed();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

media.mojom.MediaFoundationPreferencesReceiver = media.mojom.MediaFoundationPreferencesReceiver;

media.mojom.MediaFoundationPreferencesPtr = media.mojom.MediaFoundationPreferencesRemote;
media.mojom.MediaFoundationPreferencesRequest = media.mojom.MediaFoundationPreferencesPendingReceiver;

