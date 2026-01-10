// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/registration_header_error.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Union: RegistrationHeaderErrorDetails
attribution_reporting.mojom.RegistrationHeaderErrorDetailsSpec = { $: mojo.internal.Union(
    'attribution_reporting.mojom.RegistrationHeaderErrorDetails', {
      'source_error': {
        'ordinal': 0,
        'type': attribution_reporting.mojom.SourceRegistrationErrorSpec,
      }},
      'trigger_error': {
        'ordinal': 1,
        'type': attribution_reporting.mojom.TriggerRegistrationErrorSpec,
      }},
      'os_source_error': {
        'ordinal': 2,
        'type': attribution_reporting.mojom.OsRegistrationErrorSpec,
      }},
      'os_trigger_error': {
        'ordinal': 3,
        'type': attribution_reporting.mojom.OsRegistrationErrorSpec,
      }},
    })
};

// Struct: RegistrationHeaderError
attribution_reporting.mojom.RegistrationHeaderErrorSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.RegistrationHeaderError',
      packedSize: 32,
      fields: [
        { name: 'header_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'error_details', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.RegistrationHeaderErrorDetailsSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};
