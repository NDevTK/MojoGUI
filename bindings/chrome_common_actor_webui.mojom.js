// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/actor_webui.mojom
// Module: actor.webui.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.webui = actor.webui || {};
actor.webui.mojom = actor.webui.mojom || {};


// Enum: UserGrantedPermissionDuration
actor.webui.mojom.UserGrantedPermissionDuration = {
  kAlwaysAllow: 0,
};

// Enum: SelectCredentialDialogErrorReason
actor.webui.mojom.SelectCredentialDialogErrorReason = {
};

// Enum: SelectAutofillSuggestionsDialogErrorReason
actor.webui.mojom.SelectAutofillSuggestionsDialogErrorReason = {
  kDialogPromiseNoSubscriber: 0,
  kMismatchedTaskId: 1,
  kNoActorTaskDelegate: 2,
};

// Enum: ConfirmationRequestErrorReason
actor.webui.mojom.ConfirmationRequestErrorReason = {
  kPreemptedByNewRequest: 0,
};
