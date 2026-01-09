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

// Struct: NewScreencastPrecondition
ash.projector.mojom.NewScreencastPreconditionSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.NewScreencastPrecondition',
      packedSize: 24,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.projector.mojom.NewScreencastPreconditionStateSpec, nullable: false },
        { name: 'reasons', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PendingScreencast
ash.projector.mojom.PendingScreencastSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.PendingScreencast',
      packedSize: 40,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'created_time', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'upload_progress', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'upload_failed', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: XhrResponse
ash.projector.mojom.XhrResponseSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.XhrResponse',
      packedSize: 32,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'response_code', packedOffset: 8, packedBitOffset: 0, type: ash.projector.mojom.XhrResponseCodeSpec, nullable: false },
        { name: 'net_error_code', packedOffset: 16, packedBitOffset: 0, type: ash.projector.mojom.JsNetErrorCodeSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Account
ash.projector.mojom.AccountSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.Account',
      packedSize: 24,
      fields: [
        { name: 'email', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_primary_user', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: VideoInfo
ash.projector.mojom.VideoInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.projector.mojom.VideoInfo',
      packedSize: 24,
      fields: [
        { name: 'duration_millis', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'file_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
