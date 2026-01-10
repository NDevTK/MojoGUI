// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/connection_factory.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};

ash.ime.mojom.ConnectionFactory = {};
ash.ime.mojom.ConnectionFactory.$interfaceName = 'ash.ime.mojom.ConnectionFactory';
ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec = { $: {} };
ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec = { $: {} };
ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec = { $: {} };
ash.ime.mojom.ConnectionFactory_Unused_ResponseParamsSpec = { $: {} };

// Interface: ConnectionFactory
mojo.internal.Struct(
    ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec, 'ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_Params', [
      mojo.internal.StructField('ime_spec', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_method', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('input_method_host', 16, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('settings', 24, 0, ash.ime.mojom.InputMethodSettingsSpec.$, null, true, 2, undefined),
    ],
    [[0, 32], [2, 40]]);

mojo.internal.Struct(
    ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec, 'ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec, 'ash.ime.mojom.ConnectionFactory_Unused_Params', [
      mojo.internal.StructField('unused', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.ime.mojom.ConnectionFactory_Unused_ResponseParamsSpec, 'ash.ime.mojom.ConnectionFactory_Unused_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.ime.mojom.ConnectionFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.ConnectionFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.ConnectionFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.ConnectionFactoryPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.ConnectionFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.ConnectionFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectToInputMethod(ime_spec, input_method, input_method_host, settings) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec,
      ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec,
      [ime_spec, input_method, input_method_host, settings],
      false);
  }

  unused(unused) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec,
      ash.ime.mojom.ConnectionFactory_Unused_ResponseParamsSpec,
      [unused],
      false);
  }

};

ash.ime.mojom.ConnectionFactory.getRemote = function() {
  let remote = new ash.ime.mojom.ConnectionFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.ConnectionFactory',
    'context');
  return remote.$;
};

ash.ime.mojom.ConnectionFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec.$.decode(message.payload);
          const result = this.impl.connectToInputMethod(params.ime_spec, params.input_method, params.input_method_host, params.settings);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unused(params.unused);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.ime.mojom.ConnectionFactory_Unused_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      }
    }});
  }
};

ash.ime.mojom.ConnectionFactoryReceiver = ash.ime.mojom.ConnectionFactoryReceiver;

ash.ime.mojom.ConnectionFactoryPtr = ash.ime.mojom.ConnectionFactoryRemote;
ash.ime.mojom.ConnectionFactoryRequest = ash.ime.mojom.ConnectionFactoryPendingReceiver;

