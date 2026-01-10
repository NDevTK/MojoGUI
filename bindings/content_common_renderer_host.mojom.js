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
      [name]);
  }

  suddenTerminationAllowedChanged(allowed) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec,
      null,
      [allowed]);
  }

  recordUserMetricsAction(action) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec,
      null,
      [action]);
  }

  setPrivateMemoryFootprint(private_memory_footprint_bytes) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec,
      null,
      [private_memory_footprint_bytes]);
  }

  hasGpuProcess() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.RendererHost_HasGpuProcess_ParamsSpec,
      content.mojom.RendererHost_HasGpuProcess_ResponseParamsSpec,
      []);
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

content.mojom.RendererHostPtr = content.mojom.RendererHostRemote;
content.mojom.RendererHostRequest = content.mojom.RendererHostPendingReceiver;

