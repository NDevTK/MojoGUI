// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/event_dispatcher.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

extensions.mojom.EventFilteringInfoSpec = { $: {} };
extensions.mojom.DispatchEventParamsSpec = { $: {} };
extensions.mojom.EventDispatcher = {};
extensions.mojom.EventDispatcher.$interfaceName = 'extensions.mojom.EventDispatcher';
extensions.mojom.EventDispatcher_DispatchEvent_ParamsSpec = { $: {} };
extensions.mojom.EventDispatcher_DispatchEvent_ResponseParamsSpec = { $: {} };

// Struct: EventFilteringInfo
mojo.internal.Struct(
    extensions.mojom.EventFilteringInfoSpec, 'extensions.mojom.EventFilteringInfo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('service_type', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('window_type', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('instance_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('has_instance_id', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_window_exposed_by_default', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('window_exposed_by_default', 28, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DispatchEventParams
mojo.internal.Struct(
    extensions.mojom.DispatchEventParamsSpec, 'extensions.mojom.DispatchEventParams', [
      mojo.internal.StructField('host_id', 0, 0, extensions.mojom.HostIDSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('filtering_info', 16, 0, extensions.mojom.EventFilteringInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('event_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_user_gesture', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Interface: EventDispatcher
mojo.internal.Struct(
    extensions.mojom.EventDispatcher_DispatchEvent_ParamsSpec, 'extensions.mojom.EventDispatcher_DispatchEvent_Params', [
      mojo.internal.StructField('params', 0, 0, extensions.mojom.DispatchEventParamsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_args', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    extensions.mojom.EventDispatcher_DispatchEvent_ResponseParamsSpec, 'extensions.mojom.EventDispatcher_DispatchEvent_ResponseParams', [
      mojo.internal.StructField('event_will_run_in_lazy_background_page_script', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [params, event_args],
      false);
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

extensions.mojom.EventDispatcherReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = extensions.mojom.EventDispatcher_DispatchEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.dispatchEvent(params.params, params.event_args);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.EventDispatcher_DispatchEvent_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

extensions.mojom.EventDispatcherReceiver = extensions.mojom.EventDispatcherReceiver;

extensions.mojom.EventDispatcherPtr = extensions.mojom.EventDispatcherRemote;
extensions.mojom.EventDispatcherRequest = extensions.mojom.EventDispatcherPendingReceiver;

