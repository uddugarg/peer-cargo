/peer-cargo
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── app/
│   ├── (admin)/
│   │   └── admin/
│   │       └── page.tsx
│   ├── (auth)/
│   │   ├── layout.tsx
│   │   ├── onboarding/
│   │   │   └── page.tsx
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   └── sign-up/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── cargoquests/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── chat/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── dropparcels/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── glidepaths/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── matches/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── payments/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── success/
│   │   │       └── page.tsx
│   │   └── profile/
│   │       └── page.tsx
│   ├── api/
│   │   ├── admin/
│   │   │   ├── stats/
│   │   │   │   └── route.ts
│   │   │   ├── tickets/
│   │   │   │   └── route.ts
│   │   │   ├── transactions/
│   │   │   │   └── route.ts
│   │   │   └── users/
│   │   │       └── route.ts
│   │   ├── cargoquests/
│   │   │   ├── [id]/
│   │   │   │   ├── delivery/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── pickup/
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── chat/
│   │   │   ├── [id]/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── dropparcels/
│   │   │   ├── [id]/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── glidepaths/
│   │   │   ├── [id]/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── matches/
│   │   │   ├── [id]/
│   │   │   │   ├── accept/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── reject/
│   │   │   │   │   └── route.ts
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── notifications/
│   │   │   ├── mark-all-read/
│   │   │   │   └── route.ts
│   │   │   └── route.ts
│   │   ├── onboarding/
│   │   │   └── route.ts
│   │   ├── payments/
│   │   │   ├── confirm/
│   │   │   │   └── route.ts
│   │   │   └── create-intent/
│   │   │       └── route.ts
│   │   └── webhooks/
│   │       ├── clerk/
│   │       │   └── route.ts
│   │       └── stripe/
│   │           └── route.ts
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── backend/
│   ├── src/
│   │   ├── app.module.ts
│   │   ├── controllers/
│   │   │   ├── cargoquests.controller.ts
│   │   │   ├── chat.controller.ts
│   │   │   ├── dropparcels.controller.ts
│   │   │   ├── glidepaths.controller.ts
│   │   │   └── matches.controller.ts
│   │   ├── main.ts
│   │   ├── microservices/
│   │   │   ├── auth-service/
│   │   │   │   └── auth.service.ts
│   │   │   ├── cargoquest-engine/
│   │   │   │   └── cargoquest.service.ts
│   │   │   ├── chat-gateway/
│   │   │   │   └── chat.gateway.ts
│   │   │   ├── dropparcel-service/
│   │   │   │   └── dropparcel.service.ts
│   │   │   ├── glidepath-service/
│   │   │   │   └── glidepath.service.ts
│   │   │   ├── matchmaking-service/
│   │   │   │   └── matchmaking.service.ts
│   │   │   ├── notification-service/
│   │   │   │   └── notification.service.ts
│   │   │   ├── payment-service/
│   │   │   │   └── payment.service.ts
│   │   │   └── support-service/
│   │   │       └── support.service.ts
│   │   └── services/
│   │       ├── admin.service.ts
│   │       ├── auth.service.ts
│   │       └── user.service.ts
│   ├── .eslintrc.js
│   ├── nest-cli.json
│   ├── package.json
│   ├── tsconfig.build.json
│   ├── tsconfig.json
│   └── webpack.config.js
├── components/
│   ├── chat/
│   │   ├── chat-interface.tsx
│   │   └── message-bubble.tsx
│   ├── forms/
│   │   ├── dropparcel-form.tsx
│   │   ├── glidepath-form.tsx
│   │   └── onboarding-form.tsx
│   ├── notification/
│   │   └── notification-list.tsx
│   ├── shared/
│   │   ├── footer.tsx
│   │   ├── mobile-navigation.tsx
│   │   └── navbar.tsx
│   ├── theme-provider.tsx
│   └── ui/
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── popover.tsx
│       ├── radio-group.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       └── use-toast.ts
├── docker/
│   └── Dockerfile
├── docs/
│   ├── architecture-diagram.svg
│   ├── hld-diagram.svg
│   ├── implementation-checklist.md
│   └── setup-guide.md
├── lib/
│   ├── prisma.ts
│   ├── redis.ts
│   ├── socket.ts
│   └── utils.ts
├── microservices/
│   ├── auth-service/
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── cargoquest-engine/
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── chat-gateway/
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── dropparcel-service/
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── glidepath-service/
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── matchmaking-service/
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── notification-service/
│   │   ├── src/
│   │   │   └── main.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── support-service/
│       ├── src/
│       │   └── main.ts
│       ├── package.json
│       └── tsconfig.json
├── prisma/
│   ├── migrations/
│   │   └── .gitkeep
│   ├── schema.prisma
│   └── seed.ts
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── hero-illustration.png
│   │   └── logo.png
│   ├── manifest.json
│   └── robots.txt
├── styles/
│   └── globals.css
├── .env.example
├── .eslintrc.json
├── .gitignore
├── docker-compose.yml
├── middleware.ts
├── next-config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json