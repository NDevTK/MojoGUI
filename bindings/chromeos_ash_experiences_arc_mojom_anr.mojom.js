// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/anr.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};


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
arc.mojom.AnrSpec = {
  $: {
    structSpec: {
      name: 'arc.mojom.Anr',
      packedSize: 24,
      fields: [
        { name: 'type', packedOffset: 0, packedBitOffset: 0, type: arc.mojom.AnrTypeSpec, nullable: false },
        { name: 'source', packedOffset: 8, packedBitOffset: 0, type: arc.mojom.AnrSourceSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
