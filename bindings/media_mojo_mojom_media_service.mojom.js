// Auto-generated MojoJS binding
// Source: chromium_src/media/mojo/mojom/media_service.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var sandbox = sandbox || {};

media.mojom.MediaService = {};
media.mojom.MediaService.$interfaceName = 'media.mojom.MediaService';
media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec = { $: {} };

media.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kNoSandbox;

media.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kGpu;

media.mojom.kMediaSandbox = sandbox.mojom.Sandbox.kService;

// Interface: MediaService
mojo.internal.Struct(
    media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec, 'media.mojom.MediaService_CreateInterfaceFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceRequest(media.mojom.InterfaceFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('frame_interfaces', 8, 0, mojo.internal.InterfaceProxy(media.mojom.FrameInterfaceFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

media.mojom.MediaServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

media.mojom.MediaServiceRemote = class {
  static get $interfaceName() {
    return 'media.mojom.MediaService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      media.mojom.MediaServicePendingReceiver,
      handle);
    this.$ = new media.mojom.MediaServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

media.mojom.MediaServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createInterfaceFactory(factory, frame_interfaces) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec,
      null,
      [factory, frame_interfaces],
      false);
  }

};

media.mojom.MediaService.getRemote = function() {
  let remote = new media.mojom.MediaServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'media.mojom.MediaService',
    'context');
  return remote.$;
};

media.mojom.MediaServiceReceiver = class {
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
          const params = media.mojom.MediaService_CreateInterfaceFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.createInterfaceFactory(params.factory, params.frame_interfaces);
          break;
        }
      }
    }});
  }
};

media.mojom.MediaServiceReceiver = media.mojom.MediaServiceReceiver;

media.mojom.MediaServicePtr = media.mojom.MediaServiceRemote;
media.mojom.MediaServiceRequest = media.mojom.MediaServicePendingReceiver;

