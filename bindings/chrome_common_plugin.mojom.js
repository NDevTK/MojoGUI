// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/plugin.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


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
chrome.mojom.PluginInfoSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginInfo',
      packedSize: 48,
      fields: [
        { name: 'status', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.PluginStatusSpec, nullable: false },
        { name: 'plugin', packedOffset: 16, packedBitOffset: 0, type: content.mojom.WebPluginInfoSpec, nullable: false },
        { name: 'actual_mime_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'group_identifier', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'group_name', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PluginParam
chrome.mojom.PluginParamSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginParam',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'value', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PluginHost
chrome.mojom.PluginHost = {};

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
      [url]);
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

// ParamsSpec for OpenPDF
chrome.mojom.PluginHost_OpenPDF_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginHost.OpenPDF_Params',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.PluginHostPtr = chrome.mojom.PluginHostRemote;
chrome.mojom.PluginHostRequest = chrome.mojom.PluginHostPendingReceiver;


// Interface: PluginAuthHost
chrome.mojom.PluginAuthHost = {};

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
      [name, group_id]);
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

// ParamsSpec for BlockedUnauthorizedPlugin
chrome.mojom.PluginAuthHost_BlockedUnauthorizedPlugin_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginAuthHost.BlockedUnauthorizedPlugin_Params',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'group_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.PluginAuthHostPtr = chrome.mojom.PluginAuthHostRemote;
chrome.mojom.PluginAuthHostRequest = chrome.mojom.PluginAuthHostPendingReceiver;


// Interface: PluginInfoHost
chrome.mojom.PluginInfoHost = {};

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
      [url, origin, mime_type]);
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

// ParamsSpec for GetPluginInfo
chrome.mojom.PluginInfoHost_GetPluginInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginInfoHost.GetPluginInfo_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'mime_type', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chrome.mojom.PluginInfoHost_GetPluginInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chrome.mojom.PluginInfoHost.GetPluginInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'plugin_info', packedOffset: 8, packedBitOffset: 0, type: chrome.mojom.PluginInfoSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chrome.mojom.PluginInfoHostPtr = chrome.mojom.PluginInfoHostRemote;
chrome.mojom.PluginInfoHostRequest = chrome.mojom.PluginInfoHostPendingReceiver;

