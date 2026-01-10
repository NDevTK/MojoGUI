// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/renderer_configuration.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var components = components || {};
var components = components || {};
var url = url || {};

chrome.mojom.ResumeBlockedRequestsTriggerSpec = { $: mojo.internal.Enum() };
chrome.mojom.BoundSessionThrottlerParamsSpec = { $: {} };
chrome.mojom.DynamicParamsSpec = { $: {} };
chrome.mojom.StaticParamsSpec = { $: {} };
chrome.mojom.BoundSessionRequestThrottledHandler = {};
chrome.mojom.BoundSessionRequestThrottledHandler.$interfaceName = 'chrome.mojom.BoundSessionRequestThrottledHandler';
chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec = { $: {} };
chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec = { $: {} };
chrome.mojom.ChromeOSListener = {};
chrome.mojom.ChromeOSListener.$interfaceName = 'chrome.mojom.ChromeOSListener';
chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec = { $: {} };
chrome.mojom.RendererConfiguration = {};
chrome.mojom.RendererConfiguration.$interfaceName = 'chrome.mojom.RendererConfiguration';
chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec = { $: {} };
chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec = { $: {} };
chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec = { $: {} };

// Enum: ResumeBlockedRequestsTrigger
chrome.mojom.ResumeBlockedRequestsTrigger = {
  kObservedFreshCookies: 0,
  kCookieRefreshFetchSuccess: 1,
  kCookieRefreshFetchFailure: 2,
  kTimeout: 4,
  kShutdownOrSessionTermination: 5,
  kCookieAlreadyFresh: 6,
  kRendererDisconnected: 7,
  kThrottlingRequestsPaused: 8,
};

// Struct: BoundSessionThrottlerParams
mojo.internal.Struct(
    chrome.mojom.BoundSessionThrottlerParamsSpec, 'chrome.mojom.BoundSessionThrottlerParams', [
      mojo.internal.StructField('domain', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('cookie_expiry_date', 16, 0, mojo_base.mojom.TimeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DynamicParams
mojo.internal.Struct(
    chrome.mojom.DynamicParamsSpec, 'chrome.mojom.DynamicParams', [
      mojo.internal.StructField('bound_session_throttler_params', 0, 0, mojo.internal.Array(chrome.mojom.BoundSessionThrottlerParamsSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('force_safe_search', 8, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('youtube_restrict', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('allowed_domains_for_apps', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: StaticParams
mojo.internal.Struct(
    chrome.mojom.StaticParamsSpec, 'chrome.mojom.StaticParams', [
      mojo.internal.StructField('is_instant_process', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: BoundSessionRequestThrottledHandler
mojo.internal.Struct(
    chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec, 'chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_Params', [
      mojo.internal.StructField('untrusted_request_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec, 'chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParams', [
      mojo.internal.StructField('resume_trigger', 0, 0, chrome.mojom.ResumeBlockedRequestsTriggerSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.BoundSessionRequestThrottledHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.BoundSessionRequestThrottledHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.BoundSessionRequestThrottledHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.BoundSessionRequestThrottledHandlerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.BoundSessionRequestThrottledHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.BoundSessionRequestThrottledHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleRequestBlockedOnCookie(untrusted_request_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec,
      chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec,
      [untrusted_request_url],
      false);
  }

};

chrome.mojom.BoundSessionRequestThrottledHandler.getRemote = function() {
  let remote = new chrome.mojom.BoundSessionRequestThrottledHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.BoundSessionRequestThrottledHandler',
    'context');
  return remote.$;
};

chrome.mojom.BoundSessionRequestThrottledHandlerPtr = chrome.mojom.BoundSessionRequestThrottledHandlerRemote;
chrome.mojom.BoundSessionRequestThrottledHandlerRequest = chrome.mojom.BoundSessionRequestThrottledHandlerPendingReceiver;


// Interface: ChromeOSListener
mojo.internal.Struct(
    chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec, 'chrome.mojom.ChromeOSListener_MergeSessionComplete_Params', [
    ],
    [[0, 8]]);

chrome.mojom.ChromeOSListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.ChromeOSListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ChromeOSListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.ChromeOSListenerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.ChromeOSListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.ChromeOSListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mergeSessionComplete() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec,
      null,
      [],
      false);
  }

};

chrome.mojom.ChromeOSListener.getRemote = function() {
  let remote = new chrome.mojom.ChromeOSListenerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.ChromeOSListener',
    'context');
  return remote.$;
};

chrome.mojom.ChromeOSListenerPtr = chrome.mojom.ChromeOSListenerRemote;
chrome.mojom.ChromeOSListenerRequest = chrome.mojom.ChromeOSListenerPendingReceiver;


// Interface: RendererConfiguration
mojo.internal.Struct(
    chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec, 'chrome.mojom.RendererConfiguration_SetInitialConfiguration_Params', [
      mojo.internal.StructField('is_incognito_process', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('chromeos_listener', 8, 0, mojo.internal.InterfaceRequest(chrome.mojom.ChromeOSListenerRemote), null, true, 0, undefined),
      mojo.internal.StructField('content_settings_manager', 16, 0, mojo.internal.InterfaceProxy(content_settings.mojom.ContentSettingsManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('bound_session_request_throttled_handler', 24, 0, mojo.internal.InterfaceProxy(chrome.mojom.BoundSessionRequestThrottledHandlerRemote), null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec, 'chrome.mojom.RendererConfiguration_SetConfiguration_Params', [
      mojo.internal.StructField('params', 0, 0, chrome.mojom.DynamicParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec, 'chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_Params', [
      mojo.internal.StructField('params', 0, 0, chrome.mojom.StaticParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.RendererConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.RendererConfigurationRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RendererConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.RendererConfigurationPendingReceiver,
      handle);
    this.$ = new chrome.mojom.RendererConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.RendererConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInitialConfiguration(is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec,
      null,
      [is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler],
      false);
  }

  setConfiguration(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec,
      null,
      [params],
      false);
  }

  setConfigurationOnProcessLockUpdate(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec,
      null,
      [params],
      false);
  }

};

chrome.mojom.RendererConfiguration.getRemote = function() {
  let remote = new chrome.mojom.RendererConfigurationRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.RendererConfiguration',
    'context');
  return remote.$;
};

chrome.mojom.RendererConfigurationPtr = chrome.mojom.RendererConfigurationRemote;
chrome.mojom.RendererConfigurationRequest = chrome.mojom.RendererConfigurationPendingReceiver;

