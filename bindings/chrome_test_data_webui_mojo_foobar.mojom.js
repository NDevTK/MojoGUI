// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/foobar.mojom
// Module: test.mojom

'use strict';

// Module namespace
var test = test || {};
test.mojom = test.mojom || {};


// Interface: Foo
test.mojom.Foo = {};

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
      test.mojom.Foo_GetFoo_ParamsSpec.$,
      test.mojom.Foo_GetFoo_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for GetFoo
test.mojom.Foo_GetFoo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Foo.GetFoo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

test.mojom.Foo_GetFoo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Foo.GetFoo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
test.mojom.FooPtr = test.mojom.FooRemote;
test.mojom.FooRequest = test.mojom.FooPendingReceiver;


// Interface: Bar
test.mojom.Bar = {};

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
      test.mojom.Bar_GetBar_ParamsSpec.$,
      test.mojom.Bar_GetBar_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for GetBar
test.mojom.Bar_GetBar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Bar.GetBar_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

test.mojom.Bar_GetBar_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Bar.GetBar_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
test.mojom.BarPtr = test.mojom.BarRemote;
test.mojom.BarRequest = test.mojom.BarPendingReceiver;


// Interface: Baz
test.mojom.Baz = {};

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
      test.mojom.Baz_GetBaz_ParamsSpec.$,
      test.mojom.Baz_GetBaz_ResponseParamsSpec.$,
      []);
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

// ParamsSpec for GetBaz
test.mojom.Baz_GetBaz_ParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Baz.GetBaz_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

test.mojom.Baz_GetBaz_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Baz.GetBaz_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
test.mojom.BazPtr = test.mojom.BazRemote;
test.mojom.BazRequest = test.mojom.BazPendingReceiver;

