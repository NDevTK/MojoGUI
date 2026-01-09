// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/process_internals/process_internals.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Enum: Type
mojom.Type = {
  kActive: 0,
  kBackForwardCache: 1,
  kPrerender: 2,
};

// Struct: ProcessCountInfo
mojom.ProcessCountInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessCountInfo',
      packedSize: 40,
      fields: [
        { name: 'renderer_process_limit', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'renderer_process_count_total', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'live_renderer_processes_count_total', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'renderer_process_count_for_limit', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SiteInstanceInfo
mojom.SiteInstanceInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.SiteInstanceInfo',
      packedSize: 56,
      fields: [
        { name: 'site_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'process_lock_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'storage_partition', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'site_instance_group_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'browsing_instance_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'locked', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'requires_origin_keyed_process', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_sandbox_for_iframes', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_guest', packedOffset: 36, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'is_pdf', packedOffset: 36, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'are_javascript_optimizers_enabled', packedOffset: 36, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FrameInfo
mojom.FrameInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.FrameInfo',
      packedSize: 56,
      fields: [
        { name: 'site_instance', packedOffset: 0, packedBitOffset: 0, type: mojom.SiteInstanceInfoSpec, nullable: false },
        { name: 'last_committed_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'subframes', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'kActive', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'routing_id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'agent_scheduling_group_id', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'process_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebContentsInfo
mojom.WebContentsInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.WebContentsInfo',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'root_frame', packedOffset: 8, packedBitOffset: 0, type: mojom.FrameInfoSpec, nullable: false },
        { name: 'bfcached_root_frames', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'prerender_root_frames', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: IsolatedOriginInfo
mojom.IsolatedOriginInfoSpec = {
  $: {
    structSpec: {
      name: 'mojom.IsolatedOriginInfo',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: ProcessInternalsHandler
mojom.ProcessInternalsHandler = {};

mojom.ProcessInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ProcessInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.ProcessInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ProcessInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.ProcessInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.ProcessInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getProcessCountInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec,
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec,
      []);
  }

  getIsolationMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec,
      mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec,
      []);
  }

  getProcessPerSiteMode() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec,
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec,
      []);
  }

  getUserTriggeredIsolatedOrigins() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec,
      []);
  }

  getWebTriggeredIsolatedOrigins() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec,
      []);
  }

  getGloballyIsolatedOrigins() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec,
      []);
  }

  getAllWebContentsInfo() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec,
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec,
      []);
  }

};

mojom.ProcessInternalsHandler.getRemote = function() {
  let remote = new mojom.ProcessInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ProcessInternalsHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetProcessCountInfo
mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetProcessCountInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetProcessCountInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojom.ProcessCountInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetIsolationMode
mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetIsolationMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetIsolationMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetProcessPerSiteMode
mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetProcessPerSiteMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetProcessPerSiteMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUserTriggeredIsolatedOrigins
mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetUserTriggeredIsolatedOrigins_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetUserTriggeredIsolatedOrigins_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'isolated_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWebTriggeredIsolatedOrigins
mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetWebTriggeredIsolatedOrigins_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetWebTriggeredIsolatedOrigins_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'isolated_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetGloballyIsolatedOrigins
mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetGloballyIsolatedOrigins_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetGloballyIsolatedOrigins_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'isolated_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAllWebContentsInfo
mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetAllWebContentsInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ProcessInternalsHandler.GetAllWebContentsInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.ProcessInternalsHandlerPtr = mojom.ProcessInternalsHandlerRemote;
mojom.ProcessInternalsHandlerRequest = mojom.ProcessInternalsHandlerPendingReceiver;

