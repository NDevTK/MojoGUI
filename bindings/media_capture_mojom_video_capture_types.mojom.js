// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture_types.mojom
// Module: media.mojom

'use strict';

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: VideoCapturePixelFormat
media.mojom.mojom.VideoCapturePixelFormat = {
  UNKNOWN: 0,
  I420: 1,
  YV12: 2,
  I422: 3,
  I420A: 4,
  I444: 5,
  NV12: 6,
  NV21: 7,
  UYVY: 8,
  YUY2: 9,
  ARGB: 10,
  XRGB: 11,
  RGB24: 12,
  MJPEG: 13,
  YUV420P9_DEPRECATED: 14,
  YUV420P10: 15,
  YUV422P9_DEPRECATED: 16,
  YUV422P10: 17,
  YUV444P9_DEPRECATED: 18,
  YUV444P10: 19,
  YUV420P12: 20,
  YUV422P12: 21,
  YUV444P12: 22,
  Y16: 23,
  ABGR: 24,
  XBGR: 25,
  P010LE: 26,
  XR30: 27,
  XB30: 28,
  BGRA: 29,
  RGBAF16: 30,
  I422A: 31,
  I444A: 32,
  YUV420AP10: 33,
  YUV422AP10: 34,
  YUV444AP10: 35,
  NV12A: 36,
  NV16: 37,
  NV24: 38,
  P210LE: 39,
  P410LE: 40,
};
media.mojom.mojom.VideoCapturePixelFormatSpec = { $: mojo.internal.Enum() };

// Enum: ResolutionChangePolicy
media.mojom.mojom.ResolutionChangePolicy = {
  FIXED_RESOLUTION: 0,
  FIXED_ASPECT_RATIO: 1,
  ANY_WITHIN_LIMIT: 2,
};
media.mojom.mojom.ResolutionChangePolicySpec = { $: mojo.internal.Enum() };

// Enum: PowerLineFrequency
media.mojom.mojom.PowerLineFrequency = {
  DEFAULT: 0,
  HZ_50: 1,
  HZ_60: 2,
};
media.mojom.mojom.PowerLineFrequencySpec = { $: mojo.internal.Enum() };

// Enum: VideoFacingMode
media.mojom.mojom.VideoFacingMode = {
  NONE: 0,
  USER: 1,
  ENVIRONMENT: 2,
};
media.mojom.mojom.VideoFacingModeSpec = { $: mojo.internal.Enum() };

// Enum: CameraAvailability
media.mojom.mojom.CameraAvailability = {
  kAvailable: 0,
  kUnavailableExclusivelyUsedByOtherApplication: 1,
};
media.mojom.mojom.CameraAvailabilitySpec = { $: mojo.internal.Enum() };

// Enum: VideoCaptureApi
media.mojom.mojom.VideoCaptureApi = {
  LINUX_V4L2_SINGLE_PLANE: 0,
  WIN_MEDIA_FOUNDATION: 1,
  WIN_MEDIA_FOUNDATION_SENSOR: 2,
  WIN_DIRECT_SHOW: 3,
  MACOSX_AVFOUNDATION: 4,
  MACOSX_DECKLINK: 5,
  ANDROID_API1: 6,
  ANDROID_API2_LEGACY: 7,
  ANDROID_API2_FULL: 8,
  ANDROID_API2_LIMITED: 9,
  FUCHSIA_CAMERA3: 10,
  VIRTUAL_DEVICE: 11,
  UNKNOWN: 12,
  WEBRTC_LINUX_PIPEWIRE_SINGLE_PLANE: 13,
};
media.mojom.mojom.VideoCaptureApiSpec = { $: mojo.internal.Enum() };

// Enum: VideoCaptureTransportType
media.mojom.mojom.VideoCaptureTransportType = {
  APPLE_USB_OR_BUILT_IN: 0,
  OTHER_TRANSPORT: 1,
};
media.mojom.mojom.VideoCaptureTransportTypeSpec = { $: mojo.internal.Enum() };

// Enum: VideoCaptureBufferType
media.mojom.mojom.VideoCaptureBufferType = {
  kSharedMemory: 0,
  kSharedMemoryViaRawFileDescriptor_DEPRECATED: 1,
  kMailboxHolder: 2,
  kGpuMemoryBuffer: 3,
  kSharedImage: 4,
};
media.mojom.mojom.VideoCaptureBufferTypeSpec = { $: mojo.internal.Enum() };

// Enum: VideoCaptureError
media.mojom.mojom.VideoCaptureError = {
  kNone: 0,
  kVideoCaptureControllerInvalidOrUnsupportedVideoCaptureParametersRequested: 1,
  kVideoCaptureControllerIsAlreadyInErrorState: 2,
  kVideoCaptureManagerDeviceConnectionLost: 3,
  kFrameSinkVideoCaptureDeviceAlreadyEndedOnFatalError: 4,
  kFrameSinkVideoCaptureDeviceEncounteredFatalError: 5,
  kV4L2FailedToOpenV4L2DeviceDriverFile: 6,
  kV4L2ThisIsNotAV4L2VideoCaptureDevice: 7,
  kV4L2FailedToFindASupportedCameraFormat: 8,
  kV4L2FailedToSetVideoCaptureFormat: 9,
  kV4L2UnsupportedPixelFormat: 10,
  kV4L2FailedToSetCameraFramerate: 11,
  kV4L2ErrorRequestingMmapBuffers: 12,
  kV4L2AllocateBufferFailed: 13,
  kV4L2VidiocStreamonFailed: 14,
  kV4L2VidiocStreamoffFailed: 15,
  kV4L2FailedToVidiocReqbufsWithCount0: 16,
  kV4L2PollFailed: 17,
  kV4L2MultipleContinuousTimeoutsWhileReadPolling: 18,
  kV4L2FailedToDequeueCaptureBuffer: 19,
  kV4L2FailedToEnqueueCaptureBuffer: 20,
  kSingleClientVideoCaptureHostLostConnectionToDevice: 21,
  kSingleClientVideoCaptureDeviceLaunchAborted: 22,
  kDesktopCaptureDeviceWebrtcDesktopCapturerHasFailed: 23,
  kFileVideoCaptureDeviceCouldNotOpenVideoFile: 24,
  kDeviceCaptureLinuxFailedToCreateVideoCaptureDelegate: 25,
  kErrorFakeDeviceIntentionallyEmittingErrorEvent: 26,
  kDeviceClientTooManyFramesDroppedY16: 27,
  kDeviceMediaToMojoAdapterEncounteredUnsupportedBufferType: 28,
  kVideoCaptureManagerProcessDeviceStartQueueDeviceInfoNotFound: 29,
  kInProcessDeviceLauncherFailedToCreateDeviceInstance: 30,
  kServiceDeviceLauncherLostConnectionToDeviceFactoryDuringDeviceStart: 31,
  kServiceDeviceLauncherServiceRespondedWithDeviceNotFound: 32,
  kServiceDeviceLauncherConnectionLostWhileWaitingForCallback: 33,
  kIntentionalErrorRaisedByUnitTest: 34,
  kCrosHalV3FailedToStartDeviceThread: 35,
  kCrosHalV3DeviceDelegateMojoConnectionError: 36,
  kCrosHalV3DeviceDelegateFailedToGetCameraInfo: 37,
  kCrosHalV3DeviceDelegateMissingSensorOrientationInfo: 38,
  kCrosHalV3DeviceDelegateFailedToOpenCameraDevice: 39,
  kCrosHalV3DeviceDelegateFailedToInitializeCameraDevice: 40,
  kCrosHalV3DeviceDelegateFailedToConfigureStreams: 41,
  kCrosHalV3DeviceDelegateWrongNumberOfStreamsConfigured: 42,
  kCrosHalV3DeviceDelegateFailedToGetDefaultRequestSettings: 43,
  kCrosHalV3BufferManagerHalRequestedTooManyBuffers: 44,
  kCrosHalV3BufferManagerFailedToCreateMappableSI: 45,
  kCrosHalV3BufferManagerFailedToMapGpuMemoryBuffer: 46,
  kCrosHalV3BufferManagerUnsupportedVideoPixelFormat: 47,
  kCrosHalV3BufferManagerFailedToDupFd: 48,
  kCrosHalV3BufferManagerFailedToWrapGpuMemoryHandle: 49,
  kCrosHalV3BufferManagerFailedToRegisterBuffer: 50,
  kCrosHalV3BufferManagerProcessCaptureRequestFailed: 51,
  kCrosHalV3BufferManagerInvalidPendingResultId: 52,
  kCrosHalV3BufferManagerReceivedDuplicatedPartialMetadata: 53,
  kCrosHalV3BufferManagerIncorrectNumberOfOutputBuffersReceived: 54,
  kCrosHalV3BufferManagerInvalidTypeOfOutputBuffersReceived: 55,
  kCrosHalV3BufferManagerReceivedMultipleResultBuffersForFrame: 56,
  kCrosHalV3BufferManagerUnknownStreamInCamera3NotifyMsg: 57,
  kCrosHalV3BufferManagerReceivedInvalidShutterTime: 58,
  kCrosHalV3BufferManagerFatalDeviceError: 59,
  kCrosHalV3BufferManagerReceivedFrameIsOutOfOrder: 60,
  kCrosHalV3BufferManagerFailedToUnwrapReleaseFenceFd: 61,
  kCrosHalV3BufferManagerSyncWaitOnReleaseFenceTimedOut: 62,
  kCrosHalV3BufferManagerInvalidJpegBlob: 63,
  kAndroidFailedToAllocate: 64,
  kAndroidFailedToStartCapture: 65,
  kAndroidFailedToStopCapture: 66,
  kAndroidApi1CameraErrorCallbackReceived: 67,
  kAndroidApi2CameraDeviceErrorReceived: 68,
  kAndroidApi2CaptureSessionConfigureFailed: 69,
  kAndroidApi2ImageReaderUnexpectedImageFormat: 70,
  kAndroidApi2ImageReaderSizeDidNotMatchImageSize: 71,
  kAndroidApi2ErrorRestartingPreview: 72,
  kAndroidScreenCaptureUnsupportedFormat: 73,
  kAndroidScreenCaptureFailedToStartCaptureMachine: 74,
  kAndroidScreenCaptureTheUserDeniedScreenCapture: 75,
  kAndroidScreenCaptureFailedToStartScreenCapture: 76,
  kWinDirectShowCantGetCaptureFormatSettings: 77,
  kWinDirectShowFailedToGetNumberOfCapabilities: 78,
  kWinDirectShowFailedToGetCaptureDeviceCapabilities: 79,
  kWinDirectShowFailedToSetCaptureDeviceOutputFormat: 80,
  kWinDirectShowFailedToConnectTheCaptureGraph: 81,
  kWinDirectShowFailedToPauseTheCaptureDevice: 82,
  kWinDirectShowFailedToStartTheCaptureDevice: 83,
  kWinDirectShowFailedToStopTheCaptureGraph: 84,
  kWinMediaFoundationEngineIsNull: 85,
  kWinMediaFoundationEngineGetSourceFailed: 86,
  kWinMediaFoundationFillPhotoCapabilitiesFailed: 87,
  kWinMediaFoundationFillVideoCapabilitiesFailed: 88,
  kWinMediaFoundationNoVideoCapabilityFound: 89,
  kWinMediaFoundationGetAvailableDeviceMediaTypeFailed: 90,
  kWinMediaFoundationSetCurrentDeviceMediaTypeFailed: 91,
  kWinMediaFoundationEngineGetSinkFailed: 92,
  kWinMediaFoundationSinkQueryCapturePreviewInterfaceFailed: 93,
  kWinMediaFoundationSinkRemoveAllStreamsFailed: 94,
  kWinMediaFoundationCreateSinkVideoMediaTypeFailed: 95,
  kWinMediaFoundationConvertToVideoSinkMediaTypeFailed: 96,
  kWinMediaFoundationSinkAddStreamFailed: 97,
  kWinMediaFoundationSinkSetSampleCallbackFailed: 98,
  kWinMediaFoundationEngineStartPreviewFailed: 99,
  kWinMediaFoundationGetMediaEventStatusFailed: 100,
  kMacSetCaptureDeviceFailed: 101,
  kMacCouldNotStartCaptureDevice: 102,
  kMacReceivedFrameWithUnexpectedResolution: 103,
  kMacUpdateCaptureResolutionFailed: 104,
  kMacDeckLinkDeviceIdNotFoundInTheSystem: 105,
  kMacDeckLinkErrorQueryingInputInterface: 106,
  kMacDeckLinkErrorCreatingDisplayModeIterator: 107,
  kMacDeckLinkCouldNotFindADisplayMode: 108,
  kMacDeckLinkCouldNotSelectTheVideoFormatWeLike: 109,
  kMacDeckLinkCouldNotStartCapturing: 110,
  kMacDeckLinkUnsupportedPixelFormat: 111,
  kMacAvFoundationReceivedAVCaptureSessionRuntimeErrorNotification: 112,
  kAndroidApi2ErrorConfiguringCamera: 113,
  kCrosHalV3DeviceDelegateFailedToFlush: 114,
  kFuchsiaCameraDeviceDisconnected: 115,
  kFuchsiaCameraStreamDisconnected: 116,
  kFuchsiaSysmemDidNotSetImageFormat: 117,
  kFuchsiaSysmemInvalidBufferIndex: 118,
  kFuchsiaSysmemInvalidBufferSize: 119,
  kFuchsiaUnsupportedPixelFormat: 120,
  kFuchsiaFailedToMapSysmemBuffer: 121,
  kCrosHalV3DeviceContextDuplicatedClient: 122,
  kDesktopCaptureDeviceMacFailedStreamCreate: 123,
  kDesktopCaptureDeviceMacFailedStreamStart: 124,
  kCrosHalV3BufferManagerFailedToReserveBuffers: 125,
  kWinMediaFoundationSystemPermissionDenied: 126,
  kVideoCaptureImplTimedOutOnStart: 127,
  kLacrosVideoCaptureDeviceProxyAlreadyEndedOnFatalError: 128,
  kLacrosVideoCaptureDeviceProxyEncounteredFatalError: 129,
  kScreenCaptureKitFailedGetShareableContent: 130,
  kScreenCaptureKitFailedAddStreamOutput: 131,
  kScreenCaptureKitFailedStartCapture: 132,
  kScreenCaptureKitFailedStopCapture: 133,
  kScreenCaptureKitStreamError: 134,
  kScreenCaptureKitFailedToFindSCDisplay: 135,
  kVideoCaptureControllerInvalid: 136,
  kVideoCaptureDeviceFactoryChromeOSCreateDeviceFailed: 137,
  kVideoCaptureControllerUnsupportedPixelFormat: 138,
  kVideoCaptureDeviceAlreadyReleased: 139,
  kVideoCaptureSystemDeviceIdNotFound: 140,
  kVideoCaptureDeviceFactoryWinUnknownError: 141,
  kWinMediaFoundationDeviceInitializationFailed: 142,
  kWinMediaFoundationSourceCreationFailed: 143,
  kWinDirectShowDeviceFilterCreationFailed: 144,
  kWinDirectShowDeviceInitializationFailed: 145,
  kVideoCaptureDeviceFactorySecondCreateDenied: 146,
  kScreenCaptureKitResetStreamError: 147,
  kWinMediaFoundationCameraBusy: 148,
  kWebRtcStartCaptureFailed: 149,
};
media.mojom.mojom.VideoCaptureErrorSpec = { $: mojo.internal.Enum() };

// Enum: VideoCaptureFrameDropReason
media.mojom.mojom.VideoCaptureFrameDropReason = {
  kNone: 0,
  kDeviceClientFrameHasInvalidFormat: 1,
  kDeviceClientLibyuvConvertToI420Failed: 2,
  kV4L2BufferErrorFlagWasSet: 3,
  kV4L2InvalidNumberOfBytesInBuffer: 4,
  kAndroidThrottling: 5,
  kAndroidGetByteArrayElementsFailed: 6,
  kAndroidApi1UnexpectedDataLength: 7,
  kAndroidApi2AcquiredImageIsNull: 8,
  kWinDirectShowUnexpectedSampleLength: 9,
  kWinDirectShowFailedToGetMemoryPointerFromMediaSample: 10,
  kWinMediaFoundationReceivedSampleIsNull: 11,
  kWinMediaFoundationLockingBufferDelieveredNullptr: 12,
  kWinMediaFoundationGetBufferByIndexReturnedNull: 13,
  kBufferPoolMaxBufferCountExceeded: 14,
  kBufferPoolBufferAllocationFailed: 15,
  kVideoCaptureImplNotInStartedState: 16,
  kVideoCaptureImplFailedToWrapDataAsMediaVideoFrame: 17,
  kVideoTrackAdapterHasNoResolutionAdapters: 18,
  kResolutionAdapterFrameIsNotValid: 19,
  kResolutionAdapterWrappingFrameForCroppingFailed: 20,
  kResolutionAdapterTimestampTooCloseToPrevious_DEPRECATED: 21,
  kResolutionAdapterFrameRateIsHigherThanRequested: 22,
  kResolutionAdapterHasNoCallbacks: 23,
  kVideoTrackFrameDelivererNotEnabledReplacingWithBlackFrame: 24,
  kRendererSinkFrameDelivererIsNotStarted: 25,
  kCropVersionNotCurrent_DEPRECATED: 26,
  kGpuMemoryBufferMapFailed: 27,
  kSubCaptureTargetVersionNotCurrent_DEPRECATED: 28,
  kPostProcessingFailed: 29,
  kResolutionAdapterFrameIsNotMappable: 30,
  kResolutionAdapterCannotCreateConvertFrame: 31,
  kResolutionAdapterConvertAndScaleFailed: 32,
  kOldCaptureVersion: 33,
};
media.mojom.mojom.VideoCaptureFrameDropReasonSpec = { $: mojo.internal.Enum() };

// Enum: SubCaptureTargetType
media.mojom.mojom.SubCaptureTargetType = {
  kCropTarget: 0,
  kRestrictionTarget: 1,
};
media.mojom.mojom.SubCaptureTargetTypeSpec = { $: mojo.internal.Enum() };

// Enum: ApplySubCaptureTargetResult
media.mojom.mojom.ApplySubCaptureTargetResult = {
  kSuccess: 0,
  kErrorGeneric: 1,
  kUnsupportedCaptureDevice: 2,
  kNotImplemented: 3,
  kNonIncreasingVersion: 4,
  kInvalidTarget: 5,
};
media.mojom.mojom.ApplySubCaptureTargetResultSpec = { $: mojo.internal.Enum() };

// Enum: DeviceEnumerationResult
media.mojom.mojom.DeviceEnumerationResult = {
  kSuccess: 0,
  kUnknownError: 1,
  kErrorCaptureServiceCrash: 2,
  kErrorCaptureServiceDroppedRequest: 3,
};
media.mojom.mojom.DeviceEnumerationResultSpec = { $: mojo.internal.Enum() };

// Struct: VideoCaptureControlSupport
media.mojom.mojom.VideoCaptureControlSupportSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureControlSupport',
      packedSize: 16,
      fields: [
        { name: 'pan', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tilt', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'zoom', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoCaptureFormat
media.mojom.mojom.VideoCaptureFormatSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureFormat',
      packedSize: 24,
      fields: [
        { name: 'frame_size', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.SizeSpec, nullable: false, minVersion: 0 },
        { name: 'frame_rate', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'pixel_format', packedOffset: 12, packedBitOffset: 0, type: media.mojom.VideoCapturePixelFormatSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoCaptureParams
media.mojom.mojom.VideoCaptureParamsSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureParams',
      packedSize: 40,
      fields: [
        { name: 'requested_format', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureFormatSpec, nullable: false, minVersion: 0 },
        { name: 'buffer_type', packedOffset: 8, packedBitOffset: 0, type: media.mojom.VideoCaptureBufferTypeSpec, nullable: false, minVersion: 0 },
        { name: 'resolution_change_policy', packedOffset: 12, packedBitOffset: 0, type: media.mojom.ResolutionChangePolicySpec, nullable: false, minVersion: 0 },
        { name: 'power_line_frequency', packedOffset: 16, packedBitOffset: 0, type: media.mojom.PowerLineFrequencySpec, nullable: false, minVersion: 0 },
        { name: 'enable_face_detection', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_high_dpi_enabled', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'capture_version_source', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: VideoCaptureFeedback
media.mojom.mojom.VideoCaptureFeedbackSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureFeedback',
      packedSize: 40,
      fields: [
        { name: 'resource_utilization', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'max_framerate_fps', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'max_pixels', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'require_mapped_frame', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'DEPRECATED_mapped_sizes', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(gfx.mojom.SizeSpec, false), nullable: true, minVersion: 0 },
        { name: 'frame_id', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'has_frame_id', packedOffset: 28, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: PlaneStrides
media.mojom.mojom.PlaneStridesSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.PlaneStrides',
      packedSize: 16,
      fields: [
        { name: 'stride_by_plane', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Pointer, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VideoCaptureDeviceDescriptor
media.mojom.mojom.VideoCaptureDeviceDescriptorSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureDeviceDescriptor',
      packedSize: 56,
      fields: [
        { name: 'display_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'model_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'facing_mode', packedOffset: 32, packedBitOffset: 0, type: media.mojom.VideoFacingModeSpec, nullable: false, minVersion: 0 },
        { name: 'capture_api', packedOffset: 36, packedBitOffset: 0, type: media.mojom.VideoCaptureApiSpec, nullable: false, minVersion: 0 },
        { name: 'control_support', packedOffset: 24, packedBitOffset: 0, type: media.mojom.VideoCaptureControlSupportSpec, nullable: false, minVersion: 0 },
        { name: 'transport_type', packedOffset: 40, packedBitOffset: 0, type: media.mojom.VideoCaptureTransportTypeSpec, nullable: false, minVersion: 0 },
        { name: 'availability', packedOffset: 44, packedBitOffset: 0, type: media.mojom.CameraAvailabilitySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: VideoCaptureDeviceInfo
media.mojom.mojom.VideoCaptureDeviceInfoSpec = {
  $: {
    structSpec: {
      name: 'media.mojom.VideoCaptureDeviceInfo',
      packedSize: 24,
      fields: [
        { name: 'descriptor', packedOffset: 0, packedBitOffset: 0, type: media.mojom.VideoCaptureDeviceDescriptorSpec, nullable: false, minVersion: 0 },
        { name: 'supported_formats', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(media.mojom.VideoCaptureFormatSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
