// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/services/ime/public/mojom/japanese_settings.mojom
// Module: ash.ime.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.ime = ash.ime || {};
ash.ime.ime.mojom = ash.ime.ime.mojom || {};


// Enum: JpUnusedEnum0
ash.ime.ime.mojom.mojom.JpUnusedEnum0 = {
  kValue1: 0,
};
ash.ime.ime.mojom.mojom.JpUnusedEnum0Spec = { $: mojo.internal.Enum() };

// Enum: JpUnusedEnum1
ash.ime.ime.mojom.mojom.JpUnusedEnum1 = {
  kValue1: 0,
  kValue2: 1,
  kValue3: 2,
};
ash.ime.ime.mojom.mojom.JpUnusedEnum1Spec = { $: mojo.internal.Enum() };

// Enum: JpUnusedEnum2
ash.ime.ime.mojom.mojom.JpUnusedEnum2 = {
  kValue1: 0,
  kValue2: 1,
  kValue3: 2,
};
ash.ime.ime.mojom.mojom.JpUnusedEnum2Spec = { $: mojo.internal.Enum() };

// Enum: JpUnusedEnum3
ash.ime.ime.mojom.mojom.JpUnusedEnum3 = {
  kValue1: 0,
  kValue2: 1,
};
ash.ime.ime.mojom.mojom.JpUnusedEnum3Spec = { $: mojo.internal.Enum() };

// Enum: JpUnusedEnum4
ash.ime.ime.mojom.mojom.JpUnusedEnum4 = {
  kValue0: 0,
  kValue2: 1,
};
ash.ime.ime.mojom.mojom.JpUnusedEnum4Spec = { $: mojo.internal.Enum() };

// Enum: JpUnusedEnum5
ash.ime.ime.mojom.mojom.JpUnusedEnum5 = {
  kValue1: 0,
  kValue2: 1,
  kValue3: 2,
  kValue4: 3,
  kValue5: 4,
};
ash.ime.ime.mojom.mojom.JpUnusedEnum5Spec = { $: mojo.internal.Enum() };

// Enum: JpUnusedEnum6
ash.ime.ime.mojom.mojom.JpUnusedEnum6 = {
  kValue0: 0,
  kValue2: 1,
};
ash.ime.ime.mojom.mojom.JpUnusedEnum6Spec = { $: mojo.internal.Enum() };

// Struct: JpUnusedStruct
ash.ime.ime.mojom.mojom.JpUnusedStructSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.JpUnusedStruct',
      packedSize: 48,
      fields: [
        { name: 'unused0', packedOffset: 8, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedEnum0Spec, nullable: false, minVersion: 0 },
        { name: 'unused1', packedOffset: 12, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedEnum1Spec, nullable: false, minVersion: 0 },
        { name: 'unused2', packedOffset: 16, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedEnum2Spec, nullable: false, minVersion: 0 },
        { name: 'unused3', packedOffset: 20, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedEnum3Spec, nullable: false, minVersion: 0 },
        { name: 'unused4', packedOffset: 24, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedEnum4Spec, nullable: false, minVersion: 0 },
        { name: 'unused5', packedOffset: 28, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedEnum5Spec, nullable: false, minVersion: 0 },
        { name: 'unused6', packedOffset: 36, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unused7', packedOffset: 32, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedEnum6Spec, nullable: false, minVersion: 0 },
        { name: 'unused8', packedOffset: 36, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unused9', packedOffset: 36, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unused10', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'unused11', packedOffset: 36, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'unused12', packedOffset: 36, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 48}]
    }
  }
};

// Interface: JpUnused
ash.ime.ime.mojom.mojom.JpUnused = {};

ash.ime.ime.mojom.mojom.JpUnusedPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.ime.ime.mojom.mojom.JpUnusedRemote = class {
  static get $interfaceName() {
    return 'ash.ime.mojom.JpUnused';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.ime.ime.mojom.mojom.JpUnusedPendingReceiver,
      handle);
    this.$ = new ash.ime.ime.mojom.mojom.JpUnusedRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.ime.ime.mojom.mojom.JpUnusedRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  unused() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.ime.ime.mojom.mojom.JpUnused_Unused_ParamsSpec,
      ash.ime.ime.mojom.mojom.JpUnused_Unused_ResponseParamsSpec,
      []);
  }

};

ash.ime.ime.mojom.mojom.JpUnused.getRemote = function() {
  let remote = new ash.ime.ime.mojom.mojom.JpUnusedRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.ime.mojom.JpUnused',
    'context');
  return remote.$;
};

// ParamsSpec for Unused
ash.ime.ime.mojom.mojom.JpUnused_Unused_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.JpUnused.Unused_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.ime.ime.mojom.mojom.JpUnused_Unused_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.ime.mojom.JpUnused.Unused_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'unused', packedOffset: 0, packedBitOffset: 0, type: ash.ime.mojom.JpUnusedStructSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.ime.ime.mojom.mojom.JpUnusedPtr = ash.ime.ime.mojom.mojom.JpUnusedRemote;
ash.ime.ime.mojom.mojom.JpUnusedRequest = ash.ime.ime.mojom.mojom.JpUnusedPendingReceiver;

