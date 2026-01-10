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
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.AudioProcessorControls_GetStats_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getStats();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.AudioProcessorControls_GetStats_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
        case 1: {
          const params = media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPreferredNumCaptureChannels(params.num_preferred_channels);
          break;
        }
      }
    });
  }
};

media.mojom.AudioProcessorControlsReceiver = media.mojom.AudioProcessorControlsReceiver;

media.mojom.AudioProcessorControlsPtr = media.mojom.AudioProcessorControlsRemote;
media.mojom.AudioProcessorControlsRequest = media.mojom.AudioProcessorControlsPendingReceiver;

