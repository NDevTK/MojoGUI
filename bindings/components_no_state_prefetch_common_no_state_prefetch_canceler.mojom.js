// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/no_state_prefetch_canceler.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};


// Interface: NoStatePrefetchCanceler
prerender.mojom.NoStatePrefetchCancelerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prerender.mojom.NoStatePrefetchCancelerRemote = class {
  static get $interfaceName() {
    return 'prerender.mojom.NoStatePrefetchCanceler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prerender.mojom.NoStatePrefetchCancelerPendingReceiver,
      handle);
    this.$ = new prerender.mojom.NoStatePrefetchCancelerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prerender.mojom.NoStatePrefetchCancelerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  cancelNoStatePrefetchForUnsupportedScheme() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec.$,
      null,
      []);
  }

  cancelNoStatePrefetchAfterSubresourcesDiscovered() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec.$,
      null,
      []);
  }

};

prerender.mojom.NoStatePrefetchCanceler.getRemote = function() {
  let remote = new prerender.mojom.NoStatePrefetchCancelerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prerender.mojom.NoStatePrefetchCanceler',
    'context');
  return remote.$;
};

// ParamsSpec for CancelNoStatePrefetchForUnsupportedScheme
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prerender.mojom.NoStatePrefetchCanceler.CancelNoStatePrefetchForUnsupportedScheme_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CancelNoStatePrefetchAfterSubresourcesDiscovered
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prerender.mojom.NoStatePrefetchCanceler.CancelNoStatePrefetchAfterSubresourcesDiscovered_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
prerender.mojom.NoStatePrefetchCancelerPtr = prerender.mojom.NoStatePrefetchCancelerRemote;
prerender.mojom.NoStatePrefetchCancelerRequest = prerender.mojom.NoStatePrefetchCancelerPendingReceiver;

