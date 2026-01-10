// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/log_factory_manager.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: LogFactoryManager
audio.mojom.mojom.LogFactoryManager = {};

audio.mojom.mojom.LogFactoryManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.mojom.LogFactoryManagerRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.LogFactoryManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.mojom.LogFactoryManagerPendingReceiver,
      handle);
    this.$ = new audio.mojom.mojom.LogFactoryManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.mojom.LogFactoryManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setLogFactory(factory) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.mojom.LogFactoryManager_SetLogFactory_ParamsSpec,
      null,
      [factory]);
  }

};

audio.mojom.mojom.LogFactoryManager.getRemote = function() {
  let remote = new audio.mojom.mojom.LogFactoryManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.LogFactoryManager',
    'context');
  return remote.$;
};

// ParamsSpec for SetLogFactory
audio.mojom.mojom.LogFactoryManager_SetLogFactory_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.LogFactoryManager.SetLogFactory_Params',
      packedSize: 16,
      fields: [
        { name: 'factory', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(media.mojom.AudioLogFactoryRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
audio.mojom.mojom.LogFactoryManagerPtr = audio.mojom.mojom.LogFactoryManagerRemote;
audio.mojom.mojom.LogFactoryManagerRequest = audio.mojom.mojom.LogFactoryManagerPendingReceiver;

