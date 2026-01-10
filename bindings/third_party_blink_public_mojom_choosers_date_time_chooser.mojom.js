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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] Args received:', args);
      const message = args[0];
      if (args.length > 1) { console.log('[GeneratedReceiver] 2nd Arg:', args[1]); }
      const header = message && message.header;
      if (!header) { console.warn('[GeneratedReceiver] No header in arg0'); }
      if (header) {
      console.log('[GeneratedReceiver] Header ordinal:', header.ordinal);
      switch (header.ordinal) {
        case 0: {
          const params = blink.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec.$.decode(message.payload);
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
          const params = blink.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.closeDateTimeDialog();
          break;
        }
      }
      }
    }});
  }
};

blink.mojom.DateTimeChooserReceiver = blink.mojom.DateTimeChooserReceiver;

blink.mojom.DateTimeChooserPtr = blink.mojom.DateTimeChooserRemote;
blink.mojom.DateTimeChooserRequest = blink.mojom.DateTimeChooserPendingReceiver;

