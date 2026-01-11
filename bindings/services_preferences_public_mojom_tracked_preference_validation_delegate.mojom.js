// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/tracked_preference_validation_delegate.mojom
// Module: prefs.mojom

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
  onAtomicPreferenceValidation(pref_path, value, value_state, external_validation_value_state, is_personal) {
    return this.$.onAtomicPreferenceValidation(pref_path, value, value_state, external_validation_value_state, is_personal);
  }
  onSplitPreferenceValidation(pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal) {
    return this.$.onSplitPreferenceValidation(pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal);
  }
};

prefs.mojom.TrackedPreferenceValidationDelegateRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TrackedPreferenceValidationDelegate', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onAtomicPreferenceValidation(pref_path, value, value_state, external_validation_value_state, is_personal) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec,
      null,
      [pref_path, value, value_state, external_validation_value_state, is_personal],
      false);
  }

  onSplitPreferenceValidation(pref_path, invalid_keys, external_validation_invalid_keys, value_state, external_validation_value_state, is_personal) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TrackedPreferenceValidationDelegate', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(prefs.mojom.TrackedPreferenceValidationDelegate_OnAtomicPreferenceValidation_ParamsSpec.$.structSpec);
          const result = this.impl.onAtomicPreferenceValidation(params.pref_path, params.value, params.value_state, params.external_validation_value_state, params.is_personal);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(prefs.mojom.TrackedPreferenceValidationDelegate_OnSplitPreferenceValidation_ParamsSpec.$.structSpec);
          const result = this.impl.onSplitPreferenceValidation(params.pref_path, params.invalid_keys, params.external_validation_invalid_keys, params.value_state, params.external_validation_value_state, params.is_personal);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

prefs.mojom.TrackedPreferenceValidationDelegateReceiver = prefs.mojom.TrackedPreferenceValidationDelegateReceiver;

prefs.mojom.TrackedPreferenceValidationDelegatePtr = prefs.mojom.TrackedPreferenceValidationDelegateRemote;
prefs.mojom.TrackedPreferenceValidationDelegateRequest = prefs.mojom.TrackedPreferenceValidationDelegatePendingReceiver;

