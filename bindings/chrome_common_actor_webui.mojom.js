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
      packedSize: 16,
      fields: [
        { name: 'display_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'icons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'selected_credential_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'icon', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
      packedSize: 16,
      fields: [
        { name: 'suggestions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'form_filling_requests', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'for_blocklisted_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
        { name: 'payload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'navigation_origin', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
