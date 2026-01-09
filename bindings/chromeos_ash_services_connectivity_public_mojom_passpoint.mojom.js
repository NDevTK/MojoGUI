// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/connectivity/public/mojom/passpoint.mojom
// Module: chromeos.connectivity.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.connectivity = chromeos.connectivity || {};
chromeos.connectivity.mojom = chromeos.connectivity.mojom || {};


// Struct: PasspointSubscription
chromeos.connectivity.mojom.PasspointSubscriptionSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointSubscription',
      packedSize: 16,
      fields: [
        { name: 'expiration_epoch_ms', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PasspointEventsListener
chromeos.connectivity.mojom.PasspointEventsListener = {};

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
      [subscription]);
  }

  onPasspointSubscriptionRemoved(subscription) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec,
      null,
      [subscription]);
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

// ParamsSpec for OnPasspointSubscriptionAdded
chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointEventsListener.OnPasspointSubscriptionAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'subscription', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPasspointSubscriptionRemoved
chromeos.connectivity.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointEventsListener.OnPasspointSubscriptionRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'subscription', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.connectivity.mojom.PasspointEventsListenerPtr = chromeos.connectivity.mojom.PasspointEventsListenerRemote;
chromeos.connectivity.mojom.PasspointEventsListenerRequest = chromeos.connectivity.mojom.PasspointEventsListenerPendingReceiver;


// Interface: PasspointService
chromeos.connectivity.mojom.PasspointService = {};

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
      [id]);
  }

  listPasspointSubscriptions() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec,
      chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec,
      []);
  }

  deletePasspointSubscription(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec,
      chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec,
      [id]);
  }

  registerPasspointListener(listener) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.connectivity.mojom.PasspointService_RegisterPasspointListener_ParamsSpec,
      null,
      [listener]);
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

// ParamsSpec for GetPasspointSubscription
chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.GetPasspointSubscription_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.connectivity.mojom.PasspointService_GetPasspointSubscription_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.GetPasspointSubscription_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListPasspointSubscriptions
chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.ListPasspointSubscriptions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.connectivity.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.ListPasspointSubscriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeletePasspointSubscription
chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.DeletePasspointSubscription_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

chromeos.connectivity.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.DeletePasspointSubscription_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RegisterPasspointListener
chromeos.connectivity.mojom.PasspointService_RegisterPasspointListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.RegisterPasspointListener_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
chromeos.connectivity.mojom.PasspointServicePtr = chromeos.connectivity.mojom.PasspointServiceRemote;
chromeos.connectivity.mojom.PasspointServiceRequest = chromeos.connectivity.mojom.PasspointServicePendingReceiver;

