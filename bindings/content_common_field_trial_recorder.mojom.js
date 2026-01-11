// Auto-generated MojoJS binding
// Source: chromium_src/content/common/field_trial_recorder.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.FieldTrialRecorder = {};
content.mojom.FieldTrialRecorder.$interfaceName = 'content.mojom.FieldTrialRecorder';
content.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec = { $: {} };

// Interface: FieldTrialRecorder
mojo.internal.Struct(
    content.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec, 'content.mojom.FieldTrialRecorder_FieldTrialActivated_Params', [
      mojo.internal.StructField('trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.FieldTrialRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.FieldTrialRecorderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FieldTrialRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.FieldTrialRecorderPendingReceiver,
      handle);
    this.$ = new content.mojom.FieldTrialRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  fieldTrialActivated(trial_name) {
    return this.$.fieldTrialActivated(trial_name);
  }
};

content.mojom.FieldTrialRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FieldTrialRecorder', [
      { explicit: null },
    ]);
  }

  fieldTrialActivated(trial_name) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec,
      null,
      [trial_name],
      false);
  }

};

content.mojom.FieldTrialRecorder.getRemote = function() {
  let remote = new content.mojom.FieldTrialRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FieldTrialRecorder',
    'context');
  return remote.$;
};

content.mojom.FieldTrialRecorderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FieldTrialRecorder', [
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
             decoder.decodeStructInline(content.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec.$.structSpec);
          const result = this.impl.fieldTrialActivated(params.trial_name);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.FieldTrialRecorderReceiver = content.mojom.FieldTrialRecorderReceiver;

content.mojom.FieldTrialRecorderPtr = content.mojom.FieldTrialRecorderRemote;
content.mojom.FieldTrialRecorderRequest = content.mojom.FieldTrialRecorderPendingReceiver;

