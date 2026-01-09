// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_experiment_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};


// Interface: TabStripExperimentService
tabs_api.mojom.TabStripExperimentService = {};

tabs_api.mojom.TabStripExperimentServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

tabs_api.mojom.TabStripExperimentServiceRemote = class {
  static get $interfaceName() {
    return 'tabs_api.mojom.TabStripExperimentService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      tabs_api.mojom.TabStripExperimentServicePendingReceiver,
      handle);
    this.$ = new tabs_api.mojom.TabStripExperimentServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

tabs_api.mojom.TabStripExperimentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  updateTabGroupVisual(id, visual_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec,
      null,
      [id, visual_data]);
  }

  showTabContextMenu(tab_id, location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec,
      null,
      [tab_id, location]);
  }

};

tabs_api.mojom.TabStripExperimentService.getRemote = function() {
  let remote = new tabs_api.mojom.TabStripExperimentServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'tabs_api.mojom.TabStripExperimentService',
    'context');
  return remote.$;
};

// ParamsSpec for UpdateTabGroupVisual
tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripExperimentService.UpdateTabGroupVisual_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'visual_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShowTabContextMenu
tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec = {
  $: {
    structSpec: {
      name: 'tabs_api.mojom.TabStripExperimentService.ShowTabContextMenu_Params',
      packedSize: 24,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'location', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
tabs_api.mojom.TabStripExperimentServicePtr = tabs_api.mojom.TabStripExperimentServiceRemote;
tabs_api.mojom.TabStripExperimentServiceRequest = tabs_api.mojom.TabStripExperimentServicePendingReceiver;

