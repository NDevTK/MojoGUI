// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/tools/fuzzers/fuzz.mojom
// Module: fuzz.mojom

'use strict';

// Module namespace
var fuzz = fuzz || {};
fuzz.mojom = fuzz.mojom || {};

fuzz.mojom.FuzzEnumSpec = { $: mojo.internal.Enum() };
fuzz.mojom.FuzzUnionSpec = { $: {} };
fuzz.mojom.FuzzDummyStructSpec = { $: {} };
fuzz.mojom.FuzzStructSpec = { $: {} };
fuzz.mojom.FuzzDummyInterface = {};
fuzz.mojom.FuzzDummyInterface.$interfaceName = 'fuzz.mojom.FuzzDummyInterface';
fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface = {};
fuzz.mojom.FuzzInterface.$interfaceName = 'fuzz.mojom.FuzzInterface';
fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec = { $: {} };
fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec = { $: {} };

// Enum: FuzzEnum
fuzz.mojom.FuzzEnum = {
  FUZZ_VALUE0: 0,
  FUZZ_VALUE1: 1,
  FUZZ_VALUE2: 2,
};

// Union: FuzzUnion
mojo.internal.Union(
    fuzz.mojom.FuzzUnionSpec, 'fuzz.mojom.FuzzUnion', {
      'fuzz_bool': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'fuzz_int8': {
        'ordinal': 1,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
      'fuzz_uint8': {
        'ordinal': 2,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'fuzz_int16': {
        'ordinal': 3,
        'type': mojo.internal.Int16,
        'nullable': false,
      },
      'fuzz_uint16': {
        'ordinal': 4,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'fuzz_int32': {
        'ordinal': 5,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'fuzz_uint32': {
        'ordinal': 6,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'fuzz_int64': {
        'ordinal': 7,
        'type': mojo.internal.Int64,
        'nullable': false,
      },
      'fuzz_uint64': {
        'ordinal': 8,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'fuzz_float': {
        'ordinal': 9,
        'type': mojo.internal.Float,
        'nullable': false,
      },
      'fuzz_double': {
        'ordinal': 10,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'fuzz_string': {
        'ordinal': 11,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'fuzz_bool_array': {
        'ordinal': 12,
        'type': mojo.internal.Array(mojo.internal.Bool, false),
        'nullable': false,
      },
      'fuzz_primitive_array': {
        'ordinal': 13,
        'type': mojo.internal.Array(mojo.internal.Int8, false),
        'nullable': false,
      },
      'fuzz_struct_array': {
        'ordinal': 14,
        'type': mojo.internal.Array(fuzz.mojom.FuzzDummyStructSpec, false),
        'nullable': false,
      },
      'fuzz_primitive_map': {
        'ordinal': 15,
        'type': mojo.internal.Map(mojo.internal.String, mojo.internal.Int8, false),
        'nullable': false,
      },
      'fuzz_array_map': {
        'ordinal': 16,
        'type': mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false),
        'nullable': false,
      },
      'fuzz_struct_map': {
        'ordinal': 17,
        'type': mojo.internal.Map(mojo.internal.String, fuzz.mojom.FuzzDummyStructSpec, false),
        'nullable': false,
      },
      'fuzz_union_map': {
        'ordinal': 18,
        'type': mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, fuzz.mojom.FuzzUnionSpec, false),
        'nullable': false,
      },
      'fuzz_complex': {
        'ordinal': 19,
        'type': mojo.internal.Array(mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(fuzz.mojom.FuzzUnionSpec, false), false), false), false),
        'nullable': true,
      },
    });

// Struct: FuzzDummyStruct
mojo.internal.Struct(
    fuzz.mojom.FuzzDummyStructSpec, 'fuzz.mojom.FuzzDummyStruct', [
      mojo.internal.StructField('dummy', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: FuzzStruct
mojo.internal.Struct(
    fuzz.mojom.FuzzStructSpec, 'fuzz.mojom.FuzzStruct', [
      mojo.internal.StructField('fuzz_bool', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fuzz_int8', 121, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint8', 122, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_int16', 116, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint16', 118, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_int32', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint32', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_int64', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint64', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_float', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_double', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_string', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fuzz_bool_array', 32, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_primitive_array', 40, 0, mojo.internal.Array(mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_primitive_map', 48, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_array_map', 56, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_union_map', 64, 0, mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, fuzz.mojom.FuzzUnionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_union_array', 72, 0, mojo.internal.Array(fuzz.mojom.FuzzUnionSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_struct_array', 80, 0, mojo.internal.Array(fuzz.mojom.FuzzStructSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_nullable_array', 88, 0, mojo.internal.Array(mojo.internal.Int8, false), null, true, 0, undefined),
      mojo.internal.StructField('fuzz_complex', 96, 0, mojo.internal.Array(mojo.internal.Map(fuzz.mojom.FuzzEnumSpec, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(fuzz.mojom.FuzzStructSpec, false), false), false), false), null, true, 0, undefined),
    ],
    [[0, 136]]);

// Interface: FuzzDummyInterface
mojo.internal.Struct(
    fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec, 'fuzz.mojom.FuzzDummyInterface_Ping_Params', [
    ],
    [{version: 0, packedSize: 8}]);

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

fuzz.mojom.FuzzDummyInterfacePtr = fuzz.mojom.FuzzDummyInterfaceRemote;
fuzz.mojom.FuzzDummyInterfaceRequest = fuzz.mojom.FuzzDummyInterfacePendingReceiver;


// Interface: FuzzInterface
mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasic_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicResp_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_Params', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgs_Params', [
      mojo.internal.StructField('a', 0, 0, fuzz.mojom.FuzzStructSpec, null, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, fuzz.mojom.FuzzStructSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsResp_Params', [
      mojo.internal.StructField('a', 0, 0, fuzz.mojom.FuzzStructSpec, null, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, fuzz.mojom.FuzzStructSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_Params', [
      mojo.internal.StructField('a', 0, 0, fuzz.mojom.FuzzStructSpec, null, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, fuzz.mojom.FuzzStructSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParams', [
    ],
    [{version: 0, packedSize: 8}]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzAssociated_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.AssociatedInterfaceRequest(fuzz.mojom.FuzzDummyInterfaceRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec,
      []);
  }

  fuzzBasicSyncResp() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec,
      fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec,
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
      fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec,
      [a, b]);
  }

  fuzzArgsSyncResp(a, b) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec,
      fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec,
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

fuzz.mojom.FuzzInterfacePtr = fuzz.mojom.FuzzInterfaceRemote;
fuzz.mojom.FuzzInterfaceRequest = fuzz.mojom.FuzzInterfacePendingReceiver;

