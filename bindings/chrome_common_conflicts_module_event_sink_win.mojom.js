// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/conflicts/module_event_sink_win.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};


// Interface: ModuleEventSink
mojom.ModuleEventSink = {};

mojom.ModuleEventSinkPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ModuleEventSinkRemote = class {
  static get $interfaceName() {
    return 'mojom.ModuleEventSink';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ModuleEventSinkPendingReceiver,
      handle);
    this.$ = new mojom.ModuleEventSinkRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojom.ModuleEventSinkRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onModuleEvents(module_load_addresses) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      mojom.ModuleEventSink_OnModuleEvents_ParamsSpec,
      null,
      null,
      [module_load_addresses],
      undefined,
      undefined
    );
  }

};

mojom.ModuleEventSink.getRemote = function() {
  let remote = new mojom.ModuleEventSinkRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ModuleEventSink',
    'context');
  return remote.$;
};

// ParamsSpec for OnModuleEvents
mojom.ModuleEventSink_OnModuleEvents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'mojom.ModuleEventSink.OnModuleEvents_Params',
      packedSize: 16,
      fields: [
        { name: 'module_load_addresses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
mojom.ModuleEventSinkPtr = mojom.ModuleEventSinkRemote;
mojom.ModuleEventSinkRequest = mojom.ModuleEventSinkPendingReceiver;

