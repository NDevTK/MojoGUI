// Auto-generated MojoJS binding
// Source: chromium_src/components/remote_cocoa/common/text_input_host.mojom
// Module: remote_cocoa.mojom

'use strict';

// Module namespace
var remote_cocoa = remote_cocoa || {};
remote_cocoa.mojom = remote_cocoa.mojom || {};


// Interface: TextInputHost
remote_cocoa.mojom.TextInputHost = {};

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
      remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec.$,
      []);
  }

  hasInputContext() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec.$,
      []);
  }

  isRTL() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec.$,
      []);
  }

  getSelectionRange() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec.$,
      []);
  }

  getSelectionText() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec.$,
      []);
  }

  insertText(text, as_character) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec.$,
      null,
      [text, as_character]);
  }

  deleteRange(range) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec.$,
      null,
      [range]);
  }

  setCompositionText(text, selected_range, replacement_range) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec.$,
      null,
      [text, selected_range, replacement_range]);
  }

  confirmCompositionText() {
    // Ordinal: 8
    return this.proxy.sendMessage(
      8,  // ordinal
      remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec.$,
      null,
      []);
  }

  hasCompositionText() {
    // Ordinal: 9
    return this.proxy.sendMessage(
      9,  // ordinal
      remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec.$,
      []);
  }

  getCompositionTextRange() {
    // Ordinal: 10
    return this.proxy.sendMessage(
      10,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec.$,
      []);
  }

  getAttributedSubstringForRange(requested_range) {
    // Ordinal: 11
    return this.proxy.sendMessage(
      11,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec.$,
      [requested_range]);
  }

  getFirstRectForRange(requested_range) {
    // Ordinal: 12
    return this.proxy.sendMessage(
      12,  // ordinal
      remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec.$,
      [requested_range]);
  }

  isTextEditCommandEnabled(command) {
    // Ordinal: 13
    return this.proxy.sendMessage(
      13,  // ordinal
      remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec.$,
      remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec.$,
      [command]);
  }

  setTextEditCommandForNextKeyEvent(command) {
    // Ordinal: 14
    return this.proxy.sendMessage(
      14,  // ordinal
      remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec.$,
      null,
      [command]);
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

// ParamsSpec for HasClient
remote_cocoa.mojom.TextInputHost_HasClient_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.HasClient_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_HasClient_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.HasClient_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_client', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasInputContext
remote_cocoa.mojom.TextInputHost_HasInputContext_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.HasInputContext_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_HasInputContext_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.HasInputContext_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_input_context', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsRTL
remote_cocoa.mojom.TextInputHost_IsRTL_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.IsRTL_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_IsRTL_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.IsRTL_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'is_rtl', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSelectionRange
remote_cocoa.mojom.TextInputHost_GetSelectionRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetSelectionRange_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_GetSelectionRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetSelectionRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetSelectionText
remote_cocoa.mojom.TextInputHost_GetSelectionText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetSelectionText_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_GetSelectionText_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetSelectionText_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'result', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'text', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for InsertText
remote_cocoa.mojom.TextInputHost_InsertText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.InsertText_Params',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'as_character', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for DeleteRange
remote_cocoa.mojom.TextInputHost_DeleteRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.DeleteRange_Params',
      packedSize: 16,
      fields: [
        { name: 'range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetCompositionText
remote_cocoa.mojom.TextInputHost_SetCompositionText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.SetCompositionText_Params',
      packedSize: 32,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'selected_range', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'replacement_range', packedOffset: 16, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for ConfirmCompositionText
remote_cocoa.mojom.TextInputHost_ConfirmCompositionText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.ConfirmCompositionText_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasCompositionText
remote_cocoa.mojom.TextInputHost_HasCompositionText_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.HasCompositionText_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_HasCompositionText_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.HasCompositionText_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_composition_text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetCompositionTextRange
remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetCompositionTextRange_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_GetCompositionTextRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetCompositionTextRange_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'composition_range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAttributedSubstringForRange
remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetAttributedSubstringForRange_Params',
      packedSize: 16,
      fields: [
        { name: 'requested_range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_GetAttributedSubstringForRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetAttributedSubstringForRange_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'text', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'actual_range', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetFirstRectForRange
remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetFirstRectForRange_Params',
      packedSize: 16,
      fields: [
        { name: 'requested_range', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_GetFirstRectForRange_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.GetFirstRectForRange_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'rect', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'actual_range', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for IsTextEditCommandEnabled
remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.IsTextEditCommandEnabled_Params',
      packedSize: 16,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

remote_cocoa.mojom.TextInputHost_IsTextEditCommandEnabled_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.IsTextEditCommandEnabled_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'enabled', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for SetTextEditCommandForNextKeyEvent
remote_cocoa.mojom.TextInputHost_SetTextEditCommandForNextKeyEvent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'remote_cocoa.mojom.TextInputHost.SetTextEditCommandForNextKeyEvent_Params',
      packedSize: 16,
      fields: [
        { name: 'command', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
remote_cocoa.mojom.TextInputHostPtr = remote_cocoa.mojom.TextInputHostRemote;
remote_cocoa.mojom.TextInputHostRequest = remote_cocoa.mojom.TextInputHostPendingReceiver;

