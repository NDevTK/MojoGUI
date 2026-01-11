// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/camera_app_ui/types.mojom
// Module: ash.camera_app.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var ash = ash || {};
ash.camera_app = ash.camera_app || {};
ash.camera_app.mojom = ash.camera_app.mojom || {};

ash.camera_app.mojom.WifiSecurityTypeSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.WifiEapMethodSpec = { $: mojo.internal.Enum() };
ash.camera_app.mojom.WifiEapPhase2MethodSpec = { $: mojo.internal.Enum() };

// Enum: WifiSecurityType
ash.camera_app.mojom.WifiSecurityType = {
  kNone: 0,
  kEap: 1,
  kWep: 2,
  kWpa: 3,
};

// Enum: WifiEapMethod
ash.camera_app.mojom.WifiEapMethod = {
  kEapTls: 0,
  kEapTtls: 1,
  kLeap: 2,
  kPeap: 3,
};

// Enum: WifiEapPhase2Method
ash.camera_app.mojom.WifiEapPhase2Method = {
  kAutomatic: 0,
  kChap: 1,
  kGtc: 2,
  kMd5: 3,
  kMschap: 4,
  kMschapv2: 5,
  kPap: 6,
};
