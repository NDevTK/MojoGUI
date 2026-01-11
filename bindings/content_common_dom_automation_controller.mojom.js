// Auto-generated MojoJS binding
// Source: chromium_src/content/common/dom_automation_controller.mojom
// Module: content.mojom

'use strict';
(function() {
  // Note: Hashing and Scrambling logic is provided centrally by bindings/support.js
})();

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
  domOperationResponse(json_string) {
    return this.$.domOperationResponse(json_string);
  }
};

content.mojom.DomAutomationControllerHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('DomAutomationControllerHost', [
      { explicit: null },
    ]);
  }

  domOperationResponse(json_string) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
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
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('DomAutomationControllerHost', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
      let message = args[0];
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {{ header: args[1], payload: payload, handles: args[3] || [] }};
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.DomAutomationControllerHost_DomOperationResponse_ParamsSpec.$.structSpec);
          const result = this.impl.domOperationResponse(params.json_string);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.DomAutomationControllerHostReceiver = content.mojom.DomAutomationControllerHostReceiver;

content.mojom.DomAutomationControllerHostPtr = content.mojom.DomAutomationControllerHostRemote;
content.mojom.DomAutomationControllerHostRequest = content.mojom.DomAutomationControllerHostPendingReceiver;

