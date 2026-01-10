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
content_settings.mojom.ContentSettingSpec = { $: mojo.internal.Enum() };

// Struct: PatternParts
content_settings.mojom.PatternPartsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.PatternParts',
      packedSize: 48,
      fields: [
        { name: 'scheme', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_scheme_wildcard', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'host', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'has_domain_wildcard', packedOffset: 32, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'port', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_port_wildcard', packedOffset: 32, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'path', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_path_wildcard', packedOffset: 32, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
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
        { name: 'parts', packedOffset: 0, packedBitOffset: 0, type: content_settings.mojom.PatternPartsSpec, nullable: false, minVersion: 0 },
        { name: 'is_valid', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: RuleMetaData
content_settings.mojom.RuleMetaDataSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.RuleMetaData',
      packedSize: 80,
      fields: [
        { name: 'last_modified', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_used', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'last_visited', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'expiration', packedOffset: 40, packedBitOffset: 0, type: mojo_base.mojom.TimeSpec, nullable: false, minVersion: 0 },
        { name: 'session_model', packedOffset: 56, packedBitOffset: 0, type: content_settings.mojom.SessionModelSpec, nullable: false, minVersion: 0 },
        { name: 'lifetime', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.TimeDeltaSpec, nullable: false, minVersion: 0 },
        { name: 'tpcd_metadata_rule_source', packedOffset: 60, packedBitOffset: 0, type: content_settings.mojom.TpcdMetadataRuleSourceSpec, nullable: false, minVersion: 0 },
        { name: 'tpcd_metadata_cohort', packedOffset: 64, packedBitOffset: 0, type: content_settings.mojom.TpcdMetadataCohortSpec, nullable: false, minVersion: 0 },
        { name: 'decided_by_related_website_sets', packedOffset: 68, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'rule_options', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
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
        { name: 'primary_pattern', packedOffset: 16, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsPatternSpec, nullable: false, minVersion: 0 },
        { name: 'secondary_pattern', packedOffset: 24, packedBitOffset: 0, type: content_settings.mojom.ContentSettingsPatternSpec, nullable: false, minVersion: 0 },
        { name: 'setting_value', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: false, minVersion: 0 },
        { name: 'metadata', packedOffset: 32, packedBitOffset: 0, type: content_settings.mojom.RuleMetaDataSpec, nullable: false, minVersion: 0 },
        { name: 'source', packedOffset: 40, packedBitOffset: 0, type: content_settings.mojom.ProviderTypeSpec, nullable: false, minVersion: 0 },
        { name: 'incognito', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
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
        { name: 'mixed_content_rules', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
