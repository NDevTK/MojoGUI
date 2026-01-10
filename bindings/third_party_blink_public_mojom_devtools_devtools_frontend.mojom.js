// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_frontend.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DevToolsFrontend
blink.mojom.DevToolsFrontend = {};

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
      [api_script, host]);
  }

  setupDevToolsExtensionAPI(extension_api) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec,
      null,
      [extension_api]);
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

// ParamsSpec for SetupDevToolsFrontend
blink.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsFrontend.SetupDevToolsFrontend_Params',
      packedSize: 24,
      fields: [
        { name: 'api_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetupDevToolsExtensionAPI
blink.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsFrontend.SetupDevToolsExtensionAPI_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_api', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevToolsFrontendPtr = blink.mojom.DevToolsFrontendRemote;
blink.mojom.DevToolsFrontendRequest = blink.mojom.DevToolsFrontendPendingReceiver;


// Interface: DevToolsFrontendHost
blink.mojom.DevToolsFrontendHost = {};

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
      [message]);
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

// ParamsSpec for DispatchEmbedderMessage
blink.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsFrontendHost.DispatchEmbedderMessage_Params',
      packedSize: 16,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.DictionaryValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.DevToolsFrontendHostPtr = blink.mojom.DevToolsFrontendHostRemote;
blink.mojom.DevToolsFrontendHostRequest = blink.mojom.DevToolsFrontendHostPendingReceiver;

