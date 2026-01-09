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
  kNavigateInvalidUrl: 33,
  kNavigateFailedToStart: 34,
  kNavigateCommittedErrorPage: 35,
  kClickSuppressed: 36,
  kDragAndReleaseFromOffscreen: 37,
  kDragAndReleaseToOffscreen: 38,
  kDragAndReleaseFromMoveSuppressed: 39,
  kDragAndReleaseDownSuppressed: 40,
  kDragAndReleaseToMoveSuppressed: 41,
  kDragAndReleaseUpSuppressed: 42,
  kMouseMoveEventSuppressed: 43,
  kScrollNoScrollingElement: 44,
  kScrollTargetNotUserScrollable: 45,
  kScrollOffsetDidNotChange: 46,
  kSelectInvalidElement: 47,
  kSelectNoSuchOption: 48,
  kSelectOptionDisabled: 49,
  kTypeTargetNotElement: 50,
  kTypeTargetNotFocusable: 51,
  kTypeUnsupportedCharacters: 52,
  kTypeFailedMappingCharToKey: 53,
  kTypeKeyDownSuppressed: 54,
  kTypeInvalidTextEncoding: 55,
  kHistoryNoNavigationsCreated: 56,
  kHistoryCancelledBeforeStart: 57,
  kHistoryNoBackEntries: 58,
  kHistoryNoForwardEntries: 59,
  kHistoryFailedBeforeCommit: 60,
  kHistoryErrorPage: 61,
  kHistoryNavigationEntryChanged: 62,
  kLoginNoCredentialsAvailable: 63,
  kLoginNotLoginPage: 64,
  kLoginCredentialsEnteredButAnotherActionNeeded: 65,
  kLoginNoFillableFields: 66,
  kLoginFillingNotAllowed: 67,
  kLoginPageChangedDuringSelection: 68,
  kLoginDeviceReauthRequired: 69,
  kLoginDeviceReauthFailed: 70,
  kLoginFeatureDisabled: 71,
  kLoginTooManyRequests: 72,
  kMediaControlNoMedia: 73,
  kFormFillingAutofillUnavailable: 74,
  kFormFillingNoSuggestionsAvailable: 75,
  kFormFillingDialogError: 76,
  kFormFillingFieldNotFound: 77,
  kFormFillingUnknownAutofillError: 78,
  kFormFillingNoLastTabObservation: 79,
  kFormFillingInvalidSuggestionId: 80,
  kScriptToolNoResponse: 81,
  kScriptToolInvalidName: 82,
  kScriptToolInvalidInputArguments: 83,
  kScriptToolInvocationFailed: 84,
  kActorUiError: 85,
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

