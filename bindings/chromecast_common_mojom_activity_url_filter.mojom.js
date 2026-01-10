// Auto-generated MojoJS binding
// Source: chromium_src/chromecast/common/mojom/activity_url_filter.mojom
// Module: chromecast.mojom

'use strict';

// Module namespace
var chromecast = chromecast || {};
chromecast.mojom = chromecast.mojom || {};


// Struct: ActivityUrlFilterCriteria
chromecast.mojom.mojom.ActivityUrlFilterCriteriaSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ActivityUrlFilterCriteria',
      packedSize: 16,
      fields: [
        { name: 'criteria', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ActivityUrlFilterConfiguration
chromecast.mojom.mojom.ActivityUrlFilterConfiguration = {};

chromecast.mojom.mojom.ActivityUrlFilterConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromecast.mojom.mojom.ActivityUrlFilterConfigurationRemote = class {
  static get $interfaceName() {
    return 'chromecast.mojom.ActivityUrlFilterConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromecast.mojom.mojom.ActivityUrlFilterConfigurationPendingReceiver,
      handle);
    this.$ = new chromecast.mojom.mojom.ActivityUrlFilterConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromecast.mojom.mojom.ActivityUrlFilterConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setFilter(filter) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromecast.mojom.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec,
      null,
      [filter]);
  }

};

chromecast.mojom.mojom.ActivityUrlFilterConfiguration.getRemote = function() {
  let remote = new chromecast.mojom.mojom.ActivityUrlFilterConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromecast.mojom.ActivityUrlFilterConfiguration',
    'context');
  return remote.$;
};

// ParamsSpec for SetFilter
chromecast.mojom.mojom.ActivityUrlFilterConfiguration_SetFilter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'chromecast.mojom.ActivityUrlFilterConfiguration.SetFilter_Params',
      packedSize: 16,
      fields: [
        { name: 'filter', packedOffset: 0, packedBitOffset: 0, type: chromecast.mojom.ActivityUrlFilterCriteriaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
chromecast.mojom.mojom.ActivityUrlFilterConfigurationPtr = chromecast.mojom.mojom.ActivityUrlFilterConfigurationRemote;
chromecast.mojom.mojom.ActivityUrlFilterConfigurationRequest = chromecast.mojom.mojom.ActivityUrlFilterConfigurationPendingReceiver;

