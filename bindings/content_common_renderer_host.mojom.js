// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_host.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RendererHost
content.mojom.RendererHost = {};

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

// ParamsSpec for GetBrowserHistogram
content.mojom.RendererHost_GetBrowserHistogram_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererHost.GetBrowserHistogram_Params',
      packedSize: 16,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.RendererHost_GetBrowserHistogram_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererHost.GetBrowserHistogram_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'histogram_json', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SuddenTerminationAllowedChanged
content.mojom.RendererHost_SuddenTerminationAllowedChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererHost.SuddenTerminationAllowedChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'allowed', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RecordUserMetricsAction
content.mojom.RendererHost_RecordUserMetricsAction_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererHost.RecordUserMetricsAction_Params',
      packedSize: 16,
      fields: [
        { name: 'action', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetPrivateMemoryFootprint
content.mojom.RendererHost_SetPrivateMemoryFootprint_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererHost.SetPrivateMemoryFootprint_Params',
      packedSize: 16,
      fields: [
        { name: 'private_memory_footprint_bytes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasGpuProcess
content.mojom.RendererHost_HasGpuProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererHost.HasGpuProcess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.RendererHost_HasGpuProcess_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererHost.HasGpuProcess_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_gpu_process', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.RendererHostPtr = content.mojom.RendererHostRemote;
content.mojom.RendererHostRequest = content.mojom.RendererHostPendingReceiver;

