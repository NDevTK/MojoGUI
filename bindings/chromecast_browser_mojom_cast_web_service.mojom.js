// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_service.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


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
chromecast.mojom.CastWebViewParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebViewParams',
      packedSize: 144,
      fields: [
        { name: 'activity_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'session_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'sdk_version', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'allow_media_access', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'force_720p_resolution', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'managed', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'log_js_console_messages', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'log_prefix', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'shutdown_delay', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false },
        { name: 'renderer_pool', packedOffset: 56, packedBitOffset: 0, type: chromecast.mojom.RendererPoolSpec, nullable: false },
        { name: 'prelaunch_url', packedOffset: 64, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'enabled_for_dev', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'renderer_type', packedOffset: 80, packedBitOffset: 0, type: chromecast.mojom.RendererTypeSpec, nullable: false },
        { name: 'is_root_window', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'handle_inner_contents', packedOffset: 88, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'use_media_blocker', packedOffset: 88, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'background_color', packedOffset: 96, packedBitOffset: 0, type: chromecast.mojom.BackgroundColorSpec, nullable: false },
        { name: 'enable_websql', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_mixer_audio', packedOffset: 104, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'url_filters', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'webrtc_allow_legacy_tls_protocols', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_touch_input', packedOffset: 120, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_remote_control_mode', packedOffset: 120, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'turn_on_screen', packedOffset: 120, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'keep_screen_on', packedOffset: 120, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
        { name: 'gesture_priority', packedOffset: 128, packedBitOffset: 0, type: chromecast.mojom.GesturePrioritySpec, nullable: false },
        { name: 'enable_webui_bindings_permission', packedOffset: 136, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'enable_url_rewrite_rules', packedOffset: 136, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: CastWebService
chromecast.mojom.CastWebService = {};

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
      null,
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

// ParamsSpec for CreateWebView
chromecast.mojom.CastWebService_CreateWebView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.CreateWebView_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 8, packedBitOffset: 0, type: chromecast.mojom.CastWebViewParamsSpec, nullable: false },
        { name: 'web_contents', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'window', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterWebUiClient
chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.RegisterWebUiClient_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
        { name: 'hosts', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FlushDomLocalStorage
chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.FlushDomLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ClearLocalStorage
chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService.ClearLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.CastWebServicePtr = chromecast.mojom.CastWebServiceRemote;
chromecast.mojom.CastWebServiceRequest = chromecast.mojom.CastWebServicePendingReceiver;

