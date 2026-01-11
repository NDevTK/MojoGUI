// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/related_website_sets/related_website_sets.mojom
// Module: related_website_sets.mojom

// Module namespace
var related_website_sets = related_website_sets || {};
related_website_sets.mojom = related_website_sets.mojom || {};

related_website_sets.mojom.SiteTypeSpec = { $: mojo.internal.Enum() };
related_website_sets.mojom.GetRelatedWebsiteSetsResponseSpec = { $: {} };
related_website_sets.mojom.MemberSpec = { $: {} };
related_website_sets.mojom.RelatedWebsiteSetSpec = { $: {} };
related_website_sets.mojom.RelatedWebsiteSetsPageHandler = {};
related_website_sets.mojom.RelatedWebsiteSetsPageHandler.$interfaceName = 'related_website_sets.mojom.RelatedWebsiteSetsPageHandler';
related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ParamsSpec = { $: {} };
related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ResponseParamsSpec = { $: {} };

// Enum: SiteType
related_website_sets.mojom.SiteType = {
  kPrimary: 0,
  kAssociated: 1,
  kService: 2,
};

// Union: GetRelatedWebsiteSetsResponse
mojo.internal.Union(
    related_website_sets.mojom.GetRelatedWebsiteSetsResponseSpec, 'related_website_sets.mojom.GetRelatedWebsiteSetsResponse', {
      'related_website_sets': {
        'ordinal': 0,
        'type': mojo.internal.Array(related_website_sets.mojom.RelatedWebsiteSetSpec.$, false),
        'nullable': false,
      },
      'error_message': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: Member
mojo.internal.Struct(
    related_website_sets.mojom.MemberSpec, 'related_website_sets.mojom.Member', [
      mojo.internal.StructField('site', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, related_website_sets.mojom.SiteTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RelatedWebsiteSet
mojo.internal.Struct(
    related_website_sets.mojom.RelatedWebsiteSetSpec, 'related_website_sets.mojom.RelatedWebsiteSet', [
      mojo.internal.StructField('primary_site', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('member_sites', 8, 0, mojo.internal.Array(related_website_sets.mojom.MemberSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('managed_by_enterprise', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: RelatedWebsiteSetsPageHandler
mojo.internal.Struct(
    related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ParamsSpec, 'related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ResponseParamsSpec, 'related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ResponseParams', [
      mojo.internal.StructField('related_website_sets_info', 0, 0, related_website_sets.mojom.GetRelatedWebsiteSetsResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'related_website_sets.mojom.RelatedWebsiteSetsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      related_website_sets.mojom.RelatedWebsiteSetsPageHandlerPendingReceiver,
      handle);
    this.$ = new related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getRelatedWebsiteSets() {
    return this.$.getRelatedWebsiteSets();
  }
};

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RelatedWebsiteSetsPageHandler', [
      { explicit: null },
    ]);
  }

  getRelatedWebsiteSets() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ParamsSpec,
      related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ResponseParamsSpec,
      [],
      false);
  }

};

related_website_sets.mojom.RelatedWebsiteSetsPageHandler.getRemote = function() {
  let remote = new related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'related_website_sets.mojom.RelatedWebsiteSetsPageHandler',
    'context');
  return remote.$;
};

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('RelatedWebsiteSetsPageHandler', [
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
             decoder.decodeStructInline(related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ParamsSpec.$.structSpec);
          const result = this.impl.getRelatedWebsiteSets();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ResponseParamsSpec);
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

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerReceiver = related_website_sets.mojom.RelatedWebsiteSetsPageHandlerReceiver;

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerPtr = related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRemote;
related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRequest = related_website_sets.mojom.RelatedWebsiteSetsPageHandlerPendingReceiver;

