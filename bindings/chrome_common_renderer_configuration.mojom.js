// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/renderer_configuration.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var url = url || {};


// Enum: ResumeBlockedRequestsTrigger
chrome.mojom.mojom.ResumeBlockedRequestsTrigger = {
  kObservedFreshCookies: 0,
  kCookieRefreshFetchSuccess: 1,
  kCookieRefreshFetchFailure: 2,
  kTimeout: 3,
  kShutdownOrSessionTermination: 4,
  kCookieAlreadyFresh: 5,
  kRendererDisconnected: 6,
  kThrottlingRequestsPaused: 7,
};
chrome.mojom.mojom.ResumeBlockedRequestsTriggerSpec = { $: mojo.internal.Enum() };

// Struct: BoundSessionThrottlerParams
chrome.mojom.mojom.BoundSessionThrottlerParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.BoundSessionThrottlerParams',
      packedSize: 32,
      fields: [
        { name: 'domain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'cookie_expiry_date', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DynamicParams
chrome.mojom.mojom.DynamicParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.DynamicParams',
      packedSize: 32,
      fields: [
        { name: 'bound_session_throttler_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chrome.mojom.BoundSessionThrottlerParamsSpec, false), nullable: false, minVersion: 0 },
        { name: 'force_safe_search', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'youtube_restrict', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'allowed_domains_for_apps', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: StaticParams
chrome.mojom.mojom.StaticParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.StaticParams',
      packedSize: 16,
      fields: [
        { name: 'is_instant_process', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: BoundSessionRequestThrottledHandler
chrome.mojom.mojom.BoundSessionRequestThrottledHandler = {};

chrome.mojom.mojom.BoundSessionRequestThrottledHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.BoundSessionRequestThrottledHandlerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.BoundSessionRequestThrottledHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.BoundSessionRequestThrottledHandlerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.BoundSessionRequestThrottledHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.BoundSessionRequestThrottledHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  handleRequestBlockedOnCookie(untrusted_request_url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec,
      chrome.mojom.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec,
      [untrusted_request_url]);
  }

};

chrome.mojom.mojom.BoundSessionRequestThrottledHandler.getRemote = function() {
  let remote = new chrome.mojom.mojom.BoundSessionRequestThrottledHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.BoundSessionRequestThrottledHandler',
    'context');
  return remote.$;
};

// ParamsSpec for HandleRequestBlockedOnCookie
chrome.mojom.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.BoundSessionRequestThrottledHandler.HandleRequestBlockedOnCookie_Params',
      packedSize: 16,
      fields: [
        { name: 'untrusted_request_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chrome.mojom.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.BoundSessionRequestThrottledHandler.HandleRequestBlockedOnCookie_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'resume_trigger', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.ResumeBlockedRequestsTriggerSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.BoundSessionRequestThrottledHandlerPtr = chrome.mojom.mojom.BoundSessionRequestThrottledHandlerRemote;
chrome.mojom.mojom.BoundSessionRequestThrottledHandlerRequest = chrome.mojom.mojom.BoundSessionRequestThrottledHandlerPendingReceiver;


// Interface: ChromeOSListener
chrome.mojom.mojom.ChromeOSListener = {};

chrome.mojom.mojom.ChromeOSListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.ChromeOSListenerRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.ChromeOSListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.ChromeOSListenerPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.ChromeOSListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.ChromeOSListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  mergeSessionComplete() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec,
      null,
      []);
  }

};

chrome.mojom.mojom.ChromeOSListener.getRemote = function() {
  let remote = new chrome.mojom.mojom.ChromeOSListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ChromeOSListener',
    'context');
  return remote.$;
};

// ParamsSpec for MergeSessionComplete
chrome.mojom.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeOSListener.MergeSessionComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.ChromeOSListenerPtr = chrome.mojom.mojom.ChromeOSListenerRemote;
chrome.mojom.mojom.ChromeOSListenerRequest = chrome.mojom.mojom.ChromeOSListenerPendingReceiver;


// Interface: RendererConfiguration
chrome.mojom.mojom.RendererConfiguration = {};

chrome.mojom.mojom.RendererConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.RendererConfigurationRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.RendererConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.RendererConfigurationPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.RendererConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.RendererConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setInitialConfiguration(is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec,
      null,
      [is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler]);
  }

  setConfiguration(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.mojom.RendererConfiguration_SetConfiguration_ParamsSpec,
      null,
      [params]);
  }

  setConfigurationOnProcessLockUpdate(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec,
      null,
      [params]);
  }

};

chrome.mojom.mojom.RendererConfiguration.getRemote = function() {
  let remote = new chrome.mojom.mojom.RendererConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RendererConfiguration',
    'context');
  return remote.$;
};

// ParamsSpec for SetInitialConfiguration
chrome.mojom.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RendererConfiguration.SetInitialConfiguration_Params',
      packedSize: 24,
      fields: [
        { name: 'is_incognito_process', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'chromeos_listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true, minVersion: 0 },
        { name: 'content_settings_manager', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
        { name: 'bound_session_request_throttled_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetConfiguration
chrome.mojom.mojom.RendererConfiguration_SetConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RendererConfiguration.SetConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.DynamicParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetConfigurationOnProcessLockUpdate
chrome.mojom.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RendererConfiguration.SetConfigurationOnProcessLockUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.StaticParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.RendererConfigurationPtr = chrome.mojom.mojom.RendererConfigurationRemote;
chrome.mojom.mojom.RendererConfigurationRequest = chrome.mojom.mojom.RendererConfigurationPendingReceiver;

