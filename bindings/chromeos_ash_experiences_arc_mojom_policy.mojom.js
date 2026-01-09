// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/policy.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: InstallErrorReason
arc.mojom.InstallErrorReason = {
  REASON_UNSPECIFIED: 0,
  TIMEOUT: 1,
  TRANSIENT_ERROR: 2,
  NOT_FOUND: 3,
  NOT_COMPATIBLE_WITH_DEVICE: 4,
  NOT_APPROVED: 5,
  PERMISSIONS_NOT_ACCEPTED: 6,
  NOT_AVAILABLE_IN_COUNTRY: 7,
  NO_LICENSES_REMAINING: 8,
  NOT_ENROLLED: 9,
  USER_INVALID: 10,
};

// Enum: CommandResultType
arc.mojom.CommandResultType = {
  IGNORED: 0,
  FAILURE: 1,
  SUCCESS: 2,
};

// Interface: PolicyHost
arc.mojom.PolicyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PolicyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PolicyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.PolicyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PolicyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PolicyHost.getRemote = function() {
  let remote = new arc.mojom.PolicyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyHost',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.PolicyHostPtr = arc.mojom.PolicyHostRemote;
arc.mojom.PolicyHostRequest = arc.mojom.PolicyHostPendingReceiver;


// Interface: PolicyInstance
arc.mojom.PolicyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.PolicyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.PolicyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.PolicyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.PolicyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

arc.mojom.PolicyInstance.getRemote = function() {
  let remote = new arc.mojom.PolicyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyInstance',
    'context');
  return remote.$;
}};

// Legacy compatibility
arc.mojom.PolicyInstancePtr = arc.mojom.PolicyInstanceRemote;
arc.mojom.PolicyInstanceRequest = arc.mojom.PolicyInstancePendingReceiver;

