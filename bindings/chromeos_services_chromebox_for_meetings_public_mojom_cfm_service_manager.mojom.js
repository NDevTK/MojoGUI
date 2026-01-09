// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/services/chromebox_for_meetings/public/mojom/cfm_service_manager.mojom
// Module: chromeos.cfm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cfm = chromeos.cfm || {};
chromeos.cfm.mojom = chromeos.cfm.mojom || {};


// Interface: DisconnectReason
chromeos.cfm.mojom.DisconnectReasonPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.DisconnectReason';
  }

};

chromeos.cfm.mojom.DisconnectReasonRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CfmServiceContext
chromeos.cfm.mojom.CfmServiceContextPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.CfmServiceContext';
  }

  0(interface_name, adaptor_remote) {
    // Method: 0
    return new Promise((resolve) => {
      // Call: 0(interface_name, adaptor_remote)
      resolve({});
    });
  }

  1(interface_name, receiver_pipe) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(interface_name, receiver_pipe)
      resolve({});
    });
  }

};

chromeos.cfm.mojom.CfmServiceContextRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: CfmServiceAdaptor
chromeos.cfm.mojom.CfmServiceAdaptorPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chromeos.cfm.mojom.CfmServiceAdaptor';
  }

  clients(BindingSet) {
    // Method: clients
    // Call: clients(BindingSet)
  }

  0(receiver_pipe) {
    // Method: 0
    // Call: 0(receiver_pipe)
  }

};

chromeos.cfm.mojom.CfmServiceAdaptorRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
