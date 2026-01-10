// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_container.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
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
      mojo.internal.StructField('host_remote', 0, 0, mojo.internal.AssociatedInterfaceProxy(blink.mojom.ServiceWorkerContainerHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('client_receiver', 8, 0, mojo.internal.AssociatedInterfaceRequest(blink.mojom.ServiceWorkerContainerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ServiceWorkerContainerHost
mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_Register_Params', [
      mojo.internal.StructField('script_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, blink.mojom.ServiceWorkerRegistrationOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('outside_fetch_client_settings_object', 16, 0, blink.mojom.FetchClientSettingsObjectSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_Register_ResponseParams', [
      mojo.internal.StructField('error', 16, 0, blink.mojom.ServiceWorkerErrorTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('registration', 8, 0, blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistration_Params', [
      mojo.internal.StructField('client_url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParams', [
      mojo.internal.StructField('error', 16, 0, blink.mojom.ServiceWorkerErrorTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('registration', 8, 0, blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrations_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParams', [
      mojo.internal.StructField('error', 16, 0, blink.mojom.ServiceWorkerErrorTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('error_msg', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('infos', 8, 0, mojo.internal.Array(blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParams', [
      mojo.internal.StructField('registration', 0, 0, blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(blink.mojom.ControllerServiceWorkerRemote), null, false, 0, undefined),
      mojo.internal.StructField('purpose', 8, 0, blink.mojom.ControllerServiceWorkerPurposeSpec, null, false, 0, undefined),
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
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_Params', [
      mojo.internal.StructField('files', 0, 0, mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec, 'blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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
      [script_url, options, outside_fetch_client_settings_object]);
  }

  getRegistration(client_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec,
      [client_url]);
  }

  getRegistrations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec,
      []);
  }

  getRegistrationForReady() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec,
      []);
  }

  ensureControllerServiceWorker(receiver, purpose) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec,
      null,
      [receiver, purpose]);
  }

  cloneContainerHost(container_host) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec,
      null,
      [container_host]);
  }

  hintToUpdateServiceWorker() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec,
      null,
      []);
  }

  ensureFileAccess(files) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ResponseParamsSpec,
      [files]);
  }

  onExecutionReady() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec,
      null,
      []);
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

blink.mojom.ServiceWorkerContainerHostPtr = blink.mojom.ServiceWorkerContainerHostRemote;
blink.mojom.ServiceWorkerContainerHostRequest = blink.mojom.ServiceWorkerContainerHostPendingReceiver;


// Interface: ServiceWorkerContainer
mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec, 'blink.mojom.ServiceWorkerContainer_SetController_Params', [
      mojo.internal.StructField('controller_info', 0, 0, blink.mojom.ControllerServiceWorkerInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('should_notify_controllerchange', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec, 'blink.mojom.ServiceWorkerContainer_PostMessageToClient_Params', [
      mojo.internal.StructField('source', 0, 0, blink.mojom.ServiceWorkerObjectInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, blink.mojom.TransferableMessageSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec, 'blink.mojom.ServiceWorkerContainer_CountFeature_Params', [
      mojo.internal.StructField('feature', 0, 0, blink.mojom.WebFeatureSpec, null, false, 0, undefined),
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
      [controller_info, should_notify_controllerchange]);
  }

  postMessageToClient(source, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec,
      null,
      [source, message]);
  }

  countFeature(feature) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec,
      null,
      [feature]);
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

blink.mojom.ServiceWorkerContainerPtr = blink.mojom.ServiceWorkerContainerRemote;
blink.mojom.ServiceWorkerContainerRequest = blink.mojom.ServiceWorkerContainerPendingReceiver;

