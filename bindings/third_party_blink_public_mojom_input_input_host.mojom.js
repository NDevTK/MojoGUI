// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/input/input_host.mojom
// Module: blink.mojom

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};

blink.mojom.SpellCheckSuggestionSpec = { $: {} };
blink.mojom.TextSuggestionSpec = { $: {} };
blink.mojom.TextSuggestionHost = {};
blink.mojom.TextSuggestionHost.$interfaceName = 'blink.mojom.TextSuggestionHost';
blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec = { $: {} };
blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec = { $: {} };

// Struct: SpellCheckSuggestion
mojo.internal.Struct(
    blink.mojom.SpellCheckSuggestionSpec, 'blink.mojom.SpellCheckSuggestion', [
      mojo.internal.StructField('suggestion', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TextSuggestion
mojo.internal.Struct(
    blink.mojom.TextSuggestionSpec, 'blink.mojom.TextSuggestion', [
      mojo.internal.StructField('prefix', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestion', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suffix', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('marker_tag', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('suggestion_index', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Interface: TextSuggestionHost
mojo.internal.Struct(
    blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec, 'blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec, 'blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_Params', [
      mojo.internal.StructField('caret_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('caret_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('marked_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestions', 24, 0, mojo.internal.Array(blink.mojom.SpellCheckSuggestionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec, 'blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_Params', [
      mojo.internal.StructField('caret_x', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('caret_y', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('marked_text', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('suggestions', 24, 0, mojo.internal.Array(blink.mojom.TextSuggestionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

blink.mojom.TextSuggestionHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.TextSuggestionHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.TextSuggestionHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.TextSuggestionHostPendingReceiver,
      handle);
    this.$ = new blink.mojom.TextSuggestionHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  startSuggestionMenuTimer() {
    return this.$.startSuggestionMenuTimer();
  }
  showSpellCheckSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    return this.$.showSpellCheckSuggestionMenu(caret_x, caret_y, marked_text, suggestions);
  }
  showTextSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    return this.$.showTextSuggestionMenu(caret_x, caret_y, marked_text, suggestions);
  }
};

blink.mojom.TextSuggestionHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextSuggestionHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  startSuggestionMenuTimer() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec,
      null,
      [],
      false);
  }

  showSpellCheckSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec,
      null,
      [caret_x, caret_y, marked_text, suggestions],
      false);
  }

  showTextSuggestionMenu(caret_x, caret_y, marked_text, suggestions) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec,
      null,
      [caret_x, caret_y, marked_text, suggestions],
      false);
  }

};

blink.mojom.TextSuggestionHost.getRemote = function() {
  let remote = new blink.mojom.TextSuggestionHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.TextSuggestionHost',
    'context');
  return remote.$;
};

blink.mojom.TextSuggestionHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextSuggestionHost', [
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
             decoder.decodeStructInline(blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionHost_StartSuggestionMenuTimer_ParamsSpec.$.structSpec);
          const result = this.impl.startSuggestionMenuTimer();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionHost_ShowSpellCheckSuggestionMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showSpellCheckSuggestionMenu(params.caret_x, params.caret_y, params.marked_text, params.suggestions);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(blink.mojom.TextSuggestionHost_ShowTextSuggestionMenu_ParamsSpec.$.structSpec);
          const result = this.impl.showTextSuggestionMenu(params.caret_x, params.caret_y, params.marked_text, params.suggestions);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

blink.mojom.TextSuggestionHostReceiver = blink.mojom.TextSuggestionHostReceiver;

blink.mojom.TextSuggestionHostPtr = blink.mojom.TextSuggestionHostRemote;
blink.mojom.TextSuggestionHostRequest = blink.mojom.TextSuggestionHostPendingReceiver;

