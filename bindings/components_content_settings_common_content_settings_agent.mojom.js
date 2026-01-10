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
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetAllowRunningInsecureContent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetAllowRunningInsecureContent (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: SendRendererContentSettingRules
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SendRendererContentSettingRules (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_settings.mojom.ContentSettingsAgent_SetAllowRunningInsecureContent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setAllowRunningInsecureContent');
          const result = this.impl.setAllowRunningInsecureContent();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content_settings.mojom.ContentSettingsAgent_SendRendererContentSettingRules_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.sendRendererContentSettingRules');
          const result = this.impl.sendRendererContentSettingRules(params.renderer_settings);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content_settings.mojom.ContentSettingsAgentReceiver = content_settings.mojom.ContentSettingsAgentReceiver;

content_settings.mojom.ContentSettingsAgentPtr = content_settings.mojom.ContentSettingsAgentRemote;
content_settings.mojom.ContentSettingsAgentRequest = content_settings.mojom.ContentSettingsAgentPendingReceiver;

