// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/log_factory_manager.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var media = media || {};
var sandbox = sandbox || {};

audio.mojom.LogFactoryManager = {};
audio.mojom.LogFactoryManager.$interfaceName = 'audio.mojom.LogFactoryManager';
audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec = { $: {} };

// Interface: LogFactoryManager
mojo.internal.Struct(
    audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec, 'audio.mojom.LogFactoryManager_SetLogFactory_Params', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(media.mojom.AudioLogFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

audio.mojom.LogFactoryManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.LogFactoryManagerRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.LogFactoryManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.LogFactoryManagerPendingReceiver,
      handle);
    this.$ = new audio.mojom.LogFactoryManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.LogFactoryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLogFactory(factory) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec,
      null,
      [factory],
      false);
  }

};

audio.mojom.LogFactoryManager.getRemote = function() {
  let remote = new audio.mojom.LogFactoryManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.LogFactoryManager',
    'context');
  return remote.$;
};

audio.mojom.LogFactoryManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = audio.mojom.LogFactoryManager_SetLogFactory_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setLogFactory(params.factory);
          break;
        }
      }
    }});
  }
};

audio.mojom.LogFactoryManagerReceiver = audio.mojom.LogFactoryManagerReceiver;

audio.mojom.LogFactoryManagerPtr = audio.mojom.LogFactoryManagerRemote;
audio.mojom.LogFactoryManagerRequest = audio.mojom.LogFactoryManagerPendingReceiver;

