// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/remote_security_key.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};


// Interface: SecurityKeyForwarder
remoting.mojom.SecurityKeyForwarder = {};

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
      [request_data]);
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

// ParamsSpec for OnSecurityKeyRequest
remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SecurityKeyForwarder.OnSecurityKeyRequest_Params',
      packedSize: 16,
      fields: [
        { name: 'request_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.SecurityKeyForwarder_OnSecurityKeyRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SecurityKeyForwarder.OnSecurityKeyRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response_data', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.SecurityKeyForwarderPtr = remoting.mojom.SecurityKeyForwarderRemote;
remoting.mojom.SecurityKeyForwarderRequest = remoting.mojom.SecurityKeyForwarderPendingReceiver;

