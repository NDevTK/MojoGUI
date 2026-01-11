// Auto-generated MojoJS binding
// Source: chromium_src/content/browser/process_internals/process_internals.mojom
// Module: mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var mojom = mojom || {};
var url = url || {};

mojom.TypeSpec = { $: mojo.internal.Enum() };
mojom.ProcessCountInfoSpec = { $: {} };
mojom.SiteInstanceInfoSpec = { $: {} };
mojom.FrameInfoSpec = { $: {} };
mojom.WebContentsInfoSpec = { $: {} };
mojom.IsolatedOriginInfoSpec = { $: {} };
mojom.ProcessInternalsHandler = {};
mojom.ProcessInternalsHandler.$interfaceName = 'mojom.ProcessInternalsHandler';
mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec = { $: {} };
mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec = { $: {} };

// Enum: Type
mojom.Type = {
  kActive: 0,
  kBackForwardCache: 1,
  kPrerender: 2,
};

// Struct: ProcessCountInfo
mojo.internal.Struct(
    mojom.ProcessCountInfoSpec, 'mojom.ProcessCountInfo', [
      mojo.internal.StructField('renderer_process_limit', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('renderer_process_count_total', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('live_renderer_processes_count_total', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('renderer_process_count_for_limit', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SiteInstanceInfo
mojo.internal.Struct(
    mojom.SiteInstanceInfoSpec, 'mojom.SiteInstanceInfo', [
      mojo.internal.StructField('site_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('process_lock_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('storage_partition', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('site_instance_group_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('browsing_instance_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('locked', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('requires_origin_keyed_process', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_sandbox_for_iframes', 36, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_guest', 36, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_pdf', 36, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('are_javascript_optimizers_enabled', 36, 5, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FrameInfo
mojo.internal.Struct(
    mojom.FrameInfoSpec, 'mojom.FrameInfo', [
      mojo.internal.StructField('site_instance', 0, 0, mojom.SiteInstanceInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_committed_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('subframes', 16, 0, mojo.internal.Array(mojom.FrameInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('kActive', 24, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('routing_id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('agent_scheduling_group_id', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('process_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebContentsInfo
mojo.internal.Struct(
    mojom.WebContentsInfoSpec, 'mojom.WebContentsInfo', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('root_frame', 8, 0, mojom.FrameInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bfcached_root_frames', 16, 0, mojo.internal.Array(mojom.FrameInfoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('prerender_root_frames', 24, 0, mojo.internal.Array(mojom.FrameInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: IsolatedOriginInfo
mojo.internal.Struct(
    mojom.IsolatedOriginInfoSpec, 'mojom.IsolatedOriginInfo', [
      mojo.internal.StructField('origin', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: ProcessInternalsHandler
mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessCountInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParams', [
      mojo.internal.StructField('info', 0, 0, mojom.ProcessCountInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec, 'mojom.ProcessInternalsHandler_GetIsolationMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessPerSiteMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParams', [
      mojo.internal.StructField('mode', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec, 'mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParams', [
      mojo.internal.StructField('isolated_origins', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec, 'mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParams', [
      mojo.internal.StructField('isolated_origins', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec, 'mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParams', [
      mojo.internal.StructField('isolated_origins', 0, 0, mojo.internal.Array(mojom.IsolatedOriginInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec, 'mojom.ProcessInternalsHandler_GetAllWebContentsInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec, 'mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParams', [
      mojo.internal.StructField('infos', 0, 0, mojo.internal.Array(mojom.WebContentsInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojom.ProcessInternalsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojom.ProcessInternalsHandlerRemote = class {
  static get $interfaceName() {
    return 'mojom.ProcessInternalsHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojom.ProcessInternalsHandlerPendingReceiver,
      handle);
    this.$ = new mojom.ProcessInternalsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getProcessCountInfo() {
    return this.$.getProcessCountInfo();
  }
  getIsolationMode() {
    return this.$.getIsolationMode();
  }
  getProcessPerSiteMode() {
    return this.$.getProcessPerSiteMode();
  }
  getUserTriggeredIsolatedOrigins() {
    return this.$.getUserTriggeredIsolatedOrigins();
  }
  getWebTriggeredIsolatedOrigins() {
    return this.$.getWebTriggeredIsolatedOrigins();
  }
  getGloballyIsolatedOrigins() {
    return this.$.getGloballyIsolatedOrigins();
  }
  getAllWebContentsInfo() {
    return this.$.getAllWebContentsInfo();
  }
};

mojom.ProcessInternalsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ProcessInternalsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getProcessCountInfo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec,
      mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec,
      [],
      false);
  }

  getIsolationMode() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec,
      mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec,
      [],
      false);
  }

  getProcessPerSiteMode() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec,
      mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec,
      [],
      false);
  }

  getUserTriggeredIsolatedOrigins() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec,
      [],
      false);
  }

  getWebTriggeredIsolatedOrigins() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec,
      [],
      false);
  }

  getGloballyIsolatedOrigins() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec,
      mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec,
      [],
      false);
  }

  getAllWebContentsInfo() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec,
      mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec,
      [],
      false);
  }

};

mojom.ProcessInternalsHandler.getRemote = function() {
  let remote = new mojom.ProcessInternalsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'mojom.ProcessInternalsHandler',
    'context');
  return remote.$;
};

mojom.ProcessInternalsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ProcessInternalsHandler', [
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
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessCountInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getProcessCountInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetProcessCountInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetIsolationMode_ParamsSpec.$.structSpec);
          const result = this.impl.getIsolationMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetIsolationMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ParamsSpec.$.structSpec);
          const result = this.impl.getProcessPerSiteMode();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetProcessPerSiteMode_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ParamsSpec.$.structSpec);
          const result = this.impl.getUserTriggeredIsolatedOrigins();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetUserTriggeredIsolatedOrigins_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ParamsSpec.$.structSpec);
          const result = this.impl.getWebTriggeredIsolatedOrigins();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetWebTriggeredIsolatedOrigins_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ParamsSpec.$.structSpec);
          const result = this.impl.getGloballyIsolatedOrigins();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetGloballyIsolatedOrigins_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ParamsSpec.$.structSpec);
          const result = this.impl.getAllWebContentsInfo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojom.ProcessInternalsHandler_GetAllWebContentsInfo_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    });
  }
};

mojom.ProcessInternalsHandlerReceiver = mojom.ProcessInternalsHandlerReceiver;

mojom.ProcessInternalsHandlerPtr = mojom.ProcessInternalsHandlerRemote;
mojom.ProcessInternalsHandlerRequest = mojom.ProcessInternalsHandlerPendingReceiver;

