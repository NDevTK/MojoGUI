// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_service.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

chromecast.mojom.BackgroundColorSpec = { $: mojo.internal.Enum() };
chromecast.mojom.RendererTypeSpec = { $: mojo.internal.Enum() };
chromecast.mojom.RendererPoolSpec = { $: mojo.internal.Enum() };
chromecast.mojom.GesturePrioritySpec = { $: mojo.internal.Enum() };
chromecast.mojom.CastWebViewParamsSpec = { $: {} };
chromecast.mojom.CastWebService = {};
chromecast.mojom.CastWebService.$interfaceName = 'chromecast.mojom.CastWebService';
chromecast.mojom.CastWebService_CreateWebView_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec = { $: {} };
chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec = { $: {} };

// Enum: BackgroundColor
chromecast.mojom.BackgroundColor = {
  NONE: 0,
  WHITE: 1,
  BLACK: 2,
  TRANSPARENT: 3,
};

// Enum: RendererType
chromecast.mojom.RendererType = {
  DEFAULT_RENDERER: 0,
  MOJO_RENDERER: 1,
  REMOTING_RENDERER: 2,
};

// Enum: RendererPool
chromecast.mojom.RendererPool = {
  NONE: 0,
  OVERLAY: 1,
};

// Enum: GesturePriority
chromecast.mojom.GesturePriority = {
  NONE: 0,
  ROOT_UI: 1,
  MAIN_ACTIVITY: 2,
  SETTINGS_UI: 3,
};

// Struct: CastWebViewParams
mojo.internal.Struct(
    chromecast.mojom.CastWebViewParamsSpec, 'chromecast.mojom.CastWebViewParams', [
      mojo.internal.StructField('activity_id', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('sdk_version', 16, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('log_prefix', 24, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('shutdown_delay', 32, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_pool', 40, 0, chromecast.mojom.RendererPoolSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('prelaunch_url', 48, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('renderer_type', 56, 0, chromecast.mojom.RendererTypeSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('background_color', 64, 0, chromecast.mojom.BackgroundColorSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('url_filters', 72, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('gesture_priority', 80, 0, chromecast.mojom.GesturePrioritySpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('allow_media_access', 88, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_720p_resolution', 88, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('managed', 88, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('log_js_console_messages', 88, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enabled_for_dev', 88, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_root_window', 88, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('handle_inner_contents', 88, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_media_blocker', 88, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_websql', 89, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_mixer_audio', 89, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('webrtc_allow_legacy_tls_protocols', 89, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_touch_input', 89, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_remote_control_mode', 89, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('turn_on_screen', 89, 5, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('keep_screen_on', 89, 6, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('enable_webui_bindings_permission', 89, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_url_rewrite_rules', 90, 0, mojo.internal.Bool, true, false, 0, undefined),
    ],
    [[0, 104]]);

// Interface: CastWebService
mojo.internal.Struct(
    chromecast.mojom.CastWebService_CreateWebView_ParamsSpec, 'chromecast.mojom.CastWebService_CreateWebView_Params', [
      mojo.internal.StructField('params', 0, 0, chromecast.mojom.CastWebViewParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('web_contents', 8, 0, mojo.internal.InterfaceRequest(chromecast.mojom.CastWebContentsRemote), null, false, 0, undefined),
      mojo.internal.StructField('window', 16, 0, mojo.internal.InterfaceRequest(chromecast.mojom.CastContentWindowRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec, 'chromecast.mojom.CastWebService_RegisterWebUiClient_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(chromecast.mojom.WebUiClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('hosts', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec, 'chromecast.mojom.CastWebService_FlushDomLocalStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec, 'chromecast.mojom.CastWebService_ClearLocalStorage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec, 'chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParams', [
    ],
    [[0, 8]]);

chromecast.mojom.CastWebServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.CastWebServiceRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.CastWebService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.CastWebServicePendingReceiver,
      handle);
    this.$ = new chromecast.mojom.CastWebServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.CastWebServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createWebView(params, web_contents, window) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.CastWebService_CreateWebView_ParamsSpec,
      null,
      [params, web_contents, window],
      false);
  }

  registerWebUiClient(client, hosts) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec,
      null,
      [client, hosts],
      false);
  }

  flushDomLocalStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec,
      null,
      [],
      false);
  }

  clearLocalStorage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec,
      chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec,
      [],
      false);
  }

};

chromecast.mojom.CastWebService.getRemote = function() {
  let remote = new chromecast.mojom.CastWebServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.CastWebService',
    'context');
  return remote.$;
};

chromecast.mojom.CastWebServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.CastWebService_CreateWebView_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createWebView');
          const result = this.impl.createWebView(params.params, params.web_contents, params.window);
          break;
        }
        case 1: {
          const params = chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.registerWebUiClient');
          const result = this.impl.registerWebUiClient(params.client, params.hosts);
          break;
        }
        case 2: {
          const params = chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.flushDomLocalStorage');
          const result = this.impl.flushDomLocalStorage();
          break;
        }
        case 3: {
          const params = chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.clearLocalStorage');
          const result = this.impl.clearLocalStorage();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chromecast.mojom.CastWebServiceReceiver = chromecast.mojom.CastWebServiceReceiver;

chromecast.mojom.CastWebServicePtr = chromecast.mojom.CastWebServiceRemote;
chromecast.mojom.CastWebServiceRequest = chromecast.mojom.CastWebServicePendingReceiver;

