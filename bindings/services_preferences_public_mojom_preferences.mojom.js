// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/preferences.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};


// Enum: EnforcementLevel
prefs.mojom.mojom.EnforcementLevel = {
  NO_ENFORCEMENT: 0,
  ENFORCE_ON_LOAD: 1,
};
prefs.mojom.mojom.EnforcementLevelSpec = { $: mojo.internal.Enum() };

// Enum: PrefTrackingStrategy
prefs.mojom.mojom.PrefTrackingStrategy = {
  ATOMIC: 0,
  SPLIT: 1,
};
prefs.mojom.mojom.PrefTrackingStrategySpec = { $: mojo.internal.Enum() };

// Enum: ValueType
prefs.mojom.mojom.ValueType = {
  IMPERSONAL: 0,
  PERSONAL: 1,
};
prefs.mojom.mojom.ValueTypeSpec = { $: mojo.internal.Enum() };

// Struct: TrackedPersistentPrefStoreConfiguration
prefs.mojom.mojom.TrackedPersistentPrefStoreConfigurationSpec = {
  $: {
    structSpec: {
      name: 'prefs.mojom.TrackedPersistentPrefStoreConfiguration',
      packedSize: 80,
      fields: [
        { name: 'unprotected_pref_filename', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'protected_pref_filename', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
        { name: 'tracking_configuration', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(prefs.mojom.TrackedPreferenceMetadataSpec, false), nullable: false, minVersion: 0 },
        { name: 'reporting_ids_count', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'seed', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'registry_seed', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'registry_path', packedOffset: 48, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'validation_delegate', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(prefs.mojom.TrackedPreferenceValidationDelegateRemote), nullable: true, minVersion: 0 },
        { name: 'reset_on_load_observer', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.InterfaceProxy(prefs.mojom.ResetOnLoadObserverRemote), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 80}]
    }
  }
};

// Struct: TrackedPreferenceMetadata
prefs.mojom.mojom.TrackedPreferenceMetadataSpec = {
  $: {
    structSpec: {
      name: 'prefs.mojom.TrackedPreferenceMetadata',
      packedSize: 16,
      fields: [
        { name: 'NO_ENFORCEMENT', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Interface: ResetOnLoadObserver
prefs.mojom.mojom.ResetOnLoadObserver = {};

prefs.mojom.mojom.ResetOnLoadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

prefs.mojom.mojom.ResetOnLoadObserverRemote = class {
  static get $interfaceName() {
    return 'prefs.mojom.ResetOnLoadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      prefs.mojom.mojom.ResetOnLoadObserverPendingReceiver,
      handle);
    this.$ = new prefs.mojom.mojom.ResetOnLoadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

prefs.mojom.mojom.ResetOnLoadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  onResetOnLoad() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      prefs.mojom.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec,
      null,
      []);
  }

};

prefs.mojom.mojom.ResetOnLoadObserver.getRemote = function() {
  let remote = new prefs.mojom.mojom.ResetOnLoadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'prefs.mojom.ResetOnLoadObserver',
    'context');
  return remote.$;
};

// ParamsSpec for OnResetOnLoad
prefs.mojom.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prefs.mojom.ResetOnLoadObserver.OnResetOnLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
prefs.mojom.mojom.ResetOnLoadObserverPtr = prefs.mojom.mojom.ResetOnLoadObserverRemote;
prefs.mojom.mojom.ResetOnLoadObserverRequest = prefs.mojom.mojom.ResetOnLoadObserverPendingReceiver;

