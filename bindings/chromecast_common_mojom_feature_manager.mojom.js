// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/feature_manager.mojom
// Module: chromecast.shell.mojom

// Module namespace
var chromecast = chromecast || {};
chromecast.shell = chromecast.shell || {};
chromecast.shell.mojom = chromecast.shell.mojom || {};
var mojo_base = mojo_base || {};

chromecast.shell.mojom.FeatureSpec = { $: {} };
chromecast.shell.mojom.FeatureManager = {};
chromecast.shell.mojom.FeatureManager.$interfaceName = 'chromecast.shell.mojom.FeatureManager';
chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec = { $: {} };

// Struct: Feature
mojo.internal.Struct(
    chromecast.shell.mojom.FeatureSpec, 'chromecast.shell.mojom.Feature', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('config', 8, 0, mojo_base.mojom.DictionaryValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: FeatureManager
mojo.internal.Struct(
    chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec, 'chromecast.shell.mojom.FeatureManager_ConfigureFeatures_Params', [
      mojo.internal.StructField('features', 0, 0, mojo.internal.Array(chromecast.shell.mojom.FeatureSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.shell.mojom.FeatureManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.shell.mojom.FeatureManagerRemote = class {
  static get $interfaceName() {
    return 'chromecast.shell.mojom.FeatureManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.shell.mojom.FeatureManagerPendingReceiver,
      handle);
    this.$ = new chromecast.shell.mojom.FeatureManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  configureFeatures(features) {
    return this.$.configureFeatures(features);
  }
};

chromecast.shell.mojom.FeatureManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FeatureManager', [
      { explicit: null },
    ]);
  }

  configureFeatures(features) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec,
      null,
      [features],
      false);
  }

};

chromecast.shell.mojom.FeatureManager.getRemote = function() {
  let remote = new chromecast.shell.mojom.FeatureManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.shell.mojom.FeatureManager',
    'context');
  return remote.$;
};

chromecast.shell.mojom.FeatureManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FeatureManager', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.shell.mojom.FeatureManager_ConfigureFeatures_ParamsSpec.$.structSpec);
          const result = this.impl.configureFeatures(params.features);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.shell.mojom.FeatureManagerReceiver = chromecast.shell.mojom.FeatureManagerReceiver;

chromecast.shell.mojom.FeatureManagerPtr = chromecast.shell.mojom.FeatureManagerRemote;
chromecast.shell.mojom.FeatureManagerRequest = chromecast.shell.mojom.FeatureManagerPendingReceiver;

