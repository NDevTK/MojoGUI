// Auto-generated MojoJS binding
// Source: chromium_src/services/test/echo/public/mojom/echo.mojom
// Module: echo.mojom

'use strict';

// Module namespace
var echo = echo || {};
echo.mojom = echo.mojom || {};
var os_crypt_async = os_crypt_async || {};
var mojo_base = mojo_base || {};
var sandbox = sandbox || {};

echo.mojom.LoadStatusSpec = { $: mojo.internal.Enum() };
echo.mojom.EchoService = {};
echo.mojom.EchoService.$interfaceName = 'echo.mojom.EchoService';
echo.mojom.EchoService_EchoString_ParamsSpec = { $: {} };
echo.mojom.EchoService_EchoString_ResponseParamsSpec = { $: {} };
echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec = { $: {} };
echo.mojom.EchoService_Quit_ParamsSpec = { $: {} };
echo.mojom.EchoService_Crash_ParamsSpec = { $: {} };
echo.mojom.EchoService_DelayLoad_ParamsSpec = { $: {} };
echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec = { $: {} };
echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec = { $: {} };
echo.mojom.EchoService_DecryptEncrypt_ParamsSpec = { $: {} };
echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec = { $: {} };

// Enum: LoadStatus
echo.mojom.LoadStatus = {
  kSuccess: 0,
  kFailedLoadLibrary: 1,
  kFailedGetProcAddress: 2,
  kFailedCallingDelayLoad: 3,
};

// Interface: EchoService
mojo.internal.Struct(
    echo.mojom.EchoService_EchoString_ParamsSpec, 'echo.mojom.EchoService_EchoString_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    echo.mojom.EchoService_EchoString_ResponseParamsSpec, 'echo.mojom.EchoService_EchoString_ResponseParams', [
      mojo.internal.StructField('echoed_input', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec, 'echo.mojom.EchoService_EchoStringToSharedMemory_Params', [
      mojo.internal.StructField('input', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('region', 8, 0, mojo_base.mojom.UnsafeSharedMemoryRegionSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    echo.mojom.EchoService_Quit_ParamsSpec, 'echo.mojom.EchoService_Quit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    echo.mojom.EchoService_Crash_ParamsSpec, 'echo.mojom.EchoService_Crash_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    echo.mojom.EchoService_DelayLoad_ParamsSpec, 'echo.mojom.EchoService_DelayLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec, 'echo.mojom.EchoService_LoadNativeLibrary_Params', [
      mojo.internal.StructField('library', 0, 0, mojo_base.mojom.FilePathSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('call_winmm_delayload', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec, 'echo.mojom.EchoService_LoadNativeLibrary_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, echo.mojom.LoadStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('error_code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    echo.mojom.EchoService_DecryptEncrypt_ParamsSpec, 'echo.mojom.EchoService_DecryptEncrypt_Params', [
      mojo.internal.StructField('encryptor', 0, 0, os_crypt_async.mojom.EncryptorSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('input', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec, 'echo.mojom.EchoService_DecryptEncrypt_ResponseParams', [
      mojo.internal.StructField('output', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
    ],
    [[0, 16]]);

echo.mojom.EchoServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

echo.mojom.EchoServiceRemote = class {
  static get $interfaceName() {
    return 'echo.mojom.EchoService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      echo.mojom.EchoServicePendingReceiver,
      handle);
    this.$ = new echo.mojom.EchoServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

echo.mojom.EchoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  echoString(input) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      echo.mojom.EchoService_EchoString_ParamsSpec,
      echo.mojom.EchoService_EchoString_ResponseParamsSpec,
      [input],
      false);
  }

  echoStringToSharedMemory(input, region) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec,
      null,
      [input, region],
      false);
  }

  quit() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      echo.mojom.EchoService_Quit_ParamsSpec,
      null,
      [],
      false);
  }

  crash() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      echo.mojom.EchoService_Crash_ParamsSpec,
      null,
      [],
      false);
  }

  delayLoad() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      echo.mojom.EchoService_DelayLoad_ParamsSpec,
      null,
      [],
      false);
  }

  loadNativeLibrary(library, call_winmm_delayload) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec,
      echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec,
      [library, call_winmm_delayload],
      false);
  }

  decryptEncrypt(encryptor, input) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      echo.mojom.EchoService_DecryptEncrypt_ParamsSpec,
      echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec,
      [encryptor, input],
      false);
  }

};

echo.mojom.EchoService.getRemote = function() {
  let remote = new echo.mojom.EchoServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'echo.mojom.EchoService',
    'context');
  return remote.$;
};

echo.mojom.EchoServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
    this.ordinalMap.set(3, 3); // Default ordinal 3 -> Index 3
    this.ordinalMap.set(4, 4); // Default ordinal 4 -> Index 4
    this.ordinalMap.set(5, 5); // Default ordinal 5 -> Index 5
    this.ordinalMap.set(6, 6); // Default ordinal 6 -> Index 6
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
        
        // Try Method 0: EchoString
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(echo.mojom.EchoService_EchoString_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoString (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 1: EchoStringToSharedMemory
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EchoStringToSharedMemory (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 2: Quit
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(echo.mojom.EchoService_Quit_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Quit (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 3: Crash
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(echo.mojom.EchoService_Crash_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Crash (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 4: DelayLoad
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(echo.mojom.EchoService_DelayLoad_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DelayLoad (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 5: LoadNativeLibrary
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> LoadNativeLibrary (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) { /* Ignore mismatch */ }
        }
        // Try Method 6: DecryptEncrypt
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(echo.mojom.EchoService_DecryptEncrypt_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> DecryptEncrypt (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) { /* Ignore mismatch */ }
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
          const params = decoder.decodeStruct(echo.mojom.EchoService_EchoString_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.echoString');
          const result = this.impl.echoString(params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, echo.mojom.EchoService_EchoString_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.echoStringToSharedMemory');
          const result = this.impl.echoStringToSharedMemory(params.input, params.region);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(echo.mojom.EchoService_Quit_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.quit');
          const result = this.impl.quit();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(echo.mojom.EchoService_Crash_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.crash');
          const result = this.impl.crash();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(echo.mojom.EchoService_DelayLoad_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.delayLoad');
          const result = this.impl.delayLoad();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.loadNativeLibrary');
          const result = this.impl.loadNativeLibrary(params.library, params.call_winmm_delayload);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(echo.mojom.EchoService_DecryptEncrypt_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.decryptEncrypt');
          const result = this.impl.decryptEncrypt(params.encryptor, params.input);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, echo.mojom.EchoService_DecryptEncrypt_ResponseParamsSpec);
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

echo.mojom.EchoServiceReceiver = echo.mojom.EchoServiceReceiver;

echo.mojom.EchoServicePtr = echo.mojom.EchoServiceRemote;
echo.mojom.EchoServiceRequest = echo.mojom.EchoServicePendingReceiver;

