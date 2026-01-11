// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker_host.mojom
// Module: extensions.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var blink = blink || {};
var url = url || {};

extensions.mojom.ServiceWorkerHost = {};
extensions.mojom.ServiceWorkerHost.$interfaceName = 'extensions.mojom.ServiceWorkerHost';
extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec = { $: {} };
extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec = { $: {} };

// Interface: ServiceWorkerHost
mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('service_worker_token', 16, 0, blink.mojom.ServiceWorkerTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('event_dispatcher', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_scope', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activation_token', 8, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_scope', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('service_worker_version_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('worker_thread_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_RequestWorker_Params', [
      mojo.internal.StructField('params', 0, 0, extensions.mojom.RequestParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec, 'extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParams', [
      mojo.internal.StructField('response_wrapper', 0, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extra_data', 16, 0, extensions.mojom.ExtraResponseDataSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('success', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_WorkerResponseAck_Params', [
      mojo.internal.StructField('request_uuid', 0, 0, mojo_base.mojom.UuidSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_Params', [
      mojo.internal.StructField('info', 0, 0, extensions.mojom.ExternalConnectionInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 24, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_Params', [
      mojo.internal.StructField('native_app_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 8, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 16, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 24, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec, 'extensions.mojom.ServiceWorkerHost_OpenChannelToTab_Params', [
      mojo.internal.StructField('document_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('channel_type', 8, 0, extensions.mojom.ChannelTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('channel_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('port_id', 24, 0, extensions.mojom.PortIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, pending_associated_remote<extensions.mojom.MessagePort>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('port_host', 40, 0, pending_associated_receiver<extensions.mojom.MessagePortHost>Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 48, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_id', 52, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 64]]);

extensions.mojom.ServiceWorkerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.ServiceWorkerHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.ServiceWorkerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.ServiceWorkerHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.ServiceWorkerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher) {
    return this.$.didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher);
  }
  didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.$.didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id);
  }
  didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.$.didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id);
  }
  requestWorker(params) {
    return this.$.requestWorker(params);
  }
  workerResponseAck(request_uuid) {
    return this.$.workerResponseAck(request_uuid);
  }
  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    return this.$.openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host);
  }
  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    return this.$.openChannelToNativeApp(native_app_name, port_id, port, port_host);
  }
  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    return this.$.openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host);
  }
};

extensions.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher],
      false);
  }

  didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id],
      false);
  }

  didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id],
      false);
  }

  requestWorker(params) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec,
      extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec,
      [params],
      false);
  }

  workerResponseAck(request_uuid) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec,
      null,
      [request_uuid],
      false);
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec,
      null,
      [info, channel_type, channel_name, port_id, port, port_host],
      false);
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [native_app_name, port_id, port, port_host],
      false);
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec,
      null,
      [tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host],
      false);
  }

};

extensions.mojom.ServiceWorkerHost.getRemote = function() {
  let remote = new extensions.mojom.ServiceWorkerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.ServiceWorkerHost',
    'context');
  return remote.$;
};

extensions.mojom.ServiceWorkerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec.$.structSpec);
          const result = this.impl.didInitializeServiceWorkerContext(params.extension_id, params.service_worker_version_id, params.worker_thread_id, params.service_worker_token, params.event_dispatcher);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec.$.structSpec);
          const result = this.impl.didStartServiceWorkerContext(params.extension_id, params.activation_token, params.service_worker_scope, params.service_worker_version_id, params.worker_thread_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec.$.structSpec);
          const result = this.impl.didStopServiceWorkerContext(params.extension_id, params.activation_token, params.service_worker_scope, params.service_worker_version_id, params.worker_thread_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec.$.structSpec);
          const result = this.impl.requestWorker(params.params);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec.$.structSpec);
          const result = this.impl.workerResponseAck(params.request_uuid);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec.$.structSpec);
          const result = this.impl.openChannelToExtension(params.info, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec.$.structSpec);
          const result = this.impl.openChannelToNativeApp(params.native_app_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec.$.structSpec);
          const result = this.impl.openChannelToTab(params.tab_id, params.frame_id, params.document_id, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

extensions.mojom.ServiceWorkerHostReceiver = extensions.mojom.ServiceWorkerHostReceiver;

extensions.mojom.ServiceWorkerHostPtr = extensions.mojom.ServiceWorkerHostRemote;
extensions.mojom.ServiceWorkerHostRequest = extensions.mojom.ServiceWorkerHostPendingReceiver;

