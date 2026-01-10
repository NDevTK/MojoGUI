// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/permissions_policy/policy_value.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: PolicyValueType
blink.mojom.mojom.PolicyValueType = {
  kNull: 0,
  kBool: 1,
  kDecDouble: 2,
  kEnum: 3,
};
blink.mojom.mojom.PolicyValueTypeSpec = { $: mojo.internal.Enum() };

// Union: PolicyValue
blink.mojom.mojom.PolicyValueSpec = { $: mojo.internal.Union(
    'blink.mojom.PolicyValue', {
      'null_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'bool_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
      }},
      'dec_double_value': {
        'ordinal': 2,
        'type': mojo.internal.Double,
      }},
      'enum_value': {
        'ordinal': 3,
        'type': mojo.internal.Int32,
      }},
    })
};
