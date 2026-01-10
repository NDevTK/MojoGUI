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


// Enum: Type
actor.mojom.Type = {
  kLeft: 0,
  kRight: 1,
};
actor.mojom.TypeSpec = { $: mojo.internal.Enum() };

// Enum: Count
actor.mojom.Count = {
  kSingle: 0,
  kDouble: 1,
};
actor.mojom.CountSpec = { $: mojo.internal.Enum() };

// Enum: Mode
actor.mojom.Mode = {
  kDeleteExisting: 0,
  kPrepend: 1,
  kAppend: 2,
};
actor.mojom.ModeSpec = { $: mojo.internal.Enum() };

// Enum: ScrollDirection
actor.mojom.ScrollDirection = {
  kLeft: 0,
  kRight: 1,
  kUp: 2,
  kDown: 3,
};
actor.mojom.ScrollDirectionSpec = { $: mojo.internal.Enum() };

// Enum: ActionResultCode
actor.mojom.ActionResultCode = {
  kOk: 0,
  kUrlBlocked: 1,
  kNewTabCreationFailed: 2,
  kTabWentAway: 3,
  kTaskWentAway: 4,
  kCrossOriginNavigation: 5,
  kToolUnknown: 6,
  kFrameWentAway: 7,
  kInvalidDomNodeId: 8,
  kElementDisabled: 9,
  kElementOffscreen: 10,
  kCoordinatesOutOfBounds: 11,
  kArgumentsInvalid: 12,
  kTaskPaused: 13,
  kExecutorDestroyed: 14,
  kWindowWentAway: 15,
  kFrameLocationChangedSinceObservation: 16,
  kTriggeredNavigationBlocked: 17,
  kEmptyActionSequence: 18,
  kExecutorBusy: 19,
  kObservedTargetElementDestroyed: 20,
  kObservedTargetElementChanged: 21,
  kTargetNodeInteractionPointObscured: 22,
  kToolTimeout: 23,
  kFilePickerTriggered: 24,
  kFilePickerConfirmed: 25,
  kFilePickerCancelled: 26,
  kExecutionEngineExistingAction: 27,
  kExternalProtocolNavigationBlocked: 28,
  kRendererCrashed: 29,
  kNotImplemented: 30,
  kInvokeCanceled: 31,
  kInvalidTaskStateForAct: 32,
  kActionsCancelled: 33,
  kNavigateInvalidUrl: 34,
  kNavigateFailedToStart: 35,
  kNavigateCommittedErrorPage: 36,
  kClickSuppressed: 37,
  kDragAndReleaseFromOffscreen: 38,
  kDragAndReleaseToOffscreen: 39,
  kDragAndReleaseFromMoveSuppressed: 40,
  kDragAndReleaseDownSuppressed: 41,
  kDragAndReleaseToMoveSuppressed: 42,
  kDragAndReleaseUpSuppressed: 43,
  kMouseMoveEventSuppressed: 44,
  kScrollNoScrollingElement: 45,
  kScrollTargetNotUserScrollable: 46,
  kScrollOffsetDidNotChange: 47,
  kSelectInvalidElement: 48,
  kSelectNoSuchOption: 49,
  kSelectOptionDisabled: 50,
  kTypeTargetNotElement: 51,
  kTypeTargetNotFocusable: 52,
  kTypeUnsupportedCharacters: 53,
  kTypeFailedMappingCharToKey: 54,
  kTypeKeyDownSuppressed: 55,
  kTypeInvalidTextEncoding: 56,
  kHistoryNoNavigationsCreated: 57,
  kHistoryCancelledBeforeStart: 58,
  kHistoryNoBackEntries: 59,
  kHistoryNoForwardEntries: 60,
  kHistoryFailedBeforeCommit: 61,
  kHistoryErrorPage: 62,
  kHistoryNavigationEntryChanged: 63,
  kLoginNoCredentialsAvailable: 64,
  kLoginNotLoginPage: 65,
  kLoginCredentialsEnteredButAnotherActionNeeded: 66,
  kLoginNoFillableFields: 67,
  kLoginFillingNotAllowed: 68,
  kLoginPageChangedDuringSelection: 69,
  kLoginDeviceReauthRequired: 70,
  kLoginDeviceReauthFailed: 71,
  kLoginFeatureDisabled: 72,
  kLoginTooManyRequests: 73,
  kMediaControlNoMedia: 74,
  kFormFillingAutofillUnavailable: 75,
  kFormFillingNoSuggestionsAvailable: 76,
  kFormFillingDialogError: 77,
  kFormFillingFieldNotFound: 78,
  kFormFillingUnknownAutofillError: 79,
  kFormFillingNoLastTabObservation: 80,
  kFormFillingInvalidSuggestionId: 81,
  kScriptToolNoResponse: 82,
  kScriptToolInvalidName: 83,
  kScriptToolInvalidInputArguments: 84,
  kScriptToolInvocationFailed: 85,
  kActorUiError: 86,
};
actor.mojom.ActionResultCodeSpec = { $: mojo.internal.Enum() };

// Enum: JournalEntryType
actor.mojom.JournalEntryType = {
  kBegin: 0,
  kEnd: 1,
  kInstant: 2,
};
actor.mojom.JournalEntryTypeSpec = { $: mojo.internal.Enum() };

// Union: ToolTarget
actor.mojom.ToolTargetSpec = { $: mojo.internal.Union(
    'actor.mojom.ToolTarget', {
      'dom_node_id': {
        'ordinal': 0,
        'type': mojo.internal.Int32,
      }},
      'coordinate_dip': {
        'ordinal': 1,
        'type': gfx.mojom.PointSpec,
      }},
    })
};

// Union: ToolAction
actor.mojom.ToolActionSpec = { $: mojo.internal.Union(
    'actor.mojom.ToolAction', {
      'click': {
        'ordinal': 0,
        'type': actor.mojom.ClickActionSpec,
      }},
      'drag_and_release': {
        'ordinal': 1,
        'type': actor.mojom.DragAndReleaseActionSpec,
      }},
      'mouse_move': {
        'ordinal': 2,
        'type': actor.mojom.MouseMoveActionSpec,
      }},
      'scroll': {
        'ordinal': 3,
        'type': actor.mojom.ScrollActionSpec,
      }},
      'select': {
        'ordinal': 4,
        'type': actor.mojom.SelectActionSpec,
      }},
      'type': {
        'ordinal': 5,
        'type': actor.mojom.TypeActionSpec,
      }},
      'script_tool': {
        'ordinal': 6,
        'type': actor.mojom.ScriptToolActionSpec,
      }},
      'scroll_to': {
        'ordinal': 7,
        'type': actor.mojom.ScrollToActionSpec,
      }},
    })
};

// Struct: ObservedToolTarget
actor.mojom.ObservedToolTargetSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.ObservedToolTarget',
      packedSize: 16,
      fields: [
        { name: 'node_attribute', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AIPageContentAttributesSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ClickAction
actor.mojom.ClickActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.ClickAction',
      packedSize: 16,
      fields: [
        { name: 'kLeft', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: MouseMoveAction
actor.mojom.MouseMoveActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.MouseMoveAction',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: ScrollToAction
actor.mojom.ScrollToActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.ScrollToAction',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: TypeAction
actor.mojom.TypeActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.TypeAction',
      packedSize: 16,
      fields: [
        { name: 'kDeleteExisting', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ScrollAction
actor.mojom.ScrollActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.ScrollAction',
      packedSize: 16,
      fields: [
        { name: 'kLeft', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SelectAction
actor.mojom.SelectActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.SelectAction',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: DragAndReleaseAction
actor.mojom.DragAndReleaseActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.DragAndReleaseAction',
      packedSize: 24,
      fields: [
        { name: 'to_target', packedOffset: 0, packedBitOffset: 0, type: actor.mojom.ToolTargetSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ScriptToolAction
actor.mojom.ScriptToolActionSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.ScriptToolAction',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'input_arguments', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TaskId
actor.mojom.TaskIdSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.TaskId',
      packedSize: 16,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ToolInvocation
actor.mojom.ToolInvocationSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.ToolInvocation',
      packedSize: 56,
      fields: [
        { name: 'task_id', packedOffset: 32, packedBitOffset: 0, type: actor.mojom.TaskIdSpec, nullable: false, minVersion: 0 },
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: actor.mojom.ToolActionSpec, nullable: false, minVersion: 0 },
        { name: 'target', packedOffset: 16, packedBitOffset: 0, type: actor.mojom.ToolTargetSpec, nullable: false, minVersion: 0 },
        { name: 'observed_target', packedOffset: 40, packedBitOffset: 0, type: actor.mojom.ObservedToolTargetSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: ActionResult
actor.mojom.ActionResultSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.ActionResult',
      packedSize: 40,
      fields: [
        { name: 'code', packedOffset: 24, packedBitOffset: 0, type: actor.mojom.ActionResultCodeSpec, nullable: false, minVersion: 0 },
        { name: 'requires_page_stabilization', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'script_tool_response', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'execution_end_time', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeTicksSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: JournalDetails
actor.mojom.JournalDetailsSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.JournalDetails',
      packedSize: 24,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: JournalEntry
actor.mojom.JournalEntrySpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.JournalEntry',
      packedSize: 56,
      fields: [
        { name: 'type', packedOffset: 40, packedBitOffset: 0, type: actor.mojom.JournalEntryTypeSpec, nullable: false, minVersion: 0 },
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: actor.mojom.TaskIdSpec, nullable: false, minVersion: 0 },
        { name: 'timestamp', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'event', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'track_uuid', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(actor.mojom.JournalDetailsSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: JournalClient
actor.mojom.JournalClient = {};

actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.JournalClient_AddEntriesToJournal_Params',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(actor.mojom.JournalEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      [entries]);
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

// ParamsSpec for AddEntriesToJournal
actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.JournalClient.AddEntriesToJournal_Params',
      packedSize: 16,
      fields: [
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(actor.mojom.JournalEntrySpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
actor.mojom.JournalClientPtr = actor.mojom.JournalClientRemote;
actor.mojom.JournalClientRequest = actor.mojom.JournalClientPendingReceiver;


// Interface: PageStabilityMonitor
actor.mojom.PageStabilityMonitor = {};

actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.PageStabilityMonitor_NotifyWhenStable_Params',
      packedSize: 16,
      fields: [
        { name: 'observation_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      null,
      [observation_delay]);
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

// ParamsSpec for NotifyWhenStable
actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec = {
  $: {
    structSpec: {
      name: 'actor.mojom.PageStabilityMonitor.NotifyWhenStable_Params',
      packedSize: 16,
      fields: [
        { name: 'observation_delay', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
actor.mojom.PageStabilityMonitorPtr = actor.mojom.PageStabilityMonitorRemote;
actor.mojom.PageStabilityMonitorRequest = actor.mojom.PageStabilityMonitorPendingReceiver;

