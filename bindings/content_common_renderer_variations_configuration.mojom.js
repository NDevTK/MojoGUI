// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_variations_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var variations = variations || {};

content.mojom.RendererVariationsConfiguration = {};
content.mojom.RendererVariationsConfiguration.$interfaceName = 'content.mojom.RendererVariationsConfiguration';
content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec = { $: {} };
content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec = { $: {} };

// Interface: RendererVariationsConfiguration
mojo.internal.Struct(
    content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec, 'content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_Params', [
      mojo.internal.StructField('variations_headers', 0, 0, variations.mojom.VariationsHeadersSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec, 'content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_Params', [
      mojo.internal.StructField('trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.RendererVariationsConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.RendererVariationsConfigurationRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RendererVariationsConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.RendererVariationsConfigurationPendingReceiver,
      handle);
    this.$ = new content.mojom.RendererVariationsConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.RendererVariationsConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVariationsHeaders(variations_headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec,
      null,
      [variations_headers],
      false);
  }

  setFieldTrialGroup(trial_name, group_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec,
      null,
      [trial_name, group_name],
      false);
  }

};

content.mojom.RendererVariationsConfiguration.getRemote = function() {
  let remote = new content.mojom.RendererVariationsConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RendererVariationsConfiguration',
    'context');
  return remote.$;
};

content.mojom.RendererVariationsConfigurationReceiver = class {
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: SetVariationsHeaders
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetVariationsHeaders (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: SetFieldTrialGroup
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetFieldTrialGroup (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
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
          const params = decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setVariationsHeaders');
          const result = this.impl.setVariationsHeaders(params.variations_headers);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.setFieldTrialGroup');
          const result = this.impl.setFieldTrialGroup(params.trial_name, params.group_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.RendererVariationsConfigurationReceiver = content.mojom.RendererVariationsConfigurationReceiver;

content.mojom.RendererVariationsConfigurationPtr = content.mojom.RendererVariationsConfigurationRemote;
content.mojom.RendererVariationsConfigurationRequest = content.mojom.RendererVariationsConfigurationPendingReceiver;

