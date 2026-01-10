// Auto-generated MojoJS binding
// Source: chromium_src/components/services/font/public/mojom/font_service.mojom
// Module: font_service.mojom

'use strict';

// Module namespace
var font_service = font_service || {};
font_service.mojom = font_service.mojom || {};


// Enum: TypefaceSlant
font_service.mojom.TypefaceSlant = {
  ROMAN: 0,
  ITALIC: 1,
  OBLIQUE: 2,
};
font_service.mojom.TypefaceSlantSpec = { $: mojo.internal.Enum() };

// Enum: RenderStyleSwitch
font_service.mojom.RenderStyleSwitch = {
  OFF: 0,
  ON: 1,
  NO_PREFERENCE: 2,
};
font_service.mojom.RenderStyleSwitchSpec = { $: mojo.internal.Enum() };

// Struct: TypefaceStyle
font_service.mojom.TypefaceStyleSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.TypefaceStyle',
      packedSize: 16,
      fields: [
        { name: 'weight', packedOffset: 4, packedBitOffset: 0, type: mojo.internal.Uint16, nullable: false, minVersion: 0 },
        { name: 'width', packedOffset: 6, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'slant', packedOffset: 0, packedBitOffset: 0, type: font_service.mojom.TypefaceSlantSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Struct: FontIdentity
font_service.mojom.FontIdentitySpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontIdentity',
      packedSize: 24,
      fields: [
        { name: 'id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'ttc_index', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
        { name: 'filepath', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.FilePathSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Struct: FontRenderStyle
font_service.mojom.FontRenderStyleSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontRenderStyle',
      packedSize: 40,
      fields: [
        { name: 'use_bitmaps', packedOffset: 0, packedBitOffset: 0, type: font_service.mojom.RenderStyleSwitchSpec, nullable: false, minVersion: 0 },
        { name: 'use_autohint', packedOffset: 4, packedBitOffset: 0, type: font_service.mojom.RenderStyleSwitchSpec, nullable: false, minVersion: 0 },
        { name: 'use_hinting', packedOffset: 8, packedBitOffset: 0, type: font_service.mojom.RenderStyleSwitchSpec, nullable: false, minVersion: 0 },
        { name: 'hint_style', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Uint8, nullable: false, minVersion: 0 },
        { name: 'use_antialias', packedOffset: 12, packedBitOffset: 0, type: font_service.mojom.RenderStyleSwitchSpec, nullable: false, minVersion: 0 },
        { name: 'use_subpixel_rendering', packedOffset: 16, packedBitOffset: 0, type: font_service.mojom.RenderStyleSwitchSpec, nullable: false, minVersion: 0 },
        { name: 'use_subpixel_positioning', packedOffset: 20, packedBitOffset: 0, type: font_service.mojom.RenderStyleSwitchSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// Interface: FontService
font_service.mojom.FontService = {};

font_service.mojom.FontService_MatchFamilyName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService_MatchFamilyName_Params',
      packedSize: 24,
      fields: [
        { name: 'family_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: font_service.mojom.TypefaceStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

font_service.mojom.FontService_OpenStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService_OpenStream_Params',
      packedSize: 16,
      fields: [
        { name: 'id_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService_FallbackFontForCharacter_Params',
      packedSize: 24,
      fields: [
        { name: 'character', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService_FontRenderStyleForStrike_Params',
      packedSize: 32,
      fields: [
        { name: 'family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_italic', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_bold', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_Params',
      packedSize: 16,
      fields: [
        { name: 'postscript_name_or_full_font_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

font_service.mojom.FontService_ListFamilies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService_ListFamilies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService_MatchFontWithFallback_Params',
      packedSize: 32,
      fields: [
        { name: 'family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_bold', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_italic', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'charset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fallback_family_type', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

font_service.mojom.FontServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

font_service.mojom.FontServiceRemote = class {
  static get $interfaceName() {
    return 'font_service.mojom.FontService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      font_service.mojom.FontServicePendingReceiver,
      handle);
    this.$ = new font_service.mojom.FontServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

font_service.mojom.FontServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  matchFamilyName(family_name, style) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      font_service.mojom.FontService_MatchFamilyName_ParamsSpec,
      font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec,
      [family_name, style]);
  }

  openStream(id_number) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      font_service.mojom.FontService_OpenStream_ParamsSpec,
      font_service.mojom.FontService_OpenStream_ResponseParamsSpec,
      [id_number]);
  }

  fallbackFontForCharacter(character, locale) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec,
      font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec,
      [character, locale]);
  }

  fontRenderStyleForStrike(family, size, is_italic, is_bold, device_scale_factor) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec,
      font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec,
      [family, size, is_italic, is_bold, device_scale_factor]);
  }

  matchFontByPostscriptNameOrFullFontName(postscript_name_or_full_font_name) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec,
      font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec,
      [postscript_name_or_full_font_name]);
  }

  listFamilies() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      font_service.mojom.FontService_ListFamilies_ParamsSpec,
      font_service.mojom.FontService_ListFamilies_ResponseParamsSpec,
      []);
  }

  matchFontWithFallback(family, is_bold, is_italic, charset, fallback_family_type) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec,
      font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec,
      [family, is_bold, is_italic, charset, fallback_family_type]);
  }

};

font_service.mojom.FontService.getRemote = function() {
  let remote = new font_service.mojom.FontServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'font_service.mojom.FontService',
    'context');
  return remote.$;
};

// ParamsSpec for MatchFamilyName
font_service.mojom.FontService_MatchFamilyName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.MatchFamilyName_Params',
      packedSize: 24,
      fields: [
        { name: 'family_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 8, packedBitOffset: 0, type: font_service.mojom.TypefaceStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

font_service.mojom.FontService_MatchFamilyName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.MatchFamilyName_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: font_service.mojom.FontIdentitySpec, nullable: true, minVersion: 0 },
        { name: 'family_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'style', packedOffset: 16, packedBitOffset: 0, type: font_service.mojom.TypefaceStyleSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for OpenStream
font_service.mojom.FontService_OpenStream_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.OpenStream_Params',
      packedSize: 16,
      fields: [
        { name: 'id_number', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

font_service.mojom.FontService_OpenStream_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.OpenStream_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'font_handle', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for FallbackFontForCharacter
font_service.mojom.FontService_FallbackFontForCharacter_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.FallbackFontForCharacter_Params',
      packedSize: 24,
      fields: [
        { name: 'character', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

font_service.mojom.FontService_FallbackFontForCharacter_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.FallbackFontForCharacter_ResponseParams',
      packedSize: 32,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: font_service.mojom.FontIdentitySpec, nullable: true, minVersion: 0 },
        { name: 'family_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_bold', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_italic', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// ParamsSpec for FontRenderStyleForStrike
font_service.mojom.FontService_FontRenderStyleForStrike_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.FontRenderStyleForStrike_Params',
      packedSize: 32,
      fields: [
        { name: 'family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'size', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'is_italic', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_bold', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'device_scale_factor', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Float, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

font_service.mojom.FontService_FontRenderStyleForStrike_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.FontRenderStyleForStrike_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'font_render_style', packedOffset: 0, packedBitOffset: 0, type: font_service.mojom.FontRenderStyleSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MatchFontByPostscriptNameOrFullFontName
font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.MatchFontByPostscriptNameOrFullFontName_Params',
      packedSize: 16,
      fields: [
        { name: 'postscript_name_or_full_font_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

font_service.mojom.FontService_MatchFontByPostscriptNameOrFullFontName_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.MatchFontByPostscriptNameOrFullFontName_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'identity', packedOffset: 0, packedBitOffset: 0, type: font_service.mojom.FontIdentitySpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ListFamilies
font_service.mojom.FontService_ListFamilies_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.ListFamilies_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

font_service.mojom.FontService_ListFamilies_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.ListFamilies_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'families', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array(mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for MatchFontWithFallback
font_service.mojom.FontService_MatchFontWithFallback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.MatchFontWithFallback_Params',
      packedSize: 32,
      fields: [
        { name: 'family', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'is_bold', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'is_italic', packedOffset: 16, packedBitOffset: 1, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'charset', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
        { name: 'fallback_family_type', packedOffset: 12, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

font_service.mojom.FontService_MatchFontWithFallback_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'font_service.mojom.FontService.MatchFontWithFallback_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'font_file_handle', packedOffset: 0, packedBitOffset: 0, type: mojo_base.mojom.ReadOnlyFileSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
font_service.mojom.FontServicePtr = font_service.mojom.FontServiceRemote;
font_service.mojom.FontServiceRequest = font_service.mojom.FontServicePendingReceiver;

