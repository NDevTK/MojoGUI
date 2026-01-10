// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_service_manager.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.cfm.mojom = chromeos.cfm.cfm.mojom || {};


chromeos.cfm.cfm.mojom.mojom.kUnknownCode = 0;

chromeos.cfm.cfm.mojom.mojom.kUnknownMessage = "unknown";

chromeos.cfm.cfm.mojom.mojom.kServiceUnavailableCode = 1;

chromeos.cfm.cfm.mojom.mojom.kServiceUnavailableMessage = "Hotline Disabled";

chromeos.cfm.cfm.mojom.mojom.kFinchDisabledCode = 2;

chromeos.cfm.cfm.mojom.mojom.kFinchDisabledMessage = "Finch Disabled";

// Interface: DisconnectReason
chromeos.cfm.cfm.mojom.mojom.DisconnectReason = {};

chromeos.cfm.cfm.mojom.mojom.DisconnectReasonPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.DisconnectReasonRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.DisconnectReason';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.DisconnectReasonPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.DisconnectReasonRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.DisconnectReasonRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

chromeos.cfm.cfm.mojom.mojom.DisconnectReason.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.DisconnectReasonRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.DisconnectReason',
    'context');
  return remote.$;
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.DisconnectReasonPtr = chromeos.cfm.cfm.mojom.mojom.DisconnectReasonRemote;
chromeos.cfm.cfm.mojom.mojom.DisconnectReasonRequest = chromeos.cfm.cfm.mojom.mojom.DisconnectReasonPendingReceiver;


// Interface: CfmServiceContext
chromeos.cfm.cfm.mojom.mojom.CfmServiceContext = {};

chromeos.cfm.cfm.mojom.mojom.CfmServiceContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmServiceContextRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.CfmServiceContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.CfmServiceContextPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.CfmServiceContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmServiceContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  provideAdaptor(interface_name, adaptor_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_ProvideAdaptor_ResponseParamsSpec,
      [interface_name, adaptor_remote]);
  }

  requestBindService(interface_name, receiver_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_RequestBindService_ParamsSpec,
      chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec,
      [interface_name, receiver_pipe]);
  }

};

chromeos.cfm.cfm.mojom.mojom.CfmServiceContext.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.CfmServiceContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.CfmServiceContext',
    'context');
  return remote.$;
};

// ParamsSpec for ProvideAdaptor
chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceContext.ProvideAdaptor_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'adaptor_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cfm.mojom.CfmServiceAdaptorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_ProvideAdaptor_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceContext.ProvideAdaptor_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RequestBindService
chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_RequestBindService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceContext.RequestBindService_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceContext.RequestBindService_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.CfmServiceContextPtr = chromeos.cfm.cfm.mojom.mojom.CfmServiceContextRemote;
chromeos.cfm.cfm.mojom.mojom.CfmServiceContextRequest = chromeos.cfm.cfm.mojom.mojom.CfmServiceContextPendingReceiver;


// Interface: CfmServiceAdaptor
chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptor = {};

chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorRemote = class {
  static get $interfaceName() {
    return 'chromeos.cfm.mojom.CfmServiceAdaptor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorPendingReceiver,
      handle);
    this.$ = new chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onBindService(receiver_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec,
      null,
      [receiver_pipe]);
  }

};

chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptor.getRemote = function() {
  let remote = new chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cfm.mojom.CfmServiceAdaptor',
    'context');
  return remote.$;
};

// ParamsSpec for OnBindService
chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceAdaptor.OnBindService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorPtr = chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorRemote;
chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorRequest = chromeos.cfm.cfm.mojom.mojom.CfmServiceAdaptorPendingReceiver;

