// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/inspector_issue.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: InspectorIssueCode
blink.mojom.InspectorIssueCode = {
  kCookieIssue: 0,
  kMixedContentIssue: 1,
  kBlockedByResponseIssue: 2,
  kContentSecurityPolicyIssue: 3,
  kSharedArrayBufferIssue: 4,
  kHeavyAdIssue: 5,
  kAttributionReportingIssue: 6,
  kLowTextContrastIssue: 7,
  kFederatedAuthRequestIssue: 8,
  kBounceTrackingIssue: 9,
  kCookieDeprecationMetadataIssue: 10,
  kGenericIssue: 11,
  kDeprecationIssue: 12,
  kFederatedAuthUserInfoRequestIssue: 13,
  kPartitioningBlobURLIssue: 14,
  kUserReidentificationIssue: 15,
};

// Enum: HeavyAdResolutionStatus
blink.mojom.HeavyAdResolutionStatus = {
  kHeavyAdBlocked: 0,
  kHeavyAdWarning: 1,
};

// Enum: HeavyAdReason
blink.mojom.HeavyAdReason = {
  kNetworkTotalLimit: 0,
  kCpuTotalLimit: 1,
  kCpuPeakLimit: 2,
};

// Enum: AttributionReportingIssueType
blink.mojom.AttributionReportingIssueType = {
  kPermissionPolicyDisabled: 0,
  kUntrustworthyReportingOrigin: 1,
  kInsecureContext: 2,
  kInvalidRegisterSourceHeader: 3,
  kInvalidRegisterTriggerHeader: 4,
  kSourceAndTriggerHeaders: 5,
  kSourceIgnored: 6,
  kTriggerIgnored: 7,
  kOsSourceIgnored: 8,
  kOsTriggerIgnored: 9,
  kInvalidRegisterOsSourceHeader: 10,
  kInvalidRegisterOsTriggerHeader: 11,
  kWebAndOsHeaders: 12,
  kNoWebOrOsSupport: 13,
  kNavigationRegistrationWithoutTransientUserActivation: 14,
  kInvalidInfoHeader: 15,
  kNoRegisterSourceHeader: 16,
  kNoRegisterTriggerHeader: 17,
  kNoRegisterOsSourceHeader: 18,
  kNoRegisterOsTriggerHeader: 19,
  kNavigationRegistrationUniqueScopeAlreadySet: 20,
};

// Enum: MixedContentResolutionStatus
blink.mojom.MixedContentResolutionStatus = {
  kMixedContentBlocked: 0,
  kMixedContentAutomaticallyUpgraded: 1,
  kMixedContentWarning: 2,
};

// Enum: ContentSecurityPolicyViolationType
blink.mojom.ContentSecurityPolicyViolationType = {
  kInlineViolation: 0,
  kEvalViolation: 1,
  kURLViolation: 2,
  kSRIViolation: 3,
  kTrustedTypesSinkViolation: 4,
  kTrustedTypesPolicyViolation: 5,
  kWasmEvalViolation: 6,
};

// Enum: CookieOperation
blink.mojom.CookieOperation = {
  kSetCookie: 0,
  kReadCookie: 1,
};

// Enum: CookieExclusionReason
blink.mojom.CookieExclusionReason = {
  kExcludeSameSiteUnspecifiedTreatedAsLax: 0,
  kExcludeSameSiteNoneInsecure: 1,
  kExcludeSameSiteLax: 2,
  kExcludeSameSiteStrict: 3,
  kExcludeDomainNonASCII: 4,
  kExcludeThirdPartyPhaseout: 5,
  kExcludePortMismatch: 6,
  kExcludeSchemeMismatch: 7,
};

// Enum: CookieWarningReason
blink.mojom.CookieWarningReason = {
  kWarnSameSiteUnspecifiedCrossSiteContext: 0,
  kWarnSameSiteNoneInsecure: 1,
  kWarnSameSiteUnspecifiedLaxAllowUnsafe: 2,
  kWarnSameSiteStrictLaxDowngradeStrict: 3,
  kWarnSameSiteStrictCrossDowngradeStrict: 4,
  kWarnSameSiteStrictCrossDowngradeLax: 5,
  kWarnSameSiteLaxCrossDowngradeStrict: 6,
  kWarnSameSiteLaxCrossDowngradeLax: 7,
  kWarnAttributeValueExceedsMaxSize: 8,
  kWarnDomainNonASCII: 9,
  kWarnThirdPartyPhaseout: 10,
  kWarnCrossSiteRedirectDowngradeChangesInclusion: 11,
};

// Enum: SharedArrayBufferIssueType
blink.mojom.SharedArrayBufferIssueType = {
  kTransferIssue: 0,
  kCreationIssue: 1,
};

// Enum: FederatedAuthRequestResult
blink.mojom.FederatedAuthRequestResult = {
  kSuccess: 0,
  kShouldEmbargo: 1,
  kIdpNotPotentiallyTrustworthy: 2,
  kDisabledInSettings: 3,
  kDisabledInFlags: 4,
  kTooManyRequests: 5,
  kWellKnownHttpNotFound: 6,
  kWellKnownNoResponse: 7,
  kWellKnownInvalidResponse: 8,
  kWellKnownListEmpty: 9,
  kWellKnownInvalidContentType: 10,
  kConfigNotInWellKnown: 11,
  kWellKnownTooBig: 12,
  kConfigHttpNotFound: 13,
  kConfigNoResponse: 14,
  kConfigInvalidResponse: 15,
  kConfigInvalidContentType: 16,
  kClientMetadataHttpNotFound: 17,
  kClientMetadataNoResponse: 18,
  kClientMetadataInvalidResponse: 19,
  kClientMetadataInvalidContentType: 20,
  kAccountsHttpNotFound: 21,
  kAccountsNoResponse: 22,
  kAccountsInvalidResponse: 23,
  kAccountsListEmpty: 24,
  kAccountsInvalidContentType: 25,
  kIdTokenHttpNotFound: 26,
  kIdTokenNoResponse: 27,
  kIdTokenInvalidResponse: 28,
  kIdTokenIdpErrorResponse: 29,
  kIdTokenCrossSiteIdpErrorResponse: 30,
  kIdTokenInvalidContentType: 31,
  kCanceled: 32,
  kRpPageNotVisible: 33,
  kSilentMediationFailure: 34,
  kThirdPartyCookiesBlocked: 35,
  kNotSignedInWithIdp: 36,
  kMissingTransientUserActivation: 37,
  kReplacedByActiveMode: 38,
  kInvalidFieldsSpecified: 39,
  kRelyingPartyOriginIsOpaque: 40,
  kTypeNotMatching: 41,
  kError: 42,
  kUiDismissedNoEmbargo: 43,
  kCorsError: 44,
  kSuppressedBySegmentationPlatform: 45,
};

// Enum: FederatedAuthUserInfoRequestResult
blink.mojom.FederatedAuthUserInfoRequestResult = {
  kSuccess: 0,
  kNotSameOrigin: 1,
  kNotIframe: 2,
  kNotPotentiallyTrustworthy: 3,
  kNoApiPermission: 4,
  kNotSignedInWithIdp: 5,
  kNoAccountSharingPermission: 6,
  kInvalidConfigOrWellKnown: 7,
  kInvalidAccountsResponse: 8,
  kNoReturningUserFromFetchedAccounts: 9,
  kUnhandledRequest: 10,
};

// Enum: PartitioningBlobURLInfo
blink.mojom.PartitioningBlobURLInfo = {
  kBlockedCrossPartitionFetching: 0,
  kEnforceNoopenerForNavigation: 1,
};

// Enum: GenericIssueErrorType
blink.mojom.GenericIssueErrorType = {
  kFormLabelForNameError: 0,
  kFormDuplicateIdForInputError: 1,
  kFormInputWithNoLabelError: 2,
  kFormAutocompleteAttributeEmptyError: 3,
  kFormEmptyIdAndNameAttributesForInputError: 4,
  kFormAriaLabelledByToNonExistingIdError: 5,
  kFormInputAssignedAutocompleteValueToIdOrNameAttributeError: 6,
  kFormLabelHasNeitherForNorNestedInputError: 7,
  kFormLabelForMatchesNonExistingIdError: 8,
  kFormInputHasWrongButWellIntendedAutocompleteValueError: 9,
  kResponseWasBlockedByORB: 10,
  kNavigationEntryMarkedSkippable: 11,
  kAutofillAndManualTextPolicyControlledFeaturesInfo: 12,
  kAutofillPolicyControlledFeatureInfo: 13,
  kManualTextPolicyControlledFeatureInfo: 14,
};

// Enum: DeprecationIssueType
blink.mojom.DeprecationIssueType = {
  kExampleBrowserProcessDeprecation: 0,
  kRelatedWebsiteSets: 1,
};

// Enum: UserReidentificationIssueType
blink.mojom.UserReidentificationIssueType = {
  kBlockedFrameNavigation: 0,
  kBlockedSubresource: 1,
  kNoisedCanvasReadback: 2,
};

// Struct: AffectedCookie
blink.mojom.AffectedCookieSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AffectedCookie',
      packedSize: 16,
      fields: [
        { name: 'domain', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AffectedRequest
blink.mojom.AffectedRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AffectedRequest',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AffectedFrame
blink.mojom.AffectedFrameSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AffectedFrame',
      packedSize: 16,
      fields: [
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AffectedLocation
blink.mojom.AffectedLocationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AffectedLocation',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BlockedByResponseIssueDetails
blink.mojom.BlockedByResponseIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlockedByResponseIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'reason', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HeavyAdIssueDetails
blink.mojom.HeavyAdIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HeavyAdIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: AttributionReportingIssueDetails
blink.mojom.AttributionReportingIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionReportingIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'invalid_parameter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: MixedContentIssueDetails
blink.mojom.MixedContentIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MixedContentIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'frame', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentSecurityPolicyIssueDetails
blink.mojom.ContentSecurityPolicyIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityPolicyIssueDetails',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieIssueDetails
blink.mojom.CookieIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SharedArrayBufferIssueDetails
blink.mojom.SharedArrayBufferIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedArrayBufferIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: LowTextContrastIssue
blink.mojom.LowTextContrastIssueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LowTextContrastIssue',
      packedSize: 16,
      fields: [
        { name: 'font_weight', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FederatedAuthRequestIssueDetails
blink.mojom.FederatedAuthRequestIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthRequestIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FederatedAuthUserInfoRequestIssueDetails
blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.FederatedAuthUserInfoRequestIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: BounceTrackingIssueDetails
blink.mojom.BounceTrackingIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BounceTrackingIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'tracking_sites', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PartitioningBlobURLIssueDetails
blink.mojom.PartitioningBlobURLIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PartitioningBlobURLIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'partitioning_blob_url_info', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: CookieDeprecationMetadataIssueDetails
blink.mojom.CookieDeprecationMetadataIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieDeprecationMetadataIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'operation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: GenericIssueDetails
blink.mojom.GenericIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GenericIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'violating_node_attribute', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DeprecationIssueDetails
blink.mojom.DeprecationIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeprecationIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'affected_location', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UserReidentificationIssueDetails
blink.mojom.UserReidentificationIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserReidentificationIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'sourceCodeLocation', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InspectorIssueDetails
blink.mojom.InspectorIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InspectorIssueDetails',
      packedSize: 16,
      fields: [
        { name: 'issue_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InspectorIssueInfo
blink.mojom.InspectorIssueInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InspectorIssueInfo',
      packedSize: 16,
      fields: [
        { name: 'details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
