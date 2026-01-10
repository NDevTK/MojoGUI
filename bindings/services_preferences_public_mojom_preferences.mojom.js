// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/preferences.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};
var mojo_base = mojo_base || {};

prefs.mojom.EnforcementLevelSpec = { $: mojo.internal.Enum() };
prefs.mojom.PrefTrackingStrategySpec = { $: mojo.internal.Enum() };
prefs.mojom.ValueTypeSpec = { $: mojo.internal.Enum() };
prefs.mojom.TrackedPersistentPrefStoreConfigurationSpec = { $: {} };
prefs.mojom.TrackedPreferenceMetadataSpec = { $: {} };
prefs.mojom.ResetOnLoadObserver = {};
prefs.mojom.ResetOnLoadObserver.$interfaceName = 'prefs.mojom.ResetOnLoadObserver';
prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec = { $: {} };

// Enum: EnforcementLevel
prefs.mojom.EnforcementLevel = {
  NO_ENFORCEMENT: 0,
  ENFORCE_ON_LOAD: 1,
};

// Enum: PrefTrackingStrategy
prefs.mojom.PrefTrackingStrategy = {
  ATOMIC: 0,
  SPLIT: 1,
};

// Enum: ValueType
prefs.mojom.ValueType = {
  IMPERSONAL: 0,
  PERSONAL: 1,
};

// Struct: TrackedPersistentPrefStoreConfiguration
mojo.internal.Struct(
    prefs.mojom.TrackedPersistentPrefStoreConfigurationSpec, 'prefs.mojom.TrackedPersistentPrefStoreConfiguration', [
      mojo.internal.StructField('unprotected_pref_filename', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('protected_pref_filename', 8, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('tracking_configuration', 16, 0, mojo.internal.Array(prefs.mojom.TrackedPreferenceMetadataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('reporting_ids_count', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('seed', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('registry_seed', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('registry_path', 48, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('validation_delegate', 56, 0, mojo.internal.InterfaceProxy(prefs.mojom.TrackedPreferenceValidationDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('reset_on_load_observer', 64, 0, mojo.internal.InterfaceProxy(prefs.mojom.ResetOnLoadObserverSpec), null, true, 0, undefined),
    ],
    [[0, 80]]);

// Struct: TrackedPreferenceMetadata
mojo.internal.Struct(
    prefs.mojom.TrackedPreferenceMetadataSpec, 'prefs.mojom.TrackedPreferenceMetadata', [
      mojo.internal.StructField('NO_ENFORCEMENT', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Interface: ResetOnLoadObserver
mojo.internal.Struct(
    prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec, 'prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_Params', [
    ],
    [[0, 8]]);

prefs.mojom.ResetOnLoadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prefs.mojom.ResetOnLoadObserverRemote = class {
  static get $interfaceName() {
    return 'prefs.mojom.ResetOnLoadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prefs.mojom.ResetOnLoadObserverPendingReceiver,
      handle);
    this.$ = new prefs.mojom.ResetOnLoadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prefs.mojom.ResetOnLoadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResetOnLoad() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec,
      null,
      [],
      false);
  }

};

prefs.mojom.ResetOnLoadObserver.getRemote = function() {
  let remote = new prefs.mojom.ResetOnLoadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prefs.mojom.ResetOnLoadObserver',
    'context');
  return remote.$;
};

prefs.mojom.ResetOnLoadObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnResetOnLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnResetOnLoad (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.onResetOnLoad');
          const result = this.impl.onResetOnLoad();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

prefs.mojom.ResetOnLoadObserverReceiver = prefs.mojom.ResetOnLoadObserverReceiver;

prefs.mojom.ResetOnLoadObserverPtr = prefs.mojom.ResetOnLoadObserverRemote;
prefs.mojom.ResetOnLoadObserverRequest = prefs.mojom.ResetOnLoadObserverPendingReceiver;

