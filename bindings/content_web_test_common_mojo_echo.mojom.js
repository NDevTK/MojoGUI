// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/mojo_echo.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.TestUnionSpec = { $: {} };
content.mojom.NestedUnionSpec = { $: {} };
content.mojom.MojoEcho = {};
content.mojom.MojoEcho.$interfaceName = 'content.mojom.MojoEcho';
content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolArray_ParamsSpec = { $: {} };
content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec = { $: {} };

// Union: TestUnion
mojo.internal.Union(
    content.mojom.TestUnionSpec, 'content.mojom.TestUnion', {
      'bool_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'int32_value': {
        'ordinal': 1,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
      'string_value': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: NestedUnion
mojo.internal.Union(
    content.mojom.NestedUnionSpec, 'content.mojom.NestedUnion', {
      'int8_value': {
        'ordinal': 0,
        'type': mojo.internal.Int8,
        'nullable': false,
      },
      'union_value': {
        'ordinal': 1,
        'type': content.mojom.TestUnionSpec.$,
        'nullable': false,
      },
    });

// Interface: MojoEcho
mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromOptionalUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalUnion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsOptionalUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.TestUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromNestedUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromNestedUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromNestedUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsNestedUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsNestedUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsNestedUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_Params', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int8, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_Params', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParams', [
      mojo.internal.StructField('test_union', 0, 0, content.mojom.NestedUnionSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolArray_ParamsSpec, 'content.mojom.MojoEcho_EchoBoolArray_Params', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec, 'content.mojom.MojoEcho_EchoBoolArray_ResponseParams', [
      mojo.internal.StructField('values', 0, 0, mojo.internal.Array(mojo.internal.Bool, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.MojoEchoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MojoEchoRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MojoEcho';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MojoEchoPendingReceiver,
      handle);
    this.$ = new content.mojom.MojoEchoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  echoBoolFromUnion(test_union) {
    return this.$.echoBoolFromUnion(test_union);
  }
  echoInt32FromUnion(test_union) {
    return this.$.echoInt32FromUnion(test_union);
  }
  echoStringFromUnion(test_union) {
    return this.$.echoStringFromUnion(test_union);
  }
  echoBoolAsUnion(value) {
    return this.$.echoBoolAsUnion(value);
  }
  echoInt32AsUnion(value) {
    return this.$.echoInt32AsUnion(value);
  }
  echoStringAsUnion(value) {
    return this.$.echoStringAsUnion(value);
  }
  echoNullFromOptionalUnion(test_union) {
    return this.$.echoNullFromOptionalUnion(test_union);
  }
  echoBoolFromOptionalUnion(test_union) {
    return this.$.echoBoolFromOptionalUnion(test_union);
  }
  echoInt32FromOptionalUnion(test_union) {
    return this.$.echoInt32FromOptionalUnion(test_union);
  }
  echoStringFromOptionalUnion(test_union) {
    return this.$.echoStringFromOptionalUnion(test_union);
  }
  echoNullAsOptionalUnion() {
    return this.$.echoNullAsOptionalUnion();
  }
  echoBoolAsOptionalUnion(value) {
    return this.$.echoBoolAsOptionalUnion(value);
  }
  echoInt32AsOptionalUnion(value) {
    return this.$.echoInt32AsOptionalUnion(value);
  }
  echoStringAsOptionalUnion(value) {
    return this.$.echoStringAsOptionalUnion(value);
  }
  echoInt8FromNestedUnion(test_union) {
    return this.$.echoInt8FromNestedUnion(test_union);
  }
  echoBoolFromNestedUnion(test_union) {
    return this.$.echoBoolFromNestedUnion(test_union);
  }
  echoStringFromNestedUnion(test_union) {
    return this.$.echoStringFromNestedUnion(test_union);
  }
  echoInt8AsNestedUnion(value) {
    return this.$.echoInt8AsNestedUnion(value);
  }
  echoBoolAsNestedUnion(value) {
    return this.$.echoBoolAsNestedUnion(value);
  }
  echoStringAsNestedUnion(value) {
    return this.$.echoStringAsNestedUnion(value);
  }
  echoNullFromOptionalNestedUnion(test_union) {
    return this.$.echoNullFromOptionalNestedUnion(test_union);
  }
  echoInt8FromOptionalNestedUnion(test_union) {
    return this.$.echoInt8FromOptionalNestedUnion(test_union);
  }
  echoBoolFromOptionalNestedUnion(test_union) {
    return this.$.echoBoolFromOptionalNestedUnion(test_union);
  }
  echoStringFromOptionalNestedUnion(test_union) {
    return this.$.echoStringFromOptionalNestedUnion(test_union);
  }
  echoNullAsOptionalNestedUnion() {
    return this.$.echoNullAsOptionalNestedUnion();
  }
  echoInt8AsOptionalNestedUnion(value) {
    return this.$.echoInt8AsOptionalNestedUnion(value);
  }
  echoBoolAsOptionalNestedUnion(value) {
    return this.$.echoBoolAsOptionalNestedUnion(value);
  }
  echoStringAsOptionalNestedUnion(value) {
    return this.$.echoStringAsOptionalNestedUnion(value);
  }
  echoBoolArray(values) {
    return this.$.echoBoolArray(values);
  }
};

content.mojom.MojoEchoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MojoEcho', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  echoBoolFromUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt32FromUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolAsUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoInt32AsUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoNullFromOptionalUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolFromOptionalUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt32FromOptionalUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromOptionalUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoNullAsOptionalUnion() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec,
      [],
      false);
  }

  echoBoolAsOptionalUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoInt32AsOptionalUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsOptionalUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoInt8FromNestedUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolFromNestedUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromNestedUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt8AsNestedUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoBoolAsNestedUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsNestedUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoNullFromOptionalNestedUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt8FromOptionalNestedUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolFromOptionalNestedUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromOptionalNestedUnion(test_union) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoNullAsOptionalNestedUnion() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec,
      [],
      false);
  }

  echoInt8AsOptionalNestedUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoBoolAsOptionalNestedUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsOptionalNestedUnion(value) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoBoolArray(values) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      content.mojom.MojoEcho_EchoBoolArray_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec,
      [values],
      false);
  }

};

content.mojom.MojoEcho.getRemote = function() {
  let remote = new content.mojom.MojoEchoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MojoEcho',
    'context');
  return remote.$;
};

content.mojom.MojoEchoReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MojoEcho', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 15);
             dispatchId = 15;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 16);
             dispatchId = 16;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 17);
             dispatchId = 17;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 18);
             dispatchId = 18;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 19);
             dispatchId = 19;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 20);
             dispatchId = 20;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 21);
             dispatchId = 21;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 22);
             dispatchId = 22;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 23);
             dispatchId = 23;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 24);
             dispatchId = 24;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 25);
             dispatchId = 25;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 26);
             dispatchId = 26;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec);
             this.mapOrdinal(header.ordinal, 27);
             dispatchId = 27;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolArray_ParamsSpec);
             this.mapOrdinal(header.ordinal, 28);
             dispatchId = 28;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolFromUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt32FromUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringFromUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolAsUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt32AsUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringAsUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoNullFromOptionalUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolFromOptionalUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt32FromOptionalUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringFromOptionalUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoNullAsOptionalUnion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolAsOptionalUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt32AsOptionalUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringAsOptionalUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt8FromNestedUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolFromNestedUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringFromNestedUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt8AsNestedUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolAsNestedUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringAsNestedUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoNullFromOptionalNestedUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt8FromOptionalNestedUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolFromOptionalNestedUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringFromOptionalNestedUnion(params.test_union);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoNullAsOptionalNestedUnion();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoInt8AsOptionalNestedUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolAsOptionalNestedUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringAsOptionalNestedUnion(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoEcho_EchoBoolArray_ParamsSpec.$.structSpec);
          const result = this.impl.echoBoolArray(params.values);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.MojoEcho_EchoBoolArray_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.MojoEchoReceiver = content.mojom.MojoEchoReceiver;

content.mojom.MojoEchoPtr = content.mojom.MojoEchoRemote;
content.mojom.MojoEchoRequest = content.mojom.MojoEchoPendingReceiver;

