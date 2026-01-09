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

// Enum: InitializeResult
mantis.mojom.InitializeResult = {
  kSuccess: 0,
  kGpuBlocked: 1,
};

// Interface: PlatformModelProgressObserver
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

// Legacy compatibility
mantis.mojom.PlatformModelProgressObserverPtr = mantis.mojom.PlatformModelProgressObserverRemote;
mantis.mojom.PlatformModelProgressObserverRequest = mantis.mojom.PlatformModelProgressObserverPendingReceiver;


// Interface: MantisService
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

// Legacy compatibility
mantis.mojom.MantisServicePtr = mantis.mojom.MantisServiceRemote;
mantis.mojom.MantisServiceRequest = mantis.mojom.MantisServicePendingReceiver;

