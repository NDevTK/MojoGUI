// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_logging.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Enum: AudioLogComponent
media.mojom.mojom.AudioLogComponent = {
  kInputController: 0,
  kOutputController: 1,
  kOutputStream: 2,
};
media.mojom.mojom.AudioLogComponentSpec = { $: mojo.internal.Enum() };

// Interface: AudioLog
media.mojom.mojom.AudioLog = {};

media.mojom.mojom.AudioLogPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioLogRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioLog';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioLogPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioLogRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioLogRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCreated(params, device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioLog_OnCreated_ParamsSpec,
      null,
      [params, device_id]);
  }

  onStarted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.mojom.AudioLog_OnStarted_ParamsSpec,
      null,
      []);
  }

  onStopped() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.mojom.AudioLog_OnStopped_ParamsSpec,
      null,
      []);
  }

  onClosed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.mojom.AudioLog_OnClosed_ParamsSpec,
      null,
      []);
  }

  onError() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.mojom.AudioLog_OnError_ParamsSpec,
      null,
      []);
  }

  onSetVolume(volume) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.mojom.AudioLog_OnSetVolume_ParamsSpec,
      null,
      [volume]);
  }

  onProcessingStateChanged(message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.mojom.AudioLog_OnProcessingStateChanged_ParamsSpec,
      null,
      [message]);
  }

  onLogMessage(message) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.mojom.AudioLog_OnLogMessage_ParamsSpec,
      null,
      [message]);
  }

};

media.mojom.mojom.AudioLog.getRemote = function() {
  let remote = new media.mojom.mojom.AudioLogRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioLog',
    'context');
  return remote.$;
};

// ParamsSpec for OnCreated
media.mojom.mojom.AudioLog_OnCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioParametersSpec, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnStarted
media.mojom.mojom.AudioLog_OnStarted_ParamsSpec = {
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
media.mojom.mojom.AudioLog_OnStopped_ParamsSpec = {
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
media.mojom.mojom.AudioLog_OnClosed_ParamsSpec = {
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
media.mojom.mojom.AudioLog_OnError_ParamsSpec = {
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
media.mojom.mojom.AudioLog_OnSetVolume_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnSetVolume_Params',
      packedSize: 16,
      fields: [
        { name: 'volume', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnProcessingStateChanged
media.mojom.mojom.AudioLog_OnProcessingStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnProcessingStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLogMessage
media.mojom.mojom.AudioLog_OnLogMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLog.OnLogMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioLogPtr = media.mojom.mojom.AudioLogRemote;
media.mojom.mojom.AudioLogRequest = media.mojom.mojom.AudioLogPendingReceiver;


// Interface: AudioLogFactory
media.mojom.mojom.AudioLogFactory = {};

media.mojom.mojom.AudioLogFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.mojom.AudioLogFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.AudioLogFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.mojom.AudioLogFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.mojom.AudioLogFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.mojom.AudioLogFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createAudioLog(component, component_id, audio_log_receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.mojom.AudioLogFactory_CreateAudioLog_ParamsSpec,
      null,
      [component, component_id, audio_log_receiver]);
  }

};

media.mojom.mojom.AudioLogFactory.getRemote = function() {
  let remote = new media.mojom.mojom.AudioLogFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.AudioLogFactory',
    'context');
  return remote.$;
};

// ParamsSpec for CreateAudioLog
media.mojom.mojom.AudioLogFactory_CreateAudioLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.AudioLogFactory.CreateAudioLog_Params',
      packedSize: 24,
      fields: [
        { name: 'component', packedOffset: 0, packedBitOffset: 0, type: media.mojom.AudioLogComponentSpec, nullable: false, minVersion: 0 },
        { name: 'component_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'audio_log_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
media.mojom.mojom.AudioLogFactoryPtr = media.mojom.mojom.AudioLogFactoryRemote;
media.mojom.mojom.AudioLogFactoryRequest = media.mojom.mojom.AudioLogFactoryPendingReceiver;

