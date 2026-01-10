// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/choosers/date_time_chooser.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};
var ui = ui || {};


// Struct: DateTimeSuggestion
blink.mojom.mojom.DateTimeSuggestionSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DateTimeSuggestion',
      packedSize: 32,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'localized_value', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'label', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 32}]
    }
  }
};

// Struct: DateTimeDialogValue
blink.mojom.mojom.DateTimeDialogValueSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DateTimeDialogValue',
      packedSize: 56,
      fields: [
        { name: 'dialog_type', packedOffset: 40, packedBitOffset: 0, type: ui.mojom.TextInputTypeSpec, nullable: false, minVersion: 0 },
        { name: 'dialog_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'minimum', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'maximum', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'step', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
        { name: 'suggestions', packedOffset: 32, packedBitOffset: 0, type: mojo.internal.Array(blink.mojom.DateTimeSuggestionSpec, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// Interface: DateTimeChooser
blink.mojom.mojom.DateTimeChooser = {};

blink.mojom.mojom.DateTimeChooserPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

blink.mojom.mojom.DateTimeChooserRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.DateTimeChooser';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      blink.mojom.mojom.DateTimeChooserPendingReceiver,
      handle);
    this.$ = new blink.mojom.mojom.DateTimeChooserRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

blink.mojom.mojom.DateTimeChooserRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  openDateTimeDialog(value) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      blink.mojom.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec,
      blink.mojom.mojom.DateTimeChooser_OpenDateTimeDialog_ResponseParamsSpec,
      [value]);
  }

  closeDateTimeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      blink.mojom.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec,
      null,
      []);
  }

};

blink.mojom.mojom.DateTimeChooser.getRemote = function() {
  let remote = new blink.mojom.mojom.DateTimeChooserRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.DateTimeChooser',
    'context');
  return remote.$;
};

// ParamsSpec for OpenDateTimeDialog
blink.mojom.mojom.DateTimeChooser_OpenDateTimeDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DateTimeChooser.OpenDateTimeDialog_Params',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: blink.mojom.DateTimeDialogValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

blink.mojom.mojom.DateTimeChooser_OpenDateTimeDialog_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DateTimeChooser.OpenDateTimeDialog_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'success', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false, minVersion: 0 },
        { name: 'dialog_value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Double, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for CloseDateTimeDialog
blink.mojom.mojom.DateTimeChooser_CloseDateTimeDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'blink.mojom.DateTimeChooser.CloseDateTimeDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
blink.mojom.mojom.DateTimeChooserPtr = blink.mojom.mojom.DateTimeChooserRemote;
blink.mojom.mojom.DateTimeChooserRequest = blink.mojom.mojom.DateTimeChooserPendingReceiver;

