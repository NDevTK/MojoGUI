// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/cros_safety/public/mojom/cros_safety.mojom
// Module: ash.cros_safety.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.cros_safety = ash.cros_safety || {};
ash.cros_safety.mojom = ash.cros_safety.mojom || {};
var mojo_base = mojo_base || {};

ash.cros_safety.mojom.SafetyClassifierVerdictSpec = { $: mojo.internal.Enum() };
ash.cros_safety.mojom.SafetyRulesetSpec = { $: mojo.internal.Enum() };
ash.cros_safety.mojom.CloudSafetySession = {};
ash.cros_safety.mojom.CloudSafetySession.$interfaceName = 'ash.cros_safety.mojom.CloudSafetySession';
ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ParamsSpec = { $: {} };
ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ResponseParamsSpec = { $: {} };
ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ParamsSpec = { $: {} };
ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ResponseParamsSpec = { $: {} };
ash.cros_safety.mojom.OnDeviceSafetySession = {};
ash.cros_safety.mojom.OnDeviceSafetySession.$interfaceName = 'ash.cros_safety.mojom.OnDeviceSafetySession';
ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ParamsSpec = { $: {} };
ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ResponseParamsSpec = { $: {} };
ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ParamsSpec = { $: {} };
ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ResponseParamsSpec = { $: {} };

// Enum: SafetyClassifierVerdict
ash.cros_safety.mojom.SafetyClassifierVerdict = {
  kPass: 0,
  kGenericError: 1,
  kFailedText: 2,
  kFailedImage: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
  MinVersion: 3,
};

// Enum: SafetyRuleset
ash.cros_safety.mojom.SafetyRuleset = {
  kGeneric: 0,
  kMantis: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Interface: CloudSafetySession
mojo.internal.Struct(
    ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ParamsSpec, 'ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_Params', [
      mojo.internal.StructField('rules', 0, 0, ash.cros_safety.mojom.SafetyRulesetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ResponseParamsSpec, 'ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ResponseParams', [
      mojo.internal.StructField('verdict', 0, 0, ash.cros_safety.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ParamsSpec, 'ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_Params', [
      mojo.internal.StructField('rules', 0, 0, ash.cros_safety.mojom.SafetyRulesetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('prompt', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('image', 16, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ResponseParamsSpec, 'ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ResponseParams', [
      mojo.internal.StructField('verdict', 0, 0, ash.cros_safety.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_safety.mojom.CloudSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.mojom.CloudSafetySessionRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.CloudSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.mojom.CloudSafetySessionPendingReceiver,
      handle);
    this.$ = new ash.cros_safety.mojom.CloudSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.mojom.CloudSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  classifyTextSafety(rules, text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ParamsSpec,
      ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ResponseParamsSpec,
      [rules, text],
      false);
  }

  classifyImageSafety(rules, prompt, image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ParamsSpec,
      ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ResponseParamsSpec,
      [rules, prompt, image],
      false);
  }

};

ash.cros_safety.mojom.CloudSafetySession.getRemote = function() {
  let remote = new ash.cros_safety.mojom.CloudSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.CloudSafetySession',
    'context');
  return remote.$;
};

ash.cros_safety.mojom.CloudSafetySessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ParamsSpec.$.decode(message.payload);
          const result = this.impl.classifyTextSafety(params.rules, params.text);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_safety.mojom.CloudSafetySession_ClassifyTextSafety_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ParamsSpec.$.decode(message.payload);
          const result = this.impl.classifyImageSafety(params.rules, params.prompt, params.image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_safety.mojom.CloudSafetySession_ClassifyImageSafety_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.cros_safety.mojom.CloudSafetySessionReceiver = ash.cros_safety.mojom.CloudSafetySessionReceiver;

ash.cros_safety.mojom.CloudSafetySessionPtr = ash.cros_safety.mojom.CloudSafetySessionRemote;
ash.cros_safety.mojom.CloudSafetySessionRequest = ash.cros_safety.mojom.CloudSafetySessionPendingReceiver;


// Interface: OnDeviceSafetySession
mojo.internal.Struct(
    ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ParamsSpec, 'ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_Params', [
      mojo.internal.StructField('rules', 0, 0, ash.cros_safety.mojom.SafetyRulesetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('text', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ResponseParamsSpec, 'ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ResponseParams', [
      mojo.internal.StructField('verdict', 0, 0, ash.cros_safety.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ParamsSpec, 'ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_Params', [
      mojo.internal.StructField('rules', 0, 0, ash.cros_safety.mojom.SafetyRulesetSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('image', 8, 0, mojo_base.mojom.BigBufferSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ResponseParamsSpec, 'ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ResponseParams', [
      mojo.internal.StructField('verdict', 0, 0, ash.cros_safety.mojom.SafetyClassifierVerdictSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.cros_safety.mojom.OnDeviceSafetySessionPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.cros_safety.mojom.OnDeviceSafetySessionRemote = class {
  static get $interfaceName() {
    return 'ash.cros_safety.mojom.OnDeviceSafetySession';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.cros_safety.mojom.OnDeviceSafetySessionPendingReceiver,
      handle);
    this.$ = new ash.cros_safety.mojom.OnDeviceSafetySessionRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.cros_safety.mojom.OnDeviceSafetySessionRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  classifyTextSafety(rules, text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ParamsSpec,
      ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ResponseParamsSpec,
      [rules, text],
      false);
  }

  classifyImageSafety(rules, image) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ParamsSpec,
      ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ResponseParamsSpec,
      [rules, image],
      false);
  }

};

ash.cros_safety.mojom.OnDeviceSafetySession.getRemote = function() {
  let remote = new ash.cros_safety.mojom.OnDeviceSafetySessionRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.cros_safety.mojom.OnDeviceSafetySession',
    'context');
  return remote.$;
};

ash.cros_safety.mojom.OnDeviceSafetySessionReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          buffer: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ParamsSpec.$.decode(message.payload);
          const result = this.impl.classifyTextSafety(params.rules, params.text);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyTextSafety_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ParamsSpec.$.decode(message.payload);
          const result = this.impl.classifyImageSafety(params.rules, params.image);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.cros_safety.mojom.OnDeviceSafetySession_ClassifyImageSafety_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    }});
  }
};

ash.cros_safety.mojom.OnDeviceSafetySessionReceiver = ash.cros_safety.mojom.OnDeviceSafetySessionReceiver;

ash.cros_safety.mojom.OnDeviceSafetySessionPtr = ash.cros_safety.mojom.OnDeviceSafetySessionRemote;
ash.cros_safety.mojom.OnDeviceSafetySessionRequest = ash.cros_safety.mojom.OnDeviceSafetySessionPendingReceiver;

