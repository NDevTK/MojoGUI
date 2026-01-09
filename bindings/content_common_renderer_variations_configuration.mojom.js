// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_variations_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RendererVariationsConfiguration
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
      content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec.$,
      null,
      [variations_headers]);
  }

  setFieldTrialGroup(trial_name, group_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec.$,
      null,
      [trial_name, group_name]);
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

// ParamsSpec for SetVariationsHeaders
content.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererVariationsConfiguration.SetVariationsHeaders_Params',
      packedSize: 16,
      fields: [
        { name: 'variations_headers', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetFieldTrialGroup
content.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererVariationsConfiguration.SetFieldTrialGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'trial_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'group_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.RendererVariationsConfigurationPtr = content.mojom.RendererVariationsConfigurationRemote;
content.mojom.RendererVariationsConfigurationRequest = content.mojom.RendererVariationsConfigurationPendingReceiver;

