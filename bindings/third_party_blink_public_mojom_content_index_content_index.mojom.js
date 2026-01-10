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
      mojo.internal.StructField('category', 40, 0, blink.mojom.ContentCategorySpec, null, false, 0, undefined),
      mojo.internal.StructField('icons', 24, 0, mojo.internal.Array(blink.mojom.ContentIconDefinitionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('launch_url', 32, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: ContentIndexService
mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetIconSizes_ParamsSpec, 'blink.mojom.ContentIndexService_GetIconSizes_Params', [
      mojo.internal.StructField('category', 0, 0, blink.mojom.ContentCategorySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetIconSizes_ResponseParamsSpec, 'blink.mojom.ContentIndexService_GetIconSizes_ResponseParams', [
      mojo.internal.StructField('icon_sizes', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_Add_ParamsSpec, 'blink.mojom.ContentIndexService_Add_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('description', 8, 0, blink.mojom.ContentDescriptionSpec, null, false, 0, undefined),
      mojo.internal.StructField('icon', 16, 0, mojo.internal.Array(skia.mojom.BitmapN32Spec, false), null, false, 0, undefined),
      mojo.internal.StructField('launchUrl', 24, 0, url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_Add_ResponseParamsSpec, 'blink.mojom.ContentIndexService_Add_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, blink.mojom.ContentIndexErrorSpec, null, false, 0, undefined),
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
      mojo.internal.StructField('error', 0, 0, blink.mojom.ContentIndexErrorSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetDescriptions_ParamsSpec, 'blink.mojom.ContentIndexService_GetDescriptions_Params', [
      mojo.internal.StructField('service_worker_registration_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.ContentIndexService_GetDescriptions_ResponseParamsSpec, 'blink.mojom.ContentIndexService_GetDescriptions_ResponseParams', [
      mojo.internal.StructField('error', 8, 0, blink.mojom.ContentIndexErrorSpec, null, false, 0, undefined),
      mojo.internal.StructField('descriptions', 0, 0, mojo.internal.Array(blink.mojom.ContentDescriptionSpec, false), null, false, 0, undefined),
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

blink.mojom.ContentIndexServicePtr = blink.mojom.ContentIndexServiceRemote;
blink.mojom.ContentIndexServiceRequest = blink.mojom.ContentIndexServicePendingReceiver;

