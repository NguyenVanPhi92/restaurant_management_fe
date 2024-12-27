📦src
┣ 📂apiRequests
┃ ┣ 📜account.ts
┃ ┣ 📜auth.ts
┃ ┣ 📜dish.ts
┃ ┣ 📜guest.ts
┃ ┣ 📜indicator.ts
┃ ┣ 📜media.ts
┃ ┣ 📜order.ts
┃ ┣ 📜revalidate.ts
┃ ┗ 📜table.ts
┣ 📂app
┃ ┣ 📂api
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┣ 📂login
┃ ┃ ┃ ┃ ┗ 📜route.ts
┃ ┃ ┃ ┣ 📂logout
┃ ┃ ┃ ┃ ┗ 📜route.ts
┃ ┃ ┃ ┣ 📂refresh-token
┃ ┃ ┃ ┃ ┗ 📜route.ts
┃ ┃ ┃ ┗ 📂token
┃ ┃ ┃ ┃ ┗ 📜route.ts
┃ ┃ ┣ 📂guest
┃ ┃ ┃ ┗ 📂auth
┃ ┃ ┃ ┃ ┣ 📂login
┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
┃ ┃ ┃ ┃ ┣ 📂logout
┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
┃ ┃ ┃ ┃ ┗ 📂refresh-token
┃ ┃ ┃ ┃ ┃ ┗ 📜route.ts
┃ ┃ ┗ 📂revalidate
┃ ┃ ┃ ┗ 📜route.ts
┃ ┣ 📂[locale]
┃ ┃ ┣ 📂(public)
┃ ┃ ┃ ┣ 📂(auth)
┃ ┃ ┃ ┃ ┣ 📂login
┃ ┃ ┃ ┃ ┃ ┣ 📂oauth
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜oauth.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜login-form.tsx
┃ ┃ ┃ ┃ ┃ ┣ 📜logout.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┃ ┗ 📂refresh-token
┃ ┃ ┃ ┃ ┃ ┣ 📜page.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜refresh-token.tsx
┃ ┃ ┃ ┣ 📂@modal
┃ ┃ ┃ ┃ ┣ 📂(.)dishes
┃ ┃ ┃ ┃ ┃ ┗ 📂[slug]
┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜modal.tsx
┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┃ ┗ 📜default.tsx
┃ ┃ ┃ ┣ 📂about
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂dishes
┃ ┃ ┃ ┃ ┗ 📂[slug]
┃ ┃ ┃ ┃ ┃ ┣ 📜dish-detail.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂privacy-policy
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂tables
┃ ┃ ┃ ┃ ┗ 📂[number]
┃ ┃ ┃ ┃ ┃ ┣ 📜guest-login-form.tsx
┃ ┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂term-of-service
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📜default.tsx
┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┣ 📜nav-items.tsx
┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┣ 📂guest
┃ ┃ ┃ ┣ 📂menu
┃ ┃ ┃ ┃ ┣ 📜menu-order.tsx
┃ ┃ ┃ ┃ ┣ 📜page.tsx
┃ ┃ ┃ ┃ ┗ 📜quantity.tsx
┃ ┃ ┃ ┣ 📂orders
┃ ┃ ┃ ┃ ┣ 📜orders-cart.tsx
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┗ 📜layout.tsx
┃ ┃ ┣ 📂manage
┃ ┃ ┃ ┣ 📂accounts
┃ ┃ ┃ ┃ ┣ 📜account-table.tsx
┃ ┃ ┃ ┃ ┣ 📜add-employee.tsx
┃ ┃ ┃ ┃ ┣ 📜edit-employee.tsx
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂dashboard
┃ ┃ ┃ ┃ ┣ 📜dashboard-main.tsx
┃ ┃ ┃ ┃ ┣ 📜dish-bar-chart.tsx
┃ ┃ ┃ ┃ ┣ 📜page.tsx
┃ ┃ ┃ ┃ ┗ 📜revenue-line-chart.tsx
┃ ┃ ┃ ┣ 📂dishes
┃ ┃ ┃ ┃ ┣ 📜add-dish.tsx
┃ ┃ ┃ ┃ ┣ 📜dish-table.tsx
┃ ┃ ┃ ┃ ┣ 📜edit-dish.tsx
┃ ┃ ┃ ┃ ┗ 📜page.tsx
┃ ┃ ┃ ┣ 📂orders
┃ ┃ ┃ ┃ ┣ 📜add-order.tsx
┃ ┃ ┃ ┃ ┣ 📜dishes-dialog.tsx
┃ ┃ ┃ ┃ ┣ 📜edit-order.tsx
┃ ┃ ┃ ┃ ┣ 📜guests-dialog.tsx
┃ ┃ ┃ ┃ ┣ 📜order-guest-detail.tsx
┃ ┃ ┃ ┃ ┣ 📜order-statics.tsx
┃ ┃ ┃ ┃ ┣ 📜order-table-columns.tsx
┃ ┃ ┃ ┃ ┣ 📜order-table.tsx
┃ ┃ ┃ ┃ ┣ 📜order.service.tsx
┃ ┃ ┃ ┃ ┣ 📜page.tsx
┃ ┃ ┃ ┃ ┣ 📜table-skeleton.tsx
┃ ┃ ┃ ┃ ┗ 📜tables-dialog.tsx
┃ ┃ ┃ ┣ 📂setting
┃ ┃ ┃ ┃ ┣ 📜change-password-form.tsx
┃ ┃ ┃ ┃ ┣ 📜page.tsx
┃ ┃ ┃ ┃ ┗ 📜update-profile-form.tsx
┃ ┃ ┃ ┣ 📂tables
┃ ┃ ┃ ┃ ┣ 📜add-table.tsx
┃ ┃ ┃ ┃ ┣ 📜edit-table.tsx
┃ ┃ ┃ ┃ ┣ 📜page.tsx
┃ ┃ ┃ ┃ ┗ 📜table-table.tsx
┃ ┃ ┃ ┣ 📜dropdown-avatar.tsx
┃ ┃ ┃ ┣ 📜layout.tsx
┃ ┃ ┃ ┣ 📜menuItems.ts
┃ ┃ ┃ ┣ 📜mobile-nav-links.tsx
┃ ┃ ┃ ┗ 📜nav-links.tsx
┃ ┃ ┣ 📜globals.css
┃ ┃ ┗ 📜layout.tsx
┃ ┣ 📜apple-icon.png
┃ ┣ 📜favicon.ico
┃ ┣ 📜icon.png
┃ ┣ 📜robots.ts
┃ ┗ 📜sitemap.ts
┣ 📂components
┃ ┣ 📂ui
┃ ┃ ┣ 📜alert-dialog.tsx
┃ ┃ ┣ 📜avatar.tsx
┃ ┃ ┣ 📜badge.tsx
┃ ┃ ┣ 📜button.tsx
┃ ┃ ┣ 📜card.tsx
┃ ┃ ┣ 📜chart.tsx
┃ ┃ ┣ 📜command.tsx
┃ ┃ ┣ 📜dialog.tsx
┃ ┃ ┣ 📜dropdown-menu.tsx
┃ ┃ ┣ 📜form.tsx
┃ ┃ ┣ 📜input.tsx
┃ ┃ ┣ 📜label.tsx
┃ ┃ ┣ 📜pagination.tsx
┃ ┃ ┣ 📜popover.tsx
┃ ┃ ┣ 📜select.tsx
┃ ┃ ┣ 📜separator.tsx
┃ ┃ ┣ 📜sheet.tsx
┃ ┃ ┣ 📜skeleton.tsx
┃ ┃ ┣ 📜switch.tsx
┃ ┃ ┣ 📜table.tsx
┃ ┃ ┣ 📜textarea.tsx
┃ ┃ ┣ 📜toast.tsx
┃ ┃ ┣ 📜toaster.tsx
┃ ┃ ┣ 📜tooltip.tsx
┃ ┃ ┗ 📜use-toast.ts
┃ ┣ 📜app-provider.tsx
┃ ┣ 📜auto-pagination.tsx
┃ ┣ 📜dark-mode-toggle.tsx
┃ ┣ 📜footer.tsx
┃ ┣ 📜google-tag.tsx
┃ ┣ 📜listen-logout-socket.tsx
┃ ┣ 📜qrcode-table.tsx
┃ ┣ 📜refresh-token.tsx
┃ ┣ 📜search-params-loader.tsx
┃ ┣ 📜switch-language.tsx
┃ ┗ 📜theme-provider.tsx
┣ 📂constants
┃ ┗ 📜type.ts
┣ 📂lib
┃ ┣ 📜http.ts
┃ ┣ 📜server-utils.ts
┃ ┗ 📜utils.ts
┣ 📂queries
┃ ┣ 📜useAccount.tsx
┃ ┣ 📜useAuth.tsx
┃ ┣ 📜useDish.tsx
┃ ┣ 📜useGuest.tsx
┃ ┣ 📜useIndicator.tsx
┃ ┣ 📜useMedia.tsx
┃ ┣ 📜useOrder.tsx
┃ ┗ 📜useTable.tsx
┣ 📂schemaValidations
┃ ┣ 📜account.schema.ts
┃ ┣ 📜auth.schema.ts
┃ ┣ 📜common.schema.ts
┃ ┣ 📜dish.schema.ts
┃ ┣ 📜guest.schema.ts
┃ ┣ 📜indicator.schema.ts
┃ ┣ 📜media.schema.ts
┃ ┣ 📜order.schema.ts
┃ ┗ 📜table.schema.ts
┣ 📂services
┃ ┗ 📜locale.ts
┣ 📂types
┃ ┗ 📜jwt.types.ts
┣ 📜config.ts
┣ 📜i18n.ts
┣ 📜middleware.ts
┣ 📜navigation.ts
┗ 📜shared-metadata.ts
