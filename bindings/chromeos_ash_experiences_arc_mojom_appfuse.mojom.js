// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/appfuse.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AppfuseHost = {};
arc.mojom.AppfuseHost.$interfaceName = 'arc.mojom.AppfuseHost';
arc.mojom.AppfuseHost_Mount_ParamsSpec = { $: {} };
arc.mojom.AppfuseHost_Mount_ResponseParamsSpec = { $: {} };
arc.mojom.AppfuseHost_Unmount_ParamsSpec = { $: {} };
arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec = { $: {} };
arc.mojom.AppfuseHost_OpenFile_ParamsSpec = { $: {} };
arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec = { $: {} };
arc.mojom.AppfuseInstance = {};
arc.mojom.AppfuseInstance.$interfaceName = 'arc.mojom.AppfuseInstance';
arc.mojom.AppfuseInstance_Init_ParamsSpec = { $: {} };
arc.mojom.AppfuseInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: AppfuseHost
mojo.internal.Struct(
    arc.mojom.AppfuseHost_Mount_ParamsSpec, 'arc.mojom.AppfuseHost_Mount_Params', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mount_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_Mount_ResponseParamsSpec, 'arc.mojom.AppfuseHost_Mount_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_Unmount_ParamsSpec, 'arc.mojom.AppfuseHost_Unmount_Params', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mount_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec, 'arc.mojom.AppfuseHost_Unmount_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_OpenFile_ParamsSpec, 'arc.mojom.AppfuseHost_OpenFile_Params', [
      mojo.internal.StructField('uid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('mount_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('file_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('flags', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec, 'arc.mojom.AppfuseHost_OpenFile_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.AppfuseHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppfuseHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppfuseHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppfuseHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.AppfuseHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  mount(uid, mount_id) {
    return this.$.mount(uid, mount_id);
  }
  unmount(uid, mount_id) {
    return this.$.unmount(uid, mount_id);
  }
  openFile(uid, mount_id, file_id, flags) {
    return this.$.openFile(uid, mount_id, file_id, flags);
  }
};

arc.mojom.AppfuseHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppfuseHost', [
      { explicit: 0 },
      { explicit: 1 },
      { explicit: 2 },
    ]);
  }

  mount(uid, mount_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AppfuseHost_Mount_ParamsSpec,
      arc.mojom.AppfuseHost_Mount_ResponseParamsSpec,
      [uid, mount_id],
      false);
  }

  unmount(uid, mount_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.AppfuseHost_Unmount_ParamsSpec,
      arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec,
      [uid, mount_id],
      false);
  }

  openFile(uid, mount_id, file_id, flags) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      arc.mojom.AppfuseHost_OpenFile_ParamsSpec,
      arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec,
      [uid, mount_id, file_id, flags],
      false);
  }

};

arc.mojom.AppfuseHost.getRemote = function() {
  let remote = new arc.mojom.AppfuseHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppfuseHost',
    'context');
  return remote.$;
};

arc.mojom.AppfuseHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppfuseHost', [
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
             decoder.decodeStructInline(arc.mojom.AppfuseHost_Mount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppfuseHost_Unmount_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.AppfuseHost_OpenFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppfuseHost_Mount_ParamsSpec.$.structSpec);
          const result = this.impl.mount(params.uid, params.mount_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppfuseHost_Mount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppfuseHost_Unmount_ParamsSpec.$.structSpec);
          const result = this.impl.unmount(params.uid, params.mount_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppfuseHost_Unmount_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppfuseHost_OpenFile_ParamsSpec.$.structSpec);
          const result = this.impl.openFile(params.uid, params.mount_id, params.file_id, params.flags);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppfuseHost_OpenFile_ResponseParamsSpec);
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

arc.mojom.AppfuseHostReceiver = arc.mojom.AppfuseHostReceiver;

arc.mojom.AppfuseHostPtr = arc.mojom.AppfuseHostRemote;
arc.mojom.AppfuseHostRequest = arc.mojom.AppfuseHostPendingReceiver;


// Interface: AppfuseInstance
mojo.internal.Struct(
    arc.mojom.AppfuseInstance_Init_ParamsSpec, 'arc.mojom.AppfuseInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.AppfuseHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.AppfuseInstance_Init_ResponseParamsSpec, 'arc.mojom.AppfuseInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.AppfuseInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.AppfuseInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.AppfuseInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.AppfuseInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.AppfuseInstanceRemoteCallHandler(this.proxy);
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

arc.mojom.AppfuseInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AppfuseInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.AppfuseInstance_Init_ParamsSpec,
      arc.mojom.AppfuseInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.AppfuseInstance.getRemote = function() {
  let remote = new arc.mojom.AppfuseInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.AppfuseInstance',
    'context');
  return remote.$;
};

arc.mojom.AppfuseInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AppfuseInstance', [
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
             decoder.decodeStructInline(arc.mojom.AppfuseInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.AppfuseInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.AppfuseInstance_Init_ResponseParamsSpec);
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

arc.mojom.AppfuseInstanceReceiver = arc.mojom.AppfuseInstanceReceiver;

arc.mojom.AppfuseInstancePtr = arc.mojom.AppfuseInstanceRemote;
arc.mojom.AppfuseInstanceRequest = arc.mojom.AppfuseInstancePendingReceiver;

