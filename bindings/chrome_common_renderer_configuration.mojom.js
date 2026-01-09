// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/renderer_configuration.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Enum: ResumeBlockedRequestsTrigger
chrome.mojom.ResumeBlockedRequestsTrigger = {
  kObservedFreshCookies: 0,
  kCookieRefreshFetchSuccess: 1,
  kCookieRefreshFetchFailure: 2,
  kTimeout: 3,
  kShutdownOrSessionTermination: 4,
  kCookieAlreadyFresh: 5,
  kRendererDisconnected: 6,
  kThrottlingRequestsPaused: 7,
};

// Struct: BoundSessionThrottlerParams
chrome.mojom.BoundSessionThrottlerParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.BoundSessionThrottlerParams',
      packedSize: 32,
      fields: [
        { name: 'domain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'cookie_expiry_date', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DynamicParams
chrome.mojom.DynamicParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.DynamicParams',
      packedSize: 40,
      fields: [
        { name: 'bound_session_throttler_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'force_safe_search', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'youtube_restrict', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'allowed_domains_for_apps', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: StaticParams
chrome.mojom.StaticParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.StaticParams',
      packedSize: 16,
      fields: [
        { name: 'is_instant_process', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: BoundSessionRequestThrottledHandler
chrome.mojom.BoundSessionRequestThrottledHandler = {};

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
      [untrusted_request_url]);
  }

};

chrome.mojom.BoundSessionRequestThrottledHandler.getRemote = function() {
  let remote = new chrome.mojom.BoundSessionRequestThrottledHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.BoundSessionRequestThrottledHandler',
    'context');
  return remote.$;
};

// ParamsSpec for HandleRequestBlockedOnCookie
chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.BoundSessionRequestThrottledHandler.HandleRequestBlockedOnCookie_Params',
      packedSize: 16,
      fields: [
        { name: 'untrusted_request_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.BoundSessionRequestThrottledHandler.HandleRequestBlockedOnCookie_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'resume_trigger', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.ResumeBlockedRequestsTriggerSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.BoundSessionRequestThrottledHandlerPtr = chrome.mojom.BoundSessionRequestThrottledHandlerRemote;
chrome.mojom.BoundSessionRequestThrottledHandlerRequest = chrome.mojom.BoundSessionRequestThrottledHandlerPendingReceiver;


// Interface: ChromeOSListener
chrome.mojom.ChromeOSListener = {};

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
      []);
  }

};

chrome.mojom.ChromeOSListener.getRemote = function() {
  let remote = new chrome.mojom.ChromeOSListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.ChromeOSListener',
    'context');
  return remote.$;
};

// ParamsSpec for MergeSessionComplete
chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.ChromeOSListener.MergeSessionComplete_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.ChromeOSListenerPtr = chrome.mojom.ChromeOSListenerRemote;
chrome.mojom.ChromeOSListenerRequest = chrome.mojom.ChromeOSListenerPendingReceiver;


// Interface: RendererConfiguration
chrome.mojom.RendererConfiguration = {};

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
      [is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler]);
  }

  setConfiguration(params) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec,
      null,
      [params]);
  }

  setConfigurationOnProcessLockUpdate(params) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec,
      null,
      [params]);
  }

};

chrome.mojom.RendererConfiguration.getRemote = function() {
  let remote = new chrome.mojom.RendererConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.RendererConfiguration',
    'context');
  return remote.$;
};

// ParamsSpec for SetInitialConfiguration
chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RendererConfiguration.SetInitialConfiguration_Params',
      packedSize: 32,
      fields: [
        { name: 'is_incognito_process', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'chromeos_listener', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: true },
        { name: 'content_settings_manager', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
        { name: 'bound_session_request_throttled_handler', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetConfiguration
chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RendererConfiguration.SetConfiguration_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.DynamicParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetConfigurationOnProcessLockUpdate
chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.RendererConfiguration.SetConfigurationOnProcessLockUpdate_Params',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.StaticParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.RendererConfigurationPtr = chrome.mojom.RendererConfigurationRemote;
chrome.mojom.RendererConfigurationRequest = chrome.mojom.RendererConfigurationPendingReceiver;

