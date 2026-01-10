// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_url_filter.mojom
// Module: chromecast.mojom

'use strict';

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
};

chromecast.mojom.ActivityUrlFilterConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFilter(filter) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setFilter(params.filter);
          break;
        }
      }
    }});
  }
};

chromecast.mojom.ActivityUrlFilterConfigurationReceiver = chromecast.mojom.ActivityUrlFilterConfigurationReceiver;

chromecast.mojom.ActivityUrlFilterConfigurationPtr = chromecast.mojom.ActivityUrlFilterConfigurationRemote;
chromecast.mojom.ActivityUrlFilterConfigurationRequest = chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver;

