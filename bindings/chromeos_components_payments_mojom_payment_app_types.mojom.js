// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/payments/mojom/payment_app_types.mojom
// Module: chromeos.payments.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.payments = chromeos.payments || {};
chromeos.payments.mojom = chromeos.payments.mojom || {};
var mojo_base = mojo_base || {};

chromeos.payments.mojom.IsPaymentImplementedResultSpec = { $: {} };
chromeos.payments.mojom.IsReadyToPayResultSpec = { $: {} };
chromeos.payments.mojom.InvokePaymentAppResultSpec = { $: {} };
chromeos.payments.mojom.IsPaymentImplementedValidResultSpec = { $: {} };
chromeos.payments.mojom.PaymentParametersSpec = { $: {} };
chromeos.payments.mojom.InvokePaymentAppValidResultSpec = { $: {} };

// Union: IsPaymentImplementedResult
mojo.internal.Union(
    chromeos.payments.mojom.IsPaymentImplementedResultSpec, 'chromeos.payments.mojom.IsPaymentImplementedResult', {
      'valid': {
        'ordinal': 0,
        'type': chromeos.payments.mojom.IsPaymentImplementedValidResultSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: IsReadyToPayResult
mojo.internal.Union(
    chromeos.payments.mojom.IsReadyToPayResultSpec, 'chromeos.payments.mojom.IsReadyToPayResult', {
      'response': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: InvokePaymentAppResult
mojo.internal.Union(
    chromeos.payments.mojom.InvokePaymentAppResultSpec, 'chromeos.payments.mojom.InvokePaymentAppResult', {
      'valid': {
        'ordinal': 0,
        'type': chromeos.payments.mojom.InvokePaymentAppValidResultSpec.$,
        'nullable': false,
      },
      'error': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: IsPaymentImplementedValidResult
mojo.internal.Struct(
    chromeos.payments.mojom.IsPaymentImplementedValidResultSpec, 'chromeos.payments.mojom.IsPaymentImplementedValidResult', [
      mojo.internal.StructField('activity_names', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('service_names', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentParameters
mojo.internal.Struct(
    chromeos.payments.mojom.PaymentParametersSpec, 'chromeos.payments.mojom.PaymentParameters', [
      mojo.internal.StructField('package_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('activity_or_service_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_method_data', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('top_level_origin', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_request_origin', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('payment_request_id', 40, 0, mojo.internal.String, null, true, 2, undefined),
      mojo.internal.StructField('request_token', 48, 0, mojo.internal.String, null, true, 3, undefined),
      mojo.internal.StructField('twa_instance_identifier', 56, 0, mojo_base.mojom.UnguessableTokenSpec.$, null, true, 4, undefined),
    ],
    [[0, 48], [2, 56], [3, 64], [4, 72]]);

// Struct: InvokePaymentAppValidResult
mojo.internal.Struct(
    chromeos.payments.mojom.InvokePaymentAppValidResultSpec, 'chromeos.payments.mojom.InvokePaymentAppValidResult', [
      mojo.internal.StructField('stringified_details', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('is_activity_result_ok', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);
