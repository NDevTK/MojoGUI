// Auto-generated MojoJS binding
// Source: chromium_src/remoting/host/mojom/desktop_session.mojom
// Module: remoting.mojom

'use strict';

// Module namespace
var remoting = remoting || {};
remoting.mojom = remoting.mojom || {};
var ui = ui || {};
var gfx = gfx || {};


// Enum: Encoding
remoting.mojom.Encoding = {
  kInvalid: 0,
  kRaw: 1,
  kOpus: 2,
};
remoting.mojom.EncodingSpec = { $: mojo.internal.Enum() };

// Enum: SamplingRate
remoting.mojom.SamplingRate = {
  kInvalid: 0,
  kRate_44100: 1,
  kRate_48000: 2,
};
remoting.mojom.SamplingRateSpec = { $: mojo.internal.Enum() };

// Enum: BytesPerSample
remoting.mojom.BytesPerSample = {
  kInvalid: 0,
  kBytesPerSample_2: 1,
};
remoting.mojom.BytesPerSampleSpec = { $: mojo.internal.Enum() };

// Enum: Channels
remoting.mojom.Channels = {
  kInvalid: 0,
  kMono: 1,
  kStereo: 2,
  kSurround: 3,
  kChannel_4_0: 4,
  kChannel_4_1: 5,
  kChannel_5_1: 6,
  kChannel_6_1: 7,
  kChannel_7_1: 8,
};
remoting.mojom.ChannelsSpec = { $: mojo.internal.Enum() };

// Enum: MouseButton
remoting.mojom.MouseButton = {
  kUndefined: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
  kBack: 4,
  kForward: 5,
};
remoting.mojom.MouseButtonSpec = { $: mojo.internal.Enum() };

// Enum: TouchEventType
remoting.mojom.TouchEventType = {
  kUndefined: 0,
  kStart: 1,
  kMove: 2,
  kEnd: 3,
  kCancel: 4,
};
remoting.mojom.TouchEventTypeSpec = { $: mojo.internal.Enum() };

// Enum: UrlForwarderState
remoting.mojom.UrlForwarderState = {
  kUnknown: 0,
  kSetUp: 1,
  kNotSetUp: 2,
  kFailed: 3,
  kSetupPendingUserIntervention: 4,
};
remoting.mojom.UrlForwarderStateSpec = { $: mojo.internal.Enum() };

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
remoting.mojom.TypeSpec = { $: mojo.internal.Enum() };

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
remoting.mojom.ProtocolErrorCodeSpec = { $: mojo.internal.Enum() };

// Union: ReadChunkResult
remoting.mojom.ReadChunkResultSpec = { $: mojo.internal.Union(
    'remoting.mojom.ReadChunkResult', {
      'data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
      }},
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec,
      }},
    })
};

// Union: FileChooserResult
remoting.mojom.FileChooserResultSpec = { $: mojo.internal.Union(
    'remoting.mojom.FileChooserResult', {
      'filepath': {
        'ordinal': 0,
        'type': mojo_base.mojom.FilePathSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec,
      }},
    })
};

// Union: BeginFileReadResult
remoting.mojom.BeginFileReadResultSpec = { $: mojo.internal.Union(
    'remoting.mojom.BeginFileReadResult', {
      'success': {
        'ordinal': 0,
        'type': remoting.mojom.BeginFileReadSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec,
      }},
    })
};

// Union: BeginFileWriteResult
remoting.mojom.BeginFileWriteResultSpec = { $: mojo.internal.Union(
    'remoting.mojom.BeginFileWriteResult', {
      'success': {
        'ordinal': 0,
        'type': remoting.mojom.BeginFileWriteSuccessSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': remoting.mojom.FileTransferErrorSpec,
      }},
    })
};

// Union: CaptureResult
remoting.mojom.CaptureResultSpec = { $: mojo.internal.Union(
    'remoting.mojom.CaptureResult', {
      'desktop_frame': {
        'ordinal': 0,
        'type': remoting.mojom.DesktopFrameSpec,
      }},
      'capture_error': {
        'ordinal': 1,
        'type': remoting.mojom.DesktopCaptureResultSpec,
      }},
    })
};

// Struct: AudioPacket
remoting.mojom.AudioPacketSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.AudioPacket',
      packedSize: 32,
      fields: [
        { name: 'timestamp', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.ByteStringSpec, false), nullable: false, minVersion: 0 },
        { name: 'kInvalid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ClipboardEvent
remoting.mojom.ClipboardEventSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ClipboardEvent',
      packedSize: 24,
      fields: [
        { name: 'mime_type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'data', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ByteStringSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: KeyEvent
remoting.mojom.KeyEventSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.KeyEvent',
      packedSize: 40,
      fields: [
        { name: 'pressed', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'usb_keycode', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'lock_states', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'caps_lock_state', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.BoolSpec, nullable: true, minVersion: 0 },
        { name: 'num_lock_state', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.BoolSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: MouseEvent
remoting.mojom.MouseEventSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.MouseEvent',
      packedSize: 88,
      fields: [
        { name: 'x', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.Int32Spec, nullable: true, minVersion: 0 },
        { name: 'y', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.Int32Spec, nullable: true, minVersion: 0 },
        { name: 'button', packedOffset: 72, packedBitOffset: 0, type: remoting.mojom.MouseButtonSpec, nullable: false, minVersion: 0 },
        { name: 'button_down', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.BoolSpec, nullable: true, minVersion: 0 },
        { name: 'wheel_delta_x', packedOffset: 24, packedBitOffset: 0, type: remoting.mojom.FloatSpec, nullable: true, minVersion: 0 },
        { name: 'wheel_delta_y', packedOffset: 32, packedBitOffset: 0, type: remoting.mojom.FloatSpec, nullable: true, minVersion: 0 },
        { name: 'wheel_ticks_x', packedOffset: 40, packedBitOffset: 0, type: remoting.mojom.FloatSpec, nullable: true, minVersion: 0 },
        { name: 'wheel_ticks_y', packedOffset: 48, packedBitOffset: 0, type: remoting.mojom.FloatSpec, nullable: true, minVersion: 0 },
        { name: 'delta_x', packedOffset: 56, packedBitOffset: 0, type: remoting.mojom.Int32Spec, nullable: true, minVersion: 0 },
        { name: 'delta_y', packedOffset: 64, packedBitOffset: 0, type: remoting.mojom.Int32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 88}]
    }
  }
};

// Struct: TextEvent
remoting.mojom.TextEventSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.TextEvent',
      packedSize: 16,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TouchEventPoint
remoting.mojom.TouchEventPointSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.TouchEventPoint',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'radius', packedOffset: 8, packedBitOffset: 0, type: gfx.mojom.PointFSpec, nullable: false, minVersion: 0 },
        { name: 'angle', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'pressure', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: TouchEvent
remoting.mojom.TouchEventSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.TouchEvent',
      packedSize: 24,
      fields: [
        { name: 'event_type', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.TouchEventTypeSpec, nullable: false, minVersion: 0 },
        { name: 'touch_points', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(remoting.mojom.TouchEventPointSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FractionalCoordinate
remoting.mojom.FractionalCoordinateSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FractionalCoordinate',
      packedSize: 24,
      fields: [
        { name: 'x', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'y', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'screen_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: DesktopEnvironmentOptions
remoting.mojom.DesktopEnvironmentOptionsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopEnvironmentOptions',
      packedSize: 24,
      fields: [
        { name: 'enable_curtaining', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_user_interface', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_notifications', packedOffset: 8, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'terminate_upon_input', packedOffset: 8, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'enable_remote_webauthn', packedOffset: 8, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'desktop_capture_options', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.DesktopCaptureOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ScreenResolution
remoting.mojom.ScreenResolutionSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.ScreenResolution',
      packedSize: 24,
      fields: [
        { name: 'dimensions', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.DesktopSizeSpec, nullable: false, minVersion: 0 },
        { name: 'dpi', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FileTransferError
remoting.mojom.FileTransferErrorSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileTransferError',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: BeginFileReadSuccess
remoting.mojom.BeginFileReadSuccessSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.BeginFileReadSuccess',
      packedSize: 32,
      fields: [
        { name: 'file_reader', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(remoting.mojom.FileReaderRemote), nullable: false, minVersion: 0 },
        { name: 'filename', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BeginFileWriteSuccess
remoting.mojom.BeginFileWriteSuccessSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.BeginFileWriteSuccess',
      packedSize: 16,
      fields: [
        { name: 'file_writer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(remoting.mojom.FileWriterRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: CreateVideoCapturerResult
remoting.mojom.CreateVideoCapturerResultSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.CreateVideoCapturerResult',
      packedSize: 24,
      fields: [
        { name: 'video_capturer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(remoting.mojom.VideoCapturerRemote), nullable: false, minVersion: 0 },
        { name: 'video_capturer_event_handler', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(remoting.mojom.VideoCapturerEventHandlerRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: VideoTrackLayout
remoting.mojom.VideoTrackLayoutSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoTrackLayout',
      packedSize: 56,
      fields: [
        { name: 'screen_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'media_stream_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'position', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.PointSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 24, packedBitOffset: 0, type: remoting.mojom.DesktopSizeSpec, nullable: false, minVersion: 0 },
        { name: 'dpi', packedOffset: 32, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false, minVersion: 0 },
        { name: 'display_name', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: VideoLayout
remoting.mojom.VideoLayoutSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoLayout',
      packedSize: 32,
      fields: [
        { name: 'tracks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(remoting.mojom.VideoTrackLayoutSpec, false), nullable: false, minVersion: 0 },
        { name: 'supports_full_desktop_capture', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'primary_screen_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SourceLocation
remoting.mojom.SourceLocationSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.SourceLocation',
      packedSize: 32,
      fields: [
        { name: 'function_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'file_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'line_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Interface: DesktopSessionRequestHandler
remoting.mojom.DesktopSessionRequestHandler = {};

remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'desktop_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
};

remoting.mojom.DesktopSessionRequestHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connectDesktopChannel(desktop_pipe) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec,
      null,
      [desktop_pipe]);
  }

  injectSecureAttentionSequence() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec,
      null,
      []);
  }

  crashNetworkProcess() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec,
      null,
      []);
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

// ParamsSpec for ConnectDesktopChannel
remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionRequestHandler.ConnectDesktopChannel_Params',
      packedSize: 16,
      fields: [
        { name: 'desktop_pipe', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InjectSecureAttentionSequence
remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionRequestHandler.InjectSecureAttentionSequence_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for CrashNetworkProcess
remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionRequestHandler.CrashNetworkProcess_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
remoting.mojom.DesktopSessionRequestHandlerPtr = remoting.mojom.DesktopSessionRequestHandlerRemote;
remoting.mojom.DesktopSessionRequestHandlerRequest = remoting.mojom.DesktopSessionRequestHandlerPendingReceiver;


// Interface: DesktopSessionManager
remoting.mojom.DesktopSessionManager = {};

remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionManager_CreateDesktopSession_Params',
      packedSize: 24,
      fields: [
        { name: 'terminal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'screen_resolution', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
        { name: 'is_virtual_terminal', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionManager_CloseDesktopSession_Params',
      packedSize: 16,
      fields: [
        { name: 'terminal_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionManager_SetScreenResolution_Params',
      packedSize: 24,
      fields: [
        { name: 'terminal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'screen_resolution', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
};

remoting.mojom.DesktopSessionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createDesktopSession(terminal_id, screen_resolution, is_virtual_terminal) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec,
      null,
      [terminal_id, screen_resolution, is_virtual_terminal]);
  }

  closeDesktopSession(terminal_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec,
      null,
      [terminal_id]);
  }

  setScreenResolution(terminal_id, screen_resolution) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec,
      null,
      [terminal_id, screen_resolution]);
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

// ParamsSpec for CreateDesktopSession
remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionManager.CreateDesktopSession_Params',
      packedSize: 24,
      fields: [
        { name: 'terminal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'screen_resolution', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
        { name: 'is_virtual_terminal', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseDesktopSession
remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionManager.CloseDesktopSession_Params',
      packedSize: 16,
      fields: [
        { name: 'terminal_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScreenResolution
remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionManager.SetScreenResolution_Params',
      packedSize: 24,
      fields: [
        { name: 'terminal_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'screen_resolution', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
remoting.mojom.DesktopSessionManagerPtr = remoting.mojom.DesktopSessionManagerRemote;
remoting.mojom.DesktopSessionManagerRequest = remoting.mojom.DesktopSessionManagerPendingReceiver;


// Interface: DesktopSessionAgent
remoting.mojom.DesktopSessionAgent = {};

remoting.mojom.DesktopSessionAgent_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionAgent_Start_Params',
      packedSize: 32,
      fields: [
        { name: 'authenticated_jid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'resolution', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.DesktopEnvironmentOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
};

remoting.mojom.DesktopSessionAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  start(authenticated_jid, resolution, options) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.DesktopSessionAgent_Start_ParamsSpec,
      remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec,
      [authenticated_jid, resolution, options]);
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

// ParamsSpec for Start
remoting.mojom.DesktopSessionAgent_Start_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionAgent.Start_Params',
      packedSize: 32,
      fields: [
        { name: 'authenticated_jid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'resolution', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
        { name: 'options', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.DesktopEnvironmentOptionsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionAgent.Start_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'desktop_session_control', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceProxy(remoting.mojom.DesktopSessionControlRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.DesktopSessionAgentPtr = remoting.mojom.DesktopSessionAgentRemote;
remoting.mojom.DesktopSessionAgentRequest = remoting.mojom.DesktopSessionAgentPendingReceiver;


// Interface: FileWriter
remoting.mojom.FileWriter = {};

remoting.mojom.FileWriter_WriteChunk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileWriter_WriteChunk_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.FileWriter_CloseFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileWriter_CloseFile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
};

remoting.mojom.FileWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  writeChunk(data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.FileWriter_WriteChunk_ParamsSpec,
      remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec,
      [data]);
  }

  closeFile() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.FileWriter_CloseFile_ParamsSpec,
      remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec,
      []);
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

// ParamsSpec for WriteChunk
remoting.mojom.FileWriter_WriteChunk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileWriter.WriteChunk_Params',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint8, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileWriter.WriteChunk_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.FileTransferErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseFile
remoting.mojom.FileWriter_CloseFile_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileWriter.CloseFile_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileWriter.CloseFile_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.FileTransferErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.FileWriterPtr = remoting.mojom.FileWriterRemote;
remoting.mojom.FileWriterRequest = remoting.mojom.FileWriterPendingReceiver;


// Interface: FileReader
remoting.mojom.FileReader = {};

remoting.mojom.FileReader_ReadChunk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileReader_ReadChunk_Params',
      packedSize: 16,
      fields: [
        { name: 'bytes_to_read', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
};

remoting.mojom.FileReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  readChunk(bytes_to_read) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.FileReader_ReadChunk_ParamsSpec,
      remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec,
      [bytes_to_read]);
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

// ParamsSpec for ReadChunk
remoting.mojom.FileReader_ReadChunk_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileReader.ReadChunk_Params',
      packedSize: 16,
      fields: [
        { name: 'bytes_to_read', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.FileReader.ReadChunk_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ReadChunkResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
remoting.mojom.FileReaderPtr = remoting.mojom.FileReaderRemote;
remoting.mojom.FileReaderRequest = remoting.mojom.FileReaderPendingReceiver;


// Interface: DesktopSessionControl
remoting.mojom.DesktopSessionControl = {};

remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_CreateVideoCapturer_Params',
      packedSize: 16,
      fields: [
        { name: 'desktop_display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_SetScreenResolution_Params',
      packedSize: 16,
      fields: [
        { name: 'new_resolution', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_LockWorkstation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_InjectClipboardEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ClipboardEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_InjectKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.KeyEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_InjectMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.MouseEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_InjectTextEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.TextEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_InjectTouchEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.TouchEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_BeginFileRead_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_BeginFileWrite_Params',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
};

remoting.mojom.DesktopSessionControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createVideoCapturer(desktop_display_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec,
      remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec,
      [desktop_display_id]);
  }

  setScreenResolution(new_resolution) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec,
      null,
      [new_resolution]);
  }

  lockWorkstation() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec,
      null,
      []);
  }

  injectSendAttentionSequence() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec,
      null,
      []);
  }

  injectClipboardEvent(event) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec,
      null,
      [event]);
  }

  injectKeyEvent(event) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec,
      null,
      [event]);
  }

  injectMouseEvent(event) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec,
      null,
      [event]);
  }

  injectTextEvent(event) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec,
      null,
      [event]);
  }

  injectTouchEvent(event) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec,
      null,
      [event]);
  }

  setUpUrlForwarder() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec,
      null,
      []);
  }

  signalWebAuthnExtension() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec,
      null,
      []);
  }

  beginFileRead() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec,
      remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec,
      []);
  }

  beginFileWrite(file_path) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec,
      remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec,
      [file_path]);
  }

  setHostCursorRenderedByClient() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec,
      null,
      []);
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

// ParamsSpec for CreateVideoCapturer
remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.CreateVideoCapturer_Params',
      packedSize: 16,
      fields: [
        { name: 'desktop_display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.CreateVideoCapturer_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.CreateVideoCapturerResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetScreenResolution
remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.SetScreenResolution_Params',
      packedSize: 16,
      fields: [
        { name: 'new_resolution', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ScreenResolutionSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LockWorkstation
remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.LockWorkstation_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for InjectSendAttentionSequence
remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.InjectSendAttentionSequence_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for InjectClipboardEvent
remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.InjectClipboardEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ClipboardEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InjectKeyEvent
remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.InjectKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.KeyEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InjectMouseEvent
remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.InjectMouseEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.MouseEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InjectTextEvent
remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.InjectTextEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.TextEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for InjectTouchEvent
remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.InjectTouchEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.TouchEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetUpUrlForwarder
remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.SetUpUrlForwarder_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SignalWebAuthnExtension
remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.SignalWebAuthnExtension_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for BeginFileRead
remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.BeginFileRead_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.BeginFileRead_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.BeginFileReadResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for BeginFileWrite
remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.BeginFileWrite_Params',
      packedSize: 16,
      fields: [
        { name: 'file_path', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.BeginFileWrite_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.BeginFileWriteResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetHostCursorRenderedByClient
remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionControl.SetHostCursorRenderedByClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
remoting.mojom.DesktopSessionControlPtr = remoting.mojom.DesktopSessionControlRemote;
remoting.mojom.DesktopSessionControlRequest = remoting.mojom.DesktopSessionControlPendingReceiver;


// Interface: VideoCapturer
remoting.mojom.VideoCapturer = {};

remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturer_CaptureFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturer_SetComposeEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
};

remoting.mojom.VideoCapturerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  captureFrame() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec,
      null,
      []);
  }

  setComposeEnabled(enabled) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec,
      null,
      [enabled]);
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

// ParamsSpec for CaptureFrame
remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturer.CaptureFrame_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SetComposeEnabled
remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturer.SetComposeEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.VideoCapturerPtr = remoting.mojom.VideoCapturerRemote;
remoting.mojom.VideoCapturerRequest = remoting.mojom.VideoCapturerPendingReceiver;


// Interface: VideoCapturerEventHandler
remoting.mojom.VideoCapturerEventHandler = {};

remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.CaptureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

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
};

remoting.mojom.VideoCapturerEventHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onSharedMemoryRegionCreated(id, region, size) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec,
      null,
      [id, region, size]);
  }

  onSharedMemoryRegionReleased(id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec,
      null,
      [id]);
  }

  onCaptureResult(result) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec,
      null,
      [result]);
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

// ParamsSpec for OnSharedMemoryRegionCreated
remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturerEventHandler.OnSharedMemoryRegionCreated_Params',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnSharedMemoryRegionReleased
remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturerEventHandler.OnSharedMemoryRegionReleased_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnCaptureResult
remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.VideoCapturerEventHandler.OnCaptureResult_Params',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.CaptureResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
remoting.mojom.VideoCapturerEventHandlerPtr = remoting.mojom.VideoCapturerEventHandlerRemote;
remoting.mojom.VideoCapturerEventHandlerRequest = remoting.mojom.VideoCapturerEventHandlerPendingReceiver;


// Interface: DesktopSessionEventHandler
remoting.mojom.DesktopSessionEventHandler = {};

remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ClipboardEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.UrlForwarderStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_packet', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.AudioPacketSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'layout', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.VideoLayoutSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mouse_cursor', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.MouseCursorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.FractionalCoordinateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'keyboard_layout', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.KeyboardLayoutSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_Params',
      packedSize: 16,
      fields: [
        { name: 'new_position', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_Params',
      packedSize: 16,
      fields: [
        { name: 'usb_keycode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
};

remoting.mojom.DesktopSessionEventHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onClipboardEvent(event) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec,
      null,
      [event]);
  }

  onUrlForwarderStateChange(state) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec,
      null,
      [state]);
  }

  onAudioPacket(audio_packet) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec,
      null,
      [audio_packet]);
  }

  onDesktopDisplayChanged(layout) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec,
      null,
      [layout]);
  }

  onMouseCursorChanged(mouse_cursor) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec,
      null,
      [mouse_cursor]);
  }

  onMouseCursorFractionalPositionChanged(position) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec,
      null,
      [position]);
  }

  onKeyboardLayoutChanged(keyboard_layout) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec,
      null,
      [keyboard_layout]);
  }

  onLocalMouseMoveDetected(new_position) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec,
      null,
      [new_position]);
  }

  onLocalKeyboardInputDetected(usb_keycode) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec,
      null,
      [usb_keycode]);
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

// ParamsSpec for OnClipboardEvent
remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnClipboardEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'event', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.ClipboardEventSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnUrlForwarderStateChange
remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnUrlForwarderStateChange_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.UrlForwarderStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnAudioPacket
remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnAudioPacket_Params',
      packedSize: 16,
      fields: [
        { name: 'audio_packet', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.AudioPacketSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnDesktopDisplayChanged
remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnDesktopDisplayChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'layout', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.VideoLayoutSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMouseCursorChanged
remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnMouseCursorChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'mouse_cursor', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.MouseCursorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnMouseCursorFractionalPositionChanged
remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnMouseCursorFractionalPositionChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'position', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.FractionalCoordinateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnKeyboardLayoutChanged
remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnKeyboardLayoutChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'keyboard_layout', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.KeyboardLayoutSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLocalMouseMoveDetected
remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnLocalMouseMoveDetected_Params',
      packedSize: 16,
      fields: [
        { name: 'new_position', packedOffset: 0, packedBitOffset: 0, type: remoting.mojom.DesktopVectorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLocalKeyboardInputDetected
remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionEventHandler.OnLocalKeyboardInputDetected_Params',
      packedSize: 16,
      fields: [
        { name: 'usb_keycode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
remoting.mojom.DesktopSessionEventHandlerPtr = remoting.mojom.DesktopSessionEventHandlerRemote;
remoting.mojom.DesktopSessionEventHandlerRequest = remoting.mojom.DesktopSessionEventHandlerPendingReceiver;


// Interface: DesktopSessionStateHandler
remoting.mojom.DesktopSessionStateHandler = {};

remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionStateHandler_DisconnectSession_Params',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.ProtocolErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'error_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_location', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.SourceLocationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
};

remoting.mojom.DesktopSessionStateHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  disconnectSession(error_code, error_details, error_location) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec,
      null,
      [error_code, error_details, error_location]);
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

// ParamsSpec for DisconnectSession
remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.DesktopSessionStateHandler.DisconnectSession_Params',
      packedSize: 32,
      fields: [
        { name: 'error_code', packedOffset: 16, packedBitOffset: 0, type: remoting.mojom.ProtocolErrorCodeSpec, nullable: false, minVersion: 0 },
        { name: 'error_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_location', packedOffset: 8, packedBitOffset: 0, type: remoting.mojom.SourceLocationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
remoting.mojom.DesktopSessionStateHandlerPtr = remoting.mojom.DesktopSessionStateHandlerRemote;
remoting.mojom.DesktopSessionStateHandlerRequest = remoting.mojom.DesktopSessionStateHandlerPendingReceiver;


// Interface: WorkerProcessControl
remoting.mojom.WorkerProcessControl = {};

remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WorkerProcessControl_CrashProcess_Params',
      packedSize: 32,
      fields: [
        { name: 'function_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'file_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'line_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

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
};

remoting.mojom.WorkerProcessControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  crashProcess(function_name, file_name, line_number) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec,
      null,
      [function_name, file_name, line_number]);
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

// ParamsSpec for CrashProcess
remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remoting.mojom.WorkerProcessControl.CrashProcess_Params',
      packedSize: 32,
      fields: [
        { name: 'function_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'file_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'line_number', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Legacy compatibility
remoting.mojom.WorkerProcessControlPtr = remoting.mojom.WorkerProcessControlRemote;
remoting.mojom.WorkerProcessControlRequest = remoting.mojom.WorkerProcessControlPendingReceiver;

