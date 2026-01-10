// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/content_index/content_index.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var skia = skia || {};
var blink = blink || {};
var url = url || {};
var ui = ui || {};
var gfx = gfx || {};


blink.mojom.kMaxIconResolution = 65536;

// Enum: ContentIndexError
blink.mojom.ContentIndexError = {
  NONE: 0,
  INVALID_PARAMETER: 1,
  STORAGE_ERROR: 2,
  NO_SERVICE_WORKER: 3,
};
blink.mojom.ContentIndexErrorSpec = { $: mojo.internal.Enum() };

// Enum: ContentCategory
blink.mojom.ContentCategory = {
  NONE: 0,
  HOME_PAGE: 1,
  ARTICLE: 2,
  VIDEO: 3,
  AUDIO: 4,
};
blink.mojom.ContentCategorySpec = { $: mojo.internal.Enum() };

// Struct: ContentIconDefinition
blink.mojom.ContentIconDefinitionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIconDefinition',
      packedSize: 32,
      fields: [
        { name: 'src', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'sizes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ContentDescription
blink.mojom.ContentDescriptionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentDescription',
      packedSize: 56,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'category', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.ContentCategorySpec, nullable: false, minVersion: 0 },
        { name: 'icons', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ContentIconDefinitionSpec, false), nullable: false, minVersion: 0 },
        { name: 'launch_url', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: ContentIndexService
blink.mojom.ContentIndexService = {};

blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService_GetIconSizes_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ContentCategorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.ContentIndexService_Add_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService_Add_Params',
      packedSize: 40,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ContentDescriptionSpec, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.BitmapN32Spec, false), nullable: false, minVersion: 0 },
        { name: 'launchUrl', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.ContentIndexService_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService_Delete_Params',
      packedSize: 24,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService_GetDescriptions_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
};

blink.mojom.ContentIndexServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIconSizes(category) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec,
      blink.mojom.ContentIndexService_GetIconSizes_ResponseParamsSpec,
      [category]);
  }

  add(service_worker_registration_id, description, icon, launchUrl) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.ContentIndexService_Add_ParamsSpec,
      blink.mojom.ContentIndexService_Add_ResponseParamsSpec,
      [service_worker_registration_id, description, icon, launchUrl]);
  }

  delete(service_worker_registration_id, id) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      blink.mojom.ContentIndexService_Delete_ParamsSpec,
      blink.mojom.ContentIndexService_Delete_ResponseParamsSpec,
      [service_worker_registration_id, id]);
  }

  getDescriptions(service_worker_registration_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec,
      blink.mojom.ContentIndexService_GetDescriptions_ResponseParamsSpec,
      [service_worker_registration_id]);
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

// ParamsSpec for GetIconSizes
blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.GetIconSizes_Params',
      packedSize: 16,
      fields: [
        { name: 'category', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ContentCategorySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.ContentIndexService_GetIconSizes_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.GetIconSizes_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'icon_sizes', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Add
blink.mojom.ContentIndexService_Add_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.Add_Params',
      packedSize: 40,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'description', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ContentDescriptionSpec, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(skia.mojom.BitmapN32Spec, false), nullable: false, minVersion: 0 },
        { name: 'launchUrl', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

blink.mojom.ContentIndexService_Add_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.Add_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ContentIndexErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for Delete
blink.mojom.ContentIndexService_Delete_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.Delete_Params',
      packedSize: 24,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

blink.mojom.ContentIndexService_Delete_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.Delete_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.ContentIndexErrorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetDescriptions
blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.GetDescriptions_Params',
      packedSize: 16,
      fields: [
        { name: 'service_worker_registration_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.ContentIndexService_GetDescriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentIndexService.GetDescriptions_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.ContentIndexErrorSpec, nullable: false, minVersion: 0 },
        { name: 'descriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ContentDescriptionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
blink.mojom.ContentIndexServicePtr = blink.mojom.ContentIndexServiceRemote;
blink.mojom.ContentIndexServiceRequest = blink.mojom.ContentIndexServicePendingReceiver;

