// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_service_manager.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


chromeos.cfm.mojom.kUnknownCode = 0;

chromeos.cfm.mojom.kUnknownMessage = "unknown";

chromeos.cfm.mojom.kServiceUnavailableCode = 1;

chromeos.cfm.mojom.kServiceUnavailableMessage = "Hotline Disabled";

chromeos.cfm.mojom.kFinchDisabledCode = 2;

chromeos.cfm.mojom.kFinchDisabledMessage = "Finch Disabled";

// Interface: DisconnectReason
chromeos.cfm.mojom.DisconnectReason = {};

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
};

// Legacy compatibility
chromeos.cfm.mojom.DisconnectReasonPtr = chromeos.cfm.mojom.DisconnectReasonRemote;
chromeos.cfm.mojom.DisconnectReasonRequest = chromeos.cfm.mojom.DisconnectReasonPendingReceiver;


// Interface: CfmServiceContext
chromeos.cfm.mojom.CfmServiceContext = {};

chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'adaptor_remote', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromeos.cfm.mojom.CfmServiceAdaptorRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceContext_RequestBindService_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'receiver_pipe', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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

  provideAdaptor(interface_name, adaptor_remote) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec,
      chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ResponseParamsSpec,
      [interface_name, adaptor_remote]);
  }

  requestBindService(interface_name, receiver_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ParamsSpec,
      chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec,
      [interface_name, receiver_pipe]);
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
};

// ParamsSpec for ProvideAdaptor
chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec = {
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

chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ResponseParamsSpec = {
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
chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ParamsSpec = {
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

chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec = {
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
chromeos.cfm.mojom.CfmServiceContextPtr = chromeos.cfm.mojom.CfmServiceContextRemote;
chromeos.cfm.mojom.CfmServiceContextRequest = chromeos.cfm.mojom.CfmServiceContextPendingReceiver;


// Interface: CfmServiceAdaptor
chromeos.cfm.mojom.CfmServiceAdaptor = {};

chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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

  onBindService(receiver_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec,
      null,
      [receiver_pipe]);
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
};

// ParamsSpec for OnBindService
chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec = {
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
chromeos.cfm.mojom.CfmServiceAdaptorPtr = chromeos.cfm.mojom.CfmServiceAdaptorRemote;
chromeos.cfm.mojom.CfmServiceAdaptorRequest = chromeos.cfm.mojom.CfmServiceAdaptorPendingReceiver;

