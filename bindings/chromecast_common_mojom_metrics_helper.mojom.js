// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/metrics_helper.mojom
// Module: chromecast.metrics.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.metrics = chromecast.metrics || {};
chromecast.metrics.mojom = chromecast.metrics.mojom || {};


// Interface: MetricsHelper
chromecast.metrics.mojom.MetricsHelper = {};

chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sdk_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

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
      [app_id, session_id, sdk_version, event]);
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

// ParamsSpec for RecordApplicationEvent
chromecast.metrics.mojom.MetricsHelper_RecordApplicationEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.metrics.mojom.MetricsHelper.RecordApplicationEvent_Params',
      packedSize: 40,
      fields: [
        { name: 'app_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'session_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sdk_version', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Legacy compatibility
chromecast.metrics.mojom.MetricsHelperPtr = chromecast.metrics.mojom.MetricsHelperRemote;
chromecast.metrics.mojom.MetricsHelperRequest = chromecast.metrics.mojom.MetricsHelperPendingReceiver;

