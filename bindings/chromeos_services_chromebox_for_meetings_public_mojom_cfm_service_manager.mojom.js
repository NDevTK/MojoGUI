// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_service_manager.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};

chromeos.cfm.mojom.DisconnectReason = {};
chromeos.cfm.mojom.DisconnectReason.$interfaceName = 'chromeos.cfm.mojom.DisconnectReason';
chromeos.cfm.mojom.CfmServiceContext = {};
chromeos.cfm.mojom.CfmServiceContext.$interfaceName = 'chromeos.cfm.mojom.CfmServiceContext';
chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec = { $: {} };
chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ParamsSpec = { $: {} };
chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec = { $: {} };
chromeos.cfm.mojom.CfmServiceAdaptor = {};
chromeos.cfm.mojom.CfmServiceAdaptor.$interfaceName = 'chromeos.cfm.mojom.CfmServiceAdaptor';
chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec = { $: {} };

chromeos.cfm.mojom.kUnknownCode = 0;

chromeos.cfm.mojom.kUnknownMessage = "unknown";

chromeos.cfm.mojom.kServiceUnavailableCode = 1;

chromeos.cfm.mojom.kServiceUnavailableMessage = "Hotline Disabled";

chromeos.cfm.mojom.kFinchDisabledCode = 2;

chromeos.cfm.mojom.kFinchDisabledMessage = "Finch Disabled";

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
};

chromeos.cfm.mojom.DisconnectReasonReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
      }
    });
  }
};

chromeos.cfm.mojom.DisconnectReasonReceiver = chromeos.cfm.mojom.DisconnectReasonReceiver;

chromeos.cfm.mojom.DisconnectReasonPtr = chromeos.cfm.mojom.DisconnectReasonRemote;
chromeos.cfm.mojom.DisconnectReasonRequest = chromeos.cfm.mojom.DisconnectReasonPendingReceiver;


// Interface: CfmServiceContext
mojo.internal.Struct(
    chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec, 'chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('adaptor_remote', 8, 0, mojo.internal.InterfaceProxy(chromeos.cfm.mojom.CfmServiceAdaptorSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ResponseParamsSpec, 'chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ParamsSpec, 'chromeos.cfm.mojom.CfmServiceContext_RequestBindService_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver_pipe', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec, 'chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [interface_name, adaptor_remote],
      false);
  }

  requestBindService(interface_name, receiver_pipe) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ParamsSpec,
      chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec,
      [interface_name, receiver_pipe],
      false);
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

chromeos.cfm.mojom.CfmServiceContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ParamsSpec.$.decode(message.payload);
          const result = this.impl.provideAdaptor(params.interface_name, params.adaptor_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.CfmServiceContext_ProvideAdaptor_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestBindService(params.interface_name, params.receiver_pipe);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cfm.mojom.CfmServiceContext_RequestBindService_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

chromeos.cfm.mojom.CfmServiceContextReceiver = chromeos.cfm.mojom.CfmServiceContextReceiver;

chromeos.cfm.mojom.CfmServiceContextPtr = chromeos.cfm.mojom.CfmServiceContextRemote;
chromeos.cfm.mojom.CfmServiceContextRequest = chromeos.cfm.mojom.CfmServiceContextPendingReceiver;


// Interface: CfmServiceAdaptor
mojo.internal.Struct(
    chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec, 'chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_Params', [
      mojo.internal.StructField('receiver_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [receiver_pipe],
      false);
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

chromeos.cfm.mojom.CfmServiceAdaptorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.cfm.mojom.CfmServiceAdaptor_OnBindService_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onBindService(params.receiver_pipe);
          break;
        }
      }
    });
  }
};

chromeos.cfm.mojom.CfmServiceAdaptorReceiver = chromeos.cfm.mojom.CfmServiceAdaptorReceiver;

chromeos.cfm.mojom.CfmServiceAdaptorPtr = chromeos.cfm.mojom.CfmServiceAdaptorRemote;
chromeos.cfm.mojom.CfmServiceAdaptorRequest = chromeos.cfm.mojom.CfmServiceAdaptorPendingReceiver;

