// Auto-generated MojoJS binding
// Source: chromium_src/chrome/test/data/webui/mojo/mojo_file_system_access_test.mojom
// Module: test.mojom

'use strict';

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
};

test.mojom.MojoFileSystemAccessTestRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  resolveTransferToken(h) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
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
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
        // Unknown ordinal (hashed). Attempt to discover mapping by trial-decoding.
        console.log('[GeneratedReceiver] Unknown ordinal ' + header.ordinal + '. Attempting heuristic discovery...');
        // Decoder uses payload view starting at 0
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: ResolveTransferToken
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec.$);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ResolveTransferToken (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(test.mojom.MojoFileSystemAccessTest_ResolveTransferToken_ParamsSpec.$);
          console.log('[GeneratedReceiver] Calling impl.resolveTransferToken');
          const result = this.impl.resolveTransferToken(params.h);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

test.mojom.MojoFileSystemAccessTestReceiver = test.mojom.MojoFileSystemAccessTestReceiver;

test.mojom.MojoFileSystemAccessTestPtr = test.mojom.MojoFileSystemAccessTestRemote;
test.mojom.MojoFileSystemAccessTestRequest = test.mojom.MojoFileSystemAccessTestPendingReceiver;

