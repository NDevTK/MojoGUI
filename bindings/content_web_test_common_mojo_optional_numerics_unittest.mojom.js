// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/mojo_optional_numerics_unittest.mojom
// Module: content.optional_numerics_unittest.mojom

'use strict';

// Module namespace
var content = content || {};
content.optional_numerics_unittest = content.optional_numerics_unittest || {};
content.optional_numerics_unittest.optional_numerics_unittest.mojom = content.optional_numerics_unittest.optional_numerics_unittest.mojom || {};


// Enum: RegularEnum
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.RegularEnum = {
  kFoo: 0,
  kBar: 1,
};
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.RegularEnumSpec = { $: mojo.internal.Enum() };

// Struct: OptionalNumericsStruct
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.OptionalNumericsStructSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.OptionalNumericsStruct',
      packedSize: 56,
      fields: [
        { name: 'optional_bool_$flag', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_bool_$value', originalFieldName: 'optional_bool' } },
        { name: 'optional_bool_$value', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_bool_$flag', originalFieldName: 'optional_bool' } },
        { name: 'optional_uint8_$flag', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint8_$value', originalFieldName: 'optional_uint8' } },
        { name: 'optional_uint8_$value', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint8_$flag', originalFieldName: 'optional_uint8' } },
        { name: 'optional_int8_$flag', packedOffset: 44, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int8_$value', originalFieldName: 'optional_int8' } },
        { name: 'optional_int8_$value', packedOffset: 46, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int8_$flag', originalFieldName: 'optional_int8' } },
        { name: 'optional_uint16_$flag', packedOffset: 44, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint16_$value', originalFieldName: 'optional_uint16' } },
        { name: 'optional_uint16_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint16_$flag', originalFieldName: 'optional_uint16' } },
        { name: 'optional_int16_$flag', packedOffset: 44, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int16_$value', originalFieldName: 'optional_int16' } },
        { name: 'optional_int16_$value', packedOffset: 42, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int16_$flag', originalFieldName: 'optional_int16' } },
        { name: 'optional_uint32_$flag', packedOffset: 44, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint32_$value', originalFieldName: 'optional_uint32' } },
        { name: 'optional_uint32_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint32_$flag', originalFieldName: 'optional_uint32' } },
        { name: 'optional_int32_$flag', packedOffset: 44, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int32_$value', originalFieldName: 'optional_int32' } },
        { name: 'optional_int32_$value', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int32_$flag', originalFieldName: 'optional_int32' } },
        { name: 'optional_uint64_$flag', packedOffset: 47, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint64_$value', originalFieldName: 'optional_uint64' } },
        { name: 'optional_uint64_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint64_$flag', originalFieldName: 'optional_uint64' } },
        { name: 'optional_int64_$flag', packedOffset: 47, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int64_$value', originalFieldName: 'optional_int64' } },
        { name: 'optional_int64_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int64_$flag', originalFieldName: 'optional_int64' } },
        { name: 'optional_float_$flag', packedOffset: 47, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_float_$value', originalFieldName: 'optional_float' } },
        { name: 'optional_float_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_float_$flag', originalFieldName: 'optional_float' } },
        { name: 'optional_double_$flag', packedOffset: 47, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_double_$value', originalFieldName: 'optional_double' } },
        { name: 'optional_double_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_double_$flag', originalFieldName: 'optional_double' } },
        { name: 'optional_enum', packedOffset: 36, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Struct: VersionedStructV0
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.VersionedStructV0Spec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.VersionedStructV0',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Struct: VersionedStructV2
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.VersionedStructV2Spec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.VersionedStructV2',
      packedSize: 56,
      fields: [
        { name: 'bool_value_$flag', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'bool_value_$value', originalFieldName: 'bool_value' } },
        { name: 'bool_value_$value', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'bool_value_$flag', originalFieldName: 'bool_value' } },
        { name: 'uint8_value_$flag', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint8_value_$value', originalFieldName: 'uint8_value' } },
        { name: 'uint8_value_$value', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint8_value_$flag', originalFieldName: 'uint8_value' } },
        { name: 'int8_value_$flag', packedOffset: 44, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int8_value_$value', originalFieldName: 'int8_value' } },
        { name: 'int8_value_$value', packedOffset: 46, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int8_value_$flag', originalFieldName: 'int8_value' } },
        { name: 'uint16_value_$flag', packedOffset: 44, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint16_value_$value', originalFieldName: 'uint16_value' } },
        { name: 'uint16_value_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint16_value_$flag', originalFieldName: 'uint16_value' } },
        { name: 'int16_value_$flag', packedOffset: 44, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int16_value_$value', originalFieldName: 'int16_value' } },
        { name: 'int16_value_$value', packedOffset: 42, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int16_value_$flag', originalFieldName: 'int16_value' } },
        { name: 'uint32_value_$flag', packedOffset: 44, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint32_value_$value', originalFieldName: 'uint32_value' } },
        { name: 'uint32_value_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint32_value_$flag', originalFieldName: 'uint32_value' } },
        { name: 'int32_value_$flag', packedOffset: 44, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int32_value_$value', originalFieldName: 'int32_value' } },
        { name: 'int32_value_$value', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int32_value_$flag', originalFieldName: 'int32_value' } },
        { name: 'uint64_value_$flag', packedOffset: 47, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint64_value_$value', originalFieldName: 'uint64_value' } },
        { name: 'uint64_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint64_value_$flag', originalFieldName: 'uint64_value' } },
        { name: 'int64_value_$flag', packedOffset: 47, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int64_value_$value', originalFieldName: 'int64_value' } },
        { name: 'int64_value_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int64_value_$flag', originalFieldName: 'int64_value' } },
        { name: 'float_value_$flag', packedOffset: 47, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'float_value_$value', originalFieldName: 'float_value' } },
        { name: 'float_value_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'float_value_$flag', originalFieldName: 'float_value' } },
        { name: 'double_value_$flag', packedOffset: 47, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'double_value_$value', originalFieldName: 'double_value' } },
        { name: 'double_value_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'double_value_$flag', originalFieldName: 'double_value' } },
        { name: 'enum_value', packedOffset: 36, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 56}]
    }
  }
};

// Interface: Params
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params = {};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsRemote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.Params';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsPendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  sendNullBool(optional_bool) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullBool_ParamsSpec,
      null,
      [optional_bool]);
  }

  sendNullUint8(optional_uint8) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint8_ParamsSpec,
      null,
      [optional_uint8]);
  }

  sendNullInt8(optional_int8) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt8_ParamsSpec,
      null,
      [optional_int8]);
  }

  sendNullUint16(optional_uint16) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint16_ParamsSpec,
      null,
      [optional_uint16]);
  }

  sendNullInt16(optional_int16) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt16_ParamsSpec,
      null,
      [optional_int16]);
  }

  sendNullUint32(optional_uint32) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint32_ParamsSpec,
      null,
      [optional_uint32]);
  }

  sendNullInt32(optional_int32) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt32_ParamsSpec,
      null,
      [optional_int32]);
  }

  sendNullUint64(optional_uint64) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint64_ParamsSpec,
      null,
      [optional_uint64]);
  }

  sendNullInt64(optional_int64) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt64_ParamsSpec,
      null,
      [optional_int64]);
  }

  sendNullFloat(optional_float) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullFloat_ParamsSpec,
      null,
      [optional_float]);
  }

  sendNullDouble(optional_double) {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullDouble_ParamsSpec,
      null,
      [optional_double]);
  }

  sendNullEnum(optional_enum) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullEnum_ParamsSpec,
      null,
      [optional_enum]);
  }

  sendNullBools(optional_bools) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullBools_ParamsSpec,
      null,
      [optional_bools]);
  }

  sendNullInt16s(optional_int16s) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt16s_ParamsSpec,
      null,
      [optional_int16s]);
  }

  sendNullUint32s(optional_uint32s) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint32s_ParamsSpec,
      null,
      [optional_uint32s]);
  }

  sendNullDoubles(optional_doubles) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullDoubles_ParamsSpec,
      null,
      [optional_doubles]);
  }

  sendNullEnums(optional_enums) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullEnums_ParamsSpec,
      null,
      [optional_enums]);
  }

  sendNullBoolMap(values) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullBoolMap_ParamsSpec,
      null,
      [values]);
  }

  sendNullDoubleMap(values) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullDoubleMap_ParamsSpec,
      null,
      [values]);
  }

  sendNullEnumMap(values) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullEnumMap_ParamsSpec,
      null,
      [values]);
  }

  sendOptionalBool(optional_bool) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBool_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBool_ResponseParamsSpec,
      [optional_bool]);
  }

  sendOptionalUint8(optional_uint8) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint8_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint8_ResponseParamsSpec,
      [optional_uint8]);
  }

  sendOptionalInt8(optional_int8) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt8_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt8_ResponseParamsSpec,
      [optional_int8]);
  }

  sendOptionalUint16(optional_uint16) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint16_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint16_ResponseParamsSpec,
      [optional_uint16]);
  }

  sendOptionalInt16(optional_int16) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16_ResponseParamsSpec,
      [optional_int16]);
  }

  sendOptionalUint32(optional_uint32) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32_ResponseParamsSpec,
      [optional_uint32]);
  }

  sendOptionalInt32(optional_int32) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt32_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt32_ResponseParamsSpec,
      [optional_int32]);
  }

  sendOptionalUint64(optional_uint64) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint64_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint64_ResponseParamsSpec,
      [optional_uint64]);
  }

  sendOptionalInt64(optional_int64) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt64_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt64_ResponseParamsSpec,
      [optional_int64]);
  }

  sendOptionalFloat(optional_float) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalFloat_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalFloat_ResponseParamsSpec,
      [optional_float]);
  }

  sendOptionalDouble(optional_double) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDouble_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDouble_ResponseParamsSpec,
      [optional_double]);
  }

  sendOptionalEnum(optional_enum) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnum_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnum_ResponseParamsSpec,
      [optional_enum]);
  }

  sendOptionalBools(optional_enums) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBools_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBools_ResponseParamsSpec,
      [optional_enums]);
  }

  sendOptionalInt16s(optional_int16s) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16s_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16s_ResponseParamsSpec,
      [optional_int16s]);
  }

  sendOptionalUint32s(optional_uint32s) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32s_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32s_ResponseParamsSpec,
      [optional_uint32s]);
  }

  sendOptionalDoubles(optional_doubles) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubles_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubles_ResponseParamsSpec,
      [optional_doubles]);
  }

  sendOptionalEnums(optional_enums) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnums_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnums_ResponseParamsSpec,
      [optional_enums]);
  }

  sendOptionalBoolMap(values) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBoolMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBoolMap_ResponseParamsSpec,
      [values]);
  }

  sendOptionalDoubleMap(values) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubleMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubleMap_ResponseParamsSpec,
      [values]);
  }

  sendOptionalEnumMap(values) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnumMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnumMap_ResponseParamsSpec,
      [values]);
  }

  sendNullStructWithOptionalNumerics(s) {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullStructWithOptionalNumerics_ParamsSpec,
      null,
      [s]);
  }

  sendStructWithNullOptionalNumerics(s) {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendStructWithNullOptionalNumerics_ParamsSpec,
      null,
      [s]);
  }

  sendStructWithOptionalNumerics(s) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendStructWithOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendStructWithOptionalNumerics_ResponseParamsSpec,
      [s]);
  }

};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params.getRemote = function() {
  let remote = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.Params',
    'context');
  return remote.$;
};

// ParamsSpec for SendNullBool
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullBool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullBool_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_bool_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_bool_$value', originalFieldName: 'optional_bool' } },
        { name: 'optional_bool_$value', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_bool_$flag', originalFieldName: 'optional_bool' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullUint8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullUint8_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint8_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint8_$value', originalFieldName: 'optional_uint8' } },
        { name: 'optional_uint8_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint8_$flag', originalFieldName: 'optional_uint8' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullInt8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullInt8_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int8_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int8_$value', originalFieldName: 'optional_int8' } },
        { name: 'optional_int8_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int8_$flag', originalFieldName: 'optional_int8' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullUint16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullUint16_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint16_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint16_$value', originalFieldName: 'optional_uint16' } },
        { name: 'optional_uint16_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint16_$flag', originalFieldName: 'optional_uint16' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullInt16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullInt16_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int16_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int16_$value', originalFieldName: 'optional_int16' } },
        { name: 'optional_int16_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int16_$flag', originalFieldName: 'optional_int16' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullUint32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullUint32_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint32_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint32_$value', originalFieldName: 'optional_uint32' } },
        { name: 'optional_uint32_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint32_$flag', originalFieldName: 'optional_uint32' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullInt32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullInt32_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int32_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int32_$value', originalFieldName: 'optional_int32' } },
        { name: 'optional_int32_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int32_$flag', originalFieldName: 'optional_int32' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullUint64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullUint64_Params',
      packedSize: 24,
      fields: [
        { name: 'optional_uint64_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint64_$value', originalFieldName: 'optional_uint64' } },
        { name: 'optional_uint64_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint64_$flag', originalFieldName: 'optional_uint64' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendNullInt64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullInt64_Params',
      packedSize: 24,
      fields: [
        { name: 'optional_int64_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int64_$value', originalFieldName: 'optional_int64' } },
        { name: 'optional_int64_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int64_$flag', originalFieldName: 'optional_int64' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendNullFloat
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullFloat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullFloat_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_float_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_float_$value', originalFieldName: 'optional_float' } },
        { name: 'optional_float_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_float_$flag', originalFieldName: 'optional_float' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullDouble
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullDouble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullDouble_Params',
      packedSize: 24,
      fields: [
        { name: 'optional_double_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_double_$value', originalFieldName: 'optional_double' } },
        { name: 'optional_double_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_double_$flag', originalFieldName: 'optional_double' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for SendNullEnum
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullEnum_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullEnum_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_enum', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullBools
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullBools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullBools_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_bools', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullInt16s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullInt16s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullInt16s_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int16s', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int16, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullUint32s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullUint32s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullUint32s_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint32s', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullDoubles
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullDoubles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullDoubles_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_doubles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullEnums
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullEnums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullEnums_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_enums', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullBoolMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullBoolMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullBoolMap_Params',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullDoubleMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullDoubleMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullDoubleMap_Params',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Double, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullEnumMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullEnumMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullEnumMap_Params',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalBool
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalBool_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_bool_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_bool_$value', originalFieldName: 'optional_bool' } },
        { name: 'optional_bool_$value', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_bool_$flag', originalFieldName: 'optional_bool' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBool_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalBool_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalUint8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint8_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint8_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint8_$value', originalFieldName: 'optional_uint8' } },
        { name: 'optional_uint8_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint8_$flag', originalFieldName: 'optional_uint8' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint8_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint8_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalInt8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt8_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int8_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int8_$value', originalFieldName: 'optional_int8' } },
        { name: 'optional_int8_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int8_$flag', originalFieldName: 'optional_int8' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt8_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt8_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalUint16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint16_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint16_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint16_$value', originalFieldName: 'optional_uint16' } },
        { name: 'optional_uint16_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint16_$flag', originalFieldName: 'optional_uint16' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint16_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint16_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalInt16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt16_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int16_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int16_$value', originalFieldName: 'optional_int16' } },
        { name: 'optional_int16_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int16_$flag', originalFieldName: 'optional_int16' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt16_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalUint32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint32_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint32_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint32_$value', originalFieldName: 'optional_uint32' } },
        { name: 'optional_uint32_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint32_$flag', originalFieldName: 'optional_uint32' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint32_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalInt32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt32_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int32_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int32_$value', originalFieldName: 'optional_int32' } },
        { name: 'optional_int32_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int32_$flag', originalFieldName: 'optional_int32' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt32_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt32_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalUint64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint64_Params',
      packedSize: 24,
      fields: [
        { name: 'optional_uint64_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_uint64_$value', originalFieldName: 'optional_uint64' } },
        { name: 'optional_uint64_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_uint64_$flag', originalFieldName: 'optional_uint64' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint64_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint64_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalInt64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt64_Params',
      packedSize: 24,
      fields: [
        { name: 'optional_int64_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_int64_$value', originalFieldName: 'optional_int64' } },
        { name: 'optional_int64_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_int64_$flag', originalFieldName: 'optional_int64' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt64_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt64_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalFloat
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalFloat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalFloat_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_float_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_float_$value', originalFieldName: 'optional_float' } },
        { name: 'optional_float_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_float_$flag', originalFieldName: 'optional_float' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalFloat_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalFloat_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalDouble
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDouble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalDouble_Params',
      packedSize: 24,
      fields: [
        { name: 'optional_double_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_double_$value', originalFieldName: 'optional_double' } },
        { name: 'optional_double_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_double_$flag', originalFieldName: 'optional_double' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDouble_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalDouble_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalEnum
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnum_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalEnum_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_enum', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnum_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalEnum_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalBools
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalBools_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_enums', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBools_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalBools_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalInt16s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt16s_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_int16s', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int16, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalInt16s_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalInt16s_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int16, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalUint32s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint32s_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_uint32s', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalUint32s_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalUint32s_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalDoubles
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalDoubles_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_doubles', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalDoubles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalEnums
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalEnums_Params',
      packedSize: 16,
      fields: [
        { name: 'optional_enums', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnums_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalEnums_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalBoolMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBoolMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalBoolMap_Params',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalBoolMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalBoolMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Bool, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalDoubleMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubleMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalDoubleMap_Params',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Double, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalDoubleMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalDoubleMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, mojo.internal.Double, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendOptionalEnumMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnumMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalEnumMap_Params',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendOptionalEnumMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendOptionalEnumMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int32, content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendNullStructWithOptionalNumerics
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendNullStructWithOptionalNumerics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendNullStructWithOptionalNumerics_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendStructWithNullOptionalNumerics
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendStructWithNullOptionalNumerics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendStructWithNullOptionalNumerics_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for SendStructWithOptionalNumerics
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendStructWithOptionalNumerics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendStructWithOptionalNumerics_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.Params_SendStructWithOptionalNumerics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.Params.SendStructWithOptionalNumerics_ResponseParams',
      packedSize: 56,
      fields: [
        { name: 'bool_value', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uint8_value', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'int8_value', packedOffset: 46, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
        { name: 'uint16_value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'int16_value', packedOffset: 42, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'uint32_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'int32_value', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'uint64_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'int64_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'float_value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'double_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'enum_value', packedOffset: 36, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Legacy compatibility
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsPtr = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsRemote;
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsRequest = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ParamsPendingReceiver;


// Interface: ResponseParams
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams = {};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsRemote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.ResponseParams';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsPendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getNullBool() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBool_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBool_ResponseParamsSpec,
      []);
  }

  getNullUint8() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint8_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint8_ResponseParamsSpec,
      []);
  }

  getNullInt8() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt8_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt8_ResponseParamsSpec,
      []);
  }

  getNullUint16() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint16_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint16_ResponseParamsSpec,
      []);
  }

  getNullInt16() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16_ResponseParamsSpec,
      []);
  }

  getNullUint32() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32_ResponseParamsSpec,
      []);
  }

  getNullInt32() {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32_ResponseParamsSpec,
      []);
  }

  getNullUint64() {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint64_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint64_ResponseParamsSpec,
      []);
  }

  getNullInt64() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt64_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt64_ResponseParamsSpec,
      []);
  }

  getNullFloat() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullFloat_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullFloat_ResponseParamsSpec,
      []);
  }

  getNullDouble() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDouble_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDouble_ResponseParamsSpec,
      []);
  }

  getNullEnum() {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnum_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnum_ResponseParamsSpec,
      []);
  }

  getNullBools() {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBools_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBools_ResponseParamsSpec,
      []);
  }

  getNullInt16s() {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16s_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16s_ResponseParamsSpec,
      []);
  }

  getNullUint32s() {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32s_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32s_ResponseParamsSpec,
      []);
  }

  getNullDoubles() {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDoubles_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDoubles_ResponseParamsSpec,
      []);
  }

  getNullEnums() {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnums_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnums_ResponseParamsSpec,
      []);
  }

  getNullBoolMap() {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBoolMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBoolMap_ResponseParamsSpec,
      []);
  }

  getNullInt32Map() {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32Map_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32Map_ResponseParamsSpec,
      []);
  }

  getNullEnumMap() {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnumMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnumMap_ResponseParamsSpec,
      []);
  }

  getOptionalBool(value) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBool_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBool_ResponseParamsSpec,
      [value]);
  }

  getOptionalUint8(value) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint8_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint8_ResponseParamsSpec,
      [value]);
  }

  getOptionalInt8(value) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt8_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt8_ResponseParamsSpec,
      [value]);
  }

  getOptionalUint16(value) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint16_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint16_ResponseParamsSpec,
      [value]);
  }

  getOptionalInt16(value) {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16_ResponseParamsSpec,
      [value]);
  }

  getOptionalUint32(value) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32_ResponseParamsSpec,
      [value]);
  }

  getOptionalInt32(value) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt32_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt32_ResponseParamsSpec,
      [value]);
  }

  getOptionalUint64(value) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint64_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint64_ResponseParamsSpec,
      [value]);
  }

  getOptionalInt64(value) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt64_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt64_ResponseParamsSpec,
      [value]);
  }

  getOptionalFloat(value) {
    // Ordinal: 29
    return this.proxy.sendMessage(
      29,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloat_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloat_ResponseParamsSpec,
      [value]);
  }

  getOptionalDouble(value) {
    // Ordinal: 30
    return this.proxy.sendMessage(
      30,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDouble_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDouble_ResponseParamsSpec,
      [value]);
  }

  getOptionalEnum(value) {
    // Ordinal: 31
    return this.proxy.sendMessage(
      31,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnum_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnum_ResponseParamsSpec,
      [value]);
  }

  getOptionalBools(value) {
    // Ordinal: 32
    return this.proxy.sendMessage(
      32,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBools_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBools_ResponseParamsSpec,
      [value]);
  }

  getOptionalInt16s(value) {
    // Ordinal: 33
    return this.proxy.sendMessage(
      33,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16s_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16s_ResponseParamsSpec,
      [value]);
  }

  getOptionalUint32s(value) {
    // Ordinal: 34
    return this.proxy.sendMessage(
      34,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32s_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32s_ResponseParamsSpec,
      [value]);
  }

  getOptionalDoubles(value) {
    // Ordinal: 35
    return this.proxy.sendMessage(
      35,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDoubles_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDoubles_ResponseParamsSpec,
      [value]);
  }

  getOptionalEnums(value) {
    // Ordinal: 36
    return this.proxy.sendMessage(
      36,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnums_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnums_ResponseParamsSpec,
      [value]);
  }

  getOptionalBoolMap(key, value) {
    // Ordinal: 37
    return this.proxy.sendMessage(
      37,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBoolMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBoolMap_ResponseParamsSpec,
      [key, value]);
  }

  getOptionalFloatMap(key, value) {
    // Ordinal: 38
    return this.proxy.sendMessage(
      38,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloatMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloatMap_ResponseParamsSpec,
      [key, value]);
  }

  getOptionalEnumMap(key, value) {
    // Ordinal: 39
    return this.proxy.sendMessage(
      39,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnumMap_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnumMap_ResponseParamsSpec,
      [key, value]);
  }

  getNullStructWithOptionalNumerics() {
    // Ordinal: 40
    return this.proxy.sendMessage(
      40,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ResponseParamsSpec,
      []);
  }

  getStructWithNullOptionalNumerics() {
    // Ordinal: 41
    return this.proxy.sendMessage(
      41,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ResponseParamsSpec,
      []);
  }

  getStructWithOptionalNumerics(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value) {
    // Ordinal: 42
    return this.proxy.sendMessage(
      42,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithOptionalNumerics_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithOptionalNumerics_ResponseParamsSpec,
      [bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value]);
  }

};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams.getRemote = function() {
  let remote = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.ResponseParams',
    'context');
  return remote.$;
};

// ParamsSpec for GetNullBool
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullBool_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBool_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullBool_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullUint8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint8_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint8_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint8_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullInt8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt8_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt8_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt8_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullUint16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint16_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint16_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint16_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullInt16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt16_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt16_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullUint32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint32_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint32_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullInt32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt32_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt32_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullUint64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint64_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint64_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint64_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetNullInt64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt64_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt64_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt64_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetNullFloat
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullFloat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullFloat_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullFloat_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullFloat_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullDouble
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDouble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullDouble_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDouble_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullDouble_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetNullEnum
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnum_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullEnum_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnum_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullEnum_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullBools
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullBools_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBools_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullBools_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullInt16s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt16s_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt16s_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt16s_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int16, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullUint32s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint32s_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullUint32s_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullUint32s_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullDoubles
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDoubles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullDoubles_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullDoubles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullDoubles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullEnums
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullEnums_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnums_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullEnums_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullBoolMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBoolMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullBoolMap_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullBoolMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullBoolMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int16, mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullInt32Map
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32Map_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt32Map_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullInt32Map_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullInt32Map_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int16, mojo.internal.Int32, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullEnumMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnumMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullEnumMap_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullEnumMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullEnumMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int16, content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalBool
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBool_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalBool_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBool_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalBool_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalUint8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint8_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint8_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint8_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalInt8
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt8_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt8_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt8_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt8_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 1, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalUint16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint16_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint16_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint16_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalInt16
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt16_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt16_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalUint32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint32_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint32_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalInt32
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt32_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt32_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt32_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt32_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalUint64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint64_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint64_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint64_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetOptionalInt64
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt64_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt64_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt64_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt64_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetOptionalFloat
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloat_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalFloat_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloat_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalFloat_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalDouble
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDouble_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalDouble_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDouble_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalDouble_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'optional_value_$flag', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'optional_value_$value', originalFieldName: 'optional_value' } },
        { name: 'optional_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'optional_value_$flag', originalFieldName: 'optional_value' } },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for GetOptionalEnum
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnum_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalEnum_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnum_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalEnum_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_value', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalBools
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBools_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalBools_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBools_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalBools_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalInt16s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt16s_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalInt16s_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalInt16s_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Int16, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalUint32s
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32s_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint32s_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalUint32s_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalUint32s_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Uint32, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalDoubles
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDoubles_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalDoubles_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalDoubles_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalDoubles_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.Double, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalEnums
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnums_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalEnums_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnums_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalEnums_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalBoolMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBoolMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalBoolMap_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalBoolMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalBoolMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int16, mojo.internal.Bool, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalFloatMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloatMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalFloatMap_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalFloatMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalFloatMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int16, mojo.internal.Float, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetOptionalEnumMap
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnumMap_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalEnumMap_Params',
      packedSize: 16,
      fields: [
        { name: 'key', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetOptionalEnumMap_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetOptionalEnumMap_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'optional_values', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.Int16, content.optional_numerics_unittest.mojom.RegularEnumSpec, false), nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetNullStructWithOptionalNumerics
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullStructWithOptionalNumerics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetNullStructWithOptionalNumerics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetNullStructWithOptionalNumerics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStructWithNullOptionalNumerics
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetStructWithNullOptionalNumerics_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithNullOptionalNumerics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetStructWithNullOptionalNumerics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetStructWithOptionalNumerics
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithOptionalNumerics_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetStructWithOptionalNumerics_Params',
      packedSize: 56,
      fields: [
        { name: 'bool_value', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'uint8_value', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'int8_value', packedOffset: 46, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 0 },
        { name: 'uint16_value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'int16_value', packedOffset: 42, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 0 },
        { name: 'uint32_value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'int32_value', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'uint64_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
        { name: 'int64_value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'float_value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
        { name: 'double_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'enum_value', packedOffset: 36, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParams_GetStructWithOptionalNumerics_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.ResponseParams.GetStructWithOptionalNumerics_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.OptionalNumericsStructSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsPtr = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsRemote;
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsRequest = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.ResponseParamsPendingReceiver;


// Interface: InterfaceV0
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0 = {};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0Remote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.InterfaceV0';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0PendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  methodWithVersionedParams() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0_MethodWithVersionedParams_ParamsSpec,
      null,
      []);
  }

  methodWithVersionedStruct(s) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0_MethodWithVersionedStruct_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0_MethodWithVersionedStruct_ResponseParamsSpec,
      [s]);
  }

};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0.getRemote = function() {
  let remote = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.InterfaceV0',
    'context');
  return remote.$;
};

// ParamsSpec for MethodWithVersionedParams
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0_MethodWithVersionedParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.InterfaceV0.MethodWithVersionedParams_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for MethodWithVersionedStruct
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0_MethodWithVersionedStruct_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.InterfaceV0.MethodWithVersionedStruct_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.VersionedStructV0Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0_MethodWithVersionedStruct_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.InterfaceV0.MethodWithVersionedStruct_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.VersionedStructV0Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0Ptr = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0Remote;
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0Request = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV0PendingReceiver;


// Interface: InterfaceV2
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2 = {};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2PendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2Remote = class {
  static get $interfaceName() {
    return 'content.optional_numerics_unittest.mojom.InterfaceV2';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2PendingReceiver,
      handle);
    this.$ = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2RemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2RemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  methodWithVersionedParams(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedParams_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedParams_ResponseParamsSpec,
      [bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value]);
  }

  methodWithVersionedStruct(s) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedStruct_ParamsSpec,
      content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedStruct_ResponseParamsSpec,
      [s]);
  }

};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2.getRemote = function() {
  let remote = new content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2Remote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.optional_numerics_unittest.mojom.InterfaceV2',
    'context');
  return remote.$;
};

// ParamsSpec for MethodWithVersionedParams
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedParams_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.InterfaceV2.MethodWithVersionedParams_Params',
      packedSize: 56,
      fields: [
        { name: 'bool_value_$flag', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'bool_value_$value', originalFieldName: 'bool_value' } },
        { name: 'bool_value_$value', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'bool_value_$flag', originalFieldName: 'bool_value' } },
        { name: 'uint8_value_$flag', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint8_value_$value', originalFieldName: 'uint8_value' } },
        { name: 'uint8_value_$value', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint8_value_$flag', originalFieldName: 'uint8_value' } },
        { name: 'int8_value_$flag', packedOffset: 44, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int8_value_$value', originalFieldName: 'int8_value' } },
        { name: 'int8_value_$value', packedOffset: 46, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int8_value_$flag', originalFieldName: 'int8_value' } },
        { name: 'uint16_value_$flag', packedOffset: 44, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint16_value_$value', originalFieldName: 'uint16_value' } },
        { name: 'uint16_value_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint16_value_$flag', originalFieldName: 'uint16_value' } },
        { name: 'int16_value_$flag', packedOffset: 44, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int16_value_$value', originalFieldName: 'int16_value' } },
        { name: 'int16_value_$value', packedOffset: 42, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int16_value_$flag', originalFieldName: 'int16_value' } },
        { name: 'uint32_value_$flag', packedOffset: 44, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint32_value_$value', originalFieldName: 'uint32_value' } },
        { name: 'uint32_value_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint32_value_$flag', originalFieldName: 'uint32_value' } },
        { name: 'int32_value_$flag', packedOffset: 44, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int32_value_$value', originalFieldName: 'int32_value' } },
        { name: 'int32_value_$value', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int32_value_$flag', originalFieldName: 'int32_value' } },
        { name: 'uint64_value_$flag', packedOffset: 47, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint64_value_$value', originalFieldName: 'uint64_value' } },
        { name: 'uint64_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint64_value_$flag', originalFieldName: 'uint64_value' } },
        { name: 'int64_value_$flag', packedOffset: 47, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int64_value_$value', originalFieldName: 'int64_value' } },
        { name: 'int64_value_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int64_value_$flag', originalFieldName: 'int64_value' } },
        { name: 'float_value_$flag', packedOffset: 47, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'float_value_$value', originalFieldName: 'float_value' } },
        { name: 'float_value_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'float_value_$flag', originalFieldName: 'float_value' } },
        { name: 'double_value_$flag', packedOffset: 47, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'double_value_$value', originalFieldName: 'double_value' } },
        { name: 'double_value_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'double_value_$flag', originalFieldName: 'double_value' } },
        { name: 'enum_value', packedOffset: 36, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 56}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedParams_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.InterfaceV2.MethodWithVersionedParams_ResponseParams',
      packedSize: 56,
      fields: [
        { name: 'bool_value_$flag', packedOffset: 44, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'bool_value_$value', originalFieldName: 'bool_value' } },
        { name: 'bool_value_$value', packedOffset: 44, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'bool_value_$flag', originalFieldName: 'bool_value' } },
        { name: 'uint8_value_$flag', packedOffset: 44, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint8_value_$value', originalFieldName: 'uint8_value' } },
        { name: 'uint8_value_$value', packedOffset: 45, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint8_value_$flag', originalFieldName: 'uint8_value' } },
        { name: 'int8_value_$flag', packedOffset: 44, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int8_value_$value', originalFieldName: 'int8_value' } },
        { name: 'int8_value_$value', packedOffset: 46, packedBitOffset: 0, type: mojo.internal.Int8, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int8_value_$flag', originalFieldName: 'int8_value' } },
        { name: 'uint16_value_$flag', packedOffset: 44, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint16_value_$value', originalFieldName: 'uint16_value' } },
        { name: 'uint16_value_$value', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint16_value_$flag', originalFieldName: 'uint16_value' } },
        { name: 'int16_value_$flag', packedOffset: 44, packedBitOffset: 5, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int16_value_$value', originalFieldName: 'int16_value' } },
        { name: 'int16_value_$value', packedOffset: 42, packedBitOffset: 0, type: mojo.internal.Int16, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int16_value_$flag', originalFieldName: 'int16_value' } },
        { name: 'uint32_value_$flag', packedOffset: 44, packedBitOffset: 6, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint32_value_$value', originalFieldName: 'uint32_value' } },
        { name: 'uint32_value_$value', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint32_value_$flag', originalFieldName: 'uint32_value' } },
        { name: 'int32_value_$flag', packedOffset: 44, packedBitOffset: 7, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int32_value_$value', originalFieldName: 'int32_value' } },
        { name: 'int32_value_$value', packedOffset: 28, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int32_value_$flag', originalFieldName: 'int32_value' } },
        { name: 'uint64_value_$flag', packedOffset: 47, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'uint64_value_$value', originalFieldName: 'uint64_value' } },
        { name: 'uint64_value_$value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'uint64_value_$flag', originalFieldName: 'uint64_value' } },
        { name: 'int64_value_$flag', packedOffset: 47, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'int64_value_$value', originalFieldName: 'int64_value' } },
        { name: 'int64_value_$value', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'int64_value_$flag', originalFieldName: 'int64_value' } },
        { name: 'float_value_$flag', packedOffset: 47, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'float_value_$value', originalFieldName: 'float_value' } },
        { name: 'float_value_$value', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'float_value_$flag', originalFieldName: 'float_value' } },
        { name: 'double_value_$flag', packedOffset: 47, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'double_value_$value', originalFieldName: 'double_value' } },
        { name: 'double_value_$value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 2, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'double_value_$flag', originalFieldName: 'double_value' } },
        { name: 'enum_value', packedOffset: 36, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.RegularEnumSpec, nullable: true, minVersion: 2 },
      ],
      versions: [{version: 2, packedSize: 56}]
    }
  }
};

// ParamsSpec for MethodWithVersionedStruct
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedStruct_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.InterfaceV2.MethodWithVersionedStruct_Params',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.VersionedStructV2Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2_MethodWithVersionedStruct_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.optional_numerics_unittest.mojom.InterfaceV2.MethodWithVersionedStruct_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 's', packedOffset: 0, packedBitOffset: 0, type: content.optional_numerics_unittest.mojom.VersionedStructV2Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2Ptr = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2Remote;
content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2Request = content.optional_numerics_unittest.optional_numerics_unittest.mojom.mojom.InterfaceV2PendingReceiver;

