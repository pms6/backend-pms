import express from "express";

import authRoutes from "./auth.Route.js";
import propertyRoutes from "./property.Route.js";
import roomRoutes from "./room.Route.js";
import leadRoutes from "./lead.Route.js";
import memberRoutes from "./member.Route.js";
import ownerRoutes from "./owner.Route.js";
import viewingRoutes from "./viewing.Route.js";
import onboardingRoutes from "./onboarding.Route.js";
import tenancyRoutes from "./tenancy.Route.js";
import supplierRoutes from "./supplier.Route.js";
import maintenanceRoutes from "./maintenance.Route.js";
import inspectionRoutes from "./inspection.Route.js";
import complianceRoutes from "./compliance.Route.js"
import welcomePackRoutes from "./welcomePack.Route.js"
import paymentRoutes from "./payment.Route.js"
import publicRoutes from "./public.Route.js"
import auditRoutes from "./auditLog.Route.js"
import tenantRoute from "./tenant.Route.js"
import expenseRoutes from "./expense.Route.js"
import taskRoutes from "./task.Route.js"

const router = express.Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    message: "PMS API v1",
    docs: "See DATA_MODEL.md for the schema and build order",
  });
});

// Public marketing / listings API (no auth) — must be mounted before the
// protected routes so anonymous visitors can browse listings.
router.use("/public", publicRoutes);

// Phase 1 — Core platform
router.use("/auth", authRoutes);
router.use("/tenants", tenantRoute);
router.use("/properties", propertyRoutes);
router.use("/rooms", roomRoutes);
router.use("/leads", leadRoutes);
router.use("/members", memberRoutes);
router.use("/owners", ownerRoutes);
router.use("/viewings", viewingRoutes);
router.use("/onboarding", onboardingRoutes);
router.use("/tenancies", tenancyRoutes);
router.use("/suppliers", supplierRoutes);
router.use("/maintenance", maintenanceRoutes);
router.use("/inspections", inspectionRoutes);
router.use("/compliance", complianceRoutes);
router.use("/welcome-pack", welcomePackRoutes);
router.use("/payments", paymentRoutes);
router.use("/expenses", expenseRoutes);
router.use("/tasks", taskRoutes);
router.use("/audit", auditRoutes);

export default router;