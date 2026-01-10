// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_processing.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.AudioProcessingStatsSpec = { $: {} };
media.mojom.AudioProcessingSettingsSpec = { $: {} };
media.mojom.AudioProcessingConfigSpec = { $: {} };
media.mojom.AudioProcessorControls = {};
media.mojom.AudioProcessorControls.$interfaceName = 'media.mojom.AudioProcessorControls';
media.mojom.AudioProcessorControls_GetStats_ParamsSpec = { $: {} };
media.mojom.AudioProcessorControls_GetStats_ResponseParamsSpec = { $: {} };
media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec = { $: {} };

// Struct: AudioProcessingStats
mojo.internal.Struct(
    media.mojom.AudioProcessingStatsSpec, 'media.mojom.AudioProcessingStats', [
      mojo.internal.StructField('echo_return_loss', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('echo_return_loss_enhancement', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('has_echo_return_loss', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_echo_return_loss_enhancement', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AudioProcessingSettings
mojo.internal.Struct(
    media.mojom.AudioProcessingSettingsSpec, 'media.mojom.AudioProcessingSettings', [
      mojo.internal.StructField('echo_cancellation', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('noise_suppression', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('automatic_gain_control', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('multi_channel_capture_processing', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_loopback_aec_reference', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioProcessingConfig
mojo.internal.Struct(
    media.mojom.AudioProcessingConfigSpec, 'media.mojom.AudioProcessingConfig', [
      mojo.internal.StructField('controls_receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioProcessorControlsSpec), null, false, 0, undefined),
      mojo.internal.StructField('settings', 8, 0, media.mojom.AudioProcessingSettingsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: AudioProcessorControls
mojo.internal.Struct(
    media.mojom.AudioProcessorControls_GetStats_ParamsSpec, 'media.mojom.AudioProcessorControls_GetStats_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioProcessorControls_GetStats_ResponseParamsSpec, 'media.mojom.AudioProcessorControls_GetStats_ResponseParams', [
      mojo.internal.StructField('stats', 0, 0, media.mojom.AudioProcessingStatsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec, 'media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_Params', [
      mojo.internal.StructField('num_preferred_channels', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.AudioProcessorControlsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioProcessorControlsRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioProcessorControls';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioProcessorControlsPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioProcessorControlsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioProcessorControlsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getStats() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioProcessorControls_GetStats_ParamsSpec,
      media.mojom.AudioProcessorControls_GetStats_ResponseParamsSpec,
      [],
      false);
  }

  setPreferredNumCaptureChannels(num_preferred_channels) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec,
      null,
      [num_preferred_channels],
      false);
  }

};

media.mojom.AudioProcessorControls.getRemote = function() {
  let remote = new media.mojom.AudioProcessorControlsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioProcessorControls',
    'context');
  return remote.$;
};

media.mojom.AudioProcessorControlsReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        
        // Try Method 0: GetStats
        try {
             decoder.decodeStruct(media.mojom.AudioProcessorControls_GetStats_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetStats (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: SetPreferredNumCaptureChannels
        try {
             decoder.decodeStruct(media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPreferredNumCaptureChannels (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioProcessorControls_GetStats_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getStats');
          const result = this.impl.getStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioProcessorControls_GetStats_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPreferredNumCaptureChannels');
          const result = this.impl.setPreferredNumCaptureChannels(params.num_preferred_channels);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

media.mojom.AudioProcessorControlsReceiver = media.mojom.AudioProcessorControlsReceiver;

media.mojom.AudioProcessorControlsPtr = media.mojom.AudioProcessorControlsRemote;
media.mojom.AudioProcessorControlsRequest = media.mojom.AudioProcessorControlsPendingReceiver;

