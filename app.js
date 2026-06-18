
const DEFAULT_DATA = {"tasks": [{"id": "d1-t1", "day": 1, "date": "2026-06-18", "time": "18:30", "title": "Create folder system", "category": "Foundation", "notes": "Drive folders: Brand, Content, Leads, Audits, Clients, Reports.", "done": false}, {"id": "d1-t2", "day": 1, "date": "2026-06-18", "time": "19:00", "title": "Create lead tracker", "category": "Foundation", "notes": "Columns: business, niche, Instagram, website, problem, DM sent, reply, audit, status.", "done": false}, {"id": "d1-t3", "day": 1, "date": "2026-06-18", "time": "19:35", "title": "Write core offer", "category": "Offer", "notes": "Free 5-minute growth audit for small UK brands.", "done": false}, {"id": "d1-t4", "day": 1, "date": "2026-06-18", "time": "20:00", "title": "Pick handles", "category": "Accounts", "notes": "@vergusongrowthlab and @bill.y2k.growth.", "done": false}, {"id": "d1-t5", "day": 1, "date": "2026-06-18", "time": "20:25", "title": "Draft bio", "category": "Brand", "notes": "Helping UK brands turn content into customers through ads, content, and better funnels.", "done": false}, {"id": "d1-t6", "day": 1, "date": "2026-06-18", "time": "20:50", "title": "Plan tomorrow", "category": "Planning", "notes": "Accounts, profile image, logo draft, first intro post.", "done": false}, {"id": "d2-t1", "day": 2, "date": "2026-06-19", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d2-t2", "day": 2, "date": "2026-06-19", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d2-t3", "day": 2, "date": "2026-06-19", "time": "18:30", "title": "Create social accounts", "category": "Accounts", "notes": "Instagram, TikTok, YouTube Shorts, LinkedIn profile.", "done": false}, {"id": "d2-t4", "day": 2, "date": "2026-06-19", "time": "19:15", "title": "Write bios", "category": "Brand", "notes": "Short, clear, growth/audit focused. Use same wording across accounts.", "done": false}, {"id": "d2-t5", "day": 2, "date": "2026-06-19", "time": "20:15", "title": "Reserve email", "category": "Operations", "notes": "Use Gmail first or domain email later: hello@vergusongrowthlab.com.", "done": false}, {"id": "d2-t6", "day": 2, "date": "2026-06-19", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, next action.", "done": false}, {"id": "d3-t1", "day": 3, "date": "2026-06-20", "time": "10:00", "title": "Plan brand sprint", "category": "Brand", "notes": "Pick final name, colours, vibe, and account visuals.", "done": false}, {"id": "d3-t2", "day": 3, "date": "2026-06-20", "time": "10:30", "title": "Logo draft", "category": "Brand", "notes": "VGL monogram + clean wordmark. Dark navy, white, blue accent.", "done": false}, {"id": "d3-t3", "day": 3, "date": "2026-06-20", "time": "12:30", "title": "Build colour system", "category": "Brand", "notes": "Dark navy base, blue neon accents, white text, green success accent.", "done": false}, {"id": "d3-t4", "day": 3, "date": "2026-06-20", "time": "14:00", "title": "Create post templates", "category": "Content", "notes": "Carousel cover, audit result card, case-study card, quote/hook slide.", "done": false}, {"id": "d3-t5", "day": 3, "date": "2026-06-20", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Save assets and update tracker.", "done": false}, {"id": "d4-t1", "day": 4, "date": "2026-06-21", "time": "10:00", "title": "Plan website page", "category": "Website", "notes": "One page only: hero, offer, proof, audit form, contact.", "done": false}, {"id": "d4-t2", "day": 4, "date": "2026-06-21", "time": "10:30", "title": "Draft landing page copy", "category": "Website", "notes": "Headline: Helping UK brands turn content into customers.", "done": false}, {"id": "d4-t3", "day": 4, "date": "2026-06-21", "time": "12:30", "title": "Create 5-point audit template", "category": "Audit", "notes": "Page, offer, content, ads, funnel. Simple scoring system.", "done": false}, {"id": "d4-t4", "day": 4, "date": "2026-06-21", "time": "14:00", "title": "Set up Loom audit flow", "category": "Audit", "notes": "Intro slide, screen share, 5 point structure, CTA.", "done": false}, {"id": "d4-t5", "day": 4, "date": "2026-06-21", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Update dashboard and prep Monday content.", "done": false}, {"id": "d5-t1", "day": 5, "date": "2026-06-22", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d5-t2", "day": 5, "date": "2026-06-22", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d5-t3", "day": 5, "date": "2026-06-22", "time": "18:30", "title": "First proof posts", "category": "Main Task", "notes": "Intro video; Website fix post; Post daily tracker", "done": false}, {"id": "d5-t4", "day": 5, "date": "2026-06-22", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d5-t5", "day": 5, "date": "2026-06-22", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d5-t6", "day": 5, "date": "2026-06-22", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d6-t1", "day": 6, "date": "2026-06-23", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d6-t2", "day": 6, "date": "2026-06-23", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d6-t3", "day": 6, "date": "2026-06-23", "time": "18:30", "title": "Ad research library", "category": "Main Task", "notes": "Save 20 ads; Write 5 hooks; Create swipe file", "done": false}, {"id": "d6-t4", "day": 6, "date": "2026-06-23", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d6-t5", "day": 6, "date": "2026-06-23", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d6-t6", "day": 6, "date": "2026-06-23", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d7-t1", "day": 7, "date": "2026-06-24", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d7-t2", "day": 7, "date": "2026-06-24", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d7-t3", "day": 7, "date": "2026-06-24", "time": "18:30", "title": "Lead list build", "category": "Main Task", "notes": "50 target leads; DM script; Follow-up script", "done": false}, {"id": "d7-t4", "day": 7, "date": "2026-06-24", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d7-t5", "day": 7, "date": "2026-06-24", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d7-t6", "day": 7, "date": "2026-06-24", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d8-t1", "day": 8, "date": "2026-06-25", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d8-t2", "day": 8, "date": "2026-06-25", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d8-t3", "day": 8, "date": "2026-06-25", "time": "18:30", "title": "Content batch", "category": "Main Task", "notes": "4 short videos; 2 carousel posts; Schedule posts", "done": false}, {"id": "d8-t4", "day": 8, "date": "2026-06-25", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d8-t5", "day": 8, "date": "2026-06-25", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d8-t6", "day": 8, "date": "2026-06-25", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d9-t1", "day": 9, "date": "2026-06-26", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d9-t2", "day": 9, "date": "2026-06-26", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d9-t3", "day": 9, "date": "2026-06-26", "time": "18:30", "title": "First outreach", "category": "Main Task", "notes": "Send 20 DMs; Record 2 Loom audits; Log replies", "done": false}, {"id": "d9-t4", "day": 9, "date": "2026-06-26", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d9-t5", "day": 9, "date": "2026-06-26", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d9-t6", "day": 9, "date": "2026-06-26", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d10-t1", "day": 10, "date": "2026-06-27", "time": "10:00", "title": "Plan sprint", "category": "Planning", "notes": "Pick one main outcome for the day.", "done": false}, {"id": "d10-t2", "day": 10, "date": "2026-06-27", "time": "10:30", "title": "Case study build deep work 1", "category": "Main Task", "notes": "2 deep breakdowns; Before/after graphics; Offer page polish", "done": false}, {"id": "d10-t3", "day": 10, "date": "2026-06-27", "time": "12:30", "title": "Case study build deep work 2", "category": "Main Task", "notes": "Finish the asset or case study.", "done": false}, {"id": "d10-t4", "day": 10, "date": "2026-06-27", "time": "14:00", "title": "Content batch", "category": "Content", "notes": "Record 3-4 videos or build carousel posts.", "done": false}, {"id": "d10-t5", "day": 10, "date": "2026-06-27", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Publish or schedule content and update tracker.", "done": false}, {"id": "d11-t1", "day": 11, "date": "2026-06-28", "time": "10:00", "title": "Plan sprint", "category": "Planning", "notes": "Pick one main outcome for the day.", "done": false}, {"id": "d11-t2", "day": 11, "date": "2026-06-28", "time": "10:30", "title": "System review deep work 1", "category": "Main Task", "notes": "Fix weak assets; Clean dashboard; Plan Phase 2", "done": false}, {"id": "d11-t3", "day": 11, "date": "2026-06-28", "time": "12:30", "title": "System review deep work 2", "category": "Main Task", "notes": "Finish the asset or case study.", "done": false}, {"id": "d11-t4", "day": 11, "date": "2026-06-28", "time": "14:00", "title": "Content batch", "category": "Content", "notes": "Record 3-4 videos or build carousel posts.", "done": false}, {"id": "d11-t5", "day": 11, "date": "2026-06-28", "time": "17:30", "title": "Post + tracker", "category": "Review", "notes": "Publish or schedule content and update tracker.", "done": false}, {"id": "d12-t1", "day": 12, "date": "2026-06-29", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d12-t2", "day": 12, "date": "2026-06-29", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d12-t3", "day": 12, "date": "2026-06-29", "time": "18:30", "title": "Outreach repeat", "category": "Main Task", "notes": "20 DMs; 2 Looms; 1 post", "done": false}, {"id": "d12-t4", "day": 12, "date": "2026-06-29", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d12-t5", "day": 12, "date": "2026-06-29", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d12-t6", "day": 12, "date": "2026-06-29", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d13-t1", "day": 13, "date": "2026-06-30", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d13-t2", "day": 13, "date": "2026-06-30", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d13-t3", "day": 13, "date": "2026-06-30", "time": "18:30", "title": "Proof + follow-up", "category": "Main Task", "notes": "Post case study; Follow up leads; Improve pitch", "done": false}, {"id": "d13-t4", "day": 13, "date": "2026-06-30", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d13-t5", "day": 13, "date": "2026-06-30", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d13-t6", "day": 13, "date": "2026-06-30", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}, {"id": "d14-t1", "day": 14, "date": "2026-07-01", "time": "07:30", "title": "Ad swipe + learning", "category": "Learning", "notes": "Save 3 ads and write why they work.", "done": false}, {"id": "d14-t2", "day": 14, "date": "2026-07-01", "time": "12:30", "title": "Lead capture", "category": "Leads", "notes": "Save 5 target businesses and note their weak point.", "done": false}, {"id": "d14-t3", "day": 14, "date": "2026-07-01", "time": "18:30", "title": "Phase 1 review", "category": "Main Task", "notes": "Score dashboard; Set Phase 2 targets; Package beta offer", "done": false}, {"id": "d14-t4", "day": 14, "date": "2026-07-01", "time": "19:15", "title": "Content creation", "category": "Content", "notes": "Create one proof post from today’s task.", "done": false}, {"id": "d14-t5", "day": 14, "date": "2026-07-01", "time": "20:15", "title": "Outreach / audit block", "category": "Outreach", "notes": "Send DMs, prep Looms, or record audit videos.", "done": false}, {"id": "d14-t6", "day": 14, "date": "2026-07-01", "time": "21:00", "title": "Daily review", "category": "Review", "notes": "Log posts, leads, DMs, audits, replies, and tomorrow’s next action.", "done": false}], "accounts": [{"id": "a1", "name": "Instagram agency account", "handle": "@vergusongrowthlab", "done": false}, {"id": "a2", "name": "TikTok agency account", "handle": "@vergusongrowthlab", "done": false}, {"id": "a3", "name": "YouTube Shorts account", "handle": "Verguson Growth Lab", "done": false}, {"id": "a4", "name": "Personal brand account", "handle": "@bill.y2k.growth", "done": false}, {"id": "a5", "name": "Google Drive folders", "handle": "Brand / Content / Leads / Audits / Clients / Reports", "done": false}, {"id": "a6", "name": "Loom setup", "handle": "Use for 5-minute audits", "done": false}, {"id": "a7", "name": "Meta Business Suite", "handle": "For later ad/client setup", "done": false}, {"id": "a8", "name": "TikTok Business Center", "handle": "For later ad/client setup", "done": false}], "content": [{"id": "c1", "title": "Building Verguson Growth Lab from zero", "type": "Journey", "status": "Idea"}, {"id": "c2", "title": "How I’d grow a local barber shop", "type": "Breakdown", "status": "Idea"}, {"id": "c3", "title": "Why this clothing brand isn’t selling", "type": "Audit", "status": "Idea"}, {"id": "c4", "title": "3 TikTok ads a gym should run", "type": "Ad ideas", "status": "Idea"}, {"id": "c5", "title": "Website mistakes killing trust", "type": "Education", "status": "Idea"}, {"id": "c6", "title": "Bad offer vs good offer", "type": "Education", "status": "Idea"}], "leads": [{"id": "l1", "business": "Example Gym", "niche": "Fitness", "problem": "Weak offer", "status": "New", "next": "Send audit DM"}, {"id": "l2", "business": "Example Clothing Brand", "niche": "Streetwear", "problem": "No conversion path", "status": "New", "next": "Record Loom"}], "notes": "", "stats": {"dms": 0, "looms": 0, "posts": 0, "replies": 0}};
const STORAGE_KEY = "vgl_phase1_dashboard_v1";

let data = loadData();
let currentView = "home";
let currentFilter = "today";
let editTarget = null;
let selectedDay = getTodayDay();

function loadData(){
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved) return JSON.parse(saved);
  } catch(e){}
  return structuredClone(DEFAULT_DATA);
}
function saveData(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  render();
}
function byId(id){return document.getElementById(id)}
function fmtDate(dateStr){
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", {weekday:"short", day:"numeric", month:"short"});
}
function getTodayDay(){
  const today = new Date().toISOString().slice(0,10);
  const found = data.tasks.find(t => t.date === today);
  return found ? found.day : 1;
}
function dayTasks(day){
  return data.tasks.filter(t => Number(t.day) === Number(day)).sort((a,b)=>a.time.localeCompare(b.time));
}
function overallProgress(){
  const total = data.tasks.length + data.accounts.length;
  const done = data.tasks.filter(t=>t.done).length + data.accounts.filter(a=>a.done).length;
  return total ? Math.round((done/total)*100) : 0;
}
function todayProgress(){
  const arr = dayTasks(selectedDay);
  const done = arr.filter(t=>t.done).length;
  return arr.length ? Math.round((done/arr.length)*100) : 0;
}
function switchView(v){
  currentView = v;
  document.querySelectorAll(".view").forEach(el=>el.classList.remove("active"));
  byId("view-"+v).classList.add("active");
  document.querySelectorAll(".tab").forEach(el=>el.classList.toggle("active", el.dataset.view === v));
  render();
}
function toggleTask(id){
  const t = data.tasks.find(x=>x.id===id);
  if(t){t.done=!t.done; saveData();}
}
function toggleAccount(id){
  const a = data.accounts.find(x=>x.id===id);
  if(a){a.done=!a.done; saveData();}
}
function escapeHtml(s){
  return String(s ?? "").replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
}
function renderTask(t){
  return `<div class="task ${t.done ? "done":""}">
    <button class="check" onclick="toggleTask('${t.id}')">✓</button>
    <div onclick="openTaskModal('${t.id}')">
      <div class="taskMeta">${escapeHtml(t.time)} • Day ${t.day} • ${escapeHtml(t.category)}</div>
      <div class="taskTitle">${escapeHtml(t.title)}</div>
      <div class="taskNotes">${escapeHtml(t.notes)}</div>
    </div>
    <button class="iconBtn" onclick="openTaskModal('${t.id}')">Edit</button>
  </div>`
}
function render(){
  byId("overallProgressText").textContent = overallProgress() + "%";
  byId("overallProgressBar").style.width = overallProgress() + "%";
  byId("todayProgressText").textContent = todayProgress() + "%";
  byId("todayProgressBar").style.width = todayProgress() + "%";
  byId("kpiTasks").textContent = data.tasks.filter(t=>t.done).length + "/" + data.tasks.length;
  byId("kpiAccounts").textContent = data.accounts.filter(a=>a.done).length + "/" + data.accounts.length;
  byId("kpiLeads").textContent = data.leads.length;
  byId("kpiPosts").textContent = data.stats.posts || 0;

  renderHome();
  renderCalendar();
  renderTasks();
  renderAssets();
  renderLeads();
  renderSettings();
}
function renderHome(){
  const arr = dayTasks(selectedDay);
  const date = arr[0]?.date || "2026-06-18";
  byId("todayTitle").textContent = `Day ${selectedDay} • ${fmtDate(date)}`;
  byId("todayTasks").innerHTML = arr.map(renderTask).join("") || "<p>No tasks for this day.</p>";
}
function renderCalendar(){
  const days = [...new Set(data.tasks.map(t=>t.day))].sort((a,b)=>a-b);
  byId("dayPicker").innerHTML = days.map(day => {
    const arr = dayTasks(day);
    const done = arr.filter(t=>t.done).length;
    const pct = arr.length ? Math.round(done/arr.length*100) : 0;
    return `<button class="dayCard" onclick="selectedDay=${day}; switchView('home')">
      <h4>Day ${day} <strong>${pct}%</strong></h4>
      <p>${fmtDate(arr[0].date)} • ${arr[0]?.title || "Phase 1"}</p>
      <div class="progressWrap" style="margin-top:10px"><div class="progressBar" style="width:${pct}%"></div></div>
    </button>`
  }).join("");
}
function setFilter(f){
  currentFilter = f;
  document.querySelectorAll(".chip").forEach(c=>c.classList.toggle("active", c.dataset.filter===f));
  renderTasks();
}
function renderTasks(){
  let arr = [...data.tasks];
  if(currentFilter === "today") arr = dayTasks(selectedDay);
  if(currentFilter === "open") arr = arr.filter(t=>!t.done);
  if(currentFilter === "done") arr = arr.filter(t=>t.done);
  if(currentFilter === "outreach") arr = arr.filter(t=>["Outreach","Leads","Audit"].includes(t.category));
  arr.sort((a,b)=> (a.date+a.time).localeCompare(b.date+b.time));
  byId("taskList").innerHTML = arr.map(renderTask).join("") || "<p class='installBox'>Nothing here. Suspiciously peaceful.</p>";
}
function renderAssets(){
  byId("accountList").innerHTML = data.accounts.map(a=>`
    <div class="task ${a.done ? "done":""}">
      <button class="check" onclick="toggleAccount('${a.id}')">✓</button>
      <div onclick="openAccountModal('${a.id}')">
        <div class="taskTitle">${escapeHtml(a.name)}</div>
        <div class="taskNotes">${escapeHtml(a.handle)}</div>
      </div>
      <button class="iconBtn" onclick="openAccountModal('${a.id}')">Edit</button>
    </div>`).join("");
  byId("contentList").innerHTML = data.content.map(c=>`
    <div class="listItem">
      <small>${escapeHtml(c.type)} • ${escapeHtml(c.status)}</small>
      <strong style="display:block;margin-top:5px">${escapeHtml(c.title)}</strong>
      <button class="iconBtn" style="margin-top:10px" onclick="deleteContent('${c.id}')">Delete</button>
    </div>`).join("");
}
function renderLeads(){
  byId("leadList").innerHTML = data.leads.map(l=>`
    <div class="listItem">
      <small>${escapeHtml(l.niche)} • ${escapeHtml(l.status)}</small>
      <strong style="display:block;margin-top:5px">${escapeHtml(l.business)}</strong>
      <p>Problem: ${escapeHtml(l.problem)}</p>
      <p>Next: ${escapeHtml(l.next)}</p>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="iconBtn" onclick="openLeadModal('${l.id}')">Edit</button>
        <button class="iconBtn" onclick="deleteLead('${l.id}')">Delete</button>
      </div>
    </div>`).join("");
}
function renderSettings(){
  byId("notes").value = data.notes || "";
  byId("dmsCount").textContent = data.stats.dms || 0;
  byId("loomsCount").textContent = data.stats.looms || 0;
  byId("postsCount").textContent = data.stats.posts || 0;
  byId("repliesCount").textContent = data.stats.replies || 0;
}
function openTaskModal(id=null){
  editTarget = id;
  const t = id ? data.tasks.find(x=>x.id===id) : {id:"t"+Date.now(), day:selectedDay, date:dayTasks(selectedDay)[0]?.date || "2026-06-18", time:"18:30", title:"", category:"Main Task", notes:"", done:false};
  byId("modalTitle").textContent = id ? "Edit task" : "Add task";
  byId("taskId").value = t.id;
  byId("taskDay").value = t.day;
  byId("taskDate").value = t.date;
  byId("taskTime").value = t.time;
  byId("taskCategory").value = t.category;
  byId("taskTitleInput").value = t.title;
  byId("taskNotesInput").value = t.notes;
  byId("taskModal").classList.add("open");
}
function saveTask(){
  const t = {
    id: byId("taskId").value || "t"+Date.now(),
    day: Number(byId("taskDay").value),
    date: byId("taskDate").value,
    time: byId("taskTime").value,
    category: byId("taskCategory").value,
    title: byId("taskTitleInput").value,
    notes: byId("taskNotesInput").value,
    done: data.tasks.find(x=>x.id===byId("taskId").value)?.done || false
  };
  const i = data.tasks.findIndex(x=>x.id===t.id);
  if(i>=0) data.tasks[i] = t; else data.tasks.push(t);
  closeModals(); saveData();
}
function deleteTask(){
  const id = byId("taskId").value;
  data.tasks = data.tasks.filter(t=>t.id!==id);
  closeModals(); saveData();
}
function openAccountModal(id=null){
  const a = id ? data.accounts.find(x=>x.id===id) : {id:"a"+Date.now(), name:"", handle:"", done:false};
  byId("accountId").value = a.id;
  byId("accountName").value = a.name;
  byId("accountHandle").value = a.handle;
  byId("accountModal").classList.add("open");
}
function saveAccount(){
  const a = {id:byId("accountId").value || "a"+Date.now(), name:byId("accountName").value, handle:byId("accountHandle").value, done:data.accounts.find(x=>x.id===byId("accountId").value)?.done || false};
  const i = data.accounts.findIndex(x=>x.id===a.id);
  if(i>=0) data.accounts[i] = a; else data.accounts.push(a);
  closeModals(); saveData();
}
function openLeadModal(id=null){
  const l = id ? data.leads.find(x=>x.id===id) : {id:"l"+Date.now(), business:"", niche:"", problem:"", status:"New", next:""};
  byId("leadId").value = l.id; byId("leadBusiness").value = l.business; byId("leadNiche").value = l.niche; byId("leadProblem").value = l.problem; byId("leadStatus").value = l.status; byId("leadNext").value = l.next;
  byId("leadModal").classList.add("open");
}
function saveLead(){
  const l = {id:byId("leadId").value || "l"+Date.now(), business:byId("leadBusiness").value, niche:byId("leadNiche").value, problem:byId("leadProblem").value, status:byId("leadStatus").value, next:byId("leadNext").value};
  const i = data.leads.findIndex(x=>x.id===l.id);
  if(i>=0) data.leads[i] = l; else data.leads.push(l);
  closeModals(); saveData();
}
function deleteLead(id){ data.leads = data.leads.filter(l=>l.id!==id); saveData(); }
function addContent(){
  const title = byId("newContentTitle").value.trim();
  if(!title) return;
  data.content.push({id:"c"+Date.now(), title, type:byId("newContentType").value, status:"Idea"});
  byId("newContentTitle").value="";
  saveData();
}
function deleteContent(id){ data.content = data.content.filter(c=>c.id!==id); saveData();}
function closeModals(){ document.querySelectorAll(".modal").forEach(m=>m.classList.remove("open"));}
function changeStat(key, delta){
  data.stats[key] = Math.max(0, (data.stats[key] || 0) + delta);
  saveData();
}
function saveNotes(){
  data.notes = byId("notes").value;
  saveData();
}
function exportData(){
  const blob = new Blob([JSON.stringify(data,null,2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "vgl-dashboard-backup.json"; a.click();
  URL.revokeObjectURL(url);
}
function importData(input){
  const file = input.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      data = JSON.parse(reader.result);
      saveData();
      alert("Imported. The machine lives again.");
    } catch(e) {
      alert("That file did not import. Technology has chosen violence.");
    }
  };
  reader.readAsText(file);
}
function resetData(){
  if(confirm("Reset everything back to the original Phase 1 plan?")) {
    localStorage.removeItem(STORAGE_KEY);
    data = structuredClone(DEFAULT_DATA);
    render();
  }
}
function installPrompt(){
  alert("On iPhone: open this dashboard in Safari, tap Share, then Add to Home Screen. For true offline PWA mode, host this folder on Netlify/GitHub Pages first.");
}
document.addEventListener("click", e=>{ if(e.target.classList.contains("modal")) closeModals(); });
if("serviceWorker" in navigator){
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(()=>{}));
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>switchView(btn.dataset.view)));
  document.querySelectorAll(".chip").forEach(btn=>btn.addEventListener("click",()=>setFilter(btn.dataset.filter)));
  byId("selectDay").value = selectedDay;
  byId("selectDay").addEventListener("change", e => { selectedDay = Number(e.target.value); render(); });
  render();
});
