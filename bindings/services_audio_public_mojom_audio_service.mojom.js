// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_service.mojom
// Module: audio.mojom

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var media = media || {};
var sandbox = sandbox || {};

audio.mojom.AudioService = {};
audio.mojom.AudioService.$interfaceName = 'audio.mojom.AudioService';
audio.mojom.AudioService_BindSystemInfo_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindDebugRecording_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindStreamFactory_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindTestingApi_ParamsSpec = { $: {} };
audio.mojom.AudioService_BindMlModelManager_ParamsSpec = { $: {} };

// Interface: AudioService
mojo.internal.Struct(
    audio.mojom.AudioService_BindSystemInfo_ParamsSpec, 'audio.mojom.AudioService_BindSystemInfo_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.SystemInfoRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindDebugRecording_ParamsSpec, 'audio.mojom.AudioService_BindDebugRecording_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.DebugRecordingRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindStreamFactory_ParamsSpec, 'audio.mojom.AudioService_BindStreamFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(media.mojom.AudioStreamFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec, 'audio.mojom.AudioService_BindDeviceNotifier_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.DeviceNotifierRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec, 'audio.mojom.AudioService_BindLogFactoryManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.LogFactoryManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindTestingApi_ParamsSpec, 'audio.mojom.AudioService_BindTestingApi_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.TestingApiRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.AudioService_BindMlModelManager_ParamsSpec, 'audio.mojom.AudioService_BindMlModelManager_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(audio.mojom.MlModelManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

audio.mojom.AudioServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.AudioServiceRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.AudioService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.AudioServicePendingReceiver,
      handle);
    this.$ = new audio.mojom.AudioServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindSystemInfo(receiver) {
    return this.$.bindSystemInfo(receiver);
  }
  bindDebugRecording(receiver) {
    return this.$.bindDebugRecording(receiver);
  }
  bindStreamFactory(receiver) {
    return this.$.bindStreamFactory(receiver);
  }
  bindDeviceNotifier(receiver) {
    return this.$.bindDeviceNotifier(receiver);
  }
  bindLogFactoryManager(receiver) {
    return this.$.bindLogFactoryManager(receiver);
  }
  bindTestingApi(receiver) {
    return this.$.bindTestingApi(receiver);
  }
  bindMlModelManager(receiver) {
    return this.$.bindMlModelManager(receiver);
  }
};

audio.mojom.AudioServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AudioService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindSystemInfo(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      audio.mojom.AudioService_BindSystemInfo_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDebugRecording(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      audio.mojom.AudioService_BindDebugRecording_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindStreamFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      audio.mojom.AudioService_BindStreamFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDeviceNotifier(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindLogFactoryManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTestingApi(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      audio.mojom.AudioService_BindTestingApi_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMlModelManager(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      audio.mojom.AudioService_BindMlModelManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

audio.mojom.AudioService.getRemote = function() {
  let remote = new audio.mojom.AudioServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.AudioService',
    'context');
  return remote.$;
};

audio.mojom.AudioServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AudioService', [
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
             decoder.decodeStructInline(audio.mojom.AudioService_BindSystemInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.AudioService_BindDebugRecording_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.AudioService_BindStreamFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.AudioService_BindTestingApi_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.AudioService_BindMlModelManager_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.AudioService_BindSystemInfo_ParamsSpec.$.structSpec);
          const result = this.impl.bindSystemInfo(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.AudioService_BindDebugRecording_ParamsSpec.$.structSpec);
          const result = this.impl.bindDebugRecording(params.receiver);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.AudioService_BindStreamFactory_ParamsSpec.$.structSpec);
          const result = this.impl.bindStreamFactory(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec.$.structSpec);
          const result = this.impl.bindDeviceNotifier(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindLogFactoryManager(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.AudioService_BindTestingApi_ParamsSpec.$.structSpec);
          const result = this.impl.bindTestingApi(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.AudioService_BindMlModelManager_ParamsSpec.$.structSpec);
          const result = this.impl.bindMlModelManager(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

audio.mojom.AudioServiceReceiver = audio.mojom.AudioServiceReceiver;

audio.mojom.AudioServicePtr = audio.mojom.AudioServiceRemote;
audio.mojom.AudioServiceRequest = audio.mojom.AudioServicePendingReceiver;

