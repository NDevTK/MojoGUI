// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/print_spooler.mojom
// Module: arc.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.PrintSessionHost = {};
arc.mojom.PrintSessionHost.$interfaceName = 'arc.mojom.PrintSessionHost';
arc.mojom.PrintSessionInstance = {};
arc.mojom.PrintSessionInstance.$interfaceName = 'arc.mojom.PrintSessionInstance';
arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec = { $: {} };
arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec = { $: {} };
arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec = { $: {} };
arc.mojom.PrintSpoolerHost = {};
arc.mojom.PrintSpoolerHost.$interfaceName = 'arc.mojom.PrintSpoolerHost';
arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec = { $: {} };
arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec = { $: {} };
arc.mojom.PrintSpoolerInstance = {};
arc.mojom.PrintSpoolerInstance.$interfaceName = 'arc.mojom.PrintSpoolerInstance';
arc.mojom.PrintSpoolerInstance_Init_ParamsSpec = { $: {} };
arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec = { $: {} };

// Interface: PrintSessionHost
arc.mojom.PrintSessionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSessionHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSessionHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSessionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PrintSessionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintSessionHost', [
    ]);
  }

};

arc.mojom.PrintSessionHost.getRemote = function() {
  let remote = new arc.mojom.PrintSessionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionHost',
    'context');
  return remote.$;
};

arc.mojom.PrintSessionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintSessionHost', [
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
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

arc.mojom.PrintSessionHostReceiver = arc.mojom.PrintSessionHostReceiver;

arc.mojom.PrintSessionHostPtr = arc.mojom.PrintSessionHostRemote;
arc.mojom.PrintSessionHostRequest = arc.mojom.PrintSessionHostPendingReceiver;


// Interface: PrintSessionInstance
mojo.internal.Struct(
    arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec, 'arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec, 'arc.mojom.PrintSessionInstance_CreatePreviewDocument_Params', [
      mojo.internal.StructField('request', 0, 0, arc.mojom.PrintDocumentRequestSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec, 'arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParams', [
      mojo.internal.StructField('data_size', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('preview_document', 8, 0, mojo.internal.Handle, null, true, 0, undefined),
    ],
    [[0, 24]]);

arc.mojom.PrintSessionInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSessionInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSessionInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSessionInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSessionInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPrintPreviewClosed() {
    return this.$.onPrintPreviewClosed();
  }
  createPreviewDocument(request) {
    return this.$.createPreviewDocument(request);
  }
};

arc.mojom.PrintSessionInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintSessionInstance', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  onPrintPreviewClosed() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec,
      null,
      [],
      false);
  }

  createPreviewDocument(request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec,
      arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec,
      [request],
      false);
  }

};

arc.mojom.PrintSessionInstance.getRemote = function() {
  let remote = new arc.mojom.PrintSessionInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSessionInstance',
    'context');
  return remote.$;
};

arc.mojom.PrintSessionInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintSessionInstance', [
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
             decoder.decodeStructInline(arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PrintSessionInstance_OnPrintPreviewClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onPrintPreviewClosed();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PrintSessionInstance_CreatePreviewDocument_ParamsSpec.$.structSpec);
          const result = this.impl.createPreviewDocument(params.request);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PrintSessionInstance_CreatePreviewDocument_ResponseParamsSpec);
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

arc.mojom.PrintSessionInstanceReceiver = arc.mojom.PrintSessionInstanceReceiver;

arc.mojom.PrintSessionInstancePtr = arc.mojom.PrintSessionInstanceRemote;
arc.mojom.PrintSessionInstanceRequest = arc.mojom.PrintSessionInstancePendingReceiver;


// Interface: PrintSpoolerHost
mojo.internal.Struct(
    arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec, 'arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_Params', [
      mojo.internal.StructField('instance', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrintSessionInstanceRemote), null, false, 0, undefined),
      mojo.internal.StructField('scoped_handle', 8, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec, 'arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParams', [
      mojo.internal.StructField('host', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrintSessionHostRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

arc.mojom.PrintSpoolerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSpoolerHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSpoolerHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSpoolerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startPrintInCustomTab(scoped_handle, task_id, instance) {
    return this.$.startPrintInCustomTab(scoped_handle, task_id, instance);
  }
};

arc.mojom.PrintSpoolerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintSpoolerHost', [
      { explicit: 1 },
    ]);
  }

  startPrintInCustomTab(scoped_handle, task_id, instance) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec,
      arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec,
      [scoped_handle, task_id, instance],
      false);
  }

};

arc.mojom.PrintSpoolerHost.getRemote = function() {
  let remote = new arc.mojom.PrintSpoolerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerHost',
    'context');
  return remote.$;
};

arc.mojom.PrintSpoolerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintSpoolerHost', [
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
             decoder.decodeStructInline(arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ParamsSpec.$.structSpec);
          const result = this.impl.startPrintInCustomTab(params.scoped_handle, params.task_id, params.instance);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PrintSpoolerHost_StartPrintInCustomTab_ResponseParamsSpec);
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

arc.mojom.PrintSpoolerHostReceiver = arc.mojom.PrintSpoolerHostReceiver;

arc.mojom.PrintSpoolerHostPtr = arc.mojom.PrintSpoolerHostRemote;
arc.mojom.PrintSpoolerHostRequest = arc.mojom.PrintSpoolerHostPendingReceiver;


// Interface: PrintSpoolerInstance
mojo.internal.Struct(
    arc.mojom.PrintSpoolerInstance_Init_ParamsSpec, 'arc.mojom.PrintSpoolerInstance_Init_Params', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.InterfaceProxy(arc.mojom.PrintSpoolerHostRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec, 'arc.mojom.PrintSpoolerInstance_Init_ResponseParams', [
    ],
    [[0, 8]]);

arc.mojom.PrintSpoolerInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PrintSpoolerInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PrintSpoolerInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PrintSpoolerInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PrintSpoolerInstanceRemoteCallHandler(this.proxy);
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

arc.mojom.PrintSpoolerInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PrintSpoolerInstance', [
      { explicit: 0 },
    ]);
  }

  init(host_remote) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      arc.mojom.PrintSpoolerInstance_Init_ParamsSpec,
      arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec,
      [host_remote],
      false);
  }

};

arc.mojom.PrintSpoolerInstance.getRemote = function() {
  let remote = new arc.mojom.PrintSpoolerInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PrintSpoolerInstance',
    'context');
  return remote.$;
};

arc.mojom.PrintSpoolerInstanceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PrintSpoolerInstance', [
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
             decoder.decodeStructInline(arc.mojom.PrintSpoolerInstance_Init_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(arc.mojom.PrintSpoolerInstance_Init_ParamsSpec.$.structSpec);
          const result = this.impl.init(params.host_remote);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, arc.mojom.PrintSpoolerInstance_Init_ResponseParamsSpec);
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

arc.mojom.PrintSpoolerInstanceReceiver = arc.mojom.PrintSpoolerInstanceReceiver;

arc.mojom.PrintSpoolerInstancePtr = arc.mojom.PrintSpoolerInstanceRemote;
arc.mojom.PrintSpoolerInstanceRequest = arc.mojom.PrintSpoolerInstancePendingReceiver;

