// Auto-generated MojoJS binding
// Source: chromium_src/services/audio/public/mojom/system_info.mojom
// Module: audio.mojom

'use strict';

// Module namespace
var audio = audio || {};
audio.mojom = audio.mojom || {};


// Interface: SystemInfo
audio.mojom.SystemInfo = {};

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
      audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec.$,
      audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParamsSpec.$,
      [device_id]);
  }

  getOutputStreamParameters(device_id) {
    // Ordinal: 1
    return this.proxy.sendMessage(
      1,  // ordinal
      audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec.$,
      audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec.$,
      [device_id]);
  }

  hasInputDevices() {
    // Ordinal: 2
    return this.proxy.sendMessage(
      2,  // ordinal
      audio.mojom.SystemInfo_HasInputDevices_ParamsSpec.$,
      audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec.$,
      []);
  }

  hasOutputDevices() {
    // Ordinal: 3
    return this.proxy.sendMessage(
      3,  // ordinal
      audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec.$,
      audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec.$,
      []);
  }

  getInputDeviceDescriptions() {
    // Ordinal: 4
    return this.proxy.sendMessage(
      4,  // ordinal
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec.$,
      audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec.$,
      []);
  }

  getOutputDeviceDescriptions() {
    // Ordinal: 5
    return this.proxy.sendMessage(
      5,  // ordinal
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec.$,
      audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec.$,
      []);
  }

  getAssociatedOutputDeviceID(input_device_id) {
    // Ordinal: 6
    return this.proxy.sendMessage(
      6,  // ordinal
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec.$,
      audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec.$,
      [input_device_id]);
  }

  getInputDeviceInfo(input_device_id) {
    // Ordinal: 7
    return this.proxy.sendMessage(
      7,  // ordinal
      audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec.$,
      audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParamsSpec.$,
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

// ParamsSpec for GetInputStreamParameters
audio.mojom.SystemInfo_GetInputStreamParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetInputStreamParameters_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_GetInputStreamParameters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetInputStreamParameters_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOutputStreamParameters
audio.mojom.SystemInfo_GetOutputStreamParameters_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetOutputStreamParameters_Params',
      packedSize: 16,
      fields: [
        { name: 'device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_GetOutputStreamParameters_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetOutputStreamParameters_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasInputDevices
audio.mojom.SystemInfo_HasInputDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.HasInputDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_HasInputDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.HasInputDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_input_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for HasOutputDevices
audio.mojom.SystemInfo_HasOutputDevices_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.HasOutputDevices_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_HasOutputDevices_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.HasOutputDevices_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'has_output_devices', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetInputDeviceDescriptions
audio.mojom.SystemInfo_GetInputDeviceDescriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetInputDeviceDescriptions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_GetInputDeviceDescriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetInputDeviceDescriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_descriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetOutputDeviceDescriptions
audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetOutputDeviceDescriptions_Params',
      packedSize: 8,
      fields: [
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_GetOutputDeviceDescriptions_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetOutputDeviceDescriptions_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'device_descriptions', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetAssociatedOutputDeviceID
audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetAssociatedOutputDeviceID_Params',
      packedSize: 16,
      fields: [
        { name: 'input_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_GetAssociatedOutputDeviceID_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetAssociatedOutputDeviceID_ResponseParams',
      packedSize: 16,
      fields: [
        { name: 'associated_output_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// ParamsSpec for GetInputDeviceInfo
audio.mojom.SystemInfo_GetInputDeviceInfo_ParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetInputDeviceInfo_Params',
      packedSize: 16,
      fields: [
        { name: 'input_device_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

audio.mojom.SystemInfo_GetInputDeviceInfo_ResponseParamsSpec = {
  $: {
    structSpec: {
      name: 'audio.mojom.SystemInfo.GetInputDeviceInfo_ResponseParams',
      packedSize: 24,
      fields: [
        { name: 'input_params', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
        { name: 'associated_output_device_id', packedOffset: 8, packedBitOffset: 0, type: mojo.internal.String, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Legacy compatibility
audio.mojom.SystemInfoPtr = audio.mojom.SystemInfoRemote;
audio.mojom.SystemInfoRequest = audio.mojom.SystemInfoPendingReceiver;

