// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_service.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
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
      mojo.internal.StructField('activity_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sdk_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('allow_media_access', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('force_720p_resolution', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('managed', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('log_js_console_messages', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('log_prefix', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shutdown_delay', 40, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('renderer_pool', 48, 0, chromecast.mojom.RendererPoolSpec, null, false, 0, undefined),
      mojo.internal.StructField('prelaunch_url', 56, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('enabled_for_dev', 64, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('renderer_type', 68, 0, chromecast.mojom.RendererTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_root_window', 72, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('handle_inner_contents', 72, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('use_media_blocker', 72, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('background_color', 76, 0, chromecast.mojom.BackgroundColorSpec, null, false, 0, undefined),
      mojo.internal.StructField('enable_websql', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_mixer_audio', 80, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('url_filters', 88, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('webrtc_allow_legacy_tls_protocols', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_touch_input', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_remote_control_mode', 96, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('turn_on_screen', 96, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('keep_screen_on', 96, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('gesture_priority', 100, 0, chromecast.mojom.GesturePrioritySpec, null, false, 0, undefined),
      mojo.internal.StructField('enable_webui_bindings_permission', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_url_rewrite_rules', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Interface: CastWebService
mojo.internal.Struct(
    chromecast.mojom.CastWebService_CreateWebView_ParamsSpec, 'chromecast.mojom.CastWebService_CreateWebView_Params', [
      mojo.internal.StructField('params', 0, 0, chromecast.mojom.CastWebViewParamsSpec, null, false, 0, undefined),
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
      [params, web_contents, window]);
  }

  registerWebUiClient(client, hosts) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec,
      null,
      [client, hosts]);
  }

  flushDomLocalStorage() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec,
      null,
      []);
  }

  clearLocalStorage() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec,
      chromecast.mojom.CastWebService_ClearLocalStorage_ResponseParamsSpec,
      []);
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

chromecast.mojom.CastWebServicePtr = chromecast.mojom.CastWebServiceRemote;
chromecast.mojom.CastWebServiceRequest = chromecast.mojom.CastWebServicePendingReceiver;

