// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/serial/serial.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: SerialService
blink.mojom.SerialService = {};

blink.mojom.SerialServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SerialServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SerialService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SerialServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.SerialServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SerialServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setClient(client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SerialService_SetClient_ParamsSpec,
      null,
      [client]);
  }

  getPorts() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.SerialService_GetPorts_ParamsSpec,
      blink.mojom.SerialService_GetPorts_ResponseParamsSpec,
      []);
  }

  requestPort(filters, allowed_bluetooth_service_class_ids) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.SerialService_RequestPort_ParamsSpec,
      blink.mojom.SerialService_RequestPort_ResponseParamsSpec,
      [filters, allowed_bluetooth_service_class_ids]);
  }

  openPort(token, options, client) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.SerialService_OpenPort_ParamsSpec,
      blink.mojom.SerialService_OpenPort_ResponseParamsSpec,
      [token, options, client]);
  }

  forgetPort(token) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.SerialService_ForgetPort_ParamsSpec,
      null,
      [token]);
  }

};

blink.mojom.SerialService.getRemote = function() {
  let remote = new blink.mojom.SerialServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SerialService',
    'context');
  return remote.$;
};

// ParamsSpec for SetClient
blink.mojom.SerialService_SetClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.SetClient_Params',
      packedSize: 16,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPorts
blink.mojom.SerialService_GetPorts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.GetPorts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SerialService_GetPorts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.GetPorts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ports', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RequestPort
blink.mojom.SerialService_RequestPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.RequestPort_Params',
      packedSize: 24,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'allowed_bluetooth_service_class_ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SerialService_RequestPort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.RequestPort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenPort
blink.mojom.SerialService_OpenPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.OpenPort_Params',
      packedSize: 32,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'client', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

blink.mojom.SerialService_OpenPort_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.OpenPort_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'port', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ForgetPort
blink.mojom.SerialService_ForgetPort_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialService.ForgetPort_Params',
      packedSize: 16,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SerialServicePtr = blink.mojom.SerialServiceRemote;
blink.mojom.SerialServiceRequest = blink.mojom.SerialServicePendingReceiver;


// Interface: SerialServiceClient
blink.mojom.SerialServiceClient = {};

blink.mojom.SerialServiceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SerialServiceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SerialServiceClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SerialServiceClientPendingReceiver,
      handle);
    this.$ = new blink.mojom.SerialServiceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.SerialServiceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPortConnectedStateChanged(port_info) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec,
      null,
      [port_info]);
  }

};

blink.mojom.SerialServiceClient.getRemote = function() {
  let remote = new blink.mojom.SerialServiceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SerialServiceClient',
    'context');
  return remote.$;
};

// ParamsSpec for OnPortConnectedStateChanged
blink.mojom.SerialServiceClient_OnPortConnectedStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SerialServiceClient.OnPortConnectedStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'port_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
blink.mojom.SerialServiceClientPtr = blink.mojom.SerialServiceClientRemote;
blink.mojom.SerialServiceClientRequest = blink.mojom.SerialServiceClientPendingReceiver;

