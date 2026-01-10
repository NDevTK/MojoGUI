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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: UpdateTabGroupVisual
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateTabGroupVisual (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: ShowTabContextMenu
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ShowTabContextMenu (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tabs_api.mojom.TabStripExperimentService_UpdateTabGroupVisual_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.updateTabGroupVisual');
          const result = this.impl.updateTabGroupVisual(params.id, params.visual_data);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(tabs_api.mojom.TabStripExperimentService_ShowTabContextMenu_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.showTabContextMenu');
          const result = this.impl.showTabContextMenu(params.tab_id, params.location);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

tabs_api.mojom.TabStripExperimentServiceReceiver = tabs_api.mojom.TabStripExperimentServiceReceiver;

tabs_api.mojom.TabStripExperimentServicePtr = tabs_api.mojom.TabStripExperimentServiceRemote;
tabs_api.mojom.TabStripExperimentServiceRequest = tabs_api.mojom.TabStripExperimentServicePendingReceiver;

