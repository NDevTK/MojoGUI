// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/plugin.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};
var content = content || {};
var url = url || {};
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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.PluginHost',
    'context');
  return remote.$;
};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.PluginAuthHost',
    'context');
  return remote.$;
};

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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'chrome.mojom.PluginInfoHost',
    'context');
  return remote.$;
};

chrome.mojom.PluginInfoHostPtr = chrome.mojom.PluginInfoHostRemote;
chrome.mojom.PluginInfoHostRequest = chrome.mojom.PluginInfoHostPendingReceiver;

