// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/actor.mojom
// Module: actor.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.mojom = actor.mojom || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};

actor.mojom.TypeSpec = { $: mojo.internal.Enum() };
actor.mojom.CountSpec = { $: mojo.internal.Enum() };
actor.mojom.ModeSpec = { $: mojo.internal.Enum() };
actor.mojom.ScrollDirectionSpec = { $: mojo.internal.Enum() };
actor.mojom.ActionResultCodeSpec = { $: mojo.internal.Enum() };
actor.mojom.JournalEntryTypeSpec = { $: mojo.internal.Enum() };
actor.mojom.ToolTargetSpec = { $: {} };
actor.mojom.ToolActionSpec = { $: {} };
actor.mojom.ObservedToolTargetSpec = { $: {} };
actor.mojom.ClickActionSpec = { $: {} };
actor.mojom.MouseMoveActionSpec = { $: {} };
actor.mojom.ScrollToActionSpec = { $: {} };
actor.mojom.TypeActionSpec = { $: {} };
actor.mojom.ScrollActionSpec = { $: {} };
actor.mojom.SelectActionSpec = { $: {} };
actor.mojom.DragAndReleaseActionSpec = { $: {} };
actor.mojom.ScriptToolActionSpec = { $: {} };
actor.mojom.TaskIdSpec = { $: {} };
actor.mojom.ToolInvocationSpec = { $: {} };
actor.mojom.ActionResultSpec = { $: {} };
actor.mojom.JournalDetailsSpec = { $: {} };
actor.mojom.JournalEntrySpec = { $: {} };
actor.mojom.JournalClient = {};
actor.mojom.JournalClient.$interfaceName = 'actor.mojom.JournalClient';
actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec = { $: {} };
actor.mojom.PageStabilityMonitor = {};
actor.mojom.PageStabilityMonitor.$interfaceName = 'actor.mojom.PageStabilityMonitor';
actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec = { $: {} };
actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParamsSpec = { $: {} };

// Enum: Type
actor.mojom.Type = {
  kLeft: 1,
  kRight: 2,
};

// Enum: Count
actor.mojom.Count = {
  kSingle: 1,
  kDouble: 2,
};

// Enum: Mode
actor.mojom.Mode = {
  kDeleteExisting: 0,
  kPrepend: 1,
  kAppend: 2,
};

// Enum: ScrollDirection
actor.mojom.ScrollDirection = {
  kLeft: 1,
  kRight: 2,
  kUp: 3,
  kDown: 4,
};

// Enum: ActionResultCode
actor.mojom.ActionResultCode = {
  kOk: 0,
  kUrlBlocked: 11,
  kNewTabCreationFailed: 12,
  kTabWentAway: 13,
  kTaskWentAway: 14,
  kCrossOriginNavigation: 15,
  kToolUnknown: 16,
  kFrameWentAway: 17,
  kInvalidDomNodeId: 18,
  kElementDisabled: 19,
  kElementOffscreen: 20,
  kCoordinatesOutOfBounds: 21,
  kArgumentsInvalid: 22,
  kTaskPaused: 23,
  kExecutorDestroyed: 24,
  kWindowWentAway: 25,
  kFrameLocationChangedSinceObservation: 26,
  kTriggeredNavigationBlocked: 27,
  kEmptyActionSequence: 28,
  kExecutorBusy: 29,
  kObservedTargetElementDestroyed: 30,
  kObservedTargetElementChanged: 31,
  kTargetNodeInteractionPointObscured: 32,
  kToolTimeout: 33,
  kFilePickerTriggered: 34,
  kFilePickerConfirmed: 35,
  kFilePickerCancelled: 36,
  kExecutionEngineExistingAction: 37,
  kExternalProtocolNavigationBlocked: 38,
  kRendererCrashed: 39,
  kNotImplemented: 40,
  kInvokeCanceled: 41,
  kInvalidTaskStateForAct: 42,
  kActionsCancelled: 43,
  kNavigateInvalidUrl: 100,
  kNavigateFailedToStart: 101,
  kNavigateCommittedErrorPage: 102,
  kClickSuppressed: 200,
  kDragAndReleaseFromOffscreen: 300,
  kDragAndReleaseToOffscreen: 301,
  kDragAndReleaseFromMoveSuppressed: 302,
  kDragAndReleaseDownSuppressed: 303,
  kDragAndReleaseToMoveSuppressed: 304,
  kDragAndReleaseUpSuppressed: 305,
  kMouseMoveEventSuppressed: 400,
  kScrollNoScrollingElement: 500,
  kScrollTargetNotUserScrollable: 501,
  kScrollOffsetDidNotChange: 502,
  kSelectInvalidElement: 600,
  kSelectNoSuchOption: 601,
  kSelectOptionDisabled: 602,
  kTypeTargetNotElement: 700,
  kTypeTargetNotFocusable: 701,
  kTypeUnsupportedCharacters: 702,
  kTypeFailedMappingCharToKey: 703,
  kTypeKeyDownSuppressed: 704,
  kTypeInvalidTextEncoding: 705,
  kHistoryNoNavigationsCreated: 800,
  kHistoryCancelledBeforeStart: 801,
  kHistoryNoBackEntries: 802,
  kHistoryNoForwardEntries: 803,
  kHistoryFailedBeforeCommit: 804,
  kHistoryErrorPage: 805,
  kHistoryNavigationEntryChanged: 806,
  kLoginNoCredentialsAvailable: 900,
  kLoginNotLoginPage: 901,
  kLoginCredentialsEnteredButAnotherActionNeeded: 902,
  kLoginNoFillableFields: 903,
  kLoginFillingNotAllowed: 904,
  kLoginPageChangedDuringSelection: 905,
  kLoginDeviceReauthRequired: 906,
  kLoginDeviceReauthFailed: 907,
  kLoginFeatureDisabled: 908,
  kLoginTooManyRequests: 909,
  kMediaControlNoMedia: 1000,
  kFormFillingAutofillUnavailable: 1100,
  kFormFillingNoSuggestionsAvailable: 1101,
  kFormFillingDialogError: 1102,
  kFormFillingFieldNotFound: 1103,
  kFormFillingUnknownAutofillError: 1104,
  kFormFillingNoLastTabObservation: 1105,
  kFormFillingInvalidSuggestionId: 1106,
  kScriptToolNoResponse: 1200,
  kScriptToolInvalidName: 1201,
  kScriptToolInvalidInputArguments: 1202,
  kScriptToolInvocationFailed: 1203,
  kActorUiError: 1300,
};

// Enum: JournalEntryType
actor.mojom.JournalEntryType = {
  kBegin: 0,
  kEnd: 1,
  kInstant: 2,
};

// Union: ToolTarget
mojo.internal.Union(
    actor.mojom.ToolTargetSpec, 'actor.mojom.ToolTarget', {
      'dom_node_id': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'coordinate_dip': {
        'ordinal': 1,
        'type': gfx.mojom.PointSpec,
        'nullable': false,
      },
    });

// Union: ToolAction
mojo.internal.Union(
    actor.mojom.ToolActionSpec, 'actor.mojom.ToolAction', {
      'click': {
        'ordinal': 0,
        'type': actor.mojom.ClickActionSpec,
        'nullable': false,
      },
      'drag_and_release': {
        'ordinal': 1,
        'type': actor.mojom.DragAndReleaseActionSpec,
        'nullable': false,
      },
      'mouse_move': {
        'ordinal': 2,
        'type': actor.mojom.MouseMoveActionSpec,
        'nullable': false,
      },
      'scroll': {
        'ordinal': 3,
        'type': actor.mojom.ScrollActionSpec,
        'nullable': false,
      },
      'select': {
        'ordinal': 4,
        'type': actor.mojom.SelectActionSpec,
        'nullable': false,
      },
      'type': {
        'ordinal': 5,
        'type': actor.mojom.TypeActionSpec,
        'nullable': false,
      },
      'script_tool': {
        'ordinal': 6,
        'type': actor.mojom.ScriptToolActionSpec,
        'nullable': false,
      },
      'scroll_to': {
        'ordinal': 7,
        'type': actor.mojom.ScrollToActionSpec,
        'nullable': false,
      },
    });

// Struct: ObservedToolTarget
mojo.internal.Struct(
    actor.mojom.ObservedToolTargetSpec, 'actor.mojom.ObservedToolTarget', [
      mojo.internal.StructField('node_attribute', 0, 0, blink.mojom.AIPageContentAttributesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ClickAction
mojo.internal.Struct(
    actor.mojom.ClickActionSpec, 'actor.mojom.ClickAction', [
      mojo.internal.StructField('kLeft', 0, 0, mojo.internal.Pointer, 1, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: MouseMoveAction
mojo.internal.Struct(
    actor.mojom.MouseMoveActionSpec, 'actor.mojom.MouseMoveAction', [
    ],
    [[0, 8]]);

// Struct: ScrollToAction
mojo.internal.Struct(
    actor.mojom.ScrollToActionSpec, 'actor.mojom.ScrollToAction', [
    ],
    [[0, 8]]);

// Struct: TypeAction
mojo.internal.Struct(
    actor.mojom.TypeActionSpec, 'actor.mojom.TypeAction', [
      mojo.internal.StructField('kDeleteExisting', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ScrollAction
mojo.internal.Struct(
    actor.mojom.ScrollActionSpec, 'actor.mojom.ScrollAction', [
      mojo.internal.StructField('kLeft', 0, 0, mojo.internal.Pointer, 1, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SelectAction
mojo.internal.Struct(
    actor.mojom.SelectActionSpec, 'actor.mojom.SelectAction', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DragAndReleaseAction
mojo.internal.Struct(
    actor.mojom.DragAndReleaseActionSpec, 'actor.mojom.DragAndReleaseAction', [
      mojo.internal.StructField('to_target', 0, 0, actor.mojom.ToolTargetSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScriptToolAction
mojo.internal.Struct(
    actor.mojom.ScriptToolActionSpec, 'actor.mojom.ScriptToolAction', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('input_arguments', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TaskId
mojo.internal.Struct(
    actor.mojom.TaskIdSpec, 'actor.mojom.TaskId', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ToolInvocation
mojo.internal.Struct(
    actor.mojom.ToolInvocationSpec, 'actor.mojom.ToolInvocation', [
      mojo.internal.StructField('task_id', 0, 0, actor.mojom.TaskIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('action', 8, 0, actor.mojom.ToolActionSpec, null, false, 0, undefined),
      mojo.internal.StructField('target', 24, 0, actor.mojom.ToolTargetSpec, null, false, 0, undefined),
      mojo.internal.StructField('observed_target', 40, 0, actor.mojom.ObservedToolTargetSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ActionResult
mojo.internal.Struct(
    actor.mojom.ActionResultSpec, 'actor.mojom.ActionResult', [
      mojo.internal.StructField('code', 0, 0, actor.mojom.ActionResultCodeSpec, null, false, 0, undefined),
      mojo.internal.StructField('requires_page_stabilization', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('script_tool_response', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('execution_end_time', 24, 0, mojo_base.mojom.TimeTicksSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: JournalDetails
mojo.internal.Struct(
    actor.mojom.JournalDetailsSpec, 'actor.mojom.JournalDetails', [
      mojo.internal.StructField('key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: JournalEntry
mojo.internal.Struct(
    actor.mojom.JournalEntrySpec, 'actor.mojom.JournalEntry', [
      mojo.internal.StructField('type', 0, 0, actor.mojom.JournalEntryTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, actor.mojom.TaskIdSpec, null, false, 0, undefined),
      mojo.internal.StructField('timestamp', 16, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('event', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('track_uuid', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('details', 40, 0, mojo.internal.Array(actor.mojom.JournalDetailsSpec, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: JournalClient
mojo.internal.Struct(
    actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec, 'actor.mojom.JournalClient_AddEntriesToJournal_Params', [
      mojo.internal.StructField('entries', 0, 0, mojo.internal.Array(actor.mojom.JournalEntrySpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

actor.mojom.JournalClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.mojom.JournalClientRemote = class {
  static get $interfaceName() {
    return 'actor.mojom.JournalClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.mojom.JournalClientPendingReceiver,
      handle);
    this.$ = new actor.mojom.JournalClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.mojom.JournalClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addEntriesToJournal(entries) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec,
      null,
      [entries],
      false);
  }

};

actor.mojom.JournalClient.getRemote = function() {
  let remote = new actor.mojom.JournalClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.mojom.JournalClient',
    'context');
  return remote.$;
};

actor.mojom.JournalClientPtr = actor.mojom.JournalClientRemote;
actor.mojom.JournalClientRequest = actor.mojom.JournalClientPendingReceiver;


// Interface: PageStabilityMonitor
mojo.internal.Struct(
    actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec, 'actor.mojom.PageStabilityMonitor_NotifyWhenStable_Params', [
      mojo.internal.StructField('observation_delay', 0, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParamsSpec, 'actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParams', [
    ],
    [[0, 8]]);

actor.mojom.PageStabilityMonitorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

actor.mojom.PageStabilityMonitorRemote = class {
  static get $interfaceName() {
    return 'actor.mojom.PageStabilityMonitor';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      actor.mojom.PageStabilityMonitorPendingReceiver,
      handle);
    this.$ = new actor.mojom.PageStabilityMonitorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

actor.mojom.PageStabilityMonitorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  notifyWhenStable(observation_delay) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec,
      actor.mojom.PageStabilityMonitor_NotifyWhenStable_ResponseParamsSpec,
      [observation_delay],
      false);
  }

};

actor.mojom.PageStabilityMonitor.getRemote = function() {
  let remote = new actor.mojom.PageStabilityMonitorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'actor.mojom.PageStabilityMonitor',
    'context');
  return remote.$;
};

actor.mojom.PageStabilityMonitorPtr = actor.mojom.PageStabilityMonitorRemote;
actor.mojom.PageStabilityMonitorRequest = actor.mojom.PageStabilityMonitorPendingReceiver;

