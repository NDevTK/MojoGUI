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

// Struct: ServiceWorkerContainerInfoForClient
blink.mojom.ServiceWorkerContainerInfoForClient = class {
  constructor(values = {}) {
    this.client_receiver = values.client_receiver !== undefined ? values.client_receiver : null;
  }
};

// Interface: ServiceWorkerContainerHost
blink.mojom.ServiceWorkerContainerHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerContainerHost';
  }

  register(script_url, options, outside_fetch_client_settings_object) {
    // Method: Register
    return new Promise((resolve) => {
      // Call: Register(script_url, options, outside_fetch_client_settings_object)
      resolve({});
    });
  }

  getRegistration(client_url) {
    // Method: GetRegistration
    return new Promise((resolve) => {
      // Call: GetRegistration(client_url)
      resolve({});
    });
  }

  getRegistrations() {
    // Method: GetRegistrations
    return new Promise((resolve) => {
      // Call: GetRegistrations()
      resolve({});
    });
  }

  getRegistrationForReady() {
    // Method: GetRegistrationForReady
    return new Promise((resolve) => {
      // Call: GetRegistrationForReady()
      resolve({});
    });
  }

  ensureControllerServiceWorker(receiver, purpose) {
    // Method: EnsureControllerServiceWorker
    // Call: EnsureControllerServiceWorker(receiver, purpose)
  }

  cloneContainerHost(container_host) {
    // Method: CloneContainerHost
    // Call: CloneContainerHost(container_host)
  }

  hintToUpdateServiceWorker() {
    // Method: HintToUpdateServiceWorker
    // Call: HintToUpdateServiceWorker()
  }

  ensureFileAccess(files) {
    // Method: EnsureFileAccess
    // Call: EnsureFileAccess(files)
  }

  onExecutionReady() {
    // Method: OnExecutionReady
    // Call: OnExecutionReady()
  }

};

blink.mojom.ServiceWorkerContainerHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceWorkerContainer
blink.mojom.ServiceWorkerContainerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ServiceWorkerContainer';
  }

  setController(controller_info, should_notify_controllerchange) {
    // Method: SetController
    // Call: SetController(controller_info, should_notify_controllerchange)
  }

  postMessageToClient(source, message) {
    // Method: PostMessageToClient
    // Call: PostMessageToClient(source, message)
  }

  countFeature(feature) {
    // Method: CountFeature
    // Call: CountFeature(feature)
  }

};

blink.mojom.ServiceWorkerContainerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
