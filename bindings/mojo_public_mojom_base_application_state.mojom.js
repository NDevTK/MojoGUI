// Auto-generated MojoJS binding
// Source: chromium_src/mojo/public/mojom/base/application_state.mojom
// Module: mojo_base.mojom

'use strict';

// Module namespace
var mojo_base = mojo_base || {};
mojo_base.mojom = mojo_base.mojom || {};


// Enum: ApplicationState
mojo_base.mojom.ApplicationState = {
  UNKNOWN: 0,
  HAS_RUNNING_ACTIVITIES: 1,
  HAS_PAUSED_ACTIVITIES: 2,
  HAS_STOPPED_ACTIVITIES: 3,
  HAS_DESTROYED_ACTIVITIES: 4,
};
mojo_base.mojom.ApplicationStateSpec = { $: mojo.internal.Enum() };
