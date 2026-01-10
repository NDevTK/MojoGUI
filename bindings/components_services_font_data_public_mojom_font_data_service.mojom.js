// Auto-generated MojoJS binding
// Source: chromium_src/components/services/font_data/public/mojom/font_data_service.mojom
// Module: font_data_service.mojom

'use strict';

// Module namespace
var font_data_service = font_data_service || {};
font_data_service.mojom = font_data_service.mojom || {};


// Enum: TypefaceSlant
font_data_service.mojom.TypefaceSlant = {
  kRoman: 0,
  kItalic: 1,
  kOblique: 2,
};
font_data_service.mojom.TypefaceSlantSpec = { $: mojo.internal.Enum() };

// Union: TypefaceData
font_data_service.mojom.TypefaceDataSpec = { $: mojo.internal.Union(
    'font_data_service.mojom.TypefaceData', {
      'region': {
        'ordinal': 0,
        'type': mojo_base.mojom.ReadOnlySharedMemoryRegionSpec,
      }},
      'font_file': {
        'ordinal': 1,
        'type': font_data_service.mojom.TypefaceFileSpec,
      }},
    })
};

// Struct: TypefaceStyle
font_data_service.mojom.TypefaceStyleSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.TypefaceStyle',
      packedSize: 16,
      fields: [
        { name: 'weight', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 2, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'slant', packedOffset: 4, packedBitOffset: 0, type: font_data_service.mojom.TypefaceSlantSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: Coordinate
font_data_service.mojom.CoordinateSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.Coordinate',
      packedSize: 16,
      fields: [
        { name: 'axis', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'value', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: VariationPosition
font_data_service.mojom.VariationPositionSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.VariationPosition',
      packedSize: 24,
      fields: [
        { name: 'coordinates', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(font_data_service.mojom.CoordinateSpec, false), nullable: false, minVersion: 0 },
        { name: 'coordinateCount', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: TypefaceFile
font_data_service.mojom.TypefaceFileSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.TypefaceFile',
      packedSize: 24,
      fields: [
        { name: 'file_handle', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: false, minVersion: 0 },
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint64, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: MatchFamilyNameResult
font_data_service.mojom.MatchFamilyNameResultSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.MatchFamilyNameResult',
      packedSize: 40,
      fields: [
        { name: 'typeface_data', packedOffset: 0, packedBitOffset: 0, type: font_data_service.mojom.TypefaceDataSpec, nullable: false, minVersion: 0 },
        { name: 'ttc_index', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'variation_position', packedOffset: 24, packedBitOffset: 0, type: font_data_service.mojom.VariationPositionSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: FontDataService
font_data_service.mojom.FontDataService = {};

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
      [family_name, style]);
  }

  matchFamilyNameCharacter(family_name, style, bcp47s, character) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ParamsSpec,
      font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ResponseParamsSpec,
      [family_name, style, bcp47s, character]);
  }

  getAllFamilyNames() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      font_data_service.mojom.FontDataService_GetAllFamilyNames_ParamsSpec,
      font_data_service.mojom.FontDataService_GetAllFamilyNames_ResponseParamsSpec,
      []);
  }

  legacyMakeTypeface(family_name, style) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      font_data_service.mojom.FontDataService_LegacyMakeTypeface_ParamsSpec,
      font_data_service.mojom.FontDataService_LegacyMakeTypeface_ResponseParamsSpec,
      [family_name, style]);
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

// ParamsSpec for MatchFamilyName
font_data_service.mojom.FontDataService_MatchFamilyName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.MatchFamilyName_Params',
      packedSize: 24,
      fields: [
        { name: 'family_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: font_data_service.mojom.TypefaceStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

font_data_service.mojom.FontDataService_MatchFamilyName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.MatchFamilyName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: font_data_service.mojom.MatchFamilyNameResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MatchFamilyNameCharacter
font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.MatchFamilyNameCharacter_Params',
      packedSize: 40,
      fields: [
        { name: 'family_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: font_data_service.mojom.TypefaceStyleSpec, nullable: false, minVersion: 0 },
        { name: 'bcp47s', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
        { name: 'character', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

font_data_service.mojom.FontDataService_MatchFamilyNameCharacter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.MatchFamilyNameCharacter_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: font_data_service.mojom.MatchFamilyNameResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for GetAllFamilyNames
font_data_service.mojom.FontDataService_GetAllFamilyNames_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.GetAllFamilyNames_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

font_data_service.mojom.FontDataService_GetAllFamilyNames_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.GetAllFamilyNames_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for LegacyMakeTypeface
font_data_service.mojom.FontDataService_LegacyMakeTypeface_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.LegacyMakeTypeface_Params',
      packedSize: 24,
      fields: [
        { name: 'family_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: font_data_service.mojom.TypefaceStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

font_data_service.mojom.FontDataService_LegacyMakeTypeface_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_data_service.mojom.FontDataService.LegacyMakeTypeface_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: font_data_service.mojom.MatchFamilyNameResultSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
font_data_service.mojom.FontDataServicePtr = font_data_service.mojom.FontDataServiceRemote;
font_data_service.mojom.FontDataServiceRequest = font_data_service.mojom.FontDataServicePendingReceiver;

