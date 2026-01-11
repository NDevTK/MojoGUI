// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/iio_sensor.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var chromeos = chromeos || {};

arc.mojom.IioSensorHost = {};
arc.mojom.IioSensorHost.$interfaceName = 'arc.mojom.IioSensorHost';
arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec = { $: {} };
arc.mojom.IioSensorInstance = {};
arc.mojom.IioSensorInstance.$interfaceName = 'arc.mojom.IioSensorInstance';
arc.mojom.IioSensorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.IioSensorInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec = { $: {} };

// Interface: IioSensorHost
mojo.internal.Struct(
    arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec, 'arc.mojom.IioSensorHost_RegisterSensorHalClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromeos.sensors.mojom.SensorHalClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.IioSensorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.IioSensorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IioSensorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.IioSensorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.IioSensorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerSensorHalClient(client) {
    return this.$.registerSensorHalClient(client);
  }
};

arc.mojom.IioSensorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IioSensorHost', [
      { explicit: 0 },
    ]);
  }

  registerSensorHalClient(client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec,
      null,
      [client],
      false);
  }

};

arc.mojom.IioSensorHost.getRemote = function() {
  let remote = new arc.mojom.IioSensorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IioSensorHost',
    'context');
  return remote.$;
};

arc.mojom.IioSensorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IioSensorHost', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IioSensorHost_RegisterSensorHalClient_ParamsSpec.$.structSpec);
          const result = this.impl.registerSensorHalClient(params.client);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.IioSensorHostReceiver = arc.mojom.IioSensorHostReceiver;

arc.mojom.IioSensorHostPtr = arc.mojom.IioSensorHostRemote;
arc.mojom.IioSensorHostRequest = arc.mojom.IioSensorHostPendingReceiver;


// Interface: IioSensorInstance
mojo.internal.Struct(
    arc.mojom.IioSensorInstance_Init_ParamsSpec, 'arc.mojom.IioSensorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.IioSensorHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.IioSensorInstance_Init_ResponseParamsSpec, 'arc.mojom.IioSensorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec, 'arc.mojom.IioSensorInstance_OnTabletModeChanged_Params', [
      mojo.internal.StructField('is_tablet_mode_on', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.IioSensorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.IioSensorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.IioSensorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.IioSensorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.IioSensorInstanceRemoteCallHandler(this.proxy);
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
  onTabletModeChanged(is_tablet_mode_on) {
    return this.$.onTabletModeChanged(is_tablet_mode_on);
  }
};

arc.mojom.IioSensorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('IioSensorInstance', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.IioSensorInstance_Init_ParamsSpec,
      arc.mojom.IioSensorInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onTabletModeChanged(is_tablet_mode_on) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec,
      null,
      [is_tablet_mode_on],
      false);
  }

};

arc.mojom.IioSensorInstance.getRemote = function() {
  let remote = new arc.mojom.IioSensorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.IioSensorInstance',
    'context');
  return remote.$;
};

arc.mojom.IioSensorInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('IioSensorInstance', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(arc.mojom.IioSensorInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IioSensorInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.IioSensorInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.IioSensorInstance_OnTabletModeChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onTabletModeChanged(params.is_tablet_mode_on);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.IioSensorInstanceReceiver = arc.mojom.IioSensorInstanceReceiver;

arc.mojom.IioSensorInstancePtr = arc.mojom.IioSensorInstanceRemote;
arc.mojom.IioSensorInstanceRequest = arc.mojom.IioSensorInstancePendingReceiver;

