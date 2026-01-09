// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/growth_internals/growth_internals.mojom
// Module: ash.growth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.growth = ash.growth || {};
ash.growth.mojom = ash.growth.mojom || {};


// Interface: PageHandler
ash.growth.mojom.PageHandler = {};

ash.growth.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.growth.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.growth.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.growth.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.growth.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.growth.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCampaignsLogs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec,
      ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec,
      []);
  }

  clearAllEvents() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec,
      null,
      []);
  }

};

ash.growth.mojom.PageHandler.getRemote = function() {
  let remote = new ash.growth.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.growth.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetCampaignsLogs
ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.growth.mojom.PageHandler.GetCampaignsLogs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.growth.mojom.PageHandler.GetCampaignsLogs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'logs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearAllEvents
ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.growth.mojom.PageHandler.ClearAllEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.growth.mojom.PageHandlerPtr = ash.growth.mojom.PageHandlerRemote;
ash.growth.mojom.PageHandlerRequest = ash.growth.mojom.PageHandlerPendingReceiver;

