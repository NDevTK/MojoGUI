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


// Enum: ControllerServiceWorkerPurpose
blink.mojom.mojom.ControllerServiceWorkerPurpose = {
  FETCH_SUB_RESOURCE: 0,
};
blink.mojom.mojom.ControllerServiceWorkerPurposeSpec = { $: mojo.internal.Enum() };

// Struct: ServiceWorkerContainerInfoForClient
blink.mojom.mojom.ServiceWorkerContainerInfoForClientSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerInfoForClient',
      packedSize: 24,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(blink.mojom.ServiceWorkerContainerHostRemote), nullable: false, minVersion: 0 },
        { name: 'client_receiver', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(blink.mojom.ServiceWorkerContainerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: ServiceWorkerContainerHost
blink.mojom.mojom.ServiceWorkerContainerHost = {};

blink.mojom.mojom.ServiceWorkerContainerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerContainerHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerContainerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerContainerHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerContainerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerContainerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  register(script_url, options, outside_fetch_client_settings_object) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_Register_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec,
      [script_url, options, outside_fetch_client_settings_object]);
  }

  getRegistration(client_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec,
      [client_url]);
  }

  getRegistrations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec,
      []);
  }

  getRegistrationForReady() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec,
      blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec,
      []);
  }

  ensureControllerServiceWorker(receiver, purpose) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec,
      null,
      [receiver, purpose]);
  }

  cloneContainerHost(container_host) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec,
      null,
      [container_host]);
  }

  hintToUpdateServiceWorker() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec,
      null,
      []);
  }

  ensureFileAccess(files) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec,
      null,
      [files]);
  }

  onExecutionReady() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.ServiceWorkerContainerHost.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerContainerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerContainerHost',
    'context');
  return remote.$;
};

// ParamsSpec for Register
blink.mojom.mojom.ServiceWorkerContainerHost_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.Register_Params',
      packedSize: 32,
      fields: [
        { name: 'script_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRegistrationOptionsSpec, nullable: false, minVersion: 0 },
        { name: 'outside_fetch_client_settings_object', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.FetchClientSettingsObjectSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.Register_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'registration', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetRegistration
blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistration_Params',
      packedSize: 16,
      fields: [
        { name: 'client_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistration_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'registration', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetRegistrations
blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistrations_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistrations_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ServiceWorkerErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'error_msg', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'infos', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetRegistrationForReady
blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistrationForReady_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

blink.mojom.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistrationForReady_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerRegistrationObjectInfoSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnsureControllerServiceWorker
blink.mojom.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.EnsureControllerServiceWorker_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ControllerServiceWorkerRemote), nullable: false, minVersion: 0 },
        { name: 'purpose', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ControllerServiceWorkerPurposeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloneContainerHost
blink.mojom.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.CloneContainerHost_Params',
      packedSize: 16,
      fields: [
        { name: 'container_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(blink.mojom.ServiceWorkerContainerHostRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HintToUpdateServiceWorker
blink.mojom.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.HintToUpdateServiceWorker_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for EnsureFileAccess
blink.mojom.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.EnsureFileAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.FilePathSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnExecutionReady
blink.mojom.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.OnExecutionReady_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerContainerHostPtr = blink.mojom.mojom.ServiceWorkerContainerHostRemote;
blink.mojom.mojom.ServiceWorkerContainerHostRequest = blink.mojom.mojom.ServiceWorkerContainerHostPendingReceiver;


// Interface: ServiceWorkerContainer
blink.mojom.mojom.ServiceWorkerContainer = {};

blink.mojom.mojom.ServiceWorkerContainerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.ServiceWorkerContainerRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ServiceWorkerContainer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.ServiceWorkerContainerPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.ServiceWorkerContainerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.ServiceWorkerContainerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setController(controller_info, should_notify_controllerchange) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainer_SetController_ParamsSpec,
      null,
      [controller_info, should_notify_controllerchange]);
  }

  postMessageToClient(source, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec,
      null,
      [source, message]);
  }

  countFeature(feature) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec,
      null,
      [feature]);
  }

};

blink.mojom.mojom.ServiceWorkerContainer.getRemote = function() {
  let remote = new blink.mojom.mojom.ServiceWorkerContainerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ServiceWorkerContainer',
    'context');
  return remote.$;
};

// ParamsSpec for SetController
blink.mojom.mojom.ServiceWorkerContainer_SetController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainer.SetController_Params',
      packedSize: 24,
      fields: [
        { name: 'controller_info', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ControllerServiceWorkerInfoSpec, nullable: false, minVersion: 0 },
        { name: 'should_notify_controllerchange', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PostMessageToClient
blink.mojom.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainer.PostMessageToClient_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ServiceWorkerObjectInfoSpec, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.TransferableMessageSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CountFeature
blink.mojom.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainer.CountFeature_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.WebFeatureSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.ServiceWorkerContainerPtr = blink.mojom.mojom.ServiceWorkerContainerRemote;
blink.mojom.mojom.ServiceWorkerContainerRequest = blink.mojom.mojom.ServiceWorkerContainerPendingReceiver;

