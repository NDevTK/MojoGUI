// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_service.mojom
// Module: mantis.mojom

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};
var chromeos = chromeos || {};
var mojo_base = mojo_base || {};

mantis.mojom.MantisFeatureStatusSpec = { $: mojo.internal.Enum() };
mantis.mojom.InitializeResultSpec = { $: mojo.internal.Enum() };
mantis.mojom.PlatformModelProgressObserver = {};
mantis.mojom.PlatformModelProgressObserver.$interfaceName = 'mantis.mojom.PlatformModelProgressObserver';
mantis.mojom.PlatformModelProgressObserver_Progress_ParamsSpec = { $: {} };
mantis.mojom.MantisService = {};
mantis.mojom.MantisService.$interfaceName = 'mantis.mojom.MantisService';
mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec = { $: {} };
mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec = { $: {} };
mantis.mojom.MantisService_Initialize_ParamsSpec = { $: {} };
mantis.mojom.MantisService_Initialize_ResponseParamsSpec = { $: {} };

// Enum: MantisFeatureStatus
mantis.mojom.MantisFeatureStatus = {
  kDeviceNotSupported: 0,
  kARCVMDisabled: 1,
  kAvailable: 2,
};

// Enum: InitializeResult
mantis.mojom.InitializeResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
  kFailedToLoadLibrary: 2,
  MinVersion: 2,
};

// Interface: PlatformModelProgressObserver
mojo.internal.Struct(
    mantis.mojom.PlatformModelProgressObserver_Progress_ParamsSpec, 'mantis.mojom.PlatformModelProgressObserver_Progress_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mantis.mojom.PlatformModelProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mantis.mojom.PlatformModelProgressObserverRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.PlatformModelProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mantis.mojom.PlatformModelProgressObserverPendingReceiver,
      handle);
    this.$ = new mantis.mojom.PlatformModelProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  progress(progress) {
    return this.$.progress(progress);
  }
};

mantis.mojom.PlatformModelProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PlatformModelProgressObserver', [
      { explicit: 0 },
    ]);
  }

  progress(progress) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mantis.mojom.PlatformModelProgressObserver_Progress_ParamsSpec,
      null,
      [progress],
      false);
  }

};

mantis.mojom.PlatformModelProgressObserver.getRemote = function() {
  let remote = new mantis.mojom.PlatformModelProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.PlatformModelProgressObserver',
    'context');
  return remote.$;
};

mantis.mojom.PlatformModelProgressObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PlatformModelProgressObserver', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(mantis.mojom.PlatformModelProgressObserver_Progress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mantis.mojom.PlatformModelProgressObserver_Progress_ParamsSpec.$.structSpec);
          const result = this.impl.progress(params.progress);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

mantis.mojom.PlatformModelProgressObserverReceiver = mantis.mojom.PlatformModelProgressObserverReceiver;

mantis.mojom.PlatformModelProgressObserverPtr = mantis.mojom.PlatformModelProgressObserverRemote;
mantis.mojom.PlatformModelProgressObserverRequest = mantis.mojom.PlatformModelProgressObserverPendingReceiver;


// Interface: MantisService
mojo.internal.Struct(
    mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec, 'mantis.mojom.MantisService_GetMantisFeatureStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec, 'mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, mantis.mojom.MantisFeatureStatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mantis.mojom.MantisService_Initialize_ParamsSpec, 'mantis.mojom.MantisService_Initialize_Params', [
      mojo.internal.StructField('progress_observer', 0, 0, mojo.internal.InterfaceProxy(mantis.mojom.PlatformModelProgressObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('processor', 8, 0, mojo.internal.InterfaceRequest(mantis.mojom.MantisProcessorRemote), null, false, 0, undefined),
      mojo.internal.StructField('dlc_uuid', 16, 0, mojo_base.mojom.UuidSpec.$, null, true, 3, undefined),
      mojo.internal.StructField('text_classifier', 24, 0, mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.TextClassifierRemote), null, true, 4, undefined),
    ],
    [[0, 24], [3, 32], [4, 40]]);

mojo.internal.Struct(
    mantis.mojom.MantisService_Initialize_ResponseParamsSpec, 'mantis.mojom.MantisService_Initialize_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mantis.mojom.InitializeResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mantis.mojom.MantisServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mantis.mojom.MantisServiceRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.MantisService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mantis.mojom.MantisServicePendingReceiver,
      handle);
    this.$ = new mantis.mojom.MantisServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getMantisFeatureStatus() {
    return this.$.getMantisFeatureStatus();
  }
  initialize(progress_observer, processor, dlc_uuid, text_classifier) {
    return this.$.initialize(progress_observer, processor, dlc_uuid, text_classifier);
  }
};

mantis.mojom.MantisServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MantisService', [
      { explicit: 1 },
      { explicit: 0 },
    ]);
  }

  getMantisFeatureStatus() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec,
      mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec,
      [],
      false);
  }

  initialize(progress_observer, processor, dlc_uuid, text_classifier) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mantis.mojom.MantisService_Initialize_ParamsSpec,
      mantis.mojom.MantisService_Initialize_ResponseParamsSpec,
      [progress_observer, processor, dlc_uuid, text_classifier],
      false);
  }

};

mantis.mojom.MantisService.getRemote = function() {
  let remote = new mantis.mojom.MantisServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.MantisService',
    'context');
  return remote.$;
};

mantis.mojom.MantisServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MantisService', [
      { explicit: 1 },
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mantis.mojom.MantisService_Initialize_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec.$.structSpec);
          const result = this.impl.getMantisFeatureStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mantis.mojom.MantisService_Initialize_ParamsSpec.$.structSpec);
          const result = this.impl.initialize(params.progress_observer, params.processor, params.dlc_uuid, params.text_classifier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisService_Initialize_ResponseParamsSpec);
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

mantis.mojom.MantisServiceReceiver = mantis.mojom.MantisServiceReceiver;

mantis.mojom.MantisServicePtr = mantis.mojom.MantisServiceRemote;
mantis.mojom.MantisServiceRequest = mantis.mojom.MantisServicePendingReceiver;

