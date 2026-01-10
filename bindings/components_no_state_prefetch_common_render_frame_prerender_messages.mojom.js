// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/render_frame_prerender_messages.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};


// Interface: NoStatePrefetchMessages
prerender.mojom.mojom.NoStatePrefetchMessages = {};

prerender.mojom.mojom.NoStatePrefetchMessagesPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prerender.mojom.mojom.NoStatePrefetchMessagesRemote = class {
  static get $interfaceName() {
    return 'prerender.mojom.NoStatePrefetchMessages';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prerender.mojom.mojom.NoStatePrefetchMessagesPendingReceiver,
      handle);
    this.$ = new prerender.mojom.mojom.NoStatePrefetchMessagesRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prerender.mojom.mojom.NoStatePrefetchMessagesRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setIsNoStatePrefetching(histogram_prefix) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prerender.mojom.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec,
      null,
      [histogram_prefix]);
  }

};

prerender.mojom.mojom.NoStatePrefetchMessages.getRemote = function() {
  let remote = new prerender.mojom.mojom.NoStatePrefetchMessagesRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prerender.mojom.NoStatePrefetchMessages',
    'context');
  return remote.$;
};

// ParamsSpec for SetIsNoStatePrefetching
prerender.mojom.mojom.NoStatePrefetchMessages_SetIsNoStatePrefetching_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prerender.mojom.NoStatePrefetchMessages.SetIsNoStatePrefetching_Params',
      packedSize: 16,
      fields: [
        { name: 'histogram_prefix', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
prerender.mojom.mojom.NoStatePrefetchMessagesPtr = prerender.mojom.mojom.NoStatePrefetchMessagesRemote;
prerender.mojom.mojom.NoStatePrefetchMessagesRequest = prerender.mojom.mojom.NoStatePrefetchMessagesPendingReceiver;

