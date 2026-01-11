// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_container.mojom
// Module: blink.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
      mojo.internal.StructField('container_host', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerContainerHostRemote), null, false, 0, undefined),
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
  register(script_url, options, outside_fetch_client_settings_object) {
    return this.$.register(script_url, options, outside_fetch_client_settings_object);
  }
  getRegistration(client_url) {
    return this.$.getRegistration(client_url);
  }
  getRegistrations() {
    return this.$.getRegistrations();
  }
  getRegistrationForReady() {
    return this.$.getRegistrationForReady();
  }
  ensureControllerServiceWorker(receiver, purpose) {
    return this.$.ensureControllerServiceWorker(receiver, purpose);
  }
  cloneContainerHost(container_host) {
    return this.$.cloneContainerHost(container_host);
  }
  hintToUpdateServiceWorker() {
    return this.$.hintToUpdateServiceWorker();
  }
  ensureFileAccess(files) {
    return this.$.ensureFileAccess(files);
  }
  onExecutionReady() {
    return this.$.onExecutionReady();
  }
};

blink.mojom.ServiceWorkerContainerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerContainerHost', [
      { explicit: null },
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

  register(script_url, options, outside_fetch_client_settings_object) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec,
      [script_url, options, outside_fetch_client_settings_object],
      false);
  }

  getRegistration(client_url) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec,
      [client_url],
      false);
  }

  getRegistrations() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec,
      [],
      false);
  }

  getRegistrationForReady() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec,
      [],
      false);
  }

  ensureControllerServiceWorker(receiver, purpose) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec,
      null,
      [receiver, purpose],
      false);
  }

  cloneContainerHost(container_host) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec,
      null,
      [container_host],
      false);
  }

  hintToUpdateServiceWorker() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec,
      null,
      [],
      false);
  }

  ensureFileAccess(files) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParamsSpec,
      [files],
      false);
  }

  onExecutionReady() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerContainerHost', [
      { explicit: null },
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec.$.structSpec);
          const result = this.impl.register(params.script_url, params.options, params.outside_fetch_client_settings_object);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec.$.structSpec);
          const result = this.impl.getRegistration(params.client_url);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec.$.structSpec);
          const result = this.impl.getRegistrations();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec.$.structSpec);
          const result = this.impl.getRegistrationForReady();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.ensureControllerServiceWorker(params.receiver, params.purpose);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec.$.structSpec);
          const result = this.impl.cloneContainerHost(params.container_host);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec.$.structSpec);
          const result = this.impl.hintToUpdateServiceWorker();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec.$.structSpec);
          const result = this.impl.onExecutionReady();
          break;
        }
      }
      } catch (err) {}
    });
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
  setController(controller_info, should_notify_controllerchange) {
    return this.$.setController(controller_info, should_notify_controllerchange);
  }
  postMessageToClient(source, message) {
    return this.$.postMessageToClient(source, message);
  }
  countFeature(feature) {
    return this.$.countFeature(feature);
  }
};

blink.mojom.ServiceWorkerContainerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerContainer', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  setController(controller_info, should_notify_controllerchange) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec,
      null,
      [controller_info, should_notify_controllerchange],
      false);
  }

  postMessageToClient(source, message) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec,
      null,
      [source, message],
      false);
  }

  countFeature(feature) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('ServiceWorkerContainer', [
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec.$.structSpec);
          const result = this.impl.setController(params.controller_info, params.should_notify_controllerchange);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec.$.structSpec);
          const result = this.impl.postMessageToClient(params.source, params.message);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec.$.structSpec);
          const result = this.impl.countFeature(params.feature);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

blink.mojom.ServiceWorkerContainerReceiver = blink.mojom.ServiceWorkerContainerReceiver;

blink.mojom.ServiceWorkerContainerPtr = blink.mojom.ServiceWorkerContainerRemote;
blink.mojom.ServiceWorkerContainerRequest = blink.mojom.ServiceWorkerContainerPendingReceiver;

