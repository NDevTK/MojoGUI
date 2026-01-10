// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/text_input_host.mojom
// Module: remote_cocoa.mojom

'use strict';

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
};

remote_cocoa.mojom.TextInputHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  hasClient() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec,
      [],
      false);
  }

  hasInputContext() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec,
      [],
      false);
  }

  isRTL() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec,
      [],
      false);
  }

  getSelectionRange() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec,
      [],
      false);
  }

  getSelectionText() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec,
      [],
      false);
  }

  insertText(text, as_character) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec,
      null,
      [text, as_character],
      false);
  }

  deleteRange(range) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec,
      null,
      [range],
      false);
  }

  setCompositionText(text, selected_range, replacement_range) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec,
      null,
      [text, selected_range, replacement_range],
      false);
  }

  confirmCompositionText() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec,
      null,
      [],
      false);
  }

  hasCompositionText() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec,
      [],
      false);
  }

  getCompositionTextRange() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec,
      [],
      false);
  }

  getAttributedSubstringForRange(requested_range) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec,
      [requested_range],
      false);
  }

  getFirstRectForRange(requested_range) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec,
      [requested_range],
      false);
  }

  isTextEditCommandEnabled(command) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec,
      remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec,
      [command],
      false);
  }

  setTextEditCommandForNextKeyEvent(command) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
    this.ordinalMap.set(8, 8); // Default ordinal 8 -> Index 8
    this.ordinalMap.set(9, 9); // Default ordinal 9 -> Index 9
    this.ordinalMap.set(10, 10); // Default ordinal 10 -> Index 10
    this.ordinalMap.set(11, 11); // Default ordinal 11 -> Index 11
    this.ordinalMap.set(12, 12); // Default ordinal 12 -> Index 12
    this.ordinalMap.set(13, 13); // Default ordinal 13 -> Index 13
    this.ordinalMap.set(14, 14); // Default ordinal 14 -> Index 14
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
        message = {
          header: args[1],
          payload: args[2],
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
        
        // Try Method 0: HasClient
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasClient (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: HasInputContext
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasInputContext (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: IsRTL
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsRTL (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: GetSelectionRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSelectionRange (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: GetSelectionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetSelectionText (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: InsertText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> InsertText (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: DeleteRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DeleteRange (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 7: SetCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetCompositionText (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 8: ConfirmCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ConfirmCompositionText (8)');
             this.mapOrdinal(header.ordinal, 8);
             dispatchId = 8;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 9: HasCompositionText
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasCompositionText (9)');
             this.mapOrdinal(header.ordinal, 9);
             dispatchId = 9;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 10: GetCompositionTextRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetCompositionTextRange (10)');
             this.mapOrdinal(header.ordinal, 10);
             dispatchId = 10;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 11: GetAttributedSubstringForRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAttributedSubstringForRange (11)');
             this.mapOrdinal(header.ordinal, 11);
             dispatchId = 11;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 12: GetFirstRectForRange
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFirstRectForRange (12)');
             this.mapOrdinal(header.ordinal, 12);
             dispatchId = 12;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 13: IsTextEditCommandEnabled
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> IsTextEditCommandEnabled (13)');
             this.mapOrdinal(header.ordinal, 13);
             dispatchId = 13;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 14: SetTextEditCommandForNextKeyEvent
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> SetTextEditCommandForNextKeyEvent (14)');
             this.mapOrdinal(header.ordinal, 14);
             dispatchId = 14;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasClient');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasInputContext');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isRTL');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSelectionRange');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getSelectionText');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.insertText');
          const result = this.impl.insertText(params.text, params.as_character);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.deleteRange');
          const result = this.impl.deleteRange(params.range);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setCompositionText');
          const result = this.impl.setCompositionText(params.text, params.selected_range, params.replacement_range);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.confirmCompositionText');
          const result = this.impl.confirmCompositionText();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasCompositionText');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getCompositionTextRange');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAttributedSubstringForRange');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFirstRectForRange');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.isTextEditCommandEnabled');
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
          const params = decoder.decodeStruct(remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.setTextEditCommandForNextKeyEvent');
          const result = this.impl.setTextEditCommandForNextKeyEvent(params.command);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

remote_cocoa.mojom.TextInputHostReceiver = remote_cocoa.mojom.TextInputHostReceiver;

remote_cocoa.mojom.TextInputHostPtr = remote_cocoa.mojom.TextInputHostRemote;
remote_cocoa.mojom.TextInputHostRequest = remote_cocoa.mojom.TextInputHostPendingReceiver;

