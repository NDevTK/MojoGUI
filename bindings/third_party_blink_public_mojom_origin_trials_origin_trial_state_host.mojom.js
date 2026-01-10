// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/origin_trials/origin_trial_state_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};

blink.mojom.OriginTrialFeatureStateSpec = { $: {} };
blink.mojom.OriginTrialStateHost = {};
blink.mojom.OriginTrialStateHost.$interfaceName = 'blink.mojom.OriginTrialStateHost';
blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec = { $: {} };
blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec = { $: {} };

// Struct: OriginTrialFeatureState
mojo.internal.Struct(
    blink.mojom.OriginTrialFeatureStateSpec, 'blink.mojom.OriginTrialFeatureState', [
      mojo.internal.StructField('is_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tokens', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: OriginTrialStateHost
mojo.internal.Struct(
    blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec, 'blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_Params', [
      mojo.internal.StructField('origin_trial_features', 0, 0, mojo.internal.Map(blink.mojom.RuntimeFeatureSpec.$, blink.mojom.OriginTrialFeatureStateSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec, 'blink.mojom.OriginTrialStateHost_EnablePersistentTrial_Params', [
      mojo.internal.StructField('token', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('script_origins', 8, 0, mojo.internal.Array(url.mojom.OriginSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.OriginTrialStateHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.OriginTrialStateHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.OriginTrialStateHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.OriginTrialStateHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.OriginTrialStateHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.OriginTrialStateHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  applyFeatureDiffForOriginTrial(origin_trial_features) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec,
      null,
      [origin_trial_features],
      false);
  }

  enablePersistentTrial(token, script_origins) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec,
      null,
      [token, script_origins],
      false);
  }

};

blink.mojom.OriginTrialStateHost.getRemote = function() {
  let remote = new blink.mojom.OriginTrialStateHostRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'blink.mojom.OriginTrialStateHost',
    'context');
  return remote.$;
};

blink.mojom.OriginTrialStateHostPtr = blink.mojom.OriginTrialStateHostRemote;
blink.mojom.OriginTrialStateHostRequest = blink.mojom.OriginTrialStateHostPendingReceiver;

