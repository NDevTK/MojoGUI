// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_constants.mojom
// Module: display.mojom

'use strict';

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};


// Enum: DisplayConnectionType
display.mojom.mojom.DisplayConnectionType = {
  DISPLAY_CONNECTION_TYPE_NONE: 0,
  DISPLAY_CONNECTION_TYPE_UNKNOWN: 1,
  DISPLAY_CONNECTION_TYPE_INTERNAL: 2,
  DISPLAY_CONNECTION_TYPE_VGA: 3,
  DISPLAY_CONNECTION_TYPE_HDMI: 4,
  DISPLAY_CONNECTION_TYPE_DVI: 5,
  DISPLAY_CONNECTION_TYPE_DISPLAYPORT: 6,
  DISPLAY_CONNECTION_TYPE_NETWORK: 7,
};
display.mojom.mojom.DisplayConnectionTypeSpec = { $: mojo.internal.Enum() };

// Enum: HDCPState
display.mojom.mojom.HDCPState = {
  HDCP_STATE_UNDESIRED: 0,
  HDCP_STATE_DESIRED: 1,
  HDCP_STATE_ENABLED: 2,
};
display.mojom.mojom.HDCPStateSpec = { $: mojo.internal.Enum() };

// Enum: ContentProtectionMethod
display.mojom.mojom.ContentProtectionMethod = {
  CONTENT_PROTECTION_METHOD_NONE: 0,
  CONTENT_PROTECTION_METHOD_HDCP_TYPE_0: 1,
  CONTENT_PROTECTION_METHOD_HDCP_TYPE_1: 2,
};
display.mojom.mojom.ContentProtectionMethodSpec = { $: mojo.internal.Enum() };

// Enum: PanelOrientation
display.mojom.mojom.PanelOrientation = {
  NORMAL: 0,
  BOTTOM_UP: 1,
  LEFT_UP: 2,
  RIGHT_UP: 3,
};
display.mojom.mojom.PanelOrientationSpec = { $: mojo.internal.Enum() };

// Enum: PrivacyScreenState
display.mojom.mojom.PrivacyScreenState = {
  DISABLED: 0,
  ENABLED: 1,
  DISABLED_LOCKED: 2,
  ENABLED_LOCKED: 3,
  NOT_SUPPORTED: 4,
};
display.mojom.mojom.PrivacyScreenStateSpec = { $: mojo.internal.Enum() };

// Enum: VariableRefreshRateState
display.mojom.mojom.VariableRefreshRateState = {
  kVrrDisabled: 0,
  kVrrEnabled: 1,
  kVrrNotCapable: 2,
};
display.mojom.mojom.VariableRefreshRateStateSpec = { $: mojo.internal.Enum() };

// Struct: ModesetFlags
display.mojom.mojom.ModesetFlagsSpec = {
  $: {
    structSpec: {
      name: 'display.mojom.ModesetFlags',
      packedSize: 16,
      fields: [
        { name: 'bitmask', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};
