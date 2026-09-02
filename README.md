# Prelegal

A SaaS platform for drafting common legal agreements through AI-powered chat. Users can describe what they need and the AI guides them through filling in the required fields, generating a ready-to-download document.

## Supported Documents

- Mutual NDA
- Cloud Service Agreement
- Design Partner Agreement
- Service Level Agreement
- Professional Services Agreement
- Partnership Agreement
- Software License Agreement
- Data Processing Agreement (GDPR)
- Pilot Agreement
- Business Associate Agreement (HIPAA)
- AI Addendum

## Quick Start

### Prerequisites
- Docker and Docker Compose installed

### Running the Application

**Mac/Linux:**
```bash
./scripts/start-mac.sh    # or start-linux.sh
```

**Windows:**
```powershell
.\scripts\start-windows.ps1
```

The application will be available at http://localhost:8000

### Stopping the Application

**Mac/Linux:**
```bash
./scripts/stop-mac.sh    # or stop-linux.sh
```

**Windows:**
```powershell
.\scripts\stop-windows.ps1
```

## Development

### Frontend Only
```bash
cd frontend
npm install
npm run dev
```
Available at http://localhost:3000

### Backend Only
```bash
cd backend
uv sync
uv run uvicorn main:app --reload
```
Available at http://localhost:8000

## Project Structure

```
prelegal/
  backend/         # FastAPI backend
  frontend/        # Next.js frontend
  scripts/         # Start/stop scripts
  templates/       # Legal document templates
```

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/signin` - Sign in and receive JWT cookie
- `POST /api/auth/signout` - Clear auth cookie
- `GET /api/auth/me` - Get current user info
- `GET /api/documents` - List user's saved documents (auth required)
- `POST /api/documents` - Save new document (auth required)
- `GET /api/documents/{id}` - Get specific document (auth required)
- `PUT /api/documents/{id}` - Update document (auth required)
- `DELETE /api/documents/{id}` - Delete document (auth required)
- `GET /api/chat/greeting` - Get AI greeting
- `POST /api/chat/message` - Send chat message and get AI response

## License

See LICENSE file.
