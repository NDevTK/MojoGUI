// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/boca_ui/mojom/boca.mojom
// Module: ash.boca.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.boca = ash.boca || {};
ash.boca.boca.mojom = ash.boca.boca.mojom || {};
var url = url || {};
var skia = skia || {};


// Enum: MaterialType
ash.boca.boca.mojom.mojom.MaterialType = {
  kUnknown: 0,
  kSharedDriveFile: 1,
  kYoutubeVideo: 2,
  kLink: 3,
  kForm: 4,
};
ash.boca.boca.mojom.mojom.MaterialTypeSpec = { $: mojo.internal.Enum() };

// Enum: AssignmentType
ash.boca.boca.mojom.mojom.AssignmentType = {
  kUnspecified: 0,
  kAssignment: 1,
  kShortAnswerQuestion: 2,
  kMultipleChoiceQuestion: 3,
};
ash.boca.boca.mojom.mojom.AssignmentTypeSpec = { $: mojo.internal.Enum() };

// Enum: NetworkType
ash.boca.boca.mojom.mojom.NetworkType = {
  kCellular: 0,
  kEthernet: 1,
  kWiFi: 2,
  kUnsupported: 3,
};
ash.boca.boca.mojom.mojom.NetworkTypeSpec = { $: mojo.internal.Enum() };

// Enum: Permission
ash.boca.boca.mojom.mojom.Permission = {
  kMicrophone: 0,
  kCamera: 1,
};
ash.boca.boca.mojom.mojom.PermissionSpec = { $: mojo.internal.Enum() };

// Enum: PermissionSetting
ash.boca.boca.mojom.mojom.PermissionSetting = {
  kAllow: 0,
  kAsk: 1,
  kBlock: 2,
};
ash.boca.boca.mojom.mojom.PermissionSettingSpec = { $: mojo.internal.Enum() };

// Enum: NavigationType
ash.boca.boca.mojom.mojom.NavigationType = {
  kUnknown: 0,
  kOpen: 1,
  kBlock: 2,
  kDomain: 3,
  kLimited: 4,
  kSameDomainOpenOtherDomainLimited: 5,
  kWorkspace: 6,
};
ash.boca.boca.mojom.mojom.NavigationTypeSpec = { $: mojo.internal.Enum() };

// Enum: JoinMethod
ash.boca.boca.mojom.mojom.JoinMethod = {
  kRoster: 0,
  kAccessCode: 1,
};
ash.boca.boca.mojom.mojom.JoinMethodSpec = { $: mojo.internal.Enum() };

// Enum: BocaValidPref
ash.boca.boca.mojom.mojom.BocaValidPref = {
  kNavigationSetting: 0,
  kCaptionEnablementSetting: 1,
  kDefaultMediaStreamSetting: 2,
  kOOBEAccessCount: 3,
  kKioskReceiverCodes: 4,
};
ash.boca.boca.mojom.mojom.BocaValidPrefSpec = { $: mojo.internal.Enum() };

// Enum: StudentStatusDetail
ash.boca.boca.mojom.mojom.StudentStatusDetail = {
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
ash.boca.boca.mojom.mojom.StudentStatusDetailSpec = { $: mojo.internal.Enum() };

// Enum: GetSessionError
ash.boca.boca.mojom.mojom.GetSessionError = {
  kHTTPError: 0,
  kEmpty: 1,
};
ash.boca.boca.mojom.mojom.GetSessionErrorSpec = { $: mojo.internal.Enum() };

// Enum: UpdateSessionError
ash.boca.boca.mojom.mojom.UpdateSessionError = {
  kInvalid: 0,
  kHTTPError: 1,
  kPreconditionFailed: 2,
};
ash.boca.boca.mojom.mojom.UpdateSessionErrorSpec = { $: mojo.internal.Enum() };

// Enum: RemoveStudentError
ash.boca.boca.mojom.mojom.RemoveStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};
ash.boca.boca.mojom.mojom.RemoveStudentErrorSpec = { $: mojo.internal.Enum() };

// Enum: RenotifyStudentError
ash.boca.boca.mojom.mojom.RenotifyStudentError = {
  kInvalid: 0,
  kHTTPError: 1,
};
ash.boca.boca.mojom.mojom.RenotifyStudentErrorSpec = { $: mojo.internal.Enum() };

// Enum: AddStudentsError
ash.boca.boca.mojom.mojom.AddStudentsError = {
  kInvalid: 0,
  kHTTPError: 1,
};
ash.boca.boca.mojom.mojom.AddStudentsErrorSpec = { $: mojo.internal.Enum() };

// Enum: SubmitAccessCodeError
ash.boca.boca.mojom.mojom.SubmitAccessCodeError = {
  kInvalid: 0,
  kNetworkRestriction: 1,
};
ash.boca.boca.mojom.mojom.SubmitAccessCodeErrorSpec = { $: mojo.internal.Enum() };

// Enum: ViewStudentScreenError
ash.boca.boca.mojom.mojom.ViewStudentScreenError = {
  kHTTPError: 0,
};
ash.boca.boca.mojom.mojom.ViewStudentScreenErrorSpec = { $: mojo.internal.Enum() };

// Enum: EndViewScreenSessionError
ash.boca.boca.mojom.mojom.EndViewScreenSessionError = {
  kHTTPError: 0,
};
ash.boca.boca.mojom.mojom.EndViewScreenSessionErrorSpec = { $: mojo.internal.Enum() };

// Enum: SetViewScreenSessionActiveError
ash.boca.boca.mojom.mojom.SetViewScreenSessionActiveError = {
  kHTTPError: 0,
};
ash.boca.boca.mojom.mojom.SetViewScreenSessionActiveErrorSpec = { $: mojo.internal.Enum() };

// Enum: SpeechRecognitionInstallState
ash.boca.boca.mojom.mojom.SpeechRecognitionInstallState = {
  kUnknown: 0,
  kSystemLanguageUnsupported: 1,
  kInProgress: 2,
  kFailed: 3,
  kReady: 4,
};
ash.boca.boca.mojom.mojom.SpeechRecognitionInstallStateSpec = { $: mojo.internal.Enum() };

// Enum: CreateSessionError
ash.boca.boca.mojom.mojom.CreateSessionError = {
  kHTTPError: 0,
  kNetworkRestriction: 1,
};
ash.boca.boca.mojom.mojom.CreateSessionErrorSpec = { $: mojo.internal.Enum() };

// Enum: CrdConnectionState
ash.boca.boca.mojom.mojom.CrdConnectionState = {
  kUnknown: 0,
  kConnecting: 1,
  kConnected: 2,
  kDisconnected: 3,
  kFailed: 4,
};
ash.boca.boca.mojom.mojom.CrdConnectionStateSpec = { $: mojo.internal.Enum() };

// Union: SessionResult
ash.boca.boca.mojom.mojom.SessionResultSpec = { $: mojo.internal.Union(
    'ash.boca.mojom.SessionResult', {
      'error': {
        'ordinal': 0,
        'type': ash.boca.mojom.GetSessionErrorSpec,
      }},
      'session': {
        'ordinal': 1,
        'type': ash.boca.mojom.SessionSpec,
      }},
    })
};

// Union: ConfigResult
ash.boca.boca.mojom.mojom.ConfigResultSpec = { $: mojo.internal.Union(
    'ash.boca.mojom.ConfigResult', {
      'error': {
        'ordinal': 0,
        'type': ash.boca.mojom.GetSessionErrorSpec,
      }},
      'config': {
        'ordinal': 1,
        'type': ash.boca.mojom.ConfigSpec,
      }},
    })
};

// Struct: TabInfo
ash.boca.boca.mojom.mojom.TabInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.TabInfo',
      packedSize: 40,
      fields: [
        { name: 'id_$flag', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'id_$value', originalFieldName: 'id' } },
        { name: 'id_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'id_$flag', originalFieldName: 'id' } },
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'favicon', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Identity
ash.boca.boca.mojom.mojom.IdentitySpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Identity',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'email', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'photo_url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: Course
ash.boca.boca.mojom.mojom.CourseSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Course',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'section', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Material
ash.boca.boca.mojom.mojom.MaterialSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Material',
      packedSize: 24,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 8, packedBitOffset: 0, type: ash.boca.mojom.MaterialTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Assignment
ash.boca.boca.mojom.mojom.AssignmentSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Assignment',
      packedSize: 48,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'last_update_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: false, minVersion: 0 },
        { name: 'materials', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.MaterialSpec, false), nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 32, packedBitOffset: 0, type: ash.boca.mojom.AssignmentTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: Window
ash.boca.boca.mojom.mojom.WindowSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Window',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'tab_list', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.TabInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NetworkInfo
ash.boca.boca.mojom.mojom.NetworkInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.NetworkInfo',
      packedSize: 32,
      fields: [
        { name: 'state', packedOffset: 8, packedBitOffset: 0, type: chromeos.network_config.mojom.ConnectionStateTypeSpec, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 12, packedBitOffset: 0, type: ash.boca.mojom.NetworkTypeSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'signal_strength', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Config
ash.boca.boca.mojom.mojom.ConfigSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Config',
      packedSize: 72,
      fields: [
        { name: 'session_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'session_start_time', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.JSTimeSpec, nullable: true, minVersion: 0 },
        { name: 'teacher', packedOffset: 16, packedBitOffset: 0, type: ash.boca.mojom.IdentitySpec, nullable: true, minVersion: 0 },
        { name: 'students', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.IdentitySpec, false), nullable: false, minVersion: 0 },
        { name: 'students_join_via_code', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.IdentitySpec, false), nullable: false, minVersion: 0 },
        { name: 'on_task_config', packedOffset: 40, packedBitOffset: 0, type: ash.boca.mojom.OnTaskConfigSpec, nullable: false, minVersion: 0 },
        { name: 'caption_config', packedOffset: 48, packedBitOffset: 0, type: ash.boca.mojom.CaptionConfigSpec, nullable: false, minVersion: 0 },
        { name: 'access_code', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 72}]
    }
  }
};

// Struct: CaptionConfig
ash.boca.boca.mojom.mojom.CaptionConfigSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.CaptionConfig',
      packedSize: 16,
      fields: [
        { name: 'session_caption_enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'local_caption_enabled', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'session_translation_enabled', packedOffset: 0, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ControlledTab
ash.boca.boca.mojom.mojom.ControlledTabSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.ControlledTab',
      packedSize: 24,
      fields: [
        { name: 'tab', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.TabInfoSpec, nullable: false, minVersion: 0 },
        { name: 'navigation_type', packedOffset: 8, packedBitOffset: 0, type: ash.boca.mojom.NavigationTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: OnTaskConfig
ash.boca.boca.mojom.mojom.OnTaskConfigSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.OnTaskConfig',
      packedSize: 24,
      fields: [
        { name: 'is_locked', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_paused', packedOffset: 8, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'tabs', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.ControlledTabSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: Session
ash.boca.boca.mojom.mojom.SessionSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Session',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.ConfigSpec, nullable: false, minVersion: 0 },
        { name: 'activities', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.IdentifiedActivitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: StudentActivity
ash.boca.boca.mojom.mojom.StudentActivitySpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.StudentActivity',
      packedSize: 40,
      fields: [
        { name: 'student_status_detail', packedOffset: 16, packedBitOffset: 0, type: ash.boca.mojom.StudentStatusDetailSpec, nullable: false, minVersion: 0 },
        { name: 'is_active', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'active_tab', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'is_caption_enabled', packedOffset: 24, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_hand_raised', packedOffset: 24, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'join_method', packedOffset: 20, packedBitOffset: 0, type: ash.boca.mojom.JoinMethodSpec, nullable: false, minVersion: 0 },
        { name: 'view_screen_session_code', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: IdentifiedActivity
ash.boca.boca.mojom.mojom.IdentifiedActivitySpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.IdentifiedActivity',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity', packedOffset: 8, packedBitOffset: 0, type: ash.boca.mojom.StudentActivitySpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PageHandler
ash.boca.boca.mojom.mojom.PageHandler = {};

ash.boca.boca.mojom.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca.boca.mojom.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca.boca.mojom.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.boca.boca.mojom.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca.boca.mojom.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  authenticateWebview() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_AuthenticateWebview_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec,
      []);
  }

  getWindowsTabsList() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_GetWindowsTabsList_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec,
      []);
  }

  listCourses() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_ListCourses_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_ListCourses_ResponseParamsSpec,
      []);
  }

  listStudents(course_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_ListStudents_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_ListStudents_ResponseParamsSpec,
      [course_id]);
  }

  listAssignments(course_id) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_ListAssignments_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_ListAssignments_ResponseParamsSpec,
      [course_id]);
  }

  createSession(config) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_CreateSession_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_CreateSession_ResponseParamsSpec,
      [config]);
  }

  getSession() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_GetSession_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_GetSession_ResponseParamsSpec,
      []);
  }

  endSession() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_EndSession_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_EndSession_ResponseParamsSpec,
      []);
  }

  extendSessionDuration(extended_duration) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_ExtendSessionDuration_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec,
      [extended_duration]);
  }

  removeStudent(student_id) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_RemoveStudent_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_RemoveStudent_ResponseParamsSpec,
      [student_id]);
  }

  renotifyStudent(student_id) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_RenotifyStudent_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec,
      [student_id]);
  }

  addStudents(students) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_AddStudents_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_AddStudents_ResponseParamsSpec,
      [students]);
  }

  updateOnTaskConfig(on_task_config) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec,
      [on_task_config]);
  }

  updateCaptionConfig(caption_config) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec,
      [caption_config]);
  }

  setFloatMode(is_float_mode) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_SetFloatMode_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_SetFloatMode_ResponseParamsSpec,
      [is_float_mode]);
  }

  submitAccessCode(access_code) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_SubmitAccessCode_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec,
      [access_code]);
  }

  viewStudentScreen(id) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_ViewStudentScreen_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec,
      [id]);
  }

  endViewScreenSession(id) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_EndViewScreenSession_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec,
      [id]);
  }

  setViewScreenSessionActive(id) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec,
      [id]);
  }

  getUserPref(pref) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_GetUserPref_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_GetUserPref_ResponseParamsSpec,
      [pref]);
  }

  setUserPref(pref, value) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_SetUserPref_ParamsSpec,
      null,
      [pref, value]);
  }

  setSitePermission(url, permission, setting) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_SetSitePermission_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_SetSitePermission_ResponseParamsSpec,
      [url, permission, setting]);
  }

  closeTab(tab_id) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_CloseTab_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_CloseTab_ResponseParamsSpec,
      [tab_id]);
  }

  openFeedbackDialog() {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec,
      null,
      []);
  }

  refreshWorkbook() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_RefreshWorkbook_ParamsSpec,
      null,
      []);
  }

  getSpeechRecognitionInstallationStatus() {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec,
      []);
  }

  startSpotlight(crd_connection_code) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_StartSpotlight_ParamsSpec,
      null,
      [crd_connection_code]);
  }

  presentStudentScreen(student, receiver_id) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_PresentStudentScreen_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec,
      [student, receiver_id]);
  }

  stopPresentingStudentScreen() {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec,
      []);
  }

  presentOwnScreen(receiver_id) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_PresentOwnScreen_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec,
      [receiver_id]);
  }

  stopPresentingOwnScreen() {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      ash.boca.boca.mojom.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec,
      ash.boca.boca.mojom.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec,
      []);
  }

};

ash.boca.boca.mojom.mojom.PageHandler.getRemote = function() {
  let remote = new ash.boca.boca.mojom.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for AuthenticateWebview
ash.boca.boca.mojom.mojom.PageHandler_AuthenticateWebview_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AuthenticateWebview_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_AuthenticateWebview_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AuthenticateWebview_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetWindowsTabsList
ash.boca.boca.mojom.mojom.PageHandler_GetWindowsTabsList_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetWindowsTabsList_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_GetWindowsTabsList_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetWindowsTabsList_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'window_list', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.WindowSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ListCourses
ash.boca.boca.mojom.mojom.PageHandler_ListCourses_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListCourses_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_ListCourses_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListCourses_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'courses', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.CourseSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ListStudents
ash.boca.boca.mojom.mojom.PageHandler_ListStudents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListStudents_Params',
      packedSize: 16,
      fields: [
        { name: 'course_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_ListStudents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListStudents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'students', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.IdentitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ListAssignments
ash.boca.boca.mojom.mojom.PageHandler_ListAssignments_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListAssignments_Params',
      packedSize: 16,
      fields: [
        { name: 'course_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_ListAssignments_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ListAssignments_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'assignments', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.AssignmentSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CreateSession
ash.boca.boca.mojom.mojom.PageHandler_CreateSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CreateSession_Params',
      packedSize: 16,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.ConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_CreateSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CreateSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.CreateSessionErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetSession
ash.boca.boca.mojom.mojom.PageHandler_GetSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_GetSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSession_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.SessionResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for EndSession
ash.boca.boca.mojom.mojom.PageHandler_EndSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndSession_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_EndSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.UpdateSessionErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ExtendSessionDuration
ash.boca.boca.mojom.mojom.PageHandler_ExtendSessionDuration_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ExtendSessionDuration_Params',
      packedSize: 16,
      fields: [
        { name: 'extended_duration', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_ExtendSessionDuration_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ExtendSessionDuration_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.UpdateSessionErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RemoveStudent
ash.boca.boca.mojom.mojom.PageHandler_RemoveStudent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RemoveStudent_Params',
      packedSize: 16,
      fields: [
        { name: 'student_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_RemoveStudent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RemoveStudent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.RemoveStudentErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for RenotifyStudent
ash.boca.boca.mojom.mojom.PageHandler_RenotifyStudent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RenotifyStudent_Params',
      packedSize: 16,
      fields: [
        { name: 'student_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_RenotifyStudent_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RenotifyStudent_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.RenotifyStudentErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for AddStudents
ash.boca.boca.mojom.mojom.PageHandler_AddStudents_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AddStudents_Params',
      packedSize: 16,
      fields: [
        { name: 'students', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.IdentitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_AddStudents_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.AddStudents_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.AddStudentsErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateOnTaskConfig
ash.boca.boca.mojom.mojom.PageHandler_UpdateOnTaskConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateOnTaskConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'on_task_config', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.OnTaskConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_UpdateOnTaskConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateOnTaskConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.UpdateSessionErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for UpdateCaptionConfig
ash.boca.boca.mojom.mojom.PageHandler_UpdateCaptionConfig_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateCaptionConfig_Params',
      packedSize: 16,
      fields: [
        { name: 'caption_config', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.CaptionConfigSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_UpdateCaptionConfig_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.UpdateCaptionConfig_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.UpdateSessionErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFloatMode
ash.boca.boca.mojom.mojom.PageHandler_SetFloatMode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetFloatMode_Params',
      packedSize: 16,
      fields: [
        { name: 'is_float_mode', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_SetFloatMode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetFloatMode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SubmitAccessCode
ash.boca.boca.mojom.mojom.PageHandler_SubmitAccessCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SubmitAccessCode_Params',
      packedSize: 16,
      fields: [
        { name: 'access_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_SubmitAccessCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SubmitAccessCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.SubmitAccessCodeErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ViewStudentScreen
ash.boca.boca.mojom.mojom.PageHandler_ViewStudentScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ViewStudentScreen_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_ViewStudentScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.ViewStudentScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.ViewStudentScreenErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for EndViewScreenSession
ash.boca.boca.mojom.mojom.PageHandler_EndViewScreenSession_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndViewScreenSession_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_EndViewScreenSession_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.EndViewScreenSession_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.EndViewScreenSessionErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetViewScreenSessionActive
ash.boca.boca.mojom.mojom.PageHandler_SetViewScreenSessionActive_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetViewScreenSessionActive_Params',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_SetViewScreenSessionActive_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetViewScreenSessionActive_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'error', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.SetViewScreenSessionActiveErrorSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetUserPref
ash.boca.boca.mojom.mojom.PageHandler_GetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetUserPref_Params',
      packedSize: 16,
      fields: [
        { name: 'pref', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.BocaValidPrefSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_GetUserPref_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetUserPref_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SetUserPref
ash.boca.boca.mojom.mojom.PageHandler_SetUserPref_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetUserPref_Params',
      packedSize: 32,
      fields: [
        { name: 'pref', packedOffset: 16, packedBitOffset: 0, type: ash.boca.mojom.BocaValidPrefSpec, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for SetSitePermission
ash.boca.boca.mojom.mojom.PageHandler_SetSitePermission_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetSitePermission_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'permission', packedOffset: 8, packedBitOffset: 0, type: ash.boca.mojom.PermissionSpec, nullable: false, minVersion: 0 },
        { name: 'setting', packedOffset: 12, packedBitOffset: 0, type: ash.boca.mojom.PermissionSettingSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_SetSitePermission_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.SetSitePermission_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseTab
ash.boca.boca.mojom.mojom.PageHandler_CloseTab_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CloseTab_Params',
      packedSize: 16,
      fields: [
        { name: 'tab_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_CloseTab_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.CloseTab_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OpenFeedbackDialog
ash.boca.boca.mojom.mojom.PageHandler_OpenFeedbackDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.OpenFeedbackDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RefreshWorkbook
ash.boca.boca.mojom.mojom.PageHandler_RefreshWorkbook_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.RefreshWorkbook_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for GetSpeechRecognitionInstallationStatus
ash.boca.boca.mojom.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSpeechRecognitionInstallationStatus_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_GetSpeechRecognitionInstallationStatus_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.GetSpeechRecognitionInstallationStatus_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.SpeechRecognitionInstallStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StartSpotlight
ash.boca.boca.mojom.mojom.PageHandler_StartSpotlight_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StartSpotlight_Params',
      packedSize: 16,
      fields: [
        { name: 'crd_connection_code', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PresentStudentScreen
ash.boca.boca.mojom.mojom.PageHandler_PresentStudentScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentStudentScreen_Params',
      packedSize: 24,
      fields: [
        { name: 'student', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.IdentitySpec, nullable: false, minVersion: 0 },
        { name: 'receiver_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_PresentStudentScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentStudentScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopPresentingStudentScreen
ash.boca.boca.mojom.mojom.PageHandler_StopPresentingStudentScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingStudentScreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_StopPresentingStudentScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingStudentScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for PresentOwnScreen
ash.boca.boca.mojom.mojom.PageHandler_PresentOwnScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentOwnScreen_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_PresentOwnScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.PresentOwnScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for StopPresentingOwnScreen
ash.boca.boca.mojom.mojom.PageHandler_StopPresentingOwnScreen_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingOwnScreen_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.boca.boca.mojom.mojom.PageHandler_StopPresentingOwnScreen_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.PageHandler.StopPresentingOwnScreen_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'success', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.boca.boca.mojom.mojom.PageHandlerPtr = ash.boca.boca.mojom.mojom.PageHandlerRemote;
ash.boca.boca.mojom.mojom.PageHandlerRequest = ash.boca.boca.mojom.mojom.PageHandlerPendingReceiver;


// Interface: Page
ash.boca.boca.mojom.mojom.Page = {};

ash.boca.boca.mojom.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca.boca.mojom.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.Page';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca.boca.mojom.mojom.PagePendingReceiver,
      handle);
    this.$ = new ash.boca.boca.mojom.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca.boca.mojom.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onStudentActivityUpdated(activities) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnStudentActivityUpdated_ParamsSpec,
      null,
      [activities]);
  }

  onSessionConfigUpdated(config) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnSessionConfigUpdated_ParamsSpec,
      null,
      [config]);
  }

  onActiveNetworkStateChanged(active_networks) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec,
      null,
      [active_networks]);
  }

  onLocalCaptionDisabled() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnLocalCaptionDisabled_ParamsSpec,
      null,
      []);
  }

  onSpeechRecognitionInstallStateUpdated(state) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec,
      null,
      [state]);
  }

  onSessionCaptionDisabled(is_error) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnSessionCaptionDisabled_ParamsSpec,
      null,
      [is_error]);
  }

  onFrameDataReceived(frame_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnFrameDataReceived_ParamsSpec,
      null,
      [frame_data]);
  }

  onSpotlightCrdSessionStatusUpdated(state) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec,
      null,
      [state]);
  }

  onPresentStudentScreenEnded() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec,
      null,
      []);
  }

  onPresentOwnScreenEnded() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      ash.boca.boca.mojom.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec,
      null,
      []);
  }

};

ash.boca.boca.mojom.mojom.Page.getRemote = function() {
  let remote = new ash.boca.boca.mojom.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.Page',
    'context');
  return remote.$;
};

// ParamsSpec for OnStudentActivityUpdated
ash.boca.boca.mojom.mojom.Page_OnStudentActivityUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnStudentActivityUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'activities', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.IdentifiedActivitySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSessionConfigUpdated
ash.boca.boca.mojom.mojom.Page_OnSessionConfigUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSessionConfigUpdated_Params',
      packedSize: 24,
      fields: [
        { name: 'config', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.ConfigResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for OnActiveNetworkStateChanged
ash.boca.boca.mojom.mojom.Page_OnActiveNetworkStateChanged_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnActiveNetworkStateChanged_Params',
      packedSize: 16,
      fields: [
        { name: 'active_networks', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(ash.boca.mojom.NetworkInfoSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnLocalCaptionDisabled
ash.boca.boca.mojom.mojom.Page_OnLocalCaptionDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnLocalCaptionDisabled_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnSpeechRecognitionInstallStateUpdated
ash.boca.boca.mojom.mojom.Page_OnSpeechRecognitionInstallStateUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSpeechRecognitionInstallStateUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.SpeechRecognitionInstallStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSessionCaptionDisabled
ash.boca.boca.mojom.mojom.Page_OnSessionCaptionDisabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSessionCaptionDisabled_Params',
      packedSize: 16,
      fields: [
        { name: 'is_error', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnFrameDataReceived
ash.boca.boca.mojom.mojom.Page_OnFrameDataReceived_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnFrameDataReceived_Params',
      packedSize: 16,
      fields: [
        { name: 'frame_data', packedOffset: 0, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnSpotlightCrdSessionStatusUpdated
ash.boca.boca.mojom.mojom.Page_OnSpotlightCrdSessionStatusUpdated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnSpotlightCrdSessionStatusUpdated_Params',
      packedSize: 16,
      fields: [
        { name: 'state', packedOffset: 0, packedBitOffset: 0, type: ash.boca.mojom.CrdConnectionStateSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for OnPresentStudentScreenEnded
ash.boca.boca.mojom.mojom.Page_OnPresentStudentScreenEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnPresentStudentScreenEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for OnPresentOwnScreenEnded
ash.boca.boca.mojom.mojom.Page_OnPresentOwnScreenEnded_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.Page.OnPresentOwnScreenEnded_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ash.boca.boca.mojom.mojom.PagePtr = ash.boca.boca.mojom.mojom.PageRemote;
ash.boca.boca.mojom.mojom.PageRequest = ash.boca.boca.mojom.mojom.PagePendingReceiver;


// Interface: BocaPageHandlerFactory
ash.boca.boca.mojom.mojom.BocaPageHandlerFactory = {};

ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'ash.boca.mojom.BocaPageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  create(handler, page) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.boca.boca.mojom.mojom.BocaPageHandlerFactory_Create_ParamsSpec,
      null,
      [handler, page]);
  }

};

ash.boca.boca.mojom.mojom.BocaPageHandlerFactory.getRemote = function() {
  let remote = new ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.boca.mojom.BocaPageHandlerFactory',
    'context');
  return remote.$;
};

// ParamsSpec for Create
ash.boca.boca.mojom.mojom.BocaPageHandlerFactory_Create_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.boca.mojom.BocaPageHandlerFactory.Create_Params',
      packedSize: 24,
      fields: [
        { name: 'handler', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceRequest(ash.boca.mojom.PageHandlerRemote), nullable: false, minVersion: 0 },
        { name: 'page', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(ash.boca.mojom.PageRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryPtr = ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryRemote;
ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryRequest = ash.boca.boca.mojom.mojom.BocaPageHandlerFactoryPendingReceiver;

