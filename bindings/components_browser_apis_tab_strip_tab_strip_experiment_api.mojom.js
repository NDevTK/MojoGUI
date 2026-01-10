// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_experiment_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Interface: TabStripExperimentService
tabs_api.mojom.mojom.TabStripExperimentService = {};

tabs_api.mojom.mojom.TabStripExperimentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tabs_api.mojom.mojom.TabStripExperimentServiceRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabStripExperimentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tabs_api.mojom.mojom.TabStripExperimentServicePendingReceiver,
      handle);
    this.$ = new tabs_api.mojom.mojom.TabStripExperimentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tabs_api.mojom.mojom.TabStripExperimentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTabGroupVisual(id, visual_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tabs_api.mojom.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec,
      null,
      [id, visual_data]);
  }

  showTabContextMenu(tab_id, location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tabs_api.mojom.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec,
      null,
      [tab_id, location]);
  }

};

tabs_api.mojom.mojom.TabStripExperimentService.getRemote = function() {
  let remote = new tabs_api.mojom.mojom.TabStripExperimentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabStripExperimentService',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateTabGroupVisual
tabs_api.mojom.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripExperimentService.UpdateTabGroupVisual_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'visual_data', packedOffset: 8, packedBitOffset: 0, type: tabs_api.mojom.TabGroupVisualDataSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for ShowTabContextMenu
tabs_api.mojom.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripExperimentService.ShowTabContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: tabs_api.mojom.NodeIdSpec, nullable: false, minVersion: 0 },
        { name: 'location', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
tabs_api.mojom.mojom.TabStripExperimentServicePtr = tabs_api.mojom.mojom.TabStripExperimentServiceRemote;
tabs_api.mojom.mojom.TabStripExperimentServiceRequest = tabs_api.mojom.mojom.TabStripExperimentServicePendingReceiver;

