// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/discards/discards.mojom
// Module: discards.mojom

// Module namespace
var discards = discards || {};
discards.mojom = discards.mojom || {};
var mojom = mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

discards.mojom.LifecycleUnitVisibilitySpec = { $: mojo.internal.Enum() };
discards.mojom.CanFreezeSpec = { $: mojo.internal.Enum() };
discards.mojom.TabDiscardsInfoSpec = { $: {} };
discards.mojom.PageInfoSpec = { $: {} };
discards.mojom.FrameInfoSpec = { $: {} };
discards.mojom.ProcessInfoSpec = { $: {} };
discards.mojom.WorkerInfoSpec = { $: {} };
discards.mojom.FavIconInfoSpec = { $: {} };
discards.mojom.DetailsProvider = {};
discards.mojom.DetailsProvider.$interfaceName = 'discards.mojom.DetailsProvider';
discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_DiscardById_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_FreezeById_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_LoadById_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_Discard_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_Discard_ResponseParamsSpec = { $: {} };
discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec = { $: {} };
discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream = {};
discards.mojom.GraphChangeStream.$interfaceName = 'discards.mojom.GraphChangeStream';
discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_PageCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_PageChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec = { $: {} };
discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec = { $: {} };
discards.mojom.GraphDump = {};
discards.mojom.GraphDump.$interfaceName = 'discards.mojom.GraphDump';
discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec = { $: {} };
discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec = { $: {} };
discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec = { $: {} };

// Enum: LifecycleUnitVisibility
discards.mojom.LifecycleUnitVisibility = {
  HIDDEN: 0,
  OCCLUDED: 1,
  VISIBLE: 2,
};

// Enum: CanFreeze
discards.mojom.CanFreeze = {
  YES: 0,
  VARIES: 1,
  NO: 2,
};

// Struct: TabDiscardsInfo
mojo.internal.Struct(
    discards.mojom.TabDiscardsInfoSpec, 'discards.mojom.TabDiscardsInfo', [
      mojo.internal.StructField('tab_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('visibility', 16, 0, discards.mojom.LifecycleUnitVisibilitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('loading_state', 24, 0, mojom.LifecycleUnitLoadingStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 32, 0, mojom.LifecycleUnitStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cannot_discard_reasons', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('can_freeze', 48, 0, discards.mojom.CanFreezeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('cannot_freeze_reasons', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('discard_reason', 64, 0, mojom.LifecycleUnitDiscardReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_engagement_score', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('state_change_time', 80, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('discard_count', 88, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('utility_rank', 92, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('last_active_seconds', 96, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('id', 100, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('can_discard', 104, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_auto_discardable', 104, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_focus', 104, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 120]]);

// Struct: PageInfo
mojo.internal.Struct(
    discards.mojom.PageInfoSpec, 'discards.mojom.PageInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('main_frame_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opener_frame_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('embedder_frame_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('description_json', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FrameInfo
mojo.internal.Struct(
    discards.mojom.FrameInfoSpec, 'discards.mojom.FrameInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('page_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('parent_frame_id', 24, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('process_id', 32, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('description_json', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ProcessInfo
mojo.internal.Struct(
    discards.mojom.ProcessInfoSpec, 'discards.mojom.ProcessInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('pid', 8, 0, mojo_base.mojom.ProcessIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('private_footprint_kb', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('description_json', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: WorkerInfo
mojo.internal.Struct(
    discards.mojom.WorkerInfoSpec, 'discards.mojom.WorkerInfo', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('process_id', 16, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('client_frame_ids', 24, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('client_worker_ids', 32, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('child_worker_ids', 40, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
      mojo.internal.StructField('description_json', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: FavIconInfo
mojo.internal.Struct(
    discards.mojom.FavIconInfoSpec, 'discards.mojom.FavIconInfo', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('icon_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: DetailsProvider
mojo.internal.Struct(
    discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec, 'discards.mojom.DetailsProvider_GetTabDiscardsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec, 'discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParams', [
      mojo.internal.StructField('infos', 0, 0, mojo.internal.Array(discards.mojom.TabDiscardsInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec, 'discards.mojom.DetailsProvider_SetAutoDiscardable_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_auto_discardable', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec, 'discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_DiscardById_ParamsSpec, 'discards.mojom.DetailsProvider_DiscardById_Params', [
      mojo.internal.StructField('reason', 0, 0, mojom.LifecycleUnitDiscardReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec, 'discards.mojom.DetailsProvider_DiscardById_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_FreezeById_ParamsSpec, 'discards.mojom.DetailsProvider_FreezeById_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_LoadById_ParamsSpec, 'discards.mojom.DetailsProvider_LoadById_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_Discard_ParamsSpec, 'discards.mojom.DetailsProvider_Discard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_Discard_ResponseParamsSpec, 'discards.mojom.DetailsProvider_Discard_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec, 'discards.mojom.DetailsProvider_ToggleBatterySaverMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec, 'discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_Params', [
    ],
    [[0, 8]]);

discards.mojom.DetailsProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.DetailsProviderRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.DetailsProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.DetailsProviderPendingReceiver,
      handle);
    this.$ = new discards.mojom.DetailsProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getTabDiscardsInfo() {
    return this.$.getTabDiscardsInfo();
  }
  setAutoDiscardable(tab_id, is_auto_discardable) {
    return this.$.setAutoDiscardable(tab_id, is_auto_discardable);
  }
  discardById(tab_id, reason) {
    return this.$.discardById(tab_id, reason);
  }
  freezeById(tab_id) {
    return this.$.freezeById(tab_id);
  }
  loadById(tab_id) {
    return this.$.loadById(tab_id);
  }
  discard() {
    return this.$.discard();
  }
  toggleBatterySaverMode() {
    return this.$.toggleBatterySaverMode();
  }
  refreshPerformanceTabCpuMeasurements() {
    return this.$.refreshPerformanceTabCpuMeasurements();
  }
};

discards.mojom.DetailsProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DetailsProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getTabDiscardsInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec,
      discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec,
      [],
      false);
  }

  setAutoDiscardable(tab_id, is_auto_discardable) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec,
      discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec,
      [tab_id, is_auto_discardable],
      false);
  }

  discardById(tab_id, reason) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      discards.mojom.DetailsProvider_DiscardById_ParamsSpec,
      discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec,
      [tab_id, reason],
      false);
  }

  freezeById(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      discards.mojom.DetailsProvider_FreezeById_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  loadById(tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      discards.mojom.DetailsProvider_LoadById_ParamsSpec,
      null,
      [tab_id],
      false);
  }

  discard() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      discards.mojom.DetailsProvider_Discard_ParamsSpec,
      discards.mojom.DetailsProvider_Discard_ResponseParamsSpec,
      [],
      false);
  }

  toggleBatterySaverMode() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec,
      null,
      [],
      false);
  }

  refreshPerformanceTabCpuMeasurements() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec,
      null,
      [],
      false);
  }

};

discards.mojom.DetailsProvider.getRemote = function() {
  let remote = new discards.mojom.DetailsProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.DetailsProvider',
    'context');
  return remote.$;
};

discards.mojom.DetailsProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DetailsProvider', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_DiscardById_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_FreezeById_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_LoadById_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_Discard_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_GetTabDiscardsInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getTabDiscardsInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_GetTabDiscardsInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_SetAutoDiscardable_ParamsSpec.$.structSpec);
          const result = this.impl.setAutoDiscardable(params.tab_id, params.is_auto_discardable);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_SetAutoDiscardable_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_DiscardById_ParamsSpec.$.structSpec);
          const result = this.impl.discardById(params.tab_id, params.reason);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_DiscardById_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_FreezeById_ParamsSpec.$.structSpec);
          const result = this.impl.freezeById(params.tab_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_LoadById_ParamsSpec.$.structSpec);
          const result = this.impl.loadById(params.tab_id);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_Discard_ParamsSpec.$.structSpec);
          const result = this.impl.discard();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.DetailsProvider_Discard_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_ToggleBatterySaverMode_ParamsSpec.$.structSpec);
          const result = this.impl.toggleBatterySaverMode();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.DetailsProvider_RefreshPerformanceTabCpuMeasurements_ParamsSpec.$.structSpec);
          const result = this.impl.refreshPerformanceTabCpuMeasurements();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

discards.mojom.DetailsProviderReceiver = discards.mojom.DetailsProviderReceiver;

discards.mojom.DetailsProviderPtr = discards.mojom.DetailsProviderRemote;
discards.mojom.DetailsProviderRequest = discards.mojom.DetailsProviderPendingReceiver;


// Interface: GraphChangeStream
mojo.internal.Struct(
    discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_FrameCreated_Params', [
      mojo.internal.StructField('frame', 0, 0, discards.mojom.FrameInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_PageCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_PageCreated_Params', [
      mojo.internal.StructField('pages', 0, 0, discards.mojom.PageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_ProcessCreated_Params', [
      mojo.internal.StructField('process', 0, 0, discards.mojom.ProcessInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec, 'discards.mojom.GraphChangeStream_WorkerCreated_Params', [
      mojo.internal.StructField('worker', 0, 0, discards.mojom.WorkerInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_FrameChanged_Params', [
      mojo.internal.StructField('frame', 0, 0, discards.mojom.FrameInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_PageChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_PageChanged_Params', [
      mojo.internal.StructField('page', 0, 0, discards.mojom.PageInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_ProcessChanged_Params', [
      mojo.internal.StructField('process', 0, 0, discards.mojom.ProcessInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec, 'discards.mojom.GraphChangeStream_WorkerChanged_Params', [
      mojo.internal.StructField('worker', 0, 0, discards.mojom.WorkerInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec, 'discards.mojom.GraphChangeStream_FavIconDataAvailable_Params', [
      mojo.internal.StructField('favicon', 0, 0, discards.mojom.FavIconInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec, 'discards.mojom.GraphChangeStream_NodeDeleted_Params', [
      mojo.internal.StructField('node_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

discards.mojom.GraphChangeStreamPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.GraphChangeStreamRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphChangeStream';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.GraphChangeStreamPendingReceiver,
      handle);
    this.$ = new discards.mojom.GraphChangeStreamRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  frameCreated(frame) {
    return this.$.frameCreated(frame);
  }
  pageCreated(pages) {
    return this.$.pageCreated(pages);
  }
  processCreated(process) {
    return this.$.processCreated(process);
  }
  workerCreated(worker) {
    return this.$.workerCreated(worker);
  }
  frameChanged(frame) {
    return this.$.frameChanged(frame);
  }
  pageChanged(page) {
    return this.$.pageChanged(page);
  }
  processChanged(process) {
    return this.$.processChanged(process);
  }
  workerChanged(worker) {
    return this.$.workerChanged(worker);
  }
  favIconDataAvailable(favicon) {
    return this.$.favIconDataAvailable(favicon);
  }
  nodeDeleted(node_id) {
    return this.$.nodeDeleted(node_id);
  }
};

discards.mojom.GraphChangeStreamRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraphChangeStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  frameCreated(frame) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec,
      null,
      [frame],
      false);
  }

  pageCreated(pages) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discards.mojom.GraphChangeStream_PageCreated_ParamsSpec,
      null,
      [pages],
      false);
  }

  processCreated(process) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec,
      null,
      [process],
      false);
  }

  workerCreated(worker) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec,
      null,
      [worker],
      false);
  }

  frameChanged(frame) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec,
      null,
      [frame],
      false);
  }

  pageChanged(page) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      discards.mojom.GraphChangeStream_PageChanged_ParamsSpec,
      null,
      [page],
      false);
  }

  processChanged(process) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec,
      null,
      [process],
      false);
  }

  workerChanged(worker) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec,
      null,
      [worker],
      false);
  }

  favIconDataAvailable(favicon) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec,
      null,
      [favicon],
      false);
  }

  nodeDeleted(node_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec,
      null,
      [node_id],
      false);
  }

};

discards.mojom.GraphChangeStream.getRemote = function() {
  let remote = new discards.mojom.GraphChangeStreamRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphChangeStream',
    'context');
  return remote.$;
};

discards.mojom.GraphChangeStreamReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraphChangeStream', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameCreated_ParamsSpec.$.structSpec);
          const result = this.impl.frameCreated(params.frame);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageCreated_ParamsSpec.$.structSpec);
          const result = this.impl.pageCreated(params.pages);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessCreated_ParamsSpec.$.structSpec);
          const result = this.impl.processCreated(params.process);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerCreated_ParamsSpec.$.structSpec);
          const result = this.impl.workerCreated(params.worker);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_FrameChanged_ParamsSpec.$.structSpec);
          const result = this.impl.frameChanged(params.frame);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_PageChanged_ParamsSpec.$.structSpec);
          const result = this.impl.pageChanged(params.page);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_ProcessChanged_ParamsSpec.$.structSpec);
          const result = this.impl.processChanged(params.process);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_WorkerChanged_ParamsSpec.$.structSpec);
          const result = this.impl.workerChanged(params.worker);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_FavIconDataAvailable_ParamsSpec.$.structSpec);
          const result = this.impl.favIconDataAvailable(params.favicon);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphChangeStream_NodeDeleted_ParamsSpec.$.structSpec);
          const result = this.impl.nodeDeleted(params.node_id);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

discards.mojom.GraphChangeStreamReceiver = discards.mojom.GraphChangeStreamReceiver;

discards.mojom.GraphChangeStreamPtr = discards.mojom.GraphChangeStreamRemote;
discards.mojom.GraphChangeStreamRequest = discards.mojom.GraphChangeStreamPendingReceiver;


// Interface: GraphDump
mojo.internal.Struct(
    discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec, 'discards.mojom.GraphDump_SubscribeToChanges_Params', [
      mojo.internal.StructField('change_subscriber', 0, 0, mojo.internal.InterfaceProxy(discards.mojom.GraphChangeStreamRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec, 'discards.mojom.GraphDump_RequestNodeDescriptions_Params', [
      mojo.internal.StructField('node_ids', 0, 0, mojo.internal.Array(mojo.internal.Int64, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec, 'discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParams', [
      mojo.internal.StructField('node_descriptions_json', 0, 0, mojo.internal.Map(mojo.internal.Int64, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

discards.mojom.GraphDumpPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

discards.mojom.GraphDumpRemote = class {
  static get $interfaceName() {
    return 'discards.mojom.GraphDump';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      discards.mojom.GraphDumpPendingReceiver,
      handle);
    this.$ = new discards.mojom.GraphDumpRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  subscribeToChanges(change_subscriber) {
    return this.$.subscribeToChanges(change_subscriber);
  }
  requestNodeDescriptions(node_ids) {
    return this.$.requestNodeDescriptions(node_ids);
  }
};

discards.mojom.GraphDumpRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('GraphDump', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  subscribeToChanges(change_subscriber) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec,
      null,
      [change_subscriber],
      false);
  }

  requestNodeDescriptions(node_ids) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec,
      discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec,
      [node_ids],
      false);
  }

};

discards.mojom.GraphDump.getRemote = function() {
  let remote = new discards.mojom.GraphDumpRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'discards.mojom.GraphDump',
    'context');
  return remote.$;
};

discards.mojom.GraphDumpReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('GraphDump', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphDump_SubscribeToChanges_ParamsSpec.$.structSpec);
          const result = this.impl.subscribeToChanges(params.change_subscriber);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(discards.mojom.GraphDump_RequestNodeDescriptions_ParamsSpec.$.structSpec);
          const result = this.impl.requestNodeDescriptions(params.node_ids);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, discards.mojom.GraphDump_RequestNodeDescriptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

discards.mojom.GraphDumpReceiver = discards.mojom.GraphDumpReceiver;

discards.mojom.GraphDumpPtr = discards.mojom.GraphDumpRemote;
discards.mojom.GraphDumpRequest = discards.mojom.GraphDumpPendingReceiver;

