// Auto-generated MojoJS binding
// Source: chromium_src/content/common/web_ui.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};


// Interface: WebUIHost
content.mojom.mojom.WebUIHost = {};

content.mojom.mojom.WebUIHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.WebUIHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebUIHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.WebUIHostPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.WebUIHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.WebUIHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  send(message, args) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.WebUIHost_Send_ParamsSpec,
      null,
      [message, args]);
  }

};

content.mojom.mojom.WebUIHost.getRemote = function() {
  let remote = new content.mojom.mojom.WebUIHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebUIHost',
    'context');
  return remote.$;
};

// ParamsSpec for Send
content.mojom.mojom.WebUIHost_Send_ParamsSpec = {
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
content.mojom.mojom.WebUIHostPtr = content.mojom.mojom.WebUIHostRemote;
content.mojom.mojom.WebUIHostRequest = content.mojom.mojom.WebUIHostPendingReceiver;


// Interface: WebUI
content.mojom.mojom.WebUI = {};

content.mojom.mojom.WebUIPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.mojom.WebUIRemote = class {
  static get $interfaceName() {
    return 'content.mojom.WebUI';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.mojom.WebUIPendingReceiver,
      handle);
    this.$ = new content.mojom.mojom.WebUIRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.mojom.WebUIRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  setProperty(property_name, property_value_json) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.mojom.WebUI_SetProperty_ParamsSpec,
      null,
      [property_name, property_value_json]);
  }

};

content.mojom.mojom.WebUI.getRemote = function() {
  let remote = new content.mojom.mojom.WebUIRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.WebUI',
    'context');
  return remote.$;
};

// ParamsSpec for SetProperty
content.mojom.mojom.WebUI_SetProperty_ParamsSpec = {
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
content.mojom.mojom.WebUIPtr = content.mojom.mojom.WebUIRemote;
content.mojom.mojom.WebUIRequest = content.mojom.mojom.WebUIPendingReceiver;

