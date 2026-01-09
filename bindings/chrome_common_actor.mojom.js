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
  kNavigateInvalidUrl: 32,
  kNavigateFailedToStart: 33,
  kNavigateCommittedErrorPage: 34,
  kClickSuppressed: 35,
  kDragAndReleaseFromOffscreen: 36,
  kDragAndReleaseToOffscreen: 37,
  kDragAndReleaseFromMoveSuppressed: 38,
  kDragAndReleaseDownSuppressed: 39,
  kDragAndReleaseToMoveSuppressed: 40,
  kDragAndReleaseUpSuppressed: 41,
  kMouseMoveEventSuppressed: 42,
  kScrollNoScrollingElement: 43,
  kScrollTargetNotUserScrollable: 44,
  kScrollOffsetDidNotChange: 45,
  kSelectInvalidElement: 46,
  kSelectNoSuchOption: 47,
  kSelectOptionDisabled: 48,
  kTypeTargetNotElement: 49,
  kTypeTargetNotFocusable: 50,
  kTypeUnsupportedCharacters: 51,
  kTypeFailedMappingCharToKey: 52,
  kTypeKeyDownSuppressed: 53,
  kTypeInvalidTextEncoding: 54,
  kHistoryNoNavigationsCreated: 55,
  kHistoryCancelledBeforeStart: 56,
  kHistoryNoBackEntries: 57,
  kHistoryNoForwardEntries: 58,
  kHistoryFailedBeforeCommit: 59,
  kHistoryErrorPage: 60,
  kHistoryNavigationEntryChanged: 61,
  kLoginNoCredentialsAvailable: 62,
  kLoginNotLoginPage: 63,
  kLoginCredentialsEnteredButAnotherActionNeeded: 64,
  kLoginNoFillableFields: 65,
  kLoginFillingNotAllowed: 66,
  kLoginPageChangedDuringSelection: 67,
  kLoginDeviceReauthRequired: 68,
  kLoginDeviceReauthFailed: 69,
  kLoginFeatureDisabled: 70,
  kLoginTooManyRequests: 71,
  kMediaControlNoMedia: 72,
  kFormFillingAutofillUnavailable: 73,
  kFormFillingNoSuggestionsAvailable: 74,
  kFormFillingDialogError: 75,
  kFormFillingFieldNotFound: 76,
  kFormFillingUnknownAutofillError: 77,
  kFormFillingNoLastTabObservation: 78,
  kFormFillingInvalidSuggestionId: 79,
  kScriptToolNoResponse: 80,
  kScriptToolInvalidName: 81,
  kScriptToolInvalidInputArguments: 82,
  kScriptToolInvocationFailed: 83,
  kActorUiError: 84,
};

// Enum: JournalEntryType
actor.mojom.JournalEntryType = {
  kBegin: 0,
  kEnd: 1,
  kInstant: 2,
};

// Interface: JournalClient
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
      actor.mojom.JournalClient_AddEntriesToJournal_ParamsSpec.$,
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
        { name: 'entries', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
actor.mojom.JournalClientPtr = actor.mojom.JournalClientRemote;
actor.mojom.JournalClientRequest = actor.mojom.JournalClientPendingReceiver;


// Interface: PageStabilityMonitor
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
      actor.mojom.PageStabilityMonitor_NotifyWhenStable_ParamsSpec.$,
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
        { name: 'observation_delay', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
actor.mojom.PageStabilityMonitorPtr = actor.mojom.PageStabilityMonitorRemote;
actor.mojom.PageStabilityMonitorRequest = actor.mojom.PageStabilityMonitorPendingReceiver;

