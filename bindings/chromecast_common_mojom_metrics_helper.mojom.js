// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/metrics_helper.mojom
// Module: chromecast.metrics.mojom

'use strict';

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
};

chromecast.metrics.mojom.MetricsHelperRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  recordApplicationEvent(app_id, session_id, sdk_version, event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      console.log('[GeneratedReceiver] Message received', message);
      const header = message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header'); return; }
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.recordApplicationEvent(params.app_id, params.session_id, params.sdk_version, params.event);
          break;
        }
      }
    }});
  }
};

chromecast.metrics.mojom.MetricsHelperReceiver = chromecast.metrics.mojom.MetricsHelperReceiver;

chromecast.metrics.mojom.MetricsHelperPtr = chromecast.metrics.mojom.MetricsHelperRemote;
chromecast.metrics.mojom.MetricsHelperRequest = chromecast.metrics.mojom.MetricsHelperPendingReceiver;

