// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/dcomp_surface_registry.mojom
// Module: media.mojom

'use strict';

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
};

media.mojom.DCOMPSurfaceRegistryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec,
      media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ResponseParamsSpec,
      [surface_handle],
      false);
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = media.mojom.DCOMPSurfaceRegistry_RegisterDCOMPSurfaceHandle_ParamsSpec.$.decode(message.payload);
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
          const params = media.mojom.DCOMPSurfaceRegistry_UnregisterDCOMPSurfaceHandle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.unregisterDCOMPSurfaceHandle(params.token);
          break;
        }
      }
    }});
  }
};

media.mojom.DCOMPSurfaceRegistryReceiver = media.mojom.DCOMPSurfaceRegistryReceiver;

media.mojom.DCOMPSurfaceRegistryPtr = media.mojom.DCOMPSurfaceRegistryRemote;
media.mojom.DCOMPSurfaceRegistryRequest = media.mojom.DCOMPSurfaceRegistryPendingReceiver;

