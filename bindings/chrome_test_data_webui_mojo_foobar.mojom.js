// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/foobar.mojom
// Module: test.mojom

'use strict';

// Module namespace
var test = test || {};
test.mojom = test.mojom || {};


// Interface: Foo
test.mojom.mojom.Foo = {};

test.mojom.mojom.FooPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.mojom.FooRemote = class {
  static get $interfaceName() {
    return 'test.mojom.Foo';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.mojom.FooPendingReceiver,
      handle);
    this.$ = new test.mojom.mojom.FooRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

test.mojom.mojom.FooRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getFoo() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      test.mojom.mojom.Foo_GetFoo_ParamsSpec,
      test.mojom.mojom.Foo_GetFoo_ResponseParamsSpec,
      []);
  }

};

test.mojom.mojom.Foo.getRemote = function() {
  let remote = new test.mojom.mojom.FooRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.Foo',
    'context');
  return remote.$;
};

// ParamsSpec for GetFoo
test.mojom.mojom.Foo_GetFoo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Foo.GetFoo_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

test.mojom.mojom.Foo_GetFoo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Foo.GetFoo_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
test.mojom.mojom.FooPtr = test.mojom.mojom.FooRemote;
test.mojom.mojom.FooRequest = test.mojom.mojom.FooPendingReceiver;


// Interface: Bar
test.mojom.mojom.Bar = {};

test.mojom.mojom.BarPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.mojom.BarRemote = class {
  static get $interfaceName() {
    return 'test.mojom.Bar';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.mojom.BarPendingReceiver,
      handle);
    this.$ = new test.mojom.mojom.BarRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

test.mojom.mojom.BarRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBar() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      test.mojom.mojom.Bar_GetBar_ParamsSpec,
      test.mojom.mojom.Bar_GetBar_ResponseParamsSpec,
      []);
  }

};

test.mojom.mojom.Bar.getRemote = function() {
  let remote = new test.mojom.mojom.BarRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.Bar',
    'context');
  return remote.$;
};

// ParamsSpec for GetBar
test.mojom.mojom.Bar_GetBar_ParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Bar.GetBar_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

test.mojom.mojom.Bar_GetBar_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Bar.GetBar_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
test.mojom.mojom.BarPtr = test.mojom.mojom.BarRemote;
test.mojom.mojom.BarRequest = test.mojom.mojom.BarPendingReceiver;


// Interface: Baz
test.mojom.mojom.Baz = {};

test.mojom.mojom.BazPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.mojom.BazRemote = class {
  static get $interfaceName() {
    return 'test.mojom.Baz';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.mojom.BazPendingReceiver,
      handle);
    this.$ = new test.mojom.mojom.BazRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

test.mojom.mojom.BazRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getBaz() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      test.mojom.mojom.Baz_GetBaz_ParamsSpec,
      test.mojom.mojom.Baz_GetBaz_ResponseParamsSpec,
      []);
  }

};

test.mojom.mojom.Baz.getRemote = function() {
  let remote = new test.mojom.mojom.BazRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.Baz',
    'context');
  return remote.$;
};

// ParamsSpec for GetBaz
test.mojom.mojom.Baz_GetBaz_ParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Baz.GetBaz_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0, packedSize: 8}]
    }
  }
};

test.mojom.mojom.Baz_GetBaz_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'test.mojom.Baz.GetBaz_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'value', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: false, minVersion: 0 },
      ],
      versions: [{version: 0, packedSize: 16}]
    }
  }
};

// Legacy compatibility
test.mojom.mojom.BazPtr = test.mojom.mojom.BazRemote;
test.mojom.mojom.BazRequest = test.mojom.mojom.BazPendingReceiver;

