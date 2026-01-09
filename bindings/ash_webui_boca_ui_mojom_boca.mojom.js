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
};

// Enum: StudentStatusDetail
ash.boca.mojom.StudentStatusDetail = {
  kUnknown: 0,
  hasn: 1,
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
};

// Enum: RenotifyStudentError
ash.boca.mojom.RenotifyStudentError = {
};

// Enum: AddStudentsError
ash.boca.mojom.AddStudentsError = {
};

// Enum: SubmitAccessCodeError
ash.boca.mojom.SubmitAccessCodeError = {
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
};

// Enum: CrdConnectionState
ash.boca.mojom.CrdConnectionState = {
  kUnknown: 0,
  kConnecting: 1,
  kConnected: 2,
  kDisconnected: 3,
  kFailed: 4,
};

// Struct: TabInfo
ash.boca.mojom.TabInfo = class {
  constructor(values = {}) {
    this.favicon = values.favicon !== undefined ? values.favicon : 0;
  }
};

// Struct: Identity
ash.boca.mojom.Identity = class {
  constructor(values = {}) {
    this.photo_url = values.photo_url !== undefined ? values.photo_url : "";
  }
};

// Struct: Course
ash.boca.mojom.Course = class {
  constructor(values = {}) {
    this.section = values.section !== undefined ? values.section : "";
  }
};

// Struct: Material
ash.boca.mojom.Material = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : "";
  }
};

// Struct: Assignment
ash.boca.mojom.Assignment = class {
  constructor(values = {}) {
    this.type = values.type !== undefined ? values.type : "";
  }
};

// Struct: Window
ash.boca.mojom.Window = class {
  constructor(values = {}) {
    this.tab_list = values.tab_list !== undefined ? values.tab_list : "";
  }
};

// Struct: NetworkInfo
ash.boca.mojom.NetworkInfo = class {
  constructor(values = {}) {
    this.signal_strength = values.signal_strength !== undefined ? values.signal_strength : 0;
  }
};

// Struct: Config
ash.boca.mojom.Config = class {
  constructor(values = {}) {
    this.access_code = values.access_code !== undefined ? values.access_code : "";
  }
};

// Struct: CaptionConfig
ash.boca.mojom.CaptionConfig = class {
  constructor(values = {}) {
    this.session_translation_enabled = values.session_translation_enabled !== undefined ? values.session_translation_enabled : false;
  }
};

// Struct: ControlledTab
ash.boca.mojom.ControlledTab = class {
  constructor(values = {}) {
    this.navigation_type = values.navigation_type !== undefined ? values.navigation_type : null;
  }
};

// Struct: OnTaskConfig
ash.boca.mojom.OnTaskConfig = class {
  constructor(values = {}) {
    this.tabs = values.tabs !== undefined ? values.tabs : false;
  }
};

// Struct: Session
ash.boca.mojom.Session = class {
  constructor(values = {}) {
    this.activities = values.activities !== undefined ? values.activities : [];
  }
};

// Struct: StudentActivity
ash.boca.mojom.StudentActivity = class {
  constructor(values = {}) {
    this.view_screen_session_code = values.view_screen_session_code !== undefined ? values.view_screen_session_code : false;
  }
};

// Struct: IdentifiedActivity
ash.boca.mojom.IdentifiedActivity = class {
  constructor(values = {}) {
    this.activity = values.activity !== undefined ? values.activity : "";
  }
};

// Interface: PageHandler
ash.boca.mojom.PageHandlerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.boca.mojom.PageHandler';
  }

  authenticateWebview() {
    // Method: AuthenticateWebview
    return new Promise((resolve) => {
      // Call: AuthenticateWebview()
      resolve({});
    });
  }

  getWindowsTabsList() {
    // Method: GetWindowsTabsList
    return new Promise((resolve) => {
      // Call: GetWindowsTabsList()
      resolve({});
    });
  }

  listCourses() {
    // Method: ListCourses
    return new Promise((resolve) => {
      // Call: ListCourses()
      resolve({});
    });
  }

  listStudents(course_id) {
    // Method: ListStudents
    return new Promise((resolve) => {
      // Call: ListStudents(course_id)
      resolve({});
    });
  }

  listAssignments(course_id) {
    // Method: ListAssignments
    return new Promise((resolve) => {
      // Call: ListAssignments(course_id)
      resolve({});
    });
  }

  createSession(config) {
    // Method: CreateSession
    return new Promise((resolve) => {
      // Call: CreateSession(config)
      resolve({});
    });
  }

  getSession() {
    // Method: GetSession
    return new Promise((resolve) => {
      // Call: GetSession()
      resolve({});
    });
  }

  endSession() {
    // Method: EndSession
    return new Promise((resolve) => {
      // Call: EndSession()
      resolve({});
    });
  }

  extendSessionDuration(extended_duration) {
    // Method: ExtendSessionDuration
    return new Promise((resolve) => {
      // Call: ExtendSessionDuration(extended_duration)
      resolve({});
    });
  }

  removeStudent(student_id) {
    // Method: RemoveStudent
    return new Promise((resolve) => {
      // Call: RemoveStudent(student_id)
      resolve({});
    });
  }

  renotifyStudent(student_id) {
    // Method: RenotifyStudent
    return new Promise((resolve) => {
      // Call: RenotifyStudent(student_id)
      resolve({});
    });
  }

  addStudents(students) {
    // Method: AddStudents
    return new Promise((resolve) => {
      // Call: AddStudents(students)
      resolve({});
    });
  }

  updateOnTaskConfig(on_task_config) {
    // Method: UpdateOnTaskConfig
    return new Promise((resolve) => {
      // Call: UpdateOnTaskConfig(on_task_config)
      resolve({});
    });
  }

  updateCaptionConfig(caption_config) {
    // Method: UpdateCaptionConfig
    return new Promise((resolve) => {
      // Call: UpdateCaptionConfig(caption_config)
      resolve({});
    });
  }

  setFloatMode(is_float_mode) {
    // Method: SetFloatMode
    return new Promise((resolve) => {
      // Call: SetFloatMode(is_float_mode)
      resolve({});
    });
  }

  submitAccessCode(access_code) {
    // Method: SubmitAccessCode
    return new Promise((resolve) => {
      // Call: SubmitAccessCode(access_code)
      resolve({});
    });
  }

  viewStudentScreen(id) {
    // Method: ViewStudentScreen
    return new Promise((resolve) => {
      // Call: ViewStudentScreen(id)
      resolve({});
    });
  }

  endViewScreenSession(id) {
    // Method: EndViewScreenSession
    return new Promise((resolve) => {
      // Call: EndViewScreenSession(id)
      resolve({});
    });
  }

  setViewScreenSessionActive(id) {
    // Method: SetViewScreenSessionActive
    return new Promise((resolve) => {
      // Call: SetViewScreenSessionActive(id)
      resolve({});
    });
  }

  getUserPref(pref) {
    // Method: GetUserPref
    return new Promise((resolve) => {
      // Call: GetUserPref(pref)
      resolve({});
    });
  }

  setUserPref(pref, value) {
    // Method: SetUserPref
    // Call: SetUserPref(pref, value)
  }

  setSitePermission(url, permission, setting) {
    // Method: SetSitePermission
    return new Promise((resolve) => {
      // Call: SetSitePermission(url, permission, setting)
      resolve({});
    });
  }

  closeTab(tab_id) {
    // Method: CloseTab
    return new Promise((resolve) => {
      // Call: CloseTab(tab_id)
      resolve({});
    });
  }

  openFeedbackDialog() {
    // Method: OpenFeedbackDialog
    // Call: OpenFeedbackDialog()
  }

  refreshWorkbook() {
    // Method: RefreshWorkbook
    // Call: RefreshWorkbook()
  }

  getSpeechRecognitionInstallationStatus() {
    // Method: GetSpeechRecognitionInstallationStatus
    return new Promise((resolve) => {
      // Call: GetSpeechRecognitionInstallationStatus()
      resolve({});
    });
  }

  startSpotlight(crd_connection_code) {
    // Method: StartSpotlight
    // Call: StartSpotlight(crd_connection_code)
  }

  presentStudentScreen(student, receiver_id) {
    // Method: PresentStudentScreen
    return new Promise((resolve) => {
      // Call: PresentStudentScreen(student, receiver_id)
      resolve({});
    });
  }

  stopPresentingStudentScreen() {
    // Method: StopPresentingStudentScreen
    return new Promise((resolve) => {
      // Call: StopPresentingStudentScreen()
      resolve({});
    });
  }

  presentOwnScreen(receiver_id) {
    // Method: PresentOwnScreen
    return new Promise((resolve) => {
      // Call: PresentOwnScreen(receiver_id)
      resolve({});
    });
  }

  stopPresentingOwnScreen() {
    // Method: StopPresentingOwnScreen
    return new Promise((resolve) => {
      // Call: StopPresentingOwnScreen()
      resolve({});
    });
  }

};

ash.boca.mojom.PageHandlerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: Page
ash.boca.mojom.PagePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.boca.mojom.Page';
  }

  onStudentActivityUpdated(activities) {
    // Method: OnStudentActivityUpdated
    // Call: OnStudentActivityUpdated(activities)
  }

  onSessionConfigUpdated(config) {
    // Method: OnSessionConfigUpdated
    // Call: OnSessionConfigUpdated(config)
  }

  onActiveNetworkStateChanged(active_networks) {
    // Method: OnActiveNetworkStateChanged
    // Call: OnActiveNetworkStateChanged(active_networks)
  }

  onLocalCaptionDisabled() {
    // Method: OnLocalCaptionDisabled
    // Call: OnLocalCaptionDisabled()
  }

  onSpeechRecognitionInstallStateUpdated(state) {
    // Method: OnSpeechRecognitionInstallStateUpdated
    // Call: OnSpeechRecognitionInstallStateUpdated(state)
  }

  onSessionCaptionDisabled(is_error) {
    // Method: OnSessionCaptionDisabled
    // Call: OnSessionCaptionDisabled(is_error)
  }

  onFrameDataReceived(frame_data) {
    // Method: OnFrameDataReceived
    // Call: OnFrameDataReceived(frame_data)
  }

  onSpotlightCrdSessionStatusUpdated(state) {
    // Method: OnSpotlightCrdSessionStatusUpdated
    // Call: OnSpotlightCrdSessionStatusUpdated(state)
  }

  onPresentStudentScreenEnded() {
    // Method: OnPresentStudentScreenEnded
    // Call: OnPresentStudentScreenEnded()
  }

  onPresentOwnScreenEnded() {
    // Method: OnPresentOwnScreenEnded
    // Call: OnPresentOwnScreenEnded()
  }

};

ash.boca.mojom.PageRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: BocaPageHandlerFactory
ash.boca.mojom.BocaPageHandlerFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'ash.boca.mojom.BocaPageHandlerFactory';
  }

  create(handler, page) {
    // Method: Create
    // Call: Create(handler, page)
  }

};

ash.boca.mojom.BocaPageHandlerFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
