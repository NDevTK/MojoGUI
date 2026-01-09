// Auto-generated MojoJS binding
// Source: chromium_src/content/common/sandbox_support.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Enum: LcTypeString
content.mojom.LcTypeString = {
  kShortDate: 0,
  kYearMonth: 1,
  kTimeFormat: 2,
  kShortTime: 3,
};

// Enum: LcTypeStrings
content.mojom.LcTypeStrings = {
  kMonths: 0,
  kShortMonths: 1,
  kShortWeekDays: 2,
  kAmPm: 3,
};

// Interface: SandboxSupport
content.mojom.SandboxSupport = {};

content.mojom.SandboxSupportPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.SandboxSupportRemote = class {
  static get $interfaceName() {
    return 'content.mojom.SandboxSupport';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.SandboxSupportPendingReceiver,
      handle);
    this.$ = new content.mojom.SandboxSupportRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.SandboxSupportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getSystemColors() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.SandboxSupport_GetSystemColors_ParamsSpec,
      content.mojom.SandboxSupport_GetSystemColors_ResponseParamsSpec,
      []);
  }

  lcidAndFirstDayOfWeek(locale, default_language, defaults) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ParamsSpec,
      content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ResponseParamsSpec,
      [locale, default_language, defaults]);
  }

  digitsAndSigns(lcid, defaults) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      content.mojom.SandboxSupport_DigitsAndSigns_ParamsSpec,
      content.mojom.SandboxSupport_DigitsAndSigns_ResponseParamsSpec,
      [lcid, defaults]);
  }

  localeString(lcid, defaults, type) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      content.mojom.SandboxSupport_LocaleString_ParamsSpec,
      content.mojom.SandboxSupport_LocaleString_ResponseParamsSpec,
      [lcid, defaults, type]);
  }

  localeStrings(lcid, defaults, collection) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      content.mojom.SandboxSupport_LocaleStrings_ParamsSpec,
      content.mojom.SandboxSupport_LocaleStrings_ResponseParamsSpec,
      [lcid, defaults, collection]);
  }

};

content.mojom.SandboxSupport.getRemote = function() {
  let remote = new content.mojom.SandboxSupportRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.SandboxSupport',
    'context');
  return remote.$;
};

// ParamsSpec for GetSystemColors
content.mojom.SandboxSupport_GetSystemColors_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.GetSystemColors_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.SandboxSupport_GetSystemColors_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.GetSystemColors_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'region', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LcidAndFirstDayOfWeek
content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.LcidAndFirstDayOfWeek_Params',
      packedSize: 32,
      fields: [
        { name: 'locale', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'default_language', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'defaults', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.LcidAndFirstDayOfWeek_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'lcid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'first_day_of_week', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DigitsAndSigns
content.mojom.SandboxSupport_DigitsAndSigns_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.DigitsAndSigns_Params',
      packedSize: 24,
      fields: [
        { name: 'lcid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'defaults', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.SandboxSupport_DigitsAndSigns_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.DigitsAndSigns_ResponseParams',
      packedSize: 56,
      fields: [
        { name: 'digit_substitution', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'digits', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'decimal', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'thousand', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'negative_sign', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
        { name: 'negnumber', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LocaleString
content.mojom.SandboxSupport_LocaleString_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.LocaleString_Params',
      packedSize: 32,
      fields: [
        { name: 'lcid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'defaults', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'type', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.SandboxSupport_LocaleString_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.LocaleString_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'str', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for LocaleStrings
content.mojom.SandboxSupport_LocaleStrings_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.LocaleStrings_Params',
      packedSize: 32,
      fields: [
        { name: 'lcid', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Uint32, nullable: false },
        { name: 'defaults', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
        { name: 'collection', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

content.mojom.SandboxSupport_LocaleStrings_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.SandboxSupport.LocaleStrings_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'strings', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
content.mojom.SandboxSupportPtr = content.mojom.SandboxSupportRemote;
content.mojom.SandboxSupportRequest = content.mojom.SandboxSupportPendingReceiver;

