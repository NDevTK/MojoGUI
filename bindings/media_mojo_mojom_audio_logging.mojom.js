// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_logging.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AudioLogComponent
media.mojom.AudioLogComponent = {
  kInputController: 0,
  kOutputController: 1,
  kOutputStream: 2,
};

// Interface: AudioLog
media.mojom.AudioLog = {};

media.mojom.AudioLogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioLogRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioLog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioLogPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioLogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioLogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCreated(params, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioLog_OnCreated_ParamsSpec,
      null,
      null,
      [params, device_id],
      undefined,
      undefined
    );
  }

  onStarted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioLog_OnStarted_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onStopped() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioLog_OnStopped_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onClosed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioLog_OnClosed_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onError() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.AudioLog_OnError_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  onSetVolume(volume) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.AudioLog_OnSetVolume_ParamsSpec,
      null,
      null,
      [volume],
      undefined,
      undefined
    );
  }

  onProcessingStateChanged(message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.AudioLog_OnProcessingStateChanged_ParamsSpec,
      null,
      null,
      [message],
      undefined,
      undefined
    );
  }

  onLogMessage(message) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.AudioLog_OnLogMessage_ParamsSpec,
      null,
      null,
      [message],
      undefined,
      undefined
    );
  }

};

media.mojom.AudioLog.getRemote = function() {
  let remote = new media.mojom.AudioLogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioLog',
    'context');
  return remote.$;
};

// ParamsSpec for OnCreated
media.mojom.AudioLog_OnCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnStarted
media.mojom.AudioLog_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnStopped
media.mojom.AudioLog_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnStopped_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnClosed
media.mojom.AudioLog_OnClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnError
media.mojom.AudioLog_OnError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSetVolume
media.mojom.AudioLog_OnSetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnSetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnProcessingStateChanged
media.mojom.AudioLog_OnProcessingStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnProcessingStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLogMessage
media.mojom.AudioLog_OnLogMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnLogMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioLogPtr = media.mojom.AudioLogRemote;
media.mojom.AudioLogRequest = media.mojom.AudioLogPendingReceiver;


// Interface: AudioLogFactory
media.mojom.AudioLogFactory = {};

media.mojom.AudioLogFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.AudioLogFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioLogFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.AudioLogFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.AudioLogFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.AudioLogFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAudioLog(component, component_id, audio_log_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.AudioLogFactory_CreateAudioLog_ParamsSpec,
      null,
      null,
      [component, component_id, audio_log_receiver],
      undefined,
      undefined
    );
  }

};

media.mojom.AudioLogFactory.getRemote = function() {
  let remote = new media.mojom.AudioLogFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioLogFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateAudioLog
media.mojom.AudioLogFactory_CreateAudioLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLogFactory.CreateAudioLog_Params',
      packedSize: 32,
      fields: [
        { name: 'component', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'component_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'audio_log_receiver', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
media.mojom.AudioLogFactoryPtr = media.mojom.AudioLogFactoryRemote;
media.mojom.AudioLogFactoryRequest = media.mojom.AudioLogFactoryPendingReceiver;

