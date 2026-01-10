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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
          const params = decoder.decodeStruct(media.mojom.MediaFoundationPreferences_IsHardwareSecureDecryptionAllowed_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.isHardwareSecureDecryptionAllowed');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.MediaFoundationPreferencesReceiver = media.mojom.MediaFoundationPreferencesReceiver;

media.mojom.MediaFoundationPreferencesPtr = media.mojom.MediaFoundationPreferencesRemote;
media.mojom.MediaFoundationPreferencesRequest = media.mojom.MediaFoundationPreferencesPendingReceiver;

