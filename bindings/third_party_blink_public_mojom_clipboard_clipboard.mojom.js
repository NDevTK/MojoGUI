// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/clipboard/clipboard.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Enum: ClipboardFormat
blink.mojom.ClipboardFormat = {
};

// Enum: ClipboardBuffer
blink.mojom.ClipboardBuffer = {
};

// Enum: PlatformClipboardPermissionState
blink.mojom.PlatformClipboardPermissionState = {
};

// Struct: ClipboardFiles
blink.mojom.ClipboardFiles = class {
  constructor(values = {}) {
    this.file_system_id = values.file_system_id !== undefined ? values.file_system_id : "";
  }
};

// Interface: ClipboardListener
blink.mojom.ClipboardListenerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ClipboardListener';
  }

  onClipboardDataChanged(types, change_id) {
    // Method: OnClipboardDataChanged
    // Call: OnClipboardDataChanged(types, change_id)
  }

};

blink.mojom.ClipboardListenerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};

// Interface: ClipboardHost
blink.mojom.ClipboardHostPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ClipboardHost';
  }

  getSequenceNumber(buffer) {
    // Method: GetSequenceNumber
    return new Promise((resolve) => {
      // Call: GetSequenceNumber(buffer)
      resolve({});
    });
  }

  isFormatAvailable(format, buffer) {
    // Method: IsFormatAvailable
    return new Promise((resolve) => {
      // Call: IsFormatAvailable(format, buffer)
      resolve({});
    });
  }

  readAvailableTypes(buffer) {
    // Method: ReadAvailableTypes
    return new Promise((resolve) => {
      // Call: ReadAvailableTypes(buffer)
      resolve({});
    });
  }

  readText(buffer) {
    // Method: ReadText
    return new Promise((resolve) => {
      // Call: ReadText(buffer)
      resolve({});
    });
  }

  readHtml(buffer) {
    // Method: ReadHtml
    return new Promise((resolve) => {
      // Call: ReadHtml(buffer)
      resolve({});
    });
  }

  readSvg(buffer) {
    // Method: ReadSvg
    return new Promise((resolve) => {
      // Call: ReadSvg(buffer)
      resolve({});
    });
  }

  readRtf(buffer) {
    // Method: ReadRtf
    return new Promise((resolve) => {
      // Call: ReadRtf(buffer)
      resolve({});
    });
  }

  readPng(buffer) {
    // Method: ReadPng
    return new Promise((resolve) => {
      // Call: ReadPng(buffer)
      resolve({});
    });
  }

  readFiles(buffer) {
    // Method: ReadFiles
    return new Promise((resolve) => {
      // Call: ReadFiles(buffer)
      resolve({});
    });
  }

  readDataTransferCustomData(buffer, type) {
    // Method: ReadDataTransferCustomData
    return new Promise((resolve) => {
      // Call: ReadDataTransferCustomData(buffer, type)
      resolve({});
    });
  }

  readAvailableCustomAndStandardFormats() {
    // Method: ReadAvailableCustomAndStandardFormats
    return new Promise((resolve) => {
      // Call: ReadAvailableCustomAndStandardFormats()
      resolve({});
    });
  }

  readUnsanitizedCustomFormat(format) {
    // Method: ReadUnsanitizedCustomFormat
    return new Promise((resolve) => {
      // Call: ReadUnsanitizedCustomFormat(format)
      resolve({});
    });
  }

  writeText(text) {
    // Method: WriteText
    // Call: WriteText(text)
  }

  writeHtml(markup, url) {
    // Method: WriteHtml
    // Call: WriteHtml(markup, url)
  }

  writeSvg(markup) {
    // Method: WriteSvg
    // Call: WriteSvg(markup)
  }

  writeSmartPasteMarker() {
    // Method: WriteSmartPasteMarker
    // Call: WriteSmartPasteMarker()
  }

  writeDataTransferCustomData(data) {
    // Method: WriteDataTransferCustomData
    // Call: WriteDataTransferCustomData(data)
  }

  writeBookmark(url, title) {
    // Method: WriteBookmark
    // Call: WriteBookmark(url, title)
  }

  writeImage(image) {
    // Method: WriteImage
    // Call: WriteImage(image)
  }

  writeUnsanitizedCustomFormat(format, data) {
    // Method: WriteUnsanitizedCustomFormat
    // Call: WriteUnsanitizedCustomFormat(format, data)
  }

  commitWrite() {
    // Method: CommitWrite
    // Call: CommitWrite()
  }

  writeStringToFindPboard(text) {
    // Method: WriteStringToFindPboard
    // Call: WriteStringToFindPboard(text)
  }

  getPlatformPermissionState() {
    // Method: GetPlatformPermissionState
    return new Promise((resolve) => {
      // Call: GetPlatformPermissionState()
      resolve({});
    });
  }

  registerClipboardListener(listener) {
    // Method: RegisterClipboardListener
    // Call: RegisterClipboardListener(listener)
  }

};

blink.mojom.ClipboardHostRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
