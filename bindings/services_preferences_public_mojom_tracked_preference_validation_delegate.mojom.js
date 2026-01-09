// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/tracked_preference_validation_delegate.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};


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
prefs.mojom.ValueStateSpec = { $: mojo.internal.Enum() };

// Interface: TrackedPreferenceValidationDelegate
prefs.mojom.TrackedPreferenceValidationDelegate = {};

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
      [pref_path, value, value_state, external_validation_value_state, is_personal]);
  }

  onSplitPreferenceValidation(pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec,
      null,
      [pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal]);
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

// ParamsSpec for OnAtomicPreferenceValidation
prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prefs.mojom.TrackedPreferenceValidationDelegate.OnAtomicPreferenceValidation_Params',
      packedSize: 48,
      fields: [
        { name: 'pref_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ValueSpec, nullable: true, minVersion: 0 },
        { name: 'value_state', packedOffset: 24, packedBitOffset: 0, type: prefs.mojom.ValueStateSpec, nullable: false, minVersion: 0 },
        { name: 'external_validation_value_state', packedOffset: 28, packedBitOffset: 0, type: prefs.mojom.ValueStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_personal', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// ParamsSpec for OnSplitPreferenceValidation
prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prefs.mojom.TrackedPreferenceValidationDelegate.OnSplitPreferenceValidation_Params',
      packedSize: 48,
      fields: [
        { name: 'pref_path', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'invalid_keys', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'external_validation_invalid_keys', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'value_state', packedOffset: 24, packedBitOffset: 0, type: prefs.mojom.ValueStateSpec, nullable: false, minVersion: 0 },
        { name: 'external_validation_value_state', packedOffset: 28, packedBitOffset: 0, type: prefs.mojom.ValueStateSpec, nullable: false, minVersion: 0 },
        { name: 'is_personal', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Legacy compatibility
prefs.mojom.TrackedPreferenceValidationDelegatePtr = prefs.mojom.TrackedPreferenceValidationDelegateRemote;
prefs.mojom.TrackedPreferenceValidationDelegateRequest = prefs.mojom.TrackedPreferenceValidationDelegatePendingReceiver;

