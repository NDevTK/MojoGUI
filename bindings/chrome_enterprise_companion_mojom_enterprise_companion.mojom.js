// Auto-generated MojoJS binding
// Source: chromium_src/chrome/enterprise_companion/mojom/enterprise_companion.mojom
// Module: enterprise_companion.mojom

'use strict';

// Module namespace
var enterprise_companion = enterprise_companion || {};
enterprise_companion.mojom = enterprise_companion.mojom || {};

enterprise_companion.mojom.StatusSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion = {};
enterprise_companion.mojom.EnterpriseCompanion.$interfaceName = 'enterprise_companion.mojom.EnterpriseCompanion';
enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec = { $: {} };
enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec = { $: {} };

// Struct: Status
mojo.internal.Struct(
    enterprise_companion.mojom.StatusSpec, 'enterprise_companion.mojom.Status', [
      mojo.internal.StructField('space', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('code', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: EnterpriseCompanion
mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_Shutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_Shutdown_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, enterprise_companion.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_Params', [
      mojo.internal.StructField('reason', 0, 0, enterprise_companion.mojom.PolicyFetchReasonSpec.$, null, false, 1, undefined),
    ],
    [[0, 8], [1, 16]]);

mojo.internal.Struct(
    enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec, 'enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, enterprise_companion.mojom.StatusSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  fetchPolicies(reason) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ParamsSpec,
      enterprise_companion.mojom.EnterpriseCompanion_FetchPolicies_ResponseParamsSpec,
      [reason],
      false);
  }

};

enterprise_companion.mojom.EnterpriseCompanion.getRemote = function() {
  let remote = new enterprise_companion.mojom.EnterpriseCompanionRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'enterprise_companion.mojom.EnterpriseCompanion',
    'context');
  return remote.$;
};

enterprise_companion.mojom.EnterpriseCompanionPtr = enterprise_companion.mojom.EnterpriseCompanionRemote;
enterprise_companion.mojom.EnterpriseCompanionRequest = enterprise_companion.mojom.EnterpriseCompanionPendingReceiver;

