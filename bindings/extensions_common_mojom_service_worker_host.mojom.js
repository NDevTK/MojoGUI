// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/service_worker_host.mojom
// Module: extensions.mojom

'use strict';

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
};

extensions.mojom.ServiceWorkerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  didInitializeServiceWorkerContext(extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, service_worker_version_id, worker_thread_id, service_worker_token, event_dispatcher],
      false);
  }

  didStartServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id],
      false);
  }

  didStopServiceWorkerContext(extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec,
      null,
      [extension_id, activation_token, service_worker_scope, service_worker_version_id, worker_thread_id],
      false);
  }

  requestWorker(params) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec,
      extensions.mojom.ServiceWorkerHost_RequestWorker_ResponseParamsSpec,
      [params],
      false);
  }

  workerResponseAck(request_uuid) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec,
      null,
      [request_uuid],
      false);
  }

  openChannelToExtension(info, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec,
      null,
      [info, channel_type, channel_name, port_id, port, port_host],
      false);
  }

  openChannelToNativeApp(native_app_name, port_id, port, port_host) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec,
      null,
      [native_app_name, port_id, port, port_host],
      false);
  }

  openChannelToTab(tab_id, frame_id, document_id, channel_type, channel_name, port_id, port, port_host) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DidInitializeServiceWorkerContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidInitializeServiceWorkerContext (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: DidStartServiceWorkerContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStartServiceWorkerContext (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: DidStopServiceWorkerContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DidStopServiceWorkerContext (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: RequestWorker
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RequestWorker (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: WorkerResponseAck
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WorkerResponseAck (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: OpenChannelToExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToExtension (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: OpenChannelToNativeApp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToNativeApp (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: OpenChannelToTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenChannelToTab (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_DidInitializeServiceWorkerContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didInitializeServiceWorkerContext');
          const result = this.impl.didInitializeServiceWorkerContext(params.extension_id, params.service_worker_version_id, params.worker_thread_id, params.service_worker_token, params.event_dispatcher);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_DidStartServiceWorkerContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didStartServiceWorkerContext');
          const result = this.impl.didStartServiceWorkerContext(params.extension_id, params.activation_token, params.service_worker_scope, params.service_worker_version_id, params.worker_thread_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_DidStopServiceWorkerContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.didStopServiceWorkerContext');
          const result = this.impl.didStopServiceWorkerContext(params.extension_id, params.activation_token, params.service_worker_scope, params.service_worker_version_id, params.worker_thread_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_RequestWorker_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.requestWorker');
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
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_WorkerResponseAck_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.workerResponseAck');
          const result = this.impl.workerResponseAck(params.request_uuid);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_OpenChannelToExtension_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChannelToExtension');
          const result = this.impl.openChannelToExtension(params.info, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_OpenChannelToNativeApp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChannelToNativeApp');
          const result = this.impl.openChannelToNativeApp(params.native_app_name, params.port_id, params.port, params.port_host);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(extensions.mojom.ServiceWorkerHost_OpenChannelToTab_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openChannelToTab');
          const result = this.impl.openChannelToTab(params.tab_id, params.frame_id, params.document_id, params.channel_type, params.channel_name, params.port_id, params.port, params.port_host);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

extensions.mojom.ServiceWorkerHostReceiver = extensions.mojom.ServiceWorkerHostReceiver;

extensions.mojom.ServiceWorkerHostPtr = extensions.mojom.ServiceWorkerHostRemote;
extensions.mojom.ServiceWorkerHostRequest = extensions.mojom.ServiceWorkerHostPendingReceiver;

