// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/time.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Struct: Time
mojo_base.mojom.mojom.TimeSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.Time',
      packedSize: 16,
      fields: [
        { name: 'internal_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: JSTime
mojo_base.mojom.mojom.JSTimeSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.JSTime',
      packedSize: 16,
      fields: [
        { name: 'msec', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TimeDelta
mojo_base.mojom.mojom.TimeDeltaSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.TimeDelta',
      packedSize: 16,
      fields: [
        { name: 'microseconds', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: TimeTicks
mojo_base.mojom.mojom.TimeTicksSpec = {
  $: {
    structSpec: {
      name: 'mojo_base.mojom.TimeTicks',
      packedSize: 16,
      fields: [
        { name: 'internal_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
