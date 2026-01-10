// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.cros_safety.mojom = ash.cros_safety.cros_safety.mojom || {};


// Enum: SafetyClassifierVerdict
ash.cros_safety.cros_safety.mojom.mojom.SafetyClassifierVerdict = {
  kPass: 0,
  kFailedText: 1,
  kFailedImage: 2,
};
ash.cros_safety.cros_safety.mojom.mojom.SafetyClassifierVerdictSpec = { $: mojo.internal.Enum() };

// Enum: SafetyRuleset
ash.cros_safety.cros_safety.mojom.mojom.SafetyRuleset = {
  kMantis: 0,
};
ash.cros_safety.cros_safety.mojom.mojom.SafetyRulesetSpec = { $: mojo.internal.Enum() };

// Interface: CloudSafetySession
ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession = {};

ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.CloudSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionPendingReceiver,
      handle);
    this.$ = new ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  classifyTextSafety(rules, text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyTextSafety_ParamsSpec,
      ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyTextSafety_ResponseParamsSpec,
      [rules, text]);
  }

  classifyImageSafety(rules, prompt, image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyImageSafety_ParamsSpec,
      ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyImageSafety_ResponseParamsSpec,
      [rules, prompt, image]);
  }

};

ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession.getRemote = function() {
  let remote = new ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.CloudSafetySession',
    'context');
  return remote.$;
};

// ParamsSpec for ClassifyTextSafety
ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyTextSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CloudSafetySession.ClassifyTextSafety_Params',
      packedSize: 24,
      fields: [
        { name: 'rules', packedOffset: 8, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyRulesetSpec, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyTextSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CloudSafetySession.ClassifyTextSafety_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verdict', packedOffset: 0, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyClassifierVerdictSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClassifyImageSafety
ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyImageSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CloudSafetySession.ClassifyImageSafety_Params',
      packedSize: 40,
      fields: [
        { name: 'rules', packedOffset: 24, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyRulesetSpec, nullable: false, minVersion: 0 },
        { name: 'prompt', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySession_ClassifyImageSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.CloudSafetySession.ClassifyImageSafety_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verdict', packedOffset: 0, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyClassifierVerdictSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionPtr = ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionRemote;
ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionRequest = ash.cros_safety.cros_safety.mojom.mojom.CloudSafetySessionPendingReceiver;


// Interface: OnDeviceSafetySession
ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession = {};

ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.OnDeviceSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionPendingReceiver,
      handle);
    this.$ = new ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  classifyTextSafety(rules, text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyTextSafety_ParamsSpec,
      ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyTextSafety_ResponseParamsSpec,
      [rules, text]);
  }

  classifyImageSafety(rules, image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyImageSafety_ParamsSpec,
      ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyImageSafety_ResponseParamsSpec,
      [rules, image]);
  }

};

ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession.getRemote = function() {
  let remote = new ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.OnDeviceSafetySession',
    'context');
  return remote.$;
};

// ParamsSpec for ClassifyTextSafety
ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyTextSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.OnDeviceSafetySession.ClassifyTextSafety_Params',
      packedSize: 24,
      fields: [
        { name: 'rules', packedOffset: 8, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyRulesetSpec, nullable: false, minVersion: 0 },
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyTextSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.OnDeviceSafetySession.ClassifyTextSafety_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verdict', packedOffset: 0, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyClassifierVerdictSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ClassifyImageSafety
ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyImageSafety_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.OnDeviceSafetySession.ClassifyImageSafety_Params',
      packedSize: 32,
      fields: [
        { name: 'rules', packedOffset: 16, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyRulesetSpec, nullable: false, minVersion: 0 },
        { name: 'image', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.BigBufferSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySession_ClassifyImageSafety_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.cros_safety.mojom.OnDeviceSafetySession.ClassifyImageSafety_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'verdict', packedOffset: 0, packedBitOffset: 0, type: ash.cros_safety.mojom.SafetyClassifierVerdictSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionPtr = ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionRemote;
ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionRequest = ash.cros_safety.cros_safety.mojom.mojom.OnDeviceSafetySessionPendingReceiver;

