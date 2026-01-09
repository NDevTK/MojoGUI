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
  which: 0,
};

// Enum: GesturePriority
chromecast.mojom.GesturePriority = {
  ROOT_UI: 0,
  MAIN_ACTIVITY: 1,
  SETTINGS_UI: 2,
};

// Struct: CastWebViewParams
chromecast.mojom.CastWebViewParams = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
    this."" = values."" !== undefined ? values."" : false;
    this.prelaunch_url = values.prelaunch_url !== undefined ? values.prelaunch_url : null;
    this.RendererType.DEFAULT_RENDERER = values.RendererType.DEFAULT_RENDERER !== undefined ? values.RendererType.DEFAULT_RENDERER : false;
    this.false = values.false !== undefined ? values.false : false;
    this.false = values.false !== undefined ? values.false : false;
    this.GesturePriority.NONE = values.GesturePriority.NONE !== undefined ? values.GesturePriority.NONE : false;
    this.true = values.true !== undefined ? values.true : false;
  }
};

// Interface: CastWebService
chromecast.mojom.CastWebServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromecast.mojom.CastWebService';
  }

  createWebView(params, web_contents, window) {
    // Method: CreateWebView
    // Call: CreateWebView(params, web_contents, window)
  }

  registerWebUiClient(client, hosts) {
    // Method: RegisterWebUiClient
    // Call: RegisterWebUiClient(client, hosts)
  }

  flushDomLocalStorage() {
    // Method: FlushDomLocalStorage
    // Call: FlushDomLocalStorage()
  }

  clearLocalStorage() {
    // Method: ClearLocalStorage
    // Call: ClearLocalStorage()
  }

};

chromecast.mojom.CastWebServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
