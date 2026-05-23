// Auto-generated MojoJS binding
 // Source: chromium_src/third_party/blink/public/mojom/frame/frame.mojom
 // Module: blink.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.FrePageHandlerFactory": true, "glic.mojom.FrePageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "personal_context.notice.mojom.PageHandler": true, "browser.personal_context_internals.mojom.PageHandlerFactory": true, "browser.personal_context_internals.mojom.PageHandler": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.PageHandlerFactory": true, "intro.mojom.PageHandler": true, "intro.mojom.Page": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "privacy_sandbox_internals.mojom.PageHandler": true, "privacy_sandbox_internals.mojom.Page": true, "private_state_tokens.mojom.PrivateStateTokensPageHandler": true, "related_website_sets.mojom.RelatedWebsiteSetsPageHandler": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "actor.mojom.JournalClient": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrinterXmlParser": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.PrintServerObserver": true, "crosapi.mojom.PrintJobObserver": true, "crosapi.mojom.LocalPrinter": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "crosapi.mojom.TelemetryManagementService": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorConnectionWatcher": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIClassifier": false, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateClassifierClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.UnboundedSurfaceHost": true, "blink.mojom.UnboundedSurfaceClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '150.0.7853.0';
        
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

 mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.viz = mojo.internal.bindings.viz || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.blink.mojom.PluginActionTypeSpec = mojo.internal.bindings.blink.mojom.PluginActionTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.JavaScriptExecutionResultTypeSpec = mojo.internal.bindings.blink.mojom.JavaScriptExecutionResultTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.TraverseCancelledReasonSpec = mojo.internal.bindings.blink.mojom.TraverseCancelledReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.ViewTransitionSameOriginOptInSpec = mojo.internal.bindings.blink.mojom.ViewTransitionSameOriginOptInSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.FrameOwnerElementTypeSpec = mojo.internal.bindings.blink.mojom.FrameOwnerElementTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.NavigationApiEntryRestoreReasonSpec = mojo.internal.bindings.blink.mojom.NavigationApiEntryRestoreReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.StorageTypeAccessedSpec = mojo.internal.bindings.blink.mojom.StorageTypeAccessedSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.WindowProxyAccessTypeSpec = mojo.internal.bindings.blink.mojom.WindowProxyAccessTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink.mojom.SavableSubframeSpec = mojo.internal.bindings.blink.mojom.SavableSubframeSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.SavableSubframeSpec.$.structSpec && mojo.internal.bindings.blink.mojom.SavableSubframeSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.SavableSubframeSpec.$ = {};
mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec = mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec.$.structSpec && mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec.$ = {};
mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec = mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec = mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.IframeAttributesSpec = mojo.internal.bindings.blink.mojom.IframeAttributesSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.IframeAttributesSpec.$.structSpec && mojo.internal.bindings.blink.mojom.IframeAttributesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.IframeAttributesSpec.$ = {};
mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec = mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec.$ = {};
mojo.internal.bindings.blink.mojom.SubframeResourceLengthsSpec = mojo.internal.bindings.blink.mojom.SubframeResourceLengthsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.SubframeResourceLengthsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.SubframeResourceLengthsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.SubframeResourceLengthsSpec.$ = {};
mojo.internal.bindings.blink.mojom.UnboundedSurfaceHost = mojo.internal.bindings.blink.mojom.UnboundedSurfaceHost || {};
mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostSpec = mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostSpec || { $ : {} };
if (mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostSpec.$.structSpec && mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostSpec.$ = {};
mojo.internal.bindings.blink.mojom.UnboundedSurfaceHost.$interfaceName = 'blink.mojom.UnboundedSurfaceHost';
mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient = mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient || {};
mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientSpec = mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientSpec || { $ : {} };
if (mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientSpec.$.structSpec && mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientSpec.$ = {};
mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient.$interfaceName = 'blink.mojom.UnboundedSurfaceClient';
mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec = mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost = mojo.internal.bindings.blink.mojom.LocalFrameHost || {};
mojo.internal.bindings.blink.mojom.LocalFrameHostSpec = mojo.internal.bindings.blink.mojom.LocalFrameHostSpec || { $ : {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHostSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHostSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHostSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost.$interfaceName = 'blink.mojom.LocalFrameHost';
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost || {};
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostSpec = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostSpec || { $ : {} };
if (mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostSpec.$.structSpec && mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostSpec.$ = {};
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost.$interfaceName = 'blink.mojom.NonAssociatedLocalFrameHost';
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame = mojo.internal.bindings.blink.mojom.LocalFrame || {};
mojo.internal.bindings.blink.mojom.LocalFrameSpec = mojo.internal.bindings.blink.mojom.LocalFrameSpec || { $ : {} };
if (mojo.internal.bindings.blink.mojom.LocalFrameSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrameSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrameSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame.$interfaceName = 'blink.mojom.LocalFrame';
mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame = mojo.internal.bindings.blink.mojom.LocalMainFrame || {};
mojo.internal.bindings.blink.mojom.LocalMainFrameSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameSpec || { $ : {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame.$interfaceName = 'blink.mojom.LocalMainFrame';
mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost = mojo.internal.bindings.blink.mojom.LocalMainFrameHost || {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHostSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHostSpec || { $ : {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHostSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHostSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHostSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost.$interfaceName = 'blink.mojom.LocalMainFrameHost';
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec.$ = {};
mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec = mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec || { $: {} };
if (mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec.$.structSpec && mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.AllowedDragOperationsSpec = mojo.internal.bindings.blink.mojom.AllowedDragOperationsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.AutomaticBeaconTypeSpec = mojo.internal.bindings.blink.mojom.AutomaticBeaconTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.BlobSpec = mojo.internal.bindings.blink.mojom.BlobSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.BlobRemote = mojo.internal.bindings.blink.mojom.BlobRemote || class {};
mojo.internal.bindings.blink.mojom.BlobPendingReceiver = mojo.internal.bindings.blink.mojom.BlobPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.BlobURLTokenSpec = mojo.internal.bindings.blink.mojom.BlobURLTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.BlobURLTokenRemote = mojo.internal.bindings.blink.mojom.BlobURLTokenRemote || class {};
mojo.internal.bindings.blink.mojom.BlobURLTokenPendingReceiver = mojo.internal.bindings.blink.mojom.BlobURLTokenPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.CloseListenerSpec = mojo.internal.bindings.blink.mojom.CloseListenerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.CloseListenerRemote = mojo.internal.bindings.blink.mojom.CloseListenerRemote || class {};
mojo.internal.bindings.blink.mojom.CloseListenerPendingReceiver = mojo.internal.bindings.blink.mojom.CloseListenerPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ConfidenceLevelSpec = mojo.internal.bindings.blink.mojom.ConfidenceLevelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec = mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ContextMenuClientSpec = mojo.internal.bindings.blink.mojom.ContextMenuClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.ContextMenuClientRemote = mojo.internal.bindings.blink.mojom.ContextMenuClientRemote || class {};
mojo.internal.bindings.blink.mojom.ContextMenuClientPendingReceiver = mojo.internal.bindings.blink.mojom.ContextMenuClientPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.DelegatedCapabilitySpec = mojo.internal.bindings.blink.mojom.DelegatedCapabilitySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.DevToolsAgentSpec = mojo.internal.bindings.blink.mojom.DevToolsAgentSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.DevToolsAgentRemote = mojo.internal.bindings.blink.mojom.DevToolsAgentRemote || class {};
mojo.internal.bindings.blink.mojom.DevToolsAgentPendingReceiver = mojo.internal.bindings.blink.mojom.DevToolsAgentPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.DevToolsAgentHostSpec = mojo.internal.bindings.blink.mojom.DevToolsAgentHostSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote = mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote || class {};
mojo.internal.bindings.blink.mojom.DevToolsAgentHostPendingReceiver = mojo.internal.bindings.blink.mojom.DevToolsAgentHostPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.DragDataSpec = mojo.internal.bindings.blink.mojom.DragDataSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.DragEventSourceInfoSpec = mojo.internal.bindings.blink.mojom.DragEventSourceInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.DraggableRegionSpec = mojo.internal.bindings.blink.mojom.DraggableRegionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FaviconURLSpec = mojo.internal.bindings.blink.mojom.FaviconURLSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostSpec = mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostRemote = mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostRemote || class {};
mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostPendingReceiver = mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FocusTypeSpec = mojo.internal.bindings.blink.mojom.FocusTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec = mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FramePolicySpec = mojo.internal.bindings.blink.mojom.FramePolicySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FrameTokenSpec = mojo.internal.bindings.blink.mojom.FrameTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FrameVisibilitySpec = mojo.internal.bindings.blink.mojom.FrameVisibilitySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.FullscreenOptionsSpec = mojo.internal.bindings.blink.mojom.FullscreenOptionsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.InsecureRequestPolicySpec = mojo.internal.bindings.blink.mojom.InsecureRequestPolicySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.KeepAliveHandleFactorySpec = mojo.internal.bindings.blink.mojom.KeepAliveHandleFactorySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.KeepAliveHandleFactoryRemote = mojo.internal.bindings.blink.mojom.KeepAliveHandleFactoryRemote || class {};
mojo.internal.bindings.blink.mojom.KeepAliveHandleFactoryPendingReceiver = mojo.internal.bindings.blink.mojom.KeepAliveHandleFactoryPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec = mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.MediaPlayerActionSpec = mojo.internal.bindings.blink.mojom.MediaPlayerActionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.MenuItemSpec = mojo.internal.bindings.blink.mojom.MenuItemSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.NavigationApiHistoryEntryArraysSpec = mojo.internal.bindings.blink.mojom.NavigationApiHistoryEntryArraysSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.NavigationBlockedReasonSpec = mojo.internal.bindings.blink.mojom.NavigationBlockedReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandleSpec = mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandleSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandleRemote = mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandleRemote || class {};
mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandlePendingReceiver = mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandlePendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.OpenGraphMetadataSpec = mojo.internal.bindings.blink.mojom.OpenGraphMetadataSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.PageSwapEventParamsSpec = mojo.internal.bindings.blink.mojom.PageSwapEventParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.PopupMenuClientSpec = mojo.internal.bindings.blink.mojom.PopupMenuClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.PopupMenuClientRemote = mojo.internal.bindings.blink.mojom.PopupMenuClientRemote || class {};
mojo.internal.bindings.blink.mojom.PopupMenuClientPendingReceiver = mojo.internal.bindings.blink.mojom.PopupMenuClientPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.PopupWidgetHostSpec = mojo.internal.bindings.blink.mojom.PopupWidgetHostSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.PopupWidgetHostRemote = mojo.internal.bindings.blink.mojom.PopupWidgetHostRemote || class {};
mojo.internal.bindings.blink.mojom.PopupWidgetHostPendingReceiver = mojo.internal.bindings.blink.mojom.PopupWidgetHostPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.PreferredColorSchemeSpec = mojo.internal.bindings.blink.mojom.PreferredColorSchemeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ReferrerSpec = mojo.internal.bindings.blink.mojom.ReferrerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.RemoteFrameInterfacesFromRendererSpec = mojo.internal.bindings.blink.mojom.RemoteFrameInterfacesFromRendererSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec = mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ReportingDestinationSpec = mojo.internal.bindings.blink.mojom.ReportingDestinationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ReportingObserverSpec = mojo.internal.bindings.blink.mojom.ReportingObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.ReportingObserverRemote = mojo.internal.bindings.blink.mojom.ReportingObserverRemote || class {};
mojo.internal.bindings.blink.mojom.ReportingObserverPendingReceiver = mojo.internal.bindings.blink.mojom.ReportingObserverPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.RequestContextTypeSpec = mojo.internal.bindings.blink.mojom.RequestContextTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ResourceTimingInfoSpec = mojo.internal.bindings.blink.mojom.ResourceTimingInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ScrollDirectionSpec = mojo.internal.bindings.blink.mojom.ScrollDirectionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ScrollIntoViewParamsSpec = mojo.internal.bindings.blink.mojom.ScrollIntoViewParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.SuddenTerminationDisablerTypeSpec = mojo.internal.bindings.blink.mojom.SuddenTerminationDisablerTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.TaskAttributionIdSpec = mojo.internal.bindings.blink.mojom.TaskAttributionIdSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.TransferableMessageSpec = mojo.internal.bindings.blink.mojom.TransferableMessageSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.UntrustworthyContextMenuParamsSpec = mojo.internal.bindings.blink.mojom.UntrustworthyContextMenuParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.UserActivationNotificationTypeSpec = mojo.internal.bindings.blink.mojom.UserActivationNotificationTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.UserActivationUpdateTypeSpec = mojo.internal.bindings.blink.mojom.UserActivationUpdateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ViewTransitionStateSpec = mojo.internal.bindings.blink.mojom.ViewTransitionStateSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.ViewTransitionTokenSpec = mojo.internal.bindings.blink.mojom.ViewTransitionTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.WebFeatureSpec = mojo.internal.bindings.blink.mojom.WebFeatureSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.WidgetSpec = mojo.internal.bindings.blink.mojom.WidgetSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.WidgetRemote = mojo.internal.bindings.blink.mojom.WidgetRemote || class {};
mojo.internal.bindings.blink.mojom.WidgetPendingReceiver = mojo.internal.bindings.blink.mojom.WidgetPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.WidgetHostSpec = mojo.internal.bindings.blink.mojom.WidgetHostSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink.mojom.WidgetHostRemote = mojo.internal.bindings.blink.mojom.WidgetHostRemote || class {};
mojo.internal.bindings.blink.mojom.WidgetHostPendingReceiver = mojo.internal.bindings.blink.mojom.WidgetHostPendingReceiver || class { constructor(handle) { this.handle = handle; } };
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.cc.mojom = mojo.internal.bindings.cc.mojom || {};
mojo.internal.bindings.cc.mojom.BrowserControlsOffsetTagModificationsSpec = mojo.internal.bindings.cc.mojom.BrowserControlsOffsetTagModificationsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.cc = mojo.internal.bindings.cc || {};
mojo.internal.bindings.cc.mojom = mojo.internal.bindings.cc.mojom || {};
mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec = mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.PointSpec = mojo.internal.bindings.gfx.mojom.PointSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.RangeSpec = mojo.internal.bindings.gfx.mojom.RangeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.RectSpec = mojo.internal.bindings.gfx.mojom.RectSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.RectFSpec = mojo.internal.bindings.gfx.mojom.RectFSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.SizeSpec = mojo.internal.bindings.gfx.mojom.SizeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.Vector2dSpec = mojo.internal.bindings.gfx.mojom.Vector2dSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.BigString16Spec = mojo.internal.bindings.mojo_base.mojom.BigString16Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ByteSizeSpec = mojo.internal.bindings.mojo_base.mojom.ByteSizeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ByteStringSpec = mojo.internal.bindings.mojo_base.mojom.ByteStringSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ListValueSpec = mojo.internal.bindings.mojo_base.mojom.ListValueSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec = mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.String16Spec = mojo.internal.bindings.mojo_base.mojom.String16Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec = mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec = mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec = mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec = mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ValueSpec = mojo.internal.bindings.mojo_base.mojom.ValueSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CSPViolationSpec = mojo.internal.bindings.network.mojom.CSPViolationSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ConnectionInfoSpec = mojo.internal.bindings.network.mojom.ConnectionInfoSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ContentSecurityPolicySpec = mojo.internal.bindings.network.mojom.ContentSecurityPolicySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CrossOriginOpenerPolicyReporterParamsSpec = mojo.internal.bindings.network.mojom.CrossOriginOpenerPolicyReporterParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.LoadTimingInfoSpec = mojo.internal.bindings.network.mojom.LoadTimingInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RedirectModeSpec = mojo.internal.bindings.network.mojom.RedirectModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RequestDestinationSpec = mojo.internal.bindings.network.mojom.RequestDestinationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SourceLocationSpec = mojo.internal.bindings.network.mojom.SourceLocationSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.skia.mojom = mojo.internal.bindings.skia.mojom || {};
mojo.internal.bindings.skia.mojom.BitmapN32Spec = mojo.internal.bindings.skia.mojom.BitmapN32Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.skia.mojom = mojo.internal.bindings.skia.mojom || {};
mojo.internal.bindings.skia.mojom.SkColorSpec = mojo.internal.bindings.skia.mojom.SkColorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.skia.mojom = mojo.internal.bindings.skia.mojom || {};
mojo.internal.bindings.skia.mojom.SkColor4fSpec = mojo.internal.bindings.skia.mojom.SkColor4fSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.ui.mojom = mojo.internal.bindings.ui.mojom || {};
mojo.internal.bindings.ui.mojom.ScrollGranularitySpec = mojo.internal.bindings.ui.mojom.ScrollGranularitySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ui = mojo.internal.bindings.ui || {};
mojo.internal.bindings.ui.mojom = mojo.internal.bindings.ui.mojom || {};
mojo.internal.bindings.ui.mojom.VirtualKeyboardModeSpec = mojo.internal.bindings.ui.mojom.VirtualKeyboardModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.OriginSpec = mojo.internal.bindings.url.mojom.OriginSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

mojo.internal.bindings.blink.mojom.kMaxTitleChars = 4096;

mojo.internal.bindings.blink.mojom.kMaxCrashReportContextSize = 65536;

// Enum: PluginActionType
mojo.internal.bindings.blink.mojom.PluginActionType = {
  kRotate90Clockwise: 0,
  kRotate90Counterclockwise: 1,
};

// Enum: JavaScriptExecutionResultType
mojo.internal.bindings.blink.mojom.JavaScriptExecutionResultType = {
  kSuccess: 0,
  kException: 1,
};

// Enum: TraverseCancelledReason
mojo.internal.bindings.blink.mojom.TraverseCancelledReason = {
  kNotFound: 0,
  kSandboxViolation: 1,
  kAbortedBeforeCommit: 2,
};

// Enum: ViewTransitionSameOriginOptIn
mojo.internal.bindings.blink.mojom.ViewTransitionSameOriginOptIn = {
  kDisabled: 0,
  kEnabled: 1,
};

// Enum: FrameOwnerElementType
mojo.internal.bindings.blink.mojom.FrameOwnerElementType = {
  kNone: 0,
  kIframe: 1,
  kObject: 2,
  kEmbed: 3,
  kFrame: 4,
  kFencedframe: 5,
};

// Enum: NavigationApiEntryRestoreReason
mojo.internal.bindings.blink.mojom.NavigationApiEntryRestoreReason = {
  kBFCache: 0,
  kPrerenderActivationPush: 1,
  kPrerenderActivationReplace: 2,
};

// Enum: StorageTypeAccessed
mojo.internal.bindings.blink.mojom.StorageTypeAccessed = {
  kCacheStorage: 0,
  kIndexedDB: 1,
  kFileSystem: 2,
  kWebLocks: 3,
  kLocalStorage: 4,
  kSessionStorage: 5,
};

// Enum: WindowProxyAccessType
mojo.internal.bindings.blink.mojom.WindowProxyAccessType = {
  kLocation: 0,
  kClosed: 1,
  kLength: 2,
  kSelf: 3,
  kWindow: 4,
  kFrames: 5,
  kOpener: 6,
  kParent: 7,
  kTop: 8,
  kPostMessage: 9,
  kAnonymousIndexedGetter: 10,
  kClose: 11,
  kFocus: 12,
  kBlur: 13,
  kAnonymousNamedGetter: 14,
};

// Interface: UnboundedSurfaceHost
mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.UnboundedSurfaceHost';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.UnboundedSurfaceHost', [
    ]);
  }

};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.UnboundedSurfaceHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.UnboundedSurfaceHost', [
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostReceiver = mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostReceiver;

mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostPtr = mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostRemote;
mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostRequest = mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostPendingReceiver;


// Interface: UnboundedSurfaceClient
mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.UnboundedSurfaceClient';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onDismissed() {
    return this.$.onDismissed();
  }
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.UnboundedSurfaceClient', [
      { explicit: null },
    ]);
  }

  onDismissed() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.UnboundedSurfaceClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.UnboundedSurfaceClient', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onDismissed');
          const result = this.impl.onDismissed();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientReceiver = mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientReceiver;

mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientPtr = mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientRemote;
mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientRequest = mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientPendingReceiver;


// Interface: LocalFrameHost
mojo.internal.bindings.blink.mojom.LocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalFrameHost';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalFrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  enterFullscreen(arg_options) {
    return this.$.enterFullscreen(arg_options);
  }
  exitFullscreen() {
    return this.$.exitFullscreen();
  }
  fullscreenStateChanged(arg_is_fullscreen, arg_options) {
    return this.$.fullscreenStateChanged(arg_is_fullscreen, arg_options);
  }
  registerProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.$.registerProtocolHandler(arg_scheme, arg_url, arg_user_gesture);
  }
  unregisterProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.$.unregisterProtocolHandler(arg_scheme, arg_url, arg_user_gesture);
  }
  didDisplayInsecureContent() {
    return this.$.didDisplayInsecureContent();
  }
  didContainInsecureFormAction() {
    return this.$.didContainInsecureFormAction();
  }
  mainDocumentElementAvailable(arg_uses_temporary_zoom_level) {
    return this.$.mainDocumentElementAvailable(arg_uses_temporary_zoom_level);
  }
  setNeedsOcclusionTracking(arg_needs_tracking) {
    return this.$.setNeedsOcclusionTracking(arg_needs_tracking);
  }
  setVirtualKeyboardMode(arg_type) {
    return this.$.setVirtualKeyboardMode(arg_type);
  }
  visibilityChanged(arg_visibility) {
    return this.$.visibilityChanged(arg_visibility);
  }
  didFailLoadWithError(arg_url, arg_error_code) {
    return this.$.didFailLoadWithError(arg_url, arg_error_code);
  }
  didFocusFrame() {
    return this.$.didFocusFrame();
  }
  didCallFocus() {
    return this.$.didCallFocus();
  }
  enforceInsecureRequestPolicy(arg_policy_bitmap) {
    return this.$.enforceInsecureRequestPolicy(arg_policy_bitmap);
  }
  enforceInsecureNavigationsSet(arg_set) {
    return this.$.enforceInsecureNavigationsSet(arg_set);
  }
  suddenTerminationDisablerChanged(arg_present, arg_disabler_type) {
    return this.$.suddenTerminationDisablerChanged(arg_present, arg_disabler_type);
  }
  hadStickyUserActivationBeforeNavigationChanged(arg_has_gesture) {
    return this.$.hadStickyUserActivationBeforeNavigationChanged(arg_has_gesture);
  }
  scrollRectToVisibleInParentFrame(arg_rect_to_scroll, arg_params) {
    return this.$.scrollRectToVisibleInParentFrame(arg_rect_to_scroll, arg_params);
  }
  bubbleLogicalScrollInParentFrame(arg_direction, arg_granularity) {
    return this.$.bubbleLogicalScrollInParentFrame(arg_direction, arg_granularity);
  }
  startLoadingForAsyncNavigationApiCommit() {
    return this.$.startLoadingForAsyncNavigationApiCommit();
  }
  didBlockNavigation(arg_blocked_url, arg_reason) {
    return this.$.didBlockNavigation(arg_blocked_url, arg_reason);
  }
  didChangeLoadProgress(arg_load_progress) {
    return this.$.didChangeLoadProgress(arg_load_progress);
  }
  didFinishLoad(arg_validated_url) {
    return this.$.didFinishLoad(arg_validated_url);
  }
  dispatchLoad() {
    return this.$.dispatchLoad();
  }
  goToEntryAtOffset(arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.$.goToEntryAtOffset(arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id);
  }
  navigateToNavigationApiKey(arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.$.navigateToNavigationApiKey(arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id);
  }
  navigateEventHandlerPresenceChanged(arg_present) {
    return this.$.navigateEventHandlerPresenceChanged(arg_present);
  }
  updateTitle(arg_title) {
    return this.$.updateTitle(arg_title);
  }
  updateApplicationTitle(arg_application_title) {
    return this.$.updateApplicationTitle(arg_application_title);
  }
  updateUserActivationState(arg_update_type, arg_notification_type) {
    return this.$.updateUserActivationState(arg_update_type, arg_notification_type);
  }
  didConsumeHistoryUserActivation() {
    return this.$.didConsumeHistoryUserActivation();
  }
  handleAccessibilityFindInPageResult(arg_params) {
    return this.$.handleAccessibilityFindInPageResult(arg_params);
  }
  handleAccessibilityFindInPageTermination() {
    return this.$.handleAccessibilityFindInPageTermination();
  }
  documentOnLoadCompleted() {
    return this.$.documentOnLoadCompleted();
  }
  forwardResourceTimingToParent(arg_timing) {
    return this.$.forwardResourceTimingToParent(arg_timing);
  }
  didDispatchDOMContentLoadedEvent() {
    return this.$.didDispatchDOMContentLoadedEvent();
  }
  runModalAlertDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.$.runModalAlertDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion);
  }
  runModalConfirmDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.$.runModalConfirmDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion);
  }
  runModalPromptDialog(arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion) {
    return this.$.runModalPromptDialog(arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion);
  }
  runBeforeUnloadConfirm(arg_is_reload) {
    return this.$.runBeforeUnloadConfirm(arg_is_reload);
  }
  updateFaviconURL(arg_favicon_urls) {
    return this.$.updateFaviconURL(arg_favicon_urls);
  }
  downloadURL(arg_params) {
    return this.$.downloadURL(arg_params);
  }
  focusedElementChanged(arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type) {
    return this.$.focusedElementChanged(arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type);
  }
  textSelectionChanged(arg_text, arg_offset, arg_range) {
    return this.$.textSelectionChanged(arg_text, arg_offset, arg_range);
  }
  showPopupMenu(arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection) {
    return this.$.showPopupMenu(arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection);
  }
  createNewPopupWidget(arg_popup_host, arg_blink_widget_host, arg_blink_widget) {
    return this.$.createNewPopupWidget(arg_popup_host, arg_blink_widget_host, arg_blink_widget);
  }
  showContextMenu(arg_client, arg_params) {
    return this.$.showContextMenu(arg_client, arg_params);
  }
  didLoadResourceFromMemoryCache(arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials) {
    return this.$.didLoadResourceFromMemoryCache(arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials);
  }
  didChangeFrameOwnerProperties(arg_child_frame_token, arg_frame_owner_properties) {
    return this.$.didChangeFrameOwnerProperties(arg_child_frame_token, arg_frame_owner_properties);
  }
  didChangeOpener(arg_opener_frame) {
    return this.$.didChangeOpener(arg_opener_frame);
  }
  didChangeFramePolicy(arg_child_frame_token, arg_frame_policy) {
    return this.$.didChangeFramePolicy(arg_child_frame_token, arg_frame_policy);
  }
  didChangeIframeAttributes(arg_child_frame_token, arg_attributes) {
    return this.$.didChangeIframeAttributes(arg_child_frame_token, arg_attributes);
  }
  capturePaintPreviewOfSubframe(arg_clip_rect, arg_guid) {
    return this.$.capturePaintPreviewOfSubframe(arg_clip_rect, arg_guid);
  }
  setCloseListener(arg_listener) {
    return this.$.setCloseListener(arg_listener);
  }
  detach() {
    return this.$.detach();
  }
  getKeepAliveHandleFactory(arg_factory) {
    return this.$.getKeepAliveHandleFactory(arg_factory);
  }
  didAddMessageToConsole(arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace) {
    return this.$.didAddMessageToConsole(arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace);
  }
  frameSizeChanged(arg_size) {
    return this.$.frameSizeChanged(arg_size);
  }
  didInferColorScheme(arg_color_scheme) {
    return this.$.didInferColorScheme(arg_color_scheme);
  }
  didChangeSrcDoc(arg_child_frame_token, arg_srcdoc_value) {
    return this.$.didChangeSrcDoc(arg_child_frame_token, arg_srcdoc_value);
  }
  receivedDelegatedCapability(arg_delegated_capability) {
    return this.$.receivedDelegatedCapability(arg_delegated_capability);
  }
  sendFencedFrameReportingBeacon(arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed) {
    return this.$.sendFencedFrameReportingBeacon(arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed);
  }
  sendFencedFrameReportingBeaconToCustomURL(arg_destination_url, arg_cross_origin_exposed) {
    return this.$.sendFencedFrameReportingBeaconToCustomURL(arg_destination_url, arg_cross_origin_exposed);
  }
  sendLegacyTechEvent(arg_type, arg_code_location) {
    return this.$.sendLegacyTechEvent(arg_type, arg_code_location);
  }
  setFencedFrameAutomaticBeaconReportEventData(arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed) {
    return this.$.setFencedFrameAutomaticBeaconReportEventData(arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed);
  }
  sendPrivateAggregationRequestsForFencedFrameEvent(arg_event_type) {
    return this.$.sendPrivateAggregationRequestsForFencedFrameEvent(arg_event_type);
  }
  createFencedFrame(arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token) {
    return this.$.createFencedFrame(arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token);
  }
  onViewTransitionOptInChanged(arg_view_transition_opt_in) {
    return this.$.onViewTransitionOptInChanged(arg_view_transition_opt_in);
  }
  startDragging(arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info) {
    return this.$.startDragging(arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info);
  }
  issueKeepAliveHandle(arg_receiver) {
    return this.$.issueKeepAliveHandle(arg_receiver);
  }
  notifyStorageAccessed(arg_storageType, arg_blocked) {
    return this.$.notifyStorageAccessed(arg_storageType, arg_blocked);
  }
  recordWindowProxyUsageMetrics(arg_target_frame_token, arg_access_type) {
    return this.$.recordWindowProxyUsageMetrics(arg_target_frame_token, arg_access_type);
  }
  notifyDocumentInteractive() {
    return this.$.notifyDocumentInteractive();
  }
  initializeCrashReportContext(arg_length) {
    return this.$.initializeCrashReportContext(arg_length);
  }
  requestUnboundedSurface(arg_host, arg_client) {
    return this.$.requestUnboundedSurface(arg_host, arg_client);
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  enterFullscreen(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec,
      [arg_options],
      false);
  }

  exitFullscreen() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec,
      null,
      [],
      false);
  }

  fullscreenStateChanged(arg_is_fullscreen, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec,
      null,
      [arg_is_fullscreen, arg_options],
      false);
  }

  registerProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec,
      null,
      [arg_scheme, arg_url, arg_user_gesture],
      false);
  }

  unregisterProtocolHandler(arg_scheme, arg_url, arg_user_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec,
      null,
      [arg_scheme, arg_url, arg_user_gesture],
      false);
  }

  didDisplayInsecureContent() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec,
      null,
      [],
      false);
  }

  didContainInsecureFormAction() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec,
      null,
      [],
      false);
  }

  mainDocumentElementAvailable(arg_uses_temporary_zoom_level) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec,
      null,
      [arg_uses_temporary_zoom_level],
      false);
  }

  setNeedsOcclusionTracking(arg_needs_tracking) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec,
      null,
      [arg_needs_tracking],
      false);
  }

  setVirtualKeyboardMode(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec,
      null,
      [arg_type],
      false);
  }

  visibilityChanged(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  didFailLoadWithError(arg_url, arg_error_code) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec,
      null,
      [arg_url, arg_error_code],
      false);
  }

  didFocusFrame() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec,
      null,
      [],
      false);
  }

  didCallFocus() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec,
      null,
      [],
      false);
  }

  enforceInsecureRequestPolicy(arg_policy_bitmap) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec,
      null,
      [arg_policy_bitmap],
      false);
  }

  enforceInsecureNavigationsSet(arg_set) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec,
      null,
      [arg_set],
      false);
  }

  suddenTerminationDisablerChanged(arg_present, arg_disabler_type) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec,
      null,
      [arg_present, arg_disabler_type],
      false);
  }

  hadStickyUserActivationBeforeNavigationChanged(arg_has_gesture) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec,
      null,
      [arg_has_gesture],
      false);
  }

  scrollRectToVisibleInParentFrame(arg_rect_to_scroll, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec,
      null,
      [arg_rect_to_scroll, arg_params],
      false);
  }

  bubbleLogicalScrollInParentFrame(arg_direction, arg_granularity) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec,
      null,
      [arg_direction, arg_granularity],
      false);
  }

  startLoadingForAsyncNavigationApiCommit() {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec,
      null,
      [],
      false);
  }

  didBlockNavigation(arg_blocked_url, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec,
      null,
      [arg_blocked_url, arg_reason],
      false);
  }

  didChangeLoadProgress(arg_load_progress) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec,
      null,
      [arg_load_progress],
      false);
  }

  didFinishLoad(arg_validated_url) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec,
      null,
      [arg_validated_url],
      false);
  }

  dispatchLoad() {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec,
      null,
      [],
      false);
  }

  goToEntryAtOffset(arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec,
      null,
      [arg_offset, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id],
      false);
  }

  navigateToNavigationApiKey(arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec,
      null,
      [arg_key, arg_has_user_gesture, arg_actual_navigation_start, arg_soft_navigation_heuristics_task_id],
      false);
  }

  navigateEventHandlerPresenceChanged(arg_present) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec,
      null,
      [arg_present],
      false);
  }

  updateTitle(arg_title) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec,
      null,
      [arg_title],
      false);
  }

  updateApplicationTitle(arg_application_title) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec,
      null,
      [arg_application_title],
      false);
  }

  updateUserActivationState(arg_update_type, arg_notification_type) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec,
      null,
      [arg_update_type, arg_notification_type],
      false);
  }

  didConsumeHistoryUserActivation() {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec,
      null,
      [],
      false);
  }

  handleAccessibilityFindInPageResult(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  handleAccessibilityFindInPageTermination() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec,
      null,
      [],
      false);
  }

  documentOnLoadCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  forwardResourceTimingToParent(arg_timing) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec,
      null,
      [arg_timing],
      false);
  }

  didDispatchDOMContentLoadedEvent() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec,
      null,
      [],
      false);
  }

  runModalAlertDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec,
      [arg_alert_message, arg_disable_third_party_subframe_suppresion],
      false);
  }

  runModalConfirmDialog(arg_alert_message, arg_disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec,
      [arg_alert_message, arg_disable_third_party_subframe_suppresion],
      false);
  }

  runModalPromptDialog(arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec,
      [arg_alert_message, arg_default_value, arg_disable_third_party_subframe_suppresion],
      false);
  }

  runBeforeUnloadConfirm(arg_is_reload) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec,
      [arg_is_reload],
      false);
  }

  updateFaviconURL(arg_favicon_urls) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec,
      null,
      [arg_favicon_urls],
      false);
  }

  downloadURL(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec,
      null,
      [arg_params],
      false);
  }

  focusedElementChanged(arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec,
      null,
      [arg_is_editable_element, arg_is_richly_editable_element, arg_bounds_in_frame_widget, arg_focus_type],
      false);
  }

  textSelectionChanged(arg_text, arg_offset, arg_range) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec,
      null,
      [arg_text, arg_offset, arg_range],
      false);
  }

  showPopupMenu(arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec,
      null,
      [arg_popup_client, arg_bounds, arg_font_size, arg_selected_item, arg_menu_items, arg_right_aligned, arg_allow_multiple_selection],
      false);
  }

  createNewPopupWidget(arg_popup_host, arg_blink_widget_host, arg_blink_widget) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec,
      null,
      [arg_popup_host, arg_blink_widget_host, arg_blink_widget],
      false);
  }

  showContextMenu(arg_client, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec,
      null,
      [arg_client, arg_params],
      false);
  }

  didLoadResourceFromMemoryCache(arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec,
      null,
      [arg_url, arg_http_method, arg_mime_type, arg_request_destination, arg_include_credentials],
      false);
  }

  didChangeFrameOwnerProperties(arg_child_frame_token, arg_frame_owner_properties) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec,
      null,
      [arg_child_frame_token, arg_frame_owner_properties],
      false);
  }

  didChangeOpener(arg_opener_frame) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec,
      null,
      [arg_opener_frame],
      false);
  }

  didChangeFramePolicy(arg_child_frame_token, arg_frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec,
      null,
      [arg_child_frame_token, arg_frame_policy],
      false);
  }

  didChangeIframeAttributes(arg_child_frame_token, arg_attributes) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec,
      null,
      [arg_child_frame_token, arg_attributes],
      false);
  }

  capturePaintPreviewOfSubframe(arg_clip_rect, arg_guid) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec,
      null,
      [arg_clip_rect, arg_guid],
      false);
  }

  setCloseListener(arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec,
      null,
      [arg_listener],
      false);
  }

  detach() {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec,
      null,
      [],
      false);
  }

  getKeepAliveHandleFactory(arg_factory) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec,
      null,
      [arg_factory],
      false);
  }

  didAddMessageToConsole(arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace) {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec,
      null,
      [arg_log_level, arg_msg, arg_line_number, arg_source_id, arg_untrusted_stack_trace],
      false);
  }

  frameSizeChanged(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec,
      null,
      [arg_size],
      false);
  }

  didInferColorScheme(arg_color_scheme) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec,
      null,
      [arg_color_scheme],
      false);
  }

  didChangeSrcDoc(arg_child_frame_token, arg_srcdoc_value) {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec,
      null,
      [arg_child_frame_token, arg_srcdoc_value],
      false);
  }

  receivedDelegatedCapability(arg_delegated_capability) {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec,
      null,
      [arg_delegated_capability],
      false);
  }

  sendFencedFrameReportingBeacon(arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec,
      null,
      [arg_event_data, arg_event_type, arg_destinations, arg_cross_origin_exposed],
      false);
  }

  sendFencedFrameReportingBeaconToCustomURL(arg_destination_url, arg_cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec,
      null,
      [arg_destination_url, arg_cross_origin_exposed],
      false);
  }

  sendLegacyTechEvent(arg_type, arg_code_location) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec,
      null,
      [arg_type, arg_code_location],
      false);
  }

  setFencedFrameAutomaticBeaconReportEventData(arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed) {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec,
      null,
      [arg_event_type, arg_event_data, arg_destinations, arg_once, arg_cross_origin_exposed],
      false);
  }

  sendPrivateAggregationRequestsForFencedFrameEvent(arg_event_type) {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec,
      null,
      [arg_event_type],
      false);
  }

  createFencedFrame(arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec,
      null,
      [arg_fenced_frame, arg_remote_frame_interfaces, arg_frame_token, arg_devtools_frame_token],
      false);
  }

  onViewTransitionOptInChanged(arg_view_transition_opt_in) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec,
      null,
      [arg_view_transition_opt_in],
      false);
  }

  startDragging(arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec,
      null,
      [arg_drag_data, arg_operations_allowed, arg_image, arg_cursor_offset_in_dip, arg_drag_obj_rect_in_dip, arg_event_info],
      false);
  }

  issueKeepAliveHandle(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  notifyStorageAccessed(arg_storageType, arg_blocked) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec,
      null,
      [arg_storageType, arg_blocked],
      false);
  }

  recordWindowProxyUsageMetrics(arg_target_frame_token, arg_access_type) {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec,
      null,
      [arg_target_frame_token, arg_access_type],
      false);
  }

  notifyDocumentInteractive() {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec,
      null,
      [],
      false);
  }

  initializeCrashReportContext(arg_length) {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec,
      [arg_length],
      false);
  }

  requestUnboundedSurface(arg_host, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec,
      null,
      [arg_host, arg_client],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalFrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalFrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enterFullscreen');
          const result = this.impl.enterFullscreen(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_granted' in response) ? response['arg_granted'] : response;
              const resp_obj = { 'arg_granted': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] enterFullscreen FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exitFullscreen');
          const result = this.impl.exitFullscreen();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.fullscreenStateChanged');
          const result = this.impl.fullscreenStateChanged(params.arg_is_fullscreen, params.arg_options);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerProtocolHandler');
          const result = this.impl.registerProtocolHandler(params.arg_scheme, params.arg_url, params.arg_user_gesture);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unregisterProtocolHandler');
          const result = this.impl.unregisterProtocolHandler(params.arg_scheme, params.arg_url, params.arg_user_gesture);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didDisplayInsecureContent');
          const result = this.impl.didDisplayInsecureContent();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didContainInsecureFormAction');
          const result = this.impl.didContainInsecureFormAction();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mainDocumentElementAvailable');
          const result = this.impl.mainDocumentElementAvailable(params.arg_uses_temporary_zoom_level);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNeedsOcclusionTracking');
          const result = this.impl.setNeedsOcclusionTracking(params.arg_needs_tracking);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setVirtualKeyboardMode');
          const result = this.impl.setVirtualKeyboardMode(params.arg_type);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.visibilityChanged');
          const result = this.impl.visibilityChanged(params.arg_visibility);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFailLoadWithError');
          const result = this.impl.didFailLoadWithError(params.arg_url, params.arg_error_code);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFocusFrame');
          const result = this.impl.didFocusFrame();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didCallFocus');
          const result = this.impl.didCallFocus();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enforceInsecureRequestPolicy');
          const result = this.impl.enforceInsecureRequestPolicy(params.arg_policy_bitmap);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enforceInsecureNavigationsSet');
          const result = this.impl.enforceInsecureNavigationsSet(params.arg_set);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.suddenTerminationDisablerChanged');
          const result = this.impl.suddenTerminationDisablerChanged(params.arg_present, params.arg_disabler_type);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hadStickyUserActivationBeforeNavigationChanged');
          const result = this.impl.hadStickyUserActivationBeforeNavigationChanged(params.arg_has_gesture);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollRectToVisibleInParentFrame');
          const result = this.impl.scrollRectToVisibleInParentFrame(params.arg_rect_to_scroll, params.arg_params);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bubbleLogicalScrollInParentFrame');
          const result = this.impl.bubbleLogicalScrollInParentFrame(params.arg_direction, params.arg_granularity);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startLoadingForAsyncNavigationApiCommit');
          const result = this.impl.startLoadingForAsyncNavigationApiCommit();
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didBlockNavigation');
          const result = this.impl.didBlockNavigation(params.arg_blocked_url, params.arg_reason);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeLoadProgress');
          const result = this.impl.didChangeLoadProgress(params.arg_load_progress);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFinishLoad');
          const result = this.impl.didFinishLoad(params.arg_validated_url);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchLoad');
          const result = this.impl.dispatchLoad();
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.goToEntryAtOffset');
          const result = this.impl.goToEntryAtOffset(params.arg_offset, params.arg_has_user_gesture, params.arg_actual_navigation_start, params.arg_soft_navigation_heuristics_task_id);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.navigateToNavigationApiKey');
          const result = this.impl.navigateToNavigationApiKey(params.arg_key, params.arg_has_user_gesture, params.arg_actual_navigation_start, params.arg_soft_navigation_heuristics_task_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.navigateEventHandlerPresenceChanged');
          const result = this.impl.navigateEventHandlerPresenceChanged(params.arg_present);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTitle');
          const result = this.impl.updateTitle(params.arg_title);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateApplicationTitle');
          const result = this.impl.updateApplicationTitle(params.arg_application_title);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateUserActivationState');
          const result = this.impl.updateUserActivationState(params.arg_update_type, params.arg_notification_type);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didConsumeHistoryUserActivation');
          const result = this.impl.didConsumeHistoryUserActivation();
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAccessibilityFindInPageResult');
          const result = this.impl.handleAccessibilityFindInPageResult(params.arg_params);
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleAccessibilityFindInPageTermination');
          const result = this.impl.handleAccessibilityFindInPageTermination();
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.documentOnLoadCompleted');
          const result = this.impl.documentOnLoadCompleted();
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forwardResourceTimingToParent');
          const result = this.impl.forwardResourceTimingToParent(params.arg_timing);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didDispatchDOMContentLoadedEvent');
          const result = this.impl.didDispatchDOMContentLoadedEvent();
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runModalAlertDialog');
          const result = this.impl.runModalAlertDialog(params.arg_alert_message, params.arg_disable_third_party_subframe_suppresion);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] runModalAlertDialog FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runModalConfirmDialog');
          const result = this.impl.runModalConfirmDialog(params.arg_alert_message, params.arg_disable_third_party_subframe_suppresion);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] runModalConfirmDialog FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runModalPromptDialog');
          const result = this.impl.runModalPromptDialog(params.arg_alert_message, params.arg_default_value, params.arg_disable_third_party_subframe_suppresion);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] runModalPromptDialog FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.runBeforeUnloadConfirm');
          const result = this.impl.runBeforeUnloadConfirm(params.arg_is_reload);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] runBeforeUnloadConfirm FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateFaviconURL');
          const result = this.impl.updateFaviconURL(params.arg_favicon_urls);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.downloadURL');
          const result = this.impl.downloadURL(params.arg_params);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusedElementChanged');
          const result = this.impl.focusedElementChanged(params.arg_is_editable_element, params.arg_is_richly_editable_element, params.arg_bounds_in_frame_widget, params.arg_focus_type);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.textSelectionChanged');
          const result = this.impl.textSelectionChanged(params.arg_text, params.arg_offset, params.arg_range);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showPopupMenu');
          const result = this.impl.showPopupMenu(params.arg_popup_client, params.arg_bounds, params.arg_font_size, params.arg_selected_item, params.arg_menu_items, params.arg_right_aligned, params.arg_allow_multiple_selection);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNewPopupWidget');
          const result = this.impl.createNewPopupWidget(params.arg_popup_host, params.arg_blink_widget_host, params.arg_blink_widget);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showContextMenu');
          const result = this.impl.showContextMenu(params.arg_client, params.arg_params);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didLoadResourceFromMemoryCache');
          const result = this.impl.didLoadResourceFromMemoryCache(params.arg_url, params.arg_http_method, params.arg_mime_type, params.arg_request_destination, params.arg_include_credentials);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeFrameOwnerProperties');
          const result = this.impl.didChangeFrameOwnerProperties(params.arg_child_frame_token, params.arg_frame_owner_properties);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeOpener');
          const result = this.impl.didChangeOpener(params.arg_opener_frame);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeFramePolicy');
          const result = this.impl.didChangeFramePolicy(params.arg_child_frame_token, params.arg_frame_policy);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeIframeAttributes');
          const result = this.impl.didChangeIframeAttributes(params.arg_child_frame_token, params.arg_attributes);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.capturePaintPreviewOfSubframe');
          const result = this.impl.capturePaintPreviewOfSubframe(params.arg_clip_rect, params.arg_guid);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCloseListener');
          const result = this.impl.setCloseListener(params.arg_listener);
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detach');
          const result = this.impl.detach();
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getKeepAliveHandleFactory');
          const result = this.impl.getKeepAliveHandleFactory(params.arg_factory);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didAddMessageToConsole');
          const result = this.impl.didAddMessageToConsole(params.arg_log_level, params.arg_msg, params.arg_line_number, params.arg_source_id, params.arg_untrusted_stack_trace);
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.frameSizeChanged');
          const result = this.impl.frameSizeChanged(params.arg_size);
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didInferColorScheme');
          const result = this.impl.didInferColorScheme(params.arg_color_scheme);
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeSrcDoc');
          const result = this.impl.didChangeSrcDoc(params.arg_child_frame_token, params.arg_srcdoc_value);
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.receivedDelegatedCapability');
          const result = this.impl.receivedDelegatedCapability(params.arg_delegated_capability);
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendFencedFrameReportingBeacon');
          const result = this.impl.sendFencedFrameReportingBeacon(params.arg_event_data, params.arg_event_type, params.arg_destinations, params.arg_cross_origin_exposed);
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendFencedFrameReportingBeaconToCustomURL');
          const result = this.impl.sendFencedFrameReportingBeaconToCustomURL(params.arg_destination_url, params.arg_cross_origin_exposed);
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendLegacyTechEvent');
          const result = this.impl.sendLegacyTechEvent(params.arg_type, params.arg_code_location);
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFencedFrameAutomaticBeaconReportEventData');
          const result = this.impl.setFencedFrameAutomaticBeaconReportEventData(params.arg_event_type, params.arg_event_data, params.arg_destinations, params.arg_once, params.arg_cross_origin_exposed);
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendPrivateAggregationRequestsForFencedFrameEvent');
          const result = this.impl.sendPrivateAggregationRequestsForFencedFrameEvent(params.arg_event_type);
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createFencedFrame');
          const result = this.impl.createFencedFrame(params.arg_fenced_frame, params.arg_remote_frame_interfaces, params.arg_frame_token, params.arg_devtools_frame_token);
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onViewTransitionOptInChanged');
          const result = this.impl.onViewTransitionOptInChanged(params.arg_view_transition_opt_in);
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.startDragging');
          const result = this.impl.startDragging(params.arg_drag_data, params.arg_operations_allowed, params.arg_image, params.arg_cursor_offset_in_dip, params.arg_drag_obj_rect_in_dip, params.arg_event_info);
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.issueKeepAliveHandle');
          const result = this.impl.issueKeepAliveHandle(params.arg_receiver);
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyStorageAccessed');
          const result = this.impl.notifyStorageAccessed(params.arg_storageType, params.arg_blocked);
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordWindowProxyUsageMetrics');
          const result = this.impl.recordWindowProxyUsageMetrics(params.arg_target_frame_token, params.arg_access_type);
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyDocumentInteractive');
          const result = this.impl.notifyDocumentInteractive();
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.initializeCrashReportContext');
          const result = this.impl.initializeCrashReportContext(params.arg_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_region' in response) ? response['arg_region'] : response;
              const resp_obj = { 'arg_region': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] initializeCrashReportContext FAILED:', e));
          }
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestUnboundedSurface');
          const result = this.impl.requestUnboundedSurface(params.arg_host, params.arg_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameHostReceiver = mojo.internal.bindings.blink.mojom.LocalFrameHostReceiver;

mojo.internal.bindings.blink.mojom.LocalFrameHostPtr = mojo.internal.bindings.blink.mojom.LocalFrameHostRemote;
mojo.internal.bindings.blink.mojom.LocalFrameHostRequest = mojo.internal.bindings.blink.mojom.LocalFrameHostPendingReceiver;


// Interface: NonAssociatedLocalFrameHost
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.NonAssociatedLocalFrameHost';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  maybeStartOutermostMainFrameNavigation(arg_urls) {
    return this.$.maybeStartOutermostMainFrameNavigation(arg_urls);
  }
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NonAssociatedLocalFrameHost', [
      { explicit: null },
    ]);
  }

  maybeStartOutermostMainFrameNavigation(arg_urls) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec,
      null,
      [arg_urls],
      false);
  }

};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.NonAssociatedLocalFrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.NonAssociatedLocalFrameHost', [
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeStartOutermostMainFrameNavigation');
          const result = this.impl.maybeStartOutermostMainFrameNavigation(params.arg_urls);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostReceiver = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostReceiver;

mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPtr = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRemote;
mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostRequest = mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHostPendingReceiver;


// Interface: LocalFrame
mojo.internal.bindings.blink.mojom.LocalFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalFrame';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  getTextSurroundingSelection(arg_max_length) {
    return this.$.getTextSurroundingSelection(arg_max_length);
  }
  sendInterventionReport(arg_id, arg_message, arg_child_frame_token) {
    return this.$.sendInterventionReport(arg_id, arg_message, arg_child_frame_token);
  }
  setFrameOwnerProperties(arg_properties) {
    return this.$.setFrameOwnerProperties(arg_properties);
  }
  notifyUserActivation(arg_notification_type) {
    return this.$.notifyUserActivation(arg_notification_type);
  }
  notifyVirtualKeyboardOverlayRect(arg_keyboard_rect) {
    return this.$.notifyVirtualKeyboardOverlayRect(arg_keyboard_rect);
  }
  showInterestInElement(arg_nodeID) {
    return this.$.showInterestInElement(arg_nodeID);
  }
  addMessageToConsole(arg_level, arg_message, arg_discard_duplicates) {
    return this.$.addMessageToConsole(arg_level, arg_message, arg_discard_duplicates);
  }
  swapInImmediately() {
    return this.$.swapInImmediately();
  }
  checkCompleted() {
    return this.$.checkCompleted();
  }
  stopLoading() {
    return this.$.stopLoading();
  }
  collapse(arg_collapsed) {
    return this.$.collapse(arg_collapsed);
  }
  enableViewSourceMode() {
    return this.$.enableViewSourceMode();
  }
  focus() {
    return this.$.focus();
  }
  clearFocusedElement() {
    return this.$.clearFocusedElement();
  }
  copyImageAt(arg_window_point) {
    return this.$.copyImageAt(arg_window_point);
  }
  saveImageAt(arg_window_point) {
    return this.$.saveImageAt(arg_window_point);
  }
  reportBlinkFeatureUsage(arg_features) {
    return this.$.reportBlinkFeatureUsage(arg_features);
  }
  renderFallbackContent() {
    return this.$.renderFallbackContent();
  }
  beforeUnload(arg_is_reload, arg_force_to_proceed) {
    return this.$.beforeUnload(arg_is_reload, arg_force_to_proceed);
  }
  mediaPlayerActionAt(arg_location, arg_action) {
    return this.$.mediaPlayerActionAt(arg_location, arg_action);
  }
  requestVideoFrameAtWithBoundsHint(arg_location, arg_max_size, arg_max_area) {
    return this.$.requestVideoFrameAtWithBoundsHint(arg_location, arg_max_size, arg_max_area);
  }
  pluginActionAt(arg_location, arg_action) {
    return this.$.pluginActionAt(arg_location, arg_action);
  }
  advanceFocusInFrame(arg_focus_type, arg_source_frame_token) {
    return this.$.advanceFocusInFrame(arg_focus_type, arg_source_frame_token);
  }
  advanceFocusForIME(arg_focus_type) {
    return this.$.advanceFocusForIME(arg_focus_type);
  }
  reportContentSecurityPolicyViolation(arg_violation) {
    return this.$.reportContentSecurityPolicyViolation(arg_violation);
  }
  didUpdateFramePolicy(arg_frame_policy) {
    return this.$.didUpdateFramePolicy(arg_frame_policy);
  }
  onFrameVisibilityChanged(arg_visibility) {
    return this.$.onFrameVisibilityChanged(arg_visibility);
  }
  postMessageEvent(arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message) {
    return this.$.postMessageEvent(arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message);
  }
  javaScriptMethodExecuteRequest(arg_object_name, arg_method_name, arg_arguments, arg_wants_result) {
    return this.$.javaScriptMethodExecuteRequest(arg_object_name, arg_method_name, arg_arguments, arg_wants_result);
  }
  javaScriptExecuteRequest(arg_javascript, arg_wants_result) {
    return this.$.javaScriptExecuteRequest(arg_javascript, arg_wants_result);
  }
  javaScriptExecuteRequestForTests(arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id) {
    return this.$.javaScriptExecuteRequestForTests(arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id);
  }
  javaScriptExecuteRequestInIsolatedWorld(arg_javascript, arg_wants_result, arg_world_id) {
    return this.$.javaScriptExecuteRequestInIsolatedWorld(arg_javascript, arg_wants_result, arg_world_id);
  }
  invokeScriptToolForInspector(arg_invocation_id, arg_tool_name, arg_input_arguments) {
    return this.$.invokeScriptToolForInspector(arg_invocation_id, arg_tool_name, arg_input_arguments);
  }
  notifyInspectorOfCrossDocumentScriptToolResult(arg_invocation_id) {
    return this.$.notifyInspectorOfCrossDocumentScriptToolResult(arg_invocation_id);
  }
  bindReportingObserver(arg_receiver) {
    return this.$.bindReportingObserver(arg_receiver);
  }
  updateOpener(arg_opener_frame_token) {
    return this.$.updateOpener(arg_opener_frame_token);
  }
  getSavableResourceLinks() {
    return this.$.getSavableResourceLinks();
  }
  mixedContentFound(arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location) {
    return this.$.mixedContentFound(arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location);
  }
  bindDevToolsAgent(arg_agent_host, arg_agent) {
    return this.$.bindDevToolsAgent(arg_agent_host, arg_agent);
  }
  handleRendererDebugURL(arg_url) {
    return this.$.handleRendererDebugURL(arg_url);
  }
  getCanonicalUrlForSharing() {
    return this.$.getCanonicalUrlForSharing();
  }
  getOpenGraphMetadata() {
    return this.$.getOpenGraphMetadata();
  }
  setNavigationApiHistoryEntriesForRestore(arg_entry_arrays, arg_restore_reason) {
    return this.$.setNavigationApiHistoryEntriesForRestore(arg_entry_arrays, arg_restore_reason);
  }
  updatePrerenderURL(arg_matched_url) {
    return this.$.updatePrerenderURL(arg_matched_url);
  }
  notifyNavigationApiOfDisposedEntries(arg_keys) {
    return this.$.notifyNavigationApiOfDisposedEntries(arg_keys);
  }
  traverseCancelled(arg_navigation_api_key, arg_reason) {
    return this.$.traverseCancelled(arg_navigation_api_key, arg_reason);
  }
  dispatchNavigateEventForCrossDocumentTraversal(arg_url, arg_page_state, arg_is_browser_initiated) {
    return this.$.dispatchNavigateEventForCrossDocumentTraversal(arg_url, arg_page_state, arg_is_browser_initiated);
  }
  snapshotDocumentForViewTransition(arg_transition_token, arg_page_swap_event_params) {
    return this.$.snapshotDocumentForViewTransition(arg_transition_token, arg_page_swap_event_params);
  }
  notifyViewTransitionAbortedToOldDocument() {
    return this.$.notifyViewTransitionAbortedToOldDocument();
  }
  dispatchPageSwap(arg_page_swap_event_params) {
    return this.$.dispatchPageSwap(arg_page_swap_event_params);
  }
  addResourceTimingEntryForFailedSubframeNavigation(arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_completion_time, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_resource_lengths) {
    return this.$.addResourceTimingEntryForFailedSubframeNavigation(arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_completion_time, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_resource_lengths);
  }
  getScrollPosition() {
    return this.$.getScrollPosition();
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  getTextSurroundingSelection(arg_max_length) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec,
      [arg_max_length],
      false);
  }

  sendInterventionReport(arg_id, arg_message, arg_child_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec,
      null,
      [arg_id, arg_message, arg_child_frame_token],
      false);
  }

  setFrameOwnerProperties(arg_properties) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec,
      null,
      [arg_properties],
      false);
  }

  notifyUserActivation(arg_notification_type) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec,
      null,
      [arg_notification_type],
      false);
  }

  notifyVirtualKeyboardOverlayRect(arg_keyboard_rect) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec,
      null,
      [arg_keyboard_rect],
      false);
  }

  showInterestInElement(arg_nodeID) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec,
      null,
      [arg_nodeID],
      false);
  }

  addMessageToConsole(arg_level, arg_message, arg_discard_duplicates) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec,
      null,
      [arg_level, arg_message, arg_discard_duplicates],
      false);
  }

  swapInImmediately() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec,
      null,
      [],
      false);
  }

  checkCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  stopLoading() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec,
      null,
      [],
      false);
  }

  collapse(arg_collapsed) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec,
      null,
      [arg_collapsed],
      false);
  }

  enableViewSourceMode() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec,
      null,
      [],
      false);
  }

  focus() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec,
      null,
      [],
      false);
  }

  clearFocusedElement() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec,
      null,
      [],
      false);
  }

  copyImageAt(arg_window_point) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec,
      null,
      [arg_window_point],
      false);
  }

  saveImageAt(arg_window_point) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec,
      null,
      [arg_window_point],
      false);
  }

  reportBlinkFeatureUsage(arg_features) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec,
      null,
      [arg_features],
      false);
  }

  renderFallbackContent() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec,
      null,
      [],
      false);
  }

  beforeUnload(arg_is_reload, arg_force_to_proceed) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec,
      [arg_is_reload, arg_force_to_proceed],
      false);
  }

  mediaPlayerActionAt(arg_location, arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec,
      null,
      [arg_location, arg_action],
      false);
  }

  requestVideoFrameAtWithBoundsHint(arg_location, arg_max_size, arg_max_area) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec,
      [arg_location, arg_max_size, arg_max_area],
      false);
  }

  pluginActionAt(arg_location, arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec,
      null,
      [arg_location, arg_action],
      false);
  }

  advanceFocusInFrame(arg_focus_type, arg_source_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec,
      null,
      [arg_focus_type, arg_source_frame_token],
      false);
  }

  advanceFocusForIME(arg_focus_type) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec,
      null,
      [arg_focus_type],
      false);
  }

  reportContentSecurityPolicyViolation(arg_violation) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec,
      null,
      [arg_violation],
      false);
  }

  didUpdateFramePolicy(arg_frame_policy) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec,
      null,
      [arg_frame_policy],
      false);
  }

  onFrameVisibilityChanged(arg_visibility) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec,
      null,
      [arg_visibility],
      false);
  }

  postMessageEvent(arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec,
      null,
      [arg_source_frame_token, arg_source_origin, arg_target_origin, arg_message],
      false);
  }

  javaScriptMethodExecuteRequest(arg_object_name, arg_method_name, arg_arguments, arg_wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec,
      [arg_object_name, arg_method_name, arg_arguments, arg_wants_result],
      false);
  }

  javaScriptExecuteRequest(arg_javascript, arg_wants_result) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec,
      [arg_javascript, arg_wants_result],
      false);
  }

  javaScriptExecuteRequestForTests(arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec,
      [arg_javascript, arg_has_user_gesture, arg_resolve_promises, arg_honor_js_content_settings, arg_world_id],
      false);
  }

  javaScriptExecuteRequestInIsolatedWorld(arg_javascript, arg_wants_result, arg_world_id) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec,
      [arg_javascript, arg_wants_result, arg_world_id],
      false);
  }

  invokeScriptToolForInspector(arg_invocation_id, arg_tool_name, arg_input_arguments) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec,
      [arg_invocation_id, arg_tool_name, arg_input_arguments],
      false);
  }

  notifyInspectorOfCrossDocumentScriptToolResult(arg_invocation_id) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec,
      null,
      [arg_invocation_id],
      false);
  }

  bindReportingObserver(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  updateOpener(arg_opener_frame_token) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec,
      null,
      [arg_opener_frame_token],
      false);
  }

  getSavableResourceLinks() {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec,
      [],
      false);
  }

  mixedContentFound(arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec,
      null,
      [arg_main_resource_url, arg_mixed_content_url, arg_request_context, arg_was_allowed, arg_url_before_redirects, arg_had_redirect, arg_source_location],
      false);
  }

  bindDevToolsAgent(arg_agent_host, arg_agent) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec,
      null,
      [arg_agent_host, arg_agent],
      false);
  }

  handleRendererDebugURL(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  getCanonicalUrlForSharing() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec,
      [],
      false);
  }

  getOpenGraphMetadata() {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec,
      [],
      false);
  }

  setNavigationApiHistoryEntriesForRestore(arg_entry_arrays, arg_restore_reason) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec,
      null,
      [arg_entry_arrays, arg_restore_reason],
      false);
  }

  updatePrerenderURL(arg_matched_url) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec,
      [arg_matched_url],
      false);
  }

  notifyNavigationApiOfDisposedEntries(arg_keys) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec,
      null,
      [arg_keys],
      false);
  }

  traverseCancelled(arg_navigation_api_key, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec,
      null,
      [arg_navigation_api_key, arg_reason],
      false);
  }

  dispatchNavigateEventForCrossDocumentTraversal(arg_url, arg_page_state, arg_is_browser_initiated) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec,
      null,
      [arg_url, arg_page_state, arg_is_browser_initiated],
      false);
  }

  snapshotDocumentForViewTransition(arg_transition_token, arg_page_swap_event_params) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec,
      [arg_transition_token, arg_page_swap_event_params],
      false);
  }

  notifyViewTransitionAbortedToOldDocument() {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec,
      null,
      [],
      false);
  }

  dispatchPageSwap(arg_page_swap_event_params) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec,
      null,
      [arg_page_swap_event_params],
      false);
  }

  addResourceTimingEntryForFailedSubframeNavigation(arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_completion_time, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_resource_lengths) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec,
      null,
      [arg_subframe_token, arg_initial_url, arg_start_time, arg_redirect_time, arg_request_start, arg_response_start, arg_completion_time, arg_response_code, arg_mime_type, arg_load_timing_info, arg_connection_info, arg_alpn_negotiated_protocol, arg_is_secure_transport, arg_is_validated, arg_normalized_server_timing, arg_resource_lengths],
      false);
  }

  getScrollPosition() {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTextSurroundingSelection');
          const result = this.impl.getTextSurroundingSelection(params.arg_max_length);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getTextSurroundingSelection FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendInterventionReport');
          const result = this.impl.sendInterventionReport(params.arg_id, params.arg_message, params.arg_child_frame_token);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setFrameOwnerProperties');
          const result = this.impl.setFrameOwnerProperties(params.arg_properties);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyUserActivation');
          const result = this.impl.notifyUserActivation(params.arg_notification_type);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyVirtualKeyboardOverlayRect');
          const result = this.impl.notifyVirtualKeyboardOverlayRect(params.arg_keyboard_rect);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showInterestInElement');
          const result = this.impl.showInterestInElement(params.arg_nodeID);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addMessageToConsole');
          const result = this.impl.addMessageToConsole(params.arg_level, params.arg_message, params.arg_discard_duplicates);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.swapInImmediately');
          const result = this.impl.swapInImmediately();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.checkCompleted');
          const result = this.impl.checkCompleted();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopLoading');
          const result = this.impl.stopLoading();
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.collapse');
          const result = this.impl.collapse(params.arg_collapsed);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableViewSourceMode');
          const result = this.impl.enableViewSourceMode();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focus');
          const result = this.impl.focus();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearFocusedElement');
          const result = this.impl.clearFocusedElement();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.copyImageAt');
          const result = this.impl.copyImageAt(params.arg_window_point);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveImageAt');
          const result = this.impl.saveImageAt(params.arg_window_point);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportBlinkFeatureUsage');
          const result = this.impl.reportBlinkFeatureUsage(params.arg_features);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.renderFallbackContent');
          const result = this.impl.renderFallbackContent();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.beforeUnload');
          const result = this.impl.beforeUnload(params.arg_is_reload, params.arg_force_to_proceed);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] beforeUnload FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mediaPlayerActionAt');
          const result = this.impl.mediaPlayerActionAt(params.arg_location, params.arg_action);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestVideoFrameAtWithBoundsHint');
          const result = this.impl.requestVideoFrameAtWithBoundsHint(params.arg_location, params.arg_max_size, params.arg_max_area);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestVideoFrameAtWithBoundsHint FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pluginActionAt');
          const result = this.impl.pluginActionAt(params.arg_location, params.arg_action);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.advanceFocusInFrame');
          const result = this.impl.advanceFocusInFrame(params.arg_focus_type, params.arg_source_frame_token);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.advanceFocusForIME');
          const result = this.impl.advanceFocusForIME(params.arg_focus_type);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportContentSecurityPolicyViolation');
          const result = this.impl.reportContentSecurityPolicyViolation(params.arg_violation);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didUpdateFramePolicy');
          const result = this.impl.didUpdateFramePolicy(params.arg_frame_policy);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFrameVisibilityChanged');
          const result = this.impl.onFrameVisibilityChanged(params.arg_visibility);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.postMessageEvent');
          const result = this.impl.postMessageEvent(params.arg_source_frame_token, params.arg_source_origin, params.arg_target_origin, params.arg_message);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptMethodExecuteRequest');
          const result = this.impl.javaScriptMethodExecuteRequest(params.arg_object_name, params.arg_method_name, params.arg_arguments, params.arg_wants_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] javaScriptMethodExecuteRequest FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptExecuteRequest');
          const result = this.impl.javaScriptExecuteRequest(params.arg_javascript, params.arg_wants_result);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] javaScriptExecuteRequest FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptExecuteRequestForTests');
          const result = this.impl.javaScriptExecuteRequestForTests(params.arg_javascript, params.arg_has_user_gesture, params.arg_resolve_promises, params.arg_honor_js_content_settings, params.arg_world_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] javaScriptExecuteRequestForTests FAILED:', e));
          }
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.javaScriptExecuteRequestInIsolatedWorld');
          const result = this.impl.javaScriptExecuteRequestInIsolatedWorld(params.arg_javascript, params.arg_wants_result, params.arg_world_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] javaScriptExecuteRequestInIsolatedWorld FAILED:', e));
          }
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.invokeScriptToolForInspector');
          const result = this.impl.invokeScriptToolForInspector(params.arg_invocation_id, params.arg_tool_name, params.arg_input_arguments);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] invokeScriptToolForInspector FAILED:', e));
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyInspectorOfCrossDocumentScriptToolResult');
          const result = this.impl.notifyInspectorOfCrossDocumentScriptToolResult(params.arg_invocation_id);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindReportingObserver');
          const result = this.impl.bindReportingObserver(params.arg_receiver);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateOpener');
          const result = this.impl.updateOpener(params.arg_opener_frame_token);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSavableResourceLinks');
          const result = this.impl.getSavableResourceLinks();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_reply' in response) ? response['arg_reply'] : response;
              const resp_obj = { 'arg_reply': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSavableResourceLinks FAILED:', e));
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.mixedContentFound');
          const result = this.impl.mixedContentFound(params.arg_main_resource_url, params.arg_mixed_content_url, params.arg_request_context, params.arg_was_allowed, params.arg_url_before_redirects, params.arg_had_redirect, params.arg_source_location);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.bindDevToolsAgent');
          const result = this.impl.bindDevToolsAgent(params.arg_agent_host, params.arg_agent);
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.handleRendererDebugURL');
          const result = this.impl.handleRendererDebugURL(params.arg_url);
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCanonicalUrlForSharing');
          const result = this.impl.getCanonicalUrlForSharing();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_canonical_url' in response) ? response['arg_canonical_url'] : response;
              const resp_obj = { 'arg_canonical_url': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getCanonicalUrlForSharing FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOpenGraphMetadata');
          const result = this.impl.getOpenGraphMetadata();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_metadata' in response) ? response['arg_metadata'] : response;
              const resp_obj = { 'arg_metadata': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOpenGraphMetadata FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNavigationApiHistoryEntriesForRestore');
          const result = this.impl.setNavigationApiHistoryEntriesForRestore(params.arg_entry_arrays, params.arg_restore_reason);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePrerenderURL');
          const result = this.impl.updatePrerenderURL(params.arg_matched_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updatePrerenderURL FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyNavigationApiOfDisposedEntries');
          const result = this.impl.notifyNavigationApiOfDisposedEntries(params.arg_keys);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.traverseCancelled');
          const result = this.impl.traverseCancelled(params.arg_navigation_api_key, params.arg_reason);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchNavigateEventForCrossDocumentTraversal');
          const result = this.impl.dispatchNavigateEventForCrossDocumentTraversal(params.arg_url, params.arg_page_state, params.arg_is_browser_initiated);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.snapshotDocumentForViewTransition');
          const result = this.impl.snapshotDocumentForViewTransition(params.arg_transition_token, params.arg_page_swap_event_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_view_transition_state' in response) ? response['arg_view_transition_state'] : response;
              const resp_obj = { 'arg_view_transition_state': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] snapshotDocumentForViewTransition FAILED:', e));
          }
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyViewTransitionAbortedToOldDocument');
          const result = this.impl.notifyViewTransitionAbortedToOldDocument();
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dispatchPageSwap');
          const result = this.impl.dispatchPageSwap(params.arg_page_swap_event_params);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addResourceTimingEntryForFailedSubframeNavigation');
          const result = this.impl.addResourceTimingEntryForFailedSubframeNavigation(params.arg_subframe_token, params.arg_initial_url, params.arg_start_time, params.arg_redirect_time, params.arg_request_start, params.arg_response_start, params.arg_completion_time, params.arg_response_code, params.arg_mime_type, params.arg_load_timing_info, params.arg_connection_info, params.arg_alpn_negotiated_protocol, params.arg_is_secure_transport, params.arg_is_validated, params.arg_normalized_server_timing, params.arg_resource_lengths);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getScrollPosition');
          const result = this.impl.getScrollPosition();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_scroll_position' in response) ? response['arg_scroll_position'] : response;
              const resp_obj = { 'arg_scroll_position': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getScrollPosition FAILED:', e));
          }
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.LocalFrameReceiver = mojo.internal.bindings.blink.mojom.LocalFrameReceiver;

mojo.internal.bindings.blink.mojom.LocalFramePtr = mojo.internal.bindings.blink.mojom.LocalFrameRemote;
mojo.internal.bindings.blink.mojom.LocalFrameRequest = mojo.internal.bindings.blink.mojom.LocalFramePendingReceiver;


// Interface: LocalMainFrame
mojo.internal.bindings.blink.mojom.LocalMainFramePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalMainFrame';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalMainFramePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalMainFrameRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  animateDoubleTapZoom(arg_point, arg_rect) {
    return this.$.animateDoubleTapZoom(arg_point, arg_rect);
  }
  setScaleFactor(arg_scale) {
    return this.$.setScaleFactor(arg_scale);
  }
  closePage() {
    return this.$.closePage();
  }
  getFullPageSize() {
    return this.$.getFullPageSize();
  }
  setInitialFocus(arg_reverse) {
    return this.$.setInitialFocus(arg_reverse);
  }
  enablePreferredSizeChangedMode() {
    return this.$.enablePreferredSizeChangedMode();
  }
  zoomToFindInPageRect(arg_rect_in_root_frame) {
    return this.$.zoomToFindInPageRect(arg_rect_in_root_frame);
  }
  installCoopAccessMonitor(arg_accessed_window, arg_coop_reporter_info) {
    return this.$.installCoopAccessMonitor(arg_accessed_window, arg_coop_reporter_info);
  }
  updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications) {
    return this.$.updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications);
  }
  setV8CompileHints(arg_data) {
    return this.$.setV8CompileHints(arg_data);
  }
  discard() {
    return this.$.discard();
  }
  finalizeNavigationConfidence(arg_randomized_trigger_rate, arg_confidence) {
    return this.$.finalizeNavigationConfidence(arg_randomized_trigger_rate, arg_confidence);
  }
  notifyRelatedPagesFinalized(arg_has_other_related_pages) {
    return this.$.notifyRelatedPagesFinalized(arg_has_other_related_pages);
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  animateDoubleTapZoom(arg_point, arg_rect) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec,
      null,
      [arg_point, arg_rect],
      false);
  }

  setScaleFactor(arg_scale) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec,
      null,
      [arg_scale],
      false);
  }

  closePage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec,
      [],
      false);
  }

  getFullPageSize() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec,
      [],
      false);
  }

  setInitialFocus(arg_reverse) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec,
      null,
      [arg_reverse],
      false);
  }

  enablePreferredSizeChangedMode() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec,
      null,
      [],
      false);
  }

  zoomToFindInPageRect(arg_rect_in_root_frame) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec,
      null,
      [arg_rect_in_root_frame],
      false);
  }

  installCoopAccessMonitor(arg_accessed_window, arg_coop_reporter_info) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec,
      null,
      [arg_accessed_window, arg_coop_reporter_info],
      false);
  }

  updateBrowserControlsState(arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec,
      null,
      [arg_constraints, arg_current, arg_animate, arg_offset_tag_modifications],
      false);
  }

  setV8CompileHints(arg_data) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec,
      null,
      [arg_data],
      false);
  }

  discard() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec,
      [],
      false);
  }

  finalizeNavigationConfidence(arg_randomized_trigger_rate, arg_confidence) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec,
      null,
      [arg_randomized_trigger_rate, arg_confidence],
      false);
  }

  notifyRelatedPagesFinalized(arg_has_other_related_pages) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec,
      null,
      [arg_has_other_related_pages],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalMainFrame.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalMainFrameRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalMainFrame',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalMainFrameReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrame', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.animateDoubleTapZoom');
          const result = this.impl.animateDoubleTapZoom(params.arg_point, params.arg_rect);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setScaleFactor');
          const result = this.impl.setScaleFactor(params.arg_scale);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePage');
          const result = this.impl.closePage();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] closePage FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getFullPageSize');
          const result = this.impl.getFullPageSize();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_full_page_size' in response) ? response['arg_full_page_size'] : response;
              const resp_obj = { 'arg_full_page_size': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getFullPageSize FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setInitialFocus');
          const result = this.impl.setInitialFocus(params.arg_reverse);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enablePreferredSizeChangedMode');
          const result = this.impl.enablePreferredSizeChangedMode();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.zoomToFindInPageRect');
          const result = this.impl.zoomToFindInPageRect(params.arg_rect_in_root_frame);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.installCoopAccessMonitor');
          const result = this.impl.installCoopAccessMonitor(params.arg_accessed_window, params.arg_coop_reporter_info);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateBrowserControlsState');
          const result = this.impl.updateBrowserControlsState(params.arg_constraints, params.arg_current, params.arg_animate, params.arg_offset_tag_modifications);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setV8CompileHints');
          const result = this.impl.setV8CompileHints(params.arg_data);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.discard');
          const result = this.impl.discard();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] discard FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.finalizeNavigationConfidence');
          const result = this.impl.finalizeNavigationConfidence(params.arg_randomized_trigger_rate, params.arg_confidence);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyRelatedPagesFinalized');
          const result = this.impl.notifyRelatedPagesFinalized(params.arg_has_other_related_pages);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameReceiver = mojo.internal.bindings.blink.mojom.LocalMainFrameReceiver;

mojo.internal.bindings.blink.mojom.LocalMainFramePtr = mojo.internal.bindings.blink.mojom.LocalMainFrameRemote;
mojo.internal.bindings.blink.mojom.LocalMainFrameRequest = mojo.internal.bindings.blink.mojom.LocalMainFramePendingReceiver;


// Interface: LocalMainFrameHost
mojo.internal.bindings.blink.mojom.LocalMainFrameHostPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemote = class {
  static get $interfaceName() {
    return 'blink.mojom.LocalMainFrameHost';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.blink.mojom.LocalMainFrameHostPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scaleFactorChanged(arg_scale) {
    return this.$.scaleFactorChanged(arg_scale);
  }
  contentsPreferredSizeChanged(arg_pref_size) {
    return this.$.contentsPreferredSizeChanged(arg_pref_size);
  }
  focusPage() {
    return this.$.focusPage();
  }
  takeFocus(arg_reverse) {
    return this.$.takeFocus(arg_reverse);
  }
  updateTargetURL(arg_url) {
    return this.$.updateTargetURL(arg_url);
  }
  requestClose() {
    return this.$.requestClose();
  }
  setWindowRect(arg_bounds) {
    return this.$.setWindowRect(arg_bounds);
  }
  didFirstVisuallyNonEmptyPaint() {
    return this.$.didFirstVisuallyNonEmptyPaint();
  }
  didAccessInitialMainDocument() {
    return this.$.didAccessInitialMainDocument();
  }
  didChangeThemeColor(arg_theme_color) {
    return this.$.didChangeThemeColor(arg_theme_color);
  }
  didChangeBackgroundColor(arg_background_color, arg_color_adjust) {
    return this.$.didChangeBackgroundColor(arg_background_color, arg_color_adjust);
  }
  maximize() {
    return this.$.maximize();
  }
  minimize() {
    return this.$.minimize();
  }
  restore() {
    return this.$.restore();
  }
  setResizable(arg_resizable) {
    return this.$.setResizable(arg_resizable);
  }
  draggableRegionsChanged(arg_regions) {
    return this.$.draggableRegionsChanged(arg_regions);
  }
  onFirstContentfulPaint(arg_duration) {
    return this.$.onFirstContentfulPaint(arg_duration);
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  scaleFactorChanged(arg_scale) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec,
      null,
      [arg_scale],
      false);
  }

  contentsPreferredSizeChanged(arg_pref_size) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec,
      null,
      [arg_pref_size],
      false);
  }

  focusPage() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec,
      null,
      [],
      false);
  }

  takeFocus(arg_reverse) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec,
      null,
      [arg_reverse],
      false);
  }

  updateTargetURL(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec,
      [arg_url],
      false);
  }

  requestClose() {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec,
      null,
      [],
      false);
  }

  setWindowRect(arg_bounds) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec,
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec,
      [arg_bounds],
      false);
  }

  didFirstVisuallyNonEmptyPaint() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec,
      null,
      [],
      false);
  }

  didAccessInitialMainDocument() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec,
      null,
      [],
      false);
  }

  didChangeThemeColor(arg_theme_color) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec,
      null,
      [arg_theme_color],
      false);
  }

  didChangeBackgroundColor(arg_background_color, arg_color_adjust) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec,
      null,
      [arg_background_color, arg_color_adjust],
      false);
  }

  maximize() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec,
      null,
      [],
      false);
  }

  minimize() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec,
      null,
      [],
      false);
  }

  restore() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec,
      null,
      [],
      false);
  }

  setResizable(arg_resizable) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec,
      null,
      [arg_resizable],
      false);
  }

  draggableRegionsChanged(arg_regions) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec,
      null,
      [arg_regions],
      false);
  }

  onFirstContentfulPaint(arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec,
      null,
      [arg_duration],
      false);
  }

};

mojo.internal.bindings.blink.mojom.LocalMainFrameHost.getRemote = function() {
  let remote = new mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'blink.mojom.LocalMainFrameHost',
    'context');
  return remote.$;
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('blink.mojom.LocalMainFrameHost', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
    ordinals.forEach((ord, idx) => {
      this.ordinalMap.set(ord, idx); // Scrambled/Explicit
    });
    console.log('[GeneratedReceiver] Constructed for ' + this.impl);
  }
  mapOrdinal(hash, id) { this.ordinalMap.set(hash, id); }
  bind(handle) {
    console.log('[GeneratedReceiver] Binding handle...');
    this.router_ = new mojo.internal.interfaceSupport.Router(handle, false);
    this.endpoint = new mojo.internal.interfaceSupport.Endpoint(this.router_);
    this.endpoint.start({ onError: function() { console.log('[GeneratedReceiver] Endpoint Error'); },
      onMessageReceived: (...args) => {
      try {
      console.log('[GeneratedReceiver] FRESH LOADER: Args received', args);
      let message = args[0];
      // Handle decomposed arguments from internal runtime (endpoint, header, buffer, handles)
      if (args.length > 1 && args[0] instanceof mojo.internal.interfaceSupport.Endpoint) {
        // Create a view of ONLY the payload (skipping the header)
        let payload = args[2];
        const headerSize = args[1].headerSize;
        if (payload instanceof ArrayBuffer) {
           payload = new DataView(payload, headerSize);
        }
        message = {
          header: args[1],
          payload: payload,
          handles: args[3] || []
        };
      }
      const header = message && message.header;
      if (!header) return;
      let dispatchId = this.ordinalMap.get(header.ordinal);
      if (dispatchId === undefined) {
           console.warn('[GeneratedReceiver] Failed to discover ordinal ' + header.ordinal);
           return;
      }
      console.log('[GeneratedReceiver] Dispatching ordinal:', header.ordinal, 'as ID:', dispatchId);
      
      // FEEDBACK LOOP: Report the wire truth to the learner
      this.mapOrdinal(header.ordinal, dispatchId);
      
      switch (dispatchId) {
        case 0: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scaleFactorChanged');
          const result = this.impl.scaleFactorChanged(params.arg_scale);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.contentsPreferredSizeChanged');
          const result = this.impl.contentsPreferredSizeChanged(params.arg_pref_size);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.focusPage');
          const result = this.impl.focusPage();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.takeFocus');
          const result = this.impl.takeFocus(params.arg_reverse);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateTargetURL');
          const result = this.impl.updateTargetURL(params.arg_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateTargetURL FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestClose');
          const result = this.impl.requestClose();
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setWindowRect');
          const result = this.impl.setWindowRect(params.arg_bounds);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setWindowRect FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didFirstVisuallyNonEmptyPaint');
          const result = this.impl.didFirstVisuallyNonEmptyPaint();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didAccessInitialMainDocument');
          const result = this.impl.didAccessInitialMainDocument();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeThemeColor');
          const result = this.impl.didChangeThemeColor(params.arg_theme_color);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.didChangeBackgroundColor');
          const result = this.impl.didChangeBackgroundColor(params.arg_background_color, params.arg_color_adjust);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maximize');
          const result = this.impl.maximize();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.minimize');
          const result = this.impl.minimize();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.restore');
          const result = this.impl.restore();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setResizable');
          const result = this.impl.setResizable(params.arg_resizable);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.draggableRegionsChanged');
          const result = this.impl.draggableRegionsChanged(params.arg_regions);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFirstContentfulPaint');
          const result = this.impl.onFirstContentfulPaint(params.arg_duration);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.blink.mojom.LocalMainFrameHostReceiver = mojo.internal.bindings.blink.mojom.LocalMainFrameHostReceiver;

mojo.internal.bindings.blink.mojom.LocalMainFrameHostPtr = mojo.internal.bindings.blink.mojom.LocalMainFrameHostRemote;
mojo.internal.bindings.blink.mojom.LocalMainFrameHostRequest = mojo.internal.bindings.blink.mojom.LocalMainFrameHostPendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Struct: SavableSubframe
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SavableSubframeSpec, 'blink.mojom.SavableSubframe', [
      mojo.internal.StructField('arg_original_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_subframe_token', 8, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: GetSavableResourceLinksReply
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec, 'blink.mojom.GetSavableResourceLinksReply', [
      mojo.internal.StructField('arg_resources_list', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 8, 0, mojo.internal.bindings.blink.mojom.ReferrerSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_subframes', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.SavableSubframeSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: FindInPageResultAXParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec, 'blink.mojom.FindInPageResultAXParams', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_match_index', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_start_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_start_offset', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_id', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_offset', 20, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: DownloadURLParams
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec, 'blink.mojom.DownloadURLParams', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 8, 0, mojo.internal.bindings.blink.mojom.ReferrerSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_initiator_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_suggested_name', 24, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_redirects', 32, 0, mojo.internal.bindings.network.mojom.RedirectModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_blob_url_token', 36, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobURLTokenRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_data_url_blob', 44, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.BlobRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_is_context_menu_save', 52, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 52, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: IframeAttributes
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.IframeAttributesSpec, 'blink.mojom.IframeAttributes', [
      mojo.internal.StructField('arg_parsed_csp_attribute', 0, 0, mojo.internal.bindings.network.mojom.ContentSecurityPolicySpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_credentialless', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browsing_topics', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ad_auction_headers', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shared_storage_writable_opted_in', 8, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_name', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_src', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: LegacyTechEventCodeLocation
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec, 'blink.mojom.LegacyTechEventCodeLocation', [
      mojo.internal.StructField('arg_filename', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_line', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_column', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SubframeResourceLengths
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.SubframeResourceLengthsSpec, 'blink.mojom.SubframeResourceLengths', [
      mojo.internal.StructField('arg_encoded_data_length', 0, 0, mojo.internal.bindings.mojo_base.mojom.ByteSizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_encoded_body_length', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteSizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_decoded_body_length', 16, 0, mojo.internal.bindings.mojo_base.mojom.ByteSizeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);
mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.UnboundedSurfaceClient_OnDismissed_ParamsSpec, 'blink.mojom.UnboundedSurfaceClient_OnDismissed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ParamsSpec, 'blink.mojom.LocalFrameHost_EnterFullscreen_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.blink.mojom.FullscreenOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_EnterFullscreen_ResponseParams', [
      mojo.internal.StructField('arg_granted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ExitFullscreen_ParamsSpec, 'blink.mojom.LocalFrameHost_ExitFullscreen_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_FullscreenStateChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FullscreenStateChanged_Params', [
      mojo.internal.StructField('arg_is_fullscreen', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.blink.mojom.FullscreenOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RegisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_RegisterProtocolHandler_Params', [
      mojo.internal.StructField('arg_scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UnregisterProtocolHandler_ParamsSpec, 'blink.mojom.LocalFrameHost_UnregisterProtocolHandler_Params', [
      mojo.internal.StructField('arg_scheme', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_gesture', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDisplayInsecureContent_ParamsSpec, 'blink.mojom.LocalFrameHost_DidDisplayInsecureContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidContainInsecureFormAction_ParamsSpec, 'blink.mojom.LocalFrameHost_DidContainInsecureFormAction_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_MainDocumentElementAvailable_ParamsSpec, 'blink.mojom.LocalFrameHost_MainDocumentElementAvailable_Params', [
      mojo.internal.StructField('arg_uses_temporary_zoom_level', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_ParamsSpec, 'blink.mojom.LocalFrameHost_SetNeedsOcclusionTracking_Params', [
      mojo.internal.StructField('arg_needs_tracking', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_ParamsSpec, 'blink.mojom.LocalFrameHost_SetVirtualKeyboardMode_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ui.mojom.VirtualKeyboardModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_VisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_VisibilityChanged_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.blink.mojom.FrameVisibilitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFailLoadWithError_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFailLoadWithError_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_error_code', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFocusFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFocusFrame_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidCallFocus_ParamsSpec, 'blink.mojom.LocalFrameHost_DidCallFocus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_ParamsSpec, 'blink.mojom.LocalFrameHost_EnforceInsecureRequestPolicy_Params', [
      mojo.internal.StructField('arg_policy_bitmap', 0, 0, mojo.internal.bindings.blink.mojom.InsecureRequestPolicySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_ParamsSpec, 'blink.mojom.LocalFrameHost_EnforceInsecureNavigationsSet_Params', [
      mojo.internal.StructField('arg_set', 0, 0, mojo.internal.Array(mojo.internal.Uint32, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_SuddenTerminationDisablerChanged_Params', [
      mojo.internal.StructField('arg_present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disabler_type', 4, 0, mojo.internal.bindings.blink.mojom.SuddenTerminationDisablerTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_HadStickyUserActivationBeforeNavigationChanged_Params', [
      mojo.internal.StructField('arg_has_gesture', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_ScrollRectToVisibleInParentFrame_Params', [
      mojo.internal.StructField('arg_rect_to_scroll', 0, 0, mojo.internal.bindings.gfx.mojom.RectFSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.blink.mojom.ScrollIntoViewParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_BubbleLogicalScrollInParentFrame_Params', [
      mojo.internal.StructField('arg_direction', 0, 0, mojo.internal.bindings.blink.mojom.ScrollDirectionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_granularity', 4, 0, mojo.internal.bindings.ui.mojom.ScrollGranularitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_ParamsSpec, 'blink.mojom.LocalFrameHost_StartLoadingForAsyncNavigationApiCommit_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidBlockNavigation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidBlockNavigation_Params', [
      mojo.internal.StructField('arg_blocked_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.blink.mojom.NavigationBlockedReasonSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeLoadProgress_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeLoadProgress_Params', [
      mojo.internal.StructField('arg_load_progress', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidFinishLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DidFinishLoad_Params', [
      mojo.internal.StructField('arg_validated_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DispatchLoad_ParamsSpec, 'blink.mojom.LocalFrameHost_DispatchLoad_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_GoToEntryAtOffset_ParamsSpec, 'blink.mojom.LocalFrameHost_GoToEntryAtOffset_Params', [
      mojo.internal.StructField('arg_offset', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_actual_navigation_start', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_soft_navigation_heuristics_task_id', 16, 0, mojo.internal.bindings.blink.mojom.TaskAttributionIdSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateToNavigationApiKey_Params', [
      mojo.internal.StructField('arg_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_actual_navigation_start', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_soft_navigation_heuristics_task_id', 24, 0, mojo.internal.bindings.blink.mojom.TaskAttributionIdSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_NavigateEventHandlerPresenceChanged_Params', [
      mojo.internal.StructField('arg_present', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateTitle_Params', [
      mojo.internal.StructField('arg_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateApplicationTitle_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateApplicationTitle_Params', [
      mojo.internal.StructField('arg_application_title', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateUserActivationState_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateUserActivationState_Params', [
      mojo.internal.StructField('arg_update_type', 0, 0, mojo.internal.bindings.blink.mojom.UserActivationUpdateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_notification_type', 4, 0, mojo.internal.bindings.blink.mojom.UserActivationNotificationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_ParamsSpec, 'blink.mojom.LocalFrameHost_DidConsumeHistoryUserActivation_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_ParamsSpec, 'blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageResult_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.FindInPageResultAXParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_ParamsSpec, 'blink.mojom.LocalFrameHost_HandleAccessibilityFindInPageTermination_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_ParamsSpec, 'blink.mojom.LocalFrameHost_DocumentOnLoadCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_ParamsSpec, 'blink.mojom.LocalFrameHost_ForwardResourceTimingToParent_Params', [
      mojo.internal.StructField('arg_timing', 0, 0, mojo.internal.bindings.blink.mojom.ResourceTimingInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_DidDispatchDOMContentLoadedEvent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_Params', [
      mojo.internal.StructField('arg_alert_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_disable_third_party_subframe_suppresion', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalAlertDialog_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalConfirmDialog_Params', [
      mojo.internal.StructField('arg_alert_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_disable_third_party_subframe_suppresion', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalConfirmDialog_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ParamsSpec, 'blink.mojom.LocalFrameHost_RunModalPromptDialog_Params', [
      mojo.internal.StructField('arg_alert_message', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_default_value', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_disable_third_party_subframe_suppresion', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunModalPromptDialog_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ParamsSpec, 'blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_Params', [
      mojo.internal.StructField('arg_is_reload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_RunBeforeUnloadConfirm_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_UpdateFaviconURL_ParamsSpec, 'blink.mojom.LocalFrameHost_UpdateFaviconURL_Params', [
      mojo.internal.StructField('arg_favicon_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.FaviconURLSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DownloadURL_ParamsSpec, 'blink.mojom.LocalFrameHost_DownloadURL_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.blink.mojom.DownloadURLParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_FocusedElementChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FocusedElementChanged_Params', [
      mojo.internal.StructField('arg_is_editable_element', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_richly_editable_element', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_focus_type', 4, 0, mojo.internal.bindings.blink.mojom.FocusTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds_in_frame_widget', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_TextSelectionChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_TextSelectionChanged_Params', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_range', 16, 0, mojo.internal.bindings.gfx.mojom.RangeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowPopupMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowPopupMenu_Params', [
      mojo.internal.StructField('arg_popup_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.PopupMenuClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_font_size', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_selected_item', 24, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_right_aligned', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_multiple_selection', 28, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_menu_items', 32, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.MenuItemSpec, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateNewPopupWidget_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateNewPopupWidget_Params', [
      mojo.internal.StructField('arg_popup_host', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.PopupWidgetHostPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_blink_widget_host', 4, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.WidgetHostPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_blink_widget', 8, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.WidgetRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ShowContextMenu_ParamsSpec, 'blink.mojom.LocalFrameHost_ShowContextMenu_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.ContextMenuClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.blink.mojom.UntrustworthyContextMenuParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_ParamsSpec, 'blink.mojom.LocalFrameHost_DidLoadResourceFromMemoryCache_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_destination', 24, 0, mojo.internal.bindings.network.mojom.RequestDestinationSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_credentials', 28, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFrameOwnerProperties_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_owner_properties', 16, 0, mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeOpener_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeOpener_Params', [
      mojo.internal.StructField('arg_opener_frame', 0, 0, mojo.internal.bindings.blink.mojom.LocalFrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeFramePolicy_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeFramePolicy_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_policy', 16, 0, mojo.internal.bindings.blink.mojom.FramePolicySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeIframeAttributes_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeIframeAttributes_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_attributes', 16, 0, mojo.internal.bindings.blink.mojom.IframeAttributesSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_ParamsSpec, 'blink.mojom.LocalFrameHost_CapturePaintPreviewOfSubframe_Params', [
      mojo.internal.StructField('arg_clip_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_guid', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetCloseListener_ParamsSpec, 'blink.mojom.LocalFrameHost_SetCloseListener_Params', [
      mojo.internal.StructField('arg_listener', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.blink.mojom.CloseListenerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_Detach_ParamsSpec, 'blink.mojom.LocalFrameHost_Detach_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_ParamsSpec, 'blink.mojom.LocalFrameHost_GetKeepAliveHandleFactory_Params', [
      mojo.internal.StructField('arg_factory', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.KeepAliveHandleFactoryPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidAddMessageToConsole_ParamsSpec, 'blink.mojom.LocalFrameHost_DidAddMessageToConsole_Params', [
      mojo.internal.StructField('arg_log_level', 0, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_line_number', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_msg', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_id', 16, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_untrusted_stack_trace', 24, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_FrameSizeChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_FrameSizeChanged_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidInferColorScheme_ParamsSpec, 'blink.mojom.LocalFrameHost_DidInferColorScheme_Params', [
      mojo.internal.StructField('arg_color_scheme', 0, 0, mojo.internal.bindings.blink.mojom.PreferredColorSchemeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_DidChangeSrcDoc_ParamsSpec, 'blink.mojom.LocalFrameHost_DidChangeSrcDoc_Params', [
      mojo.internal.StructField('arg_child_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_srcdoc_value', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_ParamsSpec, 'blink.mojom.LocalFrameHost_ReceivedDelegatedCapability_Params', [
      mojo.internal.StructField('arg_delegated_capability', 0, 0, mojo.internal.bindings.blink.mojom.DelegatedCapabilitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeacon_Params', [
      mojo.internal.StructField('arg_event_data', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_destinations', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ReportingDestinationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_exposed', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_ParamsSpec, 'blink.mojom.LocalFrameHost_SendFencedFrameReportingBeaconToCustomURL_Params', [
      mojo.internal.StructField('arg_destination_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_exposed', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendLegacyTechEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendLegacyTechEvent_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_code_location', 8, 0, mojo.internal.bindings.blink.mojom.LegacyTechEventCodeLocationSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_ParamsSpec, 'blink.mojom.LocalFrameHost_SetFencedFrameAutomaticBeaconReportEventData_Params', [
      mojo.internal.StructField('arg_event_type', 0, 0, mojo.internal.bindings.blink.mojom.AutomaticBeaconTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_once', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cross_origin_exposed', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_event_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_destinations', 16, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.ReportingDestinationSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_ParamsSpec, 'blink.mojom.LocalFrameHost_SendPrivateAggregationRequestsForFencedFrameEvent_Params', [
      mojo.internal.StructField('arg_event_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_CreateFencedFrame_ParamsSpec, 'blink.mojom.LocalFrameHost_CreateFencedFrame_Params', [
      mojo.internal.StructField('arg_fenced_frame', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.FencedFrameOwnerHostPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_frame_interfaces', 4, 0, mojo.internal.bindings.blink.mojom.RemoteFrameInterfacesFromRendererSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_frame_token', 16, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_frame_token', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_ParamsSpec, 'blink.mojom.LocalFrameHost_OnViewTransitionOptInChanged_Params', [
      mojo.internal.StructField('arg_view_transition_opt_in', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionSameOriginOptInSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_StartDragging_ParamsSpec, 'blink.mojom.LocalFrameHost_StartDragging_Params', [
      mojo.internal.StructField('arg_drag_data', 0, 0, mojo.internal.bindings.blink.mojom.DragDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_operations_allowed', 8, 0, mojo.internal.bindings.blink.mojom.AllowedDragOperationsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_image', 16, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cursor_offset_in_dip', 24, 0, mojo.internal.bindings.gfx.mojom.Vector2dSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_drag_obj_rect_in_dip', 32, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_event_info', 40, 0, mojo.internal.bindings.blink.mojom.DragEventSourceInfoSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_IssueKeepAliveHandle_ParamsSpec, 'blink.mojom.LocalFrameHost_IssueKeepAliveHandle_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.NavigationStateKeepAliveHandlePendingReceiver), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyStorageAccessed_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyStorageAccessed_Params', [
      mojo.internal.StructField('arg_storageType', 0, 0, mojo.internal.bindings.blink.mojom.StorageTypeAccessedSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_blocked', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_ParamsSpec, 'blink.mojom.LocalFrameHost_RecordWindowProxyUsageMetrics_Params', [
      mojo.internal.StructField('arg_target_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_access_type', 16, 0, mojo.internal.bindings.blink.mojom.WindowProxyAccessTypeSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_NotifyDocumentInteractive_ParamsSpec, 'blink.mojom.LocalFrameHost_NotifyDocumentInteractive_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportContext_Params', [
      mojo.internal.StructField('arg_length', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParamsSpec, 'blink.mojom.LocalFrameHost_InitializeCrashReportContext_ResponseParams', [
      mojo.internal.StructField('arg_region', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnsafeSharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrameHost_RequestUnboundedSurface_ParamsSpec, 'blink.mojom.LocalFrameHost_RequestUnboundedSurface_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.UnboundedSurfaceHostPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 4, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.UnboundedSurfaceClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_ParamsSpec, 'blink.mojom.NonAssociatedLocalFrameHost_MaybeStartOutermostMainFrameNavigation_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ParamsSpec, 'blink.mojom.LocalFrame_GetTextSurroundingSelection_Params', [
      mojo.internal.StructField('arg_max_length', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetTextSurroundingSelection_ResponseParams', [
      mojo.internal.StructField('arg_content', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_offset', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_end_offset', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SendInterventionReport_ParamsSpec, 'blink.mojom.LocalFrame_SendInterventionReport_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_child_frame_token', 16, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SetFrameOwnerProperties_ParamsSpec, 'blink.mojom.LocalFrame_SetFrameOwnerProperties_Params', [
      mojo.internal.StructField('arg_properties', 0, 0, mojo.internal.bindings.blink.mojom.FrameOwnerPropertiesSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyUserActivation_ParamsSpec, 'blink.mojom.LocalFrame_NotifyUserActivation_Params', [
      mojo.internal.StructField('arg_notification_type', 0, 0, mojo.internal.bindings.blink.mojom.UserActivationNotificationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_ParamsSpec, 'blink.mojom.LocalFrame_NotifyVirtualKeyboardOverlayRect_Params', [
      mojo.internal.StructField('arg_keyboard_rect', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ShowInterestInElement_ParamsSpec, 'blink.mojom.LocalFrame_ShowInterestInElement_Params', [
      mojo.internal.StructField('arg_nodeID', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AddMessageToConsole_ParamsSpec, 'blink.mojom.LocalFrame_AddMessageToConsole_Params', [
      mojo.internal.StructField('arg_level', 0, 0, mojo.internal.bindings.blink.mojom.ConsoleMessageLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_discard_duplicates', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SwapInImmediately_ParamsSpec, 'blink.mojom.LocalFrame_SwapInImmediately_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_CheckCompleted_ParamsSpec, 'blink.mojom.LocalFrame_CheckCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_StopLoading_ParamsSpec, 'blink.mojom.LocalFrame_StopLoading_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_Collapse_ParamsSpec, 'blink.mojom.LocalFrame_Collapse_Params', [
      mojo.internal.StructField('arg_collapsed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_EnableViewSourceMode_ParamsSpec, 'blink.mojom.LocalFrame_EnableViewSourceMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_Focus_ParamsSpec, 'blink.mojom.LocalFrame_Focus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ClearFocusedElement_ParamsSpec, 'blink.mojom.LocalFrame_ClearFocusedElement_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_CopyImageAt_ParamsSpec, 'blink.mojom.LocalFrame_CopyImageAt_Params', [
      mojo.internal.StructField('arg_window_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SaveImageAt_ParamsSpec, 'blink.mojom.LocalFrame_SaveImageAt_Params', [
      mojo.internal.StructField('arg_window_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ReportBlinkFeatureUsage_ParamsSpec, 'blink.mojom.LocalFrame_ReportBlinkFeatureUsage_Params', [
      mojo.internal.StructField('arg_features', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.WebFeatureSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_RenderFallbackContent_ParamsSpec, 'blink.mojom.LocalFrame_RenderFallbackContent_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ParamsSpec, 'blink.mojom.LocalFrame_BeforeUnload_Params', [
      mojo.internal.StructField('arg_is_reload', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_force_to_proceed', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BeforeUnload_ResponseParamsSpec, 'blink.mojom.LocalFrame_BeforeUnload_ResponseParams', [
      mojo.internal.StructField('arg_proceed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_before_unload_start_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_before_unload_end_time', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_before_unload_dialog_opened_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_before_unload_dialog_closed_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_MediaPlayerActionAt_ParamsSpec, 'blink.mojom.LocalFrame_MediaPlayerActionAt_Params', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_action', 8, 0, mojo.internal.bindings.blink.mojom.MediaPlayerActionSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_Params', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_size', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_area', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParamsSpec, 'blink.mojom.LocalFrame_RequestVideoFrameAtWithBoundsHint_ResponseParams', [
      mojo.internal.StructField('arg_bitmap', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_bounds', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_PluginActionAt_ParamsSpec, 'blink.mojom.LocalFrame_PluginActionAt_Params', [
      mojo.internal.StructField('arg_location', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_action', 8, 0, mojo.internal.bindings.blink.mojom.PluginActionTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusInFrame_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusInFrame_Params', [
      mojo.internal.StructField('arg_focus_type', 0, 0, mojo.internal.bindings.blink.mojom.FocusTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_frame_token', 8, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AdvanceFocusForIME_ParamsSpec, 'blink.mojom.LocalFrame_AdvanceFocusForIME_Params', [
      mojo.internal.StructField('arg_focus_type', 0, 0, mojo.internal.bindings.blink.mojom.FocusTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_ParamsSpec, 'blink.mojom.LocalFrame_ReportContentSecurityPolicyViolation_Params', [
      mojo.internal.StructField('arg_violation', 0, 0, mojo.internal.bindings.network.mojom.CSPViolationSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_DidUpdateFramePolicy_ParamsSpec, 'blink.mojom.LocalFrame_DidUpdateFramePolicy_Params', [
      mojo.internal.StructField('arg_frame_policy', 0, 0, mojo.internal.bindings.blink.mojom.FramePolicySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_OnFrameVisibilityChanged_ParamsSpec, 'blink.mojom.LocalFrame_OnFrameVisibilityChanged_Params', [
      mojo.internal.StructField('arg_visibility', 0, 0, mojo.internal.bindings.blink.mojom.FrameVisibilitySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_PostMessageEvent_ParamsSpec, 'blink.mojom.LocalFrame_PostMessageEvent_Params', [
      mojo.internal.StructField('arg_source_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.RemoteFrameTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_target_origin', 16, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_message', 24, 0, mojo.internal.bindings.blink.mojom.TransferableMessageSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_Params', [
      mojo.internal.StructField('arg_object_name', 0, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_method_name', 8, 0, mojo.internal.bindings.mojo_base.mojom.String16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_arguments', 16, 0, mojo.internal.bindings.mojo_base.mojom.ListValueSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_wants_result', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptMethodExecuteRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_wants_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequest_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_has_user_gesture', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_resolve_promises', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_honor_js_content_settings', 8, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_world_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestForTests_ResponseParams', [
      mojo.internal.StructField('arg_result_type', 0, 0, mojo.internal.bindings.blink.mojom.JavaScriptExecutionResultTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_result', 8, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_Params', [
      mojo.internal.StructField('arg_javascript', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigString16Spec, null, false, 0, undefined),
      mojo.internal.StructField('arg_wants_result', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_world_id', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParamsSpec, 'blink.mojom.LocalFrame_JavaScriptExecuteRequestInIsolatedWorld_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.mojo_base.mojom.ValueSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ParamsSpec, 'blink.mojom.LocalFrame_InvokeScriptToolForInspector_Params', [
      mojo.internal.StructField('arg_invocation_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_tool_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_arguments', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParamsSpec, 'blink.mojom.LocalFrame_InvokeScriptToolForInspector_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_ParamsSpec, 'blink.mojom.LocalFrame_NotifyInspectorOfCrossDocumentScriptToolResult_Params', [
      mojo.internal.StructField('arg_invocation_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BindReportingObserver_ParamsSpec, 'blink.mojom.LocalFrame_BindReportingObserver_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.blink.mojom.ReportingObserverPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_UpdateOpener_ParamsSpec, 'blink.mojom.LocalFrame_UpdateOpener_Params', [
      mojo.internal.StructField('arg_opener_frame_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetSavableResourceLinks_ResponseParams', [
      mojo.internal.StructField('arg_reply', 0, 0, mojo.internal.bindings.blink.mojom.GetSavableResourceLinksReplySpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_MixedContentFound_ParamsSpec, 'blink.mojom.LocalFrame_MixedContentFound_Params', [
      mojo.internal.StructField('arg_main_resource_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mixed_content_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_context', 16, 0, mojo.internal.bindings.blink.mojom.RequestContextTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_was_allowed', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_had_redirect', 20, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_url_before_redirects', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_location', 32, 0, mojo.internal.bindings.network.mojom.SourceLocationSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_BindDevToolsAgent_ParamsSpec, 'blink.mojom.LocalFrame_BindDevToolsAgent_Params', [
      mojo.internal.StructField('arg_agent_host', 0, 0, mojo.internal.AssociatedInterfaceProxy(mojo.internal.bindings.blink.mojom.DevToolsAgentHostRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_agent', 8, 0, mojo.internal.AssociatedInterfaceRequest(mojo.internal.bindings.blink.mojom.DevToolsAgentPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_HandleRendererDebugURL_ParamsSpec, 'blink.mojom.LocalFrame_HandleRendererDebugURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetCanonicalUrlForSharing_ResponseParams', [
      mojo.internal.StructField('arg_canonical_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetOpenGraphMetadata_ResponseParams', [
      mojo.internal.StructField('arg_metadata', 0, 0, mojo.internal.bindings.blink.mojom.OpenGraphMetadataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_ParamsSpec, 'blink.mojom.LocalFrame_SetNavigationApiHistoryEntriesForRestore_Params', [
      mojo.internal.StructField('arg_entry_arrays', 0, 0, mojo.internal.bindings.blink.mojom.NavigationApiHistoryEntryArraysSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_restore_reason', 8, 0, mojo.internal.bindings.blink.mojom.NavigationApiEntryRestoreReasonSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ParamsSpec, 'blink.mojom.LocalFrame_UpdatePrerenderURL_Params', [
      mojo.internal.StructField('arg_matched_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParamsSpec, 'blink.mojom.LocalFrame_UpdatePrerenderURL_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_ParamsSpec, 'blink.mojom.LocalFrame_NotifyNavigationApiOfDisposedEntries_Params', [
      mojo.internal.StructField('arg_keys', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_TraverseCancelled_ParamsSpec, 'blink.mojom.LocalFrame_TraverseCancelled_Params', [
      mojo.internal.StructField('arg_navigation_api_key', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.blink.mojom.TraverseCancelledReasonSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_ParamsSpec, 'blink.mojom.LocalFrame_DispatchNavigateEventForCrossDocumentTraversal_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_state', 8, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_browser_initiated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_Params', [
      mojo.internal.StructField('arg_transition_token', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_page_swap_event_params', 8, 0, mojo.internal.bindings.blink.mojom.PageSwapEventParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParamsSpec, 'blink.mojom.LocalFrame_SnapshotDocumentForViewTransition_ResponseParams', [
      mojo.internal.StructField('arg_view_transition_state', 0, 0, mojo.internal.bindings.blink.mojom.ViewTransitionStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_ParamsSpec, 'blink.mojom.LocalFrame_NotifyViewTransitionAbortedToOldDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_DispatchPageSwap_ParamsSpec, 'blink.mojom.LocalFrame_DispatchPageSwap_Params', [
      mojo.internal.StructField('arg_page_swap_event_params', 0, 0, mojo.internal.bindings.blink.mojom.PageSwapEventParamsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_ParamsSpec, 'blink.mojom.LocalFrame_AddResourceTimingEntryForFailedSubframeNavigation_Params', [
      mojo.internal.StructField('arg_subframe_token', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_initial_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_start_time', 24, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_redirect_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_request_start', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_start', 48, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_completion_time', 56, 0, mojo.internal.bindings.mojo_base.mojom.TimeTicksSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_code', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_connection_info', 68, 0, mojo.internal.bindings.network.mojom.ConnectionInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 72, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_load_timing_info', 80, 0, mojo.internal.bindings.network.mojom.LoadTimingInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_alpn_negotiated_protocol', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_secure_transport', 96, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_validated', 96, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_normalized_server_timing', 104, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_resource_lengths', 112, 0, mojo.internal.bindings.blink.mojom.SubframeResourceLengthsSpec, null, true, 0, undefined),
    ],
    [[0, 128]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalFrame_GetScrollPosition_ResponseParamsSpec, 'blink.mojom.LocalFrame_GetScrollPosition_ResponseParams', [
      mojo.internal.StructField('arg_scroll_position', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_ParamsSpec, 'blink.mojom.LocalMainFrame_AnimateDoubleTapZoom_Params', [
      mojo.internal.StructField('arg_point', 0, 0, mojo.internal.bindings.gfx.mojom.PointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_rect', 8, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_SetScaleFactor_ParamsSpec, 'blink.mojom.LocalMainFrame_SetScaleFactor_Params', [
      mojo.internal.StructField('arg_scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ParamsSpec, 'blink.mojom.LocalMainFrame_ClosePage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_ClosePage_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_ClosePage_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ParamsSpec, 'blink.mojom.LocalMainFrame_GetFullPageSize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_GetFullPageSize_ResponseParams', [
      mojo.internal.StructField('arg_full_page_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_SetInitialFocus_ParamsSpec, 'blink.mojom.LocalMainFrame_SetInitialFocus_Params', [
      mojo.internal.StructField('arg_reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_ParamsSpec, 'blink.mojom.LocalMainFrame_EnablePreferredSizeChangedMode_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_ZoomToFindInPageRect_ParamsSpec, 'blink.mojom.LocalMainFrame_ZoomToFindInPageRect_Params', [
      mojo.internal.StructField('arg_rect_in_root_frame', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_ParamsSpec, 'blink.mojom.LocalMainFrame_InstallCoopAccessMonitor_Params', [
      mojo.internal.StructField('arg_accessed_window', 0, 0, mojo.internal.bindings.blink.mojom.FrameTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_coop_reporter_info', 16, 0, mojo.internal.bindings.network.mojom.CrossOriginOpenerPolicyReporterParamsSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_UpdateBrowserControlsState_ParamsSpec, 'blink.mojom.LocalMainFrame_UpdateBrowserControlsState_Params', [
      mojo.internal.StructField('arg_constraints', 0, 0, mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_current', 4, 0, mojo.internal.bindings.cc.mojom.BrowserControlsStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_animate', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_offset_tag_modifications', 16, 0, mojo.internal.bindings.cc.mojom.BrowserControlsOffsetTagModificationsSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_SetV8CompileHints_ParamsSpec, 'blink.mojom.LocalMainFrame_SetV8CompileHints_Params', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.bindings.mojo_base.mojom.ReadOnlySharedMemoryRegionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ParamsSpec, 'blink.mojom.LocalMainFrame_Discard_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_Discard_ResponseParamsSpec, 'blink.mojom.LocalMainFrame_Discard_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_ParamsSpec, 'blink.mojom.LocalMainFrame_FinalizeNavigationConfidence_Params', [
      mojo.internal.StructField('arg_randomized_trigger_rate', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_confidence', 8, 0, mojo.internal.bindings.blink.mojom.ConfidenceLevelSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_ParamsSpec, 'blink.mojom.LocalMainFrame_NotifyRelatedPagesFinalized_Params', [
      mojo.internal.StructField('arg_has_other_related_pages', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ScaleFactorChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ScaleFactorChanged_Params', [
      mojo.internal.StructField('arg_scale', 0, 0, mojo.internal.Float, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_ContentsPreferredSizeChanged_Params', [
      mojo.internal.StructField('arg_pref_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_FocusPage_ParamsSpec, 'blink.mojom.LocalMainFrameHost_FocusPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_TakeFocus_ParamsSpec, 'blink.mojom.LocalMainFrameHost_TakeFocus_Params', [
      mojo.internal.StructField('arg_reverse', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ParamsSpec, 'blink.mojom.LocalMainFrameHost_UpdateTargetURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_UpdateTargetURL_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_RequestClose_ParamsSpec, 'blink.mojom.LocalMainFrameHost_RequestClose_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ParamsSpec, 'blink.mojom.LocalMainFrameHost_SetWindowRect_Params', [
      mojo.internal.StructField('arg_bounds', 0, 0, mojo.internal.bindings.gfx.mojom.RectSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParamsSpec, 'blink.mojom.LocalMainFrameHost_SetWindowRect_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidFirstVisuallyNonEmptyPaint_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidAccessInitialMainDocument_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeThemeColor_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidChangeThemeColor_Params', [
      mojo.internal.StructField('arg_theme_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColorSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DidChangeBackgroundColor_Params', [
      mojo.internal.StructField('arg_background_color', 0, 0, mojo.internal.bindings.skia.mojom.SkColor4fSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_color_adjust', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Maximize_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Maximize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Minimize_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Minimize_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_Restore_ParamsSpec, 'blink.mojom.LocalMainFrameHost_Restore_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_SetResizable_ParamsSpec, 'blink.mojom.LocalMainFrameHost_SetResizable_Params', [
      mojo.internal.StructField('arg_resizable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_ParamsSpec, 'blink.mojom.LocalMainFrameHost_DraggableRegionsChanged_Params', [
      mojo.internal.StructField('arg_regions', 0, 0, mojo.internal.Array(mojo.internal.bindings.blink.mojom.DraggableRegionSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_ParamsSpec, 'blink.mojom.LocalMainFrameHost_OnFirstContentfulPaint_Params', [
      mojo.internal.StructField('arg_duration', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

