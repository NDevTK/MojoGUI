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
      packedSize: 16,
      fields: [
        { name: 'is_path_wildcard', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'is_valid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'rule_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
      packedSize: 16,
      fields: [
        { name: 'incognito', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
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
