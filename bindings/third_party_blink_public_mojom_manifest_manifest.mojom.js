// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var services = services || {};
var blink = blink || {};
var blink = blink || {};
var services = services || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var url = url || {};

blink.mojom.TextDirectionSpec = { $: mojo.internal.Enum() };
blink.mojom.PurposeSpec = { $: mojo.internal.Enum() };
blink.mojom.FormFactorSpec = { $: mojo.internal.Enum() };
blink.mojom.MethodSpec = { $: mojo.internal.Enum() };
blink.mojom.EnctypeSpec = { $: mojo.internal.Enum() };
blink.mojom.LaunchTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.ManifestMigrationBehaviorSpec = { $: mojo.internal.Enum() };
blink.mojom.TabStripMemberVisibilitySpec = { $: mojo.internal.Enum() };
blink.mojom.ManifestRequestResultSpec = { $: mojo.internal.Enum() };
blink.mojom.HomeTabUnionSpec = { $: {} };
blink.mojom.ManifestSpec = { $: {} };
blink.mojom.ManifestLocalizedTextObjectSpec = { $: {} };
blink.mojom.LocaleSpec = { $: {} };
blink.mojom.ManifestShortcutItemSpec = { $: {} };
blink.mojom.ManifestImageResourceSpec = { $: {} };
blink.mojom.ManifestScreenshotSpec = { $: {} };
blink.mojom.ManifestFileFilterSpec = { $: {} };
blink.mojom.ManifestProtocolHandlerSpec = { $: {} };
blink.mojom.ManifestScopeExtensionSpec = { $: {} };
blink.mojom.ManifestLockScreenSpec = { $: {} };
blink.mojom.ManifestNoteTakingSpec = { $: {} };
blink.mojom.ManifestRelatedApplicationSpec = { $: {} };
blink.mojom.ManifestShareTargetParamsSpec = { $: {} };
blink.mojom.ManifestShareTargetSpec = { $: {} };
blink.mojom.ManifestFileHandlerSpec = { $: {} };
blink.mojom.ManifestTranslationItemSpec = { $: {} };
blink.mojom.ManifestMigrateFromSpec = { $: {} };
blink.mojom.ManifestMigrateToSpec = { $: {} };
blink.mojom.ManifestTabStripSpec = { $: {} };
blink.mojom.HomeTabParamsSpec = { $: {} };
blink.mojom.NewTabButtonParamsSpec = { $: {} };
blink.mojom.ManifestDebugInfoSpec = { $: {} };
blink.mojom.ManifestErrorSpec = { $: {} };
blink.mojom.DisplayOverrideItemSpec = { $: {} };

// Enum: TextDirection
blink.mojom.TextDirection = {
  kAuto: 0,
  kLTR: 1,
  kRTL: 2,
};

// Enum: Purpose
blink.mojom.Purpose = {
  ANY: 0,
  MONOCHROME: 1,
  MASKABLE: 2,
};

// Enum: FormFactor
blink.mojom.FormFactor = {
  kUnknown: 0,
  kWide: 1,
  kNarrow: 2,
};

// Enum: Method
blink.mojom.Method = {
  kGet: 0,
  kPost: 1,
};

// Enum: Enctype
blink.mojom.Enctype = {
  kFormUrlEncoded: 0,
  kMultipartFormData: 1,
};

// Enum: LaunchType
blink.mojom.LaunchType = {
  kSingleClient: 0,
  kMultipleClients: 1,
};

// Enum: ManifestMigrationBehavior
blink.mojom.ManifestMigrationBehavior = {
  kSuggest: 0,
  kForce: 1,
};

// Enum: TabStripMemberVisibility
blink.mojom.TabStripMemberVisibility = {
  kAuto: 0,
  kAbsent: 1,
};

// Enum: ManifestRequestResult
blink.mojom.ManifestRequestResult = {
  kUnexpectedFailure: 0,
  kNoManifestAllowed: 1,
  kNoManifestSpecified: 2,
  kManifestFailedToFetch: 3,
  kManifestFailedToParse: 4,
  kSuccess: 5,
};

// Union: HomeTabUnion
mojo.internal.Union(
    blink.mojom.HomeTabUnionSpec, 'blink.mojom.HomeTabUnion', {
      'visibility': {
        'ordinal': 0,
        'type': blink.mojom.TabStripMemberVisibilitySpec.$,
        'nullable': false,
      },
      'params': {
        'ordinal': 1,
        'type': blink.mojom.HomeTabParamsSpec.$,
        'nullable': false,
      },
    });

// Struct: Manifest
mojo.internal.Struct(
    blink.mojom.ManifestSpec, 'blink.mojom.Manifest', [
      mojo.internal.StructField('kAuto', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestLocalizedTextObject
mojo.internal.Struct(
    blink.mojom.ManifestLocalizedTextObjectSpec, 'blink.mojom.ManifestLocalizedTextObject', [
      mojo.internal.StructField('value', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('dir', 8, 0, Manifest.TextDirectionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('lang', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Locale
mojo.internal.Struct(
    blink.mojom.LocaleSpec, 'blink.mojom.Locale', [
      mojo.internal.StructField('tag', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestShortcutItem
mojo.internal.Struct(
    blink.mojom.ManifestShortcutItemSpec, 'blink.mojom.ManifestShortcutItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('short_name', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('icons', 32, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('name_localized', 40, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, blink.mojom.ManifestLocalizedTextObjectSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('short_name_localized', 48, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, blink.mojom.ManifestLocalizedTextObjectSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('description_localized', 56, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, blink.mojom.ManifestLocalizedTextObjectSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('icons_localized', 64, 0, mojo.internal.Map(blink.mojom.LocaleSpec.$, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), false), null, true, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ManifestImageResource
mojo.internal.Struct(
    blink.mojom.ManifestImageResourceSpec, 'blink.mojom.ManifestImageResource', [
      mojo.internal.StructField('ANY', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestScreenshot
mojo.internal.Struct(
    blink.mojom.ManifestScreenshotSpec, 'blink.mojom.ManifestScreenshot', [
      mojo.internal.StructField('kUnknown', 0, 0, mojo.internal.Pointer, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestFileFilter
mojo.internal.Struct(
    blink.mojom.ManifestFileFilterSpec, 'blink.mojom.ManifestFileFilter', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('accept', 8, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestProtocolHandler
mojo.internal.Struct(
    blink.mojom.ManifestProtocolHandlerSpec, 'blink.mojom.ManifestProtocolHandler', [
      mojo.internal.StructField('protocol', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestScopeExtension
mojo.internal.Struct(
    blink.mojom.ManifestScopeExtensionSpec, 'blink.mojom.ManifestScopeExtension', [
      mojo.internal.StructField('origin', 0, 0, url.mojom.OriginSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('has_origin_wildcard', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestLockScreen
mojo.internal.Struct(
    blink.mojom.ManifestLockScreenSpec, 'blink.mojom.ManifestLockScreen', [
      mojo.internal.StructField('start_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestNoteTaking
mojo.internal.Struct(
    blink.mojom.ManifestNoteTakingSpec, 'blink.mojom.ManifestNoteTaking', [
      mojo.internal.StructField('new_note_url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestRelatedApplication
mojo.internal.Struct(
    blink.mojom.ManifestRelatedApplicationSpec, 'blink.mojom.ManifestRelatedApplication', [
      mojo.internal.StructField('platform', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManifestShareTargetParams
mojo.internal.Struct(
    blink.mojom.ManifestShareTargetParamsSpec, 'blink.mojom.ManifestShareTargetParams', [
      mojo.internal.StructField('title', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('url', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('files', 24, 0, mojo.internal.Array(blink.mojom.ManifestFileFilterSpec.$, false), null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ManifestShareTarget
mojo.internal.Struct(
    blink.mojom.ManifestShareTargetSpec, 'blink.mojom.ManifestShareTarget', [
      mojo.internal.StructField('kGet', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestFileHandler
mojo.internal.Struct(
    blink.mojom.ManifestFileHandlerSpec, 'blink.mojom.ManifestFileHandler', [
      mojo.internal.StructField('action', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('icons', 16, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('accept', 24, 0, mojo.internal.Map(mojo_base.mojom.String16Spec.$, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), false), null, false, 0, undefined),
      mojo.internal.StructField('kSingleClient', 32, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ManifestTranslationItem
mojo.internal.Struct(
    blink.mojom.ManifestTranslationItemSpec, 'blink.mojom.ManifestTranslationItem', [
      mojo.internal.StructField('name', 0, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('short_name', 8, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo_base.mojom.String16Spec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManifestMigrateFrom
mojo.internal.Struct(
    blink.mojom.ManifestMigrateFromSpec, 'blink.mojom.ManifestMigrateFrom', [
      mojo.internal.StructField('id', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('install_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('behavior', 16, 0, blink.mojom.ManifestMigrationBehaviorSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ManifestMigrateTo
mojo.internal.Struct(
    blink.mojom.ManifestMigrateToSpec, 'blink.mojom.ManifestMigrateTo', [
      mojo.internal.StructField('id', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('install_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestTabStrip
mojo.internal.Struct(
    blink.mojom.ManifestTabStripSpec, 'blink.mojom.ManifestTabStrip', [
      mojo.internal.StructField('home_tab', 0, 0, blink.mojom.HomeTabUnionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('new_tab_button', 8, 0, blink.mojom.NewTabButtonParamsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HomeTabParams
mojo.internal.Struct(
    blink.mojom.HomeTabParamsSpec, 'blink.mojom.HomeTabParams', [
      mojo.internal.StructField('icons', 0, 0, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('scope_patterns', 8, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NewTabButtonParams
mojo.internal.Struct(
    blink.mojom.NewTabButtonParamsSpec, 'blink.mojom.NewTabButtonParams', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ManifestDebugInfo
mojo.internal.Struct(
    blink.mojom.ManifestDebugInfoSpec, 'blink.mojom.ManifestDebugInfo', [
      mojo.internal.StructField('errors', 0, 0, mojo.internal.Array(blink.mojom.ManifestErrorSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('raw_manifest', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ManifestError
mojo.internal.Struct(
    blink.mojom.ManifestErrorSpec, 'blink.mojom.ManifestError', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('line', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('column', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('critical', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DisplayOverrideItem
mojo.internal.Struct(
    blink.mojom.DisplayOverrideItemSpec, 'blink.mojom.DisplayOverrideItem', [
      mojo.internal.StructField('display', 0, 0, blink.mojom.DisplayModeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_patterns', 8, 0, mojo.internal.Array(blink.mojom.SafeUrlPatternSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 24]]);
