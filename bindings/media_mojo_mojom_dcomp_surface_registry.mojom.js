// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/dcomp_surface_registry.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var mojo_base = mojo_base || {};

media.mojom.DCOMPSurfaceRegistry = {};
media.mojom.DCOMPSurfaceRegistry.$interfaceName = 'media.mojom.DCOMPSurfaceRegistry';
media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec = { $: {} };
media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec = { $: {} };
media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec = { $: {} };

// Interface: DCOMPSurfaceRegistry
mojo.internal.Struct(
    media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec, 'media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_Params', [
      mojo.internal.StructField('surface_handle', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec, 'media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParams', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec, 'media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_Params', [
      mojo.internal.StructField('token', 0, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

media.mojom.DCOMPSurfaceRegistryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.DCOMPSurfaceRegistryRemote = class {
  static get $interfaceName() {
    return 'media.mojom.DCOMPSurfaceRegistry';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.DCOMPSurfaceRegistryPendingReceiver,
      handle);
    this.$ = new media.mojom.DCOMPSurfaceRegistryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  registerDCOMPSurfaceHandle(surface_handle) {
    return this.$.registerDCOMPSurfaceHandle(surface_handle);
  }
  unregisterDCOMPSurfaceHandle(token) {
    return this.$.unregisterDCOMPSurfaceHandle(token);
  }
};

media.mojom.DCOMPSurfaceRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DCOMPSurfaceRegistry', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec,
      media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      [surface_handle],
      false);
  }

  unregisterDCOMPSurfaceHandle(token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec,
      null,
      [token],
      false);
  }

};

media.mojom.DCOMPSurfaceRegistry.getRemote = function() {
  let remote = new media.mojom.DCOMPSurfaceRegistryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.DCOMPSurfaceRegistry',
    'context');
  return remote.$;
};

media.mojom.DCOMPSurfaceRegistryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DCOMPSurfaceRegistry', [
      { explicit: null },
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
             decoder.decodeStructInline(media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec.$.structSpec);
          const result = this.impl.registerDCOMPSurfaceHandle(params.surface_handle);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec.$.structSpec);
          const result = this.impl.unregisterDCOMPSurfaceHandle(params.token);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

media.mojom.DCOMPSurfaceRegistryReceiver = media.mojom.DCOMPSurfaceRegistryReceiver;

media.mojom.DCOMPSurfaceRegistryPtr = media.mojom.DCOMPSurfaceRegistryRemote;
media.mojom.DCOMPSurfaceRegistryRequest = media.mojom.DCOMPSurfaceRegistryPendingReceiver;

