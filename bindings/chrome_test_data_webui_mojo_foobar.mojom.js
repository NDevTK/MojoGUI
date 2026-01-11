// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/foobar.mojom
// Module: test.mojom

// Module namespace
var test = test || {};
test.mojom = test.mojom || {};

test.mojom.Foo = {};
test.mojom.Foo.$interfaceName = 'test.mojom.Foo';
test.mojom.Foo_GetFoo_ParamsSpec = { $: {} };
test.mojom.Foo_GetFoo_ResponseParamsSpec = { $: {} };
test.mojom.Bar = {};
test.mojom.Bar.$interfaceName = 'test.mojom.Bar';
test.mojom.Bar_GetBar_ParamsSpec = { $: {} };
test.mojom.Bar_GetBar_ResponseParamsSpec = { $: {} };
test.mojom.Baz = {};
test.mojom.Baz.$interfaceName = 'test.mojom.Baz';
test.mojom.Baz_GetBaz_ParamsSpec = { $: {} };
test.mojom.Baz_GetBaz_ResponseParamsSpec = { $: {} };

// Interface: Foo
mojo.internal.Struct(
    test.mojom.Foo_GetFoo_ParamsSpec, 'test.mojom.Foo_GetFoo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    test.mojom.Foo_GetFoo_ResponseParamsSpec, 'test.mojom.Foo_GetFoo_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

test.mojom.FooPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.FooRemote = class {
  static get $interfaceName() {
    return 'test.mojom.Foo';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.FooPendingReceiver,
      handle);
    this.$ = new test.mojom.FooRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getFoo() {
    return this.$.getFoo();
  }
};

test.mojom.FooRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Foo', [
      { explicit: null },
    ]);
  }

  getFoo() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      test.mojom.Foo_GetFoo_ParamsSpec,
      test.mojom.Foo_GetFoo_ResponseParamsSpec,
      [],
      false);
  }

};

test.mojom.Foo.getRemote = function() {
  let remote = new test.mojom.FooRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.Foo',
    'context');
  return remote.$;
};

test.mojom.FooReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Foo', [
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
             decoder.decodeStructInline(test.mojom.Foo_GetFoo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(test.mojom.Foo_GetFoo_ParamsSpec.$.structSpec);
          const result = this.impl.getFoo();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, test.mojom.Foo_GetFoo_ResponseParamsSpec);
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

test.mojom.FooReceiver = test.mojom.FooReceiver;

test.mojom.FooPtr = test.mojom.FooRemote;
test.mojom.FooRequest = test.mojom.FooPendingReceiver;


// Interface: Bar
mojo.internal.Struct(
    test.mojom.Bar_GetBar_ParamsSpec, 'test.mojom.Bar_GetBar_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    test.mojom.Bar_GetBar_ResponseParamsSpec, 'test.mojom.Bar_GetBar_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

test.mojom.BarPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.BarRemote = class {
  static get $interfaceName() {
    return 'test.mojom.Bar';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.BarPendingReceiver,
      handle);
    this.$ = new test.mojom.BarRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBar() {
    return this.$.getBar();
  }
};

test.mojom.BarRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Bar', [
      { explicit: null },
    ]);
  }

  getBar() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      test.mojom.Bar_GetBar_ParamsSpec,
      test.mojom.Bar_GetBar_ResponseParamsSpec,
      [],
      false);
  }

};

test.mojom.Bar.getRemote = function() {
  let remote = new test.mojom.BarRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.Bar',
    'context');
  return remote.$;
};

test.mojom.BarReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Bar', [
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
             decoder.decodeStructInline(test.mojom.Bar_GetBar_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(test.mojom.Bar_GetBar_ParamsSpec.$.structSpec);
          const result = this.impl.getBar();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, test.mojom.Bar_GetBar_ResponseParamsSpec);
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

test.mojom.BarReceiver = test.mojom.BarReceiver;

test.mojom.BarPtr = test.mojom.BarRemote;
test.mojom.BarRequest = test.mojom.BarPendingReceiver;


// Interface: Baz
mojo.internal.Struct(
    test.mojom.Baz_GetBaz_ParamsSpec, 'test.mojom.Baz_GetBaz_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    test.mojom.Baz_GetBaz_ResponseParamsSpec, 'test.mojom.Baz_GetBaz_ResponseParams', [
      mojo.internal.StructField('value', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

test.mojom.BazPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.BazRemote = class {
  static get $interfaceName() {
    return 'test.mojom.Baz';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.BazPendingReceiver,
      handle);
    this.$ = new test.mojom.BazRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getBaz() {
    return this.$.getBaz();
  }
};

test.mojom.BazRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('Baz', [
      { explicit: null },
    ]);
  }

  getBaz() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      test.mojom.Baz_GetBaz_ParamsSpec,
      test.mojom.Baz_GetBaz_ResponseParamsSpec,
      [],
      false);
  }

};

test.mojom.Baz.getRemote = function() {
  let remote = new test.mojom.BazRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.Baz',
    'context');
  return remote.$;
};

test.mojom.BazReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('Baz', [
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
             decoder.decodeStructInline(test.mojom.Baz_GetBaz_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(test.mojom.Baz_GetBaz_ParamsSpec.$.structSpec);
          const result = this.impl.getBaz();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, test.mojom.Baz_GetBaz_ResponseParamsSpec);
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

test.mojom.BazReceiver = test.mojom.BazReceiver;

test.mojom.BazPtr = test.mojom.BazRemote;
test.mojom.BazRequest = test.mojom.BazPendingReceiver;

