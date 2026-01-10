// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/private_state_tokens/private_state_tokens.mojom
// Module: private_state_tokens.mojom

'use strict';

// Module namespace
var private_state_tokens = private_state_tokens || {};
private_state_tokens.mojom = private_state_tokens.mojom || {};

private_state_tokens.mojom.IssuerTokenCountSpec = { $: {} };
private_state_tokens.mojom.PrivateStateTokensPageHandler = {};
private_state_tokens.mojom.PrivateStateTokensPageHandler.$interfaceName = 'private_state_tokens.mojom.PrivateStateTokensPageHandler';
private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec = { $: {} };
private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec = { $: {} };

// Struct: IssuerTokenCount
mojo.internal.Struct(
    private_state_tokens.mojom.IssuerTokenCountSpec, 'private_state_tokens.mojom.IssuerTokenCount', [
      mojo.internal.StructField('issuer', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('count', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PrivateStateTokensPageHandler
mojo.internal.Struct(
    private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec, 'private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec, 'private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParams', [
      mojo.internal.StructField('private_state_tokens_count', 0, 0, mojo.internal.Array(private_state_tokens.mojom.IssuerTokenCountSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

private_state_tokens.mojom.PrivateStateTokensPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote = class {
  static get $interfaceName() {
    return 'private_state_tokens.mojom.PrivateStateTokensPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      private_state_tokens.mojom.PrivateStateTokensPageHandlerPendingReceiver,
      handle);
    this.$ = new private_state_tokens.mojom.PrivateStateTokensPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

private_state_tokens.mojom.PrivateStateTokensPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getIssuerTokenCounts() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec,
      private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec,
      [],
      false);
  }

};

private_state_tokens.mojom.PrivateStateTokensPageHandler.getRemote = function() {
  let remote = new private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote();
  remote.bindNewPipeAndPassReceiver();
  remote.proxy.endpoint_.bindInBrowser(
    'private_state_tokens.mojom.PrivateStateTokensPageHandler',
    'context');
  return remote.$;
};

private_state_tokens.mojom.PrivateStateTokensPageHandlerPtr = private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote;
private_state_tokens.mojom.PrivateStateTokensPageHandlerRequest = private_state_tokens.mojom.PrivateStateTokensPageHandlerPendingReceiver;

