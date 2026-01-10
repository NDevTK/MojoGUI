// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/external_mojo/public/mojom/test_connector.mojom
// Module: chromecast.external_mojo.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.external_mojo = chromecast.external_mojo || {};
chromecast.external_mojo.mojom = chromecast.external_mojo.mojom || {};

chromecast.external_mojo.mojom.TestExternalConnector = {};
chromecast.external_mojo.mojom.TestExternalConnector.$interfaceName = 'chromecast.external_mojo.mojom.TestExternalConnector';
chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec = { $: {} };

// Interface: TestExternalConnector
mojo.internal.Struct(
    chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec, 'chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_Params', [
      mojo.internal.StructField('service_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('interface_pipe', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 32]]);

chromecast.external_mojo.mojom.TestExternalConnectorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.external_mojo.mojom.TestExternalConnectorRemote = class {
  static get $interfaceName() {
    return 'chromecast.external_mojo.mojom.TestExternalConnector';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.external_mojo.mojom.TestExternalConnectorPendingReceiver,
      handle);
    this.$ = new chromecast.external_mojo.mojom.TestExternalConnectorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.external_mojo.mojom.TestExternalConnectorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindInterfaceInternal(service_name, interface_name, interface_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec,
      null,
      [service_name, interface_name, interface_pipe],
      false);
  }

};

chromecast.external_mojo.mojom.TestExternalConnector.getRemote = function() {
  let remote = new chromecast.external_mojo.mojom.TestExternalConnectorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.external_mojo.mojom.TestExternalConnector',
    'context');
  return remote.$;
};

chromecast.external_mojo.mojom.TestExternalConnectorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.external_mojo.mojom.TestExternalConnector_BindInterfaceInternal_ParamsSpec.$.decode(message.payload);
          const result = this.impl.bindInterfaceInternal(params.service_name, params.interface_name, params.interface_pipe);
          break;
        }
      }
    }});
  }
};

chromecast.external_mojo.mojom.TestExternalConnectorReceiver = chromecast.external_mojo.mojom.TestExternalConnectorReceiver;

chromecast.external_mojo.mojom.TestExternalConnectorPtr = chromecast.external_mojo.mojom.TestExternalConnectorRemote;
chromecast.external_mojo.mojom.TestExternalConnectorRequest = chromecast.external_mojo.mojom.TestExternalConnectorPendingReceiver;

