// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/mojo_optional_numerics_unittest.mojom
// Module: content.optional_numerics_unittest.mojom

'use strict';

// Module namespace
var content = content || {};
content.optional_numerics_unittest = content.optional_numerics_unittest || {};
content.optional_numerics_unittest.mojom = content.optional_numerics_unittest.mojom || {};


// Enum: RegularEnum
content.optional_numerics_unittest.mojom.RegularEnum = {
  kFoo: 0,
  kBar: 1,
};

// Struct: OptionalNumericsStruct
content.optional_numerics_unittest.mojom.OptionalNumericsStruct = class {
  constructor(values = {}) {
    this.optional_enum = values.optional_enum !== undefined ? values.optional_enum : 0;
  }
};

// Struct: VersionedStructV0
content.optional_numerics_unittest.mojom.VersionedStructV0 = class {
  constructor(values = {}) {
  }
};

// Struct: VersionedStructV2
content.optional_numerics_unittest.mojom.VersionedStructV2 = class {
  constructor(values = {}) {
    this.enum_value = values.enum_value !== undefined ? values.enum_value : 0;
  }
};

// Interface: Params
content.optional_numerics_unittest.mojom.ParamsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.optional_numerics_unittest.mojom.Params';
  }

  sendNullBool(optional_bool) {
    // Method: SendNullBool
    // Call: SendNullBool(optional_bool)
  }

  sendNullUint8(optional_uint8) {
    // Method: SendNullUint8
    // Call: SendNullUint8(optional_uint8)
  }

  sendNullInt8(optional_int8) {
    // Method: SendNullInt8
    // Call: SendNullInt8(optional_int8)
  }

  sendNullUint16(optional_uint16) {
    // Method: SendNullUint16
    // Call: SendNullUint16(optional_uint16)
  }

  sendNullInt16(optional_int16) {
    // Method: SendNullInt16
    // Call: SendNullInt16(optional_int16)
  }

  sendNullUint32(optional_uint32) {
    // Method: SendNullUint32
    // Call: SendNullUint32(optional_uint32)
  }

  sendNullInt32(optional_int32) {
    // Method: SendNullInt32
    // Call: SendNullInt32(optional_int32)
  }

  sendNullUint64(optional_uint64) {
    // Method: SendNullUint64
    // Call: SendNullUint64(optional_uint64)
  }

  sendNullInt64(optional_int64) {
    // Method: SendNullInt64
    // Call: SendNullInt64(optional_int64)
  }

  sendNullFloat(optional_float) {
    // Method: SendNullFloat
    // Call: SendNullFloat(optional_float)
  }

  sendNullDouble(optional_double) {
    // Method: SendNullDouble
    // Call: SendNullDouble(optional_double)
  }

  sendNullEnum(optional_enum) {
    // Method: SendNullEnum
    // Call: SendNullEnum(optional_enum)
  }

  sendNullBools(optional_bools) {
    // Method: SendNullBools
    // Call: SendNullBools(optional_bools)
  }

  sendNullInt16s(optional_int16s) {
    // Method: SendNullInt16s
    // Call: SendNullInt16s(optional_int16s)
  }

  sendNullUint32s(optional_uint32s) {
    // Method: SendNullUint32s
    // Call: SendNullUint32s(optional_uint32s)
  }

  sendNullDoubles(optional_doubles) {
    // Method: SendNullDoubles
    // Call: SendNullDoubles(optional_doubles)
  }

  sendNullEnums(optional_enums) {
    // Method: SendNullEnums
    // Call: SendNullEnums(optional_enums)
  }

  sendNullBoolMap(values) {
    // Method: SendNullBoolMap
    // Call: SendNullBoolMap(values)
  }

  sendNullDoubleMap(values) {
    // Method: SendNullDoubleMap
    // Call: SendNullDoubleMap(values)
  }

  sendNullEnumMap(values) {
    // Method: SendNullEnumMap
    // Call: SendNullEnumMap(values)
  }

  sendOptionalBool(optional_bool) {
    // Method: SendOptionalBool
    return new Promise((resolve) => {
      // Call: SendOptionalBool(optional_bool)
      resolve({});
    });
  }

  sendOptionalUint8(optional_uint8) {
    // Method: SendOptionalUint8
    return new Promise((resolve) => {
      // Call: SendOptionalUint8(optional_uint8)
      resolve({});
    });
  }

  sendOptionalInt8(optional_int8) {
    // Method: SendOptionalInt8
    return new Promise((resolve) => {
      // Call: SendOptionalInt8(optional_int8)
      resolve({});
    });
  }

  sendOptionalUint16(optional_uint16) {
    // Method: SendOptionalUint16
    return new Promise((resolve) => {
      // Call: SendOptionalUint16(optional_uint16)
      resolve({});
    });
  }

  sendOptionalInt16(optional_int16) {
    // Method: SendOptionalInt16
    return new Promise((resolve) => {
      // Call: SendOptionalInt16(optional_int16)
      resolve({});
    });
  }

  sendOptionalUint32(optional_uint32) {
    // Method: SendOptionalUint32
    return new Promise((resolve) => {
      // Call: SendOptionalUint32(optional_uint32)
      resolve({});
    });
  }

  sendOptionalInt32(optional_int32) {
    // Method: SendOptionalInt32
    return new Promise((resolve) => {
      // Call: SendOptionalInt32(optional_int32)
      resolve({});
    });
  }

  sendOptionalUint64(optional_uint64) {
    // Method: SendOptionalUint64
    return new Promise((resolve) => {
      // Call: SendOptionalUint64(optional_uint64)
      resolve({});
    });
  }

  sendOptionalInt64(optional_int64) {
    // Method: SendOptionalInt64
    return new Promise((resolve) => {
      // Call: SendOptionalInt64(optional_int64)
      resolve({});
    });
  }

  sendOptionalFloat(optional_float) {
    // Method: SendOptionalFloat
    return new Promise((resolve) => {
      // Call: SendOptionalFloat(optional_float)
      resolve({});
    });
  }

  sendOptionalDouble(optional_double) {
    // Method: SendOptionalDouble
    return new Promise((resolve) => {
      // Call: SendOptionalDouble(optional_double)
      resolve({});
    });
  }

  sendOptionalEnum(optional_enum) {
    // Method: SendOptionalEnum
    return new Promise((resolve) => {
      // Call: SendOptionalEnum(optional_enum)
      resolve({});
    });
  }

  sendOptionalBools(optional_enums) {
    // Method: SendOptionalBools
    return new Promise((resolve) => {
      // Call: SendOptionalBools(optional_enums)
      resolve({});
    });
  }

  sendOptionalInt16s(optional_int16s) {
    // Method: SendOptionalInt16s
    return new Promise((resolve) => {
      // Call: SendOptionalInt16s(optional_int16s)
      resolve({});
    });
  }

  sendOptionalUint32s(optional_uint32s) {
    // Method: SendOptionalUint32s
    return new Promise((resolve) => {
      // Call: SendOptionalUint32s(optional_uint32s)
      resolve({});
    });
  }

  sendOptionalDoubles(optional_doubles) {
    // Method: SendOptionalDoubles
    return new Promise((resolve) => {
      // Call: SendOptionalDoubles(optional_doubles)
      resolve({});
    });
  }

  sendOptionalEnums(optional_enums) {
    // Method: SendOptionalEnums
    return new Promise((resolve) => {
      // Call: SendOptionalEnums(optional_enums)
      resolve({});
    });
  }

  sendOptionalBoolMap(values) {
    // Method: SendOptionalBoolMap
    return new Promise((resolve) => {
      // Call: SendOptionalBoolMap(values)
      resolve({});
    });
  }

  sendOptionalDoubleMap(values) {
    // Method: SendOptionalDoubleMap
    return new Promise((resolve) => {
      // Call: SendOptionalDoubleMap(values)
      resolve({});
    });
  }

  sendOptionalEnumMap(values) {
    // Method: SendOptionalEnumMap
    return new Promise((resolve) => {
      // Call: SendOptionalEnumMap(values)
      resolve({});
    });
  }

  sendNullStructWithOptionalNumerics(s) {
    // Method: SendNullStructWithOptionalNumerics
    // Call: SendNullStructWithOptionalNumerics(s)
  }

  sendStructWithNullOptionalNumerics(s) {
    // Method: SendStructWithNullOptionalNumerics
    // Call: SendStructWithNullOptionalNumerics(s)
  }

  sendStructWithOptionalNumerics(s) {
    // Method: SendStructWithOptionalNumerics
    return new Promise((resolve) => {
      // Call: SendStructWithOptionalNumerics(s)
      resolve({});
    });
  }

};

content.optional_numerics_unittest.mojom.ParamsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ResponseParams
content.optional_numerics_unittest.mojom.ResponseParamsPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.optional_numerics_unittest.mojom.ResponseParams';
  }

  getNullBool() {
    // Method: GetNullBool
    return new Promise((resolve) => {
      // Call: GetNullBool()
      resolve({});
    });
  }

  getNullUint8() {
    // Method: GetNullUint8
    return new Promise((resolve) => {
      // Call: GetNullUint8()
      resolve({});
    });
  }

  getNullInt8() {
    // Method: GetNullInt8
    return new Promise((resolve) => {
      // Call: GetNullInt8()
      resolve({});
    });
  }

  getNullUint16() {
    // Method: GetNullUint16
    return new Promise((resolve) => {
      // Call: GetNullUint16()
      resolve({});
    });
  }

  getNullInt16() {
    // Method: GetNullInt16
    return new Promise((resolve) => {
      // Call: GetNullInt16()
      resolve({});
    });
  }

  getNullUint32() {
    // Method: GetNullUint32
    return new Promise((resolve) => {
      // Call: GetNullUint32()
      resolve({});
    });
  }

  getNullInt32() {
    // Method: GetNullInt32
    return new Promise((resolve) => {
      // Call: GetNullInt32()
      resolve({});
    });
  }

  getNullUint64() {
    // Method: GetNullUint64
    return new Promise((resolve) => {
      // Call: GetNullUint64()
      resolve({});
    });
  }

  getNullInt64() {
    // Method: GetNullInt64
    return new Promise((resolve) => {
      // Call: GetNullInt64()
      resolve({});
    });
  }

  getNullFloat() {
    // Method: GetNullFloat
    return new Promise((resolve) => {
      // Call: GetNullFloat()
      resolve({});
    });
  }

  getNullDouble() {
    // Method: GetNullDouble
    return new Promise((resolve) => {
      // Call: GetNullDouble()
      resolve({});
    });
  }

  getNullEnum() {
    // Method: GetNullEnum
    return new Promise((resolve) => {
      // Call: GetNullEnum()
      resolve({});
    });
  }

  getNullBools() {
    // Method: GetNullBools
    return new Promise((resolve) => {
      // Call: GetNullBools()
      resolve({});
    });
  }

  getNullInt16s() {
    // Method: GetNullInt16s
    return new Promise((resolve) => {
      // Call: GetNullInt16s()
      resolve({});
    });
  }

  getNullUint32s() {
    // Method: GetNullUint32s
    return new Promise((resolve) => {
      // Call: GetNullUint32s()
      resolve({});
    });
  }

  getNullDoubles() {
    // Method: GetNullDoubles
    return new Promise((resolve) => {
      // Call: GetNullDoubles()
      resolve({});
    });
  }

  getNullEnums() {
    // Method: GetNullEnums
    return new Promise((resolve) => {
      // Call: GetNullEnums()
      resolve({});
    });
  }

};

content.optional_numerics_unittest.mojom.ResponseParamsRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InterfaceV0
content.optional_numerics_unittest.mojom.InterfaceV0Ptr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.optional_numerics_unittest.mojom.InterfaceV0';
  }

  1() {
    // Method: 1
    // Call: 1()
  }

  2(s) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(s)
      resolve({});
    });
  }

};

content.optional_numerics_unittest.mojom.InterfaceV0Request = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: InterfaceV2
content.optional_numerics_unittest.mojom.InterfaceV2Ptr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'content.optional_numerics_unittest.mojom.InterfaceV2';
  }

  1(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value) {
    // Method: 1
    return new Promise((resolve) => {
      // Call: 1(bool_value, uint8_value, int8_value, uint16_value, int16_value, uint32_value, int32_value, uint64_value, int64_value, float_value, double_value, enum_value)
      resolve({});
    });
  }

  2(s) {
    // Method: 2
    return new Promise((resolve) => {
      // Call: 2(s)
      resolve({});
    });
  }

};

content.optional_numerics_unittest.mojom.InterfaceV2Request = class {
  constructor(handle) {
    this.handle = handle;
  }
};
