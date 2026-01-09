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
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec.$,
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec.$,
      []);
  }

  getIsolationMode() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec.$,
      mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec.$,
      []);
  }

  getProcessPerSiteMode() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec.$,
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec.$,
      []);
  }

  getUserTriggeredIsolatedOrigins() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec.$,
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec.$,
      []);
  }

  getWebTriggeredIsolatedOrigins() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec.$,
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec.$,
      []);
  }

  getGloballyIsolatedOrigins() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec.$,
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec.$,
      []);
  }

  getAllWebContentsInfo() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec.$,
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec.$,
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
        { name: 'info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'isolated_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'isolated_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'isolated_origins', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
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
        { name: 'infos', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
mojom.ProcessInternalsHandlerPtr = mojom.ProcessInternalsHandlerRemote;
mojom.ProcessInternalsHandlerRequest = mojom.ProcessInternalsHandlerPendingReceiver;

