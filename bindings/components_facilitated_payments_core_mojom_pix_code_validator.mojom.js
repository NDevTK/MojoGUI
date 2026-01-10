// Auto-generated MojoJS binding
// Source: chromium_src/components/facilitated_payments/core/mojom/pix_code_validator.mojom
// Module: payments.facilitated.mojom

'use strict';

// Module namespace
var payments = payments || {};
payments.facilitated = payments.facilitated || {};
payments.facilitated.mojom = payments.facilitated.mojom || {};

payments.facilitated.mojom.PixQrCodeTypeSpec = { $: mojo.internal.Enum() };
payments.facilitated.mojom.PixCodeValidator = {};
payments.facilitated.mojom.PixCodeValidator.$interfaceName = 'payments.facilitated.mojom.PixCodeValidator';
payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ParamsSpec = { $: {} };
payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ResponseParamsSpec = { $: {} };

// Enum: PixQrCodeType
payments.facilitated.mojom.PixQrCodeType = {
  kInvalid: 0,
  kDynamic: 1,
  kStatic: 2,
};

// Interface: PixCodeValidator
mojo.internal.Struct(
    payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ParamsSpec, 'payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_Params', [
      mojo.internal.StructField('input_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ResponseParamsSpec, 'payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ResponseParams', [
      mojo.internal.StructField('pix_qr_code_type', 0, 0, payments.facilitated.mojom.PixQrCodeTypeSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

payments.facilitated.mojom.PixCodeValidatorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

payments.facilitated.mojom.PixCodeValidatorRemote = class {
  static get $interfaceName() {
    return 'payments.facilitated.mojom.PixCodeValidator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      payments.facilitated.mojom.PixCodeValidatorPendingReceiver,
      handle);
    this.$ = new payments.facilitated.mojom.PixCodeValidatorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

payments.facilitated.mojom.PixCodeValidatorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  validatePixCode(input_text) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ParamsSpec,
      payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ResponseParamsSpec,
      [input_text],
      false);
  }

};

payments.facilitated.mojom.PixCodeValidator.getRemote = function() {
  let remote = new payments.facilitated.mojom.PixCodeValidatorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'payments.facilitated.mojom.PixCodeValidator',
    'context');
  return remote.$;
};

payments.facilitated.mojom.PixCodeValidatorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
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
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ValidatePixCode
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ValidatePixCode (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
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
          const params = decoder.decodeStruct(payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.validatePixCode');
          const result = this.impl.validatePixCode(params.input_text);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, payments.facilitated.mojom.PixCodeValidator_ValidatePixCode_ResponseParamsSpec);
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

payments.facilitated.mojom.PixCodeValidatorReceiver = payments.facilitated.mojom.PixCodeValidatorReceiver;

payments.facilitated.mojom.PixCodeValidatorPtr = payments.facilitated.mojom.PixCodeValidatorRemote;
payments.facilitated.mojom.PixCodeValidatorRequest = payments.facilitated.mojom.PixCodeValidatorPendingReceiver;

