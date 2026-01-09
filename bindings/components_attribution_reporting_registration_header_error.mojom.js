// Auto-generated MojoJS binding
// Source: chromium_src/components/attribution_reporting/registration_header_error.mojom
// Module: attribution_reporting.mojom

'use strict';

// Module namespace
var attribution_reporting = attribution_reporting || {};
attribution_reporting.mojom = attribution_reporting.mojom || {};


// Struct: RegistrationHeaderError
attribution_reporting.mojom.RegistrationHeaderErrorSpec = {
  $: {
    structSpec: {
      name: 'attribution_reporting.mojom.RegistrationHeaderError',
      packedSize: 24,
      fields: [
        { name: 'header_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'error_details', packedOffset: 8, packedBitOffset: 0, type: attribution_reporting.mojom.RegistrationHeaderErrorDetailsSpec, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
