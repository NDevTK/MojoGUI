// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/devtools_frontend.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: DevToolsFrontend
blink.mojom.mojom.DevToolsFrontend = {};

blink.mojom.mojom.DevToolsFrontendPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevToolsFrontendRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsFrontend';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevToolsFrontendPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevToolsFrontendRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevToolsFrontendRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setupDevToolsFrontend(api_script, host) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec,
      null,
      [api_script, host]);
  }

  setupDevToolsExtensionAPI(extension_api) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec,
      null,
      [extension_api]);
  }

};

blink.mojom.mojom.DevToolsFrontend.getRemote = function() {
  let remote = new blink.mojom.mojom.DevToolsFrontendRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsFrontend',
    'context');
  return remote.$;
};

// ParamsSpec for SetupDevToolsFrontend
blink.mojom.mojom.DevToolsFrontend_SetupDevToolsFrontend_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DevToolsFrontend.SetupDevToolsFrontend_Params',
      packedSize: 24,
      fields: [
        { name: 'api_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.DevToolsFrontendHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetupDevToolsExtensionAPI
blink.mojom.mojom.DevToolsFrontend_SetupDevToolsExtensionAPI_ParamsSpec = {
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
blink.mojom.mojom.DevToolsFrontendPtr = blink.mojom.mojom.DevToolsFrontendRemote;
blink.mojom.mojom.DevToolsFrontendRequest = blink.mojom.mojom.DevToolsFrontendPendingReceiver;


// Interface: DevToolsFrontendHost
blink.mojom.mojom.DevToolsFrontendHost = {};

blink.mojom.mojom.DevToolsFrontendHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DevToolsFrontendHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DevToolsFrontendHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DevToolsFrontendHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DevToolsFrontendHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DevToolsFrontendHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchEmbedderMessage(message) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec,
      null,
      [message]);
  }

};

blink.mojom.mojom.DevToolsFrontendHost.getRemote = function() {
  let remote = new blink.mojom.mojom.DevToolsFrontendHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DevToolsFrontendHost',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchEmbedderMessage
blink.mojom.mojom.DevToolsFrontendHost_DispatchEmbedderMessage_ParamsSpec = {
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
blink.mojom.mojom.DevToolsFrontendHostPtr = blink.mojom.mojom.DevToolsFrontendHostRemote;
blink.mojom.mojom.DevToolsFrontendHostRequest = blink.mojom.mojom.DevToolsFrontendHostPendingReceiver;

