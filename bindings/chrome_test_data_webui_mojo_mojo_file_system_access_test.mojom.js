// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/mojo_file_system_access_test.mojom
// Module: test.mojom

// Module namespace
var test = test || {};
test.mojom = test.mojom || {};

test.mojom.MojoFileSystemAccessTest = {};
test.mojom.MojoFileSystemAccessTest.$interfaceName = 'test.mojom.MojoFileSystemAccessTest';
test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec = { $: {} };

// Interface: MojoFileSystemAccessTest
mojo.internal.Struct(
    test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec, 'test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_Params', [
      mojo.internal.StructField('h', 0, 0, mojo.internal.Handle, null, false, 0, undefined),
    ],
    [[0, 16]]);

test.mojom.MojoFileSystemAccessTestPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

test.mojom.MojoFileSystemAccessTestRemote = class {
  static get $interfaceName() {
    return 'test.mojom.MojoFileSystemAccessTest';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      test.mojom.MojoFileSystemAccessTestPendingReceiver,
      handle);
    this.$ = new test.mojom.MojoFileSystemAccessTestRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  resolveTransferToken(h) {
    return this.$.resolveTransferToken(h);
  }
};

test.mojom.MojoFileSystemAccessTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('MojoFileSystemAccessTest', [
      { explicit: null },
    ]);
  }

  resolveTransferToken(h) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec,
      null,
      [h],
      false);
  }

};

test.mojom.MojoFileSystemAccessTest.getRemote = function() {
  let remote = new test.mojom.MojoFileSystemAccessTestRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'test.mojom.MojoFileSystemAccessTest',
    'context');
  return remote.$;
};

test.mojom.MojoFileSystemAccessTestReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('MojoFileSystemAccessTest', [
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
    this.router_.onConnectionError.addListener(() => {
       console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
    });
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
             decoder.decodeStructInline(test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec.$.structSpec);
          const result = this.impl.resolveTransferToken(params.h);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

test.mojom.MojoFileSystemAccessTestReceiver = test.mojom.MojoFileSystemAccessTestReceiver;

test.mojom.MojoFileSystemAccessTestPtr = test.mojom.MojoFileSystemAccessTestRemote;
test.mojom.MojoFileSystemAccessTestRequest = test.mojom.MojoFileSystemAccessTestPendingReceiver;

