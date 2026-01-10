// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/scanner_feedback_ui/mojom/scanner_feedback_ui.mojom
// Module: ash.mojom.scanner_feedback_ui

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.scanner_feedback_ui = ash.mojom.scanner_feedback_ui || {};
var url = url || {};

ash.mojom.scanner_feedback_ui.FeedbackInfoSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler = {};
ash.mojom.scanner_feedback_ui.PageHandler.$interfaceName = 'ash.mojom.scanner_feedback_ui.PageHandler';
ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec = { $: {} };
ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec = { $: {} };

// Struct: FeedbackInfo
mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.FeedbackInfoSpec, 'ash.mojom.scanner_feedback_ui.FeedbackInfo', [
      mojo.internal.StructField('action_details', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('screenshot_url', 8, 0, url.mojom.UrlSpec.$, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PageHandler
mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParams', [
      mojo.internal.StructField('feedback_info', 0, 0, ash.mojom.scanner_feedback_ui.FeedbackInfoSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec, 'ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_Params', [
      mojo.internal.StructField('user_description', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

ash.mojom.scanner_feedback_ui.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.scanner_feedback_ui.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.scanner_feedback_ui.PageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.scanner_feedback_ui.PageHandlerPendingReceiver,
      handle);
    this.$ = new ash.mojom.scanner_feedback_ui.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.scanner_feedback_ui.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFeedbackInfo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ParamsSpec,
      ash.mojom.scanner_feedback_ui.PageHandler_GetFeedbackInfo_ResponseParamsSpec,
      [],
      false);
  }

  closeDialog() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_CloseDialog_ParamsSpec,
      null,
      [],
      false);
  }

  sendFeedback(user_description) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ash.mojom.scanner_feedback_ui.PageHandler_SendFeedback_ParamsSpec,
      null,
      [user_description],
      false);
  }

};

ash.mojom.scanner_feedback_ui.PageHandler.getRemote = function() {
  let remote = new ash.mojom.scanner_feedback_ui.PageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'ash.mojom.scanner_feedback_ui.PageHandler',
    'context');
  return remote.$;
};

ash.mojom.scanner_feedback_ui.PageHandlerPtr = ash.mojom.scanner_feedback_ui.PageHandlerRemote;
ash.mojom.scanner_feedback_ui.PageHandlerRequest = ash.mojom.scanner_feedback_ui.PageHandlerPendingReceiver;

