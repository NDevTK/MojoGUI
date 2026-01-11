// Auto-generated MojoJS binding
// Source: chromium_src/content/common/sandbox_support.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};
var mojo_base = mojo_base || {};

content.mojom.LcTypeStringSpec = { $: mojo.internal.Enum() };
content.mojom.LcTypeStringsSpec = { $: mojo.internal.Enum() };
content.mojom.SandboxSupport = {};
content.mojom.SandboxSupport.$interfaceName = 'content.mojom.SandboxSupport';
content.mojom.SandboxSupport_GetSystemColors_ParamsSpec = { $: {} };
content.mojom.SandboxSupport_GetSystemColors_ResponseParamsSpec = { $: {} };
content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ParamsSpec = { $: {} };
content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ResponseParamsSpec = { $: {} };
content.mojom.SandboxSupport_DigitsAndSigns_ParamsSpec = { $: {} };
content.mojom.SandboxSupport_DigitsAndSigns_ResponseParamsSpec = { $: {} };
content.mojom.SandboxSupport_LocaleString_ParamsSpec = { $: {} };
content.mojom.SandboxSupport_LocaleString_ResponseParamsSpec = { $: {} };
content.mojom.SandboxSupport_LocaleStrings_ParamsSpec = { $: {} };
content.mojom.SandboxSupport_LocaleStrings_ResponseParamsSpec = { $: {} };

content.mojom.name = "WinSboxProxyLocale";

content.mojom.enabled_state = false;

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
mojo.internal.Struct(
    content.mojom.SandboxSupport_GetSystemColors_ParamsSpec, 'content.mojom.SandboxSupport_GetSystemColors_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_GetSystemColors_ResponseParamsSpec, 'content.mojom.SandboxSupport_GetSystemColors_ResponseParams', [
      mojo.internal.StructField('region', 0, 0, mojo_base.mojom.ReadOnlySharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ParamsSpec, 'content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_Params', [
      mojo.internal.StructField('locale', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('default_language', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('defaults', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ResponseParamsSpec, 'content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ResponseParams', [
      mojo.internal.StructField('lcid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('first_day_of_week', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_DigitsAndSigns_ParamsSpec, 'content.mojom.SandboxSupport_DigitsAndSigns_Params', [
      mojo.internal.StructField('lcid', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('defaults', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_DigitsAndSigns_ResponseParamsSpec, 'content.mojom.SandboxSupport_DigitsAndSigns_ResponseParams', [
      mojo.internal.StructField('digits', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('decimal', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('thousand', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('negative_sign', 24, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('digit_substitution', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('negnumber', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_LocaleString_ParamsSpec, 'content.mojom.SandboxSupport_LocaleString_Params', [
      mojo.internal.StructField('type', 0, 0, content.mojom.LcTypeStringSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lcid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('defaults', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_LocaleString_ResponseParamsSpec, 'content.mojom.SandboxSupport_LocaleString_ResponseParams', [
      mojo.internal.StructField('str', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_LocaleStrings_ParamsSpec, 'content.mojom.SandboxSupport_LocaleStrings_Params', [
      mojo.internal.StructField('collection', 0, 0, content.mojom.LcTypeStringsSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('lcid', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('defaults', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    content.mojom.SandboxSupport_LocaleStrings_ResponseParamsSpec, 'content.mojom.SandboxSupport_LocaleStrings_ResponseParams', [
      mojo.internal.StructField('strings', 0, 0, mojo.internal.Array(mojo_base.mojom.String16Spec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

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
  getSystemColors() {
    return this.$.getSystemColors();
  }
  lcidAndFirstDayOfWeek(locale, default_language, defaults) {
    return this.$.lcidAndFirstDayOfWeek(locale, default_language, defaults);
  }
  digitsAndSigns(lcid, defaults) {
    return this.$.digitsAndSigns(lcid, defaults);
  }
  localeString(lcid, defaults, type) {
    return this.$.localeString(lcid, defaults, type);
  }
  localeStrings(lcid, defaults, collection) {
    return this.$.localeStrings(lcid, defaults, collection);
  }
};

content.mojom.SandboxSupportRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SandboxSupport', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getSystemColors() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.SandboxSupport_GetSystemColors_ParamsSpec,
      content.mojom.SandboxSupport_GetSystemColors_ResponseParamsSpec,
      [],
      false);
  }

  lcidAndFirstDayOfWeek(locale, default_language, defaults) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ParamsSpec,
      content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ResponseParamsSpec,
      [locale, default_language, defaults],
      false);
  }

  digitsAndSigns(lcid, defaults) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      content.mojom.SandboxSupport_DigitsAndSigns_ParamsSpec,
      content.mojom.SandboxSupport_DigitsAndSigns_ResponseParamsSpec,
      [lcid, defaults],
      false);
  }

  localeString(lcid, defaults, type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      content.mojom.SandboxSupport_LocaleString_ParamsSpec,
      content.mojom.SandboxSupport_LocaleString_ResponseParamsSpec,
      [lcid, defaults, type],
      false);
  }

  localeStrings(lcid, defaults, collection) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      content.mojom.SandboxSupport_LocaleStrings_ParamsSpec,
      content.mojom.SandboxSupport_LocaleStrings_ResponseParamsSpec,
      [lcid, defaults, collection],
      false);
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

content.mojom.SandboxSupportReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('SandboxSupport', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(content.mojom.SandboxSupport_GetSystemColors_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.SandboxSupport_DigitsAndSigns_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.SandboxSupport_LocaleString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.SandboxSupport_LocaleStrings_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.SandboxSupport_GetSystemColors_ParamsSpec.$.structSpec);
          const result = this.impl.getSystemColors();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.SandboxSupport_GetSystemColors_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ParamsSpec.$.structSpec);
          const result = this.impl.lcidAndFirstDayOfWeek(params.locale, params.default_language, params.defaults);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.SandboxSupport_LcidAndFirstDayOfWeek_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.SandboxSupport_DigitsAndSigns_ParamsSpec.$.structSpec);
          const result = this.impl.digitsAndSigns(params.lcid, params.defaults);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.SandboxSupport_DigitsAndSigns_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.SandboxSupport_LocaleString_ParamsSpec.$.structSpec);
          const result = this.impl.localeString(params.lcid, params.defaults, params.type);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.SandboxSupport_LocaleString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.SandboxSupport_LocaleStrings_ParamsSpec.$.structSpec);
          const result = this.impl.localeStrings(params.lcid, params.defaults, params.collection);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.SandboxSupport_LocaleStrings_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.SandboxSupportReceiver = content.mojom.SandboxSupportReceiver;

content.mojom.SandboxSupportPtr = content.mojom.SandboxSupportRemote;
content.mojom.SandboxSupportRequest = content.mojom.SandboxSupportPendingReceiver;

