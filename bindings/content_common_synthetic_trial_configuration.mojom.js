// Auto-generated MojoJS binding
// Source: chromium_src/content/common/synthetic_trial_configuration.mojom
// Module: content.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  addOrUpdateSyntheticTrialGroups(groups) {
    return this.$.addOrUpdateSyntheticTrialGroups(groups);
  }
  removeSyntheticTrialGroups(groups) {
    return this.$.removeSyntheticTrialGroups(groups);
  }
};

content.mojom.SyntheticTrialConfigurationRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SyntheticTrialConfiguration', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  addOrUpdateSyntheticTrialGroups(groups) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec,
      null,
      [groups],
      false);
  }

  removeSyntheticTrialGroups(groups) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SyntheticTrialConfiguration', [
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
             decoder.decodeStructInline(content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.SyntheticTrialConfiguration_AddOrUpdateSyntheticTrialGroups_ParamsSpec.$.structSpec);
          const result = this.impl.addOrUpdateSyntheticTrialGroups(params.groups);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.SyntheticTrialConfiguration_RemoveSyntheticTrialGroups_ParamsSpec.$.structSpec);
          const result = this.impl.removeSyntheticTrialGroups(params.groups);
          break;
        }
      }
      } catch (err) {}
    });
  }
};

content.mojom.SyntheticTrialConfigurationReceiver = content.mojom.SyntheticTrialConfigurationReceiver;

content.mojom.SyntheticTrialConfigurationPtr = content.mojom.SyntheticTrialConfigurationRemote;
content.mojom.SyntheticTrialConfigurationRequest = content.mojom.SyntheticTrialConfigurationPendingReceiver;

