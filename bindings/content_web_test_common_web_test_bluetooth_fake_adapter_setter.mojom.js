// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/web_test_bluetooth_fake_adapter_setter.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: WebTestBluetoothFakeAdapterSetter
content.mojom.mojom.WebTestBluetoothFakeAdapterSetter = {};

content.mojom.mojom.WebTestBluetoothFakeAdapterSetterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.WebTestBluetoothFakeAdapterSetterRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebTestBluetoothFakeAdapterSetter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.WebTestBluetoothFakeAdapterSetterPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.WebTestBluetoothFakeAdapterSetterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.WebTestBluetoothFakeAdapterSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  set(adapter_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec,
      null,
      [adapter_name]);
  }

};

content.mojom.mojom.WebTestBluetoothFakeAdapterSetter.getRemote = function() {
  let remote = new content.mojom.mojom.WebTestBluetoothFakeAdapterSetterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebTestBluetoothFakeAdapterSetter',
    'context');
  return remote.$;
};

// ParamsSpec for Set
content.mojom.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebTestBluetoothFakeAdapterSetter.Set_Params',
      packedSize: 16,
      fields: [
        { name: 'adapter_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.WebTestBluetoothFakeAdapterSetterPtr = content.mojom.mojom.WebTestBluetoothFakeAdapterSetterRemote;
content.mojom.mojom.WebTestBluetoothFakeAdapterSetterRequest = content.mojom.mojom.WebTestBluetoothFakeAdapterSetterPendingReceiver;

