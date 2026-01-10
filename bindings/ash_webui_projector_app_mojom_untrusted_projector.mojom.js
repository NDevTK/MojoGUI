// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/mojom/untrusted_projector.mojom
// Module: ash.projector.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.projector = ash.projector || {};
ash.projector.projector.mojom = ash.projector.projector.mojom || {};
var url = url || {};


// Interface: UntrustedProjectorPageHandler
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler = {};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerPendingReceiver,
      handle);
    this.$ = new ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNewScreencastPrecondition() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec,
      []);
  }

  shouldDownloadSoda() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec,
      []);
  }

  installSoda() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec,
      []);
  }

  getPendingScreencasts() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec,
      []);
  }

  getUserPref(pref) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec,
      [pref]);
  }

  setUserPref(pref, value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec,
      null,
      [pref, value]);
  }

  openFeedbackDialog() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec,
      null,
      []);
  }

  startProjectorSession(storage_dir_name) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec,
      [storage_dir_name]);
  }

  sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec,
      [url, method, request_body, use_credentials, use_api_key, headers, account_email]);
  }

  getAccounts() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec,
      []);
  }

  getVideo(video_file_id, resource_key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec,
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec,
      [video_file_id, resource_key]);
  }

};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler.getRemote = function() {
  let remote = new ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetNewScreencastPrecondition
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetNewScreencastPrecondition_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetNewScreencastPrecondition_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'precondition', packedOffset: 0, packedBitOffset: 0, type: ash.projector.mojom.NewScreencastPreconditionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ShouldDownloadSoda
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.ShouldDownloadSoda_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.ShouldDownloadSoda_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_download', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InstallSoda
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.InstallSoda_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.InstallSoda_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'triggered', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetPendingScreencasts
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetPendingScreencasts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetPendingScreencasts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pending_screencasts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.projector.mojom.PendingScreencastSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUserPref
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetUserPref_Params',
      packedSize: 16,
      fields: [
        { name: 'pref', packedOffset: 0, packedBitOffset: 0, type: ash.projector.mojom.PrefsThatProjectorCanAskForSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetUserPref_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetUserPref
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.SetUserPref_Params',
      packedSize: 32,
      fields: [
        { name: 'pref', packedOffset: 16, packedBitOffset: 0, type: ash.projector.mojom.PrefsThatProjectorCanAskForSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OpenFeedbackDialog
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.OpenFeedbackDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for StartProjectorSession
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.StartProjectorSession_Params',
      packedSize: 16,
      fields: [
        { name: 'storage_dir_name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.SafeBaseNameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.StartProjectorSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendXhr
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.SendXhr_Params',
      packedSize: 48,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'method', packedOffset: 32, packedBitOffset: 0, type: ash.projector.mojom.RequestTypeSpec, nullable: false, minVersion: 0 },
        { name: 'request_body', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'use_credentials', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_api_key', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'headers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'account_email', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.SendXhr_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: ash.projector.mojom.XhrResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAccounts
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetAccounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetAccounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'accounts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.projector.mojom.AccountSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetVideo
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetVideo_Params',
      packedSize: 24,
      fields: [
        { name: 'video_file_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'resource_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandler.GetVideo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.projector.mojom.GetVideoResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerPtr = ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerRemote;
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerRequest = ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerPendingReceiver;


// Interface: UntrustedProjectorPage
ash.projector.projector.mojom.mojom.UntrustedProjectorPage = {};

ash.projector.projector.mojom.mojom.UntrustedProjectorPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.projector.mojom.mojom.UntrustedProjectorPagePendingReceiver,
      handle);
    this.$ = new ash.projector.projector.mojom.mojom.UntrustedProjectorPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onNewScreencastPreconditionChanged(precondition) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec,
      null,
      [precondition]);
  }

  onSodaInstallProgressUpdated(progress) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec,
      null,
      [progress]);
  }

  onSodaInstalled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec,
      null,
      []);
  }

  onSodaInstallError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec,
      null,
      []);
  }

  onScreencastsStateChange(pending_screencasts) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec,
      null,
      [pending_screencasts]);
  }

};

ash.projector.projector.mojom.mojom.UntrustedProjectorPage.getRemote = function() {
  let remote = new ash.projector.projector.mojom.mojom.UntrustedProjectorPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPage',
    'context');
  return remote.$;
};

// ParamsSpec for OnNewScreencastPreconditionChanged
ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnNewScreencastPreconditionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'precondition', packedOffset: 0, packedBitOffset: 0, type: ash.projector.mojom.NewScreencastPreconditionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSodaInstallProgressUpdated
ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnSodaInstallProgressUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'progress', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSodaInstalled
ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnSodaInstalled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSodaInstallError
ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnSodaInstallError_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnScreencastsStateChange
ash.projector.projector.mojom.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPage.OnScreencastsStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'pending_screencasts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.projector.mojom.PendingScreencastSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.projector.projector.mojom.mojom.UntrustedProjectorPagePtr = ash.projector.projector.mojom.mojom.UntrustedProjectorPageRemote;
ash.projector.projector.mojom.mojom.UntrustedProjectorPageRequest = ash.projector.projector.mojom.mojom.UntrustedProjectorPagePendingReceiver;


// Interface: UntrustedProjectorPageHandlerFactory
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactory = {};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, page]);
  }

};

ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactory.getRemote = function() {
  let remote = new ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.projector.mojom.UntrustedProjectorPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory.Create_Params',
      packedSize: 16,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryPtr = ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryRemote;
ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryRequest = ash.projector.projector.mojom.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver;

