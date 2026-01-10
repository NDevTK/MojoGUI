// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/connectivity/public/mojom/passpoint.mojom
// Module: chromeos.connectivity.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.connectivity = chromeos.connectivity || {};
chromeos.connectivity.connectivity.mojom = chromeos.connectivity.connectivity.mojom || {};


// Struct: PasspointSubscription
chromeos.connectivity.connectivity.mojom.mojom.PasspointSubscriptionSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointSubscription',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domains', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'friendly_name', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'provisioning_source', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'trusted_ca', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'expiration_epoch_ms', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: PasspointEventsListener
chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListener = {};

chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerRemote = class {
  static get $interfaceName() {
    return 'chromeos.connectivity.mojom.PasspointEventsListener';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerPendingReceiver,
      handle);
    this.$ = new chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onPasspointSubscriptionAdded(subscription) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_ParamsSpec,
      null,
      [subscription]);
  }

  onPasspointSubscriptionRemoved(subscription) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec,
      null,
      [subscription]);
  }

};

chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListener.getRemote = function() {
  let remote = new chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.connectivity.mojom.PasspointEventsListener',
    'context');
  return remote.$;
};

// ParamsSpec for OnPasspointSubscriptionAdded
chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListener_OnPasspointSubscriptionAdded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointEventsListener.OnPasspointSubscriptionAdded_Params',
      packedSize: 16,
      fields: [
        { name: 'subscription', packedOffset: 0, packedBitOffset: 0, type: chromeos.connectivity.mojom.PasspointSubscriptionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPasspointSubscriptionRemoved
chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListener_OnPasspointSubscriptionRemoved_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointEventsListener.OnPasspointSubscriptionRemoved_Params',
      packedSize: 16,
      fields: [
        { name: 'subscription', packedOffset: 0, packedBitOffset: 0, type: chromeos.connectivity.mojom.PasspointSubscriptionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerPtr = chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerRemote;
chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerRequest = chromeos.connectivity.connectivity.mojom.mojom.PasspointEventsListenerPendingReceiver;


// Interface: PasspointService
chromeos.connectivity.connectivity.mojom.mojom.PasspointService = {};

chromeos.connectivity.connectivity.mojom.mojom.PasspointServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.connectivity.connectivity.mojom.mojom.PasspointServiceRemote = class {
  static get $interfaceName() {
    return 'chromeos.connectivity.mojom.PasspointService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.connectivity.connectivity.mojom.mojom.PasspointServicePendingReceiver,
      handle);
    this.$ = new chromeos.connectivity.connectivity.mojom.mojom.PasspointServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.connectivity.connectivity.mojom.mojom.PasspointServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPasspointSubscription(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.connectivity.connectivity.mojom.mojom.PasspointService_GetPasspointSubscription_ParamsSpec,
      chromeos.connectivity.connectivity.mojom.mojom.PasspointService_GetPasspointSubscription_ResponseParamsSpec,
      [id]);
  }

  listPasspointSubscriptions() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.connectivity.connectivity.mojom.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec,
      chromeos.connectivity.connectivity.mojom.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec,
      []);
  }

  deletePasspointSubscription(id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.connectivity.connectivity.mojom.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec,
      chromeos.connectivity.connectivity.mojom.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec,
      [id]);
  }

  registerPasspointListener(listener) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.connectivity.connectivity.mojom.mojom.PasspointService_RegisterPasspointListener_ParamsSpec,
      null,
      [listener]);
  }

};

chromeos.connectivity.connectivity.mojom.mojom.PasspointService.getRemote = function() {
  let remote = new chromeos.connectivity.connectivity.mojom.mojom.PasspointServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.connectivity.mojom.PasspointService',
    'context');
  return remote.$;
};

// ParamsSpec for GetPasspointSubscription
chromeos.connectivity.connectivity.mojom.mojom.PasspointService_GetPasspointSubscription_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.GetPasspointSubscription_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.connectivity.connectivity.mojom.mojom.PasspointService_GetPasspointSubscription_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.GetPasspointSubscription_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: chromeos.connectivity.mojom.PasspointSubscriptionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ListPasspointSubscriptions
chromeos.connectivity.connectivity.mojom.mojom.PasspointService_ListPasspointSubscriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.ListPasspointSubscriptions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

chromeos.connectivity.connectivity.mojom.mojom.PasspointService_ListPasspointSubscriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.ListPasspointSubscriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(chromeos.connectivity.mojom.PasspointSubscriptionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for DeletePasspointSubscription
chromeos.connectivity.connectivity.mojom.mojom.PasspointService_DeletePasspointSubscription_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.DeletePasspointSubscription_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

chromeos.connectivity.connectivity.mojom.mojom.PasspointService_DeletePasspointSubscription_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.DeletePasspointSubscription_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RegisterPasspointListener
chromeos.connectivity.connectivity.mojom.mojom.PasspointService_RegisterPasspointListener_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromeos.connectivity.mojom.PasspointService.RegisterPasspointListener_Params',
      packedSize: 16,
      fields: [
        { name: 'listener', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromeos.connectivity.connectivity.mojom.mojom.PasspointServicePtr = chromeos.connectivity.connectivity.mojom.mojom.PasspointServiceRemote;
chromeos.connectivity.connectivity.mojom.mojom.PasspointServiceRequest = chromeos.connectivity.connectivity.mojom.mojom.PasspointServicePendingReceiver;

