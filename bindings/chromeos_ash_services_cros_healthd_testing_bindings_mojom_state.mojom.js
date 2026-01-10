// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_healthd/testing/bindings/mojom/state.mojom
// Module: ash.cros_healthd.connectivity.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_healthd = ash.cros_healthd || {};
ash.cros_healthd.connectivity = ash.cros_healthd.connectivity || {};
ash.cros_healthd.connectivity.mojom = ash.cros_healthd.connectivity.mojom || {};

ash.cros_healthd.connectivity.mojom.State = {};
ash.cros_healthd.connectivity.mojom.State.$interfaceName = 'ash.cros_healthd.connectivity.mojom.State';
ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ParamsSpec = { $: {} };
ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ResponseParamsSpec = { $: {} };
ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ParamsSpec = { $: {} };
ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ResponseParamsSpec = { $: {} };
ash.cros_healthd.connectivity.mojom.State_FulfillLastCallCallback_ParamsSpec = { $: {} };
ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider = {};
ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider.$interfaceName = 'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider';
ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindContext_ParamsSpec = { $: {} };
ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindTestProvider_ParamsSpec = { $: {} };

// Interface: State
mojo.internal.Struct(
    ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ParamsSpec, 'ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ResponseParamsSpec, 'ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ResponseParams', [
      mojo.internal.StructField('has_next', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ParamsSpec, 'ash.cros_healthd.connectivity.mojom.State_WaitLastCall_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ResponseParamsSpec, 'ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.cros_healthd.connectivity.mojom.State_FulfillLastCallCallback_ParamsSpec, 'ash.cros_healthd.connectivity.mojom.State_FulfillLastCallCallback_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
  }

  waitLastCall() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ParamsSpec,
      ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ResponseParamsSpec,
      [],
      false);
  }

  fulfillLastCallCallback() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.cros_healthd.connectivity.mojom.State_FulfillLastCallCallback_ParamsSpec,
      null,
      [],
      false);
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

ash.cros_healthd.connectivity.mojom.StateReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.lastCallHasNext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.connectivity.mojom.State_LastCallHasNext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ParamsSpec.$.decode(message.payload);
          const result = this.impl.waitLastCall();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_healthd.connectivity.mojom.State_WaitLastCall_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = ash.cros_healthd.connectivity.mojom.State_FulfillLastCallCallback_ParamsSpec.$.decode(message.payload);
          const result = this.impl.fulfillLastCallCallback();
          break;
        }
      }
    }});
  }
};

ash.cros_healthd.connectivity.mojom.StateReceiver = ash.cros_healthd.connectivity.mojom.StateReceiver;

ash.cros_healthd.connectivity.mojom.StatePtr = ash.cros_healthd.connectivity.mojom.StateRemote;
ash.cros_healthd.connectivity.mojom.StateRequest = ash.cros_healthd.connectivity.mojom.StatePendingReceiver;


// Interface: ConnectivityTestProvider
mojo.internal.Struct(
    ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindContext_ParamsSpec, 'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindContext_Params', [
      mojo.internal.StructField('remote', 0, 0, mojo.internal.InterfaceProxy(ash.cros_healthd.connectivity.mojom.StateSpec), null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.InterfaceRequest(ash.cros_healthd.connectivity.mojom.StateSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindTestProvider_ParamsSpec, 'ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindTestProvider_Params', [
      mojo.internal.StructField('interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [remote, receiver],
      false);
  }

  bindTestProvider(interface_name, receiver) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindTestProvider_ParamsSpec,
      null,
      [interface_name, receiver],
      false);
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

ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindContext_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindContext(params.remote, params.receiver);
          break;
        }
        case 1: {
          const params = ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider_BindTestProvider_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindTestProvider(params.interface_name, params.receiver);
          break;
        }
      }
    }});
  }
};

ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderReceiver = ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderReceiver;

ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderPtr = ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRemote;
ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderRequest = ash.cros_healthd.connectivity.mojom.ConnectivityTestProviderPendingReceiver;

