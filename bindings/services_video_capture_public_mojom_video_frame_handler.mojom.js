// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_frame_handler.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};

video_capture.mojom.ReadyFrameInBufferSpec = { $: {} };
video_capture.mojom.VideoFrameAccessHandler = {};
video_capture.mojom.VideoFrameAccessHandler.$interfaceName = 'video_capture.mojom.VideoFrameAccessHandler';
video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler = {};
video_capture.mojom.VideoFrameHandler.$interfaceName = 'video_capture.mojom.VideoFrameHandler';
video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec = { $: {} };
video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec = { $: {} };

// Struct: ReadyFrameInBuffer
mojo.internal.Struct(
    video_capture.mojom.ReadyFrameInBufferSpec, 'video_capture.mojom.ReadyFrameInBuffer', [
      mojo.internal.StructField('frame_info', 0, 0, media.mojom.VideoFrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_feedback_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: VideoFrameAccessHandler
mojo.internal.Struct(
    video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

video_capture.mojom.VideoFrameAccessHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoFrameAccessHandlerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoFrameAccessHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoFrameAccessHandlerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoFrameAccessHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.VideoFrameAccessHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onFinishedConsumingBuffer(buffer_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

};

video_capture.mojom.VideoFrameAccessHandler.getRemote = function() {
  let remote = new video_capture.mojom.VideoFrameAccessHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoFrameAccessHandler',
    'context');
  return remote.$;
};

video_capture.mojom.VideoFrameAccessHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnFinishedConsumingBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFinishedConsumingBuffer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameAccessHandler_OnFinishedConsumingBuffer_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onFinishedConsumingBuffer');
          const result = this.impl.onFinishedConsumingBuffer(params.buffer_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.VideoFrameAccessHandlerReceiver = video_capture.mojom.VideoFrameAccessHandlerReceiver;

video_capture.mojom.VideoFrameAccessHandlerPtr = video_capture.mojom.VideoFrameAccessHandlerRemote;
video_capture.mojom.VideoFrameAccessHandlerRequest = video_capture.mojom.VideoFrameAccessHandlerPendingReceiver;


// Interface: VideoFrameHandler
mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnNewBuffer_Params', [
      mojo.internal.StructField('buffer_handle', 0, 0, media.mojom.VideoBufferHandleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_Params', [
      mojo.internal.StructField('frame_access_handler', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.VideoFrameAccessHandlerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_Params', [
      mojo.internal.StructField('buffer', 0, 0, video_capture.mojom.ReadyFrameInBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnBufferRetired_Params', [
      mojo.internal.StructField('buffer_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, media.mojom.VideoCaptureErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameDropped_Params', [
      mojo.internal.StructField('reason', 0, 0, media.mojom.VideoCaptureFrameDropReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_Params', [
      mojo.internal.StructField('capture_version', 0, 0, media.mojom.CaptureVersionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnLog_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec, 'video_capture.mojom.VideoFrameHandler_OnStopped_Params', [
    ],
    [[0, 8]]);

video_capture.mojom.VideoFrameHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoFrameHandlerRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoFrameHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoFrameHandlerPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoFrameHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.VideoFrameHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onCaptureConfigurationChanged() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec,
      null,
      [],
      false);
  }

  onNewBuffer(buffer_id, buffer_handle) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec,
      null,
      [buffer_id, buffer_handle],
      false);
  }

  onFrameAccessHandlerReady(frame_access_handler) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec,
      null,
      [frame_access_handler],
      false);
  }

  onFrameReadyInBuffer(buffer) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec,
      null,
      [buffer],
      false);
  }

  onBufferRetired(buffer_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec,
      null,
      [buffer_id],
      false);
  }

  onError(error) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec,
      null,
      [error],
      false);
  }

  onFrameDropped(reason) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec,
      null,
      [reason],
      false);
  }

  onNewCaptureVersion(capture_version) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec,
      null,
      [capture_version],
      false);
  }

  onFrameWithEmptyRegionCapture() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec,
      null,
      [],
      false);
  }

  onLog(message) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec,
      null,
      [message],
      false);
  }

  onStarted() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onStartedUsingGpuDecode() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec,
      null,
      [],
      false);
  }

  onStopped() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

video_capture.mojom.VideoFrameHandler.getRemote = function() {
  let remote = new video_capture.mojom.VideoFrameHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoFrameHandler',
    'context');
  return remote.$;
};

video_capture.mojom.VideoFrameHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnCaptureConfigurationChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCaptureConfigurationChanged (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnNewBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewBuffer (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnFrameAccessHandlerReady
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameAccessHandlerReady (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnFrameReadyInBuffer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameReadyInBuffer (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnBufferRetired
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnBufferRetired (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnFrameDropped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameDropped (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnNewCaptureVersion
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnNewCaptureVersion (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnFrameWithEmptyRegionCapture
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameWithEmptyRegionCapture (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnLog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLog (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: OnStarted
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStarted (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: OnStartedUsingGpuDecode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStartedUsingGpuDecode (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: OnStopped
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStopped (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnCaptureConfigurationChanged_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onCaptureConfigurationChanged');
          const result = this.impl.onCaptureConfigurationChanged();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewBuffer_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onNewBuffer');
          const result = this.impl.onNewBuffer(params.buffer_id, params.buffer_handle);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameAccessHandlerReady_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onFrameAccessHandlerReady');
          const result = this.impl.onFrameAccessHandlerReady(params.frame_access_handler);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameReadyInBuffer_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onFrameReadyInBuffer');
          const result = this.impl.onFrameReadyInBuffer(params.buffer);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnBufferRetired_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onBufferRetired');
          const result = this.impl.onBufferRetired(params.buffer_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnError_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameDropped_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onFrameDropped');
          const result = this.impl.onFrameDropped(params.reason);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnNewCaptureVersion_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onNewCaptureVersion');
          const result = this.impl.onNewCaptureVersion(params.capture_version);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnFrameWithEmptyRegionCapture_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onFrameWithEmptyRegionCapture');
          const result = this.impl.onFrameWithEmptyRegionCapture();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnLog_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onLog');
          const result = this.impl.onLog(params.message);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStarted_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onStarted');
          const result = this.impl.onStarted();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStartedUsingGpuDecode_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onStartedUsingGpuDecode');
          const result = this.impl.onStartedUsingGpuDecode();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoFrameHandler_OnStopped_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.onStopped');
          const result = this.impl.onStopped();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.VideoFrameHandlerReceiver = video_capture.mojom.VideoFrameHandlerReceiver;

video_capture.mojom.VideoFrameHandlerPtr = video_capture.mojom.VideoFrameHandlerRemote;
video_capture.mojom.VideoFrameHandlerRequest = video_capture.mojom.VideoFrameHandlerPendingReceiver;

