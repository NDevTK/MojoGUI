// Auto-generated MojoJS binding
// Source: chromium_src/chrome/browser/ui/webui/legion_internals/legion_internals.mojom
// Module: legion_internals.mojom

'use strict';

// Module namespace
var legion_internals = legion_internals || {};
legion_internals.mojom = legion_internals.mojom || {};


// Struct: LegionResponse
legion_internals.mojom.mojom.LegionResponseSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionResponse',
      packedSize: 24,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
        { name: 'error', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Interface: LegionInternalsPageHandler
legion_internals.mojom.mojom.LegionInternalsPageHandler = {};

legion_internals.mojom.mojom.LegionInternalsPageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

legion_internals.mojom.mojom.LegionInternalsPageHandlerRemote = class {
  static get $interfaceName() {
    return 'legion_internals.mojom.LegionInternalsPageHandler';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      legion_internals.mojom.mojom.LegionInternalsPageHandlerPendingReceiver,
      handle);
    this.$ = new legion_internals.mojom.mojom.LegionInternalsPageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

legion_internals.mojom.mojom.LegionInternalsPageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  connect(url, api_key) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      legion_internals.mojom.mojom.LegionInternalsPageHandler_Connect_ParamsSpec,
      null,
      [url, api_key]);
  }

  close() {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      legion_internals.mojom.mojom.LegionInternalsPageHandler_Close_ParamsSpec,
      null,
      []);
  }

  sendRequest(feature_name, request) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      legion_internals.mojom.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec,
      legion_internals.mojom.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec,
      [feature_name, request]);
  }

};

legion_internals.mojom.mojom.LegionInternalsPageHandler.getRemote = function() {
  let remote = new legion_internals.mojom.mojom.LegionInternalsPageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'legion_internals.mojom.LegionInternalsPageHandler',
    'context');
  return remote.$;
};

// ParamsSpec for Connect
legion_internals.mojom.mojom.LegionInternalsPageHandler_Connect_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionInternalsPageHandler.Connect_Params',
      packedSize: 24,
      fields: [
        { name: 'url', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'api_key', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// ParamsSpec for Close
legion_internals.mojom.mojom.LegionInternalsPageHandler_Close_ParamsSpec = {
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
legion_internals.mojom.mojom.LegionInternalsPageHandler_SendRequest_ParamsSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionInternalsPageHandler.SendRequest_Params',
      packedSize: 24,
      fields: [
        { name: 'feature_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'request', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

legion_internals.mojom.mojom.LegionInternalsPageHandler_SendRequest_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'legion_internals.mojom.LegionInternalsPageHandler.SendRequest_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'response', packedOffset: 0, packedBitOffset: 0, type: legion_internals.mojom.LegionResponseSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
legion_internals.mojom.mojom.LegionInternalsPageHandlerPtr = legion_internals.mojom.mojom.LegionInternalsPageHandlerRemote;
legion_internals.mojom.mojom.LegionInternalsPageHandlerRequest = legion_internals.mojom.mojom.LegionInternalsPageHandlerPendingReceiver;

