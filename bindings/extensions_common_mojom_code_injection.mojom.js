// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/code_injection.mojom
// Module: extensions.mojom

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var blink = blink || {};
var url = url || {};

extensions.mojom.OperationSpec = { $: mojo.internal.Enum() };
extensions.mojom.CodeInjectionSpec = { $: {} };
extensions.mojom.JSSourceSpec = { $: {} };
extensions.mojom.CSSSourceSpec = { $: {} };
extensions.mojom.JSInjectionSpec = { $: {} };
extensions.mojom.CSSInjectionSpec = { $: {} };

// Enum: Operation
extensions.mojom.Operation = {
  kAdd: 0,
  kRemove: 1,
};

// Union: CodeInjection
mojo.internal.Union(
    extensions.mojom.CodeInjectionSpec, 'extensions.mojom.CodeInjection', {
      'css': {
        'ordinal': 0,
        'type': extensions.mojom.CSSInjectionSpec.$,
        'nullable': false,
      },
      'js': {
        'ordinal': 1,
        'type': extensions.mojom.JSInjectionSpec.$,
        'nullable': false,
      },
    });

// Struct: JSSource
mojo.internal.Struct(
    extensions.mojom.JSSourceSpec, 'extensions.mojom.JSSource', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('script_url', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CSSSource
mojo.internal.Struct(
    extensions.mojom.CSSSourceSpec, 'extensions.mojom.CSSSource', [
      mojo.internal.StructField('code', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('key', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: JSInjection
mojo.internal.Struct(
    extensions.mojom.JSInjectionSpec, 'extensions.mojom.JSInjection', [
      mojo.internal.StructField('sources', 0, 0, mojo.internal.Array(extensions.mojom.JSSourceSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('world', 8, 0, extensions.mojom.ExecutionWorldSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('world_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('wants_result', 24, 0, blink.mojom.WantResultOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('user_gesture', 32, 0, blink.mojom.UserActivationOptionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('wait_for_promise', 40, 0, blink.mojom.PromiseResultOptionSpec.$, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CSSInjection
mojo.internal.Struct(
    extensions.mojom.CSSInjectionSpec, 'extensions.mojom.CSSInjection', [
      mojo.internal.StructField('kAdd', 0, 0, mojo.internal.Pointer, null, false, 0, undefined),
    ],
    [[0, 16]]);
