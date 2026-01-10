// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/growth_internals/growth_internals.mojom
// Module: ash.growth.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.growth = ash.growth || {};
ash.growth.mojom = ash.growth.mojom || {};

ash.growth.mojom.PageHandler = {};
ash.growth.mojom.PageHandler.$interfaceName = 'ash.growth.mojom.PageHandler';
ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec = { $: {} };
ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec = { $: {} };
ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec = { $: {} };

// Interface: PageHandler
mojo.internal.Struct(
    ash.growth.mojom.PageHandler_GetCampaignsLogs_ParamsSpec, 'ash.growth.mojom.PageHandler_GetCampaignsLogs_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParamsSpec, 'ash.growth.mojom.PageHandler_GetCampaignsLogs_ResponseParams', [
      mojo.internal.StructField('logs', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.growth.mojom.PageHandler_ClearAllEvents_ParamsSpec, 'ash.growth.mojom.PageHandler_ClearAllEvents_Params', [
    ],
    [[0, 8]]);

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

ash.growth.mojom.PageHandlerPtr = ash.growth.mojom.PageHandlerRemote;
ash.growth.mojom.PageHandlerRequest = ash.growth.mojom.PageHandlerPendingReceiver;

