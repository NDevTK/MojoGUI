// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/core/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';

// Module namespace
var subresource_filter = subresource_filter || {};
subresource_filter.mojom = subresource_filter.mojom || {};

subresource_filter.mojom.ActivationLevelSpec = { $: mojo.internal.Enum() };
subresource_filter.mojom.AdsViolationSpec = { $: mojo.internal.Enum() };
subresource_filter.mojom.SubresourceFilterDisabledReasonSpec = { $: mojo.internal.Enum() };
subresource_filter.mojom.ActivationStateSpec = { $: {} };
subresource_filter.mojom.DocumentLoadStatisticsSpec = { $: {} };
subresource_filter.mojom.SubresourceFilterRulesetObserver = {};
subresource_filter.mojom.SubresourceFilterRulesetObserver.$interfaceName = 'subresource_filter.mojom.SubresourceFilterRulesetObserver';
subresource_filter.mojom.SubresourceFilterRulesetObserver_SetRulesetForProcess_ParamsSpec = { $: {} };

// Enum: ActivationLevel
subresource_filter.mojom.ActivationLevel = {
  kDisabled: 0,
  kDryRun: 1,
  kEnabled: 2,
};

// Enum: AdsViolation
subresource_filter.mojom.AdsViolation = {
  kMobileAdDensityByHeightAbove30: 0,
  kHeavyAdsInterventionAtHostLimit: 1,
  kLargeStickyAd: 2,
  kOverlayPopupAd: 3,
};

// Enum: SubresourceFilterDisabledReason
subresource_filter.mojom.SubresourceFilterDisabledReason = {
  kUnknown: 0,
  kNoMatchingConfiguration: 1,
  kDisabledByConfiguration: 2,
  kUrlAllowlisted: 3,
  kWarningMode: 4,
  kNavigationError: 5,
  kFilterNeverCreated: 6,
  kRulesetUnavailableOrCorrupt: 7,
  kUrlNotHandledByNetworkStack: 8,
};

// Struct: ActivationState
mojo.internal.Struct(
    subresource_filter.mojom.ActivationStateSpec, 'subresource_filter.mojom.ActivationState', [
      mojo.internal.StructField('activation_level', 0, 0, subresource_filter.mojom.ActivationLevelSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('disabled_reason', 8, 0, subresource_filter.mojom.SubresourceFilterDisabledReasonSpec.$, 0, false, 0, undefined),
      mojo.internal.StructField('filtering_disabled_for_document', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('generic_blocking_rules_disabled', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('measure_performance', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_logging', 16, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DocumentLoadStatistics
mojo.internal.Struct(
    subresource_filter.mojom.DocumentLoadStatisticsSpec, 'subresource_filter.mojom.DocumentLoadStatistics', [
      mojo.internal.StructField('num_loads_total', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('num_loads_evaluated', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('num_loads_matching_rules', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('num_loads_disallowed', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('evaluation_total_wall_duration', 16, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('evaluation_total_cpu_duration', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: SubresourceFilterRulesetObserver
mojo.internal.Struct(
    subresource_filter.mojom.SubresourceFilterRulesetObserver_SetRulesetForProcess_ParamsSpec, 'subresource_filter.mojom.SubresourceFilterRulesetObserver_SetRulesetForProcess_Params', [
      mojo.internal.StructField('ruleset_file', 0, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

subresource_filter.mojom.SubresourceFilterRulesetObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

subresource_filter.mojom.SubresourceFilterRulesetObserverRemote = class {
  static get $interfaceName() {
    return 'subresource_filter.mojom.SubresourceFilterRulesetObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      subresource_filter.mojom.SubresourceFilterRulesetObserverPendingReceiver,
      handle);
    this.$ = new subresource_filter.mojom.SubresourceFilterRulesetObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

subresource_filter.mojom.SubresourceFilterRulesetObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setRulesetForProcess(ruleset_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      subresource_filter.mojom.SubresourceFilterRulesetObserver_SetRulesetForProcess_ParamsSpec,
      null,
      [ruleset_file],
      false);
  }

};

subresource_filter.mojom.SubresourceFilterRulesetObserver.getRemote = function() {
  let remote = new subresource_filter.mojom.SubresourceFilterRulesetObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'subresource_filter.mojom.SubresourceFilterRulesetObserver',
    'context');
  return remote.$;
};

subresource_filter.mojom.SubresourceFilterRulesetObserverPtr = subresource_filter.mojom.SubresourceFilterRulesetObserverRemote;
subresource_filter.mojom.SubresourceFilterRulesetObserverRequest = subresource_filter.mojom.SubresourceFilterRulesetObserverPendingReceiver;

