// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_security_key.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var mojo_base = mojo_base || {};

remoting.mojom.SecurityKeyForwarder = {};
remoting.mojom.SecurityKeyForwarder.$interfaceName = 'remoting.mojom.SecurityKeyForwarder';
remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec = { $: {} };
remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec = { $: {} };

// Interface: SecurityKeyForwarder
mojo.internal.Struct(
    remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec, 'remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_Params', [
      mojo.internal.StructField('request_data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec, 'remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParams', [
      mojo.internal.StructField('response_data', 0, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.SecurityKeyForwarderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.SecurityKeyForwarderRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.SecurityKeyForwarder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.SecurityKeyForwarderPendingReceiver,
      handle);
    this.$ = new remoting.mojom.SecurityKeyForwarderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

remoting.mojom.SecurityKeyForwarderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSecurityKeyRequest(request_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec,
      remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec,
      [request_data],
      false);
  }

};

remoting.mojom.SecurityKeyForwarder.getRemote = function() {
  let remote = new remoting.mojom.SecurityKeyForwarderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.SecurityKeyForwarder',
    'context');
  return remote.$;
};

remoting.mojom.SecurityKeyForwarderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSecurityKeyRequest(params.request_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

remoting.mojom.SecurityKeyForwarderReceiver = remoting.mojom.SecurityKeyForwarderReceiver;

remoting.mojom.SecurityKeyForwarderPtr = remoting.mojom.SecurityKeyForwarderRemote;
remoting.mojom.SecurityKeyForwarderRequest = remoting.mojom.SecurityKeyForwarderPendingReceiver;

