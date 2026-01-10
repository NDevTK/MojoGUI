// Auto-generated MojoJS binding
// Source: chromium_src/content/common/field_trial_recorder.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.FieldTrialRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fieldTrialActivated(trial_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
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
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec.$.decode(message.payload);
          console.log('[GeneratedReceiver] Calling impl.fieldTrialActivated');
          const result = this.impl.fieldTrialActivated(params.trial_name);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.FieldTrialRecorderReceiver = content.mojom.FieldTrialRecorderReceiver;

content.mojom.FieldTrialRecorderPtr = content.mojom.FieldTrialRecorderRemote;
content.mojom.FieldTrialRecorderRequest = content.mojom.FieldTrialRecorderPendingReceiver;

