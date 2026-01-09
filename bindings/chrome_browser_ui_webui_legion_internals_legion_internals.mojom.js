// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/legion_internals/legion_internals.mojom
// Module: legion_internals.mojom

'use strict';

// Module namespace
var legion_internals = legion_internals || {};
legion_internals.mojom = legion_internals.mojom || {};


// Interface: LegionInternalsPageHandler
legion_internals.mojom.LegionInternalsPageHandler = {};

legion_internals.mojom.LegionInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

legion_internals.mojom.LegionInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'legion_internals.mojom.LegionInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      legion_internals.mojom.LegionInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new legion_internals.mojom.LegionInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

legion_internals.mojom.LegionInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(url, api_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      legion_internals.mojom.LegionInternalsPageHandler_Connect_ParamsSpec,
      null,
      null,
      [url, api_key],
      undefined,
      undefined
    );
  }

  close() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      legion_internals.mojom.LegionInternalsPageHandler_Close_ParamsSpec,
      null,
      null,
      [],
      undefined,
      undefined
    );
  }

  sendRequest(feature_name, request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec,
      legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec,
      legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec,
      [feature_name, request],
      undefined,
      undefined
    );
  }

};

legion_internals.mojom.LegionInternalsPageHandler.getRemote = function() {
  let remote = new legion_internals.mojom.LegionInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'legion_internals.mojom.LegionInternalsPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
legion_internals.mojom.LegionInternalsPageHandler_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionInternalsPageHandler.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'api_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Close
legion_internals.mojom.LegionInternalsPageHandler_Close_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionInternalsPageHandler.Close_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

// ParamsSpec for SendRequest
legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionInternalsPageHandler.SendRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

legion_internals.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionInternalsPageHandler.SendRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
legion_internals.mojom.LegionInternalsPageHandlerPtr = legion_internals.mojom.LegionInternalsPageHandlerRemote;
legion_internals.mojom.LegionInternalsPageHandlerRequest = legion_internals.mojom.LegionInternalsPageHandlerPendingReceiver;

