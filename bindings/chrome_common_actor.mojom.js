// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/actor.mojom
// Module: actor.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.mojom = actor.mojom || {};


// Enum: Type
actor.mojom.Type = {
  kLeft: 0,
  kRight: 1,
};

// Enum: Count
actor.mojom.Count = {
  kSingle: 0,
  kDouble: 1,
};

// Enum: Mode
actor.mojom.Mode = {
  kDeleteExisting: 0,
  kPrepend: 1,
  kAppend: 2,
};

// Enum: ScrollDirection
actor.mojom.ScrollDirection = {
  kLeft: 0,
  kRight: 1,
  kUp: 2,
  kDown: 3,
};

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

// Enum: JournalEntryType
actor.mojom.JournalEntryType = {
  kBegin: 0,
  kEnd: 1,
  kInstant: 2,
};

// Interface: JournalClient
actor.mojom.JournalClient = {};

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
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
actor.mojom.JournalClientPtr = actor.mojom.JournalClientRemote;
actor.mojom.JournalClientRequest = actor.mojom.JournalClientPendingReceiver;


// Interface: PageStabilityMonitor
actor.mojom.PageStabilityMonitor = {};

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
        { name: 'observation_delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
actor.mojom.PageStabilityMonitorPtr = actor.mojom.PageStabilityMonitorRemote;
actor.mojom.PageStabilityMonitorRequest = actor.mojom.PageStabilityMonitorPendingReceiver;

