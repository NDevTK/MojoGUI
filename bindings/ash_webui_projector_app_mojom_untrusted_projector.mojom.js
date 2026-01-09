// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/mojom/untrusted_projector.mojom
// Module: ash.projector.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.projector = ash.projector || {};
ash.projector.mojom = ash.projector.mojom || {};


// Interface: UntrustedProjectorPageHandler
ash.projector.mojom.UntrustedProjectorPageHandler = {};

ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.projector.mojom.UntrustedProjectorPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNewScreencastPrecondition() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec.$,
      []);
  }

  shouldDownloadSoda() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec.$,
      []);
  }

  installSoda() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec.$,
      []);
  }

  getPendingScreencasts() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec.$,
      []);
  }

  getUserPref(pref) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec.$,
      [pref]);
  }

  setUserPref(pref, value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec.$,
      null,
      [pref, value]);
  }

  openFeedbackDialog() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec.$,
      null,
      []);
  }

  startProjectorSession(storage_dir_name) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec.$,
      [storage_dir_name]);
  }

  sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec.$,
      [url, method, request_body, use_credentials, use_api_key, headers, account_email]);
  }

  getAccounts() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec.$,
      []);
  }

  getVideo(video_file_id, resource_key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec.$,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec.$,
      [video_file_id, resource_key]);
  }

};

ash.projector.mojom.UntrustedProjectorPageHandler.getRemote = function() {
  let remote = new ash.projector.mojom.UntrustedProjectorPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetNewScreencastPrecondition
ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetNewScreencastPrecondition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetNewScreencastPrecondition_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'precondition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldDownloadSoda
ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.ShouldDownloadSoda_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.ShouldDownloadSoda_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_download', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InstallSoda
ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.InstallSoda_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.InstallSoda_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'triggered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetPendingScreencasts
ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetPendingScreencasts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetPendingScreencasts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending_screencasts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUserPref
ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetUserPref_Params',
      packedSize: 16,
      fields: [
        { name: 'pref', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetUserPref_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUserPref
ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.SetUserPref_Params',
      packedSize: 24,
      fields: [
        { name: 'pref', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFeedbackDialog
ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.OpenFeedbackDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartProjectorSession
ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.StartProjectorSession_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_dir_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.StartProjectorSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendXhr
ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.SendXhr_Params',
      packedSize: 64,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'method', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'request_body', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'use_credentials', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'use_api_key', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'headers', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'account_email', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.SendXhr_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAccounts
ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetAccounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetAccounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetVideo
ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetVideo_Params',
      packedSize: 24,
      fields: [
        { name: 'video_file_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'resource_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetVideo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.projector.mojom.UntrustedProjectorPageHandlerPtr = ash.projector.mojom.UntrustedProjectorPageHandlerRemote;
ash.projector.mojom.UntrustedProjectorPageHandlerRequest = ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver;


// Interface: UntrustedProjectorPage
ash.projector.mojom.UntrustedProjectorPage = {};

ash.projector.mojom.UntrustedProjectorPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.mojom.UntrustedProjectorPageRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.mojom.UntrustedProjectorPagePendingReceiver,
      handle);
    this.$ = new ash.projector.mojom.UntrustedProjectorPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.mojom.UntrustedProjectorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewScreencastPreconditionChanged(precondition) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec.$,
      null,
      [precondition]);
  }

  onSodaInstallProgressUpdated(progress) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec.$,
      null,
      [progress]);
  }

  onSodaInstalled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec.$,
      null,
      []);
  }

  onSodaInstallError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec.$,
      null,
      []);
  }

  onScreencastsStateChange(pending_screencasts) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec.$,
      null,
      [pending_screencasts]);
  }

};

ash.projector.mojom.UntrustedProjectorPage.getRemote = function() {
  let remote = new ash.projector.mojom.UntrustedProjectorPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPage',
    'context');
  return remote.$;
};

// ParamsSpec for OnNewScreencastPreconditionChanged
ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnNewScreencastPreconditionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'precondition', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSodaInstallProgressUpdated
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnSodaInstallProgressUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSodaInstalled
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnSodaInstalled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSodaInstallError
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnSodaInstallError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnScreencastsStateChange
ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnScreencastsStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'pending_screencasts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.projector.mojom.UntrustedProjectorPagePtr = ash.projector.mojom.UntrustedProjectorPageRemote;
ash.projector.mojom.UntrustedProjectorPageRequest = ash.projector.mojom.UntrustedProjectorPagePendingReceiver;


// Interface: UntrustedProjectorPageHandlerFactory
ash.projector.mojom.UntrustedProjectorPageHandlerFactory = {};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec.$,
      null,
      [handler, page]);
  }

};

ash.projector.mojom.UntrustedProjectorPageHandlerFactory.getRemote = function() {
  let remote = new ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPtr = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote;
ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRequest = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver;

