// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/manifest/manifest.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


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

// Struct: Manifest
blink.mojom.ManifestSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Manifest',
      packedSize: 16,
      fields: [
        { name: 'kAuto', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestLocalizedTextObject
blink.mojom.ManifestLocalizedTextObjectSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestLocalizedTextObject',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'dir', packedOffset: 8, packedBitOffset: 0, type: Manifest.TextDirectionSpec, nullable: true },
        { name: 'lang', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: Locale
blink.mojom.LocaleSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.Locale',
      packedSize: 16,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestShortcutItem
blink.mojom.ManifestShortcutItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestShortcutItem',
      packedSize: 80,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'short_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'icons', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'name_localized', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'short_name_localized', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'description_localized', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
        { name: 'icons_localized', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestImageResource
blink.mojom.ManifestImageResourceSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestImageResource',
      packedSize: 16,
      fields: [
        { name: 'ANY', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestScreenshot
blink.mojom.ManifestScreenshotSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestScreenshot',
      packedSize: 16,
      fields: [
        { name: 'kUnknown', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestFileFilter
blink.mojom.ManifestFileFilterSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestFileFilter',
      packedSize: 24,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'accept', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestProtocolHandler
blink.mojom.ManifestProtocolHandlerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestProtocolHandler',
      packedSize: 24,
      fields: [
        { name: 'protocol', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestScopeExtension
blink.mojom.ManifestScopeExtensionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestScopeExtension',
      packedSize: 24,
      fields: [
        { name: 'origin', packedOffset: 0, packedBitOffset: 0, type: url.mojom.OriginSpec, nullable: false },
        { name: 'has_origin_wildcard', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestLockScreen
blink.mojom.ManifestLockScreenSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestLockScreen',
      packedSize: 16,
      fields: [
        { name: 'start_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestNoteTaking
blink.mojom.ManifestNoteTakingSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestNoteTaking',
      packedSize: 16,
      fields: [
        { name: 'new_note_url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestRelatedApplication
blink.mojom.ManifestRelatedApplicationSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestRelatedApplication',
      packedSize: 32,
      fields: [
        { name: 'platform', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'id', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestShareTargetParams
blink.mojom.ManifestShareTargetParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestShareTargetParams',
      packedSize: 40,
      fields: [
        { name: 'title', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'files', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestShareTarget
blink.mojom.ManifestShareTargetSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestShareTarget',
      packedSize: 16,
      fields: [
        { name: 'kGet', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestFileHandler
blink.mojom.ManifestFileHandlerSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestFileHandler',
      packedSize: 48,
      fields: [
        { name: 'action', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false },
        { name: 'icons', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'accept', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'kSingleClient', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestTranslationItem
blink.mojom.ManifestTranslationItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestTranslationItem',
      packedSize: 32,
      fields: [
        { name: 'name', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'short_name', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'description', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestMigrateFrom
blink.mojom.ManifestMigrateFromSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestMigrateFrom',
      packedSize: 32,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'install_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
        { name: 'behavior', packedOffset: 16, packedBitOffset: 0, type: blink.mojom.ManifestMigrationBehaviorSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestMigrateTo
blink.mojom.ManifestMigrateToSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestMigrateTo',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
        { name: 'install_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestTabStrip
blink.mojom.ManifestTabStripSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestTabStrip',
      packedSize: 24,
      fields: [
        { name: 'home_tab', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.HomeTabUnionSpec, nullable: false },
        { name: 'new_tab_button', packedOffset: 8, packedBitOffset: 0, type: blink.mojom.NewTabButtonParamsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: HomeTabParams
blink.mojom.HomeTabParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.HomeTabParams',
      packedSize: 24,
      fields: [
        { name: 'icons', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'scope_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: NewTabButtonParams
blink.mojom.NewTabButtonParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.NewTabButtonParams',
      packedSize: 16,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestDebugInfo
blink.mojom.ManifestDebugInfoSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestDebugInfo',
      packedSize: 24,
      fields: [
        { name: 'errors', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'raw_manifest', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ManifestError
blink.mojom.ManifestErrorSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.ManifestError',
      packedSize: 32,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'critical', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'line', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'column', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DisplayOverrideItem
blink.mojom.DisplayOverrideItemSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DisplayOverrideItem',
      packedSize: 24,
      fields: [
        { name: 'display', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DisplayModeSpec, nullable: false },
        { name: 'url_patterns', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
