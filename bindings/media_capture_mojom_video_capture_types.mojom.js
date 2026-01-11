// Auto-generated MojoJS binding
// Source: chromium_src/media/capture/mojom/video_capture_types.mojom
// Module: media.mojom

// Module namespace
var media = media || {};
media.mojom = media.mojom || {};
var gfx = gfx || {};

media.mojom.VideoCapturePixelFormatSpec = { $: mojo.internal.Enum() };
media.mojom.ResolutionChangePolicySpec = { $: mojo.internal.Enum() };
media.mojom.PowerLineFrequencySpec = { $: mojo.internal.Enum() };
media.mojom.VideoFacingModeSpec = { $: mojo.internal.Enum() };
media.mojom.CameraAvailabilitySpec = { $: mojo.internal.Enum() };
media.mojom.VideoCaptureApiSpec = { $: mojo.internal.Enum() };
media.mojom.VideoCaptureTransportTypeSpec = { $: mojo.internal.Enum() };
media.mojom.VideoCaptureBufferTypeSpec = { $: mojo.internal.Enum() };
media.mojom.VideoCaptureErrorSpec = { $: mojo.internal.Enum() };
media.mojom.VideoCaptureFrameDropReasonSpec = { $: mojo.internal.Enum() };
media.mojom.SubCaptureTargetTypeSpec = { $: mojo.internal.Enum() };
media.mojom.ApplySubCaptureTargetResultSpec = { $: mojo.internal.Enum() };
media.mojom.DeviceEnumerationResultSpec = { $: mojo.internal.Enum() };
media.mojom.VideoCaptureControlSupportSpec = { $: {} };
media.mojom.VideoCaptureFormatSpec = { $: {} };
media.mojom.VideoCaptureParamsSpec = { $: {} };
media.mojom.VideoCaptureFeedbackSpec = { $: {} };
media.mojom.PlaneStridesSpec = { $: {} };
media.mojom.VideoCaptureDeviceDescriptorSpec = { $: {} };
media.mojom.VideoCaptureDeviceInfoSpec = { $: {} };

// Enum: VideoCapturePixelFormat
media.mojom.VideoCapturePixelFormat = {
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

// Enum: ResolutionChangePolicy
media.mojom.ResolutionChangePolicy = {
  FIXED_RESOLUTION: 0,
  FIXED_ASPECT_RATIO: 1,
  ANY_WITHIN_LIMIT: 2,
};

// Enum: PowerLineFrequency
media.mojom.PowerLineFrequency = {
  DEFAULT: 0,
  HZ_50: 1,
  HZ_60: 2,
};

// Enum: VideoFacingMode
media.mojom.VideoFacingMode = {
  NONE: 0,
  USER: 1,
  ENVIRONMENT: 2,
};

// Enum: CameraAvailability
media.mojom.CameraAvailability = {
  kAvailable: 0,
  kUnavailableExclusivelyUsedByOtherApplication: 1,
};

// Enum: VideoCaptureApi
media.mojom.VideoCaptureApi = {
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

// Enum: VideoCaptureTransportType
media.mojom.VideoCaptureTransportType = {
  APPLE_USB_OR_BUILT_IN: 0,
  OTHER_TRANSPORT: 1,
};

// Enum: VideoCaptureBufferType
media.mojom.VideoCaptureBufferType = {
  kSharedMemory: 0,
  kSharedMemoryViaRawFileDescriptor_DEPRECATED: 1,
  kMailboxHolder: 2,
  kGpuMemoryBuffer: 3,
  kSharedImage: 4,
};

// Enum: VideoCaptureError
media.mojom.VideoCaptureError = {
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

// Enum: VideoCaptureFrameDropReason
media.mojom.VideoCaptureFrameDropReason = {
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

// Enum: SubCaptureTargetType
media.mojom.SubCaptureTargetType = {
  kCropTarget: 0,
  kRestrictionTarget: 1,
};

// Enum: ApplySubCaptureTargetResult
media.mojom.ApplySubCaptureTargetResult = {
  kSuccess: 0,
  kErrorGeneric: 1,
  kUnsupportedCaptureDevice: 2,
  kNotImplemented: 3,
  kNonIncreasingVersion: 4,
  kInvalidTarget: 5,
};

// Enum: DeviceEnumerationResult
media.mojom.DeviceEnumerationResult = {
  kSuccess: 0,
  kUnknownError: 1,
  kErrorCaptureServiceCrash: 2,
  kErrorCaptureServiceDroppedRequest: 3,
};

// Struct: VideoCaptureControlSupport
mojo.internal.Struct(
    media.mojom.VideoCaptureControlSupportSpec, 'media.mojom.VideoCaptureControlSupport', [
      mojo.internal.StructField('pan', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tilt', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('zoom', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoCaptureFormat
mojo.internal.Struct(
    media.mojom.VideoCaptureFormatSpec, 'media.mojom.VideoCaptureFormat', [
      mojo.internal.StructField('frame_size', 0, 0, gfx.mojom.SizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pixel_format', 8, 0, media.mojom.VideoCapturePixelFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_rate', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: VideoCaptureParams
mojo.internal.Struct(
    media.mojom.VideoCaptureParamsSpec, 'media.mojom.VideoCaptureParams', [
      mojo.internal.StructField('requested_format', 0, 0, media.mojom.VideoCaptureFormatSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('buffer_type', 8, 0, media.mojom.VideoCaptureBufferTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resolution_change_policy', 16, 0, media.mojom.ResolutionChangePolicySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('power_line_frequency', 24, 0, media.mojom.PowerLineFrequencySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_version_source', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('enable_face_detection', 36, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_high_dpi_enabled', 36, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: VideoCaptureFeedback
mojo.internal.Struct(
    media.mojom.VideoCaptureFeedbackSpec, 'media.mojom.VideoCaptureFeedback', [
      mojo.internal.StructField('resource_utilization', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('DEPRECATED_mapped_sizes', 8, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('max_framerate_fps', 16, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('max_pixels', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('frame_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('require_mapped_frame', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('has_frame_id', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PlaneStrides
mojo.internal.Struct(
    media.mojom.PlaneStridesSpec, 'media.mojom.PlaneStrides', [
      mojo.internal.StructField('stride_by_plane', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VideoCaptureDeviceDescriptor
mojo.internal.Struct(
    media.mojom.VideoCaptureDeviceDescriptorSpec, 'media.mojom.VideoCaptureDeviceDescriptor', [
      mojo.internal.StructField('display_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('device_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('model_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('facing_mode', 24, 0, media.mojom.VideoFacingModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('capture_api', 32, 0, media.mojom.VideoCaptureApiSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('control_support', 40, 0, media.mojom.VideoCaptureControlSupportSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('transport_type', 48, 0, media.mojom.VideoCaptureTransportTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('availability', 56, 0, media.mojom.CameraAvailabilitySpec.$, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: VideoCaptureDeviceInfo
mojo.internal.Struct(
    media.mojom.VideoCaptureDeviceInfoSpec, 'media.mojom.VideoCaptureDeviceInfo', [
      mojo.internal.StructField('descriptor', 0, 0, media.mojom.VideoCaptureDeviceDescriptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supported_formats', 8, 0, mojo.internal.Array(media.mojom.VideoCaptureFormatSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
