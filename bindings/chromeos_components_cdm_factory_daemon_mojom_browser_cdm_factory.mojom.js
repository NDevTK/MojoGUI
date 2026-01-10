// Auto-generated MojoJS binding
// Source: chromium_src/chromeos/components/cdm_factory_daemon/mojom/browser_cdm_factory.mojom
// Module: chromeos.cdm.mojom

'use strict';

// Module namespace
var chromeos = chromeos || {};
chromeos.cdm = chromeos.cdm || {};
chromeos.cdm.mojom = chromeos.cdm.mojom || {};
var sandbox = sandbox || {};
var gfx = gfx || {};

chromeos.cdm.mojom.BrowserCdmFactory = {};
chromeos.cdm.mojom.BrowserCdmFactory.$interfaceName = 'chromeos.cdm.mojom.BrowserCdmFactory';
chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec = { $: {} };
chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec = { $: {} };

// Interface: BrowserCdmFactory
mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_Params', [
      mojo.internal.StructField('key_system', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParams', [
      mojo.internal.StructField('factory', 0, 0, mojo.internal.InterfaceProxy(chromeos.cdm.mojom.CdmFactoryRemote), null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_Params', [
      mojo.internal.StructField('output_protection', 0, 0, mojo.internal.InterfaceRequest(chromeos.cdm.mojom.OutputProtectionRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParams', [
      mojo.internal.StructField('config_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParams', [
      mojo.internal.StructField('resolutions', 0, 0, mojo.internal.Array(gfx.mojom.SizeSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_Params', [
      mojo.internal.StructField('key_id', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('hw_identifier', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos.cdm.mojom.DecryptStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('key_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_Params', [
      mojo.internal.StructField('size', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParams', [
      mojo.internal.StructField('fd', 0, 0, mojo.internal.Pointer, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_Params', [
      mojo.internal.StructField('secure_handle', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('stream_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('offset', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec, 'chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParams', [
      mojo.internal.StructField('slice_header', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('success', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos.cdm.mojom.BrowserCdmFactoryRemote = class {
  static get $interfaceName() {
    return 'chromeos.cdm.mojom.BrowserCdmFactory';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver,
      handle);
    this.$ = new chromeos.cdm.mojom.BrowserCdmFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos.cdm.mojom.BrowserCdmFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  createFactory(key_system) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec,
      [key_system],
      false);
  }

  getOutputProtection(output_protection) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec,
      null,
      [output_protection],
      false);
  }

  getHwConfigData() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec,
      [],
      false);
  }

  getScreenResolutions() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec,
      [],
      false);
  }

  getAndroidHwKeyData(key_id, hw_identifier) {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec,
      [key_id, hw_identifier],
      false);
  }

  allocateSecureBuffer(size) {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec,
      [size],
      false);
  }

  parseEncryptedSliceHeader(secure_handle, offset, stream_data) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec,
      chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec,
      [secure_handle, offset, stream_data],
      false);
  }

};

chromeos.cdm.mojom.BrowserCdmFactory.getRemote = function() {
  let remote = new chromeos.cdm.mojom.BrowserCdmFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos.cdm.mojom.BrowserCdmFactory',
    'context');
  return remote.$;
};

chromeos.cdm.mojom.BrowserCdmFactoryReceiver = class {
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
        
        // Try Method 0: CreateFactory
        try {
             decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> CreateFactory (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 1: GetOutputProtection
        try {
             decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOutputProtection (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 2: GetHwConfigData
        try {
             decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetHwConfigData (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 3: GetScreenResolutions
        try {
             decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetScreenResolutions (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 4: GetAndroidHwKeyData
        try {
             decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAndroidHwKeyData (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 5: AllocateSecureBuffer
        try {
             decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> AllocateSecureBuffer (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        // Try Method 6: ParseEncryptedSliceHeader
        try {
             decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> ParseEncryptedSliceHeader (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
        } catch (e) { /* Ignore mismatch */ }
        if (dispatchId !== undefined) break;

        if (dispatchId === undefined) {
             console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
             return;
        }
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      switch (dispatchId) {
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.createFactory');
          const result = this.impl.createFactory(params.key_system);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_CreateFactory_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetOutputProtection_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getOutputProtection');
          const result = this.impl.getOutputProtection(params.output_protection);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getHwConfigData');
          const result = this.impl.getHwConfigData();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_GetHwConfigData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getScreenResolutions');
          const result = this.impl.getScreenResolutions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_GetScreenResolutions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAndroidHwKeyData');
          const result = this.impl.getAndroidHwKeyData(params.key_id, params.hw_identifier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_GetAndroidHwKeyData_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.allocateSecureBuffer');
          const result = this.impl.allocateSecureBuffer(params.size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_AllocateSecureBuffer_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.parseEncryptedSliceHeader');
          const result = this.impl.parseEncryptedSliceHeader(params.secure_handle, params.offset, params.stream_data);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos.cdm.mojom.BrowserCdmFactory_ParseEncryptedSliceHeader_ResponseParamsSpec);
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

chromeos.cdm.mojom.BrowserCdmFactoryReceiver = chromeos.cdm.mojom.BrowserCdmFactoryReceiver;

chromeos.cdm.mojom.BrowserCdmFactoryPtr = chromeos.cdm.mojom.BrowserCdmFactoryRemote;
chromeos.cdm.mojom.BrowserCdmFactoryRequest = chromeos.cdm.mojom.BrowserCdmFactoryPendingReceiver;

