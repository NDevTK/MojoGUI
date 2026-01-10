// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source_provider.mojom
// Module: video_capture.mojom

'use strict';

// Module namespace
var video_capture = video_capture || {};
video_capture.mojom = video_capture.mojom || {};
var media = media || {};

video_capture.mojom.GetSourceInfosResultSpec = { $: mojo.internal.Enum() };
video_capture.mojom.VideoSourceProvider = {};
video_capture.mojom.VideoSourceProvider.$interfaceName = 'video_capture.mojom.VideoSourceProvider';
video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_Close_ParamsSpec = { $: {} };
video_capture.mojom.VideoSourceProvider_Close_ResponseParamsSpec = { $: {} };

// Enum: GetSourceInfosResult
video_capture.mojom.GetSourceInfosResult = {
  kSuccess: 0,
  kErrorDroppedRequest: 1,
};

// Interface: VideoSourceProvider
mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_GetSourceInfos_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec, 'video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, video_capture.mojom.GetSourceInfosResultSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source_infos', 8, 0, mojo.internal.Array(media.mojom.VideoCaptureDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_GetVideoSource_Params', [
      mojo.internal.StructField('source_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stream', 8, 0, mojo.internal.InterfaceRequest(video_capture.mojom.VideoSourceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_Params', [
      mojo.internal.StructField('device_info', 0, 0, media.mojom.VideoCaptureDeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('producer', 8, 0, mojo.internal.InterfaceProxy(video_capture.mojom.ProducerRemote), null, false, 0, undefined),
      mojo.internal.StructField('virtual_device_receiver', 16, 0, mojo.internal.InterfaceRequest(video_capture.mojom.SharedMemoryVirtualDeviceRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_Params', [
      mojo.internal.StructField('device_info', 0, 0, media.mojom.VideoCaptureDeviceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('virtual_device_receiver', 8, 0, mojo.internal.InterfaceRequest(video_capture.mojom.TextureVirtualDeviceRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.DevicesChangedObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('raise_event_if_virtual_devices_already_present', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(video_capture.mojom.DevicesChangedObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_Close_ParamsSpec, 'video_capture.mojom.VideoSourceProvider_Close_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    video_capture.mojom.VideoSourceProvider_Close_ResponseParamsSpec, 'video_capture.mojom.VideoSourceProvider_Close_ResponseParams', [
    ],
    [[0, 8]]);

video_capture.mojom.VideoSourceProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

video_capture.mojom.VideoSourceProviderRemote = class {
  static get $interfaceName() {
    return 'video_capture.mojom.VideoSourceProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      video_capture.mojom.VideoSourceProviderPendingReceiver,
      handle);
    this.$ = new video_capture.mojom.VideoSourceProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

video_capture.mojom.VideoSourceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSourceInfos() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec,
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec,
      [],
      false);
  }

  getVideoSource(source_id, stream) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec,
      null,
      [source_id, stream],
      false);
  }

  addSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec,
      null,
      [device_info, producer, virtual_device_receiver],
      false);
  }

  addTextureVirtualDevice(device_info, virtual_device_receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec,
      null,
      [device_info, virtual_device_receiver],
      false);
  }

  registerVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec,
      null,
      [observer, raise_event_if_virtual_devices_already_present],
      false);
  }

  registerDevicesChangedObserver(observer) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  close() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      video_capture.mojom.VideoSourceProvider_Close_ParamsSpec,
      video_capture.mojom.VideoSourceProvider_Close_ResponseParamsSpec,
      [],
      false);
  }

};

video_capture.mojom.VideoSourceProvider.getRemote = function() {
  let remote = new video_capture.mojom.VideoSourceProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'video_capture.mojom.VideoSourceProvider',
    'context');
  return remote.$;
};

video_capture.mojom.VideoSourceProviderReceiver = class {
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
        
        // Try Method 0: GetSourceInfos
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSourceInfos (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetVideoSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetVideoSource (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: AddSharedMemoryVirtualDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddSharedMemoryVirtualDevice (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: AddTextureVirtualDevice
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddTextureVirtualDevice (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: RegisterVirtualDevicesChangedObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterVirtualDevicesChangedObserver (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: RegisterDevicesChangedObserver
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RegisterDevicesChangedObserver (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Close
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_Close_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Close (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getSourceInfos');
          const result = this.impl.getSourceInfos();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.getVideoSource');
          const result = this.impl.getVideoSource(params.source_id, params.stream);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addSharedMemoryVirtualDevice');
          const result = this.impl.addSharedMemoryVirtualDevice(params.device_info, params.producer, params.virtual_device_receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.addTextureVirtualDevice');
          const result = this.impl.addTextureVirtualDevice(params.device_info, params.virtual_device_receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.registerVirtualDevicesChangedObserver');
          const result = this.impl.registerVirtualDevicesChangedObserver(params.observer, params.raise_event_if_virtual_devices_already_present);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.registerDevicesChangedObserver');
          const result = this.impl.registerDevicesChangedObserver(params.observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_Close_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.close');
          const result = this.impl.close();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, video_capture.mojom.VideoSourceProvider_Close_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

video_capture.mojom.VideoSourceProviderReceiver = video_capture.mojom.VideoSourceProviderReceiver;

video_capture.mojom.VideoSourceProviderPtr = video_capture.mojom.VideoSourceProviderRemote;
video_capture.mojom.VideoSourceProviderRequest = video_capture.mojom.VideoSourceProviderPendingReceiver;

