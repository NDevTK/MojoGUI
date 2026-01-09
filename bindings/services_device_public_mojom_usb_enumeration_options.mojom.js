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
      packedSize: 16,
      fields: [
        { name: 'serial_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
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
