// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_experiment_api.mojom
// Module: tabs_api.mojom

'use strict';

// Module namespace
var tabs_api = tabs_api || {};
tabs_api.mojom = tabs_api.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

tabs_api.mojom.TabStripExperimentService = {};
tabs_api.mojom.TabStripExperimentService.$interfaceName = 'tabs_api.mojom.TabStripExperimentService';
tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec = { $: {} };
tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec = { $: {} };

// Interface: TabStripExperimentService
mojo.internal.Struct(
    tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec, 'tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_Params', [
      mojo.internal.StructField('id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('visual_data', 8, 0, tabs_api.mojom.TabGroupVisualDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec, 'tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_Params', [
      mojo.internal.StructField('tab_id', 0, 0, tabs_api.mojom.NodeIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('location', 8, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

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
      [id, visual_data],
      false);
  }

  showTabContextMenu(tab_id, location) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec,
      null,
      [tab_id, location],
      false);
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

tabs_api.mojom.TabStripExperimentServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec.$.decode(message.payload);
          const result = this.impl.updateTabGroupVisual(params.id, params.visual_data);
          break;
        }
        case 1: {
          const params = tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec.$.decode(message.payload);
          const result = this.impl.showTabContextMenu(params.tab_id, params.location);
          break;
        }
      }
    });
  }
};

tabs_api.mojom.TabStripExperimentServiceReceiver = tabs_api.mojom.TabStripExperimentServiceReceiver;

tabs_api.mojom.TabStripExperimentServicePtr = tabs_api.mojom.TabStripExperimentServiceRemote;
tabs_api.mojom.TabStripExperimentServiceRequest = tabs_api.mojom.TabStripExperimentServicePendingReceiver;

