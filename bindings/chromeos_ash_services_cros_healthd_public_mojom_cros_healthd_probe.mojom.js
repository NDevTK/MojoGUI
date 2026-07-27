// Auto-generated MojoJS binding
 // Source: chromium_src/chromeos/ash/services/cros_healthd/public/mojom/cros_healthd_probe.mojom
 // Module: ash.cros_healthd.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_cueing_internals.mojom.PageHandler": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.AnnotationHandler": true, "glic.mojom.SkillsHandler": true, "glic.mojom.SkillsClient": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.ExperimentalTriggeringClient": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandler": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "visual_guided_setter.mojom.Page": true, "visual_guided_setter.mojom.PageHandler": true, "visual_guided_setter.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandlerFactory": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feature_showcase.mojom.GeminiPageHandler": true, "feature_showcase.mojom.GeminiPageHandlerFactory": true, "feature_showcase.mojom.GoogleLensPageHandler": true, "feature_showcase.mojom.GoogleLensPageHandlerFactory": true, "feature_showcase.mojom.PasswordManagerPageHandler": true, "feature_showcase.mojom.PasswordManagerPageHandlerFactory": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandler": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandler": true, "intro.mojom.IntroPageHandlerFactory": true, "intro.mojom.IntroPage": true, "intro.mojom.SignInCelebrationPageHandlerFactory": true, "intro.mojom.SignInCelebrationPageHandler": true, "intro.mojom.SignInCelebrationPage": true, "intro.mojom.SignInPromoPageHandlerFactory": true, "intro.mojom.SignInPromoPageHandler": true, "intro.mojom.SignInPromoPage": true, "iwa_dev.mojom.PageHandler": true, "iwa_dev.mojom.Page": true, "iwa_dev.mojom.PageHandlerFactory": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "personal_context.notice.mojom.PageHandler": true, "browser.personal_context_internals.mojom.PageHandlerFactory": true, "browser.personal_context_internals.mojom.PageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "cross_device_signin.mojom.PageHandlerFactory": true, "cross_device_signin.mojom.PageHandler": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "skills.mojom.SkillsPageHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.PageHandlerFactory": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.RemoteActorCredentialSharing": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "reading_mode.mojom.DistillationEvaluator": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "read_aloud.mojom.ReadAloudPlaybackController": true, "read_aloud.mojom.ReadAloudPlaybackControllerClient": true, "read_aloud.mojom.ReadAloudPlaybackControllerFactory": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "request_header_integrity.mojom.ChromeCompanero": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrintingService": true, "redirection.mojom.RedirectionService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "actor.mojom.JournalClient": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandlerFactory": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.AutofillVisibilityObserver": true, "autofill.mojom.TypeTraitsTest": true, "bookmarks_api.mojom.BookmarksObserver": true, "bookmarks_api.mojom.BookmarksService": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabDragService": true, "tabs_api.mojom.DropTargetRegistration": true, "tabs_api.mojom.DropTarget": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebugObserver": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "private_verification_tokens.mojom.PrivateVerificationTokensProvider": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "storage.mojom.IdbInternalsHandler": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "devtools_media_encoding_service.mojom.DevToolsMediaEncodingServiceClient": true, "devtools_media_encoding_service.mojom.DevToolsMediaEncodingService": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.PeerConnectionProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorClientController": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.NetworkContextCreator": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SocketFactory": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WeightsFileSession": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateSemanticEmbedderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISemanticEmbedder": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.DeclarativePerformanceObserverHost": false, "blink.mojom.UnboundedSurfaceHost": false, "blink.mojom.UnboundedSurfaceClient": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedRequest": false, "blink.mojom.FederatedRequestService": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandlerFactory": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_cross_device_signin_promo.mojom.HistoryCrossDeviceSigninPromoHandler": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_clusters.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '152.0.7975.0';
        
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

 mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};

mojo.internal.bindings.ash.cros_healthd.mojom.CpuArchitectureEnumSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CpuArchitectureEnumSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.ProbeCategoryEnumSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ProbeCategoryEnumSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.ErrorTypeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ErrorTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessStateSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ProcessStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.StorageDevicePurposeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.StorageDevicePurposeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.SMTControlSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SMTControlSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.StatusSpec = mojo.internal.bindings.ash.cros_healthd.mojom.StatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.EncryptionStateSpec = mojo.internal.bindings.ash.cros_healthd.mojom.EncryptionStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.CryptoAlgorithmSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CryptoAlgorithmSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceTypeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.EfiPlatformSizeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.EfiPlatformSizeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.BootModeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BootModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.EventTypeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.EventTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.LogStateSpec = mojo.internal.bindings.ash.cros_healthd.mojom.LogStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceClassSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceClassSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.FwupdVersionFormatSpec = mojo.internal.bindings.ash.cros_healthd.mojom.FwupdVersionFormatSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.UsbVersionSpec = mojo.internal.bindings.ash.cros_healthd.mojom.UsbVersionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.UsbSpecSpeedSpec = mojo.internal.bindings.ash.cros_healthd.mojom.UsbSpecSpeedSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.TpmGSCVersionSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmGSCVersionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputTypeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.ConnectionTypeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ConnectionTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.LocationSpec = mojo.internal.bindings.ash.cros_healthd.mojom.LocationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorSourceSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec = mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec = mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec = mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec = mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec.$ = {};
mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec || { $: {} };
if (mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec.$.structSpec && mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec = mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NullableInt16Spec = mojo.internal.bindings.ash.cros_healthd.mojom.NullableInt16Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec = mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec = mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec = mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec = mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.ash = mojo.internal.bindings.ash || {};
mojo.internal.bindings.ash.cros_healthd = mojo.internal.bindings.ash.cros_healthd || {};
mojo.internal.bindings.ash.cros_healthd.mojom = mojo.internal.bindings.ash.cros_healthd.mojom || {};
mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec = mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.chromeos = mojo.internal.bindings.chromeos || {};
mojo.internal.bindings.chromeos.network_health = mojo.internal.bindings.chromeos.network_health || {};
mojo.internal.bindings.chromeos.network_health.mojom = mojo.internal.bindings.chromeos.network_health.mojom || {};
mojo.internal.bindings.chromeos.network_health.mojom.NetworkHealthStateSpec = mojo.internal.bindings.chromeos.network_health.mojom.NetworkHealthStateSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: CpuArchitectureEnum
mojo.internal.bindings.ash.cros_healthd.mojom.CpuArchitectureEnum = {
  kUnknown: 0,
  kX86_64: 1,
  kAArch64: 2,
  kArmv7l: 3,
};

// Enum: ProbeCategoryEnum
mojo.internal.bindings.ash.cros_healthd.mojom.ProbeCategoryEnum = {
  kUnknown: 16,
  kBattery: 0,
  kNonRemovableBlockDevices: 1,
  kCpu: 2,
  kTimezone: 3,
  kMemory: 4,
  kBacklight: 5,
  kFan: 6,
  kStatefulPartition: 7,
  kBluetooth: 8,
  kSystem: 9,
  kNetwork: 10,
  kAudio: 11,
  kBootPerformance: 12,
  kBus: 13,
  kTpm: 14,
  kGraphics: 15,
  kDisplay: 17,
  kNetworkInterface: 18,
  kInput: 19,
  MinVersion: 19,
  MinVersion: 19,
  MinVersion: 19,
};

// Enum: ErrorType
mojo.internal.bindings.ash.cros_healthd.mojom.ErrorType = {
  kUnknown: 4,
  kFileReadError: 0,
  kParseError: 1,
  kSystemUtilityError: 2,
  kServiceUnavailable: 3,
};

// Enum: ProcessState
mojo.internal.bindings.ash.cros_healthd.mojom.ProcessState = {
  kUnknown: 7,
  kRunning: 0,
  kSleeping: 1,
  kWaiting: 2,
  kZombie: 3,
  kStopped: 4,
  kTracingStop: 5,
  kDead: 6,
  MinVersion: 6,
};

// Enum: StorageDevicePurpose
mojo.internal.bindings.ash.cros_healthd.mojom.StorageDevicePurpose = {
  kUnknown: 0,
  kBootDevice: 1,
  DEPRECATED_kSwapDevice: 2,
  MinVersion: 2,
};

// Enum: SMTControl
mojo.internal.bindings.ash.cros_healthd.mojom.SMTControl = {
  kUnmappedEnumField: 0,
  kOn: 1,
  kOff: 2,
  kForceOff: 3,
  kNotSupported: 4,
  kNotImplemented: 5,
};

// Enum: Status
mojo.internal.bindings.ash.cros_healthd.mojom.Status = {
  kUnmappedEnumField: 0,
  kNotAffected: 1,
  kVulnerable: 2,
  kMitigation: 3,
  kUnknown: 4,
  kUnrecognized: 5,
};

// Enum: Type
mojo.internal.bindings.ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kVMX: 1,
  kSVM: 2,
};

// Enum: EncryptionState
mojo.internal.bindings.ash.cros_healthd.mojom.EncryptionState = {
  kUnknown: 0,
  kEncryptionDisabled: 1,
  kTmeEnabled: 2,
  kMktmeEnabled: 3,
};

// Enum: CryptoAlgorithm
mojo.internal.bindings.ash.cros_healthd.mojom.CryptoAlgorithm = {
  kUnknown: 0,
  kAesXts128: 1,
  kAesXts256: 2,
};

// Enum: BluetoothDeviceType
mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceType = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kBrEdr: 2,
  kLe: 3,
  kDual: 4,
};

// Enum: EfiPlatformSize
mojo.internal.bindings.ash.cros_healthd.mojom.EfiPlatformSize = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  k64: 2,
  k32: 3,
};

// Enum: BootMode
mojo.internal.bindings.ash.cros_healthd.mojom.BootMode = {
  kUnknown: 0,
  kCrosSecure: 1,
  kCrosEfi: 2,
  kCrosLegacy: 3,
  kCrosEfiSecure: 4,
};

// Enum: EventType
mojo.internal.bindings.ash.cros_healthd.mojom.EventType = {
  kUnmappedEnumField: 0,
  kLogStart: 1,
  kLogEnd: 2,
  kCsmeRecovery: 3,
  kPrtcFailure: 4,
  kSvnIncrease: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
  MinVersion: 5,
};

// Enum: LogState
mojo.internal.bindings.ash.cros_healthd.mojom.LogState = {
  kUnmappedEnumField: 0,
  kNotStarted: 1,
  kStarted: 2,
  kStopped: 3,
};

// Enum: BusDeviceClass
mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceClass = {
  kOthers: 0,
  kDisplayController: 1,
  kEthernetController: 2,
  kWirelessController: 3,
  kBluetoothAdapter: 4,
  kThunderboltController: 5,
  kAudioCard: 6,
};

// Enum: FwupdVersionFormat
mojo.internal.bindings.ash.cros_healthd.mojom.FwupdVersionFormat = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kPlain: 2,
  kNumber: 3,
  kPair: 4,
  kTriplet: 5,
  kQuad: 6,
  kBcd: 7,
  kIntelMe: 8,
  kIntelMe2: 9,
  kSurfaceLegacy: 10,
  kSurface: 11,
  kDellBios: 12,
  kHex: 13,
};

// Enum: UsbVersion
mojo.internal.bindings.ash.cros_healthd.mojom.UsbVersion = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kUsb1: 2,
  kUsb2: 3,
  kUsb3: 4,
};

// Enum: UsbSpecSpeed
mojo.internal.bindings.ash.cros_healthd.mojom.UsbSpecSpeed = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  k1_5Mbps: 2,
  k12Mbps: 3,
  kDeprecatedSpeed: 4,
  k480Mbps: 5,
  k5Gbps: 6,
  k10Gbps: 7,
  k20Gbps: 8,
};

// Enum: TpmGSCVersion
mojo.internal.bindings.ash.cros_healthd.mojom.TpmGSCVersion = {
  kNotGSC: 0,
  kCr50: 1,
  kTi50: 2,
};

// Enum: DisplayInputType
mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputType = {
  kUnmappedEnumField: 0,
  kDigital: 1,
  kAnalog: 2,
};

// Enum: ThunderboltSecurityLevel
mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltSecurityLevel = {
  kNone: 0,
  kUserLevel: 1,
  kSecureLevel: 2,
  kDpOnlyLevel: 3,
  kUsbOnlyLevel: 4,
  kNoPcieLevel: 5,
};

// Enum: ConnectionType
mojo.internal.bindings.ash.cros_healthd.mojom.ConnectionType = {
  kUnmappedEnumField: 0,
  kInternal: 1,
  kUSB: 2,
  kBluetooth: 3,
  kUnknown: 4,
};

// Enum: Type
mojo.internal.bindings.ash.cros_healthd.mojom.Type = {
  kUnmappedEnumField: 0,
  kAccel: 1,
  kLight: 2,
  kGyro: 3,
  kAngle: 4,
  kGravity: 5,
  MinVersion: 5,
};

// Enum: Location
mojo.internal.bindings.ash.cros_healthd.mojom.Location = {
  kUnmappedEnumField: 0,
  kUnknown: 1,
  kBase: 2,
  kLid: 3,
  kCamera: 4,
};

// Enum: ThermalSensorSource
mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorSource = {
  kUnmappedEnumField: 0,
  kEc: 1,
  kSysFs: 2,
};

// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: ProcessResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.ProcessResultSpec, 'ash.cros_healthd.mojom.ProcessResult', {
      'arg_process_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BatteryResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec, 'ash.cros_healthd.mojom.BatteryResult', {
      'arg_battery_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec,
        'nullable': true,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NonRemovableBlockDeviceResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec, 'ash.cros_healthd.mojom.NonRemovableBlockDeviceResult', {
      'arg_block_device_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BlockDeviceVendor
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec, 'ash.cros_healthd.mojom.BlockDeviceVendor', {
      'arg_nvme_subsystem_vendor': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_emmc_oemid': {
        'ordinal': 1,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_jedec_manfid': {
        'ordinal': 4,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
    });

// Union: BlockDeviceProduct
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec, 'ash.cros_healthd.mojom.BlockDeviceProduct', {
      'arg_nvme_subsystem_device': {
        'ordinal': 0,
        'type': mojo.internal.Uint32,
        'nullable': false,
      },
      'arg_emmc_pnm': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceRevision
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec, 'ash.cros_healthd.mojom.BlockDeviceRevision', {
      'arg_nvme_pcie_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_emmc_prv': {
        'ordinal': 1,
        'type': mojo.internal.Uint8,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceFirmware
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec, 'ash.cros_healthd.mojom.BlockDeviceFirmware', {
      'arg_nvme_firmware_rev': {
        'ordinal': 0,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_emmc_fwrev': {
        'ordinal': 1,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_other': {
        'ordinal': 2,
        'type': mojo.internal.Uint16,
        'nullable': false,
      },
      'arg_unknown': {
        'ordinal': 3,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
      'arg_ufs_fwrev': {
        'ordinal': 4,
        'type': mojo.internal.Uint64,
        'nullable': false,
      },
    });

// Union: BlockDeviceInfo
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec, 'ash.cros_healthd.mojom.BlockDeviceInfo', {
      'arg_unrecognized': {
        'ordinal': 0,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
      'arg_nvme_device_info': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec,
        'nullable': false,
      },
      'arg_emmc_device_info': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec,
        'nullable': false,
      },
      'arg_ufs_device_info': {
        'ordinal': 3,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec,
        'nullable': false,
      },
    });

// Union: CpuResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec, 'ash.cros_healthd.mojom.CpuResult', {
      'arg_cpu_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: TimezoneResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec, 'ash.cros_healthd.mojom.TimezoneResult', {
      'arg_timezone_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: MemoryResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec, 'ash.cros_healthd.mojom.MemoryResult', {
      'arg_memory_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BacklightResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec, 'ash.cros_healthd.mojom.BacklightResult', {
      'arg_backlight_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: FanResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec, 'ash.cros_healthd.mojom.FanResult', {
      'arg_fan_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: StatefulPartitionResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec, 'ash.cros_healthd.mojom.StatefulPartitionResult', {
      'arg_partition_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BluetoothResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec, 'ash.cros_healthd.mojom.BluetoothResult', {
      'arg_bluetooth_adapter_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: DEPRECATED_SystemResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec, 'ash.cros_healthd.mojom.DEPRECATED_SystemResult', {
      'arg_error': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: SystemResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec, 'ash.cros_healthd.mojom.SystemResult', {
      'arg_system_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NetworkResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec, 'ash.cros_healthd.mojom.NetworkResult', {
      'arg_network_health': {
        'ordinal': 0,
        'type': mojo.internal.bindings.chromeos.network_health.mojom.NetworkHealthStateSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NetworkInterfaceResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec, 'ash.cros_healthd.mojom.NetworkInterfaceResult', {
      'arg_network_interface_info': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: NetworkInterfaceInfo
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceInfoSpec, 'ash.cros_healthd.mojom.NetworkInterfaceInfo', {
      'arg_wireless_interface_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec,
        'nullable': false,
      },
    });

// Union: AudioResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec, 'ash.cros_healthd.mojom.AudioResult', {
      'arg_audio_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: AudioHardwareResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec, 'ash.cros_healthd.mojom.AudioHardwareResult', {
      'arg_audio_hardware_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BootPerformanceResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec, 'ash.cros_healthd.mojom.BootPerformanceResult', {
      'arg_boot_performance_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BusResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec, 'ash.cros_healthd.mojom.BusResult', {
      'arg_bus_devices': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec, false),
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: BusInfo
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec, 'ash.cros_healthd.mojom.BusInfo', {
      'arg_pci_bus_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec,
        'nullable': false,
      },
      'arg_usb_bus_info': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec,
        'nullable': false,
      },
      'arg_thunderbolt_bus_info': {
        'ordinal': 2,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec,
        'nullable': false,
      },
      'arg_unmapped_field': {
        'ordinal': 3,
        'type': mojo.internal.Bool,
        'nullable': false,
      },
    });

// Union: TpmResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec, 'ash.cros_healthd.mojom.TpmResult', {
      'arg_tpm_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: GraphicsResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec, 'ash.cros_healthd.mojom.GraphicsResult', {
      'arg_graphics_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: DisplayResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec, 'ash.cros_healthd.mojom.DisplayResult', {
      'arg_display_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: InputResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec, 'ash.cros_healthd.mojom.InputResult', {
      'arg_input_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: SensorResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec, 'ash.cros_healthd.mojom.SensorResult', {
      'arg_sensor_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Union: ThermalResult
mojo.internal.Union(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec, 'ash.cros_healthd.mojom.ThermalResult', {
      'arg_thermal_info': {
        'ordinal': 0,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec,
        'nullable': false,
      },
      'arg_error': {
        'ordinal': 1,
        'type': mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec,
        'nullable': false,
      },
    });

// Struct: ProbeError
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec, 'ash.cros_healthd.mojom.ProbeError', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ErrorTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_msg', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MultipleProcessResult
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MultipleProcessResultSpec, 'ash.cros_healthd.mojom.MultipleProcessResult', [
      mojo.internal.StructField('arg_process_infos', 0, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_errors', 8, 0, mojo.internal.Map(mojo.internal.Uint32, mojo.internal.bindings.ash.cros_healthd.mojom.ProbeErrorSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ProcessInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ProcessInfoSpec, 'ash.cros_healthd.mojom.ProcessInfo', [
      mojo.internal.StructField('arg_command', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_user_id', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_priority', 12, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_nice', 13, 0, mojo.internal.Int8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_uptime_ticks', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_state', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ProcessStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_total_memory_kib', 28, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_resident_memory_kib', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_free_memory_kib', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_read', 40, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_written', 48, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_read_system_calls', 56, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_write_system_calls', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physical_bytes_read', 72, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_physical_bytes_written', 80, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cancelled_bytes_written', 88, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_name', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_parent_process_id', 104, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_process_group_id', 108, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_threads', 112, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_process_id', 116, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 128]]);

// Struct: BatteryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BatteryInfoSpec, 'ash.cros_healthd.mojom.BatteryInfo', [
      mojo.internal.StructField('arg_cycle_count', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_voltage_now', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_charge_full_design', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_charge_full', 40, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_voltage_min_design', 48, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_model_name', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_charge_now', 64, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_current_now', 72, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_technology', 80, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 88, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacture_date', 96, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_temperature', 104, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec, null, true, 0, undefined),
    ],
    [[0, 120]]);

// Struct: NvmeDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.NvmeDeviceInfoSpec, 'ash.cros_healthd.mojom.NvmeDeviceInfo', [
      mojo.internal.StructField('arg_subsystem_vendor', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subsystem_device', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pcie_rev', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_firmware_rev', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: EmmcDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.EmmcDeviceInfoSpec, 'ash.cros_healthd.mojom.EmmcDeviceInfo', [
      mojo.internal.StructField('arg_manfid', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_prv', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pnm', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fwrev', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: UfsDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UfsDeviceInfoSpec, 'ash.cros_healthd.mojom.UfsDeviceInfo', [
      mojo.internal.StructField('arg_jedec_manfid', 0, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fwrev', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NonRemovableBlockDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceInfoSpec, 'ash.cros_healthd.mojom.NonRemovableBlockDeviceInfo', [
      mojo.internal.StructField('arg_bytes_read_since_last_boot', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_bytes_written_since_last_boot', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_read_time_seconds_since_last_boot', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_write_time_seconds_since_last_boot', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_io_time_seconds_since_last_boot', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_discard_time_seconds_since_last_boot', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceVendorSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_id', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceProductSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_revision', 80, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceRevisionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 96, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 104, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_firmware_version', 112, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceFirmwareSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_type', 128, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_purpose', 136, 0, mojo.internal.bindings.ash.cros_healthd.mojom.StorageDevicePurposeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer_id', 140, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_rotational_$flag', 141, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_rotational_$value', originalFieldName: 'arg_is_rotational' }),
      mojo.internal.StructField('arg_is_rotational_$value', 141, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_rotational_$flag', originalFieldName: 'arg_is_rotational' }),
      mojo.internal.StructField('arg_path', 144, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_serial', 152, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_info', 160, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BlockDeviceInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_firmware_string', 176, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 192]]);

// Struct: CpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuInfoSpec, 'ash.cros_healthd.mojom.CpuInfo', [
      mojo.internal.StructField('arg_num_total_threads', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_architecture', 4, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CpuArchitectureEnumSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_physical_cpus', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_temperature_channels', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_keylocker_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_virtualization', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_vulnerabilities', 40, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: VirtualizationInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.VirtualizationInfoSpec, 'ash.cros_healthd.mojom.VirtualizationInfo', [
      mojo.internal.StructField('arg_has_kvm_device', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_smt_active', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_smt_control', 4, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SMTControlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: VulnerabilityInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.VulnerabilityInfoSpec, 'ash.cros_healthd.mojom.VulnerabilityInfo', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.StatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_message', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: KeylockerInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.KeylockerInfoSpec, 'ash.cros_healthd.mojom.KeylockerInfo', [
      mojo.internal.StructField('arg_keylocker_configured', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PhysicalCpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PhysicalCpuInfoSpec, 'ash.cros_healthd.mojom.PhysicalCpuInfo', [
      mojo.internal.StructField('arg_model_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_logical_cpus', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_flags', 16, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_virtualization', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: CpuVirtualizationInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuVirtualizationInfoSpec, 'ash.cros_healthd.mojom.CpuVirtualizationInfo', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_enabled', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_locked', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: LogicalCpuInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.LogicalCpuInfoSpec, 'ash.cros_healthd.mojom.LogicalCpuInfo', [
      mojo.internal.StructField('arg_max_clock_speed_khz', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scaling_max_frequency_khz', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_scaling_current_frequency_khz', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_core_id', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_user_time_user_hz', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_system_time_user_hz', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_idle_time_user_hz', 32, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_c_states', 40, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: CpuCStateInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuCStateInfoSpec, 'ash.cros_healthd.mojom.CpuCStateInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_time_in_state_since_last_boot_us', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CpuTemperatureChannel
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.CpuTemperatureChannelSpec, 'ash.cros_healthd.mojom.CpuTemperatureChannel', [
      mojo.internal.StructField('arg_label', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_temperature_celsius', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TimezoneInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneInfoSpec, 'ash.cros_healthd.mojom.TimezoneInfo', [
      mojo.internal.StructField('arg_posix', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_region', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: MemoryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryInfoSpec, 'ash.cros_healthd.mojom.MemoryInfo', [
      mojo.internal.StructField('arg_total_memory_kib', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_free_memory_kib', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_available_memory_kib', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_buffers_kib_$flag', 12, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_buffers_kib_$value', originalFieldName: 'arg_buffers_kib' }),
      mojo.internal.StructField('arg_page_cache_kib_$flag', 12, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_page_cache_kib_$value', originalFieldName: 'arg_page_cache_kib' }),
      mojo.internal.StructField('arg_shared_memory_kib_$flag', 12, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_shared_memory_kib_$value', originalFieldName: 'arg_shared_memory_kib' }),
      mojo.internal.StructField('arg_active_memory_kib_$flag', 12, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_active_memory_kib_$value', originalFieldName: 'arg_active_memory_kib' }),
      mojo.internal.StructField('arg_inactive_memory_kib_$flag', 12, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_inactive_memory_kib_$value', originalFieldName: 'arg_inactive_memory_kib' }),
      mojo.internal.StructField('arg_total_swap_memory_kib_$flag', 12, 5, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_swap_memory_kib_$value', originalFieldName: 'arg_total_swap_memory_kib' }),
      mojo.internal.StructField('arg_free_swap_memory_kib_$flag', 12, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_free_swap_memory_kib_$value', originalFieldName: 'arg_free_swap_memory_kib' }),
      mojo.internal.StructField('arg_cached_swap_memory_kib_$flag', 12, 7, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_cached_swap_memory_kib_$value', originalFieldName: 'arg_cached_swap_memory_kib' }),
      mojo.internal.StructField('arg_total_slab_memory_kib_$flag', 13, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_total_slab_memory_kib_$value', originalFieldName: 'arg_total_slab_memory_kib' }),
      mojo.internal.StructField('arg_reclaimable_slab_memory_kib_$flag', 13, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_reclaimable_slab_memory_kib_$value', originalFieldName: 'arg_reclaimable_slab_memory_kib' }),
      mojo.internal.StructField('arg_unreclaimable_slab_memory_kib_$flag', 13, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_unreclaimable_slab_memory_kib_$value', originalFieldName: 'arg_unreclaimable_slab_memory_kib' }),
      mojo.internal.StructField('arg_page_faults_since_last_boot', 16, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_memory_encryption_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_buffers_kib_$value', 32, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_buffers_kib_$flag', originalFieldName: 'arg_buffers_kib' }),
      mojo.internal.StructField('arg_page_cache_kib_$value', 40, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_page_cache_kib_$flag', originalFieldName: 'arg_page_cache_kib' }),
      mojo.internal.StructField('arg_shared_memory_kib_$value', 48, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_shared_memory_kib_$flag', originalFieldName: 'arg_shared_memory_kib' }),
      mojo.internal.StructField('arg_active_memory_kib_$value', 56, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_active_memory_kib_$flag', originalFieldName: 'arg_active_memory_kib' }),
      mojo.internal.StructField('arg_inactive_memory_kib_$value', 64, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_inactive_memory_kib_$flag', originalFieldName: 'arg_inactive_memory_kib' }),
      mojo.internal.StructField('arg_total_swap_memory_kib_$value', 72, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_swap_memory_kib_$flag', originalFieldName: 'arg_total_swap_memory_kib' }),
      mojo.internal.StructField('arg_free_swap_memory_kib_$value', 80, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_free_swap_memory_kib_$flag', originalFieldName: 'arg_free_swap_memory_kib' }),
      mojo.internal.StructField('arg_cached_swap_memory_kib_$value', 88, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_cached_swap_memory_kib_$flag', originalFieldName: 'arg_cached_swap_memory_kib' }),
      mojo.internal.StructField('arg_total_slab_memory_kib_$value', 96, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_total_slab_memory_kib_$flag', originalFieldName: 'arg_total_slab_memory_kib' }),
      mojo.internal.StructField('arg_reclaimable_slab_memory_kib_$value', 104, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_reclaimable_slab_memory_kib_$flag', originalFieldName: 'arg_reclaimable_slab_memory_kib' }),
      mojo.internal.StructField('arg_unreclaimable_slab_memory_kib_$value', 112, 0, mojo.internal.Uint64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_unreclaimable_slab_memory_kib_$flag', originalFieldName: 'arg_unreclaimable_slab_memory_kib' }),
    ],
    [[0, 128]]);

// Struct: MemoryEncryptionInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.MemoryEncryptionInfoSpec, 'ash.cros_healthd.mojom.MemoryEncryptionInfo', [
      mojo.internal.StructField('arg_encryption_state', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EncryptionStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_key_number', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_key_length', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_active_algorithm', 12, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CryptoAlgorithmSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BacklightInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BacklightInfoSpec, 'ash.cros_healthd.mojom.BacklightInfo', [
      mojo.internal.StructField('arg_path', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_max_brightness', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_brightness', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: FanInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.FanInfoSpec, 'ash.cros_healthd.mojom.FanInfo', [
      mojo.internal.StructField('arg_speed_rpm', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: StatefulPartitionInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionInfoSpec, 'ash.cros_healthd.mojom.StatefulPartitionInfo', [
      mojo.internal.StructField('arg_available_space', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_total_space', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_filesystem', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_mount_source', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: BluetoothAdapterInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothAdapterInfoSpec, 'ash.cros_healthd.mojom.BluetoothAdapterInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_address', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_powered', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_discoverable', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_discovering', 16, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_num_connected_devices', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_connected_devices', 24, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_uuids', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_modalias', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_service_allow_list', 48, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_capabilities', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec, null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: BluetoothDeviceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceInfoSpec, 'ash.cros_healthd.mojom.BluetoothDeviceInfo', [
      mojo.internal.StructField('arg_address', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_type', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothDeviceTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_appearance', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_modalias', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_rssi', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableInt16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_mtu', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_uuids', 56, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_battery_percentage', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_bluetooth_class', 72, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
    ],
    [[0, 88]]);

// Struct: DEPRECATED_SupportedCapabilities
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilitiesSpec, 'ash.cros_healthd.mojom.DEPRECATED_SupportedCapabilities', [
    ],
    [[0, 8]]);

// Struct: SystemInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SystemInfoSpec, 'ash.cros_healthd.mojom.SystemInfo', [
      mojo.internal.StructField('arg_os_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_vpd_info', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_dmi_info', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_psr_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: OsInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.OsInfoSpec, 'ash.cros_healthd.mojom.OsInfo', [
      mojo.internal.StructField('arg_code_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_marketing_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_os_version', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_boot_mode', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BootModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_efi_platform_size', 28, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EfiPlatformSizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_oem_name', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: OsVersion
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.OsVersionSpec, 'ash.cros_healthd.mojom.OsVersion', [
      mojo.internal.StructField('arg_release_milestone', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_build_number', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_patch_number', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_release_channel', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_branch_number', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: VpdInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.VpdInfoSpec, 'ash.cros_healthd.mojom.VpdInfo', [
      mojo.internal.StructField('arg_serial_number', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_region', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_mfg_date', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_activate_date', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sku_number', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_name', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_oem_name', 48, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: DmiInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.DmiInfoSpec, 'ash.cros_healthd.mojom.DmiInfo', [
      mojo.internal.StructField('arg_bios_vendor', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_bios_version', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_board_name', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_board_vendor', 24, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_board_version', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_chassis_vendor', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_chassis_type', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint64Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_family', 56, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_name', 64, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_version', 72, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sys_vendor', 80, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 96]]);

// Struct: PsrEvent
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec, 'ash.cros_healthd.mojom.PsrEvent', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EventTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_time', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PsrInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PsrInfoSpec, 'ash.cros_healthd.mojom.PsrInfo', [
      mojo.internal.StructField('arg_log_state', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.LogStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_log_start_date', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_uuid', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_upid', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_oem_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_oem_make', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_oem_model', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_manufacture_country', 48, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_oem_data', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_uptime_seconds', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_s5_counter', 68, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_s4_counter', 72, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_s3_counter', 76, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_warm_reset_counter', 80, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_supported', 84, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_events', 88, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.PsrEventSpec, false), null, false, 0, undefined),
    ],
    [[0, 104]]);

// Struct: WirelessInterfaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.WirelessInterfaceInfoSpec, 'ash.cros_healthd.mojom.WirelessInterfaceInfo', [
      mojo.internal.StructField('arg_interface_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_power_management_on', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_wireless_link_info', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: WirelessLinkInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.WirelessLinkInfoSpec, 'ash.cros_healthd.mojom.WirelessLinkInfo', [
      mojo.internal.StructField('arg_access_point_address_str', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tx_bit_rate_mbps', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rx_bit_rate_mbps', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tx_power_dBm', 16, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_encyption_on', 20, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_link_quality', 24, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_signal_level_dBm', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AudioInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioInfoSpec, 'ash.cros_healthd.mojom.AudioInfo', [
      mojo.internal.StructField('arg_output_mute', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_input_mute', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_input_gain', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_volume', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_device_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_input_device_name', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_underruns', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_severe_underruns', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_output_nodes', 40, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_input_nodes', 48, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: AudioNodeInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioNodeInfoSpec, 'ash.cros_healthd.mojom.AudioNodeInfo', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_active', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_node_volume', 25, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_input_node_gain', 26, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: AudioHardwareInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareInfoSpec, 'ash.cros_healthd.mojom.AudioHardwareInfo', [
      mojo.internal.StructField('arg_audio_cards', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: AudioCard
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.AudioCardSpec, 'ash.cros_healthd.mojom.AudioCard', [
      mojo.internal.StructField('arg_alsa_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_bus_device', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_hd_audio_codecs', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: HDAudioCodec
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.HDAudioCodecSpec, 'ash.cros_healthd.mojom.HDAudioCodec', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_address', 8, 0, mojo.internal.Uint8, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: BootPerformanceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceInfoSpec, 'ash.cros_healthd.mojom.BootPerformanceInfo', [
      mojo.internal.StructField('arg_boot_up_seconds', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_boot_up_timestamp', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shutdown_seconds', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shutdown_timestamp', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_shutdown_reason', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tpm_initialization_seconds', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_power_on_to_kernel_seconds_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_power_on_to_kernel_seconds_$value', originalFieldName: 'arg_power_on_to_kernel_seconds' }),
      mojo.internal.StructField('arg_kernel_to_pre_startup_seconds_$flag', 48, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_kernel_to_pre_startup_seconds_$value', originalFieldName: 'arg_kernel_to_pre_startup_seconds' }),
      mojo.internal.StructField('arg_kernel_to_post_startup_seconds_$flag', 48, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_kernel_to_post_startup_seconds_$value', originalFieldName: 'arg_kernel_to_post_startup_seconds' }),
      mojo.internal.StructField('arg_startup_to_chrome_exec_seconds_$flag', 48, 3, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_startup_to_chrome_exec_seconds_$value', originalFieldName: 'arg_startup_to_chrome_exec_seconds' }),
      mojo.internal.StructField('arg_chrome_exec_to_login_seconds_$flag', 48, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_chrome_exec_to_login_seconds_$value', originalFieldName: 'arg_chrome_exec_to_login_seconds' }),
      mojo.internal.StructField('arg_power_on_to_kernel_seconds_$value', 56, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_power_on_to_kernel_seconds_$flag', originalFieldName: 'arg_power_on_to_kernel_seconds' }),
      mojo.internal.StructField('arg_kernel_to_pre_startup_seconds_$value', 64, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_kernel_to_pre_startup_seconds_$flag', originalFieldName: 'arg_kernel_to_pre_startup_seconds' }),
      mojo.internal.StructField('arg_kernel_to_post_startup_seconds_$value', 72, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_kernel_to_post_startup_seconds_$flag', originalFieldName: 'arg_kernel_to_post_startup_seconds' }),
      mojo.internal.StructField('arg_startup_to_chrome_exec_seconds_$value', 80, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_startup_to_chrome_exec_seconds_$flag', originalFieldName: 'arg_startup_to_chrome_exec_seconds' }),
      mojo.internal.StructField('arg_chrome_exec_to_login_seconds_$value', 88, 0, mojo.internal.Double, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_chrome_exec_to_login_seconds_$flag', originalFieldName: 'arg_chrome_exec_to_login_seconds' }),
    ],
    [[0, 104]]);

// Struct: BusDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceSpec, 'ash.cros_healthd.mojom.BusDevice', [
      mojo.internal.StructField('arg_vendor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_product_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_class', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusDeviceClassSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_bus_info', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusInfoSpec, null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: PciBusInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.PciBusInfoSpec, 'ash.cros_healthd.mojom.PciBusInfo', [
      mojo.internal.StructField('arg_class_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_prog_if_id', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_device_id', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_driver', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_sub_vendor_id', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_sub_device_id', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: UsbBusInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInfoSpec, 'ash.cros_healthd.mojom.UsbBusInfo', [
      mojo.internal.StructField('arg_class_id', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_protocol_id', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 4, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_product_id', 6, 0, mojo.internal.Uint16, 0, false, 0, undefined),
      mojo.internal.StructField('arg_interfaces', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_fwupd_firmware_version_info', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_version', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.UsbVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_spec_speed', 28, 0, mojo.internal.bindings.ash.cros_healthd.mojom.UsbSpecSpeedSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: FwupdFirmwareVersionInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.FwupdFirmwareVersionInfoSpec, 'ash.cros_healthd.mojom.FwupdFirmwareVersionInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_version_format', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.FwupdVersionFormatSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: UsbBusInterfaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.UsbBusInterfaceInfoSpec, 'ash.cros_healthd.mojom.UsbBusInterfaceInfo', [
      mojo.internal.StructField('arg_interface_number', 0, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_class_id', 1, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_subclass_id', 2, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_protocol_id', 3, 0, mojo.internal.Uint8, 0, false, 0, undefined),
      mojo.internal.StructField('arg_driver', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TpmInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmInfoSpec, 'ash.cros_healthd.mojom.TpmInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_status', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_dictionary_attack', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_attestation', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_supported_features', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_did_vid', 40, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: TpmVersion
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmVersionSpec, 'ash.cros_healthd.mojom.TpmVersion', [
      mojo.internal.StructField('arg_gsc_version', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmGSCVersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_family', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_spec_level', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tpm_model', 20, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_firmware_version', 24, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_specific', 32, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: TpmStatus
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmStatusSpec, 'ash.cros_healthd.mojom.TpmStatus', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_owned', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_owner_password_is_present', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TpmDictionaryAttack
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmDictionaryAttackSpec, 'ash.cros_healthd.mojom.TpmDictionaryAttack', [
      mojo.internal.StructField('arg_counter', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_threshold', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_lockout_in_effect', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_lockout_seconds_remaining', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TpmAttestation
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmAttestationSpec, 'ash.cros_healthd.mojom.TpmAttestation', [
      mojo.internal.StructField('arg_prepared_for_enrollment', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enrolled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: TpmSupportedFeatures
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TpmSupportedFeaturesSpec, 'ash.cros_healthd.mojom.TpmSupportedFeatures', [
      mojo.internal.StructField('arg_support_u2f', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_support_pinweaver', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_support_runtime_selection', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_allowed', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GraphicsInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsInfoSpec, 'ash.cros_healthd.mojom.GraphicsInfo', [
      mojo.internal.StructField('arg_gles_info', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_egl_info', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GLESInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.GLESInfoSpec, 'ash.cros_healthd.mojom.GLESInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_shading_version', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_renderer', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_extensions', 32, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 48]]);

// Struct: EGLInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.EGLInfoSpec, 'ash.cros_healthd.mojom.EGLInfo', [
      mojo.internal.StructField('arg_version', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_api', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_extensions', 24, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: DisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInfoSpec, 'ash.cros_healthd.mojom.DisplayInfo', [
      mojo.internal.StructField('arg_embedded_display', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_external_displays', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: EmbeddedDisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.EmbeddedDisplayInfoSpec, 'ash.cros_healthd.mojom.EmbeddedDisplayInfo', [
      mojo.internal.StructField('arg_privacy_screen_supported', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_privacy_screen_enabled', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_input_type', 4, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_width', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_height', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_resolution_horizontal', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_resolution_vertical', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_refresh_rate', 40, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 48, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_id', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacture_week', 72, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacture_year', 80, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_edid_version', 88, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_name', 96, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 112]]);

// Struct: ExternalDisplayInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ExternalDisplayInfoSpec, 'ash.cros_healthd.mojom.ExternalDisplayInfo', [
      mojo.internal.StructField('arg_display_width', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_height', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_resolution_horizontal', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_resolution_vertical', 24, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_refresh_rate', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableDoubleSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacturer', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_model_id', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_serial_number', 56, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacture_week', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint8Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_manufacture_year', 72, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_edid_version', 80, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_type', 88, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DisplayInputTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_display_name', 96, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 112]]);

// Struct: ThunderboltBusInterfaceInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec, 'ash.cros_healthd.mojom.ThunderboltBusInterfaceInfo', [
      mojo.internal.StructField('arg_vendor_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_device_uuid', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tx_speed_gbs', 32, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rx_speed_gbs', 36, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_authorized', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_device_fw_version', 48, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: ThunderboltBusInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInfoSpec, 'ash.cros_healthd.mojom.ThunderboltBusInfo', [
      mojo.internal.StructField('arg_security_level', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltSecurityLevelSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_thunderbolt_interfaces', 4, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.ThunderboltBusInterfaceInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: InputInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.InputInfoSpec, 'ash.cros_healthd.mojom.InputInfo', [
      mojo.internal.StructField('arg_touchpad_library_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_touchscreen_devices', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_touchpad_devices', 16, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec, false), null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TouchscreenDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TouchscreenDeviceSpec, 'ash.cros_healthd.mojom.TouchscreenDevice', [
      mojo.internal.StructField('arg_input_device', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_touch_points', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_has_stylus', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_has_stylus_garage_switch', 12, 1, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TouchpadDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TouchpadDeviceSpec, 'ash.cros_healthd.mojom.TouchpadDevice', [
      mojo.internal.StructField('arg_input_device', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_driver_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_vendor_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_product_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: InputDevice
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.InputDeviceSpec, 'ash.cros_healthd.mojom.InputDevice', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_connection_type', 8, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ConnectionTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_enabled', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_physical_location', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: SensorInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensorInfoSpec, 'ash.cros_healthd.mojom.SensorInfo', [
      mojo.internal.StructField('arg_lid_angle', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NullableUint16Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_sensors', 8, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec, false), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: Sensor
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.SensorSpec, 'ash.cros_healthd.mojom.Sensor', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_device_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 12, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_location', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.LocationSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ThermalInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThermalInfoSpec, 'ash.cros_healthd.mojom.ThermalInfo', [
      mojo.internal.StructField('arg_thermal_sensors', 0, 0, mojo.internal.Array(mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ThermalSensorInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorInfoSpec, 'ash.cros_healthd.mojom.ThermalSensorInfo', [
      mojo.internal.StructField('arg_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_temperature_celsius', 8, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_source', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ThermalSensorSourceSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TelemetryInfo
mojo.internal.Struct(
    mojo.internal.bindings.ash.cros_healthd.mojom.TelemetryInfoSpec, 'ash.cros_healthd.mojom.TelemetryInfo', [
      mojo.internal.StructField('arg_battery_result', 0, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BatteryResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_block_device_result', 16, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NonRemovableBlockDeviceResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cpu_result', 32, 0, mojo.internal.bindings.ash.cros_healthd.mojom.CpuResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_timezone_result', 48, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TimezoneResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_memory_result', 64, 0, mojo.internal.bindings.ash.cros_healthd.mojom.MemoryResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_backlight_result', 80, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BacklightResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_fan_result', 96, 0, mojo.internal.bindings.ash.cros_healthd.mojom.FanResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_stateful_partition_result', 112, 0, mojo.internal.bindings.ash.cros_healthd.mojom.StatefulPartitionResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_bluetooth_result', 128, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BluetoothResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_deprecated_system_result', 144, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DEPRECATED_SystemResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_result', 160, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NetworkResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_audio_result', 176, 0, mojo.internal.bindings.ash.cros_healthd.mojom.AudioResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_boot_performance_result', 192, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BootPerformanceResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_bus_result', 208, 0, mojo.internal.bindings.ash.cros_healthd.mojom.BusResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_system_result', 224, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SystemResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_tpm_result', 240, 0, mojo.internal.bindings.ash.cros_healthd.mojom.TpmResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_graphics_result', 256, 0, mojo.internal.bindings.ash.cros_healthd.mojom.GraphicsResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_result', 272, 0, mojo.internal.bindings.ash.cros_healthd.mojom.DisplayResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_interface_result', 288, 0, mojo.internal.bindings.ash.cros_healthd.mojom.NetworkInterfaceResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_input_result', 296, 0, mojo.internal.bindings.ash.cros_healthd.mojom.InputResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_audio_hardware_result', 312, 0, mojo.internal.bindings.ash.cros_healthd.mojom.AudioHardwareResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_sensor_result', 328, 0, mojo.internal.bindings.ash.cros_healthd.mojom.SensorResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_thermal_result', 344, 0, mojo.internal.bindings.ash.cros_healthd.mojom.ThermalResultSpec, null, true, 0, undefined),
    ],
    [[0, 368]]);
