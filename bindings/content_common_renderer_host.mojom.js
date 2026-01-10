// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_host.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.RendererHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBrowserHistogram(name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec,
      content.mojom.RendererHost_GetBrowserHistogram_ResponseParamsSpec,
      [name],
      false);
  }

  suddenTerminationAllowedChanged(allowed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec,
      null,
      [allowed],
      false);
  }

  recordUserMetricsAction(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec,
      null,
      [action],
      false);
  }

  setPrivateMemoryFootprint(private_memory_footprint_bytes) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec,
      null,
      [private_memory_footprint_bytes],
      false);
  }

  hasGpuProcess() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetBrowserHistogram
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBrowserHistogram (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SuddenTerminationAllowedChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SuddenTerminationAllowedChanged (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: RecordUserMetricsAction
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RecordUserMetricsAction (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: SetPrivateMemoryFootprint
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetPrivateMemoryFootprint (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: HasGpuProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content.mojom.RendererHost_HasGpuProcess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasGpuProcess (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBrowserHistogram');
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
          const params = decoder.decodeStruct(content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.suddenTerminationAllowedChanged');
          const result = this.impl.suddenTerminationAllowedChanged(params.allowed);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.recordUserMetricsAction');
          const result = this.impl.recordUserMetricsAction(params.action);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setPrivateMemoryFootprint');
          const result = this.impl.setPrivateMemoryFootprint(params.private_memory_footprint_bytes);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.RendererHost_HasGpuProcess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasGpuProcess');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.RendererHostReceiver = content.mojom.RendererHostReceiver;

content.mojom.RendererHostPtr = content.mojom.RendererHostRemote;
content.mojom.RendererHostRequest = content.mojom.RendererHostPendingReceiver;

