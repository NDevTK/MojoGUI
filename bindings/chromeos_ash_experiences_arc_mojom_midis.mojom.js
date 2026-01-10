// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/midis.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.MidisDeviceInfoSpec = { $: {} };
arc.mojom.MidisRequestSpec = { $: {} };
arc.mojom.MidisClient = {};
arc.mojom.MidisClient.$interfaceName = 'arc.mojom.MidisClient';
arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec = { $: {} };
arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec = { $: {} };
arc.mojom.MidisServer = {};
arc.mojom.MidisServer.$interfaceName = 'arc.mojom.MidisServer';
arc.mojom.MidisServer_ListDevices_ParamsSpec = { $: {} };
arc.mojom.MidisServer_ListDevices_ResponseParamsSpec = { $: {} };
arc.mojom.MidisServer_RequestPort_ParamsSpec = { $: {} };
arc.mojom.MidisServer_RequestPort_ResponseParamsSpec = { $: {} };
arc.mojom.MidisServer_CloseDevice_ParamsSpec = { $: {} };
arc.mojom.MidisHost = {};
arc.mojom.MidisHost.$interfaceName = 'arc.mojom.MidisHost';
arc.mojom.MidisHost_Connect_ParamsSpec = { $: {} };
arc.mojom.MidisInstance = {};
arc.mojom.MidisInstance.$interfaceName = 'arc.mojom.MidisInstance';
arc.mojom.MidisInstance_Init_ParamsSpec = { $: {} };
arc.mojom.MidisInstance_Init_ResponseParamsSpec = { $: {} };

// Struct: MidisDeviceInfo
mojo.internal.Struct(
    arc.mojom.MidisDeviceInfoSpec, 'arc.mojom.MidisDeviceInfo', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('manufacturer', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('card', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('device_num', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('num_subdevices', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: MidisRequest
mojo.internal.Struct(
    arc.mojom.MidisRequestSpec, 'arc.mojom.MidisRequest', [
      mojo.internal.StructField('card', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('device_num', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('subdevice_num', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: MidisClient
mojo.internal.Struct(
    arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec, 'arc.mojom.MidisClient_OnDeviceAdded_Params', [
      mojo.internal.StructField('device', 0, 0, arc.mojom.MidisDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec, 'arc.mojom.MidisClient_OnDeviceRemoved_Params', [
      mojo.internal.StructField('device', 0, 0, arc.mojom.MidisDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.MidisClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisClientRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisClientPendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onDeviceAdded(device) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec,
      null,
      [device],
      false);
  }

  onDeviceRemoved(device) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec,
      null,
      [device],
      false);
  }

};

arc.mojom.MidisClient.getRemote = function() {
  let remote = new arc.mojom.MidisClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisClient',
    'context');
  return remote.$;
};

arc.mojom.MidisClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceAdded(params.device);
          break;
        }
        case 1: {
          const params = arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onDeviceRemoved(params.device);
          break;
        }
      }
    });
  }
};

arc.mojom.MidisClientReceiver = arc.mojom.MidisClientReceiver;

arc.mojom.MidisClientPtr = arc.mojom.MidisClientRemote;
arc.mojom.MidisClientRequest = arc.mojom.MidisClientPendingReceiver;


// Interface: MidisServer
mojo.internal.Struct(
    arc.mojom.MidisServer_ListDevices_ParamsSpec, 'arc.mojom.MidisServer_ListDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.MidisServer_ListDevices_ResponseParamsSpec, 'arc.mojom.MidisServer_ListDevices_ResponseParams', [
      mojo.internal.StructField('devices', 0, 0, mojo.internal.Array(arc.mojom.MidisDeviceInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MidisServer_RequestPort_ParamsSpec, 'arc.mojom.MidisServer_RequestPort_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.MidisRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MidisServer_RequestPort_ResponseParamsSpec, 'arc.mojom.MidisServer_RequestPort_ResponseParams', [
      mojo.internal.StructField('port_handle', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MidisServer_CloseDevice_ParamsSpec, 'arc.mojom.MidisServer_CloseDevice_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.MidisRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.MidisServerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisServerRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisServer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisServerPendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisServerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  listDevices() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MidisServer_ListDevices_ParamsSpec,
      arc.mojom.MidisServer_ListDevices_ResponseParamsSpec,
      [],
      false);
  }

  requestPort(request) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.MidisServer_RequestPort_ParamsSpec,
      arc.mojom.MidisServer_RequestPort_ResponseParamsSpec,
      [request],
      false);
  }

  closeDevice(request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.MidisServer_CloseDevice_ParamsSpec,
      null,
      [request],
      false);
  }

};

arc.mojom.MidisServer.getRemote = function() {
  let remote = new arc.mojom.MidisServerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisServer',
    'context');
  return remote.$;
};

arc.mojom.MidisServerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.MidisServer_ListDevices_ParamsSpec.$.decode(message.payload);
          const result = this.impl.listDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MidisServer_ListDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = arc.mojom.MidisServer_RequestPort_ParamsSpec.$.decode(message.payload);
          const result = this.impl.requestPort(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MidisServer_RequestPort_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = arc.mojom.MidisServer_CloseDevice_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeDevice(params.request);
          break;
        }
      }
    });
  }
};

arc.mojom.MidisServerReceiver = arc.mojom.MidisServerReceiver;

arc.mojom.MidisServerPtr = arc.mojom.MidisServerRemote;
arc.mojom.MidisServerRequest = arc.mojom.MidisServerPendingReceiver;


// Interface: MidisHost
mojo.internal.Struct(
    arc.mojom.MidisHost_Connect_ParamsSpec, 'arc.mojom.MidisHost_Connect_Params', [
      mojo.internal.StructField('server', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.MidisServerSpec), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.MidisClientSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.MidisHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(server, client) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.MidisHost_Connect_ParamsSpec,
      null,
      [server, client],
      false);
  }

};

arc.mojom.MidisHost.getRemote = function() {
  let remote = new arc.mojom.MidisHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisHost',
    'context');
  return remote.$;
};

arc.mojom.MidisHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = arc.mojom.MidisHost_Connect_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connect(params.server, params.client);
          break;
        }
      }
    });
  }
};

arc.mojom.MidisHostReceiver = arc.mojom.MidisHostReceiver;

arc.mojom.MidisHostPtr = arc.mojom.MidisHostRemote;
arc.mojom.MidisHostRequest = arc.mojom.MidisHostPendingReceiver;


// Interface: MidisInstance
mojo.internal.Struct(
    arc.mojom.MidisInstance_Init_ParamsSpec, 'arc.mojom.MidisInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.MidisHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.MidisInstance_Init_ResponseParamsSpec, 'arc.mojom.MidisInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.MidisInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.MidisInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.MidisInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.MidisInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.MidisInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.MidisInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.MidisInstance_Init_ParamsSpec,
      arc.mojom.MidisInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.MidisInstance.getRemote = function() {
  let remote = new arc.mojom.MidisInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.MidisInstance',
    'context');
  return remote.$;
};

arc.mojom.MidisInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 1: {
          const params = arc.mojom.MidisInstance_Init_ParamsSpec.$.decode(message.payload);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MidisInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

arc.mojom.MidisInstanceReceiver = arc.mojom.MidisInstanceReceiver;

arc.mojom.MidisInstancePtr = arc.mojom.MidisInstanceRemote;
arc.mojom.MidisInstanceRequest = arc.mojom.MidisInstancePendingReceiver;

