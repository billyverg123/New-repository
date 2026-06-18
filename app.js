
const DEFAULT_DATA = {"version": "3.0.0", "tasks": [{"id": "d1-t1", "day": 1, "date": "2026-06-18", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d1-t2", "day": 1, "date": "2026-06-18", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d1-t3", "day": 1, "date": "2026-06-18", "time": "18:30", "title": "Setup command centre", "category": "Build", "notes": "Build the folder system, lead tracker, and core offer.", "done": false}, {"id": "d1-t4", "day": 1, "date": "2026-06-18", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d1-t5", "day": 1, "date": "2026-06-18", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d1-t6", "day": 1, "date": "2026-06-18", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d2-t1", "day": 2, "date": "2026-06-19", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d2-t2", "day": 2, "date": "2026-06-19", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d2-t3", "day": 2, "date": "2026-06-19", "time": "18:30", "title": "Accounts + handles", "category": "Build", "notes": "Create accounts, bios, and email setup.", "done": false}, {"id": "d2-t4", "day": 2, "date": "2026-06-19", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d2-t5", "day": 2, "date": "2026-06-19", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d2-t6", "day": 2, "date": "2026-06-19", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d3-t1", "day": 3, "date": "2026-06-20", "time": "10:00", "title": "Plan sprint", "category": "Planning", "notes": "Pick one main outcome for the day.", "done": false}, {"id": "d3-t2", "day": 3, "date": "2026-06-20", "time": "10:30", "title": "Brand kit sprint", "category": "Build", "notes": "Logo draft, colour system, and post templates.", "done": false}, {"id": "d3-t3", "day": 3, "date": "2026-06-20", "time": "12:30", "title": "Brand kit sprint", "category": "Build", "notes": "Logo draft, colour system, and post templates.", "done": false}, {"id": "d3-t4", "day": 3, "date": "2026-06-20", "time": "14:00", "title": "Content batch", "category": "Content", "notes": "Record 3-4 videos or build carousel posts.", "done": false}, {"id": "d3-t5", "day": 3, "date": "2026-06-20", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Publish or schedule content and update tracker.", "done": false}, {"id": "d4-t1", "day": 4, "date": "2026-06-21", "time": "10:00", "title": "Plan sprint", "category": "Planning", "notes": "Pick one main outcome for the day.", "done": false}, {"id": "d4-t2", "day": 4, "date": "2026-06-21", "time": "10:30", "title": "Website + audit", "category": "Build", "notes": "Landing page copy, audit template, and Loom flow.", "done": false}, {"id": "d4-t3", "day": 4, "date": "2026-06-21", "time": "12:30", "title": "Website + audit", "category": "Build", "notes": "Landing page copy, audit template, and Loom flow.", "done": false}, {"id": "d4-t4", "day": 4, "date": "2026-06-21", "time": "14:00", "title": "Content batch", "category": "Content", "notes": "Record 3-4 videos or build carousel posts.", "done": false}, {"id": "d4-t5", "day": 4, "date": "2026-06-21", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Publish or schedule content and update tracker.", "done": false}, {"id": "d5-t1", "day": 5, "date": "2026-06-22", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d5-t2", "day": 5, "date": "2026-06-22", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d5-t3", "day": 5, "date": "2026-06-22", "time": "18:30", "title": "First proof posts", "category": "Build", "notes": "Intro video, website fix post, and daily tracker.", "done": false}, {"id": "d5-t4", "day": 5, "date": "2026-06-22", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d5-t5", "day": 5, "date": "2026-06-22", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d5-t6", "day": 5, "date": "2026-06-22", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d6-t1", "day": 6, "date": "2026-06-23", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d6-t2", "day": 6, "date": "2026-06-23", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d6-t3", "day": 6, "date": "2026-06-23", "time": "18:30", "title": "Ad research library", "category": "Build", "notes": "Save 20 ads, write hooks, create swipe file.", "done": false}, {"id": "d6-t4", "day": 6, "date": "2026-06-23", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d6-t5", "day": 6, "date": "2026-06-23", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d6-t6", "day": 6, "date": "2026-06-23", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d7-t1", "day": 7, "date": "2026-06-24", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d7-t2", "day": 7, "date": "2026-06-24", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d7-t3", "day": 7, "date": "2026-06-24", "time": "18:30", "title": "Lead list build", "category": "Build", "notes": "Find 50 leads and write DM/follow-up scripts.", "done": false}, {"id": "d7-t4", "day": 7, "date": "2026-06-24", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d7-t5", "day": 7, "date": "2026-06-24", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d7-t6", "day": 7, "date": "2026-06-24", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d8-t1", "day": 8, "date": "2026-06-25", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d8-t2", "day": 8, "date": "2026-06-25", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d8-t3", "day": 8, "date": "2026-06-25", "time": "18:30", "title": "Content batch", "category": "Build", "notes": "Create 4 videos, 2 carousels, and schedule posts.", "done": false}, {"id": "d8-t4", "day": 8, "date": "2026-06-25", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d8-t5", "day": 8, "date": "2026-06-25", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d8-t6", "day": 8, "date": "2026-06-25", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d9-t1", "day": 9, "date": "2026-06-26", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d9-t2", "day": 9, "date": "2026-06-26", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d9-t3", "day": 9, "date": "2026-06-26", "time": "18:30", "title": "First outreach", "category": "Build", "notes": "Send 20 DMs, record 2 Loom audits, log replies.", "done": false}, {"id": "d9-t4", "day": 9, "date": "2026-06-26", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d9-t5", "day": 9, "date": "2026-06-26", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d9-t6", "day": 9, "date": "2026-06-26", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d10-t1", "day": 10, "date": "2026-06-27", "time": "10:00", "title": "Plan sprint", "category": "Planning", "notes": "Pick one main outcome for the day.", "done": false}, {"id": "d10-t2", "day": 10, "date": "2026-06-27", "time": "10:30", "title": "Case study build", "category": "Build", "notes": "Create 2 breakdowns and before/after graphics.", "done": false}, {"id": "d10-t3", "day": 10, "date": "2026-06-27", "time": "12:30", "title": "Case study build", "category": "Build", "notes": "Create 2 breakdowns and before/after graphics.", "done": false}, {"id": "d10-t4", "day": 10, "date": "2026-06-27", "time": "14:00", "title": "Content batch", "category": "Content", "notes": "Record 3-4 videos or build carousel posts.", "done": false}, {"id": "d10-t5", "day": 10, "date": "2026-06-27", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Publish or schedule content and update tracker.", "done": false}, {"id": "d11-t1", "day": 11, "date": "2026-06-28", "time": "10:00", "title": "Plan sprint", "category": "Planning", "notes": "Pick one main outcome for the day.", "done": false}, {"id": "d11-t2", "day": 11, "date": "2026-06-28", "time": "10:30", "title": "System review", "category": "Build", "notes": "Fix weak assets, clean dashboard, plan Phase 2.", "done": false}, {"id": "d11-t3", "day": 11, "date": "2026-06-28", "time": "12:30", "title": "System review", "category": "Build", "notes": "Fix weak assets, clean dashboard, plan Phase 2.", "done": false}, {"id": "d11-t4", "day": 11, "date": "2026-06-28", "time": "14:00", "title": "Content batch", "category": "Content", "notes": "Record 3-4 videos or build carousel posts.", "done": false}, {"id": "d11-t5", "day": 11, "date": "2026-06-28", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Publish or schedule content and update tracker.", "done": false}, {"id": "d12-t1", "day": 12, "date": "2026-06-29", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d12-t2", "day": 12, "date": "2026-06-29", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d12-t3", "day": 12, "date": "2026-06-29", "time": "18:30", "title": "Outreach repeat", "category": "Build", "notes": "Send 20 DMs, record 2 Looms, post once.", "done": false}, {"id": "d12-t4", "day": 12, "date": "2026-06-29", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d12-t5", "day": 12, "date": "2026-06-29", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d12-t6", "day": 12, "date": "2026-06-29", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d13-t1", "day": 13, "date": "2026-06-30", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d13-t2", "day": 13, "date": "2026-06-30", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d13-t3", "day": 13, "date": "2026-06-30", "time": "18:30", "title": "Proof + follow-up", "category": "Build", "notes": "Post case study, follow up leads, improve pitch.", "done": false}, {"id": "d13-t4", "day": 13, "date": "2026-06-30", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d13-t5", "day": 13, "date": "2026-06-30", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d13-t6", "day": 13, "date": "2026-06-30", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d14-t1", "day": 14, "date": "2026-07-01", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d14-t2", "day": 14, "date": "2026-07-01", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d14-t3", "day": 14, "date": "2026-07-01", "time": "18:30", "title": "Phase 1 review", "category": "Build", "notes": "Score dashboard, set Phase 2 targets, package beta offer.", "done": false}, {"id": "d14-t4", "day": 14, "date": "2026-07-01", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post or carousel from today’s task.", "done": false}, {"id": "d14-t5", "day": 14, "date": "2026-07-01", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d14-t6", "day": 14, "date": "2026-07-01", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}], "habits": [{"id": "h1", "name": "Ad Swipe", "emoji": "⚡", "target": "3 ads"}, {"id": "h2", "name": "Lead Capture", "emoji": "🎯", "target": "5 leads"}, {"id": "h3", "name": "Content", "emoji": "🎥", "target": "1 post"}, {"id": "h4", "name": "Outreach", "emoji": "📨", "target": "20 DMs"}, {"id": "h5", "name": "Vinted Listing", "emoji": "🏷️", "target": "list/relist"}, {"id": "h6", "name": "Daily Review", "emoji": "📊", "target": "log numbers"}], "habitChecks": {}, "vinted": [{"id": "v1", "code": "CH001", "group": "Main Pieces", "name": "Corteiz Rules The World hoodie", "bought": 15.93, "online": "£30-£50", "list": 45.0, "sold": 0, "status": "Not listed", "profitability": 78, "image": "", "notes": "Strong listing. One of the best first uploads."}, {"id": "v2", "code": "B001", "group": "Main Pieces", "name": "Stone textured polo top", "bought": 7.98, "online": "£12-£20", "list": 18.0, "sold": 0, "status": "Not listed", "profitability": 48, "image": "", "notes": "Price sensitive. Move clean with good photos."}, {"id": "v3", "code": "B002", "group": "Main Pieces", "name": "Corteiz boxy jersey", "bought": 7.98, "online": "£25-£45", "list": 42.0, "sold": 0, "status": "Not listed", "profitability": 86, "image": "", "notes": "Best main piece. Push first."}, {"id": "v4", "code": "B003", "group": "Main Pieces", "name": "Khaki print jumper", "bought": 7.98, "online": "£10-£16", "list": 16.0, "sold": 0, "status": "Not listed", "profitability": 42, "image": "", "notes": "Move fast or bundle."}, {"id": "v5", "code": "B004", "group": "Main Pieces", "name": "Nike joggers", "bought": 7.97, "online": "£12-£22", "list": 20.0, "sold": 0, "status": "Not listed", "profitability": 58, "image": "", "notes": "Solid filler item."}, {"id": "v6", "code": "C001", "group": "Main Pieces", "name": "Corteiz Guerrillaz cargos XS", "bought": 18.87, "online": "£35-£50", "list": 50.0, "sold": 0, "status": "Not listed", "profitability": 74, "image": "", "notes": "Strong branded piece."}, {"id": "v7", "code": "W001", "group": "Main Pieces", "name": "Corteiz waffle knit", "bought": 23.47, "online": "£30-£50", "list": 45.0, "sold": 0, "status": "Not listed", "profitability": 63, "image": "", "notes": "Good list value. Clean photos needed."}, {"id": "v8", "code": "P001", "group": "Main Pieces", "name": "Nike Jordan PSG tracksuit", "bought": 23.99, "online": "£18-£35", "list": 35.0, "sold": 0, "status": "Not listed", "profitability": 39, "image": "", "notes": "More price-sensitive."}, {"id": "v9", "code": "J001", "group": "Joblot", "name": "Navy Puma sweatshirt/hoodie", "bought": 1.78, "online": "£6-£14", "list": 14.0, "sold": 0, "status": "Not listed", "profitability": 55, "image": "", "notes": "Cheap mover."}, {"id": "v10", "code": "J002", "group": "Joblot", "name": "Black Nike Air swoosh sweatshirt", "bought": 1.78, "online": "£8-£18", "list": 18.0, "sold": 0, "status": "Not listed", "profitability": 72, "image": "", "notes": "Good joblot piece."}, {"id": "v11", "code": "J003", "group": "Joblot", "name": "Blue Justball-style sweatshirt", "bought": 1.78, "online": "£6-£12", "list": 10.0, "sold": 0, "status": "Not listed", "profitability": 38, "image": "", "notes": "Filler piece."}, {"id": "v12", "code": "J004", "group": "Joblot", "name": "Grey Adidas camo trefoil sweatshirt", "bought": 1.78, "online": "£10-£18", "list": 18.0, "sold": 0, "status": "Not listed", "profitability": 65, "image": "", "notes": "Strong joblot item."}, {"id": "v13", "code": "J005", "group": "Joblot", "name": "Grey Levi’s logo sweatshirt", "bought": 1.78, "online": "£5-£14", "list": 12.0, "sold": 0, "status": "Not listed", "profitability": 47, "image": "", "notes": "Medium mover."}, {"id": "v14", "code": "J006", "group": "Joblot", "name": "Black Adidas sweatshirt/hoodie", "bought": 1.78, "online": "£8-£15", "list": 14.0, "sold": 0, "status": "Not listed", "profitability": 52, "image": "", "notes": "Solid cheap mover."}, {"id": "v15", "code": "J007", "group": "Joblot", "name": "Yellow Puma hoodie/sweatshirt", "bought": 1.78, "online": "£8-£16", "list": 16.0, "sold": 0, "status": "Not listed", "profitability": 60, "image": "", "notes": "Bright colour, good visual."}, {"id": "v16", "code": "J008", "group": "Joblot", "name": "Black Adidas training top", "bought": 1.78, "online": "£8-£14", "list": 12.0, "sold": 0, "status": "Not listed", "profitability": 44, "image": "", "notes": "Cheap mover."}, {"id": "v17", "code": "J009", "group": "Joblot", "name": "Black/red Airness Y2K top", "bought": 1.78, "online": "£10-£18", "list": 16.0, "sold": 0, "status": "Not listed", "profitability": 64, "image": "", "notes": "Y2K angle."}, {"id": "v18", "code": "J010", "group": "Joblot", "name": "Red/white/black Adidas Originals sweatshirt", "bought": 1.78, "online": "£12-£22", "list": 20.0, "sold": 0, "status": "Not listed", "profitability": 71, "image": "", "notes": "Best later joblot item."}, {"id": "v19", "code": "J011", "group": "Joblot", "name": "Black performance long sleeve top", "bought": 1.78, "online": "£6-£10", "list": 9.0, "sold": 0, "status": "Not listed", "profitability": 25, "image": "", "notes": "Price to move."}, {"id": "v20", "code": "J012", "group": "Joblot", "name": "Light blue Lotto sweatshirt", "bought": 1.78, "online": "£8-£12", "list": 10.0, "sold": 0, "status": "Not listed", "profitability": 35, "image": "", "notes": "Lower-grade piece."}, {"id": "v21", "code": "J013", "group": "Joblot", "name": "Grey/black/orange Jako sports top", "bought": 1.78, "online": "£6-£10", "list": 8.0, "sold": 0, "status": "Not listed", "profitability": 22, "image": "", "notes": "Bundle or quick sale."}], "accounts": [{"id": "a1", "name": "Vinted account refresh", "handle": "Update bio, profile and shop note", "done": false}, {"id": "a2", "name": "bill.y2k content account", "handle": "Personal brand / dashboard / resale", "done": false}, {"id": "a3", "name": "Listing photo system", "handle": "White background, front/back, detail shots", "done": false}, {"id": "a4", "name": "Lead/content folders", "handle": "Brand / Content / Leads / Vinted / Reports", "done": false}], "content": [{"id": "c1", "title": "Reselling dashboard build from zero", "type": "Journey", "status": "Idea"}, {"id": "c2", "title": "Best pieces from the joblot", "type": "Vinted", "status": "Idea"}, {"id": "c3", "title": "How I price clothes for profit", "type": "Education", "status": "Idea"}], "leads": [{"id": "l1", "business": "Example Clothing Brand", "niche": "Streetwear", "problem": "No conversion path", "status": "New", "next": "Record Loom"}], "notes": "", "stats": {"dms": 0, "looms": 0, "posts": 0, "replies": 0}, "settings": {"selectedDay": 1}};
const STORAGE_KEY = "billy2k_dashboard_v3";
const OLD_KEYS = ["vgl_phase1_dashboard_v1"];
const APP_VERSION = "3.0.0";

let data = loadData();
let selectedDay = Number(data.settings?.selectedDay || 1);
let currentView = "dash";
let taskFilter = "day";
let vintedFilter = "all";

function clone(obj){return JSON.parse(JSON.stringify(obj));}
function id(x){return document.getElementById(x);}
function money(n){return "£" + Number(n || 0).toFixed(2).replace(".00","");}
function escapeHtml(s){return String(s ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));}
function fmtDate(dateStr){const d=new Date(dateStr+"T00:00:00");return d.toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"});}

function loadData(){
  let saved = null;
  try{ const raw = localStorage.getItem(STORAGE_KEY); if(raw) saved = JSON.parse(raw); }catch(e){}
  if(!saved){
    for(const k of OLD_KEYS){
      try{ const raw = localStorage.getItem(k); if(raw){ saved = JSON.parse(raw); break; } }catch(e){}
    }
  }
  const merged = clone(DEFAULT_DATA);
  if(saved && typeof saved === "object"){
    merged.tasks = Array.isArray(saved.tasks) ? saved.tasks : merged.tasks;
    merged.habits = Array.isArray(saved.habits) ? saved.habits : merged.habits;
    merged.habitChecks = saved.habitChecks || {};
    merged.accounts = Array.isArray(saved.accounts) ? saved.accounts : merged.accounts;
    merged.content = Array.isArray(saved.content) ? saved.content : merged.content;
    merged.leads = Array.isArray(saved.leads) ? saved.leads : merged.leads;
    merged.notes = saved.notes || "";
    merged.stats = {...merged.stats, ...(saved.stats||{})};
    merged.settings = {...merged.settings, ...(saved.settings||{})};
    // Keep vinted defaults unless saved vinted exists
    merged.vinted = Array.isArray(saved.vinted) ? saved.vinted : merged.vinted;
  }
  merged.version = APP_VERSION;
  return merged;
}
function saveData(){
  data.settings = data.settings || {};
  data.settings.selectedDay = selectedDay;
  data.version = APP_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render();
}
function switchView(view){
  currentView=view;
  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  id("view-"+view).classList.add("active");
  document.querySelectorAll(".nav button").forEach(b=>b.classList.toggle("active", b.dataset.view===view));
  render();
}
function dayTasks(day){return data.tasks.filter(t=>Number(t.day)===Number(day)).sort((a,b)=>String(a.time).localeCompare(String(b.time)));}
function allDays(){return [...new Set(data.tasks.map(t=>Number(t.day)))].sort((a,b)=>a-b);}
function dayPct(day){const arr=dayTasks(day);return arr.length?Math.round(arr.filter(t=>t.done).length/arr.length*100):0;}
function overallPct(){
  const total=data.tasks.length+data.accounts.length;
  const done=data.tasks.filter(t=>t.done).length+data.accounts.filter(a=>a.done).length;
  return total?Math.round(done/total*100):0;
}
function habitKey(h,d){return `${h}:${d}`;}
function habitOn(h,d){return !!data.habitChecks[habitKey(h,d)];}
function toggleHabit(h,d){data.habitChecks[habitKey(h,d)] = !data.habitChecks[habitKey(h,d)]; saveData();}
function habitPct(h){const days=allDays();return days.length?Math.round(days.filter(d=>habitOn(h.id,d)).length/days.length*100):0;}

function vProfit(item){
  const price = item.status==="Sold" && Number(item.sold)>0 ? Number(item.sold) : Number(item.list);
  return price - Number(item.bought || 0);
}
function vSoldRevenue(){return data.vinted.filter(i=>i.status==="Sold").reduce((a,i)=>a+Number(i.sold||0),0);}
function vSoldProfit(){return data.vinted.filter(i=>i.status==="Sold").reduce((a,i)=>a+(Number(i.sold||0)-Number(i.bought||0)),0);}
function vListedValue(){return data.vinted.filter(i=>i.status==="Listed").reduce((a,i)=>a+Number(i.list||0),0);}
function vPotentialProfit(){return data.vinted.reduce((a,i)=>a+(Number(i.list||0)-Number(i.bought||0)),0);}
function vTotalSpent(){return data.vinted.reduce((a,i)=>a+Number(i.bought||0),0);}

function render(){
  id("versionLabel").textContent = "v" + APP_VERSION;
  id("kpiScore").textContent = overallPct()+"%";
  id("kpiTasks").textContent = data.tasks.filter(t=>t.done).length+"/"+data.tasks.length;
  id("kpiSold").textContent = money(vSoldRevenue());
  id("kpiProfit").textContent = money(vSoldProfit());
  id("overallBar").style.width = overallPct()+"%";
  renderDash(); renderTracker(); renderTasks(); renderVinted(); renderLeads(); renderVault();
}
function renderDash(){
  const arr=dayTasks(selectedDay), pct=dayPct(selectedDay);
  id("selectedDayTitle").textContent = `DAY ${selectedDay} • ${arr[0]?fmtDate(arr[0].date):""}`;
  id("selectedDayPct").textContent = pct+"%";
  id("selectedDayBar").style.width = pct+"%";
  id("todayTaskList").innerHTML = arr.map(renderTask).join("") || "<p class='sub'>No tasks for this day.</p>";
  id("dayStrip").innerHTML = allDays().map(day=>`<button class="dayBtn ${day===selectedDay?"active":""}" onclick="selectedDay=${day}; saveData();"><strong>Day ${day}</strong><small>${dayTasks(day)[0]?fmtDate(dayTasks(day)[0].date):""}</small><small>${dayPct(day)}% complete</small></button>`).join("");
  const cats=["Learning","Leads","Build","Content","Outreach","Review"];
  id("analysisBars").innerHTML = cats.map(cat=>{
    const group=data.tasks.filter(t=>t.category===cat), done=group.filter(t=>t.done).length, pct=group.length?Math.round(done/group.length*100):0;
    return `<div class="miniBarRow"><div><div class="miniLabel"><span>${cat}</span><span>${done}/${group.length}</span></div><div class="analysisBar"><div class="analysisFill" style="width:${pct}%"></div></div></div><div class="miniPercent">${pct}%</div></div>`;
  }).join("");
}
function renderTracker(){
  const days=allDays();
  id("habitGrid").innerHTML = `<div></div>${days.map(d=>`<div class="weekHead">D${d}</div>`).join("")}${data.habits.map(h=>`<div class="habitName"><span>${escapeHtml(h.emoji)}</span><span>${escapeHtml(h.name)}</span></div>${days.map(day=>`<button class="habitCell ${habitOn(h.id,day)?"on":""}" onclick="toggleHabit('${h.id}',${day})">✓</button>`).join("")}`).join("")}`;
  id("habitAnalysis").innerHTML = data.habits.map(h=>{const pct=habitPct(h);return `<div class="miniBarRow"><div><div class="miniLabel"><span>${escapeHtml(h.emoji)} ${escapeHtml(h.name)}</span><span>${escapeHtml(h.target)}</span></div><div class="analysisBar"><div class="analysisFill" style="width:${pct}%"></div></div></div><div class="miniPercent">${pct}%</div></div>`;}).join("");
}
function setTaskFilter(f){taskFilter=f;document.querySelectorAll("#taskFilters .chip").forEach(c=>c.classList.toggle("active",c.dataset.filter===f));renderTasks();}
function renderTasks(){
  let arr=[...data.tasks];
  if(taskFilter==="day") arr=dayTasks(selectedDay);
  if(taskFilter==="open") arr=arr.filter(t=>!t.done);
  if(taskFilter==="done") arr=arr.filter(t=>t.done);
  if(taskFilter==="outreach") arr=arr.filter(t=>["Outreach","Leads","Audit"].includes(t.category));
  arr.sort((a,b)=>(String(a.date)+String(a.time)).localeCompare(String(b.date)+String(b.time)));
  id("taskList").innerHTML = arr.map(renderTask).join("") || "<p class='sub'>Nothing here.</p>";
}
function renderTask(t){
  return `<div class="task ${t.done?"done":""}"><button class="check" onclick="toggleTask('${t.id}')">✓</button><div onclick="openTaskModal('${t.id}')"><div class="taskMeta">${escapeHtml(t.time)} • DAY ${t.day} • ${escapeHtml(t.category)}</div><div class="taskTitle">${escapeHtml(t.title)}</div><div class="taskNotes">${escapeHtml(t.notes)}</div></div><button class="editBtn" onclick="openTaskModal('${t.id}')">Edit</button></div>`;
}
function toggleTask(tid){const t=data.tasks.find(x=>x.id===tid);if(t){t.done=!t.done;saveData();}}

function setVintedFilter(f){vintedFilter=f;document.querySelectorAll("#vintedFilters .chip").forEach(c=>c.classList.toggle("active",c.dataset.filter===f));renderVinted();}
function renderVinted(){
  id("vSpent").textContent = money(vTotalSpent());
  id("vListed").textContent = money(vListedValue());
  id("vSold").textContent = money(vSoldRevenue());
  id("vProfit").textContent = money(vSoldProfit());
  id("vPotential").textContent = money(vPotentialProfit());
  id("vCounts").textContent = `${data.vinted.filter(i=>i.status==="Listed").length} listed • ${data.vinted.filter(i=>i.status==="Sold").length} sold • ${data.vinted.length} total`;
  let arr=[...data.vinted];
  if(vintedFilter==="listed") arr=arr.filter(i=>i.status==="Listed");
  if(vintedFilter==="sold") arr=arr.filter(i=>i.status==="Sold");
  if(vintedFilter==="main") arr=arr.filter(i=>i.group==="Main Pieces");
  if(vintedFilter==="joblot") arr=arr.filter(i=>i.group==="Joblot");
  arr.sort((a,b)=>String(a.code).localeCompare(String(b.code)));
  id("vintedList").innerHTML = arr.map(renderVintedItem).join("") || "<p class='sub'>No items in this filter.</p>";
}
function renderVintedItem(i){
  const profit = vProfit(i);
  const pct = Math.max(0, Math.min(100, Number(i.profitability||0)));
  const statusClass = String(i.status).replace(" ","");
  const img = i.image ? `<img src="${escapeHtml(i.image)}" alt="">` : `<span>${escapeHtml(i.code)}<br>${escapeHtml(i.group)}</span>`;
  return `<div class="itemCard">
    <div class="itemInner">
      <div class="itemImg">${img}</div>
      <div>
        <div class="itemHead">
          <div><div class="itemCode">${escapeHtml(i.code)} |</div><div class="itemName">${escapeHtml(i.name)}</div></div>
          <div class="statusPill ${statusClass}">${escapeHtml(i.status)}</div>
        </div>
        <div class="priceGrid">
          <div class="priceBox"><small>Bought</small><strong>${money(i.bought)}</strong></div>
          <div class="priceBox"><small>Online</small><strong>${escapeHtml(i.online)}</strong></div>
          <div class="priceBox"><small>${i.status==="Sold"?"Sold":"List"}</small><strong>${i.status==="Sold" && Number(i.sold)>0 ? money(i.sold) : money(i.list)}</strong></div>
          <div class="priceBox"><small>Profit</small><strong class="profit">${money(profit)}</strong></div>
        </div>
        <div style="margin-top:10px">
          <div class="miniLabel"><span>Profitability</span><span>${pct}%</span></div>
          <div class="progressWrap"><div class="progressBar" style="width:${pct}%"></div></div>
        </div>
      </div>
    </div>
    <div class="itemActions">
      <button class="secondary" onclick="setItemStatus('${i.id}','Listed')">Listed</button>
      <button class="primary" onclick="quickSell('${i.id}')">Sold</button>
      <button class="ghost" onclick="setItemStatus('${i.id}','Not listed')">Reset</button>
      <button class="ghost" onclick="openVintedModal('${i.id}')">Edit</button>
    </div>
  </div>`;
}
function setItemStatus(vid,status){const item=data.vinted.find(x=>x.id===vid);if(item){item.status=status;if(status==="Sold" && !Number(item.sold)) item.sold=Number(item.list||0);saveData();}}
function quickSell(vid){const item=data.vinted.find(x=>x.id===vid);if(!item)return;const val=prompt("Sold price?", Number(item.sold||item.list||0).toFixed(2));if(val===null)return;item.sold=Number(val)||0;item.status="Sold";saveData();}

function renderLeads(){
  id("dmsCount").textContent=data.stats.dms||0; id("loomsCount").textContent=data.stats.looms||0; id("postsCount").textContent=data.stats.posts||0; id("repliesCount").textContent=data.stats.replies||0;
  id("leadList").innerHTML = data.leads.map(l=>`<div class="listItem"><small>${escapeHtml(l.niche)} • ${escapeHtml(l.status)}</small><strong>${escapeHtml(l.business)}</strong><p>Problem: ${escapeHtml(l.problem)}</p><p>Next: ${escapeHtml(l.next)}</p><div style="display:flex;gap:8px;margin-top:10px"><button class="ghost" onclick="openLeadModal('${l.id}')">Edit</button><button class="ghost" onclick="deleteLead('${l.id}')">Delete</button></div></div>`).join("") || "<p class='sub'>No leads yet.</p>";
}
function renderVault(){
  id("accountList").innerHTML=data.accounts.map(a=>`<div class="task ${a.done?"done":""}"><button class="check" onclick="toggleAccount('${a.id}')">✓</button><div onclick="openAccountModal('${a.id}')"><div class="taskTitle">${escapeHtml(a.name)}</div><div class="taskNotes">${escapeHtml(a.handle)}</div></div><button class="editBtn" onclick="openAccountModal('${a.id}')">Edit</button></div>`).join("");
  id("contentList").innerHTML=data.content.map(c=>`<div class="listItem"><small>${escapeHtml(c.type)} • ${escapeHtml(c.status)}</small><strong>${escapeHtml(c.title)}</strong><button class="ghost" style="margin-top:10px" onclick="deleteContent('${c.id}')">Delete</button></div>`).join("");
  id("notes").value=data.notes||"";
}
function toggleAccount(aid){const a=data.accounts.find(x=>x.id===aid);if(a){a.done=!a.done;saveData();}}
function changeStat(k,d){data.stats[k]=Math.max(0,Number(data.stats[k]||0)+d);saveData();}
function saveNotes(){data.notes=id("notes").value;localStorage.setItem(STORAGE_KEY,JSON.stringify(data));}

function openTaskModal(tid=null){const t=tid?data.tasks.find(x=>x.id===tid):{id:"t"+Date.now(),day:selectedDay,date:dayTasks(selectedDay)[0]?.date||"2026-06-18",time:"18:30",title:"",category:"Build",notes:"",done:false};id("taskModalTitle").textContent=tid?"Edit task":"Add task";id("taskId").value=t.id;id("taskTitleInput").value=t.title;id("taskNotesInput").value=t.notes;id("taskDate").value=t.date;id("taskTime").value=t.time;id("taskDay").value=t.day;id("taskCategory").value=t.category;id("taskModal").classList.add("open");}
function saveTask(){const tid=id("taskId").value||"t"+Date.now();const old=data.tasks.find(t=>t.id===tid);const t={id:tid,title:id("taskTitleInput").value||"Untitled task",notes:id("taskNotesInput").value,date:id("taskDate").value,time:id("taskTime").value,day:Number(id("taskDay").value||selectedDay),category:id("taskCategory").value||"Build",done:old?.done||false};const ix=data.tasks.findIndex(x=>x.id===tid);if(ix>=0)data.tasks[ix]=t;else data.tasks.push(t);closeModals();saveData();}
function deleteTask(){const tid=id("taskId").value;data.tasks=data.tasks.filter(t=>t.id!==tid);closeModals();saveData();}

function openVintedModal(vid=null){const i=vid?data.vinted.find(x=>x.id===vid):{id:"v"+Date.now(),code:"",group:"Main Pieces",name:"",bought:0,online:"",list:0,sold:0,status:"Not listed",profitability:50,image:"",notes:""};id("vintedModalTitle").textContent=vid?"Edit Vinted item":"Add Vinted item";id("vId").value=i.id;id("vCode").value=i.code;id("vGroup").value=i.group;id("vName").value=i.name;id("vBought").value=i.bought;id("vOnline").value=i.online;id("vList").value=i.list;id("vSoldPrice").value=i.sold||"";id("vStatus").value=i.status;id("vProfitability").value=i.profitability;id("vImage").value=i.image||"";id("vNotes").value=i.notes||"";id("vintedModal").classList.add("open");}
function saveVintedItem(){const vid=id("vId").value||"v"+Date.now();const item={id:vid,code:id("vCode").value||"NEW",group:id("vGroup").value,name:id("vName").value||"Untitled item",bought:Number(id("vBought").value||0),online:id("vOnline").value,list:Number(id("vList").value||0),sold:Number(id("vSoldPrice").value||0),status:id("vStatus").value,profitability:Number(id("vProfitability").value||0),image:id("vImage").value,notes:id("vNotes").value};const ix=data.vinted.findIndex(x=>x.id===vid);if(ix>=0)data.vinted[ix]=item;else data.vinted.push(item);closeModals();saveData();}
function deleteVintedItem(){const vid=id("vId").value;data.vinted=data.vinted.filter(i=>i.id!==vid);closeModals();saveData();}

function openLeadModal(lid=null){const l=lid?data.leads.find(x=>x.id===lid):{id:"l"+Date.now(),business:"",niche:"",problem:"",status:"New",next:""};id("leadId").value=l.id;id("leadBusiness").value=l.business;id("leadNiche").value=l.niche;id("leadProblem").value=l.problem;id("leadStatus").value=l.status;id("leadNext").value=l.next;id("leadModal").classList.add("open");}
function saveLead(){const lid=id("leadId").value||"l"+Date.now();const l={id:lid,business:id("leadBusiness").value||"Untitled lead",niche:id("leadNiche").value,problem:id("leadProblem").value,status:id("leadStatus").value,next:id("leadNext").value};const ix=data.leads.findIndex(x=>x.id===lid);if(ix>=0)data.leads[ix]=l;else data.leads.push(l);closeModals();saveData();}
function deleteLead(lid){data.leads=data.leads.filter(l=>l.id!==lid);saveData();}
function openAccountModal(aid=null){const a=aid?data.accounts.find(x=>x.id===aid):{id:"a"+Date.now(),name:"",handle:"",done:false};id("accountId").value=a.id;id("accountName").value=a.name;id("accountHandle").value=a.handle;id("accountModal").classList.add("open");}
function saveAccount(){const aid=id("accountId").value||"a"+Date.now();const old=data.accounts.find(x=>x.id===aid);const a={id:aid,name:id("accountName").value||"Untitled setup item",handle:id("accountHandle").value,done:old?.done||false};const ix=data.accounts.findIndex(x=>x.id===aid);if(ix>=0)data.accounts[ix]=a;else data.accounts.push(a);closeModals();saveData();}
function addContent(){const title=id("newContentTitle").value.trim();if(!title)return;data.content.push({id:"c"+Date.now(),title,type:id("newContentType").value,status:"Idea"});id("newContentTitle").value="";saveData();}
function deleteContent(cid){data.content=data.content.filter(c=>c.id!==cid);saveData();}
function closeModals(){document.querySelectorAll(".modal").forEach(m=>m.classList.remove("open"));}
function exportData(){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="billy2k-dashboard-backup-v3.json";a.click();URL.revokeObjectURL(url);}
function importData(input){const file=input.files[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const imported=JSON.parse(reader.result);data={...clone(DEFAULT_DATA),...imported,version:APP_VERSION};saveData();alert("Imported. The resale empire lives again.");}catch(e){alert("Import failed. The file offended the machine.");}};reader.readAsText(file);}
function resetData(){if(confirm("Reset to fresh bill.y2k v3 dashboard?")){localStorage.removeItem(STORAGE_KEY);data=clone(DEFAULT_DATA);selectedDay=1;render();}}

document.addEventListener("click",e=>{if(e.target.classList.contains("modal"))closeModals();});
document.addEventListener("DOMContentLoaded",()=>{
  document.querySelectorAll(".nav button").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
  document.querySelectorAll("#taskFilters .chip").forEach(c=>c.addEventListener("click",()=>setTaskFilter(c.dataset.filter)));
  document.querySelectorAll("#vintedFilters .chip").forEach(c=>c.addEventListener("click",()=>setVintedFilter(c.dataset.filter)));
  id("quickDaySelect").innerHTML=allDays().map(d=>`<option value="${d}">Day ${d}</option>`).join("");
  id("quickDaySelect").value=selectedDay;
  id("quickDaySelect").addEventListener("change",e=>{selectedDay=Number(e.target.value);saveData();});
  if("serviceWorker" in navigator){navigator.serviceWorker.register("./service-worker.js").catch(()=>{});}
  render();
});
