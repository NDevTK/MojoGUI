// Auto-generated MojoJS binding
// Source: chromium_src/content/common/synthetic_trial_configuration.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.SyntheticTrialGroupSpec = { $: {} };
content.mojom.SyntheticTrialConfiguration = {};
content.mojom.SyntheticTrialConfiguration.$interfaceName = 'content.mojom.SyntheticTrialConfiguration';
content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec = { $: {} };
content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec = { $: {} };

// Struct: SyntheticTrialGroup
mojo.internal.Struct(
    content.mojom.SyntheticTrialGroupSpec, 'content.mojom.SyntheticTrialGroup', [
      mojo.internal.StructField('trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: SyntheticTrialConfiguration
mojo.internal.Struct(
    content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec, 'content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_Params', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec, 'content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_Params', [
      mojo.internal.StructField('groups', 0, 0, mojo.internal.Array(content.mojom.SyntheticTrialGroupSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.SyntheticTrialConfigurationPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.SyntheticTrialConfigurationRemote = class {
  static get $interfaceName() {
    return 'content.mojom.SyntheticTrialConfiguration';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.SyntheticTrialConfigurationPendingReceiver,
      handle);
    this.$ = new content.mojom.SyntheticTrialConfigurationRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.SyntheticTrialConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addOrUpdateSyntheticTrialGroups(groups) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec,
      null,
      [groups],
      false);
  }

  removeSyntheticTrialGroups(groups) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec,
      null,
      [groups],
      false);
  }

};

content.mojom.SyntheticTrialConfiguration.getRemote = function() {
  let remote = new content.mojom.SyntheticTrialConfigurationRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.SyntheticTrialConfiguration',
    'context');
  return remote.$;
};

content.mojom.SyntheticTrialConfigurationReceiver = class {
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.addOrUpdateSyntheticTrialGroups');
          const result = this.impl.addOrUpdateSyntheticTrialGroups(params.groups);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.removeSyntheticTrialGroups');
          const result = this.impl.removeSyntheticTrialGroups(params.groups);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.SyntheticTrialConfigurationReceiver = content.mojom.SyntheticTrialConfigurationReceiver;

content.mojom.SyntheticTrialConfigurationPtr = content.mojom.SyntheticTrialConfigurationRemote;
content.mojom.SyntheticTrialConfigurationRequest = content.mojom.SyntheticTrialConfigurationPendingReceiver;

