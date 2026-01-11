// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/public/mojom/compositing/compositing_mode_watcher.mojom
// Module: viz.mojom

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};

viz.mojom.CompositingModeWatcher = {};
viz.mojom.CompositingModeWatcher.$interfaceName = 'viz.mojom.CompositingModeWatcher';
viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec = { $: {} };
viz.mojom.CompositingModeReporter = {};
viz.mojom.CompositingModeReporter.$interfaceName = 'viz.mojom.CompositingModeReporter';
viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec = { $: {} };

// Interface: CompositingModeWatcher
mojo.internal.Struct(
    viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec, 'viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_Params', [
    ],
    [[0, 8]]);

viz.mojom.CompositingModeWatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositingModeWatcherRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeWatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositingModeWatcherPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositingModeWatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  compositingModeFallbackToSoftware() {
    return this.$.compositingModeFallbackToSoftware();
  }
};

viz.mojom.CompositingModeWatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CompositingModeWatcher', [
      { explicit: null },
    ]);
  }

  compositingModeFallbackToSoftware() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec,
      null,
      [],
      false);
  }

};

viz.mojom.CompositingModeWatcher.getRemote = function() {
  let remote = new viz.mojom.CompositingModeWatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeWatcher',
    'context');
  return remote.$;
};

viz.mojom.CompositingModeWatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CompositingModeWatcher', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositingModeWatcher_CompositingModeFallbackToSoftware_ParamsSpec.$.structSpec);
          const result = this.impl.compositingModeFallbackToSoftware();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.CompositingModeWatcherReceiver = viz.mojom.CompositingModeWatcherReceiver;

viz.mojom.CompositingModeWatcherPtr = viz.mojom.CompositingModeWatcherRemote;
viz.mojom.CompositingModeWatcherRequest = viz.mojom.CompositingModeWatcherPendingReceiver;


// Interface: CompositingModeReporter
mojo.internal.Struct(
    viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec, 'viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_Params', [
      mojo.internal.StructField('watcher', 0, 0, mojo.internal.InterfaceProxy(viz.mojom.CompositingModeWatcherRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

viz.mojom.CompositingModeReporterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

viz.mojom.CompositingModeReporterRemote = class {
  static get $interfaceName() {
    return 'viz.mojom.CompositingModeReporter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      viz.mojom.CompositingModeReporterPendingReceiver,
      handle);
    this.$ = new viz.mojom.CompositingModeReporterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  addCompositingModeWatcher(watcher) {
    return this.$.addCompositingModeWatcher(watcher);
  }
};

viz.mojom.CompositingModeReporterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('CompositingModeReporter', [
      { explicit: null },
    ]);
  }

  addCompositingModeWatcher(watcher) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec,
      null,
      [watcher],
      false);
  }

};

viz.mojom.CompositingModeReporter.getRemote = function() {
  let remote = new viz.mojom.CompositingModeReporterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'viz.mojom.CompositingModeReporter',
    'context');
  return remote.$;
};

viz.mojom.CompositingModeReporterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('CompositingModeReporter', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(viz.mojom.CompositingModeReporter_AddCompositingModeWatcher_ParamsSpec.$.structSpec);
          const result = this.impl.addCompositingModeWatcher(params.watcher);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

viz.mojom.CompositingModeReporterReceiver = viz.mojom.CompositingModeReporterReceiver;

viz.mojom.CompositingModeReporterPtr = viz.mojom.CompositingModeReporterRemote;
viz.mojom.CompositingModeReporterRequest = viz.mojom.CompositingModeReporterPendingReceiver;

