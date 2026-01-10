// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer_host.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var url = url || {};


// Interface: RendererHost
extensions.mojom.mojom.RendererHost = {};

extensions.mojom.mojom.RendererHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.mojom.RendererHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.RendererHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.mojom.RendererHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.mojom.RendererHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.mojom.RendererHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAPIActionToActivityLog(extension_id, call_name, args, extra) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, extra]);
  }

  addEventToActivityLog(extension_id, call_name, args, extra) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.mojom.RendererHost_AddEventToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, extra]);
  }

  addDOMActionToActivityLog(extension_id, call_name, args, url, url_title, call_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, url, url_title, call_type]);
  }

  getMessageBundle(extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.mojom.RendererHost_GetMessageBundle_ParamsSpec,
      extensions.mojom.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec,
      [extension_id]);
  }

};

extensions.mojom.mojom.RendererHost.getRemote = function() {
  let remote = new extensions.mojom.mojom.RendererHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.RendererHost',
    'context');
  return remote.$;
};

// ParamsSpec for AddAPIActionToActivityLog
extensions.mojom.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.RendererHost.AddAPIActionToActivityLog_Params',
      packedSize: 40,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: true, minVersion: 0 },
        { name: 'call_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'args', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
        { name: 'extra', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for AddEventToActivityLog
extensions.mojom.mojom.RendererHost_AddEventToActivityLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.RendererHost.AddEventToActivityLog_Params',
      packedSize: 40,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: true, minVersion: 0 },
        { name: 'call_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'args', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
        { name: 'extra', packedOffset: 24, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 40}]
    }
  }
};

// ParamsSpec for AddDOMActionToActivityLog
extensions.mojom.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.RendererHost.AddDOMActionToActivityLog_Params',
      packedSize: 56,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
        { name: 'call_name', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'args', packedOffset: 16, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
        { name: 'url', packedOffset: 24, packedBitOffset: 0, type: url.mojom.UrlSpec, nullable: false, minVersion: 0 },
        { name: 'url_title', packedOffset: 32, packedBitOffset: 0, type: mojo_base.mojom.String16Spec, nullable: false, minVersion: 0 },
        { name: 'call_type', packedOffset: 40, packedBitOffset: 0, type: mojo.internal.Int32, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 56}]
    }
  }
};

// ParamsSpec for GetMessageBundle
extensions.mojom.mojom.RendererHost_GetMessageBundle_ParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.RendererHost.GetMessageBundle_Params',
      packedSize: 16,
      fields: [
        { name: 'extension_id', packedOffset: 0, packedBitOffset: 0, type: extensions.mojom.ExtensionIdSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

extensions.mojom.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'extensions.mojom.RendererHost.GetMessageBundle_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'message_map', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
extensions.mojom.mojom.RendererHostPtr = extensions.mojom.mojom.RendererHostRemote;
extensions.mojom.mojom.RendererHostRequest = extensions.mojom.mojom.RendererHostPendingReceiver;

