// Auto-generated MojoJS binding
// Source: chromium_src/services/device/public/mojom/usb_enumeration_options.mojom
// Module: device.mojom

'use strict';

// Module namespace
var device = device || {};
device.mojom = device.mojom || {};


// Struct: UsbDeviceFilter
device.mojom.UsbDeviceFilterSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbDeviceFilter',
      packedSize: 32,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: true },
        { name: 'vendor_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'product_id', packedOffset: 10, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false },
        { name: 'class_code', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'subclass_code', packedOffset: 13, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'protocol_code', packedOffset: 14, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false },
        { name: 'has_vendor_id', packedOffset: 15, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'has_product_id', packedOffset: 15, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false },
        { name: 'has_class_code', packedOffset: 15, packedBitOffset: 2, type: mojo.internal.Bool, nullable: false },
        { name: 'has_subclass_code', packedOffset: 15, packedBitOffset: 3, type: mojo.internal.Bool, nullable: false },
        { name: 'has_protocol_code', packedOffset: 15, packedBitOffset: 4, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: UsbEnumerationOptions
device.mojom.UsbEnumerationOptionsSpec = {
  $: {
    structSpec: {
      name: 'device.mojom.UsbEnumerationOptions',
      packedSize: 16,
      fields: [
        { name: 'filters', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
