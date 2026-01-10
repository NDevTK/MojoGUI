// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/ash/experiences/arc/mojom/intent_common.mojom
// Module: arc.mojom

'use strict';

// Module namespace
var arc = arc || {};
arc.mojom = arc.mojom || {};

arc.mojom.ActionTypeSpec = { $: mojo.internal.Enum() };
arc.mojom.ActivityNameSpec = { $: {} };

// Enum: ActionType
arc.mojom.ActionType = {
  VIEW: 0,
  SEND: 1,
  SEND_MULTIPLE: 2,
  CREATE_NOTE: 3,
  EDIT: 4,
};

// Struct: ActivityName
mojo.internal.Struct(
    arc.mojom.ActivityNameSpec, 'arc.mojom.ActivityName', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);
