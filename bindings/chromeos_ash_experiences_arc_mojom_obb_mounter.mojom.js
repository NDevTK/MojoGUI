// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/obb_mounter.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ObbMounterHost = {};
arc.mojom.ObbMounterHost.$interfaceName = 'arc.mojom.ObbMounterHost';
arc.mojom.ObbMounterHost_MountObb_ParamsSpec = { $: {} };
arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec = { $: {} };
arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec = { $: {} };
arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec = { $: {} };
arc.mojom.ObbMounterInstance = {};
arc.mojom.ObbMounterInstance.$interfaceName = 'arc.mojom.ObbMounterInstance';
arc.mojom.ObbMounterInstance_Init_ParamsSpec = { $: {} };
arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: ObbMounterHost
mojo.internal.Struct(
    arc.mojom.ObbMounterHost_MountObb_ParamsSpec, 'arc.mojom.ObbMounterHost_MountObb_Params', [
      mojo.internal.StructField('obb_file', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('target_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('owner_gid', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec, 'arc.mojom.ObbMounterHost_MountObb_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec, 'arc.mojom.ObbMounterHost_UnmountObb_Params', [
      mojo.internal.StructField('target_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec, 'arc.mojom.ObbMounterHost_UnmountObb_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.ObbMounterHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  mountObb(obb_file, target_path, owner_gid) {
    return this.$.mountObb(obb_file, target_path, owner_gid);
  }
  unmountObb(target_path) {
    return this.$.unmountObb(target_path);
  }
};

arc.mojom.ObbMounterHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ObbMounterHost', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  mountObb(obb_file, target_path, owner_gid) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ObbMounterHost_MountObb_ParamsSpec,
      arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec,
      [obb_file, target_path, owner_gid],
      false);
  }

  unmountObb(target_path) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec,
      arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec,
      [target_path],
      false);
  }

};

arc.mojom.ObbMounterHost.getRemote = function() {
  let remote = new arc.mojom.ObbMounterHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterHost',
    'context');
  return remote.$;
};

arc.mojom.ObbMounterHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ObbMounterHost', [
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
             decoder.decodeStructInline(arc.mojom.ObbMounterHost_MountObb_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ObbMounterHost_MountObb_ParamsSpec.$.structSpec);
          const result = this.impl.mountObb(params.obb_file, params.target_path, params.owner_gid);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ObbMounterHost_MountObb_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ObbMounterHost_UnmountObb_ParamsSpec.$.structSpec);
          const result = this.impl.unmountObb(params.target_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ObbMounterHost_UnmountObb_ResponseParamsSpec);
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

arc.mojom.ObbMounterHostReceiver = arc.mojom.ObbMounterHostReceiver;

arc.mojom.ObbMounterHostPtr = arc.mojom.ObbMounterHostRemote;
arc.mojom.ObbMounterHostRequest = arc.mojom.ObbMounterHostPendingReceiver;


// Interface: ObbMounterInstance
mojo.internal.Struct(
    arc.mojom.ObbMounterInstance_Init_ParamsSpec, 'arc.mojom.ObbMounterInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.ObbMounterHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec, 'arc.mojom.ObbMounterInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.ObbMounterInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.ObbMounterInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.ObbMounterInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.ObbMounterInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.ObbMounterInstanceRemoteCallHandler(this.proxy);
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

arc.mojom.ObbMounterInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ObbMounterInstance', [
      { explicit: 1 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.ObbMounterInstance_Init_ParamsSpec,
      arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.ObbMounterInstance.getRemote = function() {
  let remote = new arc.mojom.ObbMounterInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.ObbMounterInstance',
    'context');
  return remote.$;
};

arc.mojom.ObbMounterInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ObbMounterInstance', [
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
             decoder.decodeStructInline(arc.mojom.ObbMounterInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.ObbMounterInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.ObbMounterInstance_Init_ResponseParamsSpec);
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

arc.mojom.ObbMounterInstanceReceiver = arc.mojom.ObbMounterInstanceReceiver;

arc.mojom.ObbMounterInstancePtr = arc.mojom.ObbMounterInstanceRemote;
arc.mojom.ObbMounterInstanceRequest = arc.mojom.ObbMounterInstancePendingReceiver;

