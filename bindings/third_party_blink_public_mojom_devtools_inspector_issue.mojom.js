// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/devtools/inspector_issue.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var network = network || {};
var url = url || {};

blink.mojom.InspectorIssueCodeSpec = { $: mojo.internal.Enum() };
blink.mojom.HeavyAdResolutionStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.HeavyAdReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.AttributionReportingIssueTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.MixedContentResolutionStatusSpec = { $: mojo.internal.Enum() };
blink.mojom.ContentSecurityPolicyViolationTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.CookieOperationSpec = { $: mojo.internal.Enum() };
blink.mojom.CookieExclusionReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.CookieWarningReasonSpec = { $: mojo.internal.Enum() };
blink.mojom.SharedArrayBufferIssueTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.FederatedAuthRequestResultSpec = { $: mojo.internal.Enum() };
blink.mojom.FederatedAuthUserInfoRequestResultSpec = { $: mojo.internal.Enum() };
blink.mojom.PartitioningBlobURLInfoSpec = { $: mojo.internal.Enum() };
blink.mojom.GenericIssueErrorTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.DeprecationIssueTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.UserReidentificationIssueTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.AffectedCookieSpec = { $: {} };
blink.mojom.AffectedRequestSpec = { $: {} };
blink.mojom.AffectedFrameSpec = { $: {} };
blink.mojom.AffectedLocationSpec = { $: {} };
blink.mojom.BlockedByResponseIssueDetailsSpec = { $: {} };
blink.mojom.HeavyAdIssueDetailsSpec = { $: {} };
blink.mojom.AttributionReportingIssueDetailsSpec = { $: {} };
blink.mojom.MixedContentIssueDetailsSpec = { $: {} };
blink.mojom.ContentSecurityPolicyIssueDetailsSpec = { $: {} };
blink.mojom.CookieIssueDetailsSpec = { $: {} };
blink.mojom.SharedArrayBufferIssueDetailsSpec = { $: {} };
blink.mojom.LowTextContrastIssueSpec = { $: {} };
blink.mojom.FederatedAuthRequestIssueDetailsSpec = { $: {} };
blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec = { $: {} };
blink.mojom.BounceTrackingIssueDetailsSpec = { $: {} };
blink.mojom.PartitioningBlobURLIssueDetailsSpec = { $: {} };
blink.mojom.CookieDeprecationMetadataIssueDetailsSpec = { $: {} };
blink.mojom.GenericIssueDetailsSpec = { $: {} };
blink.mojom.DeprecationIssueDetailsSpec = { $: {} };
blink.mojom.UserReidentificationIssueDetailsSpec = { $: {} };
blink.mojom.InspectorIssueDetailsSpec = { $: {} };
blink.mojom.InspectorIssueInfoSpec = { $: {} };

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
mojo.internal.Struct(
    blink.mojom.AffectedCookieSpec, 'blink.mojom.AffectedCookie', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('domain', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AffectedRequest
mojo.internal.Struct(
    blink.mojom.AffectedRequestSpec, 'blink.mojom.AffectedRequest', [
      mojo.internal.StructField('request_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AffectedFrame
mojo.internal.Struct(
    blink.mojom.AffectedFrameSpec, 'blink.mojom.AffectedFrame', [
      mojo.internal.StructField('frame_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AffectedLocation
mojo.internal.Struct(
    blink.mojom.AffectedLocationSpec, 'blink.mojom.AffectedLocation', [
      mojo.internal.StructField('script_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('line', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('column', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BlockedByResponseIssueDetails
mojo.internal.Struct(
    blink.mojom.BlockedByResponseIssueDetailsSpec, 'blink.mojom.BlockedByResponseIssueDetails', [
      mojo.internal.StructField('request', 0, 0, blink.mojom.AffectedRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('parentFrame', 8, 0, blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blockedFrame', 16, 0, blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('reason', 24, 0, network.mojom.BlockedByResponseReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HeavyAdIssueDetails
mojo.internal.Struct(
    blink.mojom.HeavyAdIssueDetailsSpec, 'blink.mojom.HeavyAdIssueDetails', [
      mojo.internal.StructField('resolution', 0, 0, blink.mojom.HeavyAdResolutionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('reason', 8, 0, blink.mojom.HeavyAdReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame', 16, 0, blink.mojom.AffectedFrameSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AttributionReportingIssueDetails
mojo.internal.Struct(
    blink.mojom.AttributionReportingIssueDetailsSpec, 'blink.mojom.AttributionReportingIssueDetails', [
      mojo.internal.StructField('violation_type', 0, 0, blink.mojom.AttributionReportingIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('invalid_parameter', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MixedContentIssueDetails
mojo.internal.Struct(
    blink.mojom.MixedContentIssueDetailsSpec, 'blink.mojom.MixedContentIssueDetails', [
      mojo.internal.StructField('request_context', 0, 0, blink.mojom.RequestContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('resolution_status', 8, 0, blink.mojom.MixedContentResolutionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('insecure_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('main_resource_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('request', 32, 0, blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('frame', 40, 0, blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ContentSecurityPolicyIssueDetails
mojo.internal.Struct(
    blink.mojom.ContentSecurityPolicyIssueDetailsSpec, 'blink.mojom.ContentSecurityPolicyIssueDetails', [
      mojo.internal.StructField('blocked_url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('violated_directive', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_security_policy_violation_type', 16, 0, blink.mojom.ContentSecurityPolicyViolationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_ancestor', 24, 0, blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('affected_location', 32, 0, blink.mojom.AffectedLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('violating_node_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('is_report_only', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CookieIssueDetails
mojo.internal.Struct(
    blink.mojom.CookieIssueDetailsSpec, 'blink.mojom.CookieIssueDetails', [
      mojo.internal.StructField('cookie', 0, 0, blink.mojom.AffectedCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('exclusion_reason', 8, 0, mojo.internal.Array(blink.mojom.CookieExclusionReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('warning_reason', 16, 0, mojo.internal.Array(blink.mojom.CookieWarningReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('operation', 24, 0, blink.mojom.CookieOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('site_for_cookies', 32, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_url', 40, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('request', 48, 0, blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: SharedArrayBufferIssueDetails
mojo.internal.Struct(
    blink.mojom.SharedArrayBufferIssueDetailsSpec, 'blink.mojom.SharedArrayBufferIssueDetails', [
      mojo.internal.StructField('affected_location', 0, 0, blink.mojom.AffectedLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('type', 8, 0, blink.mojom.SharedArrayBufferIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_warning', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LowTextContrastIssue
mojo.internal.Struct(
    blink.mojom.LowTextContrastIssueSpec, 'blink.mojom.LowTextContrastIssue', [
      mojo.internal.StructField('violating_node_selector', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('font_size', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('font_weight', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('violating_node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('contrast_ratio', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('threshold_aa', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('threshold_aaa', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FederatedAuthRequestIssueDetails
mojo.internal.Struct(
    blink.mojom.FederatedAuthRequestIssueDetailsSpec, 'blink.mojom.FederatedAuthRequestIssueDetails', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.FederatedAuthRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FederatedAuthUserInfoRequestIssueDetails
mojo.internal.Struct(
    blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec, 'blink.mojom.FederatedAuthUserInfoRequestIssueDetails', [
      mojo.internal.StructField('status', 0, 0, blink.mojom.FederatedAuthUserInfoRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BounceTrackingIssueDetails
mojo.internal.Struct(
    blink.mojom.BounceTrackingIssueDetailsSpec, 'blink.mojom.BounceTrackingIssueDetails', [
      mojo.internal.StructField('tracking_sites', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PartitioningBlobURLIssueDetails
mojo.internal.Struct(
    blink.mojom.PartitioningBlobURLIssueDetailsSpec, 'blink.mojom.PartitioningBlobURLIssueDetails', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('partitioning_blob_url_info', 8, 0, blink.mojom.PartitioningBlobURLInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieDeprecationMetadataIssueDetails
mojo.internal.Struct(
    blink.mojom.CookieDeprecationMetadataIssueDetailsSpec, 'blink.mojom.CookieDeprecationMetadataIssueDetails', [
      mojo.internal.StructField('allowed_sites', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('operation', 8, 0, blink.mojom.CookieOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('opt_out_percentage', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('is_opt_out_top_level', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GenericIssueDetails
mojo.internal.Struct(
    blink.mojom.GenericIssueDetailsSpec, 'blink.mojom.GenericIssueDetails', [
      mojo.internal.StructField('error_type', 0, 0, blink.mojom.GenericIssueErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('frame_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('violating_node_attribute', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('violating_node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DeprecationIssueDetails
mojo.internal.Struct(
    blink.mojom.DeprecationIssueDetailsSpec, 'blink.mojom.DeprecationIssueDetails', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.DeprecationIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('affected_location', 8, 0, blink.mojom.AffectedLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UserReidentificationIssueDetails
mojo.internal.Struct(
    blink.mojom.UserReidentificationIssueDetailsSpec, 'blink.mojom.UserReidentificationIssueDetails', [
      mojo.internal.StructField('type', 0, 0, blink.mojom.UserReidentificationIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request', 8, 0, blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sourceCodeLocation', 16, 0, blink.mojom.AffectedLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: InspectorIssueDetails
mojo.internal.Struct(
    blink.mojom.InspectorIssueDetailsSpec, 'blink.mojom.InspectorIssueDetails', [
      mojo.internal.StructField('cookie_issue_details', 0, 0, blink.mojom.CookieIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('mixed_content_issue_details', 8, 0, blink.mojom.MixedContentIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('blocked_by_response_issue_details', 16, 0, blink.mojom.BlockedByResponseIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('csp_issue_details', 24, 0, blink.mojom.ContentSecurityPolicyIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('sab_issue_details', 32, 0, blink.mojom.SharedArrayBufferIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('heavy_ad_issue_details', 40, 0, blink.mojom.HeavyAdIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('attribution_reporting_issue_details', 48, 0, blink.mojom.AttributionReportingIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('low_text_contrast_details', 56, 0, blink.mojom.LowTextContrastIssueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('federated_auth_request_details', 64, 0, blink.mojom.FederatedAuthRequestIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('bounce_tracking_issue_details', 72, 0, blink.mojom.BounceTrackingIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('partitioning_blob_url_issue_details', 80, 0, blink.mojom.PartitioningBlobURLIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('cookie_deprecation_metadata_issue_details', 88, 0, blink.mojom.CookieDeprecationMetadataIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('generic_issue_details', 96, 0, blink.mojom.GenericIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('deprecation_issue_details', 104, 0, blink.mojom.DeprecationIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('federated_auth_user_info_request_details', 112, 0, blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('user_reidentification_issue_details', 120, 0, blink.mojom.UserReidentificationIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('issue_id', 128, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 144]]);

// Struct: InspectorIssueInfo
mojo.internal.Struct(
    blink.mojom.InspectorIssueInfoSpec, 'blink.mojom.InspectorIssueInfo', [
      mojo.internal.StructField('code', 0, 0, blink.mojom.InspectorIssueCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('details', 8, 0, blink.mojom.InspectorIssueDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
