// Auto-generated MojoJS binding
// Source: chromium_src/components/services/font_data/public/mojom/font_data_service.mojom
// Module: font_data_service.mojom

'use strict';

// Module namespace
var font_data_service = font_data_service || {};
font_data_service.mojom = font_data_service.mojom || {};
var mojo_base = mojo_base || {};

font_data_service.mojom.TypefaceSlantSpec = { $: mojo.internal.Enum() };
font_data_service.mojom.TypefaceDataSpec = { $: {} };
font_data_service.mojom.TypefaceStyleSpec = { $: {} };
font_data_service.mojom.CoordinateSpec = { $: {} };
font_data_service.mojom.VariationPositionSpec = { $: {} };
font_data_service.mojom.TypefaceFileSpec = { $: {} };
font_data_service.mojom.MatchFamilyNameResultSpec = { $: {} };
font_data_service.mojom.FontDataService = {};
font_data_service.mojom.FontDataService.$interfaceName = 'font_data_service.mojom.FontDataService';
font_data_service.mojom.FontDataService_MatchFamilyName_ParamsSpec = { $: {} };
font_data_service.mojom.FontDataService_MatchFamilyName_ResponseParamsSpec = { $: {} };
font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ParamsSpec = { $: {} };
font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ResponseParamsSpec = { $: {} };
font_data_service.mojom.FontDataService_GetAllFamilyNames_ParamsSpec = { $: {} };
font_data_service.mojom.FontDataService_GetAllFamilyNames_ResponseParamsSpec = { $: {} };
font_data_service.mojom.FontDataService_LegacyMakeTypeface_ParamsSpec = { $: {} };
font_data_service.mojom.FontDataService_LegacyMakeTypeface_ResponseParamsSpec = { $: {} };

// Enum: TypefaceSlant
font_data_service.mojom.TypefaceSlant = {
  kRoman: 0,
  kItalic: 1,
  kOblique: 2,
};

// Union: TypefaceData
mojo.internal.Union(
    font_data_service.mojom.TypefaceDataSpec, 'font_data_service.mojom.TypefaceData', {
      'region': {
        'ordinal': 0,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$,
        'nullable': false,
      },
      'font_file': {
        'ordinal': 1,
        'type': font_data_service.mojom.TypefaceFileSpec.$,
        'nullable': false,
      },
    });

// Struct: TypefaceStyle
mojo.internal.Struct(
    font_data_service.mojom.TypefaceStyleSpec, 'font_data_service.mojom.TypefaceStyle', [
      mojo.internal.StructField('slant', 0, 0, font_data_service.mojom.TypefaceSlantSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('weight', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('width', 10, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Coordinate
mojo.internal.Struct(
    font_data_service.mojom.CoordinateSpec, 'font_data_service.mojom.Coordinate', [
      mojo.internal.StructField('axis', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('value', 4, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VariationPosition
mojo.internal.Struct(
    font_data_service.mojom.VariationPositionSpec, 'font_data_service.mojom.VariationPosition', [
      mojo.internal.StructField('coordinates', 0, 0, mojo.internal.Array(font_data_service.mojom.CoordinateSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('coordinateCount', 8, 0, mojo.internal.Uint16, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TypefaceFile
mojo.internal.Struct(
    font_data_service.mojom.TypefaceFileSpec, 'font_data_service.mojom.TypefaceFile', [
      mojo.internal.StructField('file_handle', 0, 0, mojo_base.mojom.ReadOnlyFileSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('id', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MatchFamilyNameResult
mojo.internal.Struct(
    font_data_service.mojom.MatchFamilyNameResultSpec, 'font_data_service.mojom.MatchFamilyNameResult', [
      mojo.internal.StructField('typeface_data', 0, 0, font_data_service.mojom.TypefaceDataSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('variation_position', 8, 0, font_data_service.mojom.VariationPositionSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('ttc_index', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Interface: FontDataService
mojo.internal.Struct(
    font_data_service.mojom.FontDataService_MatchFamilyName_ParamsSpec, 'font_data_service.mojom.FontDataService_MatchFamilyName_Params', [
      mojo.internal.StructField('family_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('style', 8, 0, font_data_service.mojom.TypefaceStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    font_data_service.mojom.FontDataService_MatchFamilyName_ResponseParamsSpec, 'font_data_service.mojom.FontDataService_MatchFamilyName_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, font_data_service.mojom.MatchFamilyNameResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ParamsSpec, 'font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_Params', [
      mojo.internal.StructField('family_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('style', 8, 0, font_data_service.mojom.TypefaceStyleSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('bcp47s', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('character', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ResponseParamsSpec, 'font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, font_data_service.mojom.MatchFamilyNameResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_data_service.mojom.FontDataService_GetAllFamilyNames_ParamsSpec, 'font_data_service.mojom.FontDataService_GetAllFamilyNames_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    font_data_service.mojom.FontDataService_GetAllFamilyNames_ResponseParamsSpec, 'font_data_service.mojom.FontDataService_GetAllFamilyNames_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    font_data_service.mojom.FontDataService_LegacyMakeTypeface_ParamsSpec, 'font_data_service.mojom.FontDataService_LegacyMakeTypeface_Params', [
      mojo.internal.StructField('family_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('style', 8, 0, font_data_service.mojom.TypefaceStyleSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    font_data_service.mojom.FontDataService_LegacyMakeTypeface_ResponseParamsSpec, 'font_data_service.mojom.FontDataService_LegacyMakeTypeface_ResponseParams', [
      mojo.internal.StructField('result', 0, 0, font_data_service.mojom.MatchFamilyNameResultSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

font_data_service.mojom.FontDataServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

font_data_service.mojom.FontDataServiceRemote = class {
  static get $interfaceName() {
    return 'font_data_service.mojom.FontDataService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      font_data_service.mojom.FontDataServicePendingReceiver,
      handle);
    this.$ = new font_data_service.mojom.FontDataServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

font_data_service.mojom.FontDataServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  matchFamilyName(family_name, style) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      font_data_service.mojom.FontDataService_MatchFamilyName_ParamsSpec,
      font_data_service.mojom.FontDataService_MatchFamilyName_ResponseParamsSpec,
      [family_name, style],
      false);
  }

  matchFamilyNameCharacter(family_name, style, bcp47s, character) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ParamsSpec,
      font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ResponseParamsSpec,
      [family_name, style, bcp47s, character],
      false);
  }

  getAllFamilyNames() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      font_data_service.mojom.FontDataService_GetAllFamilyNames_ParamsSpec,
      font_data_service.mojom.FontDataService_GetAllFamilyNames_ResponseParamsSpec,
      [],
      false);
  }

  legacyMakeTypeface(family_name, style) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      font_data_service.mojom.FontDataService_LegacyMakeTypeface_ParamsSpec,
      font_data_service.mojom.FontDataService_LegacyMakeTypeface_ResponseParamsSpec,
      [family_name, style],
      false);
  }

};

font_data_service.mojom.FontDataService.getRemote = function() {
  let remote = new font_data_service.mojom.FontDataServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'font_data_service.mojom.FontDataService',
    'context');
  return remote.$;
};

font_data_service.mojom.FontDataServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = font_data_service.mojom.FontDataService_MatchFamilyName_ParamsSpec.$.decode(message.payload);
          const result = this.impl.matchFamilyName(params.family_name, params.style);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_data_service.mojom.FontDataService_MatchFamilyName_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const params = font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ParamsSpec.$.decode(message.payload);
          const result = this.impl.matchFamilyNameCharacter(params.family_name, params.style, params.bcp47s, params.character);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const params = font_data_service.mojom.FontDataService_GetAllFamilyNames_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getAllFamilyNames();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_data_service.mojom.FontDataService_GetAllFamilyNames_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const params = font_data_service.mojom.FontDataService_LegacyMakeTypeface_ParamsSpec.$.decode(message.payload);
          const result = this.impl.legacyMakeTypeface(params.family_name, params.style);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, font_data_service.mojom.FontDataService_LegacyMakeTypeface_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
    });
  }
};

font_data_service.mojom.FontDataServiceReceiver = font_data_service.mojom.FontDataServiceReceiver;

font_data_service.mojom.FontDataServicePtr = font_data_service.mojom.FontDataServiceRemote;
font_data_service.mojom.FontDataServiceRequest = font_data_service.mojom.FontDataServicePendingReceiver;

