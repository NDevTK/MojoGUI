// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/japanese_settings.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.mojom = ash.ime.mojom || {};


// Enum: JpUnusedEnum0
ash.ime.mojom.JpUnusedEnum0 = {
  kValue1: 0,
};

// Enum: JpUnusedEnum1
ash.ime.mojom.JpUnusedEnum1 = {
  kValue1: 0,
  kValue2: 1,
  kValue3: 2,
};

// Enum: JpUnusedEnum2
ash.ime.mojom.JpUnusedEnum2 = {
  kValue1: 0,
  kValue2: 1,
  kValue3: 2,
};

// Enum: JpUnusedEnum3
ash.ime.mojom.JpUnusedEnum3 = {
  kValue1: 0,
  kValue2: 1,
};

// Enum: JpUnusedEnum4
ash.ime.mojom.JpUnusedEnum4 = {
  kValue0: 0,
  kValue2: 1,
};

// Enum: JpUnusedEnum5
ash.ime.mojom.JpUnusedEnum5 = {
  kValue1: 0,
  kValue2: 1,
  kValue3: 2,
  kValue4: 3,
  kValue5: 4,
};

// Enum: JpUnusedEnum6
ash.ime.mojom.JpUnusedEnum6 = {
  kValue0: 0,
  kValue2: 1,
};

// Interface: JpUnused
ash.ime.mojom.JpUnusedPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.mojom.JpUnusedRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.JpUnused';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.mojom.JpUnusedPendingReceiver,
      handle);
    this.$ = new ash.ime.mojom.JpUnusedRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.mojom.JpUnusedRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

};

ash.ime.mojom.JpUnused.getRemote = function() {
  let remote = new ash.ime.mojom.JpUnusedRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.JpUnused',
    'context');
  return remote.$;
};

// Legacy compatibility
ash.ime.mojom.JpUnusedPtr = ash.ime.mojom.JpUnusedRemote;
ash.ime.mojom.JpUnusedRequest = ash.ime.mojom.JpUnusedPendingReceiver;

