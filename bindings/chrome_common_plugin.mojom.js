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


// Enum: PluginStatus
chrome.mojom.mojom.PluginStatus = {
  kAllowed: 0,
  kBlocked: 1,
  kBlockedByPolicy: 2,
  kDisabled: 3,
  kNotFound: 4,
  kUnauthorized: 5,
};
chrome.mojom.mojom.PluginStatusSpec = { $: mojo.internal.Enum() };

// Struct: PluginInfo
chrome.mojom.mojom.PluginInfoSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginInfo',
      packedSize: 48,
      fields: [
        { name: 'status', packedOffset: 32, packedBitOffset: 0, type: chrome.mojom.PluginStatusSpec, nullable: false, minVersion: 0 },
        { name: 'plugin', packedOffset: 0, packedBitOffset: 0, type: content.mojom.WebPluginInfoSpec, nullable: false, minVersion: 0 },
        { name: 'actual_mime_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'group_identifier', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'group_name', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: PluginParam
chrome.mojom.mojom.PluginParamSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginParam',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PluginHost
chrome.mojom.mojom.PluginHost = {};

chrome.mojom.mojom.PluginHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.PluginHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.PluginHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.PluginHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.PluginHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openPDF(url) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.PluginHost_OpenPDF_ParamsSpec,
      null,
      [url]);
  }

};

chrome.mojom.mojom.PluginHost.getRemote = function() {
  let remote = new chrome.mojom.mojom.PluginHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginHost',
    'context');
  return remote.$;
};

// ParamsSpec for OpenPDF
chrome.mojom.mojom.PluginHost_OpenPDF_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginHost.OpenPDF_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.PluginHostPtr = chrome.mojom.mojom.PluginHostRemote;
chrome.mojom.mojom.PluginHostRequest = chrome.mojom.mojom.PluginHostPendingReceiver;


// Interface: PluginAuthHost
chrome.mojom.mojom.PluginAuthHost = {};

chrome.mojom.mojom.PluginAuthHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.PluginAuthHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginAuthHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.PluginAuthHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.PluginAuthHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.PluginAuthHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  blockedUnauthorizedPlugin(name, group_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec,
      null,
      [name, group_id]);
  }

};

chrome.mojom.mojom.PluginAuthHost.getRemote = function() {
  let remote = new chrome.mojom.mojom.PluginAuthHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginAuthHost',
    'context');
  return remote.$;
};

// ParamsSpec for BlockedUnauthorizedPlugin
chrome.mojom.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginAuthHost.BlockedUnauthorizedPlugin_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'group_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.PluginAuthHostPtr = chrome.mojom.mojom.PluginAuthHostRemote;
chrome.mojom.mojom.PluginAuthHostRequest = chrome.mojom.mojom.PluginAuthHostPendingReceiver;


// Interface: PluginInfoHost
chrome.mojom.mojom.PluginInfoHost = {};

chrome.mojom.mojom.PluginInfoHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chrome.mojom.mojom.PluginInfoHostRemote = class {
  static get $interfaceName() {
    return 'chrome.mojom.PluginInfoHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chrome.mojom.mojom.PluginInfoHostPendingReceiver,
      handle);
    this.$ = new chrome.mojom.mojom.PluginInfoHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chrome.mojom.mojom.PluginInfoHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPluginInfo(url, origin, mime_type) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chrome.mojom.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec,
      chrome.mojom.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec,
      [url, origin, mime_type]);
  }

};

chrome.mojom.mojom.PluginInfoHost.getRemote = function() {
  let remote = new chrome.mojom.mojom.PluginInfoHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chrome.mojom.PluginInfoHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetPluginInfo
chrome.mojom.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginInfoHost.GetPluginInfo_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'origin', packedOffset: 8, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'mime_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

chrome.mojom.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginInfoHost.GetPluginInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'plugin_info', packedOffset: 0, packedBitOffset: 0, type: chrome.mojom.PluginInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chrome.mojom.mojom.PluginInfoHostPtr = chrome.mojom.mojom.PluginInfoHostRemote;
chrome.mojom.mojom.PluginInfoHostRequest = chrome.mojom.mojom.PluginInfoHostPendingReceiver;

