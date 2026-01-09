// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_service_manager.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Interface: DisconnectReason
chromeos.cfm.mojom.DisconnectReasonPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.DisconnectReasonRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.DisconnectReason';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.DisconnectReasonPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.DisconnectReasonRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.DisconnectReasonRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cfm.mojom.DisconnectReason.getRemote = function() {
  let remote = new chromeos.cfm.mojom.DisconnectReasonRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.DisconnectReason',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cfm.mojom.DisconnectReasonPtr = chromeos.cfm.mojom.DisconnectReasonRemote;
chromeos.cfm.mojom.DisconnectReasonRequest = chromeos.cfm.mojom.DisconnectReasonPendingReceiver;


// Interface: CfmServiceContext
chromeos.cfm.mojom.CfmServiceContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.CfmServiceContextRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.CfmServiceContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.CfmServiceContextPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.CfmServiceContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.CfmServiceContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cfm.mojom.CfmServiceContext.getRemote = function() {
  let remote = new chromeos.cfm.mojom.CfmServiceContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.CfmServiceContext',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cfm.mojom.CfmServiceContextPtr = chromeos.cfm.mojom.CfmServiceContextRemote;
chromeos.cfm.mojom.CfmServiceContextRequest = chromeos.cfm.mojom.CfmServiceContextPendingReceiver;


// Interface: CfmServiceAdaptor
chromeos.cfm.mojom.CfmServiceAdaptorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.mojom.CfmServiceAdaptorRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.CfmServiceAdaptor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.mojom.CfmServiceAdaptorPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.mojom.CfmServiceAdaptorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.mojom.CfmServiceAdaptorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cfm.mojom.CfmServiceAdaptor.getRemote = function() {
  let remote = new chromeos.cfm.mojom.CfmServiceAdaptorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.CfmServiceAdaptor',
    'context');
  return remote.$;
}};

// Legacy compatibility
chromeos.cfm.mojom.CfmServiceAdaptorPtr = chromeos.cfm.mojom.CfmServiceAdaptorRemote;
chromeos.cfm.mojom.CfmServiceAdaptorRequest = chromeos.cfm.mojom.CfmServiceAdaptorPendingReceiver;

