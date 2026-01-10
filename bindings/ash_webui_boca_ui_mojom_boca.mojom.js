// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/boca_ui/mojom/boca.mojom
// Module: ash.boca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.boca = ash.boca || {};
ash.boca.mojom = ash.boca.mojom || {};
var chromeos = chromeos || {};
var services = services || {};
var url = url || {};
var skia = skia || {};

ash.boca.mojom.MaterialTypeSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.AssignmentTypeSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.PermissionSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.PermissionSettingSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.NavigationTypeSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.JoinMethodSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.BocaValidPrefSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.StudentStatusDetailSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.GetSessionErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.UpdateSessionErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.RemoveStudentErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.RenotifyStudentErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.AddStudentsErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.SubmitAccessCodeErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.ViewStudentScreenErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.EndViewScreenSessionErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.SetViewScreenSessionActiveErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.SpeechRecognitionInstallStateSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.CreateSessionErrorSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.CrdConnectionStateSpec = { $: mojo.internal.Enum() };
ash.boca.mojom.SessionResultSpec = { $: {} };
ash.boca.mojom.ConfigResultSpec = { $: {} };
ash.boca.mojom.TabInfoSpec = { $: {} };
ash.boca.mojom.IdentitySpec = { $: {} };
ash.boca.mojom.CourseSpec = { $: {} };
ash.boca.mojom.MaterialSpec = { $: {} };
ash.boca.mojom.AssignmentSpec = { $: {} };
ash.boca.mojom.WindowSpec = { $: {} };
ash.boca.mojom.NetworkInfoSpec = { $: {} };
ash.boca.mojom.ConfigSpec = { $: {} };
ash.boca.mojom.CaptionConfigSpec = { $: {} };
ash.boca.mojom.ControlledTabSpec = { $: {} };
ash.boca.mojom.OnTaskConfigSpec = { $: {} };
ash.boca.mojom.SessionSpec = { $: {} };
ash.boca.mojom.StudentActivitySpec = { $: {} };
ash.boca.mojom.IdentifiedActivitySpec = { $: {} };
ash.boca.mojom.PageHandler = {};
ash.boca.mojom.PageHandler.$interfaceName = 'ash.boca.mojom.PageHandler';
ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ListCourses_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ListStudents_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_CreateSession_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetSession_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_EndSession_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_AddStudents_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_CloseTab_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec = { $: {} };
ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec = { $: {} };
ash.boca.mojom.Page = {};
ash.boca.mojom.Page.$interfaceName = 'ash.boca.mojom.Page';
ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec = { $: {} };
ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec = { $: {} };
ash.boca.mojom.BocaPageHandlerFactory = {};
ash.boca.mojom.BocaPageHandlerFactory.$interfaceName = 'ash.boca.mojom.BocaPageHandlerFactory';
ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec = { $: {} };

// Enum: MaterialType
ash.boca.mojom.MaterialType = {
  kUnknown: 0,
  kSharedDriveFile: 1,
  kYoutubeVideo: 2,
  kLink: 3,
  kForm: 4,
};

// Enum: AssignmentType
ash.boca.mojom.AssignmentType = {
  kUnspecified: 0,
  kAssignment: 1,
  kShortAnswerQuestion: 2,
  kMultipleChoiceQuestion: 3,
};

// Enum: NetworkType
ash.boca.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};

// Enum: Permission
ash.boca.mojom.Permission = {
  kMicrophone: 0,
  kCamera: 1,
};

// Enum: PermissionSetting
ash.boca.mojom.PermissionSetting = {
  kAllow: 0,
  kAsk: 1,
  kBlock: 2,
};

// Enum: NavigationType
ash.boca.mojom.NavigationType = {
  kUnknown: 0,
  kOpen: 1,
  kBlock: 2,
  kDomain: 3,
  kLimited: 4,
  kSameDomainOpenOtherDomainLimited: 5,
  kWorkspace: 6,
};

// Enum: JoinMethod
ash.boca.mojom.JoinMethod = {
  kRoster: 0,
  kAccessCode: 1,
};

// Enum: BocaValidPref
ash.boca.mojom.BocaValidPref = {
  kNavigationSetting: 0,
  kCaptionEnablementSetting: 1,
  kDefaultMediaStreamSetting: 2,
  kOOBEAccessCount: 3,
  kKioskReceiverCodes: 4,
};

// Enum: StudentStatusDetail
ash.boca.mojom.StudentStatusDetail = {
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
ash.boca.mojom.GetSessionError = {
  kHTTPError: 0,
  kEmpty: 1,
};

// Enum: UpdateSessionError
ash.boca.mojom.UpdateSessionError = {
  kInvalid: 0,
  kHTTPError: 1,
  kPreconditionFailed: 2,
};

// Enum: RemoveStudentError
ash.boca.mojom.RemoveStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: RenotifyStudentError
ash.boca.mojom.RenotifyStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: AddStudentsError
ash.boca.mojom.AddStudentsError = {
  kInvalid: 0,
  kHTTPError: 1,
};

// Enum: SubmitAccessCodeError
ash.boca.mojom.SubmitAccessCodeError = {
  kInvalid: 0,
  kNetworkRestriction: 1,
};

// Enum: ViewStudentScreenError
ash.boca.mojom.ViewStudentScreenError = {
  kHTTPError: 0,
};

// Enum: EndViewScreenSessionError
ash.boca.mojom.EndViewScreenSessionError = {
  kHTTPError: 0,
};

// Enum: SetViewScreenSessionActiveError
ash.boca.mojom.SetViewScreenSessionActiveError = {
  kHTTPError: 0,
};

// Enum: SpeechRecognitionInstallState
ash.boca.mojom.SpeechRecognitionInstallState = {
  kUnknown: 0,
  kSystemLanguageUnsupported: 1,
  kInProgress: 2,
  kFailed: 3,
  kReady: 4,
};

// Enum: CreateSessionError
ash.boca.mojom.CreateSessionError = {
  kHTTPError: 0,
  kNetworkRestriction: 1,
};

// Enum: CrdConnectionState
ash.boca.mojom.CrdConnectionState = {
  kUnknown: 0,
  kConnecting: 1,
  kConnected: 2,
  kDisconnected: 3,
  kFailed: 4,
};

// Union: SessionResult
mojo.internal.Union(
    ash.boca.mojom.SessionResultSpec, 'ash.boca.mojom.SessionResult', {
      'error': {
        'ordinal': 0,
        'type': ash.boca.mojom.GetSessionErrorSpec.$,
        'nullable': false,
      },
      'session': {
        'ordinal': 1,
        'type': ash.boca.mojom.SessionSpec.$,
        'nullable': false,
      },
    });

// Union: ConfigResult
mojo.internal.Union(
    ash.boca.mojom.ConfigResultSpec, 'ash.boca.mojom.ConfigResult', {
      'error': {
        'ordinal': 0,
        'type': ash.boca.mojom.GetSessionErrorSpec.$,
        'nullable': false,
      },
      'config': {
        'ordinal': 1,
        'type': ash.boca.mojom.ConfigSpec.$,
        'nullable': false,
      },
    });

// Struct: TabInfo
mojo.internal.Struct(
    ash.boca.mojom.TabInfoSpec, 'ash.boca.mojom.TabInfo', [
      mojo.internal.StructField('id_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'id_$value', originalFieldName: 'id' }),
      mojo.internal.StructField('id_$value', 4, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'id_$flag', originalFieldName: 'id' }),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('favicon', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Identity
mojo.internal.Struct(
    ash.boca.mojom.IdentitySpec, 'ash.boca.mojom.Identity', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('email', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('photo_url', 24, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Course
mojo.internal.Struct(
    ash.boca.mojom.CourseSpec, 'ash.boca.mojom.Course', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('section', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Material
mojo.internal.Struct(
    ash.boca.mojom.MaterialSpec, 'ash.boca.mojom.Material', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ash.boca.mojom.MaterialTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Assignment
mojo.internal.Struct(
    ash.boca.mojom.AssignmentSpec, 'ash.boca.mojom.Assignment', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('last_update_time', 16, 0, mojo_base.mojom.JSTimeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('materials', 24, 0, mojo.internal.Array(ash.boca.mojom.MaterialSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('type', 32, 0, ash.boca.mojom.AssignmentTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: Window
mojo.internal.Struct(
    ash.boca.mojom.WindowSpec, 'ash.boca.mojom.Window', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('tab_list', 8, 0, mojo.internal.Array(ash.boca.mojom.TabInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkInfo
mojo.internal.Struct(
    ash.boca.mojom.NetworkInfoSpec, 'ash.boca.mojom.NetworkInfo', [
      mojo.internal.StructField('state', 0, 0, chromeos.network_config.mojom.ConnectionStateTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ash.boca.mojom.NetworkTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('signal_strength', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: Config
mojo.internal.Struct(
    ash.boca.mojom.ConfigSpec, 'ash.boca.mojom.Config', [
      mojo.internal.StructField('session_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('session_start_time', 8, 0, mojo_base.mojom.JSTimeSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('teacher', 16, 0, ash.boca.mojom.IdentitySpec.$, null, true, 0, undefined),
      mojo.internal.StructField('students', 24, 0, mojo.internal.Array(ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('students_join_via_code', 32, 0, mojo.internal.Array(ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('on_task_config', 40, 0, ash.boca.mojom.OnTaskConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('caption_config', 48, 0, ash.boca.mojom.CaptionConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('access_code', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: CaptionConfig
mojo.internal.Struct(
    ash.boca.mojom.CaptionConfigSpec, 'ash.boca.mojom.CaptionConfig', [
      mojo.internal.StructField('session_caption_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('local_caption_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('session_translation_enabled', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ControlledTab
mojo.internal.Struct(
    ash.boca.mojom.ControlledTabSpec, 'ash.boca.mojom.ControlledTab', [
      mojo.internal.StructField('tab', 0, 0, ash.boca.mojom.TabInfoSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('navigation_type', 8, 0, ash.boca.mojom.NavigationTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: OnTaskConfig
mojo.internal.Struct(
    ash.boca.mojom.OnTaskConfigSpec, 'ash.boca.mojom.OnTaskConfig', [
      mojo.internal.StructField('is_locked', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_paused', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('tabs', 8, 0, mojo.internal.Array(ash.boca.mojom.ControlledTabSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Session
mojo.internal.Struct(
    ash.boca.mojom.SessionSpec, 'ash.boca.mojom.Session', [
      mojo.internal.StructField('config', 0, 0, ash.boca.mojom.ConfigSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('activities', 8, 0, mojo.internal.Array(ash.boca.mojom.IdentifiedActivitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: StudentActivity
mojo.internal.Struct(
    ash.boca.mojom.StudentActivitySpec, 'ash.boca.mojom.StudentActivity', [
      mojo.internal.StructField('student_status_detail', 0, 0, ash.boca.mojom.StudentStatusDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_active', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('active_tab', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('is_caption_enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('is_hand_raised', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('join_method', 32, 0, ash.boca.mojom.JoinMethodSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('view_screen_session_code', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: IdentifiedActivity
mojo.internal.Struct(
    ash.boca.mojom.IdentifiedActivitySpec, 'ash.boca.mojom.IdentifiedActivity', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity', 8, 0, ash.boca.mojom.StudentActivitySpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandler
mojo.internal.Struct(
    ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec, 'ash.boca.mojom.PageHandler_AuthenticateWebview_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec, 'ash.boca.mojom.PageHandler_GetWindowsTabsList_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParams', [
      mojo.internal.StructField('window_list', 0, 0, mojo.internal.Array(ash.boca.mojom.WindowSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ListCourses_ParamsSpec, 'ash.boca.mojom.PageHandler_ListCourses_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListCourses_ResponseParams', [
      mojo.internal.StructField('courses', 0, 0, mojo.internal.Array(ash.boca.mojom.CourseSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ListStudents_ParamsSpec, 'ash.boca.mojom.PageHandler_ListStudents_Params', [
      mojo.internal.StructField('course_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListStudents_ResponseParams', [
      mojo.internal.StructField('students', 0, 0, mojo.internal.Array(ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec, 'ash.boca.mojom.PageHandler_ListAssignments_Params', [
      mojo.internal.StructField('course_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ListAssignments_ResponseParams', [
      mojo.internal.StructField('assignments', 0, 0, mojo.internal.Array(ash.boca.mojom.AssignmentSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_CreateSession_ParamsSpec, 'ash.boca.mojom.PageHandler_CreateSession_Params', [
      mojo.internal.StructField('config', 0, 0, ash.boca.mojom.ConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_CreateSession_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.CreateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetSession_ParamsSpec, 'ash.boca.mojom.PageHandler_GetSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetSession_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, ash.boca.mojom.SessionResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_EndSession_ParamsSpec, 'ash.boca.mojom.PageHandler_EndSession_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_EndSession_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec, 'ash.boca.mojom.PageHandler_ExtendSessionDuration_Params', [
      mojo.internal.StructField('extended_duration', 0, 0, mojo_base.mojom.TimeDeltaSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec, 'ash.boca.mojom.PageHandler_RemoveStudent_Params', [
      mojo.internal.StructField('student_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RemoveStudent_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.RemoveStudentErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec, 'ash.boca.mojom.PageHandler_RenotifyStudent_Params', [
      mojo.internal.StructField('student_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.RenotifyStudentErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_AddStudents_ParamsSpec, 'ash.boca.mojom.PageHandler_AddStudents_Params', [
      mojo.internal.StructField('students', 0, 0, mojo.internal.Array(ash.boca.mojom.IdentitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_AddStudents_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.AddStudentsErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec, 'ash.boca.mojom.PageHandler_UpdateOnTaskConfig_Params', [
      mojo.internal.StructField('on_task_config', 0, 0, ash.boca.mojom.OnTaskConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec, 'ash.boca.mojom.PageHandler_UpdateCaptionConfig_Params', [
      mojo.internal.StructField('caption_config', 0, 0, ash.boca.mojom.CaptionConfigSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.UpdateSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec, 'ash.boca.mojom.PageHandler_SetFloatMode_Params', [
      mojo.internal.StructField('is_float_mode', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetFloatMode_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec, 'ash.boca.mojom.PageHandler_SubmitAccessCode_Params', [
      mojo.internal.StructField('access_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.SubmitAccessCodeErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_ViewStudentScreen_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.ViewStudentScreenErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec, 'ash.boca.mojom.PageHandler_EndViewScreenSession_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.EndViewScreenSessionErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec, 'ash.boca.mojom.PageHandler_SetViewScreenSessionActive_Params', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParams', [
      mojo.internal.StructField('error', 0, 0, ash.boca.mojom.SetViewScreenSessionActiveErrorSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec, 'ash.boca.mojom.PageHandler_GetUserPref_Params', [
      mojo.internal.StructField('pref', 0, 0, ash.boca.mojom.BocaValidPrefSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetUserPref_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec, 'ash.boca.mojom.PageHandler_SetUserPref_Params', [
      mojo.internal.StructField('pref', 0, 0, ash.boca.mojom.BocaValidPrefSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetUserPref_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec, 'ash.boca.mojom.PageHandler_SetSitePermission_Params', [
      mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('permission', 8, 0, ash.boca.mojom.PermissionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('setting', 16, 0, ash.boca.mojom.PermissionSettingSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_SetSitePermission_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_CloseTab_ParamsSpec, 'ash.boca.mojom.PageHandler_CloseTab_Params', [
      mojo.internal.StructField('tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_CloseTab_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec, 'ash.boca.mojom.PageHandler_OpenFeedbackDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec, 'ash.boca.mojom.PageHandler_RefreshWorkbook_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec, 'ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParams', [
      mojo.internal.StructField('state', 0, 0, ash.boca.mojom.SpeechRecognitionInstallStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec, 'ash.boca.mojom.PageHandler_StartSpotlight_Params', [
      mojo.internal.StructField('crd_connection_code', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StartSpotlight_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_PresentStudentScreen_Params', [
      mojo.internal.StructField('student', 0, 0, ash.boca.mojom.IdentitySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('receiver_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingStudentScreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_PresentOwnScreen_Params', [
      mojo.internal.StructField('receiver_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingOwnScreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec, 'ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

ash.boca.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.boca.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  authenticateWebview() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec,
      ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec,
      [],
      false);
  }

  getWindowsTabsList() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec,
      ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec,
      [],
      false);
  }

  listCourses() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.boca.mojom.PageHandler_ListCourses_ParamsSpec,
      ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec,
      [],
      false);
  }

  listStudents(course_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.boca.mojom.PageHandler_ListStudents_ParamsSpec,
      ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec,
      [course_id],
      false);
  }

  listAssignments(course_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec,
      ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec,
      [course_id],
      false);
  }

  createSession(config) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.boca.mojom.PageHandler_CreateSession_ParamsSpec,
      ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec,
      [config],
      false);
  }

  getSession() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.boca.mojom.PageHandler_GetSession_ParamsSpec,
      ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec,
      [],
      false);
  }

  endSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.boca.mojom.PageHandler_EndSession_ParamsSpec,
      ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec,
      [],
      false);
  }

  extendSessionDuration(extended_duration) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec,
      ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec,
      [extended_duration],
      false);
  }

  removeStudent(student_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec,
      ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec,
      [student_id],
      false);
  }

  renotifyStudent(student_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec,
      ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec,
      [student_id],
      false);
  }

  addStudents(students) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.boca.mojom.PageHandler_AddStudents_ParamsSpec,
      ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec,
      [students],
      false);
  }

  updateOnTaskConfig(on_task_config) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec,
      ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec,
      [on_task_config],
      false);
  }

  updateCaptionConfig(caption_config) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec,
      ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec,
      [caption_config],
      false);
  }

  setFloatMode(is_float_mode) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec,
      ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec,
      [is_float_mode],
      false);
  }

  submitAccessCode(access_code) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec,
      ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec,
      [access_code],
      false);
  }

  viewStudentScreen(id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec,
      ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec,
      [id],
      false);
  }

  endViewScreenSession(id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec,
      ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec,
      [id],
      false);
  }

  setViewScreenSessionActive(id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec,
      ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec,
      [id],
      false);
  }

  getUserPref(pref) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec,
      ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec,
      [pref],
      false);
  }

  setUserPref(pref, value) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec,
      ash.boca.mojom.PageHandler_SetUserPref_ResponseParamsSpec,
      [pref, value],
      false);
  }

  setSitePermission(url, permission, setting) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec,
      ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec,
      [url, permission, setting],
      false);
  }

  closeTab(tab_id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.boca.mojom.PageHandler_CloseTab_ParamsSpec,
      ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec,
      [tab_id],
      false);
  }

  openFeedbackDialog() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      ash.boca.mojom.PageHandler_OpenFeedbackDialog_ResponseParamsSpec,
      [],
      false);
  }

  refreshWorkbook() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec,
      ash.boca.mojom.PageHandler_RefreshWorkbook_ResponseParamsSpec,
      [],
      false);
  }

  getSpeechRecognitionInstallationStatus() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec,
      ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec,
      [],
      false);
  }

  startSpotlight(crd_connection_code) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec,
      ash.boca.mojom.PageHandler_StartSpotlight_ResponseParamsSpec,
      [crd_connection_code],
      false);
  }

  presentStudentScreen(student, receiver_id) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec,
      ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec,
      [student, receiver_id],
      false);
  }

  stopPresentingStudentScreen() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec,
      ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec,
      [],
      false);
  }

  presentOwnScreen(receiver_id) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec,
      ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec,
      [receiver_id],
      false);
  }

  stopPresentingOwnScreen() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec,
      ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec,
      [],
      false);
  }

};

ash.boca.mojom.PageHandler.getRemote = function() {
  let remote = new ash.boca.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.PageHandler',
    'context');
  return remote.$;
};

ash.boca.mojom.PageHandlerPtr = ash.boca.mojom.PageHandlerRemote;
ash.boca.mojom.PageHandlerRequest = ash.boca.mojom.PageHandlerPendingReceiver;


// Interface: Page
mojo.internal.Struct(
    ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnStudentActivityUpdated_Params', [
      mojo.internal.StructField('activities', 0, 0, mojo.internal.Array(ash.boca.mojom.IdentifiedActivitySpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSessionConfigUpdated_Params', [
      mojo.internal.StructField('config', 0, 0, ash.boca.mojom.ConfigResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec, 'ash.boca.mojom.Page_OnActiveNetworkStateChanged_Params', [
      mojo.internal.StructField('active_networks', 0, 0, mojo.internal.Array(ash.boca.mojom.NetworkInfoSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec, 'ash.boca.mojom.Page_OnLocalCaptionDisabled_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_Params', [
      mojo.internal.StructField('state', 0, 0, ash.boca.mojom.SpeechRecognitionInstallStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec, 'ash.boca.mojom.Page_OnSessionCaptionDisabled_Params', [
      mojo.internal.StructField('is_error', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec, 'ash.boca.mojom.Page_OnFrameDataReceived_Params', [
      mojo.internal.StructField('frame_data', 0, 0, skia.mojom.BitmapN32Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec, 'ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_Params', [
      mojo.internal.StructField('state', 0, 0, ash.boca.mojom.CrdConnectionStateSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec, 'ash.boca.mojom.Page_OnPresentStudentScreenEnded_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec, 'ash.boca.mojom.Page_OnPresentOwnScreenEnded_Params', [
    ],
    [[0, 8]]);

ash.boca.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.boca.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStudentActivityUpdated(activities) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec,
      null,
      [activities],
      false);
  }

  onSessionConfigUpdated(config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec,
      null,
      [config],
      false);
  }

  onActiveNetworkStateChanged(active_networks) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec,
      null,
      [active_networks],
      false);
  }

  onLocalCaptionDisabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec,
      null,
      [],
      false);
  }

  onSpeechRecognitionInstallStateUpdated(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec,
      null,
      [state],
      false);
  }

  onSessionCaptionDisabled(is_error) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec,
      null,
      [is_error],
      false);
  }

  onFrameDataReceived(frame_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec,
      null,
      [frame_data],
      false);
  }

  onSpotlightCrdSessionStatusUpdated(state) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec,
      null,
      [state],
      false);
  }

  onPresentStudentScreenEnded() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec,
      null,
      [],
      false);
  }

  onPresentOwnScreenEnded() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec,
      null,
      [],
      false);
  }

};

ash.boca.mojom.Page.getRemote = function() {
  let remote = new ash.boca.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.Page',
    'context');
  return remote.$;
};

ash.boca.mojom.PagePtr = ash.boca.mojom.PageRemote;
ash.boca.mojom.PageRequest = ash.boca.mojom.PagePendingReceiver;


// Interface: BocaPageHandlerFactory
mojo.internal.Struct(
    ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec, 'ash.boca.mojom.BocaPageHandlerFactory_Create_Params', [
      mojo.internal.StructField('handler', 0, 0, mojo.internal.InterfaceRequest(ash.boca.mojom.PageHandlerRemote), null, false, 0, undefined),
      mojo.internal.StructField('page', 8, 0, mojo.internal.InterfaceProxy(ash.boca.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca.mojom.BocaPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.BocaPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.boca.mojom.BocaPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca.mojom.BocaPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, page],
      false);
  }

};

ash.boca.mojom.BocaPageHandlerFactory.getRemote = function() {
  let remote = new ash.boca.mojom.BocaPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.BocaPageHandlerFactory',
    'context');
  return remote.$;
};

ash.boca.mojom.BocaPageHandlerFactoryPtr = ash.boca.mojom.BocaPageHandlerFactoryRemote;
ash.boca.mojom.BocaPageHandlerFactoryRequest = ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver;

