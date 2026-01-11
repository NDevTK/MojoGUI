// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/system_info.mojom
// Module: audio.mojom

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
  getInputStreamParameters(device_id) {
    return this.$.getInputStreamParameters(device_id);
  }
  getOutputStreamParameters(device_id) {
    return this.$.getOutputStreamParameters(device_id);
  }
  hasInputDevices() {
    return this.$.hasInputDevices();
  }
  hasOutputDevices() {
    return this.$.hasOutputDevices();
  }
  getInputDeviceDescriptions() {
    return this.$.getInputDeviceDescriptions();
  }
  getOutputDeviceDescriptions() {
    return this.$.getOutputDeviceDescriptions();
  }
  getAssociatedOutputDeviceID(input_device_id) {
    return this.$.getAssociatedOutputDeviceID(input_device_id);
  }
  getInputDeviceInfo(input_device_id) {
    return this.$.getInputDeviceInfo(input_device_id);
  }
};

audio.mojom.SystemInfoRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('SystemInfo', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getInputStreamParameters(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec,
      audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParamsSpec,
      [device_id],
      false);
  }

  getOutputStreamParameters(device_id) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec,
      audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec,
      [device_id],
      false);
  }

  hasInputDevices() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      audio.mojom.SystemInfo_HasInputDevices_ParamsSpec,
      audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec,
      [],
      false);
  }

  hasOutputDevices() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec,
      audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec,
      [],
      false);
  }

  getInputDeviceDescriptions() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec,
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec,
      [],
      false);
  }

  getOutputDeviceDescriptions() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec,
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec,
      [],
      false);
  }

  getAssociatedOutputDeviceID(input_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec,
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec,
      [input_device_id],
      false);
  }

  getInputDeviceInfo(input_device_id) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
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
    const ordinals = window.mojoScrambler.getOrdinals('SystemInfo', [
      { explicit: null },
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
             decoder.decodeStructInline(audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.SystemInfo_HasInputDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec);
             this.mapOrdinal(header.ordinal, 3);
             dispatchId = 3;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 4);
             dispatchId = 4;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec);
             this.mapOrdinal(header.ordinal, 5);
             dispatchId = 5;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec);
             this.mapOrdinal(header.ordinal, 6);
             dispatchId = 6;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec);
             this.mapOrdinal(header.ordinal, 7);
             dispatchId = 7;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_HasInputDevices_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec.$.structSpec);
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
          const params = decoder.decodeStructInline(audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec.$.structSpec);
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
      } catch (err) {}
    }});
  }
};

audio.mojom.SystemInfoReceiver = audio.mojom.SystemInfoReceiver;

audio.mojom.SystemInfoPtr = audio.mojom.SystemInfoRemote;
audio.mojom.SystemInfoRequest = audio.mojom.SystemInfoPendingReceiver;

