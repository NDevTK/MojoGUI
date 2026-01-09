// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/projector_app/public/mojom/projector_types.mojom
// Module: ash.projector.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.projector = ash.projector || {};
ash.projector.mojom = ash.projector.mojom || {};


// Enum: NewScreencastPreconditionState
ash.projector.mojom.NewScreencastPreconditionState = {
  kDisabled: 0,
  kEnabled: 1,
  kHidden: 2,
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
