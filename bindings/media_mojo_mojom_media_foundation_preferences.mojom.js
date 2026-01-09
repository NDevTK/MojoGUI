// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_foundation_preferences.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: MediaFoundationPreferences
media.mojom.MediaFoundationPreferences = {};

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
      []);
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

// ParamsSpec for IsHardwareSecureDecryptionAllowed
media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.MediaFoundationPreferences.IsHardwareSecureDecryptionAllowed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.MediaFoundationPreferencesPtr = media.mojom.MediaFoundationPreferencesRemote;
media.mojom.MediaFoundationPreferencesRequest = media.mojom.MediaFoundationPreferencesPendingReceiver;

