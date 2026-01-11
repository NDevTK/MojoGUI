// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/web_test_bluetooth_fake_adapter_setter.mojom
// Module: content.mojom

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
  set(adapter_name) {
    return this.$.set(adapter_name);
  }
};

content.mojom.WebTestBluetoothFakeAdapterSetterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WebTestBluetoothFakeAdapterSetter', [
      { explicit: null },
    ]);
  }

  set(adapter_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WebTestBluetoothFakeAdapterSetter', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.WebTestBluetoothFakeAdapterSetter_Set_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

content.mojom.WebTestBluetoothFakeAdapterSetterReceiver = content.mojom.WebTestBluetoothFakeAdapterSetterReceiver;

content.mojom.WebTestBluetoothFakeAdapterSetterPtr = content.mojom.WebTestBluetoothFakeAdapterSetterRemote;
content.mojom.WebTestBluetoothFakeAdapterSetterRequest = content.mojom.WebTestBluetoothFakeAdapterSetterPendingReceiver;

