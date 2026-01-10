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
        'type': mojo.internal.Array(fuzz.mojom.FuzzDummyStructSpec.$, false),
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
        'type': mojo.internal.Map(mojo.internal.String, fuzz.mojom.FuzzDummyStructSpec.$, false),
        'nullable': false,
      },
      'fuzz_union_map': {
        'ordinal': 18,
        'type': mojo.internal.Map(fuzz.mojom.FuzzEnumSpec.$, fuzz.mojom.FuzzUnionSpec.$, false),
        'nullable': false,
      },
      'fuzz_complex': {
        'ordinal': 19,
        'type': mojo.internal.Array(mojo.internal.Map(fuzz.mojom.FuzzEnumSpec.$, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(fuzz.mojom.FuzzUnionSpec.$, false), false), false), false),
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
      mojo.internal.StructField('fuzz_int64', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint64', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_double', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_string', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('fuzz_bool_array', 32, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_primitive_array', 40, 0, mojo.internal.Array(mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_primitive_map', 48, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Int8, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_array_map', 56, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.Array(mojo.internal.String, false), false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_union_map', 64, 0, mojo.internal.Map(fuzz.mojom.FuzzEnumSpec.$, fuzz.mojom.FuzzUnionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_union_array', 72, 0, mojo.internal.Array(fuzz.mojom.FuzzUnionSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_struct_array', 80, 0, mojo.internal.Array(fuzz.mojom.FuzzStructSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('fuzz_nullable_array', 88, 0, mojo.internal.Array(mojo.internal.Int8, false), null, true, 0, undefined),
      mojo.internal.StructField('fuzz_complex', 96, 0, mojo.internal.Array(mojo.internal.Map(fuzz.mojom.FuzzEnumSpec.$, mojo.internal.Map(mojo.internal.Int8, mojo.internal.Array(fuzz.mojom.FuzzStructSpec.$, false), false), false), false), null, true, 0, undefined),
      mojo.internal.StructField('fuzz_int32', 104, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint32', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_float', 112, 0, mojo.internal.Float, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_int16', 116, 0, mojo.internal.Int16, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint16', 118, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_bool', 120, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('fuzz_int8', 121, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('fuzz_uint8', 122, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 136]]);

// Interface: FuzzDummyInterface
mojo.internal.Struct(
    fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec, 'fuzz.mojom.FuzzDummyInterface_Ping_Params', [
    ],
    [[0, 8]]);

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
      [],
      false);
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

fuzz.mojom.FuzzDummyInterfaceReceiver = class {
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
        
        // Try Method 0: Ping
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Ping (0)');
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
          const params = decoder.decodeStruct(fuzz.mojom.FuzzDummyInterface_Ping_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.ping');
          const result = this.impl.ping();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

fuzz.mojom.FuzzDummyInterfaceReceiver = fuzz.mojom.FuzzDummyInterfaceReceiver;

fuzz.mojom.FuzzDummyInterfacePtr = fuzz.mojom.FuzzDummyInterfaceRemote;
fuzz.mojom.FuzzDummyInterfaceRequest = fuzz.mojom.FuzzDummyInterfacePendingReceiver;


// Interface: FuzzInterface
mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasic_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicResp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgs_Params', [
      mojo.internal.StructField('a', 0, 0, fuzz.mojom.FuzzStructSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, fuzz.mojom.FuzzStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsResp_Params', [
      mojo.internal.StructField('a', 0, 0, fuzz.mojom.FuzzStructSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, fuzz.mojom.FuzzStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_Params', [
      mojo.internal.StructField('a', 0, 0, fuzz.mojom.FuzzStructSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('b', 8, 0, fuzz.mojom.FuzzStructSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec, 'fuzz.mojom.FuzzInterface_FuzzAssociated_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
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
      [],
      false);
  }

  fuzzBasicResp() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec,
      fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec,
      [],
      false);
  }

  fuzzBasicSyncResp() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec,
      fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec,
      [],
      false);
  }

  fuzzArgs(a, b) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec,
      null,
      [a, b],
      false);
  }

  fuzzArgsResp(a, b) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec,
      fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec,
      [a, b],
      false);
  }

  fuzzArgsSyncResp(a, b) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec,
      fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec,
      [a, b],
      false);
  }

  fuzzAssociated(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec,
      null,
      [receiver],
      false);
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

fuzz.mojom.FuzzInterfaceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        
        // Try Method 0: FuzzBasic
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzBasic (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: FuzzBasicResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzBasicResp (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: FuzzBasicSyncResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzBasicSyncResp (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: FuzzArgs
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzArgs (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: FuzzArgsResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzArgsResp (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: FuzzArgsSyncResp
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzArgsSyncResp (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: FuzzAssociated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> FuzzAssociated (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzBasic_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fuzzBasic');
          const result = this.impl.fuzzBasic();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzBasicResp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fuzzBasicResp');
          const result = this.impl.fuzzBasicResp();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, fuzz.mojom.FuzzInterface_FuzzBasicResp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fuzzBasicSyncResp');
          const result = this.impl.fuzzBasicSyncResp();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, fuzz.mojom.FuzzInterface_FuzzBasicSyncResp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzArgs_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fuzzArgs');
          const result = this.impl.fuzzArgs(params.a, params.b);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzArgsResp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fuzzArgsResp');
          const result = this.impl.fuzzArgsResp(params.a, params.b);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, fuzz.mojom.FuzzInterface_FuzzArgsResp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fuzzArgsSyncResp');
          const result = this.impl.fuzzArgsSyncResp(params.a, params.b);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, fuzz.mojom.FuzzInterface_FuzzArgsSyncResp_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(fuzz.mojom.FuzzInterface_FuzzAssociated_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.fuzzAssociated');
          const result = this.impl.fuzzAssociated(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

fuzz.mojom.FuzzInterfaceReceiver = fuzz.mojom.FuzzInterfaceReceiver;

fuzz.mojom.FuzzInterfacePtr = fuzz.mojom.FuzzInterfaceRemote;
fuzz.mojom.FuzzInterfaceRequest = fuzz.mojom.FuzzInterfacePendingReceiver;

