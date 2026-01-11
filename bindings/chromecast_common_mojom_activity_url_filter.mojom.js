// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_url_filter.mojom
// Module: chromecast.mojom

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};

chromecast.mojom.ActivityUrlFilterCriteriaSpec = { $: {} };
chromecast.mojom.ActivityUrlFilterConfiguration = {};
chromecast.mojom.ActivityUrlFilterConfiguration.$interfaceName = 'chromecast.mojom.ActivityUrlFilterConfiguration';
chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec = { $: {} };

// Struct: ActivityUrlFilterCriteria
mojo.internal.Struct(
    chromecast.mojom.ActivityUrlFilterCriteriaSpec, 'chromecast.mojom.ActivityUrlFilterCriteria', [
      mojo.internal.StructField('criteria', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ActivityUrlFilterConfiguration
mojo.internal.Struct(
    chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec, 'chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_Params', [
      mojo.internal.StructField('filter', 0, 0, chromecast.mojom.ActivityUrlFilterCriteriaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.ActivityUrlFilterConfigurationRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ActivityUrlFilterConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.ActivityUrlFilterConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setFilter(filter) {
    return this.$.setFilter(filter);
  }
};

chromecast.mojom.ActivityUrlFilterConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ActivityUrlFilterConfiguration', [
      { explicit: null },
    ]);
  }

  setFilter(filter) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec,
      null,
      [filter],
      false);
  }

};

chromecast.mojom.ActivityUrlFilterConfiguration.getRemote = function() {
  let remote = new chromecast.mojom.ActivityUrlFilterConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ActivityUrlFilterConfiguration',
    'context');
  return remote.$;
};

chromecast.mojom.ActivityUrlFilterConfigurationReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ActivityUrlFilterConfiguration', [
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
             decoder.decodeStructInline(chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec.$.structSpec);
          const result = this.impl.setFilter(params.filter);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.mojom.ActivityUrlFilterConfigurationReceiver = chromecast.mojom.ActivityUrlFilterConfigurationReceiver;

chromecast.mojom.ActivityUrlFilterConfigurationPtr = chromecast.mojom.ActivityUrlFilterConfigurationRemote;
chromecast.mojom.ActivityUrlFilterConfigurationRequest = chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver;

