"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "en" | "fr" | "nl";

const STORAGE_KEY = "brandlabel-language";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "nl", label: "NL" },
];

const translations: Record<Exclude<Language, "en">, Record<string, string>> = {
  fr: {
    "Home": "Accueil",
    "Services": "Services",
    "Case Study": "Étude de cas",
    "Contact": "Contact",
    "Request a Free Audit": "Demander un audit gratuit",
    "Request a free audit": "Demander un audit gratuit",
    "Request My Free Audit": "Demander mon audit gratuit",
    "Back to home": "Retour à l’accueil",
    "BrandLabel Systems home": "Accueil BrandLabel Systems",
    "Open menu": "Ouvrir le menu",
    "Close menu": "Fermer le menu",
    "Main navigation": "Navigation principale",
    "Mobile navigation": "Navigation mobile",
    "Language": "Langue",
    "Custom systems agency": "Agence de systèmes sur mesure",
    "Stop juggling scattered tools to run your business.": "Arrêtez de jongler avec des outils dispersés pour gérer votre entreprise.",
    "We design and build custom systems, web apps, and websites that replace disconnected tools — so your business can manage clients, projects, documents, workflows, and operations in one place.": "Nous concevons et développons des systèmes sur mesure, des applications web et des sites web qui remplacent les outils déconnectés — afin que votre entreprise puisse gérer clients, projets, documents, flux de travail et opérations au même endroit.",
    "Built for businesses that need better structure, automation, and control.": "Conçu pour les entreprises qui ont besoin de plus de structure, d’automatisation et de contrôle.",
    "The problem": "Le problème",
    "Your business is organized, but your tools are not.": "Votre entreprise est organisée, mais vos outils ne le sont pas.",
    "Every process lives in a different tab, inbox, spreadsheet, or chat thread. The result is more admin, slower decisions, and teams spending too much time looking for the latest version.": "Chaque processus se trouve dans un onglet, une boîte mail, un tableur ou une conversation différente. Résultat : plus d’administration, des décisions plus lentes et des équipes qui perdent trop de temps à chercher la dernière version.",
    "Tool sprawl": "Multiplication des outils",
    "Too many tools for one simple process.": "Trop d’outils pour un processus pourtant simple.",
    "Spreadsheet risk": "Risque lié aux tableurs",
    "Excel files that only one person understands.": "Des fichiers Excel qu’une seule personne comprend.",
    "Hidden decisions": "Décisions invisibles",
    "Messages hiding important decisions.": "Des messages qui cachent les décisions importantes.",
    "Manual admin": "Administration manuelle",
    "Hours lost copying data between platforms.": "Des heures perdues à copier des données entre plateformes.",
    "No structure": "Manque de structure",
    "No clear structure for projects, clients, or documents.": "Aucune structure claire pour les projets, les clients ou les documents.",
    "The solution": "La solution",
    "One system designed around how your business actually works.": "Un système conçu autour du fonctionnement réel de votre entreprise.",
    "We don’t force you into generic software. We build a system tailored to your workflow, your team, and how you serve clients.": "Nous ne vous imposons pas un logiciel générique. Nous construisons un système adapté à votre flux de travail, à votre équipe et à votre manière de servir vos clients.",
    "Build the system your business actually needs.": "Construisez le système dont votre entreprise a réellement besoin.",
    "Operations dashboard": "Tableau de bord opérationnel",
    "Track projects, clients, and workflows in one centralized system.": "Suivez projets, clients et flux de travail dans un système centralisé.",
    "Client portal": "Portail client",
    "Give clients one place to see status, documents, and approvals.": "Donnez aux clients un seul endroit pour consulter l’état d’avancement, les documents et les validations.",
    "Document workflow": "Flux documentaire",
    "Send, sign, and track agreements with OTP-secured digital signatures.": "Envoyez, signez et suivez les accords avec des signatures numériques sécurisées par OTP.",
    "Team visibility": "Visibilité d’équipe",
    "See who is working, where, and on what — with clarity for managers.": "Voyez qui travaille, où et sur quoi — avec une vision claire pour les responsables.",
    "How it comes together": "Comment tout s’assemble",
    "From chaos to a system that fits": "Du chaos à un système qui vous correspond",
    "Watch scattered tools become one structured operating system.": "Voyez les outils dispersés devenir un système opérationnel structuré.",
    "From scattered tools": "Depuis des outils dispersés",
    "Excel files, messages, calendars, and documents all live in different places.": "Fichiers Excel, messages, calendriers et documents vivent tous à des endroits différents.",
    "One operating dashboard": "Un tableau de bord opérationnel",
    "Projects, clients, tasks, documents, and approvals become visible in one place.": "Projets, clients, tâches, documents et validations deviennent visibles au même endroit.",
    "Documents signed online": "Documents signés en ligne",
    "Send agreements, collect approvals, and validate signatures with OTP email verification.": "Envoyez des accords, collectez les validations et validez les signatures grâce à une vérification OTP par e-mail.",
    "Team activity tracked clearly": "Activité d’équipe suivie clairement",
    "Clock-in, clock-out, geolocation, and job status help managers see what is happening.": "Pointage, géolocalisation et statut des missions aident les responsables à voir ce qui se passe.",
    "Built around your workflow": "Construit autour de votre flux de travail",
    "The system follows how your business actually works, not how generic software expects you to work.": "Le système suit le fonctionnement réel de votre entreprise, pas la logique imposée par un logiciel générique.",
    "Step": "Étape",
    "Prev": "Préc.",
    "Next": "Suiv.",
    "Systems, web apps, and websites — shaped around your workflows.": "Systèmes, applications web et sites web — conçus autour de vos flux de travail.",
    "From internal operations to customer-facing experiences — built with the same disciplined, premium execution.": "Des opérations internes aux expériences client — construits avec la même exigence et la même qualité d’exécution.",
    "Custom Systems": "Systèmes sur mesure",
    "Centralized internal systems built around your real workflow — projects, clients, tasks, documents, and reporting in one place.": "Des systèmes internes centralisés construits autour de votre flux réel — projets, clients, tâches, documents et reporting au même endroit.",
    "Less admin. More control.": "Moins d’administration. Plus de contrôle.",
    "Web Apps": "Applications web",
    "Custom web applications, portals, and dashboards designed for the way your users actually work.": "Applications web, portails et tableaux de bord sur mesure conçus pour la manière dont vos utilisateurs travaillent vraiment.",
    "Built around real workflows, not generic templates.": "Construit autour de vrais flux de travail, pas de modèles génériques.",
    "Websites": "Sites web",
    "Premium websites that explain what you do clearly, build trust, and turn visitors into qualified conversations.": "Sites web premium qui expliquent clairement ce que vous faites, inspirent confiance et transforment les visiteurs en conversations qualifiées.",
    "Clear message. Strong first impression.": "Message clair. Première impression forte.",
    "Learn more": "En savoir plus",
    "View all services": "Voir tous les services",
    "Next step": "Prochaine étape",
    "Start with a free audit.": "Commencez par un audit gratuit.",
    "We’ll map your workflow, identify where you’re losing time, and design the system your business actually needs.": "Nous cartographions votre flux de travail, identifions où vous perdez du temps et concevons le système dont votre entreprise a réellement besoin.",
    "Pages": "Pages",
    "Engagements": "Accompagnements",
    "BrandLabel Systems builds custom internal systems, web apps, and websites for service businesses that need better structure, automation, and control.": "BrandLabel Systems crée des systèmes internes, applications web et sites web sur mesure pour les entreprises de services qui ont besoin de plus de structure, d’automatisation et de contrôle.",
    "Custom quote based on your needs. No fixed packages, no unnecessary software, no template thinking.": "Devis sur mesure selon vos besoins. Pas de forfaits fixes, pas de logiciel inutile, pas de logique de modèle.",
    "Custom systems, web apps, and websites built around your business.": "Systèmes sur mesure, applications web et sites web construits autour de votre entreprise.",
    "From internal tools to customer-facing websites, BrandLabel Systems designs digital solutions that replace scattered processes with clear, structured workflows.": "Des outils internes aux sites web orientés client, BrandLabel Systems conçoit des solutions numériques qui remplacent les processus dispersés par des flux clairs et structurés.",
    "Custom-built · Designed in-house · Maintained for the long run": "Sur mesure · Conçu en interne · Maintenu sur le long terme",
    "What we build": "Ce que nous construisons",
    "Five disciplines, composed into one operating layer.": "Cinq disciplines réunies dans une seule couche opérationnelle.",
    "Operational command center": "Centre de commandement opérationnel",
    "Modern client portals & internal apps": "Portails clients modernes et applications internes",
    "Premium, conversion-focused presence": "Présence premium orientée conversion",
    "Automation & Workflow Tools": "Automatisation et outils de flux de travail",
    "Workflow orchestration": "Orchestration des flux",
    "Maintenance & Improvements": "Maintenance et améliorations",
    "Care, performance, evolution": "Suivi, performance, évolution",
    "The thinking behind it": "La réflexion derrière tout cela",
    "Built around how your company actually works.": "Construit autour du fonctionnement réel de votre entreprise.",
    "One workflow. One source of truth.": "Un flux de travail. Une source de vérité.",
    "From internal dashboards to customer-facing portals.": "Des tableaux de bord internes aux portails clients.",
    "Systems that scale with the business.": "Des systèmes qui évoluent avec l’entreprise.",
    "Begin": "Commencer",
    "A quiet system, designed around your business.": "Un système clair, conçu autour de votre entreprise.",
    "Start with a free audit. We map your workflow, identify where time is lost, and propose the smallest, most precise system that delivers the largest change.": "Commencez par un audit gratuit. Nous cartographions votre flux de travail, identifions les pertes de temps et proposons le système le plus précis et le plus léger pour produire le plus grand impact.",
    "Context": "Contexte",
    "The team had work moving faster than their tools.": "L’équipe avançait plus vite que ses outils.",
    "A service team needed a clearer way to manage client work from first request to signed agreement, team scheduling, document delivery, and project tracking. The work was possible, but the operating model depended on too many places.": "Une équipe de services avait besoin d’une manière plus claire de gérer le travail client, de la première demande à l’accord signé, en passant par la planification, l’envoi de documents et le suivi des projets. Le travail était possible, mais le modèle opérationnel dépendait de trop d’endroits.",
    "One custom platform for a growing service team.": "Une plateforme sur mesure pour une équipe de services en croissance.",
    "This demo case study shows how a team of around 10 people could replace scattered operational tools with one custom internal system. No real client data is included.": "Cette étude de cas de démonstration montre comment une équipe d’environ 10 personnes pourrait remplacer des outils opérationnels dispersés par un système interne sur mesure. Aucune donnée client réelle n’est incluse.",
    "Projects": "Projets",
    "Clients": "Clients",
    "Workflows": "Flux de travail",
    "Calendar": "Calendrier",
    "Team tracking": "Suivi d’équipe",
    "Documents, offers, agreements": "Documents, offres, accords",
    "Client communication": "Communication client",
    "System": "Système",
    "A centralized dashboard with the full operating flow.": "Un tableau de bord centralisé avec tout le flux opérationnel.",
    "The custom system gave leadership, operations, and the team a shared view of what was happening, what needed approval, and what was ready for the next step.": "Le système sur mesure a donné à la direction, aux opérations et à l’équipe une vision partagée de ce qui se passait, de ce qui devait être approuvé et de ce qui était prêt pour l’étape suivante.",
    "Centralized dashboard": "Tableau de bord centralisé",
    "Email templates": "Modèles d’e-mail",
    "Online document sending": "Envoi de documents en ligne",
    "OTP-based signature validation via email": "Validation de signature par OTP via e-mail",
    "Read and approved confirmation": "Confirmation lu et approuvé",
    "Multilingual interface: EN, FR, NL, CN": "Interface multilingue : EN, FR, NL, CN",
    "Designed to reduce manual follow-up and make progress visible without adding another generic tool to the stack.": "Conçu pour réduire le suivi manuel et rendre l’avancement visible sans ajouter un autre outil générique.",
    "Outcome": "Résultat",
    "Less searching, fewer handoffs, clearer ownership.": "Moins de recherche, moins de passages de relais, plus de responsabilités claires.",
    "The result is a more structured operating layer: clients, projects, documents, calendar activity, signatures, approvals, and team tracking all live in one place. Leadership gets visibility, the team gets clarity, and clients get a cleaner experience.": "Le résultat est une couche opérationnelle plus structurée : clients, projets, documents, calendrier, signatures, validations et suivi d’équipe au même endroit. La direction gagne en visibilité, l’équipe en clarté et les clients bénéficient d’une expérience plus fluide.",
    "Operations OS": "OS opérationnel",
    "BrandLabel control room": "Salle de contrôle BrandLabel",
    "Live system": "Système actif",
    "Active projects": "Projets actifs",
    "+18% this month": "+18 % ce mois-ci",
    "6 awaiting approval": "6 en attente d’approbation",
    "on schedule": "dans les délais",
    "OTP enabled": "OTP activé",
    "Workflow tracker": "Suivi des flux",
    "Today": "Aujourd’hui",
    "09:00 Site crew": "09:00 Équipe sur site",
    "11:30 Client call": "11:30 Appel client",
    "15:00 Agreement": "15:00 Accord",
    "Operations, clarified.": "Opérations clarifiées.",
    "One message. One experience.": "Un message. Une expérience.",
    "Signature": "Signature",
    "OTP sent": "OTP envoyé",
    "Service agreement · Acme Ltd.": "Contrat de service · Acme Ltd.",
    "Signer": "Signataire",
    "Signed": "Signé",
    "Team activity": "Activité de l’équipe",
    "Unit A": "Unité A",
    "On site": "Sur site",
    "Clock-in 07:58": "Pointage 07:58",
    "Geo fence OK": "Zone géographique OK",
    "Job #2841 · In progress": "Mission #2841 · En cours",
    "Pipeline": "Pipeline",
    "Live": "En direct",
    "Intake": "Entrée",
    "Proposal": "Proposition",
    "Contract": "Contrat",
    "Kickoff": "Lancement",
    "Docs": "Docs",
    "Lead": "Prospect",
    "Quote": "Devis",
    "Sign": "Signer",
    "Deliver": "Livrer",
    "Approval": "Approbation",
    "Quote awaiting review": "Devis en attente de validation",
    "Site visit today 14:00": "Visite de site aujourd’hui à 14:00",
    "OTP verified": "OTP vérifié",
    "Approvals": "Approbations",
    "3 pending": "3 en attente",
    "Quote · Meridian": "Devis · Meridian",
    "Awaiting": "En attente",
    "PO · Site 04": "Bon de commande · Site 04",
    "Approved": "Approuvé",
    "Contract · v3": "Contrat · v3",
    "In review": "En revue",
    "Review": "Revue",
    "Schedule": "Planning",
    "Wed": "Mer.",
    "Wed · 14": "Mer. · 14",
    "14:00 · Site visit": "14:00 · Visite de site",
    "Meridian · Dock 4": "Meridian · Quai 4",
    "OTP OK": "OTP OK",
    "Master services · v3": "Services principaux · v3",
    "Signed · 09:42": "Signé · 09:42",
    "Archive": "Archive",
    "3 of 4 · on track": "3 sur 4 · en bonne voie",
    "A private operating system for your business — projects, clients, approvals, scheduling, and signatures coordinated in one quiet, structured place.": "Un système opérationnel privé pour votre entreprise — projets, clients, validations, planning et signatures coordonnés dans un espace clair et structuré.",
    "Centralized projects, clients, tasks": "Projets, clients et tâches centralisés",
    "Approval gates and audit trails": "Étapes de validation et historique d’audit",
    "Scheduling, signatures, documents": "Planning, signatures, documents",
    "Focused web applications shaped around how your users actually work — clean onboarding, secure access, and live collaboration without the noise.": "Des applications web ciblées, conçues autour de la manière dont vos utilisateurs travaillent réellement — onboarding clair, accès sécurisé et collaboration en direct sans bruit.",
    "Onboarding & secure sign-in": "Onboarding et connexion sécurisée",
    "Role-based dashboards": "Tableaux de bord par rôle",
    "Live updates and collaboration": "Mises à jour en direct et collaboration",
    "Editorial websites that explain what you do clearly, build trust at first glance, and turn the right visitors into qualified conversations.": "Des sites éditoriaux qui expliquent clairement votre activité, inspirent confiance dès le premier regard et transforment les bons visiteurs en conversations qualifiées.",
    "Editorial layouts and tone": "Mise en page et ton éditoriaux",
    "Lead capture and analytics": "Capture de prospects et analytics",
    "Brand-grade content systems": "Systèmes de contenu au niveau de la marque",
    "Connect the systems your team already uses, route work through the right hands, and let automations carry the repetitive load — quietly, in the background.": "Connectez les systèmes que votre équipe utilise déjà, faites passer le travail aux bonnes personnes et laissez les automatisations prendre en charge les tâches répétitives, discrètement en arrière-plan.",
    "Connected systems and triggers": "Systèmes connectés et déclencheurs",
    "Routing and approval logic": "Routage et logique de validation",
    "Sync states across tools": "Synchronisation des états entre outils",
    "Ongoing improvements after launch — uptime monitoring, performance tuning, security updates, and steady evolution as your business grows.": "Des améliorations continues après le lancement — surveillance de disponibilité, optimisation des performances, mises à jour de sécurité et évolution régulière à mesure que votre entreprise grandit.",
    "Uptime & performance": "Disponibilité et performance",
    "Security & dependency updates": "Mises à jour de sécurité et dépendances",
    "Issue tracking and roadmap": "Suivi des problèmes et feuille de route",
    "Build from scratch": "Construire depuis zéro",
    "Start with a clean foundation. We design and build a custom system shaped around how your business actually operates today.": "Partez d’une base saine. Nous concevons et développons un système sur mesure adapté à la manière dont votre entreprise fonctionne aujourd’hui.",
    "Start a new system →": "Lancer un nouveau système →",
    "Improve existing tools": "Améliorer les outils existants",
    "Refine what already works. We extend, restructure, and modernize the tools you have so they scale with your operations.": "Affinez ce qui fonctionne déjà. Nous étendons, restructurons et modernisons vos outils pour qu’ils évoluent avec vos opérations.",
    "Refine your stack →": "Affiner votre stack →",
    "Maintain and evolve": "Maintenir et faire évoluer",
    "Long-term care after launch. We monitor, update, and quietly evolve your system as your team and workflows grow.": "Accompagnement long terme après le lancement. Nous surveillons, mettons à jour et faisons évoluer votre système avec votre équipe et vos flux.",
    "Long-term partnership →": "Partenariat long terme →",
    "Request your free systems audit.": "Demandez votre audit gratuit des systèmes.",
    "Tell us how your business currently works. We'll show you how to simplify it.": "Expliquez-nous comment votre entreprise fonctionne aujourd’hui. Nous vous montrerons comment la simplifier.",
    "Tell us how your business currently works. We&apos;ll show you how to simplify it.": "Expliquez-nous comment votre entreprise fonctionne aujourd’hui. Nous vous montrerons comment la simplifier.",
    "Your free audit includes:": "Votre audit gratuit comprend :",
    "Workflow review": "Analyse des flux de travail",
    "Tool analysis": "Analyse des outils",
    "System recommendation": "Recommandation de système",
    "No commitment required. We respond within 24 hours.": "Aucun engagement requis. Nous répondons sous 24 heures.",
    "Name": "Nom",
    "Company": "Entreprise",
    "Email": "E-mail",
    "Message": "Message",
    "Your name": "Votre nom",
    "Company name": "Nom de l’entreprise",
    "What tools, workflows, or client processes need to be cleaned up?": "Quels outils, flux de travail ou processus client doivent être clarifiés ?",
    "We received your request.": "Nous avons reçu votre demande.",
    "We'll be in touch within 24 hours to schedule your free audit.": "Nous vous contacterons sous 24 heures pour planifier votre audit gratuit.",
    "We&apos;ll be in touch within 24 hours to schedule your free audit.": "Nous vous contacterons sous 24 heures pour planifier votre audit gratuit.",
    "We will get back to you within 24 hours.": "Nous vous répondrons sous 24 heures.",
  },
  nl: {
    "Home": "Home",
    "Services": "Diensten",
    "Case Study": "Case study",
    "Contact": "Contact",
    "Request a Free Audit": "Vraag een gratis audit aan",
    "Request a free audit": "Vraag een gratis audit aan",
    "Request My Free Audit": "Vraag mijn gratis audit aan",
    "Back to home": "Terug naar home",
    "BrandLabel Systems home": "BrandLabel Systems home",
    "Open menu": "Menu openen",
    "Close menu": "Menu sluiten",
    "Main navigation": "Hoofdnavigatie",
    "Mobile navigation": "Mobiele navigatie",
    "Language": "Taal",
    "Custom systems agency": "Bureau voor systemen op maat",
    "Stop juggling scattered tools to run your business.": "Stop met het jongleren tussen losse tools om je bedrijf te runnen.",
    "We design and build custom systems, web apps, and websites that replace disconnected tools — so your business can manage clients, projects, documents, workflows, and operations in one place.": "Wij ontwerpen en bouwen systemen op maat, webapps en websites die losse tools vervangen — zodat je bedrijf klanten, projecten, documenten, workflows en operaties op één plek kan beheren.",
    "Built for businesses that need better structure, automation, and control.": "Gebouwd voor bedrijven die meer structuur, automatisering en controle nodig hebben.",
    "The problem": "Het probleem",
    "Your business is organized, but your tools are not.": "Je bedrijf is georganiseerd, maar je tools zijn dat niet.",
    "Every process lives in a different tab, inbox, spreadsheet, or chat thread. The result is more admin, slower decisions, and teams spending too much time looking for the latest version.": "Elk proces zit in een andere tab, inbox, spreadsheet of chat. Het resultaat: meer administratie, tragere beslissingen en teams die te veel tijd verliezen met zoeken naar de laatste versie.",
    "Tool sprawl": "Te veel tools",
    "Too many tools for one simple process.": "Te veel tools voor één eenvoudig proces.",
    "Spreadsheet risk": "Spreadsheetrisico",
    "Excel files that only one person understands.": "Excelbestanden die maar één persoon begrijpt.",
    "Hidden decisions": "Verborgen beslissingen",
    "Messages hiding important decisions.": "Berichten waarin belangrijke beslissingen verdwijnen.",
    "Manual admin": "Handmatige administratie",
    "Hours lost copying data between platforms.": "Uren verloren aan het kopiëren van gegevens tussen platformen.",
    "No structure": "Geen structuur",
    "No clear structure for projects, clients, or documents.": "Geen duidelijke structuur voor projecten, klanten of documenten.",
    "The solution": "De oplossing",
    "One system designed around how your business actually works.": "Eén systeem ontworpen rond hoe je bedrijf echt werkt.",
    "We don’t force you into generic software. We build a system tailored to your workflow, your team, and how you serve clients.": "We dwingen je niet in generieke software. We bouwen een systeem dat past bij je workflow, je team en de manier waarop je klanten bedient.",
    "Build the system your business actually needs.": "Bouw het systeem dat je bedrijf echt nodig heeft.",
    "Operations dashboard": "Operationeel dashboard",
    "Track projects, clients, and workflows in one centralized system.": "Volg projecten, klanten en workflows in één centraal systeem.",
    "Client portal": "Klantenportaal",
    "Give clients one place to see status, documents, and approvals.": "Geef klanten één plek om status, documenten en goedkeuringen te bekijken.",
    "Document workflow": "Documentworkflow",
    "Send, sign, and track agreements with OTP-secured digital signatures.": "Verstuur, onderteken en volg overeenkomsten met OTP-beveiligde digitale handtekeningen.",
    "Team visibility": "Teamzichtbaarheid",
    "See who is working, where, and on what — with clarity for managers.": "Zie wie werkt, waar en waaraan — met duidelijkheid voor managers.",
    "How it comes together": "Hoe alles samenkomt",
    "From chaos to a system that fits": "Van chaos naar een systeem dat past",
    "Watch scattered tools become one structured operating system.": "Zie hoe losse tools één gestructureerd operationeel systeem worden.",
    "From scattered tools": "Van losse tools",
    "Excel files, messages, calendars, and documents all live in different places.": "Excelbestanden, berichten, agenda’s en documenten staan allemaal op verschillende plekken.",
    "One operating dashboard": "Eén operationeel dashboard",
    "Projects, clients, tasks, documents, and approvals become visible in one place.": "Projecten, klanten, taken, documenten en goedkeuringen worden zichtbaar op één plek.",
    "Documents signed online": "Documenten online ondertekend",
    "Send agreements, collect approvals, and validate signatures with OTP email verification.": "Verstuur overeenkomsten, verzamel goedkeuringen en valideer handtekeningen met OTP-verificatie via e-mail.",
    "Team activity tracked clearly": "Teamactiviteit helder gevolgd",
    "Clock-in, clock-out, geolocation, and job status help managers see what is happening.": "In- en uitklokken, geolocatie en taakstatus helpen managers zien wat er gebeurt.",
    "Built around your workflow": "Gebouwd rond jouw workflow",
    "The system follows how your business actually works, not how generic software expects you to work.": "Het systeem volgt hoe je bedrijf echt werkt, niet hoe generieke software verwacht dat je werkt.",
    "Step": "Stap",
    "Prev": "Vorige",
    "Next": "Volgende",
    "Systems, web apps, and websites — shaped around your workflows.": "Systemen, webapps en websites — gevormd rond je workflows.",
    "From internal operations to customer-facing experiences — built with the same disciplined, premium execution.": "Van interne operaties tot klantgerichte ervaringen — gebouwd met dezelfde gedisciplineerde, premium uitvoering.",
    "Custom Systems": "Systemen op maat",
    "Centralized internal systems built around your real workflow — projects, clients, tasks, documents, and reporting in one place.": "Centrale interne systemen gebouwd rond je echte workflow — projecten, klanten, taken, documenten en rapportage op één plek.",
    "Less admin. More control.": "Minder administratie. Meer controle.",
    "Web Apps": "Webapps",
    "Custom web applications, portals, and dashboards designed for the way your users actually work.": "Webapplicaties, portalen en dashboards op maat ontworpen voor hoe je gebruikers echt werken.",
    "Built around real workflows, not generic templates.": "Gebouwd rond echte workflows, niet rond generieke templates.",
    "Websites": "Websites",
    "Premium websites that explain what you do clearly, build trust, and turn visitors into qualified conversations.": "Premium websites die duidelijk uitleggen wat je doet, vertrouwen opbouwen en bezoekers omzetten in waardevolle gesprekken.",
    "Clear message. Strong first impression.": "Duidelijke boodschap. Sterke eerste indruk.",
    "Learn more": "Meer info",
    "View all services": "Bekijk alle diensten",
    "Next step": "Volgende stap",
    "Start with a free audit.": "Begin met een gratis audit.",
    "We’ll map your workflow, identify where you’re losing time, and design the system your business actually needs.": "We brengen je workflow in kaart, vinden waar je tijd verliest en ontwerpen het systeem dat je bedrijf echt nodig heeft.",
    "Pages": "Pagina’s",
    "Engagements": "Samenwerkingen",
    "BrandLabel Systems builds custom internal systems, web apps, and websites for service businesses that need better structure, automation, and control.": "BrandLabel Systems bouwt interne systemen, webapps en websites op maat voor dienstverlenende bedrijven die meer structuur, automatisering en controle nodig hebben.",
    "Custom quote based on your needs. No fixed packages, no unnecessary software, no template thinking.": "Offerte op maat op basis van je behoeften. Geen vaste pakketten, geen overbodige software, geen template-denken.",
    "Custom systems, web apps, and websites built around your business.": "Systemen op maat, webapps en websites gebouwd rond je bedrijf.",
    "From internal tools to customer-facing websites, BrandLabel Systems designs digital solutions that replace scattered processes with clear, structured workflows.": "Van interne tools tot klantgerichte websites: BrandLabel Systems ontwerpt digitale oplossingen die losse processen vervangen door duidelijke, gestructureerde workflows.",
    "Custom-built · Designed in-house · Maintained for the long run": "Op maat gebouwd · Intern ontworpen · Onderhouden voor de lange termijn",
    "What we build": "Wat we bouwen",
    "Five disciplines, composed into one operating layer.": "Vijf disciplines samengebracht in één operationele laag.",
    "Operational command center": "Operationeel commandocentrum",
    "Modern client portals & internal apps": "Moderne klantenportalen en interne apps",
    "Premium, conversion-focused presence": "Premium aanwezigheid gericht op conversie",
    "Automation & Workflow Tools": "Automatisering en workflowtools",
    "Workflow orchestration": "Workfloworkestratie",
    "Maintenance & Improvements": "Onderhoud en verbeteringen",
    "Care, performance, evolution": "Zorg, performance, evolutie",
    "The thinking behind it": "De gedachte erachter",
    "Built around how your company actually works.": "Gebouwd rond hoe je bedrijf echt werkt.",
    "One workflow. One source of truth.": "Eén workflow. Eén bron van waarheid.",
    "From internal dashboards to customer-facing portals.": "Van interne dashboards tot klantenportalen.",
    "Systems that scale with the business.": "Systemen die meegroeien met je bedrijf.",
    "Begin": "Begin",
    "A quiet system, designed around your business.": "Een rustig systeem, ontworpen rond je bedrijf.",
    "Start with a free audit. We map your workflow, identify where time is lost, and propose the smallest, most precise system that delivers the largest change.": "Begin met een gratis audit. We brengen je workflow in kaart, vinden waar tijd verloren gaat en stellen het kleinste, meest precieze systeem voor dat de grootste verandering oplevert.",
    "Context": "Context",
    "The team had work moving faster than their tools.": "Het werk van het team ging sneller dan hun tools.",
    "A service team needed a clearer way to manage client work from first request to signed agreement, team scheduling, document delivery, and project tracking. The work was possible, but the operating model depended on too many places.": "Een serviceteam had een duidelijkere manier nodig om klantwerk te beheren: van eerste aanvraag tot ondertekende overeenkomst, teamplanning, documentlevering en projectopvolging. Het werk was mogelijk, maar het operationele model hing af van te veel plekken.",
    "One custom platform for a growing service team.": "Eén platform op maat voor een groeiend serviceteam.",
    "This demo case study shows how a team of around 10 people could replace scattered operational tools with one custom internal system. No real client data is included.": "Deze demo-case study toont hoe een team van ongeveer 10 mensen losse operationele tools kan vervangen door één intern systeem op maat. Er zijn geen echte klantgegevens opgenomen.",
    "Projects": "Projecten",
    "Clients": "Klanten",
    "Workflows": "Workflows",
    "Calendar": "Agenda",
    "Team tracking": "Teamtracking",
    "Documents, offers, agreements": "Documenten, offertes, overeenkomsten",
    "Client communication": "Klantcommunicatie",
    "System": "Systeem",
    "A centralized dashboard with the full operating flow.": "Een centraal dashboard met de volledige operationele flow.",
    "The custom system gave leadership, operations, and the team a shared view of what was happening, what needed approval, and what was ready for the next step.": "Het systeem op maat gaf leiding, operations en het team een gedeeld beeld van wat er gebeurde, wat goedkeuring nodig had en wat klaar was voor de volgende stap.",
    "Centralized dashboard": "Centraal dashboard",
    "Email templates": "E-mailsjablonen",
    "Online document sending": "Online documenten versturen",
    "OTP-based signature validation via email": "Handtekeningvalidatie via e-mail met OTP",
    "Read and approved confirmation": "Bevestiging gelezen en goedgekeurd",
    "Multilingual interface: EN, FR, NL, CN": "Meertalige interface: EN, FR, NL, CN",
    "Designed to reduce manual follow-up and make progress visible without adding another generic tool to the stack.": "Ontworpen om handmatige opvolging te verminderen en voortgang zichtbaar te maken zonder nog een generieke tool toe te voegen.",
    "Outcome": "Resultaat",
    "Less searching, fewer handoffs, clearer ownership.": "Minder zoeken, minder overdrachten, duidelijkere verantwoordelijkheid.",
    "The result is a more structured operating layer: clients, projects, documents, calendar activity, signatures, approvals, and team tracking all live in one place. Leadership gets visibility, the team gets clarity, and clients get a cleaner experience.": "Het resultaat is een meer gestructureerde operationele laag: klanten, projecten, documenten, agenda-activiteit, handtekeningen, goedkeuringen en teamtracking staan allemaal op één plek. Leiding krijgt zichtbaarheid, het team krijgt duidelijkheid en klanten krijgen een betere ervaring.",
    "Operations OS": "Operationeel OS",
    "BrandLabel control room": "BrandLabel controlekamer",
    "Live system": "Actief systeem",
    "Active projects": "Actieve projecten",
    "+18% this month": "+18% deze maand",
    "6 awaiting approval": "6 wachten op goedkeuring",
    "on schedule": "op schema",
    "OTP enabled": "OTP actief",
    "Workflow tracker": "Workflowtracker",
    "Today": "Vandaag",
    "09:00 Site crew": "09:00 Team op locatie",
    "11:30 Client call": "11:30 Klantgesprek",
    "15:00 Agreement": "15:00 Overeenkomst",
    "Operations, clarified.": "Operaties, helder gemaakt.",
    "One message. One experience.": "Eén boodschap. Eén ervaring.",
    "Signature": "Handtekening",
    "OTP sent": "OTP verzonden",
    "Service agreement · Acme Ltd.": "Serviceovereenkomst · Acme Ltd.",
    "Signer": "Ondertekenaar",
    "Signed": "Ondertekend",
    "Team activity": "Teamactiviteit",
    "Unit A": "Unit A",
    "On site": "Op locatie",
    "Clock-in 07:58": "Ingeklokt 07:58",
    "Geo fence OK": "Geofence OK",
    "Job #2841 · In progress": "Taak #2841 · Bezig",
    "Pipeline": "Pipeline",
    "Live": "Live",
    "Intake": "Intake",
    "Proposal": "Voorstel",
    "Contract": "Contract",
    "Kickoff": "Kick-off",
    "Docs": "Docs",
    "Lead": "Lead",
    "Quote": "Offerte",
    "Sign": "Tekenen",
    "Deliver": "Opleveren",
    "Approval": "Goedkeuring",
    "Quote awaiting review": "Offerte wacht op review",
    "Site visit today 14:00": "Plaatsbezoek vandaag 14:00",
    "OTP verified": "OTP geverifieerd",
    "Approvals": "Goedkeuringen",
    "3 pending": "3 open",
    "Quote · Meridian": "Offerte · Meridian",
    "Awaiting": "Wachtend",
    "PO · Site 04": "PO · Site 04",
    "Approved": "Goedgekeurd",
    "Contract · v3": "Contract · v3",
    "In review": "In review",
    "Review": "Review",
    "Schedule": "Planning",
    "Wed": "Wo.",
    "Wed · 14": "Wo. · 14",
    "14:00 · Site visit": "14:00 · Plaatsbezoek",
    "Meridian · Dock 4": "Meridian · Dock 4",
    "OTP OK": "OTP OK",
    "Master services · v3": "Master services · v3",
    "Signed · 09:42": "Ondertekend · 09:42",
    "Archive": "Archief",
    "3 of 4 · on track": "3 van 4 · op schema",
    "A private operating system for your business — projects, clients, approvals, scheduling, and signatures coordinated in one quiet, structured place.": "Een privé besturingssysteem voor je bedrijf — projecten, klanten, goedkeuringen, planning en handtekeningen gecoördineerd op één rustige, gestructureerde plek.",
    "Centralized projects, clients, tasks": "Gecentraliseerde projecten, klanten en taken",
    "Approval gates and audit trails": "Goedkeuringsstappen en audittrails",
    "Scheduling, signatures, documents": "Planning, handtekeningen, documenten",
    "Focused web applications shaped around how your users actually work — clean onboarding, secure access, and live collaboration without the noise.": "Gerichte webapplicaties rond hoe je gebruikers echt werken — duidelijke onboarding, veilige toegang en live samenwerking zonder ruis.",
    "Onboarding & secure sign-in": "Onboarding en veilige login",
    "Role-based dashboards": "Dashboards per rol",
    "Live updates and collaboration": "Live updates en samenwerking",
    "Editorial websites that explain what you do clearly, build trust at first glance, and turn the right visitors into qualified conversations.": "Redactionele websites die duidelijk uitleggen wat je doet, meteen vertrouwen opbouwen en de juiste bezoekers omzetten in waardevolle gesprekken.",
    "Editorial layouts and tone": "Redactionele layouts en toon",
    "Lead capture and analytics": "Leadcaptatie en analytics",
    "Brand-grade content systems": "Contentsystemen op merkniveau",
    "Connect the systems your team already uses, route work through the right hands, and let automations carry the repetitive load — quietly, in the background.": "Verbind de systemen die je team al gebruikt, stuur werk naar de juiste mensen en laat automatiseringen het repetitieve werk dragen, rustig op de achtergrond.",
    "Connected systems and triggers": "Verbonden systemen en triggers",
    "Routing and approval logic": "Routing en goedkeuringslogica",
    "Sync states across tools": "Statussen synchroniseren tussen tools",
    "Ongoing improvements after launch — uptime monitoring, performance tuning, security updates, and steady evolution as your business grows.": "Doorlopende verbeteringen na lancering — uptimebewaking, performance tuning, beveiligingsupdates en stabiele evolutie terwijl je bedrijf groeit.",
    "Uptime & performance": "Uptime en performance",
    "Security & dependency updates": "Beveiligings- en dependency-updates",
    "Issue tracking and roadmap": "Issue tracking en roadmap",
    "Build from scratch": "Vanaf nul bouwen",
    "Start with a clean foundation. We design and build a custom system shaped around how your business actually operates today.": "Begin met een schone basis. We ontwerpen en bouwen een systeem op maat rond hoe je bedrijf vandaag echt werkt.",
    "Start a new system →": "Start een nieuw systeem →",
    "Improve existing tools": "Bestaande tools verbeteren",
    "Refine what already works. We extend, restructure, and modernize the tools you have so they scale with your operations.": "Verfijn wat al werkt. We breiden je tools uit, herstructureren en moderniseren ze zodat ze meegroeien met je operaties.",
    "Refine your stack →": "Verfijn je stack →",
    "Maintain and evolve": "Onderhouden en evolueren",
    "Long-term care after launch. We monitor, update, and quietly evolve your system as your team and workflows grow.": "Langdurige zorg na lancering. We monitoren, updaten en laten je systeem rustig meegroeien met je team en workflows.",
    "Long-term partnership →": "Langetermijnpartnerschap →",
    "Request your free systems audit.": "Vraag je gratis systeemaudit aan.",
    "Tell us how your business currently works. We'll show you how to simplify it.": "Vertel ons hoe je bedrijf vandaag werkt. Wij tonen hoe je het kunt vereenvoudigen.",
    "Tell us how your business currently works. We&apos;ll show you how to simplify it.": "Vertel ons hoe je bedrijf vandaag werkt. Wij tonen hoe je het kunt vereenvoudigen.",
    "Your free audit includes:": "Je gratis audit omvat:",
    "Workflow review": "Workflowanalyse",
    "Tool analysis": "Toolanalyse",
    "System recommendation": "Systeemadvies",
    "No commitment required. We respond within 24 hours.": "Geen verplichting. We reageren binnen 24 uur.",
    "Name": "Naam",
    "Company": "Bedrijf",
    "Email": "E-mail",
    "Message": "Bericht",
    "Your name": "Je naam",
    "Company name": "Bedrijfsnaam",
    "What tools, workflows, or client processes need to be cleaned up?": "Welke tools, workflows of klantprocessen moeten worden opgeschoond?",
    "We received your request.": "We hebben je aanvraag ontvangen.",
    "We'll be in touch within 24 hours to schedule your free audit.": "We nemen binnen 24 uur contact op om je gratis audit te plannen.",
    "We&apos;ll be in touch within 24 hours to schedule your free audit.": "We nemen binnen 24 uur contact op om je gratis audit te plannen.",
    "We will get back to you within 24 hours.": "We nemen binnen 24 uur contact met je op.",
  },
};

const originalText = new WeakMap<Text, string>();
const translatedValues = new Set(
  Object.values(translations).flatMap((dictionary) => Object.values(dictionary)),
);
const reverseTranslations = new Map<string, string>(
  Object.values(translations).flatMap((dictionary) =>
    Object.entries(dictionary).map(([source, translated]) => [translated, source]),
  ),
);

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  languages: typeof languages;
  translate: (value: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function translateValue(language: Language, value: string) {
  if (language === "en") return value;
  return translations[language][value] ?? value;
}

function translateDom(language: Language) {
  document.documentElement.lang = language;

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName)) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalize(node.textContent ?? "")
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const textNodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  textNodes.forEach((node) => {
    const currentText = normalize(node.textContent ?? "");
    if (!currentText) return;
    const sourceText = reverseTranslations.get(currentText) ?? currentText;
    if (!originalText.has(node) || translatedValues.has(originalText.get(node) ?? "")) {
      originalText.set(node, sourceText);
    }
    const source = originalText.get(node) ?? sourceText;
    const translated = translateValue(language, source);
    if (node.textContent !== translated) node.textContent = translated;
  });

  document.querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title]").forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;
      const key = `i18nOriginal${attribute.replace(/[^a-z]/gi, "")}`;
      const dataset = element.dataset as Record<string, string | undefined>;
      const sourceValue = reverseTranslations.get(value) ?? value;
      if (!dataset[key] || translatedValues.has(dataset[key] ?? "")) {
        dataset[key] = sourceValue;
      }
      const source = dataset[key] ?? sourceValue;
      const translated = translateValue(language, source);
      if (element.getAttribute(attribute) !== translated) {
        element.setAttribute(attribute, translated);
      }
    });
  });
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "fr" || stored === "nl" || stored === "en") {
        setLanguageState(stored);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    let frame = window.requestAnimationFrame(() => translateDom(language));
    const observer = new MutationObserver(() => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => translateDom(language));
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["placeholder", "aria-label", "title"],
    });

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage(nextLanguage) {
        window.localStorage.setItem(STORAGE_KEY, nextLanguage);
        setLanguageState(nextLanguage);
      },
      languages,
      translate(valueToTranslate) {
        return translateValue(language, valueToTranslate);
      },
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
