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
blink.mojom.InspectorIssueCodeSpec = { $: mojo.internal.Enum() };

// Enum: HeavyAdResolutionStatus
blink.mojom.HeavyAdResolutionStatus = {
  kHeavyAdBlocked: 0,
  kHeavyAdWarning: 1,
};
blink.mojom.HeavyAdResolutionStatusSpec = { $: mojo.internal.Enum() };

// Enum: HeavyAdReason
blink.mojom.HeavyAdReason = {
  kNetworkTotalLimit: 0,
  kCpuTotalLimit: 1,
  kCpuPeakLimit: 2,
};
blink.mojom.HeavyAdReasonSpec = { $: mojo.internal.Enum() };

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
blink.mojom.AttributionReportingIssueTypeSpec = { $: mojo.internal.Enum() };

// Enum: MixedContentResolutionStatus
blink.mojom.MixedContentResolutionStatus = {
  kMixedContentBlocked: 0,
  kMixedContentAutomaticallyUpgraded: 1,
  kMixedContentWarning: 2,
};
blink.mojom.MixedContentResolutionStatusSpec = { $: mojo.internal.Enum() };

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
blink.mojom.ContentSecurityPolicyViolationTypeSpec = { $: mojo.internal.Enum() };

// Enum: CookieOperation
blink.mojom.CookieOperation = {
  kSetCookie: 0,
  kReadCookie: 1,
};
blink.mojom.CookieOperationSpec = { $: mojo.internal.Enum() };

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
blink.mojom.CookieExclusionReasonSpec = { $: mojo.internal.Enum() };

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
blink.mojom.CookieWarningReasonSpec = { $: mojo.internal.Enum() };

// Enum: SharedArrayBufferIssueType
blink.mojom.SharedArrayBufferIssueType = {
  kTransferIssue: 0,
  kCreationIssue: 1,
};
blink.mojom.SharedArrayBufferIssueTypeSpec = { $: mojo.internal.Enum() };

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
blink.mojom.FederatedAuthRequestResultSpec = { $: mojo.internal.Enum() };

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
blink.mojom.FederatedAuthUserInfoRequestResultSpec = { $: mojo.internal.Enum() };

// Enum: PartitioningBlobURLInfo
blink.mojom.PartitioningBlobURLInfo = {
  kBlockedCrossPartitionFetching: 0,
  kEnforceNoopenerForNavigation: 1,
};
blink.mojom.PartitioningBlobURLInfoSpec = { $: mojo.internal.Enum() };

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
blink.mojom.GenericIssueErrorTypeSpec = { $: mojo.internal.Enum() };

// Enum: DeprecationIssueType
blink.mojom.DeprecationIssueType = {
  kExampleBrowserProcessDeprecation: 0,
  kRelatedWebsiteSets: 1,
};
blink.mojom.DeprecationIssueTypeSpec = { $: mojo.internal.Enum() };

// Enum: UserReidentificationIssueType
blink.mojom.UserReidentificationIssueType = {
  kBlockedFrameNavigation: 0,
  kBlockedSubresource: 1,
  kNoisedCanvasReadback: 2,
};
blink.mojom.UserReidentificationIssueTypeSpec = { $: mojo.internal.Enum() };

// Struct: AffectedCookie
blink.mojom.AffectedCookieSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AffectedCookie',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'domain', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: AffectedRequest
blink.mojom.AffectedRequestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AffectedRequest',
      packedSize: 24,
      fields: [
        { name: 'request_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'frame_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: AffectedLocation
blink.mojom.AffectedLocationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AffectedLocation',
      packedSize: 32,
      fields: [
        { name: 'script_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'line', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'column', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: BlockedByResponseIssueDetails
blink.mojom.BlockedByResponseIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.BlockedByResponseIssueDetails',
      packedSize: 40,
      fields: [
        { name: 'request', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AffectedRequestSpec, nullable: false, minVersion: 0 },
        { name: 'parentFrame', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AffectedFrameSpec, nullable: true, minVersion: 0 },
        { name: 'blockedFrame', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AffectedFrameSpec, nullable: true, minVersion: 0 },
        { name: 'reason', packedOffset: 24, packedBitOffset: 0, type: network.mojom.BlockedByResponseReasonSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: HeavyAdIssueDetails
blink.mojom.HeavyAdIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HeavyAdIssueDetails',
      packedSize: 24,
      fields: [
        { name: 'resolution', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.HeavyAdResolutionStatusSpec, nullable: false, minVersion: 0 },
        { name: 'reason', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.HeavyAdReasonSpec, nullable: false, minVersion: 0 },
        { name: 'frame', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AffectedFrameSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: AttributionReportingIssueDetails
blink.mojom.AttributionReportingIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.AttributionReportingIssueDetails',
      packedSize: 32,
      fields: [
        { name: 'violation_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AttributionReportingIssueTypeSpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AffectedRequestSpec, nullable: true, minVersion: 0 },
        { name: 'invalid_parameter', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: MixedContentIssueDetails
blink.mojom.MixedContentIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.MixedContentIssueDetails',
      packedSize: 48,
      fields: [
        { name: 'request_context', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.RequestContextTypeSpec, nullable: false, minVersion: 0 },
        { name: 'resolution_status', packedOffset: 4, packedBitOffset: 0, type: blink.mojom.MixedContentResolutionStatusSpec, nullable: false, minVersion: 0 },
        { name: 'insecure_url', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'main_resource_url', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AffectedRequestSpec, nullable: true, minVersion: 0 },
        { name: 'frame', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AffectedFrameSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ContentSecurityPolicyIssueDetails
blink.mojom.ContentSecurityPolicyIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ContentSecurityPolicyIssueDetails',
      packedSize: 56,
      fields: [
        { name: 'blocked_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'violated_directive', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_report_only', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'content_security_policy_violation_type', packedOffset: 20, packedBitOffset: 0, type: blink.mojom.ContentSecurityPolicyViolationTypeSpec, nullable: false, minVersion: 0 },
        { name: 'frame_ancestor', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.AffectedFrameSpec, nullable: true, minVersion: 0 },
        { name: 'affected_location', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.AffectedLocationSpec, nullable: true, minVersion: 0 },
        { name: 'violating_node_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: CookieIssueDetails
blink.mojom.CookieIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieIssueDetails',
      packedSize: 64,
      fields: [
        { name: 'cookie', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AffectedCookieSpec, nullable: false, minVersion: 0 },
        { name: 'exclusion_reason', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.CookieExclusionReasonSpec, false), nullable: false, minVersion: 0 },
        { name: 'warning_reason', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.CookieWarningReasonSpec, false), nullable: false, minVersion: 0 },
        { name: 'operation', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.CookieOperationSpec, nullable: false, minVersion: 0 },
        { name: 'site_for_cookies', packedOffset: 32, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'cookie_url', packedOffset: 40, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'request', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AffectedRequestSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 64}]
    }
  }
};

// Struct: SharedArrayBufferIssueDetails
blink.mojom.SharedArrayBufferIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.SharedArrayBufferIssueDetails',
      packedSize: 24,
      fields: [
        { name: 'affected_location', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.AffectedLocationSpec, nullable: true, minVersion: 0 },
        { name: 'is_warning', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'type', packedOffset: 12, packedBitOffset: 0, type: blink.mojom.SharedArrayBufferIssueTypeSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: LowTextContrastIssue
blink.mojom.LowTextContrastIssueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.LowTextContrastIssue',
      packedSize: 48,
      fields: [
        { name: 'violating_node_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'violating_node_selector', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'contrast_ratio', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'threshold_aa', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'threshold_aaa', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'font_size', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'font_weight', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FederatedAuthRequestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'status', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.FederatedAuthUserInfoRequestResultSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
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
        { name: 'tracking_sites', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: PartitioningBlobURLIssueDetails
blink.mojom.PartitioningBlobURLIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.PartitioningBlobURLIssueDetails',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'partitioning_blob_url_info', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.PartitioningBlobURLInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: CookieDeprecationMetadataIssueDetails
blink.mojom.CookieDeprecationMetadataIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.CookieDeprecationMetadataIssueDetails',
      packedSize: 32,
      fields: [
        { name: 'allowed_sites', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'opt_out_percentage', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_opt_out_top_level', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'operation', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.CookieOperationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: GenericIssueDetails
blink.mojom.GenericIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.GenericIssueDetails',
      packedSize: 32,
      fields: [
        { name: 'error_type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.GenericIssueErrorTypeSpec, nullable: false, minVersion: 0 },
        { name: 'frame_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'violating_node_id', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'violating_node_attribute', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DeprecationIssueDetails
blink.mojom.DeprecationIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DeprecationIssueDetails',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DeprecationIssueTypeSpec, nullable: false, minVersion: 0 },
        { name: 'affected_location', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AffectedLocationSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: UserReidentificationIssueDetails
blink.mojom.UserReidentificationIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.UserReidentificationIssueDetails',
      packedSize: 32,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.UserReidentificationIssueTypeSpec, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.AffectedRequestSpec, nullable: true, minVersion: 0 },
        { name: 'sourceCodeLocation', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.AffectedLocationSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: InspectorIssueDetails
blink.mojom.InspectorIssueDetailsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InspectorIssueDetails',
      packedSize: 144,
      fields: [
        { name: 'cookie_issue_details', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.CookieIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'mixed_content_issue_details', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.MixedContentIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'blocked_by_response_issue_details', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.BlockedByResponseIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'csp_issue_details', packedOffset: 24, packedBitOffset: 0, type: blink.mojom.ContentSecurityPolicyIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'sab_issue_details', packedOffset: 32, packedBitOffset: 0, type: blink.mojom.SharedArrayBufferIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'heavy_ad_issue_details', packedOffset: 40, packedBitOffset: 0, type: blink.mojom.HeavyAdIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'attribution_reporting_issue_details', packedOffset: 48, packedBitOffset: 0, type: blink.mojom.AttributionReportingIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'low_text_contrast_details', packedOffset: 56, packedBitOffset: 0, type: blink.mojom.LowTextContrastIssueSpec, nullable: true, minVersion: 0 },
        { name: 'federated_auth_request_details', packedOffset: 64, packedBitOffset: 0, type: blink.mojom.FederatedAuthRequestIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'bounce_tracking_issue_details', packedOffset: 72, packedBitOffset: 0, type: blink.mojom.BounceTrackingIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'partitioning_blob_url_issue_details', packedOffset: 80, packedBitOffset: 0, type: blink.mojom.PartitioningBlobURLIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'cookie_deprecation_metadata_issue_details', packedOffset: 88, packedBitOffset: 0, type: blink.mojom.CookieDeprecationMetadataIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'generic_issue_details', packedOffset: 96, packedBitOffset: 0, type: blink.mojom.GenericIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'deprecation_issue_details', packedOffset: 104, packedBitOffset: 0, type: blink.mojom.DeprecationIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'federated_auth_user_info_request_details', packedOffset: 112, packedBitOffset: 0, type: blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'user_reidentification_issue_details', packedOffset: 120, packedBitOffset: 0, type: blink.mojom.UserReidentificationIssueDetailsSpec, nullable: true, minVersion: 0 },
        { name: 'issue_id', packedOffset: 128, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 144}]
    }
  }
};

// Struct: InspectorIssueInfo
blink.mojom.InspectorIssueInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.InspectorIssueInfo',
      packedSize: 24,
      fields: [
        { name: 'code', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.InspectorIssueCodeSpec, nullable: false, minVersion: 0 },
        { name: 'details', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.InspectorIssueDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
