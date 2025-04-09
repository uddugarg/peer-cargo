# Peer-Cargo: P2P Delivery Network

## 1. Concept Overview

**🚀 Peer-Cargo** is your travel-powered delivery network — connecting everyday travelers (Carriers) with those who need to send something (Requesters). Whether you're flying across continents or commuting between cities, turn your spare luggage space into opportunity. Discover GlidePaths, drop your Parcels, chat via LinkLine, and complete trusted CargoQuests — all on one seamless platform.

## 2. Naming Convention

| Concept          | Fancy Name     |
| ---------------- | -------------- |
| User             | Peer           |
| Sender           | Requester      |
| Receiver         | Carrier        |
| Travel Itinerary | GlidePath      |
| Delivery Job     | CargoQuest     |
| Chat Room        | LinkLine       |
| Item Request     | DropParcel     |
| Admin Portal     | MissionControl |
| Help Center      | PeerAid        |

---

## 3. Architecture Overview

### High-Level Architecture (HLD)

```
Frontend (Next.js)
  |-- Requester Dashboard (DropParcel Creation)
  |-- Carrier Dashboard (GlidePath + CargoQuest Matching)
  |-- Chat System (LinkLine)
  |-- Admin Portal (MissionControl)
  |-- Help Center (PeerAid)

Backend (NestJS)
  |-- Auth Service (Clerk Integration)
  |-- Itinerary Service (GlidePath)
  |-- Request Service (DropParcel)
  |-- Matching Engine
  |-- Chat Gateway (WebSocket)
  |-- Job Management (CargoQuest)
  |-- Admin APIs (MissionControl)
  |-- Notification Service
  |-- Event Bus (Redis / Kafka / RabbitMQ)

Database (Neon + Prisma)
  |-- Peers
  |-- GlidePaths
  |-- DropParcels
  |-- CargoQuests
  |-- Chats
  |-- Analytics Logs
  |-- Support Tickets

DevOps (AWS)
  |-- EC2 / ECS for deployment
  |-- RDS for DB backup
  |-- S3 for media uploads (receipts)
  |-- CloudWatch for monitoring
  |-- SES/SNS for alerts & communication
  |-- Redis Cluster (for caching and pub/sub)
  |-- Kafka or RabbitMQ (for event-driven workflows)

External Integrations
  |-- Clerk (Authentication)
  |-- Stripe (Payment processing)
  |-- Email & Notification Service
```

---

## 4. Scalability Enhancements

### Message Queues: Kafka / RabbitMQ

- **Use Cases:**
  - Asynchronous notifications (email/SMS)
  - Audit logging
  - Matching engine triggers
  - Analytics event ingestion
- **Recommended:**
  - Use **Kafka** for high throughput pub-sub with log retention
  - Use **RabbitMQ** for reliable message routing with retry policies

### Caching Layer: Redis

- **Use Cases:**
  - Caching recent GlidePaths and DropParcels
  - Session tokens and auth tokens
  - Chat room presence and socket coordination
  - Rate-limiting and throttling
- **Deployment:** Use Redis Cluster or Elasticache (AWS)

### Horizontal Scaling

- Use ECS with Auto Scaling Groups for backend services
- Socket services deployed with sticky sessions or Redis-backed adapters
- Use CDN (e.g. CloudFront) for frontend assets

### Database Scaling

- Read replicas for analytics
- Use PostGIS for spatial queries
- Partitioning by region or date for DropParcels and GlidePaths

### Chat System Scaling

- Redis pub/sub adapter for multi-instance WebSocket sync
- Optional migration to MQTT or services like Pusher/Ably if needed

---

## 5. Suggested Tech Stack

| Layer         | Tech                                        |
| ------------- | ------------------------------------------- |
| Backend       | Node.js (NestJS)                            |
| Frontend      | Next.js, TailwindCSS, Shadcn, Framer Motion |
| DB            | Prisma ORM + Neon (Postgres)                |
| Auth          | Clerk                                       |
| Realtime Chat | WebSockets + Redis Adapter                  |
| Event Bus     | Kafka / RabbitMQ                            |
| Caching       | Redis                                       |
| File Storage  | AWS S3                                      |
| Payments      | Stripe                                      |
| DevOps        | AWS (ECS/EC2, CloudWatch, SES)              |

---

## 6. Suggestions

- Add **Ratings/Review** after CargoQuest completes
- Implement **Trust & Safety** using KYC and ML for fraud detection
- Add **Reward Points** or **Gamification** for active peers
- Build **Mobile App** in React Native using shared components from Next.js
- Use feature flags (e.g., Unleash) for gradual rollouts

---

## 7. Implementation Details

### Folder Structure

```
/apps
  /web (Next.js frontend)
  /api (NestJS backend)
/packages
  /ui (shared Tailwind + Shadcn UI components)
  /types (Zod/TypeScript schemas)
  /utils (shared utils)

/libs
  /gateway (chat socket gateway)
  /event-bus (Kafka/RabbitMQ client)
  /auth (Clerk integration)
  /payments (Stripe integration)
  /upload (S3 handling)

/prisma
  schema.prisma
  migrations/

/.github
  workflows/
```

### Database Schema

- **Peer** (id, email, role, profile, createdAt)
- **GlidePath** (id, peerId, from, to, datetime, capacity, categories)
- **DropParcel** (id, peerId, from, to, items, category, status)
- **CargoQuest** (id, glidePathId, dropParcelId, price, receiptUrl, status)
- **Chat** (id, participants, messages[])
- **SupportTicket** (id, peerId, issue, status, resolution)

### Detailed ERD

- Peers ↔ GlidePaths (1\:N)
- Peers ↔ DropParcels (1\:N)
- GlidePaths ↔ CargoQuests (1\:N)
- DropParcels ↔ CargoQuests (1\:N)
- Peers ↔ Chat (M\:N)

### API Structure

- `POST /glidepaths` - Add itinerary
- `GET /glidepaths?from=DEL&to=BOM` - Find matches
- `POST /dropparcels` - Create item request
- `GET /dropparcels/match` - Show matching GlidePaths
- `POST /cargoquests` - Finalize delivery job
- `POST /chat/:chatId/message` - Send message
- `POST /auth/callback` - Clerk webhook
- `POST /payments/intent` - Create Stripe intent

### Mock UI (Structure Only)

```
- Dashboard
  - Tabs: DropParcels | GlidePaths | Matches | CargoQuests

- Chat (LinkLine)
  - Left: Conversations list
  - Right: Thread + Delivery status CTA

- Admin (MissionControl)
  - Tables: Users | Jobs | Itineraries | Reports
  - Charts: Region heatmap | Category demand

- Help Center (PeerAid)
  - Ticket submission + chat fallback
```

---

## 8. Next Steps

-