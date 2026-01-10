// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/connectivity/public/mojom/passpoint.mojom
// Module: chromeos.connectivity.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.connectivity = chromeos.connectivity || {};
chromeos.connectivity.mojom = chromeos.connectivity.mojom || {};

chromeos.connectivity.mojom.PasspointSubscriptionSpec = { $: {} };
chromeos.connectivity.mojom.PasspointEventsListener = {};
chromeos.connectivity.mojom.PasspointEventsListener.$interfaceName = 'chromeos.connectivity.mojom.PasspointEventsListener';
chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_ParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointService = {};
chromeos.connectivity.mojom.PasspointService.$interfaceName = 'chromeos.connectivity.mojom.PasspointService';
chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ResponseParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec = { $: {} };
chromeos.connectivity.mojom.PasspointService_RegisterPasspointListener_ParamsSpec = { $: {} };

// Struct: PasspointSubscription
mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointSubscriptionSpec, 'chromeos.connectivity.mojom.PasspointSubscription', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domains', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('friendly_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('provisioning_source', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('trusted_ca', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('expiration_epoch_ms', 40, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: PasspointEventsListener
mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_ParamsSpec, 'chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_Params', [
      mojo.internal.StructField('subscription', 0, 0, chromeos.connectivity.mojom.PasspointSubscriptionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec, 'chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_Params', [
      mojo.internal.StructField('subscription', 0, 0, chromeos.connectivity.mojom.PasspointSubscriptionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.connectivity.mojom.PasspointEventsListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.connectivity.mojom.PasspointEventsListenerRemote = class {
  static get $interfaceName() {
    return 'chromeos.connectivity.mojom.PasspointEventsListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.connectivity.mojom.PasspointEventsListenerPendingReceiver,
      handle);
    this.$ = new chromeos.connectivity.mojom.PasspointEventsListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.connectivity.mojom.PasspointEventsListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPasspointSubscriptionAdded(subscription) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_ParamsSpec,
      null,
      [subscription],
      false);
  }

  onPasspointSubscriptionRemoved(subscription) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec,
      null,
      [subscription],
      false);
  }

};

chromeos.connectivity.mojom.PasspointEventsListener.getRemote = function() {
  let remote = new chromeos.connectivity.mojom.PasspointEventsListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.connectivity.mojom.PasspointEventsListener',
    'context');
  return remote.$;
};

chromeos.connectivity.mojom.PasspointEventsListenerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPasspointSubscriptionAdded(params.subscription);
          break;
        }
        case 1: {
          const params = chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onPasspointSubscriptionRemoved(params.subscription);
          break;
        }
      }
    }});
  }
};

chromeos.connectivity.mojom.PasspointEventsListenerReceiver = chromeos.connectivity.mojom.PasspointEventsListenerReceiver;

chromeos.connectivity.mojom.PasspointEventsListenerPtr = chromeos.connectivity.mojom.PasspointEventsListenerRemote;
chromeos.connectivity.mojom.PasspointEventsListenerRequest = chromeos.connectivity.mojom.PasspointEventsListenerPendingReceiver;


// Interface: PasspointService
mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ParamsSpec, 'chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ResponseParamsSpec, 'chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, chromeos.connectivity.mojom.PasspointSubscriptionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec, 'chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec, 'chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(chromeos.connectivity.mojom.PasspointSubscriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec, 'chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec, 'chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.connectivity.mojom.PasspointService_RegisterPasspointListener_ParamsSpec, 'chromeos.connectivity.mojom.PasspointService_RegisterPasspointListener_Params', [
      mojo.internal.StructField('listener', 0, 0, mojo.internal.InterfaceProxy(chromeos.connectivity.mojom.PasspointEventsListenerSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromeos.connectivity.mojom.PasspointServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.connectivity.mojom.PasspointServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.connectivity.mojom.PasspointService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.connectivity.mojom.PasspointServicePendingReceiver,
      handle);
    this.$ = new chromeos.connectivity.mojom.PasspointServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.connectivity.mojom.PasspointServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPasspointSubscription(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ParamsSpec,
      chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ResponseParamsSpec,
      [id],
      false);
  }

  listPasspointSubscriptions() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec,
      chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec,
      [],
      false);
  }

  deletePasspointSubscription(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec,
      chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec,
      [id],
      false);
  }

  registerPasspointListener(listener) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.connectivity.mojom.PasspointService_RegisterPasspointListener_ParamsSpec,
      null,
      [listener],
      false);
  }

};

chromeos.connectivity.mojom.PasspointService.getRemote = function() {
  let remote = new chromeos.connectivity.mojom.PasspointServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.connectivity.mojom.PasspointService',
    'context');
  return remote.$;
};

chromeos.connectivity.mojom.PasspointServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getPasspointSubscription(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec.$.decode(message.payload);
          const result = this.impl.listPasspointSubscriptions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec.$.decode(message.payload);
          const result = this.impl.deletePasspointSubscription(params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = chromeos.connectivity.mojom.PasspointService_RegisterPasspointListener_ParamsSpec.$.decode(message.payload);
          const result = this.impl.registerPasspointListener(params.listener);
          break;
        }
      }
    }});
  }
};

chromeos.connectivity.mojom.PasspointServiceReceiver = chromeos.connectivity.mojom.PasspointServiceReceiver;

chromeos.connectivity.mojom.PasspointServicePtr = chromeos.connectivity.mojom.PasspointServiceRemote;
chromeos.connectivity.mojom.PasspointServiceRequest = chromeos.connectivity.mojom.PasspointServicePendingReceiver;

