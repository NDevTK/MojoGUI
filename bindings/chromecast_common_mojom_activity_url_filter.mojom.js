// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_url_filter.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Interface: ActivityUrlFilterConfiguration
chromecast.mojom.ActivityUrlFilterConfiguration = {};

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
      null,
      [filter],
      undefined,
      undefined
    );
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

// ParamsSpec for SetFilter
chromecast.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ActivityUrlFilterConfiguration.SetFilter_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.ActivityUrlFilterConfigurationPtr = chromecast.mojom.ActivityUrlFilterConfigurationRemote;
chromecast.mojom.ActivityUrlFilterConfigurationRequest = chromecast.mojom.ActivityUrlFilterConfigurationPendingReceiver;

