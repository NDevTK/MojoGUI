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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec.$.decode(message.payload);
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
          const params = content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.suddenTerminationAllowedChanged(params.allowed);
          break;
        }
        case 2: {
          const params = content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordUserMetricsAction(params.action);
          break;
        }
        case 3: {
          const params = content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setPrivateMemoryFootprint(params.private_memory_footprint_bytes);
          break;
        }
        case 4: {
          const params = content.mojom.RendererHost_HasGpuProcess_ParamsSpec.$.decode(message.payload);
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
      }
    }});
  }
};

content.mojom.RendererHostReceiver = content.mojom.RendererHostReceiver;

content.mojom.RendererHostPtr = content.mojom.RendererHostRemote;
content.mojom.RendererHostRequest = content.mojom.RendererHostPendingReceiver;

