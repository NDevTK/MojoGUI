// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/anr.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.AnrTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.AnrSourceSpec = { $: mojo.internal.Enum() };
arc.mojom.AnrSpec = { $: {} };

// Enum: AnrType
arc.mojom.AnrType = {
  UNKNOWN: 0,
  INPUT: 1,
  FOREGROUND_SERVICE: 2,
  BROADCAST: 3,
  CONTENT_PROVIDER: 4,
  APP_REQUESTED: 5,
  PROCESS: 6,
  BACKGROUND_SERVICE: 7,
};

// Enum: AnrSource
arc.mojom.AnrSource = {
  OTHER: 0,
  SYSTEM_SERVER: 1,
  SYSTEM_APP: 2,
  GMS_CORE: 3,
  PLAY_STORE: 4,
  FIRST_PARTY: 5,
  ARC_OTHER: 6,
  ARC_APP_LAUNCHER: 7,
};

// Struct: Anr
mojo.internal.Struct(
    arc.mojom.AnrSpec, 'arc.mojom.Anr', [
      mojo.internal.StructField('type', 0, 0, arc.mojom.AnrTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('source', 4, 0, arc.mojom.AnrSourceSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);
