// Auto-generated MojoJS binding
// Source: chromium_src/content/web_test/common/mojo_echo.mojom
// Module: content.mojom

'use strict';

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
};

content.mojom.MojoEchoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoBoolFromUnion(test_union) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt32FromUnion(test_union) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32FromUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromUnion(test_union) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolAsUnion(value) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoInt32AsUnion(value) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32AsUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsUnion(value) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoNullFromOptionalUnion(test_union) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullFromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolFromOptionalUnion(test_union) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt32FromOptionalUnion(test_union) {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromOptionalUnion(test_union) {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromOptionalUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoNullAsOptionalUnion() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullAsOptionalUnion_ResponseParamsSpec,
      [],
      false);
  }

  echoBoolAsOptionalUnion(value) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoInt32AsOptionalUnion(value) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsOptionalUnion(value) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsOptionalUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoInt8FromNestedUnion(test_union) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8FromNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolFromNestedUnion(test_union) {
    // Ordinal: 15
    return this.proxy.sendMessage(
      15,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromNestedUnion(test_union) {
    // Ordinal: 16
    return this.proxy.sendMessage(
      16,  // ordinal
      content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt8AsNestedUnion(value) {
    // Ordinal: 17
    return this.proxy.sendMessage(
      17,  // ordinal
      content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8AsNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoBoolAsNestedUnion(value) {
    // Ordinal: 18
    return this.proxy.sendMessage(
      18,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsNestedUnion(value) {
    // Ordinal: 19
    return this.proxy.sendMessage(
      19,  // ordinal
      content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoNullFromOptionalNestedUnion(test_union) {
    // Ordinal: 20
    return this.proxy.sendMessage(
      20,  // ordinal
      content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoInt8FromOptionalNestedUnion(test_union) {
    // Ordinal: 21
    return this.proxy.sendMessage(
      21,  // ordinal
      content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoBoolFromOptionalNestedUnion(test_union) {
    // Ordinal: 22
    return this.proxy.sendMessage(
      22,  // ordinal
      content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoStringFromOptionalNestedUnion(test_union) {
    // Ordinal: 23
    return this.proxy.sendMessage(
      23,  // ordinal
      content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ResponseParamsSpec,
      [test_union],
      false);
  }

  echoNullAsOptionalNestedUnion() {
    // Ordinal: 24
    return this.proxy.sendMessage(
      24,  // ordinal
      content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ResponseParamsSpec,
      [],
      false);
  }

  echoInt8AsOptionalNestedUnion(value) {
    // Ordinal: 25
    return this.proxy.sendMessage(
      25,  // ordinal
      content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoBoolAsOptionalNestedUnion(value) {
    // Ordinal: 26
    return this.proxy.sendMessage(
      26,  // ordinal
      content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoStringAsOptionalNestedUnion(value) {
    // Ordinal: 27
    return this.proxy.sendMessage(
      27,  // ordinal
      content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec,
      content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ResponseParamsSpec,
      [value],
      false);
  }

  echoBoolArray(values) {
    // Ordinal: 28
    return this.proxy.sendMessage(
      28,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
    this.ordinalMap.set(15, 15); // Default ordinal 15 -> Index 15
    this.ordinalMap.set(16, 16); // Default ordinal 16 -> Index 16
    this.ordinalMap.set(17, 17); // Default ordinal 17 -> Index 17
    this.ordinalMap.set(18, 18); // Default ordinal 18 -> Index 18
    this.ordinalMap.set(19, 19); // Default ordinal 19 -> Index 19
    this.ordinalMap.set(20, 20); // Default ordinal 20 -> Index 20
    this.ordinalMap.set(21, 21); // Default ordinal 21 -> Index 21
    this.ordinalMap.set(22, 22); // Default ordinal 22 -> Index 22
    this.ordinalMap.set(23, 23); // Default ordinal 23 -> Index 23
    this.ordinalMap.set(24, 24); // Default ordinal 24 -> Index 24
    this.ordinalMap.set(25, 25); // Default ordinal 25 -> Index 25
    this.ordinalMap.set(26, 26); // Default ordinal 26 -> Index 26
    this.ordinalMap.set(27, 27); // Default ordinal 27 -> Index 27
    this.ordinalMap.set(28, 28); // Default ordinal 28 -> Index 28
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
      if (dispatchId === undefined) dispatchId = header.ordinal; // Fallback to raw ordinal
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolFromUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt32FromUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt32FromUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringFromUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolAsUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt32AsUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt32AsUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringAsUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoNullFromOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoNullFromOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolFromOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt32FromOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt32FromOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringFromOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoNullAsOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoNullAsOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolAsOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt32AsOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt32AsOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringAsOptionalUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsOptionalUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt8FromNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt8FromNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolFromNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringFromNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt8AsNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt8AsNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolAsNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringAsNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoNullFromOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoNullFromOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt8FromOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt8FromOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolFromOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolFromOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringFromOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringFromOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoNullAsOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoNullAsOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoInt8AsOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoInt8AsOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolAsOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolAsOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoStringAsOptionalNestedUnion_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoStringAsOptionalNestedUnion');
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
          const params = decoder.decodeStruct(content.mojom.MojoEcho_EchoBoolArray_ParamsSpec.$, 0);
          console.log('[GeneratedReceiver] Calling impl.echoBoolArray');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

content.mojom.MojoEchoReceiver = content.mojom.MojoEchoReceiver;

content.mojom.MojoEchoPtr = content.mojom.MojoEchoRemote;
content.mojom.MojoEchoRequest = content.mojom.MojoEchoPendingReceiver;

