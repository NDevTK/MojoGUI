// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/core/common/content_settings.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};


// Enum: ContentSetting
content_settings.mojom.ContentSetting = {
  DEFAULT: 0,
  ALLOW: 1,
  BLOCK: 2,
  ASK: 3,
  SESSION_ONLY: 4,
};

// Struct: PatternParts
content_settings.mojom.PatternPartsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.PatternParts',
      packedSize: 48,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_scheme_wildcard', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_domain_wildcard', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'is_port_wildcard', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'is_path_wildcard', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentSettingsPattern
content_settings.mojom.ContentSettingsPatternSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsPattern',
      packedSize: 24,
      fields: [
        { name: 'parts', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'is_valid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RuleMetaData
content_settings.mojom.RuleMetaDataSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.RuleMetaData',
      packedSize: 88,
      fields: [
        { name: 'last_modified', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'last_used', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'last_visited', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'expiration', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'session_model', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'lifetime', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tpcd_metadata_rule_source', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'tpcd_metadata_cohort', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'rule_options', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'decided_by_related_website_sets', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: ContentSettingPatternSource
content_settings.mojom.ContentSettingPatternSourceSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingPatternSource',
      packedSize: 56,
      fields: [
        { name: 'primary_pattern', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'secondary_pattern', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'setting_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'metadata', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'source', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'incognito', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: RendererContentSettingRules
content_settings.mojom.RendererContentSettingRulesSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.RendererContentSettingRules',
      packedSize: 16,
      fields: [
        { name: 'mixed_content_rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
