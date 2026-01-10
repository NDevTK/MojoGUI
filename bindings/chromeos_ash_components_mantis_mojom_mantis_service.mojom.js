// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_service.mojom
// Module: mantis.mojom

'use strict';

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
};

mantis.mojom.PlatformModelProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  progress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
          const params = mantis.mojom.PlatformModelProgressObserver_Progress_ParamsSpec.$.decode(message.payload);
          const result = this.impl.progress(params.progress);
          break;
        }
      }
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
      mojo.internal.StructField('progress_observer', 0, 0, mojo.internal.InterfaceProxy(mantis.mojom.PlatformModelProgressObserverSpec), null, true, 0, undefined),
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
};

mantis.mojom.MantisServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMantisFeatureStatus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec,
      mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec,
      [],
      false);
  }

  initialize(progress_observer, processor, dlc_uuid, text_classifier) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        case 1: {
          const params = mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMantisFeatureStatus();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 0: {
          const params = mantis.mojom.MantisService_Initialize_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

mantis.mojom.MantisServiceReceiver = mantis.mojom.MantisServiceReceiver;

mantis.mojom.MantisServicePtr = mantis.mojom.MantisServiceRemote;
mantis.mojom.MantisServiceRequest = mantis.mojom.MantisServicePendingReceiver;

