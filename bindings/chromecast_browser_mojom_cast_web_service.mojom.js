// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/browser/mojom/cast_web_service.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};
var url = url || {};


// Enum: BackgroundColor
chromecast.mojom.BackgroundColor = {
  NONE: 0,
  WHITE: 1,
  BLACK: 2,
  TRANSPARENT: 3,
};
chromecast.mojom.BackgroundColorSpec = { $: mojo.internal.Enum() };

// Enum: RendererType
chromecast.mojom.RendererType = {
  DEFAULT_RENDERER: 0,
  MOJO_RENDERER: 1,
  REMOTING_RENDERER: 2,
};
chromecast.mojom.RendererTypeSpec = { $: mojo.internal.Enum() };

// Enum: RendererPool
chromecast.mojom.RendererPool = {
  NONE: 0,
  OVERLAY: 1,
};
chromecast.mojom.RendererPoolSpec = { $: mojo.internal.Enum() };

// Enum: GesturePriority
chromecast.mojom.GesturePriority = {
  NONE: 0,
  ROOT_UI: 1,
  MAIN_ACTIVITY: 2,
  SETTINGS_UI: 3,
};
chromecast.mojom.GesturePrioritySpec = { $: mojo.internal.Enum() };

// Struct: CastWebViewParams
chromecast.mojom.CastWebViewParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebViewParams',
      packedSize: 88,
      fields: [
        { name: 'activity_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sdk_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'allow_media_access', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'force_720p_resolution', packedOffset: 72, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'managed', packedOffset: 72, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'log_js_console_messages', packedOffset: 72, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'log_prefix', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'shutdown_delay', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'renderer_pool', packedOffset: 56, packedBitOffset: 0, type: chromecast.mojom.RendererPoolSpec, nullable: false, minVersion: 0 },
        { name: 'prelaunch_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'enabled_for_dev', packedOffset: 72, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'renderer_type', packedOffset: 60, packedBitOffset: 0, type: chromecast.mojom.RendererTypeSpec, nullable: false, minVersion: 0 },
        { name: 'is_root_window', packedOffset: 72, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'handle_inner_contents', packedOffset: 72, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'use_media_blocker', packedOffset: 72, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'background_color', packedOffset: 64, packedBitOffset: 0, type: chromecast.mojom.BackgroundColorSpec, nullable: false, minVersion: 0 },
        { name: 'enable_websql', packedOffset: 73, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_mixer_audio', packedOffset: 73, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'url_filters', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: true, minVersion: 0 },
        { name: 'webrtc_allow_legacy_tls_protocols', packedOffset: 73, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_touch_input', packedOffset: 73, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_remote_control_mode', packedOffset: 73, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'turn_on_screen', packedOffset: 73, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'keep_screen_on', packedOffset: 73, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'gesture_priority', packedOffset: 68, packedBitOffset: 0, type: chromecast.mojom.GesturePrioritySpec, nullable: false, minVersion: 0 },
        { name: 'enable_webui_bindings_permission', packedOffset: 73, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_url_rewrite_rules', packedOffset: 74, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Interface: CastWebService
chromecast.mojom.CastWebService = {};

chromecast.mojom.CastWebService_CreateWebView_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService_CreateWebView_Params',
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: chromecast.mojom.CastWebViewParamsSpec, nullable: false, minVersion: 0 },
        { name: 'web_contents', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromecast.mojom.CastWebContentsRemote), nullable: false, minVersion: 0 },
        { name: 'window', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromecast.mojom.CastContentWindowRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chromecast.mojom.CastWebService_RegisterWebUiClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService_RegisterWebUiClient_Params',
      packedSize: 24,
      fields: [
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.WebUiClientRemote), nullable: false, minVersion: 0 },
        { name: 'hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

chromecast.mojom.CastWebService_FlushDomLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService_FlushDomLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromecast.mojom.CastWebService_ClearLocalStorage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.CastWebService_ClearLocalStorage_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      packedSize: 32,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: chromecast.mojom.CastWebViewParamsSpec, nullable: false, minVersion: 0 },
        { name: 'web_contents', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromecast.mojom.CastWebContentsRemote), nullable: false, minVersion: 0 },
        { name: 'window', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(chromecast.mojom.CastContentWindowRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
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
        { name: 'client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(chromecast.mojom.WebUiClientRemote), nullable: false, minVersion: 0 },
        { name: 'hosts', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.CastWebServicePtr = chromecast.mojom.CastWebServiceRemote;
chromecast.mojom.CastWebServiceRequest = chromecast.mojom.CastWebServicePendingReceiver;

