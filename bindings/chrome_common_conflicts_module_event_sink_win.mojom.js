// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/conflicts/module_event_sink_win.mojom
// Module: mojom

'use strict';

// Module namespace
var mojom = mojom || {};

mojom.ModuleEventSink = {};
mojom.ModuleEventSink.$interfaceName = 'mojom.ModuleEventSink';
mojom.ModuleEventSink_OnModuleEvents_ParamsSpec = { $: {} };

// Interface: ModuleEventSink
mojo.internal.Struct(
    mojom.ModuleEventSink_OnModuleEvents_ParamsSpec, 'mojom.ModuleEventSink_OnModuleEvents_Params', [
      mojo.internal.StructField('module_load_addresses', 0, 0, mojo.internal.Array(mojo.internal.Uint64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [module_load_addresses],
      false);
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

mojom.ModuleEventSinkReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = mojom.ModuleEventSink_OnModuleEvents_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onModuleEvents(params.module_load_addresses);
          break;
        }
      }
    }});
  }
};

mojom.ModuleEventSinkReceiver = mojom.ModuleEventSinkReceiver;

mojom.ModuleEventSinkPtr = mojom.ModuleEventSinkRemote;
mojom.ModuleEventSinkRequest = mojom.ModuleEventSinkPendingReceiver;

