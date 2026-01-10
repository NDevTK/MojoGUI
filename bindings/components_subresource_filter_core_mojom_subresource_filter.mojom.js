// Auto-generated MojoJS binding
// Source: chromium_src/components/subresource_filter/core/mojom/subresource_filter.mojom
// Module: subresource_filter.mojom

'use strict';

// Module namespace
var subresource_filter = subresource_filter || {};
subresource_filter.mojom = subresource_filter.mojom || {};


// Enum: ActivationLevel
subresource_filter.mojom.mojom.ActivationLevel = {
  kDisabled: 0,
  kDryRun: 1,
  kEnabled: 2,
};
subresource_filter.mojom.mojom.ActivationLevelSpec = { $: mojo.internal.Enum() };

// Enum: AdsViolation
subresource_filter.mojom.mojom.AdsViolation = {
  kMobileAdDensityByHeightAbove30: 0,
  kHeavyAdsInterventionAtHostLimit: 1,
  kLargeStickyAd: 2,
  kOverlayPopupAd: 3,
};
subresource_filter.mojom.mojom.AdsViolationSpec = { $: mojo.internal.Enum() };

// Enum: SubresourceFilterDisabledReason
subresource_filter.mojom.mojom.SubresourceFilterDisabledReason = {
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
subresource_filter.mojom.mojom.SubresourceFilterDisabledReasonSpec = { $: mojo.internal.Enum() };

// Struct: ActivationState
subresource_filter.mojom.mojom.ActivationStateSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.ActivationState',
      packedSize: 24,
      fields: [
        { name: 'activation_level', packedOffset: 0, packedBitOffset: 0, type: subresource_filter.mojom.ActivationLevelSpec, nullable: false, minVersion: 0 },
        { name: 'disabled_reason', packedOffset: 4, packedBitOffset: 0, type: subresource_filter.mojom.SubresourceFilterDisabledReasonSpec, nullable: false, minVersion: 0 },
        { name: 'filtering_disabled_for_document', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'generic_blocking_rules_disabled', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'measure_performance', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_logging', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DocumentLoadStatistics
subresource_filter.mojom.mojom.DocumentLoadStatisticsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.DocumentLoadStatistics',
      packedSize: 40,
      fields: [
        { name: 'num_loads_total', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'num_loads_evaluated', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'num_loads_matching_rules', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'num_loads_disallowed', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'evaluation_total_wall_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'evaluation_total_cpu_duration', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: SubresourceFilterRulesetObserver
subresource_filter.mojom.mojom.SubresourceFilterRulesetObserver = {};

subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverRemote = class {
  static get $interfaceName() {
    return 'subresource_filter.mojom.SubresourceFilterRulesetObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverPendingReceiver,
      handle);
    this.$ = new subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setRulesetForProcess(ruleset_file) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      subresource_filter.mojom.mojom.SubresourceFilterRulesetObserver_SetRulesetForProcess_ParamsSpec,
      null,
      [ruleset_file]);
  }

};

subresource_filter.mojom.mojom.SubresourceFilterRulesetObserver.getRemote = function() {
  let remote = new subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'subresource_filter.mojom.SubresourceFilterRulesetObserver',
    'context');
  return remote.$;
};

// ParamsSpec for SetRulesetForProcess
subresource_filter.mojom.mojom.SubresourceFilterRulesetObserver_SetRulesetForProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'subresource_filter.mojom.SubresourceFilterRulesetObserver.SetRulesetForProcess_Params',
      packedSize: 16,
      fields: [
        { name: 'ruleset_file', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FileSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverPtr = subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverRemote;
subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverRequest = subresource_filter.mojom.mojom.SubresourceFilterRulesetObserverPendingReceiver;

