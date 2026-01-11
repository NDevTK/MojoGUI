// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_index/content_index.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var url = url || {};
var gfx = gfx || {};

blink.mojom.ContentIndexErrorSpec = { $: mojo.internal.Enum() };
blink.mojom.ContentCategorySpec = { $: mojo.internal.Enum() };
blink.mojom.ContentIconDefinitionSpec = { $: {} };
blink.mojom.ContentDescriptionSpec = { $: {} };
blink.mojom.ContentIndexService = {};
blink.mojom.ContentIndexService.$interfaceName = 'blink.mojom.ContentIndexService';
blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec = { $: {} };
blink.mojom.ContentIndexService_GetIconSizes_ResponseParamsSpec = { $: {} };
blink.mojom.ContentIndexService_Add_ParamsSpec = { $: {} };
blink.mojom.ContentIndexService_Add_ResponseParamsSpec = { $: {} };
blink.mojom.ContentIndexService_Delete_ParamsSpec = { $: {} };
blink.mojom.ContentIndexService_Delete_ResponseParamsSpec = { $: {} };
blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec = { $: {} };
blink.mojom.ContentIndexService_GetDescriptions_ResponseParamsSpec = { $: {} };

blink.mojom.kMaxIconResolution = 65536;

// Enum: ContentIndexError
blink.mojom.ContentIndexError = {
  NONE: 0,
  INVALID_PARAMETER: 1,
  STORAGE_ERROR: 2,
  NO_SERVICE_WORKER: 3,
};

// Enum: ContentCategory
blink.mojom.ContentCategory = {
  NONE: 0,
  HOME_PAGE: 1,
  ARTICLE: 2,
  VIDEO: 3,
  AUDIO: 4,
};

// Struct: ContentIconDefinition
mojo.internal.Struct(
    blink.mojom.ContentIconDefinitionSpec, 'blink.mojom.ContentIconDefinition', [
      mojo.internal.StructField('src', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('sizes', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('type', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ContentDescription
mojo.internal.Struct(
    blink.mojom.ContentDescriptionSpec, 'blink.mojom.ContentDescription', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('category', 24, 0, blink.mojom.ContentCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icons', 32, 0, mojo.internal.Array(blink.mojom.ContentIconDefinitionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('launch_url', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: ContentIndexService
mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec, 'blink.mojom.ContentIndexService_GetIconSizes_Params', [
      mojo.internal.StructField('category', 0, 0, blink.mojom.ContentCategorySpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetIconSizes_ResponseParamsSpec, 'blink.mojom.ContentIndexService_GetIconSizes_ResponseParams', [
      mojo.internal.StructField('icon_sizes', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_Add_ParamsSpec, 'blink.mojom.ContentIndexService_Add_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, blink.mojom.ContentDescriptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icon', 16, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('launchUrl', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_Add_ResponseParamsSpec, 'blink.mojom.ContentIndexService_Add_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ContentIndexErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_Delete_ParamsSpec, 'blink.mojom.ContentIndexService_Delete_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_Delete_ResponseParamsSpec, 'blink.mojom.ContentIndexService_Delete_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ContentIndexErrorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec, 'blink.mojom.ContentIndexService_GetDescriptions_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetDescriptions_ResponseParamsSpec, 'blink.mojom.ContentIndexService_GetDescriptions_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ContentIndexErrorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('descriptions', 8, 0, mojo.internal.Array(blink.mojom.ContentDescriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

blink.mojom.ContentIndexServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.ContentIndexServiceRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.ContentIndexService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.ContentIndexServicePendingReceiver,
      handle);
    this.$ = new blink.mojom.ContentIndexServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getIconSizes(category) {
    return this.$.getIconSizes(category);
  }
  add(service_worker_registration_id, description, icon, launchUrl) {
    return this.$.add(service_worker_registration_id, description, icon, launchUrl);
  }
  delete(service_worker_registration_id, id) {
    return this.$.delete(service_worker_registration_id, id);
  }
  getDescriptions(service_worker_registration_id) {
    return this.$.getDescriptions(service_worker_registration_id);
  }
};

blink.mojom.ContentIndexServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('ContentIndexService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getIconSizes(category) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec,
      blink.mojom.ContentIndexService_GetIconSizes_ResponseParamsSpec,
      [category],
      false);
  }

  add(service_worker_registration_id, description, icon, launchUrl) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.ContentIndexService_Add_ParamsSpec,
      blink.mojom.ContentIndexService_Add_ResponseParamsSpec,
      [service_worker_registration_id, description, icon, launchUrl],
      false);
  }

  delete(service_worker_registration_id, id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.ContentIndexService_Delete_ParamsSpec,
      blink.mojom.ContentIndexService_Delete_ResponseParamsSpec,
      [service_worker_registration_id, id],
      false);
  }

  getDescriptions(service_worker_registration_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec,
      blink.mojom.ContentIndexService_GetDescriptions_ResponseParamsSpec,
      [service_worker_registration_id],
      false);
  }

};

blink.mojom.ContentIndexService.getRemote = function() {
  let remote = new blink.mojom.ContentIndexServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.ContentIndexService',
    'context');
  return remote.$;
};

blink.mojom.ContentIndexServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('ContentIndexService', [
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
             decoder.decodeStructInline(blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ContentIndexService_Add_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ContentIndexService_Delete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec.$.structSpec);
          const result = this.impl.getIconSizes(params.category);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ContentIndexService_GetIconSizes_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ContentIndexService_Add_ParamsSpec.$.structSpec);
          const result = this.impl.add(params.service_worker_registration_id, params.description, params.icon, params.launchUrl);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ContentIndexService_Add_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ContentIndexService_Delete_ParamsSpec.$.structSpec);
          const result = this.impl.delete(params.service_worker_registration_id, params.id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ContentIndexService_Delete_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec.$.structSpec);
          const result = this.impl.getDescriptions(params.service_worker_registration_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.ContentIndexService_GetDescriptions_ResponseParamsSpec);
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

blink.mojom.ContentIndexServiceReceiver = blink.mojom.ContentIndexServiceReceiver;

blink.mojom.ContentIndexServicePtr = blink.mojom.ContentIndexServiceRemote;
blink.mojom.ContentIndexServiceRequest = blink.mojom.ContentIndexServicePendingReceiver;

