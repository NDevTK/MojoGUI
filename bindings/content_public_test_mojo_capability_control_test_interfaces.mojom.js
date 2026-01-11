// Auto-generated MojoJS binding
// Source: chromium_src/content/public/test/mojo_capability_control_test_interfaces.mojom
// Module: content.mojom

// Module namespace
var content = content || {};
content.mojom = content.mojom || {};

content.mojom.TestInterfaceForDefer = {};
content.mojom.TestInterfaceForDefer.$interfaceName = 'content.mojom.TestInterfaceForDefer';
content.mojom.TestInterfaceForDefer_Ping_ParamsSpec = { $: {} };
content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec = { $: {} };
content.mojom.TestInterfaceForGrant = {};
content.mojom.TestInterfaceForGrant.$interfaceName = 'content.mojom.TestInterfaceForGrant';
content.mojom.TestInterfaceForCancel = {};
content.mojom.TestInterfaceForCancel.$interfaceName = 'content.mojom.TestInterfaceForCancel';
content.mojom.TestInterfaceForUnexpected = {};
content.mojom.TestInterfaceForUnexpected.$interfaceName = 'content.mojom.TestInterfaceForUnexpected';
content.mojom.MojoContextProvider = {};
content.mojom.MojoContextProvider.$interfaceName = 'content.mojom.MojoContextProvider';
content.mojom.MojoContextProvider_GrantAll_ParamsSpec = { $: {} };

// Interface: TestInterfaceForDefer
mojo.internal.Struct(
    content.mojom.TestInterfaceForDefer_Ping_ParamsSpec, 'content.mojom.TestInterfaceForDefer_Ping_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec, 'content.mojom.TestInterfaceForDefer_Ping_ResponseParams', [
    ],
    [[0, 8]]);

content.mojom.TestInterfaceForDeferPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForDeferRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForDefer';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForDeferPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForDeferRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  ping() {
    return this.$.ping();
  }
};

content.mojom.TestInterfaceForDeferRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForDefer', [
      { explicit: null },
    ]);
  }

  ping() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.TestInterfaceForDefer_Ping_ParamsSpec,
      content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec,
      [],
      false);
  }

};

content.mojom.TestInterfaceForDefer.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForDeferRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForDefer',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForDeferReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForDefer', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.TestInterfaceForDefer_Ping_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.TestInterfaceForDefer_Ping_ParamsSpec.$.structSpec);
          const result = this.impl.ping();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, content.mojom.TestInterfaceForDefer_Ping_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.TestInterfaceForDeferReceiver = content.mojom.TestInterfaceForDeferReceiver;

content.mojom.TestInterfaceForDeferPtr = content.mojom.TestInterfaceForDeferRemote;
content.mojom.TestInterfaceForDeferRequest = content.mojom.TestInterfaceForDeferPendingReceiver;


// Interface: TestInterfaceForGrant
content.mojom.TestInterfaceForGrantPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForGrantRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForGrant';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForGrantPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForGrantRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestInterfaceForGrantRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForGrant', [
    ]);
  }

};

content.mojom.TestInterfaceForGrant.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForGrantRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForGrant',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForGrantReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForGrant', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

content.mojom.TestInterfaceForGrantReceiver = content.mojom.TestInterfaceForGrantReceiver;

content.mojom.TestInterfaceForGrantPtr = content.mojom.TestInterfaceForGrantRemote;
content.mojom.TestInterfaceForGrantRequest = content.mojom.TestInterfaceForGrantPendingReceiver;


// Interface: TestInterfaceForCancel
content.mojom.TestInterfaceForCancelPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForCancelRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForCancel';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForCancelPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForCancelRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestInterfaceForCancelRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForCancel', [
    ]);
  }

};

content.mojom.TestInterfaceForCancel.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForCancelRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForCancel',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForCancelReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForCancel', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

content.mojom.TestInterfaceForCancelReceiver = content.mojom.TestInterfaceForCancelReceiver;

content.mojom.TestInterfaceForCancelPtr = content.mojom.TestInterfaceForCancelRemote;
content.mojom.TestInterfaceForCancelRequest = content.mojom.TestInterfaceForCancelPendingReceiver;


// Interface: TestInterfaceForUnexpected
content.mojom.TestInterfaceForUnexpectedPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.TestInterfaceForUnexpectedRemote = class {
  static get $interfaceName() {
    return 'content.mojom.TestInterfaceForUnexpected';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.TestInterfaceForUnexpectedPendingReceiver,
      handle);
    this.$ = new content.mojom.TestInterfaceForUnexpectedRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

content.mojom.TestInterfaceForUnexpectedRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForUnexpected', [
    ]);
  }

};

content.mojom.TestInterfaceForUnexpected.getRemote = function() {
  let remote = new content.mojom.TestInterfaceForUnexpectedRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.TestInterfaceForUnexpected',
    'context');
  return remote.$;
};

content.mojom.TestInterfaceForUnexpectedReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('TestInterfaceForUnexpected', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx);
      this.ordinalMap.set(idx, idx);
    });
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
      }
      } catch (err) {}
    }});
  }
};

content.mojom.TestInterfaceForUnexpectedReceiver = content.mojom.TestInterfaceForUnexpectedReceiver;

content.mojom.TestInterfaceForUnexpectedPtr = content.mojom.TestInterfaceForUnexpectedRemote;
content.mojom.TestInterfaceForUnexpectedRequest = content.mojom.TestInterfaceForUnexpectedPendingReceiver;


// Interface: MojoContextProvider
mojo.internal.Struct(
    content.mojom.MojoContextProvider_GrantAll_ParamsSpec, 'content.mojom.MojoContextProvider_GrantAll_Params', [
    ],
    [[0, 8]]);

content.mojom.MojoContextProviderPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

content.mojom.MojoContextProviderRemote = class {
  static get $interfaceName() {
    return 'content.mojom.MojoContextProvider';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      content.mojom.MojoContextProviderPendingReceiver,
      handle);
    this.$ = new content.mojom.MojoContextProviderRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  grantAll() {
    return this.$.grantAll();
  }
};

content.mojom.MojoContextProviderRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MojoContextProvider', [
      { explicit: null },
    ]);
  }

  grantAll() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      content.mojom.MojoContextProvider_GrantAll_ParamsSpec,
      null,
      [],
      false);
  }

};

content.mojom.MojoContextProvider.getRemote = function() {
  let remote = new content.mojom.MojoContextProviderRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'content.mojom.MojoContextProvider',
    'context');
  return remote.$;
};

content.mojom.MojoContextProviderReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MojoContextProvider', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
        message = { header: args[1], payload: payload, handles: args[3] || [] };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(content.mojom.MojoContextProvider_GrantAll_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(content.mojom.MojoContextProvider_GrantAll_ParamsSpec.$.structSpec);
          const result = this.impl.grantAll();
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

content.mojom.MojoContextProviderReceiver = content.mojom.MojoContextProviderReceiver;

content.mojom.MojoContextProviderPtr = content.mojom.MojoContextProviderRemote;
content.mojom.MojoContextProviderRequest = content.mojom.MojoContextProviderPendingReceiver;

