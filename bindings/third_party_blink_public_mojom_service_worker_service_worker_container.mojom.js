// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/service_worker/service_worker_container.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ControllerServiceWorkerPurpose
blink.mojom.ControllerServiceWorkerPurpose = {
  FETCH_SUB_RESOURCE: 0,
};

// Interface: ServiceWorkerContainerHost
blink.mojom.ServiceWorkerContainerHost = {};

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
      blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec,
      [script_url, options, outside_fetch_client_settings_object],
      undefined,
      undefined
    );
  }

  getRegistration(client_url) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec,
      [client_url],
      undefined,
      undefined
    );
  }

  getRegistrations() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  getRegistrationForReady() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec,
      blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  ensureControllerServiceWorker(receiver, purpose) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec,
      null,
      null,
      [receiver, purpose],
      undefined,
      undefined
    );
  }

  cloneContainerHost(container_host) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec,
      null,
      null,
      [container_host],
      undefined,
      undefined
    );
  }

  hintToUpdateServiceWorker() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  ensureFileAccess(files) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec,
      null,
      null,
      [files],
      undefined,
      undefined
    );
  }

  onExecutionReady() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
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

// ParamsSpec for Register
blink.mojom.ServiceWorkerContainerHost_Register_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.Register_Params',
      packedSize: 32,
      fields: [
        { name: 'script_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'outside_fetch_client_settings_object', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

blink.mojom.ServiceWorkerContainerHost_Register_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.Register_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'registration', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetRegistration
blink.mojom.ServiceWorkerContainerHost_GetRegistration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistration_Params',
      packedSize: 16,
      fields: [
        { name: 'client_url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.ServiceWorkerContainerHost_GetRegistration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistration_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'registration', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetRegistrations
blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ParamsSpec = {
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

blink.mojom.ServiceWorkerContainerHost_GetRegistrations_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistrations_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'error_msg', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'infos', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for GetRegistrationForReady
blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ParamsSpec = {
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

blink.mojom.ServiceWorkerContainerHost_GetRegistrationForReady_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.GetRegistrationForReady_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'registration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnsureControllerServiceWorker
blink.mojom.ServiceWorkerContainerHost_EnsureControllerServiceWorker_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.EnsureControllerServiceWorker_Params',
      packedSize: 24,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
        { name: 'purpose', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloneContainerHost
blink.mojom.ServiceWorkerContainerHost_CloneContainerHost_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.CloneContainerHost_Params',
      packedSize: 16,
      fields: [
        { name: 'container_host', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for HintToUpdateServiceWorker
blink.mojom.ServiceWorkerContainerHost_HintToUpdateServiceWorker_ParamsSpec = {
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
blink.mojom.ServiceWorkerContainerHost_EnsureFileAccess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainerHost.EnsureFileAccess_Params',
      packedSize: 16,
      fields: [
        { name: 'files', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnExecutionReady
blink.mojom.ServiceWorkerContainerHost_OnExecutionReady_ParamsSpec = {
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
blink.mojom.ServiceWorkerContainerHostPtr = blink.mojom.ServiceWorkerContainerHostRemote;
blink.mojom.ServiceWorkerContainerHostRequest = blink.mojom.ServiceWorkerContainerHostPendingReceiver;


// Interface: ServiceWorkerContainer
blink.mojom.ServiceWorkerContainer = {};

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
      null,
      [controller_info, should_notify_controllerchange],
      undefined,
      undefined
    );
  }

  postMessageToClient(source, message) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec,
      null,
      null,
      [source, message],
      undefined,
      undefined
    );
  }

  countFeature(feature) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec,
      null,
      null,
      [feature],
      undefined,
      undefined
    );
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

// ParamsSpec for SetController
blink.mojom.ServiceWorkerContainer_SetController_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainer.SetController_Params',
      packedSize: 24,
      fields: [
        { name: 'controller_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'should_notify_controllerchange', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for PostMessageToClient
blink.mojom.ServiceWorkerContainer_PostMessageToClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainer.PostMessageToClient_Params',
      packedSize: 24,
      fields: [
        { name: 'source', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'message', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CountFeature
blink.mojom.ServiceWorkerContainer_CountFeature_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ServiceWorkerContainer.CountFeature_Params',
      packedSize: 16,
      fields: [
        { name: 'feature', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
blink.mojom.ServiceWorkerContainerPtr = blink.mojom.ServiceWorkerContainerRemote;
blink.mojom.ServiceWorkerContainerRequest = blink.mojom.ServiceWorkerContainerPendingReceiver;

