// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/devtools/inspector_issue.mojom
 // Module: blink.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
   window.mojoScrambler = window.mojoScrambler || {
     getOrdinals: (ifaceName, methodSpecs) => {
       const params = new URLSearchParams(window.location.search);
       const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
       
       const seen = new Set();
       methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
       let i = 0;
       return methodSpecs.map((ms, idx) => {
         if (ms.explicit !== null) return ms.explicit;
         if (forceNoScramble) return idx;

         const p = window.mojoVersion.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
         
         while (true) {
           i++;
           const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
           const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
           if (!seen.has(ord)) {
             seen.add(ord);
             return ord;
           }
         }
       });
     }
   };
 })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.InspectorIssueCodeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.HeavyAdResolutionStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.HeavyAdReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AttributionReportingIssueTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.MixedContentResolutionStatusSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.ContentSecurityPolicyViolationTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.CookieOperationSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.CookieExclusionReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.CookieWarningReasonSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.SharedArrayBufferIssueTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FederatedAuthRequestResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.FederatedAuthUserInfoRequestResultSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.PartitioningBlobURLInfoSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.GenericIssueErrorTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.DeprecationIssueTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.UserReidentificationIssueTypeSpec = { $: mojo.internal.Enum() };
mojo.internal.bindings.blink.mojom.AffectedCookieSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AffectedRequestSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AffectedFrameSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AffectedLocationSpec = { $: {} };
mojo.internal.bindings.blink.mojom.BlockedByResponseIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.HeavyAdIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.AttributionReportingIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.MixedContentIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.ContentSecurityPolicyIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CookieIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.SharedArrayBufferIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.LowTextContrastIssueSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthRequestIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.BounceTrackingIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.PartitioningBlobURLIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.CookieDeprecationMetadataIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.GenericIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.DeprecationIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.UserReidentificationIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.InspectorIssueDetailsSpec = { $: {} };
mojo.internal.bindings.blink.mojom.InspectorIssueInfoSpec = { $: {} };

// Enum: InspectorIssueCode
mojo.internal.bindings.blink.mojom.InspectorIssueCode = {
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
mojo.internal.bindings.blink.mojom.HeavyAdResolutionStatus = {
  kHeavyAdBlocked: 0,
  kHeavyAdWarning: 1,
};

// Enum: HeavyAdReason
mojo.internal.bindings.blink.mojom.HeavyAdReason = {
  kNetworkTotalLimit: 0,
  kCpuTotalLimit: 1,
  kCpuPeakLimit: 2,
};

// Enum: AttributionReportingIssueType
mojo.internal.bindings.blink.mojom.AttributionReportingIssueType = {
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
mojo.internal.bindings.blink.mojom.MixedContentResolutionStatus = {
  kMixedContentBlocked: 0,
  kMixedContentAutomaticallyUpgraded: 1,
  kMixedContentWarning: 2,
};

// Enum: ContentSecurityPolicyViolationType
mojo.internal.bindings.blink.mojom.ContentSecurityPolicyViolationType = {
  kInlineViolation: 0,
  kEvalViolation: 1,
  kURLViolation: 2,
  kSRIViolation: 3,
  kTrustedTypesSinkViolation: 4,
  kTrustedTypesPolicyViolation: 5,
  kWasmEvalViolation: 6,
};

// Enum: CookieOperation
mojo.internal.bindings.blink.mojom.CookieOperation = {
  kSetCookie: 0,
  kReadCookie: 1,
};

// Enum: CookieExclusionReason
mojo.internal.bindings.blink.mojom.CookieExclusionReason = {
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
mojo.internal.bindings.blink.mojom.CookieWarningReason = {
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
mojo.internal.bindings.blink.mojom.SharedArrayBufferIssueType = {
  kTransferIssue: 0,
  kCreationIssue: 1,
};

// Enum: FederatedAuthRequestResult
mojo.internal.bindings.blink.mojom.FederatedAuthRequestResult = {
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
mojo.internal.bindings.blink.mojom.FederatedAuthUserInfoRequestResult = {
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
mojo.internal.bindings.blink.mojom.PartitioningBlobURLInfo = {
  kBlockedCrossPartitionFetching: 0,
  kEnforceNoopenerForNavigation: 1,
};

// Enum: GenericIssueErrorType
mojo.internal.bindings.blink.mojom.GenericIssueErrorType = {
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
mojo.internal.bindings.blink.mojom.DeprecationIssueType = {
  kExampleBrowserProcessDeprecation: 0,
  kRelatedWebsiteSets: 1,
};

// Enum: UserReidentificationIssueType
mojo.internal.bindings.blink.mojom.UserReidentificationIssueType = {
  kBlockedFrameNavigation: 0,
  kBlockedSubresource: 1,
  kNoisedCanvasReadback: 2,
};

// Struct: AffectedCookie
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AffectedCookieSpec, 'blink.mojom.AffectedCookie', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_path', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_domain', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AffectedRequest
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AffectedRequestSpec, 'blink.mojom.AffectedRequest', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AffectedFrame
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AffectedFrameSpec, 'blink.mojom.AffectedFrame', [
      mojo.internal.StructField('arg_frame_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AffectedLocation
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AffectedLocationSpec, 'blink.mojom.AffectedLocation', [
      mojo.internal.StructField('arg_script_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_line', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: BlockedByResponseIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.BlockedByResponseIssueDetailsSpec, 'blink.mojom.BlockedByResponseIssueDetails', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.blink.mojom.AffectedRequestSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_parentFrame', 8, 0, mojo.internal.bindings.blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_blockedFrame', 16, 0, mojo.internal.bindings.blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_reason', 24, 0, mojo.internal.bindings.network.mojom.BlockedByResponseReasonSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: HeavyAdIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.HeavyAdIssueDetailsSpec, 'blink.mojom.HeavyAdIssueDetails', [
      mojo.internal.StructField('arg_resolution', 0, 0, mojo.internal.bindings.blink.mojom.HeavyAdResolutionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.blink.mojom.HeavyAdReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame', 16, 0, mojo.internal.bindings.blink.mojom.AffectedFrameSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AttributionReportingIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.AttributionReportingIssueDetailsSpec, 'blink.mojom.AttributionReportingIssueDetails', [
      mojo.internal.StructField('arg_violation_type', 0, 0, mojo.internal.bindings.blink.mojom.AttributionReportingIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request', 8, 0, mojo.internal.bindings.blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_invalid_parameter', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: MixedContentIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.MixedContentIssueDetailsSpec, 'blink.mojom.MixedContentIssueDetails', [
      mojo.internal.StructField('arg_request_context', 0, 0, mojo.internal.bindings.blink.mojom.RequestContextTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_resolution_status', 8, 0, mojo.internal.bindings.blink.mojom.MixedContentResolutionStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_insecure_url', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_main_resource_url', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request', 32, 0, mojo.internal.bindings.blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_frame', 40, 0, mojo.internal.bindings.blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ContentSecurityPolicyIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.ContentSecurityPolicyIssueDetailsSpec, 'blink.mojom.ContentSecurityPolicyIssueDetails', [
      mojo.internal.StructField('arg_blocked_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_violated_directive', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_content_security_policy_violation_type', 16, 0, mojo.internal.bindings.blink.mojom.ContentSecurityPolicyViolationTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_ancestor', 24, 0, mojo.internal.bindings.blink.mojom.AffectedFrameSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_affected_location', 32, 0, mojo.internal.bindings.blink.mojom.AffectedLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_violating_node_id', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_report_only', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CookieIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CookieIssueDetailsSpec, 'blink.mojom.CookieIssueDetails', [
      mojo.internal.StructField('arg_cookie', 0, 0, mojo.internal.bindings.blink.mojom.AffectedCookieSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_exclusion_reason', 8, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.CookieExclusionReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_warning_reason', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.CookieWarningReasonSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_operation', 24, 0, mojo.internal.bindings.blink.mojom.CookieOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_request', 48, 0, mojo.internal.bindings.blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: SharedArrayBufferIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SharedArrayBufferIssueDetailsSpec, 'blink.mojom.SharedArrayBufferIssueDetails', [
      mojo.internal.StructField('arg_affected_location', 0, 0, mojo.internal.bindings.blink.mojom.AffectedLocationSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.bindings.blink.mojom.SharedArrayBufferIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_warning', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: LowTextContrastIssue
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LowTextContrastIssueSpec, 'blink.mojom.LowTextContrastIssue', [
      mojo.internal.StructField('arg_violating_node_selector', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_font_size', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_font_weight', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_violating_node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_contrast_ratio', 28, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_threshold_aa', 32, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('arg_threshold_aaa', 36, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: FederatedAuthRequestIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthRequestIssueDetailsSpec, 'blink.mojom.FederatedAuthRequestIssueDetails', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.FederatedAuthRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FederatedAuthUserInfoRequestIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec, 'blink.mojom.FederatedAuthUserInfoRequestIssueDetails', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.blink.mojom.FederatedAuthUserInfoRequestResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: BounceTrackingIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.BounceTrackingIssueDetailsSpec, 'blink.mojom.BounceTrackingIssueDetails', [
      mojo.internal.StructField('arg_tracking_sites', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PartitioningBlobURLIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.PartitioningBlobURLIssueDetailsSpec, 'blink.mojom.PartitioningBlobURLIssueDetails', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_partitioning_blob_url_info', 8, 0, mojo.internal.bindings.blink.mojom.PartitioningBlobURLInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CookieDeprecationMetadataIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.CookieDeprecationMetadataIssueDetailsSpec, 'blink.mojom.CookieDeprecationMetadataIssueDetails', [
      mojo.internal.StructField('arg_allowed_sites', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_operation', 8, 0, mojo.internal.bindings.blink.mojom.CookieOperationSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_opt_out_percentage', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_opt_out_top_level', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GenericIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.GenericIssueDetailsSpec, 'blink.mojom.GenericIssueDetails', [
      mojo.internal.StructField('arg_error_type', 0, 0, mojo.internal.bindings.blink.mojom.GenericIssueErrorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_violating_node_attribute', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_violating_node_id', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DeprecationIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DeprecationIssueDetailsSpec, 'blink.mojom.DeprecationIssueDetails', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.blink.mojom.DeprecationIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_affected_location', 8, 0, mojo.internal.bindings.blink.mojom.AffectedLocationSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UserReidentificationIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.UserReidentificationIssueDetailsSpec, 'blink.mojom.UserReidentificationIssueDetails', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.blink.mojom.UserReidentificationIssueTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_request', 8, 0, mojo.internal.bindings.blink.mojom.AffectedRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_sourceCodeLocation', 16, 0, mojo.internal.bindings.blink.mojom.AffectedLocationSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: InspectorIssueDetails
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.InspectorIssueDetailsSpec, 'blink.mojom.InspectorIssueDetails', [
      mojo.internal.StructField('arg_cookie_issue_details', 0, 0, mojo.internal.bindings.blink.mojom.CookieIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_mixed_content_issue_details', 8, 0, mojo.internal.bindings.blink.mojom.MixedContentIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_blocked_by_response_issue_details', 16, 0, mojo.internal.bindings.blink.mojom.BlockedByResponseIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_csp_issue_details', 24, 0, mojo.internal.bindings.blink.mojom.ContentSecurityPolicyIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_sab_issue_details', 32, 0, mojo.internal.bindings.blink.mojom.SharedArrayBufferIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_heavy_ad_issue_details', 40, 0, mojo.internal.bindings.blink.mojom.HeavyAdIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_attribution_reporting_issue_details', 48, 0, mojo.internal.bindings.blink.mojom.AttributionReportingIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_low_text_contrast_details', 56, 0, mojo.internal.bindings.blink.mojom.LowTextContrastIssueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_federated_auth_request_details', 64, 0, mojo.internal.bindings.blink.mojom.FederatedAuthRequestIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_bounce_tracking_issue_details', 72, 0, mojo.internal.bindings.blink.mojom.BounceTrackingIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_partitioning_blob_url_issue_details', 80, 0, mojo.internal.bindings.blink.mojom.PartitioningBlobURLIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_deprecation_metadata_issue_details', 88, 0, mojo.internal.bindings.blink.mojom.CookieDeprecationMetadataIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_generic_issue_details', 96, 0, mojo.internal.bindings.blink.mojom.GenericIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecation_issue_details', 104, 0, mojo.internal.bindings.blink.mojom.DeprecationIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_federated_auth_user_info_request_details', 112, 0, mojo.internal.bindings.blink.mojom.FederatedAuthUserInfoRequestIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_user_reidentification_issue_details', 120, 0, mojo.internal.bindings.blink.mojom.UserReidentificationIssueDetailsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('arg_issue_id', 128, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec.$, null, true, 0, undefined),
    ],
    [[0, 144]]);

// Struct: InspectorIssueInfo
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.InspectorIssueInfoSpec, 'blink.mojom.InspectorIssueInfo', [
      mojo.internal.StructField('arg_code', 0, 0, mojo.internal.bindings.blink.mojom.InspectorIssueCodeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 8, 0, mojo.internal.bindings.blink.mojom.InspectorIssueDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
