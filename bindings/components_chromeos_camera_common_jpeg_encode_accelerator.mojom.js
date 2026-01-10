// Auto-generated MojoJS binding
// Source: chromium_src/components/chromeos_camera/common/jpeg_encode_accelerator.mojom
// Module: chromeos_camera.mojom

'use strict';

// Module namespace
var chromeos_camera = chromeos_camera || {};
chromeos_camera.mojom = chromeos_camera.mojom || {};
var media = media || {};

chromeos_camera.mojom.EncodeStatusSpec = { $: mojo.internal.Enum() };
chromeos_camera.mojom.JpegEncodeAccelerator = {};
chromeos_camera.mojom.JpegEncodeAccelerator.$interfaceName = 'chromeos_camera.mojom.JpegEncodeAccelerator';
chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec = { $: {} };
chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec = { $: {} };

// Enum: EncodeStatus
chromeos_camera.mojom.EncodeStatus = {
  ENCODE_OK: 0,
  HW_JPEG_ENCODE_NOT_SUPPORTED: 1,
  THREAD_CREATION_FAILED: 2,
  INVALID_ARGUMENT: 3,
  INACCESSIBLE_OUTPUT_BUFFER: 4,
  PARSE_IMAGE_FAILED: 5,
  PLATFORM_FAILURE: 6,
};

// Interface: JpegEncodeAccelerator
mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParams', [
      mojo.internal.StructField('success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_Params', [
      mojo.internal.StructField('task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('input_fd', 4, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('input_buffer_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_width', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_height', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('exif_fd', 20, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('exif_buffer_size', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('output_fd', 28, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('output_buffer_size', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos_camera.mojom.EncodeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('encoded_buffer_size', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_Params', [
      mojo.internal.StructField('input_planes', 0, 0, mojo.internal.Array(chromeos_camera.mojom.DmaBufPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('output_planes', 8, 0, mojo.internal.Array(chromeos_camera.mojom.DmaBufPlaneSpec.$, false), null, false, 0, undefined),
      mojo.internal.StructField('task_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('input_format', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('exif_handle', 24, 0, mojo.internal.Handle, null, false, 0, undefined),
      mojo.internal.StructField('exif_buffer_size', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_width', 32, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('coded_size_height', 36, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('quality', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('input_modifier', 48, 0, mojo.internal.Uint64, 0, false, 1, undefined),
      mojo.internal.StructField('has_input_modifier', 56, 0, mojo.internal.Bool, false, false, 1, undefined),
    ],
    [[0, 56], [1, 72]]);

mojo.internal.Struct(
    chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec, 'chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParams', [
      mojo.internal.StructField('status', 0, 0, chromeos_camera.mojom.EncodeStatusSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('encoded_buffer_size', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

chromeos_camera.mojom.JpegEncodeAcceleratorPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

chromeos_camera.mojom.JpegEncodeAcceleratorRemote = class {
  static get $interfaceName() {
    return 'chromeos_camera.mojom.JpegEncodeAccelerator';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      chromeos_camera.mojom.JpegEncodeAcceleratorPendingReceiver,
      handle);
    this.$ = new chromeos_camera.mojom.JpegEncodeAcceleratorRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

chromeos_camera.mojom.JpegEncodeAcceleratorRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
  }

  initialize() {
    // Ordinal: 0
    return this.proxy.sendMessage(
      0,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec,
      chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec,
      [],
      false);
  }

  encodeWithFD(task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec,
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec,
      [task_id, input_fd, input_buffer_size, coded_size_width, coded_size_height, exif_fd, exif_buffer_size, output_fd, output_buffer_size],
      false);
  }

  encodeWithDmaBuf(task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier) {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec,
      chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec,
      [task_id, input_format, input_planes, output_planes, exif_handle, exif_buffer_size, coded_size_width, coded_size_height, quality, has_input_modifier, input_modifier],
      false);
  }

};

chromeos_camera.mojom.JpegEncodeAccelerator.getRemote = function() {
  let remote = new chromeos_camera.mojom.JpegEncodeAcceleratorRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'chromeos_camera.mojom.JpegEncodeAccelerator',
    'context');
  return remote.$;
};

chromeos_camera.mojom.JpegEncodeAcceleratorReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    this.ordinalMap.set(0, 0); // Default ordinal 0 -> Index 0
    this.ordinalMap.set(1, 1); // Default ordinal 1 -> Index 1
    this.ordinalMap.set(2, 2); // Default ordinal 2 -> Index 2
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
        
        // Try Method 0: Initialize
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> Initialize (0)');
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 0 failed:', e);
           }
        }
        // Try Method 1: EncodeWithFD
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EncodeWithFD (1)');
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 1 failed:', e);
           }
        }
        // Try Method 2: EncodeWithDmaBuf
        if (dispatchId === undefined) {
           try {
             decoder.decodeStruct(chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec.$, message.header.headerSize);
             console.log('[GeneratedReceiver] Discovery SUCCESS: ' + header.ordinal + ' -> EncodeWithDmaBuf (2)');
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {
             console.warn('[GeneratedReceiver] Discovery trial 2 failed:', e);
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
          const params = decoder.decodeStruct(chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.initialize');
          const result = this.impl.initialize();
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos_camera.mojom.JpegEncodeAccelerator_Initialize_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.encodeWithFD');
          const result = this.impl.encodeWithFD(params.task_id, params.input_fd, params.input_buffer_size, params.coded_size_width, params.coded_size_height, params.exif_fd, params.exif_buffer_size, params.output_fd, params.output_buffer_size);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithFD_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStruct(chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ParamsSpec.$, message.header.headerSize);
          console.log('[GeneratedReceiver] Calling impl.encodeWithDmaBuf');
          const result = this.impl.encodeWithDmaBuf(params.task_id, params.input_format, params.input_planes, params.output_planes, params.exif_handle, params.exif_buffer_size, params.coded_size_width, params.coded_size_height, params.quality, params.has_input_modifier, params.input_modifier);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, chromeos_camera.mojom.JpegEncodeAccelerator_EncodeWithDmaBuf_ResponseParamsSpec);
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

chromeos_camera.mojom.JpegEncodeAcceleratorReceiver = chromeos_camera.mojom.JpegEncodeAcceleratorReceiver;

chromeos_camera.mojom.JpegEncodeAcceleratorPtr = chromeos_camera.mojom.JpegEncodeAcceleratorRemote;
chromeos_camera.mojom.JpegEncodeAcceleratorRequest = chromeos_camera.mojom.JpegEncodeAcceleratorPendingReceiver;

