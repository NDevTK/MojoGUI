// Auto-generated MojoJS binding
// Source: chromium_src/chrome/common/actor_webui.mojom
// Module: actor.webui.mojom

'use strict';

// Module namespace
var actor = actor || {};
actor.webui = actor.webui || {};
actor.webui.mojom = actor.webui.mojom || {};
var skia = skia || {};
var url = url || {};

actor.webui.mojom.UserGrantedPermissionDurationSpec = { $: mojo.internal.Enum() };
actor.webui.mojom.SelectCredentialDialogErrorReasonSpec = { $: mojo.internal.Enum() };
actor.webui.mojom.SelectAutofillSuggestionsDialogErrorReasonSpec = { $: mojo.internal.Enum() };
actor.webui.mojom.ConfirmationRequestErrorReasonSpec = { $: mojo.internal.Enum() };
actor.webui.mojom.SelectAutofillSuggestionsDialogResultSpec = { $: {} };
actor.webui.mojom.UserConfirmationDialogResultSpec = { $: {} };
actor.webui.mojom.ConfirmationRequestResultSpec = { $: {} };
actor.webui.mojom.TaskOptionsSpec = { $: {} };
actor.webui.mojom.CredentialSpec = { $: {} };
actor.webui.mojom.SelectCredentialDialogRequestSpec = { $: {} };
actor.webui.mojom.SelectCredentialDialogResponseSpec = { $: {} };
actor.webui.mojom.AutofillSuggestionSpec = { $: {} };
actor.webui.mojom.FormFillingRequestSpec = { $: {} };
actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec = { $: {} };
actor.webui.mojom.FormFillingResponseSpec = { $: {} };
actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec = { $: {} };
actor.webui.mojom.UserConfirmationDialogPayloadSpec = { $: {} };
actor.webui.mojom.UserConfirmationDialogRequestSpec = { $: {} };
actor.webui.mojom.UserConfirmationDialogResponseSpec = { $: {} };
actor.webui.mojom.NavigationConfirmationRequestSpec = { $: {} };
actor.webui.mojom.NavigationConfirmationResponseSpec = { $: {} };

// Enum: UserGrantedPermissionDuration
actor.webui.mojom.UserGrantedPermissionDuration = {
  kOneTime: 0,
  kAlwaysAllow: 1,
};

// Enum: SelectCredentialDialogErrorReason
actor.webui.mojom.SelectCredentialDialogErrorReason = {
  kDialogPromiseNoSubscriber: 0,
};

// Enum: SelectAutofillSuggestionsDialogErrorReason
actor.webui.mojom.SelectAutofillSuggestionsDialogErrorReason = {
  kDialogPromiseNoSubscriber: 0,
  kMismatchedTaskId: 1,
  kNoActorTaskDelegate: 2,
};

// Enum: ConfirmationRequestErrorReason
actor.webui.mojom.ConfirmationRequestErrorReason = {
  kRequestPromiseNoSubscriber: 0,
  kPreemptedByNewRequest: 1,
};

// Union: SelectAutofillSuggestionsDialogResult
mojo.internal.Union(
    actor.webui.mojom.SelectAutofillSuggestionsDialogResultSpec, 'actor.webui.mojom.SelectAutofillSuggestionsDialogResult', {
      'error_reason': {
        'ordinal': 0,
        'type': actor.webui.mojom.SelectAutofillSuggestionsDialogErrorReasonSpec,
        'nullable': false,
      },
      'selected_suggestions': {
        'ordinal': 1,
        'type': mojo.internal.Array(actor.webui.mojom.FormFillingResponseSpec, false),
        'nullable': false,
      },
    });

// Union: UserConfirmationDialogResult
mojo.internal.Union(
    actor.webui.mojom.UserConfirmationDialogResultSpec, 'actor.webui.mojom.UserConfirmationDialogResult', {
      'permission_granted': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'error_reason': {
        'ordinal': 1,
        'type': actor.webui.mojom.ConfirmationRequestErrorReasonSpec,
        'nullable': false,
      },
    });

// Union: ConfirmationRequestResult
mojo.internal.Union(
    actor.webui.mojom.ConfirmationRequestResultSpec, 'actor.webui.mojom.ConfirmationRequestResult', {
      'permission_granted': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'error_reason': {
        'ordinal': 1,
        'type': actor.webui.mojom.ConfirmationRequestErrorReasonSpec,
        'nullable': false,
      },
    });

// Struct: TaskOptions
mojo.internal.Struct(
    actor.webui.mojom.TaskOptionsSpec, 'actor.webui.mojom.TaskOptions', [
      mojo.internal.StructField('title', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: Credential
mojo.internal.Struct(
    actor.webui.mojom.CredentialSpec, 'actor.webui.mojom.Credential', [
      mojo.internal.StructField('id', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('username', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('source_site_or_app', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request_origin', 16, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('display_origin', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: SelectCredentialDialogRequest
mojo.internal.Struct(
    actor.webui.mojom.SelectCredentialDialogRequestSpec, 'actor.webui.mojom.SelectCredentialDialogRequest', [
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('show_dialog', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('credentials', 0, 0, mojo.internal.Array(actor.webui.mojom.CredentialSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('icons', 8, 0, mojo.internal.Map(mojo.internal.String, skia.mojom.BitmapN32Spec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SelectCredentialDialogResponse
mojo.internal.Struct(
    actor.webui.mojom.SelectCredentialDialogResponseSpec, 'actor.webui.mojom.SelectCredentialDialogResponse', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('error_reason', 4, 0, actor.webui.mojom.SelectCredentialDialogErrorReasonSpec, null, true, 0, undefined),
      mojo.internal.StructField('permission_duration', 8, 0, actor.webui.mojom.UserGrantedPermissionDurationSpec, null, true, 0, undefined),
      mojo.internal.StructField('selected_credential_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'selected_credential_id_$value', originalFieldName: 'selected_credential_id' }),
      mojo.internal.StructField('selected_credential_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'selected_credential_id_$flag', originalFieldName: 'selected_credential_id' }),
    ],
    [[0, 32]]);

// Struct: AutofillSuggestion
mojo.internal.Struct(
    actor.webui.mojom.AutofillSuggestionSpec, 'actor.webui.mojom.AutofillSuggestion', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 24, 0, skia.mojom.BitmapN32Spec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FormFillingRequest
mojo.internal.Struct(
    actor.webui.mojom.FormFillingRequestSpec, 'actor.webui.mojom.FormFillingRequest', [
      mojo.internal.StructField('requested_data', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('suggestions', 8, 0, mojo.internal.Array(actor.webui.mojom.AutofillSuggestionSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SelectAutofillSuggestionsDialogRequest
mojo.internal.Struct(
    actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec, 'actor.webui.mojom.SelectAutofillSuggestionsDialogRequest', [
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('form_filling_requests', 0, 0, mojo.internal.Array(actor.webui.mojom.FormFillingRequestSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FormFillingResponse
mojo.internal.Struct(
    actor.webui.mojom.FormFillingResponseSpec, 'actor.webui.mojom.FormFillingResponse', [
      mojo.internal.StructField('selected_suggestion_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SelectAutofillSuggestionsDialogResponse
mojo.internal.Struct(
    actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec, 'actor.webui.mojom.SelectAutofillSuggestionsDialogResponse', [
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('result', 0, 0, actor.webui.mojom.SelectAutofillSuggestionsDialogResultSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UserConfirmationDialogPayload
mojo.internal.Struct(
    actor.webui.mojom.UserConfirmationDialogPayloadSpec, 'actor.webui.mojom.UserConfirmationDialogPayload', [
      mojo.internal.StructField('navigation_origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('for_blocklisted_origin', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UserConfirmationDialogRequest
mojo.internal.Struct(
    actor.webui.mojom.UserConfirmationDialogRequestSpec, 'actor.webui.mojom.UserConfirmationDialogRequest', [
      mojo.internal.StructField('payload', 0, 0, actor.webui.mojom.UserConfirmationDialogPayloadSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UserConfirmationDialogResponse
mojo.internal.Struct(
    actor.webui.mojom.UserConfirmationDialogResponseSpec, 'actor.webui.mojom.UserConfirmationDialogResponse', [
      mojo.internal.StructField('result', 0, 0, actor.webui.mojom.ConfirmationRequestResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NavigationConfirmationRequest
mojo.internal.Struct(
    actor.webui.mojom.NavigationConfirmationRequestSpec, 'actor.webui.mojom.NavigationConfirmationRequest', [
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('navigation_origin', 0, 0, url.mojom.OriginSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NavigationConfirmationResponse
mojo.internal.Struct(
    actor.webui.mojom.NavigationConfirmationResponseSpec, 'actor.webui.mojom.NavigationConfirmationResponse', [
      mojo.internal.StructField('result', 0, 0, actor.webui.mojom.ConfirmationRequestResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);
