// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/growth_internals/growth_internals.mojom
// Module: ash.growth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.growth = ash.growth || {};
ash.growth.growth.mojom = ash.growth.growth.mojom || {};


// Interface: PageHandler
ash.growth.growth.mojom.mojom.PageHandler = {};

ash.growth.growth.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.growth.growth.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.growth.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.growth.growth.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.growth.growth.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.growth.growth.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getCampaignsLogs() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.growth.growth.mojom.mojom.PageHandler_GetCampaignsLogs_ParamsSpec,
      ash.growth.growth.mojom.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec,
      []);
  }

  clearAllEvents() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.growth.growth.mojom.mojom.PageHandler_ClearAllEvents_ParamsSpec,
      null,
      []);
  }

};

ash.growth.growth.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.growth.growth.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.growth.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetCampaignsLogs
ash.growth.growth.mojom.mojom.PageHandler_GetCampaignsLogs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.growth.mojom.PageHandler.GetCampaignsLogs_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.growth.growth.mojom.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.growth.mojom.PageHandler.GetCampaignsLogs_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'logs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClearAllEvents
ash.growth.growth.mojom.mojom.PageHandler_ClearAllEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.growth.mojom.PageHandler.ClearAllEvents_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.growth.growth.mojom.mojom.PageHandlerPtr = ash.growth.growth.mojom.mojom.PageHandlerRemote;
ash.growth.growth.mojom.mojom.PageHandlerRequest = ash.growth.growth.mojom.mojom.PageHandlerPendingReceiver;

