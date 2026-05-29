# 🌱 Civic Pulse
**A data-driven snapshot of how every neighborhood is holding up**

Civic Pulse is an AI-assisted platform that grades neighborhoods on environmental health, infrastructure quality, and day-to-day livability. Each neighborhood gets a **Green Score from 1 to 10**, calculated from more than a dozen sustainability signals stitched together from live data sources — paired with a chatbot that runs on low-carbon AI infrastructure so the tool itself stays light on emissions.

![Civic Pulse Hero](https://img.shields.io/badge/Status-Hackathon_MVP-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue) ![Python](https://img.shields.io/badge/Python-3.8+-green) ![React](https://img.shields.io/badge/React-18+-blue) ![FastAPI](https://img.shields.io/badge/FastAPI-Latest-teal)

## 🎯 What's inside

### 🗺️ **3D neighborhood map**
- Live 3D rendering powered by Mapbox GL JS
- Markers tinted by sustainability rating
- Layer toggles for individual metrics and hazard zones
- Smooth camera moves and hover overlays

### 🤖 **Low-carbon AI assistant (built on Tandemn)**
- Inference runs on Tandemn's energy-efficient stack
- **Live carbon-savings counter** — refurbished GPUs plus a cleaner grid
- Context-aware answers about specific neighborhoods and comparisons
- Per-message token usage shown alongside its emissions cost

### 📊 **How the score is built**
**Five category groups feed the final number:**
- **Environment**: air, vegetation cover, water
- **Infrastructure**: power reliability, road condition, cleanliness
- **Livability**: public safety, walkability, transit access
- **Sustainability**: renewables, recycling, circular practices
- **Disaster risk (LEWC)**: climate resilience and hazard exposure

### 🔍 **The data pipeline**
- **Aggregates across sources**: OpenStreetMap, public-sector APIs, real-time sensor feeds
- **Auto-detects neighborhoods** with geographic validation
- **AI-written explanations** through the Cerebras Cloud SDK
- **Plugs into live feeds**: weather, air quality, transit

## 🏗️ How it's wired together

```
Civic Pulse/
├── 🌐 Frontend (React + Vite)
│   ├── Mapbox GL map rendering
│   ├── Chatbot UI with running carbon counter
│   └── Adaptive layout for any screen size
├── ⚡ Backend (FastAPI)
│   ├── REST endpoints for everything
│   ├── Neighborhood data storage and serving
│   └── Bridge to the chatbot
├── 🤖 Scraper Agent (Python)
│   ├── Source aggregation
│   ├── Coordinate resolution
│   ├── Score computation
│   └── LLM-generated copy
└── 📊 Data processing pipeline
    ├── Real-time API plumbing
    ├── Normalization and weighting
    └── JSON export
```

## 🚀 Getting started

### Prerequisites
- **Node.js** 18+ with npm
- **Python** 3.8+ with pip
- A **Mapbox** account (free tier is fine)
- **API keys**: Tandemn, Cerebras, Google Maps (last one is optional)

### 1. Clone and install
```bash
git clone https://github.com/ak2106-47/Civic-Pulse
cd civic-pulse

# Backend dependencies
cd backend
pip install -r requirements.txt

# Frontend dependencies
cd ../frontend
npm install
```

### 2. Drop in your credentials
You'll need two config files:

**Backend `.env`:**
```env
TANDEMN_API_KEY=your_tandemn_key_here
CEREBRAS_API_KEY=your_cerebras_key_here
GOOGLE_API_KEY=your_google_key_here  # Optional
```

**Frontend `src/config.js`:**
```javascript
export const MAPBOX_TOKEN = 'your_mapbox_token_here';
export const API_BASE_URL = 'http://localhost:8000';
```

### 3. Boot up both services
```bash
# Backend — Terminal 1
cd backend
uvicorn main:app --reload --host 0.0.0.0 --port 8000

# Frontend — Terminal 2
cd frontend
npm run dev
```

Then point your browser at **http://localhost:5173** and start exploring Tempe.

## 🛠️ Working with the data pipeline

### Generate data for a new city
```bash
cd Scraper-Agent

# Option A — single command, full pipeline
python run_pipeline.py "Austin, TX"

# Option B — run each stage on its own
python neighbourhood_scraper.py "Boston, MA" --output-file boston_names.json
python enhanced_geocoder.py --input-file boston_names.json --output-file boston_coords.json --city-context "Boston, MA"
python data_exp_2.py --input-file boston_coords.json --output-file boston_sustainability.json
python data_exp.py --input-file boston_sustainability.json --output-file boston_personalized.json
python gs_converter.py --input-file boston_personalized.json --output-file boston_final.json
```

### Run it on Modal cloud
```bash
# Push the job to Modal for parallel processing
modal deploy modal_pipeline.py
modal run modal_pipeline.py --city-state "Seattle, WA"
```

### High-precision geocoding
```bash
# Resolves coordinates with Google Maps as a fallback
python Coordinate_finder.py "Denver, CO"
```

## 📊 API reference

### Main routes
- `GET /api/neighborhoods` — every neighborhood with its current scores
- `GET /api/neighborhoods/{id}` — full breakdown for one neighborhood
- `GET /api/neighborhoods/stats/summary` — citywide aggregates
- `POST /api/chatbot/message` — talk to the assistant
- `GET /api/lewc` — hazard and disaster-risk data
- `GET /api/definitions` — what each metric means

### Example response
```json
{
  "id": 1,
  "name": "Downtown Tempe",
  "coordinates": {"lat": 33.4255, "lng": -111.9400},
  "green_score": 8.2,
  "score_variables": {
    "air_quality": 7,
    "walkability": 9,
    "public_safety": 8,
    // ... and 10+ more
  }
}
```

## 🌱 The emissions story

### Where the savings come from
Civic Pulse keeps its own footprint low through several stacking effects:

- **🔋 Greener inference**: Tandemn's refurbished hardware cuts roughly **1.7 mg of CO₂ per token**
- **♻️ No new manufacturing**: skipping a single new H100 saves about 7,000 kg of embodied CO₂
- **🌞 Cleaner grid**: northern California renewables run at 0.15 kgCO₂e/kWh versus a commercial average of 0.43
- **📊 Receipts**: the chatbot shows a live running tally of avoided emissions

**Formula**: `Savings = Commercial_Embodied_Carbon + (Commercial_Power - Tandemn_Power) × Grid_Difference`

## 🔮 What's next

### Phase 1 — broaden the coverage (next sprint)
- [ ] **Any US city** through the automated pipeline
- [ ] **Better hazard modeling** with climate projections
- [ ] **What-if mode** for testing infrastructure changes
- [ ] **Community contributions** with verification

### Phase 2 — sharper analysis
- [ ] **Trend forecasting** for neighborhood trajectories
- [ ] **Policy recommendations** grounded in the data
- [ ] **Real estate tie-in** for property-value correlations
- [ ] **Native mobile apps** for iOS and Android

### Phase 3 — platform plays
- [ ] **Open API** for third-party tools
- [ ] **Planner dashboard** for cities and developers
- [ ] **International reach** with regional metric sets
- [ ] **Academic partnerships**

## 🤝 Contributing

Pull requests are welcome. The usual flow:

1. **Fork** this repo
2. **Branch** off main (`git checkout -b feature/amazing-feature`)
3. **Verify** that tests and data outputs still look right
4. **Commit** your work (`git commit -m 'Add amazing feature'`)
5. **Open** a Pull Request

### Style notes
- Python should pass PEP 8
- JavaScript should pass ESLint and Prettier
- Write commit messages that say what changed and why
- Spot-check every endpoint you touch
- Confirm the pipeline still produces clean output

## 📝 Build notes

### Hackathon-scope caveats
- **Single city**: tuned for Tempe, AZ
- **Some filler data**: a handful of metrics use averages or stand-ins
- **External rate limits**: data sources cap how often we can query
- **Mobile is responsive, not native**

### Production considerations
- **Map performance**: Mapbox GL holds 60fps with a few hundred markers
- **Caching layer**: Redis would help under serious traffic
- **Storage**: Postgres or MongoDB once you outgrow a single city's worth of JSON
- **Asset delivery**: a CDN for the static files

## 📜 License & credits

**MIT License** — fork it, ship it, remix it.

### Built with
- **Frontend**: React 18, Mapbox GL JS, Axios
- **Backend**: FastAPI, Uvicorn, Python 3.8+
- **AI**: Tandemn Cloud, Cerebras SDK
- **Data sources**: OpenStreetMap, Open-Meteo, public-sector APIs
- **Infra**: Modal (optional), deployable to Vercel or Netlify

### Thanks to
- The **OpenStreetMap** community for the geographic backbone
- **Tandemn** for low-emission AI infrastructure
- **Mapbox** for the rendering layer
- The **hackathon organizers** for the sustainability brief

---

**Built with ❤️ by Apoorva Kumar.**
