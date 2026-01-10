// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/webaudio/audio_context_manager.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: AudioContextManager
blink.mojom.mojom.AudioContextManager = {};

blink.mojom.mojom.AudioContextManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.AudioContextManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AudioContextManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.AudioContextManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.AudioContextManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.AudioContextManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  audioContextAudiblePlaybackStarted(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec,
      null,
      [id]);
  }

  audioContextAudiblePlaybackStopped(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec,
      null,
      [id]);
  }

  audioContextCreated(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.AudioContextManager_AudioContextCreated_ParamsSpec,
      null,
      [id]);
  }

  audioContextClosed(id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.AudioContextManager_AudioContextClosed_ParamsSpec,
      null,
      [id]);
  }

};

blink.mojom.mojom.AudioContextManager.getRemote = function() {
  let remote = new blink.mojom.mojom.AudioContextManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AudioContextManager',
    'context');
  return remote.$;
};

// ParamsSpec for AudioContextAudiblePlaybackStarted
blink.mojom.mojom.AudioContextManager_AudioContextAudiblePlaybackStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AudioContextManager.AudioContextAudiblePlaybackStarted_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AudioContextAudiblePlaybackStopped
blink.mojom.mojom.AudioContextManager_AudioContextAudiblePlaybackStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AudioContextManager.AudioContextAudiblePlaybackStopped_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AudioContextCreated
blink.mojom.mojom.AudioContextManager_AudioContextCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AudioContextManager.AudioContextCreated_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AudioContextClosed
blink.mojom.mojom.AudioContextManager_AudioContextClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AudioContextManager.AudioContextClosed_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.AudioContextManagerPtr = blink.mojom.mojom.AudioContextManagerRemote;
blink.mojom.mojom.AudioContextManagerRequest = blink.mojom.mojom.AudioContextManagerPendingReceiver;

