// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/worker/shared_worker_host.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SharedWorkerHost = {};
blink.mojom.SharedWorkerHost.$interfaceName = 'blink.mojom.SharedWorkerHost';
blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec = { $: {} };
blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec = { $: {} };

// Interface: SharedWorkerHost
mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnConnected_Params', [
      mojo.internal.StructField('connection_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnContextClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnReadyForInspection_Params', [
      mojo.internal.StructField('agent', 0, 0, mojo.internal.InterfaceProxy(blink.mojom.DevToolsAgentRemote), null, false, 0, undefined),
      mojo.internal.StructField('agent_host', 8, 0, mojo.internal.InterfaceRequest(blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnScriptLoadFailed_Params', [
      mojo.internal.StructField('error_message', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnReportException_Params', [
      mojo.internal.StructField('details', 0, 0, blink.mojom.SharedWorkerExceptionDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec, 'blink.mojom.SharedWorkerHost_OnFeatureUsed_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.SharedWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.SharedWorkerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.SharedWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.SharedWorkerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.SharedWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onConnected(connection_id) {
    return this.$.onConnected(connection_id);
  }
  onContextClosed() {
    return this.$.onContextClosed();
  }
  onReadyForInspection(agent, agent_host) {
    return this.$.onReadyForInspection(agent, agent_host);
  }
  onScriptLoadFailed(error_message) {
    return this.$.onScriptLoadFailed(error_message);
  }
  onReportException(details) {
    return this.$.onReportException(details);
  }
  onFeatureUsed(feature) {
    return this.$.onFeatureUsed(feature);
  }
};

blink.mojom.SharedWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SharedWorkerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onConnected(connection_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec,
      null,
      [connection_id],
      false);
  }

  onContextClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec,
      null,
      [],
      false);
  }

  onReadyForInspection(agent, agent_host) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec,
      null,
      [agent, agent_host],
      false);
  }

  onScriptLoadFailed(error_message) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec,
      null,
      [error_message],
      false);
  }

  onReportException(details) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec,
      null,
      [details],
      false);
  }

  onFeatureUsed(feature) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec,
      null,
      [feature],
      false);
  }

};

blink.mojom.SharedWorkerHost.getRemote = function() {
  let remote = new blink.mojom.SharedWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.SharedWorkerHost',
    'context');
  return remote.$;
};

blink.mojom.SharedWorkerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SharedWorkerHost', [
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnConnected_ParamsSpec.$.structSpec);
          const result = this.impl.onConnected(params.connection_id);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnContextClosed_ParamsSpec.$.structSpec);
          const result = this.impl.onContextClosed();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnReadyForInspection_ParamsSpec.$.structSpec);
          const result = this.impl.onReadyForInspection(params.agent, params.agent_host);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnScriptLoadFailed_ParamsSpec.$.structSpec);
          const result = this.impl.onScriptLoadFailed(params.error_message);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnReportException_ParamsSpec.$.structSpec);
          const result = this.impl.onReportException(params.details);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.SharedWorkerHost_OnFeatureUsed_ParamsSpec.$.structSpec);
          const result = this.impl.onFeatureUsed(params.feature);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.SharedWorkerHostReceiver = blink.mojom.SharedWorkerHostReceiver;

blink.mojom.SharedWorkerHostPtr = blink.mojom.SharedWorkerHostRemote;
blink.mojom.SharedWorkerHostRequest = blink.mojom.SharedWorkerHostPendingReceiver;

