// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/payments/payment_request.mojom
// Module: payments.mojom

'use strict';
(function() {
  const SHA256 = (s) => {
    const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
    const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    const m = new TextEncoder().encode(s);
    const l = m.length;
    const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
    for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
    b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
    b[b.length - 1] = l * 8;
    for (let i = 0; i < b.length; i += 16) {
      let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
      const w = new Uint32Array(64);
      for (let j = 0; j < 64; j++) {
        if (j < 16) w[j] = b[i + j];
        else {
          const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
          const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
          w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
        }
        const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
        const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
        h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
      }
      h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
      h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
    }
    return h[0];
  };
  window.mojoScrambler = window.mojoScrambler || {
    getOrdinals: (ifaceName, methodSpecs) => {
      const params = new URLSearchParams(window.location.search);
      const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
      
      const seen = new Set();
      methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
      let i = 0;
      return methodSpecs.map((ms, idx) => {
        if (ms.explicit !== null) return ms.explicit;
        if (forceNoScramble) return idx;

        const p = window.mojoVersion.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        console.log('[MojoScrambler] Derived Salt:', JSON.stringify(salt));
        
        while (true) {
          i++;
          const h0 = SHA256(salt + ifaceName.split('.').pop() + i);
          const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
          if (!seen.has(ord)) {
            seen.add(ord);
            return ord;
          }
        }
      });
    }
  };
})();

// Module namespace
var payments = payments || {};
payments.mojom = payments.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};
var blink = blink || {};

payments.mojom.PaymentErrorReasonSpec = { $: mojo.internal.Enum() };
payments.mojom.CanMakePaymentQueryResultSpec = { $: mojo.internal.Enum() };
payments.mojom.HasEnrolledInstrumentQueryResultSpec = { $: mojo.internal.Enum() };
payments.mojom.AndroidPayEnvironmentSpec = { $: mojo.internal.Enum() };
payments.mojom.BasicCardNetworkSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentShippingTypeSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentCompleteSpec = { $: mojo.internal.Enum() };
payments.mojom.PaymentResponseSpec = { $: {} };
payments.mojom.PayerDetailSpec = { $: {} };
payments.mojom.PaymentItemSpec = { $: {} };
payments.mojom.PaymentShippingOptionSpec = { $: {} };
payments.mojom.SecurePaymentConfirmationRequestSpec = { $: {} };
payments.mojom.NetworkOrIssuerInformationSpec = { $: {} };
payments.mojom.PaymentEntityLogoSpec = { $: {} };
payments.mojom.PaymentMethodDataSpec = { $: {} };
payments.mojom.PaymentDetailsModifierSpec = { $: {} };
payments.mojom.PaymentDetailsSpec = { $: {} };
payments.mojom.PaymentOptionsSpec = { $: {} };
payments.mojom.PaymentRequestClient = {};
payments.mojom.PaymentRequestClient.$interfaceName = 'payments.mojom.PaymentRequestClient';
payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnError_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec = { $: {} };
payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec = { $: {} };
payments.mojom.PaymentRequest = {};
payments.mojom.PaymentRequest.$interfaceName = 'payments.mojom.PaymentRequest';
payments.mojom.PaymentRequest_Init_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Show_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_UpdateWith_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Abort_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Complete_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_Retry_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec = { $: {} };
payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec = { $: {} };

// Enum: PaymentErrorReason
payments.mojom.PaymentErrorReason = {
  UNKNOWN: 0,
  USER_CANCEL: 1,
  NOT_SUPPORTED: 2,
  NOT_SUPPORTED_FOR_INVALID_ORIGIN_OR_SSL: 3,
  ALREADY_SHOWING: 4,
  INVALID_DATA_FROM_RENDERER: 5,
  NOT_ALLOWED_ERROR: 6,
  USER_OPT_OUT: 7,
  USER_ACTIVATION_REQUIRED: 8,
};

// Enum: CanMakePaymentQueryResult
payments.mojom.CanMakePaymentQueryResult = {
  CAN_MAKE_PAYMENT: 0,
  CANNOT_MAKE_PAYMENT: 1,
};

// Enum: HasEnrolledInstrumentQueryResult
payments.mojom.HasEnrolledInstrumentQueryResult = {
  HAS_ENROLLED_INSTRUMENT: 0,
  HAS_NO_ENROLLED_INSTRUMENT: 1,
  QUERY_QUOTA_EXCEEDED: 2,
  WARNING_HAS_ENROLLED_INSTRUMENT: 3,
  WARNING_HAS_NO_ENROLLED_INSTRUMENT: 4,
};

// Enum: AndroidPayEnvironment
payments.mojom.AndroidPayEnvironment = {
  PRODUCTION: 0,
  TEST: 1,
};

// Enum: BasicCardNetwork
payments.mojom.BasicCardNetwork = {
  AMEX: 0,
  DINERS: 1,
  DISCOVER: 2,
  JCB: 3,
  MASTERCARD: 4,
  MIR: 5,
  UNIONPAY: 6,
  VISA: 7,
};

// Enum: PaymentShippingType
payments.mojom.PaymentShippingType = {
  SHIPPING: 0,
  DELIVERY: 1,
  PICKUP: 2,
};

// Enum: PaymentComplete
payments.mojom.PaymentComplete = {
  FAIL: 0,
  SUCCESS: 1,
  UNKNOWN: 2,
};

// Struct: PaymentResponse
mojo.internal.Struct(
    payments.mojom.PaymentResponseSpec, 'payments.mojom.PaymentResponse', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('shipping_address', 16, 0, payments.mojom.PaymentAddressSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('shipping_option', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('payer', 32, 0, payments.mojom.PayerDetailSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('get_assertion_authenticator_response', 40, 0, blink.mojom.GetAssertionAuthenticatorResponseSpec.$, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PayerDetail
mojo.internal.Struct(
    payments.mojom.PayerDetailSpec, 'payments.mojom.PayerDetail', [
      mojo.internal.StructField('email', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('phone', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaymentItem
mojo.internal.Struct(
    payments.mojom.PaymentItemSpec, 'payments.mojom.PaymentItem', [
      mojo.internal.StructField('label', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('amount', 8, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('pending', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaymentShippingOption
mojo.internal.Struct(
    payments.mojom.PaymentShippingOptionSpec, 'payments.mojom.PaymentShippingOption', [
      mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('amount', 16, 0, payments.mojom.PaymentCurrencyAmountSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: SecurePaymentConfirmationRequest
mojo.internal.Struct(
    payments.mojom.SecurePaymentConfirmationRequestSpec, 'payments.mojom.SecurePaymentConfirmationRequest', [
      mojo.internal.StructField('credential_ids', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
      mojo.internal.StructField('challenge', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('instrument', 16, 0, blink.mojom.PaymentCredentialInstrumentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('timeout', 24, 0, mojo_base.mojom.TimeDeltaSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payee_origin', 32, 0, url.mojom.OriginSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('payee_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('rp_id', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('extensions', 56, 0, blink.mojom.AuthenticationExtensionsClientInputsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('browser_bound_pub_key_cred_params', 64, 0, mojo.internal.Array(blink.mojom.PublicKeyCredentialParametersSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('payment_entities_logos', 72, 0, mojo.internal.Array(payments.mojom.PaymentEntityLogoSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('show_opt_out', 80, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 96]]);

// Struct: NetworkOrIssuerInformation
mojo.internal.Struct(
    payments.mojom.NetworkOrIssuerInformationSpec, 'payments.mojom.NetworkOrIssuerInformation', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('icon', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentEntityLogo
mojo.internal.Struct(
    payments.mojom.PaymentEntityLogoSpec, 'payments.mojom.PaymentEntityLogo', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PaymentMethodData
mojo.internal.Struct(
    payments.mojom.PaymentMethodDataSpec, 'payments.mojom.PaymentMethodData', [
      mojo.internal.StructField('supported_method', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('environment', 16, 0, payments.mojom.AndroidPayEnvironmentSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('supported_networks', 24, 0, mojo.internal.Array(payments.mojom.BasicCardNetworkSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('secure_payment_confirmation', 32, 0, payments.mojom.SecurePaymentConfirmationRequestSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('min_google_play_services_version', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('api_version', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: PaymentDetailsModifier
mojo.internal.Struct(
    payments.mojom.PaymentDetailsModifierSpec, 'payments.mojom.PaymentDetailsModifier', [
      mojo.internal.StructField('total', 0, 0, payments.mojom.PaymentItemSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('additional_display_items', 8, 0, mojo.internal.Array(payments.mojom.PaymentItemSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('method_data', 16, 0, payments.mojom.PaymentMethodDataSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PaymentDetails
mojo.internal.Struct(
    payments.mojom.PaymentDetailsSpec, 'payments.mojom.PaymentDetails', [
      mojo.internal.StructField('total', 0, 0, payments.mojom.PaymentItemSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('display_items', 8, 0, mojo.internal.Array(payments.mojom.PaymentItemSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('shipping_options', 16, 0, mojo.internal.Array(payments.mojom.PaymentShippingOptionSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('modifiers', 24, 0, mojo.internal.Array(payments.mojom.PaymentDetailsModifierSpec.$, false), null, true, 0, undefined),
      mojo.internal.StructField('error', 32, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('shipping_address_errors', 40, 0, payments.mojom.AddressErrorsSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('id', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('stringified_payment_method_errors', 56, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: PaymentOptions
mojo.internal.Struct(
    payments.mojom.PaymentOptionsSpec, 'payments.mojom.PaymentOptions', [
      mojo.internal.StructField('shipping_type', 0, 0, payments.mojom.PaymentShippingTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('request_payer_name', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_payer_email', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_payer_phone', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('request_shipping', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PaymentRequestClient
mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnPaymentMethodChange_Params', [
      mojo.internal.StructField('method_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('stringified_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnShippingAddressChange_Params', [
      mojo.internal.StructField('address', 0, 0, payments.mojom.PaymentAddressSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnShippingOptionChange_Params', [
      mojo.internal.StructField('shipping_option_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnPayerDetailChange_Params', [
      mojo.internal.StructField('detail', 0, 0, payments.mojom.PayerDetailSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnPaymentResponse_Params', [
      mojo.internal.StructField('response', 0, 0, payments.mojom.PaymentResponseSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnError_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnError_Params', [
      mojo.internal.StructField('error', 0, 0, payments.mojom.PaymentErrorReasonSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnComplete_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnAbort_Params', [
      mojo.internal.StructField('aborted_successfully', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnCanMakePayment_Params', [
      mojo.internal.StructField('result', 0, 0, payments.mojom.CanMakePaymentQueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec, 'payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_Params', [
      mojo.internal.StructField('result', 0, 0, payments.mojom.HasEnrolledInstrumentQueryResultSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec, 'payments.mojom.PaymentRequestClient_WarnNoFavicon_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec, 'payments.mojom.PaymentRequestClient_AllowConnectToSource_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_before_redirects', 8, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('did_follow_redirect', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec, 'payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParams', [
      mojo.internal.StructField('allow', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

payments.mojom.PaymentRequestClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentRequestClientRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentRequestClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentRequestClientPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentRequestClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.PaymentRequestClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onPaymentMethodChange(method_name, stringified_details) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec,
      null,
      [method_name, stringified_details],
      false);
  }

  onShippingAddressChange(address) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec,
      null,
      [address],
      false);
  }

  onShippingOptionChange(shipping_option_id) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec,
      null,
      [shipping_option_id],
      false);
  }

  onPayerDetailChange(detail) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec,
      null,
      [detail],
      false);
  }

  onPaymentResponse(response) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec,
      null,
      [response],
      false);
  }

  onError(error, error_message) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      payments.mojom.PaymentRequestClient_OnError_ParamsSpec,
      null,
      [error, error_message],
      false);
  }

  onComplete() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec,
      null,
      [],
      false);
  }

  onAbort(aborted_successfully) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec,
      null,
      [aborted_successfully],
      false);
  }

  onCanMakePayment(result) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec,
      null,
      [result],
      false);
  }

  onHasEnrolledInstrument(result) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec,
      null,
      [result],
      false);
  }

  warnNoFavicon() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec,
      null,
      [],
      false);
  }

  allowConnectToSource(url, url_before_redirects, did_follow_redirect) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec,
      payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec,
      [url, url_before_redirects, did_follow_redirect],
      false);
  }

};

payments.mojom.PaymentRequestClient.getRemote = function() {
  let remote = new payments.mojom.PaymentRequestClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentRequestClient',
    'context');
  return remote.$;
};

payments.mojom.PaymentRequestClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentRequestClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OnPaymentMethodChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPaymentMethodChange (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: OnShippingAddressChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShippingAddressChange (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: OnShippingOptionChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnShippingOptionChange (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPayerDetailChange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPayerDetailChange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: OnPaymentResponse
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPaymentResponse (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: OnError
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnError_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnError (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: OnComplete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnComplete (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: OnAbort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnAbort (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: OnCanMakePayment
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnCanMakePayment (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        // Try Method 9: OnHasEnrolledInstrument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnHasEnrolledInstrument (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 9 failed:', e);
           }
        }
        // Try Method 10: WarnNoFavicon
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> WarnNoFavicon (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 10 failed:', e);
           }
        }
        // Try Method 11: AllowConnectToSource
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllowConnectToSource (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 11 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentMethodChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPaymentMethodChange');
          const result = this.impl.onPaymentMethodChange(params.method_name, params.stringified_details);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingAddressChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShippingAddressChange');
          const result = this.impl.onShippingAddressChange(params.address);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnShippingOptionChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onShippingOptionChange');
          const result = this.impl.onShippingOptionChange(params.shipping_option_id);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPayerDetailChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPayerDetailChange');
          const result = this.impl.onPayerDetailChange(params.detail);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnPaymentResponse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPaymentResponse');
          const result = this.impl.onPaymentResponse(params.response);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onError');
          const result = this.impl.onError(params.error, params.error_message);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnComplete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onComplete');
          const result = this.impl.onComplete();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnAbort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onAbort');
          const result = this.impl.onAbort(params.aborted_successfully);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnCanMakePayment_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCanMakePayment');
          const result = this.impl.onCanMakePayment(params.result);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_OnHasEnrolledInstrument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHasEnrolledInstrument');
          const result = this.impl.onHasEnrolledInstrument(params.result);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_WarnNoFavicon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.warnNoFavicon');
          const result = this.impl.warnNoFavicon();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequestClient_AllowConnectToSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.allowConnectToSource');
          const result = this.impl.allowConnectToSource(params.url, params.url_before_redirects, params.did_follow_redirect);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.mojom.PaymentRequestClient_AllowConnectToSource_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

payments.mojom.PaymentRequestClientReceiver = payments.mojom.PaymentRequestClientReceiver;

payments.mojom.PaymentRequestClientPtr = payments.mojom.PaymentRequestClientRemote;
payments.mojom.PaymentRequestClientRequest = payments.mojom.PaymentRequestClientPendingReceiver;


// Interface: PaymentRequest
mojo.internal.Struct(
    payments.mojom.PaymentRequest_Init_ParamsSpec, 'payments.mojom.PaymentRequest_Init_Params', [
      mojo.internal.StructField('client', 0, 0, mojo.internal.InterfaceProxy(payments.mojom.PaymentRequestClientSpec), null, false, 0, undefined),
      mojo.internal.StructField('method_data', 8, 0, mojo.internal.Array(payments.mojom.PaymentMethodDataSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('details', 16, 0, payments.mojom.PaymentDetailsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('options', 24, 0, payments.mojom.PaymentOptionsSpec.$, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Show_ParamsSpec, 'payments.mojom.PaymentRequest_Show_Params', [
      mojo.internal.StructField('wait_for_updated_details', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('had_user_activation', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_UpdateWith_ParamsSpec, 'payments.mojom.PaymentRequest_UpdateWith_Params', [
      mojo.internal.StructField('details', 0, 0, payments.mojom.PaymentDetailsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec, 'payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Abort_ParamsSpec, 'payments.mojom.PaymentRequest_Abort_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Complete_ParamsSpec, 'payments.mojom.PaymentRequest_Complete_Params', [
      mojo.internal.StructField('result', 0, 0, payments.mojom.PaymentCompleteSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_Retry_ParamsSpec, 'payments.mojom.PaymentRequest_Retry_Params', [
      mojo.internal.StructField('errors', 0, 0, payments.mojom.PaymentValidationErrorsSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec, 'payments.mojom.PaymentRequest_CanMakePayment_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec, 'payments.mojom.PaymentRequest_HasEnrolledInstrument_Params', [
    ],
    [[0, 8]]);

payments.mojom.PaymentRequestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.mojom.PaymentRequestRemote = class {
  static get $interfaceName() {
    return 'payments.mojom.PaymentRequest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.mojom.PaymentRequestPendingReceiver,
      handle);
    this.$ = new payments.mojom.PaymentRequestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.mojom.PaymentRequestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PaymentRequest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  init(client, method_data, details, options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      payments.mojom.PaymentRequest_Init_ParamsSpec,
      null,
      [client, method_data, details, options],
      false);
  }

  show(wait_for_updated_details, had_user_activation) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      payments.mojom.PaymentRequest_Show_ParamsSpec,
      null,
      [wait_for_updated_details, had_user_activation],
      false);
  }

  updateWith(details) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      payments.mojom.PaymentRequest_UpdateWith_ParamsSpec,
      null,
      [details],
      false);
  }

  onPaymentDetailsNotUpdated() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec,
      null,
      [],
      false);
  }

  abort() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      payments.mojom.PaymentRequest_Abort_ParamsSpec,
      null,
      [],
      false);
  }

  complete(result) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      payments.mojom.PaymentRequest_Complete_ParamsSpec,
      null,
      [result],
      false);
  }

  retry(errors) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      payments.mojom.PaymentRequest_Retry_ParamsSpec,
      null,
      [errors],
      false);
  }

  canMakePayment() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec,
      null,
      [],
      false);
  }

  hasEnrolledInstrument() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec,
      null,
      [],
      false);
  }

};

payments.mojom.PaymentRequest.getRemote = function() {
  let remote = new payments.mojom.PaymentRequestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.mojom.PaymentRequest',
    'context');
  return remote.$;
};

payments.mojom.PaymentRequestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PaymentRequest', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
      this.ordinalMap.set(idx, idx); // Sequential Fallback (Non-scrambled builds)
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: Init
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Init_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Init (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: Show
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Show_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Show (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: UpdateWith
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_UpdateWith_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> UpdateWith (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: OnPaymentDetailsNotUpdated
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OnPaymentDetailsNotUpdated (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: Abort
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Abort_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Abort (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: Complete
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Complete_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Complete (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: Retry
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_Retry_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Retry (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: CanMakePayment
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CanMakePayment (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
           }
        }
        // Try Method 8: HasEnrolledInstrument
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasEnrolledInstrument (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 8 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Init_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.init');
          const result = this.impl.init(params.client, params.method_data, params.details, params.options);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Show_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.show');
          const result = this.impl.show(params.wait_for_updated_details, params.had_user_activation);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_UpdateWith_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateWith');
          const result = this.impl.updateWith(params.details);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_OnPaymentDetailsNotUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPaymentDetailsNotUpdated');
          const result = this.impl.onPaymentDetailsNotUpdated();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Abort_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.abort');
          const result = this.impl.abort();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Complete_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.complete');
          const result = this.impl.complete(params.result);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_Retry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.retry');
          const result = this.impl.retry(params.errors);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_CanMakePayment_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.canMakePayment');
          const result = this.impl.canMakePayment();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(payments.mojom.PaymentRequest_HasEnrolledInstrument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasEnrolledInstrument');
          const result = this.impl.hasEnrolledInstrument();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

payments.mojom.PaymentRequestReceiver = payments.mojom.PaymentRequestReceiver;

payments.mojom.PaymentRequestPtr = payments.mojom.PaymentRequestRemote;
payments.mojom.PaymentRequestRequest = payments.mojom.PaymentRequestPendingReceiver;

