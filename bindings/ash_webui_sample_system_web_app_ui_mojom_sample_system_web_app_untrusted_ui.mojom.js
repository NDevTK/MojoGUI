// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_untrusted_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};

ash.mojom.sample_swa.UntrustedPageInterfacesFactory = {};
ash.mojom.sample_swa.UntrustedPageInterfacesFactory.$interfaceName = 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory';
ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec = { $: {} };

// Interface: UntrustedPageInterfacesFactory
mojo.internal.Struct(
    ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec, 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_Params', [
      mojo.internal.StructField('child_page', 0, 0, mojo.internal.InterfaceProxy(ash.mojom.sample_swa.ChildUntrustedPageRemote), null, false, 0, undefined),
      mojo.internal.StructField('parent_page', 8, 0, mojo.internal.InterfaceRequest(ash.mojom.sample_swa.ParentTrustedPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.UntrustedPageInterfacesFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createParentPage(child_page, parent_page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec,
      null,
      [child_page, parent_page],
      false);
  }

};

ash.mojom.sample_swa.UntrustedPageInterfacesFactory.getRemote = function() {
  let remote = new ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.UntrustedPageInterfacesFactory',
    'context');
  return remote.$;
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryReceiver = class {
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
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.mojom.sample_swa.UntrustedPageInterfacesFactory_CreateParentPage_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.createParentPage');
          const result = this.impl.createParentPage(params.child_page, params.parent_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryReceiver = ash.mojom.sample_swa.UntrustedPageInterfacesFactoryReceiver;

ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPtr = ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRemote;
ash.mojom.sample_swa.UntrustedPageInterfacesFactoryRequest = ash.mojom.sample_swa.UntrustedPageInterfacesFactoryPendingReceiver;

