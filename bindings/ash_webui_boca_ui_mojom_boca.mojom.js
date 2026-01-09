// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/boca_ui/mojom/boca.mojom
// Module: ash.boca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.boca = ash.boca || {};
ash.boca.mojom = ash.boca.mojom || {};


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

// Interface: PageHandler
ash.boca.mojom.PageHandler = {};

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
      ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec.$,
      ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec.$,
      []);
  }

  getWindowsTabsList() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec.$,
      ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec.$,
      []);
  }

  listCourses() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.boca.mojom.PageHandler_ListCourses_ParamsSpec.$,
      ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec.$,
      []);
  }

  listStudents(course_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.boca.mojom.PageHandler_ListStudents_ParamsSpec.$,
      ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec.$,
      [course_id]);
  }

  listAssignments(course_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec.$,
      ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec.$,
      [course_id]);
  }

  createSession(config) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.boca.mojom.PageHandler_CreateSession_ParamsSpec.$,
      ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec.$,
      [config]);
  }

  getSession() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.boca.mojom.PageHandler_GetSession_ParamsSpec.$,
      ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec.$,
      []);
  }

  endSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.boca.mojom.PageHandler_EndSession_ParamsSpec.$,
      ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec.$,
      []);
  }

  extendSessionDuration(extended_duration) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec.$,
      ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec.$,
      [extended_duration]);
  }

  removeStudent(student_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec.$,
      ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec.$,
      [student_id]);
  }

  renotifyStudent(student_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec.$,
      ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec.$,
      [student_id]);
  }

  addStudents(students) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.boca.mojom.PageHandler_AddStudents_ParamsSpec.$,
      ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec.$,
      [students]);
  }

  updateOnTaskConfig(on_task_config) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec.$,
      ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec.$,
      [on_task_config]);
  }

  updateCaptionConfig(caption_config) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec.$,
      ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec.$,
      [caption_config]);
  }

  setFloatMode(is_float_mode) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec.$,
      ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec.$,
      [is_float_mode]);
  }

  submitAccessCode(access_code) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec.$,
      ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec.$,
      [access_code]);
  }

  viewStudentScreen(id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec.$,
      ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec.$,
      [id]);
  }

  endViewScreenSession(id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec.$,
      ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec.$,
      [id]);
  }

  setViewScreenSessionActive(id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec.$,
      ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec.$,
      [id]);
  }

  getUserPref(pref) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec.$,
      ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec.$,
      [pref]);
  }

  setUserPref(pref, value) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec.$,
      null,
      [pref, value]);
  }

  setSitePermission(url, permission, setting) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec.$,
      ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec.$,
      [url, permission, setting]);
  }

  closeTab(tab_id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.boca.mojom.PageHandler_CloseTab_ParamsSpec.$,
      ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec.$,
      [tab_id]);
  }

  openFeedbackDialog() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec.$,
      null,
      []);
  }

  refreshWorkbook() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec.$,
      null,
      []);
  }

  getSpeechRecognitionInstallationStatus() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec.$,
      ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec.$,
      []);
  }

  startSpotlight(crd_connection_code) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec.$,
      null,
      [crd_connection_code]);
  }

  presentStudentScreen(student, receiver_id) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec.$,
      ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec.$,
      [student, receiver_id]);
  }

  stopPresentingStudentScreen() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec.$,
      ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec.$,
      []);
  }

  presentOwnScreen(receiver_id) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec.$,
      ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec.$,
      [receiver_id]);
  }

  stopPresentingOwnScreen() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec.$,
      ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for AuthenticateWebview
ash.boca.mojom.PageHandler_AuthenticateWebview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AuthenticateWebview_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AuthenticateWebview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetWindowsTabsList
ash.boca.mojom.PageHandler_GetWindowsTabsList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetWindowsTabsList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetWindowsTabsList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'window_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListCourses
ash.boca.mojom.PageHandler_ListCourses_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListCourses_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_ListCourses_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListCourses_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'courses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListStudents
ash.boca.mojom.PageHandler_ListStudents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListStudents_Params',
      packedSize: 16,
      fields: [
        { name: 'course_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_ListStudents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListStudents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'students', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ListAssignments
ash.boca.mojom.PageHandler_ListAssignments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListAssignments_Params',
      packedSize: 16,
      fields: [
        { name: 'course_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_ListAssignments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListAssignments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'assignments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CreateSession
ash.boca.mojom.PageHandler_CreateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CreateSession_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_CreateSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CreateSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSession
ash.boca.mojom.PageHandler_GetSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_GetSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EndSession
ash.boca.mojom.PageHandler_EndSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_EndSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ExtendSessionDuration
ash.boca.mojom.PageHandler_ExtendSessionDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ExtendSessionDuration_Params',
      packedSize: 16,
      fields: [
        { name: 'extended_duration', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ExtendSessionDuration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RemoveStudent
ash.boca.mojom.PageHandler_RemoveStudent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RemoveStudent_Params',
      packedSize: 16,
      fields: [
        { name: 'student_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_RemoveStudent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RemoveStudent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RenotifyStudent
ash.boca.mojom.PageHandler_RenotifyStudent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RenotifyStudent_Params',
      packedSize: 16,
      fields: [
        { name: 'student_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RenotifyStudent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for AddStudents
ash.boca.mojom.PageHandler_AddStudents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AddStudents_Params',
      packedSize: 16,
      fields: [
        { name: 'students', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_AddStudents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AddStudents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateOnTaskConfig
ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateOnTaskConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'on_task_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateOnTaskConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for UpdateCaptionConfig
ash.boca.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateCaptionConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'caption_config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateCaptionConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFloatMode
ash.boca.mojom.PageHandler_SetFloatMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetFloatMode_Params',
      packedSize: 16,
      fields: [
        { name: 'is_float_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_SetFloatMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetFloatMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SubmitAccessCode
ash.boca.mojom.PageHandler_SubmitAccessCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SubmitAccessCode_Params',
      packedSize: 16,
      fields: [
        { name: 'access_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SubmitAccessCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ViewStudentScreen
ash.boca.mojom.PageHandler_ViewStudentScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ViewStudentScreen_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ViewStudentScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for EndViewScreenSession
ash.boca.mojom.PageHandler_EndViewScreenSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndViewScreenSession_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndViewScreenSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetViewScreenSessionActive
ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetViewScreenSessionActive_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetViewScreenSessionActive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetUserPref
ash.boca.mojom.PageHandler_GetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetUserPref_Params',
      packedSize: 16,
      fields: [
        { name: 'pref', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_GetUserPref_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetUserPref_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetUserPref
ash.boca.mojom.PageHandler_SetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetUserPref_Params',
      packedSize: 24,
      fields: [
        { name: 'pref', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetSitePermission
ash.boca.mojom.PageHandler_SetSitePermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetSitePermission_Params',
      packedSize: 32,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'setting', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_SetSitePermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetSitePermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for CloseTab
ash.boca.mojom.PageHandler_CloseTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CloseTab_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_CloseTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CloseTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OpenFeedbackDialog
ash.boca.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.OpenFeedbackDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for RefreshWorkbook
ash.boca.mojom.PageHandler_RefreshWorkbook_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RefreshWorkbook_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSpeechRecognitionInstallationStatus
ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSpeechRecognitionInstallationStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSpeechRecognitionInstallationStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StartSpotlight
ash.boca.mojom.PageHandler_StartSpotlight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StartSpotlight_Params',
      packedSize: 16,
      fields: [
        { name: 'crd_connection_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PresentStudentScreen
ash.boca.mojom.PageHandler_PresentStudentScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentStudentScreen_Params',
      packedSize: 24,
      fields: [
        { name: 'student', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'receiver_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentStudentScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopPresentingStudentScreen
ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingStudentScreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingStudentScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for PresentOwnScreen
ash.boca.mojom.PageHandler_PresentOwnScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentOwnScreen_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentOwnScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for StopPresentingOwnScreen
ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingOwnScreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

ash.boca.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingOwnScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.boca.mojom.PageHandlerPtr = ash.boca.mojom.PageHandlerRemote;
ash.boca.mojom.PageHandlerRequest = ash.boca.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.boca.mojom.Page = {};

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
      ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec.$,
      null,
      [activities]);
  }

  onSessionConfigUpdated(config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec.$,
      null,
      [config]);
  }

  onActiveNetworkStateChanged(active_networks) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec.$,
      null,
      [active_networks]);
  }

  onLocalCaptionDisabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec.$,
      null,
      []);
  }

  onSpeechRecognitionInstallStateUpdated(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec.$,
      null,
      [state]);
  }

  onSessionCaptionDisabled(is_error) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec.$,
      null,
      [is_error]);
  }

  onFrameDataReceived(frame_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec.$,
      null,
      [frame_data]);
  }

  onSpotlightCrdSessionStatusUpdated(state) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec.$,
      null,
      [state]);
  }

  onPresentStudentScreenEnded() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec.$,
      null,
      []);
  }

  onPresentOwnScreenEnded() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec.$,
      null,
      []);
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

// ParamsSpec for OnStudentActivityUpdated
ash.boca.mojom.Page_OnStudentActivityUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnStudentActivityUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'activities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSessionConfigUpdated
ash.boca.mojom.Page_OnSessionConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSessionConfigUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnActiveNetworkStateChanged
ash.boca.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnActiveNetworkStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'active_networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnLocalCaptionDisabled
ash.boca.mojom.Page_OnLocalCaptionDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnLocalCaptionDisabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSpeechRecognitionInstallStateUpdated
ash.boca.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSpeechRecognitionInstallStateUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSessionCaptionDisabled
ash.boca.mojom.Page_OnSessionCaptionDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSessionCaptionDisabled_Params',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnFrameDataReceived
ash.boca.mojom.Page_OnFrameDataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnFrameDataReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnSpotlightCrdSessionStatusUpdated
ash.boca.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSpotlightCrdSessionStatusUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPresentStudentScreenEnded
ash.boca.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnPresentStudentScreenEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for OnPresentOwnScreenEnded
ash.boca.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnPresentOwnScreenEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.boca.mojom.PagePtr = ash.boca.mojom.PageRemote;
ash.boca.mojom.PageRequest = ash.boca.mojom.PagePendingReceiver;


// Interface: BocaPageHandlerFactory
ash.boca.mojom.BocaPageHandlerFactory = {};

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
      ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec.$,
      null,
      [handler, page]);
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

// ParamsSpec for Create
ash.boca.mojom.BocaPageHandlerFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.BocaPageHandlerFactory.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
ash.boca.mojom.BocaPageHandlerFactoryPtr = ash.boca.mojom.BocaPageHandlerFactoryRemote;
ash.boca.mojom.BocaPageHandlerFactoryRequest = ash.boca.mojom.BocaPageHandlerFactoryPendingReceiver;

