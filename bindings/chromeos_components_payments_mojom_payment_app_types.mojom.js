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
      packedSize: 24,
      fields: [
        { name: 'activity_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
        { name: 'service_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
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
      packedSize: 72,
      fields: [
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'activity_or_service_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'stringified_method_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'top_level_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payment_request_origin', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'payment_request_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'request_token', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'twa_instance_identifier', packedOffset: 56, packedBitOffset: 0, type: [MinVersion=4] mojo_base.mojom.UnguessableTokenSpec, nullable: true },
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
      packedSize: 24,
      fields: [
        { name: 'stringified_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'is_activity_result_ok', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
