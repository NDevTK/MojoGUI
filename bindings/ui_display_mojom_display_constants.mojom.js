// Auto-generated MojoJS binding
// Source: chromium_src/ui/display/mojom/display_constants.mojom
// Module: display.mojom

// Module namespace
var display = display || {};
display.mojom = display.mojom || {};

display.mojom.DisplayConnectionTypeSpec = { $: mojo.internal.Enum() };
display.mojom.HDCPStateSpec = { $: mojo.internal.Enum() };
display.mojom.ContentProtectionMethodSpec = { $: mojo.internal.Enum() };
display.mojom.PanelOrientationSpec = { $: mojo.internal.Enum() };
display.mojom.PrivacyScreenStateSpec = { $: mojo.internal.Enum() };
display.mojom.VariableRefreshRateStateSpec = { $: mojo.internal.Enum() };
display.mojom.ModesetFlagsSpec = { $: {} };

// Enum: DisplayConnectionType
display.mojom.DisplayConnectionType = {
  DISPLAY_CONNECTION_TYPE_NONE: 0,
  DISPLAY_CONNECTION_TYPE_UNKNOWN: 1,
  DISPLAY_CONNECTION_TYPE_INTERNAL: 2,
  DISPLAY_CONNECTION_TYPE_VGA: 4,
  DISPLAY_CONNECTION_TYPE_HDMI: 8,
  DISPLAY_CONNECTION_TYPE_DVI: 16,
  DISPLAY_CONNECTION_TYPE_DISPLAYPORT: 32,
  DISPLAY_CONNECTION_TYPE_NETWORK: 64,
};

// Enum: HDCPState
display.mojom.HDCPState = {
  HDCP_STATE_UNDESIRED: 0,
  HDCP_STATE_DESIRED: 1,
  HDCP_STATE_ENABLED: 2,
};

// Enum: ContentProtectionMethod
display.mojom.ContentProtectionMethod = {
  CONTENT_PROTECTION_METHOD_NONE: 0,
  CONTENT_PROTECTION_METHOD_HDCP_TYPE_0: 1,
  CONTENT_PROTECTION_METHOD_HDCP_TYPE_1: 2,
};

// Enum: PanelOrientation
display.mojom.PanelOrientation = {
  NORMAL: 0,
  BOTTOM_UP: 1,
  LEFT_UP: 2,
  RIGHT_UP: 3,
};

// Enum: PrivacyScreenState
display.mojom.PrivacyScreenState = {
  DISABLED: 0,
  ENABLED: 1,
  DISABLED_LOCKED: 2,
  ENABLED_LOCKED: 3,
  NOT_SUPPORTED: 4,
};

// Enum: VariableRefreshRateState
display.mojom.VariableRefreshRateState = {
  kVrrDisabled: 0,
  kVrrEnabled: 1,
  kVrrNotCapable: 2,
};

// Struct: ModesetFlags
mojo.internal.Struct(
    display.mojom.ModesetFlagsSpec, 'display.mojom.ModesetFlags', [
      mojo.internal.StructField('bitmask', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);
