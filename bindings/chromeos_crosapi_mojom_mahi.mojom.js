// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/crosapi/mojom/mahi.mojom
// Module: crosapi.mojom

'use strict';

// Module namespace
var crosapi = crosapi || {};
crosapi.mojom = crosapi.mojom || {};
var ui = ui || {};
var gfx = gfx || {};
var ui = ui || {};
var gfx = gfx || {};
var url = url || {};


// Enum: MahiContextMenuActionType
crosapi.mojom.mojom.MahiContextMenuActionType = {
  kSummary: 0,
  kOutline: 1,
  kSettings: 2,
  kQA: 3,
  kElucidation: 4,
  kSummaryOfSelection: 5,
};
crosapi.mojom.mojom.MahiContextMenuActionTypeSpec = { $: mojo.internal.Enum() };

// Struct: MahiPageInfo
crosapi.mojom.mojom.MahiPageInfoSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.MahiPageInfo',
      packedSize: 56,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'page_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 16, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'title', packedOffset: 24, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'favicon_image', packedOffset: 32, packedBitOffset: 0, type: gfx.mojom.ImageSkiaSpec, nullable: true, minVersion: 0 },
        { name: 'IsDistillable_$flag', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: true, linkedValueFieldName: 'IsDistillable_$value', originalFieldName: 'IsDistillable' } },
        { name: 'IsDistillable_$value', packedOffset: 40, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0, nullableValueKindProperties: { isPrimary: false, linkedValueFieldName: 'IsDistillable_$flag', originalFieldName: 'IsDistillable' } },
        { name: 'is_incognito', packedOffset: 40, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 56}, {version: 1, packedSize: 56}]
    }
  }
};

// Struct: MahiContextMenuRequest
crosapi.mojom.mojom.MahiContextMenuRequestSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.MahiContextMenuRequest',
      packedSize: 40,
      fields: [
        { name: 'display_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Int64, nullable: false, minVersion: 0 },
        { name: 'action_type', packedOffset: 24, packedBitOffset: 0, type: crosapi.mojom.MahiContextMenuActionTypeSpec, nullable: false, minVersion: 0 },
        { name: 'question', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true, minVersion: 0 },
        { name: 'mahi_menu_bounds', packedOffset: 16, packedBitOffset: 0, type: gfx.mojom.RectSpec, nullable: true, minVersion: 1 },
      ],
      versions: [{version: 0, packedSize: 40}, {version: 1, packedSize: 40}]
    }
  }
};

// Struct: MahiPageContent
crosapi.mojom.mojom.MahiPageContentSpec = {
  $: {
    structSpec: {
      name: 'crosapi.mojom.MahiPageContent',
      packedSize: 32,
      fields: [
        { name: 'client_id', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'page_id', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: false, minVersion: 0 },
        { name: 'page_content', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
