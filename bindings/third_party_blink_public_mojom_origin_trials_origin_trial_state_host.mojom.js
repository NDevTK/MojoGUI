// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/origin_trials/origin_trial_state_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var url = url || {};


// Struct: OriginTrialFeatureState
blink.mojom.OriginTrialFeatureStateSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OriginTrialFeatureState',
      packedSize: 24,
      fields: [
        { name: 'is_enabled', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tokens', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: OriginTrialStateHost
blink.mojom.OriginTrialStateHost = {};

blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_Params',
      packedSize: 16,
      fields: [
        { name: 'origin_trial_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.RuntimeFeatureSpec, blink.mojom.OriginTrialFeatureStateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OriginTrialStateHost_EnablePersistentTrial_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'script_origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
      [origin_trial_features]);
  }

  enablePersistentTrial(token, script_origins) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec,
      null,
      [token, script_origins]);
  }

};

blink.mojom.OriginTrialStateHost.getRemote = function() {
  let remote = new blink.mojom.OriginTrialStateHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OriginTrialStateHost',
    'context');
  return remote.$;
};

// ParamsSpec for ApplyFeatureDiffForOriginTrial
blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OriginTrialStateHost.ApplyFeatureDiffForOriginTrial_Params',
      packedSize: 16,
      fields: [
        { name: 'origin_trial_features', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.RuntimeFeatureSpec, blink.mojom.OriginTrialFeatureStateSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EnablePersistentTrial
blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.OriginTrialStateHost.EnablePersistentTrial_Params',
      packedSize: 24,
      fields: [
        { name: 'token', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'script_origins', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(url.mojom.OriginSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.OriginTrialStateHostPtr = blink.mojom.OriginTrialStateHostRemote;
blink.mojom.OriginTrialStateHostRequest = blink.mojom.OriginTrialStateHostPendingReceiver;

