// Auto-generated MojoJS binding
 // Source: chromium_src/chrome/browser/glic/host/glic.mojom
 // Module: glic.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.ExperimentalOptInPageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.ActorClient": true, "glic.mojom.ActorHandler": true, "glic.mojom.AnnotationHandler": true, "glic.mojom.SkillsHandler": true, "glic.mojom.SkillsClient": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.TabFaviconHandler": true, "glic.mojom.ExperimentalTriggeringUpdatesHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "glic.mojom.InternalsPageHandler": true, "glic.mojom.InternalsPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandlerFactory": true, "glic.selection.SelectionOverlayPageHandler": true, "glic.selection.SelectionOverlayPage": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "drive_picker_host.mojom.DrivePickerResultHandler": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "ai_overlay_dialog.mojom.PageHandlerFactory": true, "ai_overlay_dialog.mojom.PageHandler": true, "ai_overlay_dialog.mojom.Page": true, "ai_overlay_dialog.mojom.AiOverlayTools": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.FjordTouchControllerPageHandler": true, "ash.screens_common.mojom.FjordImageSelectionPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "chrome_finds_internals.mojom.Page": true, "chrome_finds_internals.mojom.PageHandler": true, "chrome_finds_internals.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandlerFactory": true, "browser.context_hub.mojom.PageHandler": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "default_browser_modal.mojom.Page": true, "default_browser_modal.mojom.PageHandler": true, "default_browser_modal.mojom.PageHandlerFactory": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "drive_picker_host.mojom.DrivePickerHostHandler": true, "drive_picker_host_untrusted.mojom.PageHandler": true, "drive_picker_host_untrusted.mojom.Page": true, "drive_picker_host_untrusted.mojom.PageHandlerFactory": true, "drive_picker_host_untrusted.mojom.DrivePickerBridge": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandler": true, "feature_showcase.mojom.DefaultBrowserPageHandlerFactory": true, "feature_showcase.mojom.FeatureShowcasePageHandler": true, "feature_showcase.mojom.FeatureShowcasePageHandlerFactory": true, "feature_showcase.mojom.GoogleLensPageHandler": true, "feature_showcase.mojom.GoogleLensPageHandlerFactory": true, "feature_showcase.mojom.PasswordManagerPageHandler": true, "feature_showcase.mojom.PasswordManagerPageHandlerFactory": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandler": true, "feature_showcase.mojom.ThemesAndCustomizationPageHandlerFactory": true, "feed_internals.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandler": true, "feedback.report_unsafe_site.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandlerFactory": true, "indigo_internals.mojom.PageHandler": true, "indigo_internals.mojom.Page": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandlerFactory": true, "intro.mojom.FinishOrContinuePageHandler": true, "intro.mojom.IntroPageHandlerFactory": true, "intro.mojom.IntroPage": true, "intro.mojom.SignInCelebrationPageHandlerFactory": true, "intro.mojom.SignInCelebrationPageHandler": true, "intro.mojom.SignInCelebrationPage": true, "intro.mojom.SignInPromoPageHandlerFactory": true, "intro.mojom.SignInPromoPageHandler": true, "intro.mojom.SignInPromoPage": true, "mojom.LocationInternalsHandler": true, "multistep_filter_internals.mojom.PageHandler": true, "multistep_filter_internals.mojom.Page": true, "multistep_filter_internals.mojom.PageHandlerFactory": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandlerFactory": true, "omnibox.logging.mojom.PageHandler": true, "omnibox.logging.mojom.Page": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup.mojom.PageHandlerFactory": true, "omnibox_popup.mojom.PageHandler": true, "omnibox_popup.mojom.Page": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "personal_context.notice.mojom.PageHandler": true, "browser.personal_context_internals.mojom.PageHandlerFactory": true, "browser.personal_context_internals.mojom.PageHandler": true, "private_ai_internals.mojom.PrivateAiInternalsPage": true, "private_ai_internals.mojom.PrivateAiInternalsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "skills.mojom.PageHandlerFactory": true, "skills.mojom.PageHandler": true, "skills.mojom.SkillsPage": true, "skills.mojom.DialogHandler": true, "skills.mojom.SkillsPageHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsHandler": true, "subresource_filter.mojom.SubresourceFilterInternalsObserver": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webnn_internals.mojom.PageHandler": true, "webnn_internals.mojom.Page": true, "webnn_internals.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.IndigoAgentHost": true, "chrome.mojom.IndigoAgent": true, "chrome.mojom.IndigoOnboardingDialogHost": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "reading_mode.mojom.DistillationEvaluator": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "read_aloud.mojom.ReadAloudPlayer": true, "read_aloud.mojom.ReadAloudPlayerObserver": true, "read_aloud.mojom.ReadAloudPlayerFactory": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "request_header_integrity.mojom.ChromeCompanero": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.borealis_motd.mojom.PageHandlerFactory": true, "ash.borealis_motd.mojom.PageHandler": true, "ash.borealis_motd.mojom.Page": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "ash.cfm.mojom.HotrodStatus": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "accessibility_annotator_internals.mojom.PageHandlerFactory": true, "accessibility_annotator_internals.mojom.PageHandler": true, "accessibility_annotator_internals.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "actor.mojom.JournalClient": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandlerFactory": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "bookmarks_api.mojom.BookmarksObserver": true, "bookmarks_api.mojom.BookmarksService": true, "browser_controls_api.mojom.BrowserControlsService": true, "tabs_api.mojom.TabDragService": true, "tabs_api.mojom.DropTargetRegistration": true, "tabs_api.mojom.DropTarget": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "tabs_api.mojom.TabStripUIController": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "toolbar_ui_api.mojom.ToolbarUIObserver": true, "toolbar_ui_api.mojom.ToolbarUIService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.PageHandlerFactory": true, "guest_view.mojom.PageHandler": true, "guest_view.mojom.Page": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandlerFactory": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.OnDeviceTranslator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "optimization_guide.mojom.ModelBrokerDebugObserver": true, "optimization_guide.mojom.ModelBrokerDebug": true, "page_content_annotations.mojom.PageStabilityMonitor": true, "page_content_annotations.mojom.PageStabilityMonitorManager": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "policy.mojom.PolicyPageHandler": true, "policy.mojom.PolicyPageClient": true, "policy.mojom.PolicyPageHandlerFactory": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "private_ai.mojom.OakSession": true, "private_verification_tokens.mojom.PrivateVerificationTokensProvider": true, "record_replay.mojom.RecordReplayAgent": true, "record_replay.mojom.RecordReplayDriver": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "surface_embed.mojom.SurfaceEmbed": true, "surface_embed.mojom.SurfaceEmbedHost": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "vrp_flags.mojom.VrpFlags": true, "vrp_flags.mojom.VrpFlagsFactory": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.NavigationRendererIgnoreDuplicateNavigationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryCoordinator": true, "content.mojom.ChildMemoryConsumerRegistryHost": true, "content.mojom.MemoryCoordinatorDiagnosticsHost": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.MemoryCoordinatorTest": true, "content.mojom.MemoryCoordinatorTestClient": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.ModelLedSuggestionsService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "inspect.mojom.PageHandler": true, "inspect.mojom.Page": true, "inspect.mojom.PageHandlerFactory": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.DesktopProcessControl": true, "remoting.mojom.LoginSessionService": true, "remoting.mojom.PeerConnectionProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorConnectionWatcher": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.NetworkService": true, "network.mojom.NetworkContextCreator": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.DownloadObserver": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNCompilerContext": true, "webnn.mojom.WebNNCompilerService": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNWeightsFileCreator": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNModelLoader": true, "webnn.mojom.WebNNServiceIntrospectionClient": true, "webnn.mojom.WebNNServiceIntrospection": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIClassifier": false, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManagerCreateClassifierClient": false, "blink.mojom.AIManagerCreateSemanticEmbedderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISemanticEmbedder": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.IsolatedWebAppApiBridge": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ScriptToolHost": false, "blink.mojom.ModelContextHost": false, "blink.mojom.ModelContext": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": false, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.ImageReplacement": false, "blink.mojom.ImageReplacementHost": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NavigationResumeDeferredCommitListener": true, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.DeclarativePerformanceObserverHost": false, "blink.mojom.UnboundedSurfaceHost": false, "blink.mojom.UnboundedSurfaceClient": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.FederatedRequest": false, "blink.mojom.FederatedRequestService": false, "blink.mojom.WebNNIntrospectionClient": true, "blink.mojom.WebNNIntrospection": true, "blink.mojom.RTCLoggingDispatcher": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.ForeignSessionPageHandlerFactory": true, "history.mojom.ForeignSessionPageHandler": true, "history.mojom.ForeignSessionPage": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_cross_device_signin_promo.mojom.HistoryCrossDeviceSigninPromoHandler": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_clusters.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandlerFactory": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "tracked_element.mojom.TrackedElementManager": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '152.0.7925.0';
        
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

 mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.glic.mojom.ActuationEligibilitySpec = mojo.internal.bindings.glic.mojom.ActuationEligibilitySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ProfileReadyStateSpec = mojo.internal.bindings.glic.mojom.ProfileReadyStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ZoomActionSpec = mojo.internal.bindings.glic.mojom.ZoomActionSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.WebUiStateSpec = mojo.internal.bindings.glic.mojom.WebUiStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.MetricUserInputReactionTypeSpec = mojo.internal.bindings.glic.mojom.MetricUserInputReactionTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.PrepareForClientResultSpec = mojo.internal.bindings.glic.mojom.PrepareForClientResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.HelpCenterTopicSpec = mojo.internal.bindings.glic.mojom.HelpCenterTopicSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.PerformActionsErrorReasonSpec = mojo.internal.bindings.glic.mojom.PerformActionsErrorReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.CreateTaskErrorReasonSpec = mojo.internal.bindings.glic.mojom.CreateTaskErrorReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ActorTaskStateSpec = mojo.internal.bindings.glic.mojom.ActorTaskStateSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ActorTaskPauseReasonSpec = mojo.internal.bindings.glic.mojom.ActorTaskPauseReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ActorTaskStopReasonSpec = mojo.internal.bindings.glic.mojom.ActorTaskStopReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ActorTaskInterruptReasonSpec = mojo.internal.bindings.glic.mojom.ActorTaskInterruptReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.CaptureScreenshotErrorReasonSpec = mojo.internal.bindings.glic.mojom.CaptureScreenshotErrorReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.SbThreatTypeSpec = mojo.internal.bindings.glic.mojom.SbThreatTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.PlatformSpec = mojo.internal.bindings.glic.mojom.PlatformSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.FormFactorSpec = mojo.internal.bindings.glic.mojom.FormFactorSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ScreenshotImageFormatSpec = mojo.internal.bindings.glic.mojom.ScreenshotImageFormatSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ScreenshotCompressionQualitySpec = mojo.internal.bindings.glic.mojom.ScreenshotCompressionQualitySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ScrollToErrorReasonSpec = mojo.internal.bindings.glic.mojom.ScrollToErrorReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.SkillSourceSpec = mojo.internal.bindings.glic.mojom.SkillSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.SkillsWebClientEventSpec = mojo.internal.bindings.glic.mojom.SkillsWebClientEventSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.PinTriggerSpec = mojo.internal.bindings.glic.mojom.PinTriggerSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.UnpinTriggerSpec = mojo.internal.bindings.glic.mojom.UnpinTriggerSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.CancelActionsResultSpec = mojo.internal.bindings.glic.mojom.CancelActionsResultSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.SwitchConversationErrorReasonSpec = mojo.internal.bindings.glic.mojom.SwitchConversationErrorReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.RegisterConversationErrorReasonSpec = mojo.internal.bindings.glic.mojom.RegisterConversationErrorReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.PanelStateKindSpec = mojo.internal.bindings.glic.mojom.PanelStateKindSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.FreOverrideSpec = mojo.internal.bindings.glic.mojom.FreOverrideSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.InvocationSourceSpec = mojo.internal.bindings.glic.mojom.InvocationSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ActuationTargetSpec = mojo.internal.bindings.glic.mojom.ActuationTargetSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.WebClientModeSpec = mojo.internal.bindings.glic.mojom.WebClientModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.MicrophoneStatusSpec = mojo.internal.bindings.glic.mojom.MicrophoneStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.WebClientModelSpec = mojo.internal.bindings.glic.mojom.WebClientModelSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.WebUseCounterSpec = mojo.internal.bindings.glic.mojom.WebUseCounterSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ClientErrorDialogTypeSpec = mojo.internal.bindings.glic.mojom.ClientErrorDialogTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ResponseStopCauseSpec = mojo.internal.bindings.glic.mojom.ResponseStopCauseSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.AdditionalContextSourceSpec = mojo.internal.bindings.glic.mojom.AdditionalContextSourceSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateTypeSpec = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.SubscriberObservationTypeSpec = mojo.internal.bindings.glic.mojom.SubscriberObservationTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.LightweightPageFeatureSpec = mojo.internal.bindings.glic.mojom.LightweightPageFeatureSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.CaptureRegionErrorReasonSpec = mojo.internal.bindings.glic.mojom.CaptureRegionErrorReasonSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.SettingsPageFieldSpec = mojo.internal.bindings.glic.mojom.SettingsPageFieldSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.HostCapabilitySpec = mojo.internal.bindings.glic.mojom.HostCapabilitySpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.ClientCapabilitiesSpec = mojo.internal.bindings.glic.mojom.ClientCapabilitiesSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic.mojom.InvokeConversationSelectionSpec = mojo.internal.bindings.glic.mojom.InvokeConversationSelectionSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.InvokeConversationSelectionSpec.$.structSpec && mojo.internal.bindings.glic.mojom.InvokeConversationSelectionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.InvokeConversationSelectionSpec.$ = {};
mojo.internal.bindings.glic.mojom.InvokeTargetSurfaceSpec = mojo.internal.bindings.glic.mojom.InvokeTargetSurfaceSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.InvokeTargetSurfaceSpec.$.structSpec && mojo.internal.bindings.glic.mojom.InvokeTargetSurfaceSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.InvokeTargetSurfaceSpec.$ = {};
mojo.internal.bindings.glic.mojom.GetContextResultSpec = mojo.internal.bindings.glic.mojom.GetContextResultSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GetContextResultSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GetContextResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GetContextResultSpec.$ = {};
mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec = mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec.$ = {};
mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec = mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec.$ = {};
mojo.internal.bindings.glic.mojom.InvocationPayloadSpec = mojo.internal.bindings.glic.mojom.InvocationPayloadSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.InvocationPayloadSpec.$.structSpec && mojo.internal.bindings.glic.mojom.InvocationPayloadSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.InvocationPayloadSpec.$ = {};
mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec = mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec.$.structSpec && mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec.$ = {};
mojo.internal.bindings.glic.mojom.FocusedTabDataSpec = mojo.internal.bindings.glic.mojom.FocusedTabDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.FocusedTabDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.FocusedTabDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.FocusedTabDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.CapturedRegionSpec = mojo.internal.bindings.glic.mojom.CapturedRegionSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.CapturedRegionSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CapturedRegionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CapturedRegionSpec.$ = {};
mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec = mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec.$ = {};
mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec = mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ProfileEnablementSpec = mojo.internal.bindings.glic.mojom.ProfileEnablementSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ProfileEnablementSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ProfileEnablementSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ProfileEnablementSpec.$ = {};
mojo.internal.bindings.glic.mojom.ConfigInfoSpec = mojo.internal.bindings.glic.mojom.ConfigInfoSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ConfigInfoSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ConfigInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ConfigInfoSpec.$ = {};
mojo.internal.bindings.glic.mojom.DefaultConversationSpec = mojo.internal.bindings.glic.mojom.DefaultConversationSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.DefaultConversationSpec.$.structSpec && mojo.internal.bindings.glic.mojom.DefaultConversationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.DefaultConversationSpec.$ = {};
mojo.internal.bindings.glic.mojom.NewConversationSpec = mojo.internal.bindings.glic.mojom.NewConversationSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.NewConversationSpec.$.structSpec && mojo.internal.bindings.glic.mojom.NewConversationSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.NewConversationSpec.$ = {};
mojo.internal.bindings.glic.mojom.DefaultSurfaceMojoSpec = mojo.internal.bindings.glic.mojom.DefaultSurfaceMojoSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.DefaultSurfaceMojoSpec.$.structSpec && mojo.internal.bindings.glic.mojom.DefaultSurfaceMojoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.DefaultSurfaceMojoSpec.$ = {};
mojo.internal.bindings.glic.mojom.NewTabMojoSpec = mojo.internal.bindings.glic.mojom.NewTabMojoSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.NewTabMojoSpec.$.structSpec && mojo.internal.bindings.glic.mojom.NewTabMojoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.NewTabMojoSpec.$ = {};
mojo.internal.bindings.glic.mojom.ZssConfigSpec = mojo.internal.bindings.glic.mojom.ZssConfigSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ZssConfigSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ZssConfigSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ZssConfigSpec.$ = {};
mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec = mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec.$ = {};
mojo.internal.bindings.glic.mojom.UserProfileInfoSpec = mojo.internal.bindings.glic.mojom.UserProfileInfoSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.UserProfileInfoSpec.$.structSpec && mojo.internal.bindings.glic.mojom.UserProfileInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.UserProfileInfoSpec.$ = {};
mojo.internal.bindings.glic.mojom.SafeBrowsingVerdictResultSpec = mojo.internal.bindings.glic.mojom.SafeBrowsingVerdictResultSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SafeBrowsingVerdictResultSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SafeBrowsingVerdictResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SafeBrowsingVerdictResultSpec.$ = {};
mojo.internal.bindings.glic.mojom.CounterAbuseVerdictSpec = mojo.internal.bindings.glic.mojom.CounterAbuseVerdictSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.CounterAbuseVerdictSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CounterAbuseVerdictSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CounterAbuseVerdictSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec = mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec.$ = {};
mojo.internal.bindings.glic.mojom.ScreenshotCollectionOptionsSpec = mojo.internal.bindings.glic.mojom.ScreenshotCollectionOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ScreenshotCollectionOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ScreenshotCollectionOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ScreenshotCollectionOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec = mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec = mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ScrollToParamsSpec = mojo.internal.bindings.glic.mojom.ScrollToParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ScrollToParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ScrollToParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ScrollToParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec = mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec.$ = {};
mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec = mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec.$ = {};
mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec = mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec.$ = {};
mojo.internal.bindings.glic.mojom.SuggestionContentSpec = mojo.internal.bindings.glic.mojom.SuggestionContentSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SuggestionContentSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SuggestionContentSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SuggestionContentSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillPreviewSpec = mojo.internal.bindings.glic.mojom.SkillPreviewSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillPreviewSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillPreviewSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillPreviewSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillSpec = mojo.internal.bindings.glic.mojom.SkillSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillSpec.$ = {};
mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec = mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec.$ = {};
mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec = mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec.$.structSpec && mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec.$ = {};
mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec = mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec = mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec.$.structSpec && mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec.$ = {};
mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec = mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PinCandidateSpec = mojo.internal.bindings.glic.mojom.PinCandidateSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PinCandidateSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PinCandidateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PinCandidateSpec.$ = {};
mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec = mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec = mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.CaptureRegionParamsSpec = mojo.internal.bindings.glic.mojom.CaptureRegionParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.CaptureRegionParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CaptureRegionParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CaptureRegionParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActivateTabOptionsSpec = mojo.internal.bindings.glic.mojom.ActivateTabOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActivateTabOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActivateTabOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActivateTabOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ConversationInfoSpec = mojo.internal.bindings.glic.mojom.ConversationInfoSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ConversationInfoSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ConversationInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ConversationInfoSpec.$ = {};
mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec = mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.PanelStateSpec = mojo.internal.bindings.glic.mojom.PanelStateSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PanelStateSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PanelStateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PanelStateSpec.$ = {};
mojo.internal.bindings.glic.mojom.UniversalCartPayloadSpec = mojo.internal.bindings.glic.mojom.UniversalCartPayloadSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.UniversalCartPayloadSpec.$.structSpec && mojo.internal.bindings.glic.mojom.UniversalCartPayloadSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.UniversalCartPayloadSpec.$ = {};
mojo.internal.bindings.glic.mojom.InvokeOptionsSpec = mojo.internal.bindings.glic.mojom.InvokeOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.InvokeOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.InvokeOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.InvokeOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec = mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec.$ = {};
mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec = mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec.$.structSpec && mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec.$ = {};
mojo.internal.bindings.glic.mojom.ContextDataSpec = mojo.internal.bindings.glic.mojom.ContextDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ContextDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ContextDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ContextDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.ParentConversationMetadataSpec = mojo.internal.bindings.glic.mojom.ParentConversationMetadataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ParentConversationMetadataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ParentConversationMetadataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ParentConversationMetadataSpec.$ = {};
mojo.internal.bindings.glic.mojom.AdditionalContextSpec = mojo.internal.bindings.glic.mojom.AdditionalContextSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.AdditionalContextSpec.$.structSpec && mojo.internal.bindings.glic.mojom.AdditionalContextSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.AdditionalContextSpec.$ = {};
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateSpec = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateSpec.$ = {};
mojo.internal.bindings.glic.mojom.TabContextSpec = mojo.internal.bindings.glic.mojom.TabContextSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.TabContextSpec.$.structSpec && mojo.internal.bindings.glic.mojom.TabContextSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.TabContextSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebPageDataSpec = mojo.internal.bindings.glic.mojom.WebPageDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebPageDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebPageDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebPageDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.DocumentDataSpec = mojo.internal.bindings.glic.mojom.DocumentDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.DocumentDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.DocumentDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.DocumentDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec = mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.TabDataSpec = mojo.internal.bindings.glic.mojom.TabDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.TabDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.TabDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.TabDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec = mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec = mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec.$.structSpec && mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec.$ = {};
mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec = mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec.$ = {};
mojo.internal.bindings.glic.mojom.JournalSpec = mojo.internal.bindings.glic.mojom.JournalSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.JournalSpec.$.structSpec && mojo.internal.bindings.glic.mojom.JournalSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.JournalSpec.$ = {};
mojo.internal.bindings.glic.mojom.PendingCapturedRegionSpec = mojo.internal.bindings.glic.mojom.PendingCapturedRegionSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PendingCapturedRegionSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PendingCapturedRegionSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PendingCapturedRegionSpec.$ = {};
mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec = mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec.$ = {};
mojo.internal.bindings.glic.mojom.ScreenshotSpec = mojo.internal.bindings.glic.mojom.ScreenshotSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ScreenshotSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ScreenshotSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ScreenshotSpec.$ = {};
mojo.internal.bindings.glic.mojom.ImageInfoSpec = mojo.internal.bindings.glic.mojom.ImageInfoSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ImageInfoSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ImageInfoSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ImageInfoSpec.$ = {};
mojo.internal.bindings.glic.mojom.ImageBytesResultSpec = mojo.internal.bindings.glic.mojom.ImageBytesResultSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ImageBytesResultSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ImageBytesResultSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ImageBytesResultSpec.$ = {};
mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec = mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PreloadPage = mojo.internal.bindings.glic.mojom.PreloadPage || {};
mojo.internal.bindings.glic.mojom.PreloadPageSpec = mojo.internal.bindings.glic.mojom.PreloadPageSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.PreloadPageSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PreloadPageSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PreloadPageSpec.$ = {};
mojo.internal.bindings.glic.mojom.PreloadPage.$interfaceName = 'glic.mojom.PreloadPage';
mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec = mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.Page = mojo.internal.bindings.glic.mojom.Page || {};
mojo.internal.bindings.glic.mojom.PageSpec = mojo.internal.bindings.glic.mojom.PageSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.PageSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageSpec.$ = {};
mojo.internal.bindings.glic.mojom.Page.$interfaceName = 'glic.mojom.Page';
mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec = mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec = mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec = mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec = mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandler = mojo.internal.bindings.glic.mojom.GlicPreloadHandler || {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerSpec = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.GlicPreloadHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GlicPreloadHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GlicPreloadHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandler.$interfaceName = 'glic.mojom.GlicPreloadHandler';
mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec = mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory || {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactorySpec = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactorySpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactorySpec.$.structSpec && mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactorySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactorySpec.$ = {};
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory.$interfaceName = 'glic.mojom.GlicPreloadHandlerFactory';
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandlerFactory = mojo.internal.bindings.glic.mojom.PageHandlerFactory || {};
mojo.internal.bindings.glic.mojom.PageHandlerFactorySpec = mojo.internal.bindings.glic.mojom.PageHandlerFactorySpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.PageHandlerFactorySpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandlerFactorySpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandlerFactorySpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandlerFactory.$interfaceName = 'glic.mojom.PageHandlerFactory';
mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler = mojo.internal.bindings.glic.mojom.PageHandler || {};
mojo.internal.bindings.glic.mojom.PageHandlerSpec = mojo.internal.bindings.glic.mojom.PageHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.PageHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler.$interfaceName = 'glic.mojom.PageHandler';
mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.PinCandidatesObserver = mojo.internal.bindings.glic.mojom.PinCandidatesObserver || {};
mojo.internal.bindings.glic.mojom.PinCandidatesObserverSpec = mojo.internal.bindings.glic.mojom.PinCandidatesObserverSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.PinCandidatesObserverSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PinCandidatesObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PinCandidatesObserverSpec.$ = {};
mojo.internal.bindings.glic.mojom.PinCandidatesObserver.$interfaceName = 'glic.mojom.PinCandidatesObserver';
mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient = mojo.internal.bindings.glic.mojom.ActorClient || {};
mojo.internal.bindings.glic.mojom.ActorClientSpec = mojo.internal.bindings.glic.mojom.ActorClientSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.ActorClientSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClientSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClientSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient.$interfaceName = 'glic.mojom.ActorClient';
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler = mojo.internal.bindings.glic.mojom.ActorHandler || {};
mojo.internal.bindings.glic.mojom.ActorHandlerSpec = mojo.internal.bindings.glic.mojom.ActorHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.ActorHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler.$interfaceName = 'glic.mojom.ActorHandler';
mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec = mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.AnnotationHandler = mojo.internal.bindings.glic.mojom.AnnotationHandler || {};
mojo.internal.bindings.glic.mojom.AnnotationHandlerSpec = mojo.internal.bindings.glic.mojom.AnnotationHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.AnnotationHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.AnnotationHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.AnnotationHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.AnnotationHandler.$interfaceName = 'glic.mojom.AnnotationHandler';
mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec = mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec = mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler = mojo.internal.bindings.glic.mojom.SkillsHandler || {};
mojo.internal.bindings.glic.mojom.SkillsHandlerSpec = mojo.internal.bindings.glic.mojom.SkillsHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler.$interfaceName = 'glic.mojom.SkillsHandler';
mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsClient = mojo.internal.bindings.glic.mojom.SkillsClient || {};
mojo.internal.bindings.glic.mojom.SkillsClientSpec = mojo.internal.bindings.glic.mojom.SkillsClientSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.SkillsClientSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsClientSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsClientSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsClient.$interfaceName = 'glic.mojom.SkillsClient';
mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler = mojo.internal.bindings.glic.mojom.WebClientHandler || {};
mojo.internal.bindings.glic.mojom.WebClientHandlerSpec = mojo.internal.bindings.glic.mojom.WebClientHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler.$interfaceName = 'glic.mojom.WebClientHandler';
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.TabDataHandler = mojo.internal.bindings.glic.mojom.TabDataHandler || {};
mojo.internal.bindings.glic.mojom.TabDataHandlerSpec = mojo.internal.bindings.glic.mojom.TabDataHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.TabDataHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.TabDataHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.TabDataHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.TabDataHandler.$interfaceName = 'glic.mojom.TabDataHandler';
mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.TabFaviconHandler = mojo.internal.bindings.glic.mojom.TabFaviconHandler || {};
mojo.internal.bindings.glic.mojom.TabFaviconHandlerSpec = mojo.internal.bindings.glic.mojom.TabFaviconHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.TabFaviconHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.TabFaviconHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.TabFaviconHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.TabFaviconHandler.$interfaceName = 'glic.mojom.TabFaviconHandler';
mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler || {};
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerSpec = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerSpec.$ = {};
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler.$interfaceName = 'glic.mojom.ExperimentalTriggeringUpdatesHandler';
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient = mojo.internal.bindings.glic.mojom.WebClient || {};
mojo.internal.bindings.glic.mojom.WebClientSpec = mojo.internal.bindings.glic.mojom.WebClientSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.WebClientSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClientSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClientSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient.$interfaceName = 'glic.mojom.WebClient';
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec = mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec.$ = {};
mojo.internal.bindings.glic.mojom.CaptureRegionObserver = mojo.internal.bindings.glic.mojom.CaptureRegionObserver || {};
mojo.internal.bindings.glic.mojom.CaptureRegionObserverSpec = mojo.internal.bindings.glic.mojom.CaptureRegionObserverSpec || { $ : {} };
if (mojo.internal.bindings.glic.mojom.CaptureRegionObserverSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CaptureRegionObserverSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CaptureRegionObserverSpec.$ = {};
mojo.internal.bindings.glic.mojom.CaptureRegionObserver.$interfaceName = 'glic.mojom.CaptureRegionObserver';
mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec = mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec || { $: {} };
if (mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$.structSpec && mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$.structSpec.name === 'OpaqueStruct') mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$ = {};

// External type stubs (from imports)
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormConfirmedParamsSpec = mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormConfirmedParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormPresentedParamsSpec = mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormPresentedParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormPreviewChangedParamsSpec = mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormPreviewChangedParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.GmailOtpOptInResultSpec = mojo.internal.bindings.actor.webui.mojom.GmailOtpOptInResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationRequestSpec = mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationRequestSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationResponseSpec = mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationResponseSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec = mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec = mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogRequestSpec = mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogRequestSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogResponseSpec = mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogResponseSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.TaskOptionsSpec = mojo.internal.bindings.actor.webui.mojom.TaskOptionsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogRequestSpec = mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogRequestSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.actor = mojo.internal.bindings.actor || {};
mojo.internal.bindings.actor.webui = mojo.internal.bindings.actor.webui || {};
mojo.internal.bindings.actor.webui.mojom = mojo.internal.bindings.actor.webui.mojom || {};
mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogResponseSpec = mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogResponseSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.blink = mojo.internal.bindings.blink || {};
mojo.internal.bindings.blink.mojom = mojo.internal.bindings.blink.mojom || {};
mojo.internal.bindings.blink.mojom.PageMetadataSpec = mojo.internal.bindings.blink.mojom.PageMetadataSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.content_settings.mojom = mojo.internal.bindings.content_settings.mojom || {};
mojo.internal.bindings.content_settings.mojom.ContentSettingsTypeSpec = mojo.internal.bindings.content_settings.mojom.ContentSettingsTypeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.PointSpec = mojo.internal.bindings.gfx.mojom.PointSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.RectSpec = mojo.internal.bindings.gfx.mojom.RectSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.gfx = mojo.internal.bindings.gfx || {};
mojo.internal.bindings.gfx.mojom = mojo.internal.bindings.gfx.mojom || {};
mojo.internal.bindings.gfx.mojom.SizeSpec = mojo.internal.bindings.gfx.mojom.SizeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec = mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec = mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.CapturedRegionSpec = mojo.internal.bindings.glic.mojom.CapturedRegionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.FeatureModeSpec = mojo.internal.bindings.glic.mojom.FeatureModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.FocusedTabDataSpec = mojo.internal.bindings.glic.mojom.FocusedTabDataSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.GetContextResultSpec = mojo.internal.bindings.glic.mojom.GetContextResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec = mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.InvocationPayloadSpec = mojo.internal.bindings.glic.mojom.InvocationPayloadSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.glic = mojo.internal.bindings.glic || {};
mojo.internal.bindings.glic.mojom = mojo.internal.bindings.glic.mojom || {};
mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec = mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec = mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.BigBufferSpec = mojo.internal.bindings.mojo_base.mojom.BigBufferSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ByteStringSpec = mojo.internal.bindings.mojo_base.mojom.ByteStringSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.ProtoWrapperSpec = mojo.internal.bindings.mojo_base.mojom.ProtoWrapperSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec = mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec = mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.VersionSpec = mojo.internal.bindings.mojo_base.mojom.VersionSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.skia = mojo.internal.bindings.skia || {};
mojo.internal.bindings.skia.mojom = mojo.internal.bindings.skia.mojom || {};
mojo.internal.bindings.skia.mojom.BitmapN32Spec = mojo.internal.bindings.skia.mojom.BitmapN32Spec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.OriginSpec = mojo.internal.bindings.url.mojom.OriginSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

// Enum: ActuationEligibility
mojo.internal.bindings.glic.mojom.ActuationEligibility = {
  kEligible: 0,
  kMissingAccountCapability: 1,
  kMissingChromeBenefits: 2,
  kDisabledByPolicy: 3,
  kEnterpriseWithoutManagement: 4,
  kPlatformUnsupported: 5,
};

// Enum: ProfileReadyState
mojo.internal.bindings.glic.mojom.ProfileReadyState = {
  kUnknownError: 0,
  kSignInRequired: 1,
  kReady: 2,
  kIneligible: 3,
  kDisabledByAdmin: 4,
  kLocationMismatch: 5,
  kIneligibleAccount: 6,
};

// Enum: ZoomAction
mojo.internal.bindings.glic.mojom.ZoomAction = {
  kZoomIn: 0,
  kZoomOut: 1,
  kReset: 2,
};

// Enum: WebUiState
mojo.internal.bindings.glic.mojom.WebUiState = {
  kUninitialized: 0,
  kBeginLoad: 1,
  kShowLoading: 2,
  kHoldLoading: 3,
  kFinishLoading: 4,
  kError: 5,
  kOffline: 6,
  kUnavailable: 7,
  kReady: 8,
  kUnresponsive: 9,
  kSignIn: 10,
  kGuestError: 11,
  kDisabledByAdmin: 12,
  kWarmed: 13,
  kLocationMismatch: 14,
  kIneligibleAccount: 15,
};

// Enum: MetricUserInputReactionType
mojo.internal.bindings.glic.mojom.MetricUserInputReactionType = {
  kUnknown: 0,
  kCanned: 1,
  kModel: 2,
};

// Enum: PrepareForClientResult
mojo.internal.bindings.glic.mojom.PrepareForClientResult = {
  kSuccess: 0,
  kErrorResyncingCookies: 1,
  kRequiresSignIn: 2,
};

// Enum: HelpCenterTopic
mojo.internal.bindings.glic.mojom.HelpCenterTopic = {
  kLocationMismatch: 0,
  kIneligibleAccount: 1,
};

// Enum: PerformActionsErrorReason
mojo.internal.bindings.glic.mojom.PerformActionsErrorReason = {
  kUnknown: 0,
  MinVersion: 0,
  MinVersion: 0,
};

// Enum: CreateTaskErrorReason
mojo.internal.bindings.glic.mojom.CreateTaskErrorReason = {
  kUnknown: 0,
  kTaskSystemUnavailable: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: ActorTaskState
mojo.internal.bindings.glic.mojom.ActorTaskState = {
  kUnknown: 0,
  kIdle: 1,
  kActing: 2,
  kPaused: 3,
  kStopped: 4,
};

// Enum: ActorTaskPauseReason
mojo.internal.bindings.glic.mojom.ActorTaskPauseReason = {
  kPausedByModel: 0,
  kPausedByUser: 1,
};

// Enum: ActorTaskStopReason
mojo.internal.bindings.glic.mojom.ActorTaskStopReason = {
  kTaskComplete: 0,
  kStoppedByUser: 1,
  MinVersion: 1,
  MinVersion: 1,
  MinVersion: 1,
};

// Enum: ActorTaskInterruptReason
mojo.internal.bindings.glic.mojom.ActorTaskInterruptReason = {
  kUnknownReason: 0,
  kTaskComplete: 1,
  kWaitingUserInput: 2,
  kWaitingUserClarification: 3,
  kWaitingUserConfirmation: 4,
  kWaitingUserTakeOver: 5,
  kWaitingIrrelevantUserInput: 6,
};

// Enum: CaptureScreenshotErrorReason
mojo.internal.bindings.glic.mojom.CaptureScreenshotErrorReason = {
  kUnknown: 0,
  kScreenCaptureRequestThrottled: 1,
  kUserCancelledScreenPickerDialog: 2,
};

// Enum: SbThreatType
mojo.internal.bindings.glic.mojom.SbThreatType = {
  kUnspecified: 0,
  kSocialEngineering: 1,
  kMalware: 2,
  kUnwantedSoftware: 3,
};

// Enum: Platform
mojo.internal.bindings.glic.mojom.Platform = {
  kUnknown: 0,
  kMacOS: 1,
  kWindows: 2,
  kLinux: 3,
  kChromeOS: 4,
  kAndroid: 5,
};

// Enum: FormFactor
mojo.internal.bindings.glic.mojom.FormFactor = {
  kUnknown: 0,
  kDesktop: 1,
  kPhone: 2,
  kTablet: 3,
};

// Enum: ScreenshotImageFormat
mojo.internal.bindings.glic.mojom.ScreenshotImageFormat = {
  kJpeg: 0,
  kPng: 1,
  kWebp: 2,
};

// Enum: ScreenshotCompressionQuality
mojo.internal.bindings.glic.mojom.ScreenshotCompressionQuality = {
  kNone: 0,
  kLow: 1,
  kMedium: 2,
  kHigh: 3,
};

// Enum: ScrollToErrorReason
mojo.internal.bindings.glic.mojom.ScrollToErrorReason = {
  kNotSupported: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
  MinVersion: 0,
};

// Enum: SkillSource
mojo.internal.bindings.glic.mojom.SkillSource = {
  kUnknown: 0,
  kFirstParty: 1,
  kUserCreated: 2,
  MinVersion: 2,
};

// Enum: SkillsWebClientEvent
mojo.internal.bindings.glic.mojom.SkillsWebClientEvent = {
  kUnknown: 0,
  kUsedFirstPartySkill: 1,
  kUsedUserCreatedSkill: 2,
  kUsedDerivedFirstPartySkill: 3,
  kOpenedMenu: 4,
  kClickedManageFromMenu: 5,
  kClickedAddFromMenu: 6,
  kClickedEditFromMenu: 7,
  kClickedAddOn1pSkill: 8,
  kClickedSaveAsSkillHoverChip: 9,
  MinVersion: 9,
  MinVersion: 9,
  MinVersion: 9,
  MinVersion: 9,
  MinVersion: 9,
  MinVersion: 9,
  MinVersion: 9,
  MinVersion: 9,
  kSkillBuilderClickedPromoChip: 20,
  kSkillBuilderPromptGenerated: 21,
  kSkillBuilderClickedSaveAsSkill: 22,
};

// Enum: PinTrigger
mojo.internal.bindings.glic.mojom.PinTrigger = {
  kWebClientUnknown: 0,
  kCandidatesToggle: 1,
  kAtMention: 2,
  kActuation: 3,
};

// Enum: UnpinTrigger
mojo.internal.bindings.glic.mojom.UnpinTrigger = {
  kWebClientUnknown: 0,
  kCandidatesToggle: 1,
  kChip: 2,
  kActuation: 3,
};

// Enum: CancelActionsResult
mojo.internal.bindings.glic.mojom.CancelActionsResult = {
  kUnknown: 0,
  kSuccess: 1,
  kTaskNotFound: 2,
  kFailed: 3,
};

// Enum: SwitchConversationErrorReason
mojo.internal.bindings.glic.mojom.SwitchConversationErrorReason = {
  kUnknown: 0,
};

// Enum: RegisterConversationErrorReason
mojo.internal.bindings.glic.mojom.RegisterConversationErrorReason = {
  kUnknown: 0,
  kInstanceAlreadyHasConversationId: 1,
};

// Enum: PanelStateKind
mojo.internal.bindings.glic.mojom.PanelStateKind = {
  kHidden: 0,
  kDetached: 1,
  kAttached: 2,
};

// Enum: FreOverride
mojo.internal.bindings.glic.mojom.FreOverride = {
  kUnspecified: 0,
  kTrustFirstText: 1,
  kTrustFirstClick: 2,
  kTrustFirstInline: 3,
};

// Enum: InvocationSource
mojo.internal.bindings.glic.mojom.InvocationSource = {
  kOsButton: 0,
  kOsButtonMenu: 1,
  kOsHotkey: 2,
  kTopChromeButton: 3,
  kFre: 4,
  kProfilePicker: 5,
  kNudge: 6,
  kThreeDotsMenu: 7,
  kUnsupported: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
  MinVersion: 8,
};

// Enum: ActuationTarget
mojo.internal.bindings.glic.mojom.ActuationTarget = {
  kUnknown: 0,
  kAgentDecides: 1,
  kCurrentTab: 2,
  kNewTab: 3,
  MinVersion: 3,
};

// Enum: WebClientMode
mojo.internal.bindings.glic.mojom.WebClientMode = {
  kUnknown: 2,
  kText: 0,
  kAudio: 1,
};

// Enum: MicrophoneStatus
mojo.internal.bindings.glic.mojom.MicrophoneStatus = {
  kNotListening: 0,
  kListening: 1,
  kUnknown: 2,
};

// Enum: WebClientModel
mojo.internal.bindings.glic.mojom.WebClientModel = {
  kDefault: 0,
  kActor: 1,
};

// Enum: WebUseCounter
mojo.internal.bindings.glic.mojom.WebUseCounter = {
  kDefault: 0,
  kSubmitPromptWithAutoMode: 1,
  kTaskInterruptedForUserConfirmation: 2,
  kTaskInterruptedForUserClarification: 3,
  kSelectionToggledViaSharedMenu: 4,
  kSelectionToggledViaHotKey: 5,
  kSubmitPromptWithTextSelectionCue: 6,
};

// Enum: ClientErrorDialogType
mojo.internal.bindings.glic.mojom.ClientErrorDialogType = {
  kUnknown: 0,
  kDisabledByOrganization: 1,
  kGenericAvailability: 2,
  kIneligibleAccount: 3,
  kSignout: 4,
  kUnsupportedLocation: 5,
};

// Enum: ResponseStopCause
mojo.internal.bindings.glic.mojom.ResponseStopCause = {
  kUnknown: 0,
  kUser: 1,
  kOther: 2,
};

// Enum: AdditionalContextSource
mojo.internal.bindings.glic.mojom.AdditionalContextSource = {
  kUnknown: 2,
  kShareContextMenu: 0,
  kRegionSelection: 1,
  kTextSelection: 3,
  MinVersion: 3,
  MinVersion: 3,
};

// Enum: ExperimentalTriggeringUpdateType
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateType = {
  kUnknown: 0,
  kWorklog: 1,
  kPaused: 2,
  kTerminalCompletion: 3,
  kTerminalStopped: 4,
  kTerminalFailed: 5,
  MinVersion: 5,
};

// Enum: SubscriberObservationType
mojo.internal.bindings.glic.mojom.SubscriberObservationType = {
  kUpdate: 0,
  kComplete: 1,
  kError: 2,
};

// Enum: LightweightPageFeature
mojo.internal.bindings.glic.mojom.LightweightPageFeature = {
  kUnknown: 0,
  kYtAskButtonPresent: 1,
};

// Enum: CaptureRegionErrorReason
mojo.internal.bindings.glic.mojom.CaptureRegionErrorReason = {
  kUnknown: 0,
  kNoFocusableTab: 1,
};

// Enum: SettingsPageField
mojo.internal.bindings.glic.mojom.SettingsPageField = {
  kNone: 0,
  kOsHotkey: 1,
  kOsEntrypointToggle: 2,
};

// Enum: HostCapability
mojo.internal.bindings.glic.mojom.HostCapability = {
  kScrollToPdf: 0,
  kResetSizeAndLocationOnOpen: 1,
  kGetModelQualityClientId: 2,
  kMultiInstance: 3,
  kTrustFirstOnboardingArm1: 4,
  kTrustFirstOnboardingArm2: 5,
  kShareAdditionalImageContext: 6,
  kPdfZeroState: 7,
  kInvoke: 8,
  kNoLiveMode: 9,
  kAutoLoginSignInWithGoogle: 10,
  kShareImageViaInvoke: 11,
  kImgWebDragDrop: 12,
  kNoWebUiLoader: 13,
};

// Enum: ClientCapabilities
mojo.internal.bindings.glic.mojom.ClientCapabilities = {
  kIgnoresTabDataFavicons: 0,
};

// Interface: PreloadPage
mojo.internal.bindings.glic.mojom.PreloadPagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.PreloadPageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PreloadPage';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PreloadPagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PreloadPageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setProfileReadyState(arg_ready_state) {
    return this.$.setProfileReadyState(arg_ready_state);
  }
};

mojo.internal.bindings.glic.mojom.PreloadPageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PreloadPage', [
      { explicit: null },
    ]);
  }

  setProfileReadyState(arg_ready_state) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec,
      null,
      [arg_ready_state],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PreloadPage.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PreloadPageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PreloadPage',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PreloadPageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PreloadPage', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileReadyState');
          const result = this.impl.setProfileReadyState(params.arg_ready_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PreloadPageReceiver = mojo.internal.bindings.glic.mojom.PreloadPageReceiver;

mojo.internal.bindings.glic.mojom.PreloadPagePtr = mojo.internal.bindings.glic.mojom.PreloadPageRemote;
mojo.internal.bindings.glic.mojom.PreloadPageRequest = mojo.internal.bindings.glic.mojom.PreloadPagePendingReceiver;


// Interface: Page
mojo.internal.bindings.glic.mojom.PagePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.PageRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.Page';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PagePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PageRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  intentToShow() {
    return this.$.intentToShow();
  }
  setProfileReadyState(arg_ready_state) {
    return this.$.setProfileReadyState(arg_ready_state);
  }
  updatePageState(arg_panelStateKind) {
    return this.$.updatePageState(arg_panelStateKind);
  }
  zoom(arg_action) {
    return this.$.zoom(arg_action);
  }
};

mojo.internal.bindings.glic.mojom.PageRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.Page', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  intentToShow() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec,
      null,
      [],
      false);
  }

  setProfileReadyState(arg_ready_state) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec,
      null,
      [arg_ready_state],
      false);
  }

  updatePageState(arg_panelStateKind) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec,
      null,
      [arg_panelStateKind],
      false);
  }

  zoom(arg_action) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec,
      null,
      [arg_action],
      false);
  }

};

mojo.internal.bindings.glic.mojom.Page.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PageRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.Page',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PageReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.Page', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.intentToShow');
          const result = this.impl.intentToShow();
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setProfileReadyState');
          const result = this.impl.setProfileReadyState(params.arg_ready_state);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updatePageState');
          const result = this.impl.updatePageState(params.arg_panelStateKind);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.zoom');
          const result = this.impl.zoom(params.arg_action);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PageReceiver = mojo.internal.bindings.glic.mojom.PageReceiver;

mojo.internal.bindings.glic.mojom.PagePtr = mojo.internal.bindings.glic.mojom.PageRemote;
mojo.internal.bindings.glic.mojom.PageRequest = mojo.internal.bindings.glic.mojom.PagePendingReceiver;


// Interface: GlicPreloadHandler
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  prepareForClient() {
    return this.$.prepareForClient();
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.GlicPreloadHandler', [
      { explicit: null },
    ]);
  }

  prepareForClient() {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec,
      mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

};

mojo.internal.bindings.glic.mojom.GlicPreloadHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.GlicPreloadHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForClient');
          const result = this.impl.prepareForClient();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] prepareForClient FAILED:', e));
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

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerReceiver = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerReceiver;

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPtr = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRemote;
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerRequest = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPendingReceiver;


// Interface: GlicPreloadHandlerFactory
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.GlicPreloadHandlerFactory';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPreloadHandler(arg_receiver, arg_page) {
    return this.$.createPreloadHandler(arg_receiver, arg_page);
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.GlicPreloadHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPreloadHandler(arg_receiver, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec,
      null,
      [arg_receiver, arg_page],
      false);
  }

};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.GlicPreloadHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.GlicPreloadHandlerFactory', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPreloadHandler');
          const result = this.impl.createPreloadHandler(params.arg_receiver, params.arg_page);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryReceiver = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryReceiver;

mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPtr = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRemote;
mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryRequest = mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactoryPendingReceiver;


// Interface: PageHandlerFactory
mojo.internal.bindings.glic.mojom.PageHandlerFactoryPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandlerFactory';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PageHandlerFactoryPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createPageHandler(arg_receiver, arg_page) {
    return this.$.createPageHandler(arg_receiver, arg_page);
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PageHandlerFactory', [
      { explicit: null },
    ]);
  }

  createPageHandler(arg_receiver, arg_page) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec,
      [arg_receiver, arg_page],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PageHandlerFactory.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandlerFactory',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PageHandlerFactoryReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PageHandlerFactory', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createPageHandler');
          const result = this.impl.createPageHandler(params.arg_receiver, params.arg_page);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_instance_id' in response) ? response['arg_instance_id'] : response;
              const resp_obj = { 'arg_instance_id': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createPageHandler FAILED:', e));
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

mojo.internal.bindings.glic.mojom.PageHandlerFactoryReceiver = mojo.internal.bindings.glic.mojom.PageHandlerFactoryReceiver;

mojo.internal.bindings.glic.mojom.PageHandlerFactoryPtr = mojo.internal.bindings.glic.mojom.PageHandlerFactoryRemote;
mojo.internal.bindings.glic.mojom.PageHandlerFactoryRequest = mojo.internal.bindings.glic.mojom.PageHandlerFactoryPendingReceiver;


// Interface: PageHandler
mojo.internal.bindings.glic.mojom.PageHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PageHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PageHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PageHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createWebClient(arg_web_client_receiver) {
    return this.$.createWebClient(arg_web_client_receiver);
  }
  prepareForClient() {
    return this.$.prepareForClient();
  }
  webviewCommitted(arg_url) {
    return this.$.webviewCommitted(arg_url);
  }
  onZoomLevelChange(arg_zoom_factor) {
    return this.$.onZoomLevelChange(arg_zoom_factor);
  }
  closePanel() {
    return this.$.closePanel();
  }
  openHelpCenterTopicAndClosePanel(arg_topic) {
    return this.$.openHelpCenterTopicAndClosePanel(arg_topic);
  }
  openProfilePickerAndClosePanel() {
    return this.$.openProfilePickerAndClosePanel();
  }
  openDisabledByAdminLinkAndClosePanel() {
    return this.$.openDisabledByAdminLinkAndClosePanel();
  }
  signInAndClosePanel() {
    return this.$.signInAndClosePanel();
  }
  resizeWidget(arg_size, arg_duration) {
    return this.$.resizeWidget(arg_size, arg_duration);
  }
  enableDragResize(arg_enabled) {
    return this.$.enableDragResize(arg_enabled);
  }
  webUiStateChanged(arg_new_state) {
    return this.$.webUiStateChanged(arg_new_state);
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PageHandler', [
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

  createWebClient(arg_web_client_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec,
      null,
      [arg_web_client_receiver],
      false);
  }

  prepareForClient() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec,
      [],
      false);
  }

  webviewCommitted(arg_url) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec,
      null,
      [arg_url],
      false);
  }

  onZoomLevelChange(arg_zoom_factor) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec,
      null,
      [arg_zoom_factor],
      false);
  }

  closePanel() {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec,
      [],
      false);
  }

  openHelpCenterTopicAndClosePanel(arg_topic) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec,
      null,
      [arg_topic],
      false);
  }

  openProfilePickerAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  openDisabledByAdminLinkAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  signInAndClosePanel() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  resizeWidget(arg_size, arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec,
      mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec,
      [arg_size, arg_duration],
      false);
  }

  enableDragResize(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  webUiStateChanged(arg_new_state) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec,
      null,
      [arg_new_state],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PageHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PageHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PageHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PageHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PageHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebClient');
          const result = this.impl.createWebClient(params.arg_web_client_receiver);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prepareForClient');
          const result = this.impl.prepareForClient();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] prepareForClient FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webviewCommitted');
          const result = this.impl.webviewCommitted(params.arg_url);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onZoomLevelChange');
          const result = this.impl.onZoomLevelChange(params.arg_zoom_factor);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanel');
          const result = this.impl.closePanel();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] closePanel FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openHelpCenterTopicAndClosePanel');
          const result = this.impl.openHelpCenterTopicAndClosePanel(params.arg_topic);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openProfilePickerAndClosePanel');
          const result = this.impl.openProfilePickerAndClosePanel();
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openDisabledByAdminLinkAndClosePanel');
          const result = this.impl.openDisabledByAdminLinkAndClosePanel();
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.signInAndClosePanel');
          const result = this.impl.signInAndClosePanel();
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resizeWidget');
          const result = this.impl.resizeWidget(params.arg_size, params.arg_duration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] resizeWidget FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableDragResize');
          const result = this.impl.enableDragResize(params.arg_enabled);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webUiStateChanged');
          const result = this.impl.webUiStateChanged(params.arg_new_state);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PageHandlerReceiver = mojo.internal.bindings.glic.mojom.PageHandlerReceiver;

mojo.internal.bindings.glic.mojom.PageHandlerPtr = mojo.internal.bindings.glic.mojom.PageHandlerRemote;
mojo.internal.bindings.glic.mojom.PageHandlerRequest = mojo.internal.bindings.glic.mojom.PageHandlerPendingReceiver;


// Interface: PinCandidatesObserver
mojo.internal.bindings.glic.mojom.PinCandidatesObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.PinCandidatesObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.PinCandidatesObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onPinCandidatesChanged(arg_candidates) {
    return this.$.onPinCandidatesChanged(arg_candidates);
  }
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PinCandidatesObserver', [
      { explicit: null },
    ]);
  }

  onPinCandidatesChanged(arg_candidates) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec,
      null,
      [arg_candidates],
      false);
  }

};

mojo.internal.bindings.glic.mojom.PinCandidatesObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.PinCandidatesObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.PinCandidatesObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onPinCandidatesChanged');
          const result = this.impl.onPinCandidatesChanged(params.arg_candidates);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.PinCandidatesObserverReceiver = mojo.internal.bindings.glic.mojom.PinCandidatesObserverReceiver;

mojo.internal.bindings.glic.mojom.PinCandidatesObserverPtr = mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemote;
mojo.internal.bindings.glic.mojom.PinCandidatesObserverRequest = mojo.internal.bindings.glic.mojom.PinCandidatesObserverPendingReceiver;


// Interface: ActorClient
mojo.internal.bindings.glic.mojom.ActorClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.ActorClientRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.ActorClient';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.ActorClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.ActorClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  requestToShowCredentialSelectionDialog(arg_request) {
    return this.$.requestToShowCredentialSelectionDialog(arg_request);
  }
  requestToShowAutofillSuggestionsDialog(arg_request) {
    return this.$.requestToShowAutofillSuggestionsDialog(arg_request);
  }
  requestToShowUserConfirmationDialog(arg_request) {
    return this.$.requestToShowUserConfirmationDialog(arg_request);
  }
  requestToConfirmNavigation(arg_request) {
    return this.$.requestToConfirmNavigation(arg_request);
  }
  notifyActorTaskStateChanged(arg_task_id, arg_state) {
    return this.$.notifyActorTaskStateChanged(arg_task_id, arg_state);
  }
  requestToShowGmailOtpOptInDialog(arg_task_id) {
    return this.$.requestToShowGmailOtpOptInDialog(arg_task_id);
  }
};

mojo.internal.bindings.glic.mojom.ActorClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.ActorClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  requestToShowCredentialSelectionDialog(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec,
      [arg_request],
      false);
  }

  requestToShowAutofillSuggestionsDialog(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec,
      [arg_request],
      false);
  }

  requestToShowUserConfirmationDialog(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec,
      [arg_request],
      false);
  }

  requestToConfirmNavigation(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec,
      [arg_request],
      false);
  }

  notifyActorTaskStateChanged(arg_task_id, arg_state) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec,
      null,
      [arg_task_id, arg_state],
      false);
  }

  requestToShowGmailOtpOptInDialog(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec,
      [arg_task_id],
      false);
  }

};

mojo.internal.bindings.glic.mojom.ActorClient.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.ActorClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.ActorClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.ActorClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.ActorClient', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowCredentialSelectionDialog');
          const result = this.impl.requestToShowCredentialSelectionDialog(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestToShowCredentialSelectionDialog FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowAutofillSuggestionsDialog');
          const result = this.impl.requestToShowAutofillSuggestionsDialog(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestToShowAutofillSuggestionsDialog FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowUserConfirmationDialog');
          const result = this.impl.requestToShowUserConfirmationDialog(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestToShowUserConfirmationDialog FAILED:', e));
          }
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToConfirmNavigation');
          const result = this.impl.requestToConfirmNavigation(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_response' in response) ? response['arg_response'] : response;
              const resp_obj = { 'arg_response': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestToConfirmNavigation FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActorTaskStateChanged');
          const result = this.impl.notifyActorTaskStateChanged(params.arg_task_id, params.arg_state);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.requestToShowGmailOtpOptInDialog');
          const result = this.impl.requestToShowGmailOtpOptInDialog(params.arg_task_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] requestToShowGmailOtpOptInDialog FAILED:', e));
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

mojo.internal.bindings.glic.mojom.ActorClientReceiver = mojo.internal.bindings.glic.mojom.ActorClientReceiver;

mojo.internal.bindings.glic.mojom.ActorClientPtr = mojo.internal.bindings.glic.mojom.ActorClientRemote;
mojo.internal.bindings.glic.mojom.ActorClientRequest = mojo.internal.bindings.glic.mojom.ActorClientPendingReceiver;


// Interface: ActorHandler
mojo.internal.bindings.glic.mojom.ActorHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.ActorHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.ActorHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.ActorHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.ActorHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  autofillSuggestionDialogOnFormPresented(arg_task_id, arg_params) {
    return this.$.autofillSuggestionDialogOnFormPresented(arg_task_id, arg_params);
  }
  autofillSuggestionDialogOnFormPreviewChanged(arg_task_id, arg_params) {
    return this.$.autofillSuggestionDialogOnFormPreviewChanged(arg_task_id, arg_params);
  }
  autofillSuggestionDialogOnFormConfirmed(arg_task_id, arg_params) {
    return this.$.autofillSuggestionDialogOnFormConfirmed(arg_task_id, arg_params);
  }
  getContextForActorFromTab(arg_tab_id, arg_options) {
    return this.$.getContextForActorFromTab(arg_tab_id, arg_options);
  }
  createTask(arg_task_options) {
    return this.$.createTask(arg_task_options);
  }
  performActions(arg_actions_proto) {
    return this.$.performActions(arg_actions_proto);
  }
  cancelActions(arg_task_id) {
    return this.$.cancelActions(arg_task_id);
  }
  stopActorTask(arg_task_id, arg_stop_reason) {
    return this.$.stopActorTask(arg_task_id, arg_stop_reason);
  }
  pauseActorTask(arg_task_id, arg_pause_reason, arg_tab_id) {
    return this.$.pauseActorTask(arg_task_id, arg_pause_reason, arg_tab_id);
  }
  resumeActorTask(arg_task_id, arg_context_options) {
    return this.$.resumeActorTask(arg_task_id, arg_context_options);
  }
  interruptActorTask(arg_task_id, arg_interrupt_reason) {
    return this.$.interruptActorTask(arg_task_id, arg_interrupt_reason);
  }
  uninterruptActorTask(arg_task_id) {
    return this.$.uninterruptActorTask(arg_task_id);
  }
  createActorTab(arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id) {
    return this.$.createActorTab(arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id);
  }
  logBeginAsyncEvent(arg_event_async_id, arg_task_id, arg_event, arg_details) {
    return this.$.logBeginAsyncEvent(arg_event_async_id, arg_task_id, arg_event, arg_details);
  }
  logEndAsyncEvent(arg_event_async_id, arg_details) {
    return this.$.logEndAsyncEvent(arg_event_async_id, arg_details);
  }
  logInstantEvent(arg_task_id, arg_event, arg_details) {
    return this.$.logInstantEvent(arg_task_id, arg_event, arg_details);
  }
  journalClear() {
    return this.$.journalClear();
  }
  journalSnapshot(arg_clear_journal) {
    return this.$.journalSnapshot(arg_clear_journal);
  }
  journalStart(arg_max_bytes, arg_capture_screenshots) {
    return this.$.journalStart(arg_max_bytes, arg_capture_screenshots);
  }
  journalStop() {
    return this.$.journalStop();
  }
  journalRecordFeedback(arg_positive, arg_reason) {
    return this.$.journalRecordFeedback(arg_positive, arg_reason);
  }
};

mojo.internal.bindings.glic.mojom.ActorHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.ActorHandler', [
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

  autofillSuggestionDialogOnFormPresented(arg_task_id, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec,
      null,
      [arg_task_id, arg_params],
      false);
  }

  autofillSuggestionDialogOnFormPreviewChanged(arg_task_id, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec,
      null,
      [arg_task_id, arg_params],
      false);
  }

  autofillSuggestionDialogOnFormConfirmed(arg_task_id, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec,
      null,
      [arg_task_id, arg_params],
      false);
  }

  getContextForActorFromTab(arg_tab_id, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec,
      [arg_tab_id, arg_options],
      false);
  }

  createTask(arg_task_options) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec,
      null,
      [arg_task_options],
      false);
  }

  performActions(arg_actions_proto) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec,
      null,
      [arg_actions_proto],
      false);
  }

  cancelActions(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec,
      [arg_task_id],
      false);
  }

  stopActorTask(arg_task_id, arg_stop_reason) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec,
      null,
      [arg_task_id, arg_stop_reason],
      false);
  }

  pauseActorTask(arg_task_id, arg_pause_reason, arg_tab_id) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec,
      null,
      [arg_task_id, arg_pause_reason, arg_tab_id],
      false);
  }

  resumeActorTask(arg_task_id, arg_context_options) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec,
      [arg_task_id, arg_context_options],
      false);
  }

  interruptActorTask(arg_task_id, arg_interrupt_reason) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec,
      null,
      [arg_task_id, arg_interrupt_reason],
      false);
  }

  uninterruptActorTask(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  createActorTab(arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec,
      [arg_task_id, arg_open_in_background, arg_initiator_tab_id, arg_initiator_window_id],
      false);
  }

  logBeginAsyncEvent(arg_event_async_id, arg_task_id, arg_event, arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec,
      null,
      [arg_event_async_id, arg_task_id, arg_event, arg_details],
      false);
  }

  logEndAsyncEvent(arg_event_async_id, arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec,
      null,
      [arg_event_async_id, arg_details],
      false);
  }

  logInstantEvent(arg_task_id, arg_event, arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec,
      null,
      [arg_task_id, arg_event, arg_details],
      false);
  }

  journalClear() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec,
      null,
      [],
      false);
  }

  journalSnapshot(arg_clear_journal) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec,
      mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec,
      [arg_clear_journal],
      false);
  }

  journalStart(arg_max_bytes, arg_capture_screenshots) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec,
      null,
      [arg_max_bytes, arg_capture_screenshots],
      false);
  }

  journalStop() {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec,
      null,
      [],
      false);
  }

  journalRecordFeedback(arg_positive, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec,
      null,
      [arg_positive, arg_reason],
      false);
  }

};

mojo.internal.bindings.glic.mojom.ActorHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.ActorHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.ActorHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.ActorHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.ActorHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autofillSuggestionDialogOnFormPresented');
          const result = this.impl.autofillSuggestionDialogOnFormPresented(params.arg_task_id, params.arg_params);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autofillSuggestionDialogOnFormPreviewChanged');
          const result = this.impl.autofillSuggestionDialogOnFormPreviewChanged(params.arg_task_id, params.arg_params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.autofillSuggestionDialogOnFormConfirmed');
          const result = this.impl.autofillSuggestionDialogOnFormConfirmed(params.arg_task_id, params.arg_params);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getContextForActorFromTab');
          const result = this.impl.getContextForActorFromTab(params.arg_tab_id, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getContextForActorFromTab FAILED:', e));
          }
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTask');
          const result = this.impl.createTask(params.arg_task_options);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.performActions');
          const result = this.impl.performActions(params.arg_actions_proto);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.cancelActions');
          const result = this.impl.cancelActions(params.arg_task_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] cancelActions FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopActorTask');
          const result = this.impl.stopActorTask(params.arg_task_id, params.arg_stop_reason);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pauseActorTask');
          const result = this.impl.pauseActorTask(params.arg_task_id, params.arg_pause_reason, params.arg_tab_id);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resumeActorTask');
          const result = this.impl.resumeActorTask(params.arg_task_id, params.arg_context_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] resumeActorTask FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.interruptActorTask');
          const result = this.impl.interruptActorTask(params.arg_task_id, params.arg_interrupt_reason);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.uninterruptActorTask');
          const result = this.impl.uninterruptActorTask(params.arg_task_id);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createActorTab');
          const result = this.impl.createActorTab(params.arg_task_id, params.arg_open_in_background, params.arg_initiator_tab_id, params.arg_initiator_window_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_tab_data' in response) ? response['arg_tab_data'] : response;
              const resp_obj = { 'arg_tab_data': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createActorTab FAILED:', e));
          }
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logBeginAsyncEvent');
          const result = this.impl.logBeginAsyncEvent(params.arg_event_async_id, params.arg_task_id, params.arg_event, params.arg_details);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logEndAsyncEvent');
          const result = this.impl.logEndAsyncEvent(params.arg_event_async_id, params.arg_details);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.logInstantEvent');
          const result = this.impl.logInstantEvent(params.arg_task_id, params.arg_event, params.arg_details);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalClear');
          const result = this.impl.journalClear();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalSnapshot');
          const result = this.impl.journalSnapshot(params.arg_clear_journal);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_journal' in response) ? response['arg_journal'] : response;
              const resp_obj = { 'arg_journal': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] journalSnapshot FAILED:', e));
          }
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalStart');
          const result = this.impl.journalStart(params.arg_max_bytes, params.arg_capture_screenshots);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalStop');
          const result = this.impl.journalStop();
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.journalRecordFeedback');
          const result = this.impl.journalRecordFeedback(params.arg_positive, params.arg_reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.ActorHandlerReceiver = mojo.internal.bindings.glic.mojom.ActorHandlerReceiver;

mojo.internal.bindings.glic.mojom.ActorHandlerPtr = mojo.internal.bindings.glic.mojom.ActorHandlerRemote;
mojo.internal.bindings.glic.mojom.ActorHandlerRequest = mojo.internal.bindings.glic.mojom.ActorHandlerPendingReceiver;


// Interface: AnnotationHandler
mojo.internal.bindings.glic.mojom.AnnotationHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.AnnotationHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.AnnotationHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.AnnotationHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.AnnotationHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  scrollTo(arg_params) {
    return this.$.scrollTo(arg_params);
  }
  dropScrollToHighlight() {
    return this.$.dropScrollToHighlight();
  }
};

mojo.internal.bindings.glic.mojom.AnnotationHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.AnnotationHandler', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  scrollTo(arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec,
      mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec,
      [arg_params],
      false);
  }

  dropScrollToHighlight() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec,
      null,
      [],
      false);
  }

};

mojo.internal.bindings.glic.mojom.AnnotationHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.AnnotationHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.AnnotationHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.AnnotationHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.AnnotationHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.scrollTo');
          const result = this.impl.scrollTo(params.arg_params);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error_reason' in response) ? response['arg_error_reason'] : response;
              const resp_obj = { 'arg_error_reason': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] scrollTo FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.dropScrollToHighlight');
          const result = this.impl.dropScrollToHighlight();
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.AnnotationHandlerReceiver = mojo.internal.bindings.glic.mojom.AnnotationHandlerReceiver;

mojo.internal.bindings.glic.mojom.AnnotationHandlerPtr = mojo.internal.bindings.glic.mojom.AnnotationHandlerRemote;
mojo.internal.bindings.glic.mojom.AnnotationHandlerRequest = mojo.internal.bindings.glic.mojom.AnnotationHandlerPendingReceiver;


// Interface: SkillsHandler
mojo.internal.bindings.glic.mojom.SkillsHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.SkillsHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.SkillsHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.SkillsHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.SkillsHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  createSkill(arg_request) {
    return this.$.createSkill(arg_request);
  }
  updateSkill(arg_request) {
    return this.$.updateSkill(arg_request);
  }
  showManageSkillsUi() {
    return this.$.showManageSkillsUi();
  }
  showBrowseSkillsUi() {
    return this.$.showBrowseSkillsUi();
  }
  getSkill(arg_id) {
    return this.$.getSkill(arg_id);
  }
  recordSkillsWebClientEvent(arg_event) {
    return this.$.recordSkillsWebClientEvent(arg_event);
  }
};

mojo.internal.bindings.glic.mojom.SkillsHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.SkillsHandler', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  createSkill(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec,
      mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec,
      [arg_request],
      false);
  }

  updateSkill(arg_request) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec,
      mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec,
      [arg_request],
      false);
  }

  showManageSkillsUi() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec,
      null,
      [],
      false);
  }

  showBrowseSkillsUi() {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec,
      null,
      [],
      false);
  }

  getSkill(arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec,
      mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec,
      [arg_id],
      false);
  }

  recordSkillsWebClientEvent(arg_event) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec,
      null,
      [arg_event],
      false);
  }

};

mojo.internal.bindings.glic.mojom.SkillsHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.SkillsHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.SkillsHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.SkillsHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.SkillsHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSkill');
          const result = this.impl.createSkill(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_modal_opened' in response) ? response['arg_modal_opened'] : response;
              const resp_obj = { 'arg_modal_opened': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createSkill FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.updateSkill');
          const result = this.impl.updateSkill(params.arg_request);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_modal_opened' in response) ? response['arg_modal_opened'] : response;
              const resp_obj = { 'arg_modal_opened': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] updateSkill FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showManageSkillsUi');
          const result = this.impl.showManageSkillsUi();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showBrowseSkillsUi');
          const result = this.impl.showBrowseSkillsUi();
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSkill');
          const result = this.impl.getSkill(params.arg_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_skill' in response) ? response['arg_skill'] : response;
              const resp_obj = { 'arg_skill': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getSkill FAILED:', e));
          }
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.recordSkillsWebClientEvent');
          const result = this.impl.recordSkillsWebClientEvent(params.arg_event);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.SkillsHandlerReceiver = mojo.internal.bindings.glic.mojom.SkillsHandlerReceiver;

mojo.internal.bindings.glic.mojom.SkillsHandlerPtr = mojo.internal.bindings.glic.mojom.SkillsHandlerRemote;
mojo.internal.bindings.glic.mojom.SkillsHandlerRequest = mojo.internal.bindings.glic.mojom.SkillsHandlerPendingReceiver;


// Interface: SkillsClient
mojo.internal.bindings.glic.mojom.SkillsClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.SkillsClientRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.SkillsClient';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.SkillsClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.SkillsClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifySkillPreviewsChanged(arg_skill_previews) {
    return this.$.notifySkillPreviewsChanged(arg_skill_previews);
  }
  notifyContextualSkillPreviewsChanged(arg_skill_previews) {
    return this.$.notifyContextualSkillPreviewsChanged(arg_skill_previews);
  }
  notifySkillPreviewChanged(arg_skill_preview) {
    return this.$.notifySkillPreviewChanged(arg_skill_preview);
  }
  notifySkillDeleted(arg_skill_id) {
    return this.$.notifySkillDeleted(arg_skill_id);
  }
  notifySkillToInvokeChanged(arg_skill) {
    return this.$.notifySkillToInvokeChanged(arg_skill);
  }
};

mojo.internal.bindings.glic.mojom.SkillsClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.SkillsClient', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
    ]);
  }

  notifySkillPreviewsChanged(arg_skill_previews) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec,
      null,
      [arg_skill_previews],
      false);
  }

  notifyContextualSkillPreviewsChanged(arg_skill_previews) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec,
      null,
      [arg_skill_previews],
      false);
  }

  notifySkillPreviewChanged(arg_skill_preview) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec,
      null,
      [arg_skill_preview],
      false);
  }

  notifySkillDeleted(arg_skill_id) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec,
      null,
      [arg_skill_id],
      false);
  }

  notifySkillToInvokeChanged(arg_skill) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec,
      null,
      [arg_skill],
      false);
  }

};

mojo.internal.bindings.glic.mojom.SkillsClient.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.SkillsClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.SkillsClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.SkillsClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.SkillsClient', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillPreviewsChanged');
          const result = this.impl.notifySkillPreviewsChanged(params.arg_skill_previews);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyContextualSkillPreviewsChanged');
          const result = this.impl.notifyContextualSkillPreviewsChanged(params.arg_skill_previews);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillPreviewChanged');
          const result = this.impl.notifySkillPreviewChanged(params.arg_skill_preview);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillDeleted');
          const result = this.impl.notifySkillDeleted(params.arg_skill_id);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifySkillToInvokeChanged');
          const result = this.impl.notifySkillToInvokeChanged(params.arg_skill);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.SkillsClientReceiver = mojo.internal.bindings.glic.mojom.SkillsClientReceiver;

mojo.internal.bindings.glic.mojom.SkillsClientPtr = mojo.internal.bindings.glic.mojom.SkillsClientRemote;
mojo.internal.bindings.glic.mojom.SkillsClientRequest = mojo.internal.bindings.glic.mojom.SkillsClientPendingReceiver;


// Interface: WebClientHandler
mojo.internal.bindings.glic.mojom.WebClientHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.WebClientHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClientHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.WebClientHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.WebClientHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  webClientCreated(arg_web_client) {
    return this.$.webClientCreated(arg_web_client);
  }
  webClientInitialized() {
    return this.$.webClientInitialized();
  }
  webClientInitializeFailed() {
    return this.$.webClientInitializeFailed();
  }
  createActorHandler(arg_receiver, arg_client) {
    return this.$.createActorHandler(arg_receiver, arg_client);
  }
  createAnnotationHandler(arg_receiver) {
    return this.$.createAnnotationHandler(arg_receiver);
  }
  createSkillsHandler(arg_receiver, arg_client) {
    return this.$.createSkillsHandler(arg_receiver, arg_client);
  }
  createTab(arg_url, arg_open_in_background, arg_window_id) {
    return this.$.createTab(arg_url, arg_open_in_background, arg_window_id);
  }
  activateTabWithUrl(arg_exact_url, arg_options) {
    return this.$.activateTabWithUrl(arg_exact_url, arg_options);
  }
  openLinkInPopup(arg_url, arg_popup_width, arg_popup_height) {
    return this.$.openLinkInPopup(arg_url, arg_popup_width, arg_popup_height);
  }
  openGlicSettingsPage(arg_options) {
    return this.$.openGlicSettingsPage(arg_options);
  }
  openPasswordManagerSettingsPage() {
    return this.$.openPasswordManagerSettingsPage();
  }
  closePanel() {
    return this.$.closePanel();
  }
  closePanelAndShutdown() {
    return this.$.closePanelAndShutdown();
  }
  attachPanel() {
    return this.$.attachPanel();
  }
  detachPanel() {
    return this.$.detachPanel();
  }
  onModeChange(arg_new_mode) {
    return this.$.onModeChange(arg_new_mode);
  }
  onMicrophoneStatusChange(arg_status) {
    return this.$.onMicrophoneStatusChange(arg_status);
  }
  showProfilePicker() {
    return this.$.showProfilePicker();
  }
  getModelQualityClientId() {
    return this.$.getModelQualityClientId();
  }
  getContextFromFocusedTab(arg_options) {
    return this.$.getContextFromFocusedTab(arg_options);
  }
  getContextFromTab(arg_tab_id, arg_options) {
    return this.$.getContextFromTab(arg_tab_id, arg_options);
  }
  getImageBytesFromTab(arg_tab_id, arg_document_id, arg_dom_node_id) {
    return this.$.getImageBytesFromTab(arg_tab_id, arg_document_id, arg_dom_node_id);
  }
  setMaximumNumberOfPinnedTabs(arg_requested_max) {
    return this.$.setMaximumNumberOfPinnedTabs(arg_requested_max);
  }
  pinTabs(arg_tab_ids, arg_options) {
    return this.$.pinTabs(arg_tab_ids, arg_options);
  }
  unpinTabs(arg_tab_ids, arg_options) {
    return this.$.unpinTabs(arg_tab_ids, arg_options);
  }
  unpinAllTabs(arg_options) {
    return this.$.unpinAllTabs(arg_options);
  }
  subscribeToPinCandidates(arg_options, arg_observer) {
    return this.$.subscribeToPinCandidates(arg_options, arg_observer);
  }
  activateTab(arg_task_id) {
    return this.$.activateTab(arg_task_id);
  }
  resizeWidget(arg_size, arg_duration) {
    return this.$.resizeWidget(arg_size, arg_duration);
  }
  captureScreenshot() {
    return this.$.captureScreenshot();
  }
  captureRegion(arg_observer, arg_params) {
    return this.$.captureRegion(arg_observer, arg_params);
  }
  deleteCapturedRegion(arg_tab_id, arg_id) {
    return this.$.deleteCapturedRegion(arg_tab_id, arg_id);
  }
  setAudioDucking(arg_enable) {
    return this.$.setAudioDucking(arg_enable);
  }
  setMinimumPanelSize(arg_size) {
    return this.$.setMinimumPanelSize(arg_size);
  }
  setMicrophonePermissionState(arg_enabled) {
    return this.$.setMicrophonePermissionState(arg_enabled);
  }
  setLocationPermissionState(arg_enabled) {
    return this.$.setLocationPermissionState(arg_enabled);
  }
  setTabContextPermissionState(arg_enabled) {
    return this.$.setTabContextPermissionState(arg_enabled);
  }
  setClosedCaptioningSetting(arg_enabled) {
    return this.$.setClosedCaptioningSetting(arg_enabled);
  }
  setActuationOnWebSetting(arg_enabled) {
    return this.$.setActuationOnWebSetting(arg_enabled);
  }
  shouldAllowMediaPermissionRequest() {
    return this.$.shouldAllowMediaPermissionRequest();
  }
  shouldAllowGeolocationPermissionRequest() {
    return this.$.shouldAllowGeolocationPermissionRequest();
  }
  setContextAccessIndicator(arg_enabled) {
    return this.$.setContextAccessIndicator(arg_enabled);
  }
  getUserProfileInfo() {
    return this.$.getUserProfileInfo();
  }
  syncCookies() {
    return this.$.syncCookies();
  }
  clientErrorDialogStateChanged(arg_shown_dialog_type) {
    return this.$.clientErrorDialogStateChanged(arg_shown_dialog_type);
  }
  reportClientTransientError(arg_status_code) {
    return this.$.reportClientTransientError(arg_status_code);
  }
  processCounterAbuseVerdict(arg_tab_id, arg_verdict) {
    return this.$.processCounterAbuseVerdict(arg_tab_id, arg_verdict);
  }
  onOptinImpression() {
    return this.$.onOptinImpression();
  }
  onUserInputSubmitted(arg_mode) {
    return this.$.onUserInputSubmitted(arg_mode);
  }
  onContextUploadStarted() {
    return this.$.onContextUploadStarted();
  }
  onContextUploadCompleted() {
    return this.$.onContextUploadCompleted();
  }
  onReaction(arg_reactionType) {
    return this.$.onReaction(arg_reactionType);
  }
  onResponseStarted() {
    return this.$.onResponseStarted();
  }
  onResponseStopped(arg_details) {
    return this.$.onResponseStopped(arg_details);
  }
  onSessionTerminated() {
    return this.$.onSessionTerminated();
  }
  onTurnCompleted(arg_model, arg_duration) {
    return this.$.onTurnCompleted(arg_model, arg_duration);
  }
  onResponseRated(arg_positive) {
    return this.$.onResponseRated(arg_positive);
  }
  onClosedCaptionsShown() {
    return this.$.onClosedCaptionsShown();
  }
  onActionSubmitted(arg_is_retry) {
    return this.$.onActionSubmitted(arg_is_retry);
  }
  setSyntheticExperimentState(arg_trial_name, arg_group_name) {
    return this.$.setSyntheticExperimentState(arg_trial_name, arg_group_name);
  }
  openOsPermissionSettingsMenu(arg_type) {
    return this.$.openOsPermissionSettingsMenu(arg_type);
  }
  getOsMicrophonePermissionStatus() {
    return this.$.getOsMicrophonePermissionStatus();
  }
  getZeroStateSuggestionsAndSubscribe(arg_is_live, arg_options) {
    return this.$.getZeroStateSuggestionsAndSubscribe(arg_is_live, arg_options);
  }
  getZeroStateSuggestionsForFocusedTab(arg_is_first_run) {
    return this.$.getZeroStateSuggestionsForFocusedTab(arg_is_first_run);
  }
  maybeRefreshUserStatus() {
    return this.$.maybeRefreshUserStatus();
  }
  isDebuggerAttached() {
    return this.$.isDebuggerAttached();
  }
  subscribeToPageMetadata(arg_tab_id, arg_names) {
    return this.$.subscribeToPageMetadata(arg_tab_id, arg_names);
  }
  switchConversation(arg_info) {
    return this.$.switchConversation(arg_info);
  }
  registerConversation(arg_info) {
    return this.$.registerConversation(arg_info);
  }
  setOnboardingCompleted() {
    return this.$.setOnboardingCompleted();
  }
  subscribeToTabData(arg_tab_id, arg_receiver) {
    return this.$.subscribeToTabData(arg_tab_id, arg_receiver);
  }
  subscribeToTabFavicon(arg_tab_id, arg_receiver) {
    return this.$.subscribeToTabFavicon(arg_tab_id, arg_receiver);
  }
};

mojo.internal.bindings.glic.mojom.WebClientHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.WebClientHandler', [
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

  webClientCreated(arg_web_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec,
      [arg_web_client],
      false);
  }

  webClientInitialized() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec,
      null,
      [],
      false);
  }

  webClientInitializeFailed() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec,
      null,
      [],
      false);
  }

  createActorHandler(arg_receiver, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec,
      null,
      [arg_receiver, arg_client],
      false);
  }

  createAnnotationHandler(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  createSkillsHandler(arg_receiver, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec,
      null,
      [arg_receiver, arg_client],
      false);
  }

  createTab(arg_url, arg_open_in_background, arg_window_id) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec,
      [arg_url, arg_open_in_background, arg_window_id],
      false);
  }

  activateTabWithUrl(arg_exact_url, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec,
      [arg_exact_url, arg_options],
      false);
  }

  openLinkInPopup(arg_url, arg_popup_width, arg_popup_height) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec,
      null,
      [arg_url, arg_popup_width, arg_popup_height],
      false);
  }

  openGlicSettingsPage(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec,
      null,
      [arg_options],
      false);
  }

  openPasswordManagerSettingsPage() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec,
      null,
      [],
      false);
  }

  closePanel() {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec,
      null,
      [],
      false);
  }

  closePanelAndShutdown() {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec,
      null,
      [],
      false);
  }

  attachPanel() {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec,
      null,
      [],
      false);
  }

  detachPanel() {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec,
      null,
      [],
      false);
  }

  onModeChange(arg_new_mode) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec,
      null,
      [arg_new_mode],
      false);
  }

  onMicrophoneStatusChange(arg_status) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec,
      null,
      [arg_status],
      false);
  }

  showProfilePicker() {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec,
      null,
      [],
      false);
  }

  getModelQualityClientId() {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec,
      [],
      false);
  }

  getContextFromFocusedTab(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getContextFromTab(arg_tab_id, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec,
      [arg_tab_id, arg_options],
      false);
  }

  getImageBytesFromTab(arg_tab_id, arg_document_id, arg_dom_node_id) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec,
      [arg_tab_id, arg_document_id, arg_dom_node_id],
      false);
  }

  setMaximumNumberOfPinnedTabs(arg_requested_max) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec,
      [arg_requested_max],
      false);
  }

  pinTabs(arg_tab_ids, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec,
      [arg_tab_ids, arg_options],
      false);
  }

  unpinTabs(arg_tab_ids, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec,
      [arg_tab_ids, arg_options],
      false);
  }

  unpinAllTabs(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec,
      null,
      [arg_options],
      false);
  }

  subscribeToPinCandidates(arg_options, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec,
      null,
      [arg_options, arg_observer],
      false);
  }

  activateTab(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  resizeWidget(arg_size, arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec,
      [arg_size, arg_duration],
      false);
  }

  captureScreenshot() {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec,
      [],
      false);
  }

  captureRegion(arg_observer, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec,
      null,
      [arg_observer, arg_params],
      false);
  }

  deleteCapturedRegion(arg_tab_id, arg_id) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec,
      null,
      [arg_tab_id, arg_id],
      false);
  }

  setAudioDucking(arg_enable) {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec,
      [arg_enable],
      false);
  }

  setMinimumPanelSize(arg_size) {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec,
      null,
      [arg_size],
      false);
  }

  setMicrophonePermissionState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setLocationPermissionState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setTabContextPermissionState(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setClosedCaptioningSetting(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  setActuationOnWebSetting(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec,
      [arg_enabled],
      false);
  }

  shouldAllowMediaPermissionRequest() {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec,
      [],
      false);
  }

  shouldAllowGeolocationPermissionRequest() {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec,
      [],
      false);
  }

  setContextAccessIndicator(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  getUserProfileInfo() {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec,
      [],
      false);
  }

  syncCookies() {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec,
      [],
      false);
  }

  clientErrorDialogStateChanged(arg_shown_dialog_type) {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec,
      null,
      [arg_shown_dialog_type],
      false);
  }

  reportClientTransientError(arg_status_code) {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec,
      null,
      [arg_status_code],
      false);
  }

  processCounterAbuseVerdict(arg_tab_id, arg_verdict) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec,
      null,
      [arg_tab_id, arg_verdict],
      false);
  }

  onOptinImpression() {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec,
      null,
      [],
      false);
  }

  onUserInputSubmitted(arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec,
      null,
      [arg_mode],
      false);
  }

  onContextUploadStarted() {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onContextUploadCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  onReaction(arg_reactionType) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec,
      null,
      [arg_reactionType],
      false);
  }

  onResponseStarted() {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec,
      null,
      [],
      false);
  }

  onResponseStopped(arg_details) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec,
      null,
      [arg_details],
      false);
  }

  onSessionTerminated() {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec,
      null,
      [],
      false);
  }

  onTurnCompleted(arg_model, arg_duration) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec,
      null,
      [arg_model, arg_duration],
      false);
  }

  onResponseRated(arg_positive) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec,
      null,
      [arg_positive],
      false);
  }

  onClosedCaptionsShown() {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec,
      null,
      [],
      false);
  }

  onActionSubmitted(arg_is_retry) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec,
      null,
      [arg_is_retry],
      false);
  }

  setSyntheticExperimentState(arg_trial_name, arg_group_name) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec,
      null,
      [arg_trial_name, arg_group_name],
      false);
  }

  openOsPermissionSettingsMenu(arg_type) {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec,
      null,
      [arg_type],
      false);
  }

  getOsMicrophonePermissionStatus() {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec,
      [],
      false);
  }

  getZeroStateSuggestionsAndSubscribe(arg_is_live, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec,
      [arg_is_live, arg_options],
      false);
  }

  getZeroStateSuggestionsForFocusedTab(arg_is_first_run) {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec,
      [arg_is_first_run],
      false);
  }

  maybeRefreshUserStatus() {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec,
      null,
      [],
      false);
  }

  isDebuggerAttached() {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec,
      [],
      false);
  }

  subscribeToPageMetadata(arg_tab_id, arg_names) {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec,
      [arg_tab_id, arg_names],
      false);
  }

  switchConversation(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec,
      [arg_info],
      false);
  }

  registerConversation(arg_info) {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec,
      [arg_info],
      false);
  }

  setOnboardingCompleted() {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec,
      null,
      [],
      false);
  }

  subscribeToTabData(arg_tab_id, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec,
      null,
      [arg_tab_id, arg_receiver],
      false);
  }

  subscribeToTabFavicon(arg_tab_id, arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec,
      null,
      [arg_tab_id, arg_receiver],
      false);
  }

};

mojo.internal.bindings.glic.mojom.WebClientHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.WebClientHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClientHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.WebClientHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.WebClientHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientCreated');
          const result = this.impl.webClientCreated(params.arg_web_client);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_initial_state' in response) ? response['arg_initial_state'] : response;
              const resp_obj = { 'arg_initial_state': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] webClientCreated FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientInitialized');
          const result = this.impl.webClientInitialized();
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.webClientInitializeFailed');
          const result = this.impl.webClientInitializeFailed();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createActorHandler');
          const result = this.impl.createActorHandler(params.arg_receiver, params.arg_client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createAnnotationHandler');
          const result = this.impl.createAnnotationHandler(params.arg_receiver);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createSkillsHandler');
          const result = this.impl.createSkillsHandler(params.arg_receiver, params.arg_client);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTab');
          const result = this.impl.createTab(params.arg_url, params.arg_open_in_background, params.arg_window_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_tab_data' in response) ? response['arg_tab_data'] : response;
              const resp_obj = { 'arg_tab_data': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] createTab FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateTabWithUrl');
          const result = this.impl.activateTabWithUrl(params.arg_exact_url, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_tab_data' in response) ? response['arg_tab_data'] : response;
              const resp_obj = { 'arg_tab_data': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] activateTabWithUrl FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openLinkInPopup');
          const result = this.impl.openLinkInPopup(params.arg_url, params.arg_popup_width, params.arg_popup_height);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openGlicSettingsPage');
          const result = this.impl.openGlicSettingsPage(params.arg_options);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openPasswordManagerSettingsPage');
          const result = this.impl.openPasswordManagerSettingsPage();
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanel');
          const result = this.impl.closePanel();
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closePanelAndShutdown');
          const result = this.impl.closePanelAndShutdown();
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.attachPanel');
          const result = this.impl.attachPanel();
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.detachPanel');
          const result = this.impl.detachPanel();
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onModeChange');
          const result = this.impl.onModeChange(params.arg_new_mode);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onMicrophoneStatusChange');
          const result = this.impl.onMicrophoneStatusChange(params.arg_status);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.showProfilePicker');
          const result = this.impl.showProfilePicker();
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getModelQualityClientId');
          const result = this.impl.getModelQualityClientId();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_model_quality_client_id' in response) ? response['arg_model_quality_client_id'] : response;
              const resp_obj = { 'arg_model_quality_client_id': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getModelQualityClientId FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getContextFromFocusedTab');
          const result = this.impl.getContextFromFocusedTab(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getContextFromFocusedTab FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getContextFromTab');
          const result = this.impl.getContextFromTab(params.arg_tab_id, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getContextFromTab FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getImageBytesFromTab');
          const result = this.impl.getImageBytesFromTab(params.arg_tab_id, params.arg_document_id, params.arg_dom_node_id);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getImageBytesFromTab FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMaximumNumberOfPinnedTabs');
          const result = this.impl.setMaximumNumberOfPinnedTabs(params.arg_requested_max);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_effective_max' in response) ? response['arg_effective_max'] : response;
              const resp_obj = { 'arg_effective_max': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setMaximumNumberOfPinnedTabs FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.pinTabs');
          const result = this.impl.pinTabs(params.arg_tab_ids, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_pinned_all' in response) ? response['arg_pinned_all'] : response;
              const resp_obj = { 'arg_pinned_all': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] pinTabs FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unpinTabs');
          const result = this.impl.unpinTabs(params.arg_tab_ids, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_unpinned_all' in response) ? response['arg_unpinned_all'] : response;
              const resp_obj = { 'arg_unpinned_all': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] unpinTabs FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.unpinAllTabs');
          const result = this.impl.unpinAllTabs(params.arg_options);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToPinCandidates');
          const result = this.impl.subscribeToPinCandidates(params.arg_options, params.arg_observer);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.activateTab');
          const result = this.impl.activateTab(params.arg_task_id);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resizeWidget');
          const result = this.impl.resizeWidget(params.arg_size, params.arg_duration);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] resizeWidget FAILED:', e));
          }
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.captureScreenshot');
          const result = this.impl.captureScreenshot();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] captureScreenshot FAILED:', e));
          }
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.captureRegion');
          const result = this.impl.captureRegion(params.arg_observer, params.arg_params);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteCapturedRegion');
          const result = this.impl.deleteCapturedRegion(params.arg_tab_id, params.arg_id);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAudioDucking');
          const result = this.impl.setAudioDucking(params.arg_enable);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_result' in response) ? response['arg_result'] : response;
              const resp_obj = { 'arg_result': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setAudioDucking FAILED:', e));
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMinimumPanelSize');
          const result = this.impl.setMinimumPanelSize(params.arg_size);
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setMicrophonePermissionState');
          const result = this.impl.setMicrophonePermissionState(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setMicrophonePermissionState FAILED:', e));
          }
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setLocationPermissionState');
          const result = this.impl.setLocationPermissionState(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setLocationPermissionState FAILED:', e));
          }
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setTabContextPermissionState');
          const result = this.impl.setTabContextPermissionState(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setTabContextPermissionState FAILED:', e));
          }
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClosedCaptioningSetting');
          const result = this.impl.setClosedCaptioningSetting(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setClosedCaptioningSetting FAILED:', e));
          }
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setActuationOnWebSetting');
          const result = this.impl.setActuationOnWebSetting(params.arg_enabled);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] setActuationOnWebSetting FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldAllowMediaPermissionRequest');
          const result = this.impl.shouldAllowMediaPermissionRequest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_is_allowed' in response) ? response['arg_is_allowed'] : response;
              const resp_obj = { 'arg_is_allowed': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] shouldAllowMediaPermissionRequest FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.shouldAllowGeolocationPermissionRequest');
          const result = this.impl.shouldAllowGeolocationPermissionRequest();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_is_allowed' in response) ? response['arg_is_allowed'] : response;
              const resp_obj = { 'arg_is_allowed': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] shouldAllowGeolocationPermissionRequest FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setContextAccessIndicator');
          const result = this.impl.setContextAccessIndicator(params.arg_enabled);
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getUserProfileInfo');
          const result = this.impl.getUserProfileInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_profile_info' in response) ? response['arg_profile_info'] : response;
              const resp_obj = { 'arg_profile_info': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getUserProfileInfo FAILED:', e));
          }
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.syncCookies');
          const result = this.impl.syncCookies();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] syncCookies FAILED:', e));
          }
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clientErrorDialogStateChanged');
          const result = this.impl.clientErrorDialogStateChanged(params.arg_shown_dialog_type);
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.reportClientTransientError');
          const result = this.impl.reportClientTransientError(params.arg_status_code);
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.processCounterAbuseVerdict');
          const result = this.impl.processCounterAbuseVerdict(params.arg_tab_id, params.arg_verdict);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onOptinImpression');
          const result = this.impl.onOptinImpression();
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUserInputSubmitted');
          const result = this.impl.onUserInputSubmitted(params.arg_mode);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUploadStarted');
          const result = this.impl.onContextUploadStarted();
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onContextUploadCompleted');
          const result = this.impl.onContextUploadCompleted();
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onReaction');
          const result = this.impl.onReaction(params.arg_reactionType);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStarted');
          const result = this.impl.onResponseStarted();
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseStopped');
          const result = this.impl.onResponseStopped(params.arg_details);
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onSessionTerminated');
          const result = this.impl.onSessionTerminated();
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTurnCompleted');
          const result = this.impl.onTurnCompleted(params.arg_model, params.arg_duration);
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onResponseRated');
          const result = this.impl.onResponseRated(params.arg_positive);
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onClosedCaptionsShown');
          const result = this.impl.onClosedCaptionsShown();
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onActionSubmitted');
          const result = this.impl.onActionSubmitted(params.arg_is_retry);
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSyntheticExperimentState');
          const result = this.impl.setSyntheticExperimentState(params.arg_trial_name, params.arg_group_name);
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.openOsPermissionSettingsMenu');
          const result = this.impl.openOsPermissionSettingsMenu(params.arg_type);
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getOsMicrophonePermissionStatus');
          const result = this.impl.getOsMicrophonePermissionStatus();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_enabled' in response) ? response['arg_enabled'] : response;
              const resp_obj = { 'arg_enabled': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getOsMicrophonePermissionStatus FAILED:', e));
          }
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getZeroStateSuggestionsAndSubscribe');
          const result = this.impl.getZeroStateSuggestionsAndSubscribe(params.arg_is_live, params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_zero_state_suggestions' in response) ? response['arg_zero_state_suggestions'] : response;
              const resp_obj = { 'arg_zero_state_suggestions': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getZeroStateSuggestionsAndSubscribe FAILED:', e));
          }
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getZeroStateSuggestionsForFocusedTab');
          const result = this.impl.getZeroStateSuggestionsForFocusedTab(params.arg_is_first_run);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_suggestions' in response) ? response['arg_suggestions'] : response;
              const resp_obj = { 'arg_suggestions': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getZeroStateSuggestionsForFocusedTab FAILED:', e));
          }
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.maybeRefreshUserStatus');
          const result = this.impl.maybeRefreshUserStatus();
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isDebuggerAttached');
          const result = this.impl.isDebuggerAttached();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_is_attached_to_webview' in response) ? response['arg_is_attached_to_webview'] : response;
              const resp_obj = { 'arg_is_attached_to_webview': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] isDebuggerAttached FAILED:', e));
          }
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToPageMetadata');
          const result = this.impl.subscribeToPageMetadata(params.arg_tab_id, params.arg_names);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] subscribeToPageMetadata FAILED:', e));
          }
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.switchConversation');
          const result = this.impl.switchConversation(params.arg_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error_reason' in response) ? response['arg_error_reason'] : response;
              const resp_obj = { 'arg_error_reason': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] switchConversation FAILED:', e));
          }
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.registerConversation');
          const result = this.impl.registerConversation(params.arg_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_error_reason' in response) ? response['arg_error_reason'] : response;
              const resp_obj = { 'arg_error_reason': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] registerConversation FAILED:', e));
          }
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setOnboardingCompleted');
          const result = this.impl.setOnboardingCompleted();
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToTabData');
          const result = this.impl.subscribeToTabData(params.arg_tab_id, params.arg_receiver);
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.subscribeToTabFavicon');
          const result = this.impl.subscribeToTabFavicon(params.arg_tab_id, params.arg_receiver);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.WebClientHandlerReceiver = mojo.internal.bindings.glic.mojom.WebClientHandlerReceiver;

mojo.internal.bindings.glic.mojom.WebClientHandlerPtr = mojo.internal.bindings.glic.mojom.WebClientHandlerRemote;
mojo.internal.bindings.glic.mojom.WebClientHandlerRequest = mojo.internal.bindings.glic.mojom.WebClientHandlerPendingReceiver;


// Interface: TabDataHandler
mojo.internal.bindings.glic.mojom.TabDataHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.TabDataHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.TabDataHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.TabDataHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.TabDataHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTabDataChanged(arg_tab_data) {
    return this.$.onTabDataChanged(arg_tab_data);
  }
};

mojo.internal.bindings.glic.mojom.TabDataHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.TabDataHandler', [
      { explicit: null },
    ]);
  }

  onTabDataChanged(arg_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec,
      null,
      [arg_tab_data],
      false);
  }

};

mojo.internal.bindings.glic.mojom.TabDataHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.TabDataHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.TabDataHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.TabDataHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.TabDataHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabDataChanged');
          const result = this.impl.onTabDataChanged(params.arg_tab_data);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.TabDataHandlerReceiver = mojo.internal.bindings.glic.mojom.TabDataHandlerReceiver;

mojo.internal.bindings.glic.mojom.TabDataHandlerPtr = mojo.internal.bindings.glic.mojom.TabDataHandlerRemote;
mojo.internal.bindings.glic.mojom.TabDataHandlerRequest = mojo.internal.bindings.glic.mojom.TabDataHandlerPendingReceiver;


// Interface: TabFaviconHandler
mojo.internal.bindings.glic.mojom.TabFaviconHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.TabFaviconHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.TabFaviconHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.TabFaviconHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.TabFaviconHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onTabFaviconChanged(arg_favicon) {
    return this.$.onTabFaviconChanged(arg_favicon);
  }
};

mojo.internal.bindings.glic.mojom.TabFaviconHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.TabFaviconHandler', [
      { explicit: null },
    ]);
  }

  onTabFaviconChanged(arg_favicon) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec,
      null,
      [arg_favicon],
      false);
  }

};

mojo.internal.bindings.glic.mojom.TabFaviconHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.TabFaviconHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.TabFaviconHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.TabFaviconHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.TabFaviconHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTabFaviconChanged');
          const result = this.impl.onTabFaviconChanged(params.arg_favicon);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.TabFaviconHandlerReceiver = mojo.internal.bindings.glic.mojom.TabFaviconHandlerReceiver;

mojo.internal.bindings.glic.mojom.TabFaviconHandlerPtr = mojo.internal.bindings.glic.mojom.TabFaviconHandlerRemote;
mojo.internal.bindings.glic.mojom.TabFaviconHandlerRequest = mojo.internal.bindings.glic.mojom.TabFaviconHandlerPendingReceiver;


// Interface: ExperimentalTriggeringUpdatesHandler
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.ExperimentalTriggeringUpdatesHandler';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUpdate(arg_update, arg_observation) {
    return this.$.onUpdate(arg_update, arg_observation);
  }
};

mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.ExperimentalTriggeringUpdatesHandler', [
      { explicit: null },
    ]);
  }

  onUpdate(arg_update, arg_observation) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec,
      null,
      [arg_update, arg_observation],
      false);
  }

};

mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.ExperimentalTriggeringUpdatesHandler',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.ExperimentalTriggeringUpdatesHandler', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUpdate');
          const result = this.impl.onUpdate(params.arg_update, params.arg_observation);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerReceiver = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerReceiver;

mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerPtr = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerRemote;
mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerRequest = mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerPendingReceiver;


// Interface: WebClient
mojo.internal.bindings.glic.mojom.WebClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.WebClientRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.WebClient';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.WebClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.WebClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  notifyPanelWillOpen(arg_panel_opening_data) {
    return this.$.notifyPanelWillOpen(arg_panel_opening_data);
  }
  notifyPanelWasClosed() {
    return this.$.notifyPanelWasClosed();
  }
  notifyPanelStateChange(arg_panel_state) {
    return this.$.notifyPanelStateChange(arg_panel_state);
  }
  notifyPanelActiveChange(arg_panel_active) {
    return this.$.notifyPanelActiveChange(arg_panel_active);
  }
  notifyPanelCanAttachChange(arg_can_attach) {
    return this.$.notifyPanelCanAttachChange(arg_can_attach);
  }
  notifyMicrophonePermissionStateChanged(arg_enabled) {
    return this.$.notifyMicrophonePermissionStateChanged(arg_enabled);
  }
  stopMicrophone() {
    return this.$.stopMicrophone();
  }
  notifyLocationPermissionStateChanged(arg_enabled) {
    return this.$.notifyLocationPermissionStateChanged(arg_enabled);
  }
  notifyTabContextPermissionStateChanged(arg_enabled) {
    return this.$.notifyTabContextPermissionStateChanged(arg_enabled);
  }
  notifyOsLocationPermissionStateChanged(arg_enabled) {
    return this.$.notifyOsLocationPermissionStateChanged(arg_enabled);
  }
  notifyFocusedTabChanged(arg_focused_tab_data) {
    return this.$.notifyFocusedTabChanged(arg_focused_tab_data);
  }
  notifyManualResizeChanged(arg_resizing) {
    return this.$.notifyManualResizeChanged(arg_resizing);
  }
  notifyOsHotkeyStateChanged(arg_hotkey) {
    return this.$.notifyOsHotkeyStateChanged(arg_hotkey);
  }
  notifyBrowserIsOpenChanged(arg_browser_is_open) {
    return this.$.notifyBrowserIsOpenChanged(arg_browser_is_open);
  }
  notifyInstanceActivationChanged(arg_instance_active) {
    return this.$.notifyInstanceActivationChanged(arg_instance_active);
  }
  notifyClosedCaptioningSettingChanged(arg_enabled) {
    return this.$.notifyClosedCaptioningSettingChanged(arg_enabled);
  }
  notifyPinnedTabsChanged(arg_tab_data) {
    return this.$.notifyPinnedTabsChanged(arg_tab_data);
  }
  notifyPinnedTabDataChanged(arg_tab_data) {
    return this.$.notifyPinnedTabDataChanged(arg_tab_data);
  }
  notifyZeroStateSuggestionsChanged(arg_suggestions, arg_options) {
    return this.$.notifyZeroStateSuggestionsChanged(arg_suggestions, arg_options);
  }
  notifyPageMetadataChanged(arg_tab_id, arg_metadata) {
    return this.$.notifyPageMetadataChanged(arg_tab_id, arg_metadata);
  }
  notifyDefaultTabContextPermissionStateChanged(arg_enabled) {
    return this.$.notifyDefaultTabContextPermissionStateChanged(arg_enabled);
  }
  notifyAdditionalContext(arg_context) {
    return this.$.notifyAdditionalContext(arg_context);
  }
  notifyActuationOnWebSettingChanged(arg_enabled) {
    return this.$.notifyActuationOnWebSettingChanged(arg_enabled);
  }
  notifyActOnWebCapabilityChanged(arg_can_act_on_web) {
    return this.$.notifyActOnWebCapabilityChanged(arg_can_act_on_web);
  }
  notifyOnboardingCompletedChanged(arg_completed) {
    return this.$.notifyOnboardingCompletedChanged(arg_completed);
  }
  notifyGeminiEnterpriseSettingsChanged(arg_settings) {
    return this.$.notifyGeminiEnterpriseSettingsChanged(arg_settings);
  }
  notifyActorTaskListRowClicked(arg_task_id) {
    return this.$.notifyActorTaskListRowClicked(arg_task_id);
  }
  invoke(arg_options) {
    return this.$.invoke(arg_options);
  }
  getExperimentalTriggeringUpdates(arg_handler) {
    return this.$.getExperimentalTriggeringUpdates(arg_handler);
  }
};

mojo.internal.bindings.glic.mojom.WebClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.WebClient', [
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

  notifyPanelWillOpen(arg_panel_opening_data) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec,
      [arg_panel_opening_data],
      false);
  }

  notifyPanelWasClosed() {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec,
      [],
      false);
  }

  notifyPanelStateChange(arg_panel_state) {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec,
      null,
      [arg_panel_state],
      false);
  }

  notifyPanelActiveChange(arg_panel_active) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec,
      null,
      [arg_panel_active],
      false);
  }

  notifyPanelCanAttachChange(arg_can_attach) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec,
      null,
      [arg_can_attach],
      false);
  }

  notifyMicrophonePermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  stopMicrophone() {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec,
      [],
      false);
  }

  notifyLocationPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyTabContextPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyOsLocationPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyFocusedTabChanged(arg_focused_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec,
      null,
      [arg_focused_tab_data],
      false);
  }

  notifyManualResizeChanged(arg_resizing) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec,
      null,
      [arg_resizing],
      false);
  }

  notifyOsHotkeyStateChanged(arg_hotkey) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec,
      null,
      [arg_hotkey],
      false);
  }

  notifyBrowserIsOpenChanged(arg_browser_is_open) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec,
      null,
      [arg_browser_is_open],
      false);
  }

  notifyInstanceActivationChanged(arg_instance_active) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec,
      null,
      [arg_instance_active],
      false);
  }

  notifyClosedCaptioningSettingChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyPinnedTabsChanged(arg_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec,
      null,
      [arg_tab_data],
      false);
  }

  notifyPinnedTabDataChanged(arg_tab_data) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec,
      null,
      [arg_tab_data],
      false);
  }

  notifyZeroStateSuggestionsChanged(arg_suggestions, arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec,
      null,
      [arg_suggestions, arg_options],
      false);
  }

  notifyPageMetadataChanged(arg_tab_id, arg_metadata) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec,
      null,
      [arg_tab_id, arg_metadata],
      false);
  }

  notifyDefaultTabContextPermissionStateChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyAdditionalContext(arg_context) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec,
      null,
      [arg_context],
      false);
  }

  notifyActuationOnWebSettingChanged(arg_enabled) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec,
      null,
      [arg_enabled],
      false);
  }

  notifyActOnWebCapabilityChanged(arg_can_act_on_web) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec,
      null,
      [arg_can_act_on_web],
      false);
  }

  notifyOnboardingCompletedChanged(arg_completed) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec,
      null,
      [arg_completed],
      false);
  }

  notifyGeminiEnterpriseSettingsChanged(arg_settings) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec,
      null,
      [arg_settings],
      false);
  }

  notifyActorTaskListRowClicked(arg_task_id) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec,
      null,
      [arg_task_id],
      false);
  }

  invoke(arg_options) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec,
      [arg_options],
      false);
  }

  getExperimentalTriggeringUpdates(arg_handler) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec,
      mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec,
      [arg_handler],
      false);
  }

};

mojo.internal.bindings.glic.mojom.WebClient.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.WebClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.WebClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.WebClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.WebClient', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelWillOpen');
          const result = this.impl.notifyPanelWillOpen(params.arg_panel_opening_data);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_openPanelInfo' in response) ? response['arg_openPanelInfo'] : response;
              const resp_obj = { 'arg_openPanelInfo': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] notifyPanelWillOpen FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelWasClosed');
          const result = this.impl.notifyPanelWasClosed();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] notifyPanelWasClosed FAILED:', e));
          }
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelStateChange');
          const result = this.impl.notifyPanelStateChange(params.arg_panel_state);
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelActiveChange');
          const result = this.impl.notifyPanelActiveChange(params.arg_panel_active);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPanelCanAttachChange');
          const result = this.impl.notifyPanelCanAttachChange(params.arg_can_attach);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyMicrophonePermissionStateChanged');
          const result = this.impl.notifyMicrophonePermissionStateChanged(params.arg_enabled);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.stopMicrophone');
          const result = this.impl.stopMicrophone();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] stopMicrophone FAILED:', e));
          }
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyLocationPermissionStateChanged');
          const result = this.impl.notifyLocationPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyTabContextPermissionStateChanged');
          const result = this.impl.notifyTabContextPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOsLocationPermissionStateChanged');
          const result = this.impl.notifyOsLocationPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyFocusedTabChanged');
          const result = this.impl.notifyFocusedTabChanged(params.arg_focused_tab_data);
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyManualResizeChanged');
          const result = this.impl.notifyManualResizeChanged(params.arg_resizing);
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOsHotkeyStateChanged');
          const result = this.impl.notifyOsHotkeyStateChanged(params.arg_hotkey);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyBrowserIsOpenChanged');
          const result = this.impl.notifyBrowserIsOpenChanged(params.arg_browser_is_open);
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyInstanceActivationChanged');
          const result = this.impl.notifyInstanceActivationChanged(params.arg_instance_active);
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyClosedCaptioningSettingChanged');
          const result = this.impl.notifyClosedCaptioningSettingChanged(params.arg_enabled);
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPinnedTabsChanged');
          const result = this.impl.notifyPinnedTabsChanged(params.arg_tab_data);
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPinnedTabDataChanged');
          const result = this.impl.notifyPinnedTabDataChanged(params.arg_tab_data);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyZeroStateSuggestionsChanged');
          const result = this.impl.notifyZeroStateSuggestionsChanged(params.arg_suggestions, params.arg_options);
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyPageMetadataChanged');
          const result = this.impl.notifyPageMetadataChanged(params.arg_tab_id, params.arg_metadata);
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyDefaultTabContextPermissionStateChanged');
          const result = this.impl.notifyDefaultTabContextPermissionStateChanged(params.arg_enabled);
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyAdditionalContext');
          const result = this.impl.notifyAdditionalContext(params.arg_context);
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActuationOnWebSettingChanged');
          const result = this.impl.notifyActuationOnWebSettingChanged(params.arg_enabled);
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActOnWebCapabilityChanged');
          const result = this.impl.notifyActOnWebCapabilityChanged(params.arg_can_act_on_web);
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyOnboardingCompletedChanged');
          const result = this.impl.notifyOnboardingCompletedChanged(params.arg_completed);
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyGeminiEnterpriseSettingsChanged');
          const result = this.impl.notifyGeminiEnterpriseSettingsChanged(params.arg_settings);
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyActorTaskListRowClicked');
          const result = this.impl.notifyActorTaskListRowClicked(params.arg_task_id);
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.invoke');
          const result = this.impl.invoke(params.arg_options);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const resp_obj = response;
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] invoke FAILED:', e));
          }
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getExperimentalTriggeringUpdates');
          const result = this.impl.getExperimentalTriggeringUpdates(params.arg_handler);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              const val = (response && typeof response === 'object' && 'arg_success' in response) ? response['arg_success'] : response;
              const resp_obj = { 'arg_success': val };
              const message = new mojo.internal.Message(
                this.router_, 0, mojo.internal.kMessageFlagIsResponse,
                header.ordinal, header.requestId, mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec.$.structSpec, resp_obj);
              this.router_.send(message);
            }).catch(e => console.error('[GeneratedReceiver] getExperimentalTriggeringUpdates FAILED:', e));
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

mojo.internal.bindings.glic.mojom.WebClientReceiver = mojo.internal.bindings.glic.mojom.WebClientReceiver;

mojo.internal.bindings.glic.mojom.WebClientPtr = mojo.internal.bindings.glic.mojom.WebClientRemote;
mojo.internal.bindings.glic.mojom.WebClientRequest = mojo.internal.bindings.glic.mojom.WebClientPendingReceiver;


// Interface: CaptureRegionObserver
mojo.internal.bindings.glic.mojom.CaptureRegionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
    if (handle) {
      this.__mojoHandle = handle.router_ ? handle.router_.pipe_ : (handle.pipe_ || handle);
    }
  }
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemote = class {
  static get $interfaceName() {
    return 'glic.mojom.CaptureRegionObserver';
  }

  constructor(handle = undefined) {
    this.__mojoHandle = handle;
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.glic.mojom.CaptureRegionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onUpdate(arg_result, arg_reason) {
    return this.$.onUpdate(arg_result, arg_reason);
  }
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('glic.mojom.CaptureRegionObserver', [
      { explicit: null },
    ]);
  }

  onUpdate(arg_result, arg_reason) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec,
      null,
      [arg_result, arg_reason],
      false);
  }

};

mojo.internal.bindings.glic.mojom.CaptureRegionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'glic.mojom.CaptureRegionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('glic.mojom.CaptureRegionObserver', [
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onUpdate');
          const result = this.impl.onUpdate(params.arg_result, params.arg_reason);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.glic.mojom.CaptureRegionObserverReceiver = mojo.internal.bindings.glic.mojom.CaptureRegionObserverReceiver;

mojo.internal.bindings.glic.mojom.CaptureRegionObserverPtr = mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemote;
mojo.internal.bindings.glic.mojom.CaptureRegionObserverRequest = mojo.internal.bindings.glic.mojom.CaptureRegionObserverPendingReceiver;


// Specs (at the end to ensure classes are defined for InterfaceProxy)

// Union: InvokeConversationSelection
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.InvokeConversationSelectionSpec, 'glic.mojom.InvokeConversationSelection', {
      'arg_default_conversation': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.DefaultConversationSpec,
        'nullable': false,
      },
      'arg_new_conversation': {
        'ordinal': 1,
        'type': mojo.internal.bindings.glic.mojom.NewConversationSpec,
        'nullable': false,
      },
      'arg_conversation_id': {
        'ordinal': 2,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Union: InvokeTargetSurface
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.InvokeTargetSurfaceSpec, 'glic.mojom.InvokeTargetSurface', {
      'arg_default_surface': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.DefaultSurfaceMojoSpec,
        'nullable': false,
      },
      'arg_new_tab': {
        'ordinal': 1,
        'type': mojo.internal.bindings.glic.mojom.NewTabMojoSpec,
        'nullable': false,
      },
    });

// Union: GetContextResult
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.GetContextResultSpec, 'glic.mojom.GetContextResult', {
      'arg_error_reason': {
        'ordinal': 0,
        'type': mojo.internal.String,
        'nullable': false,
      },
      'arg_tab_context': {
        'ordinal': 1,
        'type': mojo.internal.bindings.glic.mojom.TabContextSpec,
        'nullable': false,
      },
    });

// Union: CaptureScreenshotResult
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec, 'glic.mojom.CaptureScreenshotResult', {
      'arg_error_reason': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.CaptureScreenshotErrorReasonSpec,
        'nullable': false,
      },
      'arg_screenshot': {
        'ordinal': 1,
        'type': mojo.internal.bindings.glic.mojom.ScreenshotSpec,
        'nullable': false,
      },
    });

// Union: ScrollToSelector
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec, 'glic.mojom.ScrollToSelector', {
      'arg_exact_text_selector': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec,
        'nullable': false,
      },
      'arg_text_fragment_selector': {
        'ordinal': 1,
        'type': mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec,
        'nullable': false,
      },
      'arg_node_selector': {
        'ordinal': 2,
        'type': mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec,
        'nullable': false,
      },
    });

// Union: InvocationPayload
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.InvocationPayloadSpec, 'glic.mojom.InvocationPayload', {
      'arg_universal_cart': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.UniversalCartPayloadSpec,
        'nullable': false,
      },
    });

// Union: AdditionalContextPart
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec, 'glic.mojom.AdditionalContextPart', {
      'arg_data': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.ContextDataSpec,
        'nullable': false,
      },
      'arg_screenshot': {
        'ordinal': 1,
        'type': mojo.internal.bindings.glic.mojom.ScreenshotSpec,
        'nullable': false,
      },
      'arg_web_page_data': {
        'ordinal': 2,
        'type': mojo.internal.bindings.glic.mojom.WebPageDataSpec,
        'nullable': false,
      },
      'arg_annotated_page_data': {
        'ordinal': 3,
        'type': mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec,
        'nullable': false,
      },
      'arg_pdf_document_data': {
        'ordinal': 4,
        'type': mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec,
        'nullable': false,
      },
      'arg_tab_context': {
        'ordinal': 5,
        'type': mojo.internal.bindings.glic.mojom.TabContextSpec,
        'nullable': false,
      },
      'arg_region': {
        'ordinal': 6,
        'type': mojo.internal.bindings.glic.mojom.CapturedRegionSpec,
        'nullable': false,
      },
      'arg_pending_region': {
        'ordinal': 7,
        'type': mojo.internal.bindings.glic.mojom.PendingCapturedRegionSpec,
        'nullable': false,
      },
      'arg_parent_conversation_metadata': {
        'ordinal': 8,
        'type': mojo.internal.bindings.glic.mojom.ParentConversationMetadataSpec,
        'nullable': false,
      },
    });

// Union: FocusedTabData
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.FocusedTabDataSpec, 'glic.mojom.FocusedTabData', {
      'arg_focused_tab': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.TabDataSpec,
        'nullable': false,
      },
      'arg_no_focused_tab_data': {
        'ordinal': 1,
        'type': mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec,
        'nullable': false,
      },
    });

// Union: CapturedRegion
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.CapturedRegionSpec, 'glic.mojom.CapturedRegion', {
      'arg_rect': {
        'ordinal': 0,
        'type': mojo.internal.bindings.gfx.mojom.RectSpec,
        'nullable': false,
      },
      'arg_polyline': {
        'ordinal': 1,
        'type': mojo.internal.Array(mojo.internal.bindings.gfx.mojom.PointSpec, false),
        'nullable': false,
      },
    });

// Union: GetImageBytesResult
mojo.internal.Union(
    mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec, 'glic.mojom.GetImageBytesResult', {
      'arg_image_bytes': {
        'ordinal': 0,
        'type': mojo.internal.bindings.glic.mojom.ImageBytesResultSpec,
        'nullable': false,
      },
      'arg_error_reason': {
        'ordinal': 1,
        'type': mojo.internal.String,
        'nullable': false,
      },
    });

// Struct: GeminiEnterpriseSettings
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec, 'glic.mojom.GeminiEnterpriseSettings', [
      mojo.internal.StructField('arg_project_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_app_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_location', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ProfileEnablement
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ProfileEnablementSpec, 'glic.mojom.ProfileEnablement', [
      mojo.internal.StructField('arg_feature_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_regular_profile', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_rolled_out', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_account_is_capable', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_primary_account_is_fully_signed_in', 0, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_by_chrome_policy', 0, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_by_remote_admin', 0, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_by_remote_other', 0, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_fre_is_consented', 1, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_by_country_filter', 1, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allowed_by_locale_filter', 1, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_actuation_is_consented', 1, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_live_allowed', 1, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_share_image_allowed', 1, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_actuation_eligibility', 4, 0, mojo.internal.bindings.glic.mojom.ActuationEligibilitySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_gemini_enterprise_settings', 8, 0, mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_glic_api_actuation_eligibility', 16, 0, mojo.internal.bindings.glic.mojom.ActuationEligibilitySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ConfigInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ConfigInfoSpec, 'glic.mojom.ConfigInfo', [
      mojo.internal.StructField('arg_guest_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_autopush_guest_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_staging_guest_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_preprod_guest_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_prod_guest_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_continuity_originating_host_url', 40, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: DefaultConversation
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.DefaultConversationSpec, 'glic.mojom.DefaultConversation', [
    ],
    [[0, 8]]);

// Struct: NewConversation
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.NewConversationSpec, 'glic.mojom.NewConversation', [
    ],
    [[0, 8]]);

// Struct: DefaultSurfaceMojo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.DefaultSurfaceMojoSpec, 'glic.mojom.DefaultSurfaceMojo', [
    ],
    [[0, 8]]);

// Struct: NewTabMojo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.NewTabMojoSpec, 'glic.mojom.NewTabMojo', [
      mojo.internal.StructField('arg_open_in_foreground', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ZssConfig
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ZssConfigSpec, 'glic.mojom.ZssConfig', [
      mojo.internal.StructField('arg_additional_content', 0, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: GetContextResultWithActionResultCode
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec, 'glic.mojom.GetContextResultWithActionResultCode', [
      mojo.internal.StructField('arg_get_context_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_action_result_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_action_result_$value', originalFieldName: 'arg_action_result' }),
      mojo.internal.StructField('arg_action_result_$value', 20, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_action_result_$flag', originalFieldName: 'arg_action_result' }),
    ],
    [[0, 32]]);

// Struct: UserProfileInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.UserProfileInfoSpec, 'glic.mojom.UserProfileInfo', [
      mojo.internal.StructField('arg_avatar_icon', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_display_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_local_profile_name', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_email', 24, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_given_name', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_managed', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: SafeBrowsingVerdictResult
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SafeBrowsingVerdictResultSpec, 'glic.mojom.SafeBrowsingVerdictResult', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_threat_type', 8, 0, mojo.internal.bindings.glic.mojom.SbThreatTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_show_interstitial', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: CounterAbuseVerdict
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CounterAbuseVerdictSpec, 'glic.mojom.CounterAbuseVerdict', [
      mojo.internal.StructField('arg_sb_verdict_result', 0, 0, mojo.internal.bindings.glic.mojom.SafeBrowsingVerdictResultSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

// Struct: WebClientInitialState
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec, 'glic.mojom.WebClientInitialState', [
      mojo.internal.StructField('arg_panel_state', 0, 0, mojo.internal.bindings.glic.mojom.PanelStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_focused_tab_data', 8, 0, mojo.internal.bindings.glic.mojom.FocusedTabDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_microphone_permission_enabled', 24, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_location_permission_enabled', 24, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_tab_context_permission_enabled', 24, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_os_location_permission_enabled', 24, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_attach', 24, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_panel_is_active', 24, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_browser_is_open', 24, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_instance_is_active', 24, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_zero_state_suggestions', 25, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_cached_get_user_profile_info', 25, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_act_in_focused_tab', 25, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_scroll_to', 25, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_default_tab_context_setting_feature', 25, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_default_tab_context_setting_enabled', 25, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_closed_captioning_setting_enabled', 25, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_maybe_refresh_user_status', 25, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_multi_tab', 26, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_get_context_actor', 26, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_get_page_metadata', 26, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_capture_region', 26, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_web_actuation_setting_feature', 26, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_actuation_on_web_setting_enabled', 26, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_can_act_on_web', 26, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_activate_tab', 26, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_get_tab_by_id', 27, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_open_password_manager_settings_page', 27, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_trust_first_onboarding', 27, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_onboarding_completed', 27, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_skills', 27, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_get_tab_favicon_by_id', 27, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_process_counter_abuse_verdict', 27, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_gmail_otp_opt_in', 27, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_platform', 28, 0, mojo.internal.bindings.glic.mojom.PlatformSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_hotkey', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_chrome_version', 40, 0, mojo.internal.bindings.mojo_base.mojom.VersionSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_form_factor', 48, 0, mojo.internal.bindings.glic.mojom.FormFactorSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_capabilities', 56, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.HostCapabilitySpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_gemini_enterprise_settings', 64, 0, mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec, null, true, 0, undefined),
    ],
    [[0, 80]]);

// Struct: ScreenshotCollectionOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScreenshotCollectionOptionsSpec, 'glic.mojom.ScreenshotCollectionOptions', [
      mojo.internal.StructField('arg_max_width', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_height', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_screenshot_image_format', 8, 0, mojo.internal.bindings.glic.mojom.ScreenshotImageFormatSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_screenshot_compression_quality', 12, 0, mojo.internal.bindings.glic.mojom.ScreenshotCompressionQualitySpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: GetTabContextOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec, 'glic.mojom.GetTabContextOptions', [
      mojo.internal.StructField('arg_include_inner_text', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_viewport_screenshot', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_annotated_page_content', 0, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_include_pdf', 0, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_inner_text_bytes_limit', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_max_meta_tags', 8, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pdf_size_limit', 12, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_annotated_page_content_mode', 16, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_screenshot_collection_options', 24, 0, mojo.internal.bindings.glic.mojom.ScreenshotCollectionOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: GetPinCandidatesOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec, 'glic.mojom.GetPinCandidatesOptions', [
      mojo.internal.StructField('arg_max_candidates', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_query', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ScrollToParams
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToParamsSpec, 'glic.mojom.ScrollToParams', [
      mojo.internal.StructField('arg_selector', 0, 0, mojo.internal.bindings.glic.mojom.ScrollToSelectorSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_highlight', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 48]]);

// Struct: ScrollToTextSelector
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToTextSelectorSpec, 'glic.mojom.ScrollToTextSelector', [
      mojo.internal.StructField('arg_text', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_search_range_start_node_id_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_search_range_start_node_id_$value', originalFieldName: 'arg_search_range_start_node_id' }),
      mojo.internal.StructField('arg_search_range_start_node_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_search_range_start_node_id_$flag', originalFieldName: 'arg_search_range_start_node_id' }),
    ],
    [[0, 24]]);

// Struct: ScrollToTextFragmentSelector
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToTextFragmentSelectorSpec, 'glic.mojom.ScrollToTextFragmentSelector', [
      mojo.internal.StructField('arg_text_start', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_text_end', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_search_range_start_node_id_$flag', 16, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_search_range_start_node_id_$value', originalFieldName: 'arg_search_range_start_node_id' }),
      mojo.internal.StructField('arg_search_range_start_node_id_$value', 20, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_search_range_start_node_id_$flag', originalFieldName: 'arg_search_range_start_node_id' }),
    ],
    [[0, 32]]);

// Struct: ScrollToNodeSelector
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScrollToNodeSelectorSpec, 'glic.mojom.ScrollToNodeSelector', [
      mojo.internal.StructField('arg_node_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SuggestionContent
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SuggestionContentSpec, 'glic.mojom.SuggestionContent', [
      mojo.internal.StructField('arg_suggestion', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: SkillPreview
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillPreviewSpec, 'glic.mojom.SkillPreview', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 24, 0, mojo.internal.bindings.glic.mojom.SkillSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_curated_by', 40, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_image_url', 48, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 64]]);

// Struct: Skill
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillSpec, 'glic.mojom.Skill', [
      mojo.internal.StructField('arg_preview', 0, 0, mojo.internal.bindings.glic.mojom.SkillPreviewSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_prompt', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source_skill_id', 16, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CreateSkillRequest
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec, 'glic.mojom.CreateSkillRequest', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_icon', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_source', 24, 0, mojo.internal.bindings.glic.mojom.SkillSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_prompt', 32, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_description', 40, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: UpdateSkillRequest
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec, 'glic.mojom.UpdateSkillRequest', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: ZeroStateSuggestions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec, 'glic.mojom.ZeroStateSuggestions', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.SuggestionContentSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_tab_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ZeroStateSuggestionsV2
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec, 'glic.mojom.ZeroStateSuggestionsV2', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.SuggestionContentSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_is_pending', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_invocation_source', 12, 0, mojo.internal.bindings.glic.mojom.InvocationSourceSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ZeroStateSuggestionsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec, 'glic.mojom.ZeroStateSuggestionsOptions', [
      mojo.internal.StructField('arg_is_first_run', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_supported_tools', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: PinCandidate
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PinCandidateSpec, 'glic.mojom.PinCandidate', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PinTabsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec, 'glic.mojom.PinTabsOptions', [
      mojo.internal.StructField('arg_pin_trigger', 0, 0, mojo.internal.bindings.glic.mojom.PinTriggerSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: UnpinTabsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec, 'glic.mojom.UnpinTabsOptions', [
      mojo.internal.StructField('arg_unpin_trigger', 0, 0, mojo.internal.bindings.glic.mojom.UnpinTriggerSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: CaptureRegionParams
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CaptureRegionParamsSpec, 'glic.mojom.CaptureRegionParams', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ActivateTabOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActivateTabOptionsSpec, 'glic.mojom.ActivateTabOptions', [
      mojo.internal.StructField('arg_pattern', 0, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('arg_fallback_window_id_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_fallback_window_id_$value', originalFieldName: 'arg_fallback_window_id' }),
      mojo.internal.StructField('arg_fallback_window_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_fallback_window_id_$flag', originalFieldName: 'arg_fallback_window_id' }),
    ],
    [[0, 24]]);

// Struct: ConversationInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ConversationInfoSpec, 'glic.mojom.ConversationInfo', [
      mojo.internal.StructField('arg_conversation_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_conversation_title', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_data', 16, 0, mojo.internal.bindings.mojo_base.mojom.ByteStringSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_turn_id', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: PanelOpeningData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec, 'glic.mojom.PanelOpeningData', [
      mojo.internal.StructField('arg_panel_state', 0, 0, mojo.internal.bindings.glic.mojom.PanelStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_invocation_source', 8, 0, mojo.internal.bindings.glic.mojom.InvocationSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_auto_send', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_prompt_suggestion', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_skill_to_invoke', 24, 0, mojo.internal.bindings.glic.mojom.SkillSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_recently_active_conversations', 32, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.ConversationInfoSpec, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_conversation_info', 40, 0, mojo.internal.bindings.glic.mojom.ConversationInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_fre_override', 48, 0, mojo.internal.bindings.glic.mojom.FreOverrideSpec, 0, false, 0, undefined),
    ],
    [[0, 64]]);

// Struct: PanelState
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PanelStateSpec, 'glic.mojom.PanelState', [
      mojo.internal.StructField('arg_kind', 0, 0, mojo.internal.bindings.glic.mojom.PanelStateKindSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_window_id_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_window_id_$value', originalFieldName: 'arg_window_id' }),
      mojo.internal.StructField('arg_window_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_window_id_$flag', originalFieldName: 'arg_window_id' }),
    ],
    [[0, 24]]);

// Struct: UniversalCartPayload
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.UniversalCartPayloadSpec, 'glic.mojom.UniversalCartPayload', [
      mojo.internal.StructField('arg_serialized_metadata', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: InvokeOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.InvokeOptionsSpec, 'glic.mojom.InvokeOptions', [
      mojo.internal.StructField('arg_invocation_source', 0, 0, mojo.internal.bindings.glic.mojom.InvocationSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_auto_submit', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_zero_state_suggestions', 4, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_actuation_tab_id_$flag', 4, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_actuation_tab_id_$value', originalFieldName: 'arg_actuation_tab_id' }),
      mojo.internal.StructField('arg_prompts', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_context', 16, 0, mojo.internal.bindings.glic.mojom.AdditionalContextSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_feature_mode', 24, 0, mojo.internal.bindings.glic.mojom.FeatureModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_actuation_target', 28, 0, mojo.internal.bindings.glic.mojom.ActuationTargetSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_skill_id', 32, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_zss_config', 40, 0, mojo.internal.bindings.glic.mojom.ZssConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_payload', 48, 0, mojo.internal.bindings.glic.mojom.InvocationPayloadSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_actuation_tab_id_$value', 64, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_actuation_tab_id_$flag', originalFieldName: 'arg_actuation_tab_id' }),
    ],
    [[0, 80]]);

// Struct: OnResponseStoppedDetails
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec, 'glic.mojom.OnResponseStoppedDetails', [
      mojo.internal.StructField('arg_cause', 0, 0, mojo.internal.bindings.glic.mojom.ResponseStopCauseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: OpenPanelInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec, 'glic.mojom.OpenPanelInfo', [
      mojo.internal.StructField('arg_web_client_mode', 0, 0, mojo.internal.bindings.glic.mojom.WebClientModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_can_user_resize', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_panelSize', 8, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_resizeDuration', 16, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: ContextData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ContextDataSpec, 'glic.mojom.ContextData', [
      mojo.internal.StructField('arg_mime_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_filename', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ParentConversationMetadata
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ParentConversationMetadataSpec, 'glic.mojom.ParentConversationMetadata', [
      mojo.internal.StructField('arg_conversation_id', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_conversation_title', 8, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AdditionalContext
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.AdditionalContextSpec, 'glic.mojom.AdditionalContext', [
      mojo.internal.StructField('arg_source', 0, 0, mojo.internal.bindings.glic.mojom.AdditionalContextSourceSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id_$flag', 4, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_tab_id_$value', originalFieldName: 'arg_tab_id' }),
      mojo.internal.StructField('arg_name', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_tab_id_$value', 16, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_tab_id_$flag', originalFieldName: 'arg_tab_id' }),
      mojo.internal.StructField('arg_origin', 24, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_frameUrl', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_parts', 40, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.AdditionalContextPartSpec, false), null, false, 0, undefined),
    ],
    [[0, 56]]);

// Struct: ExperimentalTriggeringUpdate
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateSpec, 'glic.mojom.ExperimentalTriggeringUpdate', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateTypeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: TabContext
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.TabContextSpec, 'glic.mojom.TabContext', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_web_page_data', 8, 0, mojo.internal.bindings.glic.mojom.WebPageDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_viewport_screenshot', 16, 0, mojo.internal.bindings.glic.mojom.ScreenshotSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_screenshot_info', 24, 0, mojo.internal.bindings.mojo_base.mojom.ProtoWrapperSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_pdf_document_data', 32, 0, mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_annotated_page_data', 40, 0, mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: WebPageData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebPageDataSpec, 'glic.mojom.WebPageData', [
      mojo.internal.StructField('arg_main_document', 0, 0, mojo.internal.bindings.glic.mojom.DocumentDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: DocumentData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.DocumentDataSpec, 'glic.mojom.DocumentData', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_inner_text', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_inner_text_truncated', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: PdfDocumentData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PdfDocumentDataSpec, 'glic.mojom.PdfDocumentData', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_pdf_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, true, 0, undefined),
      mojo.internal.StructField('arg_size_limit_exceeded', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: TabData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.TabDataSpec, 'glic.mojom.TabData', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_window_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_title', 16, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_favicon', 24, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_favicon_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_document_mime_type', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_observable_$flag', 48, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_observable_$value', originalFieldName: 'arg_is_observable' }),
      mojo.internal.StructField('arg_is_observable_$value', 48, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_observable_$flag', originalFieldName: 'arg_is_observable' }),
      mojo.internal.StructField('arg_is_media_active_$flag', 48, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_media_active_$value', originalFieldName: 'arg_is_media_active' }),
      mojo.internal.StructField('arg_is_media_active_$value', 48, 3, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_media_active_$flag', originalFieldName: 'arg_is_media_active' }),
      mojo.internal.StructField('arg_is_tab_content_captured_$flag', 48, 4, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_tab_content_captured_$value', originalFieldName: 'arg_is_tab_content_captured' }),
      mojo.internal.StructField('arg_is_tab_content_captured_$value', 48, 5, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_tab_content_captured_$flag', originalFieldName: 'arg_is_tab_content_captured' }),
      mojo.internal.StructField('arg_is_active_in_window_$flag', 48, 6, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_active_in_window_$value', originalFieldName: 'arg_is_active_in_window' }),
      mojo.internal.StructField('arg_is_active_in_window_$value', 48, 7, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_active_in_window_$flag', originalFieldName: 'arg_is_active_in_window' }),
      mojo.internal.StructField('arg_is_window_active_$flag', 49, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_window_active_$value', originalFieldName: 'arg_is_window_active' }),
      mojo.internal.StructField('arg_is_window_active_$value', 49, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_window_active_$flag', originalFieldName: 'arg_is_window_active' }),
      mojo.internal.StructField('arg_lightweight_page_features', 56, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.LightweightPageFeatureSpec, false), null, true, 0, undefined),
    ],
    [[0, 72]]);

// Struct: NoFocusedTabData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.NoFocusedTabDataSpec, 'glic.mojom.NoFocusedTabData', [
      mojo.internal.StructField('arg_active_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_no_focus_reason', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: AnnotatedPageData
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.AnnotatedPageDataSpec, 'glic.mojom.AnnotatedPageData', [
      mojo.internal.StructField('arg_annotated_page_content', 0, 0, mojo.internal.bindings.mojo_base.mojom.ProtoWrapperSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_metadata', 8, 0, mojo.internal.bindings.blink.mojom.PageMetadataSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: ImageOriginAnnotations
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec, 'glic.mojom.ImageOriginAnnotations', [
    ],
    [[0, 8]]);

// Struct: Journal
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.JournalSpec, 'glic.mojom.Journal', [
      mojo.internal.StructField('arg_data', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: PendingCapturedRegion
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PendingCapturedRegionSpec, 'glic.mojom.PendingCapturedRegion', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_region', 8, 0, mojo.internal.bindings.glic.mojom.CapturedRegionSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CaptureRegionResult
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec, 'glic.mojom.CaptureRegionResult', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_region', 8, 0, mojo.internal.bindings.glic.mojom.CapturedRegionSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: Screenshot
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ScreenshotSpec, 'glic.mojom.Screenshot', [
      mojo.internal.StructField('arg_width_pixels', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_height_pixels', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_data', 8, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin_annotations', 24, 0, mojo.internal.bindings.glic.mojom.ImageOriginAnnotationsSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ImageInfo
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ImageInfoSpec, 'glic.mojom.ImageInfo', [
      mojo.internal.StructField('arg_caption', 0, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_source_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mime_type', 24, 0, mojo.internal.String, null, true, 0, undefined),
    ],
    [[0, 40]]);

// Struct: ImageBytesResult
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ImageBytesResultSpec, 'glic.mojom.ImageBytesResult', [
      mojo.internal.StructField('arg_bytes', 0, 0, mojo.internal.bindings.mojo_base.mojom.BigBufferSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_image_info', 16, 0, mojo.internal.bindings.glic.mojom.ImageInfoSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: OpenSettingsOptions
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec, 'glic.mojom.OpenSettingsOptions', [
      mojo.internal.StructField('arg_highlightField', 0, 0, mojo.internal.bindings.glic.mojom.SettingsPageFieldSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);
mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PreloadPage_SetProfileReadyState_ParamsSpec, 'glic.mojom.PreloadPage_SetProfileReadyState_Params', [
      mojo.internal.StructField('arg_ready_state', 0, 0, mojo.internal.bindings.glic.mojom.ProfileReadyStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.Page_IntentToShow_ParamsSpec, 'glic.mojom.Page_IntentToShow_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.Page_SetProfileReadyState_ParamsSpec, 'glic.mojom.Page_SetProfileReadyState_Params', [
      mojo.internal.StructField('arg_ready_state', 0, 0, mojo.internal.bindings.glic.mojom.ProfileReadyStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.Page_UpdatePageState_ParamsSpec, 'glic.mojom.Page_UpdatePageState_Params', [
      mojo.internal.StructField('arg_panelStateKind', 0, 0, mojo.internal.bindings.glic.mojom.PanelStateKindSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.Page_Zoom_ParamsSpec, 'glic.mojom.Page_Zoom_Params', [
      mojo.internal.StructField('arg_action', 0, 0, mojo.internal.bindings.glic.mojom.ZoomActionSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ParamsSpec, 'glic.mojom.GlicPreloadHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.GlicPreloadHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.PrepareForClientResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_ParamsSpec, 'glic.mojom.GlicPreloadHandlerFactory_CreatePreloadHandler_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.GlicPreloadHandlerPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.PreloadPageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ParamsSpec, 'glic.mojom.PageHandlerFactory_CreatePageHandler_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.PageHandlerPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_page', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.PageRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParamsSpec, 'glic.mojom.PageHandlerFactory_CreatePageHandler_ResponseParams', [
      mojo.internal.StructField('arg_instance_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_CreateWebClient_ParamsSpec, 'glic.mojom.PageHandler_CreateWebClient_Params', [
      mojo.internal.StructField('arg_web_client_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.WebClientHandlerPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ParamsSpec, 'glic.mojom.PageHandler_PrepareForClient_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_PrepareForClient_ResponseParamsSpec, 'glic.mojom.PageHandler_PrepareForClient_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.PrepareForClientResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_WebviewCommitted_ParamsSpec, 'glic.mojom.PageHandler_WebviewCommitted_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_OnZoomLevelChange_ParamsSpec, 'glic.mojom.PageHandler_OnZoomLevelChange_Params', [
      mojo.internal.StructField('arg_zoom_factor', 0, 0, mojo.internal.Double, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ParamsSpec, 'glic.mojom.PageHandler_ClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ClosePanel_ResponseParamsSpec, 'glic.mojom.PageHandler_ClosePanel_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_OpenHelpCenterTopicAndClosePanel_Params', [
      mojo.internal.StructField('arg_topic', 0, 0, mojo.internal.bindings.glic.mojom.HelpCenterTopicSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_OpenProfilePickerAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_OpenDisabledByAdminLinkAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_SignInAndClosePanel_ParamsSpec, 'glic.mojom.PageHandler_SignInAndClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ParamsSpec, 'glic.mojom.PageHandler_ResizeWidget_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_ResizeWidget_ResponseParamsSpec, 'glic.mojom.PageHandler_ResizeWidget_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_EnableDragResize_ParamsSpec, 'glic.mojom.PageHandler_EnableDragResize_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PageHandler_WebUiStateChanged_ParamsSpec, 'glic.mojom.PageHandler_WebUiStateChanged_Params', [
      mojo.internal.StructField('arg_new_state', 0, 0, mojo.internal.bindings.glic.mojom.WebUiStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_ParamsSpec, 'glic.mojom.PinCandidatesObserver_OnPinCandidatesChanged_Params', [
      mojo.internal.StructField('arg_candidates', 0, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.PinCandidateSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ParamsSpec, 'glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParamsSpec, 'glic.mojom.ActorClient_RequestToShowCredentialSelectionDialog_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectCredentialDialogResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ParamsSpec, 'glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParamsSpec, 'glic.mojom.ActorClient_RequestToShowAutofillSuggestionsDialog_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.SelectAutofillSuggestionsDialogResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ParamsSpec, 'glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParamsSpec, 'glic.mojom.ActorClient_RequestToShowUserConfirmationDialog_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.UserConfirmationDialogResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ParamsSpec, 'glic.mojom.ActorClient_RequestToConfirmNavigation_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParamsSpec, 'glic.mojom.ActorClient_RequestToConfirmNavigation_ResponseParams', [
      mojo.internal.StructField('arg_response', 0, 0, mojo.internal.bindings.actor.webui.mojom.NavigationConfirmationResponseSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_NotifyActorTaskStateChanged_ParamsSpec, 'glic.mojom.ActorClient_NotifyActorTaskStateChanged_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_state', 4, 0, mojo.internal.bindings.glic.mojom.ActorTaskStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ParamsSpec, 'glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParamsSpec, 'glic.mojom.ActorClient_RequestToShowGmailOtpOptInDialog_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.actor.webui.mojom.GmailOtpOptInResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_ParamsSpec, 'glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPresented_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormPresentedParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_ParamsSpec, 'glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormPreviewChanged_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormPreviewChangedParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_ParamsSpec, 'glic.mojom.ActorHandler_AutofillSuggestionDialogOnFormConfirmed_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.actor.webui.mojom.AutofillSuggestionDialogOnFormConfirmedParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ParamsSpec, 'glic.mojom.ActorHandler_GetContextForActorFromTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParamsSpec, 'glic.mojom.ActorHandler_GetContextForActorFromTab_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_CreateTask_ParamsSpec, 'glic.mojom.ActorHandler_CreateTask_Params', [
      mojo.internal.StructField('arg_task_options', 0, 0, mojo.internal.bindings.actor.webui.mojom.TaskOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_PerformActions_ParamsSpec, 'glic.mojom.ActorHandler_PerformActions_Params', [
      mojo.internal.StructField('arg_actions_proto', 0, 0, mojo.internal.Array(mojo.internal.Uint8, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ParamsSpec, 'glic.mojom.ActorHandler_CancelActions_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_CancelActions_ResponseParamsSpec, 'glic.mojom.ActorHandler_CancelActions_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.CancelActionsResultSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_StopActorTask_ParamsSpec, 'glic.mojom.ActorHandler_StopActorTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_stop_reason', 4, 0, mojo.internal.bindings.glic.mojom.ActorTaskStopReasonSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_PauseActorTask_ParamsSpec, 'glic.mojom.ActorHandler_PauseActorTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pause_reason', 4, 0, mojo.internal.bindings.glic.mojom.ActorTaskPauseReasonSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_tab_id_$flag', 8, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_tab_id_$value', originalFieldName: 'arg_tab_id' }),
      mojo.internal.StructField('arg_tab_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_tab_id_$flag', originalFieldName: 'arg_tab_id' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ParamsSpec, 'glic.mojom.ActorHandler_ResumeActorTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_context_options', 8, 0, mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_ResumeActorTask_ResponseParamsSpec, 'glic.mojom.ActorHandler_ResumeActorTask_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultWithActionResultCodeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_InterruptActorTask_ParamsSpec, 'glic.mojom.ActorHandler_InterruptActorTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_interrupt_reason', 4, 0, mojo.internal.bindings.glic.mojom.ActorTaskInterruptReasonSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_UninterruptActorTask_ParamsSpec, 'glic.mojom.ActorHandler_UninterruptActorTask_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ParamsSpec, 'glic.mojom.ActorHandler_CreateActorTab_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_open_in_background', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_initiator_tab_id_$flag', 4, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_initiator_tab_id_$value', originalFieldName: 'arg_initiator_tab_id' }),
      mojo.internal.StructField('arg_initiator_window_id_$flag', 4, 2, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_initiator_window_id_$value', originalFieldName: 'arg_initiator_window_id' }),
      mojo.internal.StructField('arg_initiator_tab_id_$value', 8, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_initiator_tab_id_$flag', originalFieldName: 'arg_initiator_tab_id' }),
      mojo.internal.StructField('arg_initiator_window_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_initiator_window_id_$flag', originalFieldName: 'arg_initiator_window_id' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_CreateActorTab_ResponseParamsSpec, 'glic.mojom.ActorHandler_CreateActorTab_ResponseParams', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_LogBeginAsyncEvent_ParamsSpec, 'glic.mojom.ActorHandler_LogBeginAsyncEvent_Params', [
      mojo.internal.StructField('arg_event_async_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_task_id', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_event', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_LogEndAsyncEvent_ParamsSpec, 'glic.mojom.ActorHandler_LogEndAsyncEvent_Params', [
      mojo.internal.StructField('arg_event_async_id', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_details', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_LogInstantEvent_ParamsSpec, 'glic.mojom.ActorHandler_LogInstantEvent_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_event', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_details', 16, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_JournalClear_ParamsSpec, 'glic.mojom.ActorHandler_JournalClear_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ParamsSpec, 'glic.mojom.ActorHandler_JournalSnapshot_Params', [
      mojo.internal.StructField('arg_clear_journal', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_JournalSnapshot_ResponseParamsSpec, 'glic.mojom.ActorHandler_JournalSnapshot_ResponseParams', [
      mojo.internal.StructField('arg_journal', 0, 0, mojo.internal.bindings.glic.mojom.JournalSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_JournalStart_ParamsSpec, 'glic.mojom.ActorHandler_JournalStart_Params', [
      mojo.internal.StructField('arg_max_bytes', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_capture_screenshots', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_JournalStop_ParamsSpec, 'glic.mojom.ActorHandler_JournalStop_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ActorHandler_JournalRecordFeedback_ParamsSpec, 'glic.mojom.ActorHandler_JournalRecordFeedback_Params', [
      mojo.internal.StructField('arg_positive', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ParamsSpec, 'glic.mojom.AnnotationHandler_ScrollTo_Params', [
      mojo.internal.StructField('arg_params', 0, 0, mojo.internal.bindings.glic.mojom.ScrollToParamsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.AnnotationHandler_ScrollTo_ResponseParamsSpec, 'glic.mojom.AnnotationHandler_ScrollTo_ResponseParams', [
      mojo.internal.StructField('arg_error_reason', 0, 0, mojo.internal.bindings.glic.mojom.ScrollToErrorReasonSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.AnnotationHandler_DropScrollToHighlight_ParamsSpec, 'glic.mojom.AnnotationHandler_DropScrollToHighlight_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ParamsSpec, 'glic.mojom.SkillsHandler_CreateSkill_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.glic.mojom.CreateSkillRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_CreateSkill_ResponseParamsSpec, 'glic.mojom.SkillsHandler_CreateSkill_ResponseParams', [
      mojo.internal.StructField('arg_modal_opened', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ParamsSpec, 'glic.mojom.SkillsHandler_UpdateSkill_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.glic.mojom.UpdateSkillRequestSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_UpdateSkill_ResponseParamsSpec, 'glic.mojom.SkillsHandler_UpdateSkill_ResponseParams', [
      mojo.internal.StructField('arg_modal_opened', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_ShowManageSkillsUi_ParamsSpec, 'glic.mojom.SkillsHandler_ShowManageSkillsUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_ShowBrowseSkillsUi_ParamsSpec, 'glic.mojom.SkillsHandler_ShowBrowseSkillsUi_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ParamsSpec, 'glic.mojom.SkillsHandler_GetSkill_Params', [
      mojo.internal.StructField('arg_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_GetSkill_ResponseParamsSpec, 'glic.mojom.SkillsHandler_GetSkill_ResponseParams', [
      mojo.internal.StructField('arg_skill', 0, 0, mojo.internal.bindings.glic.mojom.SkillSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_ParamsSpec, 'glic.mojom.SkillsHandler_RecordSkillsWebClientEvent_Params', [
      mojo.internal.StructField('arg_event', 0, 0, mojo.internal.bindings.glic.mojom.SkillsWebClientEventSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewsChanged_ParamsSpec, 'glic.mojom.SkillsClient_NotifySkillPreviewsChanged_Params', [
      mojo.internal.StructField('arg_skill_previews', 0, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.SkillPreviewSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_ParamsSpec, 'glic.mojom.SkillsClient_NotifyContextualSkillPreviewsChanged_Params', [
      mojo.internal.StructField('arg_skill_previews', 0, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.SkillPreviewSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillPreviewChanged_ParamsSpec, 'glic.mojom.SkillsClient_NotifySkillPreviewChanged_Params', [
      mojo.internal.StructField('arg_skill_preview', 0, 0, mojo.internal.bindings.glic.mojom.SkillPreviewSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillDeleted_ParamsSpec, 'glic.mojom.SkillsClient_NotifySkillDeleted_Params', [
      mojo.internal.StructField('arg_skill_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.SkillsClient_NotifySkillToInvokeChanged_ParamsSpec, 'glic.mojom.SkillsClient_NotifySkillToInvokeChanged_Params', [
      mojo.internal.StructField('arg_skill', 0, 0, mojo.internal.bindings.glic.mojom.SkillSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientCreated_Params', [
      mojo.internal.StructField('arg_web_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.WebClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientCreated_ResponseParamsSpec, 'glic.mojom.WebClientHandler_WebClientCreated_ResponseParams', [
      mojo.internal.StructField('arg_initial_state', 0, 0, mojo.internal.bindings.glic.mojom.WebClientInitialStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitialized_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientInitialized_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_WebClientInitializeFailed_ParamsSpec, 'glic.mojom.WebClientHandler_WebClientInitializeFailed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateActorHandler_ParamsSpec, 'glic.mojom.WebClientHandler_CreateActorHandler_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.ActorHandlerPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.ActorClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateAnnotationHandler_ParamsSpec, 'glic.mojom.WebClientHandler_CreateAnnotationHandler_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.AnnotationHandlerPendingReceiver), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateSkillsHandler_ParamsSpec, 'glic.mojom.WebClientHandler_CreateSkillsHandler_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.glic.mojom.SkillsHandlerPendingReceiver), null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.SkillsClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ParamsSpec, 'glic.mojom.WebClientHandler_CreateTab_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_open_in_background', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_window_id_$flag', 8, 1, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_window_id_$value', originalFieldName: 'arg_window_id' }),
      mojo.internal.StructField('arg_window_id_$value', 12, 0, mojo.internal.Int32, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_window_id_$flag', originalFieldName: 'arg_window_id' }),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CreateTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CreateTab_ResponseParams', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ParamsSpec, 'glic.mojom.WebClientHandler_ActivateTabWithUrl_Params', [
      mojo.internal.StructField('arg_exact_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.ActivateTabOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ActivateTabWithUrl_ResponseParams', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenLinkInPopup_ParamsSpec, 'glic.mojom.WebClientHandler_OpenLinkInPopup_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_popup_width', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_popup_height', 12, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenGlicSettingsPage_ParamsSpec, 'glic.mojom.WebClientHandler_OpenGlicSettingsPage_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.glic.mojom.OpenSettingsOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_ParamsSpec, 'glic.mojom.WebClientHandler_OpenPasswordManagerSettingsPage_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanel_ParamsSpec, 'glic.mojom.WebClientHandler_ClosePanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ClosePanelAndShutdown_ParamsSpec, 'glic.mojom.WebClientHandler_ClosePanelAndShutdown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_AttachPanel_ParamsSpec, 'glic.mojom.WebClientHandler_AttachPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_DetachPanel_ParamsSpec, 'glic.mojom.WebClientHandler_DetachPanel_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnModeChange_ParamsSpec, 'glic.mojom.WebClientHandler_OnModeChange_Params', [
      mojo.internal.StructField('arg_new_mode', 0, 0, mojo.internal.bindings.glic.mojom.WebClientModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnMicrophoneStatusChange_ParamsSpec, 'glic.mojom.WebClientHandler_OnMicrophoneStatusChange_Params', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.glic.mojom.MicrophoneStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShowProfilePicker_ParamsSpec, 'glic.mojom.WebClientHandler_ShowProfilePicker_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ParamsSpec, 'glic.mojom.WebClientHandler_GetModelQualityClientId_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetModelQualityClientId_ResponseParams', [
      mojo.internal.StructField('arg_model_quality_client_id', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromFocusedTab_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromFocusedTab_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.GetTabContextOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetContextFromTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetContextFromTab_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetContextResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetImageBytesFromTab_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_dom_node_id', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_document_id', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetImageBytesFromTab_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.GetImageBytesResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ParamsSpec, 'glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_Params', [
      mojo.internal.StructField('arg_requested_max', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetMaximumNumberOfPinnedTabs_ResponseParams', [
      mojo.internal.StructField('arg_effective_max', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ParamsSpec, 'glic.mojom.WebClientHandler_PinTabs_Params', [
      mojo.internal.StructField('arg_tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.PinTabsOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_PinTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_PinTabs_ResponseParams', [
      mojo.internal.StructField('arg_pinned_all', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ParamsSpec, 'glic.mojom.WebClientHandler_UnpinTabs_Params', [
      mojo.internal.StructField('arg_tab_ids', 0, 0, mojo.internal.Array(mojo.internal.Int32, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinTabs_ResponseParamsSpec, 'glic.mojom.WebClientHandler_UnpinTabs_ResponseParams', [
      mojo.internal.StructField('arg_unpinned_all', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_UnpinAllTabs_ParamsSpec, 'glic.mojom.WebClientHandler_UnpinAllTabs_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.glic.mojom.UnpinTabsOptionsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPinCandidates_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPinCandidates_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.glic.mojom.GetPinCandidatesOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.PinCandidatesObserverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ActivateTab_ParamsSpec, 'glic.mojom.WebClientHandler_ActivateTab_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ParamsSpec, 'glic.mojom.WebClientHandler_ResizeWidget_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ResizeWidget_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ResizeWidget_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ParamsSpec, 'glic.mojom.WebClientHandler_CaptureScreenshot_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParamsSpec, 'glic.mojom.WebClientHandler_CaptureScreenshot_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.CaptureScreenshotResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_CaptureRegion_ParamsSpec, 'glic.mojom.WebClientHandler_CaptureRegion_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.CaptureRegionObserverRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.glic.mojom.CaptureRegionParamsSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_DeleteCapturedRegion_ParamsSpec, 'glic.mojom.WebClientHandler_DeleteCapturedRegion_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_id', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ParamsSpec, 'glic.mojom.WebClientHandler_SetAudioDucking_Params', [
      mojo.internal.StructField('arg_enable', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetAudioDucking_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetAudioDucking_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMinimumPanelSize_ParamsSpec, 'glic.mojom.WebClientHandler_SetMinimumPanelSize_Params', [
      mojo.internal.StructField('arg_size', 0, 0, mojo.internal.bindings.gfx.mojom.SizeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetMicrophonePermissionState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetMicrophonePermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetLocationPermissionState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetLocationPermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ParamsSpec, 'glic.mojom.WebClientHandler_SetTabContextPermissionState_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetTabContextPermissionState_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ParamsSpec, 'glic.mojom.WebClientHandler_SetClosedCaptioningSetting_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetClosedCaptioningSetting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ParamsSpec, 'glic.mojom.WebClientHandler_SetActuationOnWebSetting_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SetActuationOnWebSetting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowMediaPermissionRequest_ResponseParams', [
      mojo.internal.StructField('arg_is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParamsSpec, 'glic.mojom.WebClientHandler_ShouldAllowGeolocationPermissionRequest_ResponseParams', [
      mojo.internal.StructField('arg_is_allowed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetContextAccessIndicator_ParamsSpec, 'glic.mojom.WebClientHandler_SetContextAccessIndicator_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ParamsSpec, 'glic.mojom.WebClientHandler_GetUserProfileInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetUserProfileInfo_ResponseParams', [
      mojo.internal.StructField('arg_profile_info', 0, 0, mojo.internal.bindings.glic.mojom.UserProfileInfoSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ParamsSpec, 'glic.mojom.WebClientHandler_SyncCookies_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SyncCookies_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SyncCookies_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_ParamsSpec, 'glic.mojom.WebClientHandler_ClientErrorDialogStateChanged_Params', [
      mojo.internal.StructField('arg_shown_dialog_type', 0, 0, mojo.internal.bindings.glic.mojom.ClientErrorDialogTypeSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ReportClientTransientError_ParamsSpec, 'glic.mojom.WebClientHandler_ReportClientTransientError_Params', [
      mojo.internal.StructField('arg_status_code', 0, 0, mojo.internal.bindings.mojo_base.mojom.AbslStatusCodeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_ParamsSpec, 'glic.mojom.WebClientHandler_ProcessCounterAbuseVerdict_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_verdict', 8, 0, mojo.internal.bindings.glic.mojom.CounterAbuseVerdictSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnOptinImpression_ParamsSpec, 'glic.mojom.WebClientHandler_OnOptinImpression_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnUserInputSubmitted_ParamsSpec, 'glic.mojom.WebClientHandler_OnUserInputSubmitted_Params', [
      mojo.internal.StructField('arg_mode', 0, 0, mojo.internal.bindings.glic.mojom.WebClientModeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadStarted_ParamsSpec, 'glic.mojom.WebClientHandler_OnContextUploadStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnContextUploadCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_OnContextUploadCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnReaction_ParamsSpec, 'glic.mojom.WebClientHandler_OnReaction_Params', [
      mojo.internal.StructField('arg_reactionType', 0, 0, mojo.internal.bindings.glic.mojom.MetricUserInputReactionTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStarted_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseStarted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseStopped_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseStopped_Params', [
      mojo.internal.StructField('arg_details', 0, 0, mojo.internal.bindings.glic.mojom.OnResponseStoppedDetailsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnSessionTerminated_ParamsSpec, 'glic.mojom.WebClientHandler_OnSessionTerminated_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnTurnCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_OnTurnCompleted_Params', [
      mojo.internal.StructField('arg_model', 0, 0, mojo.internal.bindings.glic.mojom.WebClientModelSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_duration', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnResponseRated_ParamsSpec, 'glic.mojom.WebClientHandler_OnResponseRated_Params', [
      mojo.internal.StructField('arg_positive', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnClosedCaptionsShown_ParamsSpec, 'glic.mojom.WebClientHandler_OnClosedCaptionsShown_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OnActionSubmitted_ParamsSpec, 'glic.mojom.WebClientHandler_OnActionSubmitted_Params', [
      mojo.internal.StructField('arg_is_retry', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetSyntheticExperimentState_ParamsSpec, 'glic.mojom.WebClientHandler_SetSyntheticExperimentState_Params', [
      mojo.internal.StructField('arg_trial_name', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group_name', 8, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_ParamsSpec, 'glic.mojom.WebClientHandler_OpenOsPermissionSettingsMenu_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.bindings.content_settings.mojom.ContentSettingsTypeSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ParamsSpec, 'glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetOsMicrophonePermissionStatus_ResponseParams', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_Params', [
      mojo.internal.StructField('arg_is_live', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsAndSubscribe_ResponseParams', [
      mojo.internal.StructField('arg_zero_state_suggestions', 0, 0, mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_Params', [
      mojo.internal.StructField('arg_is_first_run_$flag', 0, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_is_first_run_$value', originalFieldName: 'arg_is_first_run' }),
      mojo.internal.StructField('arg_is_first_run_$value', 0, 1, mojo.internal.Bool, false, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_is_first_run_$flag', originalFieldName: 'arg_is_first_run' }),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParamsSpec, 'glic.mojom.WebClientHandler_GetZeroStateSuggestionsForFocusedTab_ResponseParams', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_MaybeRefreshUserStatus_ParamsSpec, 'glic.mojom.WebClientHandler_MaybeRefreshUserStatus_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ParamsSpec, 'glic.mojom.WebClientHandler_IsDebuggerAttached_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParamsSpec, 'glic.mojom.WebClientHandler_IsDebuggerAttached_ResponseParams', [
      mojo.internal.StructField('arg_is_attached_to_webview', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPageMetadata_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_names', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToPageMetadata_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ParamsSpec, 'glic.mojom.WebClientHandler_SwitchConversation_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.glic.mojom.ConversationInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SwitchConversation_ResponseParamsSpec, 'glic.mojom.WebClientHandler_SwitchConversation_ResponseParams', [
      mojo.internal.StructField('arg_error_reason', 0, 0, mojo.internal.bindings.glic.mojom.SwitchConversationErrorReasonSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ParamsSpec, 'glic.mojom.WebClientHandler_RegisterConversation_Params', [
      mojo.internal.StructField('arg_info', 0, 0, mojo.internal.bindings.glic.mojom.ConversationInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_RegisterConversation_ResponseParamsSpec, 'glic.mojom.WebClientHandler_RegisterConversation_ResponseParams', [
      mojo.internal.StructField('arg_error_reason', 0, 0, mojo.internal.bindings.glic.mojom.RegisterConversationErrorReasonSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SetOnboardingCompleted_ParamsSpec, 'glic.mojom.WebClientHandler_SetOnboardingCompleted_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabData_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToTabData_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.TabDataHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClientHandler_SubscribeToTabFavicon_ParamsSpec, 'glic.mojom.WebClientHandler_SubscribeToTabFavicon_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.TabFaviconHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.TabDataHandler_OnTabDataChanged_ParamsSpec, 'glic.mojom.TabDataHandler_OnTabDataChanged_Params', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.TabFaviconHandler_OnTabFaviconChanged_ParamsSpec, 'glic.mojom.TabFaviconHandler_OnTabFaviconChanged_Params', [
      mojo.internal.StructField('arg_favicon', 0, 0, mojo.internal.bindings.skia.mojom.BitmapN32Spec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_ParamsSpec, 'glic.mojom.ExperimentalTriggeringUpdatesHandler_OnUpdate_Params', [
      mojo.internal.StructField('arg_update', 0, 0, mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdateSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_observation', 8, 0, mojo.internal.bindings.glic.mojom.SubscriberObservationTypeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelWillOpen_Params', [
      mojo.internal.StructField('arg_panel_opening_data', 0, 0, mojo.internal.bindings.glic.mojom.PanelOpeningDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParamsSpec, 'glic.mojom.WebClient_NotifyPanelWillOpen_ResponseParams', [
      mojo.internal.StructField('arg_openPanelInfo', 0, 0, mojo.internal.bindings.glic.mojom.OpenPanelInfoSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelWasClosed_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParamsSpec, 'glic.mojom.WebClient_NotifyPanelWasClosed_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelStateChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelStateChange_Params', [
      mojo.internal.StructField('arg_panel_state', 0, 0, mojo.internal.bindings.glic.mojom.PanelStateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelActiveChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelActiveChange_Params', [
      mojo.internal.StructField('arg_panel_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPanelCanAttachChange_ParamsSpec, 'glic.mojom.WebClient_NotifyPanelCanAttachChange_Params', [
      mojo.internal.StructField('arg_can_attach', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyMicrophonePermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ParamsSpec, 'glic.mojom.WebClient_StopMicrophone_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_StopMicrophone_ResponseParamsSpec, 'glic.mojom.WebClient_StopMicrophone_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyLocationPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyLocationPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyTabContextPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOsLocationPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyFocusedTabChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyFocusedTabChanged_Params', [
      mojo.internal.StructField('arg_focused_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.FocusedTabDataSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyManualResizeChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyManualResizeChanged_Params', [
      mojo.internal.StructField('arg_resizing', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyOsHotkeyStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOsHotkeyStateChanged_Params', [
      mojo.internal.StructField('arg_hotkey', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyBrowserIsOpenChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyBrowserIsOpenChanged_Params', [
      mojo.internal.StructField('arg_browser_is_open', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyInstanceActivationChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyInstanceActivationChanged_Params', [
      mojo.internal.StructField('arg_instance_active', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyClosedCaptioningSettingChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPinnedTabsChanged_Params', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.Array(mojo.internal.bindings.glic.mojom.TabDataSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPinnedTabDataChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPinnedTabDataChanged_Params', [
      mojo.internal.StructField('arg_tab_data', 0, 0, mojo.internal.bindings.glic.mojom.TabDataSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyZeroStateSuggestionsChanged_Params', [
      mojo.internal.StructField('arg_suggestions', 0, 0, mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsV2Spec, null, true, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.glic.mojom.ZeroStateSuggestionsOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyPageMetadataChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyPageMetadataChanged_Params', [
      mojo.internal.StructField('arg_tab_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_metadata', 8, 0, mojo.internal.bindings.blink.mojom.PageMetadataSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyDefaultTabContextPermissionStateChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyAdditionalContext_ParamsSpec, 'glic.mojom.WebClient_NotifyAdditionalContext_Params', [
      mojo.internal.StructField('arg_context', 0, 0, mojo.internal.bindings.glic.mojom.AdditionalContextSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActuationOnWebSettingChanged_Params', [
      mojo.internal.StructField('arg_enabled', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyActOnWebCapabilityChanged_Params', [
      mojo.internal.StructField('arg_can_act_on_web', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyOnboardingCompletedChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyOnboardingCompletedChanged_Params', [
      mojo.internal.StructField('arg_completed', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_ParamsSpec, 'glic.mojom.WebClient_NotifyGeminiEnterpriseSettingsChanged_Params', [
      mojo.internal.StructField('arg_settings', 0, 0, mojo.internal.bindings.glic.mojom.GeminiEnterpriseSettingsSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_NotifyActorTaskListRowClicked_ParamsSpec, 'glic.mojom.WebClient_NotifyActorTaskListRowClicked_Params', [
      mojo.internal.StructField('arg_task_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_Invoke_ParamsSpec, 'glic.mojom.WebClient_Invoke_Params', [
      mojo.internal.StructField('arg_options', 0, 0, mojo.internal.bindings.glic.mojom.InvokeOptionsSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_Invoke_ResponseParamsSpec, 'glic.mojom.WebClient_Invoke_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ParamsSpec, 'glic.mojom.WebClient_GetExperimentalTriggeringUpdates_Params', [
      mojo.internal.StructField('arg_handler', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.glic.mojom.ExperimentalTriggeringUpdatesHandlerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParamsSpec, 'glic.mojom.WebClient_GetExperimentalTriggeringUpdates_ResponseParams', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.glic.mojom.CaptureRegionObserver_OnUpdate_ParamsSpec, 'glic.mojom.CaptureRegionObserver_OnUpdate_Params', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.bindings.glic.mojom.CaptureRegionResultSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_reason', 8, 0, mojo.internal.bindings.glic.mojom.CaptureRegionErrorReasonSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

