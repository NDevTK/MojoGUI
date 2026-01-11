// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/usb_host.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var device = device || {};

arc.mojom.UsbHostHost = {};
arc.mojom.UsbHostHost.$interfaceName = 'arc.mojom.UsbHostHost';
arc.mojom.UsbHostHost_OpenDevice_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostHost_RequestPermission_ParamsSpec = { $: {} };
arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostInstance = {};
arc.mojom.UsbHostInstance.$interfaceName = 'arc.mojom.UsbHostInstance';
arc.mojom.UsbHostInstance_Init_ParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec = { $: {} };
arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec = { $: {} };

// Interface: UsbHostHost
mojo.internal.Struct(
    arc.mojom.UsbHostHost_OpenDevice_ParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pkg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec, 'arc.mojom.UsbHostHost_OpenDevice_ResponseParams', [
      mojo.internal.StructField('usb_fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec, 'arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParams', [
      mojo.internal.StructField('device_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('info', 8, 0, device.mojom.UsbDeviceInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_RequestPermission_ParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('pkg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interactive', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec, 'arc.mojom.UsbHostHost_RequestPermission_ResponseParams', [
      mojo.internal.StructField('authorized', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.UsbHostHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  openDevice(guid, pkg_name) {
    return this.$.openDevice(guid, pkg_name);
  }
  getDeviceInfo(guid) {
    return this.$.getDeviceInfo(guid);
  }
  requestPermission(guid, pkg_name, interactive) {
    return this.$.requestPermission(guid, pkg_name, interactive);
  }
};

arc.mojom.UsbHostHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbHostHost', [
      { explicit: 3 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  openDevice(guid, pkg_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.UsbHostHost_OpenDevice_ParamsSpec,
      arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec,
      [guid, pkg_name],
      false);
  }

  getDeviceInfo(guid) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec,
      arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec,
      [guid],
      false);
  }

  requestPermission(guid, pkg_name, interactive) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.UsbHostHost_RequestPermission_ParamsSpec,
      arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec,
      [guid, pkg_name, interactive],
      false);
  }

};

arc.mojom.UsbHostHost.getRemote = function() {
  let remote = new arc.mojom.UsbHostHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostHost',
    'context');
  return remote.$;
};

arc.mojom.UsbHostHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbHostHost', [
      { explicit: 3 },
      { explicit: 1 },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(arc.mojom.UsbHostHost_OpenDevice_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.UsbHostHost_RequestPermission_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.UsbHostHost_OpenDevice_ParamsSpec.$.structSpec);
          const result = this.impl.openDevice(params.guid, params.pkg_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostHost_OpenDevice_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.UsbHostHost_GetDeviceInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getDeviceInfo(params.guid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostHost_GetDeviceInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.UsbHostHost_RequestPermission_ParamsSpec.$.structSpec);
          const result = this.impl.requestPermission(params.guid, params.pkg_name, params.interactive);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostHost_RequestPermission_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.UsbHostHostReceiver = arc.mojom.UsbHostHostReceiver;

arc.mojom.UsbHostHostPtr = arc.mojom.UsbHostHostRemote;
arc.mojom.UsbHostHostRequest = arc.mojom.UsbHostHostPendingReceiver;


// Interface: UsbHostInstance
mojo.internal.Struct(
    arc.mojom.UsbHostInstance_Init_ParamsSpec, 'arc.mojom.UsbHostInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.UsbHostHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_Init_ResponseParamsSpec, 'arc.mojom.UsbHostInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceAdded_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

mojo.internal.Struct(
    arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec, 'arc.mojom.UsbHostInstance_OnDeviceRemoved_Params', [
      mojo.internal.StructField('guid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event_receiver_packages', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 2, undefined),
    ],
    [[0, 16], [2, 24]]);

arc.mojom.UsbHostInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.UsbHostInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.UsbHostInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.UsbHostInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.UsbHostInstanceRemoteCallHandler(this.proxy);
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
  onDeviceAdded(guid, event_receiver_packages) {
    return this.$.onDeviceAdded(guid, event_receiver_packages);
  }
  onDeviceRemoved(guid, event_receiver_packages) {
    return this.$.onDeviceRemoved(guid, event_receiver_packages);
  }
};

arc.mojom.UsbHostInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UsbHostInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.UsbHostInstance_Init_ParamsSpec,
      arc.mojom.UsbHostInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  onDeviceAdded(guid, event_receiver_packages) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec,
      null,
      [guid, event_receiver_packages],
      false);
  }

  onDeviceRemoved(guid, event_receiver_packages) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec,
      null,
      [guid, event_receiver_packages],
      false);
  }

};

arc.mojom.UsbHostInstance.getRemote = function() {
  let remote = new arc.mojom.UsbHostInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.UsbHostInstance',
    'context');
  return remote.$;
};

arc.mojom.UsbHostInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UsbHostInstance', [
      { explicit: 0 },
      { explicit: 1 },
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(arc.mojom.UsbHostInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.UsbHostInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.UsbHostInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.UsbHostInstance_OnDeviceAdded_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceAdded(params.guid, params.event_receiver_packages);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.UsbHostInstance_OnDeviceRemoved_ParamsSpec.$.structSpec);
          const result = this.impl.onDeviceRemoved(params.guid, params.event_receiver_packages);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.UsbHostInstanceReceiver = arc.mojom.UsbHostInstanceReceiver;

arc.mojom.UsbHostInstancePtr = arc.mojom.UsbHostInstanceRemote;
arc.mojom.UsbHostInstanceRequest = arc.mojom.UsbHostInstancePendingReceiver;

