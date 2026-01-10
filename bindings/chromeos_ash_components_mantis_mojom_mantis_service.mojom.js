// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_service.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};


// Enum: MantisFeatureStatus
mantis.mojom.mojom.MantisFeatureStatus = {
  kARCVMDisabled: 0,
  kAvailable: 1,
};
mantis.mojom.mojom.MantisFeatureStatusSpec = { $: mojo.internal.Enum() };

// Enum: InitializeResult
mantis.mojom.mojom.InitializeResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
};
mantis.mojom.mojom.InitializeResultSpec = { $: mojo.internal.Enum() };

// Interface: PlatformModelProgressObserver
mantis.mojom.mojom.PlatformModelProgressObserver = {};

mantis.mojom.mojom.PlatformModelProgressObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mantis.mojom.mojom.PlatformModelProgressObserverRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.PlatformModelProgressObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mantis.mojom.mojom.PlatformModelProgressObserverPendingReceiver,
      handle);
    this.$ = new mantis.mojom.mojom.PlatformModelProgressObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mantis.mojom.mojom.PlatformModelProgressObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  progress(progress) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mantis.mojom.mojom.PlatformModelProgressObserver_Progress_ParamsSpec,
      null,
      [progress]);
  }

};

mantis.mojom.mojom.PlatformModelProgressObserver.getRemote = function() {
  let remote = new mantis.mojom.mojom.PlatformModelProgressObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.PlatformModelProgressObserver',
    'context');
  return remote.$;
};

// ParamsSpec for Progress
mantis.mojom.mojom.PlatformModelProgressObserver_Progress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.PlatformModelProgressObserver.Progress_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mantis.mojom.mojom.PlatformModelProgressObserverPtr = mantis.mojom.mojom.PlatformModelProgressObserverRemote;
mantis.mojom.mojom.PlatformModelProgressObserverRequest = mantis.mojom.mojom.PlatformModelProgressObserverPendingReceiver;


// Interface: MantisService
mantis.mojom.mojom.MantisService = {};

mantis.mojom.mojom.MantisServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mantis.mojom.mojom.MantisServiceRemote = class {
  static get $interfaceName() {
    return 'mantis.mojom.MantisService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mantis.mojom.mojom.MantisServicePendingReceiver,
      handle);
    this.$ = new mantis.mojom.mojom.MantisServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mantis.mojom.mojom.MantisServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getMantisFeatureStatus() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mantis.mojom.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec,
      mantis.mojom.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec,
      []);
  }

  initialize(progress_observer, processor, dlc_uuid, text_classifier) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mantis.mojom.mojom.MantisService_Initialize_ParamsSpec,
      mantis.mojom.mojom.MantisService_Initialize_ResponseParamsSpec,
      [progress_observer, processor, dlc_uuid, text_classifier]);
  }

};

mantis.mojom.mojom.MantisService.getRemote = function() {
  let remote = new mantis.mojom.mojom.MantisServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mantis.mojom.MantisService',
    'context');
  return remote.$;
};

// ParamsSpec for GetMantisFeatureStatus
mantis.mojom.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisService.GetMantisFeatureStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

mantis.mojom.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisService.GetMantisFeatureStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisFeatureStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Initialize
mantis.mojom.mojom.MantisService_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisService.Initialize_Params',
      packedSize: 40,
      fields: [
        { name: 'progress_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(mantis.mojom.PlatformModelProgressObserverRemote), nullable: true, minVersion: 0 },
        { name: 'processor', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(mantis.mojom.MantisProcessorRemote), nullable: false, minVersion: 0 },
        { name: 'dlc_uuid', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: true, minVersion: 3 },
        { name: 'text_classifier', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.machine_learning.mojom.TextClassifierRemote), nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 24}, {version: 3, packedSize: 32}, {version: 4, packedSize: 40}]
    }
  }
};

mantis.mojom.mojom.MantisService_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisService.Initialize_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.InitializeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mantis.mojom.mojom.MantisServicePtr = mantis.mojom.mojom.MantisServiceRemote;
mantis.mojom.mojom.MantisServiceRequest = mantis.mojom.mojom.MantisServicePendingReceiver;

