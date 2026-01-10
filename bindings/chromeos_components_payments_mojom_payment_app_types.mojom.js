// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app_types.mojom
// Module: chromeos.payments.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};


// Union: IsPaymentImplementedResult
chromeos.payments.mojom.IsPaymentImplementedResultSpec = { $: mojo.internal.Union(
    'chromeos.payments.mojom.IsPaymentImplementedResult', {
      'valid': {
        'ordinal': 0,
        'type': chromeos.payments.mojom.IsPaymentImplementedValidResultSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Union: IsReadyToPayResult
chromeos.payments.mojom.IsReadyToPayResultSpec = { $: mojo.internal.Union(
    'chromeos.payments.mojom.IsReadyToPayResult', {
      'response': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Union: InvokePaymentAppResult
chromeos.payments.mojom.InvokePaymentAppResultSpec = { $: mojo.internal.Union(
    'chromeos.payments.mojom.InvokePaymentAppResult', {
      'valid': {
        'ordinal': 0,
        'type': chromeos.payments.mojom.InvokePaymentAppValidResultSpec,
      }},
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
      }},
    })
};

// Struct: IsPaymentImplementedValidResult
chromeos.payments.mojom.IsPaymentImplementedValidResultSpec = {
  $: {
    structSpec: {
      name: 'chromeos.payments.mojom.IsPaymentImplementedValidResult',
      packedSize: 24,
      fields: [
        { name: 'activity_names', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'service_names', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
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
        { name: 'package_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'activity_or_service_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'stringified_method_data', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'top_level_origin', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'payment_request_origin', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'payment_request_id', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 2 },
        { name: 'request_token', packedOffset: 48, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 3 },
        { name: 'twa_instance_identifier', packedOffset: 56, packedBitOffset: 0, type: mojo_base.mojom.UnguessableTokenSpec, nullable: true, minVersion: 4 },
      ],
      versions: [{version: 0, packedSize: 48}, {version: 2, packedSize: 56}, {version: 3, packedSize: 64}, {version: 4, packedSize: 72}]
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
        { name: 'is_activity_result_ok', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'stringified_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};
