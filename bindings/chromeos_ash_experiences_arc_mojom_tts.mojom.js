// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/tts.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: TtsEventType
arc.mojom.TtsEventType = {
  START: 0,
  END: 1,
  INTERRUPTED: 2,
  ERROR: 3,
  WORD: 4,
};

// Struct: TtsUtterance
arc.mojom.TtsUtteranceSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsUtterance',
      packedSize: 40,
      fields: [
        { name: 'utteranceId', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'rate', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'pitch', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TtsVoice
arc.mojom.TtsVoiceSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.TtsVoice',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'locale', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_network_connection_required', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: TtsHost
arc.mojom.TtsHost = {};

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

// Legacy compatibility
arc.mojom.TtsHostPtr = arc.mojom.TtsHostRemote;
arc.mojom.TtsHostRequest = arc.mojom.TtsHostPendingReceiver;


// Interface: TtsInstance
arc.mojom.TtsInstance = {};

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

// Legacy compatibility
arc.mojom.TtsInstancePtr = arc.mojom.TtsInstanceRemote;
arc.mojom.TtsInstanceRequest = arc.mojom.TtsInstancePendingReceiver;

