// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/audio_logging.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};

media.mojom.AudioLogComponentSpec = { $: mojo.internal.Enum() };
media.mojom.AudioLog = {};
media.mojom.AudioLog.$interfaceName = 'media.mojom.AudioLog';
media.mojom.AudioLog_OnCreated_ParamsSpec = { $: {} };
media.mojom.AudioLog_OnStarted_ParamsSpec = { $: {} };
media.mojom.AudioLog_OnStopped_ParamsSpec = { $: {} };
media.mojom.AudioLog_OnClosed_ParamsSpec = { $: {} };
media.mojom.AudioLog_OnError_ParamsSpec = { $: {} };
media.mojom.AudioLog_OnSetVolume_ParamsSpec = { $: {} };
media.mojom.AudioLog_OnProcessingStateChanged_ParamsSpec = { $: {} };
media.mojom.AudioLog_OnLogMessage_ParamsSpec = { $: {} };
media.mojom.AudioLogFactory = {};
media.mojom.AudioLogFactory.$interfaceName = 'media.mojom.AudioLogFactory';
media.mojom.AudioLogFactory_CreateAudioLog_ParamsSpec = { $: {} };

// Enum: AudioLogComponent
media.mojom.AudioLogComponent = {
  kInputController: 0,
  kOutputController: 1,
  kOutputStream: 2,
};

// Interface: AudioLog
mojo.internal.Struct(
    media.mojom.AudioLog_OnCreated_ParamsSpec, 'media.mojom.AudioLog_OnCreated_Params', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.AudioLog_OnStarted_ParamsSpec, 'media.mojom.AudioLog_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioLog_OnStopped_ParamsSpec, 'media.mojom.AudioLog_OnStopped_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioLog_OnClosed_ParamsSpec, 'media.mojom.AudioLog_OnClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioLog_OnError_ParamsSpec, 'media.mojom.AudioLog_OnError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.AudioLog_OnSetVolume_ParamsSpec, 'media.mojom.AudioLog_OnSetVolume_Params', [
      mojo.internal.StructField('volume', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioLog_OnProcessingStateChanged_ParamsSpec, 'media.mojom.AudioLog_OnProcessingStateChanged_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.AudioLog_OnLogMessage_ParamsSpec, 'media.mojom.AudioLog_OnLogMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [params, device_id],
      false);
  }

  onStarted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.AudioLog_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.AudioLog_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

  onClosed() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.AudioLog_OnClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onError() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.AudioLog_OnError_ParamsSpec,
      null,
      [],
      false);
  }

  onSetVolume(volume) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.AudioLog_OnSetVolume_ParamsSpec,
      null,
      [volume],
      false);
  }

  onProcessingStateChanged(message) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      media.mojom.AudioLog_OnProcessingStateChanged_ParamsSpec,
      null,
      [message],
      false);
  }

  onLogMessage(message) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      media.mojom.AudioLog_OnLogMessage_ParamsSpec,
      null,
      [message],
      false);
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

media.mojom.AudioLogPtr = media.mojom.AudioLogRemote;
media.mojom.AudioLogRequest = media.mojom.AudioLogPendingReceiver;


// Interface: AudioLogFactory
mojo.internal.Struct(
    media.mojom.AudioLogFactory_CreateAudioLog_ParamsSpec, 'media.mojom.AudioLogFactory_CreateAudioLog_Params', [
      mojo.internal.StructField('component', 0, 0, media.mojom.AudioLogComponentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('component_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('audio_log_receiver', 16, 0, mojo.internal.InterfaceRequest(media.mojom.AudioLogRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

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
      [component, component_id, audio_log_receiver],
      false);
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

media.mojom.AudioLogFactoryPtr = media.mojom.AudioLogFactoryRemote;
media.mojom.AudioLogFactoryRequest = media.mojom.AudioLogFactoryPendingReceiver;

