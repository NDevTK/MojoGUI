// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_ui.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: WebUIHost
content.mojom.WebUIHost = {};

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
      [message, args]);
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

// ParamsSpec for Send
content.mojom.WebUIHost_Send_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebUIHost.Send_Params',
      packedSize: 24,
      fields: [
        { name: 'message', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'args', packedOffset: 8, packedBitOffset: 0, type: mojo_base.mojom.ListValueSpec, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.WebUIHostPtr = content.mojom.WebUIHostRemote;
content.mojom.WebUIHostRequest = content.mojom.WebUIHostPendingReceiver;


// Interface: WebUI
content.mojom.WebUI = {};

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
      [property_name, property_value_json]);
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

// ParamsSpec for SetProperty
content.mojom.WebUI_SetProperty_ParamsSpec = {
  $: {
    structSpec: {
      name: 'content.mojom.WebUI.SetProperty_Params',
      packedSize: 24,
      fields: [
        { name: 'property_name', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
        { name: 'property_value_json', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 24}]
    }
  }
};

// Legacy compatibility
content.mojom.WebUIPtr = content.mojom.WebUIRemote;
content.mojom.WebUIRequest = content.mojom.WebUIPendingReceiver;

