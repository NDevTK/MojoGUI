// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_handler_host.mojom
// Module: payments.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};


// Struct: PaymentHandlerMethodData
payments.mojom.PaymentHandlerMethodDataSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerMethodData',
      packedSize: 24,
      fields: [
        { name: 'method_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'stringified_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentHandlerModifier
payments.mojom.PaymentHandlerModifierSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerModifier',
      packedSize: 24,
      fields: [
        { name: 'total', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'method_data', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: PaymentRequestDetailsUpdate
payments.mojom.PaymentRequestDetailsUpdateSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentRequestDetailsUpdate',
      packedSize: 56,
      fields: [
        { name: 'total', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
        { name: 'shipping_options', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'modifiers', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array, nullable: true },
        { name: 'error', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'stringified_payment_method_errors', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'shipping_address_errors', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Interface: PaymentHandlerHost
payments.mojom.PaymentHandlerHost = {};

payments.mojom.PaymentHandlerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentHandlerHostRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentHandlerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentHandlerHostPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentHandlerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.PaymentHandlerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  changePaymentMethod(method_data) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParamsSpec,
      [method_data]);
  }

  changeShippingOption(shipping_option_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParamsSpec,
      [shipping_option_id]);
  }

  changeShippingAddress(shipping_address) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec,
      payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParamsSpec,
      [shipping_address]);
  }

};

payments.mojom.PaymentHandlerHost.getRemote = function() {
  let remote = new payments.mojom.PaymentHandlerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentHandlerHost',
    'context');
  return remote.$;
};

// ParamsSpec for ChangePaymentMethod
payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerHost.ChangePaymentMethod_Params',
      packedSize: 16,
      fields: [
        { name: 'method_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentHandlerHost_ChangePaymentMethod_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerHost.ChangePaymentMethod_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ChangeShippingOption
payments.mojom.PaymentHandlerHost_ChangeShippingOption_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerHost.ChangeShippingOption_Params',
      packedSize: 16,
      fields: [
        { name: 'shipping_option_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentHandlerHost_ChangeShippingOption_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerHost.ChangeShippingOption_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ChangeShippingAddress
payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerHost.ChangeShippingAddress_Params',
      packedSize: 16,
      fields: [
        { name: 'shipping_address', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

payments.mojom.PaymentHandlerHost_ChangeShippingAddress_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'payments.mojom.PaymentHandlerHost.ChangeShippingAddress_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response_data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
payments.mojom.PaymentHandlerHostPtr = payments.mojom.PaymentHandlerHostRemote;
payments.mojom.PaymentHandlerHostRequest = payments.mojom.PaymentHandlerHostPendingReceiver;

