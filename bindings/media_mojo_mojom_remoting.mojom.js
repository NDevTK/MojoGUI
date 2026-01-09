// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/remoting.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: RemoterFactory
media.mojom.RemoterFactory = {};

media.mojom.RemoterFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemoterFactoryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemoterFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemoterFactoryPendingReceiver,
      handle);
    this.$ = new media.mojom.RemoterFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemoterFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(source, remoter) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.RemoterFactory_Create_ParamsSpec,
      null,
      [source, remoter]);
  }

};

media.mojom.RemoterFactory.getRemote = function() {
  let remote = new media.mojom.RemoterFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemoterFactory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
media.mojom.RemoterFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemoterFactory.Create_Params',
      packedSize: 16,
      fields: [
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'remoter', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.RemoterFactoryPtr = media.mojom.RemoterFactoryRemote;
media.mojom.RemoterFactoryRequest = media.mojom.RemoterFactoryPendingReceiver;


// Interface: RemotingDataStreamSender
media.mojom.RemotingDataStreamSender = {};

media.mojom.RemotingDataStreamSenderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingDataStreamSenderRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingDataStreamSender';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingDataStreamSenderPendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingDataStreamSenderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingDataStreamSenderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendFrame(frame) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec,
      null,
      [frame]);
  }

  cancelInFlightData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec,
      null,
      []);
  }

};

media.mojom.RemotingDataStreamSender.getRemote = function() {
  let remote = new media.mojom.RemotingDataStreamSenderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingDataStreamSender',
    'context');
  return remote.$;
};

// ParamsSpec for SendFrame
media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingDataStreamSender.SendFrame_Params',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelInFlightData
media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingDataStreamSender.CancelInFlightData_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.RemotingDataStreamSenderPtr = media.mojom.RemotingDataStreamSenderRemote;
media.mojom.RemotingDataStreamSenderRequest = media.mojom.RemotingDataStreamSenderPendingReceiver;


// Interface: Remoter
media.mojom.Remoter = {};

media.mojom.RemoterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemoterRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Remoter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemoterPendingReceiver,
      handle);
    this.$ = new media.mojom.RemoterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemoterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.Remoter_Start_ParamsSpec,
      null,
      []);
  }

  startWithPermissionAlreadyGranted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec,
      null,
      []);
  }

  startDataStreams(audio_pipe, video_pipe, audio_sender, video_sender) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Remoter_StartDataStreams_ParamsSpec,
      null,
      [audio_pipe, video_pipe, audio_sender, video_sender]);
  }

  stop(reason) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Remoter_Stop_ParamsSpec,
      null,
      [reason]);
  }

  sendMessageToSink(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Remoter_SendMessageToSink_ParamsSpec,
      null,
      [message]);
  }

  estimateTransmissionCapacity() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec,
      media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec,
      []);
  }

};

media.mojom.Remoter.getRemote = function() {
  let remote = new media.mojom.RemoterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Remoter',
    'context');
  return remote.$;
};

// ParamsSpec for Start
media.mojom.Remoter_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remoter.Start_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartWithPermissionAlreadyGranted
media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remoter.StartWithPermissionAlreadyGranted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDataStreams
media.mojom.Remoter_StartDataStreams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remoter.StartDataStreams_Params',
      packedSize: 32,
      fields: [
        { name: 'audio_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'video_pipe', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'audio_sender', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'video_sender', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for Stop
media.mojom.Remoter_Stop_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remoter.Stop_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: media.mojom.RemotingStopReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendMessageToSink
media.mojom.Remoter_SendMessageToSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remoter.SendMessageToSink_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EstimateTransmissionCapacity
media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remoter.EstimateTransmissionCapacity_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remoter.EstimateTransmissionCapacity_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'rate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.RemoterPtr = media.mojom.RemoterRemote;
media.mojom.RemoterRequest = media.mojom.RemoterPendingReceiver;


// Interface: RemotingSource
media.mojom.RemotingSource = {};

media.mojom.RemotingSourcePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingSourceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingSource';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingSourcePendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingSourceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingSourceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSinkAvailable(metadata) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec,
      null,
      [metadata]);
  }

  onSinkGone() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RemotingSource_OnSinkGone_ParamsSpec,
      null,
      []);
  }

  onStarted() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.RemotingSource_OnStarted_ParamsSpec,
      null,
      []);
  }

  onStartFailed(reason) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.RemotingSource_OnStartFailed_ParamsSpec,
      null,
      [reason]);
  }

  onMessageFromSink(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec,
      null,
      [message]);
  }

  onStopped(reason) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.RemotingSource_OnStopped_ParamsSpec,
      null,
      [reason]);
  }

};

media.mojom.RemotingSource.getRemote = function() {
  let remote = new media.mojom.RemotingSourceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingSource',
    'context');
  return remote.$;
};

// ParamsSpec for OnSinkAvailable
media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSource.OnSinkAvailable_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: media.mojom.RemotingSinkMetadataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSinkGone
media.mojom.RemotingSource_OnSinkGone_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSource.OnSinkGone_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStarted
media.mojom.RemotingSource_OnStarted_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSource.OnStarted_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStartFailed
media.mojom.RemotingSource_OnStartFailed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSource.OnStartFailed_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: media.mojom.RemotingStartFailReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnMessageFromSink
media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSource.OnMessageFromSink_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnStopped
media.mojom.RemotingSource_OnStopped_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSource.OnStopped_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 8, packedBitOffset: 0, type: media.mojom.RemotingStopReasonSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.RemotingSourcePtr = media.mojom.RemotingSourceRemote;
media.mojom.RemotingSourceRequest = media.mojom.RemotingSourcePendingReceiver;


// Interface: Remotee
media.mojom.Remotee = {};

media.mojom.RemoteePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemoteeRemote = class {
  static get $interfaceName() {
    return 'media.mojom.Remotee';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemoteePendingReceiver,
      handle);
    this.$ = new media.mojom.RemoteeRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemoteeRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onRemotingSinkReady(sink) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec,
      null,
      [sink]);
  }

  sendMessageToSource(message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Remotee_SendMessageToSource_ParamsSpec,
      null,
      [message]);
  }

  startDataStreams(audio_stream, video_stream) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Remotee_StartDataStreams_ParamsSpec,
      null,
      [audio_stream, video_stream]);
  }

  onFlushUntil(audio_frame_count, video_frame_count) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Remotee_OnFlushUntil_ParamsSpec,
      null,
      [audio_frame_count, video_frame_count]);
  }

  onVideoNaturalSizeChange(size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec,
      null,
      [size]);
  }

};

media.mojom.Remotee.getRemote = function() {
  let remote = new media.mojom.RemoteeRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.Remotee',
    'context');
  return remote.$;
};

// ParamsSpec for OnRemotingSinkReady
media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remotee.OnRemotingSinkReady_Params',
      packedSize: 16,
      fields: [
        { name: 'sink', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendMessageToSource
media.mojom.Remotee_SendMessageToSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remotee.SendMessageToSource_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartDataStreams
media.mojom.Remotee_StartDataStreams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remotee.StartDataStreams_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_stream', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'video_stream', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFlushUntil
media.mojom.Remotee_OnFlushUntil_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remotee.OnFlushUntil_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_frame_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'video_frame_count', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnVideoNaturalSizeChange
media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.Remotee.OnVideoNaturalSizeChange_Params',
      packedSize: 16,
      fields: [
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.RemoteePtr = media.mojom.RemoteeRemote;
media.mojom.RemoteeRequest = media.mojom.RemoteePendingReceiver;


// Interface: RemotingSink
media.mojom.RemotingSink = {};

media.mojom.RemotingSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingSinkRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingSinkPendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onMessageFromSource(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec,
      null,
      [message]);
  }

};

media.mojom.RemotingSink.getRemote = function() {
  let remote = new media.mojom.RemotingSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingSink',
    'context');
  return remote.$;
};

// ParamsSpec for OnMessageFromSource
media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingSink.OnMessageFromSource_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.RemotingSinkPtr = media.mojom.RemotingSinkRemote;
media.mojom.RemotingSinkRequest = media.mojom.RemotingSinkPendingReceiver;


// Interface: RemotingDataStreamReceiver
media.mojom.RemotingDataStreamReceiver = {};

media.mojom.RemotingDataStreamReceiverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.RemotingDataStreamReceiverRemote = class {
  static get $interfaceName() {
    return 'media.mojom.RemotingDataStreamReceiver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.RemotingDataStreamReceiverPendingReceiver,
      handle);
    this.$ = new media.mojom.RemotingDataStreamReceiverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.RemotingDataStreamReceiverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initializeDataPipe(data_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec,
      null,
      [data_pipe]);
  }

  receiveFrame(frame_count, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec,
      null,
      [frame_count, buffer]);
  }

  flushUntil(frame_count) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec,
      null,
      [frame_count]);
  }

};

media.mojom.RemotingDataStreamReceiver.getRemote = function() {
  let remote = new media.mojom.RemotingDataStreamReceiverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.RemotingDataStreamReceiver',
    'context');
  return remote.$;
};

// ParamsSpec for InitializeDataPipe
media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingDataStreamReceiver.InitializeDataPipe_Params',
      packedSize: 16,
      fields: [
        { name: 'data_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ReceiveFrame
media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingDataStreamReceiver.ReceiveFrame_Params',
      packedSize: 24,
      fields: [
        { name: 'frame_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'buffer', packedOffset: 16, packedBitOffset: 0, type: media.mojom.DecoderBufferSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushUntil
media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.RemotingDataStreamReceiver.FlushUntil_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_count', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
media.mojom.RemotingDataStreamReceiverPtr = media.mojom.RemotingDataStreamReceiverRemote;
media.mojom.RemotingDataStreamReceiverRequest = media.mojom.RemotingDataStreamReceiverPendingReceiver;

