// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/cdm_factory_daemon.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};


// Enum: CreateCdmStatus
chromeos.cdm.mojom.CreateCdmStatus = {
  kNoMoreInstances: 0,
  kInsufficientGpuResources: 1,
};

// Interface: CdmFactory
chromeos.cdm.mojom.CdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.CdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.CdmFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.CdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.CdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cdm.mojom.CdmFactory.getRemote = function() {
  let remote = new chromeos.cdm.mojom.CdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactory',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cdm.mojom.CdmFactoryPtr = chromeos.cdm.mojom.CdmFactoryRemote;
chromeos.cdm.mojom.CdmFactoryRequest = chromeos.cdm.mojom.CdmFactoryPendingReceiver;


// Interface: CdmFactoryDaemon
chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.CdmFactoryDaemonRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.CdmFactoryDaemon';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.CdmFactoryDaemonRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.CdmFactoryDaemonRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cdm.mojom.CdmFactoryDaemon.getRemote = function() {
  let remote = new chromeos.cdm.mojom.CdmFactoryDaemonRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.CdmFactoryDaemon',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cdm.mojom.CdmFactoryDaemonPtr = chromeos.cdm.mojom.CdmFactoryDaemonRemote;
chromeos.cdm.mojom.CdmFactoryDaemonRequest = chromeos.cdm.mojom.CdmFactoryDaemonPendingReceiver;

