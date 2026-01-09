// Auto-generated MojoJS binding
// Source: chromium_src/services/preferences/public/mojom/preferences.mojom
// Module: prefs.mojom

'use strict';

// Module namespace
var prefs = prefs || {};
prefs.mojom = prefs.mojom || {};


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

// Interface: ResetOnLoadObserver
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
      prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec.$,
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

// ParamsSpec for OnResetOnLoad
prefs.mojom.ResetOnLoadObserver_OnResetOnLoad_ParamsSpec = {
  $: {
    structSpec: {
      name: 'prefs.mojom.ResetOnLoadObserver.OnResetOnLoad_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
prefs.mojom.ResetOnLoadObserverPtr = prefs.mojom.ResetOnLoadObserverRemote;
prefs.mojom.ResetOnLoadObserverRequest = prefs.mojom.ResetOnLoadObserverPendingReceiver;

