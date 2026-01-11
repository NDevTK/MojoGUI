// Auto-generated MojoJS binding
 // Source: chromium_src/ash/webui/boca_ui/mojom/boca.mojom
 // Module: ash.boca.mojom

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

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
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
 

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.boca = mojo.internal.bindings.ash.boca || {};
mojo.internal.bindings.ash.boca.mojom = mojo.internal.bindings.ash.boca.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};

mojo.internal.bindings.ash.boca.mojom.MaterialTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.AssignmentTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.PermissionSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.PermissionSettingSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.NavigationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.JoinMethodSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.BocaValidPrefSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.StudentStatusDetailSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.GetSessionErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.RemoveStudentErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.RenotifyStudentErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.AddStudentsErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.SubmitAccessCodeErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.ViewStudentScreenErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.EndViewScreenSessionErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.SetViewScreenSessionActiveErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.CreateSessionErrorSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.CrdConnectionStateSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.ash.boca.mojom.SessionResultSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.TabInfoSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.IdentitySpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.CourseSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.MaterialSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.AssignmentSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.WindowSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.ConfigSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.SessionSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler = {};
mojo.internal.bindings.ash.boca.mojom.PageHandler.$interfaceName = 'ash.boca.mojom.PageHandler';
mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page = {};
mojo.internal.bindings.ash.boca.mojom.Page.$interfaceName = 'ash.boca.mojom.Page';
mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec = { $: {} };
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory = {};
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory.$interfaceName = 'ash.boca.mojom.BocaPageHandlerFactory';
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec = { $: {} };

// Enum: MaterialType
mojo.internal.bindings.ash.boca.mojom.MaterialType = {
  kUnknown: 0,
  kSharedDriveFile: 1,
  kYoutubeVideo: 2,
  kLink: 3,
  kForm: 4,
};

// Enum: AssignmentType
mojo.internal.bindings.ash.boca.mojom.AssignmentType = {
  kUnspecified: 0,
  kAssignment: 1,
  kShortAnswerQuestion: 2,
  kMultipleChoiceQuestion: 3,
};

// Enum: NetworkType
mojo.internal.bindings.ash.boca.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};

// Enum: Permission
mojo.internal.bindings.ash.boca.mojom.Permission = {
  kMicrophone: 0,
  kCamera: 1,
};

// Enum: PermissionSetting
mojo.internal.bindings.ash.boca.mojom.PermissionSetting = {
  kAllow: 0,
  kAsk: 1,
  kBlock: 2,
};

// Enum: NavigationType
mojo.internal.bindings.ash.boca.mojom.NavigationType = {
  kUnknown: 0,
  kOpen: 1,
  kBlock: 2,
  kDomain: 3,
  kLimited: 4,
  kSameDomainOpenOtherDomainLimited: 5,
  kWorkspace: 6,
};

// Enum: JoinMethod
mojo.internal.bindings.ash.boca.mojom.JoinMethod = {
  kRoster: 0,
  kAccessCode: 1,
};

// Enum: BocaValidPref
mojo.internal.bindings.ash.boca.mojom.BocaValidPref = {
  kNavigationSetting: 0,
  kCaptionEnablementSetting: 1,
  kDefaultMediaStreamSetting: 2,
  kOOBEAccessCount: 3,
  kKioskReceiverCodes: 4,
};

// Enum: StudentStatusDetail
mojo.internal.bindings.ash.boca.mojom.StudentStatusDetail = {
  kUnknown: 0,
  kNotFound: 1,
  kAdded: 2,
  kActive: 3,
  kRemovedByOtherSession: 4,
  kRemovedByBeingTeacher: 5,
  kRemovedByTeacher: 6,
  kNotAddedConfiguredAsTeacher: 7,
  kNotAddedNotConfigured: 8,
  kMultipleDeviceSignedIn: 9,
};

// Enum: GetSessionError
mojo.internal.bindings.ash.boca.mojom.GetSessionError = {
  kHTTPError: 0,
  kEmpty: 1,
};

// Enum: UpdateSessionError
mojo.internal.bindings.ash.boca.mojom.UpdateSessionError = {
  kInvalid: 0,
  kHTTPError: 1,
  kPreconditionFailed: 2,
};

// Enum: RemoveStudentError
mojo.internal.bindings.ash.boca.mojom.RemoveStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: RenotifyStudentError
mojo.internal.bindings.ash.boca.mojom.RenotifyStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: AddStudentsError
mojo.internal.bindings.ash.boca.mojom.AddStudentsError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: SubmitAccessCodeError
mojo.internal.bindings.ash.boca.mojom.SubmitAccessCodeError = {
  kInvalid: 0,
  kNetworkRestriction: 1,
};

// Enum: ViewStudentScreenError
mojo.internal.bindings.ash.boca.mojom.ViewStudentScreenError = {
  kHTTPError: 0,
};

// Enum: EndViewScreenSessionError
mojo.internal.bindings.ash.boca.mojom.EndViewScreenSessionError = {
  kHTTPError: 0,
};

// Enum: SetViewScreenSessionActiveError
mojo.internal.bindings.ash.boca.mojom.SetViewScreenSessionActiveError = {
  kHTTPError: 0,
};

// Enum: SpeechRecognitionInstallState
mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallState = {
  kUnknown: 0,
  kSystemLanguageUnsupported: 1,
  kInProgress: 2,
  kFailed: 3,
  kReady: 4,
};

// Enum: CreateSessionError
mojo.internal.bindings.ash.boca.mojom.CreateSessionError = {
  kHTTPError: 0,
  kNetworkRestriction: 1,
};

// Enum: CrdConnectionState
mojo.internal.bindings.ash.boca.mojom.CrdConnectionState = {
  kUnknown: 0,
  kConnecting: 1,
  kConnected: 2,
  kDisconnected: 3,
  kFailed: 4,
};

// Union: SessionResult
mojo.internal.Union(
    mojo.internal.bindings.ash.boca.mojom.SessionResultSpec, 'ash.boca.mojom.SessionResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.boca.mojom.GetSessionErrorSpec.$,
        'nullable': false,
      },
      'arg_session': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.boca.mojom.SessionSpec.$,
        'nullable': false,
      },
    });

// Union: ConfigResult
mojo.internal.Union(
    mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec, 'ash.boca.mojom.ConfigResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.boca.mojom.GetSessionErrorSpec.$,
        'nullable': false,
      },
      'arg_config': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.boca.mojom.ConfigSpec.$,
        'nullable': false,
      },
    });

// Struct: TabInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.TabInfoSpec, 'ash.boca.mojom.TabInfo', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_favicon', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_id_$value', 24, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_id_$flag', originalFieldName: 'arg_id' }),
      mojo.internal.StructField('arg_id_$flag', 28, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_id_$value', originalFieldName: 'arg_id' }),
    ],
    [[0, 40]]);

// Struct: Identity
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.IdentitySpec, 'ash.boca.mojom.Identity', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_email', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_photo_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Course
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.CourseSpec, 'ash.boca.mojom.Course', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_section', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Material
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.MaterialSpec, 'ash.boca.mojom.Material', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.ash.boca.mojom.MaterialTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Assignment
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.AssignmentSpec, 'ash.boca.mojom.Assignment', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_update_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_materials', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.MaterialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 32, 0, mojo.internal.bindings.ash.boca.mojom.AssignmentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Window
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.WindowSpec, 'ash.boca.mojom.Window', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_tab_list', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.TabInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec, 'ash.boca.mojom.NetworkInfo', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.chromeos.network_config.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.ash.boca.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_signal_strength', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Config
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.ConfigSpec, 'ash.boca.mojom.Config', [
      mojo.internal.StructField('arg_session_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_session_start_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.JSTimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_teacher', 16, 0, mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_students', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_students_join_via_code', 32, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_on_task_config', 40, 0, mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_caption_config', 48, 0, mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_code', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CaptionConfig
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec, 'ash.boca.mojom.CaptionConfig', [
      mojo.internal.StructField('arg_session_caption_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_local_caption_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_session_translation_enabled', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ControlledTab
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec, 'ash.boca.mojom.ControlledTab', [
      mojo.internal.StructField('arg_tab', 0, 0, mojo.internal.bindings.ash.boca.mojom.TabInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_navigation_type', 8, 0, mojo.internal.bindings.ash.boca.mojom.NavigationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OnTaskConfig
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec, 'ash.boca.mojom.OnTaskConfig', [
      mojo.internal.StructField('arg_tabs', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.ControlledTabSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_locked', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_paused', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Session
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.SessionSpec, 'ash.boca.mojom.Session', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.ConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_activities', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StudentActivity
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec, 'ash.boca.mojom.StudentActivity', [
      mojo.internal.StructField('arg_student_status_detail', 0, 0, mojo.internal.bindings.ash.boca.mojom.StudentStatusDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_active_tab', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_join_method', 16, 0, mojo.internal.bindings.ash.boca.mojom.JoinMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_view_screen_session_code', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_is_active', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_caption_enabled', 32, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_hand_raised', 32, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: IdentifiedActivity
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec, 'ash.boca.mojom.IdentifiedActivity', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_activity', 8, 0, mojo.internal.bindings.ash.boca.mojom.StudentActivitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandler
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec, 'ash.boca.mojom.PageHandler_AuthenticateWebview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec, 'ash.boca.mojom.PageHandler_GetWindowsTabsList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParams', [
      mojo.internal.StructField('arg_window_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.WindowSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec, 'ash.boca.mojom.PageHandler_ListCourses_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListCourses_ResponseParams', [
      mojo.internal.StructField('arg_courses', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.CourseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec, 'ash.boca.mojom.PageHandler_ListStudents_Params', [
      mojo.internal.StructField('arg_course_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListStudents_ResponseParams', [
      mojo.internal.StructField('arg_students', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec, 'ash.boca.mojom.PageHandler_ListAssignments_Params', [
      mojo.internal.StructField('arg_course_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListAssignments_ResponseParams', [
      mojo.internal.StructField('arg_assignments', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.AssignmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec, 'ash.boca.mojom.PageHandler_CreateSession_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.ConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_CreateSession_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.CreateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec, 'ash.boca.mojom.PageHandler_GetSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetSession_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.ash.boca.mojom.SessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec, 'ash.boca.mojom.PageHandler_EndSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_EndSession_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec, 'ash.boca.mojom.PageHandler_ExtendSessionDuration_Params', [
      mojo.internal.StructField('arg_extended_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec, 'ash.boca.mojom.PageHandler_RemoveStudent_Params', [
      mojo.internal.StructField('arg_student_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RemoveStudent_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.RemoveStudentErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec, 'ash.boca.mojom.PageHandler_RenotifyStudent_Params', [
      mojo.internal.StructField('arg_student_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.RenotifyStudentErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec, 'ash.boca.mojom.PageHandler_AddStudents_Params', [
      mojo.internal.StructField('arg_students', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_AddStudents_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.AddStudentsErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec, 'ash.boca.mojom.PageHandler_UpdateOnTaskConfig_Params', [
      mojo.internal.StructField('arg_on_task_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.OnTaskConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec, 'ash.boca.mojom.PageHandler_UpdateCaptionConfig_Params', [
      mojo.internal.StructField('arg_caption_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.CaptionConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec, 'ash.boca.mojom.PageHandler_SetFloatMode_Params', [
      mojo.internal.StructField('arg_is_float_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetFloatMode_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec, 'ash.boca.mojom.PageHandler_SubmitAccessCode_Params', [
      mojo.internal.StructField('arg_access_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.SubmitAccessCodeErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_ViewStudentScreen_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.ViewStudentScreenErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec, 'ash.boca.mojom.PageHandler_EndViewScreenSession_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.EndViewScreenSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec, 'ash.boca.mojom.PageHandler_SetViewScreenSessionActive_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParams', [
      mojo.internal.StructField('arg_error', 0, 0, mojo.internal.bindings.ash.boca.mojom.SetViewScreenSessionActiveErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec, 'ash.boca.mojom.PageHandler_GetUserPref_Params', [
      mojo.internal.StructField('arg_pref', 0, 0, mojo.internal.bindings.ash.boca.mojom.BocaValidPrefSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetUserPref_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec, 'ash.boca.mojom.PageHandler_SetUserPref_Params', [
      mojo.internal.StructField('arg_pref', 0, 0, mojo.internal.bindings.ash.boca.mojom.BocaValidPrefSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetUserPref_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec, 'ash.boca.mojom.PageHandler_SetSitePermission_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_permission', 8, 0, mojo.internal.bindings.ash.boca.mojom.PermissionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_setting', 16, 0, mojo.internal.bindings.ash.boca.mojom.PermissionSettingSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetSitePermission_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ParamsSpec, 'ash.boca.mojom.PageHandler_CloseTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_CloseTab_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.boca.mojom.PageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec, 'ash.boca.mojom.PageHandler_RefreshWorkbook_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec, 'ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec, 'ash.boca.mojom.PageHandler_StartSpotlight_Params', [
      mojo.internal.StructField('arg_crd_connection_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StartSpotlight_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_PresentStudentScreen_Params', [
      mojo.internal.StructField('arg_student', 0, 0, mojo.internal.bindings.ash.boca.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingStudentScreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_PresentOwnScreen_Params', [
      mojo.internal.StructField('arg_receiver_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingOwnScreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.ash.boca.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.boca.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.boca.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.boca.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  authenticateWebview() {
    return this.$.authenticateWebview();
  }
  getWindowsTabsList() {
    return this.$.getWindowsTabsList();
  }
  listCourses() {
    return this.$.listCourses();
  }
  listStudents(arg_course_id) {
    return this.$.listStudents(arg_course_id);
  }
  listAssignments(arg_course_id) {
    return this.$.listAssignments(arg_course_id);
  }
  createSession(arg_config) {
    return this.$.createSession(arg_config);
  }
  getSession() {
    return this.$.getSession();
  }
  endSession() {
    return this.$.endSession();
  }
  extendSessionDuration(arg_extended_duration) {
    return this.$.extendSessionDuration(arg_extended_duration);
  }
  removeStudent(arg_student_id) {
    return this.$.removeStudent(arg_student_id);
  }
  renotifyStudent(arg_student_id) {
    return this.$.renotifyStudent(arg_student_id);
  }
  addStudents(arg_students) {
    return this.$.addStudents(arg_students);
  }
  updateOnTaskConfig(arg_on_task_config) {
    return this.$.updateOnTaskConfig(arg_on_task_config);
  }
  updateCaptionConfig(arg_caption_config) {
    return this.$.updateCaptionConfig(arg_caption_config);
  }
  setFloatMode(arg_is_float_mode) {
    return this.$.setFloatMode(arg_is_float_mode);
  }
  submitAccessCode(arg_access_code) {
    return this.$.submitAccessCode(arg_access_code);
  }
  viewStudentScreen(arg_id) {
    return this.$.viewStudentScreen(arg_id);
  }
  endViewScreenSession(arg_id) {
    return this.$.endViewScreenSession(arg_id);
  }
  setViewScreenSessionActive(arg_id) {
    return this.$.setViewScreenSessionActive(arg_id);
  }
  getUserPref(arg_pref) {
    return this.$.getUserPref(arg_pref);
  }
  setUserPref(arg_pref, arg_value) {
    return this.$.setUserPref(arg_pref, arg_value);
  }
  setSitePermission(arg_url, arg_permission, arg_setting) {
    return this.$.setSitePermission(arg_url, arg_permission, arg_setting);
  }
  closeTab(arg_tab_id) {
    return this.$.closeTab(arg_tab_id);
  }
  openFeedbackDialog() {
    return this.$.openFeedbackDialog();
  }
  refreshWorkbook() {
    return this.$.refreshWorkbook();
  }
  getSpeechRecognitionInstallationStatus() {
    return this.$.getSpeechRecognitionInstallationStatus();
  }
  startSpotlight(arg_crd_connection_code) {
    return this.$.startSpotlight(arg_crd_connection_code);
  }
  presentStudentScreen(arg_student, arg_receiver_id) {
    return this.$.presentStudentScreen(arg_student, arg_receiver_id);
  }
  stopPresentingStudentScreen() {
    return this.$.stopPresentingStudentScreen();
  }
  presentOwnScreen(arg_receiver_id) {
    return this.$.presentOwnScreen(arg_receiver_id);
  }
  stopPresentingOwnScreen() {
    return this.$.stopPresentingOwnScreen();
  }
};

mojo.internal.bindings.ash.boca.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  authenticateWebview() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec,
      [],
      false);
  }

  getWindowsTabsList() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec,
      [],
      false);
  }

  listCourses() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec,
      [],
      false);
  }

  listStudents(arg_course_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec,
      [arg_course_id],
      false);
  }

  listAssignments(arg_course_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec,
      [arg_course_id],
      false);
  }

  createSession(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec,
      [arg_config],
      false);
  }

  getSession() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec,
      [],
      false);
  }

  endSession() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec,
      [],
      false);
  }

  extendSessionDuration(arg_extended_duration) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec,
      [arg_extended_duration],
      false);
  }

  removeStudent(arg_student_id) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec,
      [arg_student_id],
      false);
  }

  renotifyStudent(arg_student_id) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec,
      [arg_student_id],
      false);
  }

  addStudents(arg_students) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec,
      [arg_students],
      false);
  }

  updateOnTaskConfig(arg_on_task_config) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec,
      [arg_on_task_config],
      false);
  }

  updateCaptionConfig(arg_caption_config) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec,
      [arg_caption_config],
      false);
  }

  setFloatMode(arg_is_float_mode) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec,
      [arg_is_float_mode],
      false);
  }

  submitAccessCode(arg_access_code) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec,
      [arg_access_code],
      false);
  }

  viewStudentScreen(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec,
      [arg_id],
      false);
  }

  endViewScreenSession(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec,
      [arg_id],
      false);
  }

  setViewScreenSessionActive(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec,
      [arg_id],
      false);
  }

  getUserPref(arg_pref) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec,
      [arg_pref],
      false);
  }

  setUserPref(arg_pref, arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec,
      [arg_pref, arg_value],
      false);
  }

  setSitePermission(arg_url, arg_permission, arg_setting) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec,
      [arg_url, arg_permission, arg_setting],
      false);
  }

  closeTab(arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec,
      [arg_tab_id],
      false);
  }

  openFeedbackDialog() {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  refreshWorkbook() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec,
      [],
      false);
  }

  getSpeechRecognitionInstallationStatus() {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec,
      [],
      false);
  }

  startSpotlight(arg_crd_connection_code) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec,
      [arg_crd_connection_code],
      false);
  }

  presentStudentScreen(arg_student, arg_receiver_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec,
      [arg_student, arg_receiver_id],
      false);
  }

  stopPresentingStudentScreen() {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec,
      [],
      false);
  }

  presentOwnScreen(arg_receiver_id) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec,
      [arg_receiver_id],
      false);
  }

  stopPresentingOwnScreen() {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec,
      mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.ash.boca.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.boca.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.boca.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PageHandler', [
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
        
        // Try Method 0: AuthenticateWebview
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AuthenticateWebview (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetWindowsTabsList
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetWindowsTabsList (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: ListCourses
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListCourses (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: ListStudents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListStudents (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: ListAssignments
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ListAssignments (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: CreateSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateSession (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSession (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: EndSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndSession (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: ExtendSessionDuration
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ExtendSessionDuration (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: RemoveStudent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RemoveStudent (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: RenotifyStudent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RenotifyStudent (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AddStudents
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AddStudents (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        // Try Method 12: UpdateOnTaskConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateOnTaskConfig (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 12 failed:', e);
           }
        }
        // Try Method 13: UpdateCaptionConfig
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateCaptionConfig (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 13 failed:', e);
           }
        }
        // Try Method 14: SetFloatMode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFloatMode (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 14 failed:', e);
           }
        }
        // Try Method 15: SubmitAccessCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SubmitAccessCode (15)');
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 15 failed:', e);
           }
        }
        // Try Method 16: ViewStudentScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ViewStudentScreen (16)');
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 16 failed:', e);
           }
        }
        // Try Method 17: EndViewScreenSession
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EndViewScreenSession (17)');
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 17 failed:', e);
           }
        }
        // Try Method 18: SetViewScreenSessionActive
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetViewScreenSessionActive (18)');
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 18 failed:', e);
           }
        }
        // Try Method 19: GetUserPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetUserPref (19)');
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 19 failed:', e);
           }
        }
        // Try Method 20: SetUserPref
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetUserPref (20)');
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 20 failed:', e);
           }
        }
        // Try Method 21: SetSitePermission
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetSitePermission (21)');
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 21 failed:', e);
           }
        }
        // Try Method 22: CloseTab
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseTab (22)');
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 22 failed:', e);
           }
        }
        // Try Method 23: OpenFeedbackDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenFeedbackDialog (23)');
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 23 failed:', e);
           }
        }
        // Try Method 24: RefreshWorkbook
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> RefreshWorkbook (24)');
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 24 failed:', e);
           }
        }
        // Try Method 25: GetSpeechRecognitionInstallationStatus
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSpeechRecognitionInstallationStatus (25)');
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 25 failed:', e);
           }
        }
        // Try Method 26: StartSpotlight
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StartSpotlight (26)');
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 26 failed:', e);
           }
        }
        // Try Method 27: PresentStudentScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PresentStudentScreen (27)');
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 27 failed:', e);
           }
        }
        // Try Method 28: StopPresentingStudentScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopPresentingStudentScreen (28)');
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 28 failed:', e);
           }
        }
        // Try Method 29: PresentOwnScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> PresentOwnScreen (29)');
             this.mapOrdinal(header.ordinal, 29);
             dispatchId = 29;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 29 failed:', e);
           }
        }
        // Try Method 30: StopPresentingOwnScreen
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> StopPresentingOwnScreen (30)');
             this.mapOrdinal(header.ordinal, 30);
             dispatchId = 30;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 30 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.authenticateWebview');
          const result = this.impl.authenticateWebview();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AuthenticateWebview FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getWindowsTabsList');
          const result = this.impl.getWindowsTabsList();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetWindowsTabsList FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listCourses');
          const result = this.impl.listCourses();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ListCourses FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listStudents');
          const result = this.impl.listStudents(params.arg_course_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ListStudents FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.listAssignments');
          const result = this.impl.listAssignments(params.arg_course_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ListAssignments FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSession');
          const result = this.impl.createSession(params.arg_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CreateSession FAILED:', e));
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSession');
          const result = this.impl.getSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSession FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endSession');
          const result = this.impl.endSession();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EndSession FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.extendSessionDuration');
          const result = this.impl.extendSessionDuration(params.arg_extended_duration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ExtendSessionDuration FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.removeStudent');
          const result = this.impl.removeStudent(params.arg_student_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RemoveStudent FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renotifyStudent');
          const result = this.impl.renotifyStudent(params.arg_student_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RenotifyStudent FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addStudents');
          const result = this.impl.addStudents(params.arg_students);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] AddStudents FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOnTaskConfig');
          const result = this.impl.updateOnTaskConfig(params.arg_on_task_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateOnTaskConfig FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateCaptionConfig');
          const result = this.impl.updateCaptionConfig(params.arg_caption_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] UpdateCaptionConfig FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFloatMode');
          const result = this.impl.setFloatMode(params.arg_is_float_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetFloatMode FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.submitAccessCode');
          const result = this.impl.submitAccessCode(params.arg_access_code);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SubmitAccessCode FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.viewStudentScreen');
          const result = this.impl.viewStudentScreen(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] ViewStudentScreen FAILED:', e));
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.endViewScreenSession');
          const result = this.impl.endViewScreenSession(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] EndViewScreenSession FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setViewScreenSessionActive');
          const result = this.impl.setViewScreenSessionActive(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetViewScreenSessionActive FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserPref');
          const result = this.impl.getUserPref(params.arg_pref);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetUserPref FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setUserPref');
          const result = this.impl.setUserPref(params.arg_pref, params.arg_value);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetUserPref FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSitePermission');
          const result = this.impl.setSitePermission(params.arg_url, params.arg_permission, params.arg_setting);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] SetSitePermission FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeTab');
          const result = this.impl.closeTab(params.arg_tab_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] CloseTab FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openFeedbackDialog');
          const result = this.impl.openFeedbackDialog();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] OpenFeedbackDialog FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.refreshWorkbook');
          const result = this.impl.refreshWorkbook();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] RefreshWorkbook FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSpeechRecognitionInstallationStatus');
          const result = this.impl.getSpeechRecognitionInstallationStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] GetSpeechRecognitionInstallationStatus FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startSpotlight');
          const result = this.impl.startSpotlight(params.arg_crd_connection_code);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StartSpotlight FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.presentStudentScreen');
          const result = this.impl.presentStudentScreen(params.arg_student, params.arg_receiver_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PresentStudentScreen FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopPresentingStudentScreen');
          const result = this.impl.stopPresentingStudentScreen();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StopPresentingStudentScreen FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.presentOwnScreen');
          const result = this.impl.presentOwnScreen(params.arg_receiver_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] PresentOwnScreen FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopPresentingOwnScreen');
          const result = this.impl.stopPresentingOwnScreen();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const rawHeader = (args[2] && args[2].slice) ? args[2].slice(0, header.headerSize) : null;
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, mojo.internal.bindings.ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec, header, rawHeader);
               responder(response);
            }).catch(e => console.error('[GeneratedReceiver] StopPresentingOwnScreen FAILED:', e));
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

mojo.internal.bindings.ash.boca.mojom.PageHandlerReceiver = mojo.internal.bindings.ash.boca.mojom.PageHandlerReceiver;

mojo.internal.bindings.ash.boca.mojom.PageHandlerPtr = mojo.internal.bindings.ash.boca.mojom.PageHandlerRemote;
mojo.internal.bindings.ash.boca.mojom.PageHandlerRequest = mojo.internal.bindings.ash.boca.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnStudentActivityUpdated_Params', [
      mojo.internal.StructField('arg_activities', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.IdentifiedActivitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSessionConfigUpdated_Params', [
      mojo.internal.StructField('arg_config', 0, 0, mojo.internal.bindings.ash.boca.mojom.ConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec, 'ash.boca.mojom.Page_OnActiveNetworkStateChanged_Params', [
      mojo.internal.StructField('arg_active_networks', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.boca.mojom.NetworkInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec, 'ash.boca.mojom.Page_OnLocalCaptionDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.boca.mojom.SpeechRecognitionInstallStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec, 'ash.boca.mojom.Page_OnSessionCaptionDisabled_Params', [
      mojo.internal.StructField('arg_is_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec, 'ash.boca.mojom.Page_OnFrameDataReceived_Params', [
      mojo.internal.StructField('arg_frame_data', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_Params', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.ash.boca.mojom.CrdConnectionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec, 'ash.boca.mojom.Page_OnPresentStudentScreenEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec, 'ash.boca.mojom.Page_OnPresentOwnScreenEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.bindings.ash.boca.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.boca.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.boca.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.boca.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onStudentActivityUpdated(arg_activities) {
    return this.$.onStudentActivityUpdated(arg_activities);
  }
  onSessionConfigUpdated(arg_config) {
    return this.$.onSessionConfigUpdated(arg_config);
  }
  onActiveNetworkStateChanged(arg_active_networks) {
    return this.$.onActiveNetworkStateChanged(arg_active_networks);
  }
  onLocalCaptionDisabled() {
    return this.$.onLocalCaptionDisabled();
  }
  onSpeechRecognitionInstallStateUpdated(arg_state) {
    return this.$.onSpeechRecognitionInstallStateUpdated(arg_state);
  }
  onSessionCaptionDisabled(arg_is_error) {
    return this.$.onSessionCaptionDisabled(arg_is_error);
  }
  onFrameDataReceived(arg_frame_data) {
    return this.$.onFrameDataReceived(arg_frame_data);
  }
  onSpotlightCrdSessionStatusUpdated(arg_state) {
    return this.$.onSpotlightCrdSessionStatusUpdated(arg_state);
  }
  onPresentStudentScreenEnded() {
    return this.$.onPresentStudentScreenEnded();
  }
  onPresentOwnScreenEnded() {
    return this.$.onPresentOwnScreenEnded();
  }
};

mojo.internal.bindings.ash.boca.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Page', [
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

  onStudentActivityUpdated(arg_activities) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec,
      null,
      [arg_activities],
      false);
  }

  onSessionConfigUpdated(arg_config) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec,
      null,
      [arg_config],
      false);
  }

  onActiveNetworkStateChanged(arg_active_networks) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec,
      null,
      [arg_active_networks],
      false);
  }

  onLocalCaptionDisabled() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  onSpeechRecognitionInstallStateUpdated(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onSessionCaptionDisabled(arg_is_error) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec,
      null,
      [arg_is_error],
      false);
  }

  onFrameDataReceived(arg_frame_data) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec,
      null,
      [arg_frame_data],
      false);
  }

  onSpotlightCrdSessionStatusUpdated(arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec,
      null,
      [arg_state],
      false);
  }

  onPresentStudentScreenEnded() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onPresentOwnScreenEnded() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.ash.boca.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.boca.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.boca.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Page', [
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
        
        // Try Method 0: OnStudentActivityUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnStudentActivityUpdated (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnSessionConfigUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionConfigUpdated (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnActiveNetworkStateChanged
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnActiveNetworkStateChanged (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnLocalCaptionDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnLocalCaptionDisabled (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnSpeechRecognitionInstallStateUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpeechRecognitionInstallStateUpdated (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnSessionCaptionDisabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSessionCaptionDisabled (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnFrameDataReceived
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnFrameDataReceived (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnSpotlightCrdSessionStatusUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnSpotlightCrdSessionStatusUpdated (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnPresentStudentScreenEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPresentStudentScreenEnded (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnPresentOwnScreenEnded
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPresentOwnScreenEnded (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onStudentActivityUpdated');
          const result = this.impl.onStudentActivityUpdated(params.arg_activities);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionConfigUpdated');
          const result = this.impl.onSessionConfigUpdated(params.arg_config);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActiveNetworkStateChanged');
          const result = this.impl.onActiveNetworkStateChanged(params.arg_active_networks);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLocalCaptionDisabled');
          const result = this.impl.onLocalCaptionDisabled();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpeechRecognitionInstallStateUpdated');
          const result = this.impl.onSpeechRecognitionInstallStateUpdated(params.arg_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionCaptionDisabled');
          const result = this.impl.onSessionCaptionDisabled(params.arg_is_error);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameDataReceived');
          const result = this.impl.onFrameDataReceived(params.arg_frame_data);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSpotlightCrdSessionStatusUpdated');
          const result = this.impl.onSpotlightCrdSessionStatusUpdated(params.arg_state);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPresentStudentScreenEnded');
          const result = this.impl.onPresentStudentScreenEnded();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPresentOwnScreenEnded');
          const result = this.impl.onPresentOwnScreenEnded();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.boca.mojom.PageReceiver = mojo.internal.bindings.ash.boca.mojom.PageReceiver;

mojo.internal.bindings.ash.boca.mojom.PagePtr = mojo.internal.bindings.ash.boca.mojom.PageRemote;
mojo.internal.bindings.ash.boca.mojom.PageRequest = mojo.internal.bindings.ash.boca.mojom.PagePendingReceiver;


// Interface: BocaPageHandlerFactory
mojo.internal.Struct(
    mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec, 'ash.boca.mojom.BocaPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.ash.boca.mojom.PageHandlerSpec), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.ash.boca.mojom.PageSpec), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.BocaPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  create(arg_handler, arg_page) {
    return this.$.create(arg_handler, arg_page);
  }
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('BocaPageHandlerFactory', [
      { explicit: null },
    ]);
  }

  create(arg_handler, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec,
      null,
      [arg_handler, arg_page],
      false);
  }

};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.BocaPageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('BocaPageHandlerFactory', [
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
        
        // Try Method 0: Create
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Create (0)');
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.create');
          const result = this.impl.create(params.arg_handler, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryReceiver = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryReceiver;

mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPtr = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRemote;
mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryRequest = mojo.internal.bindings.ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver;

