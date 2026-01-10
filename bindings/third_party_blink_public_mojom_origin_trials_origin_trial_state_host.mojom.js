// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/origin_trials/origin_trial_state_host.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var url = url || {};

blink.mojom.OriginTrialFeatureStateSpec = { $: {} };
blink.mojom.OriginTrialStateHost = {};
blink.mojom.OriginTrialStateHost.$interfaceName = 'blink.mojom.OriginTrialStateHost';
blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec = { $: {} };
blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec = { $: {} };

// Struct: OriginTrialFeatureState
mojo.internal.Struct(
    blink.mojom.OriginTrialFeatureStateSpec, 'blink.mojom.OriginTrialFeatureState', [
      mojo.internal.StructField('tokens', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('is_enabled', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
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
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.OriginTrialStateHost',
    'context');
  return remote.$;
};

blink.mojom.OriginTrialStateHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.applyFeatureDiffForOriginTrial');
          const result = this.impl.applyFeatureDiffForOriginTrial(params.origin_trial_features);
          break;
        }
        case 1: {
          const params = blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.enablePersistentTrial');
          const result = this.impl.enablePersistentTrial(params.token, params.script_origins);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.OriginTrialStateHostReceiver = blink.mojom.OriginTrialStateHostReceiver;

blink.mojom.OriginTrialStateHostPtr = blink.mojom.OriginTrialStateHostRemote;
blink.mojom.OriginTrialStateHostRequest = blink.mojom.OriginTrialStateHostPendingReceiver;

