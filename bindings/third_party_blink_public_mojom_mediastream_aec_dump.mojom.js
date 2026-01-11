// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/mediastream/aec_dump.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};

blink.mojom.AecDumpAgent = {};
blink.mojom.AecDumpAgent.$interfaceName = 'blink.mojom.AecDumpAgent';
blink.mojom.AecDumpAgent_Start_ParamsSpec = { $: {} };
blink.mojom.AecDumpAgent_Stop_ParamsSpec = { $: {} };
blink.mojom.AecDumpManager = {};
blink.mojom.AecDumpManager.$interfaceName = 'blink.mojom.AecDumpManager';
blink.mojom.AecDumpManager_Add_ParamsSpec = { $: {} };

// Interface: AecDumpAgent
mojo.internal.Struct(
    blink.mojom.AecDumpAgent_Start_ParamsSpec, 'blink.mojom.AecDumpAgent_Start_Params', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.AecDumpAgent_Stop_ParamsSpec, 'blink.mojom.AecDumpAgent_Stop_Params', [
    ],
    [[0, 8]]);

blink.mojom.AecDumpAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AecDumpAgentRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AecDumpAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AecDumpAgentPendingReceiver,
      handle);
    this.$ = new blink.mojom.AecDumpAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(file) {
    return this.$.start(file);
  }
  stop() {
    return this.$.stop();
  }
};

blink.mojom.AecDumpAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AecDumpAgent', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  start(file) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AecDumpAgent_Start_ParamsSpec,
      null,
      [file],
      false);
  }

  stop() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.AecDumpAgent_Stop_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.AecDumpAgent.getRemote = function() {
  let remote = new blink.mojom.AecDumpAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AecDumpAgent',
    'context');
  return remote.$;
};

blink.mojom.AecDumpAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AecDumpAgent', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.AecDumpAgent_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.AecDumpAgent_Stop_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AecDumpAgent_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.file);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AecDumpAgent_Stop_ParamsSpec.$.structSpec);
          const result = this.impl.stop();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AecDumpAgentReceiver = blink.mojom.AecDumpAgentReceiver;

blink.mojom.AecDumpAgentPtr = blink.mojom.AecDumpAgentRemote;
blink.mojom.AecDumpAgentRequest = blink.mojom.AecDumpAgentPendingReceiver;


// Interface: AecDumpManager
mojo.internal.Struct(
    blink.mojom.AecDumpManager_Add_ParamsSpec, 'blink.mojom.AecDumpManager_Add_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.AecDumpAgentRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.AecDumpManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.AecDumpManagerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.AecDumpManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.AecDumpManagerPendingReceiver,
      handle);
    this.$ = new blink.mojom.AecDumpManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  add(agent) {
    return this.$.add(agent);
  }
};

blink.mojom.AecDumpManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('AecDumpManager', [
      { explicit: null },
    ]);
  }

  add(agent) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.AecDumpManager_Add_ParamsSpec,
      null,
      [agent],
      false);
  }

};

blink.mojom.AecDumpManager.getRemote = function() {
  let remote = new blink.mojom.AecDumpManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.AecDumpManager',
    'context');
  return remote.$;
};

blink.mojom.AecDumpManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('AecDumpManager', [
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.AecDumpManager_Add_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.AecDumpManager_Add_ParamsSpec.$.structSpec);
          const result = this.impl.add(params.agent);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.AecDumpManagerReceiver = blink.mojom.AecDumpManagerReceiver;

blink.mojom.AecDumpManagerPtr = blink.mojom.AecDumpManagerRemote;
blink.mojom.AecDumpManagerRequest = blink.mojom.AecDumpManagerPendingReceiver;

