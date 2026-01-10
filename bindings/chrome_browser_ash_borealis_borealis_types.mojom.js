// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ash/borealis/borealis_types.mojom
// Module: borealis.mojom

'use strict';

// Module namespace
var borealis = borealis || {};
borealis.mojom = borealis.mojom || {};


// Enum: InstallResult
borealis.mojom.mojom.InstallResult = {
  kSuccess: 0,
  kCancelled: 1,
  kBorealisNotAllowed: 2,
  kBorealisInstallInProgress: 3,
  kDlcInternalError: 4,
  kDlcUnsupportedError: 5,
  kDlcBusyError: 6,
  kDlcNeedRebootError: 7,
  kDlcNeedSpaceError: 8,
  kDlcUnknownError: 9,
  kOffline: 10,
  kDlcNeedUpdateError: 11,
  kStartupFailed: 12,
  kMainAppNotPresent: 13,
};
borealis.mojom.mojom.InstallResultSpec = { $: mojo.internal.Enum() };
