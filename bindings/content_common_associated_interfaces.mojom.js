// Auto-generated MojoJS binding
// Source: chromium_src/content/common/associated_interfaces.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var blink = blink || {};

content.mojom.RouteProvider = {};
content.mojom.RouteProvider.$interfaceName = 'content.mojom.RouteProvider';
content.mojom.RouteProvider_GetRoute_ParamsSpec = { $: {} };

// Interface: RouteProvider
mojo.internal.Struct(
    content.mojom.RouteProvider_GetRoute_ParamsSpec, 'content.mojom.RouteProvider_GetRoute_Params', [
      mojo.internal.StructField('frame_token', 0, 0, blink.mojom.LocalFrameTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, pending_associated_receiver<blink.mojom.AssociatedInterfaceProvider>Spec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.RouteProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RouteProviderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RouteProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RouteProviderPendingReceiver,
      handle);
    this.$ = new content.mojom.RouteProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RouteProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRoute(frame_token, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.RouteProvider_GetRoute_ParamsSpec,
      null,
      [frame_token, receiver],
      false);
  }

};

content.mojom.RouteProvider.getRemote = function() {
  let remote = new content.mojom.RouteProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RouteProvider',
    'context');
  return remote.$;
};

content.mojom.RouteProviderReceiver = class {
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
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.RouteProvider_GetRoute_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.getRoute');
          const result = this.impl.getRoute(params.frame_token, params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.RouteProviderReceiver = content.mojom.RouteProviderReceiver;

content.mojom.RouteProviderPtr = content.mojom.RouteProviderRemote;
content.mojom.RouteProviderRequest = content.mojom.RouteProviderPendingReceiver;

