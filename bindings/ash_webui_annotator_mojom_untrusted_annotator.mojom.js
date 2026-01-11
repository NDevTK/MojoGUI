// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/annotator/mojom/untrusted_annotator.mojom
// Module: ash.annotator.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.annotator = ash.annotator || {};
ash.annotator.mojom = ash.annotator.mojom || {};

ash.annotator.mojom.UntrustedAnnotatorPage = {};
ash.annotator.mojom.UntrustedAnnotatorPage.$interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPage';
ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPageHandler = {};
ash.annotator.mojom.UntrustedAnnotatorPageHandler.$interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPageHandler';
ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec = { $: {} };
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory = {};
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory.$interfaceName = 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory';
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec = { $: {} };

// Interface: UntrustedAnnotatorPage
mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_Clear_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_Undo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_Redo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_Params', [
      mojo.internal.StructField('tool', 0, 0, ash.annotator.mojom.AnnotatorToolSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.annotator.mojom.UntrustedAnnotatorPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.mojom.UntrustedAnnotatorPagePendingReceiver,
      handle);
    this.$ = new ash.annotator.mojom.UntrustedAnnotatorPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  clear() {
    return this.$.clear();
  }
  undo() {
    return this.$.undo();
  }
  redo() {
    return this.$.redo();
  }
  setTool(tool) {
    return this.$.setTool(tool);
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedAnnotatorPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  clear() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec,
      null,
      [],
      false);
  }

  undo() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec,
      null,
      [],
      false);
  }

  redo() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec,
      null,
      [],
      false);
  }

  setTool(tool) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec,
      null,
      [tool],
      false);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPage.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPage',
    'context');
  return remote.$;
};

ash.annotator.mojom.UntrustedAnnotatorPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedAnnotatorPage', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_Clear_ParamsSpec.$.structSpec);
          const result = this.impl.clear();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_Undo_ParamsSpec.$.structSpec);
          const result = this.impl.undo();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_Redo_ParamsSpec.$.structSpec);
          const result = this.impl.redo();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPage_SetTool_ParamsSpec.$.structSpec);
          const result = this.impl.setTool(params.tool);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageReceiver = ash.annotator.mojom.UntrustedAnnotatorPageReceiver;

ash.annotator.mojom.UntrustedAnnotatorPagePtr = ash.annotator.mojom.UntrustedAnnotatorPageRemote;
ash.annotator.mojom.UntrustedAnnotatorPageRequest = ash.annotator.mojom.UntrustedAnnotatorPagePendingReceiver;


// Interface: UntrustedAnnotatorPageHandler
mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_Params', [
      mojo.internal.StructField('undo_available', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('redo_available', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_Params', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.annotator.mojom.UntrustedAnnotatorPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.mojom.UntrustedAnnotatorPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUndoRedoAvailabilityChanged(undo_available, redo_available) {
    return this.$.onUndoRedoAvailabilityChanged(undo_available, redo_available);
  }
  onCanvasInitialized(success) {
    return this.$.onCanvasInitialized(success);
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedAnnotatorPageHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onUndoRedoAvailabilityChanged(undo_available, redo_available) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec,
      null,
      [undo_available, redo_available],
      false);
  }

  onCanvasInitialized(success) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec,
      null,
      [success],
      false);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandler.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPageHandler',
    'context');
  return remote.$;
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedAnnotatorPageHandler', [
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
             decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnUndoRedoAvailabilityChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onUndoRedoAvailabilityChanged(params.undo_available, params.redo_available);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPageHandler_OnCanvasInitialized_ParamsSpec.$.structSpec);
          const result = this.impl.onCanvasInitialized(params.success);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerReceiver = ash.annotator.mojom.UntrustedAnnotatorPageHandlerReceiver;

ash.annotator.mojom.UntrustedAnnotatorPageHandlerPtr = ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote;
ash.annotator.mojom.UntrustedAnnotatorPageHandlerRequest = ash.annotator.mojom.UntrustedAnnotatorPageHandlerPendingReceiver;


// Interface: UntrustedAnnotatorPageHandlerFactory
mojo.internal.Struct(
    ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec, 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.annotator.mojom.UntrustedAnnotatorPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('annotator', 8, 0, mojo.internal.InterfaceProxy(ash.annotator.mojom.UntrustedAnnotatorPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  create(handler, annotator) {
    return this.$.create(handler, annotator);
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedAnnotatorPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  create(handler, annotator) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, annotator],
      false);
  }

};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory.getRemote = function() {
  let remote = new ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory',
    'context');
  return remote.$;
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedAnnotatorPageHandlerFactory', [
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
             decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory_Create_ParamsSpec.$.structSpec);
          const result = this.impl.create(params.handler, params.annotator);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryReceiver = ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryReceiver;

ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPtr = ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRemote;
ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryRequest = ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactoryPendingReceiver;

