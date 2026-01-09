// Auto-generated MojoJS binding
// Source: chromium_src/components/media_router/common/mojom/logger.mojom
// Module: media_router.mojom

'use strict';

// Module namespace
var media_router = media_router || {};
media_router.mojom = media_router.mojom || {};


// Enum: LogCategory
media_router.mojom.LogCategory = {
  kDiscovery: 0,
  kRoute: 1,
  kMirroring: 2,
  kUi: 3,
};

// Interface: Logger
media_router.mojom.LoggerPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'media_router.mojom.Logger';
  }

  logInfo(category, component, message, sink_id, media_source, session_id) {
    // Method: LogInfo
    // Call: LogInfo(category, component, message, sink_id, media_source, session_id)
  }

  logWarning(category, component, message, sink_id, media_source, session_id) {
    // Method: LogWarning
    // Call: LogWarning(category, component, message, sink_id, media_source, session_id)
  }

  logError(category, component, message, sink_id, media_source, session_id) {
    // Method: LogError
    // Call: LogError(category, component, message, sink_id, media_source, session_id)
  }

  bindReceiver(receiver) {
    // Method: BindReceiver
    // Call: BindReceiver(receiver)
  }

};

media_router.mojom.LoggerRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
