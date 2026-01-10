// Auto-generated MojoJS binding
// Source: chromium_src/components/facilitated_payments/core/mojom/pix_code_validator.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.facilitated.mojom = payments.facilitated.facilitated.mojom || {};


// Enum: PixQrCodeType
payments.facilitated.facilitated.mojom.mojom.PixQrCodeType = {
  kInvalid: 0,
  kDynamic: 1,
  kStatic: 2,
};
payments.facilitated.facilitated.mojom.mojom.PixQrCodeTypeSpec = { $: mojo.internal.Enum() };

// Interface: PixCodeValidator
payments.facilitated.facilitated.mojom.mojom.PixCodeValidator = {};

payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorRemote = class {
  static get $interfaceName() {
    return 'payments.facilitated.mojom.PixCodeValidator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorPendingReceiver,
      handle);
    this.$ = new payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  validatePixCode(input_text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.facilitated.facilitated.mojom.mojom.PixCodeValidator_ValidatePixCode_ParamsSpec,
      payments.facilitated.facilitated.mojom.mojom.PixCodeValidator_ValidatePixCode_ResponseParamsSpec,
      [input_text]);
  }

};

payments.facilitated.facilitated.mojom.mojom.PixCodeValidator.getRemote = function() {
  let remote = new payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.facilitated.mojom.PixCodeValidator',
    'context');
  return remote.$;
};

// ParamsSpec for ValidatePixCode
payments.facilitated.facilitated.mojom.mojom.PixCodeValidator_ValidatePixCode_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.facilitated.mojom.PixCodeValidator.ValidatePixCode_Params',
      packedSize: 16,
      fields: [
        { name: 'input_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

payments.facilitated.facilitated.mojom.mojom.PixCodeValidator_ValidatePixCode_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.facilitated.mojom.PixCodeValidator.ValidatePixCode_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'pix_qr_code_type', packedOffset: 0, packedBitOffset: 0, type: payments.facilitated.mojom.PixQrCodeTypeSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorPtr = payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorRemote;
payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorRequest = payments.facilitated.facilitated.mojom.mojom.PixCodeValidatorPendingReceiver;

