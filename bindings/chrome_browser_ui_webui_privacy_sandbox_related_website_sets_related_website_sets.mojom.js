// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/related_website_sets/related_website_sets.mojom
// Module: related_website_sets.mojom

'use strict';

// Module namespace
var related_website_sets = related_website_sets || {};
related_website_sets.mojom = related_website_sets.mojom || {};


// Enum: SiteType
related_website_sets.mojom.SiteType = {
  kPrimary: 0,
  kAssociated: 1,
  kService: 2,
};
related_website_sets.mojom.SiteTypeSpec = { $: mojo.internal.Enum() };

// Union: GetRelatedWebsiteSetsResponse
related_website_sets.mojom.GetRelatedWebsiteSetsResponseSpec = { $: mojo.internal.Union(
    'related_website_sets.mojom.GetRelatedWebsiteSetsResponse', {
      'related_website_sets': {
        'ordinal': 0,
        'type': mojo.internal.Array(related_website_sets.mojom.RelatedWebsiteSetSpec, false),
      }},
      'error_message': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: Member
related_website_sets.mojom.MemberSpec = {
  $: {
    structSpec: {
      name: 'related_website_sets.mojom.Member',
      packedSize: 24,
      fields: [
        { name: 'site', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: related_website_sets.mojom.SiteTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RelatedWebsiteSet
related_website_sets.mojom.RelatedWebsiteSetSpec = {
  $: {
    structSpec: {
      name: 'related_website_sets.mojom.RelatedWebsiteSet',
      packedSize: 32,
      fields: [
        { name: 'primary_site', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'member_sites', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(related_website_sets.mojom.MemberSpec, false), nullable: false, minVersion: 0 },
        { name: 'managed_by_enterprise', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: RelatedWebsiteSetsPageHandler
related_website_sets.mojom.RelatedWebsiteSetsPageHandler = {};

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
};

related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getRelatedWebsiteSets() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ParamsSpec,
      related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ResponseParamsSpec,
      []);
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

// ParamsSpec for GetRelatedWebsiteSets
related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ParamsSpec = {
  $: {
    structSpec: {
      name: 'related_website_sets.mojom.RelatedWebsiteSetsPageHandler.GetRelatedWebsiteSets_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

related_website_sets.mojom.RelatedWebsiteSetsPageHandler_GetRelatedWebsiteSets_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'related_website_sets.mojom.RelatedWebsiteSetsPageHandler.GetRelatedWebsiteSets_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'related_website_sets_info', packedOffset: 0, packedBitOffset: 0, type: related_website_sets.mojom.GetRelatedWebsiteSetsResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
related_website_sets.mojom.RelatedWebsiteSetsPageHandlerPtr = related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRemote;
related_website_sets.mojom.RelatedWebsiteSetsPageHandlerRequest = related_website_sets.mojom.RelatedWebsiteSetsPageHandlerPendingReceiver;

