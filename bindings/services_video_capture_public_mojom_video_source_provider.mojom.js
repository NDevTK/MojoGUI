// Auto-generated MojoJS binding
// Source: chromium_src/services/video_capture/public/mojom/video_source_provider.mojom
// Module: video_capture.mojom

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
  getSourceInfos() {
    return this.$.getSourceInfos();
  }
  getVideoSource(source_id, stream) {
    return this.$.getVideoSource(source_id, stream);
  }
  addSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver) {
    return this.$.addSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver);
  }
  addTextureVirtualDevice(device_info, virtual_device_receiver) {
    return this.$.addTextureVirtualDevice(device_info, virtual_device_receiver);
  }
  registerVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present) {
    return this.$.registerVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present);
  }
  registerDevicesChangedObserver(observer) {
    return this.$.registerDevicesChangedObserver(observer);
  }
  close() {
    return this.$.close();
  }
};

video_capture.mojom.VideoSourceProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoSourceProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSourceInfos() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec,
      video_capture.mojom.VideoSourceProvider_GetSourceInfos_ResponseParamsSpec,
      [],
      false);
  }

  getVideoSource(source_id, stream) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec,
      null,
      [source_id, stream],
      false);
  }

  addSharedMemoryVirtualDevice(device_info, producer, virtual_device_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec,
      null,
      [device_info, producer, virtual_device_receiver],
      false);
  }

  addTextureVirtualDevice(device_info, virtual_device_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec,
      null,
      [device_info, virtual_device_receiver],
      false);
  }

  registerVirtualDevicesChangedObserver(observer, raise_event_if_virtual_devices_already_present) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec,
      null,
      [observer, raise_event_if_virtual_devices_already_present],
      false);
  }

  registerDevicesChangedObserver(observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec,
      null,
      [observer],
      false);
  }

  close() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('VideoSourceProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_Close_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetSourceInfos_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_GetVideoSource_ParamsSpec.$.structSpec);
          const result = this.impl.getVideoSource(params.source_id, params.stream);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddSharedMemoryVirtualDevice_ParamsSpec.$.structSpec);
          const result = this.impl.addSharedMemoryVirtualDevice(params.device_info, params.producer, params.virtual_device_receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_AddTextureVirtualDevice_ParamsSpec.$.structSpec);
          const result = this.impl.addTextureVirtualDevice(params.device_info, params.virtual_device_receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterVirtualDevicesChangedObserver_ParamsSpec.$.structSpec);
          const result = this.impl.registerVirtualDevicesChangedObserver(params.observer, params.raise_event_if_virtual_devices_already_present);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_RegisterDevicesChangedObserver_ParamsSpec.$.structSpec);
          const result = this.impl.registerDevicesChangedObserver(params.observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(video_capture.mojom.VideoSourceProvider_Close_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

video_capture.mojom.VideoSourceProviderReceiver = video_capture.mojom.VideoSourceProviderReceiver;

video_capture.mojom.VideoSourceProviderPtr = video_capture.mojom.VideoSourceProviderRemote;
video_capture.mojom.VideoSourceProviderRequest = video_capture.mojom.VideoSourceProviderPendingReceiver;

