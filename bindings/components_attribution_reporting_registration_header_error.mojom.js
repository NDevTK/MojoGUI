// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/registration_header_error.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};

attribution_reporting.mojom.RegistrationHeaderErrorDetailsSpec = { $: {} };
attribution_reporting.mojom.RegistrationHeaderErrorSpec = { $: {} };

// Union: RegistrationHeaderErrorDetails
mojo.internal.Union(
    attribution_reporting.mojom.RegistrationHeaderErrorDetailsSpec, 'attribution_reporting.mojom.RegistrationHeaderErrorDetails', {
      'source_error': {
        'ordinal': 0,
        'type': attribution_reporting.mojom.SourceRegistrationErrorSpec.$,
        'nullable': false,
      },
      'trigger_error': {
        'ordinal': 1,
        'type': attribution_reporting.mojom.TriggerRegistrationErrorSpec.$,
        'nullable': false,
      },
      'os_source_error': {
        'ordinal': 2,
        'type': attribution_reporting.mojom.OsRegistrationErrorSpec.$,
        'nullable': false,
      },
      'os_trigger_error': {
        'ordinal': 3,
        'type': attribution_reporting.mojom.OsRegistrationErrorSpec.$,
        'nullable': false,
      },
    });

// Struct: RegistrationHeaderError
mojo.internal.Struct(
    attribution_reporting.mojom.RegistrationHeaderErrorSpec, 'attribution_reporting.mojom.RegistrationHeaderError', [
      mojo.internal.StructField('header_value', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('error_details', 8, 0, attribution_reporting.mojom.RegistrationHeaderErrorDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);
