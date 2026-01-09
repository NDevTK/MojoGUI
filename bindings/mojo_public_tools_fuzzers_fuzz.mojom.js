// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/tools/fuzzers/fuzz.mojom
// Module: fuzz.mojom

'use strict';

// Module namespace
var fuzz = fuzz || {};
fuzz.mojom = fuzz.mojom || {};


// Enum: FuzzEnum
fuzz.mojom.FuzzEnum = {
  FUZZ_VALUE0: 0,
  FUZZ_VALUE1: 1,
  FUZZ_VALUE2: 2,
};

// Struct: FuzzDummyStruct
fuzz.mojom.FuzzDummyStructSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzDummyStruct',
      packedSize: 16,
      fields: [
        { name: 'dummy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: FuzzStruct
fuzz.mojom.FuzzStructSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzStruct',
      packedSize: 144,
      fields: [
        { name: 'fuzz_bool', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'fuzz_int8', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false },
        { name: 'fuzz_uint8', packedOffset: 9, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'fuzz_int16', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false },
        { name: 'fuzz_uint16', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'fuzz_int32', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false },
        { name: 'fuzz_uint32', packedOffset: 20, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'fuzz_int64', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false },
        { name: 'fuzz_uint64', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false },
        { name: 'fuzz_float', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Float, nullable: false },
        { name: 'fuzz_double', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Double, nullable: false },
        { name: 'fuzz_string', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'fuzz_bool_array', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'fuzz_primitive_array', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'fuzz_primitive_map', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'fuzz_array_map', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'fuzz_union_map', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Map, nullable: false },
        { name: 'fuzz_union_array', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'fuzz_struct_array', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'fuzz_nullable_array', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'fuzz_complex', packedOffset: 128, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: FuzzDummyInterface
fuzz.mojom.FuzzDummyInterface = {};

fuzz.mojom.FuzzDummyInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

fuzz.mojom.FuzzDummyInterfaceRemote = class {
  static get $interfaceName() {
    return 'fuzz.mojom.FuzzDummyInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      fuzz.mojom.FuzzDummyInterfacePendingReceiver,
      handle);
    this.$ = new fuzz.mojom.FuzzDummyInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

fuzz.mojom.FuzzDummyInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  ping() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec,
      null,
      []);
  }

};

fuzz.mojom.FuzzDummyInterface.getRemote = function() {
  let remote = new fuzz.mojom.FuzzDummyInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'fuzz.mojom.FuzzDummyInterface',
    'context');
  return remote.$;
};

// ParamsSpec for Ping
fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzDummyInterface.Ping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
fuzz.mojom.FuzzDummyInterfacePtr = fuzz.mojom.FuzzDummyInterfaceRemote;
fuzz.mojom.FuzzDummyInterfaceRequest = fuzz.mojom.FuzzDummyInterfacePendingReceiver;


// Interface: FuzzInterface
fuzz.mojom.FuzzInterface = {};

fuzz.mojom.FuzzInterfacePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

fuzz.mojom.FuzzInterfaceRemote = class {
  static get $interfaceName() {
    return 'fuzz.mojom.FuzzInterface';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      fuzz.mojom.FuzzInterfacePendingReceiver,
      handle);
    this.$ = new fuzz.mojom.FuzzInterfaceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

fuzz.mojom.FuzzInterfaceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  fuzzBasic() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec,
      null,
      []);
  }

  fuzzBasicResp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec,
      null,
      []);
  }

  fuzzBasicSyncResp() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec,
      null,
      []);
  }

  fuzzArgs(a, b) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec,
      null,
      [a, b]);
  }

  fuzzArgsResp(a, b) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec,
      null,
      [a, b]);
  }

  fuzzArgsSyncResp(a, b) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec,
      null,
      [a, b]);
  }

  fuzzAssociated(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec,
      null,
      [receiver]);
  }

};

fuzz.mojom.FuzzInterface.getRemote = function() {
  let remote = new fuzz.mojom.FuzzInterfaceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'fuzz.mojom.FuzzInterface',
    'context');
  return remote.$;
};

// ParamsSpec for FuzzBasic
fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface.FuzzBasic_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FuzzBasicResp
fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface.FuzzBasicResp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FuzzBasicSyncResp
fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface.FuzzBasicSyncResp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FuzzArgs
fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface.FuzzArgs_Params',
      packedSize: 24,
      fields: [
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FuzzArgsResp
fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface.FuzzArgsResp_Params',
      packedSize: 24,
      fields: [
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FuzzArgsSyncResp
fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface.FuzzArgsSyncResp_Params',
      packedSize: 24,
      fields: [
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for FuzzAssociated
fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface.FuzzAssociated_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
fuzz.mojom.FuzzInterfacePtr = fuzz.mojom.FuzzInterfaceRemote;
fuzz.mojom.FuzzInterfaceRequest = fuzz.mojom.FuzzInterfacePendingReceiver;

