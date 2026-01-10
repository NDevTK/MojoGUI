// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_enumeration_options.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};

device.mojom.UsbDeviceFilterSpec = { $: {} };
device.mojom.UsbEnumerationOptionsSpec = { $: {} };

// Struct: UsbDeviceFilter
mojo.internal.Struct(
    device.mojom.UsbDeviceFilterSpec, 'device.mojom.UsbDeviceFilter', [
      mojo.internal.StructField('has_vendor_id', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('vendor_id', 2, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_product_id', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('product_id', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('has_class_code', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('class_code', 9, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('has_subclass_code', 10, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('subclass_code', 11, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('has_protocol_code', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('protocol_code', 13, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('serial_number', 16, 0, mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UsbEnumerationOptions
mojo.internal.Struct(
    device.mojom.UsbEnumerationOptionsSpec, 'device.mojom.UsbEnumerationOptions', [
      mojo.internal.StructField('filters', 0, 0, mojo.internal.Array(device.mojom.UsbDeviceFilterSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);
