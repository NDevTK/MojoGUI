// Auto-generated MojoJS binding
 // Source: chromium_src/remoting/host/mojom/desktop_session.mojom
 // Module: remoting.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.remoting = mojo.internal.bindings.remoting || {};
mojo.internal.bindings.remoting.mojom = mojo.internal.bindings.remoting.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};

mojo.internal.bindings.remoting.mojom.EncodingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.SamplingRateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.BytesPerSampleSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.ChannelsSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.MouseButtonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.TouchEventTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.UrlForwarderStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.TypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.ProtocolErrorCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.remoting.mojom.ReadChunkResultSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileChooserResultSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.BeginFileReadResultSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.BeginFileWriteResultSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.CaptureResultSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.AudioPacketSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.ClipboardEventSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.KeyEventSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.MouseEventSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.TextEventSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.TouchEventPointSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.TouchEventSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FractionalCoordinateSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopEnvironmentOptionsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.ScreenResolutionSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.BeginFileReadSuccessSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.BeginFileWriteSuccessSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.CreateVideoCapturerResultSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.VideoTrackLayoutSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.VideoLayoutSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.SourceLocationSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler = {};
mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler.$interfaceName = 'remoting.mojom.DesktopSessionRequestHandler';
mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionManager = {};
mojo.internal.bindings.remoting.mojom.DesktopSessionManagerSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionManager.$interfaceName = 'remoting.mojom.DesktopSessionManager';
mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionAgent = {};
mojo.internal.bindings.remoting.mojom.DesktopSessionAgentSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionAgent.$interfaceName = 'remoting.mojom.DesktopSessionAgent';
mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileWriter = {};
mojo.internal.bindings.remoting.mojom.FileWriterSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.FileWriter.$interfaceName = 'remoting.mojom.FileWriter';
mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileReader = {};
mojo.internal.bindings.remoting.mojom.FileReaderSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.FileReader.$interfaceName = 'remoting.mojom.FileReader';
mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl = {};
mojo.internal.bindings.remoting.mojom.DesktopSessionControlSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl.$interfaceName = 'remoting.mojom.DesktopSessionControl';
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.VideoCapturer = {};
mojo.internal.bindings.remoting.mojom.VideoCapturerSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.VideoCapturer.$interfaceName = 'remoting.mojom.VideoCapturer';
mojo.internal.bindings.remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler = {};
mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler.$interfaceName = 'remoting.mojom.VideoCapturerEventHandler';
mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler = {};
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler.$interfaceName = 'remoting.mojom.DesktopSessionEventHandler';
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler = {};
mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler.$interfaceName = 'remoting.mojom.DesktopSessionStateHandler';
mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec = { $: {} };
mojo.internal.bindings.remoting.mojom.WorkerProcessControl = {};
mojo.internal.bindings.remoting.mojom.WorkerProcessControlSpec = { $ : {} };
mojo.internal.bindings.remoting.mojom.WorkerProcessControl.$interfaceName = 'remoting.mojom.WorkerProcessControl';
mojo.internal.bindings.remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec = { $: {} };

// Enum: Encoding
mojo.internal.bindings.remoting.mojom.Encoding = {
  kInvalid: -1,
  kRaw: 0,
  kOpus: 1,
};

// Enum: SamplingRate
mojo.internal.bindings.remoting.mojom.SamplingRate = {
  kInvalid: -1,
  kRate_44100: 44100,
  kRate_48000: 48000,
};

// Enum: BytesPerSample
mojo.internal.bindings.remoting.mojom.BytesPerSample = {
  kInvalid: -1,
  kBytesPerSample_2: 2,
};

// Enum: Channels
mojo.internal.bindings.remoting.mojom.Channels = {
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
mojo.internal.bindings.remoting.mojom.MouseButton = {
  kUndefined: 0,
  kLeft: 1,
  kMiddle: 2,
  kRight: 3,
  kBack: 4,
  kForward: 5,
};

// Enum: TouchEventType
mojo.internal.bindings.remoting.mojom.TouchEventType = {
  kUndefined: 0,
  kStart: 1,
  kMove: 2,
  kEnd: 3,
  kCancel: 4,
};

// Enum: UrlForwarderState
mojo.internal.bindings.remoting.mojom.UrlForwarderState = {
  kUnknown: 0,
  kSetUp: 1,
  kNotSetUp: 2,
  kFailed: 3,
  kSetupPendingUserIntervention: 4,
};

// Enum: Type
mojo.internal.bindings.remoting.mojom.Type = {
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
mojo.internal.bindings.remoting.mojom.ProtocolErrorCode = {
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
    mojo.internal.bindings.remoting.mojom.ReadChunkResultSpec, 'remoting.mojom.ReadChunkResult', {
      'arg_data': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: FileChooserResult
mojo.internal.Union(
    mojo.internal.bindings.remoting.mojom.FileChooserResultSpec, 'remoting.mojom.FileChooserResult', {
      'arg_filepath': {
        'ordinal': 0,
        'type': mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BeginFileReadResult
mojo.internal.Union(
    mojo.internal.bindings.remoting.mojom.BeginFileReadResultSpec, 'remoting.mojom.BeginFileReadResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.remoting.mojom.BeginFileReadSuccessSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: BeginFileWriteResult
mojo.internal.Union(
    mojo.internal.bindings.remoting.mojom.BeginFileWriteResultSpec, 'remoting.mojom.BeginFileWriteResult', {
      'arg_success': {
        'ordinal': 0,
        'type': mojo.internal.bindings.remoting.mojom.BeginFileWriteSuccessSpec.$,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec.$,
        'nullable': false,
      },
    });

// Union: CaptureResult
mojo.internal.Union(
    mojo.internal.bindings.remoting.mojom.CaptureResultSpec, 'remoting.mojom.CaptureResult', {
      'arg_desktop_frame': {
        'ordinal': 0,
        'type': mojo.internal.bindings.remoting.mojom.DesktopFrameSpec.$,
        'nullable': false,
      },
      'arg_capture_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.remoting.mojom.DesktopCaptureResultSpec.$,
        'nullable': false,
      },
    });

// Struct: AudioPacket
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.AudioPacketSpec, 'remoting.mojom.AudioPacket', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_kInvalid', 8, 0, mojo.internal.Pointer, -1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_timestamp', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ClipboardEvent
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.ClipboardEventSpec, 'remoting.mojom.ClipboardEvent', [
      mojo.internal.StructField('arg_mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeyEvent
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.KeyEventSpec, 'remoting.mojom.KeyEvent', [
      mojo.internal.StructField('arg_caps_lock_state', 0, 0, mojo.internal.bindings.remoting.mojom.BoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_num_lock_state', 8, 0, mojo.internal.bindings.remoting.mojom.BoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_usb_keycode', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lock_states', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pressed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: MouseEvent
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.MouseEventSpec, 'remoting.mojom.MouseEvent', [
      mojo.internal.StructField('arg_x', 0, 0, mojo.internal.bindings.remoting.mojom.Int32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_y', 8, 0, mojo.internal.bindings.remoting.mojom.Int32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_button', 16, 0, mojo.internal.bindings.remoting.mojom.MouseButtonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_button_down', 24, 0, mojo.internal.bindings.remoting.mojom.BoolSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wheel_delta_x', 32, 0, mojo.internal.bindings.remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wheel_delta_y', 40, 0, mojo.internal.bindings.remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wheel_ticks_x', 48, 0, mojo.internal.bindings.remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_wheel_ticks_y', 56, 0, mojo.internal.bindings.remoting.mojom.FloatSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_delta_x', 64, 0, mojo.internal.bindings.remoting.mojom.Int32Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_delta_y', 72, 0, mojo.internal.bindings.remoting.mojom.Int32Spec.$, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: TextEvent
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.TextEventSpec, 'remoting.mojom.TextEvent', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TouchEventPoint
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.TouchEventPointSpec, 'remoting.mojom.TouchEventPoint', [
      mojo.internal.StructField('arg_position', 0, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_radius', 8, 0, mojo.internal.bindings.gfx.mojom.PointFSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_angle', 20, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pressure', 24, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: TouchEvent
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.TouchEventSpec, 'remoting.mojom.TouchEvent', [
      mojo.internal.StructField('arg_event_type', 0, 0, mojo.internal.bindings.remoting.mojom.TouchEventTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_touch_points', 8, 0, mojo.internal.Array(mojo.internal.bindings.remoting.mojom.TouchEventPointSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FractionalCoordinate
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FractionalCoordinateSpec, 'remoting.mojom.FractionalCoordinate', [
      mojo.internal.StructField('arg_screen_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_x', 8, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_y', 12, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: DesktopEnvironmentOptions
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopEnvironmentOptionsSpec, 'remoting.mojom.DesktopEnvironmentOptions', [
      mojo.internal.StructField('arg_desktop_capture_options', 0, 0, mojo.internal.bindings.remoting.mojom.DesktopCaptureOptionsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_enable_curtaining', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_user_interface', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_notifications', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_terminate_upon_input', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_remote_webauthn', 8, 4, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScreenResolution
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.ScreenResolutionSpec, 'remoting.mojom.ScreenResolution', [
      mojo.internal.StructField('arg_dimensions', 0, 0, mojo.internal.bindings.remoting.mojom.DesktopSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dpi', 8, 0, mojo.internal.bindings.remoting.mojom.DesktopVectorSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FileTransferError
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec, 'remoting.mojom.FileTransferError', [
      mojo.internal.StructField('arg_kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
      mojo.internal.StructField('arg_val', 8, 0, mojo.internal.Pointer, 1, false, 0, undefined),
      mojo.internal.StructField('arg_val', 16, 0, mojo.internal.Pointer, 2, false, 0, undefined),
      mojo.internal.StructField('arg_val', 24, 0, mojo.internal.Pointer, 3, false, 0, undefined),
      mojo.internal.StructField('arg_val', 32, 0, mojo.internal.Pointer, 4, false, 0, undefined),
      mojo.internal.StructField('arg_val', 40, 0, mojo.internal.Pointer, 5, false, 0, undefined),
      mojo.internal.StructField('arg_val', 48, 0, mojo.internal.Pointer, 6, false, 0, undefined),
      mojo.internal.StructField('arg_val', 56, 0, mojo.internal.Pointer, 7, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: BeginFileReadSuccess
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.BeginFileReadSuccessSpec, 'remoting.mojom.BeginFileReadSuccess', [
      mojo.internal.StructField('arg_file_reader', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.remoting.mojom.FileReaderRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_filename', 8, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BeginFileWriteSuccess
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.BeginFileWriteSuccessSpec, 'remoting.mojom.BeginFileWriteSuccess', [
      mojo.internal.StructField('arg_file_writer', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.remoting.mojom.FileWriterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CreateVideoCapturerResult
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.CreateVideoCapturerResultSpec, 'remoting.mojom.CreateVideoCapturerResult', [
      mojo.internal.StructField('arg_video_capturer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.remoting.mojom.VideoCapturerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_video_capturer_event_handler', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: VideoTrackLayout
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.VideoTrackLayoutSpec, 'remoting.mojom.VideoTrackLayout', [
      mojo.internal.StructField('arg_screen_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_media_stream_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_position', 16, 0, mojo.internal.bindings.gfx.mojom.PointSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 24, 0, mojo.internal.bindings.remoting.mojom.DesktopSizeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_dpi', 32, 0, mojo.internal.bindings.remoting.mojom.DesktopVectorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VideoLayout
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.VideoLayoutSpec, 'remoting.mojom.VideoLayout', [
      mojo.internal.StructField('arg_tracks', 0, 0, mojo.internal.Array(mojo.internal.bindings.remoting.mojom.VideoTrackLayoutSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_primary_screen_id', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_supports_full_desktop_capture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SourceLocation
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.SourceLocationSpec, 'remoting.mojom.SourceLocation', [
      mojo.internal.StructField('arg_function_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_file_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_line_number', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: DesktopSessionRequestHandler
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec, 'remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_Params', [
      mojo.internal.StructField('arg_desktop_pipe', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec, 'remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec, 'remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionRequestHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  connectDesktopChannel(arg_desktop_pipe) {
    return this.$.connectDesktopChannel(arg_desktop_pipe);
  }
  injectSecureAttentionSequence() {
    return this.$.injectSecureAttentionSequence();
  }
  crashNetworkProcess() {
    return this.$.crashNetworkProcess();
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionRequestHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  connectDesktopChannel(arg_desktop_pipe) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec,
      null,
      [arg_desktop_pipe],
      false);
  }

  injectSecureAttentionSequence() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec,
      null,
      [],
      false);
  }

  crashNetworkProcess() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionRequestHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionRequestHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ConnectDesktopChannel
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConnectDesktopChannel (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: InjectSecureAttentionSequence
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectSecureAttentionSequence (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: CrashNetworkProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CrashNetworkProcess (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_ConnectDesktopChannel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.connectDesktopChannel');
          const result = this.impl.connectDesktopChannel(params.arg_desktop_pipe);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_InjectSecureAttentionSequence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectSecureAttentionSequence');
          const result = this.impl.injectSecureAttentionSequence();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandler_CrashNetworkProcess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.crashNetworkProcess');
          const result = this.impl.crashNetworkProcess();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerReceiver = mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerReceiver;

mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerPtr = mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerRemote;
mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerRequest = mojo.internal.bindings.remoting.mojom.DesktopSessionRequestHandlerPendingReceiver;


// Interface: DesktopSessionManager
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec, 'remoting.mojom.DesktopSessionManager_CreateDesktopSession_Params', [
      mojo.internal.StructField('arg_screen_resolution', 0, 0, mojo.internal.bindings.remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_terminal_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_virtual_terminal', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec, 'remoting.mojom.DesktopSessionManager_CloseDesktopSession_Params', [
      mojo.internal.StructField('arg_terminal_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec, 'remoting.mojom.DesktopSessionManager_SetScreenResolution_Params', [
      mojo.internal.StructField('arg_screen_resolution', 0, 0, mojo.internal.bindings.remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_terminal_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.remoting.mojom.DesktopSessionManagerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionManagerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionManager';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.DesktopSessionManagerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.DesktopSessionManagerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createDesktopSession(arg_terminal_id, arg_screen_resolution, arg_is_virtual_terminal) {
    return this.$.createDesktopSession(arg_terminal_id, arg_screen_resolution, arg_is_virtual_terminal);
  }
  closeDesktopSession(arg_terminal_id) {
    return this.$.closeDesktopSession(arg_terminal_id);
  }
  setScreenResolution(arg_terminal_id, arg_screen_resolution) {
    return this.$.setScreenResolution(arg_terminal_id, arg_screen_resolution);
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionManagerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createDesktopSession(arg_terminal_id, arg_screen_resolution, arg_is_virtual_terminal) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec,
      null,
      [arg_terminal_id, arg_screen_resolution, arg_is_virtual_terminal],
      false);
  }

  closeDesktopSession(arg_terminal_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec,
      null,
      [arg_terminal_id],
      false);
  }

  setScreenResolution(arg_terminal_id, arg_screen_resolution) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec,
      null,
      [arg_terminal_id, arg_screen_resolution],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.DesktopSessionManager.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.DesktopSessionManagerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionManager',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.DesktopSessionManagerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionManager', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateDesktopSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateDesktopSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseDesktopSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseDesktopSession (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: SetScreenResolution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenResolution (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CreateDesktopSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createDesktopSession');
          const result = this.impl.createDesktopSession(params.arg_terminal_id, params.arg_screen_resolution, params.arg_is_virtual_terminal);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionManager_CloseDesktopSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeDesktopSession');
          const result = this.impl.closeDesktopSession(params.arg_terminal_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionManager_SetScreenResolution_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScreenResolution');
          const result = this.impl.setScreenResolution(params.arg_terminal_id, params.arg_screen_resolution);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionManagerReceiver = mojo.internal.bindings.remoting.mojom.DesktopSessionManagerReceiver;

mojo.internal.bindings.remoting.mojom.DesktopSessionManagerPtr = mojo.internal.bindings.remoting.mojom.DesktopSessionManagerRemote;
mojo.internal.bindings.remoting.mojom.DesktopSessionManagerRequest = mojo.internal.bindings.remoting.mojom.DesktopSessionManagerPendingReceiver;


// Interface: DesktopSessionAgent
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ParamsSpec, 'remoting.mojom.DesktopSessionAgent_Start_Params', [
      mojo.internal.StructField('arg_authenticated_jid', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_resolution', 8, 0, mojo.internal.bindings.remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 16, 0, mojo.internal.bindings.remoting.mojom.DesktopEnvironmentOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec, 'remoting.mojom.DesktopSessionAgent_Start_ResponseParams', [
      mojo.internal.StructField('arg_desktop_session_control', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.remoting.mojom.DesktopSessionControlRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remoting.mojom.DesktopSessionAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionAgentRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.DesktopSessionAgentPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.DesktopSessionAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  start(arg_authenticated_jid, arg_resolution, arg_options) {
    return this.$.start(arg_authenticated_jid, arg_resolution, arg_options);
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionAgent', [
      { explicit: null },
    ]);
  }

  start(arg_authenticated_jid, arg_resolution, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ParamsSpec,
      mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec,
      [arg_authenticated_jid, arg_resolution, arg_options],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.DesktopSessionAgent.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.DesktopSessionAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionAgent',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.DesktopSessionAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionAgent', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Start
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Start (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.start');
          const result = this.impl.start(params.arg_authenticated_jid, params.arg_resolution, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remoting.mojom.DesktopSessionAgent_Start_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] Start FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionAgentReceiver = mojo.internal.bindings.remoting.mojom.DesktopSessionAgentReceiver;

mojo.internal.bindings.remoting.mojom.DesktopSessionAgentPtr = mojo.internal.bindings.remoting.mojom.DesktopSessionAgentRemote;
mojo.internal.bindings.remoting.mojom.DesktopSessionAgentRequest = mojo.internal.bindings.remoting.mojom.DesktopSessionAgentPendingReceiver;


// Interface: FileWriter
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ParamsSpec, 'remoting.mojom.FileWriter_WriteChunk_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec, 'remoting.mojom.FileWriter_WriteChunk_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ParamsSpec, 'remoting.mojom.FileWriter_CloseFile_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec, 'remoting.mojom.FileWriter_CloseFile_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.remoting.mojom.FileTransferErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remoting.mojom.FileWriterPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.FileWriterRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.FileWriter';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.FileWriterPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.FileWriterRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  writeChunk(arg_data) {
    return this.$.writeChunk(arg_data);
  }
  closeFile() {
    return this.$.closeFile();
  }
};

mojo.internal.bindings.remoting.mojom.FileWriterRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.FileWriter', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  writeChunk(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ParamsSpec,
      mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec,
      [arg_data],
      false);
  }

  closeFile() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ParamsSpec,
      mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.FileWriter.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.FileWriterRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.FileWriter',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.FileWriterReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.FileWriter', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: WriteChunk
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WriteChunk (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseFile
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseFile (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.writeChunk');
          const result = this.impl.writeChunk(params.arg_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remoting.mojom.FileWriter_WriteChunk_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] WriteChunk FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeFile');
          const result = this.impl.closeFile();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remoting.mojom.FileWriter_CloseFile_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseFile FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.FileWriterReceiver = mojo.internal.bindings.remoting.mojom.FileWriterReceiver;

mojo.internal.bindings.remoting.mojom.FileWriterPtr = mojo.internal.bindings.remoting.mojom.FileWriterRemote;
mojo.internal.bindings.remoting.mojom.FileWriterRequest = mojo.internal.bindings.remoting.mojom.FileWriterPendingReceiver;


// Interface: FileReader
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ParamsSpec, 'remoting.mojom.FileReader_ReadChunk_Params', [
      mojo.internal.StructField('arg_bytes_to_read', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec, 'remoting.mojom.FileReader_ReadChunk_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.remoting.mojom.ReadChunkResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remoting.mojom.FileReaderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.FileReaderRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.FileReader';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.FileReaderPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.FileReaderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  readChunk(arg_bytes_to_read) {
    return this.$.readChunk(arg_bytes_to_read);
  }
};

mojo.internal.bindings.remoting.mojom.FileReaderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.FileReader', [
      { explicit: null },
    ]);
  }

  readChunk(arg_bytes_to_read) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ParamsSpec,
      mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec,
      [arg_bytes_to_read],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.FileReader.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.FileReaderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.FileReader',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.FileReaderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.FileReader', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ReadChunk
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ReadChunk (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.readChunk');
          const result = this.impl.readChunk(params.arg_bytes_to_read);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remoting.mojom.FileReader_ReadChunk_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ReadChunk FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.FileReaderReceiver = mojo.internal.bindings.remoting.mojom.FileReaderReceiver;

mojo.internal.bindings.remoting.mojom.FileReaderPtr = mojo.internal.bindings.remoting.mojom.FileReaderRemote;
mojo.internal.bindings.remoting.mojom.FileReaderRequest = mojo.internal.bindings.remoting.mojom.FileReaderPendingReceiver;


// Interface: DesktopSessionControl
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec, 'remoting.mojom.DesktopSessionControl_CreateVideoCapturer_Params', [
      mojo.internal.StructField('arg_desktop_display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec, 'remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.remoting.mojom.CreateVideoCapturerResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SetScreenResolution_Params', [
      mojo.internal.StructField('arg_new_resolution', 0, 0, mojo.internal.bindings.remoting.mojom.ScreenResolutionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec, 'remoting.mojom.DesktopSessionControl_LockWorkstation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectClipboardEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.remoting.mojom.ClipboardEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectKeyEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.remoting.mojom.KeyEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectMouseEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.remoting.mojom.MouseEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectTextEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.remoting.mojom.TextEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec, 'remoting.mojom.DesktopSessionControl_InjectTouchEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.remoting.mojom.TouchEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileRead_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.remoting.mojom.BeginFileReadResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileWrite_Params', [
      mojo.internal.StructField('arg_file_path', 0, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec, 'remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.remoting.mojom.BeginFileWriteResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec, 'remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.remoting.mojom.DesktopSessionControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.DesktopSessionControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.DesktopSessionControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createVideoCapturer(arg_desktop_display_id) {
    return this.$.createVideoCapturer(arg_desktop_display_id);
  }
  setScreenResolution(arg_new_resolution) {
    return this.$.setScreenResolution(arg_new_resolution);
  }
  lockWorkstation() {
    return this.$.lockWorkstation();
  }
  injectSendAttentionSequence() {
    return this.$.injectSendAttentionSequence();
  }
  injectClipboardEvent(arg_event) {
    return this.$.injectClipboardEvent(arg_event);
  }
  injectKeyEvent(arg_event) {
    return this.$.injectKeyEvent(arg_event);
  }
  injectMouseEvent(arg_event) {
    return this.$.injectMouseEvent(arg_event);
  }
  injectTextEvent(arg_event) {
    return this.$.injectTextEvent(arg_event);
  }
  injectTouchEvent(arg_event) {
    return this.$.injectTouchEvent(arg_event);
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
  beginFileWrite(arg_file_path) {
    return this.$.beginFileWrite(arg_file_path);
  }
  setHostCursorRenderedByClient() {
    return this.$.setHostCursorRenderedByClient();
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionControl', [
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

  createVideoCapturer(arg_desktop_display_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec,
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec,
      [arg_desktop_display_id],
      false);
  }

  setScreenResolution(arg_new_resolution) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec,
      null,
      [arg_new_resolution],
      false);
  }

  lockWorkstation() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec,
      null,
      [],
      false);
  }

  injectSendAttentionSequence() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec,
      null,
      [],
      false);
  }

  injectClipboardEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  injectKeyEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  injectMouseEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  injectTextEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  injectTouchEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  setUpUrlForwarder() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec,
      null,
      [],
      false);
  }

  signalWebAuthnExtension() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec,
      null,
      [],
      false);
  }

  beginFileRead() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec,
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec,
      [],
      false);
  }

  beginFileWrite(arg_file_path) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec,
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec,
      [arg_file_path],
      false);
  }

  setHostCursorRenderedByClient() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.DesktopSessionControl.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.DesktopSessionControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.DesktopSessionControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionControl', [
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CreateVideoCapturer
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateVideoCapturer (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetScreenResolution
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetScreenResolution (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: LockWorkstation
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LockWorkstation (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: InjectSendAttentionSequence
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectSendAttentionSequence (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: InjectClipboardEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectClipboardEvent (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: InjectKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectKeyEvent (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: InjectMouseEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectMouseEvent (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: InjectTextEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectTextEvent (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: InjectTouchEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InjectTouchEvent (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: SetUpUrlForwarder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUpUrlForwarder (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: SignalWebAuthnExtension
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SignalWebAuthnExtension (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: BeginFileRead
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginFileRead (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: BeginFileWrite
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BeginFileWrite (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: SetHostCursorRenderedByClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetHostCursorRenderedByClient (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createVideoCapturer');
          const result = this.impl.createVideoCapturer(params.arg_desktop_display_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remoting.mojom.DesktopSessionControl_CreateVideoCapturer_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateVideoCapturer FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetScreenResolution_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScreenResolution');
          const result = this.impl.setScreenResolution(params.arg_new_resolution);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_LockWorkstation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lockWorkstation');
          const result = this.impl.lockWorkstation();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectSendAttentionSequence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectSendAttentionSequence');
          const result = this.impl.injectSendAttentionSequence();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectClipboardEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectClipboardEvent');
          const result = this.impl.injectClipboardEvent(params.arg_event);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectKeyEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectKeyEvent');
          const result = this.impl.injectKeyEvent(params.arg_event);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectMouseEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectMouseEvent');
          const result = this.impl.injectMouseEvent(params.arg_event);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTextEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectTextEvent');
          const result = this.impl.injectTextEvent(params.arg_event);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_InjectTouchEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.injectTouchEvent');
          const result = this.impl.injectTouchEvent(params.arg_event);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetUpUrlForwarder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUpUrlForwarder');
          const result = this.impl.setUpUrlForwarder();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SignalWebAuthnExtension_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.signalWebAuthnExtension');
          const result = this.impl.signalWebAuthnExtension();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginFileRead');
          const result = this.impl.beginFileRead();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileRead_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] BeginFileRead FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beginFileWrite');
          const result = this.impl.beginFileWrite(params.arg_file_path);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.remoting.mojom.DesktopSessionControl_BeginFileWrite_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] BeginFileWrite FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionControl_SetHostCursorRenderedByClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setHostCursorRenderedByClient');
          const result = this.impl.setHostCursorRenderedByClient();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionControlReceiver = mojo.internal.bindings.remoting.mojom.DesktopSessionControlReceiver;

mojo.internal.bindings.remoting.mojom.DesktopSessionControlPtr = mojo.internal.bindings.remoting.mojom.DesktopSessionControlRemote;
mojo.internal.bindings.remoting.mojom.DesktopSessionControlRequest = mojo.internal.bindings.remoting.mojom.DesktopSessionControlPendingReceiver;


// Interface: VideoCapturer
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec, 'remoting.mojom.VideoCapturer_CaptureFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec, 'remoting.mojom.VideoCapturer_SetComposeEnabled_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remoting.mojom.VideoCapturerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.VideoCapturerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.VideoCapturer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.VideoCapturerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.VideoCapturerRemoteCallHandler(this.proxy);
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
  setComposeEnabled(arg_enabled) {
    return this.$.setComposeEnabled(arg_enabled);
  }
};

mojo.internal.bindings.remoting.mojom.VideoCapturerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.VideoCapturer', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  captureFrame() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec,
      null,
      [],
      false);
  }

  setComposeEnabled(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.VideoCapturer.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.VideoCapturerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.VideoCapturer',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.VideoCapturerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.VideoCapturer', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CaptureFrame
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CaptureFrame (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetComposeEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetComposeEnabled (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturer_CaptureFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.captureFrame');
          const result = this.impl.captureFrame();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturer_SetComposeEnabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setComposeEnabled');
          const result = this.impl.setComposeEnabled(params.arg_enabled);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.VideoCapturerReceiver = mojo.internal.bindings.remoting.mojom.VideoCapturerReceiver;

mojo.internal.bindings.remoting.mojom.VideoCapturerPtr = mojo.internal.bindings.remoting.mojom.VideoCapturerRemote;
mojo.internal.bindings.remoting.mojom.VideoCapturerRequest = mojo.internal.bindings.remoting.mojom.VideoCapturerPendingReceiver;


// Interface: VideoCapturerEventHandler
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec, 'remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_Params', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec, 'remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec, 'remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.remoting.mojom.CaptureResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.VideoCapturerEventHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onSharedMemoryRegionCreated(arg_id, arg_region, arg_size) {
    return this.$.onSharedMemoryRegionCreated(arg_id, arg_region, arg_size);
  }
  onSharedMemoryRegionReleased(arg_id) {
    return this.$.onSharedMemoryRegionReleased(arg_id);
  }
  onCaptureResult(arg_result) {
    return this.$.onCaptureResult(arg_result);
  }
};

mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.VideoCapturerEventHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onSharedMemoryRegionCreated(arg_id, arg_region, arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec,
      null,
      [arg_id, arg_region, arg_size],
      false);
  }

  onSharedMemoryRegionReleased(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec,
      null,
      [arg_id],
      false);
  }

  onCaptureResult(arg_result) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec,
      null,
      [arg_result],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.VideoCapturerEventHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.VideoCapturerEventHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnSharedMemoryRegionCreated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSharedMemoryRegionCreated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSharedMemoryRegionReleased
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSharedMemoryRegionReleased (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnCaptureResult
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCaptureResult (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSharedMemoryRegionCreated');
          const result = this.impl.onSharedMemoryRegionCreated(params.arg_id, params.arg_region, params.arg_size);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnSharedMemoryRegionReleased_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSharedMemoryRegionReleased');
          const result = this.impl.onSharedMemoryRegionReleased(params.arg_id);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandler_OnCaptureResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCaptureResult');
          const result = this.impl.onCaptureResult(params.arg_result);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerReceiver = mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerReceiver;

mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerPtr = mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerRemote;
mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerRequest = mojo.internal.bindings.remoting.mojom.VideoCapturerEventHandlerPendingReceiver;


// Interface: DesktopSessionEventHandler
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.remoting.mojom.ClipboardEventSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.remoting.mojom.UrlForwarderStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_Params', [
      mojo.internal.StructField('arg_audio_packet', 0, 0, mojo.internal.bindings.remoting.mojom.AudioPacketSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_Params', [
      mojo.internal.StructField('arg_layout', 0, 0, mojo.internal.bindings.remoting.mojom.VideoLayoutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_Params', [
      mojo.internal.StructField('arg_mouse_cursor', 0, 0, mojo.internal.bindings.remoting.mojom.MouseCursorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_Params', [
      mojo.internal.StructField('arg_position', 0, 0, mojo.internal.bindings.remoting.mojom.FractionalCoordinateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_Params', [
      mojo.internal.StructField('arg_keyboard_layout', 0, 0, mojo.internal.bindings.remoting.mojom.KeyboardLayoutSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_Params', [
      mojo.internal.StructField('arg_new_position', 0, 0, mojo.internal.bindings.remoting.mojom.DesktopVectorSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec, 'remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_Params', [
      mojo.internal.StructField('arg_usb_keycode', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionEventHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onClipboardEvent(arg_event) {
    return this.$.onClipboardEvent(arg_event);
  }
  onUrlForwarderStateChange(arg_state) {
    return this.$.onUrlForwarderStateChange(arg_state);
  }
  onAudioPacket(arg_audio_packet) {
    return this.$.onAudioPacket(arg_audio_packet);
  }
  onDesktopDisplayChanged(arg_layout) {
    return this.$.onDesktopDisplayChanged(arg_layout);
  }
  onMouseCursorChanged(arg_mouse_cursor) {
    return this.$.onMouseCursorChanged(arg_mouse_cursor);
  }
  onMouseCursorFractionalPositionChanged(arg_position) {
    return this.$.onMouseCursorFractionalPositionChanged(arg_position);
  }
  onKeyboardLayoutChanged(arg_keyboard_layout) {
    return this.$.onKeyboardLayoutChanged(arg_keyboard_layout);
  }
  onLocalMouseMoveDetected(arg_new_position) {
    return this.$.onLocalMouseMoveDetected(arg_new_position);
  }
  onLocalKeyboardInputDetected(arg_usb_keycode) {
    return this.$.onLocalKeyboardInputDetected(arg_usb_keycode);
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionEventHandler', [
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

  onClipboardEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

  onUrlForwarderStateChange(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onAudioPacket(arg_audio_packet) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec,
      null,
      [arg_audio_packet],
      false);
  }

  onDesktopDisplayChanged(arg_layout) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec,
      null,
      [arg_layout],
      false);
  }

  onMouseCursorChanged(arg_mouse_cursor) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec,
      null,
      [arg_mouse_cursor],
      false);
  }

  onMouseCursorFractionalPositionChanged(arg_position) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec,
      null,
      [arg_position],
      false);
  }

  onKeyboardLayoutChanged(arg_keyboard_layout) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec,
      null,
      [arg_keyboard_layout],
      false);
  }

  onLocalMouseMoveDetected(arg_new_position) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec,
      null,
      [arg_new_position],
      false);
  }

  onLocalKeyboardInputDetected(arg_usb_keycode) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec,
      null,
      [arg_usb_keycode],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionEventHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionEventHandler', [
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
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnClipboardEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnClipboardEvent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnUrlForwarderStateChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnUrlForwarderStateChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnAudioPacket
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAudioPacket (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnDesktopDisplayChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnDesktopDisplayChanged (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnMouseCursorChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseCursorChanged (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnMouseCursorFractionalPositionChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnMouseCursorFractionalPositionChanged (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnKeyboardLayoutChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnKeyboardLayoutChanged (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnLocalMouseMoveDetected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocalMouseMoveDetected (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnLocalKeyboardInputDetected
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocalKeyboardInputDetected (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnClipboardEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClipboardEvent');
          const result = this.impl.onClipboardEvent(params.arg_event);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnUrlForwarderStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUrlForwarderStateChange');
          const result = this.impl.onUrlForwarderStateChange(params.arg_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnAudioPacket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAudioPacket');
          const result = this.impl.onAudioPacket(params.arg_audio_packet);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnDesktopDisplayChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDesktopDisplayChanged');
          const result = this.impl.onDesktopDisplayChanged(params.arg_layout);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMouseCursorChanged');
          const result = this.impl.onMouseCursorChanged(params.arg_mouse_cursor);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnMouseCursorFractionalPositionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMouseCursorFractionalPositionChanged');
          const result = this.impl.onMouseCursorFractionalPositionChanged(params.arg_position);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnKeyboardLayoutChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onKeyboardLayoutChanged');
          const result = this.impl.onKeyboardLayoutChanged(params.arg_keyboard_layout);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalMouseMoveDetected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalMouseMoveDetected');
          const result = this.impl.onLocalMouseMoveDetected(params.arg_new_position);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandler_OnLocalKeyboardInputDetected_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalKeyboardInputDetected');
          const result = this.impl.onLocalKeyboardInputDetected(params.arg_usb_keycode);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerReceiver = mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerReceiver;

mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerPtr = mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerRemote;
mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerRequest = mojo.internal.bindings.remoting.mojom.DesktopSessionEventHandlerPendingReceiver;


// Interface: DesktopSessionStateHandler
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec, 'remoting.mojom.DesktopSessionStateHandler_DisconnectSession_Params', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.bindings.remoting.mojom.ProtocolErrorCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_location', 16, 0, mojo.internal.bindings.remoting.mojom.SourceLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.DesktopSessionStateHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  disconnectSession(arg_error_code, arg_error_details, arg_error_location) {
    return this.$.disconnectSession(arg_error_code, arg_error_details, arg_error_location);
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionStateHandler', [
      { explicit: null },
    ]);
  }

  disconnectSession(arg_error_code, arg_error_details, arg_error_location) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec,
      null,
      [arg_error_code, arg_error_details, arg_error_location],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.DesktopSessionStateHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.DesktopSessionStateHandler', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: DisconnectSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DisconnectSession (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandler_DisconnectSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.disconnectSession');
          const result = this.impl.disconnectSession(params.arg_error_code, params.arg_error_details, params.arg_error_location);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerReceiver = mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerReceiver;

mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerPtr = mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerRemote;
mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerRequest = mojo.internal.bindings.remoting.mojom.DesktopSessionStateHandlerPendingReceiver;


// Interface: WorkerProcessControl
mojo.internal.Struct(
    mojo.internal.bindings.remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec, 'remoting.mojom.WorkerProcessControl_CrashProcess_Params', [
      mojo.internal.StructField('arg_function_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_file_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_number', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.remoting.mojom.WorkerProcessControlPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.remoting.mojom.WorkerProcessControlRemote = class {
  static get $interfaceName() {
    return 'remoting.mojom.WorkerProcessControl';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.remoting.mojom.WorkerProcessControlPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.remoting.mojom.WorkerProcessControlRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  crashProcess(arg_function_name, arg_file_name, arg_line_number) {
    return this.$.crashProcess(arg_function_name, arg_file_name, arg_line_number);
  }
};

mojo.internal.bindings.remoting.mojom.WorkerProcessControlRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.WorkerProcessControl', [
      { explicit: null },
    ]);
  }

  crashProcess(arg_function_name, arg_file_name, arg_line_number) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec,
      null,
      [arg_function_name, arg_file_name, arg_line_number],
      false);
  }

};

mojo.internal.bindings.remoting.mojom.WorkerProcessControl.getRemote = function() {
  let remote = new mojo.internal.bindings.remoting.mojom.WorkerProcessControlRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remoting.mojom.WorkerProcessControl',
    'context');
  return remote.$;
};

mojo.internal.bindings.remoting.mojom.WorkerProcessControlReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('remoting.mojom.WorkerProcessControl', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: CrashProcess
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CrashProcess (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.remoting.mojom.WorkerProcessControl_CrashProcess_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.crashProcess');
          const result = this.impl.crashProcess(params.arg_function_name, params.arg_file_name, params.arg_line_number);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.remoting.mojom.WorkerProcessControlReceiver = mojo.internal.bindings.remoting.mojom.WorkerProcessControlReceiver;

mojo.internal.bindings.remoting.mojom.WorkerProcessControlPtr = mojo.internal.bindings.remoting.mojom.WorkerProcessControlRemote;
mojo.internal.bindings.remoting.mojom.WorkerProcessControlRequest = mojo.internal.bindings.remoting.mojom.WorkerProcessControlPendingReceiver;

