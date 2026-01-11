// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_variations_configuration.mojom
// Module: content.mojom

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
  setVariationsHeaders(variations_headers) {
    return this.$.setVariationsHeaders(variations_headers);
  }
  setFieldTrialGroup(trial_name, group_name) {
    return this.$.setFieldTrialGroup(trial_name, group_name);
  }
};

content.mojom.RendererVariationsConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('RendererVariationsConfiguration', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  setVariationsHeaders(variations_headers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec,
      null,
      [variations_headers],
      false);
  }

  setFieldTrialGroup(trial_name, group_name) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('RendererVariationsConfiguration', [
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec.$.structSpec);
          const result = this.impl.setVariationsHeaders(params.variations_headers);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec.$.structSpec);
          const result = this.impl.setFieldTrialGroup(params.trial_name, params.group_name);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.RendererVariationsConfigurationReceiver = content.mojom.RendererVariationsConfigurationReceiver;

content.mojom.RendererVariationsConfigurationPtr = content.mojom.RendererVariationsConfigurationRemote;
content.mojom.RendererVariationsConfigurationRequest = content.mojom.RendererVariationsConfigurationPendingReceiver;

