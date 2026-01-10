// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_processing.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Struct: AudioProcessingStats
media.mojom.AudioProcessingStatsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioProcessingStats',
      packedSize: 32,
      fields: [
        { name: 'has_echo_return_loss', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'echo_return_loss', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'has_echo_return_loss_enhancement', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'echo_return_loss_enhancement', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AudioProcessingSettings
media.mojom.AudioProcessingSettingsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioProcessingSettings',
      packedSize: 16,
      fields: [
        { name: 'echo_cancellation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'noise_suppression', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'automatic_gain_control', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'multi_channel_capture_processing', packedOffset: 0, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_loopback_aec_reference', packedOffset: 0, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AudioProcessingConfig
media.mojom.AudioProcessingConfigSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioProcessingConfig',
      packedSize: 24,
      fields: [
        { name: 'controls_receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'settings', packedOffset: 8, packedBitOffset: 0, type: media.mojom.AudioProcessingSettingsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: AudioProcessorControls
media.mojom.AudioProcessorControls = {};

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
      []);
  }

  setPreferredNumCaptureChannels(num_preferred_channels) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec,
      null,
      [num_preferred_channels]);
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

// ParamsSpec for GetStats
media.mojom.AudioProcessorControls_GetStats_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioProcessorControls.GetStats_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

media.mojom.AudioProcessorControls_GetStats_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioProcessorControls.GetStats_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'stats', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioProcessingStatsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetPreferredNumCaptureChannels
media.mojom.AudioProcessorControls_SetPreferredNumCaptureChannels_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioProcessorControls.SetPreferredNumCaptureChannels_Params',
      packedSize: 16,
      fields: [
        { name: 'num_preferred_channels', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioProcessorControlsPtr = media.mojom.AudioProcessorControlsRemote;
media.mojom.AudioProcessorControlsRequest = media.mojom.AudioProcessorControlsPendingReceiver;

