// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_host.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.RendererHost = {};
content.mojom.RendererHost.$interfaceName = 'content.mojom.RendererHost';
content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec = { $: {} };
content.mojom.RendererHost_GetBrowserHistogram_ResponseParamsSpec = { $: {} };
content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec = { $: {} };
content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec = { $: {} };
content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec = { $: {} };
content.mojom.RendererHost_HasGpuProcess_ParamsSpec = { $: {} };
content.mojom.RendererHost_HasGpuProcess_ResponseParamsSpec = { $: {} };

// Interface: RendererHost
mojo.internal.Struct(
    content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec, 'content.mojom.RendererHost_GetBrowserHistogram_Params', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RendererHost_GetBrowserHistogram_ResponseParamsSpec, 'content.mojom.RendererHost_GetBrowserHistogram_ResponseParams', [
      mojo.internal.StructField('histogram_json', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec, 'content.mojom.RendererHost_SuddenTerminationAllowedChanged_Params', [
      mojo.internal.StructField('allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec, 'content.mojom.RendererHost_RecordUserMetricsAction_Params', [
      mojo.internal.StructField('action', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec, 'content.mojom.RendererHost_SetPrivateMemoryFootprint_Params', [
      mojo.internal.StructField('private_memory_footprint_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RendererHost_HasGpuProcess_ParamsSpec, 'content.mojom.RendererHost_HasGpuProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.RendererHost_HasGpuProcess_ResponseParamsSpec, 'content.mojom.RendererHost_HasGpuProcess_ResponseParams', [
      mojo.internal.StructField('has_gpu_process', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.RendererHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RendererHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RendererHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RendererHostPendingReceiver,
      handle);
    this.$ = new content.mojom.RendererHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBrowserHistogram(name) {
    return this.$.getBrowserHistogram(name);
  }
  suddenTerminationAllowedChanged(allowed) {
    return this.$.suddenTerminationAllowedChanged(allowed);
  }
  recordUserMetricsAction(action) {
    return this.$.recordUserMetricsAction(action);
  }
  setPrivateMemoryFootprint(private_memory_footprint_bytes) {
    return this.$.setPrivateMemoryFootprint(private_memory_footprint_bytes);
  }
  hasGpuProcess() {
    return this.$.hasGpuProcess();
  }
};

content.mojom.RendererHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getBrowserHistogram(name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec,
      content.mojom.RendererHost_GetBrowserHistogram_ResponseParamsSpec,
      [name],
      false);
  }

  suddenTerminationAllowedChanged(allowed) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec,
      null,
      [allowed],
      false);
  }

  recordUserMetricsAction(action) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec,
      null,
      [action],
      false);
  }

  setPrivateMemoryFootprint(private_memory_footprint_bytes) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec,
      null,
      [private_memory_footprint_bytes],
      false);
  }

  hasGpuProcess() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.RendererHost_HasGpuProcess_ParamsSpec,
      content.mojom.RendererHost_HasGpuProcess_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.RendererHost.getRemote = function() {
  let remote = new content.mojom.RendererHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RendererHost',
    'context');
  return remote.$;
};

content.mojom.RendererHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RendererHost', [
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
             decoder.decodeStructInline(content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererHost_HasGpuProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec.$.structSpec);
          const result = this.impl.getBrowserHistogram(params.name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RendererHost_GetBrowserHistogram_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec.$.structSpec);
          const result = this.impl.suddenTerminationAllowedChanged(params.allowed);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec.$.structSpec);
          const result = this.impl.recordUserMetricsAction(params.action);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec.$.structSpec);
          const result = this.impl.setPrivateMemoryFootprint(params.private_memory_footprint_bytes);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererHost_HasGpuProcess_ParamsSpec.$.structSpec);
          const result = this.impl.hasGpuProcess();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.RendererHost_HasGpuProcess_ResponseParamsSpec);
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

content.mojom.RendererHostReceiver = content.mojom.RendererHostReceiver;

content.mojom.RendererHostPtr = content.mojom.RendererHostRemote;
content.mojom.RendererHostRequest = content.mojom.RendererHostPendingReceiver;

