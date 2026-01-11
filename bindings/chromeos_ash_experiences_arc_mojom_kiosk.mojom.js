// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/kiosk.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.KioskHost = {};
arc.mojom.KioskHost.$interfaceName = 'arc.mojom.KioskHost';
arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec = { $: {} };
arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec = { $: {} };
arc.mojom.KioskInstance = {};
arc.mojom.KioskInstance.$interfaceName = 'arc.mojom.KioskInstance';
arc.mojom.KioskInstance_Init_ParamsSpec = { $: {} };
arc.mojom.KioskInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: KioskHost
mojo.internal.Struct(
    arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec, 'arc.mojom.KioskHost_OnMaintenanceSessionCreated_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec, 'arc.mojom.KioskHost_OnMaintenanceSessionFinished_Params', [
      mojo.internal.StructField('session_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('succeeded', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.KioskHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onMaintenanceSessionCreated(session_id) {
    return this.$.onMaintenanceSessionCreated(session_id);
  }
  onMaintenanceSessionFinished(session_id, succeeded) {
    return this.$.onMaintenanceSessionFinished(session_id, succeeded);
  }
};

arc.mojom.KioskHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KioskHost', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onMaintenanceSessionCreated(session_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec,
      null,
      [session_id],
      false);
  }

  onMaintenanceSessionFinished(session_id, succeeded) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec,
      null,
      [session_id, succeeded],
      false);
  }

};

arc.mojom.KioskHost.getRemote = function() {
  let remote = new arc.mojom.KioskHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskHost',
    'context');
  return remote.$;
};

arc.mojom.KioskHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KioskHost', [
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
             decoder.decodeStructInline(arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KioskHost_OnMaintenanceSessionCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onMaintenanceSessionCreated(params.session_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KioskHost_OnMaintenanceSessionFinished_ParamsSpec.$.structSpec);
          const result = this.impl.onMaintenanceSessionFinished(params.session_id, params.succeeded);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

arc.mojom.KioskHostReceiver = arc.mojom.KioskHostReceiver;

arc.mojom.KioskHostPtr = arc.mojom.KioskHostRemote;
arc.mojom.KioskHostRequest = arc.mojom.KioskHostPendingReceiver;


// Interface: KioskInstance
mojo.internal.Struct(
    arc.mojom.KioskInstance_Init_ParamsSpec, 'arc.mojom.KioskInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.KioskHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.KioskInstance_Init_ResponseParamsSpec, 'arc.mojom.KioskInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.KioskInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.KioskInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.KioskInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.KioskInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.KioskInstanceRemoteCallHandler(this.proxy);
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

arc.mojom.KioskInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('KioskInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.KioskInstance_Init_ParamsSpec,
      arc.mojom.KioskInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.KioskInstance.getRemote = function() {
  let remote = new arc.mojom.KioskInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.KioskInstance',
    'context');
  return remote.$;
};

arc.mojom.KioskInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('KioskInstance', [
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
             decoder.decodeStructInline(arc.mojom.KioskInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.KioskInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.KioskInstance_Init_ResponseParamsSpec);
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

arc.mojom.KioskInstanceReceiver = arc.mojom.KioskInstanceReceiver;

arc.mojom.KioskInstancePtr = arc.mojom.KioskInstanceRemote;
arc.mojom.KioskInstanceRequest = arc.mojom.KioskInstancePendingReceiver;

