// Auto-generated MojoJS binding
// Source: chromium_src/services/webnn/public/mojom/ep_package_info.mojom
// Module: webnn.mojom

'use strict';

// Module namespace
var webnn = webnn || {};
webnn.mojom = webnn.mojom || {};
var mojo_base = mojo_base || {};

webnn.mojom.PackageVersionSpec = { $: {} };
webnn.mojom.EpPackageInfoSpec = { $: {} };

// Struct: PackageVersion
mojo.internal.Struct(
    webnn.mojom.PackageVersionSpec, 'webnn.mojom.PackageVersion', [
      mojo.internal.StructField('revision', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('build', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('minor', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('major', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: EpPackageInfo
mojo.internal.Struct(
    webnn.mojom.EpPackageInfoSpec, 'webnn.mojom.EpPackageInfo', [
      mojo.internal.StructField('family_name', 0, 0, mojo_base.mojom.WStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('version', 8, 0, webnn.mojom.PackageVersionSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('library_path', 16, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);
