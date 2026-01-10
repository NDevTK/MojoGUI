// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/render_frame_prerender_messages.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};

prerender.mojom.NoStatePrefetchMessages = {};
prerender.mojom.NoStatePrefetchMessages.$interfaceName = 'prerender.mojom.NoStatePrefetchMessages';
prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec = { $: {} };

// Interface: NoStatePrefetchMessages
mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec, 'prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_Params', [
      mojo.internal.StructField('histogram_prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

prerender.mojom.NoStatePrefetchMessagesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prerender.mojom.NoStatePrefetchMessagesRemote = class {
  static get $interfaceName() {
    return 'prerender.mojom.NoStatePrefetchMessages';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prerender.mojom.NoStatePrefetchMessagesPendingReceiver,
      handle);
    this.$ = new prerender.mojom.NoStatePrefetchMessagesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prerender.mojom.NoStatePrefetchMessagesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setIsNoStatePrefetching(histogram_prefix) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec,
      null,
      [histogram_prefix],
      false);
  }

};

prerender.mojom.NoStatePrefetchMessages.getRemote = function() {
  let remote = new prerender.mojom.NoStatePrefetchMessagesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prerender.mojom.NoStatePrefetchMessages',
    'context');
  return remote.$;
};

prerender.mojom.NoStatePrefetchMessagesReceiver = class {
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
          const params = prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setIsNoStatePrefetching(params.histogram_prefix);
          break;
        }
      }
    }});
  }
};

prerender.mojom.NoStatePrefetchMessagesReceiver = prerender.mojom.NoStatePrefetchMessagesReceiver;

prerender.mojom.NoStatePrefetchMessagesPtr = prerender.mojom.NoStatePrefetchMessagesRemote;
prerender.mojom.NoStatePrefetchMessagesRequest = prerender.mojom.NoStatePrefetchMessagesPendingReceiver;

