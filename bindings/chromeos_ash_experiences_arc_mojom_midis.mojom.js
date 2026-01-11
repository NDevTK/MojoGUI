// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/midis.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  onDeviceAdded(device) {
    return this.$.onDeviceAdded(device);
  }
  onDeviceRemoved(device) {
    return this.$.onDeviceRemoved(device);
  }
};

arc.mojom.MidisClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MidisClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onDeviceAdded(device) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec,
      null,
      [device],
      false);
  }

  onDeviceRemoved(device) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MidisClient', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MidisClient_OnDeviceAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceAdded(params.device);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MidisClient_OnDeviceRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceRemoved(params.device);
          break;
        }
      }
      } catch (err) {}
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
  listDevices() {
    return this.$.listDevices();
  }
  requestPort(request) {
    return this.$.requestPort(request);
  }
  closeDevice(request) {
    return this.$.closeDevice(request);
  }
};

arc.mojom.MidisServerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MidisServer', [
      { explicit: 0 },
      { explicit: 3 },
      { explicit: 2 },
    ]);
  }

  listDevices() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.MidisServer_ListDevices_ParamsSpec,
      arc.mojom.MidisServer_ListDevices_ResponseParamsSpec,
      [],
      false);
  }

  requestPort(request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.MidisServer_RequestPort_ParamsSpec,
      arc.mojom.MidisServer_RequestPort_ResponseParamsSpec,
      [request],
      false);
  }

  closeDevice(request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MidisServer', [
      { explicit: 0 },
      { explicit: 3 },
      { explicit: 2 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MidisServer_ListDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MidisServer_RequestPort_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MidisServer_CloseDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MidisServer_ListDevices_ParamsSpec.$.structSpec);
          const result = this.impl.listDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.MidisServer_ListDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MidisServer_RequestPort_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MidisServer_CloseDevice_ParamsSpec.$.structSpec);
          const result = this.impl.closeDevice(params.request);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.MidisServerReceiver = arc.mojom.MidisServerReceiver;

arc.mojom.MidisServerPtr = arc.mojom.MidisServerRemote;
arc.mojom.MidisServerRequest = arc.mojom.MidisServerPendingReceiver;


// Interface: MidisHost
mojo.internal.Struct(
    arc.mojom.MidisHost_Connect_ParamsSpec, 'arc.mojom.MidisHost_Connect_Params', [
      mojo.internal.StructField('server', 0, 0, mojo.internal.InterfaceRequest(arc.mojom.MidisServerRemote), null, false, 0, undefined),
      mojo.internal.StructField('client', 8, 0, mojo.internal.InterfaceProxy(arc.mojom.MidisClientRemote), null, false, 0, undefined),
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
  connect(server, client) {
    return this.$.connect(server, client);
  }
};

arc.mojom.MidisHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MidisHost', [
      { explicit: 0 },
    ]);
  }

  connect(server, client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MidisHost', [
      { explicit: 0 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MidisHost_Connect_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MidisHost_Connect_ParamsSpec.$.structSpec);
          const result = this.impl.connect(params.server, params.client);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.MidisHostReceiver = arc.mojom.MidisHostReceiver;

arc.mojom.MidisHostPtr = arc.mojom.MidisHostRemote;
arc.mojom.MidisHostRequest = arc.mojom.MidisHostPendingReceiver;


// Interface: MidisInstance
mojo.internal.Struct(
    arc.mojom.MidisInstance_Init_ParamsSpec, 'arc.mojom.MidisInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.MidisHostRemote), null, false, 0, undefined),
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
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.MidisInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MidisInstance', [
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MidisInstance', [
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.MidisInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.MidisInstance_Init_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    });
  }
};

arc.mojom.MidisInstanceReceiver = arc.mojom.MidisInstanceReceiver;

arc.mojom.MidisInstancePtr = arc.mojom.MidisInstanceRemote;
arc.mojom.MidisInstanceRequest = arc.mojom.MidisInstancePendingReceiver;

