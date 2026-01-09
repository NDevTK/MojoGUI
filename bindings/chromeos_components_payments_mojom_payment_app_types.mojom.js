// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app_types.mojom
// Module: chromeos.payments.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};


// Struct: IsPaymentImplementedValidResult
chromeos.payments.mojom.IsPaymentImplementedValidResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.IsPaymentImplementedValidResult',
      packedSize: 16,
      fields: [
        { name: 'service_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentParameters
chromeos.payments.mojom.PaymentParametersSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.PaymentParameters',
      packedSize: 16,
      fields: [
        { name: 'twa_instance_identifier', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: InvokePaymentAppValidResult
chromeos.payments.mojom.InvokePaymentAppValidResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.InvokePaymentAppValidResult',
      packedSize: 16,
      fields: [
        { name: 'stringified_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
