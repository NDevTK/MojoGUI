// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/connection_factory.mojom
// Module: ash.ime.mojom

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
  connectToInputMethod(ime_spec, input_method, input_method_host, settings) {
    return this.$.connectToInputMethod(ime_spec, input_method, input_method_host, settings);
  }
  unused(unused) {
    return this.$.unused(unused);
  }
};

ash.ime.mojom.ConnectionFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConnectionFactory', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
  }

  connectToInputMethod(ime_spec, input_method, input_method_host, settings) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec,
      ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ResponseParamsSpec,
      [ime_spec, input_method, input_method_host, settings],
      false);
  }

  unused(unused) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConnectionFactory', [
      { explicit: 0 },
      { explicit: 1 },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
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
             decoder.decodeStructInline(ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.ConnectionFactory_ConnectToInputMethod_ParamsSpec.$.structSpec);
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
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(ash.ime.mojom.ConnectionFactory_Unused_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

ash.ime.mojom.ConnectionFactoryReceiver = ash.ime.mojom.ConnectionFactoryReceiver;

ash.ime.mojom.ConnectionFactoryPtr = ash.ime.mojom.ConnectionFactoryRemote;
ash.ime.mojom.ConnectionFactoryRequest = ash.ime.mojom.ConnectionFactoryPendingReceiver;

