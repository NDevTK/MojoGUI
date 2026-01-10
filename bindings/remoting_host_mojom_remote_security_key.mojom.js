// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_security_key.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'remoting.mojom.SecurityKeyForwarder',
    'context');
  return remote.$;
};

remoting.mojom.SecurityKeyForwarderPtr = remoting.mojom.SecurityKeyForwarderRemote;
remoting.mojom.SecurityKeyForwarderRequest = remoting.mojom.SecurityKeyForwarderPendingReceiver;

