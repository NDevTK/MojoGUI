// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/web_test_bluetooth_fake_adapter_setter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.WebTestBluetoothFakeAdapterSetter = {};
content.mojom.WebTestBluetoothFakeAdapterSetter.$interfaceName = 'content.mojom.WebTestBluetoothFakeAdapterSetter';
content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec = { $: {} };
content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ResponseParamsSpec = { $: {} };

// Interface: WebTestBluetoothFakeAdapterSetter
mojo.internal.Struct(
    content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec, 'content.mojom.WebTestBluetoothFakeAdapterSetter_Set_Params', [
      mojo.internal.StructField('adapter_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ResponseParamsSpec, 'content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ResponseParams', [
    ],
    [[0, 8]]);

content.mojom.WebTestBluetoothFakeAdapterSetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebTestBluetoothFakeAdapterSetterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestBluetoothFakeAdapterSetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebTestBluetoothFakeAdapterSetterPendingReceiver,
      handle);
    this.$ = new content.mojom.WebTestBluetoothFakeAdapterSetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.WebTestBluetoothFakeAdapterSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  set(adapter_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec,
      content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ResponseParamsSpec,
      [adapter_name],
      false);
  }

};

content.mojom.WebTestBluetoothFakeAdapterSetter.getRemote = function() {
  let remote = new content.mojom.WebTestBluetoothFakeAdapterSetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestBluetoothFakeAdapterSetter',
    'context');
  return remote.$;
};

content.mojom.WebTestBluetoothFakeAdapterSetterReceiver = class {
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
          const params = content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec.$.decode(message.payload);
          const result = this.impl.set(params.adapter_name);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ResponseParamsSpec);
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

content.mojom.WebTestBluetoothFakeAdapterSetterReceiver = content.mojom.WebTestBluetoothFakeAdapterSetterReceiver;

content.mojom.WebTestBluetoothFakeAdapterSetterPtr = content.mojom.WebTestBluetoothFakeAdapterSetterRemote;
content.mojom.WebTestBluetoothFakeAdapterSetterRequest = content.mojom.WebTestBluetoothFakeAdapterSetterPendingReceiver;

