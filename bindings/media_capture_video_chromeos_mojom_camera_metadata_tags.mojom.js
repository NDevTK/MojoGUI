// Auto-generated MojoJS binding
 // Source: chromium_src/media/capture/video/chromeos/mojom/camera_metadata_tags.mojom
 // Module: cros.mojom

 'use strict';
 (function() {
   const SHA256 = (s) => {
     const K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xD5A79147, 0x06CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585,0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2];
     const h = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
     const m = new TextEncoder().encode(s);
     const l = m.length;
     const b = new Uint32Array(((l + 8) >> 6) + 1 << 4);
     for (let i = 0; i < l; i++) b[i >> 2] |= m[i] << (24 - (i & 3) * 8);
     b[l >> 2] |= 0x80 << (24 - (l & 3) * 8);
     b[b.length - 1] = l * 8;
     for (let i = 0; i < b.length; i += 16) {
       let [a1, b1, c1, d1, e1, f1, g1, h1] = h;
       const w = new Uint32Array(64);
       for (let j = 0; j < 64; j++) {
         if (j < 16) w[j] = b[i + j];
         else {
           const s0 = ((w[j-15]>>>7)|(w[j-15]<<25))^((w[j-15]>>>18)|(w[j-15]<<14))^(w[j-15]>>>3);
           const s1 = ((w[j-2]>>>17)|(w[j-2]<<15))^((w[j-2]>>>19)|(w[j-2]<<13))^(w[j-2]>>>10);
           w[j] = (w[j-16]+s0+w[j-7]+s1)|0;
         }
         const t1 = (h1 + (((e1>>>6)|(e1<<26))^((e1>>>11)|(e1<<21))^((e1>>>25)|(e1<<7))) + ((e1&f1)^((~e1)&g1)) + K[j] + w[j])|0;
         const t2 = ((((a1>>>2)|(a1<<30))^((a1>>>13)|(a1<<19))^((a1>>>22)|(a1<<10))) + ((a1&b1)^(a1&c1)^(b1&c1)))|0;
         h1 = g1; g1 = f1; f1 = e1; e1 = (d1 + t1) | 0; d1 = c1; c1 = b1; b1 = a1; a1 = (t1 + t2) | 0;
       }
       h[0] = (h[0] + a1) | 0; h[1] = (h[1] + b1) | 0; h[2] = (h[2] + c1) | 0; h[3] = (h[3] + d1) | 0;
       h[4] = (h[4] + e1) | 0; h[5] = (h[5] + f1) | 0; h[6] = (h[6] + g1) | 0; h[7] = (h[7] + h1) | 0;
     }
     return h[0];
   };
    window.mojoScrambler = window.mojoScrambler || {
      // Per-interface scramble map (generated from BUILD.gn analysis)
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.FrePageHandlerFactory": true, "glic.mojom.FrePageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "accessibility_annotator.info.mojom.PageHandler": true, "browser.accessibility_annotator_internals.mojom.PageHandlerFactory": true, "browser.accessibility_annotator_internals.mojom.PageHandler": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.borealis_installer.mojom.PageHandlerFactory": true, "ash.borealis_installer.mojom.PageHandler": true, "ash.borealis_installer.mojom.Page": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.PageHandlerFactory": true, "intro.mojom.PageHandler": true, "intro.mojom.Page": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "privacy_sandbox_internals.mojom.PageHandler": true, "privacy_sandbox_internals.mojom.Page": true, "private_state_tokens.mojom.PrivateStateTokensPageHandler": true, "related_website_sets.mojom.RelatedWebsiteSetsPageHandler": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "actor.mojom.JournalClient": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrinterXmlParser": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.PrintServerObserver": true, "crosapi.mojom.PrintJobObserver": true, "crosapi.mojom.LocalPrinter": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "crosapi.mojom.TelemetryManagementService": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "ai.mojom.ZeroStateSuggestionsService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIClassifier": false, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateClassifierClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
      // Lazy cache: keyed by "version|ifaceName"
      _ordinalCache: {},
      _lastVersion: null,
      getOrdinals: function(ifaceName, methodSpecs) {
        const params = new URLSearchParams(window.location.search);
        const forceNoScramble = params.get('scramble') === '0' || window.mojoNoScramble;
        
        // Check per-interface setting from BUILD.gn
        const shouldScramble = this._interfaceScrambleMap[ifaceName];
        if (shouldScramble === false || forceNoScramble) {
          // No scrambling: use explicit ordinals or sequential index
          return methodSpecs.map((ms, idx) => ms.explicit !== null ? ms.explicit : idx);
        }
        
        // Get current version (may change after async detection)
        const versionStr = window.mojoVersion || '150.0.7841.0';
        
        // Invalidate cache if version changed
        if (this._lastVersion !== versionStr) {
          this._ordinalCache = {};
          this._lastVersion = versionStr;
        }
        
        // Check cache
        const cacheKey = ifaceName;
        if (this._ordinalCache[cacheKey]) {
          return this._ordinalCache[cacheKey];
        }
        
        // Scrambling enabled: use SHA256 hash
        const p = versionStr.split('.');
        const salt = 'MAJOR=' + p[0] + '\n' + 'MINOR=' + (p[1]||0) + '\n' + 'BUILD=' + (p[2]||0) + '\n' + 'PATCH=' + (p[3]||0) + '\n';
        const shortName = ifaceName.split('.').pop();
        
        const seen = new Set();
        methodSpecs.forEach(ms => { if (ms.explicit !== null) seen.add(ms.explicit); });
        let i = 0;
        const ordinals = methodSpecs.map((ms, idx) => {
          if (ms.explicit !== null) return ms.explicit;
          while (true) {
            i++;
            const h0 = SHA256(salt + shortName + i);
            const ord = (((h0 & 0xFF) << 24) | ((h0 & 0xFF00) << 8) | ((h0 & 0xFF0000) >> 8) | (h0 >>> 24)) & 0x7fffffff;
            if (!seen.has(ord)) {
              seen.add(ord);
              return ord;
            }
          }
        });
        
        // Cache the result
        this._ordinalCache[cacheKey] = ordinals;
        return ordinals;
      }
    };
  })();

 // Module namespace
 var mojo = mojo || {};
 mojo.internal = mojo.internal || {};
 mojo.internal.bindings = mojo.internal.bindings || {};
 
 // Fallback opaque struct type for unknown external types
 mojo.internal.OpaqueStruct = mojo.internal.OpaqueStruct || {
   $: {
     structSpec: { name: 'OpaqueStruct', packedSize: 8, fields: [], versions: [{version: 0, packedSize: 8}] },
     encode: function(value, encoder, byteOffset, bitOffset, nullable) {
       if (value !== null && value !== undefined) {
         console.warn('[MojoJS] Encoding OpaqueStruct! Field may be missing its real spec.', value);
       }
       encoder.encodeOffset(byteOffset, 0);
     },
     encodeNull: function(encoder, byteOffset) { },
     decode: function(decoder, byteOffset, bitOffset, nullable) {
       try {
         const offset = decoder.decodeOffset(byteOffset);
         return offset ? { _opaqueOffset: offset } : null;
       } catch (e) {
         return null;
       }
     },
     arrayElementSize: nullable => 8,
     isValidObjectKeyType: false,
   }
 };

 mojo.internal.bindings.cros = mojo.internal.bindings.cros || {};
mojo.internal.bindings.cros.mojom = mojo.internal.bindings.cros.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};

mojo.internal.bindings.cros.mojom.CameraMetadataSectionSpec = mojo.internal.bindings.cros.mojom.CameraMetadataSectionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.CameraMetadataSectionStartSpec = mojo.internal.bindings.cros.mojom.CameraMetadataSectionStartSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.CameraMetadataTagSpec = mojo.internal.bindings.cros.mojom.CameraMetadataTagSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidColorCorrectionModeSpec = mojo.internal.bindings.cros.mojom.AndroidColorCorrectionModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidColorCorrectionAberrationModeSpec = mojo.internal.bindings.cros.mojom.AndroidColorCorrectionAberrationModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAeAntibandingModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlAeAntibandingModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAeLockSpec = mojo.internal.bindings.cros.mojom.AndroidControlAeLockSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAeModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlAeModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAePrecaptureTriggerSpec = mojo.internal.bindings.cros.mojom.AndroidControlAePrecaptureTriggerSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAfModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlAfModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAfTriggerSpec = mojo.internal.bindings.cros.mojom.AndroidControlAfTriggerSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAwbLockSpec = mojo.internal.bindings.cros.mojom.AndroidControlAwbLockSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAwbModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlAwbModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlCaptureIntentSpec = mojo.internal.bindings.cros.mojom.AndroidControlCaptureIntentSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlEffectModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlEffectModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlSceneModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlSceneModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlVideoStabilizationModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlVideoStabilizationModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAeStateSpec = mojo.internal.bindings.cros.mojom.AndroidControlAeStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAfStateSpec = mojo.internal.bindings.cros.mojom.AndroidControlAfStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAwbStateSpec = mojo.internal.bindings.cros.mojom.AndroidControlAwbStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAeLockAvailableSpec = mojo.internal.bindings.cros.mojom.AndroidControlAeLockAvailableSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAwbLockAvailableSpec = mojo.internal.bindings.cros.mojom.AndroidControlAwbLockAvailableSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlEnableZslSpec = mojo.internal.bindings.cros.mojom.AndroidControlEnableZslSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAfSceneChangeSpec = mojo.internal.bindings.cros.mojom.AndroidControlAfSceneChangeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlExtendedSceneModeSpec = mojo.internal.bindings.cros.mojom.AndroidControlExtendedSceneModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAfRegionsSetSpec = mojo.internal.bindings.cros.mojom.AndroidControlAfRegionsSetSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAeRegionsSetSpec = mojo.internal.bindings.cros.mojom.AndroidControlAeRegionsSetSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidControlAwbRegionsSetSpec = mojo.internal.bindings.cros.mojom.AndroidControlAwbRegionsSetSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidDemosaicModeSpec = mojo.internal.bindings.cros.mojom.AndroidDemosaicModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidEdgeModeSpec = mojo.internal.bindings.cros.mojom.AndroidEdgeModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidFlashModeSpec = mojo.internal.bindings.cros.mojom.AndroidFlashModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidFlashStateSpec = mojo.internal.bindings.cros.mojom.AndroidFlashStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidFlashInfoAvailableSpec = mojo.internal.bindings.cros.mojom.AndroidFlashInfoAvailableSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidHotPixelModeSpec = mojo.internal.bindings.cros.mojom.AndroidHotPixelModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLensOpticalStabilizationModeSpec = mojo.internal.bindings.cros.mojom.AndroidLensOpticalStabilizationModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLensFacingSpec = mojo.internal.bindings.cros.mojom.AndroidLensFacingSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLensStateSpec = mojo.internal.bindings.cros.mojom.AndroidLensStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLensPoseReferenceSpec = mojo.internal.bindings.cros.mojom.AndroidLensPoseReferenceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLensInfoFocusDistanceCalibrationSpec = mojo.internal.bindings.cros.mojom.AndroidLensInfoFocusDistanceCalibrationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidNoiseReductionModeSpec = mojo.internal.bindings.cros.mojom.AndroidNoiseReductionModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidQuirksPartialResultSpec = mojo.internal.bindings.cros.mojom.AndroidQuirksPartialResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidRequestMetadataModeSpec = mojo.internal.bindings.cros.mojom.AndroidRequestMetadataModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidRequestTypeSpec = mojo.internal.bindings.cros.mojom.AndroidRequestTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidRequestAvailableCapabilitiesSpec = mojo.internal.bindings.cros.mojom.AndroidRequestAvailableCapabilitiesSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidRequestAvailableDynamicRangeProfilesMapSpec = mojo.internal.bindings.cros.mojom.AndroidRequestAvailableDynamicRangeProfilesMapSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableFormatsSpec = mojo.internal.bindings.cros.mojom.AndroidScalerAvailableFormatsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamConfigurationsSpec = mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamConfigurationsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerCroppingTypeSpec = mojo.internal.bindings.cros.mojom.AndroidScalerCroppingTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableRecommendedStreamConfigurationsSpec = mojo.internal.bindings.cros.mojom.AndroidScalerAvailableRecommendedStreamConfigurationsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerRotateAndCropSpec = mojo.internal.bindings.cros.mojom.AndroidScalerRotateAndCropSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerPhysicalCameraMultiResolutionStreamConfigurationsSpec = mojo.internal.bindings.cros.mojom.AndroidScalerPhysicalCameraMultiResolutionStreamConfigurationsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamConfigurationsMaximumResolutionSpec = mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamConfigurationsMaximumResolutionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerMultiResolutionStreamSupportedSpec = mojo.internal.bindings.cros.mojom.AndroidScalerMultiResolutionStreamSupportedSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerCropRegionSetSpec = mojo.internal.bindings.cros.mojom.AndroidScalerCropRegionSetSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamUseCasesSpec = mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamUseCasesSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSensorReferenceIlluminant1Spec = mojo.internal.bindings.cros.mojom.AndroidSensorReferenceIlluminant1Spec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSensorTestPatternModeSpec = mojo.internal.bindings.cros.mojom.AndroidSensorTestPatternModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSensorPixelModeSpec = mojo.internal.bindings.cros.mojom.AndroidSensorPixelModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSensorRawBinningFactorUsedSpec = mojo.internal.bindings.cros.mojom.AndroidSensorRawBinningFactorUsedSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSensorInfoColorFilterArrangementSpec = mojo.internal.bindings.cros.mojom.AndroidSensorInfoColorFilterArrangementSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSensorInfoTimestampSourceSpec = mojo.internal.bindings.cros.mojom.AndroidSensorInfoTimestampSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSensorInfoLensShadingAppliedSpec = mojo.internal.bindings.cros.mojom.AndroidSensorInfoLensShadingAppliedSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidShadingModeSpec = mojo.internal.bindings.cros.mojom.AndroidShadingModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidStatisticsFaceDetectModeSpec = mojo.internal.bindings.cros.mojom.AndroidStatisticsFaceDetectModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidStatisticsHistogramModeSpec = mojo.internal.bindings.cros.mojom.AndroidStatisticsHistogramModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidStatisticsSharpnessMapModeSpec = mojo.internal.bindings.cros.mojom.AndroidStatisticsSharpnessMapModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidStatisticsHotPixelMapModeSpec = mojo.internal.bindings.cros.mojom.AndroidStatisticsHotPixelMapModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidStatisticsSceneFlickerSpec = mojo.internal.bindings.cros.mojom.AndroidStatisticsSceneFlickerSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidStatisticsLensShadingMapModeSpec = mojo.internal.bindings.cros.mojom.AndroidStatisticsLensShadingMapModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidStatisticsOisDataModeSpec = mojo.internal.bindings.cros.mojom.AndroidStatisticsOisDataModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidTonemapModeSpec = mojo.internal.bindings.cros.mojom.AndroidTonemapModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidTonemapPresetCurveSpec = mojo.internal.bindings.cros.mojom.AndroidTonemapPresetCurveSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLedTransmitSpec = mojo.internal.bindings.cros.mojom.AndroidLedTransmitSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLedAvailableLedsSpec = mojo.internal.bindings.cros.mojom.AndroidLedAvailableLedsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidInfoSupportedHardwareLevelSpec = mojo.internal.bindings.cros.mojom.AndroidInfoSupportedHardwareLevelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidInfoSupportedBufferManagementVersionSpec = mojo.internal.bindings.cros.mojom.AndroidInfoSupportedBufferManagementVersionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidBlackLevelLockSpec = mojo.internal.bindings.cros.mojom.AndroidBlackLevelLockSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSyncFrameNumberSpec = mojo.internal.bindings.cros.mojom.AndroidSyncFrameNumberSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidSyncMaxLatencySpec = mojo.internal.bindings.cros.mojom.AndroidSyncMaxLatencySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDepthStreamConfigurationsSpec = mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDepthStreamConfigurationsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidDepthDepthIsExclusiveSpec = mojo.internal.bindings.cros.mojom.AndroidDepthDepthIsExclusiveSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDynamicDepthStreamConfigurationsSpec = mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDynamicDepthStreamConfigurationsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDepthStreamConfigurationsMaximumResolutionSpec = mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDepthStreamConfigurationsMaximumResolutionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDynamicDepthStreamConfigurationsMaximumResolutionSpec = mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDynamicDepthStreamConfigurationsMaximumResolutionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidLogicalMultiCameraSensorSyncTypeSpec = mojo.internal.bindings.cros.mojom.AndroidLogicalMultiCameraSensorSyncTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidDistortionCorrectionModeSpec = mojo.internal.bindings.cros.mojom.AndroidDistortionCorrectionModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidHeicAvailableHeicStreamConfigurationsSpec = mojo.internal.bindings.cros.mojom.AndroidHeicAvailableHeicStreamConfigurationsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidHeicAvailableHeicStreamConfigurationsMaximumResolutionSpec = mojo.internal.bindings.cros.mojom.AndroidHeicAvailableHeicStreamConfigurationsMaximumResolutionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidHeicInfoSupportedSpec = mojo.internal.bindings.cros.mojom.AndroidHeicInfoSupportedSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidAutomotiveLocationSpec = mojo.internal.bindings.cros.mojom.AndroidAutomotiveLocationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.cros.mojom.AndroidAutomotiveLensFacingSpec = mojo.internal.bindings.cros.mojom.AndroidAutomotiveLensFacingSpec || { $: mojo.internal.Enum().$ };

// Enum: CameraMetadataSection
mojo.internal.bindings.cros.mojom.CameraMetadataSection = {
  ANDROID_COLOR_CORRECTION: 0,
  ANDROID_CONTROL: 1,
  ANDROID_DEMOSAIC: 2,
  ANDROID_EDGE: 3,
  ANDROID_FLASH: 4,
  ANDROID_FLASH_INFO: 5,
  ANDROID_HOT_PIXEL: 6,
  ANDROID_JPEG: 7,
  ANDROID_LENS: 8,
  ANDROID_LENS_INFO: 9,
  ANDROID_NOISE_REDUCTION: 10,
  ANDROID_QUIRKS: 11,
  ANDROID_REQUEST: 12,
  ANDROID_SCALER: 13,
  ANDROID_SENSOR: 14,
  ANDROID_SENSOR_INFO: 15,
  ANDROID_SHADING: 16,
  ANDROID_STATISTICS: 17,
  ANDROID_STATISTICS_INFO: 18,
  ANDROID_TONEMAP: 19,
  ANDROID_LED: 20,
  ANDROID_INFO: 21,
  ANDROID_BLACK_LEVEL: 22,
  ANDROID_SYNC: 23,
  ANDROID_REPROCESS: 24,
  ANDROID_DEPTH: 25,
  ANDROID_LOGICAL_MULTI_CAMERA: 26,
  ANDROID_DISTORTION_CORRECTION: 27,
  ANDROID_HEIC: 28,
  ANDROID_HEIC_INFO: 29,
  ANDROID_AUTOMOTIVE: 30,
  ANDROID_AUTOMOTIVE_LENS: 31,
  ANDROID_SECTION_COUNT: 32,
  VENDOR_SECTION: 32768,
};

// Enum: CameraMetadataSectionStart
mojo.internal.bindings.cros.mojom.CameraMetadataSectionStart = {
  ANDROID_COLOR_CORRECTION_START: 0,
  ANDROID_CONTROL_START: 65536,
  ANDROID_DEMOSAIC_START: 131072,
  ANDROID_EDGE_START: 196608,
  ANDROID_FLASH_START: 262144,
  ANDROID_FLASH_INFO_START: 327680,
  ANDROID_HOT_PIXEL_START: 393216,
  ANDROID_JPEG_START: 458752,
  ANDROID_LENS_START: 524288,
  ANDROID_LENS_INFO_START: 589824,
  ANDROID_NOISE_REDUCTION_START: 655360,
  ANDROID_QUIRKS_START: 720896,
  ANDROID_REQUEST_START: 786432,
  ANDROID_SCALER_START: 851968,
  ANDROID_SENSOR_START: 917504,
  ANDROID_SENSOR_INFO_START: 983040,
  ANDROID_SHADING_START: 1048576,
  ANDROID_STATISTICS_START: 1114112,
  ANDROID_STATISTICS_INFO_START: 1179648,
  ANDROID_TONEMAP_START: 1245184,
  ANDROID_LED_START: 1310720,
  ANDROID_INFO_START: 1376256,
  ANDROID_BLACK_LEVEL_START: 1441792,
  ANDROID_SYNC_START: 1507328,
  ANDROID_REPROCESS_START: 1572864,
  ANDROID_DEPTH_START: 1638400,
  ANDROID_LOGICAL_MULTI_CAMERA_START: 1703936,
  ANDROID_DISTORTION_CORRECTION_START: 1769472,
  ANDROID_HEIC_START: 1835008,
  ANDROID_HEIC_INFO_START: 1900544,
  ANDROID_AUTOMOTIVE_START: 1966080,
  ANDROID_AUTOMOTIVE_LENS_START: 2031616,
};

// Enum: CameraMetadataTag
mojo.internal.bindings.cros.mojom.CameraMetadataTag = {
  ANDROID_COLOR_CORRECTION_MODE: 0,
  ANDROID_COLOR_CORRECTION_TRANSFORM: 1,
  ANDROID_COLOR_CORRECTION_GAINS: 2,
  ANDROID_COLOR_CORRECTION_ABERRATION_MODE: 3,
  ANDROID_COLOR_CORRECTION_AVAILABLE_ABERRATION_MODES: 4,
  ANDROID_COLOR_CORRECTION_END: 5,
  ANDROID_CONTROL_AE_ANTIBANDING_MODE: 65536,
  ANDROID_CONTROL_AE_EXPOSURE_COMPENSATION: 65537,
  ANDROID_CONTROL_AE_LOCK: 65538,
  ANDROID_CONTROL_AE_MODE: 65539,
  ANDROID_CONTROL_AE_REGIONS: 65540,
  ANDROID_CONTROL_AE_TARGET_FPS_RANGE: 65541,
  ANDROID_CONTROL_AE_PRECAPTURE_TRIGGER: 65542,
  ANDROID_CONTROL_AF_MODE: 65543,
  ANDROID_CONTROL_AF_REGIONS: 65544,
  ANDROID_CONTROL_AF_TRIGGER: 65545,
  ANDROID_CONTROL_AWB_LOCK: 65546,
  ANDROID_CONTROL_AWB_MODE: 65547,
  ANDROID_CONTROL_AWB_REGIONS: 65548,
  ANDROID_CONTROL_CAPTURE_INTENT: 65549,
  ANDROID_CONTROL_EFFECT_MODE: 65550,
  ANDROID_CONTROL_MODE: 65551,
  ANDROID_CONTROL_SCENE_MODE: 65552,
  ANDROID_CONTROL_VIDEO_STABILIZATION_MODE: 65553,
  ANDROID_CONTROL_AE_AVAILABLE_ANTIBANDING_MODES: 65554,
  ANDROID_CONTROL_AE_AVAILABLE_MODES: 65555,
  ANDROID_CONTROL_AE_AVAILABLE_TARGET_FPS_RANGES: 65556,
  ANDROID_CONTROL_AE_COMPENSATION_RANGE: 65557,
  ANDROID_CONTROL_AE_COMPENSATION_STEP: 65558,
  ANDROID_CONTROL_AF_AVAILABLE_MODES: 65559,
  ANDROID_CONTROL_AVAILABLE_EFFECTS: 65560,
  ANDROID_CONTROL_AVAILABLE_SCENE_MODES: 65561,
  ANDROID_CONTROL_AVAILABLE_VIDEO_STABILIZATION_MODES: 65562,
  ANDROID_CONTROL_AWB_AVAILABLE_MODES: 65563,
  ANDROID_CONTROL_MAX_REGIONS: 65564,
  ANDROID_CONTROL_SCENE_MODE_OVERRIDES: 65565,
  ANDROID_CONTROL_AE_PRECAPTURE_ID: 65566,
  ANDROID_CONTROL_AE_STATE: 65567,
  ANDROID_CONTROL_AF_STATE: 65568,
  ANDROID_CONTROL_AF_TRIGGER_ID: 65569,
  ANDROID_CONTROL_AWB_STATE: 65570,
  ANDROID_CONTROL_AVAILABLE_HIGH_SPEED_VIDEO_CONFIGURATIONS: 65571,
  ANDROID_CONTROL_AE_LOCK_AVAILABLE: 65572,
  ANDROID_CONTROL_AWB_LOCK_AVAILABLE: 65573,
  ANDROID_CONTROL_AVAILABLE_MODES: 65574,
  ANDROID_CONTROL_POST_RAW_SENSITIVITY_BOOST_RANGE: 65575,
  ANDROID_CONTROL_POST_RAW_SENSITIVITY_BOOST: 65576,
  ANDROID_CONTROL_ENABLE_ZSL: 65577,
  ANDROID_CONTROL_AF_SCENE_CHANGE: 65578,
  ANDROID_CONTROL_AVAILABLE_EXTENDED_SCENE_MODE_MAX_SIZES: 65579,
  ANDROID_CONTROL_AVAILABLE_EXTENDED_SCENE_MODE_ZOOM_RATIO_RANGES: 65580,
  ANDROID_CONTROL_EXTENDED_SCENE_MODE: 65581,
  ANDROID_CONTROL_ZOOM_RATIO_RANGE: 65582,
  ANDROID_CONTROL_ZOOM_RATIO: 65583,
  ANDROID_CONTROL_AVAILABLE_HIGH_SPEED_VIDEO_CONFIGURATIONS_MAXIMUM_RESOLUTION: 65584,
  ANDROID_CONTROL_AF_REGIONS_SET: 65585,
  ANDROID_CONTROL_AE_REGIONS_SET: 65586,
  ANDROID_CONTROL_AWB_REGIONS_SET: 65587,
  ANDROID_CONTROL_END: 65588,
  ANDROID_DEMOSAIC_MODE: 131072,
  ANDROID_DEMOSAIC_END: 131073,
  ANDROID_EDGE_MODE: 196608,
  ANDROID_EDGE_STRENGTH: 196609,
  ANDROID_EDGE_AVAILABLE_EDGE_MODES: 196610,
  ANDROID_EDGE_END: 196611,
  ANDROID_FLASH_FIRING_POWER: 262144,
  ANDROID_FLASH_FIRING_TIME: 262145,
  ANDROID_FLASH_MODE: 262146,
  ANDROID_FLASH_COLOR_TEMPERATURE: 262147,
  ANDROID_FLASH_MAX_ENERGY: 262148,
  ANDROID_FLASH_STATE: 262149,
  ANDROID_FLASH_END: 262150,
  ANDROID_FLASH_INFO_AVAILABLE: 327680,
  ANDROID_FLASH_INFO_CHARGE_DURATION: 327681,
  ANDROID_FLASH_INFO_STRENGTH_MAXIMUM_LEVEL: 327682,
  ANDROID_FLASH_INFO_STRENGTH_DEFAULT_LEVEL: 327683,
  ANDROID_FLASH_INFO_END: 327684,
  ANDROID_HOT_PIXEL_MODE: 393216,
  ANDROID_HOT_PIXEL_AVAILABLE_HOT_PIXEL_MODES: 393217,
  ANDROID_HOT_PIXEL_END: 393218,
  ANDROID_JPEG_GPS_COORDINATES: 458752,
  ANDROID_JPEG_GPS_PROCESSING_METHOD: 458753,
  ANDROID_JPEG_GPS_TIMESTAMP: 458754,
  ANDROID_JPEG_ORIENTATION: 458755,
  ANDROID_JPEG_QUALITY: 458756,
  ANDROID_JPEG_THUMBNAIL_QUALITY: 458757,
  ANDROID_JPEG_THUMBNAIL_SIZE: 458758,
  ANDROID_JPEG_AVAILABLE_THUMBNAIL_SIZES: 458759,
  ANDROID_JPEG_MAX_SIZE: 458760,
  ANDROID_JPEG_SIZE: 458761,
  ANDROID_JPEG_END: 458762,
  ANDROID_LENS_APERTURE: 524288,
  ANDROID_LENS_FILTER_DENSITY: 524289,
  ANDROID_LENS_FOCAL_LENGTH: 524290,
  ANDROID_LENS_FOCUS_DISTANCE: 524291,
  ANDROID_LENS_OPTICAL_STABILIZATION_MODE: 524292,
  ANDROID_LENS_FACING: 524293,
  ANDROID_LENS_POSE_ROTATION: 524294,
  ANDROID_LENS_POSE_TRANSLATION: 524295,
  ANDROID_LENS_FOCUS_RANGE: 524296,
  ANDROID_LENS_STATE: 524297,
  ANDROID_LENS_INTRINSIC_CALIBRATION: 524298,
  ANDROID_LENS_RADIAL_DISTORTION: 524299,
  ANDROID_LENS_POSE_REFERENCE: 524300,
  ANDROID_LENS_DISTORTION: 524301,
  ANDROID_LENS_DISTORTION_MAXIMUM_RESOLUTION: 524302,
  ANDROID_LENS_INTRINSIC_CALIBRATION_MAXIMUM_RESOLUTION: 524303,
  ANDROID_LENS_END: 524304,
  ANDROID_LENS_INFO_AVAILABLE_APERTURES: 589824,
  ANDROID_LENS_INFO_AVAILABLE_FILTER_DENSITIES: 589825,
  ANDROID_LENS_INFO_AVAILABLE_FOCAL_LENGTHS: 589826,
  ANDROID_LENS_INFO_AVAILABLE_OPTICAL_STABILIZATION: 589827,
  ANDROID_LENS_INFO_HYPERFOCAL_DISTANCE: 589828,
  ANDROID_LENS_INFO_MINIMUM_FOCUS_DISTANCE: 589829,
  ANDROID_LENS_INFO_SHADING_MAP_SIZE: 589830,
  ANDROID_LENS_INFO_FOCUS_DISTANCE_CALIBRATION: 589831,
  ANDROID_LENS_INFO_END: 589832,
  ANDROID_NOISE_REDUCTION_MODE: 655360,
  ANDROID_NOISE_REDUCTION_STRENGTH: 655361,
  ANDROID_NOISE_REDUCTION_AVAILABLE_NOISE_REDUCTION_MODES: 655362,
  ANDROID_NOISE_REDUCTION_END: 655363,
  ANDROID_QUIRKS_METERING_CROP_REGION: 720896,
  ANDROID_QUIRKS_TRIGGER_AF_WITH_AUTO: 720897,
  ANDROID_QUIRKS_USE_ZSL_FORMAT: 720898,
  ANDROID_QUIRKS_USE_PARTIAL_RESULT: 720899,
  ANDROID_QUIRKS_PARTIAL_RESULT: 720900,
  ANDROID_QUIRKS_END: 720901,
  ANDROID_REQUEST_FRAME_COUNT: 786432,
  ANDROID_REQUEST_ID: 786433,
  ANDROID_REQUEST_INPUT_STREAMS: 786434,
  ANDROID_REQUEST_METADATA_MODE: 786435,
  ANDROID_REQUEST_OUTPUT_STREAMS: 786436,
  ANDROID_REQUEST_TYPE: 786437,
  ANDROID_REQUEST_MAX_NUM_OUTPUT_STREAMS: 786438,
  ANDROID_REQUEST_MAX_NUM_REPROCESS_STREAMS: 786439,
  ANDROID_REQUEST_MAX_NUM_INPUT_STREAMS: 786440,
  ANDROID_REQUEST_PIPELINE_DEPTH: 786441,
  ANDROID_REQUEST_PIPELINE_MAX_DEPTH: 786442,
  ANDROID_REQUEST_PARTIAL_RESULT_COUNT: 786443,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES: 786444,
  ANDROID_REQUEST_AVAILABLE_REQUEST_KEYS: 786445,
  ANDROID_REQUEST_AVAILABLE_RESULT_KEYS: 786446,
  ANDROID_REQUEST_AVAILABLE_CHARACTERISTICS_KEYS: 786447,
  ANDROID_REQUEST_AVAILABLE_SESSION_KEYS: 786448,
  ANDROID_REQUEST_AVAILABLE_PHYSICAL_CAMERA_REQUEST_KEYS: 786449,
  ANDROID_REQUEST_CHARACTERISTIC_KEYS_NEEDING_PERMISSION: 786450,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP: 786451,
  ANDROID_REQUEST_RECOMMENDED_TEN_BIT_DYNAMIC_RANGE_PROFILE: 786452,
  ANDROID_REQUEST_END: 786453,
  ANDROID_SCALER_CROP_REGION: 851968,
  ANDROID_SCALER_AVAILABLE_FORMATS: 851969,
  ANDROID_SCALER_AVAILABLE_JPEG_MIN_DURATIONS: 851970,
  ANDROID_SCALER_AVAILABLE_JPEG_SIZES: 851971,
  ANDROID_SCALER_AVAILABLE_MAX_DIGITAL_ZOOM: 851972,
  ANDROID_SCALER_AVAILABLE_PROCESSED_MIN_DURATIONS: 851973,
  ANDROID_SCALER_AVAILABLE_PROCESSED_SIZES: 851974,
  ANDROID_SCALER_AVAILABLE_RAW_MIN_DURATIONS: 851975,
  ANDROID_SCALER_AVAILABLE_RAW_SIZES: 851976,
  ANDROID_SCALER_AVAILABLE_INPUT_OUTPUT_FORMATS_MAP: 851977,
  ANDROID_SCALER_AVAILABLE_STREAM_CONFIGURATIONS: 851978,
  ANDROID_SCALER_AVAILABLE_MIN_FRAME_DURATIONS: 851979,
  ANDROID_SCALER_AVAILABLE_STALL_DURATIONS: 851980,
  ANDROID_SCALER_CROPPING_TYPE: 851981,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS: 851982,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_INPUT_OUTPUT_FORMATS_MAP: 851983,
  ANDROID_SCALER_AVAILABLE_ROTATE_AND_CROP_MODES: 851984,
  ANDROID_SCALER_ROTATE_AND_CROP: 851985,
  ANDROID_SCALER_DEFAULT_SECURE_IMAGE_SIZE: 851986,
  ANDROID_SCALER_PHYSICAL_CAMERA_MULTI_RESOLUTION_STREAM_CONFIGURATIONS: 851987,
  ANDROID_SCALER_AVAILABLE_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION: 851988,
  ANDROID_SCALER_AVAILABLE_MIN_FRAME_DURATIONS_MAXIMUM_RESOLUTION: 851989,
  ANDROID_SCALER_AVAILABLE_STALL_DURATIONS_MAXIMUM_RESOLUTION: 851990,
  ANDROID_SCALER_AVAILABLE_INPUT_OUTPUT_FORMATS_MAP_MAXIMUM_RESOLUTION: 851991,
  ANDROID_SCALER_MULTI_RESOLUTION_STREAM_SUPPORTED: 851992,
  ANDROID_SCALER_CROP_REGION_SET: 851993,
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES: 851994,
  ANDROID_SCALER_END: 851995,
  ANDROID_SENSOR_EXPOSURE_TIME: 917504,
  ANDROID_SENSOR_FRAME_DURATION: 917505,
  ANDROID_SENSOR_SENSITIVITY: 917506,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1: 917507,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT2: 917508,
  ANDROID_SENSOR_CALIBRATION_TRANSFORM1: 917509,
  ANDROID_SENSOR_CALIBRATION_TRANSFORM2: 917510,
  ANDROID_SENSOR_COLOR_TRANSFORM1: 917511,
  ANDROID_SENSOR_COLOR_TRANSFORM2: 917512,
  ANDROID_SENSOR_FORWARD_MATRIX1: 917513,
  ANDROID_SENSOR_FORWARD_MATRIX2: 917514,
  ANDROID_SENSOR_BASE_GAIN_FACTOR: 917515,
  ANDROID_SENSOR_BLACK_LEVEL_PATTERN: 917516,
  ANDROID_SENSOR_MAX_ANALOG_SENSITIVITY: 917517,
  ANDROID_SENSOR_ORIENTATION: 917518,
  ANDROID_SENSOR_PROFILE_HUE_SAT_MAP_DIMENSIONS: 917519,
  ANDROID_SENSOR_TIMESTAMP: 917520,
  ANDROID_SENSOR_TEMPERATURE: 917521,
  ANDROID_SENSOR_NEUTRAL_COLOR_POINT: 917522,
  ANDROID_SENSOR_NOISE_PROFILE: 917523,
  ANDROID_SENSOR_PROFILE_HUE_SAT_MAP: 917524,
  ANDROID_SENSOR_PROFILE_TONE_CURVE: 917525,
  ANDROID_SENSOR_GREEN_SPLIT: 917526,
  ANDROID_SENSOR_TEST_PATTERN_DATA: 917527,
  ANDROID_SENSOR_TEST_PATTERN_MODE: 917528,
  ANDROID_SENSOR_AVAILABLE_TEST_PATTERN_MODES: 917529,
  ANDROID_SENSOR_ROLLING_SHUTTER_SKEW: 917530,
  ANDROID_SENSOR_OPTICAL_BLACK_REGIONS: 917531,
  ANDROID_SENSOR_DYNAMIC_BLACK_LEVEL: 917532,
  ANDROID_SENSOR_DYNAMIC_WHITE_LEVEL: 917533,
  ANDROID_SENSOR_OPAQUE_RAW_SIZE: 917534,
  ANDROID_SENSOR_OPAQUE_RAW_SIZE_MAXIMUM_RESOLUTION: 917535,
  ANDROID_SENSOR_PIXEL_MODE: 917536,
  ANDROID_SENSOR_RAW_BINNING_FACTOR_USED: 917537,
  ANDROID_SENSOR_END: 917538,
  ANDROID_SENSOR_INFO_ACTIVE_ARRAY_SIZE: 983040,
  ANDROID_SENSOR_INFO_SENSITIVITY_RANGE: 983041,
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT: 983042,
  ANDROID_SENSOR_INFO_EXPOSURE_TIME_RANGE: 983043,
  ANDROID_SENSOR_INFO_MAX_FRAME_DURATION: 983044,
  ANDROID_SENSOR_INFO_PHYSICAL_SIZE: 983045,
  ANDROID_SENSOR_INFO_PIXEL_ARRAY_SIZE: 983046,
  ANDROID_SENSOR_INFO_WHITE_LEVEL: 983047,
  ANDROID_SENSOR_INFO_TIMESTAMP_SOURCE: 983048,
  ANDROID_SENSOR_INFO_LENS_SHADING_APPLIED: 983049,
  ANDROID_SENSOR_INFO_PRE_CORRECTION_ACTIVE_ARRAY_SIZE: 983050,
  ANDROID_SENSOR_INFO_ACTIVE_ARRAY_SIZE_MAXIMUM_RESOLUTION: 983051,
  ANDROID_SENSOR_INFO_PIXEL_ARRAY_SIZE_MAXIMUM_RESOLUTION: 983052,
  ANDROID_SENSOR_INFO_PRE_CORRECTION_ACTIVE_ARRAY_SIZE_MAXIMUM_RESOLUTION: 983053,
  ANDROID_SENSOR_INFO_BINNING_FACTOR: 983054,
  ANDROID_SENSOR_INFO_END: 983055,
  ANDROID_SHADING_MODE: 1048576,
  ANDROID_SHADING_STRENGTH: 1048577,
  ANDROID_SHADING_AVAILABLE_MODES: 1048578,
  ANDROID_SHADING_END: 1048579,
  ANDROID_STATISTICS_FACE_DETECT_MODE: 1114112,
  ANDROID_STATISTICS_HISTOGRAM_MODE: 1114113,
  ANDROID_STATISTICS_SHARPNESS_MAP_MODE: 1114114,
  ANDROID_STATISTICS_HOT_PIXEL_MAP_MODE: 1114115,
  ANDROID_STATISTICS_FACE_IDS: 1114116,
  ANDROID_STATISTICS_FACE_LANDMARKS: 1114117,
  ANDROID_STATISTICS_FACE_RECTANGLES: 1114118,
  ANDROID_STATISTICS_FACE_SCORES: 1114119,
  ANDROID_STATISTICS_HISTOGRAM: 1114120,
  ANDROID_STATISTICS_SHARPNESS_MAP: 1114121,
  ANDROID_STATISTICS_LENS_SHADING_CORRECTION_MAP: 1114122,
  ANDROID_STATISTICS_LENS_SHADING_MAP: 1114123,
  ANDROID_STATISTICS_PREDICTED_COLOR_GAINS: 1114124,
  ANDROID_STATISTICS_PREDICTED_COLOR_TRANSFORM: 1114125,
  ANDROID_STATISTICS_SCENE_FLICKER: 1114126,
  ANDROID_STATISTICS_HOT_PIXEL_MAP: 1114127,
  ANDROID_STATISTICS_LENS_SHADING_MAP_MODE: 1114128,
  ANDROID_STATISTICS_OIS_DATA_MODE: 1114129,
  ANDROID_STATISTICS_OIS_TIMESTAMPS: 1114130,
  ANDROID_STATISTICS_OIS_X_SHIFTS: 1114131,
  ANDROID_STATISTICS_OIS_Y_SHIFTS: 1114132,
  ANDROID_STATISTICS_END: 1114133,
  ANDROID_STATISTICS_INFO_AVAILABLE_FACE_DETECT_MODES: 1179648,
  ANDROID_STATISTICS_INFO_HISTOGRAM_BUCKET_COUNT: 1179649,
  ANDROID_STATISTICS_INFO_MAX_FACE_COUNT: 1179650,
  ANDROID_STATISTICS_INFO_MAX_HISTOGRAM_COUNT: 1179651,
  ANDROID_STATISTICS_INFO_MAX_SHARPNESS_MAP_VALUE: 1179652,
  ANDROID_STATISTICS_INFO_SHARPNESS_MAP_SIZE: 1179653,
  ANDROID_STATISTICS_INFO_AVAILABLE_HOT_PIXEL_MAP_MODES: 1179654,
  ANDROID_STATISTICS_INFO_AVAILABLE_LENS_SHADING_MAP_MODES: 1179655,
  ANDROID_STATISTICS_INFO_AVAILABLE_OIS_DATA_MODES: 1179656,
  ANDROID_STATISTICS_INFO_END: 1179657,
  ANDROID_TONEMAP_CURVE_BLUE: 1245184,
  ANDROID_TONEMAP_CURVE_GREEN: 1245185,
  ANDROID_TONEMAP_CURVE_RED: 1245186,
  ANDROID_TONEMAP_MODE: 1245187,
  ANDROID_TONEMAP_MAX_CURVE_POINTS: 1245188,
  ANDROID_TONEMAP_AVAILABLE_TONE_MAP_MODES: 1245189,
  ANDROID_TONEMAP_GAMMA: 1245190,
  ANDROID_TONEMAP_PRESET_CURVE: 1245191,
  ANDROID_TONEMAP_END: 1245192,
  ANDROID_LED_TRANSMIT: 1310720,
  ANDROID_LED_AVAILABLE_LEDS: 1310721,
  ANDROID_LED_END: 1310722,
  ANDROID_INFO_SUPPORTED_HARDWARE_LEVEL: 1376256,
  ANDROID_INFO_VERSION: 1376257,
  ANDROID_INFO_SUPPORTED_BUFFER_MANAGEMENT_VERSION: 1376258,
  ANDROID_INFO_DEVICE_STATE_ORIENTATIONS: 1376259,
  ANDROID_INFO_END: 1376260,
  ANDROID_BLACK_LEVEL_LOCK: 1441792,
  ANDROID_BLACK_LEVEL_END: 1441793,
  ANDROID_SYNC_FRAME_NUMBER: 1507328,
  ANDROID_SYNC_MAX_LATENCY: 1507329,
  ANDROID_SYNC_END: 1507330,
  ANDROID_REPROCESS_EFFECTIVE_EXPOSURE_FACTOR: 1572864,
  ANDROID_REPROCESS_MAX_CAPTURE_STALL: 1572865,
  ANDROID_REPROCESS_END: 1572866,
  ANDROID_DEPTH_MAX_DEPTH_SAMPLES: 1638400,
  ANDROID_DEPTH_AVAILABLE_DEPTH_STREAM_CONFIGURATIONS: 1638401,
  ANDROID_DEPTH_AVAILABLE_DEPTH_MIN_FRAME_DURATIONS: 1638402,
  ANDROID_DEPTH_AVAILABLE_DEPTH_STALL_DURATIONS: 1638403,
  ANDROID_DEPTH_DEPTH_IS_EXCLUSIVE: 1638404,
  ANDROID_DEPTH_AVAILABLE_RECOMMENDED_DEPTH_STREAM_CONFIGURATIONS: 1638405,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STREAM_CONFIGURATIONS: 1638406,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_MIN_FRAME_DURATIONS: 1638407,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STALL_DURATIONS: 1638408,
  ANDROID_DEPTH_AVAILABLE_DEPTH_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION: 1638409,
  ANDROID_DEPTH_AVAILABLE_DEPTH_MIN_FRAME_DURATIONS_MAXIMUM_RESOLUTION: 1638410,
  ANDROID_DEPTH_AVAILABLE_DEPTH_STALL_DURATIONS_MAXIMUM_RESOLUTION: 1638411,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION: 1638412,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_MIN_FRAME_DURATIONS_MAXIMUM_RESOLUTION: 1638413,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STALL_DURATIONS_MAXIMUM_RESOLUTION: 1638414,
  ANDROID_DEPTH_END: 1638415,
  ANDROID_LOGICAL_MULTI_CAMERA_PHYSICAL_IDS: 1703936,
  ANDROID_LOGICAL_MULTI_CAMERA_SENSOR_SYNC_TYPE: 1703937,
  ANDROID_LOGICAL_MULTI_CAMERA_ACTIVE_PHYSICAL_ID: 1703938,
  ANDROID_LOGICAL_MULTI_CAMERA_END: 1703939,
  ANDROID_DISTORTION_CORRECTION_MODE: 1769472,
  ANDROID_DISTORTION_CORRECTION_AVAILABLE_MODES: 1769473,
  ANDROID_DISTORTION_CORRECTION_END: 1769474,
  ANDROID_HEIC_AVAILABLE_HEIC_STREAM_CONFIGURATIONS: 1835008,
  ANDROID_HEIC_AVAILABLE_HEIC_MIN_FRAME_DURATIONS: 1835009,
  ANDROID_HEIC_AVAILABLE_HEIC_STALL_DURATIONS: 1835010,
  ANDROID_HEIC_AVAILABLE_HEIC_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION: 1835011,
  ANDROID_HEIC_AVAILABLE_HEIC_MIN_FRAME_DURATIONS_MAXIMUM_RESOLUTION: 1835012,
  ANDROID_HEIC_AVAILABLE_HEIC_STALL_DURATIONS_MAXIMUM_RESOLUTION: 1835013,
  ANDROID_HEIC_END: 1835014,
  ANDROID_HEIC_INFO_SUPPORTED: 1900544,
  ANDROID_HEIC_INFO_MAX_JPEG_APP_SEGMENTS_COUNT: 1900545,
  ANDROID_HEIC_INFO_END: 1900546,
  ANDROID_AUTOMOTIVE_LOCATION: 1966080,
  ANDROID_AUTOMOTIVE_END: 1966081,
  ANDROID_AUTOMOTIVE_LENS_FACING: 2031616,
  ANDROID_AUTOMOTIVE_LENS_END: 2031617,
};

// Enum: AndroidColorCorrectionMode
mojo.internal.bindings.cros.mojom.AndroidColorCorrectionMode = {
  ANDROID_COLOR_CORRECTION_MODE_TRANSFORM_MATRIX: 0,
  ANDROID_COLOR_CORRECTION_MODE_FAST: 1,
  ANDROID_COLOR_CORRECTION_MODE_HIGH_QUALITY: 2,
};

// Enum: AndroidColorCorrectionAberrationMode
mojo.internal.bindings.cros.mojom.AndroidColorCorrectionAberrationMode = {
  ANDROID_COLOR_CORRECTION_ABERRATION_MODE_OFF: 0,
  ANDROID_COLOR_CORRECTION_ABERRATION_MODE_FAST: 1,
  ANDROID_COLOR_CORRECTION_ABERRATION_MODE_HIGH_QUALITY: 2,
};

// Enum: AndroidControlAeAntibandingMode
mojo.internal.bindings.cros.mojom.AndroidControlAeAntibandingMode = {
  ANDROID_CONTROL_AE_ANTIBANDING_MODE_OFF: 0,
  ANDROID_CONTROL_AE_ANTIBANDING_MODE_50HZ: 1,
  ANDROID_CONTROL_AE_ANTIBANDING_MODE_60HZ: 2,
  ANDROID_CONTROL_AE_ANTIBANDING_MODE_AUTO: 3,
};

// Enum: AndroidControlAeLock
mojo.internal.bindings.cros.mojom.AndroidControlAeLock = {
  ANDROID_CONTROL_AE_LOCK_OFF: 0,
  ANDROID_CONTROL_AE_LOCK_ON: 1,
};

// Enum: AndroidControlAeMode
mojo.internal.bindings.cros.mojom.AndroidControlAeMode = {
  ANDROID_CONTROL_AE_MODE_OFF: 0,
  ANDROID_CONTROL_AE_MODE_ON: 1,
  ANDROID_CONTROL_AE_MODE_ON_AUTO_FLASH: 2,
  ANDROID_CONTROL_AE_MODE_ON_ALWAYS_FLASH: 3,
  ANDROID_CONTROL_AE_MODE_ON_AUTO_FLASH_REDEYE: 4,
  ANDROID_CONTROL_AE_MODE_ON_EXTERNAL_FLASH: 5,
};

// Enum: AndroidControlAePrecaptureTrigger
mojo.internal.bindings.cros.mojom.AndroidControlAePrecaptureTrigger = {
  ANDROID_CONTROL_AE_PRECAPTURE_TRIGGER_IDLE: 0,
  ANDROID_CONTROL_AE_PRECAPTURE_TRIGGER_START: 1,
  ANDROID_CONTROL_AE_PRECAPTURE_TRIGGER_CANCEL: 2,
};

// Enum: AndroidControlAfMode
mojo.internal.bindings.cros.mojom.AndroidControlAfMode = {
  ANDROID_CONTROL_AF_MODE_OFF: 0,
  ANDROID_CONTROL_AF_MODE_AUTO: 1,
  ANDROID_CONTROL_AF_MODE_MACRO: 2,
  ANDROID_CONTROL_AF_MODE_CONTINUOUS_VIDEO: 3,
  ANDROID_CONTROL_AF_MODE_CONTINUOUS_PICTURE: 4,
  ANDROID_CONTROL_AF_MODE_EDOF: 5,
};

// Enum: AndroidControlAfTrigger
mojo.internal.bindings.cros.mojom.AndroidControlAfTrigger = {
  ANDROID_CONTROL_AF_TRIGGER_IDLE: 0,
  ANDROID_CONTROL_AF_TRIGGER_START: 1,
  ANDROID_CONTROL_AF_TRIGGER_CANCEL: 2,
};

// Enum: AndroidControlAwbLock
mojo.internal.bindings.cros.mojom.AndroidControlAwbLock = {
  ANDROID_CONTROL_AWB_LOCK_OFF: 0,
  ANDROID_CONTROL_AWB_LOCK_ON: 1,
};

// Enum: AndroidControlAwbMode
mojo.internal.bindings.cros.mojom.AndroidControlAwbMode = {
  ANDROID_CONTROL_AWB_MODE_OFF: 0,
  ANDROID_CONTROL_AWB_MODE_AUTO: 1,
  ANDROID_CONTROL_AWB_MODE_INCANDESCENT: 2,
  ANDROID_CONTROL_AWB_MODE_FLUORESCENT: 3,
  ANDROID_CONTROL_AWB_MODE_WARM_FLUORESCENT: 4,
  ANDROID_CONTROL_AWB_MODE_DAYLIGHT: 5,
  ANDROID_CONTROL_AWB_MODE_CLOUDY_DAYLIGHT: 6,
  ANDROID_CONTROL_AWB_MODE_TWILIGHT: 7,
  ANDROID_CONTROL_AWB_MODE_SHADE: 8,
};

// Enum: AndroidControlCaptureIntent
mojo.internal.bindings.cros.mojom.AndroidControlCaptureIntent = {
  ANDROID_CONTROL_CAPTURE_INTENT_CUSTOM: 0,
  ANDROID_CONTROL_CAPTURE_INTENT_PREVIEW: 1,
  ANDROID_CONTROL_CAPTURE_INTENT_STILL_CAPTURE: 2,
  ANDROID_CONTROL_CAPTURE_INTENT_VIDEO_RECORD: 3,
  ANDROID_CONTROL_CAPTURE_INTENT_VIDEO_SNAPSHOT: 4,
  ANDROID_CONTROL_CAPTURE_INTENT_ZERO_SHUTTER_LAG: 5,
  ANDROID_CONTROL_CAPTURE_INTENT_MANUAL: 6,
  ANDROID_CONTROL_CAPTURE_INTENT_MOTION_TRACKING: 7,
};

// Enum: AndroidControlEffectMode
mojo.internal.bindings.cros.mojom.AndroidControlEffectMode = {
  ANDROID_CONTROL_EFFECT_MODE_OFF: 0,
  ANDROID_CONTROL_EFFECT_MODE_MONO: 1,
  ANDROID_CONTROL_EFFECT_MODE_NEGATIVE: 2,
  ANDROID_CONTROL_EFFECT_MODE_SOLARIZE: 3,
  ANDROID_CONTROL_EFFECT_MODE_SEPIA: 4,
  ANDROID_CONTROL_EFFECT_MODE_POSTERIZE: 5,
  ANDROID_CONTROL_EFFECT_MODE_WHITEBOARD: 6,
  ANDROID_CONTROL_EFFECT_MODE_BLACKBOARD: 7,
  ANDROID_CONTROL_EFFECT_MODE_AQUA: 8,
};

// Enum: AndroidControlMode
mojo.internal.bindings.cros.mojom.AndroidControlMode = {
  ANDROID_CONTROL_MODE_OFF: 0,
  ANDROID_CONTROL_MODE_AUTO: 1,
  ANDROID_CONTROL_MODE_USE_SCENE_MODE: 2,
  ANDROID_CONTROL_MODE_OFF_KEEP_STATE: 3,
  ANDROID_CONTROL_MODE_USE_EXTENDED_SCENE_MODE: 4,
};

// Enum: AndroidControlSceneMode
mojo.internal.bindings.cros.mojom.AndroidControlSceneMode = {
  ANDROID_CONTROL_SCENE_MODE_DISABLED: 0,
  ANDROID_CONTROL_SCENE_MODE_FACE_PRIORITY: 1,
  ANDROID_CONTROL_SCENE_MODE_ACTION: 2,
  ANDROID_CONTROL_SCENE_MODE_PORTRAIT: 3,
  ANDROID_CONTROL_SCENE_MODE_LANDSCAPE: 4,
  ANDROID_CONTROL_SCENE_MODE_NIGHT: 5,
  ANDROID_CONTROL_SCENE_MODE_NIGHT_PORTRAIT: 6,
  ANDROID_CONTROL_SCENE_MODE_THEATRE: 7,
  ANDROID_CONTROL_SCENE_MODE_BEACH: 8,
  ANDROID_CONTROL_SCENE_MODE_SNOW: 9,
  ANDROID_CONTROL_SCENE_MODE_SUNSET: 10,
  ANDROID_CONTROL_SCENE_MODE_STEADYPHOTO: 11,
  ANDROID_CONTROL_SCENE_MODE_FIREWORKS: 12,
  ANDROID_CONTROL_SCENE_MODE_SPORTS: 13,
  ANDROID_CONTROL_SCENE_MODE_PARTY: 14,
  ANDROID_CONTROL_SCENE_MODE_CANDLELIGHT: 15,
  ANDROID_CONTROL_SCENE_MODE_BARCODE: 16,
  ANDROID_CONTROL_SCENE_MODE_HIGH_SPEED_VIDEO: 17,
  ANDROID_CONTROL_SCENE_MODE_HDR: 18,
  ANDROID_CONTROL_SCENE_MODE_FACE_PRIORITY_LOW_LIGHT: 19,
  ANDROID_CONTROL_SCENE_MODE_DEVICE_CUSTOM_START: 100,
  ANDROID_CONTROL_SCENE_MODE_DEVICE_CUSTOM_END: 127,
};

// Enum: AndroidControlVideoStabilizationMode
mojo.internal.bindings.cros.mojom.AndroidControlVideoStabilizationMode = {
  ANDROID_CONTROL_VIDEO_STABILIZATION_MODE_OFF: 0,
  ANDROID_CONTROL_VIDEO_STABILIZATION_MODE_ON: 1,
  ANDROID_CONTROL_VIDEO_STABILIZATION_MODE_PREVIEW_STABILIZATION: 2,
};

// Enum: AndroidControlAeState
mojo.internal.bindings.cros.mojom.AndroidControlAeState = {
  ANDROID_CONTROL_AE_STATE_INACTIVE: 0,
  ANDROID_CONTROL_AE_STATE_SEARCHING: 1,
  ANDROID_CONTROL_AE_STATE_CONVERGED: 2,
  ANDROID_CONTROL_AE_STATE_LOCKED: 3,
  ANDROID_CONTROL_AE_STATE_FLASH_REQUIRED: 4,
  ANDROID_CONTROL_AE_STATE_PRECAPTURE: 5,
};

// Enum: AndroidControlAfState
mojo.internal.bindings.cros.mojom.AndroidControlAfState = {
  ANDROID_CONTROL_AF_STATE_INACTIVE: 0,
  ANDROID_CONTROL_AF_STATE_PASSIVE_SCAN: 1,
  ANDROID_CONTROL_AF_STATE_PASSIVE_FOCUSED: 2,
  ANDROID_CONTROL_AF_STATE_ACTIVE_SCAN: 3,
  ANDROID_CONTROL_AF_STATE_FOCUSED_LOCKED: 4,
  ANDROID_CONTROL_AF_STATE_NOT_FOCUSED_LOCKED: 5,
  ANDROID_CONTROL_AF_STATE_PASSIVE_UNFOCUSED: 6,
};

// Enum: AndroidControlAwbState
mojo.internal.bindings.cros.mojom.AndroidControlAwbState = {
  ANDROID_CONTROL_AWB_STATE_INACTIVE: 0,
  ANDROID_CONTROL_AWB_STATE_SEARCHING: 1,
  ANDROID_CONTROL_AWB_STATE_CONVERGED: 2,
  ANDROID_CONTROL_AWB_STATE_LOCKED: 3,
};

// Enum: AndroidControlAeLockAvailable
mojo.internal.bindings.cros.mojom.AndroidControlAeLockAvailable = {
  ANDROID_CONTROL_AE_LOCK_AVAILABLE_FALSE: 0,
  ANDROID_CONTROL_AE_LOCK_AVAILABLE_TRUE: 1,
};

// Enum: AndroidControlAwbLockAvailable
mojo.internal.bindings.cros.mojom.AndroidControlAwbLockAvailable = {
  ANDROID_CONTROL_AWB_LOCK_AVAILABLE_FALSE: 0,
  ANDROID_CONTROL_AWB_LOCK_AVAILABLE_TRUE: 1,
};

// Enum: AndroidControlEnableZsl
mojo.internal.bindings.cros.mojom.AndroidControlEnableZsl = {
  ANDROID_CONTROL_ENABLE_ZSL_FALSE: 0,
  ANDROID_CONTROL_ENABLE_ZSL_TRUE: 1,
};

// Enum: AndroidControlAfSceneChange
mojo.internal.bindings.cros.mojom.AndroidControlAfSceneChange = {
  ANDROID_CONTROL_AF_SCENE_CHANGE_NOT_DETECTED: 0,
  ANDROID_CONTROL_AF_SCENE_CHANGE_DETECTED: 1,
};

// Enum: AndroidControlExtendedSceneMode
mojo.internal.bindings.cros.mojom.AndroidControlExtendedSceneMode = {
  ANDROID_CONTROL_EXTENDED_SCENE_MODE_DISABLED: 0,
  ANDROID_CONTROL_EXTENDED_SCENE_MODE_BOKEH_STILL_CAPTURE: 1,
  ANDROID_CONTROL_EXTENDED_SCENE_MODE_BOKEH_CONTINUOUS: 2,
  ANDROID_CONTROL_EXTENDED_SCENE_MODE_VENDOR_START: 64,
};

// Enum: AndroidControlAfRegionsSet
mojo.internal.bindings.cros.mojom.AndroidControlAfRegionsSet = {
  ANDROID_CONTROL_AF_REGIONS_SET_FALSE: 0,
  ANDROID_CONTROL_AF_REGIONS_SET_TRUE: 1,
};

// Enum: AndroidControlAeRegionsSet
mojo.internal.bindings.cros.mojom.AndroidControlAeRegionsSet = {
  ANDROID_CONTROL_AE_REGIONS_SET_FALSE: 0,
  ANDROID_CONTROL_AE_REGIONS_SET_TRUE: 1,
};

// Enum: AndroidControlAwbRegionsSet
mojo.internal.bindings.cros.mojom.AndroidControlAwbRegionsSet = {
  ANDROID_CONTROL_AWB_REGIONS_SET_FALSE: 0,
  ANDROID_CONTROL_AWB_REGIONS_SET_TRUE: 1,
};

// Enum: AndroidDemosaicMode
mojo.internal.bindings.cros.mojom.AndroidDemosaicMode = {
  ANDROID_DEMOSAIC_MODE_FAST: 0,
  ANDROID_DEMOSAIC_MODE_HIGH_QUALITY: 1,
};

// Enum: AndroidEdgeMode
mojo.internal.bindings.cros.mojom.AndroidEdgeMode = {
  ANDROID_EDGE_MODE_OFF: 0,
  ANDROID_EDGE_MODE_FAST: 1,
  ANDROID_EDGE_MODE_HIGH_QUALITY: 2,
  ANDROID_EDGE_MODE_ZERO_SHUTTER_LAG: 3,
};

// Enum: AndroidFlashMode
mojo.internal.bindings.cros.mojom.AndroidFlashMode = {
  ANDROID_FLASH_MODE_OFF: 0,
  ANDROID_FLASH_MODE_SINGLE: 1,
  ANDROID_FLASH_MODE_TORCH: 2,
};

// Enum: AndroidFlashState
mojo.internal.bindings.cros.mojom.AndroidFlashState = {
  ANDROID_FLASH_STATE_UNAVAILABLE: 0,
  ANDROID_FLASH_STATE_CHARGING: 1,
  ANDROID_FLASH_STATE_READY: 2,
  ANDROID_FLASH_STATE_FIRED: 3,
  ANDROID_FLASH_STATE_PARTIAL: 4,
};

// Enum: AndroidFlashInfoAvailable
mojo.internal.bindings.cros.mojom.AndroidFlashInfoAvailable = {
  ANDROID_FLASH_INFO_AVAILABLE_FALSE: 0,
  ANDROID_FLASH_INFO_AVAILABLE_TRUE: 1,
};

// Enum: AndroidHotPixelMode
mojo.internal.bindings.cros.mojom.AndroidHotPixelMode = {
  ANDROID_HOT_PIXEL_MODE_OFF: 0,
  ANDROID_HOT_PIXEL_MODE_FAST: 1,
  ANDROID_HOT_PIXEL_MODE_HIGH_QUALITY: 2,
};

// Enum: AndroidLensOpticalStabilizationMode
mojo.internal.bindings.cros.mojom.AndroidLensOpticalStabilizationMode = {
  ANDROID_LENS_OPTICAL_STABILIZATION_MODE_OFF: 0,
  ANDROID_LENS_OPTICAL_STABILIZATION_MODE_ON: 1,
};

// Enum: AndroidLensFacing
mojo.internal.bindings.cros.mojom.AndroidLensFacing = {
  ANDROID_LENS_FACING_FRONT: 0,
  ANDROID_LENS_FACING_BACK: 1,
  ANDROID_LENS_FACING_EXTERNAL: 2,
};

// Enum: AndroidLensState
mojo.internal.bindings.cros.mojom.AndroidLensState = {
  ANDROID_LENS_STATE_STATIONARY: 0,
  ANDROID_LENS_STATE_MOVING: 1,
};

// Enum: AndroidLensPoseReference
mojo.internal.bindings.cros.mojom.AndroidLensPoseReference = {
  ANDROID_LENS_POSE_REFERENCE_PRIMARY_CAMERA: 0,
  ANDROID_LENS_POSE_REFERENCE_GYROSCOPE: 1,
  ANDROID_LENS_POSE_REFERENCE_UNDEFINED: 2,
  ANDROID_LENS_POSE_REFERENCE_AUTOMOTIVE: 3,
};

// Enum: AndroidLensInfoFocusDistanceCalibration
mojo.internal.bindings.cros.mojom.AndroidLensInfoFocusDistanceCalibration = {
  ANDROID_LENS_INFO_FOCUS_DISTANCE_CALIBRATION_UNCALIBRATED: 0,
  ANDROID_LENS_INFO_FOCUS_DISTANCE_CALIBRATION_APPROXIMATE: 1,
  ANDROID_LENS_INFO_FOCUS_DISTANCE_CALIBRATION_CALIBRATED: 2,
};

// Enum: AndroidNoiseReductionMode
mojo.internal.bindings.cros.mojom.AndroidNoiseReductionMode = {
  ANDROID_NOISE_REDUCTION_MODE_OFF: 0,
  ANDROID_NOISE_REDUCTION_MODE_FAST: 1,
  ANDROID_NOISE_REDUCTION_MODE_HIGH_QUALITY: 2,
  ANDROID_NOISE_REDUCTION_MODE_MINIMAL: 3,
  ANDROID_NOISE_REDUCTION_MODE_ZERO_SHUTTER_LAG: 4,
};

// Enum: AndroidQuirksPartialResult
mojo.internal.bindings.cros.mojom.AndroidQuirksPartialResult = {
  ANDROID_QUIRKS_PARTIAL_RESULT_FINAL: 0,
  ANDROID_QUIRKS_PARTIAL_RESULT_PARTIAL: 1,
};

// Enum: AndroidRequestMetadataMode
mojo.internal.bindings.cros.mojom.AndroidRequestMetadataMode = {
  ANDROID_REQUEST_METADATA_MODE_NONE: 0,
  ANDROID_REQUEST_METADATA_MODE_FULL: 1,
};

// Enum: AndroidRequestType
mojo.internal.bindings.cros.mojom.AndroidRequestType = {
  ANDROID_REQUEST_TYPE_CAPTURE: 0,
  ANDROID_REQUEST_TYPE_REPROCESS: 1,
};

// Enum: AndroidRequestAvailableCapabilities
mojo.internal.bindings.cros.mojom.AndroidRequestAvailableCapabilities = {
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_BACKWARD_COMPATIBLE: 0,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_MANUAL_SENSOR: 1,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_MANUAL_POST_PROCESSING: 2,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_RAW: 3,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_PRIVATE_REPROCESSING: 4,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_READ_SENSOR_SETTINGS: 5,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_BURST_CAPTURE: 6,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_YUV_REPROCESSING: 7,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_DEPTH_OUTPUT: 8,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_CONSTRAINED_HIGH_SPEED_VIDEO: 9,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_MOTION_TRACKING: 10,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_LOGICAL_MULTI_CAMERA: 11,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_MONOCHROME: 12,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_SECURE_IMAGE_DATA: 13,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_SYSTEM_CAMERA: 14,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_OFFLINE_PROCESSING: 15,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_ULTRA_HIGH_RESOLUTION_SENSOR: 16,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_REMOSAIC_REPROCESSING: 17,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_DYNAMIC_RANGE_TEN_BIT: 18,
  ANDROID_REQUEST_AVAILABLE_CAPABILITIES_STREAM_USE_CASE: 19,
};

// Enum: AndroidRequestAvailableDynamicRangeProfilesMap
mojo.internal.bindings.cros.mojom.AndroidRequestAvailableDynamicRangeProfilesMap = {
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_STANDARD: 1,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_HLG10: 2,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_HDR10: 4,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_HDR10_PLUS: 8,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_10B_HDR_REF: 16,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_10B_HDR_REF_PO: 32,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_10B_HDR_OEM: 64,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_10B_HDR_OEM_PO: 128,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_8B_HDR_REF: 256,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_8B_HDR_REF_PO: 512,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_8B_HDR_OEM: 1024,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_DOLBY_VISION_8B_HDR_OEM_PO: 2048,
  ANDROID_REQUEST_AVAILABLE_DYNAMIC_RANGE_PROFILES_MAP_MAX: 4096,
};

// Enum: AndroidScalerAvailableFormats
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableFormats = {
  ANDROID_SCALER_AVAILABLE_FORMATS_RAW16: 32,
  ANDROID_SCALER_AVAILABLE_FORMATS_RAW_OPAQUE: 36,
  ANDROID_SCALER_AVAILABLE_FORMATS_YV12: 842094169,
  ANDROID_SCALER_AVAILABLE_FORMATS_YCrCb_420_SP: 17,
  ANDROID_SCALER_AVAILABLE_FORMATS_IMPLEMENTATION_DEFINED: 34,
  ANDROID_SCALER_AVAILABLE_FORMATS_YCbCr_420_888: 35,
  ANDROID_SCALER_AVAILABLE_FORMATS_BLOB: 33,
  ANDROID_SCALER_AVAILABLE_FORMATS_RAW10: 37,
  ANDROID_SCALER_AVAILABLE_FORMATS_RAW12: 38,
  ANDROID_SCALER_AVAILABLE_FORMATS_Y8: 538982489,
};

// Enum: AndroidScalerAvailableStreamConfigurations
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamConfigurations = {
  ANDROID_SCALER_AVAILABLE_STREAM_CONFIGURATIONS_OUTPUT: 0,
  ANDROID_SCALER_AVAILABLE_STREAM_CONFIGURATIONS_INPUT: 1,
};

// Enum: AndroidScalerCroppingType
mojo.internal.bindings.cros.mojom.AndroidScalerCroppingType = {
  ANDROID_SCALER_CROPPING_TYPE_CENTER_ONLY: 0,
  ANDROID_SCALER_CROPPING_TYPE_FREEFORM: 1,
};

// Enum: AndroidScalerAvailableRecommendedStreamConfigurations
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableRecommendedStreamConfigurations = {
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_PREVIEW: 0,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_RECORD: 1,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_VIDEO_SNAPSHOT: 2,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_SNAPSHOT: 3,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_ZSL: 4,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_RAW: 5,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_LOW_LATENCY_SNAPSHOT: 6,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_PUBLIC_END: 7,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_10BIT_OUTPUT: 8,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_PUBLIC_END_3_8: 9,
  ANDROID_SCALER_AVAILABLE_RECOMMENDED_STREAM_CONFIGURATIONS_VENDOR_START: 24,
};

// Enum: AndroidScalerRotateAndCrop
mojo.internal.bindings.cros.mojom.AndroidScalerRotateAndCrop = {
  ANDROID_SCALER_ROTATE_AND_CROP_NONE: 0,
  ANDROID_SCALER_ROTATE_AND_CROP_90: 1,
  ANDROID_SCALER_ROTATE_AND_CROP_180: 2,
  ANDROID_SCALER_ROTATE_AND_CROP_270: 3,
  ANDROID_SCALER_ROTATE_AND_CROP_AUTO: 4,
};

// Enum: AndroidScalerPhysicalCameraMultiResolutionStreamConfigurations
mojo.internal.bindings.cros.mojom.AndroidScalerPhysicalCameraMultiResolutionStreamConfigurations = {
  ANDROID_SCALER_PHYSICAL_CAMERA_MULTI_RESOLUTION_STREAM_CONFIGURATIONS_OUTPUT: 0,
  ANDROID_SCALER_PHYSICAL_CAMERA_MULTI_RESOLUTION_STREAM_CONFIGURATIONS_INPUT: 1,
};

// Enum: AndroidScalerAvailableStreamConfigurationsMaximumResolution
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamConfigurationsMaximumResolution = {
  ANDROID_SCALER_AVAILABLE_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_OUTPUT: 0,
  ANDROID_SCALER_AVAILABLE_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_INPUT: 1,
};

// Enum: AndroidScalerMultiResolutionStreamSupported
mojo.internal.bindings.cros.mojom.AndroidScalerMultiResolutionStreamSupported = {
  ANDROID_SCALER_MULTI_RESOLUTION_STREAM_SUPPORTED_FALSE: 0,
  ANDROID_SCALER_MULTI_RESOLUTION_STREAM_SUPPORTED_TRUE: 1,
};

// Enum: AndroidScalerCropRegionSet
mojo.internal.bindings.cros.mojom.AndroidScalerCropRegionSet = {
  ANDROID_SCALER_CROP_REGION_SET_FALSE: 0,
  ANDROID_SCALER_CROP_REGION_SET_TRUE: 1,
};

// Enum: AndroidScalerAvailableStreamUseCases
mojo.internal.bindings.cros.mojom.AndroidScalerAvailableStreamUseCases = {
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES_DEFAULT: 0,
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES_PREVIEW: 1,
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES_STILL_CAPTURE: 2,
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES_VIDEO_RECORD: 3,
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES_PREVIEW_VIDEO_STILL: 4,
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES_VIDEO_CALL: 5,
  ANDROID_SCALER_AVAILABLE_STREAM_USE_CASES_VENDOR_START: 65536,
};

// Enum: AndroidSensorReferenceIlluminant1
mojo.internal.bindings.cros.mojom.AndroidSensorReferenceIlluminant1 = {
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_DAYLIGHT: 1,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_FLUORESCENT: 2,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_TUNGSTEN: 3,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_FLASH: 4,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_FINE_WEATHER: 9,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_CLOUDY_WEATHER: 10,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_SHADE: 11,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_DAYLIGHT_FLUORESCENT: 12,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_DAY_WHITE_FLUORESCENT: 13,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_COOL_WHITE_FLUORESCENT: 14,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_WHITE_FLUORESCENT: 15,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_STANDARD_A: 17,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_STANDARD_B: 18,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_STANDARD_C: 19,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_D55: 20,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_D65: 21,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_D75: 22,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_D50: 23,
  ANDROID_SENSOR_REFERENCE_ILLUMINANT1_ISO_STUDIO_TUNGSTEN: 24,
};

// Enum: AndroidSensorTestPatternMode
mojo.internal.bindings.cros.mojom.AndroidSensorTestPatternMode = {
  ANDROID_SENSOR_TEST_PATTERN_MODE_OFF: 0,
  ANDROID_SENSOR_TEST_PATTERN_MODE_SOLID_COLOR: 1,
  ANDROID_SENSOR_TEST_PATTERN_MODE_COLOR_BARS: 2,
  ANDROID_SENSOR_TEST_PATTERN_MODE_COLOR_BARS_FADE_TO_GRAY: 3,
  ANDROID_SENSOR_TEST_PATTERN_MODE_PN9: 4,
  ANDROID_SENSOR_TEST_PATTERN_MODE_BLACK: 5,
  ANDROID_SENSOR_TEST_PATTERN_MODE_CUSTOM1: 256,
};

// Enum: AndroidSensorPixelMode
mojo.internal.bindings.cros.mojom.AndroidSensorPixelMode = {
  ANDROID_SENSOR_PIXEL_MODE_DEFAULT: 0,
  ANDROID_SENSOR_PIXEL_MODE_MAXIMUM_RESOLUTION: 1,
};

// Enum: AndroidSensorRawBinningFactorUsed
mojo.internal.bindings.cros.mojom.AndroidSensorRawBinningFactorUsed = {
  ANDROID_SENSOR_RAW_BINNING_FACTOR_USED_TRUE: 0,
  ANDROID_SENSOR_RAW_BINNING_FACTOR_USED_FALSE: 1,
};

// Enum: AndroidSensorInfoColorFilterArrangement
mojo.internal.bindings.cros.mojom.AndroidSensorInfoColorFilterArrangement = {
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_RGGB: 0,
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_GRBG: 1,
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_GBRG: 2,
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_BGGR: 3,
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_RGB: 4,
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_MONO: 5,
  ANDROID_SENSOR_INFO_COLOR_FILTER_ARRANGEMENT_NIR: 6,
};

// Enum: AndroidSensorInfoTimestampSource
mojo.internal.bindings.cros.mojom.AndroidSensorInfoTimestampSource = {
  ANDROID_SENSOR_INFO_TIMESTAMP_SOURCE_UNKNOWN: 0,
  ANDROID_SENSOR_INFO_TIMESTAMP_SOURCE_REALTIME: 1,
};

// Enum: AndroidSensorInfoLensShadingApplied
mojo.internal.bindings.cros.mojom.AndroidSensorInfoLensShadingApplied = {
  ANDROID_SENSOR_INFO_LENS_SHADING_APPLIED_FALSE: 0,
  ANDROID_SENSOR_INFO_LENS_SHADING_APPLIED_TRUE: 1,
};

// Enum: AndroidShadingMode
mojo.internal.bindings.cros.mojom.AndroidShadingMode = {
  ANDROID_SHADING_MODE_OFF: 0,
  ANDROID_SHADING_MODE_FAST: 1,
  ANDROID_SHADING_MODE_HIGH_QUALITY: 2,
};

// Enum: AndroidStatisticsFaceDetectMode
mojo.internal.bindings.cros.mojom.AndroidStatisticsFaceDetectMode = {
  ANDROID_STATISTICS_FACE_DETECT_MODE_OFF: 0,
  ANDROID_STATISTICS_FACE_DETECT_MODE_SIMPLE: 1,
  ANDROID_STATISTICS_FACE_DETECT_MODE_FULL: 2,
};

// Enum: AndroidStatisticsHistogramMode
mojo.internal.bindings.cros.mojom.AndroidStatisticsHistogramMode = {
  ANDROID_STATISTICS_HISTOGRAM_MODE_OFF: 0,
  ANDROID_STATISTICS_HISTOGRAM_MODE_ON: 1,
};

// Enum: AndroidStatisticsSharpnessMapMode
mojo.internal.bindings.cros.mojom.AndroidStatisticsSharpnessMapMode = {
  ANDROID_STATISTICS_SHARPNESS_MAP_MODE_OFF: 0,
  ANDROID_STATISTICS_SHARPNESS_MAP_MODE_ON: 1,
};

// Enum: AndroidStatisticsHotPixelMapMode
mojo.internal.bindings.cros.mojom.AndroidStatisticsHotPixelMapMode = {
  ANDROID_STATISTICS_HOT_PIXEL_MAP_MODE_OFF: 0,
  ANDROID_STATISTICS_HOT_PIXEL_MAP_MODE_ON: 1,
};

// Enum: AndroidStatisticsSceneFlicker
mojo.internal.bindings.cros.mojom.AndroidStatisticsSceneFlicker = {
  ANDROID_STATISTICS_SCENE_FLICKER_NONE: 0,
  ANDROID_STATISTICS_SCENE_FLICKER_50HZ: 1,
  ANDROID_STATISTICS_SCENE_FLICKER_60HZ: 2,
};

// Enum: AndroidStatisticsLensShadingMapMode
mojo.internal.bindings.cros.mojom.AndroidStatisticsLensShadingMapMode = {
  ANDROID_STATISTICS_LENS_SHADING_MAP_MODE_OFF: 0,
  ANDROID_STATISTICS_LENS_SHADING_MAP_MODE_ON: 1,
};

// Enum: AndroidStatisticsOisDataMode
mojo.internal.bindings.cros.mojom.AndroidStatisticsOisDataMode = {
  ANDROID_STATISTICS_OIS_DATA_MODE_OFF: 0,
  ANDROID_STATISTICS_OIS_DATA_MODE_ON: 1,
};

// Enum: AndroidTonemapMode
mojo.internal.bindings.cros.mojom.AndroidTonemapMode = {
  ANDROID_TONEMAP_MODE_CONTRAST_CURVE: 0,
  ANDROID_TONEMAP_MODE_FAST: 1,
  ANDROID_TONEMAP_MODE_HIGH_QUALITY: 2,
  ANDROID_TONEMAP_MODE_GAMMA_VALUE: 3,
  ANDROID_TONEMAP_MODE_PRESET_CURVE: 4,
};

// Enum: AndroidTonemapPresetCurve
mojo.internal.bindings.cros.mojom.AndroidTonemapPresetCurve = {
  ANDROID_TONEMAP_PRESET_CURVE_SRGB: 0,
  ANDROID_TONEMAP_PRESET_CURVE_REC709: 1,
};

// Enum: AndroidLedTransmit
mojo.internal.bindings.cros.mojom.AndroidLedTransmit = {
  ANDROID_LED_TRANSMIT_OFF: 0,
  ANDROID_LED_TRANSMIT_ON: 1,
};

// Enum: AndroidLedAvailableLeds
mojo.internal.bindings.cros.mojom.AndroidLedAvailableLeds = {
  ANDROID_LED_AVAILABLE_LEDS_TRANSMIT: 0,
};

// Enum: AndroidInfoSupportedHardwareLevel
mojo.internal.bindings.cros.mojom.AndroidInfoSupportedHardwareLevel = {
  ANDROID_INFO_SUPPORTED_HARDWARE_LEVEL_LIMITED: 0,
  ANDROID_INFO_SUPPORTED_HARDWARE_LEVEL_FULL: 1,
  ANDROID_INFO_SUPPORTED_HARDWARE_LEVEL_LEGACY: 2,
  ANDROID_INFO_SUPPORTED_HARDWARE_LEVEL_3: 3,
  ANDROID_INFO_SUPPORTED_HARDWARE_LEVEL_EXTERNAL: 4,
};

// Enum: AndroidInfoSupportedBufferManagementVersion
mojo.internal.bindings.cros.mojom.AndroidInfoSupportedBufferManagementVersion = {
  ANDROID_INFO_SUPPORTED_BUFFER_MANAGEMENT_VERSION_HIDL_DEVICE_3_5: 0,
};

// Enum: AndroidBlackLevelLock
mojo.internal.bindings.cros.mojom.AndroidBlackLevelLock = {
  ANDROID_BLACK_LEVEL_LOCK_OFF: 0,
  ANDROID_BLACK_LEVEL_LOCK_ON: 1,
};

// Enum: AndroidSyncFrameNumber
mojo.internal.bindings.cros.mojom.AndroidSyncFrameNumber = {
  ANDROID_SYNC_FRAME_NUMBER_CONVERGING: -1,
  ANDROID_SYNC_FRAME_NUMBER_UNKNOWN: -2,
};

// Enum: AndroidSyncMaxLatency
mojo.internal.bindings.cros.mojom.AndroidSyncMaxLatency = {
  ANDROID_SYNC_MAX_LATENCY_PER_FRAME_CONTROL: 0,
  ANDROID_SYNC_MAX_LATENCY_UNKNOWN: -1,
};

// Enum: AndroidDepthAvailableDepthStreamConfigurations
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDepthStreamConfigurations = {
  ANDROID_DEPTH_AVAILABLE_DEPTH_STREAM_CONFIGURATIONS_OUTPUT: 0,
  ANDROID_DEPTH_AVAILABLE_DEPTH_STREAM_CONFIGURATIONS_INPUT: 1,
};

// Enum: AndroidDepthDepthIsExclusive
mojo.internal.bindings.cros.mojom.AndroidDepthDepthIsExclusive = {
  ANDROID_DEPTH_DEPTH_IS_EXCLUSIVE_FALSE: 0,
  ANDROID_DEPTH_DEPTH_IS_EXCLUSIVE_TRUE: 1,
};

// Enum: AndroidDepthAvailableDynamicDepthStreamConfigurations
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDynamicDepthStreamConfigurations = {
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STREAM_CONFIGURATIONS_OUTPUT: 0,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STREAM_CONFIGURATIONS_INPUT: 1,
};

// Enum: AndroidDepthAvailableDepthStreamConfigurationsMaximumResolution
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDepthStreamConfigurationsMaximumResolution = {
  ANDROID_DEPTH_AVAILABLE_DEPTH_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_OUTPUT: 0,
  ANDROID_DEPTH_AVAILABLE_DEPTH_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_INPUT: 1,
};

// Enum: AndroidDepthAvailableDynamicDepthStreamConfigurationsMaximumResolution
mojo.internal.bindings.cros.mojom.AndroidDepthAvailableDynamicDepthStreamConfigurationsMaximumResolution = {
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_OUTPUT: 0,
  ANDROID_DEPTH_AVAILABLE_DYNAMIC_DEPTH_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_INPUT: 1,
};

// Enum: AndroidLogicalMultiCameraSensorSyncType
mojo.internal.bindings.cros.mojom.AndroidLogicalMultiCameraSensorSyncType = {
  ANDROID_LOGICAL_MULTI_CAMERA_SENSOR_SYNC_TYPE_APPROXIMATE: 0,
  ANDROID_LOGICAL_MULTI_CAMERA_SENSOR_SYNC_TYPE_CALIBRATED: 1,
};

// Enum: AndroidDistortionCorrectionMode
mojo.internal.bindings.cros.mojom.AndroidDistortionCorrectionMode = {
  ANDROID_DISTORTION_CORRECTION_MODE_OFF: 0,
  ANDROID_DISTORTION_CORRECTION_MODE_FAST: 1,
  ANDROID_DISTORTION_CORRECTION_MODE_HIGH_QUALITY: 2,
};

// Enum: AndroidHeicAvailableHeicStreamConfigurations
mojo.internal.bindings.cros.mojom.AndroidHeicAvailableHeicStreamConfigurations = {
  ANDROID_HEIC_AVAILABLE_HEIC_STREAM_CONFIGURATIONS_OUTPUT: 0,
  ANDROID_HEIC_AVAILABLE_HEIC_STREAM_CONFIGURATIONS_INPUT: 1,
};

// Enum: AndroidHeicAvailableHeicStreamConfigurationsMaximumResolution
mojo.internal.bindings.cros.mojom.AndroidHeicAvailableHeicStreamConfigurationsMaximumResolution = {
  ANDROID_HEIC_AVAILABLE_HEIC_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_OUTPUT: 0,
  ANDROID_HEIC_AVAILABLE_HEIC_STREAM_CONFIGURATIONS_MAXIMUM_RESOLUTION_INPUT: 1,
};

// Enum: AndroidHeicInfoSupported
mojo.internal.bindings.cros.mojom.AndroidHeicInfoSupported = {
  ANDROID_HEIC_INFO_SUPPORTED_FALSE: 0,
  ANDROID_HEIC_INFO_SUPPORTED_TRUE: 1,
};

// Enum: AndroidAutomotiveLocation
mojo.internal.bindings.cros.mojom.AndroidAutomotiveLocation = {
  ANDROID_AUTOMOTIVE_LOCATION_INTERIOR: 0,
  ANDROID_AUTOMOTIVE_LOCATION_EXTERIOR_OTHER: 1,
  ANDROID_AUTOMOTIVE_LOCATION_EXTERIOR_FRONT: 2,
  ANDROID_AUTOMOTIVE_LOCATION_EXTERIOR_REAR: 3,
  ANDROID_AUTOMOTIVE_LOCATION_EXTERIOR_LEFT: 4,
  ANDROID_AUTOMOTIVE_LOCATION_EXTERIOR_RIGHT: 5,
  ANDROID_AUTOMOTIVE_LOCATION_EXTRA_OTHER: 6,
  ANDROID_AUTOMOTIVE_LOCATION_EXTRA_FRONT: 7,
  ANDROID_AUTOMOTIVE_LOCATION_EXTRA_REAR: 8,
  ANDROID_AUTOMOTIVE_LOCATION_EXTRA_LEFT: 9,
  ANDROID_AUTOMOTIVE_LOCATION_EXTRA_RIGHT: 10,
};

// Enum: AndroidAutomotiveLensFacing
mojo.internal.bindings.cros.mojom.AndroidAutomotiveLensFacing = {
  ANDROID_AUTOMOTIVE_LENS_FACING_EXTERIOR_OTHER: 0,
  ANDROID_AUTOMOTIVE_LENS_FACING_EXTERIOR_FRONT: 1,
  ANDROID_AUTOMOTIVE_LENS_FACING_EXTERIOR_REAR: 2,
  ANDROID_AUTOMOTIVE_LENS_FACING_EXTERIOR_LEFT: 3,
  ANDROID_AUTOMOTIVE_LENS_FACING_EXTERIOR_RIGHT: 4,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_OTHER: 5,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_1_LEFT: 6,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_1_CENTER: 7,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_1_RIGHT: 8,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_2_LEFT: 9,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_2_CENTER: 10,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_2_RIGHT: 11,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_3_LEFT: 12,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_3_CENTER: 13,
  ANDROID_AUTOMOTIVE_LENS_FACING_INTERIOR_SEAT_ROW_3_RIGHT: 14,
};

// Specs (at the end to ensure classes are defined for InterfaceProxy)
