// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/time.mojom
// Module: mojo_base.mojom

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};

mojo_base.mojom.TimeSpec = { $: {} };
mojo_base.mojom.JSTimeSpec = { $: {} };
mojo_base.mojom.TimeDeltaSpec = { $: {} };
mojo_base.mojom.TimeTicksSpec = { $: {} };

// Struct: Time
mojo.internal.Struct(
    mojo_base.mojom.TimeSpec, 'mojo_base.mojom.Time', [
      mojo.internal.StructField('internal_value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: JSTime
mojo.internal.Struct(
    mojo_base.mojom.JSTimeSpec, 'mojo_base.mojom.JSTime', [
      mojo.internal.StructField('msec', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TimeDelta
mojo.internal.Struct(
    mojo_base.mojom.TimeDeltaSpec, 'mojo_base.mojom.TimeDelta', [
      mojo.internal.StructField('microseconds', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TimeTicks
mojo.internal.Struct(
    mojo_base.mojom.TimeTicksSpec, 'mojo_base.mojom.TimeTicks', [
      mojo.internal.StructField('internal_value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);
