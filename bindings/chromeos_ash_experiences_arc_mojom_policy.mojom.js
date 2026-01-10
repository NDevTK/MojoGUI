// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/policy.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


// Enum: InstallErrorReason
arc.mojom.mojom.InstallErrorReason = {
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
arc.mojom.mojom.InstallErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: CommandResultType
arc.mojom.mojom.CommandResultType = {
  IGNORED: 0,
  FAILURE: 1,
  SUCCESS: 2,
};
arc.mojom.mojom.CommandResultTypeSpec = { $: mojo.internal.Enum() };

// Interface: PolicyHost
arc.mojom.mojom.PolicyHost = {};

arc.mojom.mojom.PolicyHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PolicyHostRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PolicyHostPendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PolicyHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PolicyHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getPolicies() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      arc.mojom.mojom.PolicyHost_GetPolicies_ParamsSpec,
      arc.mojom.mojom.PolicyHost_GetPolicies_ResponseParamsSpec,
      []);
  }

  reportCompliance(request) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.PolicyHost_ReportCompliance_ParamsSpec,
      arc.mojom.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec,
      [request]);
  }

  reportDPCVersion(version) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      arc.mojom.mojom.PolicyHost_ReportDPCVersion_ParamsSpec,
      null,
      [version]);
  }

  reportPlayStoreLocalPolicySet(time, package_names) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      arc.mojom.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec,
      null,
      [time, package_names]);
  }

};

arc.mojom.mojom.PolicyHost.getRemote = function() {
  let remote = new arc.mojom.mojom.PolicyHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyHost',
    'context');
  return remote.$;
};

// ParamsSpec for GetPolicies
arc.mojom.mojom.PolicyHost_GetPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyHost.GetPolicies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

arc.mojom.mojom.PolicyHost_GetPolicies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyHost.GetPolicies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'policies', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportCompliance
arc.mojom.mojom.PolicyHost_ReportCompliance_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyHost.ReportCompliance_Params',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.PolicyHost_ReportCompliance_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyHost.ReportCompliance_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportDPCVersion
arc.mojom.mojom.PolicyHost_ReportDPCVersion_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyHost.ReportDPCVersion_Params',
      packedSize: 16,
      fields: [
        { name: 'version', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ReportPlayStoreLocalPolicySet
arc.mojom.mojom.PolicyHost_ReportPlayStoreLocalPolicySet_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyHost.ReportPlayStoreLocalPolicySet_Params',
      packedSize: 24,
      fields: [
        { name: 'time', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'package_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PolicyHostPtr = arc.mojom.mojom.PolicyHostRemote;
arc.mojom.mojom.PolicyHostRequest = arc.mojom.mojom.PolicyHostPendingReceiver;


// Interface: PolicyInstance
arc.mojom.mojom.PolicyInstance = {};

arc.mojom.mojom.PolicyInstancePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

arc.mojom.mojom.PolicyInstanceRemote = class {
  static get $interfaceName() {
    return 'arc.mojom.PolicyInstance';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      arc.mojom.mojom.PolicyInstancePendingReceiver,
      handle);
    this.$ = new arc.mojom.mojom.PolicyInstanceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

arc.mojom.mojom.PolicyInstanceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  init(host_remote) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      arc.mojom.mojom.PolicyInstance_Init_ParamsSpec,
      null,
      [host_remote]);
  }

  onPolicyUpdated() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      arc.mojom.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec,
      null,
      []);
  }

  onCommandReceived(command) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      arc.mojom.mojom.PolicyInstance_OnCommandReceived_ParamsSpec,
      arc.mojom.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec,
      [command]);
  }

};

arc.mojom.mojom.PolicyInstance.getRemote = function() {
  let remote = new arc.mojom.mojom.PolicyInstanceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'arc.mojom.PolicyInstance',
    'context');
  return remote.$;
};

// ParamsSpec for Init
arc.mojom.mojom.PolicyInstance_Init_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyInstance.Init_Params',
      packedSize: 16,
      fields: [
        { name: 'host_remote', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPolicyUpdated
arc.mojom.mojom.PolicyInstance_OnPolicyUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyInstance.OnPolicyUpdated_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnCommandReceived
arc.mojom.mojom.PolicyInstance_OnCommandReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyInstance.OnCommandReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

arc.mojom.mojom.PolicyInstance_OnCommandReceived_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.PolicyInstance.OnCommandReceived_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.CommandResultTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
arc.mojom.mojom.PolicyInstancePtr = arc.mojom.mojom.PolicyInstanceRemote;
arc.mojom.mojom.PolicyInstanceRequest = arc.mojom.mojom.PolicyInstancePendingReceiver;

