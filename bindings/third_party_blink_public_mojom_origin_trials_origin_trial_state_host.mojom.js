// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/origin_trials/origin_trial_state_host.mojom
// Module: blink.mojom

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
  applyFeatureDiffForOriginTrial(origin_trial_features) {
    return this.$.applyFeatureDiffForOriginTrial(origin_trial_features);
  }
  enablePersistentTrial(token, script_origins) {
    return this.$.enablePersistentTrial(token, script_origins);
  }
};

blink.mojom.OriginTrialStateHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('OriginTrialStateHost', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  applyFeatureDiffForOriginTrial(origin_trial_features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec,
      null,
      [origin_trial_features],
      false);
  }

  enablePersistentTrial(token, script_origins) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('OriginTrialStateHost', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OriginTrialStateHost_ApplyFeatureDiffForOriginTrial_ParamsSpec.$.structSpec);
          const result = this.impl.applyFeatureDiffForOriginTrial(params.origin_trial_features);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.OriginTrialStateHost_EnablePersistentTrial_ParamsSpec.$.structSpec);
          const result = this.impl.enablePersistentTrial(params.token, params.script_origins);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.OriginTrialStateHostReceiver = blink.mojom.OriginTrialStateHostReceiver;

blink.mojom.OriginTrialStateHostPtr = blink.mojom.OriginTrialStateHostRemote;
blink.mojom.OriginTrialStateHostRequest = blink.mojom.OriginTrialStateHostPendingReceiver;

