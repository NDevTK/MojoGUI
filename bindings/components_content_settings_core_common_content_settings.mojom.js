// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/core/common/content_settings.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};
var components = components || {};

content_settings.mojom.ContentSettingSpec = { $: mojo.internal.Enum() };
content_settings.mojom.PatternPartsSpec = { $: {} };
content_settings.mojom.ContentSettingsPatternSpec = { $: {} };
content_settings.mojom.RuleMetaDataSpec = { $: {} };
content_settings.mojom.ContentSettingPatternSourceSpec = { $: {} };
content_settings.mojom.RendererContentSettingRulesSpec = { $: {} };

// Enum: ContentSetting
content_settings.mojom.ContentSetting = {
  DEFAULT: 0,
  ALLOW: 1,
  BLOCK: 2,
  ASK: 3,
  SESSION_ONLY: 4,
};

// Struct: PatternParts
mojo.internal.Struct(
    content_settings.mojom.PatternPartsSpec, 'content_settings.mojom.PatternParts', [
      mojo.internal.StructField('scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_scheme_wildcard', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('host', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('has_domain_wildcard', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('port', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_port_wildcard', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('path', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_path_wildcard', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 72]]);

// Struct: ContentSettingsPattern
mojo.internal.Struct(
    content_settings.mojom.ContentSettingsPatternSpec, 'content_settings.mojom.ContentSettingsPattern', [
      mojo.internal.StructField('parts', 0, 0, content_settings.mojom.PatternPartsSpec, null, false, 0, undefined),
      mojo.internal.StructField('is_valid', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: RuleMetaData
mojo.internal.Struct(
    content_settings.mojom.RuleMetaDataSpec, 'content_settings.mojom.RuleMetaData', [
      mojo.internal.StructField('last_modified', 0, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_used', 8, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('last_visited', 16, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('expiration', 24, 0, mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('session_model', 32, 0, content_settings.mojom.SessionModelSpec, null, false, 0, undefined),
      mojo.internal.StructField('lifetime', 40, 0, mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('tpcd_metadata_rule_source', 48, 0, content_settings.mojom.TpcdMetadataRuleSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('tpcd_metadata_cohort', 52, 0, content_settings.mojom.TpcdMetadataCohortSpec, null, false, 0, undefined),
      mojo.internal.StructField('decided_by_related_website_sets', 56, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('rule_options', 64, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: ContentSettingPatternSource
mojo.internal.Struct(
    content_settings.mojom.ContentSettingPatternSourceSpec, 'content_settings.mojom.ContentSettingPatternSource', [
      mojo.internal.StructField('primary_pattern', 0, 0, content_settings.mojom.ContentSettingsPatternSpec, null, false, 0, undefined),
      mojo.internal.StructField('secondary_pattern', 8, 0, content_settings.mojom.ContentSettingsPatternSpec, null, false, 0, undefined),
      mojo.internal.StructField('setting_value', 16, 0, mojo_base.mojom.ValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('metadata', 32, 0, content_settings.mojom.RuleMetaDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('source', 40, 0, content_settings.mojom.ProviderTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('incognito', 44, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: RendererContentSettingRules
mojo.internal.Struct(
    content_settings.mojom.RendererContentSettingRulesSpec, 'content_settings.mojom.RendererContentSettingRules', [
      mojo.internal.StructField('mixed_content_rules', 0, 0, mojo.internal.Array(content_settings.mojom.ContentSettingPatternSourceSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
