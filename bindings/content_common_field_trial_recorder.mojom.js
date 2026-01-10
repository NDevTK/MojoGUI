// Auto-generated MojoJS binding
// Source: chromium_src/content/common/field_trial_recorder.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: FieldTrialRecorder
content.mojom.mojom.FieldTrialRecorder = {};

content.mojom.mojom.FieldTrialRecorderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.FieldTrialRecorderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.FieldTrialRecorder';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.FieldTrialRecorderPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.FieldTrialRecorderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.FieldTrialRecorderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fieldTrialActivated(trial_name) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec,
      null,
      [trial_name]);
  }

};

content.mojom.mojom.FieldTrialRecorder.getRemote = function() {
  let remote = new content.mojom.mojom.FieldTrialRecorderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.FieldTrialRecorder',
    'context');
  return remote.$;
};

// ParamsSpec for FieldTrialActivated
content.mojom.mojom.FieldTrialRecorder_FieldTrialActivated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.FieldTrialRecorder.FieldTrialActivated_Params',
      packedSize: 16,
      fields: [
        { name: 'trial_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.mojom.mojom.FieldTrialRecorderPtr = content.mojom.mojom.FieldTrialRecorderRemote;
content.mojom.mojom.FieldTrialRecorderRequest = content.mojom.mojom.FieldTrialRecorderPendingReceiver;

