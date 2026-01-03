from fastapi import FastAPI
from pydantic import BaseModel
from heuristic import compute_health, compute_severity
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SensorInput(BaseModel):
    rms: float
    kurtosis: float

@app.post("/predict")
def predict(data: SensorInput):
    health = compute_health(data.rms, data.kurtosis)
    severity = compute_severity(health)

    return {
        "health": health,
        "severity": severity
    }

@app.get("/")
def root():
    return {"status": "KYMA backend running"}
