// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/plugin.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var content = content || {};
var mojo_base = mojo_base || {};
var url = url || {};

chrome.mojom.PluginStatusSpec = { $: mojo.internal.Enum() };
chrome.mojom.PluginInfoSpec = { $: {} };
chrome.mojom.PluginParamSpec = { $: {} };
chrome.mojom.PluginHost = {};
chrome.mojom.PluginHost.$interfaceName = 'chrome.mojom.PluginHost';
chrome.mojom.PluginHost_OpenPDF_ParamsSpec = { $: {} };
chrome.mojom.PluginAuthHost = {};
chrome.mojom.PluginAuthHost.$interfaceName = 'chrome.mojom.PluginAuthHost';
chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec = { $: {} };
chrome.mojom.PluginInfoHost = {};
chrome.mojom.PluginInfoHost.$interfaceName = 'chrome.mojom.PluginInfoHost';
chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec = { $: {} };
chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec = { $: {} };

// Enum: PluginStatus
chrome.mojom.PluginStatus = {
  kAllowed: 0,
  kBlocked: 1,
  kBlockedByPolicy: 2,
  kDisabled: 3,
  kNotFound: 4,
  kUnauthorized: 5,
};

// Struct: PluginInfo
mojo.internal.Struct(
    chrome.mojom.PluginInfoSpec, 'chrome.mojom.PluginInfo', [
      mojo.internal.StructField('status', 0, 0, chrome.mojom.PluginStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('plugin', 8, 0, content.mojom.WebPluginInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('actual_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_identifier', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_name', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PluginParam
mojo.internal.Struct(
    chrome.mojom.PluginParamSpec, 'chrome.mojom.PluginParam', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PluginHost
mojo.internal.Struct(
    chrome.mojom.PluginHost_OpenPDF_ParamsSpec, 'chrome.mojom.PluginHost_OpenPDF_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.PluginHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.PluginHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.PluginHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.PluginHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.PluginHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openPDF(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.PluginHost_OpenPDF_ParamsSpec,
      null,
      [url],
      false);
  }

};

chrome.mojom.PluginHost.getRemote = function() {
  let remote = new chrome.mojom.PluginHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginHost',
    'context');
  return remote.$;
};

chrome.mojom.PluginHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.PluginHost_OpenPDF_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.openPDF');
          const result = this.impl.openPDF(params.url);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.PluginHostReceiver = chrome.mojom.PluginHostReceiver;

chrome.mojom.PluginHostPtr = chrome.mojom.PluginHostRemote;
chrome.mojom.PluginHostRequest = chrome.mojom.PluginHostPendingReceiver;


// Interface: PluginAuthHost
mojo.internal.Struct(
    chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec, 'chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_Params', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('group_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

chrome.mojom.PluginAuthHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.PluginAuthHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginAuthHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.PluginAuthHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.PluginAuthHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.PluginAuthHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  blockedUnauthorizedPlugin(name, group_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec,
      null,
      [name, group_id],
      false);
  }

};

chrome.mojom.PluginAuthHost.getRemote = function() {
  let remote = new chrome.mojom.PluginAuthHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginAuthHost',
    'context');
  return remote.$;
};

chrome.mojom.PluginAuthHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.blockedUnauthorizedPlugin');
          const result = this.impl.blockedUnauthorizedPlugin(params.name, params.group_id);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

chrome.mojom.PluginAuthHostReceiver = chrome.mojom.PluginAuthHostReceiver;

chrome.mojom.PluginAuthHostPtr = chrome.mojom.PluginAuthHostRemote;
chrome.mojom.PluginAuthHostRequest = chrome.mojom.PluginAuthHostPendingReceiver;


// Interface: PluginInfoHost
mojo.internal.Struct(
    chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec, 'chrome.mojom.PluginInfoHost_GetPluginInfo_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('origin', 8, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec, 'chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParams', [
      mojo.internal.StructField('plugin_info', 0, 0, chrome.mojom.PluginInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chrome.mojom.PluginInfoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.PluginInfoHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginInfoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.PluginInfoHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.PluginInfoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.PluginInfoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPluginInfo(url, origin, mime_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec,
      chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec,
      [url, origin, mime_type],
      false);
  }

};

chrome.mojom.PluginInfoHost.getRemote = function() {
  let remote = new chrome.mojom.PluginInfoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginInfoHost',
    'context');
  return remote.$;
};

chrome.mojom.PluginInfoHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.getPluginInfo');
          const result = this.impl.getPluginInfo(params.url, params.origin, params.mime_type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec);
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

chrome.mojom.PluginInfoHostReceiver = chrome.mojom.PluginInfoHostReceiver;

chrome.mojom.PluginInfoHostPtr = chrome.mojom.PluginInfoHostRemote;
chrome.mojom.PluginInfoHostRequest = chrome.mojom.PluginInfoHostPendingReceiver;

