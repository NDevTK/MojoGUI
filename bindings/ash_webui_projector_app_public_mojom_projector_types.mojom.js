// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/public/mojom/projector_types.mojom
// Module: ash.projector.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.projector = ash.projector || {};
ash.projector.mojom = ash.projector.mojom || {};

ash.projector.mojom.NewScreencastPreconditionStateSpec = { $: mojo.internal.Enum() };
ash.projector.mojom.NewScreencastPreconditionReasonSpec = { $: mojo.internal.Enum() };
ash.projector.mojom.PrefsThatProjectorCanAskForSpec = { $: mojo.internal.Enum() };
ash.projector.mojom.XhrResponseCodeSpec = { $: mojo.internal.Enum() };
ash.projector.mojom.JsNetErrorCodeSpec = { $: mojo.internal.Enum() };
ash.projector.mojom.RequestTypeSpec = { $: mojo.internal.Enum() };
ash.projector.mojom.GetVideoResultSpec = { $: {} };
ash.projector.mojom.NewScreencastPreconditionSpec = { $: {} };
ash.projector.mojom.PendingScreencastSpec = { $: {} };
ash.projector.mojom.XhrResponseSpec = { $: {} };
ash.projector.mojom.AccountSpec = { $: {} };
ash.projector.mojom.VideoInfoSpec = { $: {} };

// Enum: NewScreencastPreconditionState
ash.projector.mojom.NewScreencastPreconditionState = {
  kDisabled: 1,
  kEnabled: 2,
  kHidden: 3,
};

// Enum: NewScreencastPreconditionReason
ash.projector.mojom.NewScreencastPreconditionReason = {
  kSodaInstallationErrorUnspecifiedError: 0,
  kOnDeviceRecognitionNotSupported: 1,
  kUserLocaleNotSupported: 2,
  kInProjectorSession: 3,
  kScreenRecordingInProgress: 4,
  kSodaDownloadInProgress: 5,
  kOutOfDiskSpace: 6,
  kNoMic: 7,
  kDriveFSUnMounted: 8,
  kDriveFSMountFailed: 9,
  kOthers: 10,
  kSodaInstallationErrorNeedsReboot: 11,
  kAudioCaptureDisabledByPolicy: 12,
  kEnabledBySoda: 13,
  kEnabledByServerSideSpeechRecognition: 14,
};

// Enum: PrefsThatProjectorCanAskFor
ash.projector.mojom.PrefsThatProjectorCanAskFor = {
  kProjectorCreationFlowEnabled: 0,
  kProjectorExcludeTranscriptDialogShown: 1,
  kProjectorViewerOnboardingShowCount: 2,
  kProjectorGalleryOnboardingShowCount: 3,
};

// Enum: XhrResponseCode
ash.projector.mojom.XhrResponseCode = {
  kSuccess: 0,
  kTokenFetchFailure: 1,
  kXhrFetchFailure: 2,
  kUnsupportedURL: 3,
  kInvalidAccountEmail: 4,
};

// Enum: JsNetErrorCode
ash.projector.mojom.JsNetErrorCode = {
  kNoError: 0,
  kAccessDenied: 1,
  kFileNotFound: 2,
  kFFSilentError: 3,
  kCustomError: 4,
  kException: 5,
  kHttpError: 6,
  kAbort: 7,
  kTimeout: 8,
  kOffline: 9,
};

// Enum: RequestType
ash.projector.mojom.RequestType = {
  kPost: 0,
  kGet: 1,
  kPatch: 2,
  kDelete: 3,
};

// Union: GetVideoResult
mojo.internal.Union(
    ash.projector.mojom.GetVideoResultSpec, 'ash.projector.mojom.GetVideoResult', {
      'video': {
        'ordinal': 0,
        'type': ash.projector.mojom.VideoInfoSpec.$,
        'nullable': false,
      },
      'error_message': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: NewScreencastPrecondition
mojo.internal.Struct(
    ash.projector.mojom.NewScreencastPreconditionSpec, 'ash.projector.mojom.NewScreencastPrecondition', [
      mojo.internal.StructField('state', 0, 0, ash.projector.mojom.NewScreencastPreconditionStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reasons', 8, 0, mojo.internal.Array(ash.projector.mojom.NewScreencastPreconditionReasonSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PendingScreencast
mojo.internal.Struct(
    ash.projector.mojom.PendingScreencastSpec, 'ash.projector.mojom.PendingScreencast', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('upload_progress', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('created_time', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('upload_failed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: XhrResponse
mojo.internal.Struct(
    ash.projector.mojom.XhrResponseSpec, 'ash.projector.mojom.XhrResponse', [
      mojo.internal.StructField('response', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('response_code', 8, 0, ash.projector.mojom.XhrResponseCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('net_error_code', 16, 0, ash.projector.mojom.JsNetErrorCodeSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Account
mojo.internal.Struct(
    ash.projector.mojom.AccountSpec, 'ash.projector.mojom.Account', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_primary_user', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoInfo
mojo.internal.Struct(
    ash.projector.mojom.VideoInfoSpec, 'ash.projector.mojom.VideoInfo', [
      mojo.internal.StructField('duration_millis', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('file_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);
