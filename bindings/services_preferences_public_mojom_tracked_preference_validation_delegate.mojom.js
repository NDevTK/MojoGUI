// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/tracked_preference_validation_delegate.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};
var mojo_base = mojo_base || {};

prefs.mojom.ValueStateSpec = { $: mojo.internal.Enum() };
prefs.mojom.TrackedPreferenceValidationDelegate = {};
prefs.mojom.TrackedPreferenceValidationDelegate.$interfaceName = 'prefs.mojom.TrackedPreferenceValidationDelegate';
prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec = { $: {} };
prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec = { $: {} };

// Enum: ValueState
prefs.mojom.ValueState = {
  UNCHANGED: 0,
  CLEARED: 1,
  CHANGED: 2,
  UNTRUSTED_UNKNOWN_VALUE: 3,
  TRUSTED_UNKNOWN_VALUE: 4,
  TRUSTED_NULL_VALUE: 5,
  UNSUPPORTED: 6,
  UNCHANGED_ENCRYPTED: 7,
  CHANGED_ENCRYPTED: 8,
  CLEARED_ENCRYPTED: 9,
  UNCHANGED_VIA_HMAC_FALLBACK: 10,
  CHANGED_VIA_HMAC_FALLBACK: 11,
  CLEARED_VIA_HMAC_FALLBACK: 12,
};

// Interface: TrackedPreferenceValidationDelegate
mojo.internal.Struct(
    prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec, 'prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_Params', [
      mojo.internal.StructField('pref_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo_base.mojom.ValueSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('value_state', 16, 0, prefs.mojom.ValueStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('external_validation_value_state', 24, 0, prefs.mojom.ValueStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_personal', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec, 'prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_Params', [
      mojo.internal.StructField('pref_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('invalid_keys', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('external_validation_invalid_keys', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('value_state', 24, 0, prefs.mojom.ValueStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('external_validation_value_state', 32, 0, prefs.mojom.ValueStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('is_personal', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

prefs.mojom.TrackedPreferenceValidationDelegatePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prefs.mojom.TrackedPreferenceValidationDelegateRemote = class {
  static get $interfaceName() {
    return 'prefs.mojom.TrackedPreferenceValidationDelegate';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prefs.mojom.TrackedPreferenceValidationDelegatePendingReceiver,
      handle);
    this.$ = new prefs.mojom.TrackedPreferenceValidationDelegateRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prefs.mojom.TrackedPreferenceValidationDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onAtomicPreferenceValidation(pref_path, value, value_state, external_validation_value_state, is_personal) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec,
      null,
      [pref_path, value, value_state, external_validation_value_state, is_personal],
      false);
  }

  onSplitPreferenceValidation(pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec,
      null,
      [pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal],
      false);
  }

};

prefs.mojom.TrackedPreferenceValidationDelegate.getRemote = function() {
  let remote = new prefs.mojom.TrackedPreferenceValidationDelegateRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prefs.mojom.TrackedPreferenceValidationDelegate',
    'context');
  return remote.$;
};

prefs.mojom.TrackedPreferenceValidationDelegateReceiver = class {
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
          const params = prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onAtomicPreferenceValidation(params.pref_path, params.value, params.value_state, params.external_validation_value_state, params.is_personal);
          break;
        }
        case 1: {
          const params = prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec.$.decode(message.payload);
          const result = this.impl.onSplitPreferenceValidation(params.pref_path, params.invalid_keys, params.external_validation_invalid_keys, params.value_state, params.external_validation_value_state, params.is_personal);
          break;
        }
      }
    }});
  }
};

prefs.mojom.TrackedPreferenceValidationDelegateReceiver = prefs.mojom.TrackedPreferenceValidationDelegateReceiver;

prefs.mojom.TrackedPreferenceValidationDelegatePtr = prefs.mojom.TrackedPreferenceValidationDelegateRemote;
prefs.mojom.TrackedPreferenceValidationDelegateRequest = prefs.mojom.TrackedPreferenceValidationDelegatePendingReceiver;

