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

crosapi.mojom.MahiContextMenuActionTypeSpec = { $: mojo.internal.Enum() };
crosapi.mojom.MahiPageInfoSpec = { $: {} };
crosapi.mojom.MahiContextMenuRequestSpec = { $: {} };
crosapi.mojom.MahiPageContentSpec = { $: {} };

// Enum: MahiContextMenuActionType
crosapi.mojom.MahiContextMenuActionType = {
  kNone: 0,
  kSummary: 1,
  kOutline: 2,
  kSettings: 3,
  kQA: 4,
  kElucidation: 5,
  kSummaryOfSelection: 6,
};

// Struct: MahiPageInfo
mojo.internal.Struct(
    crosapi.mojom.MahiPageInfoSpec, 'crosapi.mojom.MahiPageInfo', [
      mojo.internal.StructField('client_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('url', 16, 0, url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('title', 24, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('favicon_image', 32, 0, gfx.mojom.ImageSkiaSpec, null, true, 0, undefined),
      mojo.internal.StructField('IsDistillable_$flag', 40, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'IsDistillable_$value', originalFieldName: 'IsDistillable' }),
      mojo.internal.StructField('IsDistillable_$value', 40, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'IsDistillable_$flag', originalFieldName: 'IsDistillable' }),
      mojo.internal.StructField('is_incognito', 40, 2, mojo.internal.Bool, false, false, 1, undefined),
    ],
    [[0, 56], [1, 56]]);

// Struct: MahiContextMenuRequest
mojo.internal.Struct(
    crosapi.mojom.MahiContextMenuRequestSpec, 'crosapi.mojom.MahiContextMenuRequest', [
      mojo.internal.StructField('display_id', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('action_type', 8, 0, crosapi.mojom.MahiContextMenuActionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('question', 16, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('mahi_menu_bounds', 24, 0, gfx.mojom.RectSpec, null, true, 1, undefined),
    ],
    [[0, 32], [1, 40]]);

// Struct: MahiPageContent
mojo.internal.Struct(
    crosapi.mojom.MahiPageContentSpec, 'crosapi.mojom.MahiPageContent', [
      mojo.internal.StructField('client_id', 0, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_id', 8, 0, mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('page_content', 16, 0, mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 32]]);
