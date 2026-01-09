// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/new_tab_page/modules/safe_browsing/safe_browsing.mojom
// Module: ntp.safe_browsing.mojom

'use strict';

// Module namespace
var ntp = ntp || {};
ntp.safe_browsing = ntp.safe_browsing || {};
ntp.safe_browsing.mojom = ntp.safe_browsing.mojom || {};


// Interface: SafeBrowsingHandler
ntp.safe_browsing.mojom.SafeBrowsingHandler = {};

ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote = class {
  static get $interfaceName() {
    return 'ntp.safe_browsing.mojom.SafeBrowsingHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver,
      handle);
    this.$ = new ntp.safe_browsing.mojom.SafeBrowsingHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  canShowModule() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec,
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec,
      ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec,
      [],
      undefined,
      undefined
    );
  }

  processModuleClick() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  dismissModule() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  restoreModule() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

};

ntp.safe_browsing.mojom.SafeBrowsingHandler.getRemote = function() {
  let remote = new ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ntp.safe_browsing.mojom.SafeBrowsingHandler',
    'context');
  return remote.$;
};

// ParamsSpec for CanShowModule
ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.safe_browsing.mojom.SafeBrowsingHandler.CanShowModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

ntp.safe_browsing.mojom.SafeBrowsingHandler_CanShowModule_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.safe_browsing.mojom.SafeBrowsingHandler.CanShowModule_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'show', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Bool, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// ParamsSpec for ProcessModuleClick
ntp.safe_browsing.mojom.SafeBrowsingHandler_ProcessModuleClick_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.safe_browsing.mojom.SafeBrowsingHandler.ProcessModuleClick_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for DismissModule
ntp.safe_browsing.mojom.SafeBrowsingHandler_DismissModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.safe_browsing.mojom.SafeBrowsingHandler.DismissModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for RestoreModule
ntp.safe_browsing.mojom.SafeBrowsingHandler_RestoreModule_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ntp.safe_browsing.mojom.SafeBrowsingHandler.RestoreModule_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// Legacy compatibility
ntp.safe_browsing.mojom.SafeBrowsingHandlerPtr = ntp.safe_browsing.mojom.SafeBrowsingHandlerRemote;
ntp.safe_browsing.mojom.SafeBrowsingHandlerRequest = ntp.safe_browsing.mojom.SafeBrowsingHandlerPendingReceiver;

