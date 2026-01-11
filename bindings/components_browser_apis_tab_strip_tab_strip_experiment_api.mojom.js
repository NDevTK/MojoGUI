// Auto-generated MojoJS binding
// Source: chromium_src/components/browser_apis/tab_strip/tab_strip_experiment_api.mojom
// Module: tabs_api.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  updateTabGroupVisual(id, visual_data) {
    return this.$.updateTabGroupVisual(id, visual_data);
  }
  showTabContextMenu(tab_id, location) {
    return this.$.showTabContextMenu(tab_id, location);
  }
};

tabs_api.mojom.TabStripExperimentServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TabStripExperimentService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  updateTabGroupVisual(id, visual_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec,
      null,
      [id, visual_data],
      false);
  }

  showTabContextMenu(tab_id, location) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TabStripExperimentService', [
      { explicit: null },
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
             decoder.decodeStructInline(tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec.$.structSpec);
          const result = this.impl.updateTabGroupVisual(params.id, params.visual_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showTabContextMenu(params.tab_id, params.location);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

tabs_api.mojom.TabStripExperimentServiceReceiver = tabs_api.mojom.TabStripExperimentServiceReceiver;

tabs_api.mojom.TabStripExperimentServicePtr = tabs_api.mojom.TabStripExperimentServiceRemote;
tabs_api.mojom.TabStripExperimentServiceRequest = tabs_api.mojom.TabStripExperimentServicePendingReceiver;

