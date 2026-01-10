// Auto-generated MojoJS binding
// Source: chromium_src/components/no_state_prefetch/common/no_state_prefetch_canceler.mojom
// Module: prerender.mojom

'use strict';

// Module namespace
var prerender = prerender || {};
prerender.mojom = prerender.mojom || {};

prerender.mojom.NoStatePrefetchCanceler = {};
prerender.mojom.NoStatePrefetchCanceler.$interfaceName = 'prerender.mojom.NoStatePrefetchCanceler';
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec = { $: {} };
prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec = { $: {} };

// Interface: NoStatePrefetchCanceler
mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec, 'prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec, 'prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_Params', [
    ],
    [[0, 8]]);

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
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec,
      null,
      [],
      false);
  }

  cancelNoStatePrefetchAfterSubresourcesDiscovered() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec,
      null,
      [],
      false);
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

prerender.mojom.NoStatePrefetchCancelerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchForUnsupportedScheme_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelNoStatePrefetchForUnsupportedScheme();
          break;
        }
        case 1: {
          const params = prerender.mojom.NoStatePrefetchCanceler_CancelNoStatePrefetchAfterSubresourcesDiscovered_ParamsSpec.$.decode(message.payload);
          const result = this.impl.cancelNoStatePrefetchAfterSubresourcesDiscovered();
          break;
        }
      }
    });
  }
};

prerender.mojom.NoStatePrefetchCancelerReceiver = prerender.mojom.NoStatePrefetchCancelerReceiver;

prerender.mojom.NoStatePrefetchCancelerPtr = prerender.mojom.NoStatePrefetchCancelerRemote;
prerender.mojom.NoStatePrefetchCancelerRequest = prerender.mojom.NoStatePrefetchCancelerPendingReceiver;

