// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/mojom/untrusted_projector.mojom
// Module: ash.projector.mojom

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
  getNewScreencastPrecondition() {
    return this.$.getNewScreencastPrecondition();
  }
  shouldDownloadSoda() {
    return this.$.shouldDownloadSoda();
  }
  installSoda() {
    return this.$.installSoda();
  }
  getPendingScreencasts() {
    return this.$.getPendingScreencasts();
  }
  getUserPref(pref) {
    return this.$.getUserPref(pref);
  }
  setUserPref(pref, value) {
    return this.$.setUserPref(pref, value);
  }
  openFeedbackDialog() {
    return this.$.openFeedbackDialog();
  }
  startProjectorSession(storage_dir_name) {
    return this.$.startProjectorSession(storage_dir_name);
  }
  sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email) {
    return this.$.sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email);
  }
  getAccounts() {
    return this.$.getAccounts();
  }
  getVideo(video_file_id, resource_key) {
    return this.$.getVideo(video_file_id, resource_key);
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getNewScreencastPrecondition() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ResponseParamsSpec,
      [],
      false);
  }

  shouldDownloadSoda() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ResponseParamsSpec,
      [],
      false);
  }

  installSoda() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ResponseParamsSpec,
      [],
      false);
  }

  getPendingScreencasts() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ResponseParamsSpec,
      [],
      false);
  }

  getUserPref(pref) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ResponseParamsSpec,
      [pref],
      false);
  }

  setUserPref(pref, value) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ResponseParamsSpec,
      [pref, value],
      false);
  }

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  startProjectorSession(storage_dir_name) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ResponseParamsSpec,
      [storage_dir_name],
      false);
  }

  sendXhr(url, method, request_body, use_credentials, use_api_key, headers, account_email) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ResponseParamsSpec,
      [url, method, request_body, use_credentials, use_api_key, headers, account_email],
      false);
  }

  getAccounts() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec,
      ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ResponseParamsSpec,
      [],
      false);
  }

  getVideo(video_file_id, resource_key) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetNewScreencastPrecondition_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_ShouldDownloadSoda_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_InstallSoda_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetPendingScreencasts_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetUserPref_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SetUserPref_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_StartProjectorSession_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_SendXhr_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetAccounts_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandler_GetVideo_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
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
  onNewScreencastPreconditionChanged(precondition) {
    return this.$.onNewScreencastPreconditionChanged(precondition);
  }
  onSodaInstallProgressUpdated(progress) {
    return this.$.onSodaInstallProgressUpdated(progress);
  }
  onSodaInstalled() {
    return this.$.onSodaInstalled();
  }
  onSodaInstallError() {
    return this.$.onSodaInstallError();
  }
  onScreencastsStateChange(pending_screencasts) {
    return this.$.onScreencastsStateChange(pending_screencasts);
  }
};

ash.projector.mojom.UntrustedProjectorPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onNewScreencastPreconditionChanged(precondition) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec,
      null,
      [precondition],
      false);
  }

  onSodaInstallProgressUpdated(progress) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec,
      null,
      [progress],
      false);
  }

  onSodaInstalled() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec,
      null,
      [],
      false);
  }

  onSodaInstallError() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec,
      null,
      [],
      false);
  }

  onScreencastsStateChange(pending_screencasts) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPage', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnNewScreencastPreconditionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onNewScreencastPreconditionChanged(params.precondition);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallProgressUpdated_ParamsSpec.$.structSpec);
          const result = this.impl.onSodaInstallProgressUpdated(params.progress);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstalled_ParamsSpec.$.structSpec);
          const result = this.impl.onSodaInstalled();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnSodaInstallError_ParamsSpec.$.structSpec);
          const result = this.impl.onSodaInstallError();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPage_OnScreencastsStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.onScreencastsStateChange(params.pending_screencasts);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.projector.mojom.UntrustedProjectorPageReceiver = ash.projector.mojom.UntrustedProjectorPageReceiver;

ash.projector.mojom.UntrustedProjectorPagePtr = ash.projector.mojom.UntrustedProjectorPageRemote;
ash.projector.mojom.UntrustedProjectorPageRequest = ash.projector.mojom.UntrustedProjectorPagePendingReceiver;


// Interface: UntrustedProjectorPageHandlerFactory
mojo.internal.Struct(
    ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec, 'ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.projector.mojom.UntrustedProjectorPageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.projector.mojom.UntrustedProjectorPageRemote), null, false, 0, undefined),
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
  create(handler, page) {
    return this.$.create(handler, page);
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  create(handler, page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('UntrustedProjectorPageHandlerFactory', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.projector.mojom.UntrustedProjectorPageHandlerFactory_Create_ParamsSpec.$.structSpec);
          const result = this.impl.create(params.handler, params.page);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryReceiver;

ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPtr = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRemote;
ash.projector.mojom.UntrustedProjectorPageHandlerFactoryRequest = ash.projector.mojom.UntrustedProjectorPageHandlerFactoryPendingReceiver;

