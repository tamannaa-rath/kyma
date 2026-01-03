export async function fetchPrediction(rms, kurtosis) {
  const res = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ rms, kurtosis }),
  });

  if (!res.ok) {
    throw new Error("Backend error");
  }

  return res.json();
}
