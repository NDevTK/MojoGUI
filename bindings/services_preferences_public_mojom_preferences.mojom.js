// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/preferences.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};
var services = services || {};

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
      mojo.internal.StructField('unprotected_pref_filename', 0, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('protected_pref_filename', 8, 0, mojo_base.mojom.FilePathSpec, null, false, 0, undefined),
      mojo.internal.StructField('tracking_configuration', 16, 0, mojo.internal.Array(prefs.mojom.TrackedPreferenceMetadataSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('reporting_ids_count', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('seed', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('registry_seed', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('registry_path', 48, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('validation_delegate', 56, 0, mojo.internal.InterfaceProxy(prefs.mojom.TrackedPreferenceValidationDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('reset_on_load_observer', 64, 0, mojo.internal.InterfaceProxy(prefs.mojom.ResetOnLoadObserverRemote), null, true, 0, undefined),
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
      []);
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

prefs.mojom.ResetOnLoadObserverPtr = prefs.mojom.ResetOnLoadObserverRemote;
prefs.mojom.ResetOnLoadObserverRequest = prefs.mojom.ResetOnLoadObserverPendingReceiver;

