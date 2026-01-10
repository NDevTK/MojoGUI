// Auto-generated MojoJS binding
// Source: chromium_src/components/content_settings/common/content_settings_agent.mojom
// Module: content_settings.mojom

'use strict';

// Module namespace
var content_settings = content_settings || {};
content_settings.mojom = content_settings.mojom || {};

content_settings.mojom.ContentSettingsAgent = {};
content_settings.mojom.ContentSettingsAgent.$interfaceName = 'content_settings.mojom.ContentSettingsAgent';
content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_ParamsSpec = { $: {} };
content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec = { $: {} };

// Interface: ContentSettingsAgent
mojo.internal.Struct(
    content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_ParamsSpec, 'content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec, 'content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_Params', [
      mojo.internal.StructField('renderer_settings', 0, 0, content_settings.mojom.RendererContentSettingRulesSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [],
      false);
  }

  sendRendererContentSettingRules(renderer_settings) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec,
      null,
      [renderer_settings],
      false);
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

content_settings.mojom.ContentSettingsAgentReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.setAllowRunningInsecureContent();
          break;
        }
        case 1: {
          const params = content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec.$.decode(message.payload);
          const result = this.impl.sendRendererContentSettingRules(params.renderer_settings);
          break;
        }
      }
    }});
  }
};

content_settings.mojom.ContentSettingsAgentReceiver = content_settings.mojom.ContentSettingsAgentReceiver;

content_settings.mojom.ContentSettingsAgentPtr = content_settings.mojom.ContentSettingsAgentRemote;
content_settings.mojom.ContentSettingsAgentRequest = content_settings.mojom.ContentSettingsAgentPendingReceiver;

