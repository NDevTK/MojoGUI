// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/common/mojom/sea_pen.mojom
// Module: ash.personalization_app.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.personalization_app = ash.personalization_app || {};
ash.personalization_app.mojom = ash.personalization_app.mojom || {};
var ash = ash || {};
var url = url || {};

ash.personalization_app.mojom.MantaStatusCodeSpec = { $: mojo.internal.Enum() };
ash.personalization_app.mojom.SeaPenQuerySpec = { $: {} };
ash.personalization_app.mojom.SeaPenThumbnailSpec = { $: {} };
ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec = { $: {} };
ash.personalization_app.mojom.SeaPenTemplateQuerySpec = { $: {} };
ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec = { $: {} };
ash.personalization_app.mojom.RecentSeaPenImageInfoSpec = { $: {} };
ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec = { $: {} };
ash.personalization_app.mojom.TextQueryHistoryEntrySpec = { $: {} };
ash.personalization_app.mojom.SeaPenObserver = {};
ash.personalization_app.mojom.SeaPenObserver.$interfaceName = 'ash.personalization_app.mojom.SeaPenObserver';
ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider = {};
ash.personalization_app.mojom.SeaPenProvider.$interfaceName = 'ash.personalization_app.mojom.SeaPenProvider';
ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec = { $: {} };
ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec = { $: {} };

ash.personalization_app.mojom.kMaximumGetSeaPenThumbnailsTextBytes = 3000;

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
  kMax: 12,
};

// Union: SeaPenQuery
mojo.internal.Union(
    ash.personalization_app.mojom.SeaPenQuerySpec, 'ash.personalization_app.mojom.SeaPenQuery', {
      'text_query': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'template_query': {
        'ordinal': 1,
        'type': ash.personalization_app.mojom.SeaPenTemplateQuerySpec,
        'nullable': false,
      },
    });

// Struct: SeaPenThumbnail
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenThumbnailSpec, 'ash.personalization_app.mojom.SeaPenThumbnail', [
      mojo.internal.StructField('image', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SeaPenUserVisibleQuery
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec, 'ash.personalization_app.mojom.SeaPenUserVisibleQuery', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('template_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SeaPenTemplateQuery
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenTemplateQuerySpec, 'ash.personalization_app.mojom.SeaPenTemplateQuery', [
      mojo.internal.StructField('id', 0, 0, ash.personalization_app.mojom.SeaPenTemplateIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('options', 8, 0, mojo.internal.Map(ash.personalization_app.mojom.SeaPenTemplateChipSpec, ash.personalization_app.mojom.SeaPenTemplateOptionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('user_visible_query', 16, 0, ash.personalization_app.mojom.SeaPenUserVisibleQuerySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SeaPenFeedbackMetadata
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec, 'ash.personalization_app.mojom.SeaPenFeedbackMetadata', [
      mojo.internal.StructField('is_positive', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('log_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('generation_seed', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RecentSeaPenImageInfo
mojo.internal.Struct(
    ash.personalization_app.mojom.RecentSeaPenImageInfoSpec, 'ash.personalization_app.mojom.RecentSeaPenImageInfo', [
      mojo.internal.StructField('query', 0, 0, ash.personalization_app.mojom.SeaPenQuerySpec, null, false, 0, undefined),
      mojo.internal.StructField('creation_time', 16, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: RecentSeaPenThumbnailData
mojo.internal.Struct(
    ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec, 'ash.personalization_app.mojom.RecentSeaPenThumbnailData', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('image_info', 8, 0, ash.personalization_app.mojom.RecentSeaPenImageInfoSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextQueryHistoryEntry
mojo.internal.Struct(
    ash.personalization_app.mojom.TextQueryHistoryEntrySpec, 'ash.personalization_app.mojom.TextQueryHistoryEntry', [
      mojo.internal.StructField('query', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('thumbnails', 8, 0, mojo.internal.Array(ash.personalization_app.mojom.SeaPenThumbnailSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SeaPenObserver
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_ParamsSpec, 'ash.personalization_app.mojom.SeaPenObserver_OnSelectedSeaPenImageChanged_Params', [
      mojo.internal.StructField('id_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'id_$value', originalFieldName: 'id' }),
      mojo.internal.StructField('id_$value', 4, 0, mojo.internal.Uint32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'id_$flag', originalFieldName: 'id' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_ParamsSpec, 'ash.personalization_app.mojom.SeaPenObserver_OnTextQueryHistoryChanged_Params', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.TextQueryHistoryEntrySpec, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

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

ash.personalization_app.mojom.SeaPenObserverPtr = ash.personalization_app.mojom.SeaPenObserverRemote;
ash.personalization_app.mojom.SeaPenObserverRequest = ash.personalization_app.mojom.SeaPenObserverPendingReceiver;


// Interface: SeaPenProvider
mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SetSeaPenObserver_Params', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceProxy(ash.personalization_app.mojom.SeaPenObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_Params', [
      mojo.internal.StructField('query', 0, 0, ash.personalization_app.mojom.SeaPenQuerySpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetSeaPenThumbnails_ResponseParams', [
      mojo.internal.StructField('thumbnails', 0, 0, mojo.internal.Array(ash.personalization_app.mojom.SeaPenThumbnailSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('statusCode', 8, 0, ash.personalization_app.mojom.MantaStatusCodeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('preview_mode', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectSeaPenThumbnail_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageIds_ResponseParams', [
      mojo.internal.StructField('ids', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('preview_mode', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_SelectRecentSeaPenImage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_GetRecentSeaPenImageThumbnail_ResponseParams', [
      mojo.internal.StructField('thumbnail_data', 0, 0, ash.personalization_app.mojom.RecentSeaPenThumbnailDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_DeleteRecentSeaPenImage_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_OpenFeedbackDialog_Params', [
      mojo.internal.StructField('metadata', 0, 0, ash.personalization_app.mojom.SeaPenFeedbackMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenIntroductionDialog_ResponseParams', [
      mojo.internal.StructField('should_show_dialog', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenIntroductionDialogClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_ShouldShowSeaPenFreeformIntroductionDialog_ResponseParams', [
      mojo.internal.StructField('should_show_freeform_dialog', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_HandleSeaPenFreeformIntroductionDialogClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_IsInTabletMode_ResponseParams', [
      mojo.internal.StructField('tablet_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_ParamsSpec, 'ash.personalization_app.mojom.SeaPenProvider_MakeTransparent_Params', [
    ],
    [[0, 8]]);

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

ash.personalization_app.mojom.SeaPenProviderPtr = ash.personalization_app.mojom.SeaPenProviderRemote;
ash.personalization_app.mojom.SeaPenProviderRequest = ash.personalization_app.mojom.SeaPenProviderPendingReceiver;

