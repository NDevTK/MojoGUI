// Auto-generated MojoJS binding
// Source: chromium_src/third_party/blink/public/mojom/loader/resource_load_info_notifier.mojom
// Module: blink.mojom

'use strict';

// Module namespace
var blink = blink || {};
blink.mojom = blink.mojom || {};


// Interface: ResourceLoadInfoNotifier
blink.mojom.ResourceLoadInfoNotifierPtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'blink.mojom.ResourceLoadInfoNotifier';
  }

  notifyUpdateUserGestureCarryoverInfo() {
    // Method: NotifyUpdateUserGestureCarryoverInfo
    // Call: NotifyUpdateUserGestureCarryoverInfo()
  }

  notifyResourceRedirectReceived(redirect_info, redirect_response) {
    // Method: NotifyResourceRedirectReceived
    // Call: NotifyResourceRedirectReceived(redirect_info, redirect_response)
  }

  notifyResourceResponseReceived(request_id, final_response_url, head, request_destination, is_ad_resource) {
    // Method: NotifyResourceResponseReceived
    // Call: NotifyResourceResponseReceived(request_id, final_response_url, head, request_destination, is_ad_resource)
  }

  notifyResourceTransferSizeUpdated(request_id, transfer_size_diff) {
    // Method: NotifyResourceTransferSizeUpdated
    // Call: NotifyResourceTransferSizeUpdated(request_id, transfer_size_diff)
  }

  notifyResourceLoadCompleted(resource_load_info, status) {
    // Method: NotifyResourceLoadCompleted
    // Call: NotifyResourceLoadCompleted(resource_load_info, status)
  }

  notifyResourceLoadCanceled(request_id) {
    // Method: NotifyResourceLoadCanceled
    // Call: NotifyResourceLoadCanceled(request_id)
  }

  clone(pending_resource_load_info_notifier) {
    // Method: Clone
    // Call: Clone(pending_resource_load_info_notifier)
  }

};

blink.mojom.ResourceLoadInfoNotifierRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
