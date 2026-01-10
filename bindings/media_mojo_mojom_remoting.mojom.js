// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/remoting.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gfx = gfx || {};

media.mojom.RemoterFactory = {};
media.mojom.RemoterFactory.$interfaceName = 'media.mojom.RemoterFactory';
media.mojom.RemoterFactory_Create_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamSender = {};
media.mojom.RemotingDataStreamSender.$interfaceName = 'media.mojom.RemotingDataStreamSender';
media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec = { $: {} };
media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec = { $: {} };
media.mojom.Remoter = {};
media.mojom.Remoter.$interfaceName = 'media.mojom.Remoter';
media.mojom.Remoter_Start_ParamsSpec = { $: {} };
media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec = { $: {} };
media.mojom.Remoter_StartDataStreams_ParamsSpec = { $: {} };
media.mojom.Remoter_Stop_ParamsSpec = { $: {} };
media.mojom.Remoter_SendMessageToSink_ParamsSpec = { $: {} };
media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec = { $: {} };
media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec = { $: {} };
media.mojom.RemotingSource = {};
media.mojom.RemotingSource.$interfaceName = 'media.mojom.RemotingSource';
media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnSinkGone_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnStarted_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnStartFailed_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec = { $: {} };
media.mojom.RemotingSource_OnStopped_ParamsSpec = { $: {} };
media.mojom.Remotee = {};
media.mojom.Remotee.$interfaceName = 'media.mojom.Remotee';
media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec = { $: {} };
media.mojom.Remotee_SendMessageToSource_ParamsSpec = { $: {} };
media.mojom.Remotee_StartDataStreams_ParamsSpec = { $: {} };
media.mojom.Remotee_OnFlushUntil_ParamsSpec = { $: {} };
media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec = { $: {} };
media.mojom.RemotingSink = {};
media.mojom.RemotingSink.$interfaceName = 'media.mojom.RemotingSink';
media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamReceiver = {};
media.mojom.RemotingDataStreamReceiver.$interfaceName = 'media.mojom.RemotingDataStreamReceiver';
media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec = { $: {} };
media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec = { $: {} };

// Interface: RemoterFactory
mojo.internal.Struct(
    media.mojom.RemoterFactory_Create_ParamsSpec, 'media.mojom.RemoterFactory_Create_Params', [
      mojo.internal.StructField('source', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingSourceSpec), null, false, 0, undefined),
      mojo.internal.StructField('remoter', 8, 0, mojo.internal.InterfaceRequest(media.mojom.RemoterSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [source, remoter],
      false);
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

media.mojom.RemoterFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.RemoterFactory_Create_ParamsSpec.$.decode(message.payload);
          const result = this.impl.create(params.source, params.remoter);
          break;
        }
      }
    }});
  }
};

media.mojom.RemoterFactoryReceiver = media.mojom.RemoterFactoryReceiver;

media.mojom.RemoterFactoryPtr = media.mojom.RemoterFactoryRemote;
media.mojom.RemoterFactoryRequest = media.mojom.RemoterFactoryPendingReceiver;


// Interface: RemotingDataStreamSender
mojo.internal.Struct(
    media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec, 'media.mojom.RemotingDataStreamSender_SendFrame_Params', [
      mojo.internal.StructField('frame', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec, 'media.mojom.RemotingDataStreamSender_SendFrame_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec, 'media.mojom.RemotingDataStreamSender_CancelInFlightData_Params', [
    ],
    [[0, 8]]);

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
      media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec,
      [frame],
      false);
  }

  cancelInFlightData() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec,
      null,
      [],
      false);
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

media.mojom.RemotingDataStreamSenderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.RemotingDataStreamSender_SendFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendFrame(params.frame);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.RemotingDataStreamSender_SendFrame_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = media.mojom.RemotingDataStreamSender_CancelInFlightData_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelInFlightData();
          break;
        }
      }
    }});
  }
};

media.mojom.RemotingDataStreamSenderReceiver = media.mojom.RemotingDataStreamSenderReceiver;

media.mojom.RemotingDataStreamSenderPtr = media.mojom.RemotingDataStreamSenderRemote;
media.mojom.RemotingDataStreamSenderRequest = media.mojom.RemotingDataStreamSenderPendingReceiver;


// Interface: Remoter
mojo.internal.Struct(
    media.mojom.Remoter_Start_ParamsSpec, 'media.mojom.Remoter_Start_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec, 'media.mojom.Remoter_StartWithPermissionAlreadyGranted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Remoter_StartDataStreams_ParamsSpec, 'media.mojom.Remoter_StartDataStreams_Params', [
      mojo.internal.StructField('audio_pipe', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('video_pipe', 8, 0, mojo.internal.Pointer, null, true, 0, undefined),
      mojo.internal.StructField('audio_sender', 16, 0, mojo.internal.InterfaceRequest(media.mojom.RemotingDataStreamSenderSpec), null, true, 0, undefined),
      mojo.internal.StructField('video_sender', 24, 0, mojo.internal.InterfaceRequest(media.mojom.RemotingDataStreamSenderSpec), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    media.mojom.Remoter_Stop_ParamsSpec, 'media.mojom.Remoter_Stop_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.RemotingStopReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remoter_SendMessageToSink_ParamsSpec, 'media.mojom.Remoter_SendMessageToSink_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec, 'media.mojom.Remoter_EstimateTransmissionCapacity_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec, 'media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParams', [
      mojo.internal.StructField('rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  startWithPermissionAlreadyGranted() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec,
      null,
      [],
      false);
  }

  startDataStreams(audio_pipe, video_pipe, audio_sender, video_sender) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Remoter_StartDataStreams_ParamsSpec,
      null,
      [audio_pipe, video_pipe, audio_sender, video_sender],
      false);
  }

  stop(reason) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Remoter_Stop_ParamsSpec,
      null,
      [reason],
      false);
  }

  sendMessageToSink(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Remoter_SendMessageToSink_ParamsSpec,
      null,
      [message],
      false);
  }

  estimateTransmissionCapacity() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec,
      media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec,
      [],
      false);
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

media.mojom.RemoterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.Remoter_Start_ParamsSpec.$.decode(message.payload);
          const result = this.impl.start();
          break;
        }
        case 1: {
          const params = media.mojom.Remoter_StartWithPermissionAlreadyGranted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startWithPermissionAlreadyGranted();
          break;
        }
        case 2: {
          const params = media.mojom.Remoter_StartDataStreams_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startDataStreams(params.audio_pipe, params.video_pipe, params.audio_sender, params.video_sender);
          break;
        }
        case 3: {
          const params = media.mojom.Remoter_Stop_ParamsSpec.$.decode(message.payload);
          const result = this.impl.stop(params.reason);
          break;
        }
        case 4: {
          const params = media.mojom.Remoter_SendMessageToSink_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendMessageToSink(params.message);
          break;
        }
        case 5: {
          const params = media.mojom.Remoter_EstimateTransmissionCapacity_ParamsSpec.$.decode(message.payload);
          const result = this.impl.estimateTransmissionCapacity();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.Remoter_EstimateTransmissionCapacity_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

media.mojom.RemoterReceiver = media.mojom.RemoterReceiver;

media.mojom.RemoterPtr = media.mojom.RemoterRemote;
media.mojom.RemoterRequest = media.mojom.RemoterPendingReceiver;


// Interface: RemotingSource
mojo.internal.Struct(
    media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec, 'media.mojom.RemotingSource_OnSinkAvailable_Params', [
      mojo.internal.StructField('metadata', 0, 0, media.mojom.RemotingSinkMetadataSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnSinkGone_ParamsSpec, 'media.mojom.RemotingSource_OnSinkGone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnStarted_ParamsSpec, 'media.mojom.RemotingSource_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnStartFailed_ParamsSpec, 'media.mojom.RemotingSource_OnStartFailed_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.RemotingStartFailReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec, 'media.mojom.RemotingSource_OnMessageFromSink_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingSource_OnStopped_ParamsSpec, 'media.mojom.RemotingSource_OnStopped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.RemotingStopReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [metadata],
      false);
  }

  onSinkGone() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RemotingSource_OnSinkGone_ParamsSpec,
      null,
      [],
      false);
  }

  onStarted() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.RemotingSource_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartFailed(reason) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.RemotingSource_OnStartFailed_ParamsSpec,
      null,
      [reason],
      false);
  }

  onMessageFromSink(message) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec,
      null,
      [message],
      false);
  }

  onStopped(reason) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      media.mojom.RemotingSource_OnStopped_ParamsSpec,
      null,
      [reason],
      false);
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

media.mojom.RemotingSourceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.RemotingSource_OnSinkAvailable_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSinkAvailable(params.metadata);
          break;
        }
        case 1: {
          const params = media.mojom.RemotingSource_OnSinkGone_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSinkGone();
          break;
        }
        case 2: {
          const params = media.mojom.RemotingSource_OnStarted_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStarted();
          break;
        }
        case 3: {
          const params = media.mojom.RemotingSource_OnStartFailed_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStartFailed(params.reason);
          break;
        }
        case 4: {
          const params = media.mojom.RemotingSource_OnMessageFromSink_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMessageFromSink(params.message);
          break;
        }
        case 5: {
          const params = media.mojom.RemotingSource_OnStopped_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onStopped(params.reason);
          break;
        }
      }
    }});
  }
};

media.mojom.RemotingSourceReceiver = media.mojom.RemotingSourceReceiver;

media.mojom.RemotingSourcePtr = media.mojom.RemotingSourceRemote;
media.mojom.RemotingSourceRequest = media.mojom.RemotingSourcePendingReceiver;


// Interface: Remotee
mojo.internal.Struct(
    media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec, 'media.mojom.Remotee_OnRemotingSinkReady_Params', [
      mojo.internal.StructField('sink', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingSinkSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remotee_SendMessageToSource_ParamsSpec, 'media.mojom.Remotee_SendMessageToSource_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remotee_StartDataStreams_ParamsSpec, 'media.mojom.Remotee_StartDataStreams_Params', [
      mojo.internal.StructField('audio_stream', 0, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingDataStreamReceiverSpec), null, true, 0, undefined),
      mojo.internal.StructField('video_stream', 8, 0, mojo.internal.InterfaceProxy(media.mojom.RemotingDataStreamReceiverSpec), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.Remotee_OnFlushUntil_ParamsSpec, 'media.mojom.Remotee_OnFlushUntil_Params', [
      mojo.internal.StructField('audio_frame_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('video_frame_count', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec, 'media.mojom.Remotee_OnVideoNaturalSizeChange_Params', [
      mojo.internal.StructField('size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [sink],
      false);
  }

  sendMessageToSource(message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.Remotee_SendMessageToSource_ParamsSpec,
      null,
      [message],
      false);
  }

  startDataStreams(audio_stream, video_stream) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.Remotee_StartDataStreams_ParamsSpec,
      null,
      [audio_stream, video_stream],
      false);
  }

  onFlushUntil(audio_frame_count, video_frame_count) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      media.mojom.Remotee_OnFlushUntil_ParamsSpec,
      null,
      [audio_frame_count, video_frame_count],
      false);
  }

  onVideoNaturalSizeChange(size) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec,
      null,
      [size],
      false);
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

media.mojom.RemoteeReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.Remotee_OnRemotingSinkReady_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onRemotingSinkReady(params.sink);
          break;
        }
        case 1: {
          const params = media.mojom.Remotee_SendMessageToSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendMessageToSource(params.message);
          break;
        }
        case 2: {
          const params = media.mojom.Remotee_StartDataStreams_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startDataStreams(params.audio_stream, params.video_stream);
          break;
        }
        case 3: {
          const params = media.mojom.Remotee_OnFlushUntil_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onFlushUntil(params.audio_frame_count, params.video_frame_count);
          break;
        }
        case 4: {
          const params = media.mojom.Remotee_OnVideoNaturalSizeChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onVideoNaturalSizeChange(params.size);
          break;
        }
      }
    }});
  }
};

media.mojom.RemoteeReceiver = media.mojom.RemoteeReceiver;

media.mojom.RemoteePtr = media.mojom.RemoteeRemote;
media.mojom.RemoteeRequest = media.mojom.RemoteePendingReceiver;


// Interface: RemotingSink
mojo.internal.Struct(
    media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec, 'media.mojom.RemotingSink_OnMessageFromSource_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [message],
      false);
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

media.mojom.RemotingSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.RemotingSink_OnMessageFromSource_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onMessageFromSource(params.message);
          break;
        }
      }
    }});
  }
};

media.mojom.RemotingSinkReceiver = media.mojom.RemotingSinkReceiver;

media.mojom.RemotingSinkPtr = media.mojom.RemotingSinkRemote;
media.mojom.RemotingSinkRequest = media.mojom.RemotingSinkPendingReceiver;


// Interface: RemotingDataStreamReceiver
mojo.internal.Struct(
    media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec, 'media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_Params', [
      mojo.internal.StructField('data_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec, 'media.mojom.RemotingDataStreamReceiver_ReceiveFrame_Params', [
      mojo.internal.StructField('buffer', 0, 0, media.mojom.DecoderBufferSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_count', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec, 'media.mojom.RemotingDataStreamReceiver_FlushUntil_Params', [
      mojo.internal.StructField('frame_count', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [data_pipe],
      false);
  }

  receiveFrame(frame_count, buffer) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec,
      null,
      [frame_count, buffer],
      false);
  }

  flushUntil(frame_count) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec,
      null,
      [frame_count],
      false);
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

media.mojom.RemotingDataStreamReceiverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.RemotingDataStreamReceiver_InitializeDataPipe_ParamsSpec.$.decode(message.payload);
          const result = this.impl.initializeDataPipe(params.data_pipe);
          break;
        }
        case 1: {
          const params = media.mojom.RemotingDataStreamReceiver_ReceiveFrame_ParamsSpec.$.decode(message.payload);
          const result = this.impl.receiveFrame(params.frame_count, params.buffer);
          break;
        }
        case 2: {
          const params = media.mojom.RemotingDataStreamReceiver_FlushUntil_ParamsSpec.$.decode(message.payload);
          const result = this.impl.flushUntil(params.frame_count);
          break;
        }
      }
    }});
  }
};

media.mojom.RemotingDataStreamReceiverReceiver = media.mojom.RemotingDataStreamReceiverReceiver;

media.mojom.RemotingDataStreamReceiverPtr = media.mojom.RemotingDataStreamReceiverRemote;
media.mojom.RemotingDataStreamReceiverRequest = media.mojom.RemotingDataStreamReceiverPendingReceiver;

