// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/testing/bindings/mojom/state.mojom
// Module: ash.cros_healthd.connectivity.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.connectivity = ash.cros_healthd.connectivity || {};
ash.cros_healthd.connectivity.mojom = ash.cros_healthd.connectivity.mojom || {};


// Interface: State
ash.cros_healthd.connectivity.mojom.State = {};

ash.cros_healthd.connectivity.mojom.StatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.connectivity.mojom.StateRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.connectivity.mojom.State';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.connectivity.mojom.StatePendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.connectivity.mojom.StateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.connectivity.mojom.StateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  lastCallHasNext() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ParamsSpec,
      ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ResponseParamsSpec,
      []);
  }

  waitLastCall() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ParamsSpec,
      null,
      []);
  }

  fulfillLastCallCallback() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.connectivity.mojom.State_FulfillLastCallCallback_ParamsSpec,
      null,
      []);
  }

};

ash.cros_healthd.connectivity.mojom.State.getRemote = function() {
  let remote = new ash.cros_healthd.connectivity.mojom.StateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.connectivity.mojom.State',
    'context');
  return remote.$;
};

// ParamsSpec for LastCallHasNext
ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.connectivity.mojom.State.LastCallHasNext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.connectivity.mojom.State.LastCallHasNext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_next', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for WaitLastCall
ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.connectivity.mojom.State.WaitLastCall_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FulfillLastCallCallback
ash.cros_healthd.connectivity.mojom.State_FulfillLastCallCallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.connectivity.mojom.State.FulfillLastCallCallback_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.connectivity.mojom.StatePtr = ash.cros_healthd.connectivity.mojom.StateRemote;
ash.cros_healthd.connectivity.mojom.StateRequest = ash.cros_healthd.connectivity.mojom.StatePendingReceiver;


// Interface: ConnectivityTestProvider
ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider = {};

ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRemote = class {
  static get $interfaceName() {
    return 'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderPendingReceiver,
      handle);
    this.$ = new ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindContext(remote, receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindContext_ParamsSpec,
      null,
      [remote, receiver]);
  }

  bindTestProvider(interface_name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindTestProvider_ParamsSpec,
      null,
      [interface_name, receiver]);
  }

};

ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider.getRemote = function() {
  let remote = new ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider',
    'context');
  return remote.$;
};

// ParamsSpec for BindContext
ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider.BindContext_Params',
      packedSize: 24,
      fields: [
        { name: 'remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for BindTestProvider
ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindTestProvider_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider.BindTestProvider_Params',
      packedSize: 24,
      fields: [
        { name: 'interface_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderPtr = ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRemote;
ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRequest = ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderPendingReceiver;

