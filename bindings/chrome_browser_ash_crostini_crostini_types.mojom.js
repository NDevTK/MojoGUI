// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ash/crostini/crostini_types.mojom
// Module: crostini.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var crostini = crostini || {};
crostini.mojom = crostini.mojom || {};

crostini.mojom.InstallerStateSpec = { $: mojo.internal.Enum() };
crostini.mojom.InstallerErrorSpec = { $: mojo.internal.Enum() };
crostini.mojom.DiskSliderTickSpec = { $: {} };

// Enum: InstallerState
crostini.mojom.InstallerState = {
  kStart: 0,
  kInstallImageLoader: 1,
  kCreateDiskImage: 2,
  kStartTerminaVm: 3,
  kStartLxd: 4,
  kCreateContainer: 5,
  kSetupContainer: 6,
  kStartContainer: 7,
  kFetchSshKeys_DEPRECATED: 8,
  kMountContainer_DEPRECATED: 9,
  kConfigureContainer: 10,
};

// Enum: InstallerError
crostini.mojom.InstallerError = {
  kNone: 0,
  kErrorLoadingTermina: 1,
  kNeedUpdate: 2,
  kErrorCreatingDiskImage: 3,
  kErrorStartingTermina: 4,
  kErrorStartingLxd: 5,
  kErrorStartingContainer: 6,
  kErrorOffline: 7,
  kErrorSettingUpContainer: 8,
  kErrorInsufficientDiskSpace: 9,
  kErrorConfiguringContainer: 10,
  kErrorCreateContainer: 11,
  kErrorUnknown: 12,
};

// Struct: DiskSliderTick
mojo.internal.Struct(
    crostini.mojom.DiskSliderTickSpec, 'crostini.mojom.DiskSliderTick', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('aria_value', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);
