// Auto-generated MojoJS binding
// Source: chromium_src/content/common/renderer_variations_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: RendererVariationsConfiguration
content.mojom.mojom.RendererVariationsConfiguration = {};

content.mojom.mojom.RendererVariationsConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.RendererVariationsConfigurationRemote = class {
  static get $interfaceName() {
    return 'content.mojom.RendererVariationsConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.RendererVariationsConfigurationPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.RendererVariationsConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.RendererVariationsConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setVariationsHeaders(variations_headers) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec,
      null,
      [variations_headers]);
  }

  setFieldTrialGroup(trial_name, group_name) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec,
      null,
      [trial_name, group_name]);
  }

};

content.mojom.mojom.RendererVariationsConfiguration.getRemote = function() {
  let remote = new content.mojom.mojom.RendererVariationsConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.RendererVariationsConfiguration',
    'context');
  return remote.$;
};

// ParamsSpec for SetVariationsHeaders
content.mojom.mojom.RendererVariationsConfiguration_SetVariationsHeaders_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererVariationsConfiguration.SetVariationsHeaders_Params',
      packedSize: 16,
      fields: [
        { name: 'variations_headers', packedOffset: 0, packedBitOffset: 0, type: variations.mojom.VariationsHeadersSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SetFieldTrialGroup
content.mojom.mojom.RendererVariationsConfiguration_SetFieldTrialGroup_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.RendererVariationsConfiguration.SetFieldTrialGroup_Params',
      packedSize: 24,
      fields: [
        { name: 'trial_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'group_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.RendererVariationsConfigurationPtr = content.mojom.mojom.RendererVariationsConfigurationRemote;
content.mojom.mojom.RendererVariationsConfigurationRequest = content.mojom.mojom.RendererVariationsConfigurationPendingReceiver;

