// Auto-generated MojoJS binding
// Source: chromium_src/ui/ozone/platform/wayland/mojom/wayland_overlay_config_traits_test_service.mojom
// Module: wl.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var wl = wl || {};
wl.mojom = wl.mojom || {};

wl.mojom.ConfigTraitsTestService = {};
wl.mojom.ConfigTraitsTestService.$interfaceName = 'wl.mojom.ConfigTraitsTestService';
wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec = { $: {} };
wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec = { $: {} };

// Interface: ConfigTraitsTestService
mojo.internal.Struct(
    wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec, 'wl.mojom.ConfigTraitsTestService_EchoTransform_Params', [
      mojo.internal.StructField('t', 0, 0, wl.mojom.TransformUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec, 'wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParams', [
      mojo.internal.StructField('pass', 0, 0, wl.mojom.TransformUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

wl.mojom.ConfigTraitsTestServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

wl.mojom.ConfigTraitsTestServiceRemote = class {
  static get $interfaceName() {
    return 'wl.mojom.ConfigTraitsTestService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      wl.mojom.ConfigTraitsTestServicePendingReceiver,
      handle);
    this.$ = new wl.mojom.ConfigTraitsTestServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoTransform(t) {
    return this.$.echoTransform(t);
  }
};

wl.mojom.ConfigTraitsTestServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ConfigTraitsTestService', [
      { explicit: null },
    ]);
  }

  echoTransform(t) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec,
      wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec,
      [t],
      false);
  }

};

wl.mojom.ConfigTraitsTestService.getRemote = function() {
  let remote = new wl.mojom.ConfigTraitsTestServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'wl.mojom.ConfigTraitsTestService',
    'context');
  return remote.$;
};

wl.mojom.ConfigTraitsTestServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ConfigTraitsTestService', [
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
             decoder.decodeStructInline(wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(wl.mojom.ConfigTraitsTestService_EchoTransform_ParamsSpec.$.structSpec);
          const result = this.impl.echoTransform(params.t);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, wl.mojom.ConfigTraitsTestService_EchoTransform_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

wl.mojom.ConfigTraitsTestServiceReceiver = wl.mojom.ConfigTraitsTestServiceReceiver;

wl.mojom.ConfigTraitsTestServicePtr = wl.mojom.ConfigTraitsTestServiceRemote;
wl.mojom.ConfigTraitsTestServiceRequest = wl.mojom.ConfigTraitsTestServicePendingReceiver;

