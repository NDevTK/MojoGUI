// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/enhanced_network_tts/mojom/enhanced_network_tts.mojom
// Module: ash.enhanced_network_tts.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.enhanced_network_tts = ash.enhanced_network_tts || {};
ash.enhanced_network_tts.mojom = ash.enhanced_network_tts.mojom || {};


// Enum: TtsRequestError
ash.enhanced_network_tts.mojom.TtsRequestError = {
  kEmptyUtterance: 0,
  kOverLength: 1,
  kServerError: 2,
  kReceivedUnexpectedData: 3,
  kRequestOverride: 4,
};

// Struct: TtsRequest
ash.enhanced_network_tts.mojom.TtsRequestSpec = {
  $: {
    structSpec: {
      name: 'ash.enhanced_network_tts.mojom.TtsRequest',
      packedSize: 40,
      fields: [
        { name: 'utterance', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'voice', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'lang', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'rate', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TimingInfo
ash.enhanced_network_tts.mojom.TimingInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.enhanced_network_tts.mojom.TimingInfo',
      packedSize: 40,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'time_offset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'duration', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'text_offset', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TtsData
ash.enhanced_network_tts.mojom.TtsDataSpec = {
  $: {
    structSpec: {
      name: 'ash.enhanced_network_tts.mojom.TtsData',
      packedSize: 32,
      fields: [
        { name: 'audio', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'time_info', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'last_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: EnhancedNetworkTts
ash.enhanced_network_tts.mojom.EnhancedNetworkTts = {};

ash.enhanced_network_tts.mojom.EnhancedNetworkTtsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRemote = class {
  static get $interfaceName() {
    return 'ash.enhanced_network_tts.mojom.EnhancedNetworkTts';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.enhanced_network_tts.mojom.EnhancedNetworkTtsPendingReceiver,
      handle);
    this.$ = new ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getAudioData(request) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ParamsSpec,
      ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ResponseParamsSpec,
      [request]);
  }

};

ash.enhanced_network_tts.mojom.EnhancedNetworkTts.getRemote = function() {
  let remote = new ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.enhanced_network_tts.mojom.EnhancedNetworkTts',
    'context');
  return remote.$;
};

// ParamsSpec for GetAudioData
ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.enhanced_network_tts.mojom.EnhancedNetworkTts.GetAudioData_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.enhanced_network_tts.mojom.EnhancedNetworkTts.GetAudioData_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.enhanced_network_tts.mojom.EnhancedNetworkTtsPtr = ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRemote;
ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRequest = ash.enhanced_network_tts.mojom.EnhancedNetworkTtsPendingReceiver;


// Interface: AudioDataObserver
ash.enhanced_network_tts.mojom.AudioDataObserver = {};

ash.enhanced_network_tts.mojom.AudioDataObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.enhanced_network_tts.mojom.AudioDataObserverRemote = class {
  static get $interfaceName() {
    return 'ash.enhanced_network_tts.mojom.AudioDataObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.enhanced_network_tts.mojom.AudioDataObserverPendingReceiver,
      handle);
    this.$ = new ash.enhanced_network_tts.mojom.AudioDataObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.enhanced_network_tts.mojom.AudioDataObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAudioDataReceived(response) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.enhanced_network_tts.mojom.AudioDataObserver_OnAudioDataReceived_ParamsSpec,
      null,
      [response]);
  }

};

ash.enhanced_network_tts.mojom.AudioDataObserver.getRemote = function() {
  let remote = new ash.enhanced_network_tts.mojom.AudioDataObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.enhanced_network_tts.mojom.AudioDataObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnAudioDataReceived
ash.enhanced_network_tts.mojom.AudioDataObserver_OnAudioDataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.enhanced_network_tts.mojom.AudioDataObserver.OnAudioDataReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.enhanced_network_tts.mojom.AudioDataObserverPtr = ash.enhanced_network_tts.mojom.AudioDataObserverRemote;
ash.enhanced_network_tts.mojom.AudioDataObserverRequest = ash.enhanced_network_tts.mojom.AudioDataObserverPendingReceiver;

