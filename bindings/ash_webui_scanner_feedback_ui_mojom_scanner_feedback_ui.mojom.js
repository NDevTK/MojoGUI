// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/scanner_feedback_ui/mojom/scanner_feedback_ui.mojom
// Module: ash.mojom.scanner_feedback_ui

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.mojom.scanner_feedback_ui = ash.mojom.mojom.scanner_feedback_ui || {};
var url = url || {};


// Struct: FeedbackInfo
ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.FeedbackInfoSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.scanner_feedback_ui.FeedbackInfo',
      packedSize: 24,
      fields: [
        { name: 'action_details', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'screenshot_url', packedOffset: 8, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: PageHandler
ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler = {};

ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.scanner_feedback_ui.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFeedbackInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec,
      ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec,
      []);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec,
      null,
      []);
  }

  sendFeedback(user_description) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec,
      null,
      [user_description]);
  }

};

ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler.getRemote = function() {
  let remote = new ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.scanner_feedback_ui.PageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetFeedbackInfo
ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.scanner_feedback_ui.PageHandler.GetFeedbackInfo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.scanner_feedback_ui.PageHandler.GetFeedbackInfo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'feedback_info', packedOffset: 0, packedBitOffset: 0, type: ash.mojom.scanner_feedback_ui.FeedbackInfoSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for CloseDialog
ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.scanner_feedback_ui.PageHandler.CloseDialog_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SendFeedback
ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.scanner_feedback_ui.PageHandler.SendFeedback_Params',
      packedSize: 16,
      fields: [
        { name: 'user_description', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerPtr = ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerRemote;
ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerRequest = ash.mojom.mojom.scanner_feedback_ui.scanner_feedback_ui.PageHandlerPendingReceiver;

