// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_dispatcher.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var url = url || {};


// Struct: EventFilteringInfo
extensions.mojom.mojom.EventFilteringInfoSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventFilteringInfo',
      packedSize: 40,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'service_type', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'has_instance_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'instance_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'window_type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'has_window_exposed_by_default', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'window_exposed_by_default', packedOffset: 28, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: DispatchEventParams
extensions.mojom.mojom.DispatchEventParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.DispatchEventParams',
      packedSize: 48,
      fields: [
        { name: 'worker_thread_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'host_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.HostIDSpec, nullable: false, minVersion: 0 },
        { name: 'event_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event_id', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'is_user_gesture', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'filtering_info', packedOffset: 16, packedBitOffset: 0, type: extensions.mojom.EventFilteringInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: EventDispatcher
extensions.mojom.mojom.EventDispatcher = {};

extensions.mojom.mojom.EventDispatcherPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.EventDispatcherRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.EventDispatcher';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.EventDispatcherPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.EventDispatcherRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.EventDispatcherRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  dispatchEvent(params, event_args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.EventDispatcher_DispatchEvent_ParamsSpec,
      extensions.mojom.mojom.EventDispatcher_DispatchEvent_ResponseParamsSpec,
      [params, event_args]);
  }

};

extensions.mojom.mojom.EventDispatcher.getRemote = function() {
  let remote = new extensions.mojom.mojom.EventDispatcherRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.EventDispatcher',
    'context');
  return remote.$;
};

// ParamsSpec for DispatchEvent
extensions.mojom.mojom.EventDispatcher_DispatchEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventDispatcher.DispatchEvent_Params',
      packedSize: 24,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.DispatchEventParamsSpec, nullable: false, minVersion: 0 },
        { name: 'event_args', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

extensions.mojom.mojom.EventDispatcher_DispatchEvent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.EventDispatcher.DispatchEvent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'event_will_run_in_lazy_background_page_script', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.EventDispatcherPtr = extensions.mojom.mojom.EventDispatcherRemote;
extensions.mojom.mojom.EventDispatcherRequest = extensions.mojom.mojom.EventDispatcherPendingReceiver;

