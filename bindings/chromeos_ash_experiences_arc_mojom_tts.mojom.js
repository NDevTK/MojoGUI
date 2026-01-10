// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tts.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.TtsEventTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.TtsUtteranceSpec = { $: {} };
arc.mojom.TtsVoiceSpec = { $: {} };
arc.mojom.TtsHost = {};
arc.mojom.TtsHost.$interfaceName = 'arc.mojom.TtsHost';
arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec = { $: {} };
arc.mojom.TtsHost_OnTtsEvent_ParamsSpec = { $: {} };
arc.mojom.TtsInstance = {};
arc.mojom.TtsInstance.$interfaceName = 'arc.mojom.TtsInstance';
arc.mojom.TtsInstance_Init_ParamsSpec = { $: {} };
arc.mojom.TtsInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.TtsInstance_Speak_ParamsSpec = { $: {} };
arc.mojom.TtsInstance_Stop_ParamsSpec = { $: {} };
arc.mojom.TtsInstance_RefreshVoices_ParamsSpec = { $: {} };

// Enum: TtsEventType
arc.mojom.TtsEventType = {
  START: 0,
  END: 1,
  INTERRUPTED: 2,
  ERROR: 3,
  WORD: 4,
};

// Struct: TtsUtterance
mojo.internal.Struct(
    arc.mojom.TtsUtteranceSpec, 'arc.mojom.TtsUtterance', [
      mojo.internal.StructField('utteranceId', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('rate', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('pitch', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('voice_id', 28, 0, mojo.internal.Uint32, 0, false, 2, undefined),
    ],
    [[0, 40], [2, 40]]);

// Struct: TtsVoice
mojo.internal.Struct(
    arc.mojom.TtsVoiceSpec, 'arc.mojom.TtsVoice', [
      mojo.internal.StructField('id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('locale', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_network_connection_required', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: TtsHost
mojo.internal.Struct(
    arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec, 'arc.mojom.TtsHost_OnVoicesChanged_Params', [
      mojo.internal.StructField('voices', 0, 0, mojo.internal.Array(arc.mojom.TtsVoiceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TtsHost_OnTtsEvent_ParamsSpec, 'arc.mojom.TtsHost_OnTtsEvent_Params', [
      mojo.internal.StructField('utteranceId', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('event_type', 12, 0, arc.mojom.TtsEventTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('char_index', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('length', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('error_msg', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

arc.mojom.TtsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TtsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TtsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.TtsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TtsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVoicesChanged(voices) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.TtsHost_OnVoicesChanged_ParamsSpec,
      null,
      [voices]);
  }

  onTtsEvent(utteranceId, event_type, char_index, length, error_msg) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.TtsHost_OnTtsEvent_ParamsSpec,
      null,
      [utteranceId, event_type, char_index, length, error_msg]);
  }

};

arc.mojom.TtsHost.getRemote = function() {
  let remote = new arc.mojom.TtsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsHost',
    'context');
  return remote.$;
};

arc.mojom.TtsHostPtr = arc.mojom.TtsHostRemote;
arc.mojom.TtsHostRequest = arc.mojom.TtsHostPendingReceiver;


// Interface: TtsInstance
mojo.internal.Struct(
    arc.mojom.TtsInstance_Init_ParamsSpec, 'arc.mojom.TtsInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.TtsHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_Init_ResponseParamsSpec, 'arc.mojom.TtsInstance_Init_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_Speak_ParamsSpec, 'arc.mojom.TtsInstance_Speak_Params', [
      mojo.internal.StructField('utterance', 0, 0, arc.mojom.TtsUtteranceSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_Stop_ParamsSpec, 'arc.mojom.TtsInstance_Stop_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    arc.mojom.TtsInstance_RefreshVoices_ParamsSpec, 'arc.mojom.TtsInstance_RefreshVoices_Params', [
    ],
    [{version: 0, packedSize: 8}]);

arc.mojom.TtsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.TtsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.TtsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.TtsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.TtsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.TtsInstance_Init_ParamsSpec,
      arc.mojom.TtsInstance_Init_ResponseParamsSpec,
      [host_remote]);
  }

  speak(utterance) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.TtsInstance_Speak_ParamsSpec,
      null,
      [utterance]);
  }

  stop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.TtsInstance_Stop_ParamsSpec,
      null,
      []);
  }

  refreshVoices() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.TtsInstance_RefreshVoices_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.TtsInstance.getRemote = function() {
  let remote = new arc.mojom.TtsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsInstance',
    'context');
  return remote.$;
};

arc.mojom.TtsInstancePtr = arc.mojom.TtsInstanceRemote;
arc.mojom.TtsInstanceRequest = arc.mojom.TtsInstancePendingReceiver;

