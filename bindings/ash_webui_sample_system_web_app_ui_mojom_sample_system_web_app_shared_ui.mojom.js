// Auto-generated MojoJS binding
// Source: chromium_src/ash/webui/sample_system_web_app_ui/mojom/sample_system_web_app_shared_ui.mojom
// Module: ash.mojom.sample_swa

'use strict';

// Module namespace
var ash = ash || {};
ash.mojom = ash.mojom || {};
ash.mojom.sample_swa = ash.mojom.sample_swa || {};

ash.mojom.sample_swa.ChildUntrustedPage = {};
ash.mojom.sample_swa.ChildUntrustedPage.$interfaceName = 'ash.mojom.sample_swa.ChildUntrustedPage';
ash.mojom.sample_swa.ChildUntrustedPage_DoSomethingForParent_ParamsSpec = { $: {} };
ash.mojom.sample_swa.ParentTrustedPage = {};
ash.mojom.sample_swa.ParentTrustedPage.$interfaceName = 'ash.mojom.sample_swa.ParentTrustedPage';
ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ParamsSpec = { $: {} };
ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ResponseParamsSpec = { $: {} };

// Interface: ChildUntrustedPage
mojo.internal.Struct(
    ash.mojom.sample_swa.ChildUntrustedPage_DoSomethingForParent_ParamsSpec, 'ash.mojom.sample_swa.ChildUntrustedPage_DoSomethingForParent_Params', [
      mojo.internal.StructField('task', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [task],
      false);
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

ash.mojom.sample_swa.ChildUntrustedPageReceiver = class {
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
          const params = ash.mojom.sample_swa.ChildUntrustedPage_DoSomethingForParent_ParamsSpec.$.decode(message.payload);
          const result = this.impl.doSomethingForParent(params.task);
          break;
        }
      }
    });
  }
};

ash.mojom.sample_swa.ChildUntrustedPageReceiver = ash.mojom.sample_swa.ChildUntrustedPageReceiver;

ash.mojom.sample_swa.ChildUntrustedPagePtr = ash.mojom.sample_swa.ChildUntrustedPageRemote;
ash.mojom.sample_swa.ChildUntrustedPageRequest = ash.mojom.sample_swa.ChildUntrustedPagePendingReceiver;


// Interface: ParentTrustedPage
mojo.internal.Struct(
    ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ParamsSpec, 'ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_Params', [
      mojo.internal.StructField('task', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ResponseParamsSpec, 'ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ResponseParams', [
      mojo.internal.StructField('resp', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

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
      [task],
      false);
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

ash.mojom.sample_swa.ParentTrustedPageReceiver = class {
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
          const params = ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ParamsSpec.$.decode(message.payload);
          const result = this.impl.doSomethingForChild(params.task);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, ash.mojom.sample_swa.ParentTrustedPage_DoSomethingForChild_ResponseParamsSpec);
               responder(response);
            }});
          }
          break;
        }
      }
    });
  }
};

ash.mojom.sample_swa.ParentTrustedPageReceiver = ash.mojom.sample_swa.ParentTrustedPageReceiver;

ash.mojom.sample_swa.ParentTrustedPagePtr = ash.mojom.sample_swa.ParentTrustedPageRemote;
ash.mojom.sample_swa.ParentTrustedPageRequest = ash.mojom.sample_swa.ParentTrustedPagePendingReceiver;

