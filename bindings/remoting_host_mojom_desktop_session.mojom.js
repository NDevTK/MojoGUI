// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/desktop_session.mojom
// Module: remoting.mojom

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var mojo_base = mojo_base || {};
var gfx = gfx || {};

remoting.mojom.EncodingSpec = { $: mojo.internal.Enum() };
remoting.mojom.SamplingRateSpec = { $: mojo.internal.Enum() };
remoting.mojom.BytesPerSampleSpec = { $: mojo.internal.Enum() };
remoting.mojom.ChannelsSpec = { $: mojo.internal.Enum() };
remoting.mojom.MouseButtonSpec = { $: mojo.internal.Enum() };
remoting.mojom.TouchEventTypeSpec = { $: mojo.internal.Enum() };
remoting.mojom.UrlForwarderStateSpec = { $: mojo.internal.Enum() };
remoting.mojom.TypeSpec = { $: mojo.internal.Enum() };
remoting.mojom.ProtocolErrorCodeSpec = { $: mojo.internal.Enum() };
remoting.mojom.ReadChunkResultSpec = { $: {} };
remoting.mojom.FileChooserResultSpec = { $: {} };
remoting.mojom.BeginFileReadResultSpec = { $: {} };
remoting.mojom.BeginFileWriteResultSpec = { $: {} };
remoting.mojom.CaptureResultSpec = { $: {} };
remoting.mojom.AudioPacketSpec = { $: {} };
remoting.mojom.ClipboardEventSpec = { $: {} };
remoting.mojom.KeyEventSpec = { $: {} };
remoting.mojom.MouseEventSpec = { $: {} };
remoting.mojom.TextEventSpec = { $: {} };
remoting.mojom.TouchEventPointSpec = { $: {} };
remoting.mojom.TouchEventSpec = { $: {} };
remoting.mojom.FractionalCoordinateSpec = { $: {} };
remoting.mojom.DesktopEnvironmentOptionsSpec = { $: {} };
remoting.mojom.ScreenResolutionSpec = { $: {} };
remoting.mojom.FileTransferErrorSpec = { $: {} };
remoting.mojom.BeginFileReadSuccessSpec = { $: {} };
remoting.mojom.BeginFileWriteSuccessSpec = { $: {} };
remoting.mojom.CreateVideoCapturerResultSpec = { $: {} };
remoting.mojom.VideoTrackLayoutSpec = { $: {} };
remoting.mojom.VideoLayoutSpec = { $: {} };
remoting.mojom.SourceLocationSpec = { $: {} };
remoting.mojom.DesktopSessionRequestHandler = {};
remoting.mojom.DesktopSessionRequestHandler.$interfaceName = 'remoting.mojom.DesktopSessionRequestHandler';
remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionManager = {};
remoting.mojom.DesktopSessionManager.$interfaceName = 'remoting.mojom.DesktopSessionManager';
remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionAgent = {};
remoting.mojom.DesktopSessionAgent.$interfaceName = 'remoting.mojom.DesktopSessionAgent';
remoting.mojom.DesktopSessionAgent_Start_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec = { $: {} };
remoting.mojom.FileWriter = {};
remoting.mojom.FileWriter.$interfaceName = 'remoting.mojom.FileWriter';
remoting.mojom.FileWriter_WriteChunk_ParamsSpec = { $: {} };
remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec = { $: {} };
remoting.mojom.FileWriter_CloseFile_ParamsSpec = { $: {} };
remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec = { $: {} };
remoting.mojom.FileReader = {};
remoting.mojom.FileReader.$interfaceName = 'remoting.mojom.FileReader';
remoting.mojom.FileReader_ReadChunk_ParamsSpec = { $: {} };
remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl = {};
remoting.mojom.DesktopSessionControl.$interfaceName = 'remoting.mojom.DesktopSessionControl';
remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec = { $: {} };
remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec = { $: {} };
remoting.mojom.VideoCapturer = {};
remoting.mojom.VideoCapturer.$interfaceName = 'remoting.mojom.VideoCapturer';
remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec = { $: {} };
remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec = { $: {} };
remoting.mojom.VideoCapturerEventHandler = {};
remoting.mojom.VideoCapturerEventHandler.$interfaceName = 'remoting.mojom.VideoCapturerEventHandler';
remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec = { $: {} };
remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec = { $: {} };
remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler = {};
remoting.mojom.DesktopSessionEventHandler.$interfaceName = 'remoting.mojom.DesktopSessionEventHandler';
remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec = { $: {} };
remoting.mojom.DesktopSessionStateHandler = {};
remoting.mojom.DesktopSessionStateHandler.$interfaceName = 'remoting.mojom.DesktopSessionStateHandler';
remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec = { $: {} };
remoting.mojom.WorkerProcessControl = {};
remoting.mojom.WorkerProcessControl.$interfaceName = 'remoting.mojom.WorkerProcessControl';
remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec = { $: {} };

// Enum: Encoding
remoting.mojom.Encoding = {
  kInvalid: -1,
  kRaw: 0,
  kOpus: 1,
};

// Enum: SamplingRate
remoting.mojom.SamplingRate = {
  kInvalid: -1,
  kRate_44100: 44100,
  kRate_48000: 48000,
};

// Enum: BytesPerSample
remoting.mojom.BytesPerSample = {
  kInvalid: -1,
  kBytesPerSample_2: 2,
};

// Enum: Channels
remoting.mojom.Channels = {
  kInvalid: -1,
  kMono: 1,
  kStereo: 2,
  kSurround: 3,
  kChannel_4_0: 4,
  kChannel_4_1: 5,
  kChannel_5_1: 6,
  kChannel_6_1: 7,
  kChannel_7_1: 8,
};

// Enum: MouseButton
remoting.mojom.MouseButton = {
  kUndefined: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
  kBack: 4,
  kForward: 5,
};

// Enum: TouchEventType
remoting.mojom.TouchEventType = {
  kUndefined: 0,
  kStart: 1,
  kMove: 2,
  kEnd: 3,
  kCancel: 4,
};

// Enum: UrlForwarderState
remoting.mojom.UrlForwarderState = {
  kUnknown: 0,
  kSetUp: 1,
  kNotSetUp: 2,
  kFailed: 3,
  kSetupPendingUserIntervention: 4,
};

// Enum: Type
remoting.mojom.Type = {
  kUnknown: 0,
  kCanceled: 1,
  kUnexpectedError: 2,
  kProtocolError: 3,
  kPermissionDenied: 4,
  kOutOfDiskSpace: 5,
  kIoError: 6,
  kNotLoggedIn: 7,
};

// Enum: ProtocolErrorCode
remoting.mojom.ProtocolErrorCode = {
  kOk: 0,
  kPeerIsOffline: 1,
  kSessionRejected: 2,
  kIncompatibleProtocol: 3,
  kAuthenticationFailed: 4,
  kInvalidAccount: 5,
  kChannelConnectionError: 6,
  kSignalingError: 7,
  kSignalingTimeout: 8,
  kHostOverload: 9,
  kMaxSessionLength: 10,
  kHostConfigurationError: 11,
  kUnknownError: 12,
  kElevationError: 13,
  kHostCertificateError: 14,
  kHostRegistrationError: 15,
  kExistingAdminSession: 16,
  kAuthzPolicyCheckFailed: 17,
  kDisallowedByPolicy: 18,
  kLocationAuthzPolicyCheckFailed: 19,
  kUnauthorizedAccount: 20,
  kReauthzPolicyCheckFailed: 21,
  kNoCommonAuthMethod: 22,
  kLoginScreenNotSupported: 23,
  kSessionPoliciesChanged: 24,
  kUnexpectedAuthenticatorError: 25,
  kInvalidState: 26,
  kInvalidArgument: 27,
  kNetworkFailure: 28,
  kOperationTimeout: 29,
};

// Union: ReadChunkResult
mojo.internal.Union(
    remoting.mojom.ReadChunkResultSpec, 'remoting.mojom.ReadChunkResult', {
      'data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: FileChooserResult
mojo.internal.Union(
    remoting.mojom.FileChooserResultSpec, 'remoting.mojom.FileChooserResult', {
      'filepath': {
        'ordinal': 0,
        'type': mojo_base.mojom.FilePathSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BeginFileReadResult
mojo.internal.Union(
    remoting.mojom.BeginFileReadResultSpec, 'remoting.mojom.BeginFileReadResult', {
      'success': {
        'ordinal': 0,
        'type': remoting.mojom.BeginFileReadSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BeginFileWriteResult
mojo.internal.Union(
    remoting.mojom.BeginFileWriteResultSpec, 'remoting.mojom.BeginFileWriteResult', {
      'success': {
        'ordinal': 0,
        'type': remoting.mojom.BeginFileWriteSuccessSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: CaptureResult
mojo.internal.Union(
    remoting.mojom.CaptureResultSpec, 'remoting.mojom.CaptureResult', {
      'desktop_frame': {
        'ordinal': 0,
        'type': remoting.mojom.DesktopFrameSpec.$,
        'nullable': false,
      },
      'capture_error': {
        'ordinal': 1,
        'type': remoting.mojom.DesktopCaptureResultSpec.$,
        'nullable': false,
      },
    });

// Struct: AudioPacket
mojo.internal.Struct(
    remoting.mojom.AudioPacketSpec, 'remoting.mojom.AudioPacket', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('kInvalid', 8, 0, mojo.internal.Pointer, -1, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ClipboardEvent
mojo.internal.Struct(
    remoting.mojom.ClipboardEventSpec, 'remoting.mojom.ClipboardEvent', [
      mojo.internal.StructField('mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('data', 8, 0, mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyEvent
mojo.internal.Struct(
    remoting.mojom.KeyEventSpec, 'remoting.mojom.KeyEvent', [
      mojo.internal.StructField('caps_lock_state', 0, 0, remoting.mojom.BoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('num_lock_state', 8, 0, remoting.mojom.BoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('usb_keycode', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('lock_states', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('pressed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: MouseEvent
mojo.internal.Struct(
    remoting.mojom.MouseEventSpec, 'remoting.mojom.MouseEvent', [
      mojo.internal.StructField('x', 0, 0, remoting.mojom.Int32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('y', 8, 0, remoting.mojom.Int32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('button', 16, 0, remoting.mojom.MouseButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('button_down', 24, 0, remoting.mojom.BoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wheel_delta_x', 32, 0, remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wheel_delta_y', 40, 0, remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wheel_ticks_x', 48, 0, remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('wheel_ticks_y', 56, 0, remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('delta_x', 64, 0, remoting.mojom.Int32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('delta_y', 72, 0, remoting.mojom.Int32Spec.$, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: TextEvent
mojo.internal.Struct(
    remoting.mojom.TextEventSpec, 'remoting.mojom.TextEvent', [
      mojo.internal.StructField('text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TouchEventPoint
mojo.internal.Struct(
    remoting.mojom.TouchEventPointSpec, 'remoting.mojom.TouchEventPoint', [
      mojo.internal.StructField('position', 0, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('radius', 8, 0, gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('angle', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('pressure', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TouchEvent
mojo.internal.Struct(
    remoting.mojom.TouchEventSpec, 'remoting.mojom.TouchEvent', [
      mojo.internal.StructField('event_type', 0, 0, remoting.mojom.TouchEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('touch_points', 8, 0, mojo.internal.Array(remoting.mojom.TouchEventPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FractionalCoordinate
mojo.internal.Struct(
    remoting.mojom.FractionalCoordinateSpec, 'remoting.mojom.FractionalCoordinate', [
      mojo.internal.StructField('screen_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DesktopEnvironmentOptions
mojo.internal.Struct(
    remoting.mojom.DesktopEnvironmentOptionsSpec, 'remoting.mojom.DesktopEnvironmentOptions', [
      mojo.internal.StructField('desktop_capture_options', 0, 0, remoting.mojom.DesktopCaptureOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('enable_curtaining', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_user_interface', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_notifications', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('terminate_upon_input', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('enable_remote_webauthn', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScreenResolution
mojo.internal.Struct(
    remoting.mojom.ScreenResolutionSpec, 'remoting.mojom.ScreenResolution', [
      mojo.internal.StructField('dimensions', 0, 0, remoting.mojom.DesktopSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 8, 0, remoting.mojom.DesktopVectorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileTransferError
mojo.internal.Struct(
    remoting.mojom.FileTransferErrorSpec, 'remoting.mojom.FileTransferError', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BeginFileReadSuccess
mojo.internal.Struct(
    remoting.mojom.BeginFileReadSuccessSpec, 'remoting.mojom.BeginFileReadSuccess', [
      mojo.internal.StructField('file_reader', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
      mojo.internal.StructField('filename', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BeginFileWriteSuccess
mojo.internal.Struct(
    remoting.mojom.BeginFileWriteSuccessSpec, 'remoting.mojom.BeginFileWriteSuccess', [
      mojo.internal.StructField('file_writer', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CreateVideoCapturerResult
mojo.internal.Struct(
    remoting.mojom.CreateVideoCapturerResultSpec, 'remoting.mojom.CreateVideoCapturerResult', [
      mojo.internal.StructField('video_capturer', 0, 0, mojo.internal.InterfaceProxy(remoting.mojom.VideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('video_capturer_event_handler', 8, 0, mojo.internal.InterfaceRequest(remoting.mojom.VideoCapturerEventHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoTrackLayout
mojo.internal.Struct(
    remoting.mojom.VideoTrackLayoutSpec, 'remoting.mojom.VideoTrackLayout', [
      mojo.internal.StructField('screen_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('media_stream_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('position', 16, 0, gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('size', 24, 0, remoting.mojom.DesktopSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dpi', 32, 0, remoting.mojom.DesktopVectorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('display_name', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VideoLayout
mojo.internal.Struct(
    remoting.mojom.VideoLayoutSpec, 'remoting.mojom.VideoLayout', [
      mojo.internal.StructField('tracks', 0, 0, mojo.internal.Array(remoting.mojom.VideoTrackLayoutSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('primary_screen_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('supports_full_desktop_capture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SourceLocation
mojo.internal.Struct(
    remoting.mojom.SourceLocationSpec, 'remoting.mojom.SourceLocation', [
      mojo.internal.StructField('function_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('file_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line_number', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: DesktopSessionRequestHandler
mojo.internal.Struct(
    remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec, 'remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_Params', [
      mojo.internal.StructField('desktop_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec, 'remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec, 'remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_Params', [
    ],
    [[0, 8]]);

remoting.mojom.DesktopSessionRequestHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionRequestHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionRequestHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionRequestHandlerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionRequestHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectDesktopChannel(desktop_pipe) {
    return this.$.connectDesktopChannel(desktop_pipe);
  }
  injectSecureAttentionSequence() {
    return this.$.injectSecureAttentionSequence();
  }
  crashNetworkProcess() {
    return this.$.crashNetworkProcess();
  }
};

remoting.mojom.DesktopSessionRequestHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DesktopSessionRequestHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  connectDesktopChannel(desktop_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec,
      null,
      [desktop_pipe],
      false);
  }

  injectSecureAttentionSequence() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec,
      null,
      [],
      false);
  }

  crashNetworkProcess() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec,
      null,
      [],
      false);
  }

};

remoting.mojom.DesktopSessionRequestHandler.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionRequestHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionRequestHandler',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionRequestHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DesktopSessionRequestHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec.$.structSpec);
          const result = this.impl.connectDesktopChannel(params.desktop_pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec.$.structSpec);
          const result = this.impl.injectSecureAttentionSequence();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec.$.structSpec);
          const result = this.impl.crashNetworkProcess();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.DesktopSessionRequestHandlerReceiver = remoting.mojom.DesktopSessionRequestHandlerReceiver;

remoting.mojom.DesktopSessionRequestHandlerPtr = remoting.mojom.DesktopSessionRequestHandlerRemote;
remoting.mojom.DesktopSessionRequestHandlerRequest = remoting.mojom.DesktopSessionRequestHandlerPendingReceiver;


// Interface: DesktopSessionManager
mojo.internal.Struct(
    remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec, 'remoting.mojom.DesktopSessionManager_CreateDesktopSession_Params', [
      mojo.internal.StructField('screen_resolution', 0, 0, remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('terminal_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_virtual_terminal', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec, 'remoting.mojom.DesktopSessionManager_CloseDesktopSession_Params', [
      mojo.internal.StructField('terminal_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec, 'remoting.mojom.DesktopSessionManager_SetScreenResolution_Params', [
      mojo.internal.StructField('screen_resolution', 0, 0, remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('terminal_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

remoting.mojom.DesktopSessionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionManagerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionManagerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createDesktopSession(terminal_id, screen_resolution, is_virtual_terminal) {
    return this.$.createDesktopSession(terminal_id, screen_resolution, is_virtual_terminal);
  }
  closeDesktopSession(terminal_id) {
    return this.$.closeDesktopSession(terminal_id);
  }
  setScreenResolution(terminal_id, screen_resolution) {
    return this.$.setScreenResolution(terminal_id, screen_resolution);
  }
};

remoting.mojom.DesktopSessionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DesktopSessionManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createDesktopSession(terminal_id, screen_resolution, is_virtual_terminal) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec,
      null,
      [terminal_id, screen_resolution, is_virtual_terminal],
      false);
  }

  closeDesktopSession(terminal_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec,
      null,
      [terminal_id],
      false);
  }

  setScreenResolution(terminal_id, screen_resolution) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec,
      null,
      [terminal_id, screen_resolution],
      false);
  }

};

remoting.mojom.DesktopSessionManager.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionManager',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DesktopSessionManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec.$.structSpec);
          const result = this.impl.createDesktopSession(params.terminal_id, params.screen_resolution, params.is_virtual_terminal);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec.$.structSpec);
          const result = this.impl.closeDesktopSession(params.terminal_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec.$.structSpec);
          const result = this.impl.setScreenResolution(params.terminal_id, params.screen_resolution);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.DesktopSessionManagerReceiver = remoting.mojom.DesktopSessionManagerReceiver;

remoting.mojom.DesktopSessionManagerPtr = remoting.mojom.DesktopSessionManagerRemote;
remoting.mojom.DesktopSessionManagerRequest = remoting.mojom.DesktopSessionManagerPendingReceiver;


// Interface: DesktopSessionAgent
mojo.internal.Struct(
    remoting.mojom.DesktopSessionAgent_Start_ParamsSpec, 'remoting.mojom.DesktopSessionAgent_Start_Params', [
      mojo.internal.StructField('authenticated_jid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('resolution', 8, 0, remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 16, 0, remoting.mojom.DesktopEnvironmentOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec, 'remoting.mojom.DesktopSessionAgent_Start_ResponseParams', [
      mojo.internal.StructField('desktop_session_control', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.DesktopSessionAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionAgentRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionAgentPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(authenticated_jid, resolution, options) {
    return this.$.start(authenticated_jid, resolution, options);
  }
};

remoting.mojom.DesktopSessionAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DesktopSessionAgent', [
      { explicit: null },
    ]);
  }

  start(authenticated_jid, resolution, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.DesktopSessionAgent_Start_ParamsSpec,
      remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec,
      [authenticated_jid, resolution, options],
      false);
  }

};

remoting.mojom.DesktopSessionAgent.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionAgent',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DesktopSessionAgent', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionAgent_Start_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionAgent_Start_ParamsSpec.$.structSpec);
          const result = this.impl.start(params.authenticated_jid, params.resolution, params.options);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.DesktopSessionAgentReceiver = remoting.mojom.DesktopSessionAgentReceiver;

remoting.mojom.DesktopSessionAgentPtr = remoting.mojom.DesktopSessionAgentRemote;
remoting.mojom.DesktopSessionAgentRequest = remoting.mojom.DesktopSessionAgentPendingReceiver;


// Interface: FileWriter
mojo.internal.Struct(
    remoting.mojom.FileWriter_WriteChunk_ParamsSpec, 'remoting.mojom.FileWriter_WriteChunk_Params', [
      mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec, 'remoting.mojom.FileWriter_WriteChunk_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, remoting.mojom.FileTransferErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.FileWriter_CloseFile_ParamsSpec, 'remoting.mojom.FileWriter_CloseFile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec, 'remoting.mojom.FileWriter_CloseFile_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, remoting.mojom.FileTransferErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.FileWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.FileWriterRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.FileWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.FileWriterPendingReceiver,
      handle);
    this.$ = new remoting.mojom.FileWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  writeChunk(data) {
    return this.$.writeChunk(data);
  }
  closeFile() {
    return this.$.closeFile();
  }
};

remoting.mojom.FileWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileWriter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  writeChunk(data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.FileWriter_WriteChunk_ParamsSpec,
      remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec,
      [data],
      false);
  }

  closeFile() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.FileWriter_CloseFile_ParamsSpec,
      remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec,
      [],
      false);
  }

};

remoting.mojom.FileWriter.getRemote = function() {
  let remote = new remoting.mojom.FileWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.FileWriter',
    'context');
  return remote.$;
};

remoting.mojom.FileWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileWriter', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.FileWriter_WriteChunk_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.FileWriter_CloseFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.FileWriter_WriteChunk_ParamsSpec.$.structSpec);
          const result = this.impl.writeChunk(params.data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.FileWriter_CloseFile_ParamsSpec.$.structSpec);
          const result = this.impl.closeFile();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.FileWriterReceiver = remoting.mojom.FileWriterReceiver;

remoting.mojom.FileWriterPtr = remoting.mojom.FileWriterRemote;
remoting.mojom.FileWriterRequest = remoting.mojom.FileWriterPendingReceiver;


// Interface: FileReader
mojo.internal.Struct(
    remoting.mojom.FileReader_ReadChunk_ParamsSpec, 'remoting.mojom.FileReader_ReadChunk_Params', [
      mojo.internal.StructField('bytes_to_read', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec, 'remoting.mojom.FileReader_ReadChunk_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, remoting.mojom.ReadChunkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.FileReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.FileReaderRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.FileReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.FileReaderPendingReceiver,
      handle);
    this.$ = new remoting.mojom.FileReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  readChunk(bytes_to_read) {
    return this.$.readChunk(bytes_to_read);
  }
};

remoting.mojom.FileReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileReader', [
      { explicit: null },
    ]);
  }

  readChunk(bytes_to_read) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.FileReader_ReadChunk_ParamsSpec,
      remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec,
      [bytes_to_read],
      false);
  }

};

remoting.mojom.FileReader.getRemote = function() {
  let remote = new remoting.mojom.FileReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.FileReader',
    'context');
  return remote.$;
};

remoting.mojom.FileReaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileReader', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.FileReader_ReadChunk_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.FileReader_ReadChunk_ParamsSpec.$.structSpec);
          const result = this.impl.readChunk(params.bytes_to_read);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.FileReaderReceiver = remoting.mojom.FileReaderReceiver;

remoting.mojom.FileReaderPtr = remoting.mojom.FileReaderRemote;
remoting.mojom.FileReaderRequest = remoting.mojom.FileReaderPendingReceiver;


// Interface: DesktopSessionControl
mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec, 'remoting.mojom.DesktopSessionControl_CreateVideoCapturer_Params', [
      mojo.internal.StructField('desktop_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec, 'remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, remoting.mojom.CreateVideoCapturerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SetScreenResolution_Params', [
      mojo.internal.StructField('new_resolution', 0, 0, remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec, 'remoting.mojom.DesktopSessionControl_LockWorkstation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectClipboardEvent_Params', [
      mojo.internal.StructField('event', 0, 0, remoting.mojom.ClipboardEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectKeyEvent_Params', [
      mojo.internal.StructField('event', 0, 0, remoting.mojom.KeyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectMouseEvent_Params', [
      mojo.internal.StructField('event', 0, 0, remoting.mojom.MouseEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectTextEvent_Params', [
      mojo.internal.StructField('event', 0, 0, remoting.mojom.TextEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectTouchEvent_Params', [
      mojo.internal.StructField('event', 0, 0, remoting.mojom.TouchEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileRead_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, remoting.mojom.BeginFileReadResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileWrite_Params', [
      mojo.internal.StructField('file_path', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, remoting.mojom.BeginFileWriteResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_Params', [
    ],
    [[0, 8]]);

remoting.mojom.DesktopSessionControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionControlPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createVideoCapturer(desktop_display_id) {
    return this.$.createVideoCapturer(desktop_display_id);
  }
  setScreenResolution(new_resolution) {
    return this.$.setScreenResolution(new_resolution);
  }
  lockWorkstation() {
    return this.$.lockWorkstation();
  }
  injectSendAttentionSequence() {
    return this.$.injectSendAttentionSequence();
  }
  injectClipboardEvent(event) {
    return this.$.injectClipboardEvent(event);
  }
  injectKeyEvent(event) {
    return this.$.injectKeyEvent(event);
  }
  injectMouseEvent(event) {
    return this.$.injectMouseEvent(event);
  }
  injectTextEvent(event) {
    return this.$.injectTextEvent(event);
  }
  injectTouchEvent(event) {
    return this.$.injectTouchEvent(event);
  }
  setUpUrlForwarder() {
    return this.$.setUpUrlForwarder();
  }
  signalWebAuthnExtension() {
    return this.$.signalWebAuthnExtension();
  }
  beginFileRead() {
    return this.$.beginFileRead();
  }
  beginFileWrite(file_path) {
    return this.$.beginFileWrite(file_path);
  }
  setHostCursorRenderedByClient() {
    return this.$.setHostCursorRenderedByClient();
  }
};

remoting.mojom.DesktopSessionControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DesktopSessionControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createVideoCapturer(desktop_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec,
      remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec,
      [desktop_display_id],
      false);
  }

  setScreenResolution(new_resolution) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec,
      null,
      [new_resolution],
      false);
  }

  lockWorkstation() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec,
      null,
      [],
      false);
  }

  injectSendAttentionSequence() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec,
      null,
      [],
      false);
  }

  injectClipboardEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  injectKeyEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  injectMouseEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  injectTextEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  injectTouchEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  setUpUrlForwarder() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec,
      null,
      [],
      false);
  }

  signalWebAuthnExtension() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec,
      null,
      [],
      false);
  }

  beginFileRead() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec,
      remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec,
      [],
      false);
  }

  beginFileWrite(file_path) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec,
      remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec,
      [file_path],
      false);
  }

  setHostCursorRenderedByClient() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec,
      null,
      [],
      false);
  }

};

remoting.mojom.DesktopSessionControl.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionControl',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DesktopSessionControl', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec.$.structSpec);
          const result = this.impl.createVideoCapturer(params.desktop_display_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec.$.structSpec);
          const result = this.impl.setScreenResolution(params.new_resolution);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec.$.structSpec);
          const result = this.impl.lockWorkstation();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec.$.structSpec);
          const result = this.impl.injectSendAttentionSequence();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec.$.structSpec);
          const result = this.impl.injectClipboardEvent(params.event);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec.$.structSpec);
          const result = this.impl.injectKeyEvent(params.event);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec.$.structSpec);
          const result = this.impl.injectMouseEvent(params.event);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec.$.structSpec);
          const result = this.impl.injectTextEvent(params.event);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec.$.structSpec);
          const result = this.impl.injectTouchEvent(params.event);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec.$.structSpec);
          const result = this.impl.setUpUrlForwarder();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec.$.structSpec);
          const result = this.impl.signalWebAuthnExtension();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec.$.structSpec);
          const result = this.impl.beginFileRead();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec.$.structSpec);
          const result = this.impl.beginFileWrite(params.file_path);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec.$.structSpec);
          const result = this.impl.setHostCursorRenderedByClient();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.DesktopSessionControlReceiver = remoting.mojom.DesktopSessionControlReceiver;

remoting.mojom.DesktopSessionControlPtr = remoting.mojom.DesktopSessionControlRemote;
remoting.mojom.DesktopSessionControlRequest = remoting.mojom.DesktopSessionControlPendingReceiver;


// Interface: VideoCapturer
mojo.internal.Struct(
    remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec, 'remoting.mojom.VideoCapturer_CaptureFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec, 'remoting.mojom.VideoCapturer_SetComposeEnabled_Params', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.VideoCapturerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.VideoCapturerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.VideoCapturer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.VideoCapturerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.VideoCapturerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  captureFrame() {
    return this.$.captureFrame();
  }
  setComposeEnabled(enabled) {
    return this.$.setComposeEnabled(enabled);
  }
};

remoting.mojom.VideoCapturerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCapturer', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  captureFrame() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec,
      null,
      [],
      false);
  }

  setComposeEnabled(enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec,
      null,
      [enabled],
      false);
  }

};

remoting.mojom.VideoCapturer.getRemote = function() {
  let remote = new remoting.mojom.VideoCapturerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.VideoCapturer',
    'context');
  return remote.$;
};

remoting.mojom.VideoCapturerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCapturer', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec.$.structSpec);
          const result = this.impl.captureFrame();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.setComposeEnabled(params.enabled);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.VideoCapturerReceiver = remoting.mojom.VideoCapturerReceiver;

remoting.mojom.VideoCapturerPtr = remoting.mojom.VideoCapturerRemote;
remoting.mojom.VideoCapturerRequest = remoting.mojom.VideoCapturerPendingReceiver;


// Interface: VideoCapturerEventHandler
mojo.internal.Struct(
    remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec, 'remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_Params', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec, 'remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec, 'remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_Params', [
      mojo.internal.StructField('result', 0, 0, remoting.mojom.CaptureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.VideoCapturerEventHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.VideoCapturerEventHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.VideoCapturerEventHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.VideoCapturerEventHandlerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.VideoCapturerEventHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSharedMemoryRegionCreated(id, region, size) {
    return this.$.onSharedMemoryRegionCreated(id, region, size);
  }
  onSharedMemoryRegionReleased(id) {
    return this.$.onSharedMemoryRegionReleased(id);
  }
  onCaptureResult(result) {
    return this.$.onCaptureResult(result);
  }
};

remoting.mojom.VideoCapturerEventHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('VideoCapturerEventHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSharedMemoryRegionCreated(id, region, size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec,
      null,
      [id, region, size],
      false);
  }

  onSharedMemoryRegionReleased(id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec,
      null,
      [id],
      false);
  }

  onCaptureResult(result) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec,
      null,
      [result],
      false);
  }

};

remoting.mojom.VideoCapturerEventHandler.getRemote = function() {
  let remote = new remoting.mojom.VideoCapturerEventHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.VideoCapturerEventHandler',
    'context');
  return remote.$;
};

remoting.mojom.VideoCapturerEventHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('VideoCapturerEventHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec.$.structSpec);
          const result = this.impl.onSharedMemoryRegionCreated(params.id, params.region, params.size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec.$.structSpec);
          const result = this.impl.onSharedMemoryRegionReleased(params.id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec.$.structSpec);
          const result = this.impl.onCaptureResult(params.result);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.VideoCapturerEventHandlerReceiver = remoting.mojom.VideoCapturerEventHandlerReceiver;

remoting.mojom.VideoCapturerEventHandlerPtr = remoting.mojom.VideoCapturerEventHandlerRemote;
remoting.mojom.VideoCapturerEventHandlerRequest = remoting.mojom.VideoCapturerEventHandlerPendingReceiver;


// Interface: DesktopSessionEventHandler
mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_Params', [
      mojo.internal.StructField('event', 0, 0, remoting.mojom.ClipboardEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_Params', [
      mojo.internal.StructField('state', 0, 0, remoting.mojom.UrlForwarderStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_Params', [
      mojo.internal.StructField('audio_packet', 0, 0, remoting.mojom.AudioPacketSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_Params', [
      mojo.internal.StructField('layout', 0, 0, remoting.mojom.VideoLayoutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_Params', [
      mojo.internal.StructField('mouse_cursor', 0, 0, remoting.mojom.MouseCursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_Params', [
      mojo.internal.StructField('position', 0, 0, remoting.mojom.FractionalCoordinateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_Params', [
      mojo.internal.StructField('keyboard_layout', 0, 0, remoting.mojom.KeyboardLayoutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_Params', [
      mojo.internal.StructField('new_position', 0, 0, remoting.mojom.DesktopVectorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_Params', [
      mojo.internal.StructField('usb_keycode', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

remoting.mojom.DesktopSessionEventHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionEventHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionEventHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionEventHandlerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionEventHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClipboardEvent(event) {
    return this.$.onClipboardEvent(event);
  }
  onUrlForwarderStateChange(state) {
    return this.$.onUrlForwarderStateChange(state);
  }
  onAudioPacket(audio_packet) {
    return this.$.onAudioPacket(audio_packet);
  }
  onDesktopDisplayChanged(layout) {
    return this.$.onDesktopDisplayChanged(layout);
  }
  onMouseCursorChanged(mouse_cursor) {
    return this.$.onMouseCursorChanged(mouse_cursor);
  }
  onMouseCursorFractionalPositionChanged(position) {
    return this.$.onMouseCursorFractionalPositionChanged(position);
  }
  onKeyboardLayoutChanged(keyboard_layout) {
    return this.$.onKeyboardLayoutChanged(keyboard_layout);
  }
  onLocalMouseMoveDetected(new_position) {
    return this.$.onLocalMouseMoveDetected(new_position);
  }
  onLocalKeyboardInputDetected(usb_keycode) {
    return this.$.onLocalKeyboardInputDetected(usb_keycode);
  }
};

remoting.mojom.DesktopSessionEventHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DesktopSessionEventHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onClipboardEvent(event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec,
      null,
      [event],
      false);
  }

  onUrlForwarderStateChange(state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec,
      null,
      [state],
      false);
  }

  onAudioPacket(audio_packet) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec,
      null,
      [audio_packet],
      false);
  }

  onDesktopDisplayChanged(layout) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec,
      null,
      [layout],
      false);
  }

  onMouseCursorChanged(mouse_cursor) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec,
      null,
      [mouse_cursor],
      false);
  }

  onMouseCursorFractionalPositionChanged(position) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec,
      null,
      [position],
      false);
  }

  onKeyboardLayoutChanged(keyboard_layout) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec,
      null,
      [keyboard_layout],
      false);
  }

  onLocalMouseMoveDetected(new_position) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec,
      null,
      [new_position],
      false);
  }

  onLocalKeyboardInputDetected(usb_keycode) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec,
      null,
      [usb_keycode],
      false);
  }

};

remoting.mojom.DesktopSessionEventHandler.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionEventHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionEventHandler',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionEventHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DesktopSessionEventHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec.$.structSpec);
          const result = this.impl.onClipboardEvent(params.event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec.$.structSpec);
          const result = this.impl.onUrlForwarderStateChange(params.state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec.$.structSpec);
          const result = this.impl.onAudioPacket(params.audio_packet);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onDesktopDisplayChanged(params.layout);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMouseCursorChanged(params.mouse_cursor);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onMouseCursorFractionalPositionChanged(params.position);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec.$.structSpec);
          const result = this.impl.onKeyboardLayoutChanged(params.keyboard_layout);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec.$.structSpec);
          const result = this.impl.onLocalMouseMoveDetected(params.new_position);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec.$.structSpec);
          const result = this.impl.onLocalKeyboardInputDetected(params.usb_keycode);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.DesktopSessionEventHandlerReceiver = remoting.mojom.DesktopSessionEventHandlerReceiver;

remoting.mojom.DesktopSessionEventHandlerPtr = remoting.mojom.DesktopSessionEventHandlerRemote;
remoting.mojom.DesktopSessionEventHandlerRequest = remoting.mojom.DesktopSessionEventHandlerPendingReceiver;


// Interface: DesktopSessionStateHandler
mojo.internal.Struct(
    remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec, 'remoting.mojom.DesktopSessionStateHandler_DisconnectSession_Params', [
      mojo.internal.StructField('error_code', 0, 0, remoting.mojom.ProtocolErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_location', 16, 0, remoting.mojom.SourceLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

remoting.mojom.DesktopSessionStateHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.DesktopSessionStateHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionStateHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.DesktopSessionStateHandlerPendingReceiver,
      handle);
    this.$ = new remoting.mojom.DesktopSessionStateHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  disconnectSession(error_code, error_details, error_location) {
    return this.$.disconnectSession(error_code, error_details, error_location);
  }
};

remoting.mojom.DesktopSessionStateHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DesktopSessionStateHandler', [
      { explicit: null },
    ]);
  }

  disconnectSession(error_code, error_details, error_location) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec,
      null,
      [error_code, error_details, error_location],
      false);
  }

};

remoting.mojom.DesktopSessionStateHandler.getRemote = function() {
  let remote = new remoting.mojom.DesktopSessionStateHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionStateHandler',
    'context');
  return remote.$;
};

remoting.mojom.DesktopSessionStateHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DesktopSessionStateHandler', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec.$.structSpec);
          const result = this.impl.disconnectSession(params.error_code, params.error_details, params.error_location);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.DesktopSessionStateHandlerReceiver = remoting.mojom.DesktopSessionStateHandlerReceiver;

remoting.mojom.DesktopSessionStateHandlerPtr = remoting.mojom.DesktopSessionStateHandlerRemote;
remoting.mojom.DesktopSessionStateHandlerRequest = remoting.mojom.DesktopSessionStateHandlerPendingReceiver;


// Interface: WorkerProcessControl
mojo.internal.Struct(
    remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec, 'remoting.mojom.WorkerProcessControl_CrashProcess_Params', [
      mojo.internal.StructField('function_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('file_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line_number', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

remoting.mojom.WorkerProcessControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remoting.mojom.WorkerProcessControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WorkerProcessControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remoting.mojom.WorkerProcessControlPendingReceiver,
      handle);
    this.$ = new remoting.mojom.WorkerProcessControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  crashProcess(function_name, file_name, line_number) {
    return this.$.crashProcess(function_name, file_name, line_number);
  }
};

remoting.mojom.WorkerProcessControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('WorkerProcessControl', [
      { explicit: null },
    ]);
  }

  crashProcess(function_name, file_name, line_number) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec,
      null,
      [function_name, file_name, line_number],
      false);
  }

};

remoting.mojom.WorkerProcessControl.getRemote = function() {
  let remote = new remoting.mojom.WorkerProcessControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WorkerProcessControl',
    'context');
  return remote.$;
};

remoting.mojom.WorkerProcessControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('WorkerProcessControl', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec.$.structSpec);
          const result = this.impl.crashProcess(params.function_name, params.file_name, params.line_number);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remoting.mojom.WorkerProcessControlReceiver = remoting.mojom.WorkerProcessControlReceiver;

remoting.mojom.WorkerProcessControlPtr = remoting.mojom.WorkerProcessControlRemote;
remoting.mojom.WorkerProcessControlRequest = remoting.mojom.WorkerProcessControlPendingReceiver;

