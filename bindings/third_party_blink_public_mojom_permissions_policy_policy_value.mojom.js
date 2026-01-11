// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/permissions_policy/policy_value.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.PolicyValueTypeSpec = { $: mojo.internal.Enum() };
blink.mojom.PolicyValueSpec = { $: {} };

// Enum: PolicyValueType
blink.mojom.PolicyValueType = {
  kNull: 0,
  kBool: 1,
  kDecDouble: 2,
  kEnum: 3,
};

// Union: PolicyValue
mojo.internal.Union(
    blink.mojom.PolicyValueSpec, 'blink.mojom.PolicyValue', {
      'null_value': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'bool_value': {
        'ordinal': 1,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'dec_double_value': {
        'ordinal': 2,
        'type': mojo.internal.Double,
        'nullable': false,
      },
      'enum_value': {
        'ordinal': 3,
        'type': mojo.internal.Int32,
        'nullable': false,
      },
    });
