// Auto-generated MojoJS binding
// Source: chromium_src/ash/public/mojom/accelerator_info.mojom
// Module: ash.mojom

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
var ui = ui || {};

ash.mojom.AcceleratorSourceSpec = { $: mojo.internal.Enum() };
ash.mojom.AcceleratorTypeSpec = { $: mojo.internal.Enum() };
ash.mojom.AcceleratorStateSpec = { $: mojo.internal.Enum() };
ash.mojom.AcceleratorLayoutStyleSpec = { $: mojo.internal.Enum() };
ash.mojom.AcceleratorCategorySpec = { $: mojo.internal.Enum() };
ash.mojom.AcceleratorSubcategorySpec = { $: mojo.internal.Enum() };
ash.mojom.TextAcceleratorPartTypeSpec = { $: mojo.internal.Enum() };
ash.mojom.LayoutStylePropertiesSpec = { $: {} };
ash.mojom.TextAcceleratorPartSpec = { $: {} };
ash.mojom.TextAcceleratorPropertiesSpec = { $: {} };
ash.mojom.StandardAcceleratorPropertiesSpec = { $: {} };
ash.mojom.AcceleratorInfoSpec = { $: {} };
ash.mojom.AcceleratorLayoutInfoSpec = { $: {} };

// Enum: AcceleratorSource
ash.mojom.AcceleratorSource = {
  kAsh: 0,
  kEventRewriter: 1,
  kBrowser: 2,
  kAmbient: 3,
  kAndroid: 4,
};

// Enum: AcceleratorType
ash.mojom.AcceleratorType = {
  kDefault: 0,
  kUser: 1,
  kDeprecated: 2,
  kDeveloper: 3,
  kDebug: 4,
};

// Enum: AcceleratorState
ash.mojom.AcceleratorState = {
  kEnabled: 0,
  kDisabledByConflict: 1,
  kDisabledByUser: 2,
  kDisabledByUnavailableKeys: 3,
};

// Enum: AcceleratorLayoutStyle
ash.mojom.AcceleratorLayoutStyle = {
  kDefault: 0,
  kText: 1,
};

// Enum: AcceleratorCategory
ash.mojom.AcceleratorCategory = {
  kGeneral: 0,
  kDevice: 1,
  kBrowser: 2,
  kText: 3,
  kWindowsAndDesks: 4,
  kAccessibility: 5,
  kDebug: 6,
  kDeveloper: 7,
};

// Enum: AcceleratorSubcategory
ash.mojom.AcceleratorSubcategory = {
  kGeneralControls: 0,
  kApps: 1,
  kMedia: 2,
  kInputs: 3,
  kDisplay: 4,
  kGeneral: 5,
  kBrowserNavigation: 6,
  kPages: 7,
  kTabs: 8,
  kBookmarks: 9,
  kDeveloperTools: 10,
  kTextNavigation: 11,
  kTextEditing: 12,
  kWindows: 13,
  kDesks: 14,
  kChromeVox: 15,
  kMouseKeys: 16,
  kVisibility: 17,
  kAccessibilityNavigation: 18,
};

// Enum: TextAcceleratorPartType
ash.mojom.TextAcceleratorPartType = {
  kPlainText: 0,
  kModifier: 1,
  kKey: 2,
  kDelimiter: 3,
};

// Union: LayoutStyleProperties
mojo.internal.Union(
    ash.mojom.LayoutStylePropertiesSpec, 'ash.mojom.LayoutStyleProperties', {
      'standard_accelerator': {
        'ordinal': 0,
        'type': ash.mojom.StandardAcceleratorPropertiesSpec.$,
        'nullable': false,
      },
      'text_accelerator': {
        'ordinal': 1,
        'type': ash.mojom.TextAcceleratorPropertiesSpec.$,
        'nullable': false,
      },
    });

// Struct: TextAcceleratorPart
mojo.internal.Struct(
    ash.mojom.TextAcceleratorPartSpec, 'ash.mojom.TextAcceleratorPart', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('type', 8, 0, ash.mojom.TextAcceleratorPartTypeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TextAcceleratorProperties
mojo.internal.Struct(
    ash.mojom.TextAcceleratorPropertiesSpec, 'ash.mojom.TextAcceleratorProperties', [
      mojo.internal.StructField('parts', 0, 0, mojo.internal.Array(ash.mojom.TextAcceleratorPartSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StandardAcceleratorProperties
mojo.internal.Struct(
    ash.mojom.StandardAcceleratorPropertiesSpec, 'ash.mojom.StandardAcceleratorProperties', [
      mojo.internal.StructField('accelerator', 0, 0, ui.mojom.AcceleratorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_display', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('original_accelerator', 16, 0, ui.mojom.AcceleratorSpec.$, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: AcceleratorInfo
mojo.internal.Struct(
    ash.mojom.AcceleratorInfoSpec, 'ash.mojom.AcceleratorInfo', [
      mojo.internal.StructField('type', 0, 0, ash.mojom.AcceleratorTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('state', 8, 0, ash.mojom.AcceleratorStateSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('locked', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('accelerator_locked', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('layout_properties', 24, 0, ash.mojom.LayoutStylePropertiesSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AcceleratorLayoutInfo
mojo.internal.Struct(
    ash.mojom.AcceleratorLayoutInfoSpec, 'ash.mojom.AcceleratorLayoutInfo', [
      mojo.internal.StructField('category', 0, 0, ash.mojom.AcceleratorCategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('sub_category', 8, 0, ash.mojom.AcceleratorSubcategorySpec.$, null, false, 0, undefined),
      mojo.internal.StructField('description', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('style', 24, 0, ash.mojom.AcceleratorLayoutStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('source', 32, 0, ash.mojom.AcceleratorSourceSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('action', 40, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 56]]);
