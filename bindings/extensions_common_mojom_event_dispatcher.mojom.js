// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_dispatcher.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};


// Interface: EventDispatcher
extensions.mojom.EventDispatcher = {};

extensions.mojom.EventDispatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.EventDispatcherRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.EventDispatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.EventDispatcherPendingReceiver,
      handle);
    this.$ = new extensions.mojom.EventDispatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.EventDispatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchEvent(params, event_args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.EventDispatcher_DispatchEvent_ParamsSpec,
      extensions.mojom.EventDispatcher_DispatchEvent_ResponseParamsSpec,
      [params, event_args]);
  }

};

extensions.mojom.EventDispatcher.getRemote = function() {
  let remote = new extensions.mojom.EventDispatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.EventDispatcher',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchEvent
extensions.mojom.EventDispatcher_DispatchEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventDispatcher.DispatchEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'event_args', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

extensions.mojom.EventDispatcher_DispatchEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventDispatcher.DispatchEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'event_will_run_in_lazy_background_page_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
extensions.mojom.EventDispatcherPtr = extensions.mojom.EventDispatcherRemote;
extensions.mojom.EventDispatcherRequest = extensions.mojom.EventDispatcherPendingReceiver;

