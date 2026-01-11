// Auto-generated MojoJS binding
// Source: chromium_src/services/data_decoder/public/mojom/data_decoder_service.mojom
// Module: data_decoder.mojom

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
  bindImageDecoder(receiver) {
    return this.$.bindImageDecoder(receiver);
  }
  bindXmlParser(reciever) {
    return this.$.bindXmlParser(reciever);
  }
  bindWebBundleParserFactory(receiver) {
    return this.$.bindWebBundleParserFactory(receiver);
  }
  bindGzipper(receiver) {
    return this.$.bindGzipper(receiver);
  }
  bindStructuredHeadersParser(receiver) {
    return this.$.bindStructuredHeadersParser(receiver);
  }
  bindCborParser(receiver) {
    return this.$.bindCborParser(receiver);
  }
  bindPixCodeValidator(receiver) {
    return this.$.bindPixCodeValidator(receiver);
  }
};

data_decoder.mojom.DataDecoderServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DataDecoderService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  bindImageDecoder(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindXmlParser(reciever) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec,
      null,
      [reciever],
      false);
  }

  bindWebBundleParserFactory(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindGzipper(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindStructuredHeadersParser(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindCborParser(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec,
      null,
      [receiver],
      false);
  }

  bindPixCodeValidator(receiver) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('DataDecoderService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindImageDecoder_ParamsSpec.$.structSpec);
          const result = this.impl.bindImageDecoder(params.receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindXmlParser_ParamsSpec.$.structSpec);
          const result = this.impl.bindXmlParser(params.reciever);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindWebBundleParserFactory_ParamsSpec.$.structSpec);
          const result = this.impl.bindWebBundleParserFactory(params.receiver);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindGzipper_ParamsSpec.$.structSpec);
          const result = this.impl.bindGzipper(params.receiver);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindStructuredHeadersParser_ParamsSpec.$.structSpec);
          const result = this.impl.bindStructuredHeadersParser(params.receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindCborParser_ParamsSpec.$.structSpec);
          const result = this.impl.bindCborParser(params.receiver);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(data_decoder.mojom.DataDecoderService_BindPixCodeValidator_ParamsSpec.$.structSpec);
          const result = this.impl.bindPixCodeValidator(params.receiver);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

data_decoder.mojom.DataDecoderServiceReceiver = data_decoder.mojom.DataDecoderServiceReceiver;

data_decoder.mojom.DataDecoderServicePtr = data_decoder.mojom.DataDecoderServiceRemote;
data_decoder.mojom.DataDecoderServiceRequest = data_decoder.mojom.DataDecoderServicePendingReceiver;

