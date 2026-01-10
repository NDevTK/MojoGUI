// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_ui.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.WebUIHost = {};
content.mojom.WebUIHost.$interfaceName = 'content.mojom.WebUIHost';
content.mojom.WebUIHost_Send_ParamsSpec = { $: {} };
content.mojom.WebUI = {};
content.mojom.WebUI.$interfaceName = 'content.mojom.WebUI';
content.mojom.WebUI_SetProperty_ParamsSpec = { $: {} };

// Interface: WebUIHost
mojo.internal.Struct(
    content.mojom.WebUIHost_Send_ParamsSpec, 'content.mojom.WebUIHost_Send_Params', [
      mojo.internal.StructField('message', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('args', 8, 0, mojo_base.mojom.ListValueSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.WebUIHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebUIHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebUIHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebUIHostPendingReceiver,
      handle);
    this.$ = new content.mojom.WebUIHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.WebUIHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  send(message, args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.WebUIHost_Send_ParamsSpec,
      null,
      [message, args],
      false);
  }

};

content.mojom.WebUIHost.getRemote = function() {
  let remote = new content.mojom.WebUIHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebUIHost',
    'context');
  return remote.$;
};

content.mojom.WebUIHostPtr = content.mojom.WebUIHostRemote;
content.mojom.WebUIHostRequest = content.mojom.WebUIHostPendingReceiver;


// Interface: WebUI
mojo.internal.Struct(
    content.mojom.WebUI_SetProperty_ParamsSpec, 'content.mojom.WebUI_SetProperty_Params', [
      mojo.internal.StructField('property_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('property_value_json', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

content.mojom.WebUIPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.WebUIRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebUI';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.WebUIPendingReceiver,
      handle);
    this.$ = new content.mojom.WebUIRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.WebUIRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProperty(property_name, property_value_json) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.WebUI_SetProperty_ParamsSpec,
      null,
      [property_name, property_value_json],
      false);
  }

};

content.mojom.WebUI.getRemote = function() {
  let remote = new content.mojom.WebUIRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebUI',
    'context');
  return remote.$;
};

content.mojom.WebUIPtr = content.mojom.WebUIRemote;
content.mojom.WebUIRequest = content.mojom.WebUIPendingReceiver;

