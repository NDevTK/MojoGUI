// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/common/content_settings_agent.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};


// Interface: ContentSettingsAgent
content_settings.mojom.ContentSettingsAgentPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content_settings.mojom.ContentSettingsAgent';
  }

  setAllowRunningInsecureContent() {
    // Method: SetAllowRunningInsecureContent
    // Call: SetAllowRunningInsecureContent()
  }

  sendRendererContentSettingRules(renderer_settings) {
    // Method: SendRendererContentSettingRules
    // Call: SendRendererContentSettingRules(renderer_settings)
  }

};

content_settings.mojom.ContentSettingsAgentRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
