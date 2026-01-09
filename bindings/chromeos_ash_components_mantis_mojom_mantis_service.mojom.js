// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/components/mantis/mojom/mantis_service.mojom
// Module: mantis.mojom

'use strict';

// Module namespace
var mantis = mantis || {};
mantis.mojom = mantis.mojom || {};


// Enum: MantisFeatureStatus
mantis.mojom.MantisFeatureStatus = {
  kARCVMDisabled: 0,
  kAvailable: 1,
};
mantis.mojom.MantisFeatureStatusSpec = { $: mojo.internal.Enum() };

// Enum: InitializeResult
mantis.mojom.InitializeResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
};
mantis.mojom.InitializeResultSpec = { $: mojo.internal.Enum() };

// Interface: PlatformModelProgressObserver
mantis.mojom.PlatformModelProgressObserver = {};

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
      [progress]);
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

// ParamsSpec for Progress
mantis.mojom.PlatformModelProgressObserver_Progress_ParamsSpec = {
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
mantis.mojom.PlatformModelProgressObserverPtr = mantis.mojom.PlatformModelProgressObserverRemote;
mantis.mojom.PlatformModelProgressObserverRequest = mantis.mojom.PlatformModelProgressObserverPendingReceiver;


// Interface: MantisService
mantis.mojom.MantisService = {};

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
      []);
  }

  initialize(progress_observer, processor, dlc_uuid, text_classifier) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mantis.mojom.MantisService_Initialize_ParamsSpec,
      mantis.mojom.MantisService_Initialize_ResponseParamsSpec,
      [progress_observer, processor, dlc_uuid, text_classifier]);
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

// ParamsSpec for GetMantisFeatureStatus
mantis.mojom.MantisService_GetMantisFeatureStatus_ParamsSpec = {
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

mantis.mojom.MantisService_GetMantisFeatureStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.MantisFeatureStatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Initialize
mantis.mojom.MantisService_Initialize_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mantis.mojom.MantisService.Initialize_Params',
      packedSize: 32,
      fields: [
        { name: 'progress_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'processor', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'dlc_uuid', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UuidSpec, nullable: true, minVersion: 3 },
        { name: 'text_classifier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 16}, {version: 3, packedSize: 24}, {version: 4, packedSize: 32}]
    }
  }
};

mantis.mojom.MantisService_Initialize_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: '{interface_string}.{method['name']}_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mantis.mojom.InitializeResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mantis.mojom.MantisServicePtr = mantis.mojom.MantisServiceRemote;
mantis.mojom.MantisServiceRequest = mantis.mojom.MantisServicePendingReceiver;

