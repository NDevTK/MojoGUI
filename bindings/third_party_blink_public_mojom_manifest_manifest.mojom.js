// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var blink = blink || {};
var blink = blink || {};
var blink = blink || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};
var url = url || {};


// Enum: TextDirection
blink.mojom.mojom.TextDirection = {
  kAuto: 0,
  kLTR: 1,
  kRTL: 2,
};
blink.mojom.mojom.TextDirectionSpec = { $: mojo.internal.Enum() };

// Enum: Purpose
blink.mojom.mojom.Purpose = {
  ANY: 0,
  MONOCHROME: 1,
  MASKABLE: 2,
};
blink.mojom.mojom.PurposeSpec = { $: mojo.internal.Enum() };

// Enum: FormFactor
blink.mojom.mojom.FormFactor = {
  kUnknown: 0,
  kWide: 1,
  kNarrow: 2,
};
blink.mojom.mojom.FormFactorSpec = { $: mojo.internal.Enum() };

// Enum: Method
blink.mojom.mojom.Method = {
  kGet: 0,
  kPost: 1,
};
blink.mojom.mojom.MethodSpec = { $: mojo.internal.Enum() };

// Enum: Enctype
blink.mojom.mojom.Enctype = {
  kFormUrlEncoded: 0,
  kMultipartFormData: 1,
};
blink.mojom.mojom.EnctypeSpec = { $: mojo.internal.Enum() };

// Enum: LaunchType
blink.mojom.mojom.LaunchType = {
  kSingleClient: 0,
  kMultipleClients: 1,
};
blink.mojom.mojom.LaunchTypeSpec = { $: mojo.internal.Enum() };

// Enum: ManifestMigrationBehavior
blink.mojom.mojom.ManifestMigrationBehavior = {
  kSuggest: 0,
  kForce: 1,
};
blink.mojom.mojom.ManifestMigrationBehaviorSpec = { $: mojo.internal.Enum() };

// Enum: TabStripMemberVisibility
blink.mojom.mojom.TabStripMemberVisibility = {
  kAuto: 0,
  kAbsent: 1,
};
blink.mojom.mojom.TabStripMemberVisibilitySpec = { $: mojo.internal.Enum() };

// Enum: ManifestRequestResult
blink.mojom.mojom.ManifestRequestResult = {
  kUnexpectedFailure: 0,
  kNoManifestAllowed: 1,
  kNoManifestSpecified: 2,
  kManifestFailedToFetch: 3,
  kManifestFailedToParse: 4,
  kSuccess: 5,
};
blink.mojom.mojom.ManifestRequestResultSpec = { $: mojo.internal.Enum() };

// Union: HomeTabUnion
blink.mojom.mojom.HomeTabUnionSpec = { $: mojo.internal.Union(
    'blink.mojom.HomeTabUnion', {
      'visibility': {
        'ordinal': 0,
        'type': blink.mojom.TabStripMemberVisibilitySpec,
      }},
      'params': {
        'ordinal': 1,
        'type': blink.mojom.HomeTabParamsSpec,
      }},
    })
};

// Struct: Manifest
blink.mojom.mojom.ManifestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Manifest',
      packedSize: 16,
      fields: [
        { name: 'kAuto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestLocalizedTextObject
blink.mojom.mojom.ManifestLocalizedTextObjectSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestLocalizedTextObject',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'dir', packedOffset: 8, packedBitOffset: 0, type: Manifest.TextDirectionSpec, nullable: true, minVersion: 0 },
        { name: 'lang', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: Locale
blink.mojom.mojom.LocaleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Locale',
      packedSize: 16,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestShortcutItem
blink.mojom.mojom.ManifestShortcutItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestShortcutItem',
      packedSize: 80,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'short_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'icons', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ManifestImageResourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'name_localized', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.LocaleSpec, blink.mojom.ManifestLocalizedTextObjectSpec, false), nullable: true, minVersion: 0 },
        { name: 'short_name_localized', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.LocaleSpec, blink.mojom.ManifestLocalizedTextObjectSpec, false), nullable: true, minVersion: 0 },
        { name: 'description_localized', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.LocaleSpec, blink.mojom.ManifestLocalizedTextObjectSpec, false), nullable: true, minVersion: 0 },
        { name: 'icons_localized', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map(blink.mojom.LocaleSpec, mojo.internal.Array(blink.mojom.ManifestImageResourceSpec, false), false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: ManifestImageResource
blink.mojom.mojom.ManifestImageResourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestImageResource',
      packedSize: 16,
      fields: [
        { name: 'ANY', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestScreenshot
blink.mojom.mojom.ManifestScreenshotSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestScreenshot',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestFileFilter
blink.mojom.mojom.ManifestFileFilterSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestFileFilter',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'accept', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo_base.mojom.String16Spec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ManifestProtocolHandler
blink.mojom.mojom.ManifestProtocolHandlerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestProtocolHandler',
      packedSize: 24,
      fields: [
        { name: 'protocol', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ManifestScopeExtension
blink.mojom.mojom.ManifestScopeExtensionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestScopeExtension',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false, minVersion: 0 },
        { name: 'has_origin_wildcard', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ManifestLockScreen
blink.mojom.mojom.ManifestLockScreenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestLockScreen',
      packedSize: 16,
      fields: [
        { name: 'start_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestNoteTaking
blink.mojom.mojom.ManifestNoteTakingSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestNoteTaking',
      packedSize: 16,
      fields: [
        { name: 'new_note_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestRelatedApplication
blink.mojom.mojom.ManifestRelatedApplicationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestRelatedApplication',
      packedSize: 32,
      fields: [
        { name: 'platform', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ManifestShareTargetParams
blink.mojom.mojom.ManifestShareTargetParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestShareTargetParams',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'files', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ManifestFileFilterSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Struct: ManifestShareTarget
blink.mojom.mojom.ManifestShareTargetSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestShareTarget',
      packedSize: 16,
      fields: [
        { name: 'kGet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestFileHandler
blink.mojom.mojom.ManifestFileHandlerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestFileHandler',
      packedSize: 48,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'icons', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ManifestImageResourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'accept', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map(mojo_base.mojom.String16Spec, mojo.internal.Array(mojo_base.mojom.String16Spec, false), false), nullable: false, minVersion: 0 },
        { name: 'kSingleClient', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Struct: ManifestTranslationItem
blink.mojom.mojom.ManifestTranslationItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestTranslationItem',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'short_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ManifestMigrateFrom
blink.mojom.mojom.ManifestMigrateFromSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestMigrateFrom',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'install_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
        { name: 'behavior', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ManifestMigrationBehaviorSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: ManifestMigrateTo
blink.mojom.mojom.ManifestMigrateToSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestMigrateTo',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'install_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ManifestTabStrip
blink.mojom.mojom.ManifestTabStripSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestTabStrip',
      packedSize: 32,
      fields: [
        { name: 'home_tab', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.HomeTabUnionSpec, nullable: false, minVersion: 0 },
        { name: 'new_tab_button', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.NewTabButtonParamsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: HomeTabParams
blink.mojom.mojom.HomeTabParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HomeTabParams',
      packedSize: 24,
      fields: [
        { name: 'icons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ManifestImageResourceSpec, false), nullable: false, minVersion: 0 },
        { name: 'scope_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: NewTabButtonParams
blink.mojom.mojom.NewTabButtonParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NewTabButtonParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: ManifestDebugInfo
blink.mojom.mojom.ManifestDebugInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestDebugInfo',
      packedSize: 24,
      fields: [
        { name: 'errors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.ManifestErrorSpec, false), nullable: false, minVersion: 0 },
        { name: 'raw_manifest', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: ManifestError
blink.mojom.mojom.ManifestErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestError',
      packedSize: 32,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'critical', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'line', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'column', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DisplayOverrideItem
blink.mojom.mojom.DisplayOverrideItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DisplayOverrideItem',
      packedSize: 24,
      fields: [
        { name: 'display', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.DisplayModeSpec, nullable: false, minVersion: 0 },
        { name: 'url_patterns', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.SafeUrlPatternSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
