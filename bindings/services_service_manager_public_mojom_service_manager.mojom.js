// Auto-generated MojoJS binding
// Source: chromium_src/services/service_manager/public/mojom/service_manager.mojom
// Module: service_manager.mojom

'use strict';

// Module namespace
var service_manager = service_manager || {};
service_manager.mojom = service_manager.mojom || {};


// Enum: InstanceState
service_manager.mojom.InstanceState = {
  or: 0,
  the: 1,
  but: 2,
};

// Struct: RunningServiceInfo
service_manager.mojom.RunningServiceInfo = class {
  constructor(values = {}) {
    this.state = values.state !== undefined ? values.state : 0;
  }
};

// Interface: ServiceManagerListener
service_manager.mojom.ServiceManagerListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'service_manager.mojom.ServiceManagerListener';
  }

  addInstanceListener() {
    // Method: AddInstanceListener
    // Call: AddInstanceListener()
  }

  onInit(running_services) {
    // Method: OnInit
    // Call: OnInit(running_services)
  }

  tODO() {
    // Method: TODO
    // Call: TODO()
  }

  onServiceCreated(service) {
    // Method: OnServiceCreated
    // Call: OnServiceCreated(service)
  }

  onServiceStarted(identity, pid_deprecated) {
    // Method: OnServiceStarted
    // Call: OnServiceStarted(identity, pid_deprecated)
  }

  onServicePIDReceived(identity, pid) {
    // Method: OnServicePIDReceived
    // Call: OnServicePIDReceived(identity, pid)
  }

  onServiceFailedToStart(identity) {
    // Method: OnServiceFailedToStart
    // Call: OnServiceFailedToStart(identity)
  }

  onServiceStopped(identity) {
    // Method: OnServiceStopped
    // Call: OnServiceStopped(identity)
  }

};

service_manager.mojom.ServiceManagerListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ServiceManager
service_manager.mojom.ServiceManagerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'service_manager.mojom.ServiceManager';
  }

  addListener(listener) {
    // Method: AddListener
    // Call: AddListener(listener)
  }

};

service_manager.mojom.ServiceManagerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
