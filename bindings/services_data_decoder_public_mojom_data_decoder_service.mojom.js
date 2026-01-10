// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/data_decoder_service.mojom
// Module: data_decoder.mojom

'use strict';

// Module namespace
var data_decoder = data_decoder || {};
data_decoder.mojom = data_decoder.mojom || {};
var payments = payments || {};
var web_package = web_package || {};
var sandbox = sandbox || {};

data_decoder.mojom.DataDecoderService = {};
data_decoder.mojom.DataDecoderService.$interfaceName = 'data_decoder.mojom.DataDecoderService';
data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec = { $: {} };
data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec = { $: {} };
data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec = { $: {} };
data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec = { $: {} };
data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec = { $: {} };
data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec = { $: {} };
data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec = { $: {} };

// Interface: DataDecoderService
mojo.internal.Struct(
    data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindImageDecoder_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(data_decoder.mojom.ImageDecoderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindXmlParser_Params', [
      mojo.internal.StructField('reciever', 0, 0, mojo.internal.InterfaceRequest(data_decoder.mojom.XmlParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(web_package.mojom.WebBundleParserFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindGzipper_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(data_decoder.mojom.GzipperRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(data_decoder.mojom.StructuredHeadersParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindCborParser_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(data_decoder.mojom.CborParserRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec, 'data_decoder.mojom.DataDecoderService_BindPixCodeValidator_Params', [
      mojo.internal.StructField('receiver', 0, 0, mojo.internal.InterfaceRequest(payments.facilitated.mojom.PixCodeValidatorRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

data_decoder.mojom.DataDecoderServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

data_decoder.mojom.DataDecoderServiceRemote = class {
  static get $interfaceName() {
    return 'data_decoder.mojom.DataDecoderService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      data_decoder.mojom.DataDecoderServicePendingReceiver,
      handle);
    this.$ = new data_decoder.mojom.DataDecoderServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

data_decoder.mojom.DataDecoderServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  bindImageDecoder(receiver) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindXmlParser(reciever) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec,
      null,
      [reciever],
      false);
  }

  bindWebBundleParserFactory(receiver) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGzipper(receiver) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindStructuredHeadersParser(receiver) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCborParser(receiver) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPixCodeValidator(receiver) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec,
      null,
      [receiver],
      false);
  }

};

data_decoder.mojom.DataDecoderService.getRemote = function() {
  let remote = new data_decoder.mojom.DataDecoderServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'data_decoder.mojom.DataDecoderService',
    'context');
  return remote.$;
};

data_decoder.mojom.DataDecoderServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        
        // Try Method 0: BindImageDecoder
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec.$, message.header.headerSize);
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
             decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec.$, message.header.headerSize);
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
          const params = decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindImageDecoder');
          const result = this.impl.bindImageDecoder(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindXmlParser');
          const result = this.impl.bindXmlParser(params.reciever);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindWebBundleParserFactory');
          const result = this.impl.bindWebBundleParserFactory(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindGzipper');
          const result = this.impl.bindGzipper(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindStructuredHeadersParser');
          const result = this.impl.bindStructuredHeadersParser(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindCborParser');
          const result = this.impl.bindCborParser(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.bindPixCodeValidator');
          const result = this.impl.bindPixCodeValidator(params.receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

data_decoder.mojom.DataDecoderServiceReceiver = data_decoder.mojom.DataDecoderServiceReceiver;

data_decoder.mojom.DataDecoderServicePtr = data_decoder.mojom.DataDecoderServiceRemote;
data_decoder.mojom.DataDecoderServiceRequest = data_decoder.mojom.DataDecoderServicePendingReceiver;

