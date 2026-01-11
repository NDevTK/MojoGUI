// Auto-generated MojoJS binding
 // Source: chromium_src/services/data_decoder/public/mojom/data_decoder_service.mojom
 // Module: data_decoder.mojom

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

         const versionStr = window.mojoVersion || '120.0.0.0';
         const p = versionStr.split('.');
         const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
         
         const shortName = ifaceName.split('.').pop();
         while (true) {
           i++;
           const h0 = SHA256(salt + shortName + i);
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
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 

 mojo.internal.bindings.data_decoder = mojo.internal.bindings.data_decoder || {};
mojo.internal.bindings.data_decoder.mojom = mojo.internal.bindings.data_decoder.mojom || {};
mojo.internal.bindings.payments = mojo.internal.bindings.payments || {};
mojo.internal.bindings.web_package = mojo.internal.bindings.web_package || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};

mojo.internal.bindings.data_decoder.mojom.DataDecoderService = {};
mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceSpec = { $ : {} };
mojo.internal.bindings.data_decoder.mojom.DataDecoderService.$interfaceName = 'data_decoder.mojom.DataDecoderService';
mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec = { $: {} };
mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec = { $: {} };
mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec = { $: {} };
mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec = { $: {} };
mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec = { $: {} };
mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec = { $: {} };

// Interface: DataDecoderService
mojo.internal.Struct(
    mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindImageDecoder_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.data_decoder.mojom.ImageDecoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindXmlParser_Params', [
      mojo.internal.StructField('arg_reciever', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.data_decoder.mojom.XmlParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.web_package.mojom.WebBundleParserFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindGzipper_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.data_decoder.mojom.GzipperRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.data_decoder.mojom.StructuredHeadersParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindCborParser_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.data_decoder.mojom.CborParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindPixCodeValidator_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.payments.facilitated.mojom.PixCodeValidatorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.bindings.data_decoder.mojom.DataDecoderServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.DataDecoderService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.data_decoder.mojom.DataDecoderServicePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  bindImageDecoder(arg_receiver) {
    return this.$.bindImageDecoder(arg_receiver);
  }
  bindXmlParser(arg_reciever) {
    return this.$.bindXmlParser(arg_reciever);
  }
  bindWebBundleParserFactory(arg_receiver) {
    return this.$.bindWebBundleParserFactory(arg_receiver);
  }
  bindGzipper(arg_receiver) {
    return this.$.bindGzipper(arg_receiver);
  }
  bindStructuredHeadersParser(arg_receiver) {
    return this.$.bindStructuredHeadersParser(arg_receiver);
  }
  bindCborParser(arg_receiver) {
    return this.$.bindCborParser(arg_receiver);
  }
  bindPixCodeValidator(arg_receiver) {
    return this.$.bindPixCodeValidator(arg_receiver);
  }
};

mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('data_decoder.mojom.DataDecoderService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindImageDecoder(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindXmlParser(arg_reciever) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec,
      null,
      [arg_reciever],
      false);
  }

  bindWebBundleParserFactory(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindGzipper(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindStructuredHeadersParser(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindCborParser(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  bindPixCodeValidator(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

};

mojo.internal.bindings.data_decoder.mojom.DataDecoderService.getRemote = function() {
  let remote = new mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.DataDecoderService',
    'context');
  return remote.$;
};

mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('data_decoder.mojom.DataDecoderService', [
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
        
        // Try Method 0: BindImageDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindImageDecoder (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: BindXmlParser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindXmlParser (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: BindWebBundleParserFactory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindWebBundleParserFactory (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: BindGzipper
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindGzipper (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: BindStructuredHeadersParser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindStructuredHeadersParser (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: BindCborParser
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindCborParser (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: BindPixCodeValidator
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec.$.structSpec);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> BindPixCodeValidator (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindImageDecoder');
          const result = this.impl.bindImageDecoder(params.arg_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindXmlParser');
          const result = this.impl.bindXmlParser(params.arg_reciever);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindWebBundleParserFactory');
          const result = this.impl.bindWebBundleParserFactory(params.arg_receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindGzipper');
          const result = this.impl.bindGzipper(params.arg_receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindStructuredHeadersParser');
          const result = this.impl.bindStructuredHeadersParser(params.arg_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindCborParser');
          const result = this.impl.bindCborParser(params.arg_receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindPixCodeValidator');
          const result = this.impl.bindPixCodeValidator(params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceReceiver = mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceReceiver;

mojo.internal.bindings.data_decoder.mojom.DataDecoderServicePtr = mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceRemote;
mojo.internal.bindings.data_decoder.mojom.DataDecoderServiceRequest = mojo.internal.bindings.data_decoder.mojom.DataDecoderServicePendingReceiver;

