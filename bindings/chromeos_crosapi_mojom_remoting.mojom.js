// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/remoting.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};


// Interface: Remoting
crosapi.mojom.mojom.Remoting = {};

crosapi.mojom.mojom.RemotingPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

crosapi.mojom.mojom.RemotingRemote = class {
  static get $interfaceName() {
    return 'crosapi.mojom.Remoting';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      crosapi.mojom.mojom.RemotingPendingReceiver,
      handle);
    this.$ = new crosapi.mojom.mojom.RemotingRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

crosapi.mojom.mojom.RemotingRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSupportHostDetails() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      crosapi.mojom.mojom.Remoting_GetSupportHostDetails_ParamsSpec,
      crosapi.mojom.mojom.Remoting_GetSupportHostDetails_ResponseParamsSpec,
      []);
  }

  startSupportSession(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      crosapi.mojom.mojom.Remoting_StartSupportSession_ParamsSpec,
      crosapi.mojom.mojom.Remoting_StartSupportSession_ResponseParamsSpec,
      [params]);
  }

};

crosapi.mojom.mojom.Remoting.getRemote = function() {
  let remote = new crosapi.mojom.mojom.RemotingRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'crosapi.mojom.Remoting',
    'context');
  return remote.$;
};

// ParamsSpec for GetSupportHostDetails
crosapi.mojom.mojom.Remoting_GetSupportHostDetails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Remoting.GetSupportHostDetails_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

crosapi.mojom.mojom.Remoting_GetSupportHostDetails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Remoting.GetSupportHostDetails_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'host_details', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.SupportHostDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartSupportSession
crosapi.mojom.mojom.Remoting_StartSupportSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Remoting.StartSupportSession_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.SupportSessionParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

crosapi.mojom.mojom.Remoting_StartSupportSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.Remoting.StartSupportSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.StartSupportSessionResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
crosapi.mojom.mojom.RemotingPtr = crosapi.mojom.mojom.RemotingRemote;
crosapi.mojom.mojom.RemotingRequest = crosapi.mojom.mojom.RemotingPendingReceiver;

