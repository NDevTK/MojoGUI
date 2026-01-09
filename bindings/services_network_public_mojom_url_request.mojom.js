// Auto-generated MojoJS binding
// Source: chromium_src/services/network/public/mojom/url_request.mojom
// Module: network.mojom

'use strict';

// Module namespace
var network = network || {};
network.mojom = network.mojom || {};


// Struct: EnabledClientHints
network.mojom.EnabledClientHintsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.EnabledClientHints',
      packedSize: 16,
      fields: [
        { name: 'not_allowed_hints', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: TrustedUrlRequestParams
network.mojom.TrustedUrlRequestParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.TrustedUrlRequestParams',
      packedSize: 16,
      fields: [
        { name: 'shared_dictionary_observer', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: WebBundleTokenParams
network.mojom.WebBundleTokenParamsSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.WebBundleTokenParams',
      packedSize: 16,
      fields: [
        { name: 'render_process_id', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLRequest
network.mojom.URLRequestSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLRequest',
      packedSize: 16,
      fields: [
        { name: 'fetch_retry_options', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: true },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: URLRequestBody
network.mojom.URLRequestBodySpec = {
  $: {
    structSpec: {
      name: 'network.mojom.URLRequestBody',
      packedSize: 16,
      fields: [
        { name: 'allow_http1_for_streaming_upload', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Array, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementBytes
network.mojom.DataElementBytesSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementBytes',
      packedSize: 16,
      fields: [
        { name: 'data', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementFile
network.mojom.DataElementFileSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementFile',
      packedSize: 16,
      fields: [
        { name: 'expected_modification_time', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementDataPipe
network.mojom.DataElementDataPipeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementDataPipe',
      packedSize: 16,
      fields: [
        { name: 'data_pipe_getter', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: DataElementChunkedDataPipe
network.mojom.DataElementChunkedDataPipeSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.DataElementChunkedDataPipe',
      packedSize: 16,
      fields: [
        { name: 'read_only_once', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.InterfaceProxy, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};

// Struct: SocketTag
network.mojom.SocketTagSpec = {
  $: {
    structSpec: {
      name: 'network.mojom.SocketTag',
      packedSize: 16,
      fields: [
        { name: 'tag', packedOffset: 0, packedBitOffset: 0, type: mojo.internal.Pointer, nullable: false },
      ],
      versions: [{version: 0}]
    }
  }
};
