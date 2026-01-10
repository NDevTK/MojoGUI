// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ash/crostini/crostini_types.mojom
// Module: crostini.mojom

'use strict';

// Module namespace
var crostini = crostini || {};
crostini.mojom = crostini.mojom || {};


// Enum: InstallerState
crostini.mojom.mojom.InstallerState = {
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
crostini.mojom.mojom.InstallerStateSpec = { $: mojo.internal.Enum() };

// Enum: InstallerError
crostini.mojom.mojom.InstallerError = {
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
crostini.mojom.mojom.InstallerErrorSpec = { $: mojo.internal.Enum() };

// Struct: DiskSliderTick
crostini.mojom.mojom.DiskSliderTickSpec = {
  $: {
    structSpec: {
      name: 'crostini.mojom.DiskSliderTick',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'aria_value', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
