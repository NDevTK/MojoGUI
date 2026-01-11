// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/adbd.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AdbdMonitorHost = {};
arc.mojom.AdbdMonitorHost.$interfaceName = 'arc.mojom.AdbdMonitorHost';
arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorInstance = {};
arc.mojom.AdbdMonitorInstance.$interfaceName = 'arc.mojom.AdbdMonitorInstance';
arc.mojom.AdbdMonitorInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: AdbdMonitorHost
mojo.internal.Struct(
    arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec, 'arc.mojom.AdbdMonitorHost_AdbdStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec, 'arc.mojom.AdbdMonitorHost_AdbdStopped_Params', [
    ],
    [[0, 8]]);

arc.mojom.AdbdMonitorHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  adbdStarted() {
    return this.$.adbdStarted();
  }
  adbdStopped() {
    return this.$.adbdStopped();
  }
};

arc.mojom.AdbdMonitorHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AdbdMonitorHost', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  adbdStarted() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec,
      null,
      [],
      false);
  }

  adbdStopped() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec,
      null,
      [],
      false);
  }

};

arc.mojom.AdbdMonitorHost.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorHost',
    'context');
  return remote.$;
};

arc.mojom.AdbdMonitorHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AdbdMonitorHost', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AdbdMonitorHost_AdbdStarted_ParamsSpec.$.structSpec);
          const result = this.impl.adbdStarted();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AdbdMonitorHost_AdbdStopped_ParamsSpec.$.structSpec);
          const result = this.impl.adbdStopped();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.AdbdMonitorHostReceiver = arc.mojom.AdbdMonitorHostReceiver;

arc.mojom.AdbdMonitorHostPtr = arc.mojom.AdbdMonitorHostRemote;
arc.mojom.AdbdMonitorHostRequest = arc.mojom.AdbdMonitorHostPendingReceiver;


// Interface: AdbdMonitorInstance
mojo.internal.Struct(
    arc.mojom.AdbdMonitorInstance_Init_ParamsSpec, 'arc.mojom.AdbdMonitorInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AdbdMonitorHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec, 'arc.mojom.AdbdMonitorInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.AdbdMonitorInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AdbdMonitorInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AdbdMonitorInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AdbdMonitorInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AdbdMonitorInstanceRemoteCallHandler(this.proxy);
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

arc.mojom.AdbdMonitorInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AdbdMonitorInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AdbdMonitorInstance_Init_ParamsSpec,
      arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.AdbdMonitorInstance.getRemote = function() {
  let remote = new arc.mojom.AdbdMonitorInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AdbdMonitorInstance',
    'context');
  return remote.$;
};

arc.mojom.AdbdMonitorInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AdbdMonitorInstance', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AdbdMonitorInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AdbdMonitorInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AdbdMonitorInstance_Init_ResponseParamsSpec);
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

arc.mojom.AdbdMonitorInstanceReceiver = arc.mojom.AdbdMonitorInstanceReceiver;

arc.mojom.AdbdMonitorInstancePtr = arc.mojom.AdbdMonitorInstanceRemote;
arc.mojom.AdbdMonitorInstanceRequest = arc.mojom.AdbdMonitorInstancePendingReceiver;

