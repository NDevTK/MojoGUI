// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/metrics_helper.mojom
// Module: chromecast.metrics.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var chromecast = chromecast || {};
chromecast.metrics = chromecast.metrics || {};
chromecast.metrics.mojom = chromecast.metrics.mojom || {};

chromecast.metrics.mojom.MetricsHelper = {};
chromecast.metrics.mojom.MetricsHelper.$interfaceName = 'chromecast.metrics.mojom.MetricsHelper';
chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec = { $: {} };

// Interface: MetricsHelper
mojo.internal.Struct(
    chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec, 'chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_Params', [
      mojo.internal.StructField('app_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('session_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sdk_version', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('event', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

chromecast.metrics.mojom.MetricsHelperPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.metrics.mojom.MetricsHelperRemote = class {
  static get $interfaceName() {
    return 'chromecast.metrics.mojom.MetricsHelper';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.metrics.mojom.MetricsHelperPendingReceiver,
      handle);
    this.$ = new chromecast.metrics.mojom.MetricsHelperRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  recordApplicationEvent(app_id, session_id, sdk_version, event) {
    return this.$.recordApplicationEvent(app_id, session_id, sdk_version, event);
  }
};

chromecast.metrics.mojom.MetricsHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MetricsHelper', [
      { explicit: null },
    ]);
  }

  recordApplicationEvent(app_id, session_id, sdk_version, event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec,
      null,
      [app_id, session_id, sdk_version, event],
      false);
  }

};

chromecast.metrics.mojom.MetricsHelper.getRemote = function() {
  let remote = new chromecast.metrics.mojom.MetricsHelperRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.metrics.mojom.MetricsHelper',
    'context');
  return remote.$;
};

chromecast.metrics.mojom.MetricsHelperReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MetricsHelper', [
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec.$.structSpec);
          const result = this.impl.recordApplicationEvent(params.app_id, params.session_id, params.sdk_version, params.event);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

chromecast.metrics.mojom.MetricsHelperReceiver = chromecast.metrics.mojom.MetricsHelperReceiver;

chromecast.metrics.mojom.MetricsHelperPtr = chromecast.metrics.mojom.MetricsHelperRemote;
chromecast.metrics.mojom.MetricsHelperRequest = chromecast.metrics.mojom.MetricsHelperPendingReceiver;

