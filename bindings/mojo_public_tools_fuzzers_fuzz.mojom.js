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
fuzz.mojom.FuzzEnumSpec = { $: mojo.internal.Enum() };

// Union: FuzzUnion
fuzz.mojom.FuzzUnionSpec = { $: mojo.internal.Union(
    'fuzz.mojom.FuzzUnion', {
      'fuzz_bool': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'fuzz_int8': {
        'ordinal': 1,
        'type': mojo.internal.Int8,
      }},
      'fuzz_uint8': {
        'ordinal': 2,
        'type': mojo.internal.Uint8,
      }},
      'fuzz_int16': {
        'ordinal': 3,
        'type': mojo.internal.Int16,
      }},
      'fuzz_uint16': {
        'ordinal': 4,
        'type': mojo.internal.Uint16,
      }},
      'fuzz_int32': {
        'ordinal': 5,
        'type': mojo.internal.Int32,
      }},
      'fuzz_uint32': {
        'ordinal': 6,
        'type': mojo.internal.Uint32,
      }},
      'fuzz_int64': {
        'ordinal': 7,
        'type': mojo.internal.Int64,
      }},
      'fuzz_uint64': {
        'ordinal': 8,
        'type': mojo.internal.Uint64,
      }},
      'fuzz_float': {
        'ordinal': 9,
        'type': mojo.internal.Float,
      }},
      'fuzz_double': {
        'ordinal': 10,
        'type': mojo.internal.Double,
      }},
      'fuzz_string': {
        'ordinal': 11,
        'type': mojo.internal.String,
      }},
      'fuzz_bool_array': {
        'ordinal': 12,
        'type': mojo.internal.Array(mojo.internal.Bool, false),
      }},
      'fuzz_primitive_array': {
        'ordinal': 13,
        'type': mojo.internal.Array(mojo.internal.Int8, false),
      }},
      'fuzz_struct_array': {
        'ordinal': 14,
        'type': mojo.internal.Array(fuzz.mojom.FuzzDummyStructSpec, false),
      }},
      'fuzz_primitive_map': {
        'ordinal': 15,
        'type': mojo.internal.Map(mojo.internal.String, mojo.internal.Int8, false),
      }},
      'fuzz_array_map': {
        'ordinal': 16,
        'type': mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false),
      }},
      'fuzz_struct_map': {
        'ordinal': 17,
        'type': mojo.internal.Map(mojo.internal.String, fuzz.mojom.FuzzDummyStructSpec, false),
      }},
      'fuzz_union_map': {
        'ordinal': 18,
        'type': mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, fuzz.mojom.FuzzUnionSpec, false),
      }},
      'fuzz_complex': {
        'ordinal': 19,
        'type': mojo.internal.Array(mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(fuzz.mojom.FuzzUnionSpec, false), false), false), false),
        'nullable': true,
      }},
    })
};

// Struct: FuzzDummyStruct
fuzz.mojom.FuzzDummyStructSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzDummyStruct',
      packedSize: 16,
      fields: [
        { name: 'dummy', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FuzzStruct
fuzz.mojom.FuzzStructSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzStruct',
      packedSize: 136,
      fields: [
        { name: 'fuzz_bool', packedOffset: 120, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'fuzz_int8', packedOffset: 121, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
        { name: 'fuzz_uint8', packedOffset: 122, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'fuzz_int16', packedOffset: 116, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'fuzz_uint16', packedOffset: 118, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'fuzz_int32', packedOffset: 104, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'fuzz_uint32', packedOffset: 108, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fuzz_int64', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'fuzz_uint64', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'fuzz_float', packedOffset: 112, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'fuzz_double', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'fuzz_string', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'fuzz_bool_array', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: false, minVersion: 0 },
        { name: 'fuzz_primitive_array', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int8, false), nullable: false, minVersion: 0 },
        { name: 'fuzz_primitive_map', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Int8, false), nullable: false, minVersion: 0 },
        { name: 'fuzz_array_map', packedOffset: 56, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), nullable: false, minVersion: 0 },
        { name: 'fuzz_union_map', packedOffset: 64, packedBitOffset: 0, type: mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, fuzz.mojom.FuzzUnionSpec, false), nullable: false, minVersion: 0 },
        { name: 'fuzz_union_array', packedOffset: 72, packedBitOffset: 0, type: mojo.internal.Array(fuzz.mojom.FuzzUnionSpec, false), nullable: false, minVersion: 0 },
        { name: 'fuzz_struct_array', packedOffset: 80, packedBitOffset: 0, type: mojo.internal.Array(fuzz.mojom.FuzzStructSpec, false), nullable: false, minVersion: 0 },
        { name: 'fuzz_nullable_array', packedOffset: 88, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int8, false), nullable: true, minVersion: 0 },
        { name: 'fuzz_complex', packedOffset: 96, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(fuzz.mojom.FuzzStructSpec, false), false), false), false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 136}]
    }
  }
};

// Interface: FuzzDummyInterface
fuzz.mojom.FuzzDummyInterface = {};

fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzDummyInterface_Ping_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

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
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
fuzz.mojom.FuzzDummyInterfacePtr = fuzz.mojom.FuzzDummyInterfaceRemote;
fuzz.mojom.FuzzDummyInterfaceRequest = fuzz.mojom.FuzzDummyInterfacePendingReceiver;


// Interface: FuzzInterface
fuzz.mojom.FuzzInterface = {};

fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface_FuzzBasic_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface_FuzzBasicResp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface_FuzzArgs_Params',
      packedSize: 24,
      fields: [
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false, minVersion: 0 },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface_FuzzArgsResp_Params',
      packedSize: 24,
      fields: [
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false, minVersion: 0 },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_Params',
      packedSize: 24,
      fields: [
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false, minVersion: 0 },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec = {
  $: {
    structSpec: {
      name: 'fuzz.mojom.FuzzInterface_FuzzAssociated_Params',
      packedSize: 16,
      fields: [
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(fuzz.mojom.FuzzDummyInterfaceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
      versions: [{version: 0, packedSize: 8}]
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
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false, minVersion: 0 },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false, minVersion: 0 },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'a', packedOffset: 0, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: false, minVersion: 0 },
        { name: 'b', packedOffset: 8, packedBitOffset: 0, type: fuzz.mojom.FuzzStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'receiver', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.AssociatedInterfaceRequest(fuzz.mojom.FuzzDummyInterfaceRemote), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
fuzz.mojom.FuzzInterfacePtr = fuzz.mojom.FuzzInterfaceRemote;
fuzz.mojom.FuzzInterfaceRequest = fuzz.mojom.FuzzInterfacePendingReceiver;

