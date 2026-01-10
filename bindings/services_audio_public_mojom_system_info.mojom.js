// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/system_info.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var media = media || {};
var sandbox = sandbox || {};

audio.mojom.SystemInfo = {};
audio.mojom.SystemInfo.$interfaceName = 'audio.mojom.SystemInfo';
audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec = { $: {} };
audio.mojom.SystemInfo_HasInputDevices_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec = { $: {} };
audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec = { $: {} };
audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParamsSpec = { $: {} };

// Interface: SystemInfo
mojo.internal.Struct(
    audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec, 'audio.mojom.SystemInfo_GetInputStreamParameters_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec, 'audio.mojom.SystemInfo_GetOutputStreamParameters_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec.$, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_HasInputDevices_ParamsSpec, 'audio.mojom.SystemInfo_HasInputDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec, 'audio.mojom.SystemInfo_HasInputDevices_ResponseParams', [
      mojo.internal.StructField('has_input_devices', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec, 'audio.mojom.SystemInfo_HasOutputDevices_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec, 'audio.mojom.SystemInfo_HasOutputDevices_ResponseParams', [
      mojo.internal.StructField('has_output_devices', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec, 'audio.mojom.SystemInfo_GetInputDeviceDescriptions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParams', [
      mojo.internal.StructField('device_descriptions', 0, 0, mojo.internal.Array(audio.mojom.AudioDeviceDescriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec, 'audio.mojom.SystemInfo_GetOutputDeviceDescriptions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParams', [
      mojo.internal.StructField('device_descriptions', 0, 0, mojo.internal.Array(audio.mojom.AudioDeviceDescriptionSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec, 'audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_Params', [
      mojo.internal.StructField('input_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParams', [
      mojo.internal.StructField('associated_output_device_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec, 'audio.mojom.SystemInfo_GetInputDeviceInfo_Params', [
      mojo.internal.StructField('input_device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParams', [
      mojo.internal.StructField('input_params', 0, 0, media.mojom.AudioParametersSpec.$, null, true, 0, undefined),
      mojo.internal.StructField('associated_output_device_id', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

audio.mojom.SystemInfoPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

audio.mojom.SystemInfoRemote = class {
  static get $interfaceName() {
    return 'audio.mojom.SystemInfo';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      audio.mojom.SystemInfoPendingReceiver,
      handle);
    this.$ = new audio.mojom.SystemInfoRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

audio.mojom.SystemInfoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  getInputStreamParameters(device_id) {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec,
      audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParamsSpec,
      [device_id],
      false);
  }

  getOutputStreamParameters(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec,
      audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec,
      [device_id],
      false);
  }

  hasInputDevices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      audio.mojom.SystemInfo_HasInputDevices_ParamsSpec,
      audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec,
      [],
      false);
  }

  hasOutputDevices() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec,
      audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec,
      [],
      false);
  }

  getInputDeviceDescriptions() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec,
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec,
      [],
      false);
  }

  getOutputDeviceDescriptions() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec,
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec,
      [],
      false);
  }

  getAssociatedOutputDeviceID(input_device_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec,
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec,
      [input_device_id],
      false);
  }

  getInputDeviceInfo(input_device_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec,
      audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParamsSpec,
      [input_device_id],
      false);
  }

};

audio.mojom.SystemInfo.getRemote = function() {
  let remote = new audio.mojom.SystemInfoRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'audio.mojom.SystemInfo',
    'context');
  return remote.$;
};

audio.mojom.SystemInfoReceiver = class {
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
    this.ordinalMap.set(7, 7); // Default ordinal 7 -> Index 7
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
        let payload = args[2];
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload);
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
        const decoder = new mojo.internal.Decoder(message.payload, message.handles);
        
        // Try Method 0: GetInputStreamParameters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInputStreamParameters (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: GetOutputStreamParameters
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOutputStreamParameters (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: HasInputDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_HasInputDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasInputDevices (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
           }
        }
        // Try Method 3: HasOutputDevices
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> HasOutputDevices (3)');
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 3 failed:', e);
           }
        }
        // Try Method 4: GetInputDeviceDescriptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInputDeviceDescriptions (4)');
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 4 failed:', e);
           }
        }
        // Try Method 5: GetOutputDeviceDescriptions
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetOutputDeviceDescriptions (5)');
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 5 failed:', e);
           }
        }
        // Try Method 6: GetAssociatedOutputDeviceID
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetAssociatedOutputDeviceID (6)');
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 6 failed:', e);
           }
        }
        // Try Method 7: GetInputDeviceInfo
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> GetInputDeviceInfo (7)');
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 7 failed:', e);
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
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInputStreamParameters');
          const result = this.impl.getInputStreamParameters(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getOutputStreamParameters');
          const result = this.impl.getOutputStreamParameters(params.device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_HasInputDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasInputDevices');
          const result = this.impl.hasInputDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.hasOutputDevices');
          const result = this.impl.hasOutputDevices();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInputDeviceDescriptions');
          const result = this.impl.getInputDeviceDescriptions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getOutputDeviceDescriptions');
          const result = this.impl.getOutputDeviceDescriptions();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getAssociatedOutputDeviceID');
          const result = this.impl.getAssociatedOutputDeviceID(params.input_device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.getInputDeviceInfo');
          const result = this.impl.getInputDeviceInfo(params.input_device_id);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParamsSpec);
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

audio.mojom.SystemInfoReceiver = audio.mojom.SystemInfoReceiver;

audio.mojom.SystemInfoPtr = audio.mojom.SystemInfoRemote;
audio.mojom.SystemInfoRequest = audio.mojom.SystemInfoPendingReceiver;

