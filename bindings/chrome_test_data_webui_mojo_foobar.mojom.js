// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/foobar.mojom
// Module: test.mojom

'use strict';

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
};

test.mojom.FooRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFoo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetFoo
        try {
             decoder.decodeStruct(test.mojom.Foo_GetFoo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetFoo (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(test.mojom.Foo_GetFoo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getFoo');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

test.mojom.BarRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBar() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetBar
        try {
             decoder.decodeStruct(test.mojom.Bar_GetBar_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBar (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(test.mojom.Bar_GetBar_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBar');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
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
};

test.mojom.BazRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBaz() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (...args) => {
      try {
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
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetBaz
        try {
             decoder.decodeStruct(test.mojom.Baz_GetBaz_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetBaz (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(test.mojom.Baz_GetBaz_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getBaz');
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
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

test.mojom.BazReceiver = test.mojom.BazReceiver;

test.mojom.BazPtr = test.mojom.BazRemote;
test.mojom.BazRequest = test.mojom.BazPendingReceiver;

