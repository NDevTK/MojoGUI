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


// Enum: UserGrantedPermissionDuration
actor.webui.mojom.UserGrantedPermissionDuration = {
  kAlwaysAllow: 0,
};
actor.webui.mojom.UserGrantedPermissionDurationSpec = { $: mojo.internal.Enum() };

// Enum: SelectCredentialDialogErrorReason
actor.webui.mojom.SelectCredentialDialogErrorReason = {
};
actor.webui.mojom.SelectCredentialDialogErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: SelectAutofillSuggestionsDialogErrorReason
actor.webui.mojom.SelectAutofillSuggestionsDialogErrorReason = {
  kDialogPromiseNoSubscriber: 0,
  kMismatchedTaskId: 1,
  kNoActorTaskDelegate: 2,
};
actor.webui.mojom.SelectAutofillSuggestionsDialogErrorReasonSpec = { $: mojo.internal.Enum() };

// Enum: ConfirmationRequestErrorReason
actor.webui.mojom.ConfirmationRequestErrorReason = {
  kPreemptedByNewRequest: 0,
};
actor.webui.mojom.ConfirmationRequestErrorReasonSpec = { $: mojo.internal.Enum() };

// Union: SelectAutofillSuggestionsDialogResult
actor.webui.mojom.SelectAutofillSuggestionsDialogResultSpec = { $: mojo.internal.Union(
    'actor.webui.mojom.SelectAutofillSuggestionsDialogResult', {
      'error_reason': {
        'ordinal': 0,
        'type': actor.webui.mojom.SelectAutofillSuggestionsDialogErrorReasonSpec,
      }},
      'selected_suggestions': {
        'ordinal': 1,
        'type': mojo.internal.Array(actor.webui.mojom.FormFillingResponseSpec, false),
      }},
    })
};

// Union: UserConfirmationDialogResult
actor.webui.mojom.UserConfirmationDialogResultSpec = { $: mojo.internal.Union(
    'actor.webui.mojom.UserConfirmationDialogResult', {
      'permission_granted': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'error_reason': {
        'ordinal': 1,
        'type': actor.webui.mojom.ConfirmationRequestErrorReasonSpec,
      }},
    })
};

// Union: ConfirmationRequestResult
actor.webui.mojom.ConfirmationRequestResultSpec = { $: mojo.internal.Union(
    'actor.webui.mojom.ConfirmationRequestResult', {
      'permission_granted': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'error_reason': {
        'ordinal': 1,
        'type': actor.webui.mojom.ConfirmationRequestErrorReasonSpec,
      }},
    })
};

// Struct: TaskOptions
actor.webui.mojom.TaskOptionsSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.TaskOptions',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Credential
actor.webui.mojom.CredentialSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.Credential',
      packedSize: 48,
      fields: [
        { name: 'id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'username', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'source_site_or_app', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'request_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'display_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: SelectCredentialDialogRequest
actor.webui.mojom.SelectCredentialDialogRequestSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.SelectCredentialDialogRequest',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'show_dialog', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(actor.webui.mojom.CredentialSpec, false), nullable: false, minVersion: 0 },
        { name: 'icons', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, skia.mojom.BitmapN32Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: SelectCredentialDialogResponse
actor.webui.mojom.SelectCredentialDialogResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.SelectCredentialDialogResponse',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'error_reason', packedOffset: 4, packedBitOffset: 0, type: actor.webui.mojom.SelectCredentialDialogErrorReasonSpec, nullable: true, minVersion: 0 },
        { name: 'permission_duration', packedOffset: 8, packedBitOffset: 0, type: actor.webui.mojom.UserGrantedPermissionDurationSpec, nullable: true, minVersion: 0 },
        { name: 'selected_credential_id_$flag', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'selected_credential_id_$value', originalFieldName: 'selected_credential_id' } },
        { name: 'selected_credential_id_$value', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'selected_credential_id_$flag', originalFieldName: 'selected_credential_id' } },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AutofillSuggestion
actor.webui.mojom.AutofillSuggestionSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.AutofillSuggestion',
      packedSize: 40,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'icon', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: FormFillingRequest
actor.webui.mojom.FormFillingRequestSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.FormFillingRequest',
      packedSize: 24,
      fields: [
        { name: 'requested_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'suggestions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(actor.webui.mojom.AutofillSuggestionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: SelectAutofillSuggestionsDialogRequest
actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.SelectAutofillSuggestionsDialogRequest',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'form_filling_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(actor.webui.mojom.FormFillingRequestSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FormFillingResponse
actor.webui.mojom.FormFillingResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.FormFillingResponse',
      packedSize: 16,
      fields: [
        { name: 'selected_suggestion_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: SelectAutofillSuggestionsDialogResponse
actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.SelectAutofillSuggestionsDialogResponse',
      packedSize: 32,
      fields: [
        { name: 'task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.SelectAutofillSuggestionsDialogResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: UserConfirmationDialogPayload
actor.webui.mojom.UserConfirmationDialogPayloadSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.UserConfirmationDialogPayload',
      packedSize: 24,
      fields: [
        { name: 'navigation_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'for_blocklisted_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UserConfirmationDialogRequest
actor.webui.mojom.UserConfirmationDialogRequestSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.UserConfirmationDialogRequest',
      packedSize: 16,
      fields: [
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.UserConfirmationDialogPayloadSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: UserConfirmationDialogResponse
actor.webui.mojom.UserConfirmationDialogResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.UserConfirmationDialogResponse',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.ConfirmationRequestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NavigationConfirmationRequest
actor.webui.mojom.NavigationConfirmationRequestSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.NavigationConfirmationRequest',
      packedSize: 24,
      fields: [
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'navigation_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NavigationConfirmationResponse
actor.webui.mojom.NavigationConfirmationResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.NavigationConfirmationResponse',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.ConfirmationRequestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
