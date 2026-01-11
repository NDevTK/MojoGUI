// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/text_input_host.mojom
// Module: remote_cocoa.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};
var mojo_base = mojo_base || {};
var ui = ui || {};
var gfx = gfx || {};

remote_cocoa.mojom.TextInputHost = {};
remote_cocoa.mojom.TextInputHost.$interfaceName = 'remote_cocoa.mojom.TextInputHost';
remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec = { $: {} };
remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec = { $: {} };

// Interface: TextInputHost
mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasClient_ResponseParams', [
      mojo.internal.StructField('has_client', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasInputContext_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParams', [
      mojo.internal.StructField('has_input_context', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsRTL_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParams', [
      mojo.internal.StructField('is_rtl', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionRange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParams', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_InsertText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('as_character', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_DeleteRange_Params', [
      mojo.internal.StructField('range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_SetCompositionText_Params', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('selected_range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('replacement_range', 16, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasCompositionText_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParams', [
      mojo.internal.StructField('has_composition_text', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParams', [
      mojo.internal.StructField('composition_range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_Params', [
      mojo.internal.StructField('requested_range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParams', [
      mojo.internal.StructField('text', 0, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('actual_range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_Params', [
      mojo.internal.StructField('requested_range', 0, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParams', [
      mojo.internal.StructField('rect', 0, 0, gfx.mojom.RectSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('actual_range', 8, 0, gfx.mojom.RangeSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_Params', [
      mojo.internal.StructField('command', 0, 0, ui.mojom.TextEditCommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec, 'remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParams', [
      mojo.internal.StructField('enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec, 'remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_Params', [
      mojo.internal.StructField('command', 0, 0, ui.mojom.TextEditCommandSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

remote_cocoa.mojom.TextInputHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

remote_cocoa.mojom.TextInputHostRemote = class {
  static get $interfaceName() {
    return 'remote_cocoa.mojom.TextInputHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      remote_cocoa.mojom.TextInputHostPendingReceiver,
      handle);
    this.$ = new remote_cocoa.mojom.TextInputHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  hasClient() {
    return this.$.hasClient();
  }
  hasInputContext() {
    return this.$.hasInputContext();
  }
  isRTL() {
    return this.$.isRTL();
  }
  getSelectionRange() {
    return this.$.getSelectionRange();
  }
  getSelectionText() {
    return this.$.getSelectionText();
  }
  insertText(text, as_character) {
    return this.$.insertText(text, as_character);
  }
  deleteRange(range) {
    return this.$.deleteRange(range);
  }
  setCompositionText(text, selected_range, replacement_range) {
    return this.$.setCompositionText(text, selected_range, replacement_range);
  }
  confirmCompositionText() {
    return this.$.confirmCompositionText();
  }
  hasCompositionText() {
    return this.$.hasCompositionText();
  }
  getCompositionTextRange() {
    return this.$.getCompositionTextRange();
  }
  getAttributedSubstringForRange(requested_range) {
    return this.$.getAttributedSubstringForRange(requested_range);
  }
  getFirstRectForRange(requested_range) {
    return this.$.getFirstRectForRange(requested_range);
  }
  isTextEditCommandEnabled(command) {
    return this.$.isTextEditCommandEnabled(command);
  }
  setTextEditCommandForNextKeyEvent(command) {
    return this.$.setTextEditCommandForNextKeyEvent(command);
  }
};

remote_cocoa.mojom.TextInputHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TextInputHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  hasClient() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec,
      [],
      false);
  }

  hasInputContext() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec,
      [],
      false);
  }

  isRTL() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec,
      [],
      false);
  }

  getSelectionRange() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec,
      [],
      false);
  }

  getSelectionText() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec,
      [],
      false);
  }

  insertText(text, as_character) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec,
      null,
      [text, as_character],
      false);
  }

  deleteRange(range) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec,
      null,
      [range],
      false);
  }

  setCompositionText(text, selected_range, replacement_range) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec,
      null,
      [text, selected_range, replacement_range],
      false);
  }

  confirmCompositionText() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec,
      null,
      [],
      false);
  }

  hasCompositionText() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec,
      [],
      false);
  }

  getCompositionTextRange() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec,
      [],
      false);
  }

  getAttributedSubstringForRange(requested_range) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec,
      [requested_range],
      false);
  }

  getFirstRectForRange(requested_range) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec,
      [requested_range],
      false);
  }

  isTextEditCommandEnabled(command) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec,
      [command],
      false);
  }

  setTextEditCommandForNextKeyEvent(command) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec,
      null,
      [command],
      false);
  }

};

remote_cocoa.mojom.TextInputHost.getRemote = function() {
  let remote = new remote_cocoa.mojom.TextInputHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'remote_cocoa.mojom.TextInputHost',
    'context');
  return remote.$;
};

remote_cocoa.mojom.TextInputHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TextInputHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec);
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec);
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec);
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec);
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec.$.structSpec);
          const result = this.impl.hasClient();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec.$.structSpec);
          const result = this.impl.hasInputContext();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec.$.structSpec);
          const result = this.impl.isRTL();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec.$.structSpec);
          const result = this.impl.getSelectionRange();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec.$.structSpec);
          const result = this.impl.getSelectionText();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec.$.structSpec);
          const result = this.impl.insertText(params.text, params.as_character);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec.$.structSpec);
          const result = this.impl.deleteRange(params.range);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec.$.structSpec);
          const result = this.impl.setCompositionText(params.text, params.selected_range, params.replacement_range);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec.$.structSpec);
          const result = this.impl.confirmCompositionText();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec.$.structSpec);
          const result = this.impl.hasCompositionText();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec.$.structSpec);
          const result = this.impl.getCompositionTextRange();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec.$.structSpec);
          const result = this.impl.getAttributedSubstringForRange(params.requested_range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec.$.structSpec);
          const result = this.impl.getFirstRectForRange(params.requested_range);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec.$.structSpec);
          const result = this.impl.isTextEditCommandEnabled(params.command);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec.$.structSpec);
          const result = this.impl.setTextEditCommandForNextKeyEvent(params.command);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

remote_cocoa.mojom.TextInputHostReceiver = remote_cocoa.mojom.TextInputHostReceiver;

remote_cocoa.mojom.TextInputHostPtr = remote_cocoa.mojom.TextInputHostRemote;
remote_cocoa.mojom.TextInputHostRequest = remote_cocoa.mojom.TextInputHostPendingReceiver;

