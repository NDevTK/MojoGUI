// Auto-generated MojoJS binding
 // Source: chromium_src/services/network/public/mojom/network_context.mojom
 // Module: network.mojom

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
      _interfaceScrambleMap: {"android_webview.mojom.LocalMainFrame": true, "android_webview.mojom.FrameHost": true, "android_webview.mojom.RenderMessageFilter": true, "android_webview.mojom.Renderer": true, "ash.mojom.HidPreservingBluetoothStateController": true, "ash.annotator.mojom.UntrustedAnnotatorPage": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandler": true, "ash.annotator.mojom.UntrustedAnnotatorPageHandlerFactory": true, "ash.boca_receiver.mojom.UntrustedPage": true, "ash.boca_receiver.mojom.UntrustedPageHandlerFactory": true, "ash.boca.mojom.PageHandler": true, "ash.boca.mojom.Page": true, "ash.boca.mojom.BocaPageHandlerFactory": true, "ash.camera_app.mojom.TabletModeMonitor": true, "ash.camera_app.mojom.ScreenStateMonitor": true, "ash.camera_app.mojom.ScreenLockedMonitor": true, "ash.camera_app.mojom.ExternalScreenMonitor": true, "ash.camera_app.mojom.CameraUsageOwnershipMonitor": true, "ash.camera_app.mojom.LidStateMonitor": true, "ash.camera_app.mojom.SWPrivacySwitchMonitor": true, "ash.camera_app.mojom.WindowStateMonitor": true, "ash.camera_app.mojom.StorageMonitor": true, "ash.camera_app.mojom.WindowStateController": true, "ash.camera_app.mojom.CameraAppHelper": true, "ash.camera_app.mojom.EventsSender": true, "ash.camera_app.mojom.PdfBuilder": true, "ash.color_internals.mojom.WallpaperColorsObserver": true, "ash.color_internals.mojom.WallpaperColorsHandler": true, "ash.common.mojom.AcceleratorFetcherObserver": true, "ash.common.mojom.AcceleratorFetcher": true, "ash.common.mojom.ForceHiddenElementsVisibleObserver": true, "ash.common.mojom.AccessibilityFeatures": true, "ash.personalization_app.mojom.SeaPenObserver": true, "ash.personalization_app.mojom.SeaPenProvider": true, "ash.common.mojom.ShortcutInputObserver": true, "ash.common.mojom.ShortcutInputProvider": true, "ash.common.mojom.WebUiSyslogEmitter": true, "ash.mojom.demo_mode.UntrustedPageHandlerFactory": true, "ash.mojom.demo_mode.UntrustedPageHandler": true, "ash.diagnostics.mojom.KeyboardObserver": true, "ash.diagnostics.mojom.InternalDisplayPowerStateObserver": true, "ash.diagnostics.mojom.TabletModeObserver": true, "ash.diagnostics.mojom.LidStateObserver": true, "ash.diagnostics.mojom.ConnectedDevicesObserver": true, "ash.diagnostics.mojom.InputDataProvider": true, "ash.diagnostics.mojom.NetworkListObserver": true, "ash.diagnostics.mojom.NetworkStateObserver": true, "ash.diagnostics.mojom.NetworkHealthProvider": true, "ash.diagnostics.mojom.BatteryChargeStatusObserver": true, "ash.diagnostics.mojom.BatteryHealthObserver": true, "ash.diagnostics.mojom.MemoryUsageObserver": true, "ash.diagnostics.mojom.CpuUsageObserver": true, "ash.diagnostics.mojom.SystemDataProvider": true, "ash.diagnostics.mojom.RoutineRunner": true, "ash.diagnostics.mojom.SystemRoutineController": true, "ash.eche_app.mojom.SignalingMessageExchanger": true, "ash.eche_app.mojom.SignalingMessageObserver": true, "ash.eche_app.mojom.SystemInfoProvider": true, "ash.eche_app.mojom.SystemInfoObserver": true, "ash.eche_app.mojom.AccessibilityProvider": true, "ash.eche_app.mojom.AccessibilityObserver": true, "ash.eche_app.mojom.UidGenerator": true, "ash.eche_app.mojom.NotificationGenerator": true, "ash.eche_app.mojom.DisplayStreamHandler": true, "ash.eche_app.mojom.StreamActionObserver": true, "ash.eche_app.mojom.StreamOrientationObserver": true, "ash.eche_app.mojom.ConnectionStatusObserver": true, "ash.eche_app.mojom.KeyboardLayoutHandler": true, "ash.eche_app.mojom.KeyboardLayoutObserver": true, "ash.file_manager.mojom.PageHandlerFactory": true, "ash.file_manager.mojom.PageHandler": true, "ash.file_manager.mojom.Page": true, "ash.mojom.files_internals.PageHandler": true, "ash.firmware_update.mojom.UpdateObserver": true, "ash.firmware_update.mojom.DeviceRequestObserver": true, "ash.firmware_update.mojom.UpdateProgressObserver": true, "ash.firmware_update.mojom.UpdateProvider": true, "ash.firmware_update.mojom.InstallController": true, "ash.firmware_update.mojom.SystemUtils": true, "ash.focus_mode.mojom.MediaClient": true, "ash.focus_mode.mojom.TrackProvider": true, "ash.graduation_ui.mojom.GraduationUiHandler": true, "ash.growth.mojom.PageHandler": true, "ash.help_app.mojom.PageHandlerFactory": true, "ash.help_app.mojom.PageHandler": true, "ash.help_app.mojom.SearchResultsObserver": true, "ash.help_app.mojom.SearchHandler": true, "ash.mall.mojom.PageHandler": true, "ash.media_app_ui.mojom.PageHandlerFactory": true, "ash.media_app_ui.mojom.PageHandler": true, "ash.media_app_ui.mojom.UntrustedServiceFactory": true, "ash.media_app_ui.mojom.OcrUntrustedService": true, "ash.media_app_ui.mojom.OcrUntrustedPage": true, "ash.media_app_ui.mojom.MahiUntrustedService": true, "ash.media_app_ui.mojom.MahiUntrustedPage": true, "ash.media_app_ui.mojom.MantisUntrustedService": true, "ash.media_app_ui.mojom.MantisUntrustedPage": true, "ash.os_feedback_ui.mojom.HelpContentProvider": true, "ash.os_feedback_ui.mojom.FeedbackServiceProvider": true, "ash.personalization_app.mojom.WallpaperObserver": true, "ash.personalization_app.mojom.WallpaperProvider": true, "ash.personalization_app.mojom.ThemeObserver": true, "ash.personalization_app.mojom.ThemeProvider": true, "ash.personalization_app.mojom.UserImageObserver": true, "ash.personalization_app.mojom.UserProvider": true, "ash.personalization_app.mojom.AmbientObserver": true, "ash.personalization_app.mojom.AmbientProvider": true, "ash.personalization_app.mojom.KeyboardBacklightObserver": true, "ash.personalization_app.mojom.KeyboardBacklightProvider": true, "ash.personalization_app.mojom.SearchResultsObserver": true, "ash.personalization_app.mojom.SearchHandler": true, "ash.printing.print_preview.mojom.DestinationProvider": true, "ash.projector.mojom.UntrustedProjectorPageHandler": true, "ash.projector.mojom.UntrustedProjectorPage": true, "ash.projector.mojom.UntrustedProjectorPageHandlerFactory": true, "ash.recorder_app.mojom.ModelStateMonitor": true, "ash.recorder_app.mojom.QuietModeMonitor": true, "ash.recorder_app.mojom.PageHandler": true, "ash.mojom.sample_swa.ChildUntrustedPage": true, "ash.mojom.sample_swa.ParentTrustedPage": true, "ash.mojom.sample_swa.PageHandlerFactory": true, "ash.mojom.sample_swa.PageHandler": true, "ash.mojom.sample_swa.Page": true, "ash.mojom.sample_swa.UntrustedPageInterfacesFactory": true, "ash.sanitize_ui.mojom.SettingsResetter": true, "ash.mojom.scanner_feedback_ui.PageHandler": true, "ash.scanning.mojom.ScanJobObserver": true, "ash.scanning.mojom.ScanService": true, "ash.scanning.mojom.MultiPageScanController": true, "ash.shimless_rma.mojom.ErrorObserver": true, "ash.shimless_rma.mojom.OsUpdateObserver": true, "ash.shimless_rma.mojom.CalibrationObserver": true, "ash.shimless_rma.mojom.ProvisioningObserver": true, "ash.shimless_rma.mojom.HardwareWriteProtectionStateObserver": true, "ash.shimless_rma.mojom.PowerCableStateObserver": true, "ash.shimless_rma.mojom.ExternalDiskStateObserver": true, "ash.shimless_rma.mojom.HardwareVerificationStatusObserver": true, "ash.shimless_rma.mojom.FinalizationObserver": true, "ash.shimless_rma.mojom.UpdateRoFirmwareObserver": true, "ash.shimless_rma.mojom.ShimlessRmaService": true, "ash.shortcut_customization.mojom.SearchResultsAvailabilityObserver": true, "ash.shortcut_customization.mojom.SearchHandler": true, "ash.shortcut_customization.mojom.AcceleratorsUpdatedObserver": true, "ash.shortcut_customization.mojom.PolicyUpdatedObserver": true, "ash.shortcut_customization.mojom.AcceleratorConfigurationProvider": true, "ash.mojom.status_area_internals.PageHandler": true, "cc.mojom.RenderFrameMetadataObserver": true, "cc.mojom.RenderFrameMetadataObserverClient": true, "actor.ui.mojom.ActorOverlayPageHandlerFactory": true, "actor.ui.mojom.ActorOverlayPageHandler": true, "actor.ui.mojom.ActorOverlayPage": true, "contextual_tasks.mojom.PageHandler": true, "contextual_tasks.mojom.Page": true, "contextual_tasks.mojom.PageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandlerFactory": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPageHandler": true, "contextual_tasks_internals.mojom.ContextualTasksInternalsPage": true, "glic.mojom.FrePageHandlerFactory": true, "glic.mojom.FrePageHandler": true, "glic.mojom.PreloadPage": true, "glic.mojom.Page": true, "glic.mojom.GlicPreloadHandler": true, "glic.mojom.GlicPreloadHandlerFactory": true, "glic.mojom.PageHandlerFactory": true, "glic.mojom.PageHandler": true, "glic.mojom.PinCandidatesObserver": true, "glic.mojom.WebClientHandler": true, "glic.mojom.TabDataHandler": true, "glic.mojom.WebClient": true, "glic.mojom.CaptureRegionObserver": true, "lens.mojom.LensPageHandlerFactory": true, "lens.mojom.LensPageHandler": true, "lens.mojom.LensPage": true, "lens.mojom.LensGhostLoaderPageHandlerFactory": true, "lens.mojom.LensGhostLoaderPage": true, "lens.mojom.LensSidePanelPageHandlerFactory": true, "lens.mojom.LensSidePanelPageHandler": true, "lens.mojom.LensSidePanelPage": true, "media.mojom.MediaEngagementScoreDetailsProvider": true, "file_suggestion.mojom.DriveSuggestionHandler": true, "file_suggestion.mojom.MicrosoftFilesPageHandler": true, "ntp.safe_browsing.mojom.SafeBrowsingHandler": true, "ntp.authentication.mojom.MicrosoftAuthPageHandler": true, "ntp.calendar.mojom.GoogleCalendarPageHandler": true, "ntp.calendar.mojom.OutlookCalendarPageHandler": true, "ntp.most_relevant_tab_resumption.mojom.PageHandler": true, "ntp.tab_groups.mojom.PageHandler": true, "certificate_manager.mojom.CertificateManagerPageHandlerFactory": true, "certificate_manager.mojom.CertificateManagerPageHandler": true, "certificate_manager.mojom.CertificateManagerPage": true, "access_code_cast.mojom.PageHandlerFactory": true, "access_code_cast.mojom.PageHandler": true, "access_code_cast.mojom.Page": true, "actor_internals.mojom.Page": true, "actor_internals.mojom.PageHandler": true, "actor_internals.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandlerFactory": true, "app_home.mojom.PageHandler": true, "app_home.mojom.Page": true, "mojom.app_service_internals.AppServiceInternalsPageHandler": true, "add_supervision.mojom.AddSupervisionHandler": true, "ash.app_install.mojom.AppInfoActions": true, "ash.app_install.mojom.ConnectionErrorActions": true, "ash.app_install.mojom.PageHandlerFactory": true, "ash.app_install.mojom.PageHandler": true, "ash.borealis_installer.mojom.PageHandlerFactory": true, "ash.borealis_installer.mojom.PageHandler": true, "ash.borealis_installer.mojom.Page": true, "ash.cloud_upload.mojom.PageHandlerFactory": true, "ash.cloud_upload.mojom.PageHandler": true, "ash.crostini_installer.mojom.PageHandlerFactory": true, "ash.crostini_installer.mojom.PageHandler": true, "ash.crostini_installer.mojom.Page": true, "dlp_internals.mojom.ReportingObserver": true, "dlp_internals.mojom.PageHandler": true, "emoji_picker.mojom.PageHandlerFactory": true, "emoji_picker.mojom.PageHandler": true, "new_window_proxy.mojom.NewWindowProxy": true, "enterprise_reporting.mojom.PageHandlerFactory": true, "enterprise_reporting.mojom.PageHandler": true, "enterprise_reporting.mojom.Page": true, "ash.extended_updates.mojom.PageHandlerFactory": true, "ash.extended_updates.mojom.PageHandler": true, "ash.extended_updates.mojom.Page": true, "launcher_internals.mojom.PageHandlerFactory": true, "launcher_internals.mojom.Page": true, "lobster.mojom.UntrustedLobsterPageHandler": true, "ash.screens_common.mojom.AiIntroPageHandler": true, "ash.screens_common.mojom.AiIntroPage": true, "ash.screens_common.mojom.AppDownloadingPageHandler": true, "ash.screens_common.mojom.DrivePinningPageHandler": true, "ash.screens_common.mojom.DrivePinningPage": true, "ash.screens_common.mojom.FjordStationSetupPageHandler": true, "ash.screens_common.mojom.GaiaInfoPageHandler": true, "ash.screens_common.mojom.GaiaInfoPage": true, "ash.screens_common.mojom.GestureNavigationPageHandler": true, "ash.screens_common.mojom.GeminiIntroPageHandler": true, "ash.screens_factory.mojom.ScreensFactory": true, "ash.screens_login.mojom.ArcVmDataMigrationPageHandler": true, "ash.screens_login.mojom.ArcVmDataMigrationPage": true, "ash.screens_login.mojom.EncryptionMigrationPageHandler": true, "ash.screens_login.mojom.EncryptionMigrationPage": true, "ash.screens_oobe.mojom.ConsumerUpdatePageHandler": true, "ash.screens_oobe.mojom.ConsumerUpdatePage": true, "ash.screens_oobe.mojom.PackagedLicensePageHandler": true, "ash.screens_osauth.mojom.LocalDataLossWarningPageHandler": true, "ash.manage_mirrorsync.mojom.PageHandlerFactory": true, "ash.manage_mirrorsync.mojom.PageHandler": true, "ash.office_fallback.mojom.PageHandlerFactory": true, "ash.office_fallback.mojom.PageHandler": true, "parent_access_ui.mojom.ParentAccessUiHandler": true, "sensor.mojom.PageHandlerFactory": true, "sensor.mojom.PageHandler": true, "ash.settings.app_notification.mojom.AppNotificationsHandler": true, "ash.settings.app_notification.mojom.AppNotificationsObserver": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsHandler": true, "ash.settings.app_parental_controls.mojom.AppParentalControlsObserver": true, "ash.settings.date_time.mojom.PageHandlerFactory": true, "ash.settings.date_time.mojom.PageHandler": true, "ash.settings.date_time.mojom.Page": true, "ash.settings.mojom.TabletModeObserver": true, "ash.settings.mojom.DisplayConfigurationObserver": true, "ash.settings.mojom.DisplayBrightnessSettingsObserver": true, "ash.settings.mojom.AmbientLightSensorObserver": true, "ash.settings.mojom.DisplaySettingsProvider": true, "ash.settings.mojom.KeyboardSettingsObserver": true, "ash.settings.mojom.TouchpadSettingsObserver": true, "ash.settings.mojom.PointingStickSettingsObserver": true, "ash.settings.mojom.MouseSettingsObserver": true, "ash.settings.mojom.ButtonPressObserver": true, "ash.settings.mojom.GraphicsTabletSettingsObserver": true, "ash.settings.mojom.KeyboardBrightnessObserver": true, "ash.settings.mojom.KeyboardAmbientLightSensorObserver": true, "ash.settings.mojom.LidStateObserver": true, "ash.settings.mojom.InputDeviceSettingsProvider": true, "ash.settings.google_drive.mojom.PageHandlerFactory": true, "ash.settings.google_drive.mojom.PageHandler": true, "ash.settings.google_drive.mojom.Page": true, "ash.settings.one_drive.mojom.PageHandlerFactory": true, "ash.settings.one_drive.mojom.PageHandler": true, "ash.settings.one_drive.mojom.Page": true, "ash.settings.graduation.mojom.GraduationHandler": true, "ash.settings.graduation.mojom.GraduationObserver": true, "ash.settings.app_permission.mojom.AppPermissionsHandler": true, "ash.settings.app_permission.mojom.AppPermissionsObserver": true, "ash.settings.magic_boost_handler.mojom.PageHandlerFactory": true, "ash.settings.magic_boost_handler.mojom.PageHandler": true, "ash.settings.mojom.SearchResultsObserver": true, "ash.settings.mojom.SearchHandler": true, "ash.settings.mojom.UserActionRecorder": true, "policy.local_user_files.mojom.PageHandlerFactory": true, "policy.local_user_files.mojom.PageHandler": true, "policy.local_user_files.mojom.Page": true, "ash.vm.mojom.VmDiagnosticsProvider": true, "mojom.DebugLogsChangeHandler": true, "mojom.BluetoothInternalsHandler": true, "mojom.BluetoothBtsnoop": true, "customize_buttons.mojom.CustomizeButtonsHandlerFactory": true, "customize_buttons.mojom.CustomizeButtonsHandler": true, "customize_buttons.mojom.CustomizeButtonsDocument": true, "data_sharing.mojom.PageHandlerFactory": true, "data_sharing.mojom.PageHandler": true, "data_sharing.mojom.Page": true, "discards.mojom.DetailsProvider": true, "discards.mojom.GraphChangeStream": true, "discards.mojom.GraphDump": true, "discards.mojom.SiteDataProvider": true, "downloads.mojom.PageHandlerFactory": true, "downloads.mojom.PageHandler": true, "downloads.mojom.Page": true, "zero_state_promo.mojom.PageHandlerFactory": true, "zero_state_promo.mojom.PageHandler": true, "feed_internals.mojom.PageHandler": true, "infobar_internals.mojom.Page": true, "infobar_internals.mojom.PageHandler": true, "infobar_internals.mojom.PageHandlerFactory": true, "legion_internals.mojom.LegionInternalsPageHandler": true, "mojom.LocationInternalsHandler": true, "nearby_share.mojom.ShareTargetListener": true, "nearby_share.mojom.TransferUpdateListener": true, "nearby_share.mojom.DiscoveryObserver": true, "nearby_share.mojom.DiscoveryManager": true, "nearby_share.mojom.ConfirmationManager": true, "nearby_share.mojom.ReceiveObserver": true, "nearby_share.mojom.ReceiveManager": true, "new_tab_footer.mojom.NewTabFooterHandlerFactory": true, "new_tab_footer.mojom.NewTabFooterHandler": true, "new_tab_footer.mojom.NewTabFooterDocument": true, "action_chips.mojom.ActionChipsHandler": true, "action_chips.mojom.Page": true, "action_chips.mojom.ActionChipsHandlerFactory": true, "foo.mojom.FooHandler": true, "new_tab_page.mojom.PageHandlerFactory": true, "new_tab_page.mojom.PageHandler": true, "new_tab_page.mojom.Page": true, "ntp_promo.mojom.NtpPromoHandler": true, "ntp_promo.mojom.NtpPromoClient": true, "ntp_promo.mojom.NtpPromoHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandlerFactory": true, "new_tab_page_third_party.mojom.PageHandler": true, "new_tab_page_third_party.mojom.Page": true, "notifications_internals.mojom.PageHandler": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocument": true, "new_tab_page.mojom.MicrosoftAuthUntrustedDocumentInterfacesFactory": true, "new_tab_page.mojom.MicrosoftAuthUntrustedPageHandler": true, "aim_eligibility.mojom.Page": true, "aim_eligibility.mojom.PageHandler": true, "aim_eligibility.mojom.PageHandlerFactory": true, "mojom.OmniboxPageHandler": true, "mojom.OmniboxPage": true, "omnibox_popup_aim.mojom.PageHandlerFactory": true, "omnibox_popup_aim.mojom.PageHandler": true, "omnibox_popup_aim.mojom.Page": true, "on_device_internals.mojom.PageHandlerFactory": true, "on_device_internals.mojom.PageHandler": true, "on_device_internals.mojom.Page": true, "on_device_translation_internals.mojom.PageHandlerFactory": true, "on_device_translation_internals.mojom.PageHandler": true, "on_device_translation_internals.mojom.Page": true, "password_manager.mojom.PageHandlerFactory": true, "password_manager.mojom.PageHandler": true, "password_manager.mojom.Page": true, "privacy_sandbox_internals.mojom.PageHandler": true, "privacy_sandbox_internals.mojom.Page": true, "private_state_tokens.mojom.PrivateStateTokensPageHandler": true, "related_website_sets.mojom.RelatedWebsiteSetsPageHandler": true, "mojom.ResetPasswordHandler": true, "search_engine_choice.mojom.PageHandlerFactory": true, "search_engine_choice.mojom.PageHandler": true, "segmentation_internals.mojom.PageHandlerFactory": true, "segmentation_internals.mojom.PageHandler": true, "segmentation_internals.mojom.Page": true, "side_panel.mojom.BookmarksPageHandlerFactory": true, "side_panel.mojom.BookmarksPageHandler": true, "side_panel.mojom.BookmarksPage": true, "comments.mojom.PageHandlerFactory": true, "comments.mojom.PageHandler": true, "comments.mojom.Page": true, "side_panel.mojom.CustomizeChromePageHandlerFactory": true, "side_panel.mojom.CustomizeChromePageHandler": true, "side_panel.mojom.CustomizeChromePage": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandlerFactory": true, "side_panel.customize_chrome.mojom.CustomizeToolbarHandler": true, "side_panel.customize_chrome.mojom.CustomizeToolbarClient": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandlerFactory": true, "side_panel.customize_chrome.mojom.WallpaperSearchHandler": true, "side_panel.customize_chrome.mojom.WallpaperSearchClient": true, "reading_list.mojom.PageHandlerFactory": true, "reading_list.mojom.PageHandler": true, "reading_list.mojom.Page": true, "batch_upload.mojom.PageHandlerFactory": true, "batch_upload.mojom.PageHandler": true, "batch_upload.mojom.Page": true, "history_sync_optin.mojom.PageHandlerFactory": true, "history_sync_optin.mojom.PageHandler": true, "history_sync_optin.mojom.Page": true, "signout_confirmation.mojom.PageHandlerFactory": true, "signout_confirmation.mojom.PageHandler": true, "signout_confirmation.mojom.Page": true, "suggest_internals.mojom.PageHandler": true, "suggest_internals.mojom.Page": true, "tab_search.mojom.PageHandlerFactory": true, "tab_search.mojom.PageHandler": true, "tab_search.mojom.Page": true, "tab_strip.mojom.PageHandlerFactory": true, "tab_strip.mojom.PageHandler": true, "tab_strip.mojom.Page": true, "tab_strip_internals.mojom.PageHandlerFactory": true, "tab_strip_internals.mojom.PageHandler": true, "tab_strip_internals.mojom.Page": true, "unexportable_keys_internals.mojom.PageHandlerFactory": true, "unexportable_keys_internals.mojom.PageHandler": true, "unexportable_keys_internals.mojom.Page": true, "updater_ui.mojom.PageHandlerFactory": true, "updater_ui.mojom.PageHandler": true, "updater_ui.mojom.Page": true, "mojom.UsbInternalsPageHandler": true, "mojom.user_education_internals.UserEducationInternalsPageHandler": true, "watermark.mojom.PageHandlerFactory": true, "watermark.mojom.PageHandler": true, "mojom.WebAppInternalsHandler": true, "webui_toolbar.mojom.PageHandlerFactory": true, "webui_toolbar.mojom.PageHandler": true, "webui_toolbar.mojom.Page": true, "whats_new.mojom.PageHandlerFactory": true, "whats_new.mojom.PageHandler": true, "whats_new.mojom.Page": true, "bookmark_bar.mojom.PageHandlerFactory": true, "bookmark_bar.mojom.PageHandler": true, "bookmark_bar.mojom.Page": true, "webui_browser.mojom.PageHandlerFactory": true, "webui_browser.mojom.Page": true, "webui_browser.mojom.PageHandler": true, "webui_browser.mojom.GuestHandler": true, "extensions_bar.mojom.PageHandlerFactory": true, "extensions_bar.mojom.PageHandler": true, "extensions_bar.mojom.Page": true, "web_app.mojom.WebAppShortcutCopier": true, "actor.mojom.JournalClient": true, "actor.mojom.PageStabilityMonitor": true, "chrome.mojom.ChromeRenderFrame": true, "compose.mojom.ComposeSessionUntrustedPageHandlerFactory": true, "compose.mojom.ComposeSessionUntrustedPageHandler": true, "compose.mojom.ComposeClientUntrustedPageHandler": true, "compose.mojom.ComposeUntrustedDialog": true, "mojom.ModuleEventSink": true, "chrome.mojom.FontPrewarmer": true, "chrome.mojom.RenderFrameFontFamilyAccessor": true, "chrome.mojom.GoogleAccountsPrivateApiExtension": true, "chrome.mojom.ProfileImportObserver": true, "chrome.mojom.ProfileImport": true, "chrome.mojom.AppShim": true, "chrome.mojom.AppShimHost": true, "chrome.mojom.AppShimHostBootstrap": true, "chrome.mojom.WebRtcLoggingClient": true, "chrome.mojom.WebRtcLoggingAgent": true, "offline_pages.mojom.MhtmlPageNotifier": true, "chrome.mojom.NetErrorPageSupport": true, "chrome.mojom.NetBenchmarking": true, "chrome.mojom.NetworkDiagnostics": true, "chrome.mojom.NetworkDiagnosticsClient": true, "chrome.mojom.NetworkEasterEgg": true, "chrome.mojom.OfflinePageAutoFetcher": true, "chrome.mojom.OpenSearchDescriptionDocumentHandler": true, "chrome.mojom.PluginHost": true, "chrome.mojom.PluginAuthHost": true, "chrome.mojom.PluginInfoHost": true, "read_anything.mojom.UntrustedPageHandlerFactory": true, "read_anything.mojom.UntrustedPageHandler": true, "read_anything.mojom.UntrustedPage": true, "chrome.mojom.BoundSessionRequestThrottledHandler": true, "chrome.mojom.ChromeOSListener": true, "chrome.mojom.RendererConfiguration": true, "chrome.mojom.SandboxStatusExtension": true, "search.mojom.EmbeddedSearchConnector": true, "search.mojom.EmbeddedSearch": true, "search.mojom.EmbeddedSearchClient": true, "supervised_user.mojom.SupervisedUserCommands": true, "chrome.mojom.TrustedVaultEncryptionKeysExtension": true, "wallet.mojom.BoardingPassExtractor": true, "gcpw_hid.mojom.GaiaCredentialProviderHidBroker": true, "enterprise_companion.mojom.EnterpriseCompanion": true, "chrome.mojom.DocumentAnalysisService": true, "chrome.mojom.FileUtilService": true, "chrome.mojom.SafeArchiveAnalyzer": true, "chrome.mojom.TemporaryFileGetter": true, "chrome.mojom.SingleFileExtractor": true, "chrome.mojom.SingleFileExtractorListener": true, "chrome.mojom.ZipListener": true, "chrome.mojom.ZipFileCreator": true, "mac_notifications.mojom.MacNotificationService": true, "mac_notifications.mojom.MacNotificationActionHandler": true, "mac_notifications.mojom.MacNotificationProvider": true, "chrome.mojom.MediaParser": true, "chrome.mojom.MediaParserFactory": true, "chrome.mojom.MediaDataSource": true, "pdf.mojom.PdfProgressiveSearchifier": true, "pdf.mojom.PdfSearchifier": true, "pdf.mojom.Ocr": true, "pdf.mojom.PdfService": true, "pdf.mojom.PdfThumbnailer": true, "printing.mojom.PdfFlattener": true, "printing.mojom.PdfNupConverter": true, "printing.mojom.PdfToEmfConverter": true, "printing.mojom.PdfToEmfConverterFactory": true, "printing.mojom.PdfToPwgRasterConverter": true, "printing.mojom.UnsandboxedPrintBackendHost": true, "printing.mojom.SandboxedPrintBackendHost": true, "printing.mojom.PrintBackendService": true, "printing.mojom.PrinterXmlParser": true, "printing.mojom.PrintingService": true, "chrome.mojom.RemovableStorageWriter": true, "chrome.mojom.RemovableStorageWriterClient": true, "chrome.mojom.UtilReadIcon": true, "chrome.mojom.UtilWin": true, "chrome.mojom.ProcessorMetrics": true, "web_ui_test.mojom.TestRunner": true, "test.mojom.Foo": true, "test.mojom.Bar": true, "test.mojom.Baz": true, "test.mojom.MojoFileSystemAccessTest": true, "updater.mojom.UpdateService": true, "updater.mojom.StateChangeObserver": true, "updater.mojom.UpdateServiceInternal": true, "updater.mojom.PostRequestObserver": true, "updater.mojom.FileDownloadObserver": true, "updater.mojom.FetchService": true, "chromecast.mojom.ApiBindings": true, "chromecast.mojom.BluetoothDeviceAccessProvider": true, "chromecast.mojom.BluetoothDeviceAccessProviderClient": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeyObserver": true, "chromecast.mojom.GeneralAudienceBrowsingAPIKeySubject": true, "chromecast.mojom.CastContentWindowObserver": true, "chromecast.mojom.CastContentWindow": true, "chromecast.mojom.CastWebContentsObserver": true, "chromecast.mojom.CastWebContents": true, "chromecast.mojom.CastWebService": true, "chromecast.mojom.MessageCallback": true, "chromecast.mojom.WebUi": true, "chromecast.mojom.Resources": true, "chromecast.mojom.WebUiClient": true, "chromecast.mojom.ActivityUrlFilterConfiguration": true, "chromecast.mojom.ActivityWindow": true, "chromecast.shell.mojom.ApplicationMediaCapabilitiesObserver": true, "chromecast.shell.mojom.ApplicationMediaCapabilities": true, "chromecast.mojom.AssistantMessagePipe": true, "chromecast.mojom.AssistantMessageClient": true, "chromecast.mojom.AssistantMessageService": true, "chromecast.mojom.AudioSocketBroker": true, "chromecast.shell.mojom.CastDemoVolumeChangeObserver": true, "chromecast.shell.mojom.CastDemo": true, "chromecast.shell.mojom.FeatureManager": true, "chromecast.mojom.FeatureUpdateObserver": true, "chromecast.mojom.FeatureUpdateService": true, "chromecast.mojom.GestureHandler": true, "chromecast.mojom.GestureSource": true, "chromecast.mojom.JsChannel": true, "chromecast.mojom.JsChannelClient": true, "chromecast.mojom.JsChannelBindingProvider": true, "chromecast.media.mojom.MediaCaps": true, "chromecast.media.mojom.MediaCapsObserver": true, "chromecast.metrics.mojom.MetricsHelper": true, "chromecast.shell.mojom.QueryableDataStore": true, "chromecast.mojom.ServiceConnector": true, "chromecast.mojom.SettingsClient": true, "chromecast.mojom.SettingsPlatform": true, "chromecast.external_mojo.mojom.ExternalService": true, "chromecast.external_mojo.mojom.ExternalConnector": true, "chromecast.external_mojo.mojom.TestExternalConnector": true, "chromecast.media.mojom.VideoGeometryChangeClient": true, "chromecast.media.mojom.VideoGeometryChangeSubscriber": true, "chromecast.media.mojom.VideoGeometrySetter": true, "chromecast.mojom.RemoteInterfaces": true, "chromecast.mojom.DisplaySettings": true, "chromecast.mojom.DisplaySettingsObserver": true, "ash.audio_config.mojom.AudioSystemPropertiesObserver": true, "ash.audio_config.mojom.CrosAudioConfig": true, "drivefs.mojom.DriveFsBootstrap": true, "drivefs.mojom.DriveFs": true, "drivefs.mojom.DriveFsDelegate": true, "drivefs.mojom.SearchQuery": true, "drivefs.mojom.HttpDelegate": true, "drivefs.mojom.FakeDriveFsLauncher": true, "emoji_search.mojom.EmojiSearch": true, "ash.enhanced_network_tts.mojom.EnhancedNetworkTts": true, "ash.enhanced_network_tts.mojom.AudioDataObserver": true, "ash.language.mojom.LanguagePacksObserver": true, "ash.language.mojom.LanguagePacks": true, "ash.local_search_service.mojom.Index": true, "ash.local_search_service.mojom.SearchMetricsReporter": true, "ash.local_search_service.mojom.LocalSearchService": true, "mantis.mojom.MantisProcessor": true, "mantis.mojom.PlatformModelProgressObserver": true, "mantis.mojom.MantisService": true, "userspace_swap.mojom.UserspaceSwapInitialization": true, "userspace_swap.mojom.UserspaceSwap": true, "chromeos.mojo_service_manager.mojom.ServiceManager": true, "chromeos.mojo_service_manager.mojom.ServiceProvider": true, "chromeos.mojo_service_manager.mojom.ServiceObserver": true, "smbfs.mojom.SmbFsBootstrap": true, "smbfs.mojom.SmbFs": true, "smbfs.mojom.SmbFsDelegate": true, "ash.trash_service.mojom.TrashService": true, "arc.mojom.AdbdMonitorHost": true, "arc.mojom.AdbdMonitorInstance": true, "arc.mojom.AppHost": true, "arc.mojom.AppInstance": true, "arc.mojom.AppPermissionsInstance": true, "arc.mojom.AppfuseHost": true, "arc.mojom.AppfuseInstance": true, "arc.mojom.ArcBridgeHost": true, "arc.mojom.ArcWifiHost": true, "arc.mojom.ArcWifiInstance": true, "arc.mojom.AudioHost": true, "arc.mojom.AudioInstance": true, "arc.mojom.AuthHost": true, "arc.mojom.AuthInstance": true, "arc.mojom.BackupSettingsInstance": true, "arc.mojom.RfcommListeningSocketClient": true, "arc.mojom.RfcommConnectingSocketClient": true, "arc.mojom.BluetoothListenSocketClient": true, "arc.mojom.BluetoothConnectSocketClient": true, "arc.mojom.BluetoothHost": true, "arc.mojom.BluetoothInstance": true, "arc.mojom.BootPhaseMonitorHost": true, "arc.mojom.BootPhaseMonitorInstance": true, "arc.mojom.CameraService": true, "arc.mojom.CameraHost": true, "arc.mojom.CameraInstance": true, "arc.mojom.ChromeFeatureFlagsInstance": true, "arc.mojom.CompatibilityModeInstance": true, "arc.mojom.CrashCollectorHost": true, "arc.mojom.CrashCollectorInstance": true, "arc.mojom.ArcShellExecutionInstance": true, "arc.mojom.DigitalGoodsInstance": true, "arc.mojom.DiskSpaceHost": true, "arc.mojom.DiskSpaceInstance": true, "arc.mojom.EnterpriseReportingHost": true, "arc.mojom.EnterpriseReportingInstance": true, "arc.mojom.ErrorNotificationHost": true, "arc.mojom.ErrorNotificationInstance": true, "arc.mojom.ErrorNotificationItem": true, "arc.mojom.ErrorNotificationActionHandler": true, "arc.mojom.FileSystemHost": true, "arc.mojom.FileSystemInstance": true, "arc.mojom.IioSensorHost": true, "arc.mojom.IioSensorInstance": true, "arc.mojom.ImeHost": true, "arc.mojom.ImeInstance": true, "arc.mojom.InputConnection": true, "arc.mojom.InputMethodManagerHost": true, "arc.mojom.InputMethodManagerInstance": true, "arc.mojom.CustomTabSession": true, "arc.mojom.IntentHelperHost": true, "arc.mojom.IntentHelperInstance": true, "arc.mojom.KeymasterHost": true, "arc.mojom.KeymasterInstance": true, "arc.mojom.KeymasterServer": true, "arc.mojom.keymint.KeyMintHost": true, "arc.mojom.keymint.KeyMintInstance": true, "arc.mojom.keymint.KeyMintServer": true, "arc.mojom.KioskHost": true, "arc.mojom.KioskInstance": true, "arc.mojom.MediaSessionInstance": true, "arc.mojom.MemoryInstance": true, "arc.mojom.MetricsHost": true, "arc.mojom.MetricsInstance": true, "arc.mojom.MidisClient": true, "arc.mojom.MidisServer": true, "arc.mojom.MidisHost": true, "arc.mojom.MidisInstance": true, "arc.mojom.NearbyShareSessionHost": true, "arc.mojom.NearbyShareSessionInstance": true, "arc.mojom.NearbyShareHost": true, "arc.mojom.NearbyShareInstance": true, "arc.mojom.NetHost": true, "arc.mojom.NetInstance": true, "arc.mojom.NotificationsHost": true, "arc.mojom.NotificationsInstance": true, "arc.mojom.ObbMounterHost": true, "arc.mojom.ObbMounterInstance": true, "arc.mojom.OemCryptoService": true, "arc.mojom.OemCryptoHost": true, "arc.mojom.OemCryptoInstance": true, "arc.mojom.OnDeviceSafetyHost": true, "arc.mojom.OnDeviceSafetyInstance": true, "arc.mojom.PipHost": true, "arc.mojom.PipInstance": true, "arc.mojom.PolicyHost": true, "arc.mojom.PolicyInstance": true, "arc.mojom.PowerHost": true, "arc.mojom.PowerInstance": true, "arc.mojom.PrintSessionHost": true, "arc.mojom.PrintSessionInstance": true, "arc.mojom.PrintSpoolerHost": true, "arc.mojom.PrintSpoolerInstance": true, "arc.mojom.PrivacyItemsHost": true, "arc.mojom.PrivacyItemsInstance": true, "arc.mojom.ProcessInstance": true, "arc.mojom.ProtectedBufferManager": true, "arc.mojom.ScreenCaptureHost": true, "arc.mojom.ScreenCaptureSession": true, "arc.mojom.ScreenCaptureInstance": true, "arc.mojom.ScreenCaptureSessionNotifier": true, "arc.mojom.SharesheetHost": true, "arc.mojom.SharesheetInstance": true, "arc.mojom.SystemStateHost": true, "arc.mojom.SystemStateInstance": true, "arc.mojom.SystemUiInstance": true, "arc.mojom.TimerHost": true, "arc.mojom.TimerInstance": true, "arc.mojom.TracingInstance": true, "arc.mojom.TtsHost": true, "arc.mojom.TtsInstance": true, "arc.mojom.UsbHostHost": true, "arc.mojom.UsbHostInstance": true, "arc.mojom.VideoHost": true, "arc.mojom.VideoInstance": true, "arc.mojom.VideoAcceleratorFactory": true, "arc.mojom.VideoDecodeAccelerator": true, "arc.mojom.VideoDecodeClient": true, "arc.mojom.VideoDecoder": true, "arc.mojom.VideoDecoderClient": true, "arc.mojom.VideoEncodeAccelerator": true, "arc.mojom.VideoEncodeClient": true, "arc.mojom.VideoFramePool": true, "arc.mojom.VideoFramePoolClient": true, "arc.mojom.VideoProtectedBufferAllocator": true, "arc.mojom.VolumeMounterHost": true, "arc.mojom.VolumeMounterInstance": true, "arc.mojom.WakeLockHost": true, "arc.mojom.WakeLockInstance": true, "arc.mojom.WallpaperHost": true, "arc.mojom.WallpaperInstance": true, "arc.mojom.WebApkInstance": true, "ash.auth.mojom.FactorObserver": true, "ash.auth.mojom.AuthFactorConfig": true, "ash.auth.mojom.RecoveryFactorEditor": true, "ash.auth.mojom.PinFactorEditor": true, "ash.auth.mojom.PasswordFactorEditor": true, "ash.bluetooth_config.mojom.SystemPropertiesObserver": true, "ash.bluetooth_config.mojom.BluetoothDeviceStatusObserver": true, "ash.bluetooth_config.mojom.DiscoverySessionStatusObserver": true, "ash.bluetooth_config.mojom.KeyEnteredHandler": true, "ash.bluetooth_config.mojom.DevicePairingDelegate": true, "ash.bluetooth_config.mojom.DevicePairingHandler": true, "ash.bluetooth_config.mojom.BluetoothDiscoveryDelegate": true, "ash.bluetooth_config.mojom.CrosBluetoothConfig": true, "ash.babelorca.mojom.TachyonParsingService": true, "ash.cellular_setup.mojom.CarrierPortalHandler": true, "ash.cellular_setup.mojom.ActivationDelegate": true, "ash.cellular_setup.mojom.CellularSetup": true, "ash.cellular_setup.mojom.ESimManagerObserver": true, "ash.cellular_setup.mojom.ESimManager": true, "ash.cellular_setup.mojom.Euicc": true, "ash.cellular_setup.mojom.ESimProfile": true, "chromeos.connectivity.mojom.PasspointEventsListener": true, "chromeos.connectivity.mojom.PasspointService": true, "coral.mojom.TitleObserver": true, "coral.mojom.CoralProcessor": true, "coral.mojom.CoralService": true, "ash.cros_healthd.internal.mojom.ChromiumDataCollector": true, "ash.cros_healthd.mojom.CrosHealthdDiagnosticsService": true, "ash.cros_healthd.mojom.CrosHealthdEventService": true, "ash.cros_healthd.mojom.CrosHealthdProbeService": true, "ash.cros_healthd.mojom.DEPRECATED_LedLitUpRoutineReplier": true, "ash.cros_healthd.mojom.AshEventReporter": true, "ash.cros_healthd.mojom.CrosHealthdBluetoothObserver": true, "ash.cros_healthd.mojom.CrosHealthdLidObserver": true, "ash.cros_healthd.mojom.CrosHealthdPowerObserver": true, "ash.cros_healthd.mojom.CrosHealthdAudioObserver": true, "ash.cros_healthd.mojom.CrosHealthdThunderboltObserver": true, "ash.cros_healthd.mojom.CrosHealthdUsbObserver": true, "ash.cros_healthd.mojom.CrosHealthdSdCardObserver": true, "ash.cros_healthd.mojom.EventObserver": true, "ash.cros_healthd.mojom.CrosHealthdRoutinesService": true, "ash.cros_healthd.mojom.RoutineControl": true, "ash.cros_healthd.mojom.RoutineObserver": true, "ash.cros_healthd.connectivity.mojom.State": true, "ash.cros_healthd.connectivity.mojom.ConnectivityTestProvider": true, "ash.cros_safety.mojom.CloudSafetySession": true, "ash.cros_safety.mojom.OnDeviceSafetySession": true, "ash.cros_safety.mojom.CrosSafetyService": true, "ash.device_sync.mojom.DeviceSyncObserver": true, "ash.device_sync.mojom.DeviceSync": true, "ash.heartd.mojom.HeartdControl": true, "ash.heartd.mojom.HeartbeatService": true, "ash.heartd.mojom.Pacemaker": true, "ash.hotspot_config.mojom.CrosHotspotConfig": true, "ash.hotspot_config.mojom.CrosHotspotConfigObserver": true, "ash.hotspot_config.mojom.HotspotEnabledStateObserver": true, "ash.ime.mojom.ConnectionFactory": true, "ash.ime.mojom.InputEngineManager": true, "ash.ime.mojom.PlatformAccessProvider": true, "ash.ime.mojom.ImeService": true, "ash.ime.mojom.InputChannel": true, "ash.ime.mojom.InputMethod": true, "ash.ime.mojom.InputMethodHost": true, "ash.ime.mojom.InputMethodUserDataService": true, "ash.ime.mojom.JpUnused": true, "arc.keymaster.mojom.CertStoreInstance": true, "arc.keymint.mojom.CertStoreInstance": true, "ash.multidevice_setup.mojom.AccountStatusChangeDelegate": true, "ash.multidevice_setup.mojom.HostStatusObserver": true, "ash.multidevice_setup.mojom.FeatureStateObserver": true, "ash.multidevice_setup.mojom.MultiDeviceSetup": true, "ash.multidevice_setup.mojom.PrivilegedHostDeviceSetter": true, "sharing.mojom.FirewallHole": true, "sharing.mojom.FirewallHoleFactory": true, "sharing.mojom.MdnsObserver": true, "sharing.mojom.MdnsManager": true, "nearby.connections.mojom.EndpointDiscoveryListener": true, "nearby.connections.mojom.ConnectionLifecycleListener": true, "nearby.connections.mojom.PayloadListener": true, "nearby.connections.mojom.ConnectionListenerV3": true, "nearby.connections.mojom.PayloadListenerV3": true, "nearby.connections.mojom.NearbyConnections": true, "sharing.mojom.NearbySharingDecoder": true, "ash.nearby.presence.mojom.ScanSession": true, "ash.nearby.presence.mojom.ScanObserver": true, "ash.nearby.presence.mojom.NearbyPresence": true, "ash.nearby.presence.mojom.NearbyPresenceCredentialStorage": true, "nearby_share.mojom.NearbyShareSettingsObserver": true, "nearby_share.mojom.NearbyShareSettings": true, "nearby_share.mojom.DownloadContactsObserver": true, "nearby_share.mojom.ContactManager": true, "ash.quick_start.mojom.QuickStartDecoder": true, "sharing.mojom.Sharing": true, "sharing.mojom.TcpSocketFactory": true, "sharing.mojom.IceConfigFetcher": true, "sharing.mojom.MdnsResponderFactory": true, "sharing.mojom.IncomingMessagesListener": true, "sharing.mojom.ReceiveMessagesSession": true, "sharing.mojom.WebRtcSignalingMessenger": true, "ash.orca.mojom.EditorClient": true, "ash.orca.mojom.EditorClientConnector": true, "ash.orca.mojom.EditorEventSink": true, "ash.orca.mojom.SystemActuator": true, "ash.orca.mojom.TextQueryProvider": true, "ash.orca.mojom.OrcaService": true, "ash.quick_pair.mojom.FastPairDataParser": true, "ash.quick_pair.mojom.QuickPairService": true, "recording.mojom.DriveFsQuotaDelegate": true, "recording.mojom.RecordingServiceClient": true, "recording.mojom.RecordingService": true, "ash.rollback_network_config.mojom.RollbackNetworkConfig": true, "ash.secure_channel.mojom.NearbyConnectionStateListener": true, "ash.secure_channel.mojom.NearbyMessageSender": true, "ash.secure_channel.mojom.NearbyMessageReceiver": true, "ash.secure_channel.mojom.NearbyFilePayloadHandler": true, "ash.secure_channel.mojom.NearbyConnector": true, "ash.secure_channel.mojom.Channel": true, "ash.secure_channel.mojom.MessageReceiver": true, "ash.secure_channel.mojom.ConnectionDelegate": true, "ash.secure_channel.mojom.SecureChannelStructuredMetricsLogger": true, "ash.secure_channel.mojom.SecureChannel": true, "ash.secure_channel.mojom.FilePayloadListener": true, "ash.wifi_direct.mojom.WifiDirectManager": true, "ash.wifi_direct.mojom.WifiDirectConnection": true, "chromeos.cdm.mojom.BrowserCdmFactory": true, "chromeos.cdm.mojom.CdmFactory": true, "chromeos.cdm.mojom.CdmFactoryDaemon": true, "chromeos.cdm.mojom.CdmStorage": true, "chromeos.cdm.mojom.ContentDecryptionModule": true, "chromeos.cdm.mojom.ContentDecryptionModuleClient": true, "chromeos.cdm.mojom.OutputProtection": true, "drivefs.mojom.NativeMessagingPort": true, "drivefs.mojom.NativeMessagingHost": true, "chromeos.auth.mojom.InSessionAuth": true, "mahi.mojom.ContentExtractionService": true, "mahi.mojom.ContentExtractionServiceFactory": true, "chromeos.payments.mojom.PaymentAppInstance": true, "chromeos.printing.printing_manager.mojom.PrintJobsObserver": true, "chromeos.printing.printing_manager.mojom.PrintingMetadataProvider": true, "chromeos.printing.printing_manager.mojom.PrintManagementHandler": true, "quick_answers.mojom.SpellCheckService": true, "quick_answers.mojom.SpellCheckDictionary": true, "chromeos.remote_apps.mojom.RemoteApps": true, "chromeos.remote_apps.mojom.RemoteAppsFactory": true, "chromeos.remote_apps.mojom.RemoteAppLaunchObserver": true, "chromeos.sensors.mojom.SensorHalServer": true, "chromeos.sensors.mojom.SensorHalClient": true, "chromeos.sensors.mojom.SensorService": true, "chromeos.sensors.mojom.SensorDevice": true, "chromeos.sensors.mojom.SensorDeviceSamplesObserver": true, "chromeos.sensors.mojom.SensorServiceNewDevicesObserver": true, "crosapi.mojom.AccountManagerObserver": true, "crosapi.mojom.AccountManager": true, "crosapi.mojom.AccessTokenFetcher": true, "crosapi.mojom.ChromeKioskLaunchController": true, "crosapi.mojom.ChromeAppKioskService": true, "crosapi.mojom.CrosDisplayConfigController": true, "crosapi.mojom.CrosDisplayConfigObserver": true, "crosapi.mojom.Crosapi": true, "crosapi.mojom.DiagnosticsService": true, "crosapi.mojom.DocumentScan": true, "crosapi.mojom.GuestOsSkForwarderFactory": true, "crosapi.mojom.GuestOsSkForwarder": true, "crosapi.mojom.KeystoreService": true, "crosapi.mojom.SearchResultsPublisher": true, "crosapi.mojom.SearchController": true, "crosapi.mojom.SearchResultConsumer": true, "crosapi.mojom.PrintServerObserver": true, "crosapi.mojom.PrintJobObserver": true, "crosapi.mojom.LocalPrintersObserver": true, "crosapi.mojom.LocalPrinter": true, "crosapi.mojom.ExternalLogoutRequestObserver": true, "crosapi.mojom.Login": true, "crosapi.mojom.PasskeyAuthenticator": true, "crosapi.mojom.PrintPreviewCrosDelegate": true, "crosapi.mojom.PrintPreviewCrosClient": true, "crosapi.mojom.TelemetryProbeService": true, "crosapi.mojom.Remoting": true, "crosapi.mojom.StructuredMetricsService": true, "crosapi.mojom.TelemetryDiagnosticRoutineControl": true, "crosapi.mojom.TelemetryDiagnosticRoutineObserver": true, "crosapi.mojom.TelemetryDiagnosticRoutinesService": true, "crosapi.mojom.TelemetryEventObserver": true, "crosapi.mojom.TelemetryEventService": true, "crosapi.mojom.TelemetryManagementService": true, "crosapi.mojom.ScopedAccessPermission": true, "crosapi.mojom.VideoFrameHandler": true, "crosapi.mojom.VideoCaptureDevice": true, "crosapi.mojom.VideoCaptureDeviceFactory": true, "crosapi.mojom.VideoConferenceManagerClient": true, "chromeos.cfm.mojom.CfmBrowser": true, "chromeos.cfm.mojom.DisconnectReason": true, "chromeos.cfm.mojom.CfmServiceContext": true, "chromeos.cfm.mojom.CfmServiceAdaptor": true, "chromeos.cfm.mojom.ExternalDisplayBrightness": true, "ash.cfm.mojom.MeetBrowser": true, "ash.cfm.mojom.DataWatchDog": true, "ash.cfm.mojom.DataSource": true, "ash.cfm.mojom.DataAggregator": true, "chromeos.cfm.mojom.MeetDevicesDiagnostics": true, "chromeos.cfm.mojom.MeetDevicesInfo": true, "chromeos.cfm.mojom.PolicyInfoObserver": true, "chromeos.cfm.mojom.LoggerStateObserver": true, "chromeos.cfm.mojom.MeetDevicesLogger": true, "ash.cfm.mojom.XuCamera": true, "chromeos.machine_learning.mojom.DocumentScanner": true, "chromeos.machine_learning.mojom.GrammarChecker": true, "chromeos.machine_learning.mojom.GraphExecutor": true, "chromeos.machine_learning.mojom.HandwritingRecognizer": true, "chromeos.machine_learning.mojom.HeatmapPalmRejectionClient": true, "chromeos.machine_learning.mojom.ImageContentAnnotator": true, "chromeos.machine_learning.mojom.MachineLearningService": true, "chromeos.machine_learning.mojom.Model": true, "chromeos.machine_learning.mojom.SodaClient": true, "chromeos.machine_learning.mojom.SodaRecognizer": true, "chromeos.machine_learning.mojom.TextClassifier": true, "chromeos.machine_learning.mojom.TextSuggester": true, "chromeos.machine_learning.web_platform.mojom.HandwritingRecognizer": true, "chromeos.media_perception.mojom.MediaPerception": true, "chromeos.media_perception.mojom.MediaPerceptionService": true, "chromeos.media_perception.mojom.MediaPerceptionController": true, "chromeos.media_perception.mojom.MediaPerceptionControllerClient": true, "chromeos.network_config.mojom.CrosNetworkConfig": true, "chromeos.network_config.mojom.CrosNetworkConfigObserver": true, "chromeos.network_diagnostics.mojom.NetworkDiagnosticsRoutines": true, "chromeos.network_health.mojom.NetworkEventsObserver": true, "chromeos.network_health.mojom.NetworkHealthService": true, "chromeos.tts.mojom.TtsService": true, "chromeos.tts.mojom.GoogleTtsStream": true, "chromeos.tts.mojom.PlaybackTtsStream": true, "chromeos.tts.mojom.TtsEventObserver": true, "math.mojom.MathService": true, "codelabs.mojom.ObjectA": true, "codelabs.mojom.ObjectB": true, "codelabs.mojom.AssociatedProcess": true, "codelabs.mojom.GenericInterface": true, "codelabs.mojom.Process": true, "attribution_reporting.mojom.DataHost": true, "autofill.mojom.AutofillAgent": true, "autofill.mojom.PasswordAutofillAgent": true, "autofill.mojom.PasswordGenerationAgent": true, "autofill.mojom.AutofillDriver": true, "autofill.mojom.PasswordManagerDriver": true, "autofill.mojom.PasswordGenerationDriver": true, "autofill_ml_internals.mojom.Page": true, "autofill_ml_internals.mojom.PageHandler": true, "autofill.mojom.TypeTraitsTest": true, "tabs_api.mojom.TabStripService": true, "tabs_api.mojom.TabsObserver": true, "tabs_api.mojom.TabStripExperimentService": true, "browsing_topics.mojom.PageHandler": true, "cast_streaming.mojom.AudioBufferRequester": true, "cast_streaming.mojom.VideoBufferRequester": true, "cast_streaming.mojom.DemuxerConnector": true, "cast_streaming.mojom.RendererController": true, "chromeos_camera.mojom.JpegEncodeAccelerator": true, "chromeos_camera.mojom.MjpegDecodeAccelerator": true, "commerce.mojom.CommerceInternalsHandlerFactory": true, "commerce.mojom.CommerceInternalsHandler": true, "commerce.mojom.CommerceInternalsPage": true, "commerce_web_extractor.mojom.CommerceWebExtractor": true, "commerce.price_insights.mojom.PriceInsightsHandler": true, "commerce.price_insights.mojom.PriceInsightsHandlerFactory": true, "commerce.price_tracking.mojom.PriceTrackingHandler": true, "commerce.price_tracking.mojom.Page": true, "commerce.price_tracking.mojom.PriceTrackingHandlerFactory": true, "commerce.product_specifications.mojom.ProductSpecificationsHandler": true, "commerce.product_specifications.mojom.Page": true, "commerce.product_specifications.mojom.ProductSpecificationsHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandlerFactory": true, "shopping_service.mojom.ShoppingServiceHandler": true, "content_capture.mojom.ContentCaptureReceiver": true, "content_capture.mojom.ContentCaptureSender": true, "content_settings.mojom.ContentSettingsAgent": true, "content_settings.mojom.ContentSettingsManager": true, "continuous_search.mojom.SearchResultExtractor": true, "data_sharing_internals.mojom.PageHandlerFactory": true, "data_sharing_internals.mojom.PageHandler": true, "data_sharing_internals.mojom.Page": true, "device_signals.mojom.SystemSignalsService": true, "discardable_memory.mojom.DiscardableSharedMemoryManager": true, "dom_distiller.mojom.DistillabilityService": true, "dom_distiller.mojom.DistillerJavaScriptService": true, "download.mojom.DownloadStreamClient": true, "connectors_internals.mojom.PageHandler": true, "payments.facilitated.mojom.PixCodeValidator": true, "feed.mojom.RssLinkReader": true, "global_media_controls.mojom.DeviceListHost": true, "global_media_controls.mojom.DeviceListClient": true, "global_media_controls.mojom.DeviceService": true, "global_media_controls.mojom.DevicePickerProvider": true, "global_media_controls.mojom.DevicePickerObserver": true, "guest_contents.mojom.GuestContentsHost": true, "guest_view.mojom.ViewHandle": true, "guest_view.mojom.GuestViewHost": true, "heap_profiling.mojom.SnapshotController": true, "heap_profiling.mojom.TestConnector": true, "history_clusters_internals.mojom.PageHandlerFactory": true, "history_clusters_internals.mojom.PageHandler": true, "history_clusters_internals.mojom.Page": true, "input.mojom.RenderInputRouterDelegate": true, "input.mojom.RenderInputRouterDelegateClient": true, "js_injection.mojom.JsToBrowserMessaging": true, "js_injection.mojom.JsObjectsClient": true, "js_injection.mojom.BrowserToJsMessagingFactory": true, "js_injection.mojom.BrowserToJsMessaging": true, "js_injection.mojom.JsCommunication": true, "language_detection.mojom.ContentLanguageDetectionDriver": true, "legion.mojom.OakSession": true, "components.media_control.mojom.MediaPlaybackOptions": true, "media_router.mojom.Debugger": true, "media_router.mojom.Logger": true, "media_router.mojom.MediaController": true, "media_router.mojom.MediaRouteProvider": true, "media_router.mojom.MediaRouter": true, "media_router.mojom.MediaRouterTraitsTestService": true, "media_router.mojom.MediaStatusObserver": true, "metrics.dwa.mojom.DwaRecorderClientInterface": true, "metrics.dwa.mojom.DwaRecorderInterface": true, "metrics.dwa.mojom.DwaRecorderFactory": true, "metrics.mojom.CallStackProfileCollector": true, "metrics.mojom.CallStackProfileCollectorTest": true, "metrics.mojom.ChildHistogramFetcherFactory": true, "metrics.mojom.ChildHistogramFetcher": true, "metrics.mojom.SingleSampleMetricsProvider": true, "metrics.mojom.SingleSampleMetric": true, "mirroring.mojom.CastMessageChannel": true, "mirroring.mojom.MirroringService": true, "mirroring.mojom.AudioStreamCreatorClient": true, "mirroring.mojom.ResourceProvider": true, "mirroring.mojom.SessionObserver": true, "network_hints.mojom.NetworkHintsHandler": true, "prerender.mojom.NoStatePrefetchCanceler": true, "prerender.mojom.NoStatePrefetchMessages": true, "searchbox.mojom.PageHandler": true, "searchbox.mojom.Page": true, "on_device_translation.mojom.FileOperationProxy": true, "on_device_translation.mojom.OnDeviceTranslationService": true, "on_device_translation.mojom.Translator": true, "on_load_script_injector.mojom.OnLoadScriptInjector": true, "optimization_guide.mojom.PageTextConsumer": true, "optimization_guide.mojom.PageTextService": true, "optimization_guide_internals.mojom.PageHandlerFactory": true, "optimization_guide_internals.mojom.Page": true, "optimization_guide.mojom.ModelSolution": true, "optimization_guide.mojom.ModelSubscriber": true, "optimization_guide.mojom.ModelBroker": true, "page_image_service.mojom.PageImageServiceHandler": true, "page_load_metrics.mojom.PageLoadMetrics": true, "paint_preview.mojom.PaintPreviewRecorder": true, "password_manager.mojom.CSVPasswordParser": true, "performance_manager.mojom.DocumentCoordinationUnit": true, "performance_manager.mojom.ProcessCoordinationUnit": true, "performance_manager.mojom.ChildProcessCoordinationUnit": true, "printing.mojom.PrintRenderer": true, "printing.mojom.PrintPreviewUI": true, "printing.mojom.PrintRenderFrame": true, "printing.mojom.PrintManagerHost": true, "remote_cocoa.mojom.AlertBridge": true, "remote_cocoa.mojom.StubInterface": true, "remote_cocoa.mojom.Application": true, "remote_cocoa.mojom.MenuHost": true, "remote_cocoa.mojom.Menu": true, "remote_cocoa.mojom.NativeWidgetNSWindow": true, "remote_cocoa.mojom.NativeWidgetNSWindowHost": true, "remote_cocoa.mojom.SelectFileDialog": true, "remote_cocoa.mojom.TextInputHost": true, "safe_browsing.mojom.SafeBrowsing": true, "safe_browsing.mojom.ThreatReporter": true, "safe_browsing.mojom.PhishingDetector": true, "safe_browsing.mojom.PhishingModelSetter": true, "safe_browsing.mojom.PhishingModelSetterTestObserver": true, "safe_browsing.mojom.PhishingImageEmbedderDetector": true, "safe_browsing.mojom.ExtensionWebRequestReporter": true, "safe_browsing.mojom.SafeBrowsingUrlChecker": true, "security_interstitials.mojom.InterstitialCommands": true, "filesystem.mojom.Directory": true, "font_service.mojom.FontService": true, "font_data_service.mojom.FontDataService": true, "heap_profiling.mojom.ProfilingClient": true, "heap_profiling.mojom.ProfilingService": true, "paint_preview.mojom.PaintPreviewCompositor": true, "paint_preview.mojom.PaintPreviewCompositorCollection": true, "patch.mojom.FilePatcher": true, "printing.mojom.PrintCompositor": true, "quarantine.mojom.Quarantine": true, "storage.mojom.IndexedDBClientStateChecker": true, "storage.mojom.IndexedDBClientKeepActive": true, "storage.mojom.IndexedDBObserver": true, "storage.mojom.IndexedDBControl": true, "storage.mojom.MockFailureInjector": true, "storage.mojom.IndexedDBControlTest": true, "storage.mojom.BlobDataItemReader": true, "storage.mojom.BlobStorageContext": true, "storage.mojom.CacheStorageObserver": true, "storage.mojom.CacheStorageControl": true, "storage.mojom.FileSystemAccessContext": true, "storage.mojom.FileLock": true, "storage.mojom.Directory": true, "storage.mojom.LocalStorageControl": true, "storage.mojom.QuotaClient": true, "storage.mojom.ServiceWorkerLiveVersionRef": true, "storage.mojom.ServiceWorkerResourceReader": true, "storage.mojom.ServiceWorkerResourceWriter": true, "storage.mojom.ServiceWorkerResourceMetadataWriter": true, "storage.mojom.ServiceWorkerStorageControl": true, "storage.mojom.SessionStorageControl": true, "storage.mojom.StorageService": true, "unzip.mojom.UnzipFilter": true, "unzip.mojom.UnzipListener": true, "unzip.mojom.Unzipper": true, "site_engagement.mojom.SiteEngagementDetailsProvider": true, "spellcheck.mojom.SpellChecker": true, "spellcheck.mojom.SpellCheckInitializationHost": true, "spellcheck.mojom.SpellCheckHost": true, "spellcheck.mojom.SpellCheckPanel": true, "spellcheck.mojom.SpellCheckPanelHost": true, "subresource_filter.mojom.SubresourceFilterAgent": true, "subresource_filter.mojom.SubresourceFilterHost": true, "subresource_filter.mojom.SubresourceFilterRulesetObserver": true, "system_media_controls.mojom.SystemMediaControls": true, "system_media_controls.mojom.SystemMediaControlsObserver": true, "translate.mojom.TranslateAgent": true, "translate.mojom.ContentTranslateDriver": true, "unexportable_keys.mojom.UnexportableKeyService": true, "url_rewrite.mojom.UrlRequestRulesReceiver": true, "user_data_importer.mojom.BookmarkHtmlParser": true, "visitedlink.mojom.VisitedLinkNotificationSink": true, "viz.mojom.VizDebugOutput": true, "wallet.mojom.ImageExtractor": true, "web_cache.mojom.WebCache": true, "web_package.mojom.WebBundleParserFactory": true, "web_package.mojom.WebBundleParser": true, "web_package.mojom.BundleDataSource": true, "webapps.mojom.WebPageMetadataAgent": true, "chrome_urls.mojom.PageHandlerFactory": true, "chrome_urls.mojom.PageHandler": true, "chrome_urls.mojom.Page": true, "attribution_internals.mojom.Observer": true, "attribution_internals.mojom.Handler": true, "attribution_internals.mojom.Factory": true, "storage.mojom.IdbInternalsHandler": true, "private_aggregation_internals.mojom.Observer": true, "private_aggregation_internals.mojom.Handler": true, "private_aggregation_internals.mojom.Factory": true, "mojom.ProcessInternalsHandler": true, "traces_internals.mojom.TracesInternalsHandlerFactory": true, "traces_internals.mojom.PageHandler": true, "traces_internals.mojom.Page": true, "webxr.mojom.WebXrInternalsHandler": true, "webxr.mojom.XRInternalsSessionListener": true, "content.mojom.AgentSchedulingGroupHost": true, "content.mojom.AgentSchedulingGroup": true, "content.mojom.RouteProvider": true, "content.mojom.ChildProcessHost": true, "content.mojom.ChildProcess": true, "content.mojom.DomAutomationControllerHost": true, "content.mojom.MhtmlFileWriter": true, "content.mojom.FieldTrialRecorder": true, "content.mojom.FrameHTMLSerializerHandler": true, "content.mojom.Frame": true, "content.mojom.FrameBindingsControl": true, "content.mojom.NavigationRendererCancellationListener": true, "content.mojom.FrameHost": true, "content.mojom.GinJavaBridge": true, "content.mojom.GinJavaBridgeRemoteObject": true, "content.mojom.GinJavaBridgeHost": true, "content.mojom.InputInjector": true, "content.mojom.MediaInternalLogRecords": true, "content.mojom.MemoryConsumerTraitsTest": true, "content.mojom.ChildMemoryConsumer": true, "content.mojom.BrowserMemoryConsumerRegistry": true, "content.mojom.NavigationClient": true, "content.mojom.RenderMessageFilter": true, "remote_cocoa.mojom.PopupMenuRunner": true, "remote_cocoa.mojom.RenderWidgetHostNSView": true, "remote_cocoa.mojom.RenderWidgetHostNSViewHost": true, "content.mojom.Renderer": true, "content.mojom.RendererHost": true, "content.mojom.RendererVariationsConfiguration": true, "content.mojom.SandboxSupport": true, "content.mojom.SyntheticTrialConfiguration": true, "content.mojom.ThreadTypeSwitcher": true, "remote_cocoa.mojom.WebContentsNSView": true, "remote_cocoa.mojom.WebContentsNSViewHost": true, "content.mojom.WebUIHost": true, "content.mojom.WebUI": true, "content.mojom.FontCacheWin": true, "content.mojom.ResourceUsageReporter": true, "content.mojom.TestInterfaceForDefer": true, "content.mojom.TestInterfaceForGrant": true, "content.mojom.TestInterfaceForCancel": true, "content.mojom.TestInterfaceForUnexpected": true, "content.mojom.MojoContextProvider": true, "content.mojom.TestService": true, "auction_worklet.mojom.AuctionNetworkEventsHandler": true, "auction_worklet.mojom.AuctionSharedStorageHost": true, "auction_worklet.mojom.LoadSellerWorkletClient": true, "auction_worklet.mojom.AuctionWorkletService": true, "auction_worklet.mojom.GenerateBidClient": true, "auction_worklet.mojom.GenerateBidFinalizer": true, "auction_worklet.mojom.BidderWorklet": true, "auction_worklet.mojom.ScoreAdClient": true, "auction_worklet.mojom.SellerWorklet": true, "auction_worklet.mojom.TrustedSignalsCacheClient": true, "auction_worklet.mojom.TrustedSignalsCache": true, "content.mojom.MainFrameCounterTest": true, "content.mojom.PowerMonitorTest": true, "content.mojom.RenderFrameTestHelper": true, "content.mojom.FrameHostTestInterface": true, "content.mojom.FakeBluetoothChooser": true, "content.mojom.FakeBluetoothChooserFactory": true, "content.mojom.FakeBluetoothChooserClient": true, "content.mojom.MojoEcho": true, "content.optional_numerics_unittest.mojom.Params": true, "content.optional_numerics_unittest.mojom.ResponseParams": true, "content.optional_numerics_unittest.mojom.InterfaceV0": true, "content.optional_numerics_unittest.mojom.InterfaceV2": true, "content.mojom.WebTestRenderFrame": true, "content.mojom.WebTestControlHost": true, "content.mojom.NonAssociatedWebTestControlHost": true, "content.mojom.WebTestBluetoothFakeAdapterSetter": true, "bluetooth.mojom.Advertisement": true, "bluetooth.mojom.DiscoverySession": true, "bluetooth.mojom.Socket": true, "bluetooth.mojom.ServerSocket": true, "bluetooth.mojom.GattService": true, "bluetooth.mojom.GattServiceObserver": true, "bluetooth.mojom.Adapter": true, "bluetooth.mojom.AdapterObserver": true, "bluetooth.mojom.Device": true, "bluetooth.mojom.FakeBluetooth": true, "bluetooth.mojom.FakeCentral": true, "bluetooth.mojom.FakeCentralClient": true, "device.mojom.GamepadObserver": true, "device.mojom.GamepadMonitor": true, "device.mojom.GamepadHapticsManager": true, "device.mojom.XRSessionController": true, "device.mojom.XRRuntimeEventListener": true, "device.mojom.XRRuntime": true, "device.mojom.ImmersiveOverlay": true, "device.mojom.IsolatedXRRuntimeProviderClient": true, "device.mojom.IsolatedXRRuntimeProvider": true, "device.mojom.XRDeviceService": true, "device.mojom.XRDeviceServiceHost": true, "device_test.mojom.XRTestHook": true, "device_test.mojom.XRServiceTestHook": true, "device.mojom.VRService": true, "device.mojom.XRSessionMetricsRecorder": true, "device.mojom.VRServiceClient": true, "device.mojom.XREnvironmentIntegrationProvider": true, "device.mojom.XRFrameDataProvider": true, "device.mojom.XRPresentationProvider": true, "device.mojom.XRPresentationClient": true, "device.mojom.XRSessionClient": true, "device.mojom.XRLayerManager": true, "device.mojom.WebXrInternalsRendererListener": true, "extensions.mime_handler.MimeHandlerService": true, "extensions.mime_handler.BeforeUnloadControl": true, "extensions.mojom.AppWindow": true, "extensions.mojom.RendererAutomationRegistry": true, "extensions.mojom.EventDispatcher": true, "extensions.mojom.EventRouter": true, "extensions.mojom.LocalFrame": true, "extensions.mojom.LocalFrameHost": true, "extensions.mojom.GuestView": true, "extensions.mojom.MimeHandlerViewContainerManager": true, "extensions.KeepAlive": true, "extensions.mojom.MessagePort": true, "extensions.mojom.MessagePortHost": true, "extensions.mojom.Renderer": true, "extensions.mojom.RendererHost": true, "extensions.mojom.ServiceWorker": true, "extensions.mojom.ServiceWorkerHost": true, "mojom.WebEngineMediaResourceProvider": true, "gpu.mojom.GpuChannel": true, "gpu.mojom.CommandBuffer": true, "gpu.mojom.CommandBufferClient": true, "gpu.mojom.DCOMPTexture": true, "gpu.mojom.DCOMPTextureClient": true, "gpu.mojom.OverlayStateObserver": true, "gpu.mojom.SharedImagePoolClientInterface": true, "ai.mojom.AIPrototypingService": true, "ai.mojom.EnhancedCalendarService": true, "ai.mojom.SmartTabGroupingService": true, "ai.mojom.TabOrganizationService": true, "ai.mojom.ZeroStateSuggestionsService": true, "web.mojom.WebUsageController": true, "IPC.mojom.Channel": true, "IPC.mojom.ChannelBootstrap": true, "media.mojom.ImageCapture": false, "media.mojom.VideoCaptureObserver": true, "media.mojom.VideoCaptureHost": true, "cros.mojom.Camera3CallbackOps": true, "cros.mojom.Camera3DeviceOps": true, "cros.mojom.CameraAppDeviceProvider": true, "cros.mojom.CameraAppDeviceBridge": true, "cros.mojom.CameraAppDevice": true, "cros.mojom.ResultMetadataObserver": true, "cros.mojom.CameraEventObserver": true, "cros.mojom.DocumentCornersObserver": true, "cros.mojom.CameraInfoObserver": true, "cros.mojom.StillCaptureResultObserver": true, "cros.mojom.CameraModuleCallbacks": true, "cros.mojom.VendorTagOps": true, "cros.mojom.CameraModule": true, "cros.mojom.CameraHalClient": true, "cros.mojom.KioskVisionObserver": true, "cros.mojom.CameraHalDispatcher": true, "cros.mojom.CrosCameraServiceObserver": true, "cros.mojom.CrosCameraService": true, "cros.mojom.CrosDocumentScanner": true, "cros.mojom.JpegAcceleratorProvider": true, "cros.mojom.CrosDisplayObserver": true, "cros.mojom.CrosLidObserver": true, "cros.mojom.CrosPowerObserver": true, "cros.mojom.CrosSystemEventMonitor": true, "cros.mojom.VideoCaptureDeviceInfoObserver": true, "cros.mojom.VideoCaptureDeviceInfoMonitor": true, "midi.mojom.MidiSessionClient": true, "midi.mojom.MidiSessionProvider": true, "midi.mojom.MidiSession": true, "media.mojom.AndroidOverlayProvider": true, "media.mojom.AndroidOverlay": true, "media.mojom.AndroidOverlayClient": true, "media.mojom.AudioDecoder": true, "media.mojom.AudioDecoderClient": true, "media.mojom.AudioEncoder": true, "media.mojom.AudioEncoderClient": true, "media.mojom.AudioInputStream": true, "media.mojom.AudioInputStreamClient": true, "media.mojom.AudioInputStreamObserver": true, "media.mojom.AudioLog": true, "media.mojom.AudioLogFactory": true, "media.mojom.AudioOutputStream": true, "media.mojom.AudioOutputStreamObserver": true, "media.mojom.AudioOutputStreamProvider": true, "media.mojom.AudioOutputStreamProviderClient": true, "media.mojom.DeviceSwitchInterface": true, "media.mojom.AudioProcessorControls": true, "media.mojom.LocalMuter": true, "media.mojom.AudioStreamFactory": true, "media.mojom.CastApplicationMediaInfoManager": true, "media.mojom.CdmContextEventCallback": true, "media.mojom.CdmContextForOOPVD": true, "media.mojom.CdmDocumentService": true, "media.mojom.CdmService": true, "media.mojom.SeatbeltExtensionTokenProvider": true, "media.mojom.CdmServiceBroker": true, "media.mojom.CdmStorage": true, "media.mojom.CdmFile": true, "media.mojom.ContentDecryptionModule": true, "media.mojom.ContentDecryptionModuleClient": true, "media.mojom.CdmFactory": true, "media.mojom.DCOMPSurfaceRegistry": true, "media.mojom.Decryptor": true, "media.mojom.FrameResourceReleaser": true, "media.mojom.DemuxerStream": true, "media.mojom.MuteStateObserver": true, "media.mojom.FrameInterfaceFactory": true, "media.mojom.FuchsiaMediaCdmProvider": true, "media.mojom.FuchsiaMediaCodecProvider": true, "media.mojom.VideoDecoderTracker": true, "media.mojom.InterfaceFactory": true, "media.mojom.KeySystemSupportObserver": true, "media.mojom.KeySystemSupport": true, "media.mojom.MediaDrmStorage": true, "media.mojom.MediaFoundationPreferences": true, "media.mojom.GpuInfoObserver": true, "media.mojom.MediaFoundationService": true, "media.mojom.MediaFoundationServiceBroker": true, "media.mojom.MediaLog": true, "media.mojom.MediaMetricsProvider": true, "media.mojom.MediaPlayer": true, "media.mojom.MediaPlayerObserverClient": true, "media.mojom.MediaPlayerObserver": true, "media.mojom.MediaPlayerHost": true, "media.mojom.MediaService": true, "media.mojom.MediaDrmSupport": true, "media.mojom.OutputProtection": true, "media.mojom.PlaybackEventsRecorder": true, "media.mojom.ProvisionFetcher": true, "media.mojom.RemoterFactory": true, "media.mojom.RemotingDataStreamSender": true, "media.mojom.Remoter": true, "media.mojom.RemotingSource": true, "media.mojom.Remotee": true, "media.mojom.RemotingSink": true, "media.mojom.RemotingDataStreamReceiver": true, "media.mojom.Renderer": true, "media.mojom.RendererClient": true, "media.mojom.FlingingRendererClientExtension": true, "media.mojom.MediaFoundationRendererExtension": true, "media.mojom.MediaFoundationRendererObserver": true, "media.mojom.MediaFoundationRendererNotifier": true, "media.mojom.SpeechRecognitionContext": true, "media.mojom.SpeechRecognitionRecognizer": true, "media.mojom.SpeechRecognitionRecognizerClient": true, "media.mojom.SpeechRecognitionBrowserObserver": true, "media.mojom.SpeechRecognitionSurface": true, "media.mojom.SpeechRecognitionSurfaceClient": true, "media.mojom.SpeechRecognitionClientBrowserInterface": true, "media.mojom.SpeechRecognitionAudioForwarder": true, "media.mojom.AudioSourceSpeechRecognitionContext": true, "media.mojom.SpeechRecognitionService": true, "media.mojom.AudioSourceFetcher": true, "media.mojom.SpeechRecognizer": true, "media.mojom.OnDeviceSpeechRecognition": true, "media.mojom.SpeechRecognitionSession": true, "media.mojom.SpeechRecognitionSessionClient": true, "media.mojom.VideoDecodePerfHistory": true, "media.mojom.VideoDecodeStatsRecorder": true, "media.mojom.VideoFrameHandleReleaser": true, "media.mojom.VideoDecoder": true, "media.mojom.VideoDecoderClient": true, "media.mojom.VideoDecoderFactoryProcess": true, "media.mojom.VideoEncodeAcceleratorProvider": true, "media.mojom.VideoEncodeAcceleratorProviderFactory": true, "media.mojom.VideoEncodeAccelerator": true, "media.mojom.VideoEncodeAcceleratorClient": true, "media.mojom.VideoEncoderMetricsProvider": true, "media.mojom.WatchTimeRecorder": true, "media.mojom.WebrtcVideoPerfRecorder": true, "media.mojom.WebrtcVideoPerfHistory": true, "mojo_base.mojom.Binder": true, "mojo_base.mojom.GenericAssociatedInterface": true, "fuzz.mojom.FuzzDummyInterface": true, "fuzz.mojom.FuzzInterface": true, "pdf.mojom.SaveDataBufferHandler": true, "pdf.mojom.PdfListener": true, "pdf.mojom.PdfHost": true, "remoting.mojom.AgentProcess": true, "remoting.mojom.AgentProcessBroker": true, "remoting.mojom.ChromotingHostServices": true, "remoting.mojom.ChromotingSessionServices": true, "remoting.mojom.DesktopSessionRequestHandler": true, "remoting.mojom.DesktopSessionManager": true, "remoting.mojom.DesktopSessionAgent": true, "remoting.mojom.FileWriter": true, "remoting.mojom.FileReader": true, "remoting.mojom.DesktopSessionControl": true, "remoting.mojom.VideoCapturer": true, "remoting.mojom.VideoCapturerEventHandler": true, "remoting.mojom.DesktopSessionEventHandler": true, "remoting.mojom.DesktopSessionStateHandler": true, "remoting.mojom.WorkerProcessControl": true, "remoting.mojom.SecurityKeyForwarder": true, "remoting.mojom.SupportHostObserver": true, "remoting.mojom.RemoteUrlOpener": true, "remoting.mojom.RemotingHostControl": true, "remoting.mojom.DesktopSessionConnectionEvents": true, "remoting.mojom.HostStatusObserver": true, "remoting.mojom.WebAuthnRequestCanceller": true, "remoting.mojom.WebAuthnProxy": true, "sandbox.mac.mojom.TraitsTestService": true, "ax.android.mojom.AccessibilityHelperHost": true, "ax.android.mojom.AccessibilityHelperInstance": true, "ax.mojom.AssistiveTechnologyController": true, "ax.mojom.AccessibilityService": true, "ax.mojom.AccessibilityServiceClient": true, "ax.mojom.Autoclick": true, "ax.mojom.AutoclickClient": true, "ax.mojom.Automation": true, "ax.mojom.AutomationClient": true, "ax.mojom.AccessibilityFileLoader": true, "ax.mojom.SpeechRecognitionEventObserver": true, "ax.mojom.SpeechRecognition": true, "ax.mojom.TtsUtteranceClient": true, "ax.mojom.Tts": true, "ax.mojom.UserInput": true, "ax.mojom.UserInterface": true, "audio.mojom.AudioService": true, "audio.mojom.DebugRecordingFileProvider": true, "audio.mojom.DebugRecording": true, "audio.mojom.DeviceListener": true, "audio.mojom.DeviceNotifier": true, "audio.mojom.LogFactoryManager": true, "audio.mojom.MlModelManager": true, "audio.mojom.SystemInfo": true, "audio.mojom.TestingApi": true, "cert_verifier.mojom.CertVerifierServiceFactory": true, "data_decoder.mojom.CborParser": true, "data_decoder.mojom.DataDecoderService": true, "data_decoder.mojom.Gzipper": true, "data_decoder.mojom.ImageDecoder": true, "data_decoder.mojom.StructuredHeadersParser": true, "data_decoder.mojom.XmlParser": true, "device.mojom.BatteryMonitor": true, "device.mojom.DeviceService": true, "device.mojom.FingerprintObserver": true, "device.mojom.Fingerprint": true, "device.mojom.Geolocation": true, "device.mojom.GeolocationContext": true, "device.mojom.GeolocationControl": true, "device.mojom.GeolocationInternalsObserver": true, "device.mojom.GeolocationInternals": true, "device.mojom.HidManagerClient": true, "device.mojom.HidManager": true, "device.mojom.HidConnection": true, "device.mojom.HidConnectionClient": true, "device.mojom.HidConnectionWatcher": true, "device.mojom.InputDeviceManagerClient": true, "device.mojom.InputDeviceManager": true, "device.mojom.MtpManagerClient": true, "device.mojom.MtpManager": true, "device.mojom.NFC": true, "device.mojom.NFCClient": true, "device.mojom.RawNFCClient": true, "device.mojom.NFCProvider": true, "device.mojom.PowerMonitor": true, "device.mojom.PowerMonitorClient": true, "device.mojom.PressureManager": true, "device.mojom.PressureClient": true, "device.mojom.PublicIpAddressGeolocationProvider": true, "device.mojom.ScreenOrientation": true, "device.mojom.ScreenOrientationListener": true, "device.mojom.Sensor": false, "device.mojom.SensorClient": false, "device.mojom.SensorProvider": false, "device.mojom.SerialPortManager": true, "device.mojom.SerialPortManagerClient": true, "device.mojom.SerialPort": true, "device.mojom.SerialPortClient": true, "device.mojom.SerialPortConnectionWatcher": true, "device.mojom.SmartCardTransaction": true, "device.mojom.SmartCardConnection": true, "device.mojom.SmartCardConnectionWatcher": true, "device.mojom.SmartCardContext": true, "device.mojom.SmartCardContextFactory": true, "device.mojom.TimeZoneMonitor": true, "device.mojom.TimeZoneMonitorClient": true, "device.mojom.UsbDevice": false, "device.mojom.UsbDeviceClient": false, "device.mojom.UsbDeviceManager": false, "device.mojom.UsbDeviceManagerClient": false, "device.mojom.UsbDeviceManagerTest": true, "device.mojom.VibrationManager": true, "device.mojom.VibrationManagerListener": true, "device.mojom.WakeLock": true, "device.mojom.WakeLockContext": true, "device.mojom.WakeLockProvider": true, "device.mojom.WakeLockObserver": true, "image_annotation.mojom.ImageProcessor": true, "image_annotation.mojom.Annotator": true, "image_annotation.mojom.ImageAnnotationService": true, "media_session.mojom.AudioFocusObserver": true, "media_session.mojom.AudioFocusRequestClient": true, "media_session.mojom.AudioFocusManager": true, "media_session.mojom.AudioFocusManagerDebug": true, "media_session.mojom.MediaControllerManager": true, "media_session.mojom.MediaController": true, "media_session.mojom.MediaControllerObserver": true, "media_session.mojom.MediaControllerImageObserver": true, "media_session.mojom.MediaSessionObserver": true, "media_session.mojom.MediaSession": true, "media_session.mojom.MediaSessionService": true, "ukm.mojom.SingularUkmInterface": true, "ukm.mojom.UkmRecorderClientInterface": true, "ukm.mojom.UkmRecorderInterface": true, "ukm.mojom.UkmRecorderFactory": true, "network.mojom.TraitsTestService": true, "network.mojom.AcceptCHFrameObserver": true, "network.mojom.CacheEncryptionProvider": true, "cert_verifier.mojom.URLLoaderFactoryConnector": true, "cert_verifier.mojom.CertVerifierService": true, "cert_verifier.mojom.CertVerifierServiceClient": true, "cert_verifier.mojom.CertVerifierRequest": true, "cert_verifier.mojom.CertVerifierServiceUpdater": true, "network.mojom.ChunkedDataPipeGetter": true, "network.mojom.ConnectionChangeObserverClient": true, "network.mojom.CookieAccessObserver": true, "network.mojom.CookieEncryptionProvider": true, "network.mojom.CookieChangeListener": true, "network.mojom.CookieManager": true, "network.mojom.CrossOriginEmbedderPolicyReporter": true, "network.mojom.CrossOriginOpenerPolicyReporter": true, "network.mojom.DataPipeGetter": true, "network.mojom.DeviceBoundSessionManager": true, "network.mojom.DeviceBoundSessionAccessObserver": true, "network.mojom.DeviceBoundSessionEventObserver": true, "network.mojom.DevToolsObserver": true, "network.mojom.DhcpWpadUrlClient": true, "network.mojom.DocumentIsolationPolicyReporter": true, "network.mojom.FirstPartySetsAccessDelegate": true, "network.mojom.ResolveHostHandle": true, "network.mojom.ResolveHostClient": true, "network.mojom.MdnsListenClient": true, "network.mojom.HostResolver": true, "network.mojom.DnsConfigChangeManagerClient": true, "network.mojom.DnsConfigChangeManager": true, "network.mojom.FileEnumerator": true, "network.mojom.HttpCacheBackendFileOperations": true, "network.mojom.HttpCacheBackendFileOperationsFactory": true, "network.mojom.MdnsResponder": true, "network.mojom.NetLogExporter": true, "network.mojom.NetLogProxySource": true, "network.mojom.NetLogProxySink": true, "network.mojom.NetworkAnnotationMonitor": true, "network.mojom.NetworkChangeManagerClient": true, "network.mojom.NetworkChangeManager": true, "network.mojom.CustomProxyConnectionObserver": true, "network.mojom.CustomProxyConfigClient": true, "network.mojom.TrustedHeaderClient": true, "network.mojom.TrustedURLLoaderHeaderClient": true, "network.mojom.PreloadedSharedDictionaryInfoHandle": true, "network.mojom.NetworkContext": true, "network.mojom.NetworkContextClient": true, "network.mojom.NetworkInterfaceChangeListener": true, "network.mojom.NetworkQualityEstimatorManagerClient": true, "network.mojom.NetworkQualityEstimatorManager": true, "network.mojom.GssapiLibraryLoadObserver": true, "network.mojom.NetworkService": true, "network.mojom.DurableMessageCollector": true, "network.mojom.SimpleCacheEntry": true, "network.mojom.SimpleCacheEntryEnumerator": true, "network.mojom.SimpleCache": true, "network.mojom.NetworkServiceTest": true, "network.mojom.ObliviousHttpClient": true, "network.mojom.P2PNetworkNotificationClient": true, "network.mojom.P2PSocketManager": true, "network.mojom.P2PSocket": true, "network.mojom.P2PSocketClient": true, "network.mojom.P2PTrustedSocketManagerClient": true, "network.mojom.P2PTrustedSocketManager": true, "network.mojom.ProxyConfigClient": true, "network.mojom.ProxyConfigPollerClient": true, "network.mojom.ProxyErrorClient": true, "network.mojom.ProxyLookupClient": true, "network.mojom.ProxyResolvingSocket": true, "network.mojom.ProxyResolvingSocketFactory": true, "network.mojom.ReportingApiObserver": true, "network.mojom.RestrictedCookieManager": true, "network.mojom.RestrictedUDPSocket": true, "network.mojom.SharedDictionaryAccessObserver": true, "network.mojom.SocketBroker": true, "network.mojom.SocketConnectionTracker": true, "network.mojom.SSLConfigClient": true, "network.mojom.SystemDnsResolver": true, "network.mojom.TCPBoundSocket": true, "network.mojom.TCPConnectedSocket": true, "network.mojom.SocketObserver": true, "network.mojom.TCPServerSocket": true, "network.mojom.TLSClientSocket": true, "network.mojom.TrustTokenAccessObserver": true, "network.mojom.TrustTokenQueryAnswerer": true, "network.mojom.UDPSocket": true, "network.mojom.UDPSocketListener": true, "network.mojom.URLLoader": true, "network.mojom.URLLoaderClient": true, "network.mojom.URLLoaderFactory": true, "network.mojom.ClientCertificateResponder": true, "network.mojom.SSLPrivateKey": true, "network.mojom.AuthChallengeResponder": true, "network.mojom.URLLoaderNetworkServiceObserver": true, "network.mojom.WebBundleHandle": true, "network.mojom.WebTransport": true, "network.mojom.WebTransportClient": true, "network.mojom.WebTransportHandshakeClient": true, "network.mojom.WebSocketAuthenticationHandler": true, "network.mojom.WebSocketHandshakeClient": true, "network.mojom.WebSocketClient": true, "network.mojom.WebSocket": true, "on_device_model.mojom.StreamingResponder": true, "on_device_model.mojom.ContextClient": true, "on_device_model.mojom.Session": true, "on_device_model.mojom.OnDeviceModel": true, "on_device_model.mojom.TextSafetySession": true, "on_device_model.mojom.TextSafetyModel": true, "on_device_model.mojom.AsrStreamResponder": true, "on_device_model.mojom.AsrStreamInput": true, "on_device_model.mojom.PlatformModelProgressObserver": true, "on_device_model.mojom.OnDeviceModelService": true, "on_device_model.mojom.OnDeviceModelPlatformService": true, "passage_embeddings.mojom.PassageEmbedder": true, "passage_embeddings.mojom.PassageEmbeddingsService": true, "prefs.mojom.ResetOnLoadObserver": true, "prefs.mojom.TrackedPreferenceValidationDelegate": true, "proxy_resolver.mojom.HostResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolver": true, "proxy_resolver.mojom.ProxyResolverRequestClient": true, "proxy_resolver.mojom.ProxyResolverFactory": true, "proxy_resolver.mojom.ProxyResolverFactoryRequestClient": true, "proxy_resolver.mojom.SystemProxyResolver": true, "memory_instrumentation.mojom.ClientProcess": true, "memory_instrumentation.mojom.HeapProfiler": true, "memory_instrumentation.mojom.HeapProfilerHelper": true, "memory_instrumentation.mojom.Coordinator": true, "memory_instrumentation.mojom.CoordinatorConnector": true, "screen_ai.mojom.ScreenAIServiceShutdownHandler": true, "screen_ai.mojom.ScreenAIServiceFactory": true, "screen_ai.mojom.ScreenAIAnnotator": true, "screen_ai.mojom.Screen2xMainContentExtractor": true, "screen_ai.mojom.OCRService": true, "screen_ai.mojom.MainContentExtractionService": true, "service_manager.mojom.ProcessMetadata": true, "service_manager.mojom.Connector": true, "service_manager.mojom.InterfaceProvider": true, "service_manager.mojom.Service": true, "service_manager.mojom.ServiceControl": true, "service_manager.mojom.ServiceManagerListener": true, "service_manager.mojom.ServiceManager": true, "shape_detection.mojom.BarcodeDetection": true, "shape_detection.mojom.BarcodeDetectionProvider": true, "shape_detection.mojom.FaceDetection": true, "shape_detection.mojom.FaceDetectionProvider": true, "shape_detection.mojom.ShapeDetectionService": true, "shape_detection.mojom.TextDetection": true, "echo.mojom.EchoService": true, "tracing.mojom.BackgroundTracingAgentClient": true, "tracing.mojom.BackgroundTracingAgent": true, "tracing.mojom.BackgroundTracingAgentProvider": true, "tracing.mojom.ProducerHost": true, "tracing.mojom.ProducerClient": true, "tracing.mojom.PerfettoService": true, "tracing.mojom.ConsumerHost": true, "tracing.mojom.TracingSessionHost": true, "tracing.mojom.TracingSessionClient": true, "tracing.mojom.SystemTracingService": true, "tracing.mojom.TracedProcess": true, "tracing.mojom.TracingService": true, "video_capture.mojom.Device": true, "video_capture.mojom.DevicesChangedObserver": true, "video_capture.mojom.Producer": true, "video_capture.mojom.TestingControls": true, "video_capture.mojom.AcceleratorFactory": true, "video_capture.mojom.VideoCaptureService": true, "video_capture.mojom.VideoFrameAccessHandler": true, "video_capture.mojom.VideoFrameHandler": true, "video_capture.mojom.PushVideoStreamSubscription": true, "video_capture.mojom.VideoSource": true, "video_capture.mojom.VideoSourceProvider": true, "video_capture.mojom.SharedMemoryVirtualDevice": true, "video_capture.mojom.TextureVirtualDevice": true, "video_capture.mojom.GpuMemoryBufferVirtualDevice": true, "viz.mojom.BeginFrameObserver": true, "viz.mojom.DisplayPrivate": true, "viz.mojom.DisplayClient": true, "viz.mojom.ExternalBeginFrameController": true, "viz.mojom.ExternalBeginFrameControllerClient": true, "viz.mojom.FrameSinkManager": true, "viz.mojom.FrameSinkManagerClient": true, "viz.mojom.RendererInputRouterDelegateRegistry": true, "viz.mojom.FrameSinkManagerTestApi": true, "viz.mojom.FrameSinkVideoConsumerFrameCallbacks": true, "viz.mojom.FrameSinkVideoConsumer": true, "viz.mojom.FrameSinkVideoCapturer": true, "viz.mojom.FrameSinkVideoCaptureOverlay": true, "viz.mojom.FrameSinksMetricsRecorder": true, "viz.mojom.LayeredWindowUpdater": true, "viz.mojom.VSyncParameterObserver": true, "viz.mojom.GpuHost": true, "viz.mojom.GpuLogging": true, "viz.mojom.GpuService": true, "viz.mojom.InfoCollectionGpuService": true, "viz.mojom.VizMain": true, "viz.mojom.CompositingModeWatcher": true, "viz.mojom.CompositingModeReporter": true, "viz.mojom.CompositorFrameSink": true, "viz.mojom.CompositorFrameSinkClient": true, "viz.mojom.CopyOutputResultSender": true, "viz.mojom.FrameSinkBundle": true, "viz.mojom.FrameSinkBundleClient": true, "viz.mojom.LayerContext": true, "viz.mojom.LayerContextClient": true, "viz.mojom.TextureReleaser": true, "viz.mojom.VideoDetectorObserver": true, "viz.mojom.Gpu": true, "viz.mojom.InputTargetClient": true, "webnn.mojom.WebNNContext": true, "webnn.mojom.WebNNContextProvider": true, "webnn.mojom.WebNNGraph": true, "webnn.mojom.WebNNGraphBuilder": true, "webnn.mojom.WebNNTensor": true, "storage.mojom.QuotaInternalsHandler": true, "storage.mojom.QuotaManagerObserver": true, "blink.mojom.AIManagerCreateLanguageModelClient": false, "blink.mojom.AILanguageModel": false, "blink.mojom.AIManagerCreateWriterClient": false, "blink.mojom.AIManagerCreateRewriterClient": false, "blink.mojom.AIManagerCreateSummarizerClient": false, "blink.mojom.AIManagerCreateProofreaderClient": false, "blink.mojom.AIManager": false, "blink.mojom.AIProofreader": false, "blink.mojom.AIRewriter": false, "blink.mojom.AISummarizer": false, "blink.mojom.AIWriter": false, "blink.mojom.ModelDownloadProgressObserver": false, "blink.mojom.ModelStreamingResponder": false, "blink.mojom.AndroidFontLookup": false, "blink.mojom.AnnotationAgent": false, "blink.mojom.AnnotationAgentHost": false, "blink.mojom.AnnotationAgentContainer": false, "blink.mojom.AppBannerController": false, "blink.mojom.AppBannerEvent": false, "blink.mojom.AppBannerService": false, "blink.mojom.AssociatedInterface": false, "blink.mojom.AssociatedInterfaceProvider": false, "blink.mojom.AutoplayConfigurationClient": false, "blink.mojom.BackgroundFetchRegistrationObserver": false, "blink.mojom.BackgroundFetchService": false, "blink.mojom.BackgroundFetchRegistrationService": false, "blink.mojom.OneShotBackgroundSyncService": false, "blink.mojom.PeriodicBackgroundSyncService": false, "blink.mojom.BadgeService": false, "blink.mojom.BlobReaderClient": false, "blink.mojom.Blob": false, "blink.mojom.ProgressClient": false, "blink.mojom.BlobRegistry": false, "blink.mojom.BlobURLStore": false, "blink.mojom.BlobURLToken": false, "blink.mojom.BytesProvider": false, "blink.mojom.FileBackedBlobFactory": false, "blink.mojom.WebBluetoothService": true, "blink.mojom.WebBluetoothServerClient": true, "blink.mojom.WebBluetoothCharacteristicClient": true, "blink.mojom.WebBluetoothAdvertisementClient": true, "blink.mojom.BroadcastChannelClient": true, "blink.mojom.BroadcastChannelProvider": true, "blink.mojom.BrowserInterfaceBroker": false, "blink.mojom.BrowsingTopicsDocumentService": false, "blink.mojom.BucketHost": true, "blink.mojom.BucketManagerHost": true, "blink.mojom.CacheStorageCache": false, "blink.mojom.CacheStorage": false, "blink.mojom.CallStackGenerator": false, "blink.mojom.ColorChooserFactory": false, "blink.mojom.ColorChooser": false, "blink.mojom.ColorChooserClient": false, "blink.mojom.EyeDropperChooser": false, "blink.mojom.DateTimeChooser": false, "blink.mojom.FileChooser": false, "blink.mojom.PopupMenuClient": false, "blink.mojom.ClipboardListener": false, "blink.mojom.ClipboardHost": false, "blink.mojom.CloseListener": false, "blink.mojom.WebPressureManager": false, "blink.mojom.WebPressureClient": false, "blink.mojom.ContactsManager": false, "blink.mojom.AIPageContentAgent": false, "blink.mojom.PaidContentMetadataObserver": false, "blink.mojom.MetaTagsObserver": false, "blink.mojom.FrameMetadataObserverRegistry": false, "blink.mojom.InnerHtmlAgent": false, "blink.mojom.InnerTextAgent": false, "blink.mojom.ContentIndexService": false, "blink.mojom.ContextMenuClient": false, "blink.mojom.AttributionHost": false, "blink.mojom.CookieStore": false, "blink.mojom.CrashMemoryMetricsReporter": false, "blink.mojom.CredentialManager": true, "blink.mojom.ManagedConfigurationObserver": false, "blink.mojom.DeviceAPIService": false, "blink.mojom.ManagedConfigurationService": false, "blink.mojom.DevicePostureProvider": false, "blink.mojom.DevicePostureClient": false, "blink.mojom.DevToolsAgent": false, "blink.mojom.DevToolsAgentHost": false, "blink.mojom.DevToolsSession": false, "blink.mojom.DevToolsSessionHost": false, "blink.mojom.DevToolsFrontend": false, "blink.mojom.DevToolsFrontendHost": false, "payments.mojom.DigitalGoods": false, "payments.mojom.DigitalGoodsFactory": false, "blink.mojom.DirectSocketsService": true, "blink.mojom.DiskAllocator": false, "blink.mojom.DocumentMetadata": false, "blink.mojom.DomStorageProvider": false, "blink.mojom.DomStorage": false, "blink.mojom.DomStorageClient": false, "blink.mojom.SessionStorageNamespace": false, "blink.mojom.StorageAreaObserver": false, "blink.mojom.StorageArea": false, "blink.mojom.DWriteFontProxy": true, "payments.facilitated.mojom.PaymentLinkHandler": false, "blink.mojom.ObservedFeature": false, "blink.mojom.FeatureObserver": false, "blink.mojom.FencedFrameOwnerHost": true, "blink.mojom.FileUtilitiesHost": false, "blink.mojom.FileSystemAccessAccessHandleHost": false, "blink.mojom.FileSystemAccessDataTransferToken": false, "blink.mojom.FileSystemAccessDirectoryEntriesListener": false, "blink.mojom.FileSystemAccessDirectoryHandle": false, "blink.mojom.FileSystemAccessFileDelegateHost": false, "blink.mojom.FileSystemAccessFileHandle": false, "blink.mojom.FileSystemAccessFileModificationHost": false, "blink.mojom.FileSystemAccessFileWriter": false, "blink.mojom.FileSystemAccessManager": false, "blink.mojom.FileSystemAccessObserver": false, "blink.mojom.FileSystemAccessObserverHost": false, "blink.mojom.FileSystemAccessTransferToken": false, "blink.mojom.FileSystemCancellableOperation": false, "blink.mojom.FileSystemOperationListener": false, "blink.mojom.ReceivedSnapshotListener": false, "blink.mojom.FileSystemManager": false, "blink.mojom.FontAccessManager": false, "blink.mojom.FontUniqueNameLookup": false, "blink.mojom.BackForwardCacheControllerHost": true, "blink.mojom.FindInPage": true, "blink.mojom.FindInPageClient": true, "blink.mojom.LocalFrameHost": true, "blink.mojom.NonAssociatedLocalFrameHost": true, "blink.mojom.LocalFrame": true, "blink.mojom.LocalMainFrame": true, "blink.mojom.LocalMainFrameHost": true, "blink.mojom.PolicyContainerHost": true, "blink.mojom.NavigationStateKeepAliveHandle": true, "blink.mojom.RemoteFrameHost": true, "blink.mojom.RemoteFrame": true, "blink.mojom.RemoteMainFrame": true, "blink.mojom.RemoteMainFrameHost": true, "blink.mojom.ReportingObserver": true, "blink.mojom.SurfaceEmbedder": true, "blink.mojom.EmbeddedFrameSinkClient": true, "blink.mojom.EmbeddedFrameSinkProvider": true, "blink.mojom.GeolocationService": false, "blink.mojom.GpuDataManager": true, "handwriting.mojom.HandwritingRecognizer": false, "handwriting.mojom.HandwritingRecognitionService": false, "blink.mojom.HidService": false, "blink.mojom.Hyphenation": false, "blink.mojom.IdleMonitor": false, "blink.mojom.IdleManager": false, "blink.mojom.ImageDownloader": false, "blink.mojom.IDBFactoryClient": true, "blink.mojom.IDBDatabaseCallbacks": true, "blink.mojom.IDBCursor": true, "blink.mojom.IDBTransaction": true, "blink.mojom.IDBDatabaseGetAllResultSink": true, "blink.mojom.IDBDatabase": true, "blink.mojom.IDBFactory": true, "blink.mojom.ImeRenderWidgetHost": false, "blink.mojom.WidgetInputHandlerHost": false, "blink.mojom.FrameWidgetInputHandler": false, "blink.mojom.WidgetInputHandler": false, "blink.mojom.TextSuggestionHost": false, "blink.mojom.TextSuggestionBackend": false, "blink.mojom.PointerLockContext": false, "blink.mojom.SynchronousCompositor": true, "blink.mojom.SynchronousCompositorHost": true, "blink.mojom.SynchronousCompositorControlHost": true, "blink.mojom.TextInputHost": true, "blink.mojom.InstallationService": false, "blink.mojom.InstalledAppProvider": false, "blink.mojom.AbortableAdAuction": false, "blink.mojom.AdAuctionService": false, "blink.mojom.KeyboardLockService": false, "blink.mojom.LCPCriticalPathPredictorHost": false, "blink.mojom.LeakDetector": false, "blink.mojom.TextFragmentReceiver": false, "blink.mojom.CodeCacheHost": false, "blink.mojom.ContentSecurityNotifier": false, "blink.mojom.FetchLaterLoaderFactory": false, "blink.mojom.FetchLaterLoader": false, "blink.mojom.KeepAliveHandle": false, "blink.mojom.KeepAliveHandleFactory": false, "blink.mojom.AnchorElementMetricsHost": false, "blink.mojom.PauseSubresourceLoadingHandle": false, "blink.mojom.ResourceLoadInfoNotifier": false, "blink.mojom.LockScreenService": false, "blink.mojom.LockHandle": false, "blink.mojom.LockRequest": false, "blink.mojom.LockManager": false, "blink.mojom.ManifestManager": false, "blink.mojom.ManifestUrlChangeObserver": false, "blink.mojom.FullscreenVideoElementHandler": false, "blink.mojom.RendererAudioInputStreamFactory": false, "blink.mojom.RendererAudioInputStreamFactoryClient": false, "blink.mojom.RendererAudioOutputStreamFactory": false, "blink.mojom.MediaSessionClient": false, "blink.mojom.MediaSessionService": false, "blink.mojom.AecDumpAgent": false, "blink.mojom.AecDumpManager": false, "blink.mojom.MediaDevicesDispatcherHost": false, "blink.mojom.MediaDevicesListener": false, "blink.mojom.MediaStreamDeviceObserver": false, "blink.mojom.MediaStreamDispatcherHost": false, "blink.mojom.MediaStreamTrackMetricsHost": false, "blink.mojom.MemoryUsageMonitorLinux": true, "blink.mojom.ImageReleaseCallback": true, "blink.mojom.MimeRegistry": false, "blink.mojom.NonPersistentNotificationListener": false, "blink.mojom.NotificationService": false, "blink.mojom.TranslationManagerCreateTranslatorClient": false, "blink.mojom.TranslationManager": false, "blink.mojom.Translator": false, "blink.mojom.OomInterventionHost": false, "blink.mojom.OomIntervention": false, "blink.mojom.OriginTrialStateHost": true, "blink.mojom.DisplayCutoutHost": true, "blink.mojom.DisplayCutoutClient": true, "blink.mojom.PageBroadcast": true, "blink.mojom.FrameWidget": true, "blink.mojom.FrameWidgetHost": true, "blink.mojom.PopupWidgetHost": true, "payments.mojom.PaymentManager": false, "payments.mojom.PaymentHandlerResponseCallback": false, "payments.mojom.PaymentHandlerHost": false, "payments.mojom.PaymentRequestClient": false, "payments.mojom.PaymentRequest": false, "payments.mojom.SecurePaymentConfirmationService": false, "blink.mojom.PeerConnectionManager": false, "blink.mojom.PeerConnectionTrackerHost": false, "blink.mojom.V8DetailedMemoryReporter": false, "blink.mojom.PermissionObserver": false, "blink.mojom.EmbeddedPermissionControlClient": false, "blink.mojom.PermissionService": false, "blink.mojom.PersistentRendererPrefsService": false, "blink.mojom.PictureInPictureSessionObserver": false, "blink.mojom.PictureInPictureSession": false, "blink.mojom.PictureInPictureService": false, "blink.mojom.PluginRegistry": false, "blink.mojom.AnchorElementInteractionHost": false, "blink.mojom.NoStatePrefetchProcessor": false, "blink.mojom.PresentationConnection": false, "blink.mojom.PresentationService": false, "blink.mojom.PresentationController": false, "blink.mojom.PresentationReceiver": false, "blink.mojom.WebPrintJobStateObserver": true, "blink.mojom.WebPrintJobController": true, "blink.mojom.WebPrinter": true, "blink.mojom.WebPrintingService": true, "blink.mojom.PrivateAggregationHost": false, "blink.mojom.PushMessaging": false, "blink.mojom.QuotaManagerHost": false, "blink.mojom.RemoteObjectHost": true, "blink.mojom.RemoteObject": true, "blink.mojom.RemoteObjectGatewayFactory": true, "blink.mojom.RemoteObjectGateway": true, "blink.mojom.RenderAccessibilityHost": false, "blink.mojom.RenderAccessibility": false, "blink.mojom.RendererPreferenceWatcher": false, "blink.mojom.ReportingServiceProxy": false, "blink.mojom.WebSensorProvider": false, "blink.mojom.SerialService": false, "blink.mojom.SerialServiceClient": false, "blink.mojom.ControllerServiceWorker": true, "blink.mojom.ControllerServiceWorkerConnector": true, "blink.mojom.EmbeddedWorkerInstanceClient": true, "blink.mojom.EmbeddedWorkerInstanceHost": true, "blink.mojom.ServiceWorkerHost": true, "blink.mojom.ServiceWorker": true, "blink.mojom.ServiceWorkerContainerHost": true, "blink.mojom.ServiceWorkerContainer": true, "blink.mojom.ServiceWorkerFetchResponseCallback": false, "blink.mojom.ServiceWorkerInstalledScriptsManagerHost": false, "blink.mojom.ServiceWorkerInstalledScriptsManager": false, "blink.mojom.ServiceWorkerObjectHost": true, "blink.mojom.ServiceWorkerObject": true, "blink.mojom.ServiceWorkerRegistrationObjectHost": true, "blink.mojom.ServiceWorkerRegistrationObject": true, "blink.mojom.ServiceWorkerRunningStatusCallback": false, "blink.mojom.ServiceWorkerStreamCallback": false, "blink.mojom.ServiceWorkerWorkerClient": false, "blink.mojom.ServiceWorkerWorkerClientRegistry": false, "blink.mojom.SharedStorageWorkletHost": true, "blink.mojom.SharedStorageDocumentService": true, "blink.mojom.SharedStorageEntriesListener": true, "blink.mojom.SharedStorageWorkletServiceClient": true, "blink.mojom.SharedStorageWorkletService": true, "blink.mojom.SmartCardService": false, "blink.mojom.WebOTPService": false, "blink.mojom.SpeculationHost": false, "blink.mojom.SpeechSynthesisVoiceListObserver": false, "blink.mojom.SpeechSynthesisClient": false, "blink.mojom.SpeechSynthesis": false, "blink.mojom.StorageAccessHandle": true, "blink.mojom.SubAppsService": false, "blink.mojom.UnhandledTapNotifier": true, "blink.mojom.WebUsbService": false, "blink.mojom.WakeLockService": false, "blink.mojom.WebInstallService": false, "blink.mojom.WebLaunchService": false, "blink.mojom.AudioContextManager": false, "blink.mojom.Authenticator": true, "blink.mojom.DigitalIdentityRequest": false, "blink.mojom.FederatedAuthRequest": false, "blink.mojom.ShareService": false, "blink.mojom.WebSocketConnector": false, "blink.mojom.WebTransportConnector": false, "blink.mojom.WebViewMediaIntegrityService": true, "blink.mojom.WebViewMediaIntegrityProvider": true, "blink.mojom.WidgetCompositor": false, "blink.mojom.WidgetHost": false, "blink.mojom.Widget": false, "blink.mojom.RenderInputRouterClient": false, "blink.mojom.DedicatedWorkerHost": false, "blink.mojom.DedicatedWorkerHostFactoryClient": true, "blink.mojom.DedicatedWorkerHostFactory": true, "blink.mojom.SharedWorker": true, "blink.mojom.SharedWorkerClient": false, "blink.mojom.SharedWorkerConnector": true, "blink.mojom.SharedWorkerFactory": true, "blink.mojom.SharedWorkerHost": false, "blink.mojom.SubresourceLoaderUpdater": false, "blink.mojom.WorkerContentSettingsProxy": false, "blink.mojom.WorkletDevToolsHost": false, "ui.mojom.IMEStructTraitsTest": true, "gfx.mojom.ImageTraitsTestService": true, "gfx.mojom.DelegatedInkPointRenderer": true, "gfx.mojom.TraitsTestService": true, "gfx.mojom.RangeTraitsTestService": true, "gl.mojom.TraitsTestService": true, "ui.ozone.mojom.DeviceCursor": true, "ui.ozone.mojom.DrmDevice": true, "ui.mojom.ScenicGpuHost": true, "ui.mojom.ScenicGpuService": true, "ui.ozone.mojom.WaylandBufferManagerHost": true, "ui.ozone.mojom.WaylandBufferManagerGpu": true, "wl.mojom.ConfigTraitsTestService": true, "ui.ozone.mojom.GesturePropertiesService": true, "webui_examples.mojom.PageHandlerFactory": true, "webui_examples.mojom.PageHandler": true, "app_management.mojom.PageHandlerFactory": true, "app_management.mojom.PageHandler": true, "app_management.mojom.Page": true, "color_change_listener.mojom.PageHandler": true, "color_change_listener.mojom.Page": true, "composebox.mojom.PageHandlerFactory": true, "composebox.mojom.PageHandler": true, "composebox.mojom.Page": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler": true, "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient": true, "custom_help_bubble.mojom.CustomHelpBubbleHandlerFactory": true, "custom_help_bubble.mojom.CustomHelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleHandlerFactory": true, "help_bubble.mojom.PdfHelpBubbleHandlerFactory": true, "help_bubble.mojom.HelpBubbleHandler": true, "help_bubble.mojom.HelpBubbleClient": true, "history.mojom.PageHandler": true, "history.mojom.Page": true, "history_clusters.mojom.PageHandler": true, "history_clusters.mojom.Page": true, "history_embeddings.mojom.PageHandler": true, "history_embeddings.mojom.Page": true, "most_visited.mojom.MostVisitedPageHandlerFactory": true, "most_visited.mojom.MostVisitedPageHandler": true, "most_visited.mojom.MostVisitedPage": true, "theme_color_picker.mojom.ThemeColorPickerHandlerFactory": true, "theme_color_picker.mojom.ThemeColorPickerHandler": true, "theme_color_picker.mojom.ThemeColorPickerClient": true, "batch_upload_promo.mojom.PageHandlerFactory": true, "batch_upload_promo.mojom.PageHandler": true, "batch_upload_promo.mojom.Page": true, "browser_command.mojom.CommandHandlerFactory": true, "browser_command.mojom.CommandHandler": true, "metrics_reporter.mojom.PageMetricsHost": true, "metrics_reporter.mojom.PageMetrics": true, "tracked_element.mojom.TrackedElementHandler": true, "url.mojom.UrlTest": true},
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
        const versionStr = window.mojoVersion || '146.0.7634.0';
        
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

 mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.content_settings = mojo.internal.bindings.content_settings || {};
mojo.internal.bindings.unexportable_keys = mojo.internal.bindings.unexportable_keys || {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.sandbox = mojo.internal.bindings.sandbox || {};
mojo.internal.bindings.cert_verifier = mojo.internal.bindings.cert_verifier || {};
mojo.internal.bindings.proxy_resolver = mojo.internal.bindings.proxy_resolver || {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};

mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdictSpec = { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network.mojom.SCTAuditingModeSpec = { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network.mojom.DomainReliabilityClearModeSpec = { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network.mojom.CustomProxyConfigSpec = { $: {} };
mojo.internal.bindings.network.mojom.CertVerifierServiceRemoteParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.HttpAuthStaticNetworkContextParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContextFilePathsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SocketBrokerRemotesSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContextParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkConditionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.MatchedNetworkConditionsSpec = { $: {} };
mojo.internal.bindings.network.mojom.SharedDictionaryInfoSpec = { $: {} };
mojo.internal.bindings.network.mojom.SignedExchangeReportSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderFactoryOverrideSpec = { $: {} };
mojo.internal.bindings.network.mojom.URLLoaderFactoryParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NonceAndAllowlistedPatternsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver = {};
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverSpec = { $ : {} };
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver.$interfaceName = 'network.mojom.CustomProxyConnectionObserver';
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConfigClient = {};
mojo.internal.bindings.network.mojom.CustomProxyConfigClientSpec = { $ : {} };
mojo.internal.bindings.network.mojom.CustomProxyConfigClient.$interfaceName = 'network.mojom.CustomProxyConfigClient';
mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient = {};
mojo.internal.bindings.network.mojom.TrustedHeaderClientSpec = { $ : {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient.$interfaceName = 'network.mojom.TrustedHeaderClient';
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient = {};
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientSpec = { $ : {} };
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient.$interfaceName = 'network.mojom.TrustedURLLoaderHeaderClient';
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandle = {};
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleSpec = { $ : {} };
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandle.$interfaceName = 'network.mojom.PreloadedSharedDictionaryInfoHandle';
mojo.internal.bindings.network.mojom.NetworkContext = {};
mojo.internal.bindings.network.mojom.NetworkContextSpec = { $ : {} };
mojo.internal.bindings.network.mojom.NetworkContext.$interfaceName = 'network.mojom.NetworkContext';
mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec = { $: {} };
mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec = { $: {} };

// External type stubs (from imports)
mojo.internal.bindings.cert_verifier = mojo.internal.bindings.cert_verifier || {};
mojo.internal.bindings.cert_verifier.mojom = mojo.internal.bindings.cert_verifier.mojom || {};
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceSpec = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote || class {};
mojo.internal.bindings.cert_verifier = mojo.internal.bindings.cert_verifier || {};
mojo.internal.bindings.cert_verifier.mojom = mojo.internal.bindings.cert_verifier.mojom || {};
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientSpec = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote = mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote || class {};
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec = mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.FilePathSpec = mojo.internal.bindings.mojo_base.mojom.FilePathSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeSpec = mojo.internal.bindings.mojo_base.mojom.TimeSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec = mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.mojo_base = mojo.internal.bindings.mojo_base || {};
mojo.internal.bindings.mojo_base.mojom = mojo.internal.bindings.mojo_base.mojom || {};
mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec = mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.AddressListSpec = mojo.internal.bindings.network.mojom.AddressListSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.AuthChallengeInfoSpec = mojo.internal.bindings.network.mojom.AuthChallengeInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.AuthCredentialsSpec = mojo.internal.bindings.network.mojom.AuthCredentialsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CTPolicySpec = mojo.internal.bindings.network.mojom.CTPolicySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CacheEncryptionProviderSpec = mojo.internal.bindings.network.mojom.CacheEncryptionProviderSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.CacheEncryptionProviderRemote = mojo.internal.bindings.network.mojom.CacheEncryptionProviderRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CertVerifyResultSpec = mojo.internal.bindings.network.mojom.CertVerifyResultSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ClearDataFilterSpec = mojo.internal.bindings.network.mojom.ClearDataFilterSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ClientSecurityStateSpec = mojo.internal.bindings.network.mojom.ClientSecurityStateSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ConnectionChangeObserverClientSpec = mojo.internal.bindings.network.mojom.ConnectionChangeObserverClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ConnectionChangeObserverClientRemote = mojo.internal.bindings.network.mojom.ConnectionChangeObserverClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ConnectionKeepAliveConfigSpec = mojo.internal.bindings.network.mojom.ConnectionKeepAliveConfigSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CookieAccessObserverSpec = mojo.internal.bindings.network.mojom.CookieAccessObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.CookieAccessObserverRemote = mojo.internal.bindings.network.mojom.CookieAccessObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CookieEncryptionProviderSpec = mojo.internal.bindings.network.mojom.CookieEncryptionProviderSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.CookieEncryptionProviderRemote = mojo.internal.bindings.network.mojom.CookieEncryptionProviderRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CookieManagerSpec = mojo.internal.bindings.network.mojom.CookieManagerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.CookieManagerRemote = mojo.internal.bindings.network.mojom.CookieManagerRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CookieManagerParamsSpec = mojo.internal.bindings.network.mojom.CookieManagerParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec = mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CorsOriginAccessPatternsSpec = mojo.internal.bindings.network.mojom.CorsOriginAccessPatternsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CorsOriginPatternSpec = mojo.internal.bindings.network.mojom.CorsOriginPatternSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CredentialsModeSpec = mojo.internal.bindings.network.mojom.CredentialsModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicyReporterSpec = mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicyReporterSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicyReporterRemote = mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicyReporterRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DefaultCredentialsSpec = mojo.internal.bindings.network.mojom.DefaultCredentialsSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DeleteStoredTrustTokensStatusSpec = mojo.internal.bindings.network.mojom.DeleteStoredTrustTokensStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DevToolsObserverSpec = mojo.internal.bindings.network.mojom.DevToolsObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.DevToolsObserverRemote = mojo.internal.bindings.network.mojom.DevToolsObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverSpec = mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote = mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerSpec = mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemote = mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DhcpWpadUrlClientSpec = mojo.internal.bindings.network.mojom.DhcpWpadUrlClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.DhcpWpadUrlClientRemote = mojo.internal.bindings.network.mojom.DhcpWpadUrlClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DnsConfigOverridesSpec = mojo.internal.bindings.network.mojom.DnsConfigOverridesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.DocumentIsolationPolicyReporterSpec = mojo.internal.bindings.network.mojom.DocumentIsolationPolicyReporterSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.DocumentIsolationPolicyReporterRemote = mojo.internal.bindings.network.mojom.DocumentIsolationPolicyReporterRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateSpec = mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateRemote = mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateParamsSpec = mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.HostPortPairSpec = mojo.internal.bindings.network.mojom.HostPortPairSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.HostResolverSpec = mojo.internal.bindings.network.mojom.HostResolverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.HostResolverRemote = mojo.internal.bindings.network.mojom.HostResolverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.HostResolverHostSpec = mojo.internal.bindings.network.mojom.HostResolverHostSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactorySpec = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactorySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote = mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.HttpHeaderSpec = mojo.internal.bindings.network.mojom.HttpHeaderSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec = mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec = mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.IPAddressSpec = mojo.internal.bindings.network.mojom.IPAddressSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.IPEndPointSpec = mojo.internal.bindings.network.mojom.IPEndPointSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.IsolationInfoSpec = mojo.internal.bindings.network.mojom.IsolationInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.MdnsResponderSpec = mojo.internal.bindings.network.mojom.MdnsResponderSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.MdnsResponderRemote = mojo.internal.bindings.network.mojom.MdnsResponderRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec = mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.NetLogExporterSpec = mojo.internal.bindings.network.mojom.NetLogExporterSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.NetLogExporterRemote = mojo.internal.bindings.network.mojom.NetLogExporterRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec = mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.NetworkContextClientSpec = mojo.internal.bindings.network.mojom.NetworkContextClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.NetworkContextClientRemote = mojo.internal.bindings.network.mojom.NetworkContextClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.NetworkIsolationKeySpec = mojo.internal.bindings.network.mojom.NetworkIsolationKeySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ObliviousHttpClientSpec = mojo.internal.bindings.network.mojom.ObliviousHttpClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ObliviousHttpClientRemote = mojo.internal.bindings.network.mojom.ObliviousHttpClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ObliviousHttpRequestSpec = mojo.internal.bindings.network.mojom.ObliviousHttpRequestSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyChainSpec = mojo.internal.bindings.network.mojom.ProxyChainSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyConfigClientSpec = mojo.internal.bindings.network.mojom.ProxyConfigClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ProxyConfigClientRemote = mojo.internal.bindings.network.mojom.ProxyConfigClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyConfigPollerClientSpec = mojo.internal.bindings.network.mojom.ProxyConfigPollerClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ProxyConfigPollerClientRemote = mojo.internal.bindings.network.mojom.ProxyConfigPollerClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyConfigWithAnnotationSpec = mojo.internal.bindings.network.mojom.ProxyConfigWithAnnotationSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyErrorClientSpec = mojo.internal.bindings.network.mojom.ProxyErrorClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ProxyErrorClientRemote = mojo.internal.bindings.network.mojom.ProxyErrorClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyLookupClientSpec = mojo.internal.bindings.network.mojom.ProxyLookupClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ProxyLookupClientRemote = mojo.internal.bindings.network.mojom.ProxyLookupClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyResolvingSocketFactorySpec = mojo.internal.bindings.network.mojom.ProxyResolvingSocketFactorySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ProxyResolvingSocketFactoryRemote = mojo.internal.bindings.network.mojom.ProxyResolvingSocketFactoryRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ProxyRulesSpec = mojo.internal.bindings.network.mojom.ProxyRulesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ReportingApiObserverSpec = mojo.internal.bindings.network.mojom.ReportingApiObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ReportingApiObserverRemote = mojo.internal.bindings.network.mojom.ReportingApiObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RequestDestinationSpec = mojo.internal.bindings.network.mojom.RequestDestinationSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ResolveHostClientSpec = mojo.internal.bindings.network.mojom.ResolveHostClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.ResolveHostClientRemote = mojo.internal.bindings.network.mojom.ResolveHostClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ResolveHostParametersSpec = mojo.internal.bindings.network.mojom.ResolveHostParametersSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RestrictedCookieManagerSpec = mojo.internal.bindings.network.mojom.RestrictedCookieManagerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote = mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RestrictedCookieManagerRoleSpec = mojo.internal.bindings.network.mojom.RestrictedCookieManagerRoleSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RestrictedUDPSocketSpec = mojo.internal.bindings.network.mojom.RestrictedUDPSocketSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.RestrictedUDPSocketRemote = mojo.internal.bindings.network.mojom.RestrictedUDPSocketRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RestrictedUDPSocketModeSpec = mojo.internal.bindings.network.mojom.RestrictedUDPSocketModeSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.RestrictedUDPSocketParamsSpec = mojo.internal.bindings.network.mojom.RestrictedUDPSocketParamsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SHA256HashValueSpec = mojo.internal.bindings.network.mojom.SHA256HashValueSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SSLConfigSpec = mojo.internal.bindings.network.mojom.SSLConfigSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SSLConfigClientSpec = mojo.internal.bindings.network.mojom.SSLConfigClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.SSLConfigClientRemote = mojo.internal.bindings.network.mojom.SSLConfigClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SSLInfoSpec = mojo.internal.bindings.network.mojom.SSLInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SharedDictionaryAccessObserverSpec = mojo.internal.bindings.network.mojom.SharedDictionaryAccessObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.SharedDictionaryAccessObserverRemote = mojo.internal.bindings.network.mojom.SharedDictionaryAccessObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SharedDictionaryIsolationKeySpec = mojo.internal.bindings.network.mojom.SharedDictionaryIsolationKeySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SharedDictionaryUsageInfoSpec = mojo.internal.bindings.network.mojom.SharedDictionaryUsageInfoSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SiteForCookiesSpec = mojo.internal.bindings.network.mojom.SiteForCookiesSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SocketBrokerSpec = mojo.internal.bindings.network.mojom.SocketBrokerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.SocketBrokerRemote = mojo.internal.bindings.network.mojom.SocketBrokerRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.SocketObserverSpec = mojo.internal.bindings.network.mojom.SocketObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.SocketObserverRemote = mojo.internal.bindings.network.mojom.SocketObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec = mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec || { $: mojo.internal.Enum().$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.StoredTrustTokensForIssuerSpec = mojo.internal.bindings.network.mojom.StoredTrustTokensForIssuerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TCPBoundSocketSpec = mojo.internal.bindings.network.mojom.TCPBoundSocketSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.TCPBoundSocketRemote = mojo.internal.bindings.network.mojom.TCPBoundSocketRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TCPConnectedSocketSpec = mojo.internal.bindings.network.mojom.TCPConnectedSocketSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.TCPConnectedSocketRemote = mojo.internal.bindings.network.mojom.TCPConnectedSocketRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TCPConnectedSocketOptionsSpec = mojo.internal.bindings.network.mojom.TCPConnectedSocketOptionsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TCPServerSocketSpec = mojo.internal.bindings.network.mojom.TCPServerSocketSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.TCPServerSocketRemote = mojo.internal.bindings.network.mojom.TCPServerSocketRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TCPServerSocketOptionsSpec = mojo.internal.bindings.network.mojom.TCPServerSocketOptionsSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.ToplevelRedemptionRecordSpec = mojo.internal.bindings.network.mojom.ToplevelRedemptionRecordSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TransferableDirectorySpec = mojo.internal.bindings.network.mojom.TransferableDirectorySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TrustTokenAccessObserverSpec = mojo.internal.bindings.network.mojom.TrustTokenAccessObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.TrustTokenAccessObserverRemote = mojo.internal.bindings.network.mojom.TrustTokenAccessObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.TrustTokenQueryAnswererSpec = mojo.internal.bindings.network.mojom.TrustTokenQueryAnswererSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.TrustTokenQueryAnswererRemote = mojo.internal.bindings.network.mojom.TrustTokenQueryAnswererRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.UDPSocketSpec = mojo.internal.bindings.network.mojom.UDPSocketSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.UDPSocketRemote = mojo.internal.bindings.network.mojom.UDPSocketRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.UDPSocketListenerSpec = mojo.internal.bindings.network.mojom.UDPSocketListenerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.UDPSocketListenerRemote = mojo.internal.bindings.network.mojom.UDPSocketListenerRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.URLLoaderFactorySpec = mojo.internal.bindings.network.mojom.URLLoaderFactorySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote = mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverSpec = mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote = mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.URLRequestSpec = mojo.internal.bindings.network.mojom.URLRequestSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerSpec = mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemote = mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.WebSocketHandshakeClientSpec = mojo.internal.bindings.network.mojom.WebSocketHandshakeClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemote = mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.WebTransportCertificateFingerprintSpec = mojo.internal.bindings.network.mojom.WebTransportCertificateFingerprintSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.WebTransportHandshakeClientSpec = mojo.internal.bindings.network.mojom.WebTransportHandshakeClientSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.network.mojom.WebTransportHandshakeClientRemote = mojo.internal.bindings.network.mojom.WebTransportHandshakeClientRemote || class {};
mojo.internal.bindings.network = mojo.internal.bindings.network || {};
mojo.internal.bindings.network.mojom = mojo.internal.bindings.network.mojom || {};
mojo.internal.bindings.network.mojom.X509CertificateSpec = mojo.internal.bindings.network.mojom.X509CertificateSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.proxy_resolver = mojo.internal.bindings.proxy_resolver || {};
mojo.internal.bindings.proxy_resolver.mojom = mojo.internal.bindings.proxy_resolver.mojom || {};
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactorySpec = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactorySpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemote = mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemote || class {};
mojo.internal.bindings.proxy_resolver = mojo.internal.bindings.proxy_resolver || {};
mojo.internal.bindings.proxy_resolver.mojom = mojo.internal.bindings.proxy_resolver.mojom || {};
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverSpec = mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemote = mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemote || class {};
mojo.internal.bindings.unexportable_keys = mojo.internal.bindings.unexportable_keys || {};
mojo.internal.bindings.unexportable_keys.mojom = mojo.internal.bindings.unexportable_keys.mojom || {};
mojo.internal.bindings.unexportable_keys.mojom.UnexportableKeyServiceSpec = mojo.internal.bindings.unexportable_keys.mojom.UnexportableKeyServiceSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.unexportable_keys.mojom.UnexportableKeyServiceRemote = mojo.internal.bindings.unexportable_keys.mojom.UnexportableKeyServiceRemote || class {};
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.OriginSpec = mojo.internal.bindings.url.mojom.OriginSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.SchemeHostPortSpec = mojo.internal.bindings.url.mojom.SchemeHostPortSpec || { $: mojo.internal.OpaqueStruct.$ };
mojo.internal.bindings.url = mojo.internal.bindings.url || {};
mojo.internal.bindings.url.mojom = mojo.internal.bindings.url.mojom || {};
mojo.internal.bindings.url.mojom.UrlSpec = mojo.internal.bindings.url.mojom.UrlSpec || { $: mojo.internal.OpaqueStruct.$ };

mojo.internal.bindings.network.mojom.kWebSocketOptionNone = 0;

mojo.internal.bindings.network.mojom.kWebSocketOptionBlockAllCookies = 1;

mojo.internal.bindings.network.mojom.kWebSocketOptionBlockThirdPartyCookies = 2;

mojo.internal.bindings.network.mojom.kBrowserProcessId = 0;

mojo.internal.bindings.network.mojom.kInvalidProcessId = -1;

// Enum: TrustTokenOperationPolicyVerdict
mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdict = {
  kForbid: 0,
  kPotentiallyPermit: 1,
};

// Enum: SCTAuditingMode
mojo.internal.bindings.network.mojom.SCTAuditingMode = {
  kDisabled: 0,
  kEnhancedSafeBrowsingReporting: 1,
  kHashdance: 2,
};

// Enum: DomainReliabilityClearMode
mojo.internal.bindings.network.mojom.DomainReliabilityClearMode = {
  CLEAR_CONTEXTS: 0,
  CLEAR_BEACONS: 1,
};

// Struct: CustomProxyConfig
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConfigSpec, 'network.mojom.CustomProxyConfig', [
      mojo.internal.StructField('arg_rules', 0, 0, mojo.internal.bindings.network.mojom.ProxyRulesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_should_override_existing_config', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_allow_non_idempotent_methods', 8, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_connect_tunnel_headers', 16, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

// Struct: CertVerifierServiceRemoteParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CertVerifierServiceRemoteParamsSpec, 'network.mojom.CertVerifierServiceRemoteParams', [
      mojo.internal.StructField('arg_cert_verifier_service', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_cert_verifier_service_client_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.cert_verifier.mojom.CertVerifierServiceClientRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

// Struct: HttpAuthStaticNetworkContextParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.HttpAuthStaticNetworkContextParamsSpec, 'network.mojom.HttpAuthStaticNetworkContextParams', [
      mojo.internal.StructField('arg_allow_default_credentials', 0, 0, mojo.internal.bindings.network.mojom.DefaultCredentialsSpec, 0, false, 0, undefined),
    ],
    [[0, 16]]);

// Struct: NetworkContextFilePaths
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContextFilePathsSpec, 'network.mojom.NetworkContextFilePaths', [
      mojo.internal.StructField('arg_shared_dictionary_directory', 0, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_http_cache_directory', 16, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_no_vary_search_directory', 32, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_data_directory', 48, 0, mojo.internal.bindings.network.mojom.TransferableDirectorySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_unsandboxed_data_path', 64, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_database_name', 72, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_device_bound_sessions_database_name', 80, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_trust_token_database_name', 88, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_http_server_properties_file_name', 96, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_transport_security_persister_file_name', 104, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_reporting_and_nel_store_database_name', 112, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_sct_auditing_pending_reports_file_name', 120, 0, mojo.internal.bindings.mojo_base.mojom.FilePathSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_trigger_migration', 128, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 144]]);

// Struct: SocketBrokerRemotes
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SocketBrokerRemotesSpec, 'network.mojom.SocketBrokerRemotes', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketBrokerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_server', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketBrokerRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: NetworkContextParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContextParamsSpec, 'network.mojom.NetworkContextParams', [
      mojo.internal.StructField('arg_user_agent', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_accept_language', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_enable_brotli', 16, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enable_zstd', 16, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_referrers', 16, 2, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_validate_referrer_policy_on_initial_request', 16, 3, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enable_encrypted_cookies', 16, 4, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_restore_old_session_cookies', 16, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_persist_session_cookies', 16, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_http_cache_enabled', 16, 7, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_check_clear_text_permitted', 17, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_pac_quick_check_enabled', 17, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_enable_certificate_reporting', 17, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enforce_chrome_ct_policy', 17, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_enable_domain_reliability', 17, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_discard_domain_reliablity_uploads', 17, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_skip_reporting_send_permission_check', 17, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_reset_http_cache_backend', 17, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_split_auth_cache_by_network_anonymization_key', 18, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_network_anonymization_key', 18, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_win_permissions_set', 18, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_block_trust_tokens', 18, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_enabled', 18, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_acam_preflight_spec_conformant', 18, 5, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_device_bound_sessions_enabled', 18, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_stale_dns_enabled', 18, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_quic_idle_connection_timeout_seconds_$flag', 19, 0, mojo.internal.Bool, false, false, 0, { isPrimary: true, linkedValueFieldName: 'arg_quic_idle_connection_timeout_seconds_$value', originalFieldName: 'arg_quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('arg_enable_encrypted_http_cache', 19, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_proxy_resolver_factory', 20, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.ProxyResolverFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_system_proxy_resolver', 28, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.proxy_resolver.mojom.SystemProxyResolverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_dhcp_wpad_url_client', 36, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DhcpWpadUrlClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_http_cache_max_size', 44, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_http_cache_file_operations_factory', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.HttpCacheBackendFileOperationsFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_encryption_provider', 56, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CacheEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_ssl_config', 64, 0, mojo.internal.bindings.network.mojom.SSLConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ssl_config_client_receiver', 72, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.SSLConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_config_client_receiver', 76, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.ProxyConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_proxy_config', 80, 0, mojo.internal.bindings.network.mojom.ProxyConfigWithAnnotationSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_initial_custom_proxy_config', 88, 0, mojo.internal.bindings.network.mojom.CustomProxyConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_proxy_config_client_receiver', 96, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_custom_proxy_connection_observer_remote', 100, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_config_poller_client', 108, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ProxyConfigPollerClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_proxy_error_client', 116, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ProxyErrorClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_sct_auditing_mode', 124, 0, mojo.internal.bindings.network.mojom.SCTAuditingModeSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_socket_brokers', 128, 0, mojo.internal.bindings.network.mojom.SocketBrokerRemotesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_ct_policy', 136, 0, mojo.internal.bindings.network.mojom.CTPolicySpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cert_verifier_params', 144, 0, mojo.internal.bindings.network.mojom.CertVerifierServiceRemoteParamsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_manager_params', 152, 0, mojo.internal.bindings.network.mojom.CookieManagerParamsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_manager', 160, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.CookieManagerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_first_party_sets_access_delegate_receiver', 164, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_domain_reliability_upload_reporter', 168, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_reporting_delivery_interval', 176, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cors_origin_access_list', 184, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CorsOriginAccessPatternsSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_cors_exempt_header_list', 192, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_hsts_policy_bypass_list', 200, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_http_auth_static_network_context_params', 208, 0, mojo.internal.bindings.network.mojom.HttpAuthStaticNetworkContextParamsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_file_paths', 216, 0, mojo.internal.bindings.network.mojom.NetworkContextFilePathsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_cache_max_size', 224, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_first_party_sets_access_delegate_params', 232, 0, mojo.internal.bindings.network.mojom.FirstPartySetsAccessDelegateParamsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_encryption_provider', 240, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieEncryptionProviderRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_bound_network', 248, 0, mojo.internal.Int64, -1, false, 0, undefined),
      mojo.internal.StructField('arg_quic_idle_connection_timeout_seconds_$value', 256, 0, mojo.internal.Int64, 0, false, 0, { isPrimary: false, linkedValueFieldName: 'arg_quic_idle_connection_timeout_seconds_$flag', originalFieldName: 'arg_quic_idle_connection_timeout_seconds' }),
      mojo.internal.StructField('arg_bound_sessions_unexportable_key_service', 264, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.unexportable_keys.mojom.UnexportableKeyServiceRemote), null, true, 0, undefined),
    ],
    [[0, 280]]);

// Struct: NetworkConditions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkConditionsSpec, 'network.mojom.NetworkConditions', [
      mojo.internal.StructField('arg_offline', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_packet_reordering', 0, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_packet_queue_length', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_latency', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_download_throughput', 16, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_upload_throughput', 24, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_packet_loss', 32, 0, mojo.internal.Double, 0, false, 0, undefined),
      mojo.internal.StructField('arg_rule_id', 40, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
    ],
    [[0, 56]]);

// Struct: MatchedNetworkConditions
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.MatchedNetworkConditionsSpec, 'network.mojom.MatchedNetworkConditions', [
      mojo.internal.StructField('arg_pattern', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_conditions', 8, 0, mojo.internal.bindings.network.mojom.NetworkConditionsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: SharedDictionaryInfo
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SharedDictionaryInfoSpec, 'network.mojom.SharedDictionaryInfo', [
      mojo.internal.StructField('arg_match', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_match_dest', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.RequestDestinationSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_id', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_dictionary_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_fetch_time', 32, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_response_time', 40, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_expiration', 48, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_last_used_time', 56, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_size', 64, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_hash', 72, 0, mojo.internal.bindings.network.mojom.SHA256HashValueSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: SignedExchangeReport
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.SignedExchangeReportSpec, 'network.mojom.SignedExchangeReport', [
      mojo.internal.StructField('arg_success', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_status_code', 4, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_type', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_outer_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_inner_url', 24, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_cert_url', 32, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_referrer', 40, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_server_ip_address', 48, 0, mojo.internal.bindings.network.mojom.IPAddressSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_protocol', 56, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_method', 64, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_elapsed_time', 72, 0, mojo.internal.bindings.mojo_base.mojom.TimeDeltaSpec, null, false, 0, undefined),
    ],
    [[0, 88]]);

// Struct: URLLoaderFactoryOverride
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderFactoryOverrideSpec, 'network.mojom.URLLoaderFactoryOverride', [
      mojo.internal.StructField('arg_overriding_factory', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_overridden_factory_receiver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_skip_cors_enabled_scheme_check', 12, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

// Struct: URLLoaderFactoryParams
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.URLLoaderFactoryParamsSpec, 'network.mojom.URLLoaderFactoryParams', [
      mojo.internal.StructField('arg_process_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_is_orb_enabled', 4, 0, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_isolated_world_origin', 4, 1, mojo.internal.Bool, true, false, 0, undefined),
      mojo.internal.StructField('arg_unsafe_non_webby_initiator', 4, 2, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_web_security', 4, 3, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_disable_secure_dns', 4, 4, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_trusted', 4, 5, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_automatically_assign_isolation_info', 4, 6, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_require_cross_site_request_for_cookies', 4, 7, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_ignore_factory_reset', 5, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_is_main_frame_origin_recently_accessed', 5, 1, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_request_initiator_origin_lock', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_header_client', 16, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 24, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_id', 32, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_factory_override', 40, 0, mojo.internal.bindings.network.mojom.URLLoaderFactoryOverrideSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_client_security_state', 48, 0, mojo.internal.bindings.network.mojom.ClientSecurityStateSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_coep_reporter', 56, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CrossOriginEmbedderPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_dip_reporter', 64, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DocumentIsolationPolicyReporterRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_cookie_observer', 72, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_trust_token_observer', 80, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TrustTokenAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_shared_dictionary_observer', 88, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SharedDictionaryAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_url_loader_network_observer', 96, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_devtools_observer', 104, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DevToolsObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_device_bound_session_observer', 112, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.DeviceBoundSessionAccessObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_trust_token_issuance_policy', 120, 0, mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdictSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_trust_token_redemption_policy', 124, 0, mojo.internal.bindings.network.mojom.TrustTokenOperationPolicyVerdictSpec, 0, false, 0, undefined),
      mojo.internal.StructField('arg_debug_tag', 128, 0, mojo.internal.String, 0, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_setting_overrides', 136, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_cookie_setting_overrides', 144, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_restrictions_id', 152, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
    ],
    [[0, 168]]);

// Struct: NonceAndAllowlistedPatterns
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NonceAndAllowlistedPatternsSpec, 'network.mojom.NonceAndAllowlistedPatterns', [
      mojo.internal.StructField('arg_nonce', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_allowlisted_patterns', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

// Interface: CustomProxyConnectionObserver
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec, 'network.mojom.CustomProxyConnectionObserver_OnFallback_Params', [
      mojo.internal.StructField('arg_bad_chain', 0, 0, mojo.internal.bindings.network.mojom.ProxyChainSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_net_error', 8, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec, 'network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_Params', [
      mojo.internal.StructField('arg_proxy_chain', 0, 0, mojo.internal.bindings.network.mojom.ProxyChainSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_chain_index', 8, 0, mojo.internal.Uint64, 0, false, 0, undefined),
      mojo.internal.StructField('arg_response_headers', 16, 0, mojo.internal.bindings.network.mojom.HttpResponseHeadersSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConnectionObserver';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onFallback(arg_bad_chain, arg_net_error) {
    return this.$.onFallback(arg_bad_chain, arg_net_error);
  }
  onTunnelHeadersReceived(arg_proxy_chain, arg_chain_index, arg_response_headers) {
    return this.$.onTunnelHeadersReceived(arg_proxy_chain, arg_chain_index, arg_response_headers);
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.CustomProxyConnectionObserver', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onFallback(arg_bad_chain, arg_net_error) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec,
      null,
      [arg_bad_chain, arg_net_error],
      false);
  }

  onTunnelHeadersReceived(arg_proxy_chain, arg_chain_index, arg_response_headers) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec,
      null,
      [arg_proxy_chain, arg_chain_index, arg_response_headers],
      false);
  }

};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConnectionObserver',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.CustomProxyConnectionObserver', [
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
    this.endpoint.start({ onMessageReceived: (...args) => {
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnFallback_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onFallback');
          const result = this.impl.onFallback(params.arg_bad_chain, params.arg_net_error);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConnectionObserver_OnTunnelHeadersReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onTunnelHeadersReceived');
          const result = this.impl.onTunnelHeadersReceived(params.arg_proxy_chain, params.arg_chain_index, params.arg_response_headers);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverReceiver = mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverReceiver;

mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPtr = mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRemote;
mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverRequest = mojo.internal.bindings.network.mojom.CustomProxyConnectionObserverPendingReceiver;


// Interface: CustomProxyConfigClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec, 'network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_Params', [
      mojo.internal.StructField('arg_proxy_config', 0, 0, mojo.internal.bindings.network.mojom.CustomProxyConfigSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec, 'network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.bindings.network.mojom.CustomProxyConfigClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.CustomProxyConfigClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.CustomProxyConfigClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onCustomProxyConfigUpdated(arg_proxy_config) {
    return this.$.onCustomProxyConfigUpdated(arg_proxy_config);
  }
};

mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.CustomProxyConfigClient', [
      { explicit: null },
    ]);
  }

  onCustomProxyConfigUpdated(arg_proxy_config) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec,
      mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec,
      [arg_proxy_config],
      false);
  }

};

mojo.internal.bindings.network.mojom.CustomProxyConfigClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.CustomProxyConfigClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.CustomProxyConfigClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.CustomProxyConfigClient', [
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
    this.endpoint.start({ onMessageReceived: (...args) => {
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onCustomProxyConfigUpdated');
          const result = this.impl.onCustomProxyConfigUpdated(params.arg_proxy_config);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.CustomProxyConfigClient_OnCustomProxyConfigUpdated_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] OnCustomProxyConfigUpdated FAILED:', e));
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

mojo.internal.bindings.network.mojom.CustomProxyConfigClientReceiver = mojo.internal.bindings.network.mojom.CustomProxyConfigClientReceiver;

mojo.internal.bindings.network.mojom.CustomProxyConfigClientPtr = mojo.internal.bindings.network.mojom.CustomProxyConfigClientRemote;
mojo.internal.bindings.network.mojom.CustomProxyConfigClientRequest = mojo.internal.bindings.network.mojom.CustomProxyConfigClientPendingReceiver;


// Interface: TrustedHeaderClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec, 'network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_Params', [
      mojo.internal.StructField('arg_headers', 0, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec, 'network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 8, 0, mojo.internal.bindings.network.mojom.HttpRequestHeadersSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec, 'network.mojom.TrustedHeaderClient_OnHeadersReceived_Params', [
      mojo.internal.StructField('arg_headers', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_remote_endpoint', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_ssl_info', 16, 0, mojo.internal.bindings.network.mojom.SSLInfoSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec, 'network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_headers', 8, 0, mojo.internal.String, null, true, 0, undefined),
      mojo.internal.StructField('arg_preserve_fragment_on_redirect_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.network.mojom.TrustedHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.TrustedHeaderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.TrustedHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onBeforeSendHeaders(arg_headers) {
    return this.$.onBeforeSendHeaders(arg_headers);
  }
  onHeadersReceived(arg_headers, arg_remote_endpoint, arg_ssl_info) {
    return this.$.onHeadersReceived(arg_headers, arg_remote_endpoint, arg_ssl_info);
  }
};

mojo.internal.bindings.network.mojom.TrustedHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.TrustedHeaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onBeforeSendHeaders(arg_headers) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec,
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec,
      [arg_headers],
      false);
  }

  onHeadersReceived(arg_headers, arg_remote_endpoint, arg_ssl_info) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec,
      mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec,
      [arg_headers, arg_remote_endpoint, arg_ssl_info],
      false);
  }

};

mojo.internal.bindings.network.mojom.TrustedHeaderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedHeaderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.TrustedHeaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.TrustedHeaderClient', [
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
    this.endpoint.start({ onMessageReceived: (...args) => {
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onBeforeSendHeaders');
          const result = this.impl.onBeforeSendHeaders(params.arg_headers);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnBeforeSendHeaders_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] OnBeforeSendHeaders FAILED:', e));
          }
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onHeadersReceived');
          const result = this.impl.onHeadersReceived(params.arg_headers, params.arg_remote_endpoint, params.arg_ssl_info);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.TrustedHeaderClient_OnHeadersReceived_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] OnHeadersReceived FAILED:', e));
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

mojo.internal.bindings.network.mojom.TrustedHeaderClientReceiver = mojo.internal.bindings.network.mojom.TrustedHeaderClientReceiver;

mojo.internal.bindings.network.mojom.TrustedHeaderClientPtr = mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote;
mojo.internal.bindings.network.mojom.TrustedHeaderClientRequest = mojo.internal.bindings.network.mojom.TrustedHeaderClientPendingReceiver;


// Interface: TrustedURLLoaderHeaderClient
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_header_client', 4, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec, 'network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.network.mojom.URLRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_header_client', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemote = class {
  static get $interfaceName() {
    return 'network.mojom.TrustedURLLoaderHeaderClient';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  onLoaderCreated(arg_request_id, arg_header_client) {
    return this.$.onLoaderCreated(arg_request_id, arg_header_client);
  }
  onLoaderForCorsPreflightCreated(arg_request, arg_header_client) {
    return this.$.onLoaderForCorsPreflightCreated(arg_request, arg_header_client);
  }
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.TrustedURLLoaderHeaderClient', [
      { explicit: null },
      { explicit: null },
    ]);
  }

  onLoaderCreated(arg_request_id, arg_header_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec,
      null,
      [arg_request_id, arg_header_client],
      false);
  }

  onLoaderForCorsPreflightCreated(arg_request, arg_header_client) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec,
      null,
      [arg_request, arg_header_client],
      false);
  }

};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.TrustedURLLoaderHeaderClient',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.TrustedURLLoaderHeaderClient', [
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
    this.endpoint.start({ onMessageReceived: (...args) => {
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLoaderCreated');
          const result = this.impl.onLoaderCreated(params.arg_request_id, params.arg_header_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClient_OnLoaderForCorsPreflightCreated_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.onLoaderForCorsPreflightCreated');
          const result = this.impl.onLoaderForCorsPreflightCreated(params.arg_request, params.arg_header_client);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientReceiver = mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientReceiver;

mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPtr = mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRemote;
mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientRequest = mojo.internal.bindings.network.mojom.TrustedURLLoaderHeaderClientPendingReceiver;


// Interface: PreloadedSharedDictionaryInfoHandle
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemote = class {
  static get $interfaceName() {
    return 'network.mojom.PreloadedSharedDictionaryInfoHandle';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.PreloadedSharedDictionaryInfoHandle', [
    ]);
  }

};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandle.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.PreloadedSharedDictionaryInfoHandle',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.PreloadedSharedDictionaryInfoHandle', [
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
    this.endpoint.start({ onMessageReceived: (...args) => {
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

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleReceiver = mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleReceiver;

mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePtr = mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemote;
mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRequest = mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandlePendingReceiver;


// Interface: NetworkContext
mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec, 'network.mojom.NetworkContext_SetClient_Params', [
      mojo.internal.StructField('arg_client', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.NetworkContextClientRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec, 'network.mojom.NetworkContext_CreateURLLoaderFactory_Params', [
      mojo.internal.StructField('arg_url_loader_factory', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.URLLoaderFactoryRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 8, 0, mojo.internal.bindings.network.mojom.URLLoaderFactoryParamsSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec, 'network.mojom.NetworkContext_ResetURLLoaderFactories_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec, 'network.mojom.NetworkContext_GetViaObliviousHttp_Params', [
      mojo.internal.StructField('arg_request', 0, 0, mojo.internal.bindings.network.mojom.ObliviousHttpRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_client', 8, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ObliviousHttpClientRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec, 'network.mojom.NetworkContext_GetCookieManager_Params', [
      mojo.internal.StructField('arg_cookie_manager', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.CookieManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec, 'network.mojom.NetworkContext_GetRestrictedCookieManager_Params', [
      mojo.internal.StructField('arg_restricted_cookie_manager', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.RestrictedCookieManagerRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_role', 4, 0, mojo.internal.bindings.network.mojom.RestrictedCookieManagerRoleSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 16, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_setting_overrides', 24, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_devtools_cookie_setting_overrides', 32, 0, mojo.internal.bindings.network.mojom.CookieSettingOverridesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_cookie_observer', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.CookieAccessObserverRemote), null, true, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec, 'network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_Params', [
      mojo.internal.StructField('arg_trust_token_query_answerer', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TrustTokenQueryAnswererRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_top_frame_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenData_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenData_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParams', [
      mojo.internal.StructField('arg_any_data_deleted', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec, 'network.mojom.NetworkContext_GetStoredTrustTokenCounts_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec, 'network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParams', [
      mojo.internal.StructField('arg_tokens', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.StoredTrustTokensForIssuerSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec, 'network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec, 'network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParams', [
      mojo.internal.StructField('arg_issuer_redemption_record_map', 0, 0, mojo.internal.Map(mojo.internal.bindings.url.mojom.OriginSpec, mojo.internal.Array(mojo.internal.bindings.network.mojom.ToplevelRedemptionRecordSpec, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec, 'network.mojom.NetworkContext_DeleteStoredTrustTokens_Params', [
      mojo.internal.StructField('arg_issuer', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec, 'network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParams', [
      mojo.internal.StructField('arg_status', 0, 0, mojo.internal.bindings.network.mojom.DeleteStoredTrustTokensStatusSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec, 'network.mojom.NetworkContext_SetBlockTrustTokens_Params', [
      mojo.internal.StructField('arg_block', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec, 'network.mojom.NetworkContext_ClearNetworkingHistoryBetween_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHttpCache_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_filter', 16, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHttpCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec, 'network.mojom.NetworkContext_ComputeHttpCacheSize_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec, 'network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParams', [
      mojo.internal.StructField('arg_is_upper_bound', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_size_or_error', 8, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec, 'network.mojom.NetworkContext_NotifyBrowserIdle_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec, 'network.mojom.NetworkContext_NotifyExternalCacheHit_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_http_method', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkIsolationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_credentials', 32, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHostCache_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHostCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec, 'network.mojom.NetworkContext_ClearHttpAuthCache_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_filter', 16, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec, 'network.mojom.NetworkContext_ClearCorsPreflightCache_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheReports_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheClients_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec, 'network.mojom.NetworkContext_ClearNetworkErrorLogging_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec, 'network.mojom.NetworkContext_ClearDomainReliability_Params', [
      mojo.internal.StructField('arg_filter', 0, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_mode', 8, 0, mojo.internal.bindings.network.mojom.DomainReliabilityClearModeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearDomainReliability_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCache_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_filter', 16, 0, mojo.internal.bindings.network.mojom.ClearDataFilterSpec, null, true, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_Params', [
      mojo.internal.StructField('arg_isolation_key', 0, 0, mojo.internal.bindings.network.mojom.SharedDictionaryIsolationKeySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec, 'network.mojom.NetworkContext_SetDocumentReportingEndpoints_Params', [
      mojo.internal.StructField('arg_reporting_source', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 16, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_endpoints', 24, 0, mojo.internal.Map(mojo.internal.String, mojo.internal.String, false), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec, 'network.mojom.NetworkContext_SendReportsAndRemoveSource_Params', [
      mojo.internal.StructField('arg_reporting_source', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec, 'network.mojom.NetworkContext_QueueReport_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_reporting_source', 24, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 32, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_body', 48, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec, 'network.mojom.NetworkContext_QueueEnterpriseReport_Params', [
      mojo.internal.StructField('arg_type', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_group', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 16, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_body', 24, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec, 'network.mojom.NetworkContext_QueueSignedExchangeReport_Params', [
      mojo.internal.StructField('arg_report', 0, 0, mojo.internal.bindings.network.mojom.SignedExchangeReportSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec, 'network.mojom.NetworkContext_CloseAllConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec, 'network.mojom.NetworkContext_CloseAllConnections_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec, 'network.mojom.NetworkContext_CloseIdleConnections_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec, 'network.mojom.NetworkContext_CloseIdleConnections_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec, 'network.mojom.NetworkContext_SetNetworkConditions_Params', [
      mojo.internal.StructField('arg_throttling_profile_id', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_conditions', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.MatchedNetworkConditionsSpec, false), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec, 'network.mojom.NetworkContext_SetAcceptLanguage_Params', [
      mojo.internal.StructField('arg_new_accept_language', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec, 'network.mojom.NetworkContext_SetEnableReferrers_Params', [
      mojo.internal.StructField('arg_enable_referrers', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateUDPSocket_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.UDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_listener', 4, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateRestrictedUDPSocket_Params', [
      mojo.internal.StructField('arg_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_mode', 8, 0, mojo.internal.bindings.network.mojom.RestrictedUDPSocketModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_receiver', 12, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.RestrictedUDPSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 16, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_params', 24, 0, mojo.internal.bindings.network.mojom.RestrictedUDPSocketParamsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_listener', 32, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.UDPSocketListenerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_allow_multicast', 40, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_local_addr_out', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPServerSocket_Params', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 8, 0, mojo.internal.bindings.network.mojom.TCPServerSocketOptionsSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 16, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 24, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPServerSocketRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_local_addr_out', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPConnectedSocket_Params', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_remote_addr_list', 8, 0, mojo.internal.bindings.network.mojom.AddressListSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_tcp_connected_socket_options', 16, 0, mojo.internal.bindings.network.mojom.TCPConnectedSocketOptionsSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 24, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 32, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPConnectedSocketRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_observer', 36, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.SocketObserverRemote), null, true, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_local_addr', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_peer_addr', 16, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_receive_stream', 24, 0, mojo.internal.OpaqueStruct, null, true, 0, undefined),
      mojo.internal.StructField('arg_send_stream', 32, 0, mojo.internal.OpaqueStruct, null, true, 0, undefined),
    ],
    [[0, 48]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateTCPBoundSocket_Params', [
      mojo.internal.StructField('arg_local_addr', 0, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 8, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_socket', 16, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.TCPBoundSocketRemote), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec, 'network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_local_addr', 8, 0, mojo.internal.bindings.network.mojom.IPEndPointSpec, null, true, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec, 'network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_Params', [
      mojo.internal.StructField('arg_factory', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.ProxyResolvingSocketFactoryRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec, 'network.mojom.NetworkContext_LookUpProxyForURL_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_proxy_lookup_client', 24, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ProxyLookupClientRemote), null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec, 'network.mojom.NetworkContext_ForceReloadProxyConfig_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec, 'network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec, 'network.mojom.NetworkContext_ClearBadProxiesCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec, 'network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec, 'network.mojom.NetworkContext_CreateWebSocket_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_requested_protocols', 8, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_site_for_cookies', 16, 0, mojo.internal.bindings.network.mojom.SiteForCookiesSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_storage_access_api_status', 24, 0, mojo.internal.bindings.network.mojom.StorageAccessApiStatusSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_process_id', 28, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_isolation_info', 32, 0, mojo.internal.bindings.network.mojom.IsolationInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_additional_headers', 40, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.HttpHeaderSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 48, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_client_security_state', 56, 0, mojo.internal.bindings.network.mojom.ClientSecurityStateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_options', 64, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 72, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_handshake_client', 80, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebSocketHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_url_loader_network_observer', 88, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_auth_handler', 96, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebSocketAuthenticationHandlerRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_header_client', 104, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.TrustedHeaderClientRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_throttling_profile_id', 112, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, true, 0, undefined),
    ],
    [[0, 128]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec, 'network.mojom.NetworkContext_CreateWebTransport_Params', [
      mojo.internal.StructField('arg_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_origin', 8, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_fingerprints', 32, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.WebTransportCertificateFingerprintSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_application_protocols', 40, 0, mojo.internal.Array(mojo.internal.String, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_handshake_client', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.WebTransportHandshakeClientRemote), null, false, 0, undefined),
      mojo.internal.StructField('arg_url_loader_network_observer', 56, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.URLLoaderNetworkServiceObserverRemote), null, true, 0, undefined),
      mojo.internal.StructField('arg_client_security_state', 64, 0, mojo.internal.bindings.network.mojom.ClientSecurityStateSpec, null, false, 0, undefined),
    ],
    [[0, 80]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec, 'network.mojom.NetworkContext_CreateNetLogExporter_Params', [
      mojo.internal.StructField('arg_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.NetLogExporterRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec, 'network.mojom.NetworkContext_PreconnectSockets_Params', [
      mojo.internal.StructField('arg_num_streams', 0, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_credentials_mode', 4, 0, mojo.internal.bindings.network.mojom.CredentialsModeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 32, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_keepalive_config', 40, 0, mojo.internal.bindings.network.mojom.ConnectionKeepAliveConfigSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_observer_client', 48, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ConnectionChangeObserverClientRemote), null, true, 0, undefined),
    ],
    [[0, 64]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec, 'network.mojom.NetworkContext_CreateMdnsResponder_Params', [
      mojo.internal.StructField('arg_responder_receiver', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.MdnsResponderRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec, 'network.mojom.NetworkContext_ResolveHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.network.mojom.HostResolverHostSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 16, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_optional_parameters', 32, 0, mojo.internal.bindings.network.mojom.ResolveHostParametersSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_response_client', 40, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ResolveHostClientRemote), null, false, 0, undefined),
    ],
    [[0, 56]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec, 'network.mojom.NetworkContext_CreateHostResolver_Params', [
      mojo.internal.StructField('arg_config_overrides', 0, 0, mojo.internal.bindings.network.mojom.DnsConfigOverridesSpec, null, true, 0, undefined),
      mojo.internal.StructField('arg_host_resolver', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.HostResolverRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec, 'network.mojom.NetworkContext_VerifyCert_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_port', 8, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCert_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pkp_bypassed', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cv_result', 8, 0, mojo.internal.bindings.network.mojom.CertVerifyResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec, 'network.mojom.NetworkContext_VerifyCertForSignedExchange_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_host_port', 8, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_pkp_bypassed', 4, 0, mojo.internal.Bool, false, false, 0, undefined),
      mojo.internal.StructField('arg_cv_result', 8, 0, mojo.internal.bindings.network.mojom.CertVerifyResultSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec, 'network.mojom.NetworkContext_Verify2QwacCertBinding_Params', [
      mojo.internal.StructField('arg_binding', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_tls_certificate', 16, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec, 'network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParams', [
      mojo.internal.StructField('arg_verified_cert', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec, 'network.mojom.NetworkContext_AddHSTS_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_expiry', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_include_subdomains', 16, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec, 'network.mojom.NetworkContext_AddHSTS_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec, 'network.mojom.NetworkContext_IsHSTSActiveForHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_is_top_level_nav', 8, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec, 'network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec, 'network.mojom.NetworkContext_GetHSTSState_Params', [
      mojo.internal.StructField('arg_domain', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec, 'network.mojom.NetworkContext_GetHSTSState_ResponseParams', [
      mojo.internal.StructField('arg_state', 0, 0, mojo.internal.bindings.mojo_base.mojom.DictionaryValueSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec, 'network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_Params', [
      mojo.internal.StructField('arg_source_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_allow_patterns', 8, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CorsOriginPatternSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_block_patterns', 16, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.CorsOriginPatternSpec, false), null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec, 'network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec, 'network.mojom.NetworkContext_DeleteDynamicDataForHost_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec, 'network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParams', [
      mojo.internal.StructField('arg_result', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec, 'network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_Params', [
      mojo.internal.StructField('arg_split_auth_cache_by_network_anonymization_key', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec, 'network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec, 'network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParams', [
      mojo.internal.StructField('arg_cache_key', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec, 'network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_Params', [
      mojo.internal.StructField('arg_cache_key', 0, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec, 'network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec, 'network.mojom.NetworkContext_AddAuthCacheEntry_Params', [
      mojo.internal.StructField('arg_challenge', 0, 0, mojo.internal.bindings.network.mojom.AuthChallengeInfoSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_credentials', 24, 0, mojo.internal.bindings.network.mojom.AuthCredentialsSpec, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec, 'network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec, 'network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_Params', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec, 'network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec, 'network.mojom.NetworkContext_VerifyCertificateForTesting_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_hostname', 8, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_ocsp_response', 16, 0, mojo.internal.String, null, false, 0, undefined),
      mojo.internal.StructField('arg_sct_list', 24, 0, mojo.internal.String, null, false, 0, undefined),
    ],
    [[0, 40]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParams', [
      mojo.internal.StructField('arg_error_code', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec, 'network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParams', [
      mojo.internal.StructField('arg_trust_anchor_ids', 0, 0, mojo.internal.Array(mojo.internal.Array(mojo.internal.Uint8, false), false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec, 'network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_Params', [
      mojo.internal.StructField('arg_origin', 0, 0, mojo.internal.bindings.url.mojom.OriginSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_upload_url', 8, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec, 'network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec, 'network.mojom.NetworkContext_AddReportingApiObserver_Params', [
      mojo.internal.StructField('arg_observer', 0, 0, mojo.internal.InterfaceProxy(mojo.internal.bindings.network.mojom.ReportingApiObserverRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParams', [
      mojo.internal.StructField('arg_usage_info', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SharedDictionaryUsageInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryInfo_Params', [
      mojo.internal.StructField('arg_isolation_key', 0, 0, mojo.internal.bindings.network.mojom.SharedDictionaryIsolationKeySpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParams', [
      mojo.internal.StructField('arg_dictionaries', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.SharedDictionaryInfoSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_Params', [
      mojo.internal.StructField('arg_start_time', 0, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_end_time', 8, 0, mojo.internal.bindings.mojo_base.mojom.TimeSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec, 'network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParams', [
      mojo.internal.StructField('arg_origins', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.OriginSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec, 'network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_Params', [
      mojo.internal.StructField('arg_cache_max_size', 0, 0, mojo.internal.Uint64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec, 'network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_Params', [
      mojo.internal.StructField('arg_urls', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.UrlSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_preload_handle', 8, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.PreloadedSharedDictionaryInfoHandleRemote), null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec, 'network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParams', [
      mojo.internal.StructField('arg_value', 0, 0, mojo.internal.Bool, false, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec, 'network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_Params', [
      mojo.internal.StructField('arg_host', 0, 0, mojo.internal.bindings.network.mojom.HostPortPairSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_certificate', 8, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec, 'network.mojom.NetworkContext_FlushMatchingCachedClientCert_Params', [
      mojo.internal.StructField('arg_certificate', 0, 0, mojo.internal.bindings.network.mojom.X509CertificateSpec, null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec, 'network.mojom.NetworkContext_FlushClientCertCache_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec, 'network.mojom.NetworkContext_RevokeNetworkForNonces_Params', [
      mojo.internal.StructField('arg_nonces_to_patterns', 0, 0, mojo.internal.Array(mojo.internal.bindings.network.mojom.NonceAndAllowlistedPatternsSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec, 'network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec, 'network.mojom.NetworkContext_ClearNonces_Params', [
      mojo.internal.StructField('arg_nonces', 0, 0, mojo.internal.Array(mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, false), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec, 'network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_Params', [
      mojo.internal.StructField('arg_exempted_url', 0, 0, mojo.internal.bindings.url.mojom.UrlSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_nonce', 8, 0, mojo.internal.bindings.mojo_base.mojom.UnguessableTokenSpec, null, false, 0, undefined),
    ],
    [[0, 24]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec, 'network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParams', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec, 'network.mojom.NetworkContext_Prefetch_Params', [
      mojo.internal.StructField('arg_request_id', 0, 0, mojo.internal.Int32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_options', 4, 0, mojo.internal.Uint32, 0, false, 0, undefined),
      mojo.internal.StructField('arg_request', 8, 0, mojo.internal.bindings.network.mojom.URLRequestSpec, null, false, 0, undefined),
      mojo.internal.StructField('arg_traffic_annotation', 16, 0, mojo.internal.bindings.network.mojom.MutableNetworkTrafficAnnotationTagSpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec, 'network.mojom.NetworkContext_GetBoundNetworkForTesting_Params', [
    ],
    [[0, 8]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec, 'network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParams', [
      mojo.internal.StructField('arg_bound_network', 0, 0, mojo.internal.Int64, 0, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec, 'network.mojom.NetworkContext_GetDeviceBoundSessionManager_Params', [
      mojo.internal.StructField('arg_device_bound_session_manager', 0, 0, mojo.internal.InterfaceRequest(mojo.internal.bindings.network.mojom.DeviceBoundSessionManagerRemote), null, false, 0, undefined),
    ],
    [[0, 16]]);

mojo.internal.Struct(
    mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec, 'network.mojom.NetworkContext_AddQuicHints_Params', [
      mojo.internal.StructField('arg_origins', 0, 0, mojo.internal.Array(mojo.internal.bindings.url.mojom.SchemeHostPortSpec, false), null, false, 0, undefined),
      mojo.internal.StructField('arg_network_anonymization_key', 8, 0, mojo.internal.bindings.network.mojom.NetworkAnonymizationKeySpec, null, false, 0, undefined),
    ],
    [[0, 32]]);

mojo.internal.bindings.network.mojom.NetworkContextPendingReceiver = class {
  constructor(handle) {
    this.handle = handle;
  }
};

mojo.internal.bindings.network.mojom.NetworkContextRemote = class {
  static get $interfaceName() {
    return 'network.mojom.NetworkContext';
  }

  constructor(handle = undefined) {
    this.proxy = new mojo.internal.interfaceSupport.InterfaceRemoteBase(
      mojo.internal.bindings.network.mojom.NetworkContextPendingReceiver,
      handle);
    this.$ = new mojo.internal.bindings.network.mojom.NetworkContextRemoteCallHandler(this.proxy);
  }

  bindNewPipeAndPassReceiver() {
    return this.proxy.bindNewPipeAndPassReceiver();
  }

  close() {
    this.proxy.close();
  }
  setClient(arg_client) {
    return this.$.setClient(arg_client);
  }
  createURLLoaderFactory(arg_url_loader_factory, arg_params) {
    return this.$.createURLLoaderFactory(arg_url_loader_factory, arg_params);
  }
  resetURLLoaderFactories() {
    return this.$.resetURLLoaderFactories();
  }
  getViaObliviousHttp(arg_request, arg_client) {
    return this.$.getViaObliviousHttp(arg_request, arg_client);
  }
  getCookieManager(arg_cookie_manager) {
    return this.$.getCookieManager(arg_cookie_manager);
  }
  getRestrictedCookieManager(arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer) {
    return this.$.getRestrictedCookieManager(arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer);
  }
  getTrustTokenQueryAnswerer(arg_trust_token_query_answerer, arg_top_frame_origin) {
    return this.$.getTrustTokenQueryAnswerer(arg_trust_token_query_answerer, arg_top_frame_origin);
  }
  clearTrustTokenData(arg_filter) {
    return this.$.clearTrustTokenData(arg_filter);
  }
  clearTrustTokenSessionOnlyData() {
    return this.$.clearTrustTokenSessionOnlyData();
  }
  getStoredTrustTokenCounts() {
    return this.$.getStoredTrustTokenCounts();
  }
  getPrivateStateTokenRedemptionRecords() {
    return this.$.getPrivateStateTokenRedemptionRecords();
  }
  deleteStoredTrustTokens(arg_issuer) {
    return this.$.deleteStoredTrustTokens(arg_issuer);
  }
  setBlockTrustTokens(arg_block) {
    return this.$.setBlockTrustTokens(arg_block);
  }
  clearNetworkingHistoryBetween(arg_start_time, arg_end_time) {
    return this.$.clearNetworkingHistoryBetween(arg_start_time, arg_end_time);
  }
  clearHttpCache(arg_start_time, arg_end_time, arg_filter) {
    return this.$.clearHttpCache(arg_start_time, arg_end_time, arg_filter);
  }
  computeHttpCacheSize(arg_start_time, arg_end_time) {
    return this.$.computeHttpCacheSize(arg_start_time, arg_end_time);
  }
  notifyBrowserIdle() {
    return this.$.notifyBrowserIdle();
  }
  notifyExternalCacheHit(arg_url, arg_http_method, arg_key, arg_include_credentials) {
    return this.$.notifyExternalCacheHit(arg_url, arg_http_method, arg_key, arg_include_credentials);
  }
  clearHostCache(arg_filter) {
    return this.$.clearHostCache(arg_filter);
  }
  clearHttpAuthCache(arg_start_time, arg_end_time, arg_filter) {
    return this.$.clearHttpAuthCache(arg_start_time, arg_end_time, arg_filter);
  }
  clearCorsPreflightCache(arg_filter) {
    return this.$.clearCorsPreflightCache(arg_filter);
  }
  clearReportingCacheReports(arg_filter) {
    return this.$.clearReportingCacheReports(arg_filter);
  }
  clearReportingCacheClients(arg_filter) {
    return this.$.clearReportingCacheClients(arg_filter);
  }
  clearNetworkErrorLogging(arg_filter) {
    return this.$.clearNetworkErrorLogging(arg_filter);
  }
  clearDomainReliability(arg_filter, arg_mode) {
    return this.$.clearDomainReliability(arg_filter, arg_mode);
  }
  clearSharedDictionaryCache(arg_start_time, arg_end_time, arg_filter) {
    return this.$.clearSharedDictionaryCache(arg_start_time, arg_end_time, arg_filter);
  }
  clearSharedDictionaryCacheForIsolationKey(arg_isolation_key) {
    return this.$.clearSharedDictionaryCacheForIsolationKey(arg_isolation_key);
  }
  setDocumentReportingEndpoints(arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints) {
    return this.$.setDocumentReportingEndpoints(arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints);
  }
  sendReportsAndRemoveSource(arg_reporting_source) {
    return this.$.sendReportsAndRemoveSource(arg_reporting_source);
  }
  queueReport(arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body) {
    return this.$.queueReport(arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body);
  }
  queueEnterpriseReport(arg_type, arg_group, arg_url, arg_body) {
    return this.$.queueEnterpriseReport(arg_type, arg_group, arg_url, arg_body);
  }
  queueSignedExchangeReport(arg_report, arg_network_anonymization_key) {
    return this.$.queueSignedExchangeReport(arg_report, arg_network_anonymization_key);
  }
  closeAllConnections() {
    return this.$.closeAllConnections();
  }
  closeIdleConnections() {
    return this.$.closeIdleConnections();
  }
  setNetworkConditions(arg_throttling_profile_id, arg_conditions) {
    return this.$.setNetworkConditions(arg_throttling_profile_id, arg_conditions);
  }
  setAcceptLanguage(arg_new_accept_language) {
    return this.$.setAcceptLanguage(arg_new_accept_language);
  }
  setEnableReferrers(arg_enable_referrers) {
    return this.$.setEnableReferrers(arg_enable_referrers);
  }
  createUDPSocket(arg_receiver, arg_listener) {
    return this.$.createUDPSocket(arg_receiver, arg_listener);
  }
  createRestrictedUDPSocket(arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast) {
    return this.$.createRestrictedUDPSocket(arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast);
  }
  createTCPServerSocket(arg_local_addr, arg_options, arg_traffic_annotation, arg_socket) {
    return this.$.createTCPServerSocket(arg_local_addr, arg_options, arg_traffic_annotation, arg_socket);
  }
  createTCPConnectedSocket(arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer) {
    return this.$.createTCPConnectedSocket(arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer);
  }
  createTCPBoundSocket(arg_local_addr, arg_traffic_annotation, arg_socket) {
    return this.$.createTCPBoundSocket(arg_local_addr, arg_traffic_annotation, arg_socket);
  }
  createProxyResolvingSocketFactory(arg_factory) {
    return this.$.createProxyResolvingSocketFactory(arg_factory);
  }
  lookUpProxyForURL(arg_url, arg_network_anonymization_key, arg_proxy_lookup_client) {
    return this.$.lookUpProxyForURL(arg_url, arg_network_anonymization_key, arg_proxy_lookup_client);
  }
  forceReloadProxyConfig() {
    return this.$.forceReloadProxyConfig();
  }
  clearBadProxiesCache() {
    return this.$.clearBadProxiesCache();
  }
  createWebSocket(arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id) {
    return this.$.createWebSocket(arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id);
  }
  createWebTransport(arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state) {
    return this.$.createWebTransport(arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state);
  }
  createNetLogExporter(arg_receiver) {
    return this.$.createNetLogExporter(arg_receiver);
  }
  preconnectSockets(arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client) {
    return this.$.preconnectSockets(arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client);
  }
  createMdnsResponder(arg_responder_receiver) {
    return this.$.createMdnsResponder(arg_responder_receiver);
  }
  resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client) {
    return this.$.resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client);
  }
  createHostResolver(arg_config_overrides, arg_host_resolver) {
    return this.$.createHostResolver(arg_config_overrides, arg_host_resolver);
  }
  verifyCert(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.$.verifyCert(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list);
  }
  verifyCertForSignedExchange(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.$.verifyCertForSignedExchange(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list);
  }
  verify2QwacCertBinding(arg_binding, arg_hostname, arg_tls_certificate) {
    return this.$.verify2QwacCertBinding(arg_binding, arg_hostname, arg_tls_certificate);
  }
  addHSTS(arg_host, arg_expiry, arg_include_subdomains) {
    return this.$.addHSTS(arg_host, arg_expiry, arg_include_subdomains);
  }
  isHSTSActiveForHost(arg_host, arg_is_top_level_nav) {
    return this.$.isHSTSActiveForHost(arg_host, arg_is_top_level_nav);
  }
  getHSTSState(arg_domain) {
    return this.$.getHSTSState(arg_domain);
  }
  setCorsOriginAccessListsForOrigin(arg_source_origin, arg_allow_patterns, arg_block_patterns) {
    return this.$.setCorsOriginAccessListsForOrigin(arg_source_origin, arg_allow_patterns, arg_block_patterns);
  }
  deleteDynamicDataForHost(arg_host) {
    return this.$.deleteDynamicDataForHost(arg_host);
  }
  setSplitAuthCacheByNetworkAnonymizationKey(arg_split_auth_cache_by_network_anonymization_key) {
    return this.$.setSplitAuthCacheByNetworkAnonymizationKey(arg_split_auth_cache_by_network_anonymization_key);
  }
  saveHttpAuthCacheProxyEntries() {
    return this.$.saveHttpAuthCacheProxyEntries();
  }
  loadHttpAuthCacheProxyEntries(arg_cache_key) {
    return this.$.loadHttpAuthCacheProxyEntries(arg_cache_key);
  }
  addAuthCacheEntry(arg_challenge, arg_network_anonymization_key, arg_credentials) {
    return this.$.addAuthCacheEntry(arg_challenge, arg_network_anonymization_key, arg_credentials);
  }
  setCorsNonWildcardRequestHeadersSupport(arg_value) {
    return this.$.setCorsNonWildcardRequestHeadersSupport(arg_value);
  }
  enableStaticKeyPinningForTesting() {
    return this.$.enableStaticKeyPinningForTesting();
  }
  verifyCertificateForTesting(arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list) {
    return this.$.verifyCertificateForTesting(arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list);
  }
  getTrustAnchorIDsForTesting() {
    return this.$.getTrustAnchorIDsForTesting();
  }
  addDomainReliabilityContextForTesting(arg_origin, arg_upload_url) {
    return this.$.addDomainReliabilityContextForTesting(arg_origin, arg_upload_url);
  }
  forceDomainReliabilityUploadsForTesting() {
    return this.$.forceDomainReliabilityUploadsForTesting();
  }
  addReportingApiObserver(arg_observer) {
    return this.$.addReportingApiObserver(arg_observer);
  }
  getSharedDictionaryUsageInfo() {
    return this.$.getSharedDictionaryUsageInfo();
  }
  getSharedDictionaryInfo(arg_isolation_key) {
    return this.$.getSharedDictionaryInfo(arg_isolation_key);
  }
  getSharedDictionaryOriginsBetween(arg_start_time, arg_end_time) {
    return this.$.getSharedDictionaryOriginsBetween(arg_start_time, arg_end_time);
  }
  setSharedDictionaryCacheMaxSize(arg_cache_max_size) {
    return this.$.setSharedDictionaryCacheMaxSize(arg_cache_max_size);
  }
  preloadSharedDictionaryInfoForDocument(arg_urls, arg_preload_handle) {
    return this.$.preloadSharedDictionaryInfoForDocument(arg_urls, arg_preload_handle);
  }
  hasPreloadedSharedDictionaryInfoForTesting() {
    return this.$.hasPreloadedSharedDictionaryInfoForTesting();
  }
  flushCachedClientCertIfNeeded(arg_host, arg_certificate) {
    return this.$.flushCachedClientCertIfNeeded(arg_host, arg_certificate);
  }
  flushMatchingCachedClientCert(arg_certificate) {
    return this.$.flushMatchingCachedClientCert(arg_certificate);
  }
  flushClientCertCache() {
    return this.$.flushClientCertCache();
  }
  revokeNetworkForNonces(arg_nonces_to_patterns) {
    return this.$.revokeNetworkForNonces(arg_nonces_to_patterns);
  }
  clearNonces(arg_nonces) {
    return this.$.clearNonces(arg_nonces);
  }
  exemptUrlFromNetworkRevocationForNonce(arg_exempted_url, arg_nonce) {
    return this.$.exemptUrlFromNetworkRevocationForNonce(arg_exempted_url, arg_nonce);
  }
  prefetch(arg_request_id, arg_options, arg_request, arg_traffic_annotation) {
    return this.$.prefetch(arg_request_id, arg_options, arg_request, arg_traffic_annotation);
  }
  getBoundNetworkForTesting() {
    return this.$.getBoundNetworkForTesting();
  }
  getDeviceBoundSessionManager(arg_device_bound_session_manager) {
    return this.$.getDeviceBoundSessionManager(arg_device_bound_session_manager);
  }
  addQuicHints(arg_origins, arg_network_anonymization_key) {
    return this.$.addQuicHints(arg_origins, arg_network_anonymization_key);
  }
};

mojo.internal.bindings.network.mojom.NetworkContextRemoteCallHandler = class {
  constructor(proxy) {
    this.proxy = proxy;
    this.ordinals = window.mojoScrambler.getOrdinals('network.mojom.NetworkContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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

  setClient(arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[0],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec,
      null,
      [arg_client],
      false);
  }

  createURLLoaderFactory(arg_url_loader_factory, arg_params) {
    return this.proxy.sendMessage(
      this.ordinals[1],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec,
      null,
      [arg_url_loader_factory, arg_params],
      false);
  }

  resetURLLoaderFactories() {
    return this.proxy.sendMessage(
      this.ordinals[2],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec,
      null,
      [],
      false);
  }

  getViaObliviousHttp(arg_request, arg_client) {
    return this.proxy.sendMessage(
      this.ordinals[3],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec,
      null,
      [arg_request, arg_client],
      false);
  }

  getCookieManager(arg_cookie_manager) {
    return this.proxy.sendMessage(
      this.ordinals[4],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec,
      null,
      [arg_cookie_manager],
      false);
  }

  getRestrictedCookieManager(arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer) {
    return this.proxy.sendMessage(
      this.ordinals[5],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec,
      null,
      [arg_restricted_cookie_manager, arg_role, arg_origin, arg_isolation_info, arg_cookie_setting_overrides, arg_devtools_cookie_setting_overrides, arg_cookie_observer],
      false);
  }

  getTrustTokenQueryAnswerer(arg_trust_token_query_answerer, arg_top_frame_origin) {
    return this.proxy.sendMessage(
      this.ordinals[6],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec,
      null,
      [arg_trust_token_query_answerer, arg_top_frame_origin],
      false);
  }

  clearTrustTokenData(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[7],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearTrustTokenSessionOnlyData() {
    return this.proxy.sendMessage(
      this.ordinals[8],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec,
      [],
      false);
  }

  getStoredTrustTokenCounts() {
    return this.proxy.sendMessage(
      this.ordinals[9],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec,
      [],
      false);
  }

  getPrivateStateTokenRedemptionRecords() {
    return this.proxy.sendMessage(
      this.ordinals[10],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec,
      [],
      false);
  }

  deleteStoredTrustTokens(arg_issuer) {
    return this.proxy.sendMessage(
      this.ordinals[11],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec,
      [arg_issuer],
      false);
  }

  setBlockTrustTokens(arg_block) {
    return this.proxy.sendMessage(
      this.ordinals[12],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec,
      null,
      [arg_block],
      false);
  }

  clearNetworkingHistoryBetween(arg_start_time, arg_end_time) {
    return this.proxy.sendMessage(
      this.ordinals[13],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec,
      [arg_start_time, arg_end_time],
      false);
  }

  clearHttpCache(arg_start_time, arg_end_time, arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[14],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec,
      [arg_start_time, arg_end_time, arg_filter],
      false);
  }

  computeHttpCacheSize(arg_start_time, arg_end_time) {
    return this.proxy.sendMessage(
      this.ordinals[15],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec,
      [arg_start_time, arg_end_time],
      false);
  }

  notifyBrowserIdle() {
    return this.proxy.sendMessage(
      this.ordinals[16],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec,
      null,
      [],
      false);
  }

  notifyExternalCacheHit(arg_url, arg_http_method, arg_key, arg_include_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[17],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec,
      null,
      [arg_url, arg_http_method, arg_key, arg_include_credentials],
      false);
  }

  clearHostCache(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[18],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearHttpAuthCache(arg_start_time, arg_end_time, arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[19],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec,
      [arg_start_time, arg_end_time, arg_filter],
      false);
  }

  clearCorsPreflightCache(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[20],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearReportingCacheReports(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[21],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearReportingCacheClients(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[22],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearNetworkErrorLogging(arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[23],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec,
      [arg_filter],
      false);
  }

  clearDomainReliability(arg_filter, arg_mode) {
    return this.proxy.sendMessage(
      this.ordinals[24],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec,
      [arg_filter, arg_mode],
      false);
  }

  clearSharedDictionaryCache(arg_start_time, arg_end_time, arg_filter) {
    return this.proxy.sendMessage(
      this.ordinals[25],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec,
      [arg_start_time, arg_end_time, arg_filter],
      false);
  }

  clearSharedDictionaryCacheForIsolationKey(arg_isolation_key) {
    return this.proxy.sendMessage(
      this.ordinals[26],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec,
      [arg_isolation_key],
      false);
  }

  setDocumentReportingEndpoints(arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints) {
    return this.proxy.sendMessage(
      this.ordinals[27],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec,
      null,
      [arg_reporting_source, arg_origin, arg_isolation_info, arg_endpoints],
      false);
  }

  sendReportsAndRemoveSource(arg_reporting_source) {
    return this.proxy.sendMessage(
      this.ordinals[28],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec,
      null,
      [arg_reporting_source],
      false);
  }

  queueReport(arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body) {
    return this.proxy.sendMessage(
      this.ordinals[29],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec,
      null,
      [arg_type, arg_group, arg_url, arg_reporting_source, arg_network_anonymization_key, arg_body],
      false);
  }

  queueEnterpriseReport(arg_type, arg_group, arg_url, arg_body) {
    return this.proxy.sendMessage(
      this.ordinals[30],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec,
      null,
      [arg_type, arg_group, arg_url, arg_body],
      false);
  }

  queueSignedExchangeReport(arg_report, arg_network_anonymization_key) {
    return this.proxy.sendMessage(
      this.ordinals[31],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec,
      null,
      [arg_report, arg_network_anonymization_key],
      false);
  }

  closeAllConnections() {
    return this.proxy.sendMessage(
      this.ordinals[32],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec,
      [],
      false);
  }

  closeIdleConnections() {
    return this.proxy.sendMessage(
      this.ordinals[33],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec,
      [],
      false);
  }

  setNetworkConditions(arg_throttling_profile_id, arg_conditions) {
    return this.proxy.sendMessage(
      this.ordinals[34],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec,
      null,
      [arg_throttling_profile_id, arg_conditions],
      false);
  }

  setAcceptLanguage(arg_new_accept_language) {
    return this.proxy.sendMessage(
      this.ordinals[35],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec,
      null,
      [arg_new_accept_language],
      false);
  }

  setEnableReferrers(arg_enable_referrers) {
    return this.proxy.sendMessage(
      this.ordinals[36],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec,
      null,
      [arg_enable_referrers],
      false);
  }

  createUDPSocket(arg_receiver, arg_listener) {
    return this.proxy.sendMessage(
      this.ordinals[37],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec,
      null,
      [arg_receiver, arg_listener],
      false);
  }

  createRestrictedUDPSocket(arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast) {
    return this.proxy.sendMessage(
      this.ordinals[38],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec,
      [arg_addr, arg_mode, arg_traffic_annotation, arg_params, arg_receiver, arg_listener, arg_allow_multicast],
      false);
  }

  createTCPServerSocket(arg_local_addr, arg_options, arg_traffic_annotation, arg_socket) {
    return this.proxy.sendMessage(
      this.ordinals[39],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec,
      [arg_local_addr, arg_options, arg_traffic_annotation, arg_socket],
      false);
  }

  createTCPConnectedSocket(arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[40],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec,
      [arg_local_addr, arg_remote_addr_list, arg_tcp_connected_socket_options, arg_traffic_annotation, arg_socket, arg_observer],
      false);
  }

  createTCPBoundSocket(arg_local_addr, arg_traffic_annotation, arg_socket) {
    return this.proxy.sendMessage(
      this.ordinals[41],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec,
      [arg_local_addr, arg_traffic_annotation, arg_socket],
      false);
  }

  createProxyResolvingSocketFactory(arg_factory) {
    return this.proxy.sendMessage(
      this.ordinals[42],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec,
      null,
      [arg_factory],
      false);
  }

  lookUpProxyForURL(arg_url, arg_network_anonymization_key, arg_proxy_lookup_client) {
    return this.proxy.sendMessage(
      this.ordinals[43],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec,
      null,
      [arg_url, arg_network_anonymization_key, arg_proxy_lookup_client],
      false);
  }

  forceReloadProxyConfig() {
    return this.proxy.sendMessage(
      this.ordinals[44],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec,
      [],
      false);
  }

  clearBadProxiesCache() {
    return this.proxy.sendMessage(
      this.ordinals[45],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec,
      [],
      false);
  }

  createWebSocket(arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id) {
    return this.proxy.sendMessage(
      this.ordinals[46],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec,
      null,
      [arg_url, arg_requested_protocols, arg_site_for_cookies, arg_storage_access_api_status, arg_isolation_info, arg_additional_headers, arg_process_id, arg_origin, arg_client_security_state, arg_options, arg_traffic_annotation, arg_handshake_client, arg_url_loader_network_observer, arg_auth_handler, arg_header_client, arg_throttling_profile_id],
      false);
  }

  createWebTransport(arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state) {
    return this.proxy.sendMessage(
      this.ordinals[47],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec,
      null,
      [arg_url, arg_origin, arg_network_anonymization_key, arg_fingerprints, arg_application_protocols, arg_handshake_client, arg_url_loader_network_observer, arg_client_security_state],
      false);
  }

  createNetLogExporter(arg_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[48],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec,
      null,
      [arg_receiver],
      false);
  }

  preconnectSockets(arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client) {
    return this.proxy.sendMessage(
      this.ordinals[49],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec,
      null,
      [arg_num_streams, arg_url, arg_credentials_mode, arg_network_anonymization_key, arg_traffic_annotation, arg_keepalive_config, arg_observer_client],
      false);
  }

  createMdnsResponder(arg_responder_receiver) {
    return this.proxy.sendMessage(
      this.ordinals[50],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec,
      null,
      [arg_responder_receiver],
      false);
  }

  resolveHost(arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client) {
    return this.proxy.sendMessage(
      this.ordinals[51],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec,
      null,
      [arg_host, arg_network_anonymization_key, arg_optional_parameters, arg_response_client],
      false);
  }

  createHostResolver(arg_config_overrides, arg_host_resolver) {
    return this.proxy.sendMessage(
      this.ordinals[52],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec,
      null,
      [arg_config_overrides, arg_host_resolver],
      false);
  }

  verifyCert(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.proxy.sendMessage(
      this.ordinals[53],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec,
      [arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list],
      false);
  }

  verifyCertForSignedExchange(arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list) {
    return this.proxy.sendMessage(
      this.ordinals[54],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec,
      [arg_certificate, arg_host_port, arg_ocsp_response, arg_sct_list],
      false);
  }

  verify2QwacCertBinding(arg_binding, arg_hostname, arg_tls_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[55],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec,
      [arg_binding, arg_hostname, arg_tls_certificate],
      false);
  }

  addHSTS(arg_host, arg_expiry, arg_include_subdomains) {
    return this.proxy.sendMessage(
      this.ordinals[56],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec,
      [arg_host, arg_expiry, arg_include_subdomains],
      false);
  }

  isHSTSActiveForHost(arg_host, arg_is_top_level_nav) {
    return this.proxy.sendMessage(
      this.ordinals[57],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec,
      [arg_host, arg_is_top_level_nav],
      false);
  }

  getHSTSState(arg_domain) {
    return this.proxy.sendMessage(
      this.ordinals[58],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec,
      [arg_domain],
      false);
  }

  setCorsOriginAccessListsForOrigin(arg_source_origin, arg_allow_patterns, arg_block_patterns) {
    return this.proxy.sendMessage(
      this.ordinals[59],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec,
      [arg_source_origin, arg_allow_patterns, arg_block_patterns],
      false);
  }

  deleteDynamicDataForHost(arg_host) {
    return this.proxy.sendMessage(
      this.ordinals[60],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec,
      [arg_host],
      false);
  }

  setSplitAuthCacheByNetworkAnonymizationKey(arg_split_auth_cache_by_network_anonymization_key) {
    return this.proxy.sendMessage(
      this.ordinals[61],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec,
      null,
      [arg_split_auth_cache_by_network_anonymization_key],
      false);
  }

  saveHttpAuthCacheProxyEntries() {
    return this.proxy.sendMessage(
      this.ordinals[62],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec,
      [],
      false);
  }

  loadHttpAuthCacheProxyEntries(arg_cache_key) {
    return this.proxy.sendMessage(
      this.ordinals[63],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec,
      [arg_cache_key],
      false);
  }

  addAuthCacheEntry(arg_challenge, arg_network_anonymization_key, arg_credentials) {
    return this.proxy.sendMessage(
      this.ordinals[64],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec,
      [arg_challenge, arg_network_anonymization_key, arg_credentials],
      false);
  }

  setCorsNonWildcardRequestHeadersSupport(arg_value) {
    return this.proxy.sendMessage(
      this.ordinals[65],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec,
      null,
      [arg_value],
      false);
  }

  enableStaticKeyPinningForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[66],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec,
      [],
      false);
  }

  verifyCertificateForTesting(arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list) {
    return this.proxy.sendMessage(
      this.ordinals[67],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec,
      [arg_certificate, arg_hostname, arg_ocsp_response, arg_sct_list],
      false);
  }

  getTrustAnchorIDsForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[68],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec,
      [],
      false);
  }

  addDomainReliabilityContextForTesting(arg_origin, arg_upload_url) {
    return this.proxy.sendMessage(
      this.ordinals[69],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec,
      [arg_origin, arg_upload_url],
      false);
  }

  forceDomainReliabilityUploadsForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[70],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec,
      [],
      false);
  }

  addReportingApiObserver(arg_observer) {
    return this.proxy.sendMessage(
      this.ordinals[71],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec,
      null,
      [arg_observer],
      false);
  }

  getSharedDictionaryUsageInfo() {
    return this.proxy.sendMessage(
      this.ordinals[72],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec,
      [],
      false);
  }

  getSharedDictionaryInfo(arg_isolation_key) {
    return this.proxy.sendMessage(
      this.ordinals[73],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec,
      [arg_isolation_key],
      false);
  }

  getSharedDictionaryOriginsBetween(arg_start_time, arg_end_time) {
    return this.proxy.sendMessage(
      this.ordinals[74],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec,
      [arg_start_time, arg_end_time],
      false);
  }

  setSharedDictionaryCacheMaxSize(arg_cache_max_size) {
    return this.proxy.sendMessage(
      this.ordinals[75],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec,
      null,
      [arg_cache_max_size],
      false);
  }

  preloadSharedDictionaryInfoForDocument(arg_urls, arg_preload_handle) {
    return this.proxy.sendMessage(
      this.ordinals[76],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec,
      null,
      [arg_urls, arg_preload_handle],
      false);
  }

  hasPreloadedSharedDictionaryInfoForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[77],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec,
      [],
      false);
  }

  flushCachedClientCertIfNeeded(arg_host, arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[78],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec,
      null,
      [arg_host, arg_certificate],
      false);
  }

  flushMatchingCachedClientCert(arg_certificate) {
    return this.proxy.sendMessage(
      this.ordinals[79],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec,
      null,
      [arg_certificate],
      false);
  }

  flushClientCertCache() {
    return this.proxy.sendMessage(
      this.ordinals[80],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec,
      null,
      [],
      false);
  }

  revokeNetworkForNonces(arg_nonces_to_patterns) {
    return this.proxy.sendMessage(
      this.ordinals[81],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec,
      [arg_nonces_to_patterns],
      false);
  }

  clearNonces(arg_nonces) {
    return this.proxy.sendMessage(
      this.ordinals[82],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec,
      null,
      [arg_nonces],
      false);
  }

  exemptUrlFromNetworkRevocationForNonce(arg_exempted_url, arg_nonce) {
    return this.proxy.sendMessage(
      this.ordinals[83],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec,
      [arg_exempted_url, arg_nonce],
      false);
  }

  prefetch(arg_request_id, arg_options, arg_request, arg_traffic_annotation) {
    return this.proxy.sendMessage(
      this.ordinals[84],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec,
      null,
      [arg_request_id, arg_options, arg_request, arg_traffic_annotation],
      false);
  }

  getBoundNetworkForTesting() {
    return this.proxy.sendMessage(
      this.ordinals[85],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec,
      mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec,
      [],
      false);
  }

  getDeviceBoundSessionManager(arg_device_bound_session_manager) {
    return this.proxy.sendMessage(
      this.ordinals[86],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec,
      null,
      [arg_device_bound_session_manager],
      false);
  }

  addQuicHints(arg_origins, arg_network_anonymization_key) {
    return this.proxy.sendMessage(
      this.ordinals[87],  // ordinal
      mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec,
      null,
      [arg_origins, arg_network_anonymization_key],
      false);
  }

};

mojo.internal.bindings.network.mojom.NetworkContext.getRemote = function() {
  let remote = new mojo.internal.bindings.network.mojom.NetworkContextRemote();
  let receiver = remote.bindNewPipeAndPassReceiver();
  mojo.internal.interfaceSupport.bind(
    receiver.handle,
    'network.mojom.NetworkContext',
    'context');
  return remote.$;
};

mojo.internal.bindings.network.mojom.NetworkContextReceiver = class {
  constructor(impl) {
    this.impl = impl;
    this.endpoint = null;
    this.ordinalMap = new Map();
    const ordinals = window.mojoScrambler.getOrdinals('network.mojom.NetworkContext', [
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
      { explicit: null },
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
    this.endpoint.start({ onMessageReceived: (...args) => {
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
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetClient_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setClient');
          const result = this.impl.setClient(params.arg_client);
          break;
        }
        case 1: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateURLLoaderFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createURLLoaderFactory');
          const result = this.impl.createURLLoaderFactory(params.arg_url_loader_factory, params.arg_params);
          break;
        }
        case 2: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ResetURLLoaderFactories_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resetURLLoaderFactories');
          const result = this.impl.resetURLLoaderFactories();
          break;
        }
        case 3: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetViaObliviousHttp_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getViaObliviousHttp');
          const result = this.impl.getViaObliviousHttp(params.arg_request, params.arg_client);
          break;
        }
        case 4: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetCookieManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getCookieManager');
          const result = this.impl.getCookieManager(params.arg_cookie_manager);
          break;
        }
        case 5: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetRestrictedCookieManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getRestrictedCookieManager');
          const result = this.impl.getRestrictedCookieManager(params.arg_restricted_cookie_manager, params.arg_role, params.arg_origin, params.arg_isolation_info, params.arg_cookie_setting_overrides, params.arg_devtools_cookie_setting_overrides, params.arg_cookie_observer);
          break;
        }
        case 6: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetTrustTokenQueryAnswerer_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTrustTokenQueryAnswerer');
          const result = this.impl.getTrustTokenQueryAnswerer(params.arg_trust_token_query_answerer, params.arg_top_frame_origin);
          break;
        }
        case 7: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTrustTokenData');
          const result = this.impl.clearTrustTokenData(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenData_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearTrustTokenData FAILED:', e));
          }
          break;
        }
        case 8: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearTrustTokenSessionOnlyData');
          const result = this.impl.clearTrustTokenSessionOnlyData();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearTrustTokenSessionOnlyData_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearTrustTokenSessionOnlyData FAILED:', e));
          }
          break;
        }
        case 9: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getStoredTrustTokenCounts');
          const result = this.impl.getStoredTrustTokenCounts();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetStoredTrustTokenCounts_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetStoredTrustTokenCounts FAILED:', e));
          }
          break;
        }
        case 10: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getPrivateStateTokenRedemptionRecords');
          const result = this.impl.getPrivateStateTokenRedemptionRecords();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetPrivateStateTokenRedemptionRecords_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetPrivateStateTokenRedemptionRecords FAILED:', e));
          }
          break;
        }
        case 11: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteStoredTrustTokens');
          const result = this.impl.deleteStoredTrustTokens(params.arg_issuer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_DeleteStoredTrustTokens_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteStoredTrustTokens FAILED:', e));
          }
          break;
        }
        case 12: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetBlockTrustTokens_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setBlockTrustTokens');
          const result = this.impl.setBlockTrustTokens(params.arg_block);
          break;
        }
        case 13: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNetworkingHistoryBetween');
          const result = this.impl.clearNetworkingHistoryBetween(params.arg_start_time, params.arg_end_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkingHistoryBetween_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearNetworkingHistoryBetween FAILED:', e));
          }
          break;
        }
        case 14: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearHttpCache');
          const result = this.impl.clearHttpCache(params.arg_start_time, params.arg_end_time, params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpCache_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearHttpCache FAILED:', e));
          }
          break;
        }
        case 15: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.computeHttpCacheSize');
          const result = this.impl.computeHttpCacheSize(params.arg_start_time, params.arg_end_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ComputeHttpCacheSize_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ComputeHttpCacheSize FAILED:', e));
          }
          break;
        }
        case 16: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_NotifyBrowserIdle_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyBrowserIdle');
          const result = this.impl.notifyBrowserIdle();
          break;
        }
        case 17: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_NotifyExternalCacheHit_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.notifyExternalCacheHit');
          const result = this.impl.notifyExternalCacheHit(params.arg_url, params.arg_http_method, params.arg_key, params.arg_include_credentials);
          break;
        }
        case 18: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearHostCache');
          const result = this.impl.clearHostCache(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearHostCache_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearHostCache FAILED:', e));
          }
          break;
        }
        case 19: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearHttpAuthCache');
          const result = this.impl.clearHttpAuthCache(params.arg_start_time, params.arg_end_time, params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearHttpAuthCache_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearHttpAuthCache FAILED:', e));
          }
          break;
        }
        case 20: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearCorsPreflightCache');
          const result = this.impl.clearCorsPreflightCache(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearCorsPreflightCache_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearCorsPreflightCache FAILED:', e));
          }
          break;
        }
        case 21: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearReportingCacheReports');
          const result = this.impl.clearReportingCacheReports(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheReports_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearReportingCacheReports FAILED:', e));
          }
          break;
        }
        case 22: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearReportingCacheClients');
          const result = this.impl.clearReportingCacheClients(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearReportingCacheClients_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearReportingCacheClients FAILED:', e));
          }
          break;
        }
        case 23: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNetworkErrorLogging');
          const result = this.impl.clearNetworkErrorLogging(params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearNetworkErrorLogging_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearNetworkErrorLogging FAILED:', e));
          }
          break;
        }
        case 24: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearDomainReliability');
          const result = this.impl.clearDomainReliability(params.arg_filter, params.arg_mode);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearDomainReliability_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearDomainReliability FAILED:', e));
          }
          break;
        }
        case 25: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearSharedDictionaryCache');
          const result = this.impl.clearSharedDictionaryCache(params.arg_start_time, params.arg_end_time, params.arg_filter);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCache_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearSharedDictionaryCache FAILED:', e));
          }
          break;
        }
        case 26: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearSharedDictionaryCacheForIsolationKey');
          const result = this.impl.clearSharedDictionaryCacheForIsolationKey(params.arg_isolation_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearSharedDictionaryCacheForIsolationKey_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearSharedDictionaryCacheForIsolationKey FAILED:', e));
          }
          break;
        }
        case 27: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetDocumentReportingEndpoints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setDocumentReportingEndpoints');
          const result = this.impl.setDocumentReportingEndpoints(params.arg_reporting_source, params.arg_origin, params.arg_isolation_info, params.arg_endpoints);
          break;
        }
        case 28: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SendReportsAndRemoveSource_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.sendReportsAndRemoveSource');
          const result = this.impl.sendReportsAndRemoveSource(params.arg_reporting_source);
          break;
        }
        case 29: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueReport');
          const result = this.impl.queueReport(params.arg_type, params.arg_group, params.arg_url, params.arg_reporting_source, params.arg_network_anonymization_key, params.arg_body);
          break;
        }
        case 30: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueEnterpriseReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueEnterpriseReport');
          const result = this.impl.queueEnterpriseReport(params.arg_type, params.arg_group, params.arg_url, params.arg_body);
          break;
        }
        case 31: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_QueueSignedExchangeReport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.queueSignedExchangeReport');
          const result = this.impl.queueSignedExchangeReport(params.arg_report, params.arg_network_anonymization_key);
          break;
        }
        case 32: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeAllConnections');
          const result = this.impl.closeAllConnections();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_CloseAllConnections_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] CloseAllConnections FAILED:', e));
          }
          break;
        }
        case 33: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.closeIdleConnections');
          const result = this.impl.closeIdleConnections();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_CloseIdleConnections_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] CloseIdleConnections FAILED:', e));
          }
          break;
        }
        case 34: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetNetworkConditions_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setNetworkConditions');
          const result = this.impl.setNetworkConditions(params.arg_throttling_profile_id, params.arg_conditions);
          break;
        }
        case 35: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetAcceptLanguage_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setAcceptLanguage');
          const result = this.impl.setAcceptLanguage(params.arg_new_accept_language);
          break;
        }
        case 36: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetEnableReferrers_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setEnableReferrers');
          const result = this.impl.setEnableReferrers(params.arg_enable_referrers);
          break;
        }
        case 37: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateUDPSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createUDPSocket');
          const result = this.impl.createUDPSocket(params.arg_receiver, params.arg_listener);
          break;
        }
        case 38: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createRestrictedUDPSocket');
          const result = this.impl.createRestrictedUDPSocket(params.arg_addr, params.arg_mode, params.arg_traffic_annotation, params.arg_params, params.arg_receiver, params.arg_listener, params.arg_allow_multicast);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_CreateRestrictedUDPSocket_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] CreateRestrictedUDPSocket FAILED:', e));
          }
          break;
        }
        case 39: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTCPServerSocket');
          const result = this.impl.createTCPServerSocket(params.arg_local_addr, params.arg_options, params.arg_traffic_annotation, params.arg_socket);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPServerSocket_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTCPServerSocket FAILED:', e));
          }
          break;
        }
        case 40: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTCPConnectedSocket');
          const result = this.impl.createTCPConnectedSocket(params.arg_local_addr, params.arg_remote_addr_list, params.arg_tcp_connected_socket_options, params.arg_traffic_annotation, params.arg_socket, params.arg_observer);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPConnectedSocket_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTCPConnectedSocket FAILED:', e));
          }
          break;
        }
        case 41: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createTCPBoundSocket');
          const result = this.impl.createTCPBoundSocket(params.arg_local_addr, params.arg_traffic_annotation, params.arg_socket);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_CreateTCPBoundSocket_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] CreateTCPBoundSocket FAILED:', e));
          }
          break;
        }
        case 42: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateProxyResolvingSocketFactory_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createProxyResolvingSocketFactory');
          const result = this.impl.createProxyResolvingSocketFactory(params.arg_factory);
          break;
        }
        case 43: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LookUpProxyForURL_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.lookUpProxyForURL');
          const result = this.impl.lookUpProxyForURL(params.arg_url, params.arg_network_anonymization_key, params.arg_proxy_lookup_client);
          break;
        }
        case 44: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceReloadProxyConfig');
          const result = this.impl.forceReloadProxyConfig();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ForceReloadProxyConfig_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ForceReloadProxyConfig FAILED:', e));
          }
          break;
        }
        case 45: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearBadProxiesCache');
          const result = this.impl.clearBadProxiesCache();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ClearBadProxiesCache_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ClearBadProxiesCache FAILED:', e));
          }
          break;
        }
        case 46: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateWebSocket_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebSocket');
          const result = this.impl.createWebSocket(params.arg_url, params.arg_requested_protocols, params.arg_site_for_cookies, params.arg_storage_access_api_status, params.arg_isolation_info, params.arg_additional_headers, params.arg_process_id, params.arg_origin, params.arg_client_security_state, params.arg_options, params.arg_traffic_annotation, params.arg_handshake_client, params.arg_url_loader_network_observer, params.arg_auth_handler, params.arg_header_client, params.arg_throttling_profile_id);
          break;
        }
        case 47: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateWebTransport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createWebTransport');
          const result = this.impl.createWebTransport(params.arg_url, params.arg_origin, params.arg_network_anonymization_key, params.arg_fingerprints, params.arg_application_protocols, params.arg_handshake_client, params.arg_url_loader_network_observer, params.arg_client_security_state);
          break;
        }
        case 48: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateNetLogExporter_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createNetLogExporter');
          const result = this.impl.createNetLogExporter(params.arg_receiver);
          break;
        }
        case 49: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_PreconnectSockets_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preconnectSockets');
          const result = this.impl.preconnectSockets(params.arg_num_streams, params.arg_url, params.arg_credentials_mode, params.arg_network_anonymization_key, params.arg_traffic_annotation, params.arg_keepalive_config, params.arg_observer_client);
          break;
        }
        case 50: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateMdnsResponder_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createMdnsResponder');
          const result = this.impl.createMdnsResponder(params.arg_responder_receiver);
          break;
        }
        case 51: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ResolveHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.resolveHost');
          const result = this.impl.resolveHost(params.arg_host, params.arg_network_anonymization_key, params.arg_optional_parameters, params.arg_response_client);
          break;
        }
        case 52: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_CreateHostResolver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.createHostResolver');
          const result = this.impl.createHostResolver(params.arg_config_overrides, params.arg_host_resolver);
          break;
        }
        case 53: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verifyCert');
          const result = this.impl.verifyCert(params.arg_certificate, params.arg_host_port, params.arg_ocsp_response, params.arg_sct_list);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_VerifyCert_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] VerifyCert FAILED:', e));
          }
          break;
        }
        case 54: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verifyCertForSignedExchange');
          const result = this.impl.verifyCertForSignedExchange(params.arg_certificate, params.arg_host_port, params.arg_ocsp_response, params.arg_sct_list);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertForSignedExchange_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] VerifyCertForSignedExchange FAILED:', e));
          }
          break;
        }
        case 55: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verify2QwacCertBinding');
          const result = this.impl.verify2QwacCertBinding(params.arg_binding, params.arg_hostname, params.arg_tls_certificate);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_Verify2QwacCertBinding_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] Verify2QwacCertBinding FAILED:', e));
          }
          break;
        }
        case 56: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addHSTS');
          const result = this.impl.addHSTS(params.arg_host, params.arg_expiry, params.arg_include_subdomains);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_AddHSTS_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] AddHSTS FAILED:', e));
          }
          break;
        }
        case 57: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.isHSTSActiveForHost');
          const result = this.impl.isHSTSActiveForHost(params.arg_host, params.arg_is_top_level_nav);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_IsHSTSActiveForHost_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] IsHSTSActiveForHost FAILED:', e));
          }
          break;
        }
        case 58: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getHSTSState');
          const result = this.impl.getHSTSState(params.arg_domain);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetHSTSState_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetHSTSState FAILED:', e));
          }
          break;
        }
        case 59: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCorsOriginAccessListsForOrigin');
          const result = this.impl.setCorsOriginAccessListsForOrigin(params.arg_source_origin, params.arg_allow_patterns, params.arg_block_patterns);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_SetCorsOriginAccessListsForOrigin_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] SetCorsOriginAccessListsForOrigin FAILED:', e));
          }
          break;
        }
        case 60: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.deleteDynamicDataForHost');
          const result = this.impl.deleteDynamicDataForHost(params.arg_host);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_DeleteDynamicDataForHost_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] DeleteDynamicDataForHost FAILED:', e));
          }
          break;
        }
        case 61: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSplitAuthCacheByNetworkAnonymizationKey_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSplitAuthCacheByNetworkAnonymizationKey');
          const result = this.impl.setSplitAuthCacheByNetworkAnonymizationKey(params.arg_split_auth_cache_by_network_anonymization_key);
          break;
        }
        case 62: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.saveHttpAuthCacheProxyEntries');
          const result = this.impl.saveHttpAuthCacheProxyEntries();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_SaveHttpAuthCacheProxyEntries_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] SaveHttpAuthCacheProxyEntries FAILED:', e));
          }
          break;
        }
        case 63: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.loadHttpAuthCacheProxyEntries');
          const result = this.impl.loadHttpAuthCacheProxyEntries(params.arg_cache_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_LoadHttpAuthCacheProxyEntries_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] LoadHttpAuthCacheProxyEntries FAILED:', e));
          }
          break;
        }
        case 64: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addAuthCacheEntry');
          const result = this.impl.addAuthCacheEntry(params.arg_challenge, params.arg_network_anonymization_key, params.arg_credentials);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_AddAuthCacheEntry_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] AddAuthCacheEntry FAILED:', e));
          }
          break;
        }
        case 65: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetCorsNonWildcardRequestHeadersSupport_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setCorsNonWildcardRequestHeadersSupport');
          const result = this.impl.setCorsNonWildcardRequestHeadersSupport(params.arg_value);
          break;
        }
        case 66: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.enableStaticKeyPinningForTesting');
          const result = this.impl.enableStaticKeyPinningForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_EnableStaticKeyPinningForTesting_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] EnableStaticKeyPinningForTesting FAILED:', e));
          }
          break;
        }
        case 67: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.verifyCertificateForTesting');
          const result = this.impl.verifyCertificateForTesting(params.arg_certificate, params.arg_hostname, params.arg_ocsp_response, params.arg_sct_list);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_VerifyCertificateForTesting_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] VerifyCertificateForTesting FAILED:', e));
          }
          break;
        }
        case 68: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getTrustAnchorIDsForTesting');
          const result = this.impl.getTrustAnchorIDsForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetTrustAnchorIDsForTesting_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetTrustAnchorIDsForTesting FAILED:', e));
          }
          break;
        }
        case 69: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addDomainReliabilityContextForTesting');
          const result = this.impl.addDomainReliabilityContextForTesting(params.arg_origin, params.arg_upload_url);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_AddDomainReliabilityContextForTesting_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] AddDomainReliabilityContextForTesting FAILED:', e));
          }
          break;
        }
        case 70: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.forceDomainReliabilityUploadsForTesting');
          const result = this.impl.forceDomainReliabilityUploadsForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ForceDomainReliabilityUploadsForTesting_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ForceDomainReliabilityUploadsForTesting FAILED:', e));
          }
          break;
        }
        case 71: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddReportingApiObserver_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addReportingApiObserver');
          const result = this.impl.addReportingApiObserver(params.arg_observer);
          break;
        }
        case 72: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedDictionaryUsageInfo');
          const result = this.impl.getSharedDictionaryUsageInfo();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryUsageInfo_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetSharedDictionaryUsageInfo FAILED:', e));
          }
          break;
        }
        case 73: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedDictionaryInfo');
          const result = this.impl.getSharedDictionaryInfo(params.arg_isolation_key);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryInfo_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetSharedDictionaryInfo FAILED:', e));
          }
          break;
        }
        case 74: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getSharedDictionaryOriginsBetween');
          const result = this.impl.getSharedDictionaryOriginsBetween(params.arg_start_time, params.arg_end_time);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetSharedDictionaryOriginsBetween_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetSharedDictionaryOriginsBetween FAILED:', e));
          }
          break;
        }
        case 75: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_SetSharedDictionaryCacheMaxSize_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.setSharedDictionaryCacheMaxSize');
          const result = this.impl.setSharedDictionaryCacheMaxSize(params.arg_cache_max_size);
          break;
        }
        case 76: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_PreloadSharedDictionaryInfoForDocument_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.preloadSharedDictionaryInfoForDocument');
          const result = this.impl.preloadSharedDictionaryInfoForDocument(params.arg_urls, params.arg_preload_handle);
          break;
        }
        case 77: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.hasPreloadedSharedDictionaryInfoForTesting');
          const result = this.impl.hasPreloadedSharedDictionaryInfoForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_HasPreloadedSharedDictionaryInfoForTesting_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] HasPreloadedSharedDictionaryInfoForTesting FAILED:', e));
          }
          break;
        }
        case 78: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushCachedClientCertIfNeeded_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushCachedClientCertIfNeeded');
          const result = this.impl.flushCachedClientCertIfNeeded(params.arg_host, params.arg_certificate);
          break;
        }
        case 79: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushMatchingCachedClientCert_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushMatchingCachedClientCert');
          const result = this.impl.flushMatchingCachedClientCert(params.arg_certificate);
          break;
        }
        case 80: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_FlushClientCertCache_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.flushClientCertCache');
          const result = this.impl.flushClientCertCache();
          break;
        }
        case 81: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.revokeNetworkForNonces');
          const result = this.impl.revokeNetworkForNonces(params.arg_nonces_to_patterns);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_RevokeNetworkForNonces_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] RevokeNetworkForNonces FAILED:', e));
          }
          break;
        }
        case 82: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ClearNonces_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.clearNonces');
          const result = this.impl.clearNonces(params.arg_nonces);
          break;
        }
        case 83: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.exemptUrlFromNetworkRevocationForNonce');
          const result = this.impl.exemptUrlFromNetworkRevocationForNonce(params.arg_exempted_url, params.arg_nonce);
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_ExemptUrlFromNetworkRevocationForNonce_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] ExemptUrlFromNetworkRevocationForNonce FAILED:', e));
          }
          break;
        }
        case 84: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_Prefetch_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.prefetch');
          const result = this.impl.prefetch(params.arg_request_id, params.arg_options, params.arg_request, params.arg_traffic_annotation);
          break;
        }
        case 85: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getBoundNetworkForTesting');
          const result = this.impl.getBoundNetworkForTesting();
          const expectsResponse = header.expectsResponse || (header.flags & 1);
          if (expectsResponse) {
            Promise.resolve(result).then(response => {
              this.endpoint.send(header.ordinal, header.requestId, mojo.internal.kMessageFlagIsResponse, mojo.internal.bindings.network.mojom.NetworkContext_GetBoundNetworkForTesting_ResponseParamsSpec, response);
            }).catch(e => console.error('[GeneratedReceiver] GetBoundNetworkForTesting FAILED:', e));
          }
          break;
        }
        case 86: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_GetDeviceBoundSessionManager_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.getDeviceBoundSessionManager');
          const result = this.impl.getDeviceBoundSessionManager(params.arg_device_bound_session_manager);
          break;
        }
        case 87: {
          const decoder = new mojo.internal.Decoder(message.payload, message.handles);
          const params = decoder.decodeStructInline(mojo.internal.bindings.network.mojom.NetworkContext_AddQuicHints_ParamsSpec.$.structSpec);
          console.log('[GeneratedReceiver] Calling impl.addQuicHints');
          const result = this.impl.addQuicHints(params.arg_origins, params.arg_network_anonymization_key);
          break;
        }
      }
      } catch (err) {
        console.error('[GeneratedReceiver] Error processing message:', err);
      }
    }});
  }
};

mojo.internal.bindings.network.mojom.NetworkContextReceiver = mojo.internal.bindings.network.mojom.NetworkContextReceiver;

mojo.internal.bindings.network.mojom.NetworkContextPtr = mojo.internal.bindings.network.mojom.NetworkContextRemote;
mojo.internal.bindings.network.mojom.NetworkContextRequest = mojo.internal.bindings.network.mojom.NetworkContextPendingReceiver;

