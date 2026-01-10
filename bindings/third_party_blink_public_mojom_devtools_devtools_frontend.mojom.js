// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_frontend.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.DevToolsFrontend = {};
blink.mojom.DevToolsFrontend.$interfaceName = 'blink.mojom.DevToolsFrontend';
blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec = { $: {} };
blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec = { $: {} };
blink.mojom.DevToolsFrontendHost = {};
blink.mojom.DevToolsFrontendHost.$interfaceName = 'blink.mojom.DevToolsFrontendHost';
blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec = { $: {} };

// Interface: DevToolsFrontend
mojo.internal.Struct(
    blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec, 'blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_Params', [
      mojo.internal.StructField('api_script', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('host', 8, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.DevToolsFrontendHostRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec, 'blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_Params', [
      mojo.internal.StructField('extension_api', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DevToolsFrontendPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsFrontendRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsFrontend';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsFrontendPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsFrontendRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsFrontendRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setupDevToolsFrontend(api_script, host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec,
      null,
      [api_script, host],
      false);
  }

  setupDevToolsExtensionAPI(extension_api) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec,
      null,
      [extension_api],
      false);
  }

};

blink.mojom.DevToolsFrontend.getRemote = function() {
  let remote = new blink.mojom.DevToolsFrontendRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsFrontend',
    'context');
  return remote.$;
};

blink.mojom.DevToolsFrontendPtr = blink.mojom.DevToolsFrontendRemote;
blink.mojom.DevToolsFrontendRequest = blink.mojom.DevToolsFrontendPendingReceiver;


// Interface: DevToolsFrontendHost
mojo.internal.Struct(
    blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec, 'blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_Params', [
      mojo.internal.StructField('message', 0, 0, mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.DevToolsFrontendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DevToolsFrontendHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsFrontendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DevToolsFrontendHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.DevToolsFrontendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DevToolsFrontendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchEmbedderMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec,
      null,
      [message],
      false);
  }

};

blink.mojom.DevToolsFrontendHost.getRemote = function() {
  let remote = new blink.mojom.DevToolsFrontendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsFrontendHost',
    'context');
  return remote.$;
};

blink.mojom.DevToolsFrontendHostPtr = blink.mojom.DevToolsFrontendHostRemote;
blink.mojom.DevToolsFrontendHostRequest = blink.mojom.DevToolsFrontendHostPendingReceiver;

