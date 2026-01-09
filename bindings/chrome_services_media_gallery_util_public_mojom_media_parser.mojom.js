// Auto-generated MojoJS binding
// Source: chromium_src/chrome/services/media_gallery_util/public/mojom/media_parser.mojom
// Module: chrome.mojom

'use strict';

// Module namespace
var chrome = chrome || {};
chrome.mojom = chrome.mojom || {};


// Struct: ExtractVideoFrameResult
chrome.mojom.ExtractVideoFrameResult = class {
  constructor(values = {}) {
    this.config = values.config !== undefined ? values.config : null;
  }
};

// Struct: MediaStreamInfo
chrome.mojom.MediaStreamInfo = class {
  constructor(values = {}) {
    this."mp3" = values."mp3" !== undefined ? values."mp3" : null;
    this.additional_properties = values.additional_properties !== undefined ? values.additional_properties : "";
  }
};

// Struct: MediaMetadata
chrome.mojom.MediaMetadata = class {
  constructor(values = {}) {
    this.raw_tags = values.raw_tags !== undefined ? values.raw_tags : 0;
  }
};

// Struct: AttachedImage
chrome.mojom.AttachedImage = class {
  constructor(values = {}) {
    this.data = values.data !== undefined ? values.data : 0;
  }
};

// Interface: MediaParser
chrome.mojom.MediaParserPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.MediaParser';
  }

  parseMediaMetadata(mime_type, total_size, get_attached_images, media_data_source) {
    // Method: ParseMediaMetadata
    return new Promise((resolve) => {
      // Call: ParseMediaMetadata(mime_type, total_size, get_attached_images, media_data_source)
      resolve({});
    });
  }

  extractVideoFrame(mime_type, total_size, media_data_source) {
    // Method: ExtractVideoFrame
    return new Promise((resolve) => {
      // Call: ExtractVideoFrame(mime_type, total_size, media_data_source)
      resolve({});
    });
  }

  checkMediaFile(decode_time, file) {
    // Method: CheckMediaFile
    return new Promise((resolve) => {
      // Call: CheckMediaFile(decode_time, file)
      resolve({});
    });
  }

  getCpuInfo() {
    // Method: GetCpuInfo
    return new Promise((resolve) => {
      // Call: GetCpuInfo()
      resolve({});
    });
  }

};

chrome.mojom.MediaParserRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaParserFactory
chrome.mojom.MediaParserFactoryPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.MediaParserFactory';
  }

  createMediaParser(libyuv_cpu_flags, libavutil_cpu_flags) {
    // Method: CreateMediaParser
    return new Promise((resolve) => {
      // Call: CreateMediaParser(libyuv_cpu_flags, libavutil_cpu_flags)
      resolve({});
    });
  }

};

chrome.mojom.MediaParserFactoryRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: MediaDataSource
chrome.mojom.MediaDataSourcePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'chrome.mojom.MediaDataSource';
  }

  read(position, length) {
    // Method: Read
    return new Promise((resolve) => {
      // Call: Read(position, length)
      resolve({});
    });
  }

};

chrome.mojom.MediaDataSourceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
