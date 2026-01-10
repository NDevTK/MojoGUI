// Auto-generated MojoJS binding
// Source: chromium_src/extensions/common/mojom/renderer_host.mojom
// Module: extensions.mojom

'use strict';

// Module namespace
var extensions = extensions || {};
extensions.mojom = extensions.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

extensions.mojom.RendererHost = {};
extensions.mojom.RendererHost.$interfaceName = 'extensions.mojom.RendererHost';
extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec = { $: {} };
extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec = { $: {} };

// Interface: RendererHost
mojo.internal.Struct(
    extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec, 'extensions.mojom.RendererHost_AddAPIActionToActivityLog_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('call_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 16, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec, 'extensions.mojom.RendererHost_AddEventToActivityLog_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('call_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 16, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('extra', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec, 'extensions.mojom.RendererHost_AddDOMActionToActivityLog_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('call_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 16, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url', 24, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('url_title', 32, 0, mojo_base.mojom.String16Spec.$, null, false, 0, undefined),
      mojo.internal.StructField('call_type', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec, 'extensions.mojom.RendererHost_GetMessageBundle_Params', [
      mojo.internal.StructField('extension_id', 0, 0, extensions.mojom.ExtensionIdSpec.$, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec, 'extensions.mojom.RendererHost_GetMessageBundle_ResponseParams', [
      mojo.internal.StructField('message_map', 0, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

extensions.mojom.RendererHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

extensions.mojom.RendererHostRemote = class {
  static get $interfaceName() {
    return 'extensions.mojom.RendererHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      extensions.mojom.RendererHostPendingReceiver,
      handle);
    this.$ = new extensions.mojom.RendererHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

extensions.mojom.RendererHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  addAPIActionToActivityLog(extension_id, call_name, args, extra) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, extra],
      false);
  }

  addEventToActivityLog(extension_id, call_name, args, extra) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, extra],
      false);
  }

  addDOMActionToActivityLog(extension_id, call_name, args, url, url_title, call_type) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec,
      null,
      [extension_id, call_name, args, url, url_title, call_type],
      false);
  }

  getMessageBundle(extension_id) {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec,
      extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec,
      [extension_id],
      false);
  }

};

extensions.mojom.RendererHost.getRemote = function() {
  let remote = new extensions.mojom.RendererHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'extensions.mojom.RendererHost',
    'context');
  return remote.$;
};

extensions.mojom.RendererHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
  }
  bind(handle) {
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(handle);
    this.endpoint.start((message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = extensions.mojom.RendererHost_AddAPIActionToActivityLog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addAPIActionToActivityLog(params.extension_id, params.call_name, params.args, params.extra);
          break;
        }
        case 1: {
          const params = extensions.mojom.RendererHost_AddEventToActivityLog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addEventToActivityLog(params.extension_id, params.call_name, params.args, params.extra);
          break;
        }
        case 2: {
          const params = extensions.mojom.RendererHost_AddDOMActionToActivityLog_ParamsSpec.$.decode(message.payload);
          const result = this.impl.addDOMActionToActivityLog(params.extension_id, params.call_name, params.args, params.url, params.url_title, params.call_type);
          break;
        }
        case 3: {
          const params = extensions.mojom.RendererHost_GetMessageBundle_ParamsSpec.$.decode(message.payload);
          const result = this.impl.getMessageBundle(params.extension_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, extensions.mojom.RendererHost_GetMessageBundle_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

extensions.mojom.RendererHostReceiver = extensions.mojom.RendererHostReceiver;

extensions.mojom.RendererHostPtr = extensions.mojom.RendererHostRemote;
extensions.mojom.RendererHostRequest = extensions.mojom.RendererHostPendingReceiver;

