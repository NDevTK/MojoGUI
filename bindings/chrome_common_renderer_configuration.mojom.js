// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/renderer_configuration.mojom
// Module: chrome.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var content_settings = content_settings || {};
var mojo_base = mojo_base || {};
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
      mojo.internal.StructField('allowed_domains_for_apps', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('youtube_restrict', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('force_safe_search', 20, 0, mojo.internal.Bool, true, false, 0, undefined),
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
  handleRequestBlockedOnCookie(untrusted_request_url) {
    return this.$.handleRequestBlockedOnCookie(untrusted_request_url);
  }
};

chrome.mojom.BoundSessionRequestThrottledHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BoundSessionRequestThrottledHandler', [
      { explicit: null },
    ]);
  }

  handleRequestBlockedOnCookie(untrusted_request_url) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec,
      chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec,
      [untrusted_request_url],
      false);
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

chrome.mojom.BoundSessionRequestThrottledHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BoundSessionRequestThrottledHandler', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ParamsSpec.$.structSpec);
          const result = this.impl.handleRequestBlockedOnCookie(params.untrusted_request_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.BoundSessionRequestThrottledHandler_HandleRequestBlockedOnCookie_ResponseParamsSpec);
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

chrome.mojom.BoundSessionRequestThrottledHandlerReceiver = chrome.mojom.BoundSessionRequestThrottledHandlerReceiver;

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
  mergeSessionComplete() {
    return this.$.mergeSessionComplete();
  }
};

chrome.mojom.ChromeOSListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ChromeOSListener', [
      { explicit: null },
    ]);
  }

  mergeSessionComplete() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec,
      null,
      [],
      false);
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

chrome.mojom.ChromeOSListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ChromeOSListener', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.ChromeOSListener_MergeSessionComplete_ParamsSpec.$.structSpec);
          const result = this.impl.mergeSessionComplete();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.ChromeOSListenerReceiver = chrome.mojom.ChromeOSListenerReceiver;

chrome.mojom.ChromeOSListenerPtr = chrome.mojom.ChromeOSListenerRemote;
chrome.mojom.ChromeOSListenerRequest = chrome.mojom.ChromeOSListenerPendingReceiver;


// Interface: RendererConfiguration
mojo.internal.Struct(
    chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec, 'chrome.mojom.RendererConfiguration_SetInitialConfiguration_Params', [
      mojo.internal.StructField('chromeos_listener', 0, 0, mojo.internal.InterfaceRequest(chrome.mojom.ChromeOSListenerRemote), null, true, 0, undefined),
      mojo.internal.StructField('content_settings_manager', 8, 0, mojo.internal.InterfaceProxy(content_settings.mojom.ContentSettingsManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('bound_session_request_throttled_handler', 16, 0, mojo.internal.InterfaceProxy(chrome.mojom.BoundSessionRequestThrottledHandlerRemote), null, true, 0, undefined),
      mojo.internal.StructField('is_incognito_process', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
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
  setInitialConfiguration(is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler) {
    return this.$.setInitialConfiguration(is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler);
  }
  setConfiguration(params) {
    return this.$.setConfiguration(params);
  }
  setConfigurationOnProcessLockUpdate(params) {
    return this.$.setConfigurationOnProcessLockUpdate(params);
  }
};

chrome.mojom.RendererConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererConfiguration', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setInitialConfiguration(is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec,
      null,
      [is_incognito_process, chromeos_listener, content_settings_manager, bound_session_request_throttled_handler],
      false);
  }

  setConfiguration(params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec,
      null,
      [params],
      false);
  }

  setConfigurationOnProcessLockUpdate(params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec,
      null,
      [params],
      false);
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

chrome.mojom.RendererConfigurationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RendererConfiguration', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.RendererConfiguration_SetInitialConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.setInitialConfiguration(params.is_incognito_process, params.chromeos_listener, params.content_settings_manager, params.bound_session_request_throttled_handler);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.RendererConfiguration_SetConfiguration_ParamsSpec.$.structSpec);
          const result = this.impl.setConfiguration(params.params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chrome.mojom.RendererConfiguration_SetConfigurationOnProcessLockUpdate_ParamsSpec.$.structSpec);
          const result = this.impl.setConfigurationOnProcessLockUpdate(params.params);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chrome.mojom.RendererConfigurationReceiver = chrome.mojom.RendererConfigurationReceiver;

chrome.mojom.RendererConfigurationPtr = chrome.mojom.RendererConfigurationRemote;
chrome.mojom.RendererConfigurationRequest = chrome.mojom.RendererConfigurationPendingReceiver;

