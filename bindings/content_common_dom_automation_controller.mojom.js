// Auto-generated MojoJS binding
// Source: chromium_src/content/common/dom_automation_controller.mojom
// Module: content.mojom

'use strict';

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.DomAutomationControllerHost = {};
content.mojom.DomAutomationControllerHost.$interfaceName = 'content.mojom.DomAutomationControllerHost';
content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec = { $: {} };

// Interface: DomAutomationControllerHost
mojo.internal.Struct(
    content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec, 'content.mojom.DomAutomationControllerHost_DomOperationResponse_Params', [
      mojo.internal.StructField('json_string', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

content.mojom.DomAutomationControllerHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.DomAutomationControllerHostRemote = class {
  static get $interfaceName() {
    return 'content.mojom.DomAutomationControllerHost';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.DomAutomationControllerHostPendingReceiver,
      handle);
    this.$ = new content.mojom.DomAutomationControllerHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.DomAutomationControllerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  domOperationResponse(json_string) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec,
      null,
      [json_string],
      false);
  }

};

content.mojom.DomAutomationControllerHost.getRemote = function() {
  let remote = new content.mojom.DomAutomationControllerHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.DomAutomationControllerHost',
    'context');
  return remote.$;
};

content.mojom.DomAutomationControllerHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        message = {
          header: args[1],
          payload: args[2],
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      switch (header.ordinal) {
        case 0: {
          const params = content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec.$.decode(message.payload);
          const result = this.impl.domOperationResponse(params.json_string);
          break;
        }
      }
    }});
  }
};

content.mojom.DomAutomationControllerHostReceiver = content.mojom.DomAutomationControllerHostReceiver;

content.mojom.DomAutomationControllerHostPtr = content.mojom.DomAutomationControllerHostRemote;
content.mojom.DomAutomationControllerHostRequest = content.mojom.DomAutomationControllerHostPendingReceiver;

