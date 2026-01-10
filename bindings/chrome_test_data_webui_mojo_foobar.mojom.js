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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = test.mojom.Foo_GetFoo_ParamsSpec.$.decode(message.payload);
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = test.mojom.Bar_GetBar_ParamsSpec.$.decode(message.payload);
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
  }
  bind(handle) {
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onMessageReceived: (message) => {
      const header = message.header;
      switch (header.ordinal) {
        case 0: {
          const params = test.mojom.Baz_GetBaz_ParamsSpec.$.decode(message.payload);
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
    }});
  }
};

test.mojom.BazReceiver = test.mojom.BazReceiver;

test.mojom.BazPtr = test.mojom.BazRemote;
test.mojom.BazRequest = test.mojom.BazPendingReceiver;

