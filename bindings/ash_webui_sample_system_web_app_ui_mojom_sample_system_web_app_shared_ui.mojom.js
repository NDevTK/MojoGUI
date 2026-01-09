// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_shared_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};


// Interface: ChildUntrustedPage
ash.mojom.sample_swa.ChildUntrustedPage = {};

ash.mojom.sample_swa.ChildUntrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.ChildUntrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.ChildUntrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.ChildUntrustedPagePendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.ChildUntrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.ChildUntrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  doSomethingForParent(task) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.ChildUntrustedPage_DoSomethingForParent_ParamsSpec,
      null,
      null,
      [task],
      undefined,
      undefined
    );
  }

};

ash.mojom.sample_swa.ChildUntrustedPage.getRemote = function() {
  let remote = new ash.mojom.sample_swa.ChildUntrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.ChildUntrustedPage',
    'context');
  return remote.$;
};

// ParamsSpec for DoSomethingForParent
ash.mojom.sample_swa.ChildUntrustedPage_DoSomethingForParent_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.ChildUntrustedPage.DoSomethingForParent_Params',
      packedSize: 16,
      fields: [
        { name: 'task', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.sample_swa.ChildUntrustedPagePtr = ash.mojom.sample_swa.ChildUntrustedPageRemote;
ash.mojom.sample_swa.ChildUntrustedPageRequest = ash.mojom.sample_swa.ChildUntrustedPagePendingReceiver;


// Interface: ParentTrustedPage
ash.mojom.sample_swa.ParentTrustedPage = {};

ash.mojom.sample_swa.ParentTrustedPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

ash.mojom.sample_swa.ParentTrustedPageRemote = class {
  static get $interfaceName() {
    return 'ash.mojom.sample_swa.ParentTrustedPage';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      ash.mojom.sample_swa.ParentTrustedPagePendingReceiver,
      handle);
    this.$ = new ash.mojom.sample_swa.ParentTrustedPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

ash.mojom.sample_swa.ParentTrustedPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  doSomethingForChild(task) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ParamsSpec,
      ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ResponseParamsSpec,
      ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ResponseParamsSpec,
      [task],
      undefined,
      undefined
    );
  }

};

ash.mojom.sample_swa.ParentTrustedPage.getRemote = function() {
  let remote = new ash.mojom.sample_swa.ParentTrustedPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'ash.mojom.sample_swa.ParentTrustedPage',
    'context');
  return remote.$;
};

// ParamsSpec for DoSomethingForChild
ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.ParentTrustedPage.DoSomethingForChild_Params',
      packedSize: 16,
      fields: [
        { name: 'task', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'ash.mojom.sample_swa.ParentTrustedPage.DoSomethingForChild_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'resp', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
ash.mojom.sample_swa.ParentTrustedPagePtr = ash.mojom.sample_swa.ParentTrustedPageRemote;
ash.mojom.sample_swa.ParentTrustedPageRequest = ash.mojom.sample_swa.ParentTrustedPagePendingReceiver;

