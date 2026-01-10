// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/enhanced_network_tts/mojom/enhanced_network_tts.mojom
// Module: ash.enhanced_network_tts.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.enhanced_network_tts = ash.enhanced_network_tts || {};
ash.enhanced_network_tts.mojom = ash.enhanced_network_tts.mojom || {};

ash.enhanced_network_tts.mojom.TtsRequestErrorSpec = { $: mojo.internal.Enum() };
ash.enhanced_network_tts.mojom.TtsResponseSpec = { $: {} };
ash.enhanced_network_tts.mojom.TtsRequestSpec = { $: {} };
ash.enhanced_network_tts.mojom.TimingInfoSpec = { $: {} };
ash.enhanced_network_tts.mojom.TtsDataSpec = { $: {} };
ash.enhanced_network_tts.mojom.EnhancedNetworkTts = {};
ash.enhanced_network_tts.mojom.EnhancedNetworkTts.$interfaceName = 'ash.enhanced_network_tts.mojom.EnhancedNetworkTts';
ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ParamsSpec = { $: {} };
ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ResponseParamsSpec = { $: {} };
ash.enhanced_network_tts.mojom.AudioDataObserver = {};
ash.enhanced_network_tts.mojom.AudioDataObserver.$interfaceName = 'ash.enhanced_network_tts.mojom.AudioDataObserver';
ash.enhanced_network_tts.mojom.AudioDataObserver_OnAudioDataReceived_ParamsSpec = { $: {} };

ash.enhanced_network_tts.mojom.kEnhancedNetworkTtsMaxCharacterSize = 1000;

// Enum: TtsRequestError
ash.enhanced_network_tts.mojom.TtsRequestError = {
  kEmptyUtterance: 0,
  kOverLength: 1,
  kServerError: 2,
  kReceivedUnexpectedData: 3,
  kRequestOverride: 4,
};

// Union: TtsResponse
mojo.internal.Union(
    ash.enhanced_network_tts.mojom.TtsResponseSpec, 'ash.enhanced_network_tts.mojom.TtsResponse', {
      'error_code': {
        'ordinal': 0,
        'type': ash.enhanced_network_tts.mojom.TtsRequestErrorSpec.$,
        'nullable': false,
      },
      'data': {
        'ordinal': 1,
        'type': ash.enhanced_network_tts.mojom.TtsDataSpec.$,
        'nullable': false,
      },
    });

// Struct: TtsRequest
mojo.internal.Struct(
    ash.enhanced_network_tts.mojom.TtsRequestSpec, 'ash.enhanced_network_tts.mojom.TtsRequest', [
      mojo.internal.StructField('utterance', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rate', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('voice', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('lang', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TimingInfo
mojo.internal.Struct(
    ash.enhanced_network_tts.mojom.TimingInfoSpec, 'ash.enhanced_network_tts.mojom.TimingInfo', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('text_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('time_offset', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('duration', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TtsData
mojo.internal.Struct(
    ash.enhanced_network_tts.mojom.TtsDataSpec, 'ash.enhanced_network_tts.mojom.TtsData', [
      mojo.internal.StructField('audio', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('time_info', 8, 0, mojo.internal.Array(ash.enhanced_network_tts.mojom.TimingInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('last_data', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: EnhancedNetworkTts
mojo.internal.Struct(
    ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ParamsSpec, 'ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_Params', [
      mojo.internal.StructField('request', 0, 0, ash.enhanced_network_tts.mojom.TtsRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ResponseParamsSpec, 'ash.enhanced_network_tts.mojom.EnhancedNetworkTts_GetAudioData_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(ash.enhanced_network_tts.mojom.AudioDataObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [request],
      false);
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

ash.enhanced_network_tts.mojom.EnhancedNetworkTtsPtr = ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRemote;
ash.enhanced_network_tts.mojom.EnhancedNetworkTtsRequest = ash.enhanced_network_tts.mojom.EnhancedNetworkTtsPendingReceiver;


// Interface: AudioDataObserver
mojo.internal.Struct(
    ash.enhanced_network_tts.mojom.AudioDataObserver_OnAudioDataReceived_ParamsSpec, 'ash.enhanced_network_tts.mojom.AudioDataObserver_OnAudioDataReceived_Params', [
      mojo.internal.StructField('response', 0, 0, ash.enhanced_network_tts.mojom.TtsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [response],
      false);
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

ash.enhanced_network_tts.mojom.AudioDataObserverPtr = ash.enhanced_network_tts.mojom.AudioDataObserverRemote;
ash.enhanced_network_tts.mojom.AudioDataObserverRequest = ash.enhanced_network_tts.mojom.AudioDataObserverPendingReceiver;

