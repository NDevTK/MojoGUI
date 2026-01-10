// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/date_time_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var mojo_base = mojo_base || {};
var ui = ui || {};

blink.mojom.DateTimeSuggestionSpec = { $: {} };
blink.mojom.DateTimeDialogValueSpec = { $: {} };
blink.mojom.DateTimeChooser = {};
blink.mojom.DateTimeChooser.$interfaceName = 'blink.mojom.DateTimeChooser';
blink.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec = { $: {} };
blink.mojom.DateTimeChooser_OpenDateTimeDialog_ResponseParamsSpec = { $: {} };
blink.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec = { $: {} };

// Struct: DateTimeSuggestion
mojo.internal.Struct(
    blink.mojom.DateTimeSuggestionSpec, 'blink.mojom.DateTimeSuggestion', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('localized_value', 8, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('label', 16, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DateTimeDialogValue
mojo.internal.Struct(
    blink.mojom.DateTimeDialogValueSpec, 'blink.mojom.DateTimeDialogValue', [
      mojo.internal.StructField('dialog_type', 0, 0, ui.mojom.TextInputTypeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('dialog_value', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('minimum', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('maximum', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('step', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('suggestions', 40, 0, mojo.internal.Array(blink.mojom.DateTimeSuggestionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Interface: DateTimeChooser
mojo.internal.Struct(
    blink.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec, 'blink.mojom.DateTimeChooser_OpenDateTimeDialog_Params', [
      mojo.internal.StructField('value', 0, 0, blink.mojom.DateTimeDialogValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    blink.mojom.DateTimeChooser_OpenDateTimeDialog_ResponseParamsSpec, 'blink.mojom.DateTimeChooser_OpenDateTimeDialog_ResponseParams', [
      mojo.internal.StructField('dialog_value', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    blink.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec, 'blink.mojom.DateTimeChooser_CloseDateTimeDialog_Params', [
    ],
    [[0, 8]]);

blink.mojom.DateTimeChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.DateTimeChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DateTimeChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.DateTimeChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.DateTimeChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.DateTimeChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDateTimeDialog(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec,
      blink.mojom.DateTimeChooser_OpenDateTimeDialog_ResponseParamsSpec,
      [value],
      false);
  }

  closeDateTimeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec,
      null,
      [],
      false);
  }

};

blink.mojom.DateTimeChooser.getRemote = function() {
  let remote = new blink.mojom.DateTimeChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DateTimeChooser',
    'context');
  return remote.$;
};

blink.mojom.DateTimeChooserReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: OpenDateTimeDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> OpenDateTimeDialog (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: CloseDateTimeDialog
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(blink.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CloseDateTimeDialog (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
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
          const params = decoder.decodeStruct(blink.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.openDateTimeDialog');
          const result = this.impl.openDateTimeDialog(params.value);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, blink.mojom.DateTimeChooser_OpenDateTimeDialog_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(blink.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.closeDateTimeDialog');
          const result = this.impl.closeDateTimeDialog();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

blink.mojom.DateTimeChooserReceiver = blink.mojom.DateTimeChooserReceiver;

blink.mojom.DateTimeChooserPtr = blink.mojom.DateTimeChooserRemote;
blink.mojom.DateTimeChooserRequest = blink.mojom.DateTimeChooserPendingReceiver;

