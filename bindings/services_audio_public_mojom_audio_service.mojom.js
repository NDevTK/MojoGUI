// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/audio_service.mojom
// Module: audio.mojom

'use strict';

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
};

audio.mojom.AudioServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindSystemInfo(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.AudioService_BindSystemInfo_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDebugRecording(receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.AudioService_BindDebugRecording_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindStreamFactory(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      audio.mojom.AudioService_BindStreamFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindDeviceNotifier(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindLogFactoryManager(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindTestingApi(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      audio.mojom.AudioService_BindTestingApi_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindMlModelManager(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: BindSystemInfo
        try {
             decoder.decodeStruct(audio.mojom.AudioService_BindSystemInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindSystemInfo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: BindDebugRecording
        try {
             decoder.decodeStruct(audio.mojom.AudioService_BindDebugRecording_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindDebugRecording (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: BindStreamFactory
        try {
             decoder.decodeStruct(audio.mojom.AudioService_BindStreamFactory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindStreamFactory (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: BindDeviceNotifier
        try {
             decoder.decodeStruct(audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindDeviceNotifier (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: BindLogFactoryManager
        try {
             decoder.decodeStruct(audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindLogFactoryManager (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: BindTestingApi
        try {
             decoder.decodeStruct(audio.mojom.AudioService_BindTestingApi_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindTestingApi (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: BindMlModelManager
        try {
             decoder.decodeStruct(audio.mojom.AudioService_BindMlModelManager_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindMlModelManager (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.AudioService_BindSystemInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindSystemInfo');
          const result = this.impl.bindSystemInfo(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.AudioService_BindDebugRecording_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindDebugRecording');
          const result = this.impl.bindDebugRecording(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.AudioService_BindStreamFactory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindStreamFactory');
          const result = this.impl.bindStreamFactory(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.AudioService_BindDeviceNotifier_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindDeviceNotifier');
          const result = this.impl.bindDeviceNotifier(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.AudioService_BindLogFactoryManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindLogFactoryManager');
          const result = this.impl.bindLogFactoryManager(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.AudioService_BindTestingApi_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindTestingApi');
          const result = this.impl.bindTestingApi(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.AudioService_BindMlModelManager_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindMlModelManager');
          const result = this.impl.bindMlModelManager(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

audio.mojom.AudioServiceReceiver = audio.mojom.AudioServiceReceiver;

audio.mojom.AudioServicePtr = audio.mojom.AudioServiceRemote;
audio.mojom.AudioServiceRequest = audio.mojom.AudioServicePendingReceiver;

