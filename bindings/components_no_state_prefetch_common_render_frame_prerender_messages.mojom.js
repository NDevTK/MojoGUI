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
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'prerender.mojom.NoStatePrefetchMessages',
    'context');
  return remote.$;
};

prerender.mojom.NoStatePrefetchMessagesPtr = prerender.mojom.NoStatePrefetchMessagesRemote;
prerender.mojom.NoStatePrefetchMessagesRequest = prerender.mojom.NoStatePrefetchMessagesPendingReceiver;

