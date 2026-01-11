// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/pip.mojom
// Module: arc.mojom

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ArcPipEventSpec = { $: mojo.internal.Enum() };
arc.mojom.PipHost = {};
arc.mojom.PipHost.$interfaceName = 'arc.mojom.PipHost';
arc.mojom.PipHost_OnPipEvent_ParamsSpec = { $: {} };
arc.mojom.PipInstance = {};
arc.mojom.PipInstance.$interfaceName = 'arc.mojom.PipInstance';
arc.mojom.PipInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PipInstance_Init_ResponseParamsSpec = { $: {} };
arc.mojom.PipInstance_ClosePip_ParamsSpec = { $: {} };
arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec = { $: {} };

// Enum: ArcPipEvent
arc.mojom.ArcPipEvent = {
  ENTER: 0,
};

// Interface: PipHost
mojo.internal.Struct(
    arc.mojom.PipHost_OnPipEvent_ParamsSpec, 'arc.mojom.PipHost_OnPipEvent_Params', [
      mojo.internal.StructField('event', 0, 0, arc.mojom.ArcPipEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PipHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PipHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PipHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PipHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PipHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPipEvent(event) {
    return this.$.onPipEvent(event);
  }
};

arc.mojom.PipHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PipHost', [
      { explicit: 0 },
    ]);
  }

  onPipEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PipHost_OnPipEvent_ParamsSpec,
      null,
      [event],
      false);
  }

};

arc.mojom.PipHost.getRemote = function() {
  let remote = new arc.mojom.PipHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PipHost',
    'context');
  return remote.$;
};

arc.mojom.PipHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PipHost', [
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
             decoder.decodeStructInline(arc.mojom.PipHost_OnPipEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PipHost_OnPipEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onPipEvent(params.event);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.PipHostReceiver = arc.mojom.PipHostReceiver;

arc.mojom.PipHostPtr = arc.mojom.PipHostRemote;
arc.mojom.PipHostRequest = arc.mojom.PipHostPendingReceiver;


// Interface: PipInstance
mojo.internal.Struct(
    arc.mojom.PipInstance_Init_ParamsSpec, 'arc.mojom.PipInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PipHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PipInstance_Init_ResponseParamsSpec, 'arc.mojom.PipInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PipInstance_ClosePip_ParamsSpec, 'arc.mojom.PipInstance_ClosePip_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec, 'arc.mojom.PipInstance_SetPipSuppressionStatus_Params', [
      mojo.internal.StructField('suppressed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PipInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PipInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PipInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PipInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PipInstanceRemoteCallHandler(this.proxy);
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
  closePip() {
    return this.$.closePip();
  }
  setPipSuppressionStatus(suppressed) {
    return this.$.setPipSuppressionStatus(suppressed);
  }
};

arc.mojom.PipInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PipInstance', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PipInstance_Init_ParamsSpec,
      arc.mojom.PipInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

  closePip() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.PipInstance_ClosePip_ParamsSpec,
      null,
      [],
      false);
  }

  setPipSuppressionStatus(suppressed) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec,
      null,
      [suppressed],
      false);
  }

};

arc.mojom.PipInstance.getRemote = function() {
  let remote = new arc.mojom.PipInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PipInstance',
    'context');
  return remote.$;
};

arc.mojom.PipInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PipInstance', [
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
             decoder.decodeStructInline(arc.mojom.PipInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PipInstance_ClosePip_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PipInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PipInstance_Init_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PipInstance_ClosePip_ParamsSpec.$.structSpec);
          const result = this.impl.closePip();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PipInstance_SetPipSuppressionStatus_ParamsSpec.$.structSpec);
          const result = this.impl.setPipSuppressionStatus(params.suppressed);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.PipInstanceReceiver = arc.mojom.PipInstanceReceiver;

arc.mojom.PipInstancePtr = arc.mojom.PipInstanceRemote;
arc.mojom.PipInstanceRequest = arc.mojom.PipInstancePendingReceiver;

