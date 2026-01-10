// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/mojom/untrusted_projector.mojom
// Module: ash.projector.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.projector = ash.projector || {};
ash.projector.mojom = ash.projector.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

ash.projector.mojom.UntrustedProjectorPageHandler = {};
ash.projector.mojom.UntrustedProjectorPageHandler.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandler';
ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage = {};
ash.projector.mojom.UntrustedProjectorPage.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPage';
ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec = { $: {} };
ash.projector.mojom.UntrustedProjectorPageHandlerFactory = {};
ash.projector.mojom.UntrustedProjectorPageHandlerFactory.$interfaceName = 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory';
ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec = { $: {} };

// Interface: UntrustedProjectorPageHandler
mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParams', [
      mojo.internal.StructField('precondition', 0, 0, ash.projector.mojom.NewScreencastPreconditionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParams', [
      mojo.internal.StructField('should_download', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParams', [
      mojo.internal.StructField('triggered', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParams', [
      mojo.internal.StructField('pending_screencasts', 0, 0, mojo.internal.Array(ash.projector.mojom.PendingScreencastSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_Params', [
      mojo.internal.StructField('pref', 0, 0, ash.projector.mojom.PrefsThatProjectorCanAskForSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_Params', [
      mojo.internal.StructField('pref', 0, 0, ash.projector.mojom.PrefsThatProjectorCanAskForSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_Params', [
      mojo.internal.StructField('storage_dir_name', 0, 0, mojo_base.mojom.SafeBaseNameSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('method', 8, 0, ash.projector.mojom.RequestTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_body', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('headers', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('account_email', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('use_credentials', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_api_key', 40, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParams', [
      mojo.internal.StructField('response', 0, 0, ash.projector.mojom.XhrResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParams', [
      mojo.internal.StructField('accounts', 0, 0, mojo.internal.Array(ash.projector.mojom.AccountSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_Params', [
      mojo.internal.StructField('video_file_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resource_key', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.projector.mojom.GetVideoResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec,
      [],
      false);
  }

  shouldDownloadSoda() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec,
      [],
      false);
  }

  installSoda() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec,
      [],
      false);
  }

  getPendingScreencasts() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec,
      [],
      false);
  }

  getUserPref(pref) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec,
      [pref],
      false);
  }

  setUserPref(pref, value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec,
      [pref, value],
      false);
  }

  openFeedbackDialog() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  startProjectorSession(storage_dir_name) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec,
      [storage_dir_name],
      false);
  }

  sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec,
      [url, method, request_body, use_credentials, use_api_key, headers, account_email],
      false);
  }

  getAccounts() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec,
      [],
      false);
  }

  getVideo(video_file_id, resource_key) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec,
      [video_file_id, resource_key],
      false);
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

ash.projector.mojom.UntrustedProjectorPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getNewScreencastPrecondition();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec.$.decode(message.payload);
          const result = this.impl.shouldDownloadSoda();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec.$.decode(message.payload);
          const result = this.impl.installSoda();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPendingScreencasts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getUserPref(params.pref);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setUserPref(params.pref, params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.openFeedbackDialog();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec.$.decode(message.payload);
          const result = this.impl.startProjectorSession(params.storage_dir_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendXhr(params.url, params.method, params.request_body, params.use_credentials, params.use_api_key, params.headers, params.account_email);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAccounts();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getVideo(params.video_file_id, params.resource_key);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerReceiver = ash.projector.mojom.UntrustedProjectorPageHandlerReceiver;

ash.projector.mojom.UntrustedProjectorPageHandlerPtr = ash.projector.mojom.UntrustedProjectorPageHandlerRemote;
ash.projector.mojom.UntrustedProjectorPageHandlerRequest = ash.projector.mojom.UntrustedProjectorPageHandlerPendingReceiver;


// Interface: UntrustedProjectorPage
mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_Params', [
      mojo.internal.StructField('precondition', 0, 0, ash.projector.mojom.NewScreencastPreconditionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_Params', [
      mojo.internal.StructField('progress', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_Params', [
      mojo.internal.StructField('pending_screencasts', 0, 0, mojo.internal.Array(ash.projector.mojom.PendingScreencastSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec,
      null,
      [precondition],
      false);
  }

  onSodaInstallProgressUpdated(progress) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec,
      null,
      [progress],
      false);
  }

  onSodaInstalled() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec,
      null,
      [],
      false);
  }

  onSodaInstallError() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec,
      null,
      [],
      false);
  }

  onScreencastsStateChange(pending_screencasts) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec,
      null,
      [pending_screencasts],
      false);
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

ash.projector.mojom.UntrustedProjectorPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onNewScreencastPreconditionChanged(params.precondition);
          break;
        }
        case 1: {
          const params = ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSodaInstallProgressUpdated(params.progress);
          break;
        }
        case 2: {
          const params = ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSodaInstalled();
          break;
        }
        case 3: {
          const params = ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSodaInstallError();
          break;
        }
        case 4: {
          const params = ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onScreencastsStateChange(params.pending_screencasts);
          break;
        }
      }
    });
  }
};

ash.projector.mojom.UntrustedProjectorPageReceiver = ash.projector.mojom.UntrustedProjectorPageReceiver;

ash.projector.mojom.UntrustedProjectorPagePtr = ash.projector.mojom.UntrustedProjectorPageRemote;
ash.projector.mojom.UntrustedProjectorPageRequest = ash.projector.mojom.UntrustedProjectorPagePendingReceiver;


// Interface: UntrustedProjectorPageHandlerFactory
mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.projector.mojom.UntrustedProjectorPageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.projector.mojom.UntrustedProjectorPageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, page],
      false);
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

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec.$.decode(message.payload);
          const result = this.impl.create(params.handler, params.page);
          break;
        }
      }
    });
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver;

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPtr = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote;
ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRequest = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver;

