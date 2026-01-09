// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/render_frame_prerender_messages.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};


// Interface: NoStatePrefetchMessages
prerender.mojom.NoStatePrefetchMessages = {};

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
      [histogram_prefix]);
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

// ParamsSpec for SetIsNoStatePrefetching
prerender.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prerender.mojom.NoStatePrefetchMessages.SetIsNoStatePrefetching_Params',
      packedSize: 16,
      fields: [
        { name: 'histogram_prefix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
prerender.mojom.NoStatePrefetchMessagesPtr = prerender.mojom.NoStatePrefetchMessagesRemote;
prerender.mojom.NoStatePrefetchMessagesRequest = prerender.mojom.NoStatePrefetchMessagesPendingReceiver;

