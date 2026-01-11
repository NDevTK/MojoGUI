// Auto-generated MojoJS binding
// Source: chromium_src/services/test/echo/public/mojom/echo.mojom
// Module: echo.mojom

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
  echoString(input) {
    return this.$.echoString(input);
  }
  echoStringToSharedMemory(input, region) {
    return this.$.echoStringToSharedMemory(input, region);
  }
  quit() {
    return this.$.quit();
  }
  crash() {
    return this.$.crash();
  }
  delayLoad() {
    return this.$.delayLoad();
  }
  loadNativeLibrary(library, call_winmm_delayload) {
    return this.$.loadNativeLibrary(library, call_winmm_delayload);
  }
  decryptEncrypt(encryptor, input) {
    return this.$.decryptEncrypt(encryptor, input);
  }
};

echo.mojom.EchoServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('EchoService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  echoString(input) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      echo.mojom.EchoService_EchoString_ParamsSpec,
      echo.mojom.EchoService_EchoString_ResponseParamsSpec,
      [input],
      false);
  }

  echoStringToSharedMemory(input, region) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec,
      null,
      [input, region],
      false);
  }

  quit() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      echo.mojom.EchoService_Quit_ParamsSpec,
      null,
      [],
      false);
  }

  crash() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      echo.mojom.EchoService_Crash_ParamsSpec,
      null,
      [],
      false);
  }

  delayLoad() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      echo.mojom.EchoService_DelayLoad_ParamsSpec,
      null,
      [],
      false);
  }

  loadNativeLibrary(library, call_winmm_delayload) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec,
      echo.mojom.EchoService_LoadNativeLibrary_ResponseParamsSpec,
      [library, call_winmm_delayload],
      false);
  }

  decryptEncrypt(encryptor, input) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('EchoService', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
             decoder.decodeStructInline(echo.mojom.EchoService_EchoString_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(echo.mojom.EchoService_Quit_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(echo.mojom.EchoService_Crash_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(echo.mojom.EchoService_DelayLoad_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(echo.mojom.EchoService_DecryptEncrypt_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(echo.mojom.EchoService_EchoString_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(echo.mojom.EchoService_EchoStringToSharedMemory_ParamsSpec.$.structSpec);
          const result = this.impl.echoStringToSharedMemory(params.input, params.region);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(echo.mojom.EchoService_Quit_ParamsSpec.$.structSpec);
          const result = this.impl.quit();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(echo.mojom.EchoService_Crash_ParamsSpec.$.structSpec);
          const result = this.impl.crash();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(echo.mojom.EchoService_DelayLoad_ParamsSpec.$.structSpec);
          const result = this.impl.delayLoad();
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(echo.mojom.EchoService_LoadNativeLibrary_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(echo.mojom.EchoService_DecryptEncrypt_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

echo.mojom.EchoServiceReceiver = echo.mojom.EchoServiceReceiver;

echo.mojom.EchoServicePtr = echo.mojom.EchoServiceRemote;
echo.mojom.EchoServiceRequest = echo.mojom.EchoServicePendingReceiver;

