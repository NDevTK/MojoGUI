// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/mediadrm_support.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

media.mojom.MediaDrmSupportResultSpec = { $: {} };
media.mojom.MediaDrmSupport = {};
media.mojom.MediaDrmSupport.$interfaceName = 'media.mojom.MediaDrmSupport';
media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec = { $: {} };
media.mojom.MediaDrmSupport_IsKeySystemSupported_ResponseParamsSpec = { $: {} };

// Struct: MediaDrmSupportResult
mojo.internal.Struct(
    media.mojom.MediaDrmSupportResultSpec, 'media.mojom.MediaDrmSupportResult', [
      mojo.internal.StructField('key_system_version', 0, 0, mojo_base.mojom.VersionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('key_system_supports_video_mp4', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('key_system_supports_video_webm', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
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
      mojo.internal.StructField('key_system_supports', 0, 0, media.mojom.MediaDrmSupportResultSpec.$, null, true, 0, undefined),
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
      [key_system, is_secure],
      false);
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

media.mojom.MediaDrmSupportReceiver = class {
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: IsKeySystemSupported
        try {
             decoder.decodeStruct(media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsKeySystemSupported (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.MediaDrmSupport_IsKeySystemSupported_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isKeySystemSupported');
          const result = this.impl.isKeySystemSupported(params.key_system, params.is_secure);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.MediaDrmSupport_IsKeySystemSupported_ResponseParamsSpec);
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

media.mojom.MediaDrmSupportReceiver = media.mojom.MediaDrmSupportReceiver;

media.mojom.MediaDrmSupportPtr = media.mojom.MediaDrmSupportRemote;
media.mojom.MediaDrmSupportRequest = media.mojom.MediaDrmSupportPendingReceiver;

