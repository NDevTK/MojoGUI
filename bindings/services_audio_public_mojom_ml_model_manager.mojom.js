// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/ml_model_manager.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

audio.mojom.MlModelManager = {};
audio.mojom.MlModelManager.$interfaceName = 'audio.mojom.MlModelManager';
audio.mojom.MlModelManager_SetResidualEchoEstimationModel_ParamsSpec = { $: {} };
audio.mojom.MlModelManager_StopServingResidualEchoEstimationModel_ParamsSpec = { $: {} };

// Interface: MlModelManager
mojo.internal.Struct(
    audio.mojom.MlModelManager_SetResidualEchoEstimationModel_ParamsSpec, 'audio.mojom.MlModelManager_SetResidualEchoEstimationModel_Params', [
      mojo.internal.StructField('tflite_file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.MlModelManager_StopServingResidualEchoEstimationModel_ParamsSpec, 'audio.mojom.MlModelManager_StopServingResidualEchoEstimationModel_Params', [
    ],
    [[0, 8]]);

audio.mojom.MlModelManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.MlModelManagerRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.MlModelManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.MlModelManagerPendingReceiver,
      handle);
    this.$ = new audio.mojom.MlModelManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.MlModelManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setResidualEchoEstimationModel(tflite_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.MlModelManager_SetResidualEchoEstimationModel_ParamsSpec,
      null,
      [tflite_file],
      false);
  }

  stopServingResidualEchoEstimationModel() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.MlModelManager_StopServingResidualEchoEstimationModel_ParamsSpec,
      null,
      [],
      false);
  }

};

audio.mojom.MlModelManager.getRemote = function() {
  let remote = new audio.mojom.MlModelManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.MlModelManager',
    'context');
  return remote.$;
};

audio.mojom.MlModelManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.MlModelManager_SetResidualEchoEstimationModel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.setResidualEchoEstimationModel');
          const result = this.impl.setResidualEchoEstimationModel(params.tflite_file);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.MlModelManager_StopServingResidualEchoEstimationModel_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.stopServingResidualEchoEstimationModel');
          const result = this.impl.stopServingResidualEchoEstimationModel();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

audio.mojom.MlModelManagerReceiver = audio.mojom.MlModelManagerReceiver;

audio.mojom.MlModelManagerPtr = audio.mojom.MlModelManagerRemote;
audio.mojom.MlModelManagerRequest = audio.mojom.MlModelManagerPendingReceiver;

