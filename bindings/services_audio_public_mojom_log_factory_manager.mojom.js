// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/log_factory_manager.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};

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

audio.mojom.LogFactoryManagerPtr = audio.mojom.LogFactoryManagerRemote;
audio.mojom.LogFactoryManagerRequest = audio.mojom.LogFactoryManagerPendingReceiver;

