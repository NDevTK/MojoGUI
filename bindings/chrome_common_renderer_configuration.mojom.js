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
  Deprecated: 3,
  kShutdownOrSessionTermination: 4,
  kCookieAlreadyFresh: 5,
  kRendererDisconnected: 6,
  kThrottlingRequestsPaused: 7,
};

// Struct: BoundSessionThrottlerParams
chrome.mojom.BoundSessionThrottlerParams = class {
  constructor(values = {}) {
    this.cookie_expiry_date = values.cookie_expiry_date !== undefined ? values.cookie_expiry_date : "";
  }
};

// Struct: DynamicParams
chrome.mojom.DynamicParams = class {
  constructor(values = {}) {
    this.allowed_domains_for_apps = values.allowed_domains_for_apps !== undefined ? values.allowed_domains_for_apps : 0;
  }
};

// Struct: StaticParams
chrome.mojom.StaticParams = class {
  constructor(values = {}) {
    this.false = values.false !== undefined ? values.false : false;
  }
};

// Interface: BoundSessionRequestThrottledHandler
chrome.mojom.BoundSessionRequestThrottledHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.BoundSessionRequestThrottledHandler';
  }

  handleRequestBlockedOnCookie(untrusted_request_url) {
    // Method: HandleRequestBlockedOnCookie
    return new Promise((resolve) => {
      // Call: HandleRequestBlockedOnCookie(untrusted_request_url)
      resolve({});
    });
  }

};

chrome.mojom.BoundSessionRequestThrottledHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ChromeOSListener
chrome.mojom.ChromeOSListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.ChromeOSListener';
  }

  mergeSessionComplete() {
    // Method: MergeSessionComplete
    // Call: MergeSessionComplete()
  }

};

chrome.mojom.ChromeOSListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: RendererConfiguration
chrome.mojom.RendererConfigurationPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.RendererConfiguration';
  }

  setInitialConfiguration(is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler) {
    // Method: SetInitialConfiguration
    // Call: SetInitialConfiguration(is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler)
  }

  setConfiguration(params) {
    // Method: SetConfiguration
    // Call: SetConfiguration(params)
  }

  setConfigurationOnProcessLockUpdate(params) {
    // Method: SetConfigurationOnProcessLockUpdate
    // Call: SetConfigurationOnProcessLockUpdate(params)
  }

};

chrome.mojom.RendererConfigurationRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
