// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/sea_pen.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};


// Enum: MantaStatusCode
ash.personalization_app.mojom.MantaStatusCode = {
  kOk: 0,
  kGenericError: 1,
  kInvalidInput: 2,
  kResourceExhausted: 3,
  kBackendFailure: 4,
  kMalformedResponse: 5,
  kNoInternetConnection: 6,
  kUnsupportedLanguage: 7,
  kBlockedOutputs: 8,
  kRestrictedCountry: 9,
  kNoIdentityManager: 10,
  kPerUserQuotaExceeded: 11,
  kImageHasPerson: 12,
  kMax: 13,
};

// Struct: SeaPenThumbnail
ash.personalization_app.mojom.SeaPenThumbnailSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenThumbnail',
      packedSize: 24,
      fields: [
        { name: 'image', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SeaPenUserVisibleQuery
ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenUserVisibleQuery',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'template_title', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SeaPenTemplateQuery
ash.personalization_app.mojom.SeaPenTemplateQuerySpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenTemplateQuery',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.SeaPenTemplateIdSpec, nullable: false },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'user_visible_query', packedOffset: 24, packedBitOffset: 0, type: ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SeaPenFeedbackMetadata
ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenFeedbackMetadata',
      packedSize: 32,
      fields: [
        { name: 'is_positive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'log_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'generation_seed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RecentSeaPenImageInfo
ash.personalization_app.mojom.RecentSeaPenImageInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.RecentSeaPenImageInfo',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.SeaPenQuerySpec, nullable: false },
        { name: 'creation_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RecentSeaPenThumbnailData
ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.RecentSeaPenThumbnailData',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'image_info', packedOffset: 16, packedBitOffset: 0, type: ash.personalization_app.mojom.RecentSeaPenImageInfoSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TextQueryHistoryEntry
ash.personalization_app.mojom.TextQueryHistoryEntrySpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.TextQueryHistoryEntry',
      packedSize: 24,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'thumbnails', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: SeaPenObserver
ash.personalization_app.mojom.SeaPenObserver = {};

ash.personalization_app.mojom.SeaPenObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SeaPenObserverRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SeaPenObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SeaPenObserverPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SeaPenObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SeaPenObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSelectedSeaPenImageChanged(id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec,
      null,
      [id]);
  }

  onTextQueryHistoryChanged(entries) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec,
      null,
      [entries]);
  }

};

ash.personalization_app.mojom.SeaPenObserver.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SeaPenObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SeaPenObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnSelectedSeaPenImageChanged
ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenObserver.OnSelectedSeaPenImageChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnTextQueryHistoryChanged
ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenObserver.OnTextQueryHistoryChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.mojom.SeaPenObserverPtr = ash.personalization_app.mojom.SeaPenObserverRemote;
ash.personalization_app.mojom.SeaPenObserverRequest = ash.personalization_app.mojom.SeaPenObserverPendingReceiver;


// Interface: SeaPenProvider
ash.personalization_app.mojom.SeaPenProvider = {};

ash.personalization_app.mojom.SeaPenProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.personalization_app.mojom.SeaPenProviderRemote = class {
  static get $interfaceName() {
    return 'ash.personalization_app.mojom.SeaPenProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.personalization_app.mojom.SeaPenProviderPendingReceiver,
      handle);
    this.$ = new ash.personalization_app.mojom.SeaPenProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.personalization_app.mojom.SeaPenProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setSeaPenObserver(observer) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec,
      null,
      [observer]);
  }

  getSeaPenThumbnails(query) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec,
      [query]);
  }

  selectSeaPenThumbnail(id, preview_mode) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec,
      [id, preview_mode]);
  }

  getRecentSeaPenImageIds() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec,
      []);
  }

  selectRecentSeaPenImage(id, preview_mode) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec,
      [id, preview_mode]);
  }

  getRecentSeaPenImageThumbnail(id) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec,
      [id]);
  }

  deleteRecentSeaPenImage(id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec,
      [id]);
  }

  openFeedbackDialog(metadata) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec,
      null,
      [metadata]);
  }

  shouldShowSeaPenIntroductionDialog() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec,
      []);
  }

  handleSeaPenIntroductionDialogClosed() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec,
      null,
      []);
  }

  shouldShowSeaPenFreeformIntroductionDialog() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec,
      []);
  }

  handleSeaPenFreeformIntroductionDialogClosed() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec,
      null,
      []);
  }

  isInTabletMode() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec,
      ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec,
      []);
  }

  makeTransparent() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec,
      null,
      []);
  }

};

ash.personalization_app.mojom.SeaPenProvider.getRemote = function() {
  let remote = new ash.personalization_app.mojom.SeaPenProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.personalization_app.mojom.SeaPenProvider',
    'context');
  return remote.$;
};

// ParamsSpec for SetSeaPenObserver
ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.SetSeaPenObserver_Params',
      packedSize: 16,
      fields: [
        { name: 'observer', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSeaPenThumbnails
ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.GetSeaPenThumbnails_Params',
      packedSize: 16,
      fields: [
        { name: 'query', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.SeaPenQuerySpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.GetSeaPenThumbnails_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'thumbnails', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'statusCode', packedOffset: 16, packedBitOffset: 0, type: ash.personalization_app.mojom.MantaStatusCodeSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectSeaPenThumbnail
ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.SelectSeaPenThumbnail_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'preview_mode', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.SelectSeaPenThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRecentSeaPenImageIds
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.GetRecentSeaPenImageIds_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.GetRecentSeaPenImageIds_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'ids', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SelectRecentSeaPenImage
ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.SelectRecentSeaPenImage_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'preview_mode', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.SelectRecentSeaPenImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetRecentSeaPenImageThumbnail
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.GetRecentSeaPenImageThumbnail_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.GetRecentSeaPenImageThumbnail_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'thumbnail_data', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteRecentSeaPenImage
ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.DeleteRecentSeaPenImage_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.DeleteRecentSeaPenImage_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFeedbackDialog
ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.OpenFeedbackDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'metadata', packedOffset: 8, packedBitOffset: 0, type: ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldShowSeaPenIntroductionDialog
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.ShouldShowSeaPenIntroductionDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.ShouldShowSeaPenIntroductionDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show_dialog', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleSeaPenIntroductionDialogClosed
ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.HandleSeaPenIntroductionDialogClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ShouldShowSeaPenFreeformIntroductionDialog
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.ShouldShowSeaPenFreeformIntroductionDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.ShouldShowSeaPenFreeformIntroductionDialog_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'should_show_freeform_dialog', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HandleSeaPenFreeformIntroductionDialogClosed
ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.HandleSeaPenFreeformIntroductionDialogClosed_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsInTabletMode
ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.IsInTabletMode_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.IsInTabletMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'tablet_mode', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for MakeTransparent
ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.personalization_app.mojom.SeaPenProvider.MakeTransparent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.personalization_app.mojom.SeaPenProviderPtr = ash.personalization_app.mojom.SeaPenProviderRemote;
ash.personalization_app.mojom.SeaPenProviderRequest = ash.personalization_app.mojom.SeaPenProviderPendingReceiver;

