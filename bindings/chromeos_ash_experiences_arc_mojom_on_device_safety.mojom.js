// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/on_device_safety.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};
var ash = ash || {};
var mojo_base = mojo_base || {};

arc.mojom.GetArcSafetySessionResultSpec = { $: mojo.internal.Enum() };
arc.mojom.OnDeviceSafetyHost = {};
arc.mojom.OnDeviceSafetyHost.$interfaceName = 'arc.mojom.OnDeviceSafetyHost';
arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance = {};
arc.mojom.OnDeviceSafetyInstance.$interfaceName = 'arc.mojom.OnDeviceSafetyInstance';
arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec = { $: {} };
arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec = { $: {} };

// Enum: GetArcSafetySessionResult
arc.mojom.GetArcSafetySessionResult = {
  kOk: 0,
  kGenericError: 1,
  kSafetyServiceNotFound: 2,
  kBindSafetyServiceError: 3,
  MinVersion: 3,
};

// Interface: OnDeviceSafetyHost
mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec, 'arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParams', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.OnDeviceSafetyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  isCrosSafetyServiceEnabled() {
    return this.$.isCrosSafetyServiceEnabled();
  }
};

arc.mojom.OnDeviceSafetyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OnDeviceSafetyHost', [
      { explicit: 0 },
    ]);
  }

  isCrosSafetyServiceEnabled() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec,
      arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec,
      [],
      false);
  }

};

arc.mojom.OnDeviceSafetyHost.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyHost',
    'context');
  return remote.$;
};

arc.mojom.OnDeviceSafetyHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OnDeviceSafetyHost', [
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
             decoder.decodeStructInline(arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.isCrosSafetyServiceEnabled();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OnDeviceSafetyHost_IsCrosSafetyServiceEnabled_ResponseParamsSpec);
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

arc.mojom.OnDeviceSafetyHostReceiver = arc.mojom.OnDeviceSafetyHostReceiver;

arc.mojom.OnDeviceSafetyHostPtr = arc.mojom.OnDeviceSafetyHostRemote;
arc.mojom.OnDeviceSafetyHostRequest = arc.mojom.OnDeviceSafetyHostPendingReceiver;


// Interface: OnDeviceSafetyInstance
mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_Params', [
      mojo.internal.StructField('session', 0, 0, mojo.internal.InterfaceRequest(ash.cros_safety.mojom.OnDeviceSafetySessionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, arc.mojom.GetArcSafetySessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.OnDeviceSafetyHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec, 'arc.mojom.OnDeviceSafetyInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.OnDeviceSafetyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.OnDeviceSafetyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.OnDeviceSafetyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.OnDeviceSafetyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getArcSafetySession(session) {
    return this.$.getArcSafetySession(session);
  }
  init(host_remote) {
    return this.$.init(host_remote);
  }
};

arc.mojom.OnDeviceSafetyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OnDeviceSafetyInstance', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  getArcSafetySession(session) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec,
      arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec,
      [session],
      false);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec,
      arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.OnDeviceSafetyInstance.getRemote = function() {
  let remote = new arc.mojom.OnDeviceSafetyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.OnDeviceSafetyInstance',
    'context');
  return remote.$;
};

arc.mojom.OnDeviceSafetyInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OnDeviceSafetyInstance', [
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
             decoder.decodeStructInline(arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ParamsSpec.$.structSpec);
          const result = this.impl.getArcSafetySession(params.session);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OnDeviceSafetyInstance_GetArcSafetySession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.OnDeviceSafetyInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.OnDeviceSafetyInstance_Init_ResponseParamsSpec);
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

arc.mojom.OnDeviceSafetyInstanceReceiver = arc.mojom.OnDeviceSafetyInstanceReceiver;

arc.mojom.OnDeviceSafetyInstancePtr = arc.mojom.OnDeviceSafetyInstanceRemote;
arc.mojom.OnDeviceSafetyInstanceRequest = arc.mojom.OnDeviceSafetyInstancePendingReceiver;

