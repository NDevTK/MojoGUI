// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/view_type.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};

extensions.mojom.ViewTypeSpec = { $: mojo.internal.Enum() };

// Enum: ViewType
extensions.mojom.ViewType = {
  kInvalid: 0,
  kAppWindow: 1,
  kBackgroundContents: 2,
  kComponent: 3,
  kExtensionBackgroundPage: 4,
  kExtensionGuest: 6,
  kExtensionPopup: 7,
  kTabContents: 9,
  kOffscreenDocument: 10,
  kExtensionSidePanel: 11,
  kDeveloperTools: 12,
};
