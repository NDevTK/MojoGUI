// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/common/content_settings_agent.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};


// Interface: ContentSettingsAgent
content_settings.mojom.ContentSettingsAgent = {};

content_settings.mojom.ContentSettingsAgentPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content_settings.mojom.ContentSettingsAgentRemote = class {
  static get $interfaceName() {
    return 'content_settings.mojom.ContentSettingsAgent';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content_settings.mojom.ContentSettingsAgentPendingReceiver,
      handle);
    this.$ = new content_settings.mojom.ContentSettingsAgentRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content_settings.mojom.ContentSettingsAgentRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setAllowRunningInsecureContent() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_ParamsSpec,
      null,
      []);
  }

  sendRendererContentSettingRules(renderer_settings) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec,
      null,
      [renderer_settings]);
  }

};

content_settings.mojom.ContentSettingsAgent.getRemote = function() {
  let remote = new content_settings.mojom.ContentSettingsAgentRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content_settings.mojom.ContentSettingsAgent',
    'context');
  return remote.$;
};

// ParamsSpec for SetAllowRunningInsecureContent
content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsAgent.SetAllowRunningInsecureContent_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SendRendererContentSettingRules
content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content_settings.mojom.ContentSettingsAgent.SendRendererContentSettingRules_Params',
      packedSize: 16,
      fields: [
        { name: 'renderer_settings', packedOffset: 0, packedBitOffset: 0, type: content_settings.mojom.RendererContentSettingRulesSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content_settings.mojom.ContentSettingsAgentPtr = content_settings.mojom.ContentSettingsAgentRemote;
content_settings.mojom.ContentSettingsAgentRequest = content_settings.mojom.ContentSettingsAgentPendingReceiver;

