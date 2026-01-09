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

// Struct: TaskOptions
actor.webui.mojom.TaskOptionsSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.TaskOptions',
      packedSize: 16,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'username', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'source_site_or_app', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'request_origin', packedOffset: 16, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'display_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'id', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SelectCredentialDialogRequest
actor.webui.mojom.SelectCredentialDialogRequestSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.SelectCredentialDialogRequest',
      packedSize: 40,
      fields: [
        { name: 'credentials', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'icons', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'show_dialog', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'error_reason', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.SelectCredentialDialogErrorReasonSpec, nullable: true },
        { name: 'permission_duration', packedOffset: 8, packedBitOffset: 0, type: actor.webui.mojom.UserGrantedPermissionDurationSpec, nullable: true },
        { name: 'task_id', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'selected_credential_id', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Int32, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'title', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'details', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'icon', packedOffset: 24, packedBitOffset: 0, type: skia.mojom.BitmapN32Spec, nullable: true },
      ],
      versions: [{version: 0}]
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
        { name: 'requested_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'suggestions', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'form_filling_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'selected_suggestion_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SelectAutofillSuggestionsDialogResponse
actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.SelectAutofillSuggestionsDialogResponse',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'navigation_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'for_blocklisted_origin', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: actor.webui.mojom.UserConfirmationDialogPayloadSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserConfirmationDialogResponse
actor.webui.mojom.UserConfirmationDialogResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.UserConfirmationDialogResponse',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
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
        { name: 'navigation_origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'task_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NavigationConfirmationResponse
actor.webui.mojom.NavigationConfirmationResponseSpec = {
  $: {
    structSpec: {
      name: 'actor.webui.mojom.NavigationConfirmationResponse',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
