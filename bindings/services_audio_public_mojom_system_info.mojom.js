// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/system_info.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};
var services = services || {};

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
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec, 'audio.mojom.SystemInfo_GetOutputStreamParameters_Params', [
      mojo.internal.StructField('device_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParams', [
      mojo.internal.StructField('params', 0, 0, media.mojom.AudioParametersSpec, null, true, 0, undefined),
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
      mojo.internal.StructField('device_descriptions', 0, 0, mojo.internal.Array(audio.mojom.AudioDeviceDescriptionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec, 'audio.mojom.SystemInfo_GetOutputDeviceDescriptions_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec, 'audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParams', [
      mojo.internal.StructField('device_descriptions', 0, 0, mojo.internal.Array(audio.mojom.AudioDeviceDescriptionSpec, false), null, false, 0, undefined),
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
      mojo.internal.StructField('input_params', 0, 0, media.mojom.AudioParametersSpec, null, true, 0, undefined),
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
      [device_id]);
  }

  getOutputStreamParameters(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec,
      audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec,
      [device_id]);
  }

  hasInputDevices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      audio.mojom.SystemInfo_HasInputDevices_ParamsSpec,
      audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec,
      []);
  }

  hasOutputDevices() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec,
      audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec,
      []);
  }

  getInputDeviceDescriptions() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec,
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec,
      []);
  }

  getOutputDeviceDescriptions() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec,
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec,
      []);
  }

  getAssociatedOutputDeviceID(input_device_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec,
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec,
      [input_device_id]);
  }

  getInputDeviceInfo(input_device_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec,
      audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParamsSpec,
      [input_device_id]);
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

audio.mojom.SystemInfoPtr = audio.mojom.SystemInfoRemote;
audio.mojom.SystemInfoRequest = audio.mojom.SystemInfoPendingReceiver;

