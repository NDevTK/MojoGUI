// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_container.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

blink.mojom.ControllerServiceWorkerPurposeSpec = { $: mojo.internal.Enum() };
blink.mojom.ServiceWorkerContainerInfoForClientSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost = {};
blink.mojom.ServiceWorkerContainerHost.$interfaceName = 'blink.mojom.ServiceWorkerContainerHost';
blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainer = {};
blink.mojom.ServiceWorkerContainer.$interfaceName = 'blink.mojom.ServiceWorkerContainer';
blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec = { $: {} };
blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec = { $: {} };

// Enum: ControllerServiceWorkerPurpose
blink.mojom.ControllerServiceWorkerPurpose = {
  FETCH_SUB_RESOURCE: 0,
};

// Struct: ServiceWorkerContainerInfoForClient
mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerInfoForClientSpec, 'blink.mojom.ServiceWorkerContainerInfoForClient', [
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceWorkerContainerHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_Register_Params', [
      mojo.internal.StructField('script_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.ServiceWorkerRegistrationOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('outside_fetch_client_settings_object', 16, 0, blink.mojom.FetchClientSettingsObjectSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_Register_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('registration', 16, 0, blink.mojom.ServiceWorkerRegistrationObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistration_Params', [
      mojo.internal.StructField('client_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('registration', 16, 0, blink.mojom.ServiceWorkerRegistrationObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrations_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ServiceWorkerErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('infos', 16, 0, mojo.internal.Array(blink.mojom.ServiceWorkerRegistrationObjectInfoSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParams', [
      mojo.internal.StructField('registration', 0, 0, blink.mojom.ServiceWorkerRegistrationObjectInfoSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ControllerServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('purpose', 8, 0, blink.mojom.ControllerServiceWorkerPurposeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_Params', [
      mojo.internal.StructField('container_host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerContainerHostSpec), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_Params', [
    ],
    [[0, 8]]);

blink.mojom.ServiceWorkerContainerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerContainerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerContainerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerContainerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerContainerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerContainerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(script_url, options, outside_fetch_client_settings_object) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec,
      [script_url, options, outside_fetch_client_settings_object],
      false);
  }

  getRegistration(client_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec,
      [client_url],
      false);
  }

  getRegistrations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec,
      [],
      false);
  }

  getRegistrationForReady() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec,
      [],
      false);
  }

  ensureControllerServiceWorker(receiver, purpose) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec,
      null,
      [receiver, purpose],
      false);
  }

  cloneContainerHost(container_host) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec,
      null,
      [container_host],
      false);
  }

  hintToUpdateServiceWorker() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec,
      null,
      [],
      false);
  }

  ensureFileAccess(files) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParamsSpec,
      [files],
      false);
  }

  onExecutionReady() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.ServiceWorkerContainerHost.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerContainerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerContainerHost',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerContainerHostReceiver = class {
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
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
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
        
        // Try Method 0: Register
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Register (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetRegistration
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistration (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: GetRegistrations
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistrations (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: GetRegistrationForReady
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetRegistrationForReady (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: EnsureControllerServiceWorker
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnsureControllerServiceWorker (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: CloneContainerHost
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloneContainerHost (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: HintToUpdateServiceWorker
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HintToUpdateServiceWorker (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 7: EnsureFileAccess
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EnsureFileAccess (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 8: OnExecutionReady
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnExecutionReady (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.register');
          const result = this.impl.register(params.script_url, params.options, params.outside_fetch_client_settings_object);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRegistration');
          const result = this.impl.getRegistration(params.client_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRegistrations');
          const result = this.impl.getRegistrations();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getRegistrationForReady');
          const result = this.impl.getRegistrationForReady();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.ensureControllerServiceWorker');
          const result = this.impl.ensureControllerServiceWorker(params.receiver, params.purpose);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.cloneContainerHost');
          const result = this.impl.cloneContainerHost(params.container_host);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hintToUpdateServiceWorker');
          const result = this.impl.hintToUpdateServiceWorker();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.ensureFileAccess');
          const result = this.impl.ensureFileAccess(params.files);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onExecutionReady');
          const result = this.impl.onExecutionReady();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerContainerHostReceiver = blink.mojom.ServiceWorkerContainerHostReceiver;

blink.mojom.ServiceWorkerContainerHostPtr = blink.mojom.ServiceWorkerContainerHostRemote;
blink.mojom.ServiceWorkerContainerHostRequest = blink.mojom.ServiceWorkerContainerHostPendingReceiver;


// Interface: ServiceWorkerContainer
mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec, 'blink.mojom.ServiceWorkerContainer_SetController_Params', [
      mojo.internal.StructField('controller_info', 0, 0, blink.mojom.ControllerServiceWorkerInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('should_notify_controllerchange', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec, 'blink.mojom.ServiceWorkerContainer_PostMessageToClient_Params', [
      mojo.internal.StructField('source', 0, 0, blink.mojom.ServiceWorkerObjectInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, blink.mojom.TransferableMessageSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec, 'blink.mojom.ServiceWorkerContainer_CountFeature_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

blink.mojom.ServiceWorkerContainerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ServiceWorkerContainerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerContainer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ServiceWorkerContainerPendingReceiver,
      handle);
    this.$ = new blink.mojom.ServiceWorkerContainerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.ServiceWorkerContainerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setController(controller_info, should_notify_controllerchange) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec,
      null,
      [controller_info, should_notify_controllerchange],
      false);
  }

  postMessageToClient(source, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec,
      null,
      [source, message],
      false);
  }

  countFeature(feature) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec,
      null,
      [feature],
      false);
  }

};

blink.mojom.ServiceWorkerContainer.getRemote = function() {
  let remote = new blink.mojom.ServiceWorkerContainerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerContainer',
    'context');
  return remote.$;
};

blink.mojom.ServiceWorkerContainerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: SetController
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetController (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: PostMessageToClient
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PostMessageToClient (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: CountFeature
        try {
             decoder.decodeStruct(blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CountFeature (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setController');
          const result = this.impl.setController(params.controller_info, params.should_notify_controllerchange);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.postMessageToClient');
          const result = this.impl.postMessageToClient(params.source, params.message);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.countFeature');
          const result = this.impl.countFeature(params.feature);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.ServiceWorkerContainerReceiver = blink.mojom.ServiceWorkerContainerReceiver;

blink.mojom.ServiceWorkerContainerPtr = blink.mojom.ServiceWorkerContainerRemote;
blink.mojom.ServiceWorkerContainerRequest = blink.mojom.ServiceWorkerContainerPendingReceiver;

