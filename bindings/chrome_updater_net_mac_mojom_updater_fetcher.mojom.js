// Auto-generated MojoJS binding
// Source: chromium_src/chrome/updater/net/mac/mojom/updater_fetcher.mojom
// Module: updater.mojom

// Module namespace
var updater = updater || {};
updater.mojom = updater.mojom || {};
var mojo_base = mojo_base || {};
var url = url || {};

updater.mojom.HttpHeaderSpec = { $: {} };
updater.mojom.PostRequestObserver = {};
updater.mojom.PostRequestObserver.$interfaceName = 'updater.mojom.PostRequestObserver';
updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec = { $: {} };
updater.mojom.PostRequestObserver_OnProgress_ParamsSpec = { $: {} };
updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver = {};
updater.mojom.FileDownloadObserver.$interfaceName = 'updater.mojom.FileDownloadObserver';
updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec = { $: {} };
updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec = { $: {} };
updater.mojom.FetchService = {};
updater.mojom.FetchService.$interfaceName = 'updater.mojom.FetchService';
updater.mojom.FetchService_PostRequest_ParamsSpec = { $: {} };
updater.mojom.FetchService_PostRequest_ResponseParamsSpec = { $: {} };
updater.mojom.FetchService_DownloadToFile_ParamsSpec = { $: {} };
updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec = { $: {} };

// Struct: HttpHeader
mojo.internal.Struct(
    updater.mojom.HttpHeaderSpec, 'updater.mojom.HttpHeader', [
      mojo.internal.StructField('name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('value', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: PostRequestObserver
mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec, 'updater.mojom.PostRequestObserver_OnResponseStarted_Params', [
      mojo.internal.StructField('content_length_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' }),
      mojo.internal.StructField('http_status_code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('content_length_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnProgress_ParamsSpec, 'updater.mojom.PostRequestObserver_OnProgress_Params', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec, 'updater.mojom.PostRequestObserver_OnRequestComplete_Params', [
      mojo.internal.StructField('response_body', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_etag', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_x_cup_server_proof', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('header_set_cookie', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('xheader_retry_after_sec_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'xheader_retry_after_sec_$flag', originalFieldName: 'xheader_retry_after_sec' }),
      mojo.internal.StructField('net_error', 40, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('xheader_retry_after_sec_$flag', 44, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'xheader_retry_after_sec_$value', originalFieldName: 'xheader_retry_after_sec' }),
    ],
    [[0, 56]]);

updater.mojom.PostRequestObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.PostRequestObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.PostRequestObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.PostRequestObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.PostRequestObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResponseStarted(http_status_code, content_length) {
    return this.$.onResponseStarted(http_status_code, content_length);
  }
  onProgress(current) {
    return this.$.onProgress(current);
  }
  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    return this.$.onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec);
  }
};

updater.mojom.PostRequestObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('PostRequestObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResponseStarted(http_status_code, content_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length],
      false);
  }

  onProgress(current) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      updater.mojom.PostRequestObserver_OnProgress_ParamsSpec,
      null,
      [current],
      false);
  }

  onRequestComplete(response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec,
      null,
      [response_body, net_error, header_etag, header_x_cup_server_proof, header_set_cookie, xheader_retry_after_sec],
      false);
  }

};

updater.mojom.PostRequestObserver.getRemote = function() {
  let remote = new updater.mojom.PostRequestObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.PostRequestObserver',
    'context');
  return remote.$;
};

updater.mojom.PostRequestObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('PostRequestObserver', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnResponseStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseStarted(params.http_status_code, params.content_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onProgress(params.current);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.PostRequestObserver_OnRequestComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onRequestComplete(params.response_body, params.net_error, params.header_etag, params.header_x_cup_server_proof, params.header_set_cookie, params.xheader_retry_after_sec);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

updater.mojom.PostRequestObserverReceiver = updater.mojom.PostRequestObserverReceiver;

updater.mojom.PostRequestObserverPtr = updater.mojom.PostRequestObserverRemote;
updater.mojom.PostRequestObserverRequest = updater.mojom.PostRequestObserverPendingReceiver;


// Interface: FileDownloadObserver
mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnResponseStarted_Params', [
      mojo.internal.StructField('content_length_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_length_$flag', originalFieldName: 'content_length' }),
      mojo.internal.StructField('http_status_code', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('content_length_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_length_$value', originalFieldName: 'content_length' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnProgress_Params', [
      mojo.internal.StructField('current', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec, 'updater.mojom.FileDownloadObserver_OnDownloadComplete_Params', [
      mojo.internal.StructField('content_size_$value', 0, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'content_size_$flag', originalFieldName: 'content_size' }),
      mojo.internal.StructField('net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('content_size_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'content_size_$value', originalFieldName: 'content_size' }),
    ],
    [[0, 24]]);

updater.mojom.FileDownloadObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.FileDownloadObserverRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FileDownloadObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.FileDownloadObserverPendingReceiver,
      handle);
    this.$ = new updater.mojom.FileDownloadObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onResponseStarted(http_status_code, content_length) {
    return this.$.onResponseStarted(http_status_code, content_length);
  }
  onProgress(current) {
    return this.$.onProgress(current);
  }
  onDownloadComplete(net_error, content_size) {
    return this.$.onDownloadComplete(net_error, content_size);
  }
};

updater.mojom.FileDownloadObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FileDownloadObserver', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  onResponseStarted(http_status_code, content_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec,
      null,
      [http_status_code, content_length],
      false);
  }

  onProgress(current) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec,
      null,
      [current],
      false);
  }

  onDownloadComplete(net_error, content_size) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec,
      null,
      [net_error, content_size],
      false);
  }

};

updater.mojom.FileDownloadObserver.getRemote = function() {
  let remote = new updater.mojom.FileDownloadObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FileDownloadObserver',
    'context');
  return remote.$;
};

updater.mojom.FileDownloadObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FileDownloadObserver', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec);
             this.mapOrdinal(header.ordinal, 2);
             dispatchId = 2;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnResponseStarted_ParamsSpec.$.structSpec);
          const result = this.impl.onResponseStarted(params.http_status_code, params.content_length);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnProgress_ParamsSpec.$.structSpec);
          const result = this.impl.onProgress(params.current);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FileDownloadObserver_OnDownloadComplete_ParamsSpec.$.structSpec);
          const result = this.impl.onDownloadComplete(params.net_error, params.content_size);
          break;
        }
      }
      } catch (err) {}
    }});
  }
};

updater.mojom.FileDownloadObserverReceiver = updater.mojom.FileDownloadObserverReceiver;

updater.mojom.FileDownloadObserverPtr = updater.mojom.FileDownloadObserverRemote;
updater.mojom.FileDownloadObserverRequest = updater.mojom.FileDownloadObserverPendingReceiver;


// Interface: FetchService
mojo.internal.Struct(
    updater.mojom.FetchService_PostRequest_ParamsSpec, 'updater.mojom.FetchService_PostRequest_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('post_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('content_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('additional_headers', 24, 0, mojo.internal.Array(updater.mojom.HttpHeaderSpec.$, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    updater.mojom.FetchService_PostRequest_ResponseParamsSpec, 'updater.mojom.FetchService_PostRequest_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.PostRequestObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    updater.mojom.FetchService_DownloadToFile_ParamsSpec, 'updater.mojom.FetchService_DownloadToFile_Params', [
      mojo.internal.StructField('url', 0, 0, url.mojom.UrlSpec.$, null, false, 0, undefined),
      mojo.internal.StructField('output_file', 8, 0, mojo_base.mojom.FileSpec.$, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec, 'updater.mojom.FetchService_DownloadToFile_ResponseParams', [
      mojo.internal.StructField('observer', 0, 0, mojo.internal.InterfaceRequest(updater.mojom.FileDownloadObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

updater.mojom.FetchServicePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

updater.mojom.FetchServiceRemote = class {
  static get $interfaceName() {
    return 'updater.mojom.FetchService';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      updater.mojom.FetchServicePendingReceiver,
      handle);
    this.$ = new updater.mojom.FetchServiceRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  postRequest(url, post_data, content_type, additional_headers) {
    return this.$.postRequest(url, post_data, content_type, additional_headers);
  }
  downloadToFile(url, output_file) {
    return this.$.downloadToFile(url, output_file);
  }
};

updater.mojom.FetchServiceRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('FetchService', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  postRequest(url, post_data, content_type, additional_headers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      updater.mojom.FetchService_PostRequest_ParamsSpec,
      updater.mojom.FetchService_PostRequest_ResponseParamsSpec,
      [url, post_data, content_type, additional_headers],
      false);
  }

  downloadToFile(url, output_file) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      updater.mojom.FetchService_DownloadToFile_ParamsSpec,
      updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec,
      [url, output_file],
      false);
  }

};

updater.mojom.FetchService.getRemote = function() {
  let remote = new updater.mojom.FetchServiceRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'updater.mojom.FetchService',
    'context');
  return remote.$;
};

updater.mojom.FetchServiceReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('FetchService', [
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
    if (this.router_.onConnectionError) {
      this.router_.onConnectionError.addListener(() => {
         console.error(`[GeneratedReceiver] Connection for ${iface_name} CLOSED.`);
      });
    }
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
             decoder.decodeStructInline(updater.mojom.FetchService_PostRequest_ParamsSpec);
             this.mapOrdinal(header.ordinal, 0);
             dispatchId = 0;
           } catch (e) {}
        }
        if (dispatchId === undefined) {
           try {
             decoder.decodeStructInline(updater.mojom.FetchService_DownloadToFile_ParamsSpec);
             this.mapOrdinal(header.ordinal, 1);
             dispatchId = 1;
           } catch (e) {}
        }
        if (dispatchId === undefined) return;
      }
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FetchService_PostRequest_ParamsSpec.$.structSpec);
          const result = this.impl.postRequest(params.url, params.post_data, params.content_type, params.additional_headers);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.FetchService_PostRequest_ResponseParamsSpec);
               responder(response);
            });
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(updater.mojom.FetchService_DownloadToFile_ParamsSpec.$.structSpec);
          const result = this.impl.downloadToFile(params.url, params.output_file);
          if (header.expectsResponse) {
            Promise.resolve(result).then(response => {
              const responder = mojo.internal.interfaceSupport.createResponder(this.endpoint, header.requestId, updater.mojom.FetchService_DownloadToFile_ResponseParamsSpec);
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

updater.mojom.FetchServiceReceiver = updater.mojom.FetchServiceReceiver;

updater.mojom.FetchServicePtr = updater.mojom.FetchServiceRemote;
updater.mojom.FetchServiceRequest = updater.mojom.FetchServicePendingReceiver;

