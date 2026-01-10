// Auto-generated MojoJS binding
// Source: chromium_src/chrome/enterprise_companion/mojom/enterprise_companion.mojom
// Module: enterprise_companion.mojom

'use strict';

// Module namespace
var enterprise_companion = enterprise_companion || {};
enterprise_companion.mojom = enterprise_companion.mojom || {};


// Struct: Status
enterprise_companion.mojom.StatusSpec = {
  $: {
    structSpec: {
      name: 'enterprise_companion.mojom.Status',
      packedSize: 24,
      fields: [
        { name: 'space', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: EnterpriseCompanion
enterprise_companion.mojom.EnterpriseCompanion = {};

enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_companion.mojom.EnterpriseCompanion_Shutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: enterprise_companion.mojom.PolicyFetchReasonSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 1, packedSize: 16}]
    }
  }
};

enterprise_companion.mojom.EnterpriseCompanionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

enterprise_companion.mojom.EnterpriseCompanionRemote = class {
  static get $interfaceName() {
    return 'enterprise_companion.mojom.EnterpriseCompanion';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      enterprise_companion.mojom.EnterpriseCompanionPendingReceiver,
      handle);
    this.$ = new enterprise_companion.mojom.EnterpriseCompanionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

enterprise_companion.mojom.EnterpriseCompanionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  shutdown() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec,
      enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec,
      []);
  }

  fetchPolicies(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec,
      enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec,
      [reason]);
  }

};

enterprise_companion.mojom.EnterpriseCompanion.getRemote = function() {
  let remote = new enterprise_companion.mojom.EnterpriseCompanionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'enterprise_companion.mojom.EnterpriseCompanion',
    'context');
  return remote.$;
};

// ParamsSpec for Shutdown
enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_companion.mojom.EnterpriseCompanion.Shutdown_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_companion.mojom.EnterpriseCompanion.Shutdown_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: enterprise_companion.mojom.StatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FetchPolicies
enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_companion.mojom.EnterpriseCompanion.FetchPolicies_Params',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: enterprise_companion.mojom.PolicyFetchReasonSpec, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 1, packedSize: 16}]
    }
  }
};

enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'enterprise_companion.mojom.EnterpriseCompanion.FetchPolicies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: enterprise_companion.mojom.StatusSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
enterprise_companion.mojom.EnterpriseCompanionPtr = enterprise_companion.mojom.EnterpriseCompanionRemote;
enterprise_companion.mojom.EnterpriseCompanionRequest = enterprise_companion.mojom.EnterpriseCompanionPendingReceiver;

