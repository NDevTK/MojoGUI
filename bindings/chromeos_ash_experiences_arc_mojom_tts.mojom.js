// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tts.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: TtsEventType
arc.mojom.mojom.TtsEventType = {
  START: 0,
  END: 1,
  INTERRUPTED: 2,
  ERROR: 3,
  WORD: 4,
};
arc.mojom.mojom.TtsEventTypeSpec = { $: mojo.internal.Enum() };

// Struct: TtsUtterance
arc.mojom.mojom.TtsUtteranceSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsUtterance',
      packedSize: 40,
      fields: [
        { name: 'utteranceId', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'rate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'pitch', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'voice_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 2 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 2, packedSize: 40}]
    }
  }
};

// Struct: TtsVoice
arc.mojom.mojom.TtsVoiceSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsVoice',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'locale', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_network_connection_required', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: TtsHost
arc.mojom.mojom.TtsHost = {};

arc.mojom.mojom.TtsHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.TtsHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.TtsHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.TtsHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.TtsHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onVoicesChanged(voices) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.TtsHost_OnVoicesChanged_ParamsSpec,
      null,
      [voices]);
  }

  onTtsEvent(utteranceId, event_type, char_index, length, error_msg) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.TtsHost_OnTtsEvent_ParamsSpec,
      null,
      [utteranceId, event_type, char_index, length, error_msg]);
  }

};

arc.mojom.mojom.TtsHost.getRemote = function() {
  let remote = new arc.mojom.mojom.TtsHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsHost',
    'context');
  return remote.$;
};

// ParamsSpec for OnVoicesChanged
arc.mojom.mojom.TtsHost_OnVoicesChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsHost.OnVoicesChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'voices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(arc.mojom.TtsVoiceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnTtsEvent
arc.mojom.mojom.TtsHost_OnTtsEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsHost.OnTtsEvent_Params',
      packedSize: 32,
      fields: [
        { name: 'utteranceId', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'event_type', packedOffset: 12, packedBitOffset: 0, type: arc.mojom.TtsEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'char_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'length', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.TtsHostPtr = arc.mojom.mojom.TtsHostRemote;
arc.mojom.mojom.TtsHostRequest = arc.mojom.mojom.TtsHostPendingReceiver;


// Interface: TtsInstance
arc.mojom.mojom.TtsInstance = {};

arc.mojom.mojom.TtsInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.TtsInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.TtsInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.TtsInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.TtsInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.TtsInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.TtsInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  speak(utterance) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.TtsInstance_Speak_ParamsSpec,
      null,
      [utterance]);
  }

  stop() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.TtsInstance_Stop_ParamsSpec,
      null,
      []);
  }

  refreshVoices() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      arc.mojom.mojom.TtsInstance_RefreshVoices_ParamsSpec,
      null,
      []);
  }

};

arc.mojom.mojom.TtsInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.TtsInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.TtsInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.TtsInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(arc.mojom.TtsHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Speak
arc.mojom.mojom.TtsInstance_Speak_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsInstance.Speak_Params',
      packedSize: 16,
      fields: [
        { name: 'utterance', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.TtsUtteranceSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Stop
arc.mojom.mojom.TtsInstance_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsInstance.Stop_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RefreshVoices
arc.mojom.mojom.TtsInstance_RefreshVoices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsInstance.RefreshVoices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.TtsInstancePtr = arc.mojom.mojom.TtsInstanceRemote;
arc.mojom.mojom.TtsInstanceRequest = arc.mojom.mojom.TtsInstancePendingReceiver;

