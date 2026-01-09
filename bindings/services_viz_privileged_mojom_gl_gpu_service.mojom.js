// Auto-generated MojoJS binding
// Source: chromium_src/services/viz/privileged/mojom/gl/gpu_service.mojom
// Module: viz.mojom

'use strict';

// Module namespace
var viz = viz || {};
viz.mojom = viz.mojom || {};


// Interface: GpuService
viz.mojom.GpuServicePtr = class {
  constructor() {
    this.ptr = null;
    this.interfaceName = 'viz.mojom.GpuService';
  }

  available(for) {
    // Method: available
    // Call: available(for)
  }

  establishGpuChannel(client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation) {
    // Method: EstablishGpuChannel
    return new Promise((resolve) => {
      // Call: EstablishGpuChannel(client_id, client_tracing_id, is_gpu_host, enable_extra_handles_validation)
      resolve({});
    });
  }

  establishGpuChannel() {
    // Method: EstablishGpuChannel
    // Call: EstablishGpuChannel()
  }

  setChannelClientPid(client_id, client_pid) {
    // Method: SetChannelClientPid
    // Call: SetChannelClientPid(client_id, client_pid)
  }

  setChannelDiskCacheHandle(client_id, cache_handle) {
    // Method: SetChannelDiskCacheHandle
    // Call: SetChannelDiskCacheHandle(client_id, cache_handle)
  }

  setChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend) {
    // Method: SetChannelPersistentCachePendingBackend
    // Call: SetChannelPersistentCachePendingBackend(client_id, cache_handle, pending_backend)
  }

  onDiskCacheHandleDestoyed(cache_handle) {
    // Method: OnDiskCacheHandleDestoyed
    // Call: OnDiskCacheHandleDestoyed(cache_handle)
  }

  closeChannel(client_id) {
    // Method: CloseChannel
    // Call: CloseChannel(client_id)
  }

  createJpegDecodeAccelerator(jda) {
    // Method: CreateJpegDecodeAccelerator
    // Call: CreateJpegDecodeAccelerator(jda)
  }

  createJpegEncodeAccelerator(jea) {
    // Method: CreateJpegEncodeAccelerator
    // Call: CreateJpegEncodeAccelerator(jea)
  }

  registerDCOMPSurfaceHandle(surface_handle) {
    // Method: RegisterDCOMPSurfaceHandle
    return new Promise((resolve) => {
      // Call: RegisterDCOMPSurfaceHandle(surface_handle)
      resolve({});
    });
  }

  unregisterDCOMPSurfaceHandle(token) {
    // Method: UnregisterDCOMPSurfaceHandle
    // Call: UnregisterDCOMPSurfaceHandle(token)
  }

  createVideoEncodeAcceleratorProvider(vea_provider) {
    // Method: CreateVideoEncodeAcceleratorProvider
    // Call: CreateVideoEncodeAcceleratorProvider(vea_provider)
  }

  bindWebNNContextProvider(receiver, client_id) {
    // Method: BindWebNNContextProvider
    // Call: BindWebNNContextProvider(receiver, client_id)
  }

  getVideoMemoryUsageStats() {
    // Method: GetVideoMemoryUsageStats
    return new Promise((resolve) => {
      // Call: GetVideoMemoryUsageStats()
      resolve({});
    });
  }

  startPeakMemoryMonitor(sequence_num) {
    // Method: StartPeakMemoryMonitor
    // Call: StartPeakMemoryMonitor(sequence_num)
  }

  getPeakMemoryUsage(sequence_num) {
    // Method: GetPeakMemoryUsage
    return new Promise((resolve) => {
      // Call: GetPeakMemoryUsage(sequence_num)
      resolve({});
    });
  }

  requestDXGIInfo() {
    // Method: RequestDXGIInfo
    return new Promise((resolve) => {
      // Call: RequestDXGIInfo()
      resolve({});
    });
  }

  loadedBlob(cache_handle, key, data) {
    // Method: LoadedBlob
    // Call: LoadedBlob(cache_handle, key, data)
  }

  wakeUpGpu() {
    // Method: WakeUpGpu
    // Call: WakeUpGpu()
  }

  gpuSwitched() {
    // Method: GpuSwitched
    // Call: GpuSwitched()
  }

  displayAdded() {
    // Method: DisplayAdded
    // Call: DisplayAdded()
  }

  displayRemoved() {
    // Method: DisplayRemoved
    // Call: DisplayRemoved()
  }

  displayMetricsChanged() {
    // Method: DisplayMetricsChanged
    // Call: DisplayMetricsChanged()
  }

  destroyAllChannels() {
    // Method: DestroyAllChannels
    // Call: DestroyAllChannels()
  }

  onBackgroundCleanup() {
    // Method: OnBackgroundCleanup
    // Call: OnBackgroundCleanup()
  }

  onBackgrounded() {
    // Method: OnBackgrounded
    // Call: OnBackgrounded()
  }

  onForegrounded() {
    // Method: OnForegrounded
    // Call: OnForegrounded()
  }

  onMemoryPressure(level) {
    // Method: OnMemoryPressure
    // Call: OnMemoryPressure(level)
  }

  beginCATransaction() {
    // Method: BeginCATransaction
    // Call: BeginCATransaction()
  }

  commitCATransaction() {
    // Method: CommitCATransaction
    // Call: CommitCATransaction()
  }

  writeClangProfilingProfile() {
    // Method: WriteClangProfilingProfile
    // Call: WriteClangProfilingProfile()
  }

  getDawnInfo(collect_metrics) {
    // Method: GetDawnInfo
    return new Promise((resolve) => {
      // Call: GetDawnInfo(collect_metrics)
      resolve({});
    });
  }

  crash() {
    // Method: Crash
    // Call: Crash()
  }

  hang() {
    // Method: Hang
    // Call: Hang()
  }

  throwJavaException() {
    // Method: ThrowJavaException
    // Call: ThrowJavaException()
  }

};

viz.mojom.GpuServiceRequest = class {
  constructor(handle) {
    this.handle = handle;
  }
};
