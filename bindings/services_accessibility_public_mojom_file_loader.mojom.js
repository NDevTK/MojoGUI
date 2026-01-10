// Auto-generated MojoJS binding
// Source: chromium_src/services/accessibility/public/mojom/file_loader.mojom
// Module: ax.mojom

'use strict';

// Module namespace
var ax = ax || {};
ax.mojom = ax.mojom || {};
var mojo_base = mojo_base || {};

ax.mojom.AccessibilityFileLoader = {};
ax.mojom.AccessibilityFileLoader.$interfaceName = 'ax.mojom.AccessibilityFileLoader';
ax.mojom.AccessibilityFileLoader_Load_ParamsSpec = { $: {} };
ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec = { $: {} };

// Interface: AccessibilityFileLoader
mojo.internal.Struct(
    ax.mojom.AccessibilityFileLoader_Load_ParamsSpec, 'ax.mojom.AccessibilityFileLoader_Load_Params', [
      mojo.internal.StructField('path', 0, 0, mojo_base.mojom.RelativeFilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec, 'ax.mojom.AccessibilityFileLoader_Load_ResponseParams', [
      mojo.internal.StructField('file', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

ax.mojom.AccessibilityFileLoaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ax.mojom.AccessibilityFileLoaderRemote = class {
  static get $interfaceName() {
    return 'ax.mojom.AccessibilityFileLoader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ax.mojom.AccessibilityFileLoaderPendingReceiver,
      handle);
    this.$ = new ax.mojom.AccessibilityFileLoaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ax.mojom.AccessibilityFileLoaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  load(path) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ax.mojom.AccessibilityFileLoader_Load_ParamsSpec,
      ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec,
      [path],
      false);
  }

};

ax.mojom.AccessibilityFileLoader.getRemote = function() {
  let remote = new ax.mojom.AccessibilityFileLoaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ax.mojom.AccessibilityFileLoader',
    'context');
  return remote.$;
};

ax.mojom.AccessibilityFileLoaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ax.mojom.AccessibilityFileLoader_Load_ParamsSpec.$.decode(message.payload);
          const result = this.impl.load(params.path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ax.mojom.AccessibilityFileLoader_Load_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ax.mojom.AccessibilityFileLoaderReceiver = ax.mojom.AccessibilityFileLoaderReceiver;

ax.mojom.AccessibilityFileLoaderPtr = ax.mojom.AccessibilityFileLoaderRemote;
ax.mojom.AccessibilityFileLoaderRequest = ax.mojom.AccessibilityFileLoaderPendingReceiver;

