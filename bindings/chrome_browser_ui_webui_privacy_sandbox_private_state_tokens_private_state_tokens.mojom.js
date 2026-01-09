// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/privacy_sandbox/private_state_tokens/private_state_tokens.mojom
// Module: private_state_tokens.mojom

'use strict';

// Module namespace
var private_state_tokens = private_state_tokens || {};
private_state_tokens.mojom = private_state_tokens.mojom || {};


// Interface: PrivateStateTokensPageHandler
private_state_tokens.mojom.PrivateStateTokensPageHandler = {};

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
      []);
  }

};

private_state_tokens.mojom.PrivateStateTokensPageHandler.getRemote = function() {
  let remote = new private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'private_state_tokens.mojom.PrivateStateTokensPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for GetIssuerTokenCounts
private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ParamsSpec = {
  $: {
    structSpec: {
      name: 'private_state_tokens.mojom.PrivateStateTokensPageHandler.GetIssuerTokenCounts_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

private_state_tokens.mojom.PrivateStateTokensPageHandler_GetIssuerTokenCounts_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'private_state_tokens.mojom.PrivateStateTokensPageHandler.GetIssuerTokenCounts_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'private_state_tokens_count', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
private_state_tokens.mojom.PrivateStateTokensPageHandlerPtr = private_state_tokens.mojom.PrivateStateTokensPageHandlerRemote;
private_state_tokens.mojom.PrivateStateTokensPageHandlerRequest = private_state_tokens.mojom.PrivateStateTokensPageHandlerPendingReceiver;

