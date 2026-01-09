// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/remoting.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};


// Interface: RemoterFactory
media.mojom.RemoterFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.RemoterFactory';
  }

  use(unavailable) {
    // Method: use
    // Call: use(unavailable)
  }

  create(source, remoter) {
    // Method: Create
    // Call: Create(source, remoter)
  }

};

media.mojom.RemoterFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemotingDataStreamSender
media.mojom.RemotingDataStreamSenderPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.RemotingDataStreamSender';
  }

  sendFrame(frame) {
    // Method: SendFrame
    // Call: SendFrame(frame)
  }

  sendFrame() {
    // Method: SendFrame
    // Call: SendFrame()
  }

  cancelInFlightData() {
    // Method: CancelInFlightData
    // Call: CancelInFlightData()
  }

};

media.mojom.RemotingDataStreamSenderRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Remoter
media.mojom.RemoterPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.Remoter';
  }

  session(available) {
    // Method: session
    // Call: session(available)
  }

  onStarted() {
    // Method: OnStarted
    // Call: OnStarted()
  }

  onStartFailed() {
    // Method: OnStartFailed
    // Call: OnStartFailed()
  }

  onStarted() {
    // Method: OnStarted
    // Call: OnStarted()
  }

  sendMessageToSink() {
    // Method: SendMessageToSink
    // Call: SendMessageToSink()
  }

  onMessageFromSink() {
    // Method: OnMessageFromSink
    // Call: OnMessageFromSink()
  }

  start() {
    // Method: Start
    // Call: Start()
  }

  start() {
    // Method: Start
    // Call: Start()
  }

  startWithPermissionAlreadyGranted() {
    // Method: StartWithPermissionAlreadyGranted
    // Call: StartWithPermissionAlreadyGranted()
  }

  start() {
    // Method: Start
    // Call: Start()
  }

  pipes(corresponding) {
    // Method: pipes
    // Call: pipes(corresponding)
  }

  startDataStreams(audio_pipe, video_pipe, audio_sender, video_sender) {
    // Method: StartDataStreams
    // Call: StartDataStreams(audio_pipe, video_pipe, audio_sender, video_sender)
  }

  stop(reason) {
    // Method: Stop
    // Call: Stop(reason)
  }

  sendMessageToSink(message) {
    // Method: SendMessageToSink
    // Call: SendMessageToSink(message)
  }

  estimateTransmissionCapacity() {
    // Method: EstimateTransmissionCapacity
    return new Promise((resolve) => {
      // Call: EstimateTransmissionCapacity()
      resolve({});
    });
  }

};

media.mojom.RemoterRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemotingSource
media.mojom.RemotingSourcePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.RemotingSource';
  }

  onSinkAvailable(metadata) {
    // Method: OnSinkAvailable
    // Call: OnSinkAvailable(metadata)
  }

  onSinkGone() {
    // Method: OnSinkGone
    // Call: OnSinkGone()
  }

  onStarted() {
    // Method: OnStarted
    // Call: OnStarted()
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

  onStartFailed() {
    // Method: OnStartFailed
    // Call: OnStartFailed()
  }

  onStarted() {
    // Method: OnStarted
    // Call: OnStarted()
  }

  onStartFailed(reason) {
    // Method: OnStartFailed
    // Call: OnStartFailed(reason)
  }

  onStarted() {
    // Method: OnStarted
    // Call: OnStarted()
  }

  onStopped() {
    // Method: OnStopped
    // Call: OnStopped()
  }

  onMessageFromSink(message) {
    // Method: OnMessageFromSink
    // Call: OnMessageFromSink(message)
  }

  stop() {
    // Method: Stop
    // Call: Stop()
  }

  events(external) {
    // Method: events
    // Call: events(external)
  }

  onStopped(reason) {
    // Method: OnStopped
    // Call: OnStopped(reason)
  }

};

media.mojom.RemotingSourceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Remotee
media.mojom.RemoteePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.Remotee';
  }

  onRemotingSinkReady(sink) {
    // Method: OnRemotingSinkReady
    // Call: OnRemotingSinkReady(sink)
  }

  sendMessageToSource(message) {
    // Method: SendMessageToSource
    // Call: SendMessageToSource(message)
  }

  startDataStreams(audio_stream, video_stream) {
    // Method: StartDataStreams
    // Call: StartDataStreams(audio_stream, video_stream)
  }

};

media.mojom.RemoteeRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemotingSink
media.mojom.RemotingSinkPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.RemotingSink';
  }

  onMessageFromSource(message) {
    // Method: OnMessageFromSource
    // Call: OnMessageFromSource(message)
  }

};

media.mojom.RemotingSinkRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RemotingDataStreamReceiver
media.mojom.RemotingDataStreamReceiverPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media.mojom.RemotingDataStreamReceiver';
  }

  initializeDataPipe(data_pipe) {
    // Method: InitializeDataPipe
    // Call: InitializeDataPipe(data_pipe)
  }

  receiveFrame(frame_count, buffer) {
    // Method: ReceiveFrame
    // Call: ReceiveFrame(frame_count, buffer)
  }

  flushUntil(frame_count) {
    // Method: FlushUntil
    // Call: FlushUntil(frame_count)
  }

};

media.mojom.RemotingDataStreamReceiverRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
